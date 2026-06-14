var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_node_http = require("node:http");
var import_node_net = require("node:net");
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);

// fifa-sync-core.ts
var SPORTV_URL = "https://ge.globo.com/sportv/";
var normalizeText = (value) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]/g, "").toUpperCase();
var getLocalizedDescription = (entries, language) => {
  if (!entries || entries.length === 0) return "";
  const normalizedLanguage = language.toLowerCase();
  return entries.find(
    (entry) => entry.Locale?.toLowerCase().startsWith(normalizedLanguage)
  )?.Description || entries[0]?.Description || "";
};
var getWatchSourceUrl = (source) => source.Url || source.TvChannelUrl || source.IOsUrl || source.AndroidUrl || "";
var getNormalizedWatchSourceUrl = (source) => {
  const link = getWatchSourceUrl(source);
  const haystack = `${source.Name} ${link}`.toLowerCase();
  if (haystack.includes("sportv")) {
    return SPORTV_URL;
  }
  return link;
};
var classifyBroadcasterType = (source) => {
  const haystack = `${source.Name} ${getWatchSourceUrl(source)}`.toLowerCase();
  if (haystack.includes("youtube") || haystack.includes("caze")) {
    return "YOUTUBE";
  }
  if (haystack.includes("globoplay") || haystack.includes("getv") || haystack.includes("ge-tv") || haystack.includes("nsports") || haystack.includes("fifa+")) {
    return "STREAM";
  }
  if (haystack.includes("sportv")) {
    return "TV PAGA";
  }
  if (haystack.includes("globo") || haystack.includes("sbt")) {
    return "TV ABERTA";
  }
  return "STREAM";
};
var getBroadcasterColor = (type) => {
  switch (type) {
    case "TV ABERTA":
      return "#00e476";
    case "TV PAGA":
      return "#ffd700";
    case "YOUTUBE":
      return "#ed2939";
    case "STREAM":
    case "STREAM PAGO":
      return "#38bdf8";
    default:
      return "#94a3b8";
  }
};
var normalizeBroadcasters = (sources) => {
  if (!sources || sources.length === 0) return [];
  const seen = /* @__PURE__ */ new Set();
  const broadcasters = [];
  for (const source of sources) {
    const link = getNormalizedWatchSourceUrl(source);
    if (!source.Name || !link) continue;
    const dedupeKey = `${normalizeText(source.Name)}::${link}`;
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);
    const type = classifyBroadcasterType(source);
    broadcasters.push({
      id: source.IdChannel,
      name: source.Name,
      type,
      logoUrl: source.Logo || void 0,
      iconColor: getBroadcasterColor(type),
      link
    });
  }
  return broadcasters;
};
var findCalendarMatch = (localMatch, calendarMatches, language) => {
  const localKickoff = new Date(localMatch.kickoffTimestamp).getTime();
  const localHomeCode = normalizeText(localMatch.teamA.code);
  const localAwayCode = normalizeText(localMatch.teamB.code);
  const localHomeName = normalizeText(localMatch.teamA.name);
  const localAwayName = normalizeText(localMatch.teamB.name);
  const exactMatch = calendarMatches.find((calendarMatch) => {
    const fifaKickoff = new Date(calendarMatch.Date).getTime();
    const homeCode = normalizeText(calendarMatch.Home?.Abbreviation || "");
    const awayCode = normalizeText(calendarMatch.Away?.Abbreviation || "");
    return fifaKickoff === localKickoff && homeCode === localHomeCode && awayCode === localAwayCode;
  });
  if (exactMatch) return exactMatch;
  const nameAndDateMatch = calendarMatches.find((calendarMatch) => {
    const fifaKickoff = new Date(calendarMatch.Date).getTime();
    const homeName = normalizeText(
      getLocalizedDescription(calendarMatch.Home?.TeamName, language)
    );
    const awayName = normalizeText(
      getLocalizedDescription(calendarMatch.Away?.TeamName, language)
    );
    return fifaKickoff === localKickoff && homeName === localHomeName && awayName === localAwayName;
  });
  if (nameAndDateMatch) return nameAndDateMatch;
  return calendarMatches.find((calendarMatch) => {
    const homeCode = normalizeText(calendarMatch.Home?.Abbreviation || "");
    const awayCode = normalizeText(calendarMatch.Away?.Abbreviation || "");
    return homeCode === localHomeCode && awayCode === localAwayCode;
  });
};
var getMatchStatusFromFifa = (localMatch, fifaMatch) => {
  if (fifaMatch.MatchStatus === 0) {
    return "FINISHED";
  }
  if (fifaMatch.MatchStatus === 1) {
    return "PRE_GAME";
  }
  if (typeof fifaMatch.MatchStatus === "number") {
    return "LIVE";
  }
  const kickoffTime = new Date(fifaMatch.Date).getTime();
  if (!Number.isNaN(kickoffTime) && kickoffTime > Date.now()) {
    return "PRE_GAME";
  }
  if (typeof fifaMatch.HomeTeamScore === "number" || typeof fifaMatch.AwayTeamScore === "number") {
    return "LIVE";
  }
  return localMatch.status;
};
var getScoreFromFifa = (fifaMatch) => {
  if (typeof fifaMatch.HomeTeamScore === "number" && typeof fifaMatch.AwayTeamScore === "number") {
    return {
      teamA: fifaMatch.HomeTeamScore,
      teamB: fifaMatch.AwayTeamScore
    };
  }
  return void 0;
};
var getScoreFromLiveFifa = (fifaMatch) => {
  const homeScore = typeof fifaMatch.HomeTeam?.Score === "number" ? fifaMatch.HomeTeam.Score : fifaMatch.HomeTeamScore;
  const awayScore = typeof fifaMatch.AwayTeam?.Score === "number" ? fifaMatch.AwayTeam.Score : fifaMatch.AwayTeamScore;
  if (typeof homeScore === "number" && typeof awayScore === "number") {
    return {
      teamA: homeScore,
      teamB: awayScore
    };
  }
  return void 0;
};
var getPeriodSortValue = (period) => {
  if (typeof period !== "number") {
    return Number.MAX_SAFE_INTEGER;
  }
  return period;
};
var getMinuteSortValue = (minute) => {
  if (!minute) {
    return Number.MAX_SAFE_INTEGER;
  }
  const values = Array.from(minute.matchAll(/\d+/g)).map(([value]) => Number(value));
  if (values.length === 0) {
    return Number.MAX_SAFE_INTEGER;
  }
  return values.reduce((total, value) => total + value, 0);
};
var getBestPlayerName = (entries, fallback = "") => getLocalizedDescription(entries, "pt") || fallback;
var buildPlayerNameMap = (team) => {
  const players = team?.Players || [];
  return new Map(
    players.map((player) => [
      player.IdPlayer,
      getBestPlayerName(player.ShortName, getBestPlayerName(player.PlayerName, "Jogador"))
    ])
  );
};
var getIncidentsFromLiveFifa = (fifaMatch) => {
  const homePlayerNames = buildPlayerNameMap(fifaMatch.HomeTeam);
  const awayPlayerNames = buildPlayerNameMap(fifaMatch.AwayTeam);
  const buildGoalIncidents = (goals, playerNames, team) => (goals || []).map((goal, index) => {
    const playerName = goal.IdPlayer ? playerNames.get(goal.IdPlayer) || "Jogador" : "Jogador";
    return {
      id: `${team}-goal-${goal.IdGoal || `${goal.Minute || "sem-minuto"}-${index}`}`,
      time: goal.Minute || "--'",
      type: "GOAL",
      text: `${playerName} marcou.`,
      team,
      period: goal.Period
    };
  });
  const buildBookingIncidents = (bookings, playerNames, team) => (bookings || []).filter((booking) => booking.Card === 1 || booking.Card === 2).map((booking, index) => {
    const playerName = booking.IdPlayer ? playerNames.get(booking.IdPlayer) || "Jogador" : "Jogador";
    const isRedCard = booking.Card === 2;
    return {
      id: `${team}-card-${booking.IdEvent || `${booking.Minute || "sem-minuto"}-${index}`}`,
      time: booking.Minute || "--'",
      type: isRedCard ? "RED_CARD" : "YELLOW_CARD",
      text: isRedCard ? `${playerName} foi expulso.` : `${playerName} recebeu amarelo.`,
      team,
      period: booking.Period
    };
  });
  const buildSubstitutionIncidents = (substitutions, playerNames, team) => (substitutions || []).map((substitution, index) => {
    const playerOffName = getBestPlayerName(
      substitution.PlayerOffName,
      substitution.IdPlayerOff ? playerNames.get(substitution.IdPlayerOff) || "Jogador" : "Jogador"
    ) || "Jogador";
    const playerOnName = getBestPlayerName(
      substitution.PlayerOnName,
      substitution.IdPlayerOn ? playerNames.get(substitution.IdPlayerOn) || "Jogador" : "Jogador"
    ) || "Jogador";
    return {
      id: `${team}-sub-${substitution.IdEvent || `${substitution.Minute || "sem-minuto"}-${index}`}`,
      time: substitution.Minute || "--'",
      type: "SUBSTITUTION",
      text: `Sai ${playerOffName}, entra ${playerOnName}.`,
      team,
      period: substitution.Period
    };
  });
  return [
    ...buildGoalIncidents(fifaMatch.HomeTeam?.Goals, homePlayerNames, "A"),
    ...buildGoalIncidents(fifaMatch.AwayTeam?.Goals, awayPlayerNames, "B"),
    ...buildBookingIncidents(fifaMatch.HomeTeam?.Bookings, homePlayerNames, "A"),
    ...buildBookingIncidents(fifaMatch.AwayTeam?.Bookings, awayPlayerNames, "B"),
    ...buildSubstitutionIncidents(
      fifaMatch.HomeTeam?.Substitutions,
      homePlayerNames,
      "A"
    ),
    ...buildSubstitutionIncidents(
      fifaMatch.AwayTeam?.Substitutions,
      awayPlayerNames,
      "B"
    )
  ].sort((a, b) => {
    const periodDiff = getPeriodSortValue(a.period) - getPeriodSortValue(b.period);
    if (periodDiff !== 0) {
      return periodDiff;
    }
    return getMinuteSortValue(a.time) - getMinuteSortValue(b.time);
  }).map(({ period: _period, ...incident }) => incident);
};
var buildMatchStateEntry = (localMatch, fifaMatch, fifaLiveMatch) => {
  if (!fifaMatch) {
    return {
      status: localMatch.status,
      score: localMatch.score,
      source: "fallback",
      note: "Dados oficiais da FIFA indispon\xEDveis para esta partida no momento; exibindo o estado local.",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  const fifaScore = getScoreFromFifa(fifaMatch);
  const liveScore = fifaLiveMatch ? getScoreFromLiveFifa(fifaLiveMatch) : void 0;
  const incidents = fifaLiveMatch ? getIncidentsFromLiveFifa(fifaLiveMatch) : void 0;
  const status = fifaLiveMatch ? getMatchStatusFromFifa(localMatch, {
    ...fifaMatch,
    Date: fifaLiveMatch.Date || fifaMatch.Date,
    MatchStatus: fifaLiveMatch.MatchStatus ?? fifaMatch.MatchStatus,
    HomeTeamScore: liveScore?.teamA ?? fifaMatch.HomeTeamScore,
    AwayTeamScore: liveScore?.teamB ?? fifaMatch.AwayTeamScore
  }) : getMatchStatusFromFifa(localMatch, fifaMatch);
  return {
    status,
    score: liveScore || fifaScore || (status === "PRE_GAME" ? void 0 : localMatch.score),
    matchTime: status === "LIVE" && fifaLiveMatch?.MatchTime ? fifaLiveMatch.MatchTime : void 0,
    incidents: incidents && incidents.length > 0 ? incidents : void 0,
    source: "fifa",
    note: fifaLiveMatch ? incidents && incidents.length > 0 ? "Placar, status e lances oficiais da FIFA com atualiza\xE7\xE3o ao vivo." : "Placar e status oficiais da FIFA com atualiza\xE7\xE3o ao vivo." : "Placar e status oficiais da FIFA.",
    fifaMatchId: fifaMatch.IdMatch,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};

// src/matches.json
var matches_default = [
  {
    id: "usa-par-2026",
    teamA: {
      name: "ESTADOS UNIDOS",
      code: "USA",
      flagSvg: "usa",
      primaryColor: "#b22234",
      secondaryColor: "#3c3b6e",
      group: "Grupo D",
      lineup: [
        { id: "us1", name: "M. Turner", number: 1, position: "GK", x: 50, y: 88, club: "Nottingham Forest" },
        { id: "us2", name: "S. Dest", number: 2, position: "DF", x: 15, y: 70, club: "PSV" },
        { id: "us3", name: "C. Richards", number: 3, position: "DF", x: 38, y: 75, club: "Crystal Palace" },
        { id: "us4", name: "T. Ream", number: 13, position: "DF", x: 62, y: 75, club: "Charlotte FC" },
        { id: "us5", name: "A. Robinson", number: 5, position: "DF", x: 85, y: 70, club: "Fulham" },
        { id: "us6", name: "T. Adams", number: 4, position: "MF", x: 30, y: 45, club: "Bournemouth" },
        { id: "us7", name: "W. McKennie", number: 8, position: "MF", x: 50, y: 48, club: "Juventus" },
        { id: "us8", name: "G. Reyna", number: 7, position: "MF", x: 70, y: 45, club: "Nottingham Forest" },
        { id: "us9", name: "T. Weah", number: 21, position: "FW", x: 15, y: 22, club: "Juventus" },
        { id: "us10", name: "F. Balogun", number: 20, position: "FW", x: 50, y: 28, club: "Monaco" },
        { id: "us11", name: "C. Pulisic", number: 10, position: "FW", x: 85, y: 22, club: "Milan" }
      ]
    },
    teamB: {
      name: "PARAGUAI",
      code: "PAR",
      flagSvg: "paraguay",
      primaryColor: "#d52b1e",
      secondaryColor: "#0038a8",
      group: "Grupo D",
      lineup: [
        { id: "py1", name: "C. Coronel", number: 1, position: "GK", x: 50, y: 12, club: "New York Red Bulls" },
        { id: "py2", name: "R. Rojas", number: 2, position: "DF", x: 15, y: 30, club: "River Plate" },
        { id: "py3", name: "G. Gomez", number: 15, position: "DF", x: 38, y: 25, club: "Palmeiras" },
        { id: "py4", name: "O. Alderete", number: 3, position: "DF", x: 62, y: 25, club: "Getafe" },
        { id: "py5", name: "J. Alonso", number: 6, position: "DF", x: 85, y: 30, club: "Atl\xE9tico Mineiro" },
        { id: "py6", name: "A. Cubas", number: 14, position: "MF", x: 30, y: 50, club: "Vancouver Whitecaps" },
        { id: "py7", name: "M. Villasanti", number: 23, position: "MF", x: 50, y: 45, club: "Gr\xEAmio" },
        { id: "py8", name: "M. Almir\xF3n", number: 10, position: "MF", x: 70, y: 50, club: "Newcastle" },
        { id: "py9", name: "R. Sosa", number: 19, position: "FW", x: 15, y: 75, club: "Nottingham Forest" },
        { id: "py10", name: "A. Sanabria", number: 9, position: "FW", x: 50, y: 85, club: "Torino" },
        { id: "py11", name: "J. Enciso", number: 17, position: "FW", x: 85, y: 75, club: "Brighton" }
      ]
    },
    stadiumName: "Est\xE1dio de Los Angeles",
    city: "LOS ANGELES",
    stageName: "Group Stage",
    kickoffTime: "22:00",
    kickoffDate: "12 Junho, 2026",
    kickoffTimestamp: "2026-06-12T22:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021458",
    status: "FINISHED",
    score: {
      teamA: 4,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "getv9", type: "STREAM", name: "GETV", iconColor: "#00e476", link: "https://globoplay.globo.com/categorias/ge-tv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png" },
      { id: "gb9", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz9", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "ns9", type: "STREAM", name: "NSPORTS", iconColor: "#00e476", link: "https://nsports.com.br/n/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/892.png" },
      { id: "sbt9", type: "TV ABERTA", name: "SBT", iconColor: "#05ff85", link: "https://www.sbt.com.br/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/901.png" },
      { id: "g9", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s9", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  },
  {
    id: "mex-rsa-2026",
    teamA: {
      name: "M\xC9XICO",
      code: "MEX",
      flagSvg: "mexico",
      primaryColor: "#006847",
      secondaryColor: "#ce1126",
      group: "Grupo A",
      lineup: [
        { id: "mx1", name: "L. Malag\xF3n", number: 1, position: "GK", x: 50, y: 88, club: "Club Am\xE9rica" },
        { id: "mx2", name: "J. S\xE1nchez", number: 2, position: "DF", x: 15, y: 70, club: "Cruz Azul" },
        { id: "mx3", name: "C. Montes", number: 3, position: "DF", x: 38, y: 75, club: "Lokomotiv Moscou" },
        { id: "mx4", name: "J. V\xE1squez", number: 5, position: "DF", x: 62, y: 75, club: "Genoa" },
        { id: "mx5", name: "J. Gallardo", number: 23, position: "DF", x: 85, y: 70, club: "Monterrey" },
        { id: "mx6", name: "E. \xC1lvarez", number: 4, position: "MF", x: 30, y: 45, club: "West Ham" },
        { id: "mx7", name: "L. Ch\xE1vez", number: 24, position: "MF", x: 50, y: 48, club: "D\xEDnamo Moscou" },
        { id: "mx8", name: "O. Pineda", number: 17, position: "MF", x: 70, y: 45, club: "AEK Atenas" },
        { id: "mx9", name: "U. Antuna", number: 15, position: "FW", x: 15, y: 22, club: "Tigres" },
        { id: "mx10", name: "S. Gim\xE9nez", number: 11, position: "FW", x: 50, y: 28, club: "Milan" },
        { id: "mx11", name: "H. Lozano", number: 22, position: "FW", x: 85, y: 22, club: "San Diego FC" }
      ]
    },
    teamB: {
      name: "\xC1FRICA DO SUL",
      code: "RSA",
      flagSvg: "southafrica",
      primaryColor: "#007a4d",
      secondaryColor: "#ffb612",
      group: "Grupo A",
      lineup: [
        { id: "sa1", name: "R. Williams", number: 1, position: "GK", x: 50, y: 12, club: "Mamelodi Sundowns" },
        { id: "sa2", name: "K. Mudau", number: 2, position: "DF", x: 15, y: 30, club: "Mamelodi Sundowns" },
        { id: "sa3", name: "S. Ngezana", number: 21, position: "DF", x: 38, y: 25, club: "FCSB" },
        { id: "sa4", name: "M. Mvala", number: 14, position: "DF", x: 62, y: 25, club: "Mamelodi Sundowns" },
        { id: "sa5", name: "A. Modiba", number: 6, position: "DF", x: 85, y: 30, club: "Mamelodi Sundowns" },
        { id: "sa6", name: "T. Mokoena", number: 4, position: "MF", x: 30, y: 50, club: "Mamelodi Sundowns" },
        { id: "sa7", name: "S. Sithole", number: 13, position: "MF", x: 50, y: 45, club: "Tondela" },
        { id: "sa8", name: "P. Tau", number: 10, position: "MF", x: 70, y: 50, club: "Qatar SC" },
        { id: "sa9", name: "E. Mokwana", number: 17, position: "FW", x: 15, y: 75, club: "Esp\xE9rance" },
        { id: "sa10", name: "L. Foster", number: 9, position: "FW", x: 50, y: 85, club: "Burnley" },
        { id: "sa11", name: "T. Zwane", number: 11, position: "FW", x: 85, y: 75, club: "Mamelodi Sundowns" }
      ]
    },
    stadiumName: "Est\xE1dio da Cidade do M\xE9xico",
    city: "CIDADE DO M\xC9XICO",
    stageName: "Group Stage",
    kickoffTime: "16:00",
    kickoffDate: "11 Junho, 2026",
    kickoffTimestamp: "2026-06-11T16:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021443",
    status: "FINISHED",
    score: {
      teamA: 2,
      teamB: 0
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "getv7", type: "STREAM", name: "GETV", iconColor: "#00e476", link: "https://globoplay.globo.com/categorias/ge-tv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png" },
      { id: "gb7", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz7", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "ns7", type: "STREAM", name: "NSPORTS", iconColor: "#00e476", link: "https://nsports.com.br/n/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/892.png" },
      { id: "sbt7", type: "TV ABERTA", name: "SBT", iconColor: "#05ff85", link: "https://www.sbt.com.br/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/901.png" },
      { id: "g7", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s7", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  },
  {
    id: "kor-cze-2026",
    teamA: {
      name: "COR\xC9IA DO SUL",
      code: "KOR",
      flagSvg: "southkorea",
      primaryColor: "#cd2e3a",
      secondaryColor: "#0047a0",
      group: "Grupo A",
      lineup: [
        { id: "kr1", name: "Jo Hyeon-woo", number: 1, position: "GK", x: 50, y: 88, club: "Ulsan HD" },
        { id: "kr2", name: "Seol Young-woo", number: 22, position: "DF", x: 15, y: 70, club: "FK Crvena zvezda" },
        { id: "kr3", name: "Kim Min-jae", number: 4, position: "DF", x: 38, y: 75, club: "Bayern Munique" },
        { id: "kr4", name: "Jung Seung-hyun", number: 15, position: "DF", x: 62, y: 75, club: "Al-Wasl" },
        { id: "kr5", name: "Lee Myung-jae", number: 3, position: "DF", x: 85, y: 70, club: "Ulsan HD" },
        { id: "kr6", name: "Hwang In-beom", number: 6, position: "MF", x: 30, y: 45, club: "Feyenoord" },
        { id: "kr7", name: "Park Yong-woo", number: 5, position: "MF", x: 50, y: 48, club: "Al-Ain" },
        { id: "kr8", name: "Lee Kang-in", number: 18, position: "MF", x: 70, y: 45, club: "PSG" },
        { id: "kr9", name: "Hwang Hee-chan", number: 11, position: "FW", x: 15, y: 22, club: "Wolverhampton" },
        { id: "kr10", name: "Cho Gue-sung", number: 9, position: "FW", x: 50, y: 28, club: "Midtjylland" },
        { id: "kr11", name: "Son Heung-min", number: 7, position: "FW", x: 85, y: 22, club: "Tottenham" }
      ]
    },
    teamB: {
      name: "TCH\xC9QUIA",
      code: "CZE",
      flagSvg: "czechia",
      primaryColor: "#d7141a",
      secondaryColor: "#11457e",
      group: "Grupo A",
      lineup: [
        { id: "cz1", name: "J. Stanek", number: 1, position: "GK", x: 50, y: 12, club: "Slavia Praga" },
        { id: "cz2", name: "V. Coufal", number: 5, position: "DF", x: 15, y: 30, club: "West Ham" },
        { id: "cz3", name: "T. Holes", number: 3, position: "DF", x: 38, y: 25, club: "Slavia Praga" },
        { id: "cz4", name: "L. Krejci", number: 7, position: "DF", x: 62, y: 25, club: "Girona" },
        { id: "cz5", name: "D. Jur\xE1sek", number: 13, position: "DF", x: 85, y: 30, club: "Hoffenheim" },
        { id: "cz6", name: "T. Soucek", number: 22, position: "MF", x: 30, y: 50, club: "West Ham" },
        { id: "cz7", name: "A. Bar\xE1k", number: 8, position: "MF", x: 50, y: 45, club: "Kasimpasa" },
        { id: "cz8", name: "L. Provod", number: 14, position: "MF", x: 70, y: 50, club: "Slavia Praga" },
        { id: "cz9", name: "A. Hlo\u017Eek", number: 9, position: "FW", x: 15, y: 75, club: "Hoffenheim" },
        { id: "cz10", name: "P. Schick", number: 10, position: "FW", x: 50, y: 85, club: "Bayer Leverkusen" },
        { id: "cz11", name: "V. Cerny", number: 17, position: "FW", x: 85, y: 75, club: "Rangers" }
      ]
    },
    stadiumName: "Est\xE1dio de Guadalajara",
    city: "GUADALAJARA",
    stageName: "Group Stage",
    kickoffTime: "23:00",
    kickoffDate: "11 Junho, 2026",
    kickoffTimestamp: "2026-06-11T23:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021441",
    status: "FINISHED",
    score: {
      teamA: 2,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "cz8", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" }
    ]
  },
  {
    id: "can-bih-2026",
    teamA: {
      name: "CANAD\xC1",
      code: "CAN",
      flagSvg: "canada",
      primaryColor: "#ff0000",
      secondaryColor: "#ffffff",
      group: "Grupo B",
      lineup: [
        { id: "ca1", name: "M. Cr\xE9peau", number: 1, position: "GK", x: 50, y: 88, club: "LAFC" },
        { id: "ca2", name: "A. Johnston", number: 2, position: "DF", x: 15, y: 70, club: "Celtic" },
        { id: "ca3", name: "D. Cornelius", number: 5, position: "DF", x: 38, y: 75, club: "Panathinaikos" },
        { id: "ca4", name: "M. Bombito", number: 4, position: "DF", x: 62, y: 75, club: "Nice" },
        { id: "ca5", name: "A. Davies", number: 19, position: "DF", x: 85, y: 70, club: "Bayern Munique" },
        { id: "ca6", name: "S. Eust\xE1quio", number: 7, position: "MF", x: 30, y: 45, club: "Porto" },
        { id: "ca7", name: "I. Kon\xE9", number: 18, position: "MF", x: 50, y: 48, club: "Marselha" },
        { id: "ca8", name: "J. Osorio", number: 21, position: "MF", x: 70, y: 45, club: "Toronto FC" },
        { id: "ca9", name: "T. Buchanan", number: 11, position: "FW", x: 15, y: 22, club: "Villarreal" },
        { id: "ca10", name: "J. David", number: 20, position: "FW", x: 50, y: 28, club: "Juventus" },
        { id: "ca11", name: "C. Larin", number: 17, position: "FW", x: 85, y: 22, club: "Club Am\xE9rica" }
      ]
    },
    teamB: {
      name: "B\xD3SNIA E HERZEGOVINA",
      code: "BIH",
      flagSvg: "bosnia",
      primaryColor: "#002395",
      secondaryColor: "#fecb00",
      group: "Grupo B",
      lineup: [
        { id: "bh1", name: "N. Vasilj", number: 1, position: "GK", x: 50, y: 12, club: "Midtjylland" },
        { id: "bh2", name: "A. Dedi\u0107", number: 2, position: "DF", x: 85, y: 30, club: "Benfica" },
        { id: "bh3", name: "T. \u0160unji\u0107", number: 5, position: "DF", x: 62, y: 25, club: "Cagliari" },
        { id: "bh4", name: "D. Had\u017Eikaduni\u0107", number: 14, position: "DF", x: 38, y: 25, club: "FC K\xF6ln" },
        { id: "bh5", name: "S. Kola\u0161inac", number: 20, position: "DF", x: 15, y: 30, club: "Atalanta" },
        { id: "bh6", name: "G. Cimirot", number: 8, position: "MF", x: 35, y: 50, club: "Standard de Li\xE8ge" },
        { id: "bh7", name: "R. Kruni\u0107", number: 16, position: "MF", x: 65, y: 50, club: "Fenerbah\xE7e" },
        { id: "bh8", name: "N. Bajrami", number: 10, position: "MF", x: 50, y: 62, club: "Sassuolo" },
        { id: "bh9", name: "E. Demirovi\u0107", number: 9, position: "FW", x: 15, y: 68, club: "Stuttgart" },
        { id: "bh10", name: "H. Tabakovi\u0107", number: 29, position: "FW", x: 85, y: 68, club: "Hoffenheim" },
        { id: "bh11", name: "E. D\u017Eeko", number: 17, position: "FW", x: 50, y: 80, club: "Fenerbah\xE7e" }
      ]
    },
    stadiumName: "BMO Field",
    city: "TORONTO",
    stageName: "Group Stage",
    kickoffTime: "16:00",
    kickoffDate: "12 Junho, 2026",
    kickoffTimestamp: "2026-06-12T16:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "g4", type: "TV ABERTA", name: "Globo", iconColor: "#05ff85", link: "https://globoplay.globo.com" },
      { id: "s4", type: "TV PAGA", name: "SportTV", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "cz4", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  },
  {
    id: "bra-mar-2026",
    teamA: {
      name: "BRASIL",
      code: "BRA",
      flagSvg: "brazil",
      primaryColor: "#009c3b",
      secondaryColor: "#ffdf00",
      group: "Grupo C",
      lineup: [
        { id: "b1", name: "Alisson", number: 1, position: "GK", x: 50, y: 88, club: "Liverpool" },
        { id: "b2", name: "Danilo", number: 2, position: "DF", x: 15, y: 70, club: "Juventus" },
        { id: "b3", name: "Marquinhos", number: 4, position: "DF", x: 38, y: 75, club: "PSG" },
        { id: "b4", name: "G. Magalh\xE3es", number: 3, position: "DF", x: 62, y: 75, club: "Arsenal" },
        { id: "b5", name: "Abner", number: 6, position: "DF", x: 85, y: 70, club: "Lyon" },
        { id: "b6", name: "B. Guimar\xE3es", number: 5, position: "MF", x: 30, y: 45, club: "Newcastle" },
        { id: "b7", name: "Jo\xE3o Gomes", number: 15, position: "MF", x: 70, y: 45, club: "Wolverhampton" },
        { id: "b8", name: "Raphinha", number: 7, position: "FW", x: 15, y: 22, club: "Barcelona" },
        { id: "b9", name: "Rodrygo", number: 10, position: "FW", x: 50, y: 28, club: "Real Madrid" },
        { id: "b10", name: "Vinicius Jr", number: 11, position: "FW", x: 85, y: 22, club: "Real Madrid" },
        { id: "b11", name: "Igor Jesus", number: 9, position: "FW", x: 50, y: 10, club: "Botafogo" }
      ]
    },
    teamB: {
      name: "MARROCOS",
      code: "MAR",
      flagSvg: "morocco",
      primaryColor: "#c1272d",
      secondaryColor: "#006233",
      group: "Grupo C",
      lineup: [
        { id: "m1", name: "Y. Bounou", number: 1, position: "GK", x: 50, y: 12, club: "Al-Hilal" },
        { id: "m2", name: "N. Mazraoui", number: 3, position: "DF", x: 15, y: 30, club: "Bayern Munique" },
        { id: "m3", name: "A. Dari", number: 23, position: "DF", x: 38, y: 25, club: "Brest" },
        { id: "m4", name: "N. Aguerd", number: 5, position: "DF", x: 62, y: 25, club: "West Ham" },
        { id: "m5", name: "A. Hakimi", number: 2, position: "DF", x: 85, y: 30, club: "PSG" },
        { id: "m6", name: "A. Ounahi", number: 8, position: "MF", x: 30, y: 50, club: "Panathinaikos" },
        { id: "m7", name: "S. Amrabat", number: 4, position: "MF", x: 50, y: 45, club: "Fenerbah\xE7e" },
        { id: "m8", name: "B. El Khannouss", number: 17, position: "MF", x: 70, y: 50, club: "Leicester City" },
        { id: "m9", name: "H. Ziyech", number: 7, position: "FW", x: 15, y: 75, club: "Galatasaray" },
        { id: "m10", name: "Y. En-Nesyri", number: 19, position: "FW", x: 50, y: 85, club: "Fenerbah\xE7e" },
        { id: "m11", name: "Brahim D\xEDaz", number: 10, position: "FW", x: 85, y: 75, club: "Real Madrid" }
      ]
    },
    stadiumName: "MetLife Stadium",
    city: "NEW YORK CITY",
    stageName: "Group Stage",
    kickoffTime: "19:00",
    kickoffDate: "13 Junho, 2026",
    kickoffTimestamp: "2026-06-13T19:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021456",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "g1", type: "TV ABERTA", name: "Globo", iconColor: "#05ff85", link: "https://globoplay.globo.com" },
      { id: "s1", type: "TV PAGA", name: "SportTV", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "gb1", type: "STREAM PAGO", name: "Globoplay / FIFA+", iconColor: "#00e476", link: "https://plus.fifa.com" },
      { id: "cz1", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  },
  {
    id: "fra-sen-2026",
    teamA: {
      name: "FRAN\xC7A",
      code: "FRA",
      flagSvg: "france",
      primaryColor: "#002395",
      secondaryColor: "#ed2939",
      group: "Grupo I",
      lineup: [
        { id: "f1", name: "Maignan", number: 1, position: "GK", x: 50, y: 88, club: "AC Milan" },
        { id: "f2", name: "T. Hern\xE1ndez", number: 22, position: "DF", x: 15, y: 70, club: "AC Milan" },
        { id: "f3", name: "Saliba", number: 17, position: "DF", x: 38, y: 75, club: "Arsenal" },
        { id: "f4", name: "Upamecano", number: 4, position: "DF", x: 62, y: 75, club: "Bayern Munique" },
        { id: "f5", name: "Kound\xE9", number: 5, position: "DF", x: 85, y: 70, club: "Barcelona" },
        { id: "f6", name: "Tchouam\xE9ni", number: 8, position: "MF", x: 30, y: 50, club: "Real Madrid" },
        { id: "f7", name: "Kant\xE9", number: 13, position: "MF", x: 50, y: 55, club: "Al-Ittihad" },
        { id: "f8", name: "Griezmann", number: 7, position: "MF", x: 70, y: 50, club: "Atl\xE9tico Madrid" },
        { id: "f9", name: "Demb\xE9l\xE9", number: 11, position: "FW", x: 15, y: 25, club: "PSG" },
        { id: "f10", name: "K. Mbapp\xE9", number: 10, position: "FW", x: 50, y: 15, club: "Real Madrid" },
        { id: "f11", name: "Barcola", number: 20, position: "FW", x: 85, y: 25, club: "PSG" }
      ]
    },
    teamB: {
      name: "SENEGAL",
      code: "SEN",
      flagSvg: "senegal",
      primaryColor: "#00853f",
      secondaryColor: "#fdef42",
      group: "Grupo I",
      lineup: [
        { id: "sn1", name: "\xC9. Mendy", number: 16, position: "GK", x: 50, y: 12, club: "Al-Ahli" },
        { id: "sn2", name: "I. Jakobs", number: 5, position: "DF", x: 15, y: 30, club: "Monaco" },
        { id: "sn3", name: "P. A. Ciss\xE9", number: 25, position: "DF", x: 38, y: 25, club: "Olympiacos" },
        { id: "sn4", name: "K. Koulibaly", number: 3, position: "DF", x: 62, y: 25, club: "Al-Hilal" },
        { id: "sn5", name: "A. Diallo", number: 21, position: "DF", x: 85, y: 30, club: "Al-Arabi" },
        { id: "sn6", name: "P. M. Sarr", number: 17, position: "MF", x: 30, y: 50, club: "Tottenham" },
        { id: "sn7", name: "P. Gueye", number: 8, position: "MF", x: 50, y: 45, club: "Marselha" },
        { id: "sn8", name: "I. Gueye", number: 4, position: "MF", x: 70, y: 50, club: "Everton" },
        { id: "sn9", name: "I. Sarr", number: 11, position: "FW", x: 15, y: 75, club: "Crystal Palace" },
        { id: "sn10", name: "N. Jackson", number: 19, position: "FW", x: 50, y: 85, club: "Chelsea" },
        { id: "sn11", name: "H. Diallo", number: 9, position: "FW", x: 85, y: 75, club: "Al-Rayyan" }
      ]
    },
    stadiumName: "MetLife Stadium",
    city: "NEW YORK CITY",
    stageName: "Group Stage",
    kickoffTime: "16:00",
    kickoffDate: "16 Junho, 2026",
    kickoffTimestamp: "2026-06-16T16:00:00-03:00",
    status: "PRE_GAME",
    countdownTargetSeconds: 248400,
    broadcasters: [
      { id: "g2", type: "TV ABERTA", name: "Globo", iconColor: "#05ff85", link: "https://globoplay.globo.com" },
      { id: "s2", type: "TV PAGA", name: "SportTV", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "cz2", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  },
  {
    id: "hai-sco-2026",
    teamA: {
      name: "HAITI",
      code: "HAI",
      flagSvg: "haiti",
      primaryColor: "#112e8a",
      secondaryColor: "#d21034",
      group: "Grupo C",
      lineup: [
        { id: "h1", name: "J. Placide", number: 1, position: "GK", x: 50, y: 88, club: "Bastia" },
        { id: "h2", name: "C. Arcus", number: 2, position: "DF", x: 15, y: 70, club: "Angers" },
        { id: "h3", name: "R. Ad\xE9", number: 4, position: "DF", x: 38, y: 75, club: "LDU Quito" },
        { id: "h4", name: "A. Christian Jr", number: 3, position: "DF", x: 62, y: 75, club: "Figueirense" },
        { id: "h5", name: "M. Saint\xE9", number: 13, position: "DF", x: 85, y: 70, club: "Mirebalais" },
        { id: "h6", name: "B. Alceus", number: 8, position: "MF", x: 30, y: 45, club: "Apollon Limassol" },
        { id: "h7", name: "D. Jean Jacques", number: 17, position: "MF", x: 50, y: 48, club: "Metz" },
        { id: "h8", name: "L. Pierre", number: 14, position: "MF", x: 70, y: 45, club: "Dunkerque" },
        { id: "h9", name: "D. Nazon", number: 9, position: "FW", x: 15, y: 22, club: "Kayserispor" },
        { id: "h10", name: "F. Pierrot", number: 20, position: "FW", x: 50, y: 28, club: "Maccabi Haifa" },
        { id: "h11", name: "L. Don Deedson", number: 7, position: "FW", x: 85, y: 22, club: "Odense" }
      ]
    },
    teamB: {
      name: "ESC\xD3CIA",
      code: "SCO",
      flagSvg: "scotland",
      primaryColor: "#0065bd",
      secondaryColor: "#ffffff",
      group: "Grupo C",
      lineup: [
        { id: "sc1", name: "A. Gunn", number: 1, position: "GK", x: 50, y: 12, club: "Norwich City" },
        { id: "sc2", name: "A. Ralston", number: 2, position: "DF", x: 15, y: 30, club: "Celtic" },
        { id: "sc3", name: "J. Souttar", number: 5, position: "DF", x: 38, y: 25, club: "Rangers" },
        { id: "sc4", name: "S. McKenna", number: 15, position: "DF", x: 62, y: 25, club: "Las Palmas" },
        { id: "sc5", name: "A. Robertson", number: 3, position: "DF", x: 85, y: 30, club: "Liverpool" },
        { id: "sc6", name: "B. Gilmour", number: 8, position: "MF", x: 30, y: 50, club: "Napoli" },
        { id: "sc7", name: "S. McTominay", number: 4, position: "MF", x: 50, y: 45, club: "Napoli" },
        { id: "sc8", name: "J. McGinn", number: 7, position: "MF", x: 70, y: 50, club: "Aston Villa" },
        { id: "sc9", name: "B. Doak", number: 11, position: "FW", x: 15, y: 75, club: "Liverpool" },
        { id: "sc10", name: "C. Adams", number: 10, position: "FW", x: 50, y: 85, club: "Torino" },
        { id: "sc11", name: "R. Christie", number: 21, position: "FW", x: 85, y: 75, club: "Bournemouth" }
      ]
    },
    stadiumName: "Est\xE1dio de Boston",
    city: "BOSTON",
    stageName: "Group Stage",
    kickoffTime: "22:00",
    kickoffDate: "13 Junho, 2026",
    kickoffTimestamp: "2026-06-13T22:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021453",
    status: "FINISHED",
    score: {
      teamA: 0,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "cz5", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" }
    ]
  },
  {
    id: "aus-tur-2026",
    teamA: {
      name: "AUSTR\xC1LIA",
      code: "AUS",
      flagSvg: "australia",
      primaryColor: "#012169",
      secondaryColor: "#ffffff",
      group: "Grupo D",
      lineup: [
        { id: "au1", name: "M. Ryan", number: 1, position: "GK", x: 50, y: 88, club: "AZ Alkmaar" },
        { id: "au2", name: "N. Atkinson", number: 3, position: "DF", x: 15, y: 70, club: "Hearts" },
        { id: "au3", name: "H. Souttar", number: 19, position: "DF", x: 38, y: 75, club: "Leicester City" },
        { id: "au4", name: "K. Rowles", number: 4, position: "DF", x: 62, y: 75, club: "Heart of Midlothian" },
        { id: "au5", name: "J. Bos", number: 8, position: "DF", x: 85, y: 70, club: "Westerlo" },
        { id: "au6", name: "J. Irvine", number: 22, position: "MF", x: 30, y: 45, club: "St. Pauli" },
        { id: "au7", name: "K. Baccus", number: 17, position: "MF", x: 50, y: 48, club: "St. Mirren" },
        { id: "au8", name: "A. Hrustic", number: 10, position: "MF", x: 70, y: 45, club: "Salernitana" },
        { id: "au9", name: "M. Boyle", number: 6, position: "FW", x: 15, y: 22, club: "Hibernian" },
        { id: "au10", name: "M. Duke", number: 15, position: "FW", x: 50, y: 28, club: "Machida Zelvia" },
        { id: "au11", name: "C. Goodwin", number: 23, position: "FW", x: 85, y: 22, club: "Al-Wehda" }
      ]
    },
    teamB: {
      name: "TURQUIA",
      code: "TUR",
      flagSvg: "turkey",
      primaryColor: "#e30a17",
      secondaryColor: "#ffffff",
      group: "Grupo D",
      lineup: [
        { id: "tr1", name: "M. G\xFCnok", number: 1, position: "GK", x: 50, y: 12, club: "Be\u015Fikta\u015F" },
        { id: "tr2", name: "Z. \xC7elik", number: 2, position: "DF", x: 15, y: 30, club: "Roma" },
        { id: "tr3", name: "M. Demiral", number: 3, position: "DF", x: 38, y: 25, club: "Al-Ahli" },
        { id: "tr4", name: "A. Bardakc\u0131", number: 14, position: "DF", x: 62, y: 25, club: "Galatasaray" },
        { id: "tr5", name: "F. Kadioglu", number: 20, position: "DF", x: 85, y: 30, club: "Brighton" },
        { id: "tr6", name: "H. \xC7alhano\u011Flu", number: 10, position: "MF", x: 30, y: 50, club: "Inter de Mil\xE3o" },
        { id: "tr7", name: "\u0130. Y\xFCksek", number: 16, position: "MF", x: 50, y: 45, club: "Fenerbah\xE7e" },
        { id: "tr8", name: "A. G\xFCler", number: 8, position: "MF", x: 70, y: 50, club: "Real Madrid" },
        { id: "tr9", name: "K. Akt\xFCrko\u011Flu", number: 7, position: "FW", x: 15, y: 75, club: "Benfica" },
        { id: "tr10", name: "K. Y\u0131ld\u0131z", number: 11, position: "FW", x: 50, y: 85, club: "Juventus" },
        { id: "tr11", name: "B. Y\u0131lmaz", number: 21, position: "FW", x: 85, y: 75, club: "Galatasaray" }
      ]
    },
    stadiumName: "BC Place de Vancouver",
    city: "VANCOUVER",
    stageName: "Group Stage",
    kickoffTime: "01:00",
    kickoffDate: "14 Junho, 2026",
    kickoffTimestamp: "2026-06-14T01:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021463",
    status: "FINISHED",
    score: {
      teamA: 2,
      teamB: 0
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "getv6", type: "STREAM", name: "GETV", iconColor: "#00e476", link: "https://globoplay.globo.com/categorias/ge-tv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png" },
      { id: "gb6", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz6", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "g6", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s6", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  },
  {
    id: "ger-cuw-2026",
    teamA: {
      name: "ALEMANHA",
      code: "GER",
      flagSvg: "germany",
      primaryColor: "#000000",
      secondaryColor: "#ffce00",
      group: "Grupo E",
      lineup: [
        { id: "de1", name: "M. ter Stegen", number: 1, position: "GK", x: 50, y: 88, club: "Barcelona" },
        { id: "de2", name: "J. Kimmich", number: 6, position: "DF", x: 15, y: 70, club: "Bayern Munique" },
        { id: "de3", name: "A. Rudiger", number: 2, position: "DF", x: 38, y: 75, club: "Real Madrid" },
        { id: "de4", name: "J. Tah", number: 4, position: "DF", x: 62, y: 75, club: "Bayer Leverkusen" },
        { id: "de5", name: "D. Raum", number: 3, position: "DF", x: 85, y: 70, club: "RB Leipzig" },
        { id: "de6", name: "R. Andrich", number: 8, position: "MF", x: 30, y: 45, club: "Bayer Leverkusen" },
        { id: "de7", name: "I. Gundogan", number: 21, position: "MF", x: 50, y: 48, club: "Barcelona" },
        { id: "de8", name: "J. Musiala", number: 10, position: "MF", x: 70, y: 45, club: "Bayern Munique" },
        { id: "de9", name: "L. Sane", number: 19, position: "FW", x: 15, y: 22, club: "Bayern Munique" },
        { id: "de10", name: "K. Havertz", number: 7, position: "FW", x: 50, y: 28, club: "Arsenal" },
        { id: "de11", name: "F. Wirtz", number: 17, position: "FW", x: 85, y: 22, club: "Bayer Leverkusen" }
      ]
    },
    teamB: {
      name: "CURA\xC7AO",
      code: "CUW",
      flagSvg: "curacao",
      primaryColor: "#002b7f",
      secondaryColor: "#f9e814",
      group: "Grupo E",
      lineup: [
        { id: "cw1", name: "E. Room", number: 1, position: "GK", x: 50, y: 12, club: "Columbus Crew" },
        { id: "cw2", name: "J. Gaari", number: 2, position: "DF", x: 15, y: 30, club: "Al Hazem" },
        { id: "cw3", name: "C. Martina", number: 4, position: "DF", x: 38, y: 25, club: "NAC Breda" },
        { id: "cw4", name: "C. Martina", number: 3, position: "DF", x: 62, y: 25, club: "Go Ahead Eagles" },
        { id: "cw5", name: "J. Brenet", number: 5, position: "DF", x: 85, y: 30, club: "Al Rayyan" },
        { id: "cw6", name: "L. Bacuna", number: 10, position: "MF", x: 30, y: 50, club: "Groningen" },
        { id: "cw7", name: "J. Bacuna", number: 8, position: "MF", x: 50, y: 45, club: "Al Wehda" },
        { id: "cw8", name: "K. Leerdam", number: 14, position: "MF", x: 70, y: 50, club: "Los Angeles Galaxy" },
        { id: "cw9", name: "R. Janga", number: 9, position: "FW", x: 15, y: 75, club: "FCSB" },
        { id: "cw10", name: "G. Nepomuceno", number: 11, position: "FW", x: 50, y: 85, club: "Melbourne Knights" },
        { id: "cw11", name: "J. Antonisse", number: 7, position: "FW", x: 85, y: 75, club: "Moreirense" }
      ]
    },
    stadiumName: "Est\xE1dio de Houston",
    city: "HOUSTON",
    stageName: "Group Stage",
    kickoffTime: "14:00",
    kickoffDate: "14 Junho, 2026",
    kickoffTimestamp: "2026-06-14T14:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021464",
    status: "LIVE",
    score: {
      teamA: 1,
      teamB: 0
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "cz10", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" }
    ]
  },
  {
    id: "arg-alg-2026",
    teamA: {
      name: "ARGENTINA",
      code: "ARG",
      flagSvg: "argentina",
      primaryColor: "#74acdf",
      secondaryColor: "#ffffff",
      group: "Grupo J",
      lineup: [
        { id: "a1", name: "E. Mart\xEDnez", number: 23, position: "GK", x: 50, y: 88, club: "Aston Villa" },
        { id: "a2", name: "Molina", number: 26, position: "DF", x: 15, y: 70, club: "Atl\xE9tico Madrid" },
        { id: "a3", name: "Romero", number: 13, position: "DF", x: 38, y: 75, club: "Tottenham" },
        { id: "a4", name: "Otamendi", number: 19, position: "DF", x: 62, y: 75, club: "Benfica" },
        { id: "a5", name: "Tagliafico", number: 3, position: "DF", x: 85, y: 70, club: "Lyon" },
        { id: "a6", name: "De Paul", number: 7, position: "MF", x: 30, y: 45, club: "Atl\xE9tico Madrid" },
        { id: "a7", name: "Mac Allister", number: 20, position: "MF", x: 50, y: 48, club: "Liverpool" },
        { id: "a8", name: "Enzo F.", number: 24, position: "MF", x: 70, y: 45, club: "Chelsea" },
        { id: "a9", name: "Leo Messi", number: 10, position: "FW", x: 50, y: 25, club: "Inter Miami" },
        { id: "a10", name: "\xC1lvarez", number: 9, position: "FW", x: 30, y: 15, club: "Atl\xE9tico Madrid" },
        { id: "a11", name: "Lautaro M.", number: 22, position: "FW", x: 70, y: 15, club: "Inter de Mil\xE3o" }
      ]
    },
    teamB: {
      name: "ARG\xC9LIA",
      code: "ALG",
      flagSvg: "algeria",
      primaryColor: "#006233",
      secondaryColor: "#d21034",
      group: "Grupo J",
      lineup: [
        { id: "dz1", name: "A. Mandrea", number: 16, position: "GK", x: 50, y: 12, club: "Lens" },
        { id: "dz2", name: "J. Hadjam", number: 19, position: "DF", x: 15, y: 30, club: "Eintracht Frankfurt" },
        { id: "dz3", name: "R. Bensebaini", number: 3, position: "DF", x: 38, y: 25, club: "Borussia Dortmund" },
        { id: "dz4", name: "A. Mandi", number: 5, position: "DF", x: 62, y: 25, club: "Be\u015Fikta\u015F" },
        { id: "dz5", name: "Y. Atal", number: 2, position: "DF", x: 85, y: 30, club: "Al-Arabi" },
        { id: "dz6", name: "I. Bennacer", number: 8, position: "MF", x: 30, y: 50, club: "AC Milan" },
        { id: "dz7", name: "H. Aouar", number: 28, position: "MF", x: 50, y: 45, club: "Al-Ittihad" },
        { id: "dz8", name: "H. Belkebla", number: 14, position: "MF", x: 70, y: 50, club: "Brest" },
        { id: "dz9", name: "R. Mahrez", number: 7, position: "FW", x: 15, y: 75, club: "Al-Ahli" },
        { id: "dz10", name: "A. Gouiri", number: 9, position: "FW", x: 50, y: 85, club: "Marselha" },
        { id: "dz11", name: "S. Benrahma", number: 20, position: "FW", x: 85, y: 75, club: "Lyon" }
      ]
    },
    stadiumName: "Arrowhead Stadium",
    city: "KANSAS CITY",
    stageName: "Group Stage",
    kickoffTime: "22:00",
    kickoffDate: "16 Junho, 2026",
    kickoffTimestamp: "2026-06-16T22:00:00-03:00",
    status: "PRE_GAME",
    countdownTargetSeconds: 27e4,
    broadcasters: [
      { id: "g3", type: "TV ABERTA", name: "Globo", iconColor: "#05ff85", link: "https://globoplay.globo.com" },
      { id: "s3", type: "TV PAGA", name: "SportTV", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "gb3", type: "STREAM PAGO", name: "Globoplay / FIFA+", iconColor: "#00e476", link: "https://plus.fifa.com" }
    ]
  },
  {
    id: "ned-jpn-2026",
    teamA: {
      name: "HOLANDA",
      code: "NED",
      flagSvg: "netherlands",
      primaryColor: "#ff4f00",
      secondaryColor: "#ffffff",
      group: "Grupo F",
      lineup: [
        { id: "nl1", name: "B. Verbruggen", number: 1, position: "GK", x: 50, y: 88, club: "Brighton" },
        { id: "nl2", name: "D. Dumfries", number: 22, position: "DF", x: 15, y: 70, club: "Inter de Mil\xE3o" },
        { id: "nl3", name: "V. van Dijk", number: 4, position: "DF", x: 38, y: 75, club: "Liverpool" },
        { id: "nl4", name: "M. de Ligt", number: 3, position: "DF", x: 62, y: 75, club: "Manchester United" },
        { id: "nl5", name: "N. Ak\xE9", number: 5, position: "DF", x: 85, y: 70, club: "Manchester City" },
        { id: "nl6", name: "F. de Jong", number: 21, position: "MF", x: 30, y: 45, club: "Barcelona" },
        { id: "nl7", name: "T. Reijnders", number: 14, position: "MF", x: 50, y: 48, club: "Milan" },
        { id: "nl8", name: "X. Simons", number: 7, position: "MF", x: 70, y: 45, club: "RB Leipzig" },
        { id: "nl9", name: "J. Frimpong", number: 12, position: "FW", x: 15, y: 22, club: "Bayer Leverkusen" },
        { id: "nl10", name: "M. Depay", number: 10, position: "FW", x: 50, y: 28, club: "Corinthians" },
        { id: "nl11", name: "C. Gakpo", number: 11, position: "FW", x: 85, y: 22, club: "Liverpool" }
      ]
    },
    teamB: {
      name: "JAP\xC3O",
      code: "JPN",
      flagSvg: "japan",
      primaryColor: "#bc002d",
      secondaryColor: "#ffffff",
      group: "Grupo F",
      lineup: [
        { id: "jp1", name: "Z. Suzuki", number: 1, position: "GK", x: 50, y: 12, club: "Parma" },
        { id: "jp2", name: "Y. Sugawara", number: 2, position: "DF", x: 15, y: 30, club: "Southampton" },
        { id: "jp3", name: "K. Itakura", number: 4, position: "DF", x: 38, y: 25, club: "Borussia Monchengladbach" },
        { id: "jp4", name: "T. Tomiyasu", number: 22, position: "DF", x: 62, y: 25, club: "Arsenal" },
        { id: "jp5", name: "H. Ito", number: 21, position: "DF", x: 85, y: 30, club: "Bayern Munique" },
        { id: "jp6", name: "W. Endo", number: 6, position: "MF", x: 30, y: 50, club: "Liverpool" },
        { id: "jp7", name: "H. Morita", number: 5, position: "MF", x: 50, y: 45, club: "Sporting" },
        { id: "jp8", name: "T. Kubo", number: 20, position: "MF", x: 70, y: 50, club: "Real Sociedad" },
        { id: "jp9", name: "J. Ito", number: 14, position: "FW", x: 15, y: 75, club: "Reims" },
        { id: "jp10", name: "A. Ueda", number: 9, position: "FW", x: 50, y: 85, club: "Feyenoord" },
        { id: "jp11", name: "K. Mitoma", number: 7, position: "FW", x: 85, y: 75, club: "Brighton" }
      ]
    },
    stadiumName: "Est\xE1dio de Dallas",
    city: "DALLAS",
    stageName: "Group Stage",
    kickoffTime: "17:00",
    kickoffDate: "14 Junho, 2026",
    kickoffTimestamp: "2026-06-14T17:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021470",
    status: "PRE_GAME",
    countdownTargetSeconds: 48638,
    broadcasters: [
      { id: "getv11", type: "STREAM", name: "GETV", iconColor: "#00e476", link: "https://globoplay.globo.com/categorias/ge-tv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png" },
      { id: "gb11", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz11", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "ns11", type: "STREAM", name: "NSPORTS", iconColor: "#00e476", link: "https://nsports.com.br/n/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/892.png" },
      { id: "sbt11", type: "TV ABERTA", name: "SBT", iconColor: "#05ff85", link: "https://www.sbt.com.br/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/901.png" },
      { id: "g11", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s11", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  },
  {
    id: "civ-ecu-2026",
    teamA: {
      name: "COSTA DO MARFIM",
      code: "CIV",
      flagSvg: "ivorycoast",
      primaryColor: "#f77f00",
      secondaryColor: "#009e60",
      group: "Grupo E",
      lineup: [
        { id: "ci1", name: "Y. Fofana", number: 1, position: "GK", x: 50, y: 88, club: "Angers" },
        { id: "ci2", name: "S. Aurier", number: 17, position: "DF", x: 15, y: 70, club: "Galatasaray" },
        { id: "ci3", name: "O. Kossounou", number: 7, position: "DF", x: 38, y: 75, club: "Atalanta" },
        { id: "ci4", name: "E. Ndicka", number: 21, position: "DF", x: 62, y: 75, club: "Roma" },
        { id: "ci5", name: "G. Konan", number: 3, position: "DF", x: 85, y: 70, club: "Al Fayha" },
        { id: "ci6", name: "F. Kessie", number: 8, position: "MF", x: 30, y: 45, club: "Al Ahli" },
        { id: "ci7", name: "S. Fofana", number: 6, position: "MF", x: 50, y: 48, club: "Al Nassr" },
        { id: "ci8", name: "O. Diomande", number: 4, position: "MF", x: 70, y: 45, club: "Sporting" },
        { id: "ci9", name: "N. Pepe", number: 19, position: "FW", x: 15, y: 22, club: "Villarreal" },
        { id: "ci10", name: "S. Haller", number: 22, position: "FW", x: 50, y: 28, club: "Utrecht" },
        { id: "ci11", name: "J. Boga", number: 13, position: "FW", x: 85, y: 22, club: "Nice" }
      ]
    },
    teamB: {
      name: "EQUADOR",
      code: "ECU",
      flagSvg: "ecuador",
      primaryColor: "#fcd116",
      secondaryColor: "#003893",
      group: "Grupo E",
      lineup: [
        { id: "ec1", name: "H. Galindez", number: 1, position: "GK", x: 50, y: 12, club: "Huracan" },
        { id: "ec2", name: "A. Preciado", number: 17, position: "DF", x: 15, y: 30, club: "Sparta Praga" },
        { id: "ec3", name: "P. Hincapie", number: 3, position: "DF", x: 38, y: 25, club: "Bayer Leverkusen" },
        { id: "ec4", name: "F. Torres", number: 2, position: "DF", x: 62, y: 25, club: "Santos" },
        { id: "ec5", name: "P. Estupinan", number: 7, position: "DF", x: 85, y: 30, club: "Brighton" },
        { id: "ec6", name: "M. Caicedo", number: 23, position: "MF", x: 30, y: 50, club: "Chelsea" },
        { id: "ec7", name: "A. Franco", number: 21, position: "MF", x: 50, y: 45, club: "Atletico Mineiro" },
        { id: "ec8", name: "K. Paez", number: 10, position: "MF", x: 70, y: 50, club: "Chelsea" },
        { id: "ec9", name: "J. Sarmiento", number: 16, position: "FW", x: 15, y: 75, club: "Brighton" },
        { id: "ec10", name: "E. Valencia", number: 13, position: "FW", x: 50, y: 85, club: "Internacional" },
        { id: "ec11", name: "J. Yeboah", number: 9, position: "FW", x: 85, y: 75, club: "Venezia" }
      ]
    },
    stadiumName: "Est\xE1dio de Filad\xE9lfia",
    city: "FILAD\xC9LFIA",
    stageName: "Group Stage",
    kickoffTime: "20:00",
    kickoffDate: "14 Junho, 2026",
    kickoffTimestamp: "2026-06-14T20:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021467",
    status: "PRE_GAME",
    countdownTargetSeconds: 58950,
    broadcasters: [
      { id: "gb12", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz12", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "g12", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s12", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  },
  {
    id: "swe-tun-2026",
    teamA: {
      name: "SU\xC9CIA",
      code: "SWE",
      flagSvg: "sweden",
      primaryColor: "#006aa7",
      secondaryColor: "#fecc00",
      group: "Grupo F",
      lineup: [
        { id: "se1", name: "R. Olsen", number: 1, position: "GK", x: 50, y: 88, club: "Aston Villa" },
        { id: "se2", name: "E. Krafth", number: 2, position: "DF", x: 15, y: 70, club: "Newcastle" },
        { id: "se3", name: "V. Lindelof", number: 3, position: "DF", x: 38, y: 75, club: "Manchester United" },
        { id: "se4", name: "I. Hien", number: 4, position: "DF", x: 62, y: 75, club: "Atalanta" },
        { id: "se5", name: "L. Augustinsson", number: 6, position: "DF", x: 85, y: 70, club: "Anderlecht" },
        { id: "se6", name: "D. Kulusevski", number: 21, position: "MF", x: 30, y: 45, club: "Tottenham" },
        { id: "se7", name: "J. Cajuste", number: 20, position: "MF", x: 50, y: 48, club: "Ipswich Town" },
        { id: "se8", name: "E. Forsberg", number: 10, position: "MF", x: 70, y: 45, club: "New York Red Bulls" },
        { id: "se9", name: "V. Gyokeres", number: 17, position: "FW", x: 15, y: 22, club: "Sporting" },
        { id: "se10", name: "A. Isak", number: 9, position: "FW", x: 50, y: 28, club: "Newcastle" },
        { id: "se11", name: "A. Elanga", number: 11, position: "FW", x: 85, y: 22, club: "Nottingham Forest" }
      ]
    },
    teamB: {
      name: "TUN\xCDSIA",
      code: "TUN",
      flagSvg: "tunisia",
      primaryColor: "#e70013",
      secondaryColor: "#ffffff",
      group: "Grupo F",
      lineup: [
        { id: "tn1", name: "A. Dahmen", number: 16, position: "GK", x: 50, y: 12, club: "Augsburg" },
        { id: "tn2", name: "M. Drager", number: 20, position: "DF", x: 15, y: 30, club: "Basel" },
        { id: "tn3", name: "D. Bronn", number: 6, position: "DF", x: 38, y: 25, club: "Servette" },
        { id: "tn4", name: "M. Talbi", number: 3, position: "DF", x: 62, y: 25, club: "Lorient" },
        { id: "tn5", name: "A. Abdi", number: 2, position: "DF", x: 85, y: 30, club: "Nice" },
        { id: "tn6", name: "E. Skhiri", number: 17, position: "MF", x: 30, y: 50, club: "Eintracht Frankfurt" },
        { id: "tn7", name: "A. Laidouni", number: 14, position: "MF", x: 50, y: 45, club: "Al Wakrah" },
        { id: "tn8", name: "H. Mejbri", number: 10, position: "MF", x: 70, y: 50, club: "Burnley" },
        { id: "tn9", name: "Y. Msakni", number: 7, position: "FW", x: 15, y: 75, club: "Al Arabi" },
        { id: "tn10", name: "S. Jaziri", number: 9, position: "FW", x: 50, y: 85, club: "Zamalek" },
        { id: "tn11", name: "A. Achouri", number: 11, position: "FW", x: 85, y: 75, club: "Copenhagen" }
      ]
    },
    stadiumName: "Est\xE1dio de Monterrey",
    city: "MONTERREY",
    stageName: "Group Stage",
    kickoffTime: "23:00",
    kickoffDate: "14 Junho, 2026",
    kickoffTimestamp: "2026-06-14T23:00:00-03:00",
    officialMatchUrl: "https://www.fifa.com/pt/match-centre/match/17/285023/289273/400021474",
    status: "PRE_GAME",
    countdownTargetSeconds: 69478,
    broadcasters: [
      { id: "gb13", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz13", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "g13", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s13", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  }
];

// server.ts
import_dotenv.default.config();
var app = (0, import_express.default)();
var DEFAULT_PORT = Number(process.env.PORT || 3e3);
var HOST = "0.0.0.0";
var STRICT_PORT = process.env.STRICT_PORT === "true";
var FIFA_API_BASE_URL = "https://api.fifa.com/api/v3";
var FIFA_COMPETITION_ID = "17";
var FIFA_SEASON_ID = "285023";
var DEFAULT_BROADCAST_COUNTRY = "BR";
var DEFAULT_BROADCAST_LANGUAGE = "pt";
var BROADCAST_GUIDE_CACHE_TTL_MS = 5 * 60 * 1e3;
var LIVE_MATCH_STATE_CACHE_TTL_MS = 10 * 1e3;
var UPCOMING_SOON_MATCH_STATE_CACHE_TTL_MS = 30 * 1e3;
var STABLE_MATCH_STATE_CACHE_TTL_MS = 5 * 60 * 1e3;
var UPCOMING_SOON_WINDOW_MS = 6 * 60 * 60 * 1e3;
var BACKGROUND_WARM_FAILURE_RETRY_MS = 30 * 1e3;
var CIRCUIT_BREAKER_FAILURE_THRESHOLD = 3;
var CIRCUIT_BREAKER_OPEN_MS = 60 * 1e3;
var APP_MATCHES = matches_default;
var APP_MATCHES_BY_ID = new Map(APP_MATCHES.map((match) => [match.id, match]));
app.use(import_express.default.json());
var broadcastGuideCache = null;
var matchStatesCache = null;
var fifaSyncDiagnostics = {
  broadcastGuide: {
    lastAttemptAt: null,
    lastSuccessAt: null,
    lastError: null,
    lastServedStaleAt: null,
    staleServeCount: 0,
    consecutiveFailureCount: 0,
    circuitOpenUntil: null
  },
  matchStates: {
    lastAttemptAt: null,
    lastSuccessAt: null,
    lastError: null,
    lastServedStaleAt: null,
    staleServeCount: 0,
    consecutiveFailureCount: 0,
    circuitOpenUntil: null,
    activeLiveMatchIds: [],
    lastRefreshAfterMs: null
  },
  backgroundWarm: {
    lastStartedAt: null,
    lastSucceededAt: null,
    lastError: null,
    nextWarmAt: null,
    lastRefreshAfterMs: null,
    cycleCount: 0,
    inFlight: false
  }
};
var backgroundWarmTimeout = null;
var getMatchStateCacheTtlMs = (states) => {
  const stateEntries = Object.entries(states);
  if (stateEntries.some(([, state]) => state.status === "LIVE")) {
    return LIVE_MATCH_STATE_CACHE_TTL_MS;
  }
  const now = Date.now();
  const hasUpcomingSoon = stateEntries.some(([matchId, state]) => {
    if (state.status !== "PRE_GAME") {
      return false;
    }
    const match = APP_MATCHES_BY_ID.get(matchId);
    if (!match) {
      return false;
    }
    const kickoffTime = new Date(match.kickoffTimestamp).getTime();
    return !Number.isNaN(kickoffTime) && kickoffTime - now <= UPCOMING_SOON_WINDOW_MS;
  });
  return hasUpcomingSoon ? UPCOMING_SOON_MATCH_STATE_CACHE_TTL_MS : STABLE_MATCH_STATE_CACHE_TTL_MS;
};
var serializeErrorMessage = (error) => error instanceof Error ? error.message : String(error);
var getCircuitOpenUntilMs = (diagnostics) => {
  if (!diagnostics.circuitOpenUntil) {
    return null;
  }
  const timestamp = new Date(diagnostics.circuitOpenUntil).getTime();
  if (Number.isNaN(timestamp)) {
    return null;
  }
  return timestamp;
};
var isCircuitOpen = (diagnostics) => {
  const openUntilMs = getCircuitOpenUntilMs(diagnostics);
  return openUntilMs !== null && openUntilMs > Date.now();
};
var markStaleServe = (diagnostics) => {
  diagnostics.lastServedStaleAt = (/* @__PURE__ */ new Date()).toISOString();
  diagnostics.staleServeCount += 1;
};
var resetFailureState = (diagnostics) => {
  diagnostics.lastError = null;
  diagnostics.consecutiveFailureCount = 0;
  diagnostics.circuitOpenUntil = null;
};
var recordFailureState = (diagnostics, error) => {
  diagnostics.lastError = serializeErrorMessage(error);
  diagnostics.consecutiveFailureCount += 1;
  if (diagnostics.consecutiveFailureCount >= CIRCUIT_BREAKER_FAILURE_THRESHOLD) {
    diagnostics.circuitOpenUntil = new Date(
      Date.now() + CIRCUIT_BREAKER_OPEN_MS
    ).toISOString();
  }
};
var fetchJson = async (url) => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "agora-na-copa-2026/1.0",
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`FIFA API request failed (${response.status}) for ${url}`);
  }
  return await response.json();
};
var fetchCalendarMatches = async (language) => {
  const calendarData = await fetchJson(
    `${FIFA_API_BASE_URL}/calendar/matches?language=${encodeURIComponent(language)}&idCompetition=${FIFA_COMPETITION_ID}&idSeason=${FIFA_SEASON_ID}&count=400`
  );
  return calendarData.Results || [];
};
var fetchLiveMatch = async (matchId, language) => fetchJson(
  `${FIFA_API_BASE_URL}/live/football/${encodeURIComponent(matchId)}?language=${encodeURIComponent(language)}`
);
var getBroadcastGuidePayload = async (country, language) => {
  const cacheKey = `${country}:${language}`;
  fifaSyncDiagnostics.broadcastGuide.lastAttemptAt = (/* @__PURE__ */ new Date()).toISOString();
  if (broadcastGuideCache && broadcastGuideCache.key === cacheKey && broadcastGuideCache.expiresAt > Date.now()) {
    return broadcastGuideCache.payload;
  }
  if (isCircuitOpen(fifaSyncDiagnostics.broadcastGuide)) {
    if (broadcastGuideCache?.key === cacheKey) {
      markStaleServe(fifaSyncDiagnostics.broadcastGuide);
      console.warn(`Broadcast guide circuit open for ${cacheKey}; serving stale cache.`);
      return broadcastGuideCache.payload;
    }
    throw new Error("FIFA broadcast guide fetch temporarily paused after repeated failures.");
  }
  try {
    const [calendarMatches, watchData] = await Promise.all([
      fetchCalendarMatches(language),
      fetchJson(
        `${FIFA_API_BASE_URL}/watch/season/${FIFA_SEASON_ID}/${encodeURIComponent(country)}?language=${encodeURIComponent(language)}`
      )
    ]);
    const watchByMatchId = new Map(
      (watchData.Matches || []).map((match) => [match.IdMatch, match])
    );
    const guides = Object.fromEntries(
      APP_MATCHES.map((match) => {
        const fifaMatch = findCalendarMatch(match, calendarMatches, language);
        const fifaWatchMatch = fifaMatch ? watchByMatchId.get(fifaMatch.IdMatch) : void 0;
        const fifaBroadcasters = normalizeBroadcasters(fifaWatchMatch?.Sources);
        const hasOfficialGuide = fifaBroadcasters.length > 0;
        return [
          match.id,
          {
            broadcasters: hasOfficialGuide ? fifaBroadcasters : match.broadcasters,
            source: hasOfficialGuide ? "fifa" : "fallback",
            note: hasOfficialGuide ? "Dados oficiais do Onde Assistir da FIFA para o Brasil." : "Dados oficiais da FIFA indispon\xEDveis para esta partida no momento; exibindo a lista local.",
            fifaMatchId: fifaMatch?.IdMatch,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          }
        ];
      })
    );
    const payload = {
      country,
      language,
      guides
    };
    broadcastGuideCache = {
      key: cacheKey,
      createdAt: Date.now(),
      expiresAt: Date.now() + BROADCAST_GUIDE_CACHE_TTL_MS,
      payload
    };
    fifaSyncDiagnostics.broadcastGuide.lastSuccessAt = (/* @__PURE__ */ new Date()).toISOString();
    resetFailureState(fifaSyncDiagnostics.broadcastGuide);
    return payload;
  } catch (error) {
    recordFailureState(fifaSyncDiagnostics.broadcastGuide, error);
    if (broadcastGuideCache?.key === cacheKey) {
      markStaleServe(fifaSyncDiagnostics.broadcastGuide);
      console.warn(
        `Serving stale broadcast guide cache for ${cacheKey} after FIFA error:`,
        error
      );
      return broadcastGuideCache.payload;
    }
    throw error;
  }
};
var getMatchStatesPayload = async (language) => {
  const cacheKey = language;
  fifaSyncDiagnostics.matchStates.lastAttemptAt = (/* @__PURE__ */ new Date()).toISOString();
  if (matchStatesCache && matchStatesCache.key === cacheKey && matchStatesCache.expiresAt > Date.now()) {
    return matchStatesCache.payload;
  }
  if (isCircuitOpen(fifaSyncDiagnostics.matchStates)) {
    if (matchStatesCache?.key === cacheKey) {
      markStaleServe(fifaSyncDiagnostics.matchStates);
      console.warn(`Match states circuit open for ${cacheKey}; serving stale cache.`);
      return matchStatesCache.payload;
    }
    throw new Error("FIFA match-state fetch temporarily paused after repeated failures.");
  }
  try {
    const calendarMatches = await fetchCalendarMatches(language);
    const matchedStates = APP_MATCHES.map((match) => {
      const fifaMatch = findCalendarMatch(match, calendarMatches, language);
      const calendarState = buildMatchStateEntry(match, fifaMatch);
      return {
        match,
        fifaMatch,
        calendarState
      };
    });
    const detailedMatchIds = matchedStates.filter(
      ({ calendarState, fifaMatch }) => calendarState.status !== "PRE_GAME" && fifaMatch?.IdMatch
    ).map(({ fifaMatch }) => fifaMatch.IdMatch);
    const liveResults = await Promise.all(
      detailedMatchIds.map(async (matchId) => {
        try {
          return await fetchLiveMatch(matchId, language);
        } catch (error) {
          console.error(`FIFA live endpoint error for match ${matchId}:`, error);
          return null;
        }
      })
    );
    const liveMatchesById = new Map(
      liveResults.filter(
        (liveMatch) => Boolean(liveMatch?.IdMatch)
      ).map((liveMatch) => [liveMatch.IdMatch, liveMatch])
    );
    const states = Object.fromEntries(
      matchedStates.map(({ match, fifaMatch }) => {
        return [
          match.id,
          buildMatchStateEntry(
            match,
            fifaMatch,
            fifaMatch ? liveMatchesById.get(fifaMatch.IdMatch) : void 0
          )
        ];
      })
    );
    const payload = {
      language,
      refreshAfterMs: getMatchStateCacheTtlMs(states),
      states
    };
    matchStatesCache = {
      key: cacheKey,
      createdAt: Date.now(),
      expiresAt: Date.now() + payload.refreshAfterMs,
      payload
    };
    fifaSyncDiagnostics.matchStates.lastSuccessAt = (/* @__PURE__ */ new Date()).toISOString();
    resetFailureState(fifaSyncDiagnostics.matchStates);
    fifaSyncDiagnostics.matchStates.activeLiveMatchIds = Object.entries(states).filter(([, state]) => state.status === "LIVE").map(([matchId]) => matchId);
    fifaSyncDiagnostics.matchStates.lastRefreshAfterMs = payload.refreshAfterMs;
    return payload;
  } catch (error) {
    recordFailureState(fifaSyncDiagnostics.matchStates, error);
    if (matchStatesCache?.key === cacheKey) {
      markStaleServe(fifaSyncDiagnostics.matchStates);
      console.warn(
        `Serving stale match states cache for ${cacheKey} after FIFA error:`,
        error
      );
      return matchStatesCache.payload;
    }
    throw error;
  }
};
var getMatchOverlaysPayload = async (country, language) => {
  const [broadcastGuidePayload, matchStatesPayload] = await Promise.all([
    getBroadcastGuidePayload(country, language),
    getMatchStatesPayload(language)
  ]);
  const overlays = Object.fromEntries(
    APP_MATCHES.map((match) => [
      match.id,
      {
        broadcastGuide: broadcastGuidePayload.guides[match.id],
        matchState: matchStatesPayload.states[match.id]
      }
    ])
  );
  return {
    country,
    language,
    refreshAfterMs: matchStatesPayload.refreshAfterMs,
    overlays
  };
};
var scheduleBackgroundWarm = (delayMs) => {
  if (backgroundWarmTimeout) {
    clearTimeout(backgroundWarmTimeout);
  }
  fifaSyncDiagnostics.backgroundWarm.nextWarmAt = new Date(
    Date.now() + delayMs
  ).toISOString();
  backgroundWarmTimeout = setTimeout(() => {
    void warmDefaultFifaCaches();
  }, delayMs);
  backgroundWarmTimeout.unref?.();
};
var warmDefaultFifaCaches = async () => {
  if (fifaSyncDiagnostics.backgroundWarm.inFlight) {
    return;
  }
  fifaSyncDiagnostics.backgroundWarm.inFlight = true;
  fifaSyncDiagnostics.backgroundWarm.lastStartedAt = (/* @__PURE__ */ new Date()).toISOString();
  try {
    const payload = await getMatchOverlaysPayload(
      DEFAULT_BROADCAST_COUNTRY,
      DEFAULT_BROADCAST_LANGUAGE
    );
    fifaSyncDiagnostics.backgroundWarm.lastSucceededAt = (/* @__PURE__ */ new Date()).toISOString();
    fifaSyncDiagnostics.backgroundWarm.lastError = null;
    fifaSyncDiagnostics.backgroundWarm.lastRefreshAfterMs = payload.refreshAfterMs;
    fifaSyncDiagnostics.backgroundWarm.cycleCount += 1;
    scheduleBackgroundWarm(payload.refreshAfterMs);
  } catch (error) {
    fifaSyncDiagnostics.backgroundWarm.lastError = serializeErrorMessage(error);
    scheduleBackgroundWarm(BACKGROUND_WARM_FAILURE_RETRY_MS);
    console.error("FIFA background warm error:", error);
  } finally {
    fifaSyncDiagnostics.backgroundWarm.inFlight = false;
  }
};
var isPortAvailable = async (port, host) => new Promise((resolve, reject) => {
  const probe = (0, import_node_net.createServer)();
  probe.once("error", (error) => {
    probe.close();
    if (error.code === "EADDRINUSE") {
      resolve(false);
      return;
    }
    reject(error);
  });
  probe.once("listening", () => {
    probe.close((closeError) => {
      if (closeError) {
        reject(closeError);
        return;
      }
      resolve(true);
    });
  });
  probe.listen(port, host);
});
var resolveAppPort = async () => {
  let candidatePort = DEFAULT_PORT;
  while (!await isPortAvailable(candidatePort, HOST)) {
    if (STRICT_PORT) {
      throw new Error(`Port ${candidatePort} is already in use.`);
    }
    candidatePort += 1;
  }
  return candidatePort;
};
app.get("/api/broadcast-guide", async (req, res) => {
  try {
    const country = typeof req.query.country === "string" && req.query.country.trim() ? req.query.country.trim().toUpperCase() : DEFAULT_BROADCAST_COUNTRY;
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    res.set("Cache-Control", "no-store");
    res.json(await getBroadcastGuidePayload(country, language));
  } catch (error) {
    console.error("FIFA API Error in /api/broadcast-guide:", error);
    res.status(502).json({
      error: error?.message || "Erro ao carregar guia de transmiss\xE3o da FIFA"
    });
  }
});
app.get("/api/match-states", async (req, res) => {
  try {
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    res.set("Cache-Control", "no-store");
    res.json(await getMatchStatesPayload(language));
  } catch (error) {
    console.error("FIFA API Error in /api/match-states:", error);
    res.status(502).json({ error: error?.message || "Erro ao carregar placares da FIFA" });
  }
});
app.get("/api/match-overlays", async (req, res) => {
  try {
    const country = typeof req.query.country === "string" && req.query.country.trim() ? req.query.country.trim().toUpperCase() : DEFAULT_BROADCAST_COUNTRY;
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    res.set("Cache-Control", "no-store");
    res.json(await getMatchOverlaysPayload(country, language));
  } catch (error) {
    console.error("FIFA API Error in /api/match-overlays:", error);
    res.status(502).json({
      error: error?.message || "Erro ao carregar dados unificados da FIFA"
    });
  }
});
app.get("/api/fifa-sync-status", (_req, res) => {
  const now = Date.now();
  const broadcastGuideFallbackCount = broadcastGuideCache ? Object.values(broadcastGuideCache.payload.guides).filter(
    (guide) => guide.source === "fallback"
  ).length : 0;
  const matchStateFallbackCount = matchStatesCache ? Object.values(matchStatesCache.payload.states).filter(
    (state) => state.source === "fallback"
  ).length : 0;
  res.set("Cache-Control", "no-store");
  res.json({
    generatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    uptimeSeconds: Math.round(process.uptime()),
    services: {
      broadcastGuide: {
        ...fifaSyncDiagnostics.broadcastGuide,
        circuitOpen: isCircuitOpen(fifaSyncDiagnostics.broadcastGuide),
        circuitOpenRemainingMs: (() => {
          const openUntilMs = getCircuitOpenUntilMs(fifaSyncDiagnostics.broadcastGuide);
          return openUntilMs ? Math.max(0, openUntilMs - now) : null;
        })(),
        cacheKey: broadcastGuideCache?.key || null,
        cacheAgeMs: broadcastGuideCache ? now - broadcastGuideCache.createdAt : null,
        cacheExpiresInMs: broadcastGuideCache ? Math.max(0, broadcastGuideCache.expiresAt - now) : null,
        fallbackMatchCount: broadcastGuideFallbackCount
      },
      matchStates: {
        ...fifaSyncDiagnostics.matchStates,
        circuitOpen: isCircuitOpen(fifaSyncDiagnostics.matchStates),
        circuitOpenRemainingMs: (() => {
          const openUntilMs = getCircuitOpenUntilMs(fifaSyncDiagnostics.matchStates);
          return openUntilMs ? Math.max(0, openUntilMs - now) : null;
        })(),
        cacheKey: matchStatesCache?.key || null,
        cacheAgeMs: matchStatesCache ? now - matchStatesCache.createdAt : null,
        cacheExpiresInMs: matchStatesCache ? Math.max(0, matchStatesCache.expiresAt - now) : null,
        fallbackMatchCount: matchStateFallbackCount
      },
      backgroundWarm: fifaSyncDiagnostics.backgroundWarm
    },
    summary: {
      hasLiveMatches: fifaSyncDiagnostics.matchStates.activeLiveMatchIds.length > 0,
      activeLiveMatchIds: fifaSyncDiagnostics.matchStates.activeLiveMatchIds
    }
  });
});
async function startServer() {
  const port = await resolveAppPort();
  const httpServer = (0, import_node_http.createServer)(app);
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === "true" ? false : { server: httpServer }
      },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  httpServer.listen(port, HOST, () => {
    if (port !== DEFAULT_PORT) {
      console.warn(`Port ${DEFAULT_PORT} was busy, using ${port} instead.`);
    }
    console.log(`Server is running on port ${port}`);
    void warmDefaultFifaCaches();
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
