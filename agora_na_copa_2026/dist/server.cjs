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

// src/utils/playerMetadata.ts
var normalizePlayerMetadataName = (value) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]+/g, "").toUpperCase();
var PLAYER_METADATA = [
  {
    teamCode: "KSA",
    aliases: ["Abdulilah Alamri", "Alamri", "Al-Amri"],
    socials: {
      instagram: "https://instagram.com/aalamri32"
    }
  }
];
var getPlayerMetadataSupplement = (teamCode, playerName) => {
  const normalizedTeamCode = teamCode.trim().toUpperCase();
  const normalizedPlayerName = normalizePlayerMetadataName(playerName);
  const entry = PLAYER_METADATA.find(
    (candidate) => candidate.teamCode === normalizedTeamCode && candidate.aliases.some(
      (alias) => normalizePlayerMetadataName(alias) === normalizedPlayerName
    )
  );
  return entry ? {
    socials: entry.socials
  } : null;
};

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
var normalizePlayerName = (name) => normalizeText(name);
var findMatchingLineupPlayer = (player, lineup) => {
  const normalizedName = normalizePlayerName(player.name);
  return lineup.find(
    (candidate) => candidate.number === player.number && normalizePlayerName(candidate.name) === normalizedName
  ) || lineup.find((candidate) => candidate.number === player.number) || lineup.find(
    (candidate) => normalizePlayerName(candidate.name) === normalizedName
  );
};
var getFifaPlayerPictureUrl = (player) => player?.PlayerPicture?.PictureUrl || void 0;
var getNormalizedPlayerNameParts = (name) => name.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]+/g, " ").trim().toUpperCase().split(/\s+/).filter(Boolean);
var getNormalizedSurname = (name) => getNormalizedPlayerNameParts(name).at(-1) || "";
var isInitialMatch = (left, right) => Boolean(left) && Boolean(right) && left[0] === right[0];
var isStrongPlayerNameMatch = (leftName, rightName) => {
  const leftNormalized = normalizePlayerName(leftName);
  const rightNormalized = normalizePlayerName(rightName);
  if (leftNormalized === rightNormalized) {
    return true;
  }
  const leftParts = getNormalizedPlayerNameParts(leftName);
  const rightParts = getNormalizedPlayerNameParts(rightName);
  if (leftParts.length === 0 || rightParts.length === 0) {
    return false;
  }
  const leftSurname = leftParts.at(-1);
  const rightSurname = rightParts.at(-1);
  if (!leftSurname || !rightSurname || leftSurname !== rightSurname) {
    return false;
  }
  const leftFirst = leftParts[0] || "";
  const rightFirst = rightParts[0] || "";
  return isInitialMatch(leftFirst, rightFirst);
};
var getComparableFifaPlayerNames = (player) => [
  getBestPlayerName(player.PlayerName, ""),
  getBestPlayerName(player.ShortName, "")
].filter(Boolean);
var findMatchingFifaPlayer = (player, fifaPlayers) => {
  return fifaPlayers.find((candidate) => {
    return (candidate.ShirtNumber || 0) === player.number && getComparableFifaPlayerNames(candidate).some(
      (candidateName) => isStrongPlayerNameMatch(player.name, candidateName)
    );
  }) || fifaPlayers.find((candidate) => {
    return getComparableFifaPlayerNames(candidate).some(
      (candidateName) => isStrongPlayerNameMatch(player.name, candidateName)
    );
  }) || fifaPlayers.find((candidate) => {
    const candidateSurnameMatches = getComparableFifaPlayerNames(candidate).some(
      (candidateName) => getNormalizedSurname(candidateName) === getNormalizedSurname(player.name)
    );
    return (candidate.ShirtNumber || 0) === player.number && candidateSurnameMatches;
  });
};
var mergeLineupWithLocalMetadata = (players, fallbackLineup, teamCode) => players.map((player) => {
  const fallbackPlayer = findMatchingLineupPlayer(player, fallbackLineup);
  const metadataSupplement = getPlayerMetadataSupplement(teamCode, player.name);
  if (!fallbackPlayer) {
    return {
      ...player,
      socials: player.socials ?? metadataSupplement?.socials
    };
  }
  return {
    ...player,
    club: player.club ?? fallbackPlayer.club,
    pictureUrl: player.pictureUrl ?? fallbackPlayer.pictureUrl,
    socials: player.socials ?? fallbackPlayer.socials ?? metadataSupplement?.socials
  };
});
var enrichFallbackLineupWithFifaPictures = (fallbackLineup, fifaTeam, teamCode) => {
  const fifaPlayers = fifaTeam?.Players;
  if (!fifaPlayers || fifaPlayers.length === 0) return fallbackLineup;
  return fallbackLineup.map((player) => {
    const fifaPlayer = findMatchingFifaPlayer(player, fifaPlayers);
    const pictureUrl = getFifaPlayerPictureUrl(fifaPlayer);
    if (!fifaPlayer) {
      return player;
    }
    return {
      ...player,
      number: fifaPlayer.ShirtNumber || player.number,
      pictureUrl: pictureUrl ?? player.pictureUrl,
      socials: player.socials ?? getPlayerMetadataSupplement(teamCode, player.name)?.socials
    };
  });
};
var buildPlayerNameMap = (team2) => {
  const players = team2?.Players || [];
  return new Map(
    players.map((player) => [
      player.IdPlayer,
      getBestPlayerName(player.ShortName, getBestPlayerName(player.PlayerName, "Jogador"))
    ])
  );
};
var buildFifaPlayerMap = (team2) => {
  const players = team2?.Players || [];
  return new Map(players.map((player) => [player.IdPlayer, player]));
};
var toIncidentPlayerMention = (fifaPlayer, fallbackName) => ({
  id: fifaPlayer?.IdPlayer,
  name: fallbackName,
  number: typeof fifaPlayer?.ShirtNumber === "number" ? fifaPlayer.ShirtNumber : void 0,
  position: typeof fifaPlayer?.Position === "number" ? FIFA_POSITION_TO_LOCAL[fifaPlayer.Position] ?? "MF" /* MF */ : void 0,
  pictureUrl: getFifaPlayerPictureUrl(fifaPlayer)
});
var getIncidentsFromLiveFifa = (fifaMatch) => {
  const homePlayerNames = buildPlayerNameMap(fifaMatch.HomeTeam);
  const awayPlayerNames = buildPlayerNameMap(fifaMatch.AwayTeam);
  const homePlayers = buildFifaPlayerMap(fifaMatch.HomeTeam);
  const awayPlayers = buildFifaPlayerMap(fifaMatch.AwayTeam);
  const buildGoalIncidents = (goals, playerNames, players, team2) => (goals || []).map((goal, index) => {
    const playerName = goal.IdPlayer ? playerNames.get(goal.IdPlayer) || "Jogador" : "Jogador";
    return {
      id: `${team2}-goal-${goal.IdGoal || `${goal.Minute || "sem-minuto"}-${index}`}`,
      time: goal.Minute || "--'",
      type: "GOAL",
      text: `${playerName} marcou.`,
      team: team2,
      playerMentions: [toIncidentPlayerMention(goal.IdPlayer ? players.get(goal.IdPlayer) : void 0, playerName)],
      period: goal.Period
    };
  });
  const buildBookingIncidents = (bookings, playerNames, players, team2) => (bookings || []).filter((booking) => booking.Card === 1 || booking.Card === 2).map((booking, index) => {
    const playerName = booking.IdPlayer ? playerNames.get(booking.IdPlayer) || "Jogador" : "Jogador";
    const isRedCard = booking.Card === 2;
    return {
      id: `${team2}-card-${booking.IdEvent || `${booking.Minute || "sem-minuto"}-${index}`}`,
      time: booking.Minute || "--'",
      type: isRedCard ? "RED_CARD" : "YELLOW_CARD",
      text: isRedCard ? `${playerName} foi expulso.` : `${playerName} recebeu amarelo.`,
      team: team2,
      playerMentions: [
        toIncidentPlayerMention(
          booking.IdPlayer ? players.get(booking.IdPlayer) : void 0,
          playerName
        )
      ],
      period: booking.Period
    };
  });
  const buildSubstitutionIncidents = (substitutions, playerNames, players, team2) => (substitutions || []).map((substitution, index) => {
    const playerOffName = getBestPlayerName(
      substitution.PlayerOffName,
      substitution.IdPlayerOff ? playerNames.get(substitution.IdPlayerOff) || "Jogador" : "Jogador"
    ) || "Jogador";
    const playerOnName = getBestPlayerName(
      substitution.PlayerOnName,
      substitution.IdPlayerOn ? playerNames.get(substitution.IdPlayerOn) || "Jogador" : "Jogador"
    ) || "Jogador";
    return {
      id: `${team2}-sub-${substitution.IdEvent || `${substitution.Minute || "sem-minuto"}-${index}`}`,
      time: substitution.Minute || "--'",
      type: "SUBSTITUTION",
      text: `Sai ${playerOffName}, entra ${playerOnName}.`,
      team: team2,
      playerMentions: [
        toIncidentPlayerMention(
          substitution.IdPlayerOff ? players.get(substitution.IdPlayerOff) : void 0,
          playerOffName
        ),
        toIncidentPlayerMention(
          substitution.IdPlayerOn ? players.get(substitution.IdPlayerOn) : void 0,
          playerOnName
        )
      ],
      period: substitution.Period
    };
  });
  return [
    ...buildGoalIncidents(fifaMatch.HomeTeam?.Goals, homePlayerNames, homePlayers, "A"),
    ...buildGoalIncidents(fifaMatch.AwayTeam?.Goals, awayPlayerNames, awayPlayers, "B"),
    ...buildBookingIncidents(fifaMatch.HomeTeam?.Bookings, homePlayerNames, homePlayers, "A"),
    ...buildBookingIncidents(fifaMatch.AwayTeam?.Bookings, awayPlayerNames, awayPlayers, "B"),
    ...buildSubstitutionIncidents(
      fifaMatch.HomeTeam?.Substitutions,
      homePlayerNames,
      homePlayers,
      "A"
    ),
    ...buildSubstitutionIncidents(
      fifaMatch.AwayTeam?.Substitutions,
      awayPlayerNames,
      awayPlayers,
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
var FIFA_POSITION_TO_LOCAL = {
  0: "GK" /* GK */,
  1: "DF" /* DF */,
  2: "MF" /* MF */,
  3: "FW" /* FW */
};
var GK_Y = 88;
var FIRST_ROW_Y = 72;
var LAST_ROW_Y = 18;
var parseFormation = (tactics) => {
  if (!tactics) return null;
  const rows = tactics.split("-").map((part) => Number.parseInt(part, 10));
  if (rows.length < 2 || rows.some((count) => !Number.isFinite(count) || count <= 0)) {
    return null;
  }
  const total = rows.reduce((sum, count) => sum + count, 0);
  return total === 10 ? rows : null;
};
var getFormationCoordinates = (formation) => {
  const coords = [{ x: 50, y: GK_Y }];
  const rowCount = formation.length;
  formation.forEach((count, rowIndex) => {
    const y = rowCount === 1 ? Math.round((FIRST_ROW_Y + LAST_ROW_Y) / 2) : Math.round(FIRST_ROW_Y - rowIndex * (FIRST_ROW_Y - LAST_ROW_Y) / (rowCount - 1));
    for (let i = 0; i < count; i++) {
      const x = count === 1 ? 50 : Math.round(12 + i * (88 - 12) / (count - 1));
      coords.push({ x, y });
    }
  });
  return coords;
};
var getStartingLineupFromLiveFifa = (team2) => {
  const players = team2?.Players;
  if (!players || players.length < 11) return null;
  const formation = parseFormation(team2?.Tactics);
  if (!formation) return null;
  const starters = players.slice(0, 11);
  const counts = [0, 0, 0, 0];
  for (const player of starters) {
    if (typeof player.Position === "number" && player.Position >= 0 && player.Position <= 3) {
      counts[player.Position] += 1;
    }
  }
  const expectedForwards = formation[formation.length - 1];
  const expectedDefenders = formation[0];
  const expectedMidfielders = formation.slice(1, -1).reduce((sum, count) => sum + count, 0);
  if (counts[0] !== 1 || counts[1] !== expectedDefenders || counts[2] !== expectedMidfielders || counts[3] !== expectedForwards) {
    return null;
  }
  const coords = getFormationCoordinates(formation);
  return starters.map((player, index) => ({
    id: player.IdPlayer,
    name: getBestPlayerName(player.ShortName, getBestPlayerName(player.PlayerName, "Jogador")),
    number: player.ShirtNumber || 0,
    position: FIFA_POSITION_TO_LOCAL[player.Position ?? 2] ?? "MF" /* MF */,
    x: coords[index]?.x ?? 50,
    y: coords[index]?.y ?? 50,
    pictureUrl: getFifaPlayerPictureUrl(player)
  }));
};
var buildTeamLineupEntry = (teamCode, fallbackLineup, fifaMatch, fifaTeam) => {
  const starters = getStartingLineupFromLiveFifa(fifaTeam);
  if (starters) {
    return {
      players: mergeLineupWithLocalMetadata(starters, fallbackLineup, teamCode),
      source: "fifa",
      note: "Escala\xE7\xE3o oficial divulgada pela FIFA.",
      fifaMatchId: fifaMatch?.IdMatch,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  return {
    players: enrichFallbackLineupWithFifaPictures(fallbackLineup, fifaTeam, teamCode),
    source: "fallback",
    note: fifaMatch ? "Escala\xE7\xE3o oficial da FIFA ainda n\xE3o divulgada; exibindo dados locais." : "Dados oficiais da FIFA indispon\xEDveis para esta partida no momento; exibindo dados locais.",
    fifaMatchId: fifaMatch?.IdMatch,
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
    status: "FINISHED",
    score: {
      teamA: 7,
      teamB: 1
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
    status: "FINISHED",
    score: {
      teamA: 2,
      teamB: 2
    },
    countdownTargetSeconds: 0,
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
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 0
    },
    countdownTargetSeconds: 0,
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
    status: "FINISHED",
    score: {
      teamA: 5,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "gb13", type: "STREAM", name: "Globoplay", iconColor: "#00e476", link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png" },
      { id: "cz13", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV", logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png" },
      { id: "g13", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png" },
      { id: "s13", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/", logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png" }
    ]
  },
  {
    id: "esp-cpv-2026",
    teamA: {
      name: "ESPANHA",
      code: "ESP",
      flagSvg: "spain",
      primaryColor: "#c60b1e",
      secondaryColor: "#ffc400",
      group: "Grupo H",
      lineup: [
        { id: "es1", name: "Unai Sim\xF3n", number: 23, position: "GK", x: 50, y: 88, club: "Athletic Club" },
        { id: "es2", name: "Dani Carvajal", number: 2, position: "DF", x: 15, y: 70, club: "Real Madrid" },
        { id: "es3", name: "Robin Le Normand", number: 3, position: "DF", x: 38, y: 75, club: "Atl\xE9tico de Madrid" },
        { id: "es4", name: "Aymeric Laporte", number: 14, position: "DF", x: 62, y: 75, club: "Al-Nassr" },
        { id: "es5", name: "Marc Cucurella", number: 24, position: "DF", x: 85, y: 70, club: "Chelsea" },
        { id: "es6", name: "Rodri", number: 16, position: "MF", x: 30, y: 48, club: "Manchester City" },
        { id: "es7", name: "Pedri", number: 20, position: "MF", x: 50, y: 44, club: "Barcelona" },
        { id: "es8", name: "Fabi\xE1n Ruiz", number: 8, position: "MF", x: 70, y: 48, club: "PSG" },
        { id: "es9", name: "Lamine Yamal", number: 19, position: "FW", x: 15, y: 22, club: "Barcelona" },
        { id: "es10", name: "\xC1lvaro Morata", number: 7, position: "FW", x: 50, y: 28, club: "Galatasaray" },
        { id: "es11", name: "Nico Williams", number: 11, position: "FW", x: 85, y: 22, club: "Athletic Club" }
      ]
    },
    teamB: {
      name: "CABO VERDE",
      code: "CPV",
      flagSvg: "capeverde",
      primaryColor: "#0057b8",
      secondaryColor: "#cf2027",
      group: "Grupo H",
      lineup: [
        { id: "cv1", name: "Vozinha", number: 1, position: "GK", x: 50, y: 12, club: "Gil Vicente", socials: { instagram: "https://instagram.com/vozinha1" } },
        { id: "cv2", name: "Steven Moreira", number: 22, position: "DF", x: 15, y: 30, club: "Columbus Crew" },
        { id: "cv3", name: "Logan Costa", number: 4, position: "DF", x: 38, y: 25, club: "Toulouse" },
        { id: "cv4", name: "Roberto Lopes", number: 3, position: "DF", x: 62, y: 25, club: "Shamrock Rovers" },
        { id: "cv5", name: "Jo\xE3o Paulo", number: 5, position: "DF", x: 85, y: 30, club: "Omonia" },
        { id: "cv6", name: "Kevin Pina", number: 8, position: "MF", x: 30, y: 50, club: "CSKA Sofia" },
        { id: "cv7", name: "Deroy Duarte", number: 14, position: "MF", x: 50, y: 45, club: "Fortuna Sittard" },
        { id: "cv8", name: "Jovane Cabral", number: 7, position: "MF", x: 70, y: 50, club: "Olympiacos" },
        { id: "cv9", name: "Garry Rodrigues", number: 11, position: "FW", x: 15, y: 75, club: "Sivasspor" },
        { id: "cv10", name: "Beb\xE9", number: 21, position: "FW", x: 50, y: 85, club: "Racing Ferrol" },
        { id: "cv11", name: "Willy Semedo", number: 17, position: "FW", x: 85, y: 75, club: "Al-Faisaly" }
      ]
    },
    stadiumName: "Est\xE1dio de Atlanta",
    city: "ATLANTA",
    stageName: "Group Stage",
    kickoffTime: "13:00",
    kickoffDate: "15 Junho, 2026",
    kickoffTimestamp: "2026-06-15T13:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 0,
      teamB: 0
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "g14", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/" },
      { id: "s14", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "cz14", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  },
  {
    id: "bel-egy-2026",
    teamA: {
      name: "B\xC9LGICA",
      code: "BEL",
      flagSvg: "belgium",
      primaryColor: "#000000",
      secondaryColor: "#fae042",
      group: "Grupo G",
      lineup: [
        { id: "be1", name: "Koen Casteels", number: 1, position: "GK", x: 50, y: 88, club: "Al-Qadsiah" },
        { id: "be2", name: "Timothy Castagne", number: 21, position: "DF", x: 15, y: 70, club: "Fulham" },
        { id: "be3", name: "Wout Faes", number: 4, position: "DF", x: 38, y: 75, club: "Leicester City" },
        { id: "be4", name: "Zeno Debast", number: 2, position: "DF", x: 62, y: 75, club: "Sporting" },
        { id: "be5", name: "Arthur Theate", number: 3, position: "DF", x: 85, y: 70, club: "Eintracht Frankfurt" },
        { id: "be6", name: "Amadou Onana", number: 24, position: "MF", x: 30, y: 48, club: "Aston Villa" },
        { id: "be7", name: "Youri Tielemans", number: 8, position: "MF", x: 50, y: 44, club: "Aston Villa" },
        { id: "be8", name: "Kevin De Bruyne", number: 7, position: "MF", x: 70, y: 48, club: "Manchester City" },
        { id: "be9", name: "J\xE9r\xE9my Doku", number: 22, position: "FW", x: 15, y: 22, club: "Manchester City" },
        { id: "be10", name: "Romelu Lukaku", number: 10, position: "FW", x: 50, y: 28, club: "Roma" },
        { id: "be11", name: "Leandro Trossard", number: 11, position: "FW", x: 85, y: 22, club: "Arsenal" }
      ]
    },
    teamB: {
      name: "EGITO",
      code: "EGY",
      flagSvg: "egypt",
      primaryColor: "#ce1126",
      secondaryColor: "#000000",
      group: "Grupo G",
      lineup: [
        { id: "eg1", name: "Mohamed El Shenawy", number: 1, position: "GK", x: 50, y: 12, club: "Al Ahly" },
        { id: "eg2", name: "Mohamed Hany", number: 3, position: "DF", x: 15, y: 30, club: "Al Ahly" },
        { id: "eg3", name: "Ramy Rabia", number: 5, position: "DF", x: 38, y: 25, club: "Al Ahly" },
        { id: "eg4", name: "Mohamed Abdelmonem", number: 6, position: "DF", x: 62, y: 25, club: "Nice" },
        { id: "eg5", name: "Ahmed Fattouh", number: 13, position: "DF", x: 85, y: 30, club: "Zamalek" },
        { id: "eg6", name: "Hamdi Fathi", number: 8, position: "MF", x: 30, y: 50, club: "Al Wakrah" },
        { id: "eg7", name: "Marwan Attia", number: 19, position: "MF", x: 50, y: 45, club: "Al Ahly" },
        { id: "eg8", name: "Emam Ashour", number: 22, position: "MF", x: 70, y: 50, club: "Al Ahly" },
        { id: "eg9", name: "Mahmoud Tr\xE9z\xE9guet", number: 7, position: "FW", x: 15, y: 75, club: "Trabzonspor" },
        { id: "eg10", name: "Mostafa Mohamed", number: 11, position: "FW", x: 50, y: 85, club: "Nantes" },
        { id: "eg11", name: "Mohamed Salah", number: 10, position: "FW", x: 85, y: 75, club: "Liverpool" }
      ]
    },
    stadiumName: "Est\xE1dio de Seattle",
    city: "SEATTLE",
    stageName: "Group Stage",
    kickoffTime: "16:00",
    kickoffDate: "15 Junho, 2026",
    kickoffTimestamp: "2026-06-15T16:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "g15", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/" },
      { id: "s15", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "cz15", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  },
  {
    id: "ksa-uru-2026",
    teamA: {
      name: "AR\xC1BIA SAUDITA",
      code: "KSA",
      flagSvg: "saudiarabia",
      primaryColor: "#006c35",
      secondaryColor: "#ffffff",
      group: "Grupo H",
      lineup: [
        { id: "sau1", name: "Mohammed Al-Owais", number: 21, position: "GK", x: 50, y: 88, club: "Al-Hilal", socials: { instagram: "https://instagram.com/alowais_33" } },
        { id: "sau2", name: "Saud Abdulhamid", number: 12, position: "DF", x: 15, y: 70, club: "Roma" },
        { id: "sau3", name: "Hassan Kadesh", number: 14, position: "DF", x: 38, y: 75, club: "Al-Ittihad" },
        { id: "sau4", name: "Ali Al-Bulaihi", number: 5, position: "DF", x: 62, y: 75, club: "Al-Hilal" },
        { id: "sau5", name: "Yasser Al-Shahrani", number: 13, position: "DF", x: 85, y: 70, club: "Al-Hilal" },
        { id: "sau6", name: "Mohamed Kanno", number: 23, position: "MF", x: 30, y: 48, club: "Al-Hilal" },
        { id: "sau7", name: "Nasser Al-Dawsari", number: 8, position: "MF", x: 50, y: 44, club: "Al-Hilal" },
        { id: "sau8", name: "Salem Al-Dawsari", number: 10, position: "MF", x: 70, y: 48, club: "Al-Hilal" },
        { id: "sau9", name: "Firas Al-Buraikan", number: 9, position: "FW", x: 15, y: 22, club: "Al-Ahli" },
        { id: "sau10", name: "Saleh Al-Shehri", number: 11, position: "FW", x: 50, y: 28, club: "Al-Ittihad" },
        { id: "sau11", name: "Abdulrahman Ghareeb", number: 7, position: "FW", x: 85, y: 22, club: "Al-Nassr" }
      ]
    },
    teamB: {
      name: "URUGUAI",
      code: "URU",
      flagSvg: "uruguay",
      primaryColor: "#0038a8",
      secondaryColor: "#fcd116",
      group: "Grupo H",
      lineup: [
        { id: "uy1", name: "Sergio Rochet", number: 1, position: "GK", x: 50, y: 12, club: "Internacional" },
        { id: "uy2", name: "Nahitan N\xE1ndez", number: 8, position: "DF", x: 15, y: 30, club: "Al-Qadsiah" },
        { id: "uy3", name: "Ronald Ara\xFAjo", number: 4, position: "DF", x: 38, y: 25, club: "Barcelona" },
        { id: "uy4", name: "Jos\xE9 Mar\xEDa Gim\xE9nez", number: 2, position: "DF", x: 62, y: 25, club: "Atl\xE9tico de Madrid" },
        { id: "uy5", name: "Math\xEDas Olivera", number: 16, position: "DF", x: 85, y: 30, club: "Napoli" },
        { id: "uy6", name: "Manuel Ugarte", number: 5, position: "MF", x: 30, y: 50, club: "Manchester United" },
        { id: "uy7", name: "Federico Valverde", number: 15, position: "MF", x: 50, y: 45, club: "Real Madrid" },
        { id: "uy8", name: "Nicol\xE1s de la Cruz", number: 7, position: "MF", x: 70, y: 50, club: "Flamengo" },
        { id: "uy9", name: "Facundo Pellistri", number: 11, position: "FW", x: 15, y: 75, club: "Panathinaikos" },
        { id: "uy10", name: "Darwin N\xFA\xF1ez", number: 9, position: "FW", x: 50, y: 85, club: "Liverpool" },
        { id: "uy11", name: "Maximiliano Ara\xFAjo", number: 20, position: "FW", x: 85, y: 75, club: "Sporting", socials: { instagram: "https://instagram.com/maximilianoaraujo6" } }
      ]
    },
    stadiumName: "Est\xE1dio de Miami",
    city: "MIAMI",
    stageName: "Group Stage",
    kickoffTime: "19:00",
    kickoffDate: "15 Junho, 2026",
    kickoffTimestamp: "2026-06-15T19:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "g16", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/" },
      { id: "s16", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "cz16", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  },
  {
    id: "irn-nzl-2026",
    teamA: {
      name: "IR\xC3",
      code: "IRN",
      flagSvg: "iran",
      primaryColor: "#239f40",
      secondaryColor: "#da0000",
      group: "Grupo G",
      lineup: [
        { id: "ir1", name: "Alireza Beiranvand", number: 1, position: "GK", x: 50, y: 88, club: "Persepolis" },
        { id: "ir2", name: "Sadegh Moharrami", number: 2, position: "DF", x: 15, y: 70, club: "Dinamo Zagreb" },
        { id: "ir3", name: "Shoja Khalilzadeh", number: 5, position: "DF", x: 38, y: 75, club: "Tractor" },
        { id: "ir4", name: "Hossein Kanaani", number: 13, position: "DF", x: 62, y: 75, club: "Persepolis" },
        { id: "ir5", name: "Milad Mohammadi", number: 3, position: "DF", x: 85, y: 70, club: "Persepolis" },
        { id: "ir6", name: "Saeid Ezatolahi", number: 6, position: "MF", x: 30, y: 48, club: "Shabab Al Ahli" },
        { id: "ir7", name: "Rouzbeh Cheshmi", number: 15, position: "MF", x: 50, y: 44, club: "Esteghlal" },
        { id: "ir8", name: "Saman Ghoddos", number: 14, position: "MF", x: 70, y: 48, club: "Kalba" },
        { id: "ir9", name: "Mehdi Ghayedi", number: 10, position: "FW", x: 15, y: 22, club: "Kalba" },
        { id: "ir10", name: "Sardar Azmoun", number: 20, position: "FW", x: 50, y: 28, club: "Shabab Al Ahli" },
        { id: "ir11", name: "Mehdi Taremi", number: 9, position: "FW", x: 85, y: 22, club: "Inter de Mil\xE3o" }
      ]
    },
    teamB: {
      name: "NOVA ZEL\xC2NDIA",
      code: "NZL",
      flagSvg: "newzealand",
      primaryColor: "#00247d",
      secondaryColor: "#c8102e",
      group: "Grupo G",
      lineup: [
        { id: "nz1", name: "Max Crocombe", number: 1, position: "GK", x: 50, y: 12, club: "Burton Albion" },
        { id: "nz2", name: "Tim Payne", number: 2, position: "DF", x: 15, y: 30, club: "Wellington Phoenix" },
        { id: "nz3", name: "Michael Boxall", number: 5, position: "DF", x: 38, y: 25, club: "Minnesota United" },
        { id: "nz4", name: "Tyler Bindon", number: 4, position: "DF", x: 62, y: 25, club: "Reading" },
        { id: "nz5", name: "Liberato Cacace", number: 13, position: "DF", x: 85, y: 30, club: "Empoli" },
        { id: "nz6", name: "Joe Bell", number: 6, position: "MF", x: 30, y: 50, club: "Viking FK" },
        { id: "nz7", name: "Marko Stamenic", number: 8, position: "MF", x: 50, y: 45, club: "Olympiacos" },
        { id: "nz8", name: "Sarpreet Singh", number: 10, position: "MF", x: 70, y: 50, club: "Leiria" },
        { id: "nz9", name: "Elijah Just", number: 11, position: "FW", x: 15, y: 75, club: "SKN St. Polten" },
        { id: "nz10", name: "Chris Wood", number: 9, position: "FW", x: 50, y: 85, club: "Nottingham Forest" },
        { id: "nz11", name: "Ben Waine", number: 17, position: "FW", x: 85, y: 75, club: "Plymouth Argyle" }
      ]
    },
    stadiumName: "Est\xE1dio de Los Angeles",
    city: "LOS ANGELES",
    stageName: "Group Stage",
    kickoffTime: "22:00",
    kickoffDate: "15 Junho, 2026",
    kickoffTimestamp: "2026-06-15T22:00:00-03:00",
    status: "PRE_GAME",
    countdownTargetSeconds: 0,
    broadcasters: [
      { id: "g17", type: "TV ABERTA", name: "TV Globo", iconColor: "#05ff85", link: "https://redeglobo.globo.com/" },
      { id: "s17", type: "TV PAGA", name: "sportv", iconColor: "#ffd700", link: "https://ge.globo.com/sportv/" },
      { id: "cz17", type: "YOUTUBE", name: "Caz\xE9TV", iconColor: "#ed2939", link: "https://www.youtube.com/@CazeTV" }
    ]
  }
];

// src/data/bbcScheduledMatches.ts
var BBC_SCHEDULED_MATCHES = [
  // Grupo A
  { teamA: "CZE", teamB: "RSA", kickoffTimestamp: "2026-06-18T13:00:00-03:00" },
  { teamA: "MEX", teamB: "KOR", kickoffTimestamp: "2026-06-18T22:00:00-03:00" },
  { teamA: "CZE", teamB: "MEX", kickoffTimestamp: "2026-06-24T22:00:00-03:00" },
  { teamA: "RSA", teamB: "KOR", kickoffTimestamp: "2026-06-24T22:00:00-03:00" },
  // Grupo B
  { teamA: "SUI", teamB: "BIH", kickoffTimestamp: "2026-06-18T16:00:00-03:00" },
  { teamA: "CAN", teamB: "QAT", kickoffTimestamp: "2026-06-18T19:00:00-03:00" },
  { teamA: "BIH", teamB: "QAT", kickoffTimestamp: "2026-06-24T16:00:00-03:00" },
  { teamA: "SUI", teamB: "CAN", kickoffTimestamp: "2026-06-24T16:00:00-03:00" },
  // Grupo C
  { teamA: "SCO", teamB: "MAR", kickoffTimestamp: "2026-06-19T19:00:00-03:00" },
  { teamA: "BRA", teamB: "HAI", kickoffTimestamp: "2026-06-19T21:30:00-03:00" },
  { teamA: "MAR", teamB: "HAI", kickoffTimestamp: "2026-06-24T19:00:00-03:00" },
  { teamA: "SCO", teamB: "BRA", kickoffTimestamp: "2026-06-24T19:00:00-03:00" },
  // Grupo D
  { teamA: "USA", teamB: "AUS", kickoffTimestamp: "2026-06-19T16:00:00-03:00" },
  { teamA: "TUR", teamB: "PAR", kickoffTimestamp: "2026-06-20T00:00:00-03:00" },
  { teamA: "PAR", teamB: "AUS", kickoffTimestamp: "2026-06-25T23:00:00-03:00" },
  { teamA: "TUR", teamB: "USA", kickoffTimestamp: "2026-06-25T23:00:00-03:00" },
  // Grupo E
  { teamA: "GER", teamB: "CIV", kickoffTimestamp: "2026-06-20T17:00:00-03:00" },
  { teamA: "ECU", teamB: "CUW", kickoffTimestamp: "2026-06-20T21:00:00-03:00" },
  { teamA: "CUW", teamB: "CIV", kickoffTimestamp: "2026-06-25T17:00:00-03:00" },
  { teamA: "ECU", teamB: "GER", kickoffTimestamp: "2026-06-25T17:00:00-03:00" },
  // Grupo F
  { teamA: "NED", teamB: "SWE", kickoffTimestamp: "2026-06-20T14:00:00-03:00" },
  { teamA: "TUN", teamB: "JPN", kickoffTimestamp: "2026-06-21T01:00:00-03:00" },
  { teamA: "JPN", teamB: "SWE", kickoffTimestamp: "2026-06-25T20:00:00-03:00" },
  { teamA: "TUN", teamB: "NED", kickoffTimestamp: "2026-06-25T20:00:00-03:00" },
  // Grupo G
  { teamA: "BEL", teamB: "IRN", kickoffTimestamp: "2026-06-21T16:00:00-03:00" },
  { teamA: "NZL", teamB: "EGY", kickoffTimestamp: "2026-06-21T22:00:00-03:00" },
  { teamA: "EGY", teamB: "IRN", kickoffTimestamp: "2026-06-27T00:00:00-03:00" },
  { teamA: "NZL", teamB: "BEL", kickoffTimestamp: "2026-06-27T00:00:00-03:00" },
  // Grupo H
  { teamA: "ESP", teamB: "KSA", kickoffTimestamp: "2026-06-21T13:00:00-03:00" },
  { teamA: "URU", teamB: "CPV", kickoffTimestamp: "2026-06-21T19:00:00-03:00" },
  { teamA: "CPV", teamB: "KSA", kickoffTimestamp: "2026-06-26T21:00:00-03:00" },
  { teamA: "URU", teamB: "ESP", kickoffTimestamp: "2026-06-26T21:00:00-03:00" },
  // Grupo I
  { teamA: "IRQ", teamB: "NOR", kickoffTimestamp: "2026-06-16T19:00:00-03:00" },
  { teamA: "FRA", teamB: "IRQ", kickoffTimestamp: "2026-06-22T18:00:00-03:00" },
  { teamA: "NOR", teamB: "SEN", kickoffTimestamp: "2026-06-22T21:00:00-03:00" },
  { teamA: "NOR", teamB: "FRA", kickoffTimestamp: "2026-06-26T16:00:00-03:00" },
  { teamA: "SEN", teamB: "IRQ", kickoffTimestamp: "2026-06-26T16:00:00-03:00" },
  // Grupo J
  { teamA: "AUT", teamB: "JOR", kickoffTimestamp: "2026-06-17T01:00:00-03:00" },
  { teamA: "ARG", teamB: "AUT", kickoffTimestamp: "2026-06-22T14:00:00-03:00" },
  { teamA: "JOR", teamB: "ALG", kickoffTimestamp: "2026-06-23T00:00:00-03:00" },
  { teamA: "ALG", teamB: "AUT", kickoffTimestamp: "2026-06-27T23:00:00-03:00" },
  { teamA: "JOR", teamB: "ARG", kickoffTimestamp: "2026-06-27T23:00:00-03:00" },
  // Grupo K
  { teamA: "POR", teamB: "COD", kickoffTimestamp: "2026-06-17T14:00:00-03:00" },
  { teamA: "UZB", teamB: "COL", kickoffTimestamp: "2026-06-17T23:00:00-03:00" },
  { teamA: "POR", teamB: "UZB", kickoffTimestamp: "2026-06-23T14:00:00-03:00" },
  { teamA: "COL", teamB: "COD", kickoffTimestamp: "2026-06-23T23:00:00-03:00" },
  { teamA: "COL", teamB: "POR", kickoffTimestamp: "2026-06-27T20:30:00-03:00" },
  { teamA: "COD", teamB: "UZB", kickoffTimestamp: "2026-06-27T20:30:00-03:00" },
  // Grupo L
  { teamA: "ENG", teamB: "CRO", kickoffTimestamp: "2026-06-17T17:00:00-03:00" },
  { teamA: "GHA", teamB: "PAN", kickoffTimestamp: "2026-06-17T20:00:00-03:00" },
  { teamA: "ENG", teamB: "GHA", kickoffTimestamp: "2026-06-23T17:00:00-03:00" },
  { teamA: "PAN", teamB: "CRO", kickoffTimestamp: "2026-06-23T20:00:00-03:00" },
  { teamA: "CRO", teamB: "GHA", kickoffTimestamp: "2026-06-27T18:00:00-03:00" },
  { teamA: "PAN", teamB: "ENG", kickoffTimestamp: "2026-06-27T18:00:00-03:00" }
];

// src/data/fifaMatchVenues.ts
var FIFA_MATCH_VENUES = {
  "alg-aut-2026": { stadiumName: "Est\xE1dio de Kansas City", city: "Kansas City" },
  "arg-alg-2026": { stadiumName: "Est\xE1dio de Kansas City", city: "Kansas City" },
  "arg-aut-2026": { stadiumName: "Est\xE1dio de Dallas", city: "Dallas" },
  "aus-tur-2026": { stadiumName: "BC Place de Vancouver", city: "Vancouver" },
  "aut-jor-2026": { stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco", city: "\xC1rea da ba\xEDa de S\xE3o Francisco" },
  "bel-egy-2026": { stadiumName: "Est\xE1dio de Seattle", city: "Seattle" },
  "bel-irn-2026": { stadiumName: "Est\xE1dio de Los Angeles", city: "Los Angeles" },
  "bih-qat-2026": { stadiumName: "Est\xE1dio de Seattle", city: "Seattle" },
  "bra-hai-2026": { stadiumName: "Est\xE1dio de Filad\xE9lfia", city: "Filad\xE9lfia" },
  "bra-mar-2026": { stadiumName: "Est\xE1dio de Nova York/Nova Jersey", city: "Nova Jersey" },
  "can-bih-2026": { stadiumName: "Est\xE1dio de Toronto", city: "Toronto" },
  "can-qat-2026": { stadiumName: "BC Place de Vancouver", city: "Vancouver" },
  "civ-ecu-2026": { stadiumName: "Est\xE1dio de Filad\xE9lfia", city: "Filad\xE9lfia" },
  "cod-uzb-2026": { stadiumName: "Est\xE1dio de Atlanta", city: "Atlanta" },
  "col-cod-2026": { stadiumName: "Est\xE1dio de Guadalajara", city: "Guadalajara" },
  "col-por-2026": { stadiumName: "Est\xE1dio de Miami", city: "Miami" },
  "cpv-ksa-2026": { stadiumName: "Est\xE1dio de Houston", city: "Houston" },
  "cro-gha-2026": { stadiumName: "Est\xE1dio de Filad\xE9lfia", city: "Filad\xE9lfia" },
  "cuw-civ-2026": { stadiumName: "Est\xE1dio de Filad\xE9lfia", city: "Filad\xE9lfia" },
  "cze-mex-2026": { stadiumName: "Est\xE1dio da Cidade do M\xE9xico", city: "Cidade do M\xE9xico" },
  "cze-rsa-2026": { stadiumName: "Est\xE1dio de Atlanta", city: "Atlanta" },
  "ecu-cuw-2026": { stadiumName: "Est\xE1dio de Kansas City", city: "Kansas City" },
  "ecu-ger-2026": { stadiumName: "Est\xE1dio de Nova York/Nova Jersey", city: "Nova Jersey" },
  "egy-irn-2026": { stadiumName: "Est\xE1dio de Seattle", city: "Seattle" },
  "eng-cro-2026": { stadiumName: "Est\xE1dio de Dallas", city: "Dallas" },
  "eng-gha-2026": { stadiumName: "Est\xE1dio de Boston", city: "Boston" },
  "esp-cpv-2026": { stadiumName: "Est\xE1dio de Atlanta", city: "Atlanta" },
  "esp-ksa-2026": { stadiumName: "Est\xE1dio de Atlanta", city: "Atlanta" },
  "fra-irq-2026": { stadiumName: "Est\xE1dio de Filad\xE9lfia", city: "Filad\xE9lfia" },
  "fra-sen-2026": { stadiumName: "Est\xE1dio de Nova York/Nova Jersey", city: "Nova Jersey" },
  "ger-civ-2026": { stadiumName: "Est\xE1dio de Toronto", city: "Toronto" },
  "ger-cuw-2026": { stadiumName: "Est\xE1dio de Houston", city: "Houston" },
  "gha-pan-2026": { stadiumName: "Est\xE1dio de Toronto", city: "Toronto" },
  "hai-sco-2026": { stadiumName: "Est\xE1dio de Boston", city: "Boston" },
  "irn-nzl-2026": { stadiumName: "Est\xE1dio de Los Angeles", city: "Los Angeles" },
  "irq-nor-2026": { stadiumName: "Est\xE1dio de Boston", city: "Boston" },
  "jor-alg-2026": { stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco", city: "\xC1rea da ba\xEDa de S\xE3o Francisco" },
  "jor-arg-2026": { stadiumName: "Est\xE1dio de Dallas", city: "Dallas" },
  "jpn-swe-2026": { stadiumName: "Est\xE1dio de Dallas", city: "Dallas" },
  "kor-cze-2026": { stadiumName: "Est\xE1dio de Guadalajara", city: "Guadalajara" },
  "ksa-uru-2026": { stadiumName: "Est\xE1dio de Miami", city: "Miami" },
  "mar-hai-2026": { stadiumName: "Est\xE1dio de Atlanta", city: "Atlanta" },
  "mex-kor-2026": { stadiumName: "Est\xE1dio de Guadalajara", city: "Guadalajara" },
  "mex-rsa-2026": { stadiumName: "Est\xE1dio da Cidade do M\xE9xico", city: "Cidade do M\xE9xico" },
  "ned-jpn-2026": { stadiumName: "Est\xE1dio de Dallas", city: "Dallas" },
  "ned-swe-2026": { stadiumName: "Est\xE1dio de Houston", city: "Houston" },
  "nor-fra-2026": { stadiumName: "Est\xE1dio de Boston", city: "Boston" },
  "nor-sen-2026": { stadiumName: "Est\xE1dio de Nova York/Nova Jersey", city: "Nova Jersey" },
  "nzl-bel-2026": { stadiumName: "BC Place de Vancouver", city: "Vancouver" },
  "nzl-egy-2026": { stadiumName: "BC Place de Vancouver", city: "Vancouver" },
  "pan-cro-2026": { stadiumName: "Est\xE1dio de Toronto", city: "Toronto" },
  "pan-eng-2026": { stadiumName: "Est\xE1dio de Nova York/Nova Jersey", city: "Nova Jersey" },
  "par-aus-2026": { stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco", city: "\xC1rea da ba\xEDa de S\xE3o Francisco" },
  "por-cod-2026": { stadiumName: "Est\xE1dio de Houston", city: "Houston" },
  "por-uzb-2026": { stadiumName: "Est\xE1dio de Houston", city: "Houston" },
  "qat-sui-2026": { stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco", city: "\xC1rea da ba\xEDa de S\xE3o Francisco" },
  "rsa-kor-2026": { stadiumName: "Est\xE1dio de Monterrey", city: "Monterrey" },
  "sco-bra-2026": { stadiumName: "Est\xE1dio de Miami", city: "Miami" },
  "sco-mar-2026": { stadiumName: "Est\xE1dio de Boston", city: "Boston" },
  "sen-irq-2026": { stadiumName: "Est\xE1dio de Toronto", city: "Toronto" },
  "sui-bih-2026": { stadiumName: "Est\xE1dio de Los Angeles", city: "Los Angeles" },
  "sui-can-2026": { stadiumName: "BC Place de Vancouver", city: "Vancouver" },
  "swe-tun-2026": { stadiumName: "Est\xE1dio de Monterrey", city: "Monterrey" },
  "tun-jpn-2026": { stadiumName: "Est\xE1dio de Monterrey", city: "Monterrey" },
  "tun-ned-2026": { stadiumName: "Est\xE1dio de Kansas City", city: "Kansas City" },
  "tur-par-2026": { stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco", city: "\xC1rea da ba\xEDa de S\xE3o Francisco" },
  "tur-usa-2026": { stadiumName: "Est\xE1dio de Los Angeles", city: "Los Angeles" },
  "uru-cpv-2026": { stadiumName: "Est\xE1dio de Miami", city: "Miami" },
  "uru-esp-2026": { stadiumName: "Est\xE1dio de Guadalajara", city: "Guadalajara" },
  "usa-aus-2026": { stadiumName: "Est\xE1dio de Seattle", city: "Seattle" },
  "usa-par-2026": { stadiumName: "Est\xE1dio de Los Angeles", city: "Los Angeles" },
  "uzb-col-2026": { stadiumName: "Est\xE1dio da Cidade do M\xE9xico", city: "Cidade do M\xE9xico" }
};

// src/data/tournament.ts
function team(id, name, code, flagSvg, primaryColor, secondaryColor, group, stats) {
  const zero = { points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0 };
  return {
    id,
    name,
    code,
    flagSvg,
    primaryColor,
    secondaryColor,
    group,
    ...stats ?? zero,
    dataSource: stats ? "result" : "seed"
  };
}
var standings = [
  // Grupo A
  team("mex", "M\xC9XICO", "MEX", "mexico", "#006847", "#ce1126", "Grupo A", {
    points: 3,
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 2,
    goalsAgainst: 0,
    goalDifference: 2
  }),
  team("kor", "COR\xC9IA DO SUL", "KOR", "southkorea", "#cd2e3a", "#0047a0", "Grupo A", {
    points: 3,
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 2,
    goalsAgainst: 1,
    goalDifference: 1
  }),
  team("rsa", "\xC1FRICA DO SUL", "RSA", "southafrica", "#007a4d", "#ffb612", "Grupo A", {
    points: 0,
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 2,
    goalDifference: -2
  }),
  team("cze", "TCH\xC9QUIA", "CZE", "czechia", "#d7141a", "#11457e", "Grupo A", {
    points: 0,
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 2,
    goalDifference: -1
  }),
  // Grupo B
  team("sui", "SU\xCD\xC7A", "SUI", "switzerland", "#d52b1e", "#ffffff", "Grupo B", {
    points: 1,
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0
  }),
  team("can", "CANAD\xC1", "CAN", "canada", "#ff0000", "#ffffff", "Grupo B", {
    points: 1,
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0
  }),
  team("qat", "CATAR", "QAT", "qatar", "#8d1b3d", "#ffffff", "Grupo B", null),
  team("bih", "B\xD3SNIA E HERZEGOVINA", "BIH", "bosnia", "#002395", "#fecb00", "Grupo B", {
    points: 1,
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0
  }),
  // Grupo C
  team("bra", "BRASIL", "BRA", "brazil", "#009c3b", "#ffdf00", "Grupo C", {
    points: 1,
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0
  }),
  team("sco", "ESC\xD3CIA", "SCO", "scotland", "#0065bd", "#ffffff", "Grupo C", {
    points: 3,
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 0,
    goalDifference: 1
  }),
  team("mar", "MARROCOS", "MAR", "morocco", "#c1272d", "#006233", "Grupo C", {
    points: 1,
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0
  }),
  team("hai", "HAITI", "HAI", "haiti", "#112e8a", "#d21034", "Grupo C", {
    points: 0,
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 1,
    goalDifference: -1
  }),
  // Grupo D
  team("usa", "ESTADOS UNIDOS", "USA", "usa", "#b22234", "#3c3b6e", "Grupo D", {
    points: 3,
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 4,
    goalsAgainst: 1,
    goalDifference: 3
  }),
  team("aus", "AUSTR\xC1LIA", "AUS", "australia", "#012169", "#ffffff", "Grupo D", {
    points: 3,
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 2,
    goalsAgainst: 0,
    goalDifference: 2
  }),
  team("par", "PARAGUAI", "PAR", "paraguay", "#d52b1e", "#0038a8", "Grupo D", {
    points: 0,
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 4,
    goalDifference: -3
  }),
  team("tur", "TURQUIA", "TUR", "turkey", "#e30a17", "#ffffff", "Grupo D", {
    points: 0,
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 2,
    goalDifference: -2
  }),
  // Grupo E
  team("ger", "ALEMANHA", "GER", "germany", "#000000", "#ffce00", "Grupo E", null),
  team("cuw", "CURA\xC7AO", "CUW", "curacao", "#002b7f", "#f9e814", "Grupo E", null),
  team("civ", "COSTA DO MARFIM", "CIV", "ivorycoast", "#f77f00", "#009e60", "Grupo E", null),
  team("ecu", "EQUADOR", "ECU", "ecuador", "#fcd116", "#003893", "Grupo E", null),
  // Grupo F
  team("ned", "HOLANDA", "NED", "netherlands", "#ff4f00", "#ffffff", "Grupo F", null),
  team("jpn", "JAP\xC3O", "JPN", "japan", "#bc002d", "#ffffff", "Grupo F", null),
  team("swe", "SU\xC9CIA", "SWE", "sweden", "#006aa7", "#fecc00", "Grupo F", null),
  team("tun", "TUN\xCDSIA", "TUN", "tunisia", "#e70013", "#ffffff", "Grupo F", null),
  // Grupo G
  team("bel", "B\xC9LGICA", "BEL", "belgium", "#000000", "#fae042", "Grupo G", null),
  team("egy", "EGITO", "EGY", "egypt", "#ce1126", "#000000", "Grupo G", null),
  team("irn", "IR\xC3", "IRN", "iran", "#239f40", "#da0000", "Grupo G", null),
  team("nzl", "NOVA ZEL\xC2NDIA", "NZL", "newzealand", "#00247d", "#c8102e", "Grupo G", null),
  // Grupo H
  team("esp", "ESPANHA", "ESP", "spain", "#c60b1e", "#ffc400", "Grupo H", null),
  team("cpv", "CABO VERDE", "CPV", "capeverde", "#0057b8", "#cf2027", "Grupo H", null),
  team("ksa", "AR\xC1BIA SAUDITA", "KSA", "saudiarabia", "#006c35", "#ffffff", "Grupo H", null),
  team("uru", "URUGUAI", "URU", "uruguay", "#0038a8", "#fcd116", "Grupo H", null),
  // Grupo I
  team("fra", "FRAN\xC7A", "FRA", "france", "#002395", "#ed2939", "Grupo I", null),
  team("sen", "SENEGAL", "SEN", "senegal", "#00853f", "#fdef42", "Grupo I", null),
  team("irq", "IRAQUE", "IRQ", "iraq", "#ce1126", "#000000", "Grupo I", null),
  team("nor", "NORUEGA", "NOR", "norway", "#ba0c2f", "#00205b", "Grupo I", null),
  // Grupo J
  team("arg", "ARGENTINA", "ARG", "argentina", "#74acdf", "#ffffff", "Grupo J", null),
  team("alg", "ARG\xC9LIA", "ALG", "algeria", "#006233", "#d21034", "Grupo J", null),
  team("aut", "\xC1USTRIA", "AUT", "austria", "#ed2939", "#ffffff", "Grupo J", null),
  team("jor", "JORD\xC2NIA", "JOR", "jordan", "#007a3d", "#ce1126", "Grupo J", null),
  // Grupo K
  team("por", "PORTUGAL", "POR", "portugal", "#006600", "#ff0000", "Grupo K", null),
  team("cod", "RD CONGO", "COD", "drcongo", "#00a3e0", "#ef3340", "Grupo K", null),
  team("uzb", "UZBEQUIST\xC3O", "UZB", "uzbekistan", "#0099b5", "#1eb53a", "Grupo K", null),
  team("col", "COL\xD4MBIA", "COL", "colombia", "#fcd116", "#003893", "Grupo K", null),
  // Grupo L
  team("eng", "INGLATERRA", "ENG", "england", "#ce1124", "#ffffff", "Grupo L", null),
  team("cro", "CRO\xC1CIA", "CRO", "croatia", "#ff0000", "#ffffff", "Grupo L", null),
  team("gha", "GANA", "GHA", "ghana", "#006b3f", "#fcd116", "Grupo L", null),
  team("pan", "PANAM\xC1", "PAN", "panama", "#db1730", "#0033a0", "Grupo L", null)
];
var r32Pairs = [
  ["1\xBA Grupo A", "2\xBA Grupo G"],
  ["1\xBA Grupo B", "2\xBA Grupo H"],
  ["1\xBA Grupo C", "2\xBA Grupo I"],
  ["1\xBA Grupo D", "2\xBA Grupo J"],
  ["1\xBA Grupo E", "2\xBA Grupo K"],
  ["1\xBA Grupo F", "2\xBA Grupo L"],
  ["1\xBA Grupo G", "2\xBA Grupo A"],
  ["1\xBA Grupo H", "2\xBA Grupo B"],
  ["1\xBA Grupo I", "2\xBA Grupo C"],
  ["1\xBA Grupo J", "2\xBA Grupo D"],
  ["1\xBA Grupo K", "2\xBA Grupo E"],
  ["1\xBA Grupo L", "2\xBA Grupo F"],
  ["Melhor 3\xBA colocado #1", "Melhor 3\xBA colocado #2"],
  ["Melhor 3\xBA colocado #3", "Melhor 3\xBA colocado #4"],
  ["Melhor 3\xBA colocado #5", "Melhor 3\xBA colocado #6"],
  ["Melhor 3\xBA colocado #7", "Melhor 3\xBA colocado #8"]
];
var r32 = r32Pairs.map(([placeholderA, placeholderB], i) => ({
  id: `R32-${i + 1}`,
  stage: "R32",
  nextMatchId: `R16-${Math.ceil((i + 1) / 2)}`,
  placeholderA,
  placeholderB
}));
var r16 = Array.from({ length: 8 }, (_, i) => ({
  id: `R16-${i + 1}`,
  stage: "R16",
  nextMatchId: `QF-${Math.ceil((i + 1) / 2)}`
}));
var qf = Array.from({ length: 4 }, (_, i) => ({
  id: `QF-${i + 1}`,
  stage: "QF",
  nextMatchId: `SF-${Math.ceil((i + 1) / 2)}`
}));
var sf = Array.from({ length: 2 }, (_, i) => ({
  id: `SF-${i + 1}`,
  stage: "SF",
  nextMatchId: "F-1"
}));
var final = [{ id: "F-1", stage: "F" }];
var bracket = [...r32, ...r16, ...qf, ...sf, ...final];

// src/appMatches.ts
var PT_MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Mar\xE7o",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
var DEFAULT_SCHEDULED_STADIUM = "Est\xE1dio a confirmar";
var DEFAULT_SCHEDULED_CITY = "A CONFIRMAR";
var FIFA_SUPPLEMENTAL_MATCHES = [
  {
    teamA: "QAT",
    teamB: "SUI",
    kickoffTimestamp: "2026-06-13T16:00:00-03:00",
    status: "FINISHED",
    stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco",
    city: "\xC1REA DA BA\xCDA DE S\xC3O FRANCISCO",
    score: {
      teamA: 1,
      teamB: 1
    }
  }
];
var BASE_MATCHES = matches_default;
var existingIds = new Set(BASE_MATCHES.map((match) => match.id));
var lineupByTeamCode = /* @__PURE__ */ new Map();
for (const match of BASE_MATCHES) {
  for (const team2 of [match.teamA, match.teamB]) {
    if (!lineupByTeamCode.has(team2.code) && team2.lineup.length > 0) {
      lineupByTeamCode.set(team2.code, team2.lineup);
    }
  }
}
var teamByCode = new Map(
  standings.map((row) => [
    row.code,
    {
      name: row.name,
      code: row.code,
      flagSvg: row.flagSvg,
      primaryColor: row.primaryColor,
      secondaryColor: row.secondaryColor,
      group: row.group
    }
  ])
);
var formatKickoffDate = (kickoffTimestamp) => {
  const [datePart] = kickoffTimestamp.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  return `${day} ${PT_MONTHS[month - 1]}, ${year}`;
};
var formatKickoffTime = (kickoffTimestamp) => kickoffTimestamp.slice(11, 16);
var buildTeamEntry = (teamCode) => {
  const team2 = teamByCode.get(teamCode);
  if (!team2) {
    throw new Error(`Time ${teamCode} n\xE3o encontrado no seed do torneio.`);
  }
  return {
    ...team2,
    lineup: lineupByTeamCode.get(teamCode) ?? []
  };
};
var buildSupplementalMatch = (seed) => {
  const { teamA: teamACode, teamB: teamBCode, kickoffTimestamp, status, score, stadiumName, city } = seed;
  const kickoffMs = new Date(kickoffTimestamp).getTime();
  return {
    id: `${teamACode.toLowerCase()}-${teamBCode.toLowerCase()}-2026`,
    teamA: buildTeamEntry(teamACode),
    teamB: buildTeamEntry(teamBCode),
    stadiumName,
    city,
    stageName: "Group Stage",
    kickoffTime: formatKickoffTime(kickoffTimestamp),
    kickoffDate: formatKickoffDate(kickoffTimestamp),
    kickoffTimestamp,
    status,
    score,
    countdownTargetSeconds: Math.max(0, Math.floor((kickoffMs - Date.now()) / 1e3)),
    broadcasters: []
  };
};
var buildScheduledMatch = (teamACode, teamBCode, kickoffTimestamp) => buildSupplementalMatch({
  teamA: teamACode,
  teamB: teamBCode,
  kickoffTimestamp,
  status: "PRE_GAME",
  stadiumName: DEFAULT_SCHEDULED_STADIUM,
  city: DEFAULT_SCHEDULED_CITY
});
var APP_MATCHES = [
  ...BASE_MATCHES,
  ...FIFA_SUPPLEMENTAL_MATCHES.filter(
    ({ teamA, teamB }) => !existingIds.has(`${teamA.toLowerCase()}-${teamB.toLowerCase()}-2026`)
  ).map(buildSupplementalMatch),
  ...BBC_SCHEDULED_MATCHES.filter(
    ({ teamA, teamB }) => !existingIds.has(`${teamA.toLowerCase()}-${teamB.toLowerCase()}-2026`)
  ).map(
    ({ teamA, teamB, kickoffTimestamp }) => buildScheduledMatch(teamA, teamB, kickoffTimestamp)
  )
].map((match) => {
  const officialVenue = FIFA_MATCH_VENUES[match.id];
  if (!officialVenue) {
    return match;
  }
  return {
    ...match,
    stadiumName: officialVenue.stadiumName.trim(),
    city: officialVenue.city.trim()
  };
});

// src/data/questions.ts
var triviaQuestions = [
  {
    id: "host-countries",
    category: "Sedes",
    question: "Quantos pa\xEDses sediam juntos a Copa do Mundo de 2026?",
    options: ["2", "3", "4", "5"],
    correctOptionIndex: 1,
    explanation: "A edi\xE7\xE3o de 2026 ser\xE1 dividida entre Estados Unidos, M\xE9xico e Canad\xE1."
  },
  {
    id: "metlife-final",
    category: "Est\xE1dios",
    question: "Qual est\xE1dio recebe a grande final no chaveamento do app?",
    options: [
      "BC Place de Vancouver",
      "Est\xE1dio da Cidade do M\xE9xico",
      "MetLife Stadium",
      "Arrowhead Stadium"
    ],
    correctOptionIndex: 2,
    explanation: "O mata-mata termina no MetLife Stadium, em East Rutherford, palco da final."
  },
  {
    id: "group-format",
    category: "Formato",
    question: "Quantos grupos de quatro sele\xE7\xF5es aparecem na fase inicial desta edi\xE7\xE3o?",
    options: ["8", "10", "12", "16"],
    correctOptionIndex: 2,
    explanation: "O modelo adotado no app usa 12 grupos de quatro sele\xE7\xF5es para a Copa de 2026."
  },
  {
    id: "broadcast-core",
    category: "Transmiss\xE3o",
    question: "Qual aba do app concentra o guia de onde assistir e o feed de lances?",
    options: ["Not\xEDcias", "Ao Vivo", "Fan Zone", "Est\xE1dios"],
    correctOptionIndex: 1,
    explanation: "A aba Ao Vivo re\xFAne o cron\xF4metro, as emissoras e os lances oficiais da FIFA."
  }
];

// src/standings.ts
var POINTS_FOR_WIN = 3;
var POINTS_FOR_DRAW = 1;
function emptyTally() {
  return { played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 };
}
function addResult(tally, scored, conceded) {
  tally.played += 1;
  tally.goalsFor += scored;
  tally.goalsAgainst += conceded;
  if (scored > conceded) tally.won += 1;
  else if (scored === conceded) tally.drawn += 1;
  else tally.lost += 1;
}
function createSeedRowFromMatchTeam(team2) {
  return {
    id: team2.code.toLowerCase(),
    name: team2.name,
    code: team2.code,
    flagSvg: team2.flagSvg,
    primaryColor: team2.primaryColor,
    secondaryColor: team2.secondaryColor,
    group: team2.group,
    points: 0,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    dataSource: "seed"
  };
}
function getCanonicalSeedStandings(matches = APP_MATCHES) {
  const canonicalRows = new Map(
    standings.map((row) => [
      row.code,
      {
        ...row
      }
    ])
  );
  for (const match of matches) {
    for (const team2 of [match.teamA, match.teamB]) {
      if (!canonicalRows.has(team2.code)) {
        canonicalRows.set(team2.code, createSeedRowFromMatchTeam(team2));
      }
    }
  }
  return Array.from(canonicalRows.values());
}
function countsForStandings(match, groupByCode) {
  const teamAGroup = groupByCode.get(match.teamA.code);
  const teamBGroup = groupByCode.get(match.teamB.code);
  return Boolean(teamAGroup) && Boolean(teamBGroup) && teamAGroup === teamBGroup && match.stageName === "Group Stage" && (match.status === "LIVE" || match.status === "FINISHED") && match.score;
}
function computeStandings(matches = APP_MATCHES) {
  const canonicalSeedStandings = getCanonicalSeedStandings(matches);
  const groupByCode = new Map(
    canonicalSeedStandings.map((row) => [row.code, row.group])
  );
  const tallies = /* @__PURE__ */ new Map();
  for (const match of matches) {
    if (!countsForStandings(match, groupByCode)) continue;
    const tallyA = tallies.get(match.teamA.code) ?? emptyTally();
    const tallyB = tallies.get(match.teamB.code) ?? emptyTally();
    addResult(tallyA, match.score.teamA, match.score.teamB);
    addResult(tallyB, match.score.teamB, match.score.teamA);
    tallies.set(match.teamA.code, tallyA);
    tallies.set(match.teamB.code, tallyB);
  }
  return canonicalSeedStandings.map((row) => {
    const tally = tallies.get(row.code);
    if (!tally) return row;
    return {
      ...row,
      ...tally,
      goalDifference: tally.goalsFor - tally.goalsAgainst,
      points: tally.won * POINTS_FOR_WIN + tally.drawn * POINTS_FOR_DRAW,
      dataSource: "result"
    };
  });
}
function sortGroupTable(rows) {
  return [...rows].sort(
    (a, b) => b.points - a.points || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor
  );
}
function groupStandings(rows) {
  const byGroup = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const existing = byGroup.get(row.group);
    if (existing) existing.push(row);
    else byGroup.set(row.group, [row]);
  }
  return Array.from(byGroup.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([group, groupRows]) => ({ group, rows: sortGroupTable(groupRows) }));
}

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
var TEAM_LINEUPS_CACHE_TTL_MS = 5 * 60 * 1e3;
var LIVE_TEAM_LINEUPS_CACHE_TTL_MS = 10 * 1e3;
var LIVE_MATCH_STATE_CACHE_TTL_MS = 10 * 1e3;
var UPCOMING_SOON_MATCH_STATE_CACHE_TTL_MS = 30 * 1e3;
var STABLE_MATCH_STATE_CACHE_TTL_MS = 5 * 60 * 1e3;
var UPCOMING_SOON_WINDOW_MS = 6 * 60 * 60 * 1e3;
var BACKGROUND_WARM_FAILURE_RETRY_MS = 30 * 1e3;
var CIRCUIT_BREAKER_FAILURE_THRESHOLD = 3;
var CIRCUIT_BREAKER_OPEN_MS = 60 * 1e3;
var TOURNAMENT_LEADER_LIMIT = 5;
var APP_MATCHES_BY_ID = new Map(APP_MATCHES.map((match) => [match.id, match]));
var GOAL_INCIDENT_SUFFIX = " marcou.";
var YELLOW_CARD_INCIDENT_SUFFIX = " recebeu amarelo.";
var RED_CARD_INCIDENT_SUFFIX = " foi expulso.";
app.use(import_express.default.json());
var TRIVIA_QUESTIONS = triviaQuestions;
var broadcastGuideCache = null;
var matchStatesCache = null;
var teamLineupsCache = null;
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
  teamLineups: {
    lastAttemptAt: null,
    lastSuccessAt: null,
    lastError: null,
    lastServedStaleAt: null,
    staleServeCount: 0,
    consecutiveFailureCount: 0,
    circuitOpenUntil: null
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
var normalizeText2 = (value) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]/g, "").toUpperCase();
var buildPlayerLeaderKey = (teamCode, playerName) => `${teamCode}:${normalizeText2(playerName)}`;
var parseIncidentPlayerName = (state) => {
  if (state.type === "GOAL" && state.text.endsWith(GOAL_INCIDENT_SUFFIX)) {
    return state.text.slice(0, -GOAL_INCIDENT_SUFFIX.length).trim();
  }
  if (state.type === "YELLOW_CARD" && state.text.endsWith(YELLOW_CARD_INCIDENT_SUFFIX)) {
    return state.text.slice(0, -YELLOW_CARD_INCIDENT_SUFFIX.length).trim();
  }
  if (state.type === "RED_CARD" && state.text.endsWith(RED_CARD_INCIDENT_SUFFIX)) {
    return state.text.slice(0, -RED_CARD_INCIDENT_SUFFIX.length).trim();
  }
  return null;
};
var upsertPlayerLeaderMetadata = (metadataByPlayerKey, teamCode, player) => {
  const playerKey = buildPlayerLeaderKey(teamCode, player.name);
  const current = metadataByPlayerKey.get(playerKey);
  if (!current) {
    metadataByPlayerKey.set(playerKey, {
      name: player.name,
      shirtNumber: player.number,
      pictureUrl: player.pictureUrl
    });
    return;
  }
  metadataByPlayerKey.set(playerKey, {
    name: current.name || player.name,
    shirtNumber: current.shirtNumber ?? player.number,
    pictureUrl: current.pictureUrl ?? player.pictureUrl
  });
};
var buildPlayerLeaderMetadataMap = (lineupsPayload) => {
  const metadataByPlayerKey = /* @__PURE__ */ new Map();
  APP_MATCHES.forEach((match) => {
    const lineupEntry = lineupsPayload.lineups[match.id];
    const teamALineup = lineupEntry?.teamA.players ?? match.teamA.lineup;
    const teamBLineup = lineupEntry?.teamB.players ?? match.teamB.lineup;
    teamALineup.forEach((player) => {
      upsertPlayerLeaderMetadata(metadataByPlayerKey, match.teamA.code, player);
    });
    teamBLineup.forEach((player) => {
      upsertPlayerLeaderMetadata(metadataByPlayerKey, match.teamB.code, player);
    });
  });
  return metadataByPlayerKey;
};
var resolveTournamentLeadersSource = (states) => {
  const sources = new Set(Object.values(states).map((state) => state.source));
  if (sources.size === 1) {
    return sources.has("fifa") ? "fifa" : "fallback";
  }
  return "mixed";
};
var getTournamentLeadersNote = (source) => {
  if (source === "fifa") {
    return "Ranking calculado a partir de placares e lances oficiais da FIFA.";
  }
  if (source === "fallback") {
    return "Ranking calculado a partir do fallback local do aplicativo.";
  }
  return "Ranking calculado com mix de dados oficiais da FIFA e fallback local.";
};
var TEAM_VIEW_REFRESH_INTERVAL_MS = 5 * 60 * 1e3;
var toTeamRef = (team2) => ({
  name: team2.name,
  code: team2.code,
  flagSvg: team2.flagSvg,
  primaryColor: team2.primaryColor,
  secondaryColor: team2.secondaryColor,
  group: team2.group
});
var sortPlayerLeaders = (leaders, metric) => [...leaders].filter((leader) => leader[metric] > 0).sort((a, b) => {
  const metricDiff = b[metric] - a[metric];
  if (metricDiff !== 0) return metricDiff;
  const nameDiff = a.name.localeCompare(b.name, "pt-BR");
  if (nameDiff !== 0) return nameDiff;
  return a.teamName.localeCompare(b.teamName, "pt-BR");
});
var aggregateTournamentLeaders = async (language) => {
  const [matchStatesPayload, lineupsPayload] = await Promise.all([
    getMatchStatesPayload(language),
    getTeamLineupsPayload(language)
  ]);
  const metadataByPlayerKey = buildPlayerLeaderMetadataMap(lineupsPayload);
  const playerLeaders = /* @__PURE__ */ new Map();
  const teamLeaders = /* @__PURE__ */ new Map();
  APP_MATCHES.forEach((match) => {
    const state = matchStatesPayload.states[match.id];
    if (!state) return;
    const teams = [
      { team: match.teamA, score: state.score?.teamA ?? null, conceded: state.score?.teamB ?? null },
      { team: match.teamB, score: state.score?.teamB ?? null, conceded: state.score?.teamA ?? null }
    ];
    teams.forEach(({ team: team2, score, conceded }) => {
      const current = teamLeaders.get(team2.code) ?? {
        id: team2.code.toLowerCase(),
        teamCode: team2.code,
        teamName: team2.name,
        teamFlagSvg: team2.flagSvg,
        matchesPlayed: 0,
        wins: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        cleanSheets: 0
      };
      if (state.status !== "PRE_GAME" && score !== null && conceded !== null) {
        current.matchesPlayed += 1;
        current.goalsFor += score;
        current.goalsAgainst += conceded;
        current.wins += score > conceded ? 1 : 0;
        current.cleanSheets += conceded === 0 ? 1 : 0;
      }
      teamLeaders.set(team2.code, current);
    });
    (state.incidents || []).forEach((incident) => {
      if (!incident.team || incident.type !== "GOAL" && incident.type !== "YELLOW_CARD" && incident.type !== "RED_CARD") {
        return;
      }
      const playerName = parseIncidentPlayerName(incident);
      if (!playerName) return;
      const team2 = incident.team === "A" ? match.teamA : match.teamB;
      const playerKey = buildPlayerLeaderKey(team2.code, playerName);
      const metadata = metadataByPlayerKey.get(playerKey);
      const current = playerLeaders.get(playerKey) ?? {
        id: `${team2.code.toLowerCase()}-${normalizeText2(playerName).toLowerCase()}`,
        name: metadata?.name ?? playerName,
        teamCode: team2.code,
        teamName: team2.name,
        teamFlagSvg: team2.flagSvg,
        shirtNumber: metadata?.shirtNumber,
        pictureUrl: metadata?.pictureUrl,
        goals: 0,
        yellowCards: 0,
        redCards: 0
      };
      if (incident.type === "GOAL") current.goals += 1;
      if (incident.type === "YELLOW_CARD") current.yellowCards += 1;
      if (incident.type === "RED_CARD") current.redCards += 1;
      playerLeaders.set(playerKey, current);
    });
  });
  const teamLeaderRows = Array.from(teamLeaders.values()).filter(
    (leader) => leader.matchesPlayed > 0
  );
  const updatedAt = Object.values(matchStatesPayload.states).map((state) => state.updatedAt).filter(Boolean).sort().at(-1) || (/* @__PURE__ */ new Date()).toISOString();
  const source = resolveTournamentLeadersSource(matchStatesPayload.states);
  return {
    updatedAt,
    source,
    note: getTournamentLeadersNote(source),
    playerLeaders: Array.from(playerLeaders.values()),
    teamLeaders: teamLeaderRows
  };
};
var sortBestAttackLeaders = (leaders) => [...leaders].sort((a, b) => {
  const goalsDiff = b.goalsFor - a.goalsFor;
  if (goalsDiff !== 0) return goalsDiff;
  const matchesDiff = a.matchesPlayed - b.matchesPlayed;
  if (matchesDiff !== 0) return matchesDiff;
  return a.teamName.localeCompare(b.teamName, "pt-BR");
}).slice(0, TOURNAMENT_LEADER_LIMIT);
var sortBestDefenseLeaders = (leaders) => [...leaders].sort((a, b) => {
  const concededDiff = a.goalsAgainst - b.goalsAgainst;
  if (concededDiff !== 0) return concededDiff;
  const cleanSheetDiff = b.cleanSheets - a.cleanSheets;
  if (cleanSheetDiff !== 0) return cleanSheetDiff;
  return a.teamName.localeCompare(b.teamName, "pt-BR");
}).slice(0, TOURNAMENT_LEADER_LIMIT);
var sortCleanSheetLeaders = (leaders) => [...leaders].sort((a, b) => {
  const cleanSheetDiff = b.cleanSheets - a.cleanSheets;
  if (cleanSheetDiff !== 0) return cleanSheetDiff;
  const concededDiff = a.goalsAgainst - b.goalsAgainst;
  if (concededDiff !== 0) return concededDiff;
  return a.teamName.localeCompare(b.teamName, "pt-BR");
}).slice(0, TOURNAMENT_LEADER_LIMIT);
var getTournamentLeadersPayload = async (language) => {
  const aggregated = await aggregateTournamentLeaders(language);
  return {
    updatedAt: aggregated.updatedAt,
    source: aggregated.source,
    note: aggregated.note,
    playerLeaders: {
      topScorers: sortPlayerLeaders(aggregated.playerLeaders, "goals").slice(
        0,
        TOURNAMENT_LEADER_LIMIT
      ),
      yellowCards: sortPlayerLeaders(aggregated.playerLeaders, "yellowCards").slice(
        0,
        TOURNAMENT_LEADER_LIMIT
      ),
      redCards: sortPlayerLeaders(aggregated.playerLeaders, "redCards").slice(
        0,
        TOURNAMENT_LEADER_LIMIT
      )
    },
    teamLeaders: {
      bestAttack: sortBestAttackLeaders(aggregated.teamLeaders),
      bestDefense: sortBestDefenseLeaders(aggregated.teamLeaders),
      cleanSheets: sortCleanSheetLeaders(aggregated.teamLeaders)
    }
  };
};
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
var getTeamLineupCacheTtlMs = (matchedFifa, liveByMatchId) => matchedFifa.some(({ match, fifaMatch }) => {
  const liveMatch = fifaMatch ? liveByMatchId.get(fifaMatch.IdMatch) : void 0;
  return buildMatchStateEntry(match, fifaMatch, liveMatch).status === "LIVE";
}) ? LIVE_TEAM_LINEUPS_CACHE_TTL_MS : TEAM_LINEUPS_CACHE_TTL_MS;
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
var getTeamLineupsPayload = async (language) => {
  const cacheKey = language;
  fifaSyncDiagnostics.teamLineups.lastAttemptAt = (/* @__PURE__ */ new Date()).toISOString();
  if (teamLineupsCache && teamLineupsCache.key === cacheKey && teamLineupsCache.expiresAt > Date.now()) {
    return teamLineupsCache.payload;
  }
  if (isCircuitOpen(fifaSyncDiagnostics.teamLineups)) {
    if (teamLineupsCache?.key === cacheKey) {
      markStaleServe(fifaSyncDiagnostics.teamLineups);
      console.warn(`Team lineups circuit open for ${cacheKey}; serving stale cache.`);
      return teamLineupsCache.payload;
    }
    throw new Error("FIFA team-lineup fetch temporarily paused after repeated failures.");
  }
  try {
    const calendarMatches = await fetchCalendarMatches(language);
    const matchedFifa = APP_MATCHES.map((match) => ({
      match,
      fifaMatch: findCalendarMatch(match, calendarMatches, language)
    }));
    const liveResults = await Promise.all(
      matchedFifa.map(async ({ fifaMatch }) => {
        if (!fifaMatch?.IdMatch) return null;
        try {
          return await fetchLiveMatch(fifaMatch.IdMatch, language);
        } catch (error) {
          console.error(
            `FIFA live endpoint error for lineup of match ${fifaMatch.IdMatch}:`,
            error
          );
          return null;
        }
      })
    );
    const liveByMatchId = new Map(
      liveResults.filter((liveMatch) => Boolean(liveMatch?.IdMatch)).map((liveMatch) => [liveMatch.IdMatch, liveMatch])
    );
    const lineups = Object.fromEntries(
      matchedFifa.map(({ match, fifaMatch }) => {
        const liveMatch = fifaMatch ? liveByMatchId.get(fifaMatch.IdMatch) : void 0;
        return [
          match.id,
          {
            teamA: buildTeamLineupEntry(
              match.teamA.code,
              match.teamA.lineup,
              fifaMatch,
              liveMatch?.HomeTeam
            ),
            teamB: buildTeamLineupEntry(
              match.teamB.code,
              match.teamB.lineup,
              fifaMatch,
              liveMatch?.AwayTeam
            )
          }
        ];
      })
    );
    const payload = {
      language,
      refreshAfterMs: getTeamLineupCacheTtlMs(matchedFifa, liveByMatchId),
      lineups
    };
    teamLineupsCache = {
      key: cacheKey,
      createdAt: Date.now(),
      expiresAt: Date.now() + payload.refreshAfterMs,
      payload
    };
    fifaSyncDiagnostics.teamLineups.lastSuccessAt = (/* @__PURE__ */ new Date()).toISOString();
    resetFailureState(fifaSyncDiagnostics.teamLineups);
    return payload;
  } catch (error) {
    recordFailureState(fifaSyncDiagnostics.teamLineups, error);
    if (teamLineupsCache?.key === cacheKey) {
      markStaleServe(fifaSyncDiagnostics.teamLineups);
      console.warn(
        `Serving stale team lineups cache for ${cacheKey} after FIFA error:`,
        error
      );
      return teamLineupsCache.payload;
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
var TEAM_STANDINGS_BY_CODE = (() => {
  const entries = /* @__PURE__ */ new Map();
  groupStandings(computeStandings(APP_MATCHES)).forEach(({ rows }) => {
    rows.forEach((row, index) => {
      entries.set(row.code, {
        rank: index + 1,
        groupSize: rows.length,
        row
      });
    });
  });
  return entries;
})();
var getMatchKickoffMs = (match) => {
  const kickoffMs = new Date(match.kickoffTimestamp).getTime();
  return Number.isNaN(kickoffMs) ? 0 : kickoffMs;
};
var getTeamViewNote = (source) => {
  if (source === "fifa") {
    return "Painel da sele\xE7\xE3o abastecido por dados oficiais da FIFA sempre que dispon\xEDveis.";
  }
  if (source === "fallback") {
    return "Painel da sele\xE7\xE3o usando dados locais do aplicativo enquanto a FIFA n\xE3o publica todos os detalhes.";
  }
  return "Painel da sele\xE7\xE3o combinando dados oficiais da FIFA com fallback local do aplicativo.";
};
var buildFallbackLineupEntry = (players) => ({
  players,
  source: "fallback",
  note: "Escala\xE7\xE3o estimada a partir da base local do aplicativo.",
  updatedAt: (/* @__PURE__ */ new Date()).toISOString()
});
var resolveTeamViewSource = (sources) => {
  let hasMixed = false;
  const baseSources = /* @__PURE__ */ new Set();
  sources.forEach((source) => {
    if (!source) return;
    if (source === "mixed") {
      hasMixed = true;
      return;
    }
    baseSources.add(source);
  });
  if (hasMixed || baseSources.size > 1) {
    return "mixed";
  }
  if (baseSources.size === 1) {
    return baseSources.has("fifa") ? "fifa" : "fallback";
  }
  return "fallback";
};
var findTeamRefByCode = (teamCode) => {
  const standingsEntry = TEAM_STANDINGS_BY_CODE.get(teamCode)?.row;
  if (standingsEntry) {
    return toTeamRef(standingsEntry);
  }
  for (const match of APP_MATCHES) {
    if (match.teamA.code === teamCode) {
      return toTeamRef(match.teamA);
    }
    if (match.teamB.code === teamCode) {
      return toTeamRef(match.teamB);
    }
  }
  return null;
};
var getTeamMatchReferences = (teamCode) => APP_MATCHES.filter((match) => match.teamA.code === teamCode || match.teamB.code === teamCode).map(
  (match) => {
    const isTeamA = match.teamA.code === teamCode;
    return {
      match,
      team: isTeamA ? match.teamA : match.teamB,
      opponent: isTeamA ? match.teamB : match.teamA,
      isTeamA
    };
  }
);
var buildTeamViewMatchSummary = (reference, state, guide) => ({
  matchId: reference.match.id,
  team: toTeamRef(reference.team),
  opponent: toTeamRef(reference.opponent),
  stageName: reference.match.stageName,
  stadiumName: reference.match.stadiumName,
  city: reference.match.city,
  kickoffTime: reference.match.kickoffTime,
  kickoffDate: reference.match.kickoffDate,
  kickoffTimestamp: reference.match.kickoffTimestamp,
  officialMatchUrl: reference.match.officialMatchUrl,
  status: state?.status ?? reference.match.status,
  matchTime: state?.matchTime,
  score: state?.score ? {
    team: reference.isTeamA ? state.score.teamA : state.score.teamB,
    opponent: reference.isTeamA ? state.score.teamB : state.score.teamA
  } : void 0,
  broadcasters: guide?.broadcasters ?? reference.match.broadcasters,
  source: state?.source ?? "fallback",
  note: state?.note ?? "Dados locais do aplicativo.",
  fifaMatchId: state?.fifaMatchId ?? guide?.fifaMatchId,
  updatedAt: state?.updatedAt ?? guide?.updatedAt ?? (/* @__PURE__ */ new Date()).toISOString()
});
var buildTeamViewPayload = async (teamCode, country, language) => {
  const normalizedTeamCode = teamCode.trim().toUpperCase();
  const team2 = findTeamRefByCode(normalizedTeamCode);
  if (!team2) {
    return null;
  }
  const [matchStatesPayload, teamLineupsPayload, broadcastGuidePayload, aggregatedLeaders] = await Promise.all([
    getMatchStatesPayload(language),
    getTeamLineupsPayload(language),
    getBroadcastGuidePayload(country, language),
    aggregateTournamentLeaders(language)
  ]);
  const standings2 = TEAM_STANDINGS_BY_CODE.get(normalizedTeamCode) ?? null;
  const teamMatches = getTeamMatchReferences(normalizedTeamCode).sort(
    (a, b) => getMatchKickoffMs(a.match) - getMatchKickoffMs(b.match)
  );
  const currentMatchReference = teamMatches.find(
    (reference) => matchStatesPayload.states[reference.match.id]?.status === "LIVE"
  ) ?? null;
  const nextMatchReference = teamMatches.find(
    (reference) => matchStatesPayload.states[reference.match.id]?.status === "PRE_GAME"
  ) ?? null;
  const lastMatchReference = [...teamMatches].reverse().find(
    (reference) => matchStatesPayload.states[reference.match.id]?.status === "FINISHED"
  ) ?? null;
  const currentMatch = currentMatchReference ? buildTeamViewMatchSummary(
    currentMatchReference,
    matchStatesPayload.states[currentMatchReference.match.id],
    broadcastGuidePayload.guides[currentMatchReference.match.id]
  ) : null;
  const nextMatch = nextMatchReference ? buildTeamViewMatchSummary(
    nextMatchReference,
    matchStatesPayload.states[nextMatchReference.match.id],
    broadcastGuidePayload.guides[nextMatchReference.match.id]
  ) : null;
  const lastMatch = lastMatchReference ? buildTeamViewMatchSummary(
    lastMatchReference,
    matchStatesPayload.states[lastMatchReference.match.id],
    broadcastGuidePayload.guides[lastMatchReference.match.id]
  ) : null;
  const lineupReference = currentMatchReference ?? nextMatchReference ?? lastMatchReference ?? teamMatches[0] ?? null;
  const lineup = lineupReference ? lineupReference.isTeamA ? teamLineupsPayload.lineups[lineupReference.match.id]?.teamA ?? buildFallbackLineupEntry(lineupReference.team.lineup) : teamLineupsPayload.lineups[lineupReference.match.id]?.teamB ?? buildFallbackLineupEntry(lineupReference.team.lineup) : null;
  const featuredGuideReference = currentMatchReference ?? nextMatchReference ?? null;
  const broadcastGuide = featuredGuideReference ? broadcastGuidePayload.guides[featuredGuideReference.match.id] ?? null : null;
  const topScorers = sortPlayerLeaders(
    aggregatedLeaders.playerLeaders.filter((leader) => leader.teamCode === normalizedTeamCode),
    "goals"
  ).slice(0, 3);
  const yellowCards = sortPlayerLeaders(
    aggregatedLeaders.playerLeaders.filter((leader) => leader.teamCode === normalizedTeamCode),
    "yellowCards"
  ).slice(0, 3);
  const redCards = sortPlayerLeaders(
    aggregatedLeaders.playerLeaders.filter((leader) => leader.teamCode === normalizedTeamCode),
    "redCards"
  ).slice(0, 3);
  const teamSummary = aggregatedLeaders.teamLeaders.find((leader) => leader.teamCode === normalizedTeamCode) ?? null;
  const updatedAtCandidates = [
    lineup?.updatedAt,
    currentMatch?.updatedAt,
    nextMatch?.updatedAt,
    lastMatch?.updatedAt,
    broadcastGuide?.updatedAt,
    aggregatedLeaders.updatedAt
  ].filter(Boolean);
  const source = resolveTeamViewSource([
    lineup?.source,
    currentMatch?.source,
    nextMatch?.source,
    lastMatch?.source,
    broadcastGuide?.source,
    aggregatedLeaders.source
  ]);
  return {
    updatedAt: updatedAtCandidates.sort().at(-1) ?? (/* @__PURE__ */ new Date()).toISOString(),
    refreshAfterMs: Math.min(
      matchStatesPayload.refreshAfterMs,
      teamLineupsPayload.refreshAfterMs,
      TEAM_VIEW_REFRESH_INTERVAL_MS
    ),
    source,
    note: getTeamViewNote(source),
    team: team2,
    standings: standings2,
    currentMatch,
    nextMatch,
    lastMatch,
    lineup,
    leaders: {
      topScorers,
      yellowCards,
      redCards,
      teamSummary
    },
    broadcastGuide
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
    const [payload] = await Promise.all([
      getMatchOverlaysPayload(DEFAULT_BROADCAST_COUNTRY, DEFAULT_BROADCAST_LANGUAGE),
      getTeamLineupsPayload(DEFAULT_BROADCAST_LANGUAGE)
    ]);
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
app.get("/api/team-lineups", async (req, res) => {
  try {
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    res.set("Cache-Control", "no-store");
    res.json(await getTeamLineupsPayload(language));
  } catch (error) {
    console.error("FIFA API Error in /api/team-lineups:", error);
    res.status(502).json({ error: error?.message || "Erro ao carregar escala\xE7\xF5es da FIFA" });
  }
});
app.get("/api/tournament-leaders", async (req, res) => {
  try {
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    res.set("Cache-Control", "no-store");
    res.json(await getTournamentLeadersPayload(language));
  } catch (error) {
    console.error("FIFA API Error in /api/tournament-leaders:", error);
    res.status(502).json({ error: error?.message || "Erro ao carregar l\xEDderes do torneio" });
  }
});
app.get("/api/team-view/:teamCode", async (req, res) => {
  try {
    const country = typeof req.query.country === "string" && req.query.country.trim() ? req.query.country.trim().toUpperCase() : DEFAULT_BROADCAST_COUNTRY;
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    const payload = await buildTeamViewPayload(req.params.teamCode, country, language);
    if (!payload) {
      res.status(404).json({ error: "Sele\xE7\xE3o n\xE3o encontrada" });
      return;
    }
    res.set("Cache-Control", "no-store");
    res.json(payload);
  } catch (error) {
    console.error("FIFA API Error in /api/team-view/:teamCode:", error);
    res.status(502).json({ error: error?.message || "Erro ao carregar painel completo da sele\xE7\xE3o" });
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
  const teamLineupFallbackCount = teamLineupsCache ? Object.values(teamLineupsCache.payload.lineups).filter(
    (lineup) => lineup.teamA.source === "fallback" || lineup.teamB.source === "fallback"
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
      teamLineups: {
        ...fifaSyncDiagnostics.teamLineups,
        circuitOpen: isCircuitOpen(fifaSyncDiagnostics.teamLineups),
        circuitOpenRemainingMs: (() => {
          const openUntilMs = getCircuitOpenUntilMs(fifaSyncDiagnostics.teamLineups);
          return openUntilMs ? Math.max(0, openUntilMs - now) : null;
        })(),
        cacheKey: teamLineupsCache?.key || null,
        cacheAgeMs: teamLineupsCache ? now - teamLineupsCache.createdAt : null,
        cacheExpiresInMs: teamLineupsCache ? Math.max(0, teamLineupsCache.expiresAt - now) : null,
        fallbackMatchCount: teamLineupFallbackCount
      },
      backgroundWarm: fifaSyncDiagnostics.backgroundWarm
    },
    summary: {
      hasLiveMatches: fifaSyncDiagnostics.matchStates.activeLiveMatchIds.length > 0,
      activeLiveMatchIds: fifaSyncDiagnostics.matchStates.activeLiveMatchIds
    }
  });
});
app.get("/api/questions", (_req, res) => {
  res.set("Cache-Control", "no-store");
  res.json(TRIVIA_QUESTIONS);
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
