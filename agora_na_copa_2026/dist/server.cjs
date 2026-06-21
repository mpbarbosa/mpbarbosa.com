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
var import_node_os = __toESM(require("node:os"), 1);
var import_node_http = require("node:http");
var import_node_net = require("node:net");
var import_node_fs = require("node:fs");
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);

// src/data/squads.json
var squads_default = {
  "45191": {
    fifaId: "45191",
    teamCode: "JOR",
    name: "Mohammad Aldaoud",
    fullName: "Mohammad Aldaoud",
    number: 25,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/479933f0-a2bb-4231-88ea-3bf2c826ed54/MOHAMMAD-ALDAOUD_45191",
    dateOfBirth: "1992-04-12",
    height: 185
  },
  "190460": {
    fifaId: "190460",
    teamCode: "BRA",
    name: "Neymar Jr",
    fullName: "Neymar Jr",
    number: 10,
    position: "FW",
    club: "Al Hilal",
    pictureUrl: "",
    socials: {
      instagram: "neymarjr",
      wikipedia: "https://pt.wikipedia.org/wiki/Neymar"
    },
    dateOfBirth: "1992-02-05",
    height: 175
  },
  "201200": {
    fifaId: "201200",
    teamCode: "POR",
    name: "Cristiano Ronaldo",
    fullName: "Cristiano Ronaldo",
    number: 7,
    position: "FW",
    club: "Al Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/7b63f223-fda2-4d56-b218-f143f0abd2d8/CRISTIANO-RONALDO_201200",
    socials: {
      instagram: "cristiano",
      wikipedia: "https://pt.wikipedia.org/wiki/Cristiano_Ronaldo"
    },
    worldCupNote: "## Leitura\nEstreia abaixo do esperado \u2014 para Portugal e para o capit\xE3o. Diante de uma RD Congo aguerrida, a sele\xE7\xE3o n\xE3o passou de um empate e Cristiano n\xE3o conseguiu deixar sua marca. O cen\xE1rio ainda \xE9 totalmente recuper\xE1vel: contra Uzbequist\xE3o e Col\xF4mbia, Portugal entra pressionado a vencer e CR7 ter\xE1 a chance de reagir e abrir sua conta de gols na Copa.\n## Desempenho\nFicou em branco na estreia: no empate em 1 a 1 com a RD Congo, n\xE3o marcou e n\xE3o recebeu cart\xF5es, e esteve em campo durante a partida. O gol portugu\xEAs saiu com o jovem Jo\xE3o Neves, n\xE3o com o capit\xE3o.\n## N\xFAmeros\nJ1 \xB7 0 gols \xB7 0 cart\xF5es. Portugal trope\xE7ou na estreia (empate 1 a 1), fica em 2\xBA do grupo com 1 ponto e saldo zerado (1 GP, 1 GC).",
    dateOfBirth: "1985-02-05",
    height: 185
  },
  "215285": {
    fifaId: "215285",
    teamCode: "MEX",
    name: "G. Ochoa",
    fullName: "Guillermo Ochoa",
    number: 13,
    position: "GK",
    club: "Club Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/fedeac9f-968d-4d4c-b08a-5b2bf157c396/OCHOA-Guillermo_215285",
    dateOfBirth: "1985-07-13",
    height: 185,
    socials: {
      instagram: "yosoy8a",
      wikipedia: "https://pt.wikipedia.org/wiki/Guillermo_Ochoa"
    }
  },
  "215553": {
    fifaId: "215553",
    teamCode: "SCO",
    name: "Craig Gordon",
    fullName: "Craig Gordon",
    number: 21,
    position: "GK",
    club: "Bournemouth",
    pictureUrl: "https://digitalhub.fifa.com/transform/6bb645f8-c45e-4630-baf7-b7ddcd905a26/GORDON-Craig_215553",
    dateOfBirth: "1982-12-31",
    height: 193,
    socials: {
      instagram: "craig_gordon1",
      wikipedia: "https://pt.wikipedia.org/wiki/Craig_Gordon"
    }
  },
  "228912": {
    fifaId: "228912",
    teamCode: "GER",
    name: "Neuer",
    fullName: "Manuel Neuer",
    number: 1,
    position: "GK",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/e3701d06-66b5-4728-8bad-fea05319b6b8/NEUER-Manuel_228912",
    dateOfBirth: "1986-03-27",
    height: 193,
    socials: {
      instagram: "manuelneuer",
      wikipedia: "https://pt.wikipedia.org/wiki/Manuel_Neuer"
    }
  },
  "229397": {
    fifaId: "229397",
    teamCode: "ARG",
    name: "Leo Messi",
    fullName: "Lionel Messi",
    number: 10,
    position: "FW",
    club: "Inter Miami",
    pictureUrl: "https://digitalhub.fifa.com/transform/19823774-fac0-485a-8a8f-572e7324c6c2/MESSI-Lionel_229397",
    socials: {
      instagram: "leomessi",
      wikipedia: "https://pt.wikipedia.org/wiki/Lionel_Messi"
    },
    instagramPostUrl: "https://www.instagram.com/reel/DZ0RteXxomP/",
    worldCupNote: "## Leitura\nN\xE3o dava pra come\xE7ar melhor: o hat-trick na estreia coloca Messi como protagonista absoluto e a Argentina como favorita do grupo, j\xE1 encaminhando a vaga no mata-mata. A comiss\xE3o deve dosar os minutos do capit\xE3o; contra \xC1ustria e Jord\xE2nia, ele ter\xE1 vitrine para ampliar a artilharia.\n## Desempenho\nHat-trick na estreia: marcou os 3 gols da vit\xF3ria por 3 a 0 sobre a Arg\xE9lia e decidiu o jogo sozinho. Substitu\xEDdo no segundo tempo (poupado) e com ficha limpa \u2014 0 amarelos, 0 vermelhos.\n## N\xFAmeros\nJ1 \xB7 3 gols \xB7 0 cart\xF5es \xB7 aproveitamento m\xE1ximo. Argentina em 1\xBA lugar, com clean sheet (0 gols sofridos) e o melhor saldo da rodada. Artilheiro isolado neste in\xEDcio de Copa.",
    dateOfBirth: "1987-06-24",
    height: 170
  },
  "229498": {
    fifaId: "229498",
    teamCode: "URU",
    name: "F. Muslera",
    fullName: "Fernando Muslera",
    number: 23,
    position: "GK",
    club: "Cagliari",
    pictureUrl: "https://digitalhub.fifa.com/transform/bec34ba5-7129-44fe-b108-bc57a1fd3257/MUSLERA-Fernando_229498",
    dateOfBirth: "1986-06-16",
    height: 190,
    socials: {
      instagram: "muslera",
      wikipedia: "https://pt.wikipedia.org/wiki/Fernando_Muslera"
    }
  },
  "241559": {
    fifaId: "241559",
    teamCode: "CRO",
    name: "Modri\u0107",
    fullName: "Luka Modric",
    number: 10,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/cbff6a19-cce4-45ee-9869-84cf30ce5676/MODRIC-Luka_241559",
    socials: {
      instagram: "lukamodric10",
      wikipedia: "https://pt.wikipedia.org/wiki/Luka_Modri%C4%87"
    },
    dateOfBirth: "1985-09-09",
    height: 172
  },
  "261367": {
    fifaId: "261367",
    teamCode: "NZL",
    name: "Michael Boxall",
    fullName: "Michael Boxall",
    number: 5,
    position: "DF",
    club: "Minnesota United",
    pictureUrl: "https://digitalhub.fifa.com/transform/e4d41670-878d-4717-b07c-84d09a5f6938/BOXALL-Michael_261367",
    dateOfBirth: "1988-08-18",
    height: 191,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Michael_Boxall"
    }
  },
  "269592": {
    fifaId: "269592",
    teamCode: "NZL",
    name: "Barbarouses",
    fullName: "Kosta Barbarouses",
    number: 17,
    position: "FW",
    club: "Plymouth Argyle",
    pictureUrl: "https://digitalhub.fifa.com/transform/485b38ee-9a46-4494-b518-952574e944e6/BARBAROUSES-Kosta_269592",
    dateOfBirth: "1990-02-19",
    height: 171,
    socials: {
      instagram: "kostabarbarouses9",
      wikipedia: "https://pt.wikipedia.org/wiki/Kosta_Barbarouses"
    }
  },
  "274078": {
    fifaId: "274078",
    teamCode: "NZL",
    name: "Chris Wood",
    fullName: "Chris Wood",
    number: 9,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/431bf921-6e73-469f-87bd-3fb2c010966e/WOOD-Chris_274078",
    dateOfBirth: "1991-12-07",
    height: 191,
    socials: {
      instagram: "woodsy39",
      wikipedia: "https://pt.wikipedia.org/wiki/Chris_Wood"
    }
  },
  "274102": {
    fifaId: "274102",
    teamCode: "NZL",
    name: "Smith",
    fullName: "Tommy Smith",
    number: 26,
    position: "DF",
    club: "New York Red Bulls",
    pictureUrl: "https://digitalhub.fifa.com/transform/a0a2def6-be1c-4394-973e-25d82ed70792/SMITH-Tommy_274102",
    dateOfBirth: "1990-03-31",
    height: 188,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Tommy_Smith_(futebolista_neozeland%C3%AAs)"
    }
  },
  "274281": {
    fifaId: "274281",
    teamCode: "KOR",
    name: "S G Kim",
    fullName: "Kim Seunggyu",
    number: 1,
    position: "GK",
    club: "Ulsan HD",
    pictureUrl: "https://digitalhub.fifa.com/transform/d4c2a3d5-e369-4813-97eb-16669f83dd78/KIM-Seunggyu_274281",
    dateOfBirth: "1990-09-30",
    height: 187
  },
  "275917": {
    fifaId: "275917",
    teamCode: "HAI",
    name: "Ricardo Ad\xE9",
    fullName: "Ricardo Ade",
    number: 4,
    position: "DF",
    club: "LDU Quito",
    pictureUrl: "https://digitalhub.fifa.com/transform/188e1d63-5bfa-450a-b202-730221c18fe1/ADE-Ricardo_275917",
    dateOfBirth: "1990-05-21",
    height: 190,
    socials: {
      instagram: "adericardo4",
      wikipedia: "https://pt.wikipedia.org/wiki/Ricardo_Ad%C3%A9"
    }
  },
  "284190": {
    fifaId: "284190",
    teamCode: "QAT",
    name: "Hassan Alhaydos",
    fullName: "Hassan Alhaydos",
    number: 10,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/521889b3-16a2-48ef-92d4-6978a9e05cc6/HASSAN-ALHAYDOS_284190",
    dateOfBirth: "1990-12-11",
    height: 174,
    socials: {
      instagram: "hassanalhaydos"
    }
  },
  "288961": {
    fifaId: "288961",
    teamCode: "IRN",
    name: "Ehsan Hajisafi",
    fullName: "Ehsan Hajisafi",
    number: 3,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/6567ec6b-b63d-4163-8729-6e9ad25e32f7/HAJISAFI-Ehsan_288961",
    dateOfBirth: "1990-02-25",
    height: 178,
    socials: {
      instagram: "ehsanhajsafi28"
    }
  },
  "290821": {
    fifaId: "290821",
    teamCode: "BEL",
    name: "Witsel",
    fullName: "Axel Witsel",
    number: 6,
    position: "MF",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/ff0110d3-0721-4983-bc62-018a993d8486/WITSEL-Axel_290821",
    dateOfBirth: "1989-01-12",
    height: 186,
    socials: {
      instagram: "axelwitsel28",
      wikipedia: "https://pt.wikipedia.org/wiki/Axel_Witsel"
    }
  },
  "291372": {
    fifaId: "291372",
    teamCode: "JPN",
    name: "Nagatomo",
    fullName: "Yuto Nagatomo",
    number: 5,
    position: "DF",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/719252dc-c983-411f-875b-13a0f6acd967/NAGATOMO-Yuto_291372",
    dateOfBirth: "1986-09-12",
    height: 170,
    socials: {
      instagram: "yutonagatomo55",
      wikipedia: "https://pt.wikipedia.org/wiki/Y%C5%ABto_Nagatomo"
    }
  },
  "295922": {
    fifaId: "295922",
    teamCode: "HAI",
    name: "Placide",
    fullName: "Johny Placide",
    number: 1,
    position: "GK",
    club: "Bastia",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b4c1123-62c6-4267-9d22-6d138e461a54/PLACIDE-Johny_295922",
    dateOfBirth: "1988-01-29",
    height: 181,
    socials: {
      instagram: "johny_placide",
      wikipedia: "https://pt.wikipedia.org/wiki/Johny_Placide"
    }
  },
  "297266": {
    fifaId: "297266",
    teamCode: "CPV",
    name: "Stopira",
    fullName: "Stopira",
    number: 2,
    position: "DF",
    club: "Rayo Vallecano",
    pictureUrl: "https://digitalhub.fifa.com/transform/2cf947a1-aabe-4e69-84c7-4e22c24e01da/STOPIRA_297266",
    dateOfBirth: "1988-05-20",
    height: 178,
    socials: {
      instagram: "stopy22",
      wikipedia: "https://pt.wikipedia.org/wiki/Stopira"
    }
  },
  "299200": {
    fifaId: "299200",
    teamCode: "AUT",
    name: "Arnautovic",
    fullName: "Marko Arnautovic",
    number: 7,
    position: "FW",
    club: "FK Crvena zvezda",
    pictureUrl: "https://digitalhub.fifa.com/transform/8bc6e66f-1f5a-4f1d-813d-41c4ab04c6ac/ARNAUTOVIC-Marko_299200",
    dateOfBirth: "1989-04-19",
    height: 192,
    socials: {
      instagram: "m.arnautovic7",
      wikipedia: "https://pt.wikipedia.org/wiki/Marko_Arnautovi%C4%87"
    }
  },
  "300409": {
    fifaId: "300409",
    teamCode: "BIH",
    name: "Edin Dzeko",
    fullName: "Edin Dzeko",
    number: 11,
    position: "FW",
    club: "\u0160ibenik",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5fa7216-27c0-4652-b7df-b099e97a5604/DZEKO-Edin_300409",
    dateOfBirth: "1986-03-17",
    height: 192,
    socials: {
      instagram: "edindzeko",
      wikipedia: "https://pt.wikipedia.org/wiki/Edin_D%C5%BEeko"
    }
  },
  "306538": {
    fifaId: "306538",
    teamCode: "GER",
    name: "Oliver Baumann",
    fullName: "Oliver Baumann",
    number: 12,
    position: "GK",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/9da65f41-ea53-4209-b2f6-c59e69dbc193/BAUMANN-Oliver_306538",
    dateOfBirth: "1990-06-02",
    height: 187,
    socials: {
      instagram: "olibaumann90",
      wikipedia: "https://pt.wikipedia.org/wiki/Oliver_Baumann"
    }
  },
  "307849": {
    fifaId: "307849",
    teamCode: "KOR",
    name: "H M Son",
    fullName: "Son Heungmin",
    number: 7,
    position: "FW",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/f9694bf1-eb42-4d26-9503-e988bd32a435/SON-Heungmin_307849",
    socials: {
      instagram: "hm_son7",
      wikipedia: "https://pt.wikipedia.org/wiki/Son_Heung-min"
    },
    dateOfBirth: "1992-07-08",
    height: 183
  },
  "308300": {
    fifaId: "308300",
    teamCode: "ARG",
    name: "E. Mart\xEDnez",
    fullName: "Emiliano Martinez",
    number: 23,
    position: "GK",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/f5f477fe-a519-4c69-bb68-f6f5b97c1399/MARTINEZ_Emiliano_308300",
    dateOfBirth: "1992-09-02",
    height: 195,
    socials: {
      instagram: "emimartinezz1",
      wikipedia: "https://pt.wikipedia.org/wiki/Emiliano_Mart%C3%ADnez"
    }
  },
  "308322": {
    fifaId: "308322",
    teamCode: "ARG",
    name: "Tagliafico",
    fullName: "Nicolas Tagliafico",
    number: 3,
    position: "DF",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/dd4d5f75-b3d4-4ff2-81bf-c16bf0b0a061/TAGLIAFICO-Nicolas_308322",
    dateOfBirth: "1992-08-31",
    height: 172,
    socials: {
      instagram: "tagliafico3",
      wikipedia: "https://pt.wikipedia.org/wiki/Nicol%C3%A1s_Tagliafico"
    }
  },
  "308370": {
    fifaId: "308370",
    teamCode: "BRA",
    name: "Alisson",
    fullName: "Alisson",
    number: 1,
    position: "GK",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/6b051628-d407-41ce-8a60-dc354ac4ccb8/ALISSON_308370",
    socials: {
      instagram: "alissonbecker",
      wikipedia: "https://en.wikipedia.org/wiki/Alisson_(footballer,_born_1995)"
    },
    dateOfBirth: "1992-10-02",
    height: 193,
    worldCupNote: "## Leitura\nSeguran\xE7a de sobra debaixo das traves. Titular absoluto, Alisson come\xE7ou as duas partidas e passou a fase de grupos transmitindo a tranquilidade de sempre \u2014 o \xFAnico gol que o Brasil sofreu at\xE9 aqui veio num lance de bola parada contra Marrocos, sem responsabilidade do goleiro. Aos 33 anos e em alto n\xEDvel no Liverpool, \xE9 o seguro de vida de uma sele\xE7\xE3o que, na frente, ainda busca o ritmo ideal. Contra a Esc\xF3cia, a expectativa \xE9 de mais um trabalho s\xF3lido para encaminhar a lideran\xE7a do grupo.\n## Desempenho\nDois jogos como titular: no empate em 1 a 1 com Marrocos foi vazado uma vez, mas seguiu firme no resto da partida; na vit\xF3ria por 3 a 0 sobre o Haiti, manteve a meta zerada e comandou a linha defensiva com a serenidade habitual. N\xE3o recebeu cart\xF5es e participou da constru\xE7\xE3o de jogo com os p\xE9s, como j\xE1 \xE9 marca registrada.\n## N\xFAmeros\nJ2 \xB7 1 gol sofrido \xB7 1 jogo sem sofrer gols (50%) \xB7 0 cart\xF5es. Brasil lidera o Grupo C com 4 pontos (1 vit\xF3ria, 1 empate) e o melhor saldo da chave (SG +3, 4 GP e apenas 1 GC). Pr\xF3ximo desafio: Esc\xF3cia, em 24/06."
  },
  "308386": {
    fifaId: "308386",
    teamCode: "BRA",
    name: "Casemiro",
    fullName: "Casemiro",
    number: 5,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/49558d20-3d5d-4afb-bf2a-9dc1ab60a6e6/CASEMIRO_308386",
    dateOfBirth: "1992-02-23",
    height: 185,
    socials: {
      instagram: "casemiro",
      wikipedia: "https://pt.wikipedia.org/wiki/Casemiro"
    },
    worldCupNote: "## Leitura\nAos 34 anos, Casemiro chega \xE0 Copa como pe\xE7a de experi\xEAncia e lideran\xE7a, mas come\xE7ou a competi\xE7\xE3o em papel coadjuvante. Na estreia diante do Marrocos, a comiss\xE3o t\xE9cnica apostou na dupla de volantes Bruno Guimar\xE3es\u2013Jo\xE3o Gomes, e o camisa 5 n\xE3o esteve entre os titulares. \xC9 o tipo de jogador guardado para os jogos de maior peso f\xEDsico e para o mata-mata, quando a conten\xE7\xE3o e a leitura de um volante posicional pesam mais.\n## Desempenho\nSem atua\xE7\xE3o de destaque na fase de grupos: o Brasil empatou com o Marrocos (1 a 1) e goleou o Haiti (3 a 0) com o meio-campo comandado por Bruno Guimar\xE3es e Jo\xE3o Gomes. Casemiro segue como alternativa de experi\xEAncia no elenco, sem gols nem cart\xF5es anotados at\xE9 aqui.\n## N\xFAmeros\nSem participa\xE7\xE3o registrada na escala\xE7\xE3o dispon\xEDvel \xB7 0 gols \xB7 0 cart\xF5es. O Brasil lidera o Grupo C com 4 pontos (1 vit\xF3ria, 1 empate) e o melhor saldo da chave (SG +3, 4 GP, 1 GC). Pr\xF3ximo desafio: Esc\xF3cia, em 24/06."
  },
  "310116": {
    fifaId: "310116",
    teamCode: "ARG",
    name: "Otamendi",
    fullName: "Nicolas Otamendi",
    number: 19,
    position: "DF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/4aedbffa-a35c-4aa5-a7ce-8a29c2af3e72/OTAMENDI-Nicolas_310116",
    dateOfBirth: "1988-02-12",
    height: 182,
    socials: {
      instagram: "nicolasotamendi30",
      wikipedia: "https://pt.wikipedia.org/wiki/Nicol%C3%A1s_Otamendi"
    }
  },
  "311558": {
    fifaId: "311558",
    teamCode: "SUI",
    name: "Xhaka",
    fullName: "Granit Xhaka",
    number: 10,
    position: "MF",
    club: "Sunderland A.F.C.",
    pictureUrl: "https://digitalhub.fifa.com/transform/a6c333cc-3042-4094-9ec0-094479b8ca3a/XHAKA-Granit_311558",
    socials: {
      instagram: "granit_xhaka",
      wikipedia: "https://pt.wikipedia.org/wiki/Granit_Xhaka"
    },
    dateOfBirth: "1992-09-27",
    height: 183
  },
  "313559": {
    fifaId: "313559",
    teamCode: "SUI",
    name: "Rodriguez",
    fullName: "Ricardo Rodriguez",
    number: 13,
    position: "DF",
    club: "Real Betis Balompi\xE9",
    pictureUrl: "https://digitalhub.fifa.com/transform/07f27983-8eee-43f3-b68c-b45b6f806785/RODRIGUEZ-Ricardo_313559",
    dateOfBirth: "1992-08-25",
    height: 182,
    socials: {
      instagram: "rrodriguez.68",
      wikipedia: "https://pt.wikipedia.org/wiki/Ricardo_Rodr%C3%ADguez_(futebolista)"
    }
  },
  "314255": {
    fifaId: "314255",
    teamCode: "IRN",
    name: "H.Hosseini",
    fullName: "Hossein Hosseini",
    number: 22,
    position: "GK",
    club: "Tractor",
    pictureUrl: "https://digitalhub.fifa.com/transform/65922b90-e1f9-453b-aa7c-b436746fce3c/HOSSEINI-Hossein_314255",
    dateOfBirth: "1992-06-30",
    height: 189,
    socials: {
      instagram: "hosseini21",
      wikipedia: "https://pt.wikipedia.org/wiki/Hossein_Hosseini"
    }
  },
  "316002": {
    fifaId: "316002",
    teamCode: "AUT",
    name: "Alaba",
    fullName: "David Alaba",
    number: 8,
    position: "DF",
    club: "Real Madrid Club de F\xFAtbol",
    pictureUrl: "https://digitalhub.fifa.com/transform/3ef36338-4967-43c2-8698-1fb504ce30fd/ALABA-David_316002",
    dateOfBirth: "1992-06-24",
    height: 180,
    socials: {
      instagram: "davidalaba",
      wikipedia: "https://pt.wikipedia.org/wiki/David_Alaba"
    }
  },
  "318647": {
    fifaId: "318647",
    teamCode: "PAR",
    name: "Gatito Fernandez",
    fullName: "Gatito Fernandez",
    number: 1,
    position: "GK",
    club: "New York Red Bulls",
    pictureUrl: "https://digitalhub.fifa.com/transform/d606fc1a-1644-428f-ada8-69c93198e5b3/FERNANDEZ-Gatito_318647",
    dateOfBirth: "1988-03-29",
    height: 191,
    socials: {
      instagram: "gatitofernandez",
      wikipedia: "https://pt.wikipedia.org/wiki/Gatito_Fern%C3%A1ndez"
    }
  },
  "321697": {
    fifaId: "321697",
    teamCode: "AUS",
    name: "Leckie",
    fullName: "Mathew Leckie",
    number: 7,
    position: "FW",
    club: "Melbourne City",
    pictureUrl: "https://digitalhub.fifa.com/transform/bc1b0683-9839-4c4e-acf1-2256bc2e58a3/LECKIE-Mathew_321697",
    dateOfBirth: "1991-02-04",
    height: 181,
    socials: {
      instagram: "lecks.7",
      wikipedia: "https://pt.wikipedia.org/wiki/Mathew_Leckie"
    }
  },
  "331135": {
    fifaId: "331135",
    teamCode: "AUS",
    name: "Izzo",
    fullName: "Paul Izzo",
    number: 12,
    position: "GK",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/b64e66f2-6c65-4a90-8f28-6fc699fcf5ce/IZZO-Paul_331135",
    dateOfBirth: "1995-01-06",
    height: 184,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Paul_Izzo"
    }
  },
  "331149": {
    fifaId: "331149",
    teamCode: "AUS",
    name: "Degenek",
    fullName: "Milos Degenek",
    number: 2,
    position: "DF",
    club: "Sunderland",
    pictureUrl: "https://digitalhub.fifa.com/transform/93c60eb1-755d-4019-aedb-4da099ceb670/DEGENEK-Milos_331149",
    dateOfBirth: "1994-04-28",
    height: 187,
    socials: {
      instagram: "milosdegenek",
      wikipedia: "https://pt.wikipedia.org/wiki/Milo%C5%A1_Degenek"
    }
  },
  "331463": {
    fifaId: "331463",
    teamCode: "NZL",
    name: "Tim Payne",
    fullName: "Tim Payne",
    number: 2,
    position: "DF",
    club: "Wellington Phoenix",
    pictureUrl: "https://digitalhub.fifa.com/transform/2fd43bf7-76f0-4733-88d4-5d5ca820e91c/PAYNE-Tim_331463",
    dateOfBirth: "1994-01-10",
    height: 179,
    socials: {
      instagram: "timpayne__",
      wikipedia: "https://pt.wikipedia.org/wiki/Tim_Payne"
    }
  },
  "331732": {
    fifaId: "331732",
    teamCode: "CAN",
    name: "Cr\xE9peau",
    fullName: "Maxime Crepeau",
    number: 16,
    position: "GK",
    club: "Red Star Belgrade",
    pictureUrl: "https://digitalhub.fifa.com/transform/c4570ca7-10a7-44ca-901d-fee1e11e4400/CREPEAU-Maxime_331732",
    dateOfBirth: "1994-05-11",
    height: 185,
    socials: {
      instagram: "mcrepeau",
      wikipedia: "https://en.wikipedia.org/wiki/Maxime_Cr%C3%A9peau"
    }
  },
  "332314": {
    fifaId: "332314",
    teamCode: "SEN",
    name: "Gana",
    fullName: "Idrissa Gana Gueye",
    number: 5,
    position: "MF",
    club: "Monaco",
    pictureUrl: "https://digitalhub.fifa.com/transform/4d275801-8b11-4fcc-bed0-ace70703da2d/IDRISSA-GANA-GUEYE_332314_1",
    dateOfBirth: "1989-09-26",
    height: 174,
    socials: {
      instagram: "iganagueye",
      wikipedia: "https://pt.wikipedia.org/wiki/Idrissa_Gueye"
    }
  },
  "332847": {
    fifaId: "332847",
    teamCode: "ARG",
    name: "Paredes",
    fullName: "Leandro Paredes",
    number: 5,
    position: "MF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/76c073ae-2d3c-47b6-8fb5-698893f91a6f/PAREDES-Leandro_332847",
    dateOfBirth: "1994-06-29",
    height: 182,
    socials: {
      instagram: "leoparedes20",
      wikipedia: "https://pt.wikipedia.org/wiki/Leandro_Paredes"
    }
  },
  "332897": {
    fifaId: "332897",
    teamCode: "URU",
    name: "Aguirre",
    fullName: "Rodrigo Aguirre",
    number: 19,
    position: "FW",
    club: "Lazio",
    pictureUrl: "https://digitalhub.fifa.com/transform/eadeb58a-387f-4979-ae12-23a0296c172c/AGUIRRE-Rodrigo_332897",
    dateOfBirth: "1994-10-01",
    height: 182,
    socials: {
      instagram: "aguirrerodrigo21",
      wikipedia: "https://pt.wikipedia.org/wiki/Rodrigo_Aguirre"
    }
  },
  "332946": {
    fifaId: "332946",
    teamCode: "BRA",
    name: "Marquinhos",
    fullName: "Marquinhos",
    number: 4,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/30069661-f88d-4ff7-9c4e-071a5cf3c093/MARQUINHOS_332946",
    socials: {
      instagram: "marquinhosm5",
      wikipedia: "https://pt.wikipedia.org/wiki/Marcos_Ao%C3%A1s_Corr%C3%AAa"
    },
    dateOfBirth: "1994-05-14",
    height: 183
  },
  "335656": {
    fifaId: "335656",
    teamCode: "BRA",
    name: "Danilo",
    fullName: "Danilo",
    number: 13,
    position: "DF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/364f443f-83df-4e8e-803c-765feae146a3/DANILO_335656",
    dateOfBirth: "1991-07-15",
    height: 184,
    socials: {
      instagram: "daniluiz2",
      wikipedia: "https://pt.wikipedia.org/wiki/Danilo_Luiz_da_Silva"
    }
  },
  "335658": {
    fifaId: "335658",
    teamCode: "BRA",
    name: "Alex Sandro",
    fullName: "Alex Sandro",
    number: 6,
    position: "DF",
    club: "Fluminense",
    pictureUrl: "https://digitalhub.fifa.com/transform/c9b49c28-0494-4261-bb60-c2848b4e1120/ALEX-SANDRO_335658",
    dateOfBirth: "1991-01-26",
    height: 180,
    socials: {
      instagram: "alxsndro12",
      wikipedia: "https://pt.wikipedia.org/wiki/Alex_Sandro"
    }
  },
  "335807": {
    fifaId: "335807",
    teamCode: "CIV",
    name: "Jean Seri",
    fullName: "Jean Michael Seri",
    number: 4,
    position: "MF",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/115c99fd-ddc4-4f97-bc20-2cb7dae80735/SERI-Jean-Michael_335807",
    dateOfBirth: "1991-07-19",
    height: 168,
    socials: {
      instagram: "mika_seri6",
      wikipedia: "https://pt.wikipedia.org/wiki/Jean_Seri"
    }
  },
  "335999": {
    fifaId: "335999",
    teamCode: "ESP",
    name: "Aymeric Laporte",
    fullName: "Aymeric Laporte",
    number: 14,
    position: "DF",
    club: "Al-Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/e923ca38-381d-4187-9d40-9f5f72434530/LAPORTE-Aymeric_335999",
    dateOfBirth: "1994-05-27",
    height: 191,
    socials: {
      instagram: "laporte",
      wikipedia: "https://pt.wikipedia.org/wiki/Aymeric_Laporte"
    }
  },
  "336022": {
    fifaId: "336022",
    teamCode: "ENG",
    name: "Pickford",
    fullName: "Jordan Pickford",
    number: 1,
    position: "GK",
    club: "Everton",
    pictureUrl: "https://digitalhub.fifa.com/transform/5f9b3bbf-edb5-4956-bce7-2d0a8e77f6ab/PICKFORD-Jordan_336022",
    dateOfBirth: "1994-03-07",
    height: 185,
    socials: {
      instagram: "jpickford1",
      wikipedia: "https://pt.wikipedia.org/wiki/Jordan_Pickford"
    }
  },
  "336088": {
    fifaId: "336088",
    teamCode: "NED",
    name: "Ak\xE9",
    fullName: "Nathan Ake",
    number: 5,
    position: "DF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/e44b0c79-cb0b-4ce8-bace-7530a516371f/AKE-Nathan_336088",
    dateOfBirth: "1995-02-18",
    height: 180,
    socials: {
      instagram: "nathanake",
      wikipedia: "https://pt.wikipedia.org/wiki/Nathan_Ak%C3%A9"
    }
  },
  "336098": {
    fifaId: "336098",
    teamCode: "NED",
    name: "Memphis Depay",
    fullName: "Memphis Depay",
    number: 10,
    position: "FW",
    club: "Corinthians",
    pictureUrl: "https://digitalhub.fifa.com/transform/6fe9f49e-5f45-4a44-9807-579be23fc0db/DEPAY-Memphis_336098",
    dateOfBirth: "1994-02-13",
    height: 178,
    socials: {
      instagram: "memphisdepay",
      wikipedia: "https://pt.wikipedia.org/wiki/Memphis_Depay"
    }
  },
  "336170": {
    fifaId: "336170",
    teamCode: "TUR",
    name: "Ayhan",
    fullName: "Kaan Ayhan",
    number: 22,
    position: "MF",
    club: "Sivasspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/e9747d8e-47e9-45f3-b3b7-d3caf1ba1ecf/AYHAN-Kaan_336170",
    dateOfBirth: "1994-11-10",
    height: 185,
    socials: {
      instagram: "kaanayhan",
      wikipedia: "https://pt.wikipedia.org/wiki/Kaan_Ayhan"
    }
  },
  "336425": {
    fifaId: "336425",
    teamCode: "COD",
    name: "Bakambu",
    fullName: "C\xE9dric Bakambu",
    number: 17,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/25e27fcf-479e-42fe-bd09-63dc8b8fa202/BAKAMBU-Cedric_336425",
    dateOfBirth: "1991-04-11",
    height: 182,
    socials: {
      instagram: "bakambu17",
      wikipedia: "https://pt.wikipedia.org/wiki/C%C3%A9dric_Bakambu"
    }
  },
  "336439": {
    fifaId: "336439",
    teamCode: "COD",
    name: "Kakuta",
    fullName: "Ga\xEBl Kakuta",
    number: 11,
    position: "FW",
    club: "Amiens",
    pictureUrl: "https://digitalhub.fifa.com/transform/201587e3-e8f9-4201-9ee5-23931fd0f016/KAKUTA-Gael_336439",
    dateOfBirth: "1991-06-21",
    height: 174,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Ga%C3%ABl_Kakuta"
    }
  },
  "336459": {
    fifaId: "336459",
    teamCode: "TUN",
    name: "Khedira",
    fullName: "Rani Khedira",
    number: 13,
    position: "MF",
    club: "Sivasspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/21f404b3-b430-489b-819c-c0460a2c3590/KHEDIRA-Rani_336459",
    dateOfBirth: "1994-01-27",
    height: 188,
    socials: {
      instagram: "wahbi_khazri_8",
      wikipedia: "https://en.wikipedia.org/wiki/Rani_Khedira"
    }
  },
  "336472": {
    fifaId: "336472",
    teamCode: "CRO",
    name: "Kramari\u0107",
    fullName: "Andrej Kramaric",
    number: 9,
    position: "FW",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/a1ea2a12-4fba-4dbb-9a75-25c88685d90c/KRAMARIC-Andrej_336472",
    dateOfBirth: "1991-06-19",
    height: 177,
    socials: {
      instagram: "andrejkramaric",
      wikipedia: "https://pt.wikipedia.org/wiki/Andrej_Kramari%C4%87"
    }
  },
  "336641": {
    fifaId: "336641",
    teamCode: "NZL",
    name: "Thomas",
    fullName: "Ryan Thomas",
    number: 23,
    position: "MF",
    club: "Auckland FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/daf68d11-59d7-46f3-98ec-25a359c8a3a9/THOMAS-Ryan_336641",
    dateOfBirth: "1994-12-20",
    height: 176,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Ryan_Thomas"
    }
  },
  "337389": {
    fifaId: "337389",
    teamCode: "SCO",
    name: "Anthony Ralston",
    fullName: "Anthony Ralston",
    number: 24,
    position: "DF",
    club: "Watford",
    pictureUrl: "https://digitalhub.fifa.com/transform/eef7a9cc-256c-4000-ae64-38407521d30b/RALSTON-Anthony_337389",
    dateOfBirth: "1998-11-16",
    height: 178,
    socials: {
      instagram: "anthony_ralston1",
      wikipedia: "https://en.wikipedia.org/wiki/Anthony_Ralston"
    }
  },
  "339112": {
    fifaId: "339112",
    teamCode: "AUS",
    name: "Geria",
    fullName: "Jason Geria",
    number: 6,
    position: "DF",
    club: "Hibernian",
    pictureUrl: "https://digitalhub.fifa.com/transform/33a991a9-eb66-43b2-ad39-2718a8147c51/GERIA-Jason_339112",
    dateOfBirth: "1993-05-10",
    height: 181,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Jason_Geria"
    }
  },
  "339117": {
    fifaId: "339117",
    teamCode: "AUS",
    name: "Ryan",
    fullName: "Mathew Ryan",
    number: 1,
    position: "GK",
    club: "AZ Alkmaar",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c98d5eb-1514-4e8f-a6c6-60f4017b2175/RYAN-Mathew_339117",
    dateOfBirth: "1992-04-08",
    height: 184,
    socials: {
      instagram: "matthew_ryan_gk25",
      wikipedia: "https://pt.wikipedia.org/wiki/Mathew_Ryan"
    }
  },
  "339510": {
    fifaId: "339510",
    teamCode: "USA",
    name: "Ream",
    fullName: "Tim Ream",
    number: 13,
    position: "DF",
    club: "Charlotte FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/964be907-1e8e-49ec-bd7f-7085cf7d79d3/REAM-Tim_339510",
    dateOfBirth: "1987-10-05",
    height: 186,
    socials: {
      instagram: "tim.ream13",
      wikipedia: "https://pt.wikipedia.org/wiki/Tim_Ream"
    }
  },
  "339745": {
    fifaId: "339745",
    teamCode: "KSA",
    name: "Salem",
    fullName: "Salem Aldawsari",
    number: 10,
    position: "FW",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/d167ee25-02d4-48c1-b6bf-ec1eea3a1633/SALEM-ALDAWSARI_339745",
    dateOfBirth: "1991-08-19",
    height: 173,
    socials: {
      instagram: "29salem"
    }
  },
  "339746": {
    fifaId: "339746",
    teamCode: "KSA",
    name: "Ahmed Al-Kassar",
    fullName: "Ahmed Alkassar",
    number: 22,
    position: "GK",
    club: "Al-Shabab",
    pictureUrl: "https://digitalhub.fifa.com/transform/1354d5cd-4cb5-4494-9033-efd38b3f1ac0/AHMED-ALKASSAR_339746",
    dateOfBirth: "1991-05-08",
    height: 178
  },
  "339820": {
    fifaId: "339820",
    teamCode: "SEN",
    name: "Koulibaly",
    fullName: "Kalidou Koulibaly",
    number: 3,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/538bee26-1d47-4a95-a0f0-5d706f741e07/KOULIBALY-Kalidou_339820",
    dateOfBirth: "1991-06-20",
    height: 186,
    socials: {
      instagram: "kkoulibaly26",
      wikipedia: "https://pt.wikipedia.org/wiki/Kalidou_Koulibaly"
    }
  },
  "339987": {
    fifaId: "339987",
    teamCode: "CRO",
    name: "Kovacic",
    fullName: "Mateo Kovacic",
    number: 8,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/5d230f74-1e00-4b42-a880-844fe2aee964/KOVACIC-Mateo_339987",
    dateOfBirth: "1994-05-06",
    height: 178,
    socials: {
      instagram: "mateokovacic8",
      wikipedia: "https://pt.wikipedia.org/wiki/Mateo_Kova%C4%8Di%C4%87"
    }
  },
  "344654": {
    fifaId: "344654",
    teamCode: "EGY",
    name: "M Salah",
    fullName: "Mohamed Salah",
    number: 10,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d5236b8-acac-4946-af8e-5b007bcfa284/MOHAMED-SALAH_344654",
    dateOfBirth: "1992-06-15",
    height: 175,
    socials: {
      instagram: "mosalah",
      wikipedia: "https://pt.wikipedia.org/wiki/Mohamed_Salah"
    }
  },
  "344661": {
    fifaId: "344661",
    teamCode: "EGY",
    name: "R.Rabia",
    fullName: "Ramy Rabia",
    number: 5,
    position: "DF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/403c9e6d-efe6-4917-86ea-c7eddc442208/RABIA-Ramy_344661",
    dateOfBirth: "1993-05-20",
    height: 183,
    socials: {
      instagram: "ramyrabia",
      wikipedia: "https://pt.wikipedia.org/wiki/Ramy_Rabia"
    }
  },
  "345059": {
    fifaId: "345059",
    teamCode: "QAT",
    name: "Abdulaziz Hatem",
    fullName: "Abdulaziz Hatem",
    number: 6,
    position: "MF",
    club: "Al-Rayyan",
    pictureUrl: "https://digitalhub.fifa.com/transform/618c02bf-ef05-4651-bd3a-10ee566afcab/ABDULAZIZ-HATEM_345059",
    dateOfBirth: "1990-01-01",
    height: 179,
    socials: {
      instagram: "abdulaziz_hatim"
    }
  },
  "346743": {
    fifaId: "346743",
    teamCode: "IRN",
    name: "Shoja Khalilzadeh",
    fullName: "Shoja Khalilzadeh",
    number: 4,
    position: "DF",
    club: "Kasimpasa",
    pictureUrl: "https://digitalhub.fifa.com/transform/509a4e4e-b242-4488-a334-84faac974457/KHALILZADEH-Shoja_346743",
    dateOfBirth: "1989-05-14",
    height: 183,
    socials: {
      instagram: "shoja_khalilzadeh",
      wikipedia: "https://pt.wikipedia.org/wiki/Shojae_Khalilzadeh"
    }
  },
  "347085": {
    fifaId: "347085",
    teamCode: "IRQ",
    name: "Hassan",
    fullName: "Jalal Hassan",
    number: 12,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/a7f7a32a-4968-462b-9c34-e8a0d0530b99/JALAL-HASSAN_347085",
    dateOfBirth: "1991-05-18",
    height: 188,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Jalal_Hassan"
    }
  },
  "349342": {
    fifaId: "349342",
    teamCode: "AUS",
    name: "Behich",
    fullName: "Aziz Behich",
    number: 16,
    position: "DF",
    club: "Middlesbrough",
    pictureUrl: "https://digitalhub.fifa.com/transform/7b166229-d82d-4323-9c79-eb973e996408/BEHICH-Aziz_349342",
    dateOfBirth: "1990-12-16",
    height: 170,
    socials: {
      instagram: "azizbehich",
      wikipedia: "https://pt.wikipedia.org/wiki/Aziz_Behich"
    }
  },
  "353251": {
    fifaId: "353251",
    teamCode: "QAT",
    name: "Alaaeldin",
    fullName: "Ahmed Alaaeldin",
    number: 7,
    position: "FW",
    club: "Al-Gharafa SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/7a0a40ba-22fe-4585-8c3a-6bb981c6dfb4/AHMED-ALAAELDIN_353251",
    dateOfBirth: "1993-01-31",
    height: 179,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Ahmed_Alaaeldin"
    }
  },
  "353790": {
    fifaId: "353790",
    teamCode: "SEN",
    name: "Mane",
    fullName: "Sadio Mane",
    number: 10,
    position: "FW",
    club: "Al-Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/e0f75257-7c12-4777-a0d6-87b5d30f5548/MANE-Sadio_353790",
    dateOfBirth: "1992-04-10",
    height: 175,
    socials: {
      instagram: "sadiomaneofficiel",
      wikipedia: "https://pt.wikipedia.org/wiki/Sadio_Man%C3%A9"
    }
  },
  "354861": {
    fifaId: "354861",
    teamCode: "QAT",
    name: "Karim Boudiaf",
    fullName: "Karim Boudiaf",
    number: 12,
    position: "MF",
    club: "Al-Duhail SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/d73feeea-8ce1-447c-a008-c9b71e1e6295/KARIM-BOUDIAF_354861",
    dateOfBirth: "1990-09-16",
    height: 190,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Karim_Boudiaf"
    }
  },
  "355642": {
    fifaId: "355642",
    teamCode: "CPV",
    name: "Ryan Mendes Da Gra\xE7a",
    fullName: "Ryan Mendes",
    number: 20,
    position: "FW",
    club: "Rio Ave",
    pictureUrl: "https://digitalhub.fifa.com/transform/69224c23-3cb2-4d08-967c-0c318328366a/RYAN-MENDES_355642",
    dateOfBirth: "1990-01-08",
    height: 178,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Ryan_Mendes"
    }
  },
  "355775": {
    fifaId: "355775",
    teamCode: "AUS",
    name: "Irvine",
    fullName: "Jackson Irvine",
    number: 22,
    position: "MF",
    club: "St. Pauli",
    pictureUrl: "https://digitalhub.fifa.com/transform/7726492b-0996-47a2-aafd-bd362844d9df/IRVINE-Jackson_355775",
    dateOfBirth: "1993-03-07",
    height: 189,
    socials: {
      instagram: "jacksonirvine_",
      wikipedia: "https://pt.wikipedia.org/wiki/Jackson_Irvine"
    }
  },
  "356189": {
    fifaId: "356189",
    teamCode: "ENG",
    name: "Henderson",
    fullName: "Jordan Henderson",
    number: 14,
    position: "MF",
    club: "Ajax",
    pictureUrl: "https://digitalhub.fifa.com/transform/95e802dd-2731-42ff-97ce-b92c47954fa1/HENDERSON-Jordan_356189",
    dateOfBirth: "1990-06-17",
    height: 183,
    socials: {
      instagram: "jordanhenderson",
      wikipedia: "https://pt.wikipedia.org/wiki/Jordan_Henderson"
    }
  },
  "356412": {
    fifaId: "356412",
    teamCode: "SUI",
    name: "Widmer",
    fullName: "Silvan Widmer",
    number: 3,
    position: "DF",
    club: "Udinese Calcio",
    pictureUrl: "https://digitalhub.fifa.com/transform/41a8791f-677e-4106-b2e4-9d71011c561d/WIDMER-Silvan_356412",
    dateOfBirth: "1993-03-05",
    height: 183,
    socials: {
      instagram: "silvanwidmer",
      wikipedia: "https://pt.wikipedia.org/wiki/Silvan_Widmer"
    }
  },
  "356532": {
    fifaId: "356532",
    teamCode: "COD",
    name: "Chancel Mbemba",
    fullName: "Chancel Mbemba",
    number: 22,
    position: "DF",
    club: "Marseille",
    pictureUrl: "https://digitalhub.fifa.com/transform/30bebca0-cc33-4a32-ad33-8a6141647128/MBEMBA-Chancel_356532",
    dateOfBirth: "1994-08-08",
    height: 182,
    socials: {
      instagram: "chancel22",
      wikipedia: "https://pt.wikipedia.org/wiki/Chancel_Mbemba"
    }
  },
  "356673": {
    fifaId: "356673",
    teamCode: "QAT",
    name: "Lucas Mendes",
    fullName: "Lucas Mendes",
    number: 3,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/49a8906a-91a9-4527-b453-dbb1fe508c61/LUCAS-MENDES_356673",
    dateOfBirth: "1990-07-03",
    height: 179,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Lucas_Michel_Mendes"
    }
  },
  "356731": {
    fifaId: "356731",
    teamCode: "MEX",
    name: "Ra\xFAl",
    fullName: "Raul Jimenez",
    number: 9,
    position: "FW",
    club: "LA Galaxy",
    pictureUrl: "https://digitalhub.fifa.com/transform/ec48d7a7-0cf7-4fc8-b999-e3c15fee5e98/JIMENEZ-Raul_356731",
    dateOfBirth: "1991-05-05",
    height: 188,
    socials: {
      instagram: "raulalonsojimenez9",
      wikipedia: "https://pt.wikipedia.org/wiki/Ra%C3%BAl_Jim%C3%A9nez"
    }
  },
  "356956": {
    fifaId: "356956",
    teamCode: "MAR",
    name: "Bono",
    fullName: "Yassine Bounou",
    number: 1,
    position: "GK",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/338ae8a7-8734-423e-ae54-2f783dba77ce/BOUNOU-Yassine_356956",
    dateOfBirth: "1991-04-05",
    height: 192,
    socials: {
      instagram: "bounouyassine_bono",
      wikipedia: "https://pt.wikipedia.org/wiki/Yassine_Bounou"
    }
  },
  "358003": {
    fifaId: "358003",
    teamCode: "CZE",
    name: "Vladimir Darida",
    fullName: "Vladimir Darida",
    number: 8,
    position: "MF",
    club: "Kasimpasa",
    pictureUrl: "https://digitalhub.fifa.com/transform/201b5e1b-25b8-4cd6-a8fa-2678977172fe/DARIDA-Vladimir_358003",
    dateOfBirth: "1990-08-08",
    height: 172,
    socials: {
      instagram: "v_dary",
      wikipedia: "https://pt.wikipedia.org/wiki/Vladim%C3%ADr_Darida"
    }
  },
  "358106": {
    fifaId: "358106",
    teamCode: "BEL",
    name: "Courtois",
    fullName: "Thibaut Courtois",
    number: 1,
    position: "GK",
    club: "Al-Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/b630bdbe-3615-43b0-b715-8da37b1ecfa6/COURTOIS-Thibaut_358106",
    dateOfBirth: "1992-05-11",
    height: 199,
    socials: {
      instagram: "thibautcourtois",
      wikipedia: "https://pt.wikipedia.org/wiki/Thibaut_Courtois"
    }
  },
  "358112": {
    fifaId: "358112",
    teamCode: "BEL",
    name: "R. Lukaku",
    fullName: "Romelu Lukaku",
    number: 9,
    position: "FW",
    club: "DC United",
    pictureUrl: "https://digitalhub.fifa.com/transform/302b7fb7-6964-4a52-8db4-9c12778b80fa/LUKAKU-Romelu_358112",
    dateOfBirth: "1993-05-13",
    height: 190,
    socials: {
      instagram: "romelulukaku",
      wikipedia: "https://pt.wikipedia.org/wiki/Romelu_Lukaku"
    }
  },
  "358120": {
    fifaId: "358120",
    teamCode: "BEL",
    name: "De Bruyne",
    fullName: "Kevin De Bruyne",
    number: 7,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/41fb7de3-9f9e-44f1-b63f-0551f5d33b2b/DE-BRUYNE-Kevin_358120",
    dateOfBirth: "1991-06-28",
    height: 181,
    socials: {
      instagram: "kevindebruyne",
      wikipedia: "https://pt.wikipedia.org/wiki/Kevin_De_Bruyne"
    }
  },
  "358122": {
    fifaId: "358122",
    teamCode: "BEL",
    name: "Meunier",
    fullName: "Thomas Meunier",
    number: 15,
    position: "DF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/13d6695b-4220-48cb-91b1-16a60dff2aa6/MEUNIER-Thomas_358122",
    dateOfBirth: "1991-09-12",
    height: 190,
    socials: {
      instagram: "thomas12meunier",
      wikipedia: "https://pt.wikipedia.org/wiki/Thomas_Meunier"
    }
  },
  "358241": {
    fifaId: "358241",
    teamCode: "AUT",
    name: "Sabitzer",
    fullName: "Marcel Sabitzer",
    number: 9,
    position: "MF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/aa016ba2-828d-4d40-8e48-8f07a8d275d9/SABITZER-Marcel_358241",
    dateOfBirth: "1994-03-17",
    height: 178,
    socials: {
      instagram: "marcel7sabitzer",
      wikipedia: "https://pt.wikipedia.org/wiki/Marcel_Sabitzer"
    }
  },
  "359381": {
    fifaId: "359381",
    teamCode: "CRO",
    name: "Peri\u0161i\u0107",
    fullName: "Ivan Perisic",
    number: 14,
    position: "FW",
    club: "Hajduk Split",
    pictureUrl: "https://digitalhub.fifa.com/transform/ba7ea3ab-0ef6-4cdd-834c-79a94739fe26/PERISIC-Ivan_359381",
    dateOfBirth: "1989-02-02",
    height: 186,
    socials: {
      instagram: "ivanperisic444",
      wikipedia: "https://pt.wikipedia.org/wiki/Ivan_Peri%C5%A1i%C4%87"
    }
  },
  "359634": {
    fifaId: "359634",
    teamCode: "SCO",
    name: "Grant Hanley",
    fullName: "Grant Hanley",
    number: 5,
    position: "DF",
    club: "Rangers",
    pictureUrl: "https://digitalhub.fifa.com/transform/acc9b74c-859b-406f-add5-879c21150144/HANLEY-Grant_359634",
    dateOfBirth: "1991-11-20",
    height: 188,
    socials: {
      instagram: "ghanley__",
      wikipedia: "https://en.wikipedia.org/wiki/Grant_Hanley"
    }
  },
  "360496": {
    fifaId: "360496",
    teamCode: "SWE",
    name: "Nordfeldt",
    fullName: "Kristoffer Nordfeldt",
    number: 23,
    position: "GK",
    club: "AEK Athens",
    pictureUrl: "https://digitalhub.fifa.com/transform/747828c3-0592-411d-889a-9a59ae78e0b6/NORDFELDT-Kristoffer_360496",
    dateOfBirth: "1989-06-23",
    height: 190,
    socials: {
      instagram: "krisnordfeldt",
      wikipedia: "https://pt.wikipedia.org/wiki/Kristoffer_Nordfeldt"
    }
  },
  "360498": {
    fifaId: "360498",
    teamCode: "TUR",
    name: "Mert Gunok",
    fullName: "Mert Gunok",
    number: 1,
    position: "GK",
    club: "Be\u015Fikta\u015F",
    pictureUrl: "https://digitalhub.fifa.com/transform/1ce10157-fad1-435e-b21d-b4f25a483bc1/GUNOK-Mert_360498",
    dateOfBirth: "1989-03-01",
    height: 196,
    socials: {
      instagram: "mertgunok_34",
      wikipedia: "https://en.wikipedia.org/wiki/Mert_G%C3%BCnok"
    }
  },
  "363863": {
    fifaId: "363863",
    teamCode: "EGY",
    name: "Trezeguet",
    fullName: "Trezeguet",
    number: 7,
    position: "FW",
    club: "Trabzonspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/fd2622c8-9bd4-40f0-bb16-6b3311bb1811/TREZEGUET_363863",
    dateOfBirth: "1994-10-01",
    height: 181,
    socials: {
      instagram: "mahmoudtrezeguet",
      wikipedia: "https://pt.wikipedia.org/wiki/Tr%C3%A9z%C3%A9guet"
    }
  },
  "364752": {
    fifaId: "364752",
    teamCode: "CPV",
    name: "Vozinha",
    fullName: "Vozinha",
    number: 1,
    position: "GK",
    club: "Gil Vicente",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8286230-b161-484e-87a9-ce5a20e6f7d1/VOZINHA_364752",
    socials: {
      instagram: "vozinha1",
      wikipedia: "https://pt.wikipedia.org/wiki/Vozinha"
    },
    instagramPostUrl: "https://www.instagram.com/reel/DZno5Zsxo6V/",
    worldCupNote: "Segurar o 0 a 0 com a Espanha na estreia foi o grande destaque: rendeu o primeiro ponto de Cabo Verde e mostrou solidez defensiva num grupo dur\xEDssimo (Espanha, Uruguai e Ar\xE1bia Saudita). Titular e dono da camisa 1, Vozinha n\xE3o foi vazado no \xFAnico jogo disputado \u2014 1 jogo sem sofrer gols. Na tabela, Cabo Verde aparece em 4\xBA por crit\xE9rio de desempate, mas com tudo em aberto: o goleiro ser\xE1 pe\xE7a-chave diante de Uruguai e Ar\xE1bia Saudita para a sele\xE7\xE3o brigar por uma vaga no mata-mata.",
    dateOfBirth: "1986-06-03",
    height: 189
  },
  "367981": {
    fifaId: "367981",
    teamCode: "BRA",
    name: "Douglas Santos",
    fullName: "Douglas Santos",
    number: 16,
    position: "DF",
    club: "FC Zenit Saint Petersburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/7cef9b58-da05-42ba-afe9-aebcd4d40a0e/DOUGLAS-SANTOS_367981",
    dateOfBirth: "1994-03-22",
    height: 173,
    socials: {
      instagram: "douglassantos06",
      wikipedia: "https://pt.wikipedia.org/wiki/Douglas_Santos"
    }
  },
  "368535": {
    fifaId: "368535",
    teamCode: "NZL",
    name: "Max Crocombe",
    fullName: "Max Crocombe",
    number: 1,
    position: "GK",
    club: "Burton Albion",
    pictureUrl: "https://digitalhub.fifa.com/transform/0d8fc4f9-7330-4eaa-bbf0-7dfccbec09db/CROCOMBE-Max_368535",
    dateOfBirth: "1993-08-12",
    height: 190,
    socials: {
      instagram: "maximecrocombe",
      wikipedia: "https://en.wikipedia.org/wiki/Max_Crocombe"
    }
  },
  "368649": {
    fifaId: "368649",
    teamCode: "POR",
    name: "Jo\xE3o Cancelo",
    fullName: "Jo\xE3o Cancelo",
    number: 20,
    position: "DF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/bb6c8016-d4b5-4434-9bba-1ec8cac37300/JOAO-CANCELO_368649",
    dateOfBirth: "1994-05-27",
    height: 173,
    socials: {
      instagram: "jpcancelo",
      wikipedia: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Cancelo"
    }
  },
  "368655": {
    fifaId: "368655",
    teamCode: "URU",
    name: "J.M. Gim\xE9nez",
    fullName: "Jose Maria Gimenez",
    number: 2,
    position: "DF",
    club: "Atl\xE9tico de Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/977da143-5380-497d-85f7-d6e5ca34b27c/GIMENEZ-Jose-Maria_368655",
    dateOfBirth: "1995-01-20",
    height: 186,
    socials: {
      instagram: "josemariagimenez",
      wikipedia: "https://pt.wikipedia.org/wiki/Jos%C3%A9_Gim%C3%A9nez"
    }
  },
  "368660": {
    fifaId: "368660",
    teamCode: "URU",
    name: "G. Varela",
    fullName: "Guillermo Varela",
    number: 13,
    position: "DF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/5e8ec886-a385-4ca6-9e90-d16b13c37534/VARELA-Guillermo_368660",
    dateOfBirth: "1993-03-24",
    height: 174,
    socials: {
      instagram: "guillermovarela4",
      wikipedia: "https://pt.wikipedia.org/wiki/Guillermo_Varela"
    }
  },
  "368664": {
    fifaId: "368664",
    teamCode: "URU",
    name: "Rochet",
    fullName: "Sergio Rochet",
    number: 1,
    position: "GK",
    club: "Internacional",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5a98e25-83d4-441e-9c25-0eb4581277dc/ROCHET-Sergio_368664",
    dateOfBirth: "1993-03-23",
    height: 189,
    socials: {
      instagram: "chinorochet93",
      wikipedia: "https://pt.wikipedia.org/wiki/Sergio_Rochet"
    }
  },
  "368689": {
    fifaId: "368689",
    teamCode: "POR",
    name: "Jos\xE9 S\xE1",
    fullName: "Jos\xE9 S\xE1",
    number: 12,
    position: "GK",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/167fd8ff-0a3f-4c15-adc8-859e9d81caa3/JOSE-SA_368689",
    dateOfBirth: "1993-01-17",
    height: 192,
    socials: {
      instagram: "josesaoficial",
      wikipedia: "https://pt.wikipedia.org/wiki/Jos%C3%A9_S%C3%A1"
    }
  },
  "368744": {
    fifaId: "368744",
    teamCode: "IRQ",
    name: "F. Talib",
    fullName: "Fahad Talib",
    number: 1,
    position: "GK",
    club: "Al-Zawraa",
    pictureUrl: "https://digitalhub.fifa.com/transform/70d6d7cd-dcf4-4952-bee5-0f0b869aead7/FAHAD-TALIB_368744",
    dateOfBirth: "1994-10-21",
    height: 192,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Fahad_Talib"
    }
  },
  "368860": {
    fifaId: "368860",
    teamCode: "FRA",
    name: "Lucas Digne",
    fullName: "Lucas Digne",
    number: 3,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/70e09388-6736-4f6c-85cf-0aa2017a6b18/DIGNE-Lucas_368860",
    dateOfBirth: "1993-07-20",
    height: 178,
    socials: {
      instagram: "lucasdigne",
      wikipedia: "https://pt.wikipedia.org/wiki/Lucas_Digne"
    }
  },
  "369029": {
    fifaId: "369029",
    teamCode: "CRO",
    name: "Livakovi\u0107",
    fullName: "Dominik Livakovic",
    number: 1,
    position: "GK",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/6f54cf31-4fd8-4dff-aaa7-9db6bf2fa2ec/LIVAKOVIC-Dominik_369029",
    dateOfBirth: "1995-01-09",
    height: 188,
    socials: {
      instagram: "dominiklivakovic40",
      wikipedia: "https://pt.wikipedia.org/wiki/Dominik_Livakovi%C4%87"
    }
  },
  "369267": {
    fifaId: "369267",
    teamCode: "EGY",
    name: "Yasser",
    fullName: "Yasser Ibrahim",
    number: 2,
    position: "DF",
    club: "Al Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/028afc10-053b-443f-819c-d95ae0d46a55/YASSER-IBRAHIM_369267",
    dateOfBirth: "1993-02-10",
    height: 185,
    socials: {
      instagram: "yasserebrahim5",
      wikipedia: "https://pt.wikipedia.org/wiki/Yasser_Ibrahim"
    }
  },
  "369304": {
    fifaId: "369304",
    teamCode: "TUR",
    name: "Calhanoglu",
    fullName: "Hakan Calhanoglu",
    number: 10,
    position: "MF",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/f192cf34-173f-47b3-9748-981bd3f21275/CALHANOGLU-Hakan_369304",
    dateOfBirth: "1994-02-08",
    height: 178,
    socials: {
      instagram: "hakancalhanoglu",
      wikipedia: "https://pt.wikipedia.org/wiki/Hakan_%C3%87alhano%C4%9Flu"
    }
  },
  "369419": {
    fifaId: "369419",
    teamCode: "ENG",
    name: "Kane",
    fullName: "Harry Kane",
    number: 9,
    position: "FW",
    club: "Bayern M\xFCnchen",
    pictureUrl: "https://digitalhub.fifa.com/transform/5ad83fe6-1139-4f92-a97c-669052eb1755/KANE-Harry_369419",
    socials: {
      instagram: "harrykane",
      wikipedia: "https://pt.wikipedia.org/wiki/Harry_Kane"
    },
    dateOfBirth: "1993-07-28",
    height: 190
  },
  "369434": {
    fifaId: "369434",
    teamCode: "ENG",
    name: "Stones",
    fullName: "John Stones",
    number: 5,
    position: "DF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/bb455f6a-d793-44ef-92b8-bd1aff6d14d6/STONES-John_369434",
    dateOfBirth: "1994-05-28",
    height: 188,
    socials: {
      instagram: "johnstones5",
      wikipedia: "https://pt.wikipedia.org/wiki/John_Stones"
    }
  },
  "369744": {
    fifaId: "369744",
    teamCode: "PAR",
    name: "G. Gomez",
    fullName: "Gustavo Gomez",
    number: 15,
    position: "DF",
    club: "Palmeiras",
    pictureUrl: "https://digitalhub.fifa.com/transform/d37c65ce-135e-4bd4-b870-2c2548b93e2d/GOMEZ-Gustavo_369744",
    dateOfBirth: "1993-05-06",
    height: 179,
    socials: {
      instagram: "gustavogomez462",
      wikipedia: "https://pt.wikipedia.org/wiki/Gustavo_G%C3%B3mez"
    }
  },
  "369749": {
    fifaId: "369749",
    teamCode: "PAR",
    name: "Junior Alonso",
    fullName: "Junior Alonso",
    number: 6,
    position: "DF",
    club: "Atl\xE9tico Mineiro",
    pictureUrl: "https://digitalhub.fifa.com/transform/241fe8c3-a33e-411a-8eca-e81cc3fba926/ALONSO-Junior_369749",
    dateOfBirth: "1993-02-09",
    height: 184,
    socials: {
      instagram: "junioralonso_",
      wikipedia: "https://pt.wikipedia.org/wiki/Junior_Alonso"
    }
  },
  "369761": {
    fifaId: "369761",
    teamCode: "PAR",
    name: "Miguel Almiron",
    fullName: "Miguel Almiron",
    number: 10,
    position: "MF",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/62600270-27f4-432a-8f1f-1014124829c1/ALMIRON-Miguel_369761",
    dateOfBirth: "1994-02-10",
    height: 178,
    socials: {
      instagram: "miguel_almiron",
      wikipedia: "https://pt.wikipedia.org/wiki/Miguel_Almir%C3%B3n"
    }
  },
  "369768": {
    fifaId: "369768",
    teamCode: "PAR",
    name: "Sanabria",
    fullName: "Antonio Sanabria",
    number: 9,
    position: "FW",
    club: "Torino",
    pictureUrl: "https://digitalhub.fifa.com/transform/97bc175a-1e5c-417f-ab23-492237ddb3ab/SANABRIA-Antonio_369768",
    dateOfBirth: "1996-03-04",
    height: 180,
    socials: {
      instagram: "tsanabria9",
      wikipedia: "https://pt.wikipedia.org/wiki/Antonio_Sanabria"
    }
  },
  "370171": {
    fifaId: "370171",
    teamCode: "SEN",
    name: "Abdoulaye Seck",
    fullName: "Abdoulaye Seck",
    number: 4,
    position: "DF",
    club: "Everton",
    pictureUrl: "https://digitalhub.fifa.com/transform/d8107e3c-87b1-452f-9f6a-a704145d2d51/SECK-Abdoulaye_370171",
    dateOfBirth: "1992-06-04",
    height: 192,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Abdoulaye_Seck_(footballer,_born_1992)"
    }
  },
  "370986": {
    fifaId: "370986",
    teamCode: "CAN",
    name: "Jonathan Osorio",
    fullName: "Jonathan Osorio",
    number: 21,
    position: "MF",
    club: "Toronto FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/982a5ed2-0878-4733-b071-cd7cc532ee37/OSORIO-Jonathan_370986",
    dateOfBirth: "1992-06-12",
    height: 175,
    socials: {
      instagram: "j.oso21",
      wikipedia: "https://en.wikipedia.org/wiki/Jonathan_Osorio"
    }
  },
  "371142": {
    fifaId: "371142",
    teamCode: "NZL",
    name: "Rufer",
    fullName: "Alex Rufer",
    number: 14,
    position: "MF",
    club: "Troyes",
    pictureUrl: "https://digitalhub.fifa.com/transform/cc41974e-475a-4ba0-bb88-ec792a18c3ab/RUFER-Alex_371142",
    dateOfBirth: "1996-06-12",
    height: 180,
    socials: {
      instagram: "alexrufer",
      wikipedia: "https://en.wikipedia.org/wiki/Alex_Rufer"
    }
  },
  "371553": {
    fifaId: "371553",
    teamCode: "MAR",
    name: "Ahmed Reda Tagnaouti",
    fullName: "Ahmed Reda Tagnaouti",
    number: 22,
    position: "GK",
    club: "Real Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/3efabccf-6fc5-4192-b000-ea89f4b63c06/TAGNAOUTI-Ahmed-Reda_371553",
    dateOfBirth: "1996-04-05",
    height: 194,
    socials: {
      instagram: "reda_tagnaouti",
      wikipedia: "https://pt.wikipedia.org/wiki/Ahmed_Reda_Tagnaouti"
    }
  },
  "371609": {
    fifaId: "371609",
    teamCode: "CIV",
    name: "Kessie",
    fullName: "Franck Kessie",
    number: 8,
    position: "MF",
    club: "Al Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/2e649ed1-5e23-4de2-aafc-79fac130f5f0/KESSIE-Franck_371609",
    dateOfBirth: "1996-12-19",
    height: 183,
    socials: {
      instagram: "franckkessie",
      wikipedia: "https://pt.wikipedia.org/wiki/Franck_Kessi%C3%A9"
    },
    instagramPostUrl: "https://www.instagram.com/p/DZMvpiQCP7q/"
  },
  "371736": {
    fifaId: "371736",
    teamCode: "IRN",
    name: "S. Ezatolahi",
    fullName: "Saeid Ezatolahi",
    number: 6,
    position: "MF",
    club: "Shabab Al Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/a2e8983e-9596-49b3-8c5c-e398d66e27c5/EZATOLAHI-Saeid_371736",
    dateOfBirth: "1996-10-01",
    height: 189,
    socials: {
      instagram: "saeedezatolahi",
      wikipedia: "https://pt.wikipedia.org/wiki/Saeid_Ezatolahi"
    }
  },
  "371739": {
    fifaId: "371739",
    teamCode: "AUT",
    name: "Schlager",
    fullName: "Alexander Schlager",
    number: 1,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/9612130f-7351-47d4-b346-dcd331a62cbe/SCHLAGER-Alexander_371739",
    dateOfBirth: "1996-02-01",
    height: 188,
    socials: {
      instagram: "xav_er_",
      wikipedia: "https://en.wikipedia.org/wiki/Alexander_Schlager"
    }
  },
  "371956": {
    fifaId: "371956",
    teamCode: "BRA",
    name: "L\xE9o Pereira",
    fullName: "Leo Pereira",
    number: 15,
    position: "DF",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/9f0ecbc1-e1f8-4c5a-a39b-34902fd3cfe7/LEO-PEREIRA_371956",
    dateOfBirth: "1996-01-31",
    height: 189,
    socials: {
      instagram: "leopereira4",
      wikipedia: "https://pt.wikipedia.org/wiki/L%C3%A9o_Pereira"
    }
  },
  "371958": {
    fifaId: "371958",
    teamCode: "CAN",
    name: "Derek Cornelius",
    fullName: "Derek Cornelius",
    number: 13,
    position: "DF",
    club: "Inter Miami",
    pictureUrl: "https://digitalhub.fifa.com/transform/efe78874-6cb4-4156-a6ce-af7c6374d11f/CORNELIUS-Derek_371958",
    dateOfBirth: "1997-11-25",
    height: 186,
    socials: {
      instagram: "dcornelius13",
      wikipedia: "https://en.wikipedia.org/wiki/Derek_Cornelius"
    }
  },
  "372090": {
    fifaId: "372090",
    teamCode: "MEX",
    name: "Orbelin Pineda",
    fullName: "Orbelin Pineda",
    number: 17,
    position: "MF",
    club: "AEK Atenas",
    pictureUrl: "https://digitalhub.fifa.com/transform/ef0f99d9-6838-4b25-8a18-ecd9638bd51f/PINEDA-Orbelin_372090",
    dateOfBirth: "1996-03-24",
    height: 169,
    socials: {
      instagram: "orbelin7pineda",
      wikipedia: "https://pt.wikipedia.org/wiki/Orbel%C3%ADn_Pineda"
    }
  },
  "372243": {
    fifaId: "372243",
    teamCode: "AUT",
    name: "Lienhart",
    fullName: "Philipp Lienhart",
    number: 15,
    position: "DF",
    club: "SC Freiburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/b2217b87-df88-4228-8235-a7ec752aef31/LIENHART-Philipp_372243",
    dateOfBirth: "1996-07-11",
    height: 189,
    socials: {
      instagram: "philipp_lienhart",
      wikipedia: "https://pt.wikipedia.org/wiki/Philipp_Lienhart"
    }
  },
  "372266": {
    fifaId: "372266",
    teamCode: "MAR",
    name: "S. Amrabat",
    fullName: "Sofyan Amrabat",
    number: 4,
    position: "MF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf6efacc-6c34-4679-b833-b2c5371b4ee6/AMRABAT-Sofyan_372266",
    dateOfBirth: "1996-08-21",
    height: 185,
    socials: {
      instagram: "sofyanamrabat",
      wikipedia: "https://pt.wikipedia.org/wiki/Sofyan_Amrabat"
    }
  },
  "372294": {
    fifaId: "372294",
    teamCode: "TUN",
    name: "Ben Hessen",
    fullName: "Sabri Ben Hessen",
    number: 22,
    position: "GK",
    club: "Hannover 96",
    pictureUrl: "https://digitalhub.fifa.com/transform/69fa6a49-0e30-42d4-afe1-83d6e38c1eed/BEN-HESSEN-Sabri_372294",
    dateOfBirth: "1996-06-13",
    height: 189,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Sabri_Ben_Hessen"
    }
  },
  "372424": {
    fifaId: "372424",
    teamCode: "CRO",
    name: "\u0106aleta-Car",
    fullName: "Duje Caleta-Car",
    number: 5,
    position: "DF",
    club: "Southampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/d8171170-8b91-49e5-b32a-7b3494bf5809/CALETA-CAR-Duje_372424",
    dateOfBirth: "1996-09-17",
    height: 193,
    socials: {
      instagram: "dujecar_5",
      wikipedia: "https://pt.wikipedia.org/wiki/Duje_%C4%86aleta-Car"
    }
  },
  "372436": {
    fifaId: "372436",
    teamCode: "BIH",
    name: "\u0160unji\u0107",
    fullName: "Ivan Sunjic",
    number: 14,
    position: "MF",
    club: "FC K\xF6ln",
    pictureUrl: "https://digitalhub.fifa.com/transform/ddc91c53-fc37-453c-b16e-50ef5e2dd2da/SUNJIC-Ivan_372436",
    dateOfBirth: "1996-10-09",
    height: 183,
    socials: {
      instagram: "ivan_sunjic34",
      wikipedia: "https://en.wikipedia.org/wiki/Ivan_%C5%A0unji%C4%87"
    }
  },
  "373235": {
    fifaId: "373235",
    teamCode: "NOR",
    name: "Nyland",
    fullName: "Orjan Nyland",
    number: 1,
    position: "GK",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/4abc883f-1368-46d6-8849-308d06b641e6/NYLAND-Orjan_373235",
    dateOfBirth: "1990-09-10",
    height: 192,
    socials: {
      instagram: "orjanhnyland1",
      wikipedia: "https://en.wikipedia.org/wiki/%C3%98rjan_Nyland"
    }
  },
  "373344": {
    fifaId: "373344",
    teamCode: "CPV",
    name: "Rodrigues",
    fullName: "Garry Rodrigues",
    number: 11,
    position: "MF",
    club: "Sivasspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8ad756c-e6dc-4458-ad13-d34d2b668c63/GARRY-RODRIGUES_373344",
    dateOfBirth: "1990-11-27",
    height: 173,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Garry_Rodrigues"
    }
  },
  "373400": {
    fifaId: "373400",
    teamCode: "ECU",
    name: "Enner Valencia",
    fullName: "Enner Valencia",
    number: 13,
    position: "FW",
    club: "Internacional",
    pictureUrl: "https://digitalhub.fifa.com/transform/4688cb2a-6446-4439-ba5f-e4db7b5a18c5/VALENCIA-Enner_373400",
    dateOfBirth: "1989-11-04",
    height: 177,
    socials: {
      instagram: "ennervalencia1",
      wikipedia: "https://pt.wikipedia.org/wiki/Enner_Valencia"
    }
  },
  "375600": {
    fifaId: "375600",
    teamCode: "AUT",
    name: "Alessandro Sch\xF6pf",
    fullName: "Alessandro Schoepf",
    number: 26,
    position: "MF",
    club: "Wolfsberger AC",
    pictureUrl: "https://digitalhub.fifa.com/transform/712811cf-a3ff-4043-91f0-5044f8028dee/SCHOEPF-Alessandro_375600",
    dateOfBirth: "1994-02-07",
    height: 178,
    socials: {
      instagram: "alessandroschoepf"
    }
  },
  "376230": {
    fifaId: "376230",
    teamCode: "BIH",
    name: "Sead Kolasinac",
    fullName: "Sead Kolasinac",
    number: 5,
    position: "DF",
    club: "Cagliari",
    pictureUrl: "https://digitalhub.fifa.com/transform/bed62578-6b40-402e-8c63-94159988fe95/KOLASINAC-Sead_376230",
    dateOfBirth: "1993-06-20",
    height: 183,
    socials: {
      instagram: "seadk6",
      wikipedia: "https://pt.wikipedia.org/wiki/Sead_Kola%C5%A1inac"
    }
  },
  "376285": {
    fifaId: "376285",
    teamCode: "ALG",
    name: "Aissa Mandi",
    fullName: "Aissa Mandi",
    number: 2,
    position: "DF",
    club: "Al-Arabi",
    pictureUrl: "https://digitalhub.fifa.com/transform/dc4250ac-0a37-44da-9ae0-c858225ad8a1/MANDI-Aissa_376285",
    dateOfBirth: "1991-10-22",
    height: 184,
    socials: {
      instagram: "aissamandi23",
      wikipedia: "https://pt.wikipedia.org/wiki/A%C3%AFssa_Mandi"
    }
  },
  "379886": {
    fifaId: "379886",
    teamCode: "IRN",
    name: "A. Jahanbakhsh",
    fullName: "Alireza Jahanbakhsh",
    number: 7,
    position: "MF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/1bea8439-0136-4f96-ae79-7d165c648b4a/JAHANBAKHSH-Alireza_379886",
    dateOfBirth: "1993-08-11",
    height: 180,
    socials: {
      instagram: "alirezajb_official",
      wikipedia: "https://pt.wikipedia.org/wiki/Alireza_Jahanbakhsh"
    }
  },
  "379939": {
    fifaId: "379939",
    teamCode: "ALG",
    name: "Nabil Bentaleb",
    fullName: "Nabil Bentaleb",
    number: 19,
    position: "MF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/02fbf423-afa1-4863-8ddc-af2136fb5685/BENTALEB-Nabil_379939",
    dateOfBirth: "1994-11-24",
    height: 189,
    socials: {
      instagram: "nabilbentaleb",
      wikipedia: "https://pt.wikipedia.org/wiki/Nabil_Bentaleb"
    }
  },
  "379942": {
    fifaId: "379942",
    teamCode: "ALG",
    name: "Mahrez",
    fullName: "Riyad Mahrez",
    number: 7,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/172fb59c-24f2-4bc0-82a2-cdc869badf53/MAHREZ-Riyad_379942",
    dateOfBirth: "1991-02-21",
    height: 179,
    socials: {
      instagram: "riyadmahrez26.7",
      wikipedia: "https://pt.wikipedia.org/wiki/Riyad_Mahrez"
    }
  },
  "379953": {
    fifaId: "379953",
    teamCode: "GER",
    name: "Goretzka",
    fullName: "Leon Goretzka",
    number: 8,
    position: "MF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/a5e5e083-d89c-4be7-a367-8456e0f8cb35/GORETZKA-Leon_379953",
    dateOfBirth: "1995-02-06",
    height: 189,
    socials: {
      instagram: "leon_goretzka",
      wikipedia: "https://pt.wikipedia.org/wiki/Leon_Goretzka"
    }
  },
  "379955": {
    fifaId: "379955",
    teamCode: "GER",
    name: "R\xFCdiger",
    fullName: "Antonio Ruediger",
    number: 2,
    position: "DF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/88c43fe2-0c78-437c-a2bf-388c3673c58c/RUEDIGER-Antonio_379955",
    dateOfBirth: "1993-03-03",
    height: 190,
    socials: {
      instagram: "toniruediger",
      wikipedia: "https://pt.wikipedia.org/wiki/Antonio_R%C3%BCdiger"
    }
  },
  "380005": {
    fifaId: "380005",
    teamCode: "CRO",
    name: "Mario Pasalic",
    fullName: "Mario Pasalic",
    number: 15,
    position: "MF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/f3c0fd5e-6814-4acc-822a-2152e1cf79de/PASALIC-Mario_380005",
    dateOfBirth: "1995-02-09",
    height: 188,
    socials: {
      instagram: "pasalicmario",
      wikipedia: "https://pt.wikipedia.org/wiki/Mario_Pa%C5%A1ali%C4%87"
    }
  },
  "380007": {
    fifaId: "380007",
    teamCode: "IRN",
    name: "Alireza Beiranvand",
    fullName: "Alireza Beiranvand",
    number: 1,
    position: "GK",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8cf4e84-2bd2-4e20-bb73-c7f14a935b73/BEIRANVAND-Alireza_380007",
    dateOfBirth: "1992-09-21",
    height: 195,
    socials: {
      instagram: "alirezabeyranvand.official",
      wikipedia: "https://en.wikipedia.org/wiki/Alireza_Beiranvand"
    }
  },
  "382312": {
    fifaId: "382312",
    teamCode: "AUS",
    name: "Cameron Burgess",
    fullName: "Cameron Burgess",
    number: 21,
    position: "DF",
    club: "Central Coast Mariners",
    pictureUrl: "https://digitalhub.fifa.com/transform/75870c29-917d-4ad0-984c-c7ba4e85953c/BURGESS-Cameron_382312",
    dateOfBirth: "1995-10-21",
    height: 194,
    socials: {
      instagram: "cburgess95",
      wikipedia: "https://en.wikipedia.org/wiki/Cameron_Burgess"
    }
  },
  "382739": {
    fifaId: "382739",
    teamCode: "ESP",
    name: "M. Llorente",
    fullName: "Marcos Llorente",
    number: 5,
    position: "DF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/ab948683-40c0-4af1-9038-b7f24da3ffc2/LLORENTE-Marcos_382739",
    dateOfBirth: "1995-01-30",
    height: 183,
    socials: {
      instagram: "marcosllorente",
      wikipedia: "https://pt.wikipedia.org/wiki/Marcos_Llorente"
    }
  },
  "384751": {
    fifaId: "384751",
    teamCode: "POR",
    name: "G. Guedes",
    fullName: "Gon\xE7alo Guedes",
    number: 19,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/ebae7760-2b89-4f53-bc2a-38b1b276f85b/GONCALO-GUEDES_384751",
    dateOfBirth: "1996-11-29",
    height: 179,
    socials: {
      instagram: "goncaloguedes17",
      wikipedia: "https://pt.wikipedia.org/wiki/Gon%C3%A7alo_Guedes"
    }
  },
  "384752": {
    fifaId: "384752",
    teamCode: "POR",
    name: "R\xFAben Dias",
    fullName: "R\xFAben Dias",
    number: 3,
    position: "DF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/7eab2fa3-e7d1-4876-aaaa-a44a9e923750/RUBEN-DIAS_384752",
    dateOfBirth: "1997-05-14",
    height: 187,
    socials: {
      instagram: "rubendias",
      wikipedia: "https://pt.wikipedia.org/wiki/R%C3%BAben_Dias"
    }
  },
  "384797": {
    fifaId: "384797",
    teamCode: "IRN",
    name: "Ramin",
    fullName: "Ramin Rezaeian",
    number: 23,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/0aad53c3-8ade-4161-8605-09eed82b2c23/REZAEIAN-Ramin_384797",
    dateOfBirth: "1990-03-21",
    height: 184,
    socials: {
      instagram: "raminrezaeian",
      wikipedia: "https://pt.wikipedia.org/wiki/Ramin_Rezaeian"
    }
  },
  "384850": {
    fifaId: "384850",
    teamCode: "JOR",
    name: "Rajaei Ayed",
    fullName: "Rajaei Ayed",
    number: 14,
    position: "MF",
    club: "Al-Wehdat SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/98cfccc5-8732-4a13-a4ec-127c4e886d90/RAJAEI-AYED_384850",
    dateOfBirth: "1993-07-25",
    height: 175,
    socials: {
      instagram: "rajaei.ayed",
      wikipedia: "https://en.wikipedia.org/wiki/Rajaei_Ayed"
    }
  },
  "385067": {
    fifaId: "385067",
    teamCode: "QAT",
    name: "Boualem Khoukhi",
    fullName: "Boualem Khoukhi",
    number: 16,
    position: "DF",
    club: "Al Sadd Sports Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3e4cf4b-06b4-4c6b-9370-a64d8a4c8bfb/BOUALEM-KHOUKHI_385067",
    dateOfBirth: "1990-07-09",
    height: 185,
    socials: {
      instagram: "khoukhi1616",
      wikipedia: "https://pt.wikipedia.org/wiki/Boualem_Khoukhi"
    }
  },
  "385070": {
    fifaId: "385070",
    teamCode: "QAT",
    name: "Mohammed Muntari",
    fullName: "Mohammed Muntari",
    number: 9,
    position: "FW",
    club: "Al-Duhail SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/8a9260d2-027a-4716-af4b-7e5f2983e652/MOHAMMED-MUNTARI_385070",
    dateOfBirth: "1993-12-20",
    height: 192,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mohammed_Muntari"
    }
  },
  "385248": {
    fifaId: "385248",
    teamCode: "AUT",
    name: "Florian Grillitsch",
    fullName: "Florian Grillitsch",
    number: 10,
    position: "MF",
    club: "S.C. Braga",
    pictureUrl: "https://digitalhub.fifa.com/transform/255e18de-7d1d-4a99-a05c-8047149ec1bc/GRILLITSCH-Florian_385248",
    dateOfBirth: "1995-08-07",
    height: 186,
    socials: {
      instagram: "floriangrillitsch",
      wikipedia: "https://pt.wikipedia.org/wiki/Florian_Grillitsch"
    }
  },
  "385259": {
    fifaId: "385259",
    teamCode: "AUT",
    name: "Laimer",
    fullName: "Konrad Laimer",
    number: 20,
    position: "MF",
    club: "FC Bayern Munich",
    pictureUrl: "https://digitalhub.fifa.com/transform/e5140daf-dd57-4b76-9777-85aec86e6c22/LAIMER-Konrad_385259",
    dateOfBirth: "1997-05-27",
    height: 180,
    socials: {
      instagram: "konradlaimer",
      wikipedia: "https://pt.wikipedia.org/wiki/Konrad_Laimer"
    }
  },
  "385306": {
    fifaId: "385306",
    teamCode: "PAR",
    name: "Andres Cubas",
    fullName: "Andres Cubas",
    number: 14,
    position: "MF",
    club: "Vancouver Whitecaps",
    pictureUrl: "https://digitalhub.fifa.com/transform/5f115675-51fb-4e0c-ac8c-7226b762b4a1/CUBAS-Andres_385306",
    dateOfBirth: "1996-05-11",
    height: 166,
    socials: {
      instagram: "andrescubas08",
      wikipedia: "https://pt.wikipedia.org/wiki/Adri%C3%A1n_Cubas"
    }
  },
  "385531": {
    fifaId: "385531",
    teamCode: "AUT",
    name: "Xaver Schlager",
    fullName: "Xaver Schlager",
    number: 4,
    position: "MF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/f00dad89-01ad-4a76-9b69-9da9b0cccceb/SCHLAGER-Xaver_385531",
    dateOfBirth: "1997-09-28",
    height: 174,
    socials: {
      instagram: "xav_er_",
      wikipedia: "https://pt.wikipedia.org/wiki/Xaver_Schlager"
    }
  },
  "385994": {
    fifaId: "385994",
    teamCode: "USA",
    name: "Roldan",
    fullName: "Cristian Roldan",
    number: 15,
    position: "MF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/8b0d52a9-62d1-4e23-9a23-e786cfde39dd/ROLDAN-Cristian_385994",
    dateOfBirth: "1995-06-03",
    height: 173,
    socials: {
      instagram: "cristianroldan_",
      wikipedia: "https://pt.wikipedia.org/wiki/Cristian_Roldan"
    }
  },
  "386339": {
    fifaId: "386339",
    teamCode: "MEX",
    name: "G. Martinez",
    fullName: "Guillermo Martinez",
    number: 22,
    position: "FW",
    club: "San Diego FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/7f04e2d8-1f0b-491e-8551-5a856979bc97/MARTINEZ-Guillermo_386339",
    dateOfBirth: "1995-03-15",
    height: 191,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Guillermo_Mart%C3%ADnez_(footballer)"
    }
  },
  "386347": {
    fifaId: "386347",
    teamCode: "QAT",
    name: "Afif",
    fullName: "Akram Afif",
    number: 11,
    position: "FW",
    club: "Al Sadd Sports Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5995ed9-3969-48a1-abc7-abd8df77abda/AKRAM-AFIF_386347",
    dateOfBirth: "1996-11-18",
    height: 176,
    socials: {
      instagram: "akramafif",
      wikipedia: "https://pt.wikipedia.org/wiki/Akram_Afif"
    }
  },
  "386348": {
    fifaId: "386348",
    teamCode: "QAT",
    name: "A. Madibo",
    fullName: "Assim Madibo",
    number: 23,
    position: "MF",
    pictureUrl: "https://digitalhub.fifa.com/transform/2b2c6d70-e76e-41d8-baff-36ba0965fca3/ASSIM-MADIBO_386348",
    dateOfBirth: "1996-10-22",
    height: 168,
    socials: {
      instagram: "madibo_96",
      wikipedia: "https://pt.wikipedia.org/wiki/Assim_Madibo"
    }
  },
  "386366": {
    fifaId: "386366",
    teamCode: "QAT",
    name: "Almoez Ali",
    fullName: "Almoez Ali",
    number: 19,
    position: "FW",
    club: "Al-Duhail SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/e49165f0-de52-4f7b-bb9a-689e7c4d4bd3/ALMOEZ-ALI_386366",
    dateOfBirth: "1996-08-19",
    height: 180,
    socials: {
      instagram: "ali.almoez",
      wikipedia: "https://pt.wikipedia.org/wiki/Almoez_Ali"
    }
  },
  "386387": {
    fifaId: "386387",
    teamCode: "QAT",
    name: "Sultan Albrake",
    fullName: "Sultan Albrake",
    number: 18,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/333bc183-dd03-4b3a-8ee6-410a32c12e57/SULTAN-ALBRAKE_386387",
    dateOfBirth: "1996-04-07",
    height: 178
  },
  "386413": {
    fifaId: "386413",
    teamCode: "GER",
    name: "Kimmich",
    fullName: "Joshua Kimmich",
    number: 6,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/ada33dfd-5b01-4792-88f4-14c06641509e/KIMMICH-Joshua_386413",
    dateOfBirth: "1995-02-08",
    height: 177,
    socials: {
      instagram: "joshua.kimmich",
      wikipedia: "https://pt.wikipedia.org/wiki/Joshua_Kimmich"
    }
  },
  "386458": {
    fifaId: "386458",
    teamCode: "PAR",
    name: "Alejandro Romero Gamarra",
    fullName: "Alejandro Romero Gamarra",
    number: 17,
    position: "FW",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/f1ba51b5-2593-413f-9d87-a464060e20ff/ROMERO-GAMARRA-Alejandro_386458",
    dateOfBirth: "1995-01-11",
    height: 165,
    socials: {
      instagram: "kaku_romero17",
      wikipedia: "https://pt.wikipedia.org/wiki/Alejandro_Romero"
    }
  },
  "386538": {
    fifaId: "386538",
    teamCode: "URU",
    name: "R. Bentancur",
    fullName: "Rodrigo Bentancur",
    number: 6,
    position: "MF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/148bf081-d6bb-4b52-8db0-9231126fa762/BENTANCUR-Rodrigo_386538",
    dateOfBirth: "1997-06-25",
    height: 187,
    socials: {
      instagram: "rodrigo_bentancur",
      wikipedia: "https://pt.wikipedia.org/wiki/Rodrigo_Bentancur"
    }
  },
  "388475": {
    fifaId: "388475",
    teamCode: "IRN",
    name: "Taremi",
    fullName: "Mehdi Taremi",
    number: 9,
    position: "FW",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/0d942331-39fb-421e-8a8d-d1f875958559/TAREMI-Mehdi_388475",
    dateOfBirth: "1992-07-18",
    height: 187,
    socials: {
      instagram: "mehditaremiofficial9",
      wikipedia: "https://pt.wikipedia.org/wiki/Mehdi_Taremi"
    }
  },
  "389437": {
    fifaId: "389437",
    teamCode: "JOR",
    name: "Ehsan Haddad",
    fullName: "Ehsan Haddad",
    number: 23,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/59f676b5-4f37-4206-8c37-5c2aecdd3b9e/EHSAN-HADDAD_389437",
    dateOfBirth: "1994-02-05",
    height: 174,
    socials: {
      instagram: "ehsan_haddad_"
    }
  },
  "389485": {
    fifaId: "389485",
    teamCode: "ARG",
    name: "Palacios",
    fullName: "Exequiel Palacios",
    number: 14,
    position: "MF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/0c3725a4-a529-412d-867b-2ca0929a7a85/PALACIOS-Exequiel_389485",
    dateOfBirth: "1998-10-05",
    height: 177,
    socials: {
      instagram: "exepalaciosok",
      wikipedia: "https://pt.wikipedia.org/wiki/Exequiel_Palacios"
    }
  },
  "389740": {
    fifaId: "389740",
    teamCode: "CRO",
    name: "Erli\u0107",
    fullName: "Martin Erlic",
    number: 25,
    position: "DF",
    club: "Sassuolo",
    pictureUrl: "https://digitalhub.fifa.com/transform/6353056f-aabd-49e1-9931-9b28010746a6/ERLIC-Martin_389740",
    dateOfBirth: "1998-01-24",
    height: 192,
    socials: {
      instagram: "martin.erlic",
      wikipedia: "https://en.wikipedia.org/wiki/Martin_Erli%C4%87"
    }
  },
  "389753": {
    fifaId: "389753",
    teamCode: "CRO",
    name: "Moro",
    fullName: "Nikola Moro",
    number: 7,
    position: "MF",
    club: "Dynamo Moscow",
    pictureUrl: "https://digitalhub.fifa.com/transform/f0845e44-1c38-4bff-a4d4-3e238907d961/MORO-Nikola_389753",
    dateOfBirth: "1998-03-12",
    height: 183,
    socials: {
      instagram: "moronikola",
      wikipedia: "https://en.wikipedia.org/wiki/Nikola_Moro"
    }
  },
  "389754": {
    fifaId: "389754",
    teamCode: "CRO",
    name: "Petar Musa",
    fullName: "Petar Musa",
    number: 26,
    position: "FW",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/5c33a6f7-32cc-4821-949d-42fa33de6f74/MUSA-Petar_389754",
    dateOfBirth: "1998-03-04",
    height: 190,
    socials: {
      instagram: "petarmusa",
      wikipedia: "https://pt.wikipedia.org/wiki/Petar_Musa"
    }
  },
  "389782": {
    fifaId: "389782",
    teamCode: "ECU",
    name: "Estupi\xF1\xE1n",
    fullName: "Pervis Estupinan",
    number: 7,
    position: "DF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/85df33e2-083f-4cef-9fa2-3a8fc7d29466/ESTUPINAN-Pervis_389782",
    dateOfBirth: "1998-01-21",
    height: 175,
    socials: {
      instagram: "pervisestupinan_oficial",
      wikipedia: "https://pt.wikipedia.org/wiki/Pervis_Estupi%C3%B1%C3%A1n"
    }
  },
  "389784": {
    fifaId: "389784",
    teamCode: "ECU",
    name: "Franco",
    fullName: "Alan Franco",
    number: 21,
    position: "MF",
    club: "Atletico Mineiro",
    pictureUrl: "https://digitalhub.fifa.com/transform/59ffe3d1-0963-44f5-861e-9eb6590d8fce/FRANCO-Alan_389784",
    dateOfBirth: "1998-08-21",
    height: 175,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Alan_Franco_Palma"
    }
  },
  "389867": {
    fifaId: "389867",
    teamCode: "FRA",
    name: "Mbapp\xE9",
    fullName: "Kylian Mbappe",
    number: 10,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/66f6087d-9563-4644-8f10-5614ef6e1e51/MBAPPE-Kylian_389867",
    socials: {
      instagram: "k.mbappe",
      wikipedia: "https://pt.wikipedia.org/wiki/Kylian_Mbapp%C3%A9"
    },
    dateOfBirth: "1998-12-20",
    height: 180
  },
  "389876": {
    fifaId: "389876",
    teamCode: "FRA",
    name: "Upamecano",
    fullName: "Dayot Upamecano",
    number: 4,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/daae69ae-72e0-4e42-812f-d19d74d12478/UPAMECANO-Dayot_389876",
    dateOfBirth: "1998-10-27",
    height: 186,
    socials: {
      instagram: "upamecano",
      wikipedia: "https://pt.wikipedia.org/wiki/Dayot_Upamecano"
    }
  },
  "389879": {
    fifaId: "389879",
    teamCode: "ALG",
    name: "Luca",
    fullName: "Luca Zidane",
    number: 23,
    position: "GK",
    club: "USM Alger",
    pictureUrl: "https://digitalhub.fifa.com/transform/9a389290-d443-4b83-8e3a-70e481bca3f1/ZIDANE-Luca_389879",
    dateOfBirth: "1998-05-13",
    height: 183,
    socials: {
      instagram: "luca",
      wikipedia: "https://en.wikipedia.org/wiki/Luca_Zidane"
    }
  },
  "389886": {
    fifaId: "389886",
    teamCode: "BIH",
    name: "Burnic",
    fullName: "Dzenis Burnic",
    number: 17,
    position: "MF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/87cebb80-d20e-42c4-9030-8adcb1a3e1a8/BURNIC-Dzenis_389886",
    dateOfBirth: "1998-05-22",
    height: 182,
    socials: {
      instagram: "dz.burnic",
      wikipedia: "https://pt.wikipedia.org/wiki/D%C5%BEenis_Burni%C4%87"
    }
  },
  "389907": {
    fifaId: "389907",
    teamCode: "TUR",
    name: "\xD6zcan",
    fullName: "Salih Ozcan",
    number: 5,
    position: "MF",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/1e968b8d-1b4c-4bce-86b7-8a4ad87eef3a/OZCAN-Salih_389907",
    dateOfBirth: "1998-01-11",
    height: 182,
    socials: {
      instagram: "salihoezcan",
      wikipedia: "https://pt.wikipedia.org/wiki/Salih_%C3%96zcan"
    }
  },
  "390181": {
    fifaId: "390181",
    teamCode: "NZL",
    name: "Bell",
    fullName: "Joe Bell",
    number: 6,
    position: "MF",
    club: "Viking FK",
    pictureUrl: "https://digitalhub.fifa.com/transform/37f084e5-faf4-4447-bdf1-c7ac8b0fa6e8/BELL-Joe_390181",
    dateOfBirth: "1999-04-27",
    height: 182,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Joe_Bell_(footballer)"
    }
  },
  "390196": {
    fifaId: "390196",
    teamCode: "NZL",
    name: "Mccowatt",
    fullName: "Callum Mccowatt",
    number: 20,
    position: "MF",
    club: "Wellington Phoenix",
    pictureUrl: "https://digitalhub.fifa.com/transform/e2c1ff8e-bc45-46aa-b217-a6c2c588c497/McCOWATT-Callum_390196",
    dateOfBirth: "1999-04-30",
    height: 180,
    socials: {
      instagram: "callum_mccowatt",
      wikipedia: "https://en.wikipedia.org/wiki/Callum_McCowatt"
    }
  },
  "390209": {
    fifaId: "390209",
    teamCode: "NZL",
    name: "Sarpreet Singh",
    fullName: "Sarpreet Singh",
    number: 10,
    position: "MF",
    club: "Leiria",
    pictureUrl: "https://digitalhub.fifa.com/transform/3c43e6c2-50b4-4cb3-ba2e-e94f9a928edd/SINGH-Sarpreet_390209",
    dateOfBirth: "1999-02-20",
    height: 180,
    socials: {
      instagram: "sarpreet.singh11",
      wikipedia: "https://en.wikipedia.org/wiki/Sarpreet_Singh"
    }
  },
  "390218": {
    fifaId: "390218",
    teamCode: "NZL",
    name: "Woud",
    fullName: "Michael Woud",
    number: 22,
    position: "GK",
    club: "Livingston",
    pictureUrl: "https://digitalhub.fifa.com/transform/a9766a27-9d3c-4856-8462-396d87ee2335/WOUD-Michael_390218",
    dateOfBirth: "1999-01-16",
    height: 196,
    socials: {
      instagram: "michaelwoud32",
      wikipedia: "https://en.wikipedia.org/wiki/Michael_Woud"
    }
  },
  "390238": {
    fifaId: "390238",
    teamCode: "USA",
    name: "Tyler Adams",
    fullName: "Tyler Adams",
    number: 4,
    position: "MF",
    club: "Bournemouth",
    pictureUrl: "https://digitalhub.fifa.com/transform/7fdbded2-aa27-44b1-9bf1-ff1d17c58f86/ADAMS-Tyler_390238",
    dateOfBirth: "1999-02-14",
    height: 175,
    socials: {
      instagram: "tyler.adams",
      wikipedia: "https://pt.wikipedia.org/wiki/Tyler_Adams"
    }
  },
  "390259": {
    fifaId: "390259",
    teamCode: "USA",
    name: "Mckennie",
    fullName: "Weston Mckennie",
    number: 8,
    position: "MF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/4406f0ad-8f60-4a98-89c0-89797bfe804d/McKENNIE-Weston_390259",
    dateOfBirth: "1998-08-28",
    height: 180,
    socials: {
      instagram: "west.mckennie",
      wikipedia: "https://pt.wikipedia.org/wiki/Weston_McKennie"
    }
  },
  "390267": {
    fifaId: "390267",
    teamCode: "USA",
    name: "Christian Pulisic",
    fullName: "Christian Pulisic",
    number: 10,
    position: "FW",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/34d1c247-2a09-4fd6-87bc-71ec687a54aa/PULISIC-Christian_390267",
    dateOfBirth: "1998-09-18",
    height: 177,
    socials: {
      instagram: "cmpulisic",
      wikipedia: "https://pt.wikipedia.org/wiki/Christian_Pulisic"
    }
  },
  "390272": {
    fifaId: "390272",
    teamCode: "USA",
    name: "Trusty",
    fullName: "Auston Trusty",
    number: 6,
    position: "DF",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/e14ee5aa-4770-492a-9e51-95343310e5d9/TRUSTY-Auston_390272",
    dateOfBirth: "1998-08-12",
    height: 190,
    socials: {
      instagram: "austontrusty3",
      wikipedia: "https://en.wikipedia.org/wiki/Auston_Trusty"
    }
  },
  "390276": {
    fifaId: "390276",
    teamCode: "USA",
    name: "Wright",
    fullName: "Haji Wright",
    number: 19,
    position: "FW",
    club: "Venezia",
    pictureUrl: "https://digitalhub.fifa.com/transform/31951bf6-a6b5-4646-b489-a2ca3fd4e550/WRIGHT-Haji_390276",
    dateOfBirth: "1998-03-27",
    height: 191,
    socials: {
      instagram: "hajiwright",
      wikipedia: "https://pt.wikipedia.org/wiki/Haji_Wright"
    }
  },
  "390278": {
    fifaId: "390278",
    teamCode: "USA",
    name: "Alex Zendejas",
    fullName: "Alex Zendejas",
    number: 26,
    position: "FW",
    club: "Leeds United",
    pictureUrl: "https://digitalhub.fifa.com/transform/c23fe669-c31a-45e3-b5b2-bbe9ecb8b4de/ZENDEJAS-Alex_390278",
    dateOfBirth: "1998-02-07",
    height: 167,
    socials: {
      instagram: "alex_zendejas",
      wikipedia: "https://en.wikipedia.org/wiki/Alejandro_Zendejas"
    }
  },
  "390475": {
    fifaId: "390475",
    teamCode: "RSA",
    name: "Sithole",
    fullName: "Sphephelo Sithole",
    number: 13,
    position: "MF",
    club: "Tondela",
    pictureUrl: "https://digitalhub.fifa.com/transform/200f1c50-a60a-4c33-ad94-b4dabd605f35/SITHOLE-Sphephelo_390475",
    dateOfBirth: "1999-03-03",
    height: 197,
    socials: {
      instagram: "yaya_sithole_42",
      wikipedia: "https://en.wikipedia.org/wiki/Sphephelo_Sithole"
    }
  },
  "390525": {
    fifaId: "390525",
    teamCode: "KOR",
    name: "J S Lee",
    fullName: "Lee Jaesung",
    number: 10,
    position: "MF",
    club: "Jeonbuk Hyundai",
    pictureUrl: "https://digitalhub.fifa.com/transform/daa227b2-f837-4fc4-bdc3-b5436c92b2e6/LEE-Jaesung_390525",
    socials: {
      instagram: "jaesung17",
      wikipedia: "https://pt.wikipedia.org/wiki/Lee_Jae-sung"
    },
    dateOfBirth: "1992-08-10",
    height: 180
  },
  "390534": {
    fifaId: "390534",
    teamCode: "IRN",
    name: "Hossein Kanani",
    fullName: "Hossein Kanani",
    number: 13,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/20ec6667-ff1b-4fb3-8128-ecf2eb1c6e18/KANANI-Hossein_390534",
    dateOfBirth: "1994-03-23",
    height: 188,
    socials: {
      instagram: "hossein_kanani6"
    }
  },
  "390535": {
    fifaId: "390535",
    teamCode: "IRN",
    name: "Mehdi Torabi",
    fullName: "Mehdi Torabi",
    number: 16,
    position: "MF",
    club: "Al-Wehda",
    pictureUrl: "https://digitalhub.fifa.com/transform/f41b26d6-f1d1-47c2-ac56-dbce12a4baef/TORABI-Mehdi_390535",
    dateOfBirth: "1994-09-10",
    height: 185,
    socials: {
      instagram: "mahditorabi.m",
      wikipedia: "https://pt.wikipedia.org/wiki/Mehdi_Torabi"
    }
  },
  "390537": {
    fifaId: "390537",
    teamCode: "IRN",
    name: "M. Mohammadi",
    fullName: "Milad Mohammadi",
    number: 5,
    position: "DF",
    club: "Tractor",
    pictureUrl: "https://digitalhub.fifa.com/transform/ed36d5fa-f6ab-4e3c-8bdd-1c5cf555f225/MOHAMMADI-Milad_390537",
    dateOfBirth: "1993-09-29",
    height: 175,
    socials: {
      instagram: "miladmohammadi.official",
      wikipedia: "https://pt.wikipedia.org/wiki/Milad_Mohammadi"
    }
  },
  "390541": {
    fifaId: "390541",
    teamCode: "JPN",
    name: "Shogo Taniguchi",
    fullName: "Shogo Taniguchi",
    number: 3,
    position: "DF",
    club: "Gent",
    pictureUrl: "https://digitalhub.fifa.com/transform/339c7ce2-356d-4b5f-8aed-58e4040a6f62/TANIGUCHI-Shogo_390541",
    dateOfBirth: "1991-07-15",
    height: 185,
    socials: {
      instagram: "shogo_taniguchi_5",
      wikipedia: "https://pt.wikipedia.org/wiki/Sh%C5%8Dgo_Taniguchi"
    }
  },
  "390650": {
    fifaId: "390650",
    teamCode: "CUW",
    name: "Eloy Room",
    fullName: "Eloy Room",
    number: 1,
    position: "GK",
    club: "Columbus Crew",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bd9ff87-6801-46d2-8f10-ca9eb3ea2ea4/ROOM-Eloy_390650",
    dateOfBirth: "1989-02-06",
    height: 190,
    socials: {
      instagram: "eloyroom",
      wikipedia: "https://en.wikipedia.org/wiki/Eloy_Room"
    },
    instagramPostUrl: "https://www.instagram.com/p/CqXEaZqKWN9/"
  },
  "390670": {
    fifaId: "390670",
    teamCode: "CAN",
    name: "Cyle Larin",
    fullName: "Cyle Larin",
    number: 9,
    position: "FW",
    club: "Club Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/21086aea-3ec5-47b2-a81f-f7316489183a/LARIN-Cyle_390670",
    dateOfBirth: "1995-04-17",
    height: 188,
    socials: {
      instagram: "cylelarin",
      wikipedia: "https://pt.wikipedia.org/wiki/Cyle_Larin"
    }
  },
  "391297": {
    fifaId: "391297",
    teamCode: "ESP",
    name: "Alex Grimaldo",
    fullName: "Alex Grimaldo",
    number: 3,
    position: "DF",
    club: "Atl\xE9tico de Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/5517003d-ede4-43f5-a595-68e9bd17f6ca/GRIMALDO-Alex_391297",
    dateOfBirth: "1995-09-20",
    height: 171,
    socials: {
      instagram: "grimaldo35",
      wikipedia: "https://pt.wikipedia.org/wiki/Alejandro_Grimaldo"
    }
  },
  "391646": {
    fifaId: "391646",
    teamCode: "JPN",
    name: "Doan",
    fullName: "Ritsu Doan",
    number: 10,
    position: "MF",
    club: "SC Freiburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/e69df72a-0135-4989-802c-e2c85556cd00/DOAN-Ritsu_391646",
    dateOfBirth: "1998-06-16",
    height: 172,
    socials: {
      instagram: "doanritsu",
      wikipedia: "https://pt.wikipedia.org/wiki/Ritsu_D%C5%8Dan"
    }
  },
  "393480": {
    fifaId: "393480",
    teamCode: "SUI",
    name: "Embolo",
    fullName: "Breel Embolo",
    number: 7,
    position: "FW",
    club: "Stade Rennais F.C.",
    pictureUrl: "https://digitalhub.fifa.com/transform/b2483096-041c-489b-a1c5-6d930f380909/EMBOLO-Breel_393480",
    socials: {
      instagram: "breel.embolo",
      wikipedia: "https://pt.wikipedia.org/wiki/Breel_Embolo"
    },
    dateOfBirth: "1997-02-14",
    height: 184
  },
  "394456": {
    fifaId: "394456",
    teamCode: "BRA",
    name: "Fabinho",
    fullName: "Fabinho",
    number: 17,
    position: "MF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/f32cd105-d97b-4a7b-8eb0-258271640a72/FABINHO_394456",
    dateOfBirth: "1993-10-23",
    height: 188,
    socials: {
      instagram: "fabinho",
      wikipedia: "https://pt.wikipedia.org/wiki/Fabinho_(futebolista,_1993)"
    }
  },
  "394824": {
    fifaId: "394824",
    teamCode: "ARG",
    name: "Rulli",
    fullName: "Geronimo Rulli",
    number: 12,
    position: "GK",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/db91883b-99ec-4aa2-bf1a-cc7912040c7b/RULLI-Geronimo_394824",
    dateOfBirth: "1992-05-20",
    height: 189,
    socials: {
      instagram: "gerorulli",
      wikipedia: "https://pt.wikipedia.org/wiki/Ger%C3%B3nimo_Rulli"
    }
  },
  "394829": {
    fifaId: "394829",
    teamCode: "PAR",
    name: "Fab\xEDan Balbuena",
    fullName: "Fabian Balbuena",
    number: 5,
    position: "DF",
    club: "Independiente",
    pictureUrl: "https://digitalhub.fifa.com/transform/eac9ab63-eeed-412a-9ba7-4c5e6be05852/BALBUENA-Fabian_394829",
    dateOfBirth: "1991-08-23",
    height: 188,
    socials: {
      instagram: "fbalbuenito",
      wikipedia: "https://pt.wikipedia.org/wiki/Fabi%C3%A1n_Balbuena"
    }
  },
  "394993": {
    fifaId: "394993",
    teamCode: "HAI",
    name: "Nazon",
    fullName: "Duckens Nazon",
    number: 9,
    position: "FW",
    club: "Kayserispor",
    pictureUrl: "https://digitalhub.fifa.com/transform/93e74f55-211b-4332-8b5c-d328eb02d026/NAZON-Duckens_394993",
    dateOfBirth: "1994-04-07",
    height: 181,
    socials: {
      instagram: "nazon.official",
      wikipedia: "https://en.wikipedia.org/wiki/Duckens_Nazon"
    }
  },
  "395050": {
    fifaId: "395050",
    teamCode: "RSA",
    name: "Modiba",
    fullName: "Aubrey Modiba",
    number: 6,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/e5ddfbfb-b601-4ff8-83a5-f55162967798/MODIBA-Aubrey_395050",
    dateOfBirth: "1995-07-22",
    height: 171,
    socials: {
      instagram: "modiba_16",
      wikipedia: "https://pt.wikipedia.org/wiki/Aubrey_Modiba"
    }
  },
  "395059": {
    fifaId: "395059",
    teamCode: "RSA",
    name: "Ricardo Goss",
    fullName: "Ricardo Goss",
    number: 22,
    position: "GK",
    club: "AmaZulu",
    pictureUrl: "https://digitalhub.fifa.com/transform/2727bd1f-2d55-4a70-9bd5-58a96d4bf9bc/GOSS-Ricardo_395059",
    dateOfBirth: "1994-04-02",
    height: 181,
    socials: {
      instagram: "ricardogoss13",
      wikipedia: "https://en.wikipedia.org/wiki/Ricardo_Goss"
    }
  },
  "395083": {
    fifaId: "395083",
    teamCode: "KOR",
    name: "H C Hwang",
    fullName: "Hwang Heechan",
    number: 11,
    position: "MF",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/8460686d-d2c7-4d3e-98a5-f797400470ed/HWANG-Heechan_395083",
    socials: {
      instagram: "hwangheechan",
      wikipedia: "https://pt.wikipedia.org/wiki/Hwang_Hee-chan"
    },
    dateOfBirth: "1996-01-26",
    height: 177
  },
  "395084": {
    fifaId: "395084",
    teamCode: "KOR",
    name: "Hwang Inbeom",
    fullName: "Hwang Inbeom",
    number: 6,
    position: "MF",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/70be8ce3-bc90-4585-8871-a951dabf811e/HWANG-Inbeom_395084",
    dateOfBirth: "1996-09-20",
    height: 177,
    socials: {
      instagram: "inbeom_hwang6",
      wikipedia: "https://pt.wikipedia.org/wiki/Hwang_In-beom"
    }
  },
  "395088": {
    fifaId: "395088",
    teamCode: "KOR",
    name: "Kim",
    fullName: "Kim Minjae",
    number: 4,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/743f3b76-7c6e-484c-8f62-4f4e22c082ae/KIM-Minjae_395088",
    socials: {
      instagram: "kimmin.jae",
      wikipedia: "https://pt.wikipedia.org/wiki/Kim_Min-jae_(futebolista)"
    },
    dateOfBirth: "1996-11-15",
    height: 190
  },
  "395113": {
    fifaId: "395113",
    teamCode: "ALG",
    name: "Bensebaini",
    fullName: "Ramy Bensebaini",
    number: 21,
    position: "DF",
    club: "Brest",
    pictureUrl: "https://digitalhub.fifa.com/transform/329752fa-e310-4124-8fb2-be7cc478b929/BENSEBAINI-Ramy_395113",
    dateOfBirth: "1995-04-16",
    height: 187,
    socials: {
      instagram: "rbens.official",
      wikipedia: "https://pt.wikipedia.org/wiki/Ramy_Bensebaini"
    }
  },
  "395186": {
    fifaId: "395186",
    teamCode: "IRQ",
    name: "Hussein",
    fullName: "Aymen Hussein",
    number: 18,
    position: "FW",
    club: "Al-Quwa Al-Jawiya",
    pictureUrl: "https://digitalhub.fifa.com/transform/388e5207-980c-407a-828c-270fbd4fdff6/AYMEN-HUSSEIN_395186",
    dateOfBirth: "1996-03-22",
    height: 190,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Aymen_Hussein"
    }
  },
  "395205": {
    fifaId: "395205",
    teamCode: "POR",
    name: "Bernardo Silva",
    fullName: "Bernardo Silva",
    number: 10,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/97535989-5b6f-414b-a582-54a0c48df12a/BERNARDO-SILVA_395205",
    dateOfBirth: "1994-08-10",
    height: 173,
    socials: {
      instagram: "bernardocarvalhosilva",
      wikipedia: "https://pt.wikipedia.org/wiki/Bernardo_Silva"
    }
  },
  "395206": {
    fifaId: "395206",
    teamCode: "POR",
    name: "Bruno Fernandes",
    fullName: "Bruno Fernandes",
    number: 8,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/4a31c35d-c697-4c1a-ac51-a120b82a3d83/BRUNO-FERNANDES_395206",
    dateOfBirth: "1994-09-08",
    height: 183,
    socials: {
      instagram: "brunofernandes8",
      wikipedia: "https://pt.wikipedia.org/wiki/Bruno_Fernandes"
    }
  },
  "395212": {
    fifaId: "395212",
    teamCode: "POR",
    name: "N. Semedo",
    fullName: "Nelson Semedo",
    number: 2,
    position: "DF",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/7b97ea5c-f883-424a-9133-eead7e175b00/NELSON-SEMEDO_395212",
    dateOfBirth: "1993-11-16",
    height: 179,
    socials: {
      instagram: "nelsonsemedo50",
      wikipedia: "https://pt.wikipedia.org/wiki/N%C3%A9lson_Semedo"
    }
  },
  "395216": {
    fifaId: "395216",
    teamCode: "POR",
    name: "R\xFAben Neves",
    fullName: "R\xFAben Neves",
    number: 21,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/884a330c-be4c-442d-becb-2d601c7574d1/RUBEN-NEVES_395216",
    dateOfBirth: "1997-03-13",
    height: 183,
    socials: {
      instagram: "rubendsneves",
      wikipedia: "https://pt.wikipedia.org/wiki/R%C3%BAben_Neves"
    }
  },
  "395283": {
    fifaId: "395283",
    teamCode: "SWE",
    name: "Lindel\xF6f",
    fullName: "Victor Lindelof",
    number: 3,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/88b96376-9f31-40fd-a0fc-ae12aab484c4/LINDELOF-Victor_395283",
    dateOfBirth: "1994-07-17",
    height: 187,
    socials: {
      instagram: "victorlindelof",
      wikipedia: "https://pt.wikipedia.org/wiki/Victor_Lindel%C3%B6f"
    }
  },
  "395286": {
    fifaId: "395286",
    teamCode: "SWE",
    name: "Ken Sema",
    fullName: "Ken Sema",
    number: 13,
    position: "MF",
    club: "AIK",
    pictureUrl: "https://digitalhub.fifa.com/transform/eb495b7c-f859-40c2-9327-9478faf03c24/SEMA-Ken_395286",
    dateOfBirth: "1993-09-30",
    height: 180,
    socials: {
      instagram: "kenzema12",
      wikipedia: "https://pt.wikipedia.org/wiki/Ken_Sema"
    }
  },
  "395321": {
    fifaId: "395321",
    teamCode: "JPN",
    name: "Junya Ito",
    fullName: "Junya Ito",
    number: 14,
    position: "MF",
    club: "Reims",
    pictureUrl: "https://digitalhub.fifa.com/transform/87ce677a-e78d-474c-bfd7-b7dc77e89e62/ITO-Junya_395321",
    dateOfBirth: "1993-03-09",
    height: 177,
    socials: {
      instagram: "1409junya",
      wikipedia: "https://pt.wikipedia.org/wiki/Jun%27ya_It%C5%8D"
    }
  },
  "395414": {
    fifaId: "395414",
    teamCode: "ARG",
    name: "Lo Celso",
    fullName: "Giovani Lo Celso",
    number: 11,
    position: "MF",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/ddda0414-89fe-4118-9830-8ef417990db4/LO-CELSO-Giovani_395414",
    dateOfBirth: "1996-04-09",
    height: 177,
    socials: {
      instagram: "locelsogiovani",
      wikipedia: "https://pt.wikipedia.org/wiki/Giovani_Lo_Celso"
    }
  },
  "395427": {
    fifaId: "395427",
    teamCode: "BRA",
    name: "Ederson",
    fullName: "Ederson",
    number: 23,
    position: "GK",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a1d5731-391b-4644-a926-1bc899b86c81/EDERSON_395427",
    socials: {
      instagram: "ederson93",
      wikipedia: "https://pt.wikipedia.org/wiki/Ederson_Moraes"
    },
    dateOfBirth: "1993-08-17",
    height: 188
  },
  "395471": {
    fifaId: "395471",
    teamCode: "GER",
    name: "Nadiem Amiri",
    fullName: "Nadiem Amiri",
    number: 20,
    position: "MF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/3c1dcefe-5f38-479a-ac6a-091a86cb7663/AMIRI-Nadiem_395471",
    dateOfBirth: "1996-10-27",
    height: 178,
    socials: {
      instagram: "nadiemamiri10",
      wikipedia: "https://pt.wikipedia.org/wiki/Nadiem_Amiri"
    }
  },
  "395516": {
    fifaId: "395516",
    teamCode: "MEX",
    name: "Cesar Montes",
    fullName: "Cesar Montes",
    number: 3,
    position: "DF",
    club: "Lokomotiv Moscou",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8c3fa3a-9001-4221-ab3c-754158c0ad8a/MONTES-Cesar_395516",
    dateOfBirth: "1997-02-24",
    height: 191,
    socials: {
      instagram: "cjasib",
      wikipedia: "https://pt.wikipedia.org/wiki/C%C3%A9sar_Montes"
    }
  },
  "395755": {
    fifaId: "395755",
    teamCode: "MAR",
    name: "Munir El Kajoui",
    fullName: "Munir El Kajoui",
    number: 12,
    position: "GK",
    club: "Lorient",
    pictureUrl: "https://digitalhub.fifa.com/transform/20f762ed-3248-4b2d-8a4c-5f1e3891291f/EL-KAJOUI-Munir_395755",
    dateOfBirth: "1989-05-10",
    height: 190,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Munir_Mohand_Mohamedi"
    }
  },
  "395760": {
    fifaId: "395760",
    teamCode: "MAR",
    name: "Marwane Saadane",
    fullName: "Marwane Saadane",
    number: 5,
    position: "DF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/d46e989c-a503-485f-b507-57705654cd55/MARWANE-SAADANE_395760",
    dateOfBirth: "1992-01-17",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Marwane_Sa%C3%A2dane"
    }
  },
  "395860": {
    fifaId: "395860",
    teamCode: "EGY",
    name: "Mahdy Soliman",
    fullName: "Mahdy Soliman",
    number: 16,
    position: "GK",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/90b92e39-b717-40c5-a2ab-05616ca017c8/MAHDY-SOLIMAN_395860",
    dateOfBirth: "1987-06-08",
    height: 189
  },
  "395984": {
    fifaId: "395984",
    teamCode: "RSA",
    name: "Zwane",
    fullName: "Themba Zwane",
    number: 11,
    position: "MF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d294899-e656-4484-91b7-99d646bc590c/ZWANE-Themba_395984",
    dateOfBirth: "1989-08-03",
    height: 178,
    socials: {
      instagram: "mshishi18",
      wikipedia: "https://pt.wikipedia.org/wiki/Themba_Zwane"
    }
  },
  "395986": {
    fifaId: "395986",
    teamCode: "RSA",
    name: "Williams",
    fullName: "Ronwen Williams",
    number: 1,
    position: "GK",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/b95f9142-251c-4943-911c-9c8d7ad8dd1c/WILLIAMS-Ronwen_395986",
    dateOfBirth: "1992-01-21",
    height: 184,
    socials: {
      instagram: "ronwen30",
      wikipedia: "https://pt.wikipedia.org/wiki/Ronwen_Williams"
    }
  },
  "396158": {
    fifaId: "396158",
    teamCode: "IRQ",
    name: "Rebin Sulaka",
    fullName: "Rebin Sulaka",
    number: 2,
    position: "DF",
    club: "Al-Shorta",
    pictureUrl: "https://digitalhub.fifa.com/transform/0e08174c-879f-4de0-9709-8fdc59357236/REBIN-GHAREEB_396158",
    dateOfBirth: "1992-04-12",
    height: 193,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Rebin_Sulaka"
    }
  },
  "396315": {
    fifaId: "396315",
    teamCode: "BRA",
    name: "Weverton",
    fullName: "Weverton",
    number: 12,
    position: "GK",
    club: "Palmeiras",
    pictureUrl: "https://digitalhub.fifa.com/transform/c66a5712-81fa-4527-9e5a-8221f11b3274/WEVERTON_396315",
    socials: {
      instagram: "weverton010",
      wikipedia: "https://pt.wikipedia.org/wiki/Weverton"
    },
    dateOfBirth: "1987-12-13",
    height: 189
  },
  "396885": {
    fifaId: "396885",
    teamCode: "KSA",
    name: "Alowais",
    fullName: "Mohammed Alowais",
    number: 21,
    position: "GK",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/be2d88f0-e368-49ef-9a33-c7585955c495/MOHAMMED-ALOWAIS_396885",
    socials: {
      instagram: "alowais_33"
    },
    dateOfBirth: "1991-10-10",
    height: 185
  },
  "396950": {
    fifaId: "396950",
    teamCode: "JOR",
    name: "Mahmoud Mardi",
    fullName: "Mahmoud Almardi",
    number: 13,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/1e7a3a2d-fca9-400e-8a5a-244eadc0fb92/MAHMOUD-ALMARDI_396950",
    dateOfBirth: "1993-10-06",
    height: 173,
    socials: {
      instagram: "m.almardi13"
    }
  },
  "397753": {
    fifaId: "397753",
    teamCode: "KOR",
    name: "Hyeonwoo",
    fullName: "Jo Hyeonwoo",
    number: 21,
    position: "GK",
    club: "Suwon Bluewings",
    pictureUrl: "https://digitalhub.fifa.com/transform/15bfe432-3e69-4900-b736-50ee6fd20cb5/JO-Hyeonwoo_397753",
    dateOfBirth: "1991-09-25",
    height: 189,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Jo_Hyeon-woo"
    }
  },
  "397775": {
    fifaId: "397775",
    teamCode: "HAI",
    name: "Arcus",
    fullName: "Carlens Arcus",
    number: 2,
    position: "DF",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/924dd9c4-2333-4662-be95-df5d3d551368/ARCUS-Carlens_397775",
    dateOfBirth: "1996-06-28",
    height: 180,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Carlens_Arcus"
    }
  },
  "397786": {
    fifaId: "397786",
    teamCode: "NED",
    name: "Virgil Van Dijk",
    fullName: "Virgil Van Dijk",
    number: 4,
    position: "DF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/df0e21eb-c210-4ea6-ab2c-0ac13635a9f8/VAN-DIJK-Virgil_397786",
    dateOfBirth: "1991-07-08",
    height: 195,
    socials: {
      instagram: "virgilvandijk",
      wikipedia: "https://pt.wikipedia.org/wiki/Virgil_van_Dijk"
    }
  },
  "397894": {
    fifaId: "397894",
    teamCode: "JOR",
    name: "Yazeed Abulaila",
    fullName: "Yazeed Abulaila",
    number: 1,
    position: "GK",
    club: "Al-Hussein SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/155d55d5-4b94-4b50-9ed1-b9a102a501a2/YAZEED-ABULAILA_397894",
    dateOfBirth: "1993-01-08",
    height: 188,
    socials: {
      instagram: "yazeed.abulaila",
      wikipedia: "https://en.wikipedia.org/wiki/Yazeed_Abulaila"
    }
  },
  "398509": {
    fifaId: "398509",
    teamCode: "SUI",
    name: "Elvedi",
    fullName: "Nico Elvedi",
    number: 4,
    position: "DF",
    club: "Borussia M\xF6nchengladbach",
    pictureUrl: "https://digitalhub.fifa.com/transform/5631cb24-dba7-44dd-ac2c-1c67b14d7649/ELVEDI-Nico_398509",
    dateOfBirth: "1996-09-30",
    height: 189,
    socials: {
      instagram: "nicoelvedi30",
      wikipedia: "https://pt.wikipedia.org/wiki/Nico_Elvedi"
    }
  },
  "398569": {
    fifaId: "398569",
    teamCode: "CUW",
    name: "Bazoer",
    fullName: "Riechedly Bazoer",
    number: 23,
    position: "DF",
    club: "Excelsior",
    pictureUrl: "https://digitalhub.fifa.com/transform/93fcbe0f-13ca-41f6-b453-447b45aea6ef/BAZOER-Riechedly_398569",
    dateOfBirth: "1996-10-12",
    height: 184,
    socials: {
      instagram: "riechedly",
      wikipedia: "https://pt.wikipedia.org/wiki/Riechedly_Bazoer"
    }
  },
  "398588": {
    fifaId: "398588",
    teamCode: "NOR",
    name: "S\xF8rloth",
    fullName: "Alexander Sorloth",
    number: 7,
    position: "FW",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/23bcc976-2dbc-4fe2-b844-1878ff0cd354/SORLOTH-Alexander_398588",
    dateOfBirth: "1995-12-05",
    height: 196,
    socials: {
      instagram: "asorloth",
      wikipedia: "https://pt.wikipedia.org/wiki/Alexander_S%C3%B8rloth"
    }
  },
  "398680": {
    fifaId: "398680",
    teamCode: "FRA",
    name: "O. Demb\xE9l\xE9",
    fullName: "Ousmane Dembele",
    number: 7,
    position: "FW",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/e6eee717-fd8c-4f8f-a7e0-c4f978fe327f/DEMBELE-Ousmane_398680",
    dateOfBirth: "1997-05-15",
    height: 179,
    socials: {
      instagram: "o.dembele7",
      wikipedia: "https://pt.wikipedia.org/wiki/Ousmane_Demb%C3%A9l%C3%A9"
    }
  },
  "398681": {
    fifaId: "398681",
    teamCode: "FRA",
    name: "Kante",
    fullName: "Ngolo Kante",
    number: 13,
    position: "MF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/355040a8-6b40-452b-92af-7c22f91cb87c/KANTE-Ngolo_398681",
    dateOfBirth: "1991-03-29",
    height: 171,
    socials: {
      instagram: "nglkante",
      wikipedia: "https://pt.wikipedia.org/wiki/N%27Golo_Kant%C3%A9"
    }
  },
  "400511": {
    fifaId: "400511",
    teamCode: "JPN",
    name: "Itakura",
    fullName: "Kou Itakura",
    number: 4,
    position: "DF",
    club: "Borussia Monchengladbach",
    pictureUrl: "https://digitalhub.fifa.com/transform/5797a9db-f271-4f10-a480-1a0fdde80b7b/ITAKURA-Kou_400511",
    dateOfBirth: "1997-01-27",
    height: 188,
    socials: {
      instagram: "koitakura",
      wikipedia: "https://pt.wikipedia.org/wiki/K%C5%8D_Itakura"
    }
  },
  "400514": {
    fifaId: "400514",
    teamCode: "JPN",
    name: "Ao Tanaka",
    fullName: "Ao Tanaka",
    number: 7,
    position: "MF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/c041ee70-6920-4696-afe9-5a9982dc9a2b/TANAKA-Ao_400514",
    dateOfBirth: "1998-09-10",
    height: 180,
    socials: {
      instagram: "tnk_0910",
      wikipedia: "https://pt.wikipedia.org/wiki/Ao_Tanaka"
    }
  },
  "400634": {
    fifaId: "400634",
    teamCode: "MEX",
    name: "E. \xC1lvarez",
    fullName: "Edson Alvarez",
    number: 4,
    position: "DF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/b1581870-6bef-4c29-9a06-f306bbf03ca8/ALVAREZ-Edson_400634",
    dateOfBirth: "1997-10-24",
    height: 180,
    socials: {
      instagram: "edsonnalvarez",
      wikipedia: "https://pt.wikipedia.org/wiki/Edson_%C3%81lvarez"
    }
  },
  "400716": {
    fifaId: "400716",
    teamCode: "NOR",
    name: "Odegaard",
    fullName: "Martin Odegaard",
    number: 10,
    position: "MF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/2b895db6-7f67-4436-b8da-54bdf0dd2e2b/ODEGAARD-Martin_400716",
    dateOfBirth: "1998-12-17",
    height: 178,
    socials: {
      instagram: "odegaard.98",
      wikipedia: "https://pt.wikipedia.org/wiki/Martin_%C3%98degaard"
    }
  },
  "400721": {
    fifaId: "400721",
    teamCode: "MAR",
    name: "Hakimi",
    fullName: "Achraf Hakimi",
    number: 2,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/22c6ca49-7262-4799-8a9f-530e427321ac/HAKIMI-Achraf_400721",
    dateOfBirth: "1998-11-04",
    height: 180,
    socials: {
      instagram: "achrafhakimi",
      wikipedia: "https://pt.wikipedia.org/wiki/Achraf_Hakimi"
    }
  },
  "401023": {
    fifaId: "401023",
    teamCode: "CUW",
    name: "Brenet",
    fullName: "Joshua Brenet",
    number: 20,
    position: "DF",
    club: "RKC Waalwijk",
    pictureUrl: "https://digitalhub.fifa.com/transform/2069bb09-aaf0-41dc-81e4-a8f4df33b4e5/BRENET-Joshua_401023",
    dateOfBirth: "1994-03-20",
    height: 181,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Joshua_Brenet"
    }
  },
  "401131": {
    fifaId: "401131",
    teamCode: "AUT",
    name: "Gregoritsch",
    fullName: "Michael Gregoritsch",
    number: 11,
    position: "FW",
    club: "FC Augsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/d33de7b2-c69b-4669-aaac-155c5657be16/GREGORITSCH-Michael_401131",
    dateOfBirth: "1994-04-18",
    height: 193,
    socials: {
      instagram: "mgregerl",
      wikipedia: "https://pt.wikipedia.org/wiki/Michael_Gregoritsch"
    }
  },
  "401167": {
    fifaId: "401167",
    teamCode: "TUR",
    name: "S\xF6y\xFCnc\xFC",
    fullName: "Caglar Soyuncu",
    number: 4,
    position: "DF",
    club: "Atletico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/1b2e4fe1-8aec-4473-845b-d0ccb4e20a3a/SOYUNCU-Caglar_401167",
    dateOfBirth: "1996-05-23",
    height: 185,
    socials: {
      instagram: "syncaglar",
      wikipedia: "https://pt.wikipedia.org/wiki/%C3%87a%C4%9Flar_S%C3%B6y%C3%BCnc%C3%BC"
    }
  },
  "401334": {
    fifaId: "401334",
    teamCode: "SCO",
    name: "John Mcginn",
    fullName: "John Mcginn",
    number: 7,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/af6ceadd-a14f-47c0-9f30-fd85d71a94cd/McGINN-John_401334",
    dateOfBirth: "1994-10-18",
    height: 178,
    socials: {
      instagram: "johnmcginn7",
      wikipedia: "https://pt.wikipedia.org/wiki/John_McGinn"
    }
  },
  "401339": {
    fifaId: "401339",
    teamCode: "SCO",
    name: "Andy Robertson",
    fullName: "Andy Robertson",
    number: 3,
    position: "DF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/ba94c3aa-e071-4add-b402-5d3f8df8acb9/ROBERTSON-Andy_401339",
    dateOfBirth: "1994-03-11",
    height: 178,
    socials: {
      instagram: "andyrobertson94",
      wikipedia: "https://pt.wikipedia.org/wiki/Andy_Robertson"
    }
  },
  "401378": {
    fifaId: "401378",
    teamCode: "GER",
    name: "Jonathan Tah",
    fullName: "Jonathan Tah",
    number: 4,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/34f74ca0-1102-446c-b098-02decdf58b8d/TAH-Jonathan_401378",
    dateOfBirth: "1996-02-11",
    height: 195,
    socials: {
      instagram: "jonathantah",
      wikipedia: "https://pt.wikipedia.org/wiki/Jonathan_Tah"
    }
  },
  "401444": {
    fifaId: "401444",
    teamCode: "BEL",
    name: "Tielemans",
    fullName: "Youri Tielemans",
    number: 8,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/158822ad-a0e9-406c-a84d-e79b0392409f/TIELEMANS-Youri_401444",
    dateOfBirth: "1997-05-07",
    height: 176,
    socials: {
      instagram: "youritielemans",
      wikipedia: "https://pt.wikipedia.org/wiki/Youri_Tielemans"
    }
  },
  "401448": {
    fifaId: "401448",
    teamCode: "SUI",
    name: "Zakaria",
    fullName: "Denis Zakaria",
    number: 6,
    position: "MF",
    club: "AS Monaco FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/e47d229b-d092-4759-82e0-0e5f88b2c894/ZAKARIA-Denis_401448",
    dateOfBirth: "1996-11-20",
    height: 189,
    socials: {
      instagram: "deniszakaria",
      wikipedia: "https://pt.wikipedia.org/wiki/Denis_Zakaria"
    }
  },
  "401470": {
    fifaId: "401470",
    teamCode: "ENG",
    name: "Rashford",
    fullName: "Marcus Rashford",
    number: 11,
    position: "FW",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c89a3e5-8d8f-474f-a0fe-8c39faa3dc8d/RASHFORD-Marcus_401470",
    dateOfBirth: "1997-10-31",
    height: 180,
    socials: {
      instagram: "marcusrashford",
      wikipedia: "https://pt.wikipedia.org/wiki/Marcus_Rashford"
    }
  },
  "401481": {
    fifaId: "401481",
    teamCode: "CZE",
    name: "Patrik Schick",
    fullName: "Patrik Schick",
    number: 10,
    position: "FW",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/725e8c7e-c712-45be-9e0a-ec5b121e84ad/SCHICK-Patrik_401481",
    dateOfBirth: "1996-01-24",
    height: 191,
    socials: {
      instagram: "p_schicky",
      wikipedia: "https://pt.wikipedia.org/wiki/Patrik_Schick"
    }
  },
  "401712": {
    fifaId: "401712",
    teamCode: "SCO",
    name: "Tierney",
    fullName: "Kieran Tierney",
    number: 6,
    position: "DF",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/d2b1d878-bbcc-4e16-bb77-7a90a01d0e37/TIERNEY-Kieran_401712",
    dateOfBirth: "1997-06-05",
    height: 180,
    socials: {
      instagram: "kierantierney",
      wikipedia: "https://pt.wikipedia.org/wiki/Kieran_Tierney"
    }
  },
  "401889": {
    fifaId: "401889",
    teamCode: "SEN",
    name: "Isma\xEFla",
    fullName: "Ismaila Sarr",
    number: 18,
    position: "FW",
    club: "Ajax",
    pictureUrl: "https://digitalhub.fifa.com/transform/695226c6-92b8-4aa6-995e-dcdd2d08eb96/SARR-Ismaila_401889",
    dateOfBirth: "1998-02-25",
    height: 185,
    socials: {
      instagram: "ismaila_sarr_18",
      wikipedia: "https://pt.wikipedia.org/wiki/Isma%C3%AFla_Sarr"
    }
  },
  "401893": {
    fifaId: "401893",
    teamCode: "CPV",
    name: "Da Costa",
    fullName: "Nuno Da Costa",
    number: 21,
    position: "MF",
    club: "Racing Ferrol",
    pictureUrl: "https://digitalhub.fifa.com/transform/a9555196-ece6-4f39-8c07-103e12f4c900/NUNO-DA-COSTA_401893",
    dateOfBirth: "1991-02-10",
    height: 182,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Nuno_da_Costa"
    }
  },
  "401894": {
    fifaId: "401894",
    teamCode: "CPV",
    name: "Jamiro Monteiro",
    fullName: "Jamiro Monteiro",
    number: 10,
    position: "MF",
    club: "Greuther F\xFCrth",
    pictureUrl: "https://digitalhub.fifa.com/transform/04f8c613-3779-443b-8aa4-25ed1d3a60f1/JAMIRO-MONTEIRO_401894",
    dateOfBirth: "1993-11-23",
    height: 175,
    socials: {
      instagram: "jamiromonteiro",
      wikipedia: "https://pt.wikipedia.org/wiki/Jamiro_Monteiro"
    }
  },
  "401924": {
    fifaId: "401924",
    teamCode: "KSA",
    name: "Hassan Kadesh",
    fullName: "Hassan Kadish",
    number: 14,
    position: "DF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/fc41abe4-036c-4c99-aa2a-b56ddece0c2d/HASSAN-KADISH_401924",
    dateOfBirth: "1992-09-26",
    height: 179
  },
  "402021": {
    fifaId: "402021",
    teamCode: "SUI",
    name: "Freuler",
    fullName: "Remo Freuler",
    number: 8,
    position: "MF",
    club: "Bologna F.C. 1909",
    pictureUrl: "https://digitalhub.fifa.com/transform/821a56dc-683d-4326-a784-21e25428a18f/FREULER-Remo_402021",
    dateOfBirth: "1992-04-15",
    height: 181,
    socials: {
      instagram: "remo_freuler",
      wikipedia: "https://pt.wikipedia.org/wiki/Remo_Freuler"
    }
  },
  "402022": {
    fifaId: "402022",
    teamCode: "SUI",
    name: "Mvogo",
    fullName: "Yvon Mvogo",
    number: 12,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/66a48e5b-90b7-48fa-94b6-f91d76c28962/MVOGO-Yvon_402022",
    dateOfBirth: "1994-06-06",
    height: 190,
    socials: {
      instagram: "ymvogo",
      wikipedia: "https://pt.wikipedia.org/wiki/Yvon_Mvogo"
    }
  },
  "402044": {
    fifaId: "402044",
    teamCode: "NED",
    name: "Marten De Roon",
    fullName: "Marten De Roon",
    number: 3,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/bf755ec0-abe7-4790-ad87-a2dc6d709654/DE-ROON-Marten_402044",
    dateOfBirth: "1991-03-29",
    height: 186,
    socials: {
      instagram: "martenderoon15",
      wikipedia: "https://pt.wikipedia.org/wiki/Marten_de_Roon"
    }
  },
  "402047": {
    fifaId: "402047",
    teamCode: "FRA",
    name: "Adrien Rabiot",
    fullName: "Adrien Rabiot",
    number: 14,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/2daab6cd-9fc6-4a46-acd6-82974aab8415/RABIOT-Adrien_402047",
    dateOfBirth: "1995-04-03",
    height: 191,
    socials: {
      instagram: "adrienrabiot_25",
      wikipedia: "https://pt.wikipedia.org/wiki/Adrien_Rabiot"
    }
  },
  "402261": {
    fifaId: "402261",
    teamCode: "CIV",
    name: "P\xE9p\xE9",
    fullName: "Nicolas Pepe",
    number: 19,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c7519d2-960c-4d19-83e7-40a155f1a8eb/PEPE-Nicolas_402261",
    dateOfBirth: "1995-05-29",
    height: 183,
    socials: {
      instagram: "nicolas.pepe19",
      wikipedia: "https://pt.wikipedia.org/wiki/Nicolas_P%C3%A9p%C3%A9"
    }
  },
  "402772": {
    fifaId: "402772",
    teamCode: "MEX",
    name: "J. Gallardo",
    fullName: "Jesus Gallardo",
    number: 23,
    position: "DF",
    club: "Monterrey",
    pictureUrl: "https://digitalhub.fifa.com/transform/f1417540-93cb-4b82-9cfe-223e877d5923/GALLARDO-Jesus_402772",
    dateOfBirth: "1994-08-15",
    height: 174,
    socials: {
      instagram: "jesusgallardo17",
      wikipedia: "https://pt.wikipedia.org/wiki/Jes%C3%BAs_Gallardo"
    }
  },
  "402817": {
    fifaId: "402817",
    teamCode: "KOR",
    name: "Paik Seungho",
    fullName: "Paik Seungho",
    number: 8,
    position: "MF",
    club: "Mainz",
    pictureUrl: "https://digitalhub.fifa.com/transform/369d8cea-dbe3-48fb-8a8a-e55180bf1fca/PAIK-Seungho_402817",
    dateOfBirth: "1997-03-17",
    height: 182,
    socials: {
      instagram: "seungho_paik",
      wikipedia: "https://pt.wikipedia.org/wiki/Paik_Seung-ho"
    }
  },
  "402820": {
    fifaId: "402820",
    teamCode: "KOR",
    name: "Song Bumkeun",
    fullName: "Song Bumkeun",
    number: 12,
    position: "GK",
    club: "Vissel Kobe",
    pictureUrl: "https://digitalhub.fifa.com/transform/a45e87b1-92c4-4d33-ac9b-1bca03075996/SONG-Bumkeun_402820",
    dateOfBirth: "1997-10-15",
    height: 196,
    socials: {
      instagram: "bumkeun_song",
      wikipedia: "https://en.wikipedia.org/wiki/Song_Bum-keun"
    }
  },
  "402876": {
    fifaId: "402876",
    teamCode: "URU",
    name: "A. Cannobio",
    fullName: "Agustin Canobbio",
    number: 14,
    position: "MF",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/5985fa52-e467-4c1c-95f2-355bd1cb3925/CANOBBIO-Agustin_402876",
    dateOfBirth: "1998-10-01",
    height: 176,
    socials: {
      instagram: "agus_cano7",
      wikipedia: "https://pt.wikipedia.org/wiki/Agust%C3%ADn_Canobbio"
    }
  },
  "402884": {
    fifaId: "402884",
    teamCode: "URU",
    name: "Valverde",
    fullName: "Federico Valverde",
    number: 8,
    position: "MF",
    club: "Al-Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/bc29f114-2d51-4605-ae7a-eadf774e9d38/VALVERDE-Federico_402884",
    dateOfBirth: "1998-07-22",
    height: 182,
    socials: {
      instagram: "fedevalverde",
      wikipedia: "https://pt.wikipedia.org/wiki/Federico_Valverde"
    }
  },
  "402893": {
    fifaId: "402893",
    teamCode: "URU",
    name: "M. Olivera",
    fullName: "Mathias Olivera",
    number: 16,
    position: "DF",
    club: "Napoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/704d2d9d-1b5f-4296-87f4-b7b591a58116/OLIVERA-Mathias_402893",
    dateOfBirth: "1997-10-31",
    height: 174,
    socials: {
      instagram: "mathiasolivera5",
      wikipedia: "https://pt.wikipedia.org/wiki/Math%C3%ADas_Olivera"
    }
  },
  "402895": {
    fifaId: "402895",
    teamCode: "URU",
    name: "Vi\xF1a",
    fullName: "Matias Vina",
    number: 17,
    position: "DF",
    club: "PSV",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8714c68-0892-4c4f-8a51-deabf1e13879/VINA-Matias_402895",
    dateOfBirth: "1997-11-09",
    height: 180,
    socials: {
      instagram: "matiasv17",
      wikipedia: "https://pt.wikipedia.org/wiki/Mat%C3%ADas_Vi%C3%B1a"
    }
  },
  "402897": {
    fifaId: "402897",
    teamCode: "URU",
    name: "Santiago Mele",
    fullName: "Santiago Mele",
    number: 12,
    position: "GK",
    club: "Deportivo Cali",
    pictureUrl: "https://digitalhub.fifa.com/transform/39573fa9-f716-4703-b772-cf1892d1b748/MELE-Santiago_402897",
    dateOfBirth: "1997-09-06",
    height: 185,
    socials: {
      instagram: "santimele1",
      wikipedia: "https://en.wikipedia.org/wiki/Santiago_Mele"
    }
  },
  "402898": {
    fifaId: "402898",
    teamCode: "URU",
    name: "De La Cruz",
    fullName: "Nicolas De La Cruz",
    number: 7,
    position: "MF",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/7694c9e6-d4f9-4f60-8173-5a3a79bcaaa2/DE-LA-CRUZ-Nicolas_402898",
    dateOfBirth: "1997-06-01",
    height: 167,
    socials: {
      instagram: "nicodelacruz10",
      wikipedia: "https://pt.wikipedia.org/wiki/Nicol%C3%A1s_de_la_Cruz"
    }
  },
  "402904": {
    fifaId: "402904",
    teamCode: "URU",
    name: "S. Bueno",
    fullName: "Santiago Bueno",
    number: 24,
    position: "DF",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/cb547d8e-b176-46d1-8ae0-d53d106d168c/BUENO-Santiago_402904",
    dateOfBirth: "1998-11-09",
    height: 191,
    socials: {
      instagram: "santibuenoo",
      wikipedia: "https://en.wikipedia.org/wiki/Santiago_Bueno"
    }
  },
  "402920": {
    fifaId: "402920",
    teamCode: "ARG",
    name: "Lautaro M.",
    fullName: "Lautaro Martinez",
    number: 22,
    position: "FW",
    club: "Inter Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/2368bf53-1f73-427b-929e-557187d53ac7/MARTINEZ-Lautaro_402920",
    dateOfBirth: "1997-08-22",
    height: 175,
    socials: {
      instagram: "lautaromartinez",
      wikipedia: "https://pt.wikipedia.org/wiki/Lautaro_Mart%C3%ADnez"
    }
  },
  "402921": {
    fifaId: "402921",
    teamCode: "ARG",
    name: "L. Mart\xEDnez",
    fullName: "Lisandro Martinez",
    number: 6,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/1b4390f3-e94f-4851-a36b-595356b3d414/MARTINEZ-Lisandro_402921",
    dateOfBirth: "1998-01-18",
    height: 175,
    socials: {
      instagram: "lisandromartinez",
      wikipedia: "https://pt.wikipedia.org/wiki/Lisandro_Mart%C3%ADnez"
    }
  },
  "402925": {
    fifaId: "402925",
    teamCode: "ARG",
    name: "Molina",
    fullName: "Nahuel Molina",
    number: 26,
    position: "DF",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/7aef8344-2a5b-42f0-b1a0-565d5220aa76/MOLINA-Nahuel_402925",
    dateOfBirth: "1998-04-06",
    height: 179,
    socials: {
      instagram: "nahuelmolina35",
      wikipedia: "https://pt.wikipedia.org/wiki/Nahuel_Molina"
    }
  },
  "402926": {
    fifaId: "402926",
    teamCode: "ARG",
    name: "Montiel",
    fullName: "Gonzalo Montiel",
    number: 4,
    position: "DF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8cd278f-c843-4b99-9fb3-c8f081fbb2a8/MONTIEL-Gonzalo_402926",
    dateOfBirth: "1997-01-01",
    height: 175,
    socials: {
      instagram: "gonzalo_montiel29",
      wikipedia: "https://pt.wikipedia.org/wiki/Gonzalo_Montiel"
    }
  },
  "402934": {
    fifaId: "402934",
    teamCode: "ARG",
    name: "Senesi",
    fullName: "Marcos Senesi",
    number: 2,
    position: "MF",
    club: "Bournemouth",
    pictureUrl: null,
    dateOfBirth: "1997-05-10",
    height: 185,
    socials: {
      instagram: "marcosenesi",
      wikipedia: "https://pt.wikipedia.org/wiki/Marcos_Senesi"
    }
  },
  "402974": {
    fifaId: "402974",
    teamCode: "ECU",
    name: "Preciado",
    fullName: "Angelo Preciado",
    number: 17,
    position: "DF",
    club: "Sparta Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/2e9be79f-76b7-4f12-8ba0-c4c21ec8b39d/PRECIADO-Angelo_402974",
    dateOfBirth: "1998-02-18",
    height: 174,
    socials: {
      instagram: "angelothy_preciado17",
      wikipedia: "https://pt.wikipedia.org/wiki/%C3%81ngelo_Preciado"
    }
  },
  "402979": {
    fifaId: "402979",
    teamCode: "ECU",
    name: "Torres",
    fullName: "Felix Torres",
    number: 2,
    position: "DF",
    club: "Santos",
    pictureUrl: "https://digitalhub.fifa.com/transform/755ac13c-2122-42ff-b40a-4582be61e59e/TORRES-Felix_402979",
    dateOfBirth: "1997-01-11",
    height: 187,
    socials: {
      instagram: "felix_torres_s_c",
      wikipedia: "https://pt.wikipedia.org/wiki/F%C3%A9lix_Torres"
    }
  },
  "402985": {
    fifaId: "402985",
    teamCode: "ECU",
    name: "Caicedo",
    fullName: "Jordy Caicedo",
    number: 16,
    position: "FW",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/d4d93e2b-74aa-4bbf-89b2-22ebff655348/CAICEDO-Jordy_402985",
    dateOfBirth: "1997-11-18",
    height: 186,
    socials: {
      instagram: "moises_caicedo55",
      wikipedia: "https://pt.wikipedia.org/wiki/Jordy_Caicedo"
    }
  },
  "403001": {
    fifaId: "403001",
    teamCode: "POR",
    name: "D. Costa",
    fullName: "Diogo Costa",
    number: 1,
    position: "GK",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c3541e5-a8cb-458c-b368-7f57c1b5ae03/DIOGO-COSTA_403001",
    dateOfBirth: "1999-09-19",
    height: 188,
    socials: {
      instagram: "diogomcosta99",
      wikipedia: "https://pt.wikipedia.org/wiki/Diogo_Costa"
    }
  },
  "403002": {
    fifaId: "403002",
    teamCode: "POR",
    name: "Diogo Dalot",
    fullName: "Diogo Dalot",
    number: 5,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/d9eaa8b4-91e3-4c4f-b501-4082718f5323/DIOGO-DALOT_403002",
    dateOfBirth: "1999-03-18",
    height: 184,
    socials: {
      instagram: "diogodalot",
      wikipedia: "https://pt.wikipedia.org/wiki/Diogo_Dalot"
    }
  },
  "403046": {
    fifaId: "403046",
    teamCode: "ENG",
    name: "Henderson",
    fullName: "Dean Henderson",
    number: 13,
    position: "GK",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/acb3f8de-1176-40ef-99c2-e671120fbde0/HENDERSON-Dean_403046",
    dateOfBirth: "1997-03-12",
    height: 188,
    socials: {
      instagram: "deanhenderson",
      wikipedia: "https://pt.wikipedia.org/wiki/Dean_Henderson"
    }
  },
  "403049": {
    fifaId: "403049",
    teamCode: "ENG",
    name: "Konsa",
    fullName: "Ezri Konsa",
    number: 2,
    position: "DF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/54b28723-92e1-42e8-97b5-162f5099cf60/KONSA-Ezri_403049",
    dateOfBirth: "1997-10-23",
    height: 180,
    socials: {
      instagram: "ezrikonsa",
      wikipedia: "https://pt.wikipedia.org/wiki/Ezri_Konsa"
    }
  },
  "403063": {
    fifaId: "403063",
    teamCode: "COD",
    name: "Axel Tuanzebe",
    fullName: "Axel Tuanzebe",
    number: 4,
    position: "DF",
    club: "Stoke City",
    pictureUrl: "https://digitalhub.fifa.com/transform/c918f48b-6fff-449f-ba1d-a8c84e6a6f00/TUANZEBE-Axel_403063",
    dateOfBirth: "1997-11-14",
    height: 188,
    socials: {
      instagram: "axeltuanzebe_38",
      wikipedia: "https://pt.wikipedia.org/wiki/Axel_Tuanzebe"
    }
  },
  "403083": {
    fifaId: "403083",
    teamCode: "MAR",
    name: "Diop",
    fullName: "Issa Diop",
    number: 14,
    position: "DF",
    club: "Royal Antwerp",
    pictureUrl: "https://digitalhub.fifa.com/transform/a89dc777-6262-4c1e-8b22-a9a9e5bf7300/DIOP-Issa_403083",
    dateOfBirth: "1997-01-09",
    height: 194,
    socials: {
      instagram: "sofiane_diop",
      wikipedia: "https://pt.wikipedia.org/wiki/Issa_Diop"
    }
  },
  "403090": {
    fifaId: "403090",
    teamCode: "CIV",
    name: "Lafont",
    fullName: "Alban Lafont",
    number: 23,
    position: "GK",
    club: "Kasimpasa",
    pictureUrl: "https://digitalhub.fifa.com/transform/4387ca2a-2c1e-4bee-baad-95e9485a4ba0/LAFONT-Alban_403090",
    dateOfBirth: "1999-01-23",
    height: 196,
    socials: {
      instagram: "alban_lafont",
      wikipedia: "https://pt.wikipedia.org/wiki/Alban_Lafont"
    }
  },
  "403094": {
    fifaId: "403094",
    teamCode: "FRA",
    name: "Jean-Philippe Mateta",
    fullName: "Jean-Philippe Mateta",
    number: 22,
    position: "FW",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/91ab0f40-08d4-44bc-8b5b-dddb63b440bf/MATETA-Jean-Philippe_403094",
    dateOfBirth: "1997-06-28",
    height: 192,
    socials: {
      instagram: "iammateta",
      wikipedia: "https://pt.wikipedia.org/wiki/Jean-Philippe_Mateta"
    }
  },
  "403109": {
    fifaId: "403109",
    teamCode: "FRA",
    name: "Thuram",
    fullName: "Marcus Thuram",
    number: 9,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/6d9fa458-dba9-47da-87d9-83749fdfce9d/THURAM-Marcus_403109",
    dateOfBirth: "1997-08-06",
    height: 192,
    socials: {
      instagram: "thuram",
      wikipedia: "https://pt.wikipedia.org/wiki/Marcus_Thuram"
    }
  },
  "403236": {
    fifaId: "403236",
    teamCode: "IRN",
    name: "M.Ghayedi",
    fullName: "Mehdi Ghayedi",
    number: 10,
    position: "FW",
    club: "Kalba",
    pictureUrl: "https://digitalhub.fifa.com/transform/df931c9f-862e-411a-bc23-35af4d0d1bd1/GHAYEDI-Mehdi_403236",
    dateOfBirth: "1998-12-05",
    height: 166,
    socials: {
      instagram: "mehdighayedi10",
      wikipedia: "https://en.wikipedia.org/wiki/Mehdi_Ghayedi"
    }
  },
  "403274": {
    fifaId: "403274",
    teamCode: "JPN",
    name: "Hiroki Ito",
    fullName: "Hiroki Ito",
    number: 21,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/68ebc735-7e69-4908-98b7-b6d691e9cbf7/ITO-Hiroki_403274",
    dateOfBirth: "1999-05-12",
    height: 188,
    socials: {
      instagram: "hiroki_ito38",
      wikipedia: "https://pt.wikipedia.org/wiki/Hiroki_It%C5%8D"
    }
  },
  "403289": {
    fifaId: "403289",
    teamCode: "JPN",
    name: "Tomiyasu",
    fullName: "Takehiro Tomiyasu",
    number: 22,
    position: "DF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/959b632f-531d-420a-85af-5d0fc3c83d5f/TOMIYASU-Takehiro_403289",
    dateOfBirth: "1998-11-05",
    height: 187,
    socials: {
      instagram: "tomiyasu.t",
      wikipedia: "https://pt.wikipedia.org/wiki/Takehiro_Tomiyasu"
    }
  },
  "403293": {
    fifaId: "403293",
    teamCode: "JPN",
    name: "Ogawa",
    fullName: "Koki Ogawa",
    number: 19,
    position: "FW",
    club: "Nagoya Grampus",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b346456-0904-4429-ac8d-1acb2c2a1934/OGAWA-Koki_403293",
    dateOfBirth: "1997-08-08",
    height: 186,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/K%C5%8Dki_Ogawa_(footballer)"
    }
  },
  "403304": {
    fifaId: "403304",
    teamCode: "JPN",
    name: "Kubo",
    fullName: "Takefusa Kubo",
    number: 8,
    position: "MF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/7391febf-1e97-4ce1-89c8-0e3ae529ae81/KUBO-Takefusa_403304",
    dateOfBirth: "2001-06-04",
    height: 173,
    socials: {
      instagram: "takefusa.kubo",
      wikipedia: "https://pt.wikipedia.org/wiki/Takefusa_Kubo"
    }
  },
  "403305": {
    fifaId: "403305",
    teamCode: "JPN",
    name: "Keisuke Osako",
    fullName: "Keisuke Osako",
    number: 12,
    position: "GK",
    club: "Sint-Truiden",
    pictureUrl: "https://digitalhub.fifa.com/transform/4304491f-2404-4e52-a9c3-948c95a01f5a/OSAKO-Keisuke_403305",
    dateOfBirth: "1999-07-28",
    height: 188,
    socials: {
      instagram: "keisuke.osako",
      wikipedia: "https://en.wikipedia.org/wiki/Keisuke_%C5%8Csako"
    }
  },
  "403312": {
    fifaId: "403312",
    teamCode: "KSA",
    name: "Alamri",
    fullName: "Abdulelah Alamri",
    number: 4,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/3ec8a8ea-beb5-4f8b-b8f6-66030bda5c4e/ABDULELAH-ALAMRI_403312",
    dateOfBirth: "1997-01-15",
    height: 185
  },
  "403319": {
    fifaId: "403319",
    teamCode: "KSA",
    name: "Nasser D.",
    fullName: "Nasser Aldawsari",
    number: 6,
    position: "MF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/81e654c7-8273-4e1f-b909-62613fbf14ea/NASSER-ALDAWSARI_403319",
    dateOfBirth: "1998-12-19",
    height: 178,
    socials: {
      instagram: "nassiraldosrii6"
    }
  },
  "403335": {
    fifaId: "403335",
    teamCode: "KSA",
    name: "Altambakti",
    fullName: "Hassan Altambakti",
    number: 5,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/e64a0c6b-4cc6-4ffb-bc98-b4af95bed8bf/ALTAMBAKTI-Hassan_403335",
    dateOfBirth: "1999-02-09",
    height: 183,
    socials: {
      instagram: "hos__5"
    }
  },
  "403585": {
    fifaId: "403585",
    teamCode: "MEX",
    name: "Roberto Alvarado",
    fullName: "Roberto Alvarado",
    number: 25,
    position: "FW",
    club: "Celta Vigo",
    pictureUrl: "https://digitalhub.fifa.com/transform/b1a8a14a-2a27-4524-a6ed-679aca39d35d/ALVARADO-Roberto_403585",
    dateOfBirth: "1998-09-07",
    height: 176,
    socials: {
      instagram: "piojo.13",
      wikipedia: "https://pt.wikipedia.org/wiki/Roberto_Alvarado"
    }
  },
  "403596": {
    fifaId: "403596",
    teamCode: "MEX",
    name: "Jorge Sanchez",
    fullName: "Jorge Sanchez",
    number: 2,
    position: "DF",
    club: "Cruz Azul",
    pictureUrl: "https://digitalhub.fifa.com/transform/8640d435-8aba-4b52-a864-9952d3a6db5c/SANCHEZ-Jorge_403596",
    dateOfBirth: "1997-12-10",
    height: 176,
    socials: {
      instagram: "sanchezjorgie4",
      wikipedia: "https://pt.wikipedia.org/wiki/Jorge_S%C3%A1nchez"
    }
  },
  "403616": {
    fifaId: "403616",
    teamCode: "RSA",
    name: "Mokoena",
    fullName: "Teboho Mokoena",
    number: 4,
    position: "MF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/bf36679b-73eb-4813-a99d-b9673439dd05/MOKOENA-Teboho_403616",
    dateOfBirth: "1997-01-24",
    height: 177,
    socials: {
      instagram: "mokoena_28",
      wikipedia: "https://en.wikipedia.org/wiki/Teboho_Mokoena_(soccer,_born_1997)"
    }
  },
  "403642": {
    fifaId: "403642",
    teamCode: "SEN",
    name: "Krepin",
    fullName: "Krepin Diatta",
    number: 15,
    position: "DF",
    club: "Bologna",
    pictureUrl: "https://digitalhub.fifa.com/transform/29d66b6d-0e3d-4613-b399-d75741b2585d/DIATTA-Krepin_403642",
    dateOfBirth: "1999-02-25",
    height: 173,
    socials: {
      instagram: "krepindiatta",
      wikipedia: "https://pt.wikipedia.org/wiki/Kr%C3%A9pin_Diatta"
    }
  },
  "404319": {
    fifaId: "404319",
    teamCode: "AUS",
    name: "Ajdin Hrustic",
    fullName: "Ajdin Hrustic",
    number: 10,
    position: "FW",
    club: "Salernitana",
    pictureUrl: "https://digitalhub.fifa.com/transform/c63012a5-37f8-4317-8a69-60f861fb03a7/HRUSTIC-Ajdin_404319",
    dateOfBirth: "1996-07-05",
    height: 180,
    socials: {
      instagram: "ajdinhrustic",
      wikipedia: "https://pt.wikipedia.org/wiki/Ajdin_Hrustic"
    }
  },
  "404353": {
    fifaId: "404353",
    teamCode: "GER",
    name: "San\xE9",
    fullName: "Leroy Sane",
    number: 19,
    position: "MF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/097a6749-47b0-4285-a1f9-8aa0ac0e2c12/SANE-Leroy_404353",
    dateOfBirth: "1996-01-11",
    height: 183,
    socials: {
      instagram: "leroysane",
      wikipedia: "https://pt.wikipedia.org/wiki/Leroy_San%C3%A9"
    }
  },
  "404645": {
    fifaId: "404645",
    teamCode: "NOR",
    name: "Sander Berge",
    fullName: "Sander Berge",
    number: 8,
    position: "MF",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/b7cf7654-f43e-4993-975e-5a2a0d5633f8/BERGE-Sander_404645",
    dateOfBirth: "1998-02-14",
    height: 195,
    socials: {
      instagram: "sanderberge8",
      wikipedia: "https://en.wikipedia.org/wiki/Sander_Berge"
    }
  },
  "404885": {
    fifaId: "404885",
    teamCode: "CZE",
    name: "Soucek",
    fullName: "Tomas Soucek",
    number: 22,
    position: "MF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/eb34bfe6-5b60-4771-a303-40f68231bbd2/SOUCEK-Tomas_404885",
    dateOfBirth: "1995-02-27",
    height: 192,
    socials: {
      instagram: "tomassoucek28",
      wikipedia: "https://pt.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Sou%C4%8Dek"
    }
  },
  "405175": {
    fifaId: "405175",
    teamCode: "CIV",
    name: "Seko Fofana",
    fullName: "Seko Fofana",
    number: 6,
    position: "MF",
    club: "Al Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/08197d78-88b8-458f-9ad9-de192f25313c/FOFANA-Seko_405175",
    dateOfBirth: "1995-05-07",
    height: 185,
    socials: {
      instagram: "sekofofana",
      wikipedia: "https://en.wikipedia.org/wiki/Seko_Fofana"
    }
  },
  "405178": {
    fifaId: "405178",
    teamCode: "SUI",
    name: "Akanji",
    fullName: "Manuel Akanji",
    number: 5,
    position: "DF",
    club: "Inter Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/3a90610e-9f70-434a-b8b0-450a1ea81d75/AKANJI-Manuel_405178",
    socials: {
      instagram: "akanji.manu",
      wikipedia: "https://pt.wikipedia.org/wiki/Manuel_Akanji"
    },
    dateOfBirth: "1995-07-19",
    height: 188
  },
  "405263": {
    fifaId: "405263",
    teamCode: "AUT",
    name: "Kevin Danso",
    fullName: "Kevin Danso",
    number: 3,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/ff76ce8c-bd4a-436b-87d8-f62532d898b7/DANSO-Kevin_405263",
    dateOfBirth: "1998-09-19",
    height: 190,
    socials: {
      instagram: "kevin.danso",
      wikipedia: "https://pt.wikipedia.org/wiki/Kevin_Danso"
    }
  },
  "405454": {
    fifaId: "405454",
    teamCode: "NZL",
    name: "Just",
    fullName: "Elijah Just",
    number: 11,
    position: "MF",
    club: "SKN St. Polten",
    pictureUrl: "https://digitalhub.fifa.com/transform/fe32736f-5d5f-4870-8db3-5b4560835f53/JUST-Elijah_405454",
    socials: {
      instagram: "elijah_just",
      wikipedia: "https://pt.wikipedia.org/wiki/Elijah_Just"
    },
    dateOfBirth: "2000-05-01",
    height: 176
  },
  "405469": {
    fifaId: "405469",
    teamCode: "NZL",
    name: "Cacace",
    fullName: "Liberato Cacace",
    number: 13,
    position: "DF",
    club: "Empoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/0954fe05-e301-4ec1-a8ad-2aaccc60d8a7/CACACE-Liberato_405469",
    dateOfBirth: "2000-09-27",
    height: 182,
    socials: {
      instagram: "liberatocacace27",
      wikipedia: "https://en.wikipedia.org/wiki/Liberato_Cacace"
    }
  },
  "405522": {
    fifaId: "405522",
    teamCode: "JPN",
    name: "Nakamura",
    fullName: "Keito Nakamura",
    number: 13,
    position: "MF",
    club: "Stuttgart",
    pictureUrl: "https://digitalhub.fifa.com/transform/fa77e0e6-716b-463e-b210-252bbd18e2d9/NAKAMURA-Keito_405522",
    dateOfBirth: "2000-07-28",
    height: 180,
    socials: {
      instagram: "nakamura.keito",
      wikipedia: "https://pt.wikipedia.org/wiki/Keito_Nakamura"
    }
  },
  "405527": {
    fifaId: "405527",
    teamCode: "JPN",
    name: "Ayumu Seko",
    fullName: "Ayumu Seko",
    number: 20,
    position: "DF",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/2c33d7cc-d75e-427f-9aa9-2dac0872e561/SEKO-Ayumu_405527",
    dateOfBirth: "2000-06-07",
    height: 186,
    socials: {
      instagram: "ayumuseko_00",
      wikipedia: "https://en.wikipedia.org/wiki/Ayumu_Seko"
    }
  },
  "405528": {
    fifaId: "405528",
    teamCode: "JPN",
    name: "Sugawara",
    fullName: "Yukinari Sugawara",
    number: 2,
    position: "DF",
    club: "Southampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/09574b48-f59b-436b-b0db-ab4816a96ede/SUGAWARA-Yukinari_405528",
    dateOfBirth: "2000-06-28",
    height: 179,
    socials: {
      instagram: "yukinarisugawara",
      wikipedia: "https://pt.wikipedia.org/wiki/Yukinari_Sugawara"
    }
  },
  "405530": {
    fifaId: "405530",
    teamCode: "JPN",
    name: "Z.Suzuki",
    fullName: "Zion Suzuki",
    number: 1,
    position: "GK",
    club: "Parma",
    pictureUrl: "https://digitalhub.fifa.com/transform/7a045252-7c97-4f14-9493-4977e3e3156e/SUZUKI-Zion_405530",
    dateOfBirth: "2002-08-21",
    height: 190,
    socials: {
      instagram: "zionsuzuki",
      wikipedia: "https://pt.wikipedia.org/wiki/Zion_Suzuki"
    }
  },
  "405545": {
    fifaId: "405545",
    teamCode: "ESP",
    name: "Ferran",
    fullName: "Ferran Torres",
    number: 7,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/aa65d133-f0fb-4379-9b1b-6c9dc2f40195/TORRES-Ferran_405545",
    dateOfBirth: "2000-02-29",
    height: 183,
    socials: {
      instagram: "ferrantorres",
      wikipedia: "https://pt.wikipedia.org/wiki/Ferran_Torres"
    }
  },
  "405562": {
    fifaId: "405562",
    teamCode: "ESP",
    name: "Eric",
    fullName: "Eric Garcia",
    number: 4,
    position: "DF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/96536fc5-7d12-442c-89ba-c7ccdae45d61/GARCIA-Eric_405562",
    dateOfBirth: "2001-01-09",
    height: 183,
    socials: {
      instagram: "ericgm3",
      wikipedia: "https://pt.wikipedia.org/wiki/Eric_Garc%C3%ADa"
    }
  },
  "405639": {
    fifaId: "405639",
    teamCode: "IRN",
    name: "A.Hossein Zadeh",
    fullName: "Amirhossein Hosseinzadeh",
    number: 18,
    position: "FW",
    club: "Al-Shabab",
    pictureUrl: "https://digitalhub.fifa.com/transform/94c4de69-a055-4127-b21e-2071a84a4526/HOSSEINZADEH-Amirhossein_405639",
    dateOfBirth: "2000-10-30",
    height: 178,
    socials: {
      instagram: "amirhossein_.hosseinzadeh",
      wikipedia: "https://en.wikipedia.org/wiki/Amirhossein_Hosseinzadeh"
    }
  },
  "405742": {
    fifaId: "405742",
    teamCode: "BRA",
    name: "Vinicius Jr",
    fullName: "Vinicius Junior",
    number: 7,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c2722c3-a70b-49d8-bdb4-77109161f533/VINICIUS-JUNIOR_405742",
    instagramPostUrl: "https://www.instagram.com/p/DZjBZ9UjVG6/",
    worldCupNote: "## Leitura\nIn\xEDcio consistente e produtivo. Vini divide a artilharia da sele\xE7\xE3o e foi pe\xE7a da recupera\xE7\xE3o ap\xF3s a estreia travada contra Marrocos. Com o Brasil j\xE1 em vantagem no grupo, ele entra contra a Esc\xF3cia em boa fase, podendo assumir a artilharia isolada e encaminhar a classifica\xE7\xE3o.\n## Desempenho\n2 gols em 2 jogos: come\xE7ou decisivo e \xE9 artilheiro do Brasil ao lado de Igor Jesus (2 a 2). Participou da rea\xE7\xE3o que goleou o Haiti por 3 a 0 ap\xF3s o empate em 1 a 1 com Marrocos. Substitu\xEDdo uma vez (poupado) e com ficha limpa \u2014 0 cart\xF5es.\n## N\xFAmeros\nJ2 \xB7 2 gols \xB7 0 cart\xF5es \xB7 1 substitui\xE7\xE3o (sa\xEDda). Brasil em 1\xBA lugar, com 4 pontos (1 vit\xF3ria, 1 empate), 4 gols marcados e 1 sofrido \u2014 Vini responde por metade dos gols da sele\xE7\xE3o na competi\xE7\xE3o.",
    dateOfBirth: "2000-07-12",
    height: 176,
    socials: {
      instagram: "vinijr",
      wikipedia: "https://pt.wikipedia.org/wiki/Vin%C3%ADcius_J%C3%BAnior"
    }
  },
  "405841": {
    fifaId: "405841",
    teamCode: "ENG",
    name: "Gu\xE9hi",
    fullName: "Marc Guehi",
    number: 6,
    position: "DF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/c9686f87-8abd-45fb-a1e0-321ee8470dd6/GUEHI-Marc_405841",
    dateOfBirth: "2000-07-13",
    height: 183,
    socials: {
      instagram: "marcguehi",
      wikipedia: "https://pt.wikipedia.org/wiki/Marc_Gu%C3%A9hi"
    }
  },
  "405873": {
    fifaId: "405873",
    teamCode: "CIV",
    name: "Fofana",
    fullName: "Yahia Fofana",
    number: 1,
    position: "GK",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/c5bc8a38-479f-4c33-b8f6-9ab95bb45b57/FOFANA-Yahia_405873",
    dateOfBirth: "2000-08-21",
    height: 194,
    socials: {
      instagram: "yahia.fofana_",
      wikipedia: "https://pt.wikipedia.org/wiki/Yahia_Fofana"
    }
  },
  "405877": {
    fifaId: "405877",
    teamCode: "ALG",
    name: "Gouiri",
    fullName: "Amine Gouiri",
    number: 9,
    position: "FW",
    club: "Marselha",
    pictureUrl: "https://digitalhub.fifa.com/transform/4818d176-036a-4494-b53e-ada08bba749c/GOUIRI-Amine_405877",
    dateOfBirth: "2000-02-16",
    height: 180,
    socials: {
      instagram: "amine_gouiri",
      wikipedia: "https://pt.wikipedia.org/wiki/Amine_Gouiri"
    }
  },
  "405879": {
    fifaId: "405879",
    teamCode: "HAI",
    name: "Isidor",
    fullName: "Wilson Isidor",
    number: 18,
    position: "FW",
    club: "Red Star",
    pictureUrl: "https://digitalhub.fifa.com/transform/226c4315-372a-4dcf-8a1c-d4f8dc646419/ISIDOR-Wilson_405879",
    dateOfBirth: "2000-08-27",
    height: 184,
    socials: {
      instagram: "wilsonisidor21",
      wikipedia: "https://en.wikipedia.org/wiki/Wilson_Isidor"
    }
  },
  "405881": {
    fifaId: "405881",
    teamCode: "FRA",
    name: "Lacroix",
    fullName: "Maxence Lacroix",
    number: 26,
    position: "DF",
    club: "Bayern Munich",
    pictureUrl: "https://digitalhub.fifa.com/transform/a250ee2e-c181-46bb-b565-27d12a7b1878/LACROIX-Maxence_405881",
    dateOfBirth: "2000-04-06",
    height: 192,
    socials: {
      instagram: "lacroix_maxence",
      wikipedia: "https://pt.wikipedia.org/wiki/Maxence_Lacroix"
    }
  },
  "405893": {
    fifaId: "405893",
    teamCode: "FRA",
    name: "Tchouameni",
    fullName: "Aurelien Tchouameni",
    number: 8,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/8575fee6-68ae-4be0-9529-7e5c392e06e6/TCHOUAMENI-Aurelien_405893",
    dateOfBirth: "2000-01-27",
    height: 188,
    socials: {
      instagram: "aurelientchm",
      wikipedia: "https://pt.wikipedia.org/wiki/Aur%C3%A9lien_Tchouam%C3%A9ni"
    }
  },
  "405920": {
    fifaId: "405920",
    teamCode: "ECU",
    name: "Yeboah",
    fullName: "John Yeboah",
    number: 9,
    position: "FW",
    club: "Venezia",
    pictureUrl: "https://digitalhub.fifa.com/transform/1fc64d7c-4383-4c61-bd76-f22f22b91a8f/YEBOAH-John_405920",
    dateOfBirth: "2000-06-23",
    height: 170,
    socials: {
      instagram: "john_yeboahjr",
      wikipedia: "https://en.wikipedia.org/wiki/John_Yeboah"
    }
  },
  "406135": {
    fifaId: "406135",
    teamCode: "MEX",
    name: "Cesar Huerta",
    fullName: "Cesar Huerta",
    number: 21,
    position: "FW",
    club: "Chivas",
    pictureUrl: "https://digitalhub.fifa.com/transform/c5a00320-abe6-4d97-9892-e4afaf601fed/HUERTA-Cesar_406135",
    dateOfBirth: "2000-12-03",
    height: 171,
    socials: {
      instagram: "cesarh_33",
      wikipedia: "https://pt.wikipedia.org/wiki/C%C3%A9sar_Huerta"
    }
  },
  "406205": {
    fifaId: "406205",
    teamCode: "PAR",
    name: "B.Ojeda",
    fullName: "Braian Ojeda",
    number: 20,
    position: "MF",
    club: "Pumas UNAM",
    pictureUrl: "https://digitalhub.fifa.com/transform/4075346b-2148-424c-b178-1a7cdd863bd2/OJEDA-Braian_406205",
    dateOfBirth: "2000-06-27",
    height: 173,
    socials: {
      instagram: "braian_ojeda06",
      wikipedia: "https://en.wikipedia.org/wiki/Braian_Ojeda"
    }
  },
  "406231": {
    fifaId: "406231",
    teamCode: "TUR",
    name: "Yunus",
    fullName: "Yunus Akgun",
    number: 19,
    position: "FW",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/32587fe7-0e67-4aa1-8b07-3a1618183e80/AKGUN-Yunus_406231",
    dateOfBirth: "2000-07-07",
    height: 173,
    socials: {
      instagram: "yunusakgun17",
      wikipedia: "https://en.wikipedia.org/wiki/Yunus_Akg%C3%BCn"
    }
  },
  "406249": {
    fifaId: "406249",
    teamCode: "TUR",
    name: "Ozan",
    fullName: "Ozan Kabak",
    number: 15,
    position: "DF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/c42910db-c5e6-4706-bc99-1e08456bd3ef/KABAK-Ozan_406249",
    dateOfBirth: "2000-03-25",
    height: 187,
    socials: {
      instagram: "ozankabak4",
      wikipedia: "https://pt.wikipedia.org/wiki/Ozan_Kabak"
    }
  },
  "406280": {
    fifaId: "406280",
    teamCode: "USA",
    name: "Dest",
    fullName: "Sergino Dest",
    number: 2,
    position: "DF",
    club: "PSV",
    pictureUrl: "https://digitalhub.fifa.com/transform/5ee00bd8-552e-4e02-b680-b16534e53493/DEST-Sergino_406280",
    dateOfBirth: "2000-11-03",
    height: 173,
    socials: {
      instagram: "sgd_2",
      wikipedia: "https://pt.wikipedia.org/wiki/Sergi%C3%B1o_Dest"
    }
  },
  "406281": {
    fifaId: "406281",
    teamCode: "CPV",
    name: "Cj Dos Santos",
    fullName: "Cj Dos Santos",
    number: 23,
    position: "GK",
    club: "FC Alverca",
    pictureUrl: "https://digitalhub.fifa.com/transform/ecf9ed76-fe11-4089-96d4-8126286db543/CJ-DOS-SANTOS_406281",
    dateOfBirth: "2000-08-24",
    height: 189,
    socials: {
      instagram: "cj_dos_santos",
      wikipedia: "https://en.wikipedia.org/wiki/CJ_dos_Santos"
    }
  },
  "406304": {
    fifaId: "406304",
    teamCode: "USA",
    name: "T. Weah",
    fullName: "Timothy Weah",
    number: 21,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/c0dcfa0a-b862-4cd2-9c33-034bd18dc231/WEAH-Timothy_406304",
    dateOfBirth: "2000-02-22",
    height: 183,
    socials: {
      instagram: "timothyweah",
      wikipedia: "https://pt.wikipedia.org/wiki/Timothy_Weah"
    }
  },
  "406595": {
    fifaId: "406595",
    teamCode: "IRN",
    name: "R. Cheshmi",
    fullName: "Roozbeh Cheshmi",
    number: 15,
    position: "MF",
    club: "Esteghlal",
    pictureUrl: "https://digitalhub.fifa.com/transform/ecf8d94c-609d-4a5c-8375-8c8e92629a59/CHESHMI-Roozbeh_406595",
    dateOfBirth: "1993-07-24",
    height: 192,
    socials: {
      instagram: "roozbeh.cheshmi4",
      wikipedia: "https://pt.wikipedia.org/wiki/Rouzbeh_Cheshmi"
    }
  },
  "406606": {
    fifaId: "406606",
    teamCode: "AUS",
    name: "Awer Mabil",
    fullName: "Awer Mabil",
    number: 11,
    position: "FW",
    club: "Sunderland",
    pictureUrl: "https://digitalhub.fifa.com/transform/9beaa464-b945-4d89-b310-025eea682693/MABIL-Awer_406606",
    dateOfBirth: "1995-09-15",
    height: 178,
    socials: {
      instagram: "awermabil10",
      wikipedia: "https://pt.wikipedia.org/wiki/Awer_Mabil"
    }
  },
  "407022": {
    fifaId: "407022",
    teamCode: "EGY",
    name: "Karim Hafez",
    fullName: "Karim Hafez",
    number: 15,
    position: "DF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/2cd7ce59-aa56-4018-8d9c-5628a27e13c4/KARIM-HAFEZ_407022",
    dateOfBirth: "1996-03-12",
    height: 174,
    socials: {
      instagram: "karimhafez23",
      wikipedia: "https://pt.wikipedia.org/wiki/Karim_Hafez"
    }
  },
  "407114": {
    fifaId: "407114",
    teamCode: "CPV",
    name: "M\xE1rcio Rosa",
    fullName: "Marcio Rosa",
    number: 12,
    position: "GK",
    club: "Santa Cruz FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/fcc402a3-4dbd-4c2e-9856-c8a3104ce221/MARCIO-ROSA_407114",
    dateOfBirth: "1997-02-23",
    height: 186,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/M%C3%A1rcio_Rosa"
    }
  },
  "407343": {
    fifaId: "407343",
    teamCode: "CIV",
    name: "Ghislain Konan",
    fullName: "Ghislain Konan",
    number: 3,
    position: "DF",
    club: "Al Fayha",
    pictureUrl: "https://digitalhub.fifa.com/transform/8b0c92b7-4756-42a3-8cc8-b997693ff4aa/KONAN-Ghislain_407343",
    dateOfBirth: "1995-12-27",
    height: 176,
    socials: {
      instagram: "konan_ghislain_3",
      wikipedia: "https://en.wikipedia.org/wiki/Ghislain_Konan"
    }
  },
  "407680": {
    fifaId: "407680",
    teamCode: "CUW",
    name: "Juergen Locadia",
    fullName: "Juergen Locadia",
    number: 9,
    position: "FW",
    club: "FCSB",
    pictureUrl: "https://digitalhub.fifa.com/transform/95d67c13-c534-48f4-a2de-e831079a0d42/LOCADIA-Juergen_407680",
    dateOfBirth: "1993-11-07",
    height: 193,
    socials: {
      instagram: "jurgenlocadia"
    }
  },
  "407993": {
    fifaId: "407993",
    teamCode: "KSA",
    name: "Kanno",
    fullName: "Mohamed Kanno",
    number: 23,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3eb4162-fd6d-41f1-aad4-1b632b266f19/MOHAMED-KANNO_407993",
    dateOfBirth: "1994-09-22",
    height: 191,
    socials: {
      instagram: "kannoo18",
      wikipedia: "https://pt.wikipedia.org/wiki/Mohamed_Kanno"
    }
  },
  "408042": {
    fifaId: "408042",
    teamCode: "FRA",
    name: "Theo",
    fullName: "Theo Hernandez",
    number: 19,
    position: "DF",
    club: "Bayern Munich",
    pictureUrl: "https://digitalhub.fifa.com/transform/6f76533f-feca-4811-a010-e6e296b29db8/HERNANDEZ-Theo_408042",
    dateOfBirth: "1997-10-06",
    height: 184,
    socials: {
      instagram: "theo3hernandez",
      wikipedia: "https://pt.wikipedia.org/wiki/Theo_Hern%C3%A1ndez"
    }
  },
  "408948": {
    fifaId: "408948",
    teamCode: "EGY",
    name: "M.Elshenawy",
    fullName: "Mohamed Elshenawy",
    number: 1,
    position: "GK",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948",
    dateOfBirth: "1988-12-18",
    height: 191,
    socials: {
      instagram: "m.elshenawy1"
    }
  },
  "408950": {
    fifaId: "408950",
    teamCode: "EGY",
    name: "M.Hany",
    fullName: "Mohamed Hany",
    number: 3,
    position: "DF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/04f8ef57-e16f-49de-b7d4-ad430c4c430c/MOHAMED-HANY_408950",
    dateOfBirth: "1996-02-02",
    height: 175,
    socials: {
      instagram: "mohany30",
      wikipedia: "https://en.wikipedia.org/wiki/Mohamed_Hany"
    }
  },
  "409191": {
    fifaId: "409191",
    teamCode: "CRO",
    name: "Nikola Vlasic",
    fullName: "Nikola Vlasic",
    number: 13,
    position: "MF",
    club: "Torino",
    pictureUrl: "https://digitalhub.fifa.com/transform/59a64db7-c267-432d-9172-cf012b37c0b5/VLASIC-Nikola_409191",
    dateOfBirth: "1997-10-04",
    height: 179,
    socials: {
      instagram: "niksivlasic_",
      wikipedia: "https://pt.wikipedia.org/wiki/Nikola_Vla%C5%A1i%C4%87"
    }
  },
  "409241": {
    fifaId: "409241",
    teamCode: "CPV",
    name: "Diney Borges",
    fullName: "Diney Borges",
    number: 3,
    position: "DF",
    club: "Shamrock Rovers",
    pictureUrl: "https://digitalhub.fifa.com/transform/9bffceda-d572-41b1-917b-06196bbffb3c/DINEY-BORGES_409241",
    dateOfBirth: "1995-01-17",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Diney_(footballer,_born_1995)"
    }
  },
  "411226": {
    fifaId: "411226",
    teamCode: "SUI",
    name: "Djibril Sow",
    fullName: "Djibril Sow",
    number: 15,
    position: "MF",
    club: "BSC Young Boys",
    pictureUrl: "https://digitalhub.fifa.com/transform/64b86b6f-824e-4ef9-aa1e-43cfff2a7df1/SOW-Djibril_411226",
    dateOfBirth: "1997-02-06",
    height: 183,
    socials: {
      instagram: "dsow8",
      wikipedia: "https://pt.wikipedia.org/wiki/Djibril_Sow"
    }
  },
  "411301": {
    fifaId: "411301",
    teamCode: "SCO",
    name: "Gunn",
    fullName: "Angus Gunn",
    number: 1,
    position: "GK",
    club: "Norwich City",
    pictureUrl: "https://digitalhub.fifa.com/transform/c13202b1-f3b1-4fe1-bc72-0ee5b3135bbc/GUNN-Angus_411301",
    dateOfBirth: "1996-01-22",
    height: 196,
    socials: {
      instagram: "angusgunn01",
      wikipedia: "https://pt.wikipedia.org/wiki/Angus_Gunn"
    }
  },
  "411367": {
    fifaId: "411367",
    teamCode: "GER",
    name: "Havertz",
    fullName: "Kai Havertz",
    number: 7,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/1fdd4d11-97d1-4392-b345-5a5eecc54839/HAVERTZ-Kai_411367",
    dateOfBirth: "1999-06-11",
    height: 190,
    socials: {
      instagram: "kaihavertz29",
      wikipedia: "https://pt.wikipedia.org/wiki/Kai_Havertz"
    }
  },
  "411375": {
    fifaId: "411375",
    teamCode: "ESP",
    name: "Rodrigo",
    fullName: "Rodri",
    number: 16,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/295ab5b2-4dbf-42b9-918b-04fb4ae0ec0a/RODRI_411375",
    dateOfBirth: "1996-06-22",
    height: 190,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Rodri"
    }
  },
  "411443": {
    fifaId: "411443",
    teamCode: "BEL",
    name: "Castagne",
    fullName: "Timothy Castagne",
    number: 21,
    position: "DF",
    club: "Fulham",
    pictureUrl: "https://digitalhub.fifa.com/transform/58f1cc7c-04f4-43ba-bc82-85c1226fb7a2/CASTAGNE-Timothy_411443",
    dateOfBirth: "1995-12-05",
    height: 185,
    socials: {
      instagram: "timothycastagne",
      wikipedia: "https://pt.wikipedia.org/wiki/Timothy_Castagne"
    }
  },
  "411470": {
    fifaId: "411470",
    teamCode: "FRA",
    name: "L. Hernandez",
    fullName: "Lucas Hernandez",
    number: 21,
    position: "DF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/6ce8ced5-3b91-4a38-80ca-730e4a2ceb57/HERNANDEZ-Lucas_411470",
    dateOfBirth: "1996-02-14",
    height: 184,
    socials: {
      instagram: "lucashernandez5",
      wikipedia: "https://pt.wikipedia.org/wiki/Lucas_Hern%C3%A1ndez"
    }
  },
  "411624": {
    fifaId: "411624",
    teamCode: "KSA",
    name: "Alkhaibari",
    fullName: "Abdullah Alkhaibari",
    number: 15,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/16fa6436-2787-4e0c-b661-8fc766d029d6/ABDULLAH-ALKHAIBARI_411624",
    dateOfBirth: "1996-08-16",
    height: 175
  },
  "411644": {
    fifaId: "411644",
    teamCode: "IRN",
    name: "Ghoddos",
    fullName: "Saman Ghoddos",
    number: 14,
    position: "MF",
    club: "Kalba",
    pictureUrl: "https://digitalhub.fifa.com/transform/96d480ac-42c5-4dd6-a2f0-6220ea1a0f4b/GHODDOS-Saman_411644",
    dateOfBirth: "1993-09-06",
    height: 176,
    socials: {
      instagram: "saman.ghoddos",
      wikipedia: "https://pt.wikipedia.org/wiki/Saman_Ghoddos"
    }
  },
  "411653": {
    fifaId: "411653",
    teamCode: "TUN",
    name: "Bronn",
    fullName: "Dylan Bronn",
    number: 6,
    position: "DF",
    club: "Servette",
    pictureUrl: "https://digitalhub.fifa.com/transform/9a7aa138-5845-4890-aa20-43f4021160ed/BRONN-Dylan_411653",
    dateOfBirth: "1995-06-19",
    height: 186,
    socials: {
      instagram: "dylanbronnofficiel",
      wikipedia: "https://pt.wikipedia.org/wiki/Dylan_Bronn"
    }
  },
  "411658": {
    fifaId: "411658",
    teamCode: "TUN",
    name: "Skhiri",
    fullName: "Ellyes Skhiri",
    number: 17,
    position: "MF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/e2ba8e19-b4ab-435f-b12c-e56d655c31e6/SKHIRI-Ellyes_411658",
    dateOfBirth: "1995-05-10",
    height: 185,
    socials: {
      instagram: "ellyes_skhiri",
      wikipedia: "https://pt.wikipedia.org/wiki/Ellyes_Skhiri"
    }
  },
  "411678": {
    fifaId: "411678",
    teamCode: "MAR",
    name: "El Kaabi",
    fullName: "Ayoub El Kaabi",
    number: 20,
    position: "FW",
    club: "Wydad Casablanca",
    pictureUrl: "https://digitalhub.fifa.com/transform/207a8ba8-3f3f-4f86-9730-335f21c1924f/EL-KAABI-Ayoub_411678",
    dateOfBirth: "1993-06-25",
    height: 182,
    socials: {
      instagram: "ayoub_elkaabii",
      wikipedia: "https://pt.wikipedia.org/wiki/Ayoub_El_Kaabi"
    }
  },
  "411680": {
    fifaId: "411680",
    teamCode: "MAR",
    name: "Mazraoui",
    fullName: "Noussair Mazraoui",
    number: 3,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/000d2b43-36ff-4fe5-90d8-23c96e555c56/MAZRAOUI-Noussair_411680",
    dateOfBirth: "1997-11-14",
    height: 183,
    socials: {
      instagram: "nousmaz97",
      wikipedia: "https://pt.wikipedia.org/wiki/Noussair_Mazraoui"
    }
  },
  "411726": {
    fifaId: "411726",
    teamCode: "BRA",
    name: "Paquet\xE1",
    fullName: "Lucas Paqueta",
    number: 20,
    position: "MF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/7d7fce96-8d80-43c3-aa72-c45c44d370c5/LUCAS-PAQUETA_411726",
    dateOfBirth: "1997-08-27",
    height: 183,
    socials: {
      instagram: "lucaspaqueta",
      wikipedia: "https://pt.wikipedia.org/wiki/Lucas_Paquet%C3%A1"
    }
  },
  "412144": {
    fifaId: "412144",
    teamCode: "CAN",
    name: "Alphonso Davies",
    fullName: "Alphonso Davies",
    number: 19,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b0a6361-55a2-4bde-82a4-8275181091f5/DAVIES-Alphonso_412144",
    dateOfBirth: "2000-11-02",
    height: 183,
    socials: {
      instagram: "alphonsodavies",
      wikipedia: "https://pt.wikipedia.org/wiki/Alphonso_Davies"
    }
  },
  "416051": {
    fifaId: "416051",
    teamCode: "QAT",
    name: "Pedro Miguel",
    fullName: "Pedro Miguel",
    number: 2,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bd982c9-0644-4fe3-836a-2b2d9b88db36/PEDRO-MIGUEL_416051",
    dateOfBirth: "1990-08-06",
    height: 180,
    socials: {
      instagram: "pedrororocorreia22",
      wikipedia: "https://pt.wikipedia.org/wiki/R%C3%B3-R%C3%B3"
    }
  },
  "416056": {
    fifaId: "416056",
    teamCode: "QAT",
    name: "Meshaal Barsham",
    fullName: "Meshaal Barsham",
    number: 22,
    position: "GK",
    club: "Al Sadd Sports Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5f22cd1-218d-478b-b4a3-f3b2fb832c39/MESHAAL-BARSHAM_416056",
    dateOfBirth: "1998-02-14",
    height: 180,
    socials: {
      instagram: "barsham01",
      wikipedia: "https://pt.wikipedia.org/wiki/Meshaal_Barsham"
    }
  },
  "416081": {
    fifaId: "416081",
    teamCode: "ARG",
    name: "J. \xC1lvarez",
    fullName: "Julian Alvarez",
    number: 9,
    position: "FW",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/c7715f12-adb9-4504-9be2-e2899bdbd172/ALVAREZ-Julian_416081",
    dateOfBirth: "2000-01-31",
    height: 170,
    socials: {
      instagram: "juliaanalvarez",
      wikipedia: "https://pt.wikipedia.org/wiki/Juli%C3%A1n_Alvarez"
    }
  },
  "416576": {
    fifaId: "416576",
    teamCode: "MEX",
    name: "Alvaro Fidalgo",
    fullName: "Alvaro Fidalgo",
    number: 8,
    position: "MF",
    club: "Beta Guadalajara",
    pictureUrl: "https://digitalhub.fifa.com/transform/fda68f1a-eceb-4219-8f1b-ed6b1f2e37ed/FIDALGO-Alvaro_416576",
    dateOfBirth: "1997-04-09",
    height: 175,
    socials: {
      instagram: "alvarofidalgo",
      wikipedia: "https://pt.wikipedia.org/wiki/%C3%81lvaro_Fidalgo"
    }
  },
  "416652": {
    fifaId: "416652",
    teamCode: "NZL",
    name: "Jesse Randall",
    fullName: "Jesse Randall",
    number: 21,
    position: "FW",
    club: "HB K\xF8ge",
    pictureUrl: "https://digitalhub.fifa.com/transform/22bc60f6-3a5a-4df2-8493-b3193cf0cf22/RANDALL-Jesse_416652",
    dateOfBirth: "2002-08-19",
    height: 176,
    socials: {
      instagram: "jesserandall10",
      wikipedia: "https://en.wikipedia.org/wiki/Jesse_Randall"
    }
  },
  "416902": {
    fifaId: "416902",
    teamCode: "EGY",
    name: "Mohamed Abdelmoneim",
    fullName: "Mohamed Abdelmoneim",
    number: 6,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/5e36f80b-9432-444f-ac25-10cf792c341f/MOHAMED-ABDELMONEIM_416902",
    dateOfBirth: "1999-02-01",
    height: 184,
    socials: {
      instagram: "mohamed_abdelmoneim66"
    }
  },
  "416906": {
    fifaId: "416906",
    teamCode: "EGY",
    name: "Shoubir",
    fullName: "Mostafa Shoubir",
    number: 23,
    position: "GK",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/0fa52c2d-3a6c-49cf-ac83-ddc4a08d57e3/MOSTAFA-SHOUBIR_416906",
    dateOfBirth: "2000-05-15",
    height: 195,
    socials: {
      instagram: "oufashobeir1"
    }
  },
  "416989": {
    fifaId: "416989",
    teamCode: "IRN",
    name: "Ali Alipour",
    fullName: "Ali Alipour",
    number: 11,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d61af68-9b44-4ee7-8cc0-a8fd6707a019/ALIPOUR-Ali_416989",
    dateOfBirth: "1995-11-11",
    height: 181,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ali_Alipour"
    }
  },
  "418485": {
    fifaId: "418485",
    teamCode: "KOR",
    name: "Kim Taehyeon",
    fullName: "Kim Taehyeon",
    number: 5,
    position: "DF",
    club: "Al-Ain",
    pictureUrl: "https://digitalhub.fifa.com/transform/34616f93-215c-4a2f-8fcc-4f22a8732d64/KIM-Taehyeon_418485",
    dateOfBirth: "2000-09-17",
    height: 186
  },
  "418490": {
    fifaId: "418490",
    teamCode: "KOR",
    name: "Lee Kang In",
    fullName: "Lee Kangin",
    number: 19,
    position: "MF",
    club: "Gangwon FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/a54e995b-caa3-43c4-981f-b54ada7f678d/LEE-Kangin_418490",
    socials: {
      instagram: "kanginleeoficial",
      wikipedia: "https://pt.wikipedia.org/wiki/Lee_Kang-in"
    },
    dateOfBirth: "2001-02-19",
    height: 174
  },
  "418535": {
    fifaId: "418535",
    teamCode: "POR",
    name: "Jo\xE3o F\xE9lix",
    fullName: "Jo\xE3o F\xE9lix",
    number: 11,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/e1fd310b-cac5-47ef-95e9-9d0b8b41ba2f/JOAO-FELIX_418535",
    dateOfBirth: "1999-11-10",
    height: 179,
    socials: {
      instagram: "joaofelix79",
      wikipedia: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_F%C3%A9lix"
    }
  },
  "418548": {
    fifaId: "418548",
    teamCode: "POR",
    name: "Pedro Neto",
    fullName: "Pedro Neto",
    number: 18,
    position: "FW",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/e4e58acb-f7af-402c-a7b8-e284583ce14f/PEDRO-NETO_418548",
    dateOfBirth: "2000-03-09",
    height: 174,
    socials: {
      instagram: "pedroneto_30",
      wikipedia: "https://pt.wikipedia.org/wiki/Pedro_Neto"
    }
  },
  "418550": {
    fifaId: "418550",
    teamCode: "POR",
    name: "Rafael Le\xE3o",
    fullName: "Rafael Le\xE3o",
    number: 17,
    position: "FW",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/a5a760a7-7b47-42ed-8302-3ea75dbe9fc4/RAFAEL-LEAO_418550",
    dateOfBirth: "1999-06-10",
    height: 188,
    socials: {
      instagram: "iamrafaeleao93",
      wikipedia: "https://pt.wikipedia.org/wiki/Rafael_Le%C3%A3o"
    }
  },
  "418561": {
    fifaId: "418561",
    teamCode: "POR",
    name: "F. Trinc\xE3o",
    fullName: "Francisco Trinc\xE3o",
    number: 16,
    position: "FW",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/3aaa45cd-d807-4825-9145-3b1865a009bb/FRANCISCO-TRINCAO_418561",
    dateOfBirth: "1999-12-29",
    height: 184,
    socials: {
      instagram: "trincao",
      wikipedia: "https://pt.wikipedia.org/wiki/Francisco_Trinc%C3%A3o"
    }
  },
  "418781": {
    fifaId: "418781",
    teamCode: "SEN",
    name: "Bamba Dieng",
    fullName: "Bamba Dieng",
    number: 9,
    position: "FW",
    club: "Al-Rayyan",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c4c9caa-ee5b-49ef-afaf-159f1046f0eb/DIENG-Bamba_418781",
    dateOfBirth: "2000-03-23",
    height: 178,
    socials: {
      instagram: "dieng_ahmadou_bamba",
      wikipedia: "https://pt.wikipedia.org/wiki/Bamba_Dieng"
    }
  },
  "418795": {
    fifaId: "418795",
    teamCode: "SEN",
    name: "N.Jackson",
    fullName: "Nicolas Jackson",
    number: 11,
    position: "FW",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/27569451-1271-4fb3-86ee-51e88e913ec7/JACKSON-Nicolas_418795",
    dateOfBirth: "2001-06-20",
    height: 187,
    socials: {
      instagram: "jackson.nj1",
      wikipedia: "https://pt.wikipedia.org/wiki/Nicolas_Jackson"
    }
  },
  "418798": {
    fifaId: "418798",
    teamCode: "SEN",
    name: "Pape Matar Sarr",
    fullName: "Pape Matar Sarr",
    number: 17,
    position: "MF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/60281798-1792-4113-ba5c-fbfd3299270f/SARR-Pape-Matar_418798",
    dateOfBirth: "2002-09-14",
    height: 185,
    socials: {
      instagram: "pape",
      wikipedia: "https://pt.wikipedia.org/wiki/Pape_Matar_Sarr"
    }
  },
  "418963": {
    fifaId: "418963",
    teamCode: "ARG",
    name: "F. Medina",
    fullName: "Facundo Medina",
    number: 25,
    position: "DF",
    club: "RC Lens",
    pictureUrl: "https://digitalhub.fifa.com/transform/6d4b9a27-2cd5-4372-8426-51876990ba1b/MEDINA-Facundo_418963",
    dateOfBirth: "1999-05-28",
    height: 184,
    socials: {
      instagram: "facumedina99_",
      wikipedia: "https://pt.wikipedia.org/wiki/Facundo_Medina"
    }
  },
  "418975": {
    fifaId: "418975",
    teamCode: "ARG",
    name: "Almada",
    fullName: "Thiago Almada",
    number: 16,
    position: "FW",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/2bcc1c2f-7d0e-46c9-bcd9-1c02ed4d408a/ALMADA-Thiago_418975",
    dateOfBirth: "2001-04-26",
    height: 171,
    socials: {
      instagram: "thiago_almada23",
      wikipedia: "https://pt.wikipedia.org/wiki/Thiago_Almada"
    }
  },
  "419002": {
    fifaId: "419002",
    teamCode: "ECU",
    name: "Moises Ramirez",
    fullName: "Moises Ramirez",
    number: 12,
    position: "GK",
    club: "Liga de Quito",
    pictureUrl: "https://digitalhub.fifa.com/transform/3a641146-b759-48d0-983f-b85bb1232cc4/RAMIREZ-Moises_419002",
    dateOfBirth: "2000-09-09",
    height: 185,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Mois%C3%A9s_Ram%C3%ADrez"
    }
  },
  "419003": {
    fifaId: "419003",
    teamCode: "ECU",
    name: "Jackson Porozo",
    fullName: "Jackson Porozo",
    number: 25,
    position: "DF",
    club: "Independiente del Valle",
    pictureUrl: "https://digitalhub.fifa.com/transform/17ccf39c-5480-439a-be5f-90045606ca37/POROZO-Jackson_419003",
    dateOfBirth: "2000-08-04",
    height: 192,
    socials: {
      instagram: "jacksonporozo",
      wikipedia: "https://en.wikipedia.org/wiki/Jackson_Porozo"
    }
  },
  "419005": {
    fifaId: "419005",
    teamCode: "ECU",
    name: "Jordy Alcivar",
    fullName: "Jordy Alcivar",
    number: 5,
    position: "MF",
    club: "S\xE3o Paulo",
    pictureUrl: "https://digitalhub.fifa.com/transform/7f7492dc-4cdc-41c2-8acc-91ccad4d9664/ALCIVAR-Jordy_419005",
    dateOfBirth: "1999-08-05",
    height: 168,
    socials: {
      instagram: "jordy_alcivar13",
      wikipedia: "https://en.wikipedia.org/wiki/Jordy_Alc%C3%ADvar"
    }
  },
  "419020": {
    fifaId: "419020",
    teamCode: "ECU",
    name: "Plata",
    fullName: "Gonzalo Plata",
    number: 19,
    position: "FW",
    club: "Racing Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/743cc231-ab9e-45b7-8d59-ce8655280ae1/PLATA-Gonzalo_419020",
    dateOfBirth: "2000-11-01",
    height: 178,
    socials: {
      instagram: "gonzaloplata",
      wikipedia: "https://pt.wikipedia.org/wiki/Gonzalo_Plata"
    }
  },
  "419055": {
    fifaId: "419055",
    teamCode: "USA",
    name: "Brenden Aaronson",
    fullName: "Brenden Aaronson",
    number: 11,
    position: "FW",
    club: "St. Gallen",
    pictureUrl: "https://digitalhub.fifa.com/transform/8352f743-68bc-4077-ad83-5cd22f1a62dd/AARONSON-Brenden_419055",
    dateOfBirth: "2000-10-22",
    height: 177,
    socials: {
      instagram: "baaronson7",
      wikipedia: "https://pt.wikipedia.org/wiki/Brenden_Aaronson"
    }
  },
  "419062": {
    fifaId: "419062",
    teamCode: "USA",
    name: "Chris Richards",
    fullName: "Chris Richards",
    number: 3,
    position: "DF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/54036d3d-1588-4634-944b-a7c2d97d0b76/RICHARDS-Chris_419062",
    dateOfBirth: "2000-03-28",
    height: 189,
    socials: {
      instagram: "eastmamba",
      wikipedia: "https://pt.wikipedia.org/wiki/Chris_Richards"
    }
  },
  "419068": {
    fifaId: "419068",
    teamCode: "USA",
    name: "Reyna",
    fullName: "Giovanni Reyna",
    number: 7,
    position: "MF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/b30d701d-d9eb-4b2d-8db4-6841fc9ed1a9/REYNA-Giovanni_419068",
    dateOfBirth: "2002-11-13",
    height: 187,
    socials: {
      instagram: "gioareyna",
      wikipedia: "https://pt.wikipedia.org/wiki/Giovanni_Reyna"
    }
  },
  "419077": {
    fifaId: "419077",
    teamCode: "USA",
    name: "Mark Mckenzie",
    fullName: "Mark Mckenzie",
    number: 22,
    position: "DF",
    club: "Colorado Rapids",
    pictureUrl: "https://digitalhub.fifa.com/transform/492ad87d-f9a1-449e-9361-64323405107b/McKENZIE-Mark_419077",
    dateOfBirth: "1999-02-25",
    height: 186,
    socials: {
      instagram: "markmckenzie4",
      wikipedia: "https://en.wikipedia.org/wiki/Mark_McKenzie_(soccer,_born_1999)"
    }
  },
  "419082": {
    fifaId: "419082",
    teamCode: "USA",
    name: "Ricardo Pepi",
    fullName: "Ricardo Pepi",
    number: 9,
    position: "FW",
    club: "Norwich City",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a7c4d85-fa83-40ec-a953-d4cebbd63480/PEPI-Ricardo_419082",
    dateOfBirth: "2003-01-09",
    height: 185,
    socials: {
      instagram: "pepi_ricardo",
      wikipedia: "https://pt.wikipedia.org/wiki/Ricardo_Pepi"
    }
  },
  "419100": {
    fifaId: "419100",
    teamCode: "URU",
    name: "Maxi Araujo",
    fullName: "Maxi Araujo",
    number: 20,
    position: "MF",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/f1a7af03-ada1-4642-927c-5fe06844c89c/ARAUJO-Maxi_419100",
    socials: {
      instagram: "maximilianoaraujo6"
    },
    dateOfBirth: "2000-02-15",
    height: 176
  },
  "419108": {
    fifaId: "419108",
    teamCode: "URU",
    name: "Sebastian Caceres",
    fullName: "Sebastian Caceres",
    number: 3,
    position: "DF",
    club: "V\xE9lez S\xE1rsfield",
    pictureUrl: "https://digitalhub.fifa.com/transform/f959cef5-7f3b-4baa-af52-c8972780fbce/CACERES-Sebastian_419108",
    dateOfBirth: "1999-08-18",
    height: 180,
    socials: {
      instagram: "seba4caceres",
      wikipedia: "https://en.wikipedia.org/wiki/Sebasti%C3%A1n_C%C3%A1ceres"
    }
  },
  "419126": {
    fifaId: "419126",
    teamCode: "URU",
    name: "Darwin Nunez",
    fullName: "Darwin Nunez",
    number: 9,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/078805a6-5fbe-44f3-a58c-ed3837ca5665/NUNEZ-Darwin_419126",
    dateOfBirth: "1999-06-24",
    height: 185,
    socials: {
      instagram: "darwin_n9",
      wikipedia: "https://pt.wikipedia.org/wiki/Darwin_N%C3%BA%C3%B1ez"
    }
  },
  "419132": {
    fifaId: "419132",
    teamCode: "URU",
    name: "Brian Rodriguez",
    fullName: "Brian Rodriguez",
    number: 18,
    position: "FW",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/c6c94193-1372-4e11-94b5-35bcdd575e62/RODRIGUEZ-Brian_419132",
    dateOfBirth: "2000-05-20",
    height: 175,
    socials: {
      instagram: "brianrodriguez_10",
      wikipedia: "https://pt.wikipedia.org/wiki/Brian_Rodr%C3%ADguez"
    }
  },
  "419134": {
    fifaId: "419134",
    teamCode: "URU",
    name: "Juan Manuel Sanabria",
    fullName: "Juan Manuel Sanabria",
    number: 25,
    position: "MF",
    club: "Orlando City",
    pictureUrl: "https://digitalhub.fifa.com/transform/ad89e83d-ec32-4c30-a78f-1255d03ac0ed/SANABRIA-Juan-Manuel_419134",
    dateOfBirth: "2000-03-29",
    height: 170,
    socials: {
      instagram: "juanma_sanabria7",
      wikipedia: "https://en.wikipedia.org/wiki/Juan_Manuel_Sanabria"
    }
  },
  "419142": {
    fifaId: "419142",
    teamCode: "URU",
    name: "Rodrigo Zalazar",
    fullName: "Rodrigo Zalazar",
    number: 26,
    position: "MF",
    club: "Nacional",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b33d4cb-ddc9-4183-abbb-1f848e8c14a8/ZALAZAR-Rodrigo_419142",
    dateOfBirth: "1999-08-12",
    height: 175,
    socials: {
      instagram: "rodrigozalazar",
      wikipedia: "https://pt.wikipedia.org/wiki/Rodrigo_Zalazar"
    }
  },
  "419166": {
    fifaId: "419166",
    teamCode: "FRA",
    name: "Ibrahima Konate",
    fullName: "Ibrahima Konate",
    number: 15,
    position: "DF",
    club: "Inter Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/de7e635e-41b2-4383-9fbf-d38e6c737d51/KONATE-Ibrahima_419166",
    dateOfBirth: "1999-05-25",
    height: 194,
    socials: {
      instagram: "ibrahimakonate",
      wikipedia: "https://pt.wikipedia.org/wiki/Ibrahima_Konat%C3%A9"
    }
  },
  "419172": {
    fifaId: "419172",
    teamCode: "CIV",
    name: "Evan Ndicka",
    fullName: "Evan Ndicka",
    number: 21,
    position: "DF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/e308dd93-4706-4ed9-80a2-1db8e4a52d6c/PAUGAIN-Wilguens_419172",
    dateOfBirth: "1999-08-20",
    height: 192,
    socials: {
      instagram: "evanndicka",
      wikipedia: "https://pt.wikipedia.org/wiki/Evan_Ndicka"
    }
  },
  "419177": {
    fifaId: "419177",
    teamCode: "FRA",
    name: "William Saliba",
    fullName: "William Saliba",
    number: 17,
    position: "DF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/242125e7-67c3-4fcd-b0cc-6c5984c319f4/SALIBA-William_419177",
    dateOfBirth: "2001-03-24",
    height: 192,
    socials: {
      instagram: "w.saliba4",
      wikipedia: "https://pt.wikipedia.org/wiki/William_Saliba"
    }
  },
  "419189": {
    fifaId: "419189",
    teamCode: "TUN",
    name: "Yan Valery",
    fullName: "Yan Valery",
    number: 20,
    position: "DF",
    club: "Basel",
    pictureUrl: "https://digitalhub.fifa.com/transform/6ffa54d7-e23d-400d-a90a-960903c63f8b/VALERY-Yan_419189",
    dateOfBirth: "1999-02-22",
    height: 181,
    socials: {
      instagram: "yan.valery",
      wikipedia: "https://pt.wikipedia.org/wiki/Yan_Valery"
    }
  },
  "419211": {
    fifaId: "419211",
    teamCode: "RSA",
    name: "Lyle Foster",
    fullName: "Lyle Foster",
    number: 9,
    position: "FW",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/155c969c-63e1-438e-bd3d-ce587ac212c6/FOSTER-Lyle_419211",
    dateOfBirth: "2000-09-03",
    height: 185,
    socials: {
      instagram: "lyle.foster17",
      wikipedia: "https://pt.wikipedia.org/wiki/Lyle_Foster"
    }
  },
  "419223": {
    fifaId: "419223",
    teamCode: "RSA",
    name: "Oswin Appollis",
    fullName: "Oswin Appollis",
    number: 7,
    position: "FW",
    club: "Kaizer Chiefs",
    pictureUrl: "https://digitalhub.fifa.com/transform/91646285-a63d-4aeb-8036-da1dd055d6b5/APPOLLIS-Oswin_419223",
    dateOfBirth: "2001-08-25",
    height: 171,
    socials: {
      instagram: "oswinappollis_11",
      wikipedia: "https://pt.wikipedia.org/wiki/Oswin_Appollis"
    }
  },
  "419225": {
    fifaId: "419225",
    teamCode: "RSA",
    name: "Bradley Cross",
    fullName: "Bradley Cross",
    number: 26,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/6cee5a12-c935-4707-a3b8-2cad746fd5f5/CROSS-Bradley_419225",
    dateOfBirth: "2001-01-30",
    height: 175,
    socials: {
      instagram: "brxd.cross",
      wikipedia: "https://en.wikipedia.org/wiki/Bradley_Cross_(soccer)"
    }
  },
  "419281": {
    fifaId: "419281",
    teamCode: "KSA",
    name: "Saud Abdulhamid",
    fullName: "Saud Abdulhamid",
    number: 12,
    position: "DF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/66d9e01f-7f5e-4bef-b5bd-68d1ce4d9849/SAUD-ABDULHAMID_419281",
    dateOfBirth: "1999-07-18",
    height: 172,
    socials: {
      instagram: "s.abdualhamed66",
      wikipedia: "https://pt.wikipedia.org/wiki/Saud_Abdulhamid"
    }
  },
  "419287": {
    fifaId: "419287",
    teamCode: "KSA",
    name: "Nawaf Alaqidi",
    fullName: "Nawaf Alaqidi",
    number: 1,
    position: "GK",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/6b95e954-e3fd-4ba9-a171-690c9626eced/NAWAF-ALAQIDI_419287",
    dateOfBirth: "2000-05-10",
    height: 186,
    socials: {
      instagram: "nf.d26"
    }
  },
  "419291": {
    fifaId: "419291",
    teamCode: "KSA",
    name: "Feras Albrikan",
    fullName: "Feras Albrikan",
    number: 9,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/9d59c398-9c66-4dad-b20d-9694a0f74dd4/FERAS-ALBRIKAN_419291",
    dateOfBirth: "2000-05-14",
    height: 185,
    socials: {
      instagram: "frr9_",
      wikipedia: "https://pt.wikipedia.org/wiki/Firas_Al-Buraikan"
    }
  },
  "419300": {
    fifaId: "419300",
    teamCode: "KSA",
    name: "Khalid",
    fullName: "Khalid Alghannam",
    number: 17,
    position: "FW",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/ab5b27fd-b17e-43a1-bd85-78119d057dab/KHALID-ALGHANNAM_419300",
    dateOfBirth: "2000-11-08",
    height: 171
  },
  "419302": {
    fifaId: "419302",
    teamCode: "KSA",
    name: "A. Hamddan",
    fullName: "Abdullah Alhamddan",
    number: 19,
    position: "FW",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/2bdfc07a-ee4d-46f1-bc76-a69bd5d9e9be/ABDULLAH-ALHAMDDAN_419302",
    dateOfBirth: "1999-09-13",
    height: 186,
    socials: {
      instagram: "a.alhamddan"
    }
  },
  "419303": {
    fifaId: "419303",
    teamCode: "KSA",
    name: "Moteb",
    fullName: "Moteb Alharbi",
    number: 24,
    position: "DF",
    club: "Al-Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/0d671a6b-7632-46ee-91c7-39c01ee4b00c/MOTEB-ALHARBI_419303",
    dateOfBirth: "2000-02-20",
    height: 177,
    socials: {
      instagram: "matta.14"
    }
  },
  "419326": {
    fifaId: "419326",
    teamCode: "KSA",
    name: "Ali Majrashi",
    fullName: "Ali Majrashi",
    number: 2,
    position: "DF",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b436722-501d-4098-8daf-b298d010c530/ALI-MAJRASHI_419326",
    dateOfBirth: "1999-10-02",
    height: 169,
    socials: {
      instagram: "ali_majrashi27"
    }
  },
  "419436": {
    fifaId: "419436",
    teamCode: "QAT",
    name: "Ahmed Alganehi",
    fullName: "Ahmed Alganehi",
    number: 17,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/e46c2cdd-7a8e-45c1-ab4f-9e09cb686245/AHMED-ALGANEHI_419436",
    dateOfBirth: "2000-09-22",
    height: 175
  },
  "419441": {
    fifaId: "419441",
    teamCode: "QAT",
    name: "Homam Ahmed",
    fullName: "Homam Ahmed",
    number: 14,
    position: "DF",
    club: "Al-Gharafa SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a182a95-d4c3-4618-838e-d374bbc576ba/HOMAM-AHMED_419441",
    dateOfBirth: "1999-08-25",
    height: 188,
    socials: {
      instagram: "homam_99",
      wikipedia: "https://pt.wikipedia.org/wiki/Homam_Ahmed"
    }
  },
  "419459": {
    fifaId: "419459",
    teamCode: "QAT",
    name: "Mahmoud Abunada",
    fullName: "Mahmoud Abunada",
    number: 1,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/86cd9af3-c09a-4bcd-9830-fed9d7b19ab6/MAHMOUD-ABUNADA_419459",
    dateOfBirth: "2000-02-05",
    height: 185,
    socials: {
      instagram: "abunada21"
    }
  },
  "419461": {
    fifaId: "419461",
    teamCode: "QAT",
    name: "Salah Zakaria",
    fullName: "Salah Zakaria",
    number: 21,
    position: "GK",
    club: "Al-Duhail SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/92c49982-ca93-4853-93ea-5f5a3d6a256d/SALAH-ZAKARIA_419461",
    dateOfBirth: "1999-04-24",
    height: 186,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Salah_Zakaria"
    }
  },
  "419463": {
    fifaId: "419463",
    teamCode: "QAT",
    name: "Yusuf Abdurisag",
    fullName: "Yusuf Abdurisag",
    number: 15,
    position: "FW",
    club: "Al Sadd Sports Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/a114c943-718b-4345-b9da-54f1b8eb923c/YUSUF-ABDURISAG_419463",
    dateOfBirth: "1999-08-06",
    height: 171,
    socials: {
      instagram: "yosefyrs",
      wikipedia: "https://en.wikipedia.org/wiki/Yusuf_Abdurisag"
    }
  },
  "419473": {
    fifaId: "419473",
    teamCode: "QAT",
    name: "Jassem Gaber",
    fullName: "Jassem Gaber",
    number: 5,
    position: "DF",
    club: "Al-Arabi SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/14edcf5c-c52c-4a12-8078-40032f99dbd0/JASSEM-GABER_419473",
    dateOfBirth: "2002-02-20",
    height: 181,
    socials: {
      instagram: "jassim.gaber",
      wikipedia: "https://en.wikipedia.org/wiki/Jassem_Gaber"
    }
  },
  "419518": {
    fifaId: "419518",
    teamCode: "MEX",
    name: "Erik Lira",
    fullName: "Erik Lira",
    number: 6,
    position: "MF",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/83109586-542d-4950-83eb-f3388757ef90/LIRA-Erik_419518",
    dateOfBirth: "2000-05-08",
    height: 172,
    socials: {
      instagram: "eriklira",
      wikipedia: "https://en.wikipedia.org/wiki/%C3%89rik_Lira"
    }
  },
  "419567": {
    fifaId: "419567",
    teamCode: "NZL",
    name: "Callan Elliot",
    fullName: "Callan Elliot",
    number: 24,
    position: "DF",
    club: "Barnsley",
    pictureUrl: "https://digitalhub.fifa.com/transform/0758a55c-7ba4-4988-bcd8-c2401d5fc9d1/ELLIOT-Callan_419567",
    dateOfBirth: "1999-07-07",
    height: 177,
    socials: {
      instagram: "callan_elliot",
      wikipedia: "https://en.wikipedia.org/wiki/Callan_Elliot"
    }
  },
  "419572": {
    fifaId: "419572",
    teamCode: "NZL",
    name: "Nando Pijnaker",
    fullName: "Nando Pijnaker",
    number: 15,
    position: "DF",
    club: "FC Lugano",
    pictureUrl: "https://digitalhub.fifa.com/transform/73a44115-3c98-4cb3-b1d8-4e20cdc7ba23/PIJNAKER-Nando_419572",
    dateOfBirth: "1999-02-25",
    height: 185,
    socials: {
      instagram: "nandopijnaker",
      wikipedia: "https://en.wikipedia.org/wiki/Nando_Pijnaker"
    }
  },
  "419577": {
    fifaId: "419577",
    teamCode: "NZL",
    name: "Ben Waine",
    fullName: "Ben Waine",
    number: 18,
    position: "FW",
    club: "FC Emmen",
    pictureUrl: "https://digitalhub.fifa.com/transform/88f867f6-433a-4846-a145-fc06b8aac544/WAINE-Ben_419577",
    dateOfBirth: "2001-06-11",
    height: 185,
    socials: {
      instagram: "_waineo",
      wikipedia: "https://en.wikipedia.org/wiki/Ben_Waine"
    }
  },
  "419652": {
    fifaId: "419652",
    teamCode: "NOR",
    name: "Haaland",
    fullName: "Erling Haaland",
    number: 9,
    position: "FW",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/ee269811-9f84-401f-99b8-e953a2704ebb/HAALAND-Erling_419652",
    socials: {
      instagram: "erling",
      wikipedia: "https://pt.wikipedia.org/wiki/Erling_Haaland"
    },
    dateOfBirth: "2000-07-21",
    height: 195
  },
  "419654": {
    fifaId: "419654",
    teamCode: "NOR",
    name: "Jens Petter Hauge",
    fullName: "Jens Petter Hauge",
    number: 23,
    position: "MF",
    club: "Krasnodar",
    pictureUrl: "https://digitalhub.fifa.com/transform/6230b1c1-3c6f-4cfc-9afd-440e1cf3df09/HAUGE-Jens-Petter_419654",
    dateOfBirth: "1999-10-12",
    height: 184,
    socials: {
      instagram: "jenspetterhauge",
      wikipedia: "https://pt.wikipedia.org/wiki/Jens_Petter_Hauge"
    }
  },
  "419662": {
    fifaId: "419662",
    teamCode: "NOR",
    name: "Jorgen Strand Larsen",
    fullName: "Jorgen Strand Larsen",
    number: 11,
    position: "FW",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/116d01b5-9d0d-4456-a5a8-0e63a16b9862/STRAND-LARSEN-Jorgen_419662",
    dateOfBirth: "2000-02-06",
    height: 193,
    socials: {
      instagram: "strandlarsen",
      wikipedia: "https://en.wikipedia.org/wiki/J%C3%B8rgen_Strand_Larsen"
    }
  },
  "419672": {
    fifaId: "419672",
    teamCode: "NOR",
    name: "Leo Ostigard",
    fullName: "Leo Ostigard",
    number: 4,
    position: "DF",
    club: "Napoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/548ecd96-6fc9-40f2-b020-7b3a02391341/OSTIGARD-Leo_419672",
    dateOfBirth: "1999-11-28",
    height: 183,
    socials: {
      instagram: "leoskirio",
      wikipedia: "https://en.wikipedia.org/wiki/Leo_%C3%98stig%C3%A5rd"
    }
  },
  "419681": {
    fifaId: "419681",
    teamCode: "NOR",
    name: "Kristian Thorstvedt",
    fullName: "Kristian Thorstvedt",
    number: 18,
    position: "MF",
    club: "Augsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/4680df24-b4b3-46e5-9b38-01800898afa5/THORSTVEDT-Kristian_419681",
    dateOfBirth: "1999-03-13",
    height: 189,
    socials: {
      instagram: "kristianthorstvedt",
      wikipedia: "https://en.wikipedia.org/wiki/Kristian_Thorstvedt"
    }
  },
  "422657": {
    fifaId: "422657",
    teamCode: "NED",
    name: "F. De Jong",
    fullName: "Frenkie De Jong",
    number: 21,
    position: "MF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/fe8176f7-bf45-49fc-bd5e-0bfd0c834992/DE-JONG-Frenkie_422657",
    dateOfBirth: "1997-05-12",
    height: 181,
    socials: {
      instagram: "frenkiedejong",
      wikipedia: "https://pt.wikipedia.org/wiki/Frenkie_de_Jong"
    }
  },
  "422968": {
    fifaId: "422968",
    teamCode: "IRQ",
    name: "Mohanad Ali",
    fullName: "Mohanad Ali",
    number: 10,
    position: "FW",
    club: "Al-Shorta",
    pictureUrl: "https://digitalhub.fifa.com/transform/b71272b5-a898-49b9-9de5-35b59168f050/MOHANAD-ALI_422968",
    dateOfBirth: "2000-06-20",
    height: 183,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mohanad_Ali"
    }
  },
  "423522": {
    fifaId: "423522",
    teamCode: "AUS",
    name: "Jordan Bos",
    fullName: "Jordan Bos",
    number: 5,
    position: "DF",
    club: "Columbus Crew",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b537554-d211-4b77-aa31-0935973fdd50/BOS-Jordan_423522",
    dateOfBirth: "2002-10-29",
    height: 180,
    socials: {
      instagram: "jordanbos__",
      wikipedia: "https://en.wikipedia.org/wiki/Jordan_Bos"
    }
  },
  "423574": {
    fifaId: "423574",
    teamCode: "NZL",
    name: "Alex Paulsen",
    fullName: "Alex Paulsen",
    number: 12,
    position: "GK",
    club: "Vancouver Whitecaps",
    pictureUrl: "https://digitalhub.fifa.com/transform/10106faa-f53a-4898-b03a-6688ff48cf53/PAULSEN-Alex_423574",
    dateOfBirth: "2002-07-04",
    height: 193,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Alex_Paulsen"
    }
  },
  "423575": {
    fifaId: "423575",
    teamCode: "NZL",
    name: "Ben Old",
    fullName: "Ben Old",
    number: 19,
    position: "MF",
    club: "Melbourne City",
    pictureUrl: "https://digitalhub.fifa.com/transform/40fc67b2-858c-4985-9db3-ef1e32b864e9/OLD-Ben_423575",
    dateOfBirth: "2002-08-13",
    height: 173,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ben_Old"
    }
  },
  "423595": {
    fifaId: "423595",
    teamCode: "NZL",
    name: "Marko Stamenic",
    fullName: "Marko Stamenic",
    number: 8,
    position: "MF",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0e38724-034f-4d1e-a08a-def455a86569/STAMENIC-Marko_423595",
    dateOfBirth: "2002-02-19",
    height: 188,
    socials: {
      instagram: "markos_stamenic",
      wikipedia: "https://en.wikipedia.org/wiki/Marko_Stameni%C4%87"
    }
  },
  "423646": {
    fifaId: "423646",
    teamCode: "ESP",
    name: "Pedri",
    fullName: "Pedri",
    number: 20,
    position: "MF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/75a5861e-008f-460c-81e4-8085fa2cc961/PEDRI_423646",
    dateOfBirth: "2002-11-25",
    height: 174,
    socials: {
      instagram: "pedri",
      wikipedia: "https://pt.wikipedia.org/wiki/Pedri"
    }
  },
  "423658": {
    fifaId: "423658",
    teamCode: "ESP",
    name: "Yeremy Pino",
    fullName: "Yeremy Pino",
    number: 11,
    position: "FW",
    club: "Athletic Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/40328b78-c5b4-4c63-a11e-e5d1491793ef/PINO-Yeremy_423658",
    dateOfBirth: "2002-10-20",
    height: 174,
    socials: {
      instagram: "yeresantos10",
      wikipedia: "https://pt.wikipedia.org/wiki/Y%C3%A9remy_Pino"
    }
  },
  "423700": {
    fifaId: "423700",
    teamCode: "USA",
    name: "Joe Scally",
    fullName: "Joe Scally",
    number: 23,
    position: "DF",
    club: "FC Dallas",
    pictureUrl: "https://digitalhub.fifa.com/transform/86a32b0d-9007-4451-bbc6-a383a284f32f/SCALLY-Joe_423700",
    dateOfBirth: "2002-12-31",
    height: 184,
    socials: {
      instagram: "jjscally_3",
      wikipedia: "https://en.wikipedia.org/wiki/Joe_Scally"
    }
  },
  "423855": {
    fifaId: "423855",
    teamCode: "KOR",
    name: "Eom Jisung",
    fullName: "Eom Jisung",
    number: 25,
    position: "MF",
    club: "Daegu FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/f45da0fb-c909-4517-81e8-9a69347ac43c/EOM-Jisung_423855",
    dateOfBirth: "2002-05-09",
    height: 177
  },
  "423874": {
    fifaId: "423874",
    teamCode: "KOR",
    name: "Lee Hanbeom",
    fullName: "Lee Hanbeom",
    number: 2,
    position: "DF",
    club: "Jeonbuk Hyundai",
    pictureUrl: "https://digitalhub.fifa.com/transform/5486bd22-b834-4885-acde-af11531a61ba/LEE-Hanbeom_423874",
    dateOfBirth: "2002-06-17",
    height: 188
  },
  "423880": {
    fifaId: "423880",
    teamCode: "KOR",
    name: "Lee Taeseok",
    fullName: "Lee Taeseok",
    number: 13,
    position: "DF",
    club: "Tianjin Jinmen Tiger",
    pictureUrl: "https://digitalhub.fifa.com/transform/f2a9ce7b-5d5a-4ec7-9def-79407ccc338b/LEE-Taeseok_423880",
    dateOfBirth: "2002-07-28",
    height: 174,
    socials: {
      instagram: "lee_hanbeom"
    }
  },
  "423933": {
    fifaId: "423933",
    teamCode: "CAN",
    name: "Jayden Nelson",
    fullName: "Jayden Nelson",
    number: 26,
    position: "FW",
    club: "CF Montr\xE9al",
    pictureUrl: "https://digitalhub.fifa.com/transform/11fd224d-e90c-41f4-8497-e387c702f00a/NELSON-Jayden_423933",
    dateOfBirth: "2002-09-26",
    height: 170,
    socials: {
      instagram: "jaydennelsonn",
      wikipedia: "https://en.wikipedia.org/wiki/Jayden_Nelson"
    }
  },
  "423941": {
    fifaId: "423941",
    teamCode: "CAN",
    name: "Nathan Saliba",
    fullName: "Nathan Saliba",
    number: 25,
    position: "MF",
    club: "Hatayspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/1da64224-0271-489f-bea3-2aaa2e4cdf14/SALIBA-Nathan_423941",
    dateOfBirth: "2004-02-07",
    height: 174,
    socials: {
      instagram: "nathansaliba_"
    }
  },
  "424031": {
    fifaId: "424031",
    teamCode: "ECU",
    name: "Piero Hincapie",
    fullName: "Piero Hincapie",
    number: 3,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8f68e80-3057-4fbf-be1e-8cf885a713e1/HINCAPIE-Piero_424031",
    dateOfBirth: "2002-01-09",
    height: 183,
    socials: {
      instagram: "pierohincapie",
      wikipedia: "https://pt.wikipedia.org/wiki/Piero_Hincapi%C3%A9"
    }
  },
  "424036": {
    fifaId: "424036",
    teamCode: "ECU",
    name: "Pedro Vite",
    fullName: "Pedro Vite",
    number: 15,
    position: "MF",
    club: "Independiente",
    pictureUrl: "https://digitalhub.fifa.com/transform/0eceba19-8ceb-4cbc-ba7c-81b158e277bd/VITE-Pedro_424036",
    dateOfBirth: "2002-03-09",
    height: 172,
    socials: {
      instagram: "pedro_vite45",
      wikipedia: "https://en.wikipedia.org/wiki/Pedro_Vite"
    }
  },
  "424047": {
    fifaId: "424047",
    teamCode: "CUW",
    name: "Jeremy Antonisse",
    fullName: "Jeremy Antonisse",
    number: 11,
    position: "FW",
    club: "Melbourne Knights",
    pictureUrl: "https://digitalhub.fifa.com/transform/cd0b7ee9-50b8-4043-a957-44df5860e935/ANTONISSE-Jeremy_424047",
    dateOfBirth: "2002-03-29",
    height: 164,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Jeremy_Antonisse"
    }
  },
  "424051": {
    fifaId: "424051",
    teamCode: "NED",
    name: "Brian Brobbey",
    fullName: "Brian Brobbey",
    number: 19,
    position: "FW",
    club: "PSV",
    pictureUrl: "https://digitalhub.fifa.com/transform/15246275-ff97-404c-bac3-ce793d98c744/BROBBEY-Brian_424051",
    dateOfBirth: "2002-02-01",
    height: 181,
    socials: {
      instagram: "brianbrobbeyy",
      wikipedia: "https://pt.wikipedia.org/wiki/Brian_Brobbey"
    }
  },
  "424056": {
    fifaId: "424056",
    teamCode: "CUW",
    name: "Sontje Hansen",
    fullName: "Sontje Hansen",
    number: 12,
    position: "FW",
    club: "Hapoel Beer-Sheva",
    pictureUrl: "https://digitalhub.fifa.com/transform/35e4773d-8580-4100-a87a-239c2e03e179/HANSEN-Sontje_424056",
    dateOfBirth: "2002-05-18",
    height: 176,
    socials: {
      instagram: "sontje.hansen",
      wikipedia: "https://en.wikipedia.org/wiki/Sontje_Hansen"
    }
  },
  "424071": {
    fifaId: "424071",
    teamCode: "MAR",
    name: "Anass Salah Eddine",
    fullName: "Anass Salah Eddine",
    number: 26,
    position: "DF",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/06a01d87-4cc8-4a19-b4c3-b4902454e44e/SALAH-EDDINE-Anass_424071",
    dateOfBirth: "2002-01-18",
    height: 181,
    socials: {
      instagram: "asedi_",
      wikipedia: "https://en.wikipedia.org/wiki/Anass_Salah-Eddine"
    }
  },
  "424081": {
    fifaId: "424081",
    teamCode: "NED",
    name: "Bart Verbruggen",
    fullName: "Bart Verbruggen",
    number: 1,
    position: "GK",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/44bfd693-27d5-4d36-823e-5ff0e6cd2524/VERBRUGGEN-Bart_424081",
    dateOfBirth: "2002-08-18",
    height: 193,
    socials: {
      instagram: "bartverbruggen1",
      wikipedia: "https://pt.wikipedia.org/wiki/Bart_Verbruggen"
    }
  },
  "424106": {
    fifaId: "424106",
    teamCode: "EGY",
    name: "Haissem Hassan",
    fullName: "Haissem Hassan",
    number: 12,
    position: "FW",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/88bef92d-4236-4445-9d6f-c2674e218a60/HAISSEM-HASSAN_424106",
    dateOfBirth: "2002-02-08",
    height: 175,
    socials: {
      instagram: "haissemhassan",
      wikipedia: "https://en.wikipedia.org/wiki/Haissem_Hassan"
    }
  },
  "424119": {
    fifaId: "424119",
    teamCode: "COD",
    name: "Nathanael Mbuku",
    fullName: "Nathanael Mbuku",
    number: 7,
    position: "MF",
    club: "Stade Reims",
    pictureUrl: "https://digitalhub.fifa.com/transform/5977f6d5-d50b-46c4-9e33-d8c4aef7202c/MBUKU-Nathanael_424119",
    dateOfBirth: "2002-03-16",
    height: 170,
    socials: {
      instagram: "n.mbuku",
      wikipedia: "https://en.wikipedia.org/wiki/Nathana%C3%ABl_Mbuku"
    }
  },
  "424422": {
    fifaId: "424422",
    teamCode: "PAR",
    name: "Matias Galarza",
    fullName: "Matias Galarza",
    number: 23,
    position: "MF",
    club: "Gr\xEAmio",
    pictureUrl: "https://digitalhub.fifa.com/transform/ce774da7-eea7-475e-8526-8227b5068dc3/GALARZA-Matias_424422",
    socials: {
      instagram: "matigalarzaf",
      wikipedia: "https://pt.wikipedia.org/wiki/Mat%C3%ADas_Galarza"
    },
    dateOfBirth: "2002-02-11",
    height: 175
  },
  "424556": {
    fifaId: "424556",
    teamCode: "HAI",
    name: "Carl Sainte",
    fullName: "Carl Sainte",
    number: 6,
    position: "MF",
    club: "CF Montr\xE9al",
    pictureUrl: "https://digitalhub.fifa.com/transform/338f9a41-36d4-4f87-8425-9d5fdc30ac35/SAINTE-Carl_424556",
    dateOfBirth: "2002-08-09",
    height: 182,
    socials: {
      instagram: "carlfredsainte",
      wikipedia: "https://en.wikipedia.org/wiki/Carl_Saint%C3%A9"
    }
  },
  "425607": {
    fifaId: "425607",
    teamCode: "TUN",
    name: "Ben Hmida",
    fullName: "Mohamed Amine Ben Hmida",
    number: 21,
    position: "DF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/cb5fcd59-cbd1-4e4f-b5e7-f9adc81441e5/BEN-HMIDA-Mohamed-Amine_425607",
    dateOfBirth: "1995-12-15",
    height: 181,
    socials: {
      instagram: "ghaylen_chaaleli",
      wikipedia: "https://en.wikipedia.org/wiki/Mohamed_Amine_Ben_Hamida"
    }
  },
  "425701": {
    fifaId: "425701",
    teamCode: "MEX",
    name: "Johan Vasquez",
    fullName: "Johan Vasquez",
    number: 5,
    position: "DF",
    club: "Genoa",
    pictureUrl: "https://digitalhub.fifa.com/transform/838cb65f-3d60-4acb-855d-35a364c25f1a/VASQUEZ-Johan_425701",
    dateOfBirth: "1998-10-22",
    height: 182,
    socials: {
      instagram: "johan_pipe",
      wikipedia: "https://pt.wikipedia.org/wiki/Johan_V%C3%A1squez"
    }
  },
  "425804": {
    fifaId: "425804",
    teamCode: "KSA",
    name: "Saleh Alshehri",
    fullName: "Saleh Alshehri",
    number: 11,
    position: "FW",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/a912d91a-f467-4d57-a2fc-7937f8cafb66/SALEH-ALSHEHRI_425804",
    dateOfBirth: "1993-11-01",
    height: 184,
    socials: {
      instagram: "saleh_alshehri11"
    }
  },
  "426357": {
    fifaId: "426357",
    teamCode: "COD",
    name: "Aaron Wan-Bissaka",
    fullName: "Aaron Wan-Bissaka",
    number: 2,
    position: "DF",
    club: "West Ham United",
    pictureUrl: "https://digitalhub.fifa.com/transform/55753894-f81e-4e55-84a7-835ef46fc9bb/WAN-BISSAKA-Aaron_426357",
    dateOfBirth: "1997-11-26",
    height: 183,
    socials: {
      instagram: "awbissaka",
      wikipedia: "https://pt.wikipedia.org/wiki/Aaron_Wan-Bissaka"
    }
  },
  "426506": {
    fifaId: "426506",
    teamCode: "COD",
    name: "Meschack Elia",
    fullName: "Meschack Elia",
    number: 13,
    position: "FW",
    club: "Young Boys",
    pictureUrl: "https://digitalhub.fifa.com/transform/8ac2d949-e53e-4f4e-9196-d91ab9bc8f65/ELIA-Meschack_426506",
    dateOfBirth: "1997-08-06",
    height: 173,
    socials: {
      instagram: "meschackelialina",
      wikipedia: "https://pt.wikipedia.org/wiki/Meschack_Elia"
    }
  },
  "428882": {
    fifaId: "428882",
    teamCode: "ARG",
    name: "De Paul",
    fullName: "Rodrigo De Paul",
    number: 7,
    position: "MF",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/314bcb4c-8c81-4bce-9750-85827a209c1b/DE-PAUL-Rodrigo_428882",
    dateOfBirth: "1994-05-24",
    height: 178,
    socials: {
      instagram: "rodridepaul",
      wikipedia: "https://pt.wikipedia.org/wiki/Rodrigo_de_Paul"
    }
  },
  "428885": {
    fifaId: "428885",
    teamCode: "ECU",
    name: "Caicedo",
    fullName: "Moises Caicedo",
    number: 23,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/ae32bbc5-09f0-4743-ae0a-5b80461bdc79/CAICEDO-Moises_428885",
    dateOfBirth: "2001-11-02",
    height: 178,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Mois%C3%A9s_Caicedo"
    }
  },
  "429063": {
    fifaId: "429063",
    teamCode: "QAT",
    name: "Edmilson Junior",
    fullName: "Edmilson Junior",
    number: 8,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/45fa6cc3-85e1-45eb-8881-3b31bcddc992/EDMILSON-JUNIOR_429063",
    dateOfBirth: "1994-08-19",
    height: 180,
    socials: {
      instagram: "edmilsonjunior22",
      wikipedia: "https://en.wikipedia.org/wiki/Edmilson_Junior"
    }
  },
  "429095": {
    fifaId: "429095",
    teamCode: "EGY",
    name: "Hamdy Fathy",
    fullName: "Hamdy Fathy",
    number: 14,
    position: "MF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/2de277f5-cea7-47f9-9635-f9fb3a205c2a/HAMDY-FATHY_429095",
    dateOfBirth: "1994-09-29",
    height: 183,
    socials: {
      instagram: "hamdyfathy_8",
      wikipedia: "https://en.wikipedia.org/wiki/Hamdy_Fathy"
    }
  },
  "429157": {
    fifaId: "429157",
    teamCode: "MEX",
    name: "Julian Quinones",
    fullName: "Julian Quinones",
    number: 16,
    position: "FW",
    club: "Cruz Azul",
    pictureUrl: "https://digitalhub.fifa.com/transform/ea06becb-97b2-4f89-8464-5e0854cb7f81/QUINONES-Julian_429157",
    socials: {
      instagram: "julianquinones33",
      wikipedia: "https://pt.wikipedia.org/wiki/Juli%C3%A1n_Qui%C3%B1ones"
    },
    dateOfBirth: "1997-03-24",
    height: 177
  },
  "429392": {
    fifaId: "429392",
    teamCode: "BRA",
    name: "Danilo Santos",
    fullName: "Danilo Santos",
    number: 18,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/e564b92f-7a69-49fe-b259-c5deebf6e451/DANILO-SANTOS_429392",
    dateOfBirth: "2001-04-29",
    height: 177,
    socials: {
      instagram: "danilo.8"
    }
  },
  "429600": {
    fifaId: "429600",
    teamCode: "KOR",
    name: "Lee Donggyeong",
    fullName: "Lee Donggyeong",
    number: 26,
    position: "MF",
    club: "Girondin Bordeaux",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bef6cf8-e976-4ab2-89e1-6f8a886712f9/LEE-Donggyeong_429600",
    dateOfBirth: "1997-09-20",
    height: 175,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Lee_Dong-gyeong"
    }
  },
  "429608": {
    fifaId: "429608",
    teamCode: "KOR",
    name: "Seol Youngwoo",
    fullName: "Seol Youngwoo",
    number: 22,
    position: "DF",
    club: "FK Crvena zvezda",
    pictureUrl: "https://digitalhub.fifa.com/transform/db3b1a56-6cf2-42ad-9d02-139333d68f38/SEOL-Youngwoo_429608",
    dateOfBirth: "1998-12-05",
    height: 180,
    socials: {
      instagram: "0_woo.98"
    }
  },
  "429639": {
    fifaId: "429639",
    teamCode: "GER",
    name: "Alexander Nuebel",
    fullName: "Alexander Nuebel",
    number: 21,
    position: "GK",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/9d30bb13-c082-4759-90e7-e0bde4305d1f/NUEBEL-Alexander_429639",
    dateOfBirth: "1996-09-30",
    height: 193
  },
  "429640": {
    fifaId: "429640",
    teamCode: "GER",
    name: "Angelo Stiller",
    fullName: "Angelo Stiller",
    number: 16,
    position: "MF",
    club: "VfB Stuttgart",
    pictureUrl: "https://digitalhub.fifa.com/transform/69c7b030-2ce8-479c-9cd4-a7d62e48d9a4/STILLER-Angelo_429640",
    dateOfBirth: "2001-04-04",
    height: 183,
    socials: {
      instagram: "angelo.stiller",
      wikipedia: "https://pt.wikipedia.org/wiki/Angelo_Stiller"
    }
  },
  "429642": {
    fifaId: "429642",
    teamCode: "GER",
    name: "Musiala",
    fullName: "Jamal Musiala",
    number: 10,
    position: "MF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/05f50027-268f-43ff-ba75-1b477b37ca60/MUSIALA-Jamal_429642",
    dateOfBirth: "2003-02-26",
    height: 180,
    socials: {
      instagram: "jamalmusiala10",
      wikipedia: "https://pt.wikipedia.org/wiki/Jamal_Musiala"
    }
  },
  "430070": {
    fifaId: "430070",
    teamCode: "CRO",
    name: "Ante Budimir",
    fullName: "Ante Budimir",
    number: 11,
    position: "FW",
    club: "Osasuna",
    pictureUrl: "https://digitalhub.fifa.com/transform/135f8f1c-6e03-43b8-a18a-8914b4a4bd7a/BUDIMIR-Ante_430070",
    dateOfBirth: "1991-07-22",
    height: 190,
    socials: {
      instagram: "budimir__ante",
      wikipedia: "https://pt.wikipedia.org/wiki/Ante_Budimir"
    }
  },
  "430097": {
    fifaId: "430097",
    teamCode: "SCO",
    name: "Ryan Christie",
    fullName: "Ryan Christie",
    number: 11,
    position: "MF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/fce70106-25b4-4b34-b12b-10e4c6e90c18/CHRISTIE-Ryan_430097",
    dateOfBirth: "1995-02-22",
    height: 178,
    socials: {
      instagram: "ryanchristie2",
      wikipedia: "https://en.wikipedia.org/wiki/Ryan_Christie"
    }
  },
  "430098": {
    fifaId: "430098",
    teamCode: "SCO",
    name: "Lyndon Dykes",
    fullName: "Lyndon Dykes",
    number: 9,
    position: "FW",
    club: "Millwall",
    pictureUrl: "https://digitalhub.fifa.com/transform/e3a5c73f-1dd8-4e90-941a-f903ef96d7cc/DYKES-Lyndon_430098",
    dateOfBirth: "1995-10-07",
    height: 188,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Lyndon_Dykes"
    }
  },
  "430100": {
    fifaId: "430100",
    teamCode: "AUT",
    name: "Sasa Kalajdzic",
    fullName: "Sasa Kalajdzic",
    number: 14,
    position: "FW",
    club: "First Vienna FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/5d061c8b-6223-45c9-b1fa-c02624542eee/KALAJDZIC-Sasa_430100",
    dateOfBirth: "1997-07-07",
    height: 200,
    socials: {
      instagram: "sasakalajdzic",
      wikipedia: "https://pt.wikipedia.org/wiki/Sa%C5%A1a_Kalajd%C5%BEi%C4%87"
    }
  },
  "430120": {
    fifaId: "430120",
    teamCode: "TUR",
    name: "Mert Muldur",
    fullName: "Mert Muldur",
    number: 18,
    position: "DF",
    club: "LOSC Lille",
    pictureUrl: "https://digitalhub.fifa.com/transform/61f43913-2824-4711-9838-0d620f393353/MULDUR-Mert_430120",
    dateOfBirth: "1999-04-03",
    height: 184,
    socials: {
      instagram: "mert.m99",
      wikipedia: "https://pt.wikipedia.org/wiki/Mert_M%C3%BCld%C3%BCr"
    }
  },
  "430138": {
    fifaId: "430138",
    teamCode: "CAN",
    name: "Tajon Buchanan",
    fullName: "Tajon Buchanan",
    number: 17,
    position: "FW",
    club: "Club Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/a607b6f5-fe42-4a89-9e88-cb9690e4bcd1/BUCHANAN-Tajon_430138",
    dateOfBirth: "1999-02-08",
    height: 183,
    socials: {
      instagram: "tajonbuchanan",
      wikipedia: "https://pt.wikipedia.org/wiki/Tajon_Buchanan"
    }
  },
  "430144": {
    fifaId: "430144",
    teamCode: "ESP",
    name: "Pedro Porro",
    fullName: "Pedro Porro",
    number: 12,
    position: "DF",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/2c33b0c7-c399-4eac-98b2-66f35e77886a/PORRO-Pedro_430144",
    dateOfBirth: "1999-09-13",
    height: 173,
    socials: {
      instagram: "pedroporro29_",
      wikipedia: "https://pt.wikipedia.org/wiki/Pedro_Porro"
    }
  },
  "430147": {
    fifaId: "430147",
    teamCode: "SCO",
    name: "Jack Hendry",
    fullName: "Jack Hendry",
    number: 13,
    position: "DF",
    club: "Norwich City",
    pictureUrl: "https://digitalhub.fifa.com/transform/4c09cb0f-5174-41b5-a47e-dcfb5506b282/HENDRY-Jack_430147",
    dateOfBirth: "1995-05-07",
    height: 192,
    socials: {
      instagram: "jackhendry22",
      wikipedia: "https://en.wikipedia.org/wiki/Jack_Hendry_(footballer,_born_1995)"
    }
  },
  "430150": {
    fifaId: "430150",
    teamCode: "SWE",
    name: "Alexander Isak",
    fullName: "Alexander Isak",
    number: 9,
    position: "FW",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/c6ffe63b-aefd-43b8-bd9d-3c6e31a8f418/ISAK-Alexander_430150",
    dateOfBirth: "1999-09-21",
    height: 190,
    socials: {
      instagram: "alex_isak",
      wikipedia: "https://pt.wikipedia.org/wiki/Alexander_Isak"
    }
  },
  "430176": {
    fifaId: "430176",
    teamCode: "NED",
    name: "Ryan Gravenberch",
    fullName: "Ryan Gravenberch",
    number: 8,
    position: "MF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/ad5fe14f-b29c-4c20-8477-b00bf14c413f/GRAVENBERCH-Ryan_430176",
    dateOfBirth: "2002-05-16",
    height: 190,
    socials: {
      instagram: "ryanjiro_",
      wikipedia: "https://pt.wikipedia.org/wiki/Ryan_Gravenberch"
    }
  },
  "430194": {
    fifaId: "430194",
    teamCode: "BIH",
    name: "Dennis Hadzikadunic",
    fullName: "Dennis Hadzikadunic",
    number: 3,
    position: "DF",
    club: "Vitesse",
    pictureUrl: "https://digitalhub.fifa.com/transform/6cacbe9a-89b9-4eee-8d20-4e68fc0ef7ad/HADZIKADUNIC-Dennis_430194",
    dateOfBirth: "1998-07-09",
    height: 191,
    socials: {
      instagram: "dennis.hadzi",
      wikipedia: "https://en.wikipedia.org/wiki/Dennis_Had%C5%BEikaduni%C4%87"
    }
  },
  "430196": {
    fifaId: "430196",
    teamCode: "BIH",
    name: "Amir Hadziahmetovic",
    fullName: "Amir Hadziahmetovic",
    number: 16,
    position: "MF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/bbe9f175-c9cd-4a96-a655-cb2c4321d03b/HADZIAHMETOVIC-Amir_430196",
    dateOfBirth: "1997-03-08",
    height: 179,
    socials: {
      instagram: "a_hadzi18",
      wikipedia: "https://en.wikipedia.org/wiki/Amir_Had%C5%BEiahmetovi%C4%87"
    }
  },
  "430385": {
    fifaId: "430385",
    teamCode: "KOR",
    name: "Kim Jingyu",
    fullName: "Kim Jingyu",
    number: 24,
    position: "MF",
    club: "Ulsan HD",
    pictureUrl: "https://digitalhub.fifa.com/transform/b2fd3864-92cd-4846-8be2-880887b9c3ac/KIM-Jingyu_430385",
    dateOfBirth: "1997-02-24",
    height: 177
  },
  "430387": {
    fifaId: "430387",
    teamCode: "KOR",
    name: "Cho Guesung",
    fullName: "Cho Guesung",
    number: 9,
    position: "FW",
    club: "Midtjylland",
    pictureUrl: "https://digitalhub.fifa.com/transform/6efa6506-c1f1-4659-8249-9bc800f32691/CHO-Guesung_430387",
    dateOfBirth: "1998-01-25",
    height: 188,
    socials: {
      instagram: "whrbtjd",
      wikipedia: "https://pt.wikipedia.org/wiki/Cho_Gue-sung"
    }
  },
  "430401": {
    fifaId: "430401",
    teamCode: "JPN",
    name: "Tsuyoshi Watanabe",
    fullName: "Tsuyoshi Watanabe",
    number: 16,
    position: "DF",
    club: "Kashima Antlers",
    pictureUrl: "https://digitalhub.fifa.com/transform/c7ca3373-d0e0-451d-963a-9e68025385e7/WATANABE-Tsuyoshi_430401",
    dateOfBirth: "1997-02-05",
    height: 184,
    socials: {
      instagram: "tys_w0205",
      wikipedia: "https://en.wikipedia.org/wiki/Tsuyoshi_Watanabe"
    }
  },
  "430407": {
    fifaId: "430407",
    teamCode: "JPN",
    name: "Daizen Maeda",
    fullName: "Daizen Maeda",
    number: 11,
    position: "MF",
    club: "Reims",
    pictureUrl: "https://digitalhub.fifa.com/transform/42bcfad9-f62c-4238-a0e6-2f38b3757e2a/MAEDA-Daizen_430407",
    dateOfBirth: "1997-10-20",
    height: 173,
    socials: {
      instagram: "m_daizen0827",
      wikipedia: "https://pt.wikipedia.org/wiki/Daizen_Maeda"
    }
  },
  "430413": {
    fifaId: "430413",
    teamCode: "JPN",
    name: "Ayase Ueda",
    fullName: "Ayase Ueda",
    number: 18,
    position: "FW",
    club: "Kashima Antlers",
    pictureUrl: "https://digitalhub.fifa.com/transform/1b05e82f-94e8-470d-9c12-f9bdf1a0e080/UEDA-Ayase_430413",
    dateOfBirth: "1998-08-28",
    height: 182,
    socials: {
      instagram: "bee18_official",
      wikipedia: "https://pt.wikipedia.org/wiki/Ayase_Ueda"
    }
  },
  "430437": {
    fifaId: "430437",
    teamCode: "AUS",
    name: "Cameron Devlin",
    fullName: "Cameron Devlin",
    number: 14,
    position: "MF",
    club: "Al-Faisaly",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c095f2b-8169-4023-a676-48c6fb3e6897/DEVLIN-Cameron_430437",
    dateOfBirth: "1998-06-07",
    height: 170,
    socials: {
      instagram: "cameron.devlin",
      wikipedia: "https://en.wikipedia.org/wiki/Cammy_Devlin"
    }
  },
  "430440": {
    fifaId: "430440",
    teamCode: "AUS",
    name: "Aiden Oneill",
    fullName: "Aiden Oneill",
    number: 13,
    position: "MF",
    club: "Perth Glory",
    pictureUrl: "https://digitalhub.fifa.com/transform/a7dc9d98-0215-4756-995a-09b61830ab8b/ONEILL-Aiden_430440",
    dateOfBirth: "1998-07-04",
    height: 180,
    socials: {
      instagram: "_aidenoneill"
    }
  },
  "430442": {
    fifaId: "430442",
    teamCode: "AUS",
    name: "Harry Souttar",
    fullName: "Harry Souttar",
    number: 19,
    position: "DF",
    club: "Leicester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/6777563e-5036-4252-9809-a0cc21d96147/SOUTTAR-Harry_430442",
    dateOfBirth: "1998-10-22",
    height: 198,
    socials: {
      instagram: "harry_souttar",
      wikipedia: "https://pt.wikipedia.org/wiki/Harry_Souttar"
    }
  },
  "430450": {
    fifaId: "430450",
    teamCode: "AUS",
    name: "Jacob Italiano",
    fullName: "Jacob Italiano",
    number: 4,
    position: "DF",
    club: "Heart of Midlothian",
    pictureUrl: "https://digitalhub.fifa.com/transform/58be20f9-ed45-4c69-9c3d-d148271e8e92/ITALIANO-Jacob_430450",
    dateOfBirth: "2001-07-30",
    height: 177,
    socials: {
      instagram: "jacobitaliano",
      wikipedia: "https://en.wikipedia.org/wiki/Jacob_Italiano"
    }
  },
  "430452": {
    fifaId: "430452",
    teamCode: "AUS",
    name: "Connor Metcalfe",
    fullName: "Connor Metcalfe",
    number: 8,
    position: "MF",
    club: "Westerlo",
    pictureUrl: "https://digitalhub.fifa.com/transform/a539f793-3d95-46b8-805e-67156152ac8b/METCALFE-Connor_430452",
    dateOfBirth: "1999-11-05",
    height: 183,
    socials: {
      instagram: "connor_metcalfe",
      wikipedia: "https://pt.wikipedia.org/wiki/Connor_Metcalfe"
    }
  },
  "430465": {
    fifaId: "430465",
    teamCode: "EGY",
    name: "Ibrahim Adel",
    fullName: "Ibrahim Adel",
    number: 20,
    position: "FW",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/7486073a-56eb-4963-9bca-1036e8b187f0/IBRAHIM-ADEL_430465",
    dateOfBirth: "2001-04-23",
    height: 178,
    socials: {
      instagram: "ibrahim_adel_30",
      wikipedia: "https://en.wikipedia.org/wiki/Ibrahim_Adel"
    }
  },
  "430476": {
    fifaId: "430476",
    teamCode: "EGY",
    name: "Marmoush",
    fullName: "Omar Marmoush",
    number: 22,
    position: "FW",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/a3f5a36a-57b4-407b-a07e-7b5f6d19af5b/OMAR-MARMOUSH_430476",
    dateOfBirth: "1999-02-07",
    height: 180,
    socials: {
      instagram: "marmoush",
      wikipedia: "https://pt.wikipedia.org/wiki/Omar_Marmoush"
    }
  },
  "430477": {
    fifaId: "430477",
    teamCode: "EGY",
    name: "Ahmed Fatouh",
    fullName: "Ahmed Fatouh",
    number: 13,
    position: "DF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/c22759e9-6346-4cb7-8611-74074421be7f/AHMED-FATOUH_430477",
    dateOfBirth: "1998-03-22",
    height: 177
  },
  "430482": {
    fifaId: "430482",
    teamCode: "EGY",
    name: "E.Ashour",
    fullName: "Emam Ashour",
    number: 8,
    position: "MF",
    club: "Al Wakrah",
    pictureUrl: "https://digitalhub.fifa.com/transform/6d203b10-285b-4800-b448-e34d2b3a3e09/EMAM-ASHOUR_430482",
    dateOfBirth: "1998-02-20",
    height: 180,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Emam_Ashour"
    }
  },
  "430512": {
    fifaId: "430512",
    teamCode: "KSA",
    name: "Aiman Yahya",
    fullName: "Aiman Yahya",
    number: 8,
    position: "FW",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/af0837e0-63e3-47e7-9b24-9676dcdf3c5c/AIMAN-YAHYA_430512",
    dateOfBirth: "2001-05-14",
    height: 173,
    socials: {
      instagram: "aiman.yahya_23"
    }
  },
  "430518": {
    fifaId: "430518",
    teamCode: "KSA",
    name: "Nawaf Bu Washl",
    fullName: "Nawaf Bu Washl",
    number: 13,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/66433f37-d71a-4b14-ba06-da9d762320b4/NAWAF-BU-WASHL_430518",
    dateOfBirth: "1999-09-16",
    height: 173,
    socials: {
      instagram: "nawaf_buwashal"
    }
  },
  "430594": {
    fifaId: "430594",
    teamCode: "BRA",
    name: "Roger Iba\xF1ez",
    fullName: "Roger Ibanez",
    number: 24,
    position: "DF",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/0b88bb57-5b4b-448f-9af1-44869f36172a/ROGER-IBANEZ_430594",
    dateOfBirth: "1998-11-23",
    height: 186,
    socials: {
      instagram: "ibanez41oficial",
      wikipedia: "https://pt.wikipedia.org/wiki/Roger_Iba%C3%B1ez"
    }
  },
  "430597": {
    fifaId: "430597",
    teamCode: "BRA",
    name: "G. Martinelli",
    fullName: "Gabriel Martinelli",
    number: 22,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/4ef5dbd2-50dc-4def-8ae5-5c9f6fee72c2/GABRIEL-MARTINELLI_430597",
    dateOfBirth: "2001-06-18",
    height: 178,
    socials: {
      instagram: "gabriel.martinelli",
      wikipedia: "https://pt.wikipedia.org/wiki/Gabriel_Martinelli"
    }
  },
  "430601": {
    fifaId: "430601",
    teamCode: "BRA",
    name: "G. Magalh\xE3es",
    fullName: "Gabriel Magalhaes",
    number: 3,
    position: "DF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5870a76-5391-40b7-a348-e2b17995637b/GABRIEL-MAGALHAES_430601",
    dateOfBirth: "1997-12-19",
    height: 190,
    socials: {
      instagram: "_gabrielmagalhaes",
      wikipedia: "https://pt.wikipedia.org/wiki/Gabriel_Magalh%C3%A3es"
    }
  },
  "430605": {
    fifaId: "430605",
    teamCode: "BRA",
    name: "B. Guimar\xE3es",
    fullName: "Bruno Guimaraes",
    number: 8,
    position: "MF",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/0215cb23-c389-4c5a-9bb0-c7044ae7059a/BRUNO-GUIMARAES_430605",
    dateOfBirth: "1997-11-16",
    height: 182,
    socials: {
      instagram: "brunoguimaraes",
      wikipedia: "https://pt.wikipedia.org/wiki/Bruno_Guimar%C3%A3es"
    }
  },
  "430609": {
    fifaId: "430609",
    teamCode: "BRA",
    name: "Matheus Cunha",
    fullName: "Matheus Cunha",
    number: 9,
    position: "FW",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/9189da72-e1b5-4e7b-800d-7eeca119f08c/MATHEUS-CUNHA_430609",
    dateOfBirth: "1999-05-27",
    height: 183,
    socials: {
      instagram: "cunha",
      wikipedia: "https://pt.wikipedia.org/wiki/Matheus_Cunha"
    }
  },
  "430624": {
    fifaId: "430624",
    teamCode: "ARG",
    name: "J. Musso",
    fullName: "Juan Musso",
    number: 1,
    position: "GK",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/c4a2b6b7-378f-422d-b2d1-42a04e5b1dfb/MUSSO-Juan_430624",
    dateOfBirth: "1994-05-06",
    height: 193,
    socials: {
      instagram: "juanmusso",
      wikipedia: "https://pt.wikipedia.org/wiki/Juan_Musso"
    }
  },
  "430628": {
    fifaId: "430628",
    teamCode: "ARG",
    name: "Mac Allister",
    fullName: "Alexis Mac Allister",
    number: 20,
    position: "MF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/78b6a9e4-f2b9-4e19-b414-79b18858caaf/MAC-ALLISTER-Alexis_430628",
    dateOfBirth: "1998-12-24",
    height: 176,
    socials: {
      instagram: "alemacallister",
      wikipedia: "https://pt.wikipedia.org/wiki/Alexis_Mac_Allister"
    }
  },
  "430631": {
    fifaId: "430631",
    teamCode: "ARG",
    name: "N. Gonz\xE1lez",
    fullName: "Nico Gonzalez",
    number: 15,
    position: "MF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c86f0b3-0e7b-46e4-adb5-eafcd09d5cd0/GONZALEZ-Nico_430631",
    dateOfBirth: "1998-04-06",
    height: 180,
    socials: {
      instagram: "nicoigonzalez",
      wikipedia: "https://pt.wikipedia.org/wiki/Nicol%C3%A1s_Gonz%C3%A1lez"
    }
  },
  "430657": {
    fifaId: "430657",
    teamCode: "GER",
    name: "David Raum",
    fullName: "David Raum",
    number: 22,
    position: "DF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/ce3509c6-13ad-441a-8d05-9d42f8a4578c/RAUM-David_430657",
    dateOfBirth: "1998-04-22",
    height: 180,
    socials: {
      instagram: "david.raum",
      wikipedia: "https://pt.wikipedia.org/wiki/David_Raum"
    }
  },
  "430658": {
    fifaId: "430658",
    teamCode: "GER",
    name: "Anton",
    fullName: "Waldemar Anton",
    number: 3,
    position: "DF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/2bdd66d9-f9dc-44ab-8c6e-ededdb004f77/ANTON-Waldemar_430658",
    dateOfBirth: "1996-07-20",
    height: 189,
    socials: {
      instagram: "wowaanton31",
      wikipedia: "https://pt.wikipedia.org/wiki/Waldemar_Anton"
    }
  },
  "430667": {
    fifaId: "430667",
    teamCode: "GER",
    name: "Schlotterbeck",
    fullName: "Nico Schlotterbeck",
    number: 15,
    position: "DF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/3ece206c-50ae-4b63-ac21-a174f2fbb35a/SCHLOTTERBECK-Nico_430667",
    dateOfBirth: "1999-12-01",
    height: 191,
    socials: {
      instagram: "nico.schlotterbeck",
      wikipedia: "https://pt.wikipedia.org/wiki/Nico_Schlotterbeck"
    }
  },
  "430669": {
    fifaId: "430669",
    teamCode: "GER",
    name: "Florian Wirtz",
    fullName: "Florian Wirtz",
    number: 17,
    position: "MF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/3a120189-62cc-441f-b862-7fdd2a9abfa4/WIRTZ-Florian_430669",
    dateOfBirth: "2003-05-03",
    height: 176,
    socials: {
      instagram: "flowirtz",
      wikipedia: "https://pt.wikipedia.org/wiki/Florian_Wirtz"
    }
  },
  "430671": {
    fifaId: "430671",
    teamCode: "SEN",
    name: "Ismail Jakobs",
    fullName: "Ismail Jakobs",
    number: 14,
    position: "DF",
    club: "Lazio",
    pictureUrl: "https://digitalhub.fifa.com/transform/a24c412d-22cb-4d33-a341-e7f5e731756a/JAKOBS-Ismail_430671",
    dateOfBirth: "1999-08-17",
    height: 184,
    socials: {
      instagram: "ismailjakobs",
      wikipedia: "https://pt.wikipedia.org/wiki/Ismail_Jakobs"
    }
  },
  "430690": {
    fifaId: "430690",
    teamCode: "SEN",
    name: "Moussa Niakhate",
    fullName: "Moussa Niakhate",
    number: 19,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/8f89704d-50da-430b-b9dd-1775cf3c0f29/NIAKHATE-Moussa_430690",
    dateOfBirth: "1996-03-08",
    height: 190,
    socials: {
      instagram: "niakhate",
      wikipedia: "https://en.wikipedia.org/wiki/Moussa_Niakhat%C3%A9"
    }
  },
  "430697": {
    fifaId: "430697",
    teamCode: "HAI",
    name: "Jean-Ricner Bellegarde",
    fullName: "Jean-Ricner Bellegarde",
    number: 10,
    position: "MF",
    club: "Caen",
    pictureUrl: "https://digitalhub.fifa.com/transform/29f38f6c-fac7-4844-8656-c18527ebe792/BELLEGARDE-Jean-Ricner_430697",
    dateOfBirth: "1998-06-27",
    height: 170,
    socials: {
      instagram: "bellegardejr",
      wikipedia: "https://en.wikipedia.org/wiki/Jean-Ricner_Bellegarde"
    }
  },
  "430698": {
    fifaId: "430698",
    teamCode: "ALG",
    name: "Houssem Aouar",
    fullName: "Houssem Aouar",
    number: 8,
    position: "MF",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/ac743888-d671-4971-9df9-594b591f2425/AOUAR-Houssem_430698",
    dateOfBirth: "1998-06-30",
    height: 175,
    socials: {
      instagram: "houssem_aouar",
      wikipedia: "https://pt.wikipedia.org/wiki/Houssem_Aouar"
    }
  },
  "430707": {
    fifaId: "430707",
    teamCode: "FRA",
    name: "Jules Kounde",
    fullName: "Jules Kounde",
    number: 5,
    position: "DF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/31b384b6-20b7-4629-ab33-aa67cf403fc3/KOUNDE-Jules_430707",
    dateOfBirth: "1998-11-12",
    height: 178,
    socials: {
      instagram: "jkeey4",
      wikipedia: "https://pt.wikipedia.org/wiki/Jules_Kound%C3%A9"
    }
  },
  "430718": {
    fifaId: "430718",
    teamCode: "ESP",
    name: "Fabian",
    fullName: "Fabian Ruiz",
    number: 8,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/c40ded96-190d-41c8-90f2-6a253a63b33d/RUIZ-Fabian_430718",
    dateOfBirth: "1996-04-03",
    height: 188,
    socials: {
      instagram: "fabianruiz52",
      wikipedia: "https://pt.wikipedia.org/wiki/Fabi%C3%A1n_Ruiz"
    }
  },
  "430733": {
    fifaId: "430733",
    teamCode: "ESP",
    name: "Mikel Merino",
    fullName: "Mikel Merino",
    number: 6,
    position: "MF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/bcc810b0-5c45-4781-809e-beae8b68e1d8/MERINO-Mikel_430733",
    dateOfBirth: "1996-06-22",
    height: 188,
    socials: {
      instagram: "mikelmerino",
      wikipedia: "https://pt.wikipedia.org/wiki/Mikel_Merino"
    }
  },
  "430735": {
    fifaId: "430735",
    teamCode: "ESP",
    name: "Cucurella",
    fullName: "Marc Cucurella",
    number: 24,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/3bc6b871-a4b2-4201-8885-a77420f4c7c9/CUCURELLA-Marc_430735",
    dateOfBirth: "1998-07-22",
    height: 173,
    socials: {
      instagram: "cucurella3",
      wikipedia: "https://pt.wikipedia.org/wiki/Marc_Cucurella"
    }
  },
  "430740": {
    fifaId: "430740",
    teamCode: "MAR",
    name: "Brahim",
    fullName: "Brahim Diaz",
    number: 10,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/b05c2233-cb0a-4abc-9413-e56ad25f0899/DIAZ-Brahim_430740",
    dateOfBirth: "1999-08-03",
    height: 170,
    socials: {
      instagram: "brahim",
      wikipedia: "https://pt.wikipedia.org/wiki/Brahim_D%C3%ADaz"
    }
  },
  "430750": {
    fifaId: "430750",
    teamCode: "ESP",
    name: "Dani Olmo",
    fullName: "Dani Olmo",
    number: 10,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3f3e67a-90c1-469a-a4e1-263a470db989/OLMO-Dani_430750",
    dateOfBirth: "1998-05-07",
    height: 179,
    socials: {
      instagram: "daniolmo",
      wikipedia: "https://pt.wikipedia.org/wiki/Dani_Olmo"
    }
  },
  "430751": {
    fifaId: "430751",
    teamCode: "ESP",
    name: "Mikel Oyarzabal",
    fullName: "Mikel Oyarzabal",
    number: 21,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/2f46ed20-b155-4201-8b97-badbc3619450/OYARZABAL-Mikel_430751",
    dateOfBirth: "1997-04-21",
    height: 181,
    socials: {
      instagram: "mikel10oyar",
      wikipedia: "https://pt.wikipedia.org/wiki/Mikel_Oyarzabal"
    }
  },
  "430753": {
    fifaId: "430753",
    teamCode: "ESP",
    name: "Unai Simon",
    fullName: "Unai Simon",
    number: 23,
    position: "GK",
    club: "Athletic Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/41e0f920-bd7d-4bd6-882b-c83ed33e3f26/SIMON-Unai_430753",
    dateOfBirth: "1997-06-11",
    height: 190,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Unai_Sim%C3%B3n"
    }
  },
  "430754": {
    fifaId: "430754",
    teamCode: "ESP",
    name: "Martin Zubimendi",
    fullName: "Martin Zubimendi",
    number: 18,
    position: "MF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/640def2c-056d-4b6d-8bcc-613b77f99160/ZUBIMENDI-Martin_430754",
    dateOfBirth: "1999-02-02",
    height: 181,
    socials: {
      instagram: "martin_zubimendi",
      wikipedia: "https://pt.wikipedia.org/wiki/Mart%C3%ADn_Zubimendi"
    }
  },
  "430759": {
    fifaId: "430759",
    teamCode: "MEX",
    name: "Santiago Gimenez",
    fullName: "Santiago Gimenez",
    number: 11,
    position: "FW",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/0e27d0c6-e057-4d0c-a603-3843fcd0c542/GIMENEZ-Santiago_430759",
    dateOfBirth: "2001-04-18",
    height: 180,
    socials: {
      instagram: "sant.gimenez",
      wikipedia: "https://pt.wikipedia.org/wiki/Santiago_Gim%C3%A9nez"
    }
  },
  "430763": {
    fifaId: "430763",
    teamCode: "MEX",
    name: "Luis Romo",
    fullName: "Luis Romo",
    number: 7,
    position: "MF",
    club: "Houston Dynamo",
    pictureUrl: "https://digitalhub.fifa.com/transform/bc7f864e-c553-4995-9eb3-62139e29a7d7/ROMO-Luis_430763",
    socials: {
      instagram: "luis.romo3",
      wikipedia: "https://pt.wikipedia.org/wiki/Luis_Romo"
    },
    dateOfBirth: "1995-06-05",
    height: 183
  },
  "430766": {
    fifaId: "430766",
    teamCode: "MEX",
    name: "Alexis Vega",
    fullName: "Alexis Vega",
    number: 10,
    position: "FW",
    club: "Chivas",
    pictureUrl: "https://digitalhub.fifa.com/transform/eeeba73b-bc80-47f5-a1ff-f38f94ff2ee0/VEGA-Alexis_430766",
    dateOfBirth: "1997-11-25",
    height: 175,
    socials: {
      instagram: "alexisvega.9",
      wikipedia: "https://pt.wikipedia.org/wiki/Alexis_Vega"
    }
  },
  "430822": {
    fifaId: "430822",
    teamCode: "CIV",
    name: "Amad Diallo",
    fullName: "Amad Diallo",
    number: 15,
    position: "FW",
    club: "Boavista",
    pictureUrl: "https://digitalhub.fifa.com/transform/92354f59-681a-4409-b1eb-0e0744a78da8/DIALLO-Amad_430822",
    dateOfBirth: "2002-07-11",
    height: 173,
    socials: {
      instagram: "amaddiallo19",
      wikipedia: "https://pt.wikipedia.org/wiki/Amad_Diallo"
    }
  },
  "430831": {
    fifaId: "430831",
    teamCode: "CIV",
    name: "Ibrahim Sangare",
    fullName: "Ibrahim Sangare",
    number: 18,
    position: "MF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/daeaedd3-2c74-4fef-a968-2247f5ac962e/SANGARE-Ibrahim_430831",
    dateOfBirth: "1997-12-02",
    height: 191,
    socials: {
      instagram: "ibrahim_sangare225",
      wikipedia: "https://pt.wikipedia.org/wiki/Ibrahim_Sangar%C3%A9"
    }
  },
  "430834": {
    fifaId: "430834",
    teamCode: "CIV",
    name: "Parfait Guiagon",
    fullName: "Parfait Guiagon",
    number: 25,
    position: "MF",
    club: "Konyaspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/675938a7-c82b-4d9f-8cf8-6e7a42146489/GUIAGON-Parfait_430834",
    dateOfBirth: "2001-02-22",
    height: 165,
    socials: {
      instagram: "guiagon_parfait",
      wikipedia: "https://en.wikipedia.org/wiki/Parfait_Guiagon"
    }
  },
  "430854": {
    fifaId: "430854",
    teamCode: "CIV",
    name: "Wilfried Singo",
    fullName: "Wilfried Singo",
    number: 5,
    position: "DF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b02f719-a68a-46ae-a249-e7b6538a5714/SINGO-Wilfried_430854",
    dateOfBirth: "2000-12-25",
    height: 182,
    socials: {
      instagram: "stephane_singo",
      wikipedia: "https://pt.wikipedia.org/wiki/Wilfried_Singo"
    }
  },
  "430917": {
    fifaId: "430917",
    teamCode: "RSA",
    name: "Evidence Makgopa",
    fullName: "Evidence Makgopa",
    number: 17,
    position: "FW",
    club: "Esp\xE9rance",
    pictureUrl: "https://digitalhub.fifa.com/transform/9c040766-d546-4007-9fa3-eb50206cd689/MAKGOPA-Evidence_430917",
    dateOfBirth: "2000-06-05",
    height: 183,
    socials: {
      instagram: "evidence___makgopa",
      wikipedia: "https://en.wikipedia.org/wiki/Evidence_Makgopa"
    }
  },
  "431196": {
    fifaId: "431196",
    teamCode: "ARG",
    name: "Romero",
    fullName: "Cristian Romero",
    number: 13,
    position: "DF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/61d5d60a-7e5a-4a29-919d-c52bd80b9a5a/ROMERO-Cristian_431196",
    dateOfBirth: "1998-04-27",
    height: 185,
    socials: {
      instagram: "cutiromero2",
      wikipedia: "https://pt.wikipedia.org/wiki/Cristian_Romero"
    }
  },
  "431202": {
    fifaId: "431202",
    teamCode: "PAR",
    name: "Omar Alderete",
    fullName: "Omar Alderete",
    number: 3,
    position: "DF",
    club: "Getafe",
    pictureUrl: "https://digitalhub.fifa.com/transform/2b408b3b-5027-445e-9b55-6139deed7bea/ALDERETE-Omar_431202",
    dateOfBirth: "1996-12-26",
    height: 190,
    socials: {
      instagram: "alderete.20",
      wikipedia: "https://pt.wikipedia.org/wiki/Omar_Alderete"
    }
  },
  "431208": {
    fifaId: "431208",
    teamCode: "JOR",
    name: "Mohammad Abuzraiq",
    fullName: "Mohammad Abuzraiq",
    number: 7,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/14c04e8c-82ca-4feb-83ff-f89fa146d91f/MOHAMMAD-ABUZRAIQ_431208",
    dateOfBirth: "1997-12-30",
    height: 170,
    socials: {
      instagram: "shararh_99"
    }
  },
  "431209": {
    fifaId: "431209",
    teamCode: "JOR",
    name: "Ibrahim Sadeh",
    fullName: "Ibrahim Sadeh",
    number: 15,
    position: "MF",
    club: "Al-Khor Sports Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/e6579a9e-8548-4bdb-bbef-36f3fb6c1b81/IBRAHIM-SADEH_431209",
    dateOfBirth: "2000-04-27",
    height: 175,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ibrahim_Sadeh"
    }
  },
  "431211": {
    fifaId: "431211",
    teamCode: "JOR",
    name: "Mousa Altamari",
    fullName: "Mousa Altamari",
    number: 10,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/e999f9d2-7ca2-4d4d-b7ba-33c1ee96b375/MOUSA-ALTAMARI_431211",
    dateOfBirth: "1997-06-10",
    height: 176,
    socials: {
      instagram: "mousa_tamari_13"
    }
  },
  "431212": {
    fifaId: "431212",
    teamCode: "JOR",
    name: "Ali Olwan",
    fullName: "Ali Olwan",
    number: 9,
    position: "FW",
    club: "Al-Karma SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/f9806f7c-f81f-4653-a81a-9bbcfcd587c9/ALI-OLWAN_431212",
    dateOfBirth: "2000-03-26",
    height: 182,
    socials: {
      instagram: "ali_alwan9",
      wikipedia: "https://en.wikipedia.org/wiki/Ali_Olwan"
    }
  },
  "431219": {
    fifaId: "431219",
    teamCode: "JOR",
    name: "Saed Alrosan",
    fullName: "Saed Alrosan",
    number: 19,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/432e3e68-f3d2-4bdf-bc69-1523ff9c2333/SAED-ALROSAN_431219",
    dateOfBirth: "1997-02-01",
    height: 186
  },
  "431223": {
    fifaId: "431223",
    teamCode: "JOR",
    name: "Abdallah Alfakhori",
    fullName: "Abdallah Alfakhori",
    number: 22,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/3f7678fc-eab6-4d7c-81a4-2341b7f3ab10/ABDALLAH-ALFAKHORI_431223",
    dateOfBirth: "2000-01-22",
    height: 190,
    socials: {
      instagram: "abdallah_fakhori"
    }
  },
  "431225": {
    fifaId: "431225",
    teamCode: "JOR",
    name: "Yazan Alarab",
    fullName: "Yazan Alarab",
    number: 5,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/f69b7b80-4362-431e-9e25-32c7d0a92c88/YAZAN-ALARAB_431225",
    dateOfBirth: "1996-01-31",
    height: 185,
    socials: {
      instagram: "yazanalarab5"
    }
  },
  "431230": {
    fifaId: "431230",
    teamCode: "JOR",
    name: "Noor Alrawabdeh",
    fullName: "Noor Alrawabdeh",
    number: 8,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/1d0f7594-2192-4227-9ad5-696e4212f0ee/NOOR-ALRAWABDEH_431230",
    dateOfBirth: "1997-02-24",
    height: 182,
    socials: {
      instagram: "nooralrawabdeh_8"
    }
  },
  "431693": {
    fifaId: "431693",
    teamCode: "HAI",
    name: "Frantzdy Pierrot",
    fullName: "Frantzdy Pierrot",
    number: 20,
    position: "FW",
    club: "Maccabi Haifa",
    pictureUrl: "https://digitalhub.fifa.com/transform/0faa5cdb-4727-42be-b2b8-cedf04a37dd6/PIERROT-Frantzdy_431693",
    dateOfBirth: "1995-03-29",
    height: 194,
    socials: {
      instagram: "frantzdy_9",
      wikipedia: "https://en.wikipedia.org/wiki/Frantzdy_Pierrot"
    }
  },
  "431696": {
    fifaId: "431696",
    teamCode: "CAN",
    name: "Richie Laryea",
    fullName: "Richie Laryea",
    number: 22,
    position: "DF",
    club: "Portland Timbers",
    pictureUrl: "https://digitalhub.fifa.com/transform/612f188f-bb60-45db-8932-fc7dd2ca13ec/LARYEA-Richie_431696",
    dateOfBirth: "1995-01-07",
    height: 175,
    socials: {
      instagram: "richielaryea",
      wikipedia: "https://en.wikipedia.org/wiki/Richie_Laryea"
    }
  },
  "431698": {
    fifaId: "431698",
    teamCode: "CUW",
    name: "Jurien Gaari",
    fullName: "Jurien Gaari",
    number: 3,
    position: "DF",
    club: "Go Ahead Eagles",
    pictureUrl: "https://digitalhub.fifa.com/transform/4744d27b-6a5c-48be-a849-48facb6f6d6e/GAARI-Jurien_431698",
    dateOfBirth: "1993-12-23",
    height: 183,
    socials: {
      instagram: "juriengaari",
      wikipedia: "https://pt.wikipedia.org/wiki/Juri%C3%ABn_Gaari"
    }
  },
  "431781": {
    fifaId: "431781",
    teamCode: "HAI",
    name: "Jean-Kevin Duverne",
    fullName: "Jean-Kevin Duverne",
    number: 22,
    position: "DF",
    club: "Violette AC",
    pictureUrl: "https://digitalhub.fifa.com/transform/00dad9f5-0949-43df-a856-1ce364adf673/DUVERNE-Jean-Kevin_431781",
    dateOfBirth: "1997-07-12",
    height: 184,
    socials: {
      instagram: "jk_duverne",
      wikipedia: "https://en.wikipedia.org/wiki/Jean-K%C3%A9vin_Duverne"
    }
  },
  "431788": {
    fifaId: "431788",
    teamCode: "SEN",
    name: "Pape Gueye",
    fullName: "Pape Gueye",
    number: 26,
    position: "MF",
    club: "G\xE9n\xE9ration Foot",
    pictureUrl: "https://digitalhub.fifa.com/transform/ce2a3833-450c-413b-990f-7c76132e4913/GUEYE-Pape_431788",
    dateOfBirth: "1999-01-24",
    height: 189,
    socials: {
      instagram: "p.gueye24",
      wikipedia: "https://pt.wikipedia.org/wiki/Pape_Gueye"
    }
  },
  "431858": {
    fifaId: "431858",
    teamCode: "ALG",
    name: "Rayan Ait-Nouri",
    fullName: "Rayan Ait-Nouri",
    number: 15,
    position: "DF",
    club: "Montpellier",
    pictureUrl: "https://digitalhub.fifa.com/transform/7d7c26f5-81ee-4c6b-97b5-a8c6f67f0772/ZIZO_431858",
    dateOfBirth: "2001-06-06",
    height: 180,
    socials: {
      instagram: "r.aitnouri",
      wikipedia: "https://pt.wikipedia.org/wiki/Rayan_A%C3%AFt-Nouri"
    }
  },
  "431861": {
    fifaId: "431861",
    teamCode: "FRA",
    name: "Rayan Cherki",
    fullName: "Rayan Cherki",
    number: 24,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/e1fe82ba-026b-4f05-87ba-c1fb49f670e5/CHERKI-Rayan_431861",
    dateOfBirth: "2003-08-17",
    height: 180,
    socials: {
      instagram: "rayan_cherki",
      wikipedia: "https://pt.wikipedia.org/wiki/Rayan_Cherki"
    }
  },
  "431889": {
    fifaId: "431889",
    teamCode: "BRA",
    name: "Bremer",
    fullName: "Bremer",
    number: 14,
    position: "DF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/65ba7159-8278-4610-ac57-2cb9f2bbf11b/BREMER_431889",
    dateOfBirth: "1997-03-18",
    height: 188,
    socials: {
      instagram: "bremer",
      wikipedia: "https://pt.wikipedia.org/wiki/Bremer"
    }
  },
  "433066": {
    fifaId: "433066",
    teamCode: "NED",
    name: "Donyell Malen",
    fullName: "Donyell Malen",
    number: 18,
    position: "FW",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/15ebb030-92ea-4165-aa63-5136719b5c7f/MALEN-Donyell_433066",
    dateOfBirth: "1999-01-19",
    height: 178,
    socials: {
      instagram: "donyellmalen",
      wikipedia: "https://pt.wikipedia.org/wiki/Donyell_Malen"
    }
  },
  "433067": {
    fifaId: "433067",
    teamCode: "NOR",
    name: "Morten Thorsby",
    fullName: "Morten Thorsby",
    number: 2,
    position: "MF",
    club: "FC Twente",
    pictureUrl: "https://digitalhub.fifa.com/transform/b1ea3949-8267-4285-b1ed-200204779d50/THORSBY-Morten_433067",
    dateOfBirth: "1996-05-05",
    height: 188,
    socials: {
      instagram: "mortenthorsby",
      wikipedia: "https://en.wikipedia.org/wiki/Morten_Thorsby"
    }
  },
  "433072": {
    fifaId: "433072",
    teamCode: "TUR",
    name: "Zeki Celik",
    fullName: "Zeki Celik",
    number: 2,
    position: "DF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/903b63c2-ab06-47b8-911c-bf4f026601fd/CELIK-Zeki_433072",
    dateOfBirth: "1997-02-17",
    height: 180,
    socials: {
      instagram: "zekicelik17",
      wikipedia: "https://pt.wikipedia.org/wiki/Zeki_%C3%87elik"
    }
  },
  "433074": {
    fifaId: "433074",
    teamCode: "IRQ",
    name: "Amir Alammari",
    fullName: "Amir Alammari",
    number: 16,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/d80ff1d4-6bce-462b-bc11-6b4049fe9741/AMIR-ALAMMARI_433074",
    dateOfBirth: "1997-07-27",
    height: 180
  },
  "433076": {
    fifaId: "433076",
    teamCode: "COD",
    name: "Samuel Moutoussamy",
    fullName: "Samuel Moutoussamy",
    number: 8,
    position: "MF",
    club: "Nantes",
    pictureUrl: "https://digitalhub.fifa.com/transform/e22f732a-a001-4c41-96c8-138b79ed45b2/MOUTOUSSAMY-Samuel_433076",
    dateOfBirth: "1996-08-12",
    height: 176,
    socials: {
      instagram: "s_moutoussamy",
      wikipedia: "https://en.wikipedia.org/wiki/Samuel_Moutoussamy"
    }
  },
  "433092": {
    fifaId: "433092",
    teamCode: "BEL",
    name: "Alexis Saelemaekers",
    fullName: "Alexis Saelemaekers",
    number: 22,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/f4764c32-f702-4695-9658-28479916fa99/SAELEMAEKERS-Alexis_433092",
    dateOfBirth: "1999-06-27",
    height: 180,
    socials: {
      instagram: "alexis.saelemaekers",
      wikipedia: "https://pt.wikipedia.org/wiki/Alexis_Saelemaekers"
    }
  },
  "433097": {
    fifaId: "433097",
    teamCode: "ENG",
    name: "Declan Rice",
    fullName: "Declan Rice",
    number: 4,
    position: "MF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/acb98657-fa9b-4202-bc38-075a97b5bf78/RICE-Declan_433097",
    dateOfBirth: "1999-01-14",
    height: 185,
    socials: {
      instagram: "declanrice",
      wikipedia: "https://pt.wikipedia.org/wiki/Declan_Rice"
    }
  },
  "433118": {
    fifaId: "433118",
    teamCode: "TUR",
    name: "K\xF6kc\xFC",
    fullName: "Orkun Kokcu",
    number: 6,
    position: "MF",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/90a510ff-865f-4293-a59b-8a92e12a89b0/KOKCU-Orkun_433118",
    dateOfBirth: "2000-12-29",
    height: 175,
    socials: {
      instagram: "orkunkokcu",
      wikipedia: "https://pt.wikipedia.org/wiki/Orkun_K%C3%B6k%C3%A7%C3%BC"
    }
  },
  "433147": {
    fifaId: "433147",
    teamCode: "SUI",
    name: "Michel Aebischer",
    fullName: "Michel Aebischer",
    number: 20,
    position: "MF",
    club: "BSC Young Boys",
    pictureUrl: "https://digitalhub.fifa.com/transform/33ced9ed-c3fd-4933-bc83-4a7a1465a94f/AEBISCHER-Michel_433147",
    dateOfBirth: "1997-01-06",
    height: 183,
    socials: {
      instagram: "michel.aebischer",
      wikipedia: "https://en.wikipedia.org/wiki/Michel_Aebischer"
    }
  },
  "433161": {
    fifaId: "433161",
    teamCode: "COD",
    name: "Edo Kayembe",
    fullName: "Edo Kayembe",
    number: 25,
    position: "MF",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/45763ec1-2979-4fe6-97f9-5e3f90b9c1ee/KAYEMBE-Edo_433161",
    dateOfBirth: "1998-06-03",
    height: 183,
    socials: {
      instagram: "edokayembe",
      wikipedia: "https://en.wikipedia.org/wiki/Edo_Kayembe"
    }
  },
  "433191": {
    fifaId: "433191",
    teamCode: "SCO",
    name: "Che Adams",
    fullName: "Che Adams",
    number: 10,
    position: "FW",
    club: "Torino",
    pictureUrl: "https://digitalhub.fifa.com/transform/1a70c52f-9a4b-4dc1-813b-991877aa4758/ADAMS-Che_433191",
    dateOfBirth: "1996-07-13",
    height: 175,
    socials: {
      instagram: "cheadams_",
      wikipedia: "https://en.wikipedia.org/wiki/Ch%C3%A9_Adams"
    }
  },
  "433195": {
    fifaId: "433195",
    teamCode: "POR",
    name: "N. Mendes",
    fullName: "Nuno Mendes",
    number: 25,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/f8d5d7b8-bb64-4427-80d1-911d68b2dd1a/NUNO-MENDES_433195",
    dateOfBirth: "2002-06-19",
    height: 177,
    socials: {
      instagram: "nunomendes_5",
      wikipedia: "https://pt.wikipedia.org/wiki/Nuno_Mendes_(futebolista)"
    }
  },
  "433361": {
    fifaId: "433361",
    teamCode: "TUN",
    name: "Anis Slimane",
    fullName: "Anis Slimane",
    number: 25,
    position: "MF",
    club: "Wydad Casablanca",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a0e929e-a66f-4563-849e-c7bb62591b5d/SLIMANE-Anis_433361",
    dateOfBirth: "2001-03-16",
    height: 188,
    socials: {
      instagram: "anis_slimane10",
      wikipedia: "https://en.wikipedia.org/wiki/Anis_Ben_Slimane"
    }
  },
  "433362": {
    fifaId: "433362",
    teamCode: "TUN",
    name: "Ali Abdi",
    fullName: "Ali Abdi",
    number: 2,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/8ff3509c-8a73-40ea-ac0e-1beed4560b23/ABDI-Ali_433362",
    dateOfBirth: "1993-12-20",
    height: 177,
    socials: {
      instagram: "ali_abdi_officiel",
      wikipedia: "https://pt.wikipedia.org/wiki/Ali_Abdi"
    }
  },
  "433365": {
    fifaId: "433365",
    teamCode: "TUN",
    name: "Aymen Dahmen",
    fullName: "Aymen Dahmen",
    number: 16,
    position: "GK",
    club: "Augsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/90030173-815d-4411-8eac-20fb42834f9d/DAHMEN-Aymen_433365",
    dateOfBirth: "1997-01-28",
    height: 188,
    socials: {
      instagram: "aymen_dahmen_30",
      wikipedia: "https://en.wikipedia.org/wiki/Aymen_Dahmen"
    }
  },
  "433367": {
    fifaId: "433367",
    teamCode: "TUN",
    name: "Omar Rekik",
    fullName: "Omar Rekik",
    number: 4,
    position: "DF",
    club: "Esp\xE9rance Sportive",
    pictureUrl: "https://digitalhub.fifa.com/transform/2f586126-6a63-4e5b-9f85-6e15800449d9/REKIK-Omar_433367",
    dateOfBirth: "2001-12-20",
    height: 188,
    socials: {
      instagram: "omarrekik",
      wikipedia: "https://en.wikipedia.org/wiki/Omar_Rekik"
    }
  },
  "433378": {
    fifaId: "433378",
    teamCode: "TUN",
    name: "Hannibal Mejbri",
    fullName: "Hannibal Mejbri",
    number: 10,
    position: "MF",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/856f0cc0-6dcc-48bc-a8db-f4fe26d8ae06/MEJBRI-Hannibal_433378",
    dateOfBirth: "2003-01-21",
    height: 177,
    socials: {
      instagram: "hannibal.mj",
      wikipedia: "https://pt.wikipedia.org/wiki/Hannibal_Mejbri"
    }
  },
  "433380": {
    fifaId: "433380",
    teamCode: "TUN",
    name: "Montassar Talbi",
    fullName: "Montassar Talbi",
    number: 3,
    position: "DF",
    club: "Lorient",
    pictureUrl: "https://digitalhub.fifa.com/transform/253ef705-760c-457f-afde-067d2fb39010/TALBI-Montassar_433380",
    dateOfBirth: "1998-05-26",
    height: 190,
    socials: {
      instagram: "montassartalbi",
      wikipedia: "https://en.wikipedia.org/wiki/Montassar_Talbi"
    }
  },
  "433394": {
    fifaId: "433394",
    teamCode: "QAT",
    name: "Ahmed Fathy",
    fullName: "Ahmed Fathy",
    number: 20,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/f465c1f2-aa85-4bc7-bf8d-4d5805b19cd9/AHMED-FATHY_433394",
    dateOfBirth: "1993-01-25",
    height: 171,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ahmed_Fathy_(Qatari_footballer)"
    }
  },
  "433426": {
    fifaId: "433426",
    teamCode: "MAR",
    name: "S. Rahimi",
    fullName: "Soufiane Rahimi",
    number: 9,
    position: "FW",
    club: "Al-Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/7de765a2-f6c6-4d70-badd-a929c4cab547/RAHIMI-Soufiane_433426",
    dateOfBirth: "1996-06-02",
    height: 180,
    socials: {
      instagram: "soufiane_rahimi",
      wikipedia: "https://pt.wikipedia.org/wiki/Soufiane_Rahimi"
    }
  },
  "433439": {
    fifaId: "433439",
    teamCode: "KSA",
    name: "Ali Lajami",
    fullName: "Ali Lajami",
    number: 3,
    position: "DF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/27fa9b34-d37d-4416-a35f-fb6d234e9e8c/ALI-LAJAMI_433439",
    dateOfBirth: "1996-04-24",
    height: 177,
    socials: {
      instagram: "alawi_78s"
    }
  },
  "433461": {
    fifaId: "433461",
    teamCode: "EGY",
    name: "Zizo",
    fullName: "Zizo",
    number: 25,
    position: "FW",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/93b944be-7bd7-4c1d-807e-7b8e2cbc2a12/ZIZO_433461",
    dateOfBirth: "1996-01-10",
    height: 175,
    socials: {
      instagram: "m.zizo17",
      wikipedia: "https://en.wikipedia.org/wiki/Zizo_(footballer)"
    }
  },
  "433466": {
    fifaId: "433466",
    teamCode: "EGY",
    name: "Nabil Donga",
    fullName: "Nabil Donga",
    number: 18,
    position: "MF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/01dc0ada-6dcb-4f73-b81e-4103640705a8/NABIL-DONGA_433466",
    dateOfBirth: "1996-04-06",
    height: 179
  },
  "433469": {
    fifaId: "433469",
    teamCode: "EGY",
    name: "Mohanad Lashin",
    fullName: "Mohanad Lashin",
    number: 17,
    position: "MF",
    club: "Enppi",
    pictureUrl: "https://digitalhub.fifa.com/transform/55be7619-52f3-481a-8542-9832ba7c8e7d/MOHANAD-LASHIN_433469",
    dateOfBirth: "1996-05-29",
    height: 186
  },
  "433526": {
    fifaId: "433526",
    teamCode: "JOR",
    name: "Mohammad Abuhasheesh",
    fullName: "Mohammad Abuhasheesh",
    number: 2,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/8eb95381-e0eb-4965-8602-af3d79e14e66/MOHAMMAD-ABUHASHEESH_433526",
    dateOfBirth: "1995-05-09",
    height: 179
  },
  "433527": {
    fifaId: "433527",
    teamCode: "JOR",
    name: "Abdallah Nasib",
    fullName: "Abdallah Nasib",
    number: 3,
    position: "DF",
    club: "Al-Hussein SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/0f29b15d-1537-42c4-889b-ce58534b5b59/ABDALLAH-NASIB_433527",
    dateOfBirth: "1994-02-25",
    height: 184,
    socials: {
      instagram: "abdallah_nasib3",
      wikipedia: "https://en.wikipedia.org/wiki/Abdallah_Nasib"
    }
  },
  "433534": {
    fifaId: "433534",
    teamCode: "JOR",
    name: "Nizar Alrashdan",
    fullName: "Nizar Alrashdan",
    number: 21,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/59b03f3e-6636-4277-bca1-698bde2070b9/NIZAR-ALRASHDAN_433534",
    dateOfBirth: "1999-03-23",
    height: 183,
    socials: {
      instagram: "nizar_al_rashdan"
    }
  },
  "433571": {
    fifaId: "433571",
    teamCode: "IRQ",
    name: "Ahmed Basil",
    fullName: "Ahmed Basil",
    number: 22,
    position: "GK",
    club: "Al-Shorta",
    pictureUrl: "https://digitalhub.fifa.com/transform/a9d30885-9966-457c-9a44-07e5cf8eee93/AHMED-BASIL_433571",
    dateOfBirth: "1996-08-19",
    height: 184
  },
  "433585": {
    fifaId: "433585",
    teamCode: "IRQ",
    name: "Ibrahim Bayesh",
    fullName: "Ibrahim Bayesh",
    number: 8,
    position: "MF",
    club: "Al-Quwa Al-Jawiya",
    pictureUrl: "https://digitalhub.fifa.com/transform/390fdc3f-232a-445d-a80e-1c9cc8a67df7/IBRAHIM-BAYESH_433585",
    dateOfBirth: "2000-05-01",
    height: 180,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ibrahim_Bayesh"
    }
  },
  "433600": {
    fifaId: "433600",
    teamCode: "ALG",
    name: "Tougai",
    fullName: "Mohamed Amine Tougai",
    number: 4,
    position: "DF",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/08ab7f46-1067-4c5a-9a23-64bda657aca0/TOUGAI-Mohamed-Amine_433600",
    dateOfBirth: "2000-01-22",
    height: 186,
    socials: {
      instagram: "tougai_med_amine",
      wikipedia: "https://en.wikipedia.org/wiki/Mohamed_Amine_Tougai"
    }
  },
  "433631": {
    fifaId: "433631",
    teamCode: "ALG",
    name: "Yassine Titraoui",
    fullName: "Yassine Titraoui",
    number: 24,
    position: "MF",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/d5bf01cd-ba36-4a99-80c8-9287c6df0069/TITRAOUI-Yassine_433631",
    dateOfBirth: "2003-07-26",
    height: 180,
    socials: {
      instagram: "yacinetitraoui22"
    }
  },
  "433635": {
    fifaId: "433635",
    teamCode: "CAN",
    name: "Eustaquio",
    fullName: "Stephen Eustaquio",
    number: 7,
    position: "MF",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c0650a1-bba7-4998-b6b6-ebddeed58058/EUSTAQUIO-Stephen_433635",
    dateOfBirth: "1996-12-21",
    height: 175,
    socials: {
      instagram: "stepheustaquio",
      wikipedia: "https://pt.wikipedia.org/wiki/Stephen_Eust%C3%A1quio"
    }
  },
  "433667": {
    fifaId: "433667",
    teamCode: "CRO",
    name: "Stani\u0161i\u0107",
    fullName: "Josip Stanisic",
    number: 2,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/c1f59cf4-db22-4b38-af85-ab5692105f95/STANISIC-Josip_433667",
    dateOfBirth: "2000-04-02",
    height: 186,
    socials: {
      instagram: "josip_stanisic",
      wikipedia: "https://pt.wikipedia.org/wiki/Josip_Stani%C5%A1i%C4%87"
    }
  },
  "433668": {
    fifaId: "433668",
    teamCode: "CZE",
    name: "Michal Sadilek",
    fullName: "Michal Sadilek",
    number: 18,
    position: "MF",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/00599f60-d24b-4377-b1c2-03bda4f835be/SADILEK-Michal_433668",
    dateOfBirth: "1999-05-31",
    height: 169,
    socials: {
      instagram: "michalsadilek32",
      wikipedia: "https://pt.wikipedia.org/wiki/Michal_Sad%C3%ADlek"
    }
  },
  "433679": {
    fifaId: "433679",
    teamCode: "ALG",
    name: "Ramiz Zerrouki",
    fullName: "Ramiz Zerrouki",
    number: 6,
    position: "MF",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/48a3b28e-cee7-4c5b-87b9-6344b3977983/ZERROUKI-Ramiz_433679",
    dateOfBirth: "1998-05-26",
    height: 183,
    socials: {
      instagram: "rramizz_",
      wikipedia: "https://en.wikipedia.org/wiki/Ramiz_Zerrouki"
    }
  },
  "433694": {
    fifaId: "433694",
    teamCode: "SCO",
    name: "Nathan Patterson",
    fullName: "Nathan Patterson",
    number: 22,
    position: "DF",
    club: "Hearts",
    pictureUrl: "https://digitalhub.fifa.com/transform/3fc20068-ff61-482e-ae76-b63e24985f42/PATTERSON-Nathan_433694",
    dateOfBirth: "2001-10-16",
    height: 183,
    socials: {
      instagram: "nathan.patterson_",
      wikipedia: "https://en.wikipedia.org/wiki/Nathan_Patterson_(footballer)"
    }
  },
  "433724": {
    fifaId: "433724",
    teamCode: "CPV",
    name: "Willy Semedo",
    fullName: "Willy Semedo",
    number: 17,
    position: "MF",
    club: "Al-Faisaly",
    pictureUrl: "https://digitalhub.fifa.com/transform/37b3a4c5-6899-487c-892a-1d9791945ba3/WILLY-SEMEDO_433724",
    dateOfBirth: "1994-04-27",
    height: 185,
    socials: {
      instagram: "wsemedo7",
      wikipedia: "https://en.wikipedia.org/wiki/Willy_Semedo"
    }
  },
  "433754": {
    fifaId: "433754",
    teamCode: "CZE",
    name: "Adam Hlozek",
    fullName: "Adam Hlozek",
    number: 9,
    position: "FW",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/530c1ea8-c013-4858-bb7d-0b71a763a1a1/HLOZEK-Adam_433754",
    dateOfBirth: "2002-07-25",
    height: 188,
    socials: {
      instagram: "ahlozek",
      wikipedia: "https://pt.wikipedia.org/wiki/Adam_Hlo%C5%BEek"
    }
  },
  "433755": {
    fifaId: "433755",
    teamCode: "CZE",
    name: "David Zima",
    fullName: "David Zima",
    number: 2,
    position: "DF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/945f505c-6f7b-4a43-acc1-5e3fa1bb52b3/ZIMA-David_433755",
    dateOfBirth: "2000-11-08",
    height: 190,
    socials: {
      instagram: "david_zima4",
      wikipedia: "https://en.wikipedia.org/wiki/David_Zima"
    }
  },
  "433787": {
    fifaId: "433787",
    teamCode: "SCO",
    name: "Scott Mctominay",
    fullName: "Scott Mctominay",
    number: 4,
    position: "MF",
    club: "Napoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/483440e3-5bdc-46e2-9b80-77e880b5fd85/McTOMINAY-Scott_433787",
    dateOfBirth: "1996-12-08",
    height: 193,
    socials: {
      instagram: "scottmctominay",
      wikipedia: "https://pt.wikipedia.org/wiki/Scott_McTominay"
    }
  },
  "433795": {
    fifaId: "433795",
    teamCode: "SWE",
    name: "Mattias Svanberg",
    fullName: "Mattias Svanberg",
    number: 19,
    position: "MF",
    club: "Malm\xF6 FF",
    pictureUrl: "https://digitalhub.fifa.com/transform/0d003261-373c-46f2-90c6-34d700c027f6/SVANBERG-Mattias_433795",
    dateOfBirth: "1999-01-05",
    height: 186,
    socials: {
      instagram: "mattiasvanberg",
      wikipedia: "https://en.wikipedia.org/wiki/Mattias_Svanberg"
    }
  },
  "433806": {
    fifaId: "433806",
    teamCode: "SEN",
    name: "Edouard Mendy",
    fullName: "Edouard Mendy",
    number: 16,
    position: "GK",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/9093beeb-51a2-4e1d-b700-73e094c6949c/MENDY-Edouard_433806",
    dateOfBirth: "1992-03-01",
    height: 194,
    socials: {
      instagram: "edou_mendy",
      wikipedia: "https://pt.wikipedia.org/wiki/%C3%89douard_Mendy"
    }
  },
  "433872": {
    fifaId: "433872",
    teamCode: "BRA",
    name: "Raphinha",
    fullName: "Raphinha",
    number: 11,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/b4def0b2-7d6f-4f3a-bcde-600b292096d6/RAPHINHA_433872",
    dateOfBirth: "1996-12-14",
    height: 176,
    socials: {
      instagram: "raphinha",
      wikipedia: "https://pt.wikipedia.org/wiki/Raphinha"
    }
  },
  "434024": {
    fifaId: "434024",
    teamCode: "IRQ",
    name: "Munaf Younus",
    fullName: "Munaf Younus",
    number: 6,
    position: "DF",
    club: "Al-Quwa Al-Jawiya",
    pictureUrl: "https://digitalhub.fifa.com/transform/3e21999a-9c29-4610-a6e7-2798b41cf9fe/MUNAF-YOUNUS_434024",
    dateOfBirth: "1996-11-16",
    height: 184
  },
  "434025": {
    fifaId: "434025",
    teamCode: "IRQ",
    name: "Zaid Tahseen",
    fullName: "Zaid Tahseen",
    number: 4,
    position: "DF",
    club: "Al-Quwa Al-Jawiya",
    pictureUrl: "https://digitalhub.fifa.com/transform/84a4d1c5-8fe9-4d23-bb47-5dddfdf566bf/ZAID-TAHSEEN_434025",
    dateOfBirth: "2001-01-29",
    height: 187,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Zaid_Tahseen"
    }
  },
  "434026": {
    fifaId: "434026",
    teamCode: "IRQ",
    name: "Zidane Iqbal",
    fullName: "Zidane Iqbal",
    number: 14,
    position: "MF",
    club: "Al-Kahraba",
    pictureUrl: "https://digitalhub.fifa.com/transform/d76ebe64-2228-4d03-9c39-fa6332d4d40a/ZIDANE-IQBAL_434026",
    dateOfBirth: "2003-04-27",
    height: 183,
    socials: {
      instagram: "zidaneiqbal",
      wikipedia: "https://pt.wikipedia.org/wiki/Zidane_Iqbal"
    }
  },
  "434029": {
    fifaId: "434029",
    teamCode: "IRQ",
    name: "Ali Yousif",
    fullName: "Ali Yousif",
    number: 13,
    position: "FW",
    club: "Al-Zawraa",
    pictureUrl: "https://digitalhub.fifa.com/transform/e9b9b7b4-162e-40c5-91a3-f573cd6a5d39/ALI-YOUSIF_434029",
    dateOfBirth: "1996-01-19",
    height: 180,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ali_Yousif"
    }
  },
  "436537": {
    fifaId: "436537",
    teamCode: "KSA",
    name: "Musab Aljuwayr",
    fullName: "Musab Aljuwayr",
    number: 7,
    position: "MF",
    club: "Al-Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/c09997bc-1439-46be-a1f4-226d436e9eda/MUSAB-ALJUWAYR_436537",
    dateOfBirth: "2003-06-20",
    height: 175,
    socials: {
      instagram: "m.aljuwayr43"
    }
  },
  "436538": {
    fifaId: "436538",
    teamCode: "KSA",
    name: "Ziyad Aljohani",
    fullName: "Ziyad Aljohani",
    number: 16,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/401feff3-37fd-40a9-90f6-d987eb3a8e40/ZIYAD-ALJOHANI_436538",
    dateOfBirth: "2001-11-11",
    height: 180,
    socials: {
      instagram: "ziyad.m.30"
    }
  },
  "436572": {
    fifaId: "436572",
    teamCode: "COD",
    name: "Arthur Masuaku",
    fullName: "Arthur Masuaku",
    number: 26,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c521f94-2538-45a0-a77e-4a529b9dfc8f/MASUAKU-Arthur_436572",
    dateOfBirth: "1993-11-07",
    height: 179,
    socials: {
      instagram: "masuaku26",
      wikipedia: "https://en.wikipedia.org/wiki/Arthur_Masuaku"
    }
  },
  "436599": {
    fifaId: "436599",
    teamCode: "USA",
    name: "Miles Robinson",
    fullName: "Miles Robinson",
    number: 12,
    position: "DF",
    club: "New York City FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/30b49573-5890-4dc2-8e78-a8ab7d00d43e/ROBINSON-Miles_436599",
    dateOfBirth: "1997-03-14",
    height: 187,
    socials: {
      instagram: "_milesrobinson_",
      wikipedia: "https://en.wikipedia.org/wiki/Miles_Robinson_(soccer)"
    }
  },
  "436612": {
    fifaId: "436612",
    teamCode: "NED",
    name: "Dumfries",
    fullName: "Denzel Dumfries",
    number: 22,
    position: "DF",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/f2a2746b-7691-40c4-a052-60db3219a856/DUMFRIES-Denzel_436612",
    dateOfBirth: "1996-04-18",
    height: 188,
    socials: {
      instagram: "ddumfries2",
      wikipedia: "https://pt.wikipedia.org/wiki/Denzel_Dumfries"
    }
  },
  "436628": {
    fifaId: "436628",
    teamCode: "IRQ",
    name: "Ali Alhamadi",
    fullName: "Ali Alhamadi",
    number: 9,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/00b5271a-9033-43ab-9073-7b2ec9e4426e/ALI-ALHAMADI_436628",
    dateOfBirth: "2002-03-01",
    height: 187
  },
  "436743": {
    fifaId: "436743",
    teamCode: "BIH",
    name: "Ermedin Demirovic",
    fullName: "Ermedin Demirovic",
    number: 10,
    position: "FW",
    club: "Sassuolo",
    pictureUrl: "https://digitalhub.fifa.com/transform/b9e9f187-0936-4aba-9c70-2a4bcf2281e0/DEMIROVIC-Ermedin_436743",
    dateOfBirth: "1998-03-25",
    height: 185,
    socials: {
      instagram: "e.demirovic29",
      wikipedia: "https://en.wikipedia.org/wiki/Ermedin_Demirovi%C4%87"
    }
  },
  "436863": {
    fifaId: "436863",
    teamCode: "IRQ",
    name: "Frans Putros",
    fullName: "Frans Putros",
    number: 26,
    position: "DF",
    club: "Al-Minaa",
    pictureUrl: "https://digitalhub.fifa.com/transform/e6406961-d495-4d2f-8851-539b32ab43a9/FRANS-PUTROS_436863",
    dateOfBirth: "1993-07-14",
    height: 182,
    socials: {
      instagram: "fransputros",
      wikipedia: "https://en.wikipedia.org/wiki/Frans_Putros"
    }
  },
  "439538": {
    fifaId: "439538",
    teamCode: "URU",
    name: "Piquerez",
    fullName: "Joaquin Piquerez",
    number: 22,
    position: "MF",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/327d3db2-1e08-4b63-8026-90c136c51612/PIQUEREZ-Joaquin_439538",
    dateOfBirth: "1998-08-24",
    height: 185,
    socials: {
      instagram: "joacopiquerez",
      wikipedia: "https://pt.wikipedia.org/wiki/Joaqu%C3%ADn_Piquerez"
    }
  },
  "439641": {
    fifaId: "439641",
    teamCode: "ENG",
    name: "James",
    fullName: "Reece James",
    number: 24,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/1ffcc3c3-fdf3-4b61-9ac5-299213771a62/JAMES-Reece_439641",
    dateOfBirth: "1999-12-08",
    height: 180,
    socials: {
      instagram: "reece",
      wikipedia: "https://pt.wikipedia.org/wiki/Reece_James"
    }
  },
  "439956": {
    fifaId: "439956",
    teamCode: "URU",
    name: "Facundo Pellistri",
    fullName: "Facundo Pellistri",
    number: 11,
    position: "FW",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/51b7eeb6-cac1-48cd-9ed3-4a18b34c5d90/PELLISTRI-Facundo_439956",
    dateOfBirth: "2001-12-20",
    height: 174,
    socials: {
      instagram: "facupellistri",
      wikipedia: "https://pt.wikipedia.org/wiki/Facundo_Pellistri"
    }
  },
  "440748": {
    fifaId: "440748",
    teamCode: "NZL",
    name: "Francis De Vries",
    fullName: "Francis De Vries",
    number: 3,
    position: "DF",
    club: "Norwich City",
    pictureUrl: "https://digitalhub.fifa.com/transform/0f1a06e9-76d0-480c-950a-667f11d41171/DE-VRIES-Francis_440748",
    dateOfBirth: "1994-11-28",
    height: 181,
    socials: {
      instagram: "francisdevries12",
      wikipedia: "https://en.wikipedia.org/wiki/Francis_de_Vries"
    }
  },
  "441065": {
    fifaId: "441065",
    teamCode: "AUT",
    name: "Patrick Pentz",
    fullName: "Patrick Pentz",
    number: 13,
    position: "GK",
    club: "FK Austria Wien",
    pictureUrl: "https://digitalhub.fifa.com/transform/fee95866-9f5e-4663-b49f-3db6a86f0e80/PENTZ-Patrick_441065",
    dateOfBirth: "1997-01-02",
    height: 183,
    socials: {
      instagram: "patrickpentz",
      wikipedia: "https://en.wikipedia.org/wiki/Patrick_Pentz"
    }
  },
  "441067": {
    fifaId: "441067",
    teamCode: "AUT",
    name: "Stefan Posch",
    fullName: "Stefan Posch",
    number: 5,
    position: "DF",
    club: "TSG 1899 Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/c888b84b-0ddd-496f-b621-f281e4e54911/POSCH-Stefan_441067",
    dateOfBirth: "1997-05-14",
    height: 188,
    socials: {
      instagram: "stefanposxx",
      wikipedia: "https://en.wikipedia.org/wiki/Stefan_Posch"
    }
  },
  "441068": {
    fifaId: "441068",
    teamCode: "AUT",
    name: "Dejan Ljubicic",
    fullName: "Dejan Ljubicic",
    number: 19,
    position: "MF",
    club: "Schalke 04",
    pictureUrl: "https://digitalhub.fifa.com/transform/a9966145-1cd8-429d-99a2-ccb9cda89e87/LJUBICIC-Dejan_441068",
    dateOfBirth: "1997-10-08",
    height: 187,
    socials: {
      instagram: "dejanljubicic",
      wikipedia: "https://en.wikipedia.org/wiki/Dejan_Ljubi%C4%8Di%C4%87"
    }
  },
  "441088": {
    fifaId: "441088",
    teamCode: "AUT",
    name: "Nicolas Seiwald",
    fullName: "Nicolas Seiwald",
    number: 6,
    position: "MF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/fe3dce4a-3a64-48bd-bfd9-63614aa55336/SEIWALD-Nicolas_441088",
    dateOfBirth: "2001-05-04",
    height: 179,
    socials: {
      instagram: "nicolasseiwald",
      wikipedia: "https://en.wikipedia.org/wiki/Nicolas_Seiwald"
    }
  },
  "441132": {
    fifaId: "441132",
    teamCode: "SWE",
    name: "Carl Starfelt",
    fullName: "Carl Starfelt",
    number: 15,
    position: "DF",
    club: "Midtjylland",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c4b343c-446c-4d27-ab62-bb85ee559985/STARFELT-Carl_441132",
    dateOfBirth: "1995-06-01",
    height: 185,
    socials: {
      instagram: "lagerbielken",
      wikipedia: "https://pt.wikipedia.org/wiki/Carl_Starfelt"
    }
  },
  "441135": {
    fifaId: "441135",
    teamCode: "SWE",
    name: "Jesper Karlstrom",
    fullName: "Jesper Karlstrom",
    number: 16,
    position: "MF",
    club: "Sassuolo",
    pictureUrl: "https://digitalhub.fifa.com/transform/0ed50024-cb6d-4fa5-bc7c-ba8a9afa7fd3/KARLSTROM-Jesper_441135",
    dateOfBirth: "1995-06-21",
    height: 182,
    socials: {
      instagram: "jesperkarlstrom",
      wikipedia: "https://pt.wikipedia.org/wiki/Jesper_Karlstr%C3%B6m"
    }
  },
  "441137": {
    fifaId: "441137",
    teamCode: "SWE",
    name: "Anthony Elanga",
    fullName: "Anthony Elanga",
    number: 11,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/38e8d10e-aa56-4837-a589-35bc4dcc23a3/ELANGA-Anthony_441137",
    dateOfBirth: "2002-04-27",
    height: 178,
    socials: {
      instagram: "anthonyelanga",
      wikipedia: "https://pt.wikipedia.org/wiki/Anthony_Elanga"
    }
  },
  "441146": {
    fifaId: "441146",
    teamCode: "POR",
    name: "G. In\xE1cio",
    fullName: "Gon\xE7alo In\xE1cio",
    number: 14,
    position: "DF",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/636fe280-77cd-4db8-8c43-e499e1489e31/GONCALO-INACIO_441146",
    dateOfBirth: "2001-08-25",
    height: 185,
    socials: {
      instagram: "goncaloinacio_25",
      wikipedia: "https://pt.wikipedia.org/wiki/Gon%C3%A7alo_In%C3%A1cio"
    }
  },
  "441148": {
    fifaId: "441148",
    teamCode: "POR",
    name: "M. Nunes",
    fullName: "Matheus Nunes",
    number: 6,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/49ae9c75-e5f8-404a-8576-81e52d4c8338/MATHEUS-NUNES_441148",
    dateOfBirth: "1998-08-27",
    height: 183,
    socials: {
      instagram: "matheusnunes73",
      wikipedia: "https://pt.wikipedia.org/wiki/Matheus_Nunes"
    }
  },
  "441149": {
    fifaId: "441149",
    teamCode: "POR",
    name: "Vitinha",
    fullName: "Vitinha",
    number: 23,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d21116d-608f-409b-932b-71c1ee1a043c/VITINHA_441149",
    dateOfBirth: "2000-02-13",
    height: 170,
    socials: {
      instagram: "vitinha",
      wikipedia: "https://pt.wikipedia.org/wiki/Vitinha"
    }
  },
  "441162": {
    fifaId: "441162",
    teamCode: "CZE",
    name: "Jindrich Stanek",
    fullName: "Jindrich Stanek",
    number: 16,
    position: "GK",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/9351d9a7-4be7-4c59-8e0e-3f5fbca8ac7d/STANEK-Jindrich_441162",
    dateOfBirth: "1996-04-27",
    height: 192,
    socials: {
      instagram: "stanek.js36",
      wikipedia: "https://en.wikipedia.org/wiki/Jind%C5%99ich_Stan%C4%9Bk"
    }
  },
  "441166": {
    fifaId: "441166",
    teamCode: "CZE",
    name: "Jaroslav Zeleny",
    fullName: "Jaroslav Zeleny",
    number: 20,
    position: "DF",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/33dbf631-0d45-4f04-9feb-bf0c76ad9f8e/ZELENY-Jaroslav_441166",
    dateOfBirth: "1992-08-20",
    height: 190,
    socials: {
      instagram: "jarinzeleny",
      wikipedia: "https://en.wikipedia.org/wiki/Jaroslav_Zelen%C3%BD"
    }
  },
  "441167": {
    fifaId: "441167",
    teamCode: "CZE",
    name: "Tomas Holes",
    fullName: "Tomas Holes",
    number: 3,
    position: "DF",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/25d4147e-8cc2-4262-bba5-3e47680a3f23/HOLES-Tomas_441167",
    dateOfBirth: "1993-03-31",
    height: 180,
    socials: {
      instagram: "tomholes",
      wikipedia: "https://pt.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Hole%C5%A1"
    }
  },
  "441170": {
    fifaId: "441170",
    teamCode: "CZE",
    name: "Ladislav Krejci",
    fullName: "Ladislav Krejci",
    number: 7,
    position: "DF",
    club: "Girona",
    pictureUrl: "https://digitalhub.fifa.com/transform/04ca9e4e-8ab3-458e-a689-2ac49094fb23/KREJCI-Ladislav_441170",
    dateOfBirth: "1999-04-20",
    height: 191,
    socials: {
      instagram: "lkrejci_",
      wikipedia: "https://pt.wikipedia.org/wiki/Ladislav_Krej%C4%8D%C3%AD_(1999)"
    }
  },
  "441171": {
    fifaId: "441171",
    teamCode: "CZE",
    name: "Jan Kuchta",
    fullName: "Jan Kuchta",
    number: 11,
    position: "FW",
    club: "PSV",
    pictureUrl: "https://digitalhub.fifa.com/transform/e5ab58c0-de70-4e60-afdd-0cacec12decb/KUCHTA-Jan_441171",
    dateOfBirth: "1997-01-08",
    height: 185,
    socials: {
      instagram: "kuchti_cc",
      wikipedia: "https://en.wikipedia.org/wiki/Jan_Kuchta"
    }
  },
  "441179": {
    fifaId: "441179",
    teamCode: "TUR",
    name: "Merih Demiral",
    fullName: "Merih Demiral",
    number: 3,
    position: "DF",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/905e3e12-72e9-440d-96f5-0b3a48aebe92/DEMIRAL-Merih_441179",
    dateOfBirth: "1998-03-05",
    height: 190,
    socials: {
      instagram: "merihdemiral",
      wikipedia: "https://pt.wikipedia.org/wiki/Merih_Demiral"
    }
  },
  "441180": {
    fifaId: "441180",
    teamCode: "TUR",
    name: "Altay Bayindir",
    fullName: "Altay Bayindir",
    number: 12,
    position: "GK",
    club: "Trabzonspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/f8c86015-cce5-4965-9d7c-183ef908079a/BAYINDIR-Altay_441180",
    dateOfBirth: "1998-04-14",
    height: 198,
    socials: {
      instagram: "altaybayindir",
      wikipedia: "https://pt.wikipedia.org/wiki/Altay_Bay%C4%B1nd%C4%B1r"
    }
  },
  "441181": {
    fifaId: "441181",
    teamCode: "TUR",
    name: "Ugurcan Cakir",
    fullName: "Ugurcan Cakir",
    number: 23,
    position: "GK",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/6cedaf47-2a99-4e31-bb0d-46ce78df26a6/CAKIR-Ugurcan_441181",
    dateOfBirth: "1996-04-05",
    height: 191,
    socials: {
      instagram: "cakirugurcan",
      wikipedia: "https://en.wikipedia.org/wiki/U%C4%9Furcan_%C3%87ak%C4%B1r"
    }
  },
  "441188": {
    fifaId: "441188",
    teamCode: "TUR",
    name: "Akt\xFCrko\u011Flu",
    fullName: "Kerem Akturkoglu",
    number: 7,
    position: "FW",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/9cccf7c0-ebfc-4b65-8587-74742f5a9992/AKTURKOGLU-Kerem_441188",
    dateOfBirth: "1998-10-21",
    height: 172,
    socials: {
      instagram: "keremakturkoglu",
      wikipedia: "https://en.wikipedia.org/wiki/Kerem_Akt%C3%BCrko%C4%9Flu"
    }
  },
  "441234": {
    fifaId: "441234",
    teamCode: "PAR",
    name: "Julio Enciso",
    fullName: "Julio Enciso",
    number: 19,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/aa8ef158-6636-46a9-a6fb-185a2f92ad95/ENCISO-Julio_441234",
    dateOfBirth: "2004-01-23",
    height: 168,
    socials: {
      instagram: "julioenciso.33",
      wikipedia: "https://pt.wikipedia.org/wiki/Julio_Enciso"
    }
  },
  "441236": {
    fifaId: "441236",
    teamCode: "ECU",
    name: "Hernan Galindez",
    fullName: "Hernan Galindez",
    number: 1,
    position: "GK",
    club: "Huracan",
    pictureUrl: "https://digitalhub.fifa.com/transform/679fc90e-2f98-4494-a4dd-f26442fae6d3/GALINDEZ-Hernan_441236",
    dateOfBirth: "1987-03-30",
    height: 189,
    socials: {
      instagram: "hernangalindez",
      wikipedia: "https://pt.wikipedia.org/wiki/Hern%C3%A1n_Gal%C3%ADndez"
    }
  },
  "441251": {
    fifaId: "441251",
    teamCode: "USA",
    name: "Antonee Robinson",
    fullName: "Antonee Robinson",
    number: 5,
    position: "DF",
    club: "Fulham",
    pictureUrl: "https://digitalhub.fifa.com/transform/62363054-d9e0-4926-9404-90b975d56647/ROBINSON-Antonee_441251",
    dateOfBirth: "1997-08-08",
    height: 183,
    socials: {
      instagram: "antonee_jedi",
      wikipedia: "https://pt.wikipedia.org/wiki/Antonee_Robinson"
    }
  },
  "441252": {
    fifaId: "441252",
    teamCode: "CAN",
    name: "Alistair Johnston",
    fullName: "Alistair Johnston",
    number: 2,
    position: "DF",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/bd760593-4ed3-405e-b497-f508dbc8bbdf/JOHNSTON-Alistair_441252",
    dateOfBirth: "1998-10-08",
    height: 180,
    socials: {
      instagram: "alistairjohnston",
      wikipedia: "https://en.wikipedia.org/wiki/Alistair_Johnston"
    }
  },
  "441255": {
    fifaId: "441255",
    teamCode: "CAN",
    name: "Dayne St. Clair",
    fullName: "Dayne St. Clair",
    number: 1,
    position: "GK",
    club: "LAFC",
    pictureUrl: "https://digitalhub.fifa.com/transform/0583604e-3974-45f0-ac6c-cdf0deaabe5c/ST-CLAIR-Dayne_441255",
    dateOfBirth: "1997-05-09",
    height: 191,
    socials: {
      instagram: "saintc17",
      wikipedia: "https://en.wikipedia.org/wiki/Dayne_St._Clair"
    }
  },
  "441257": {
    fifaId: "441257",
    teamCode: "CAN",
    name: "Jonathan David",
    fullName: "Jonathan David",
    number: 10,
    position: "FW",
    club: "CF Montr\xE9al",
    pictureUrl: "https://digitalhub.fifa.com/transform/97ad628a-b97d-4657-ac41-f2a667c534e6/DAVID-Jonathan_441257",
    dateOfBirth: "2000-01-14",
    height: 175,
    socials: {
      instagram: "jodavid",
      wikipedia: "https://pt.wikipedia.org/wiki/Jonathan_David"
    }
  },
  "441258": {
    fifaId: "441258",
    teamCode: "CAN",
    name: "Ismael Kone",
    fullName: "Ismael Kone",
    number: 8,
    position: "MF",
    club: "Vancouver Whitecaps",
    pictureUrl: "https://digitalhub.fifa.com/transform/51344b42-77de-4109-a167-7723dc1d4dd2/KONE-Ismael_441258",
    dateOfBirth: "2002-06-16",
    height: 188,
    socials: {
      instagram: "hollywood.ik",
      wikipedia: "https://en.wikipedia.org/wiki/Isma%C3%ABl_Kon%C3%A9"
    }
  },
  "441259": {
    fifaId: "441259",
    teamCode: "CAN",
    name: "Liam Millar",
    fullName: "Liam Millar",
    number: 11,
    position: "MF",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/3f5479a0-7d7d-408f-b9c8-b0185e1d8ae4/MILLAR-Liam_441259",
    dateOfBirth: "1999-09-27",
    height: 176,
    socials: {
      instagram: "liammillar11",
      wikipedia: "https://pt.wikipedia.org/wiki/Liam_Millar"
    }
  },
  "441260": {
    fifaId: "441260",
    teamCode: "MEX",
    name: "Carlos Acevedo",
    fullName: "Carlos Acevedo",
    number: 12,
    position: "GK",
    club: "Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/b84beeec-be0c-493f-85fd-362bf0ead5c6/ACEVEDO-Carlos_441260",
    dateOfBirth: "1996-04-19",
    height: 185,
    socials: {
      instagram: "carlos_al1",
      wikipedia: "https://en.wikipedia.org/wiki/Carlos_Acevedo"
    }
  },
  "441261": {
    fifaId: "441261",
    teamCode: "MEX",
    name: "Israel Reyes",
    fullName: "Israel Reyes",
    number: 15,
    position: "DF",
    club: "Tigres",
    pictureUrl: "https://digitalhub.fifa.com/transform/1e7c7c32-135c-46ba-9aff-429bfb1478aa/REYES-Israel_441261",
    dateOfBirth: "2000-05-23",
    height: 181,
    socials: {
      instagram: "israelreyesr58",
      wikipedia: "https://pt.wikipedia.org/wiki/Israel_Reyes"
    }
  },
  "441307": {
    fifaId: "441307",
    teamCode: "MAR",
    name: "Azzedine Ounahi",
    fullName: "Azzedine Ounahi",
    number: 8,
    position: "MF",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/f823c3da-d540-436c-9b56-bfccdc4b51bc/OUNAHI-Azzedine_441307",
    dateOfBirth: "2000-04-19",
    height: 182,
    socials: {
      instagram: "azzedine_ounahi",
      wikipedia: "https://pt.wikipedia.org/wiki/Azzedine_Ounahi"
    }
  },
  "441313": {
    fifaId: "441313",
    teamCode: "COD",
    name: "Lionel Mpasi",
    fullName: "Lionel Mpasi",
    number: 1,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/93a9ca9a-b0db-41bb-80e6-878eb46f0c84/MPASI-Lionel_441313",
    dateOfBirth: "1994-08-01",
    height: 182,
    socials: {
      instagram: "mpasil16",
      wikipedia: "https://pt.wikipedia.org/wiki/Lionel_Mpasi"
    }
  },
  "441316": {
    fifaId: "441316",
    teamCode: "COD",
    name: "Yoane Wissa",
    fullName: "Yoane Wissa",
    number: 20,
    position: "FW",
    club: "Brentford",
    pictureUrl: "https://digitalhub.fifa.com/transform/df278077-1306-4bc3-99d3-0842d69fdec3/WISSA-Yoane_441316",
    dateOfBirth: "1996-09-03",
    height: 176,
    socials: {
      instagram: "yowissa",
      wikipedia: "https://pt.wikipedia.org/wiki/Yoane_Wissa"
    }
  },
  "441317": {
    fifaId: "441317",
    teamCode: "COD",
    name: "Theo Bongonda",
    fullName: "Theo Bongonda",
    number: 10,
    position: "MF",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/33939502-486c-4dce-a21a-c5c86b0e08f0/BONGONDA-Theo_441317",
    dateOfBirth: "1995-11-20",
    height: 176,
    socials: {
      instagram: "theo_bongonda",
      wikipedia: "https://pt.wikipedia.org/wiki/Theo_Bongonda"
    }
  },
  "441350": {
    fifaId: "441350",
    teamCode: "ALG",
    name: "Hicham Boudaoui",
    fullName: "Hicham Boudaoui",
    number: 14,
    position: "MF",
    club: "Brest",
    pictureUrl: "https://digitalhub.fifa.com/transform/76a28e94-3869-40e2-a82e-9fb973181eb6/BOUDAOUI-Hicham_441350",
    dateOfBirth: "1999-09-23",
    height: 175,
    socials: {
      instagram: "hicham_boudaoui",
      wikipedia: "https://en.wikipedia.org/wiki/Hicham_Boudaoui"
    }
  },
  "441362": {
    fifaId: "441362",
    teamCode: "TUN",
    name: "Mortadha Ben Ouanes",
    fullName: "Mortadha Ben Ouanes",
    number: 12,
    position: "DF",
    club: "\xC9toile du Sahel",
    pictureUrl: "https://digitalhub.fifa.com/transform/b9afdecd-b04d-4224-be9b-50643fc77299/BEN-OUANES-Mortadha_441362",
    dateOfBirth: "1994-07-02",
    height: 188,
    socials: {
      instagram: "mortadha_benouanes",
      wikipedia: "https://en.wikipedia.org/wiki/Mortadha_Ben_Ouanes"
    }
  },
  "441422": {
    fifaId: "441422",
    teamCode: "ARG",
    name: "Nico Paz",
    fullName: "Nico Paz",
    number: 18,
    position: "FW",
    club: "Como 1907",
    pictureUrl: "https://digitalhub.fifa.com/transform/db59cb7d-9b9e-4cdc-be14-07e16631dbd8/PAZ-Nico_441422",
    dateOfBirth: "2004-09-08",
    height: 185,
    socials: {
      instagram: "nicopaz1o",
      wikipedia: "https://pt.wikipedia.org/wiki/Nico_Paz"
    }
  },
  "441623": {
    fifaId: "441623",
    teamCode: "URU",
    name: "Manuel Ugarte",
    fullName: "Manuel Ugarte",
    number: 5,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/4ff94bd7-9c21-4338-be92-bad080e8d541/UGARTE-Manuel_441623",
    dateOfBirth: "2001-04-11",
    height: 182,
    socials: {
      instagram: "ugartemanu",
      wikipedia: "https://pt.wikipedia.org/wiki/Manuel_Ugarte"
    }
  },
  "442428": {
    fifaId: "442428",
    teamCode: "SCO",
    name: "Aaron Hickey",
    fullName: "Aaron Hickey",
    number: 2,
    position: "DF",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/36ab73b9-b07c-48d7-a2c2-da34b149b0d2/HICKEY-Aaron_442428",
    dateOfBirth: "2002-06-10",
    height: 185,
    socials: {
      instagram: "aaronhickey51",
      wikipedia: "https://en.wikipedia.org/wiki/Aaron_Hickey"
    }
  },
  "442429": {
    fifaId: "442429",
    teamCode: "SCO",
    name: "Liam Kelly",
    fullName: "Liam Kelly",
    number: 12,
    position: "GK",
    club: "Hearts",
    pictureUrl: "https://digitalhub.fifa.com/transform/c1b8aa4f-e753-4748-915b-33661cc33845/KELLY-Liam_442429",
    dateOfBirth: "1996-01-23",
    height: 184,
    socials: {
      instagram: "liamkelly08",
      wikipedia: "https://en.wikipedia.org/wiki/Liam_Kelly_(footballer,_born_1996)"
    }
  },
  "442430": {
    fifaId: "442430",
    teamCode: "SCO",
    name: "John Souttar",
    fullName: "John Souttar",
    number: 15,
    position: "DF",
    club: "Las Palmas",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b905694-87c7-4148-be4b-802e4dbcc7ba/SOUTTAR-John_442430",
    dateOfBirth: "1996-09-25",
    height: 186,
    socials: {
      instagram: "johnsouttar44",
      wikipedia: "https://en.wikipedia.org/wiki/John_Souttar"
    }
  },
  "442431": {
    fifaId: "442431",
    teamCode: "SCO",
    name: "Scott Mckenna",
    fullName: "Scott Mckenna",
    number: 26,
    position: "DF",
    club: "St Johnstone",
    pictureUrl: "https://digitalhub.fifa.com/transform/073ebe12-5ba9-4de4-8729-2a0b0e942b43/McKENNA-Scott_442431",
    dateOfBirth: "1996-11-12",
    height: 189,
    socials: {
      instagram: "scottmckenna19",
      wikipedia: "https://en.wikipedia.org/wiki/Scott_McKenna"
    }
  },
  "442433": {
    fifaId: "442433",
    teamCode: "SCO",
    name: "Ross Stewart",
    fullName: "Ross Stewart",
    number: 14,
    position: "FW",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/c0ef417d-f1aa-48e4-b9c4-ddb006ec53f5/STEWART-Ross_442433",
    dateOfBirth: "1996-07-11",
    height: 188,
    socials: {
      instagram: "ross_stewart_96",
      wikipedia: "https://en.wikipedia.org/wiki/Ross_Stewart_(footballer,_born_1996)"
    }
  },
  "442434": {
    fifaId: "442434",
    teamCode: "SCO",
    name: "Lewis Ferguson",
    fullName: "Lewis Ferguson",
    number: 19,
    position: "MF",
    club: "Brentford",
    pictureUrl: "https://digitalhub.fifa.com/transform/d5d3101d-c2cb-4a29-bccf-914370459cfa/FERGUSON-Lewis_442434",
    dateOfBirth: "1999-08-24",
    height: 181,
    socials: {
      instagram: "lewisferguson6",
      wikipedia: "https://en.wikipedia.org/wiki/Lewis_Ferguson"
    }
  },
  "447853": {
    fifaId: "447853",
    teamCode: "ESP",
    name: "Raya",
    fullName: "David Raya",
    number: 1,
    position: "GK",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a0b3279-e7c5-44c9-8f13-897d085e83bf/RAYA-David_447853",
    dateOfBirth: "1995-09-15",
    height: 186,
    socials: {
      instagram: "d.raya1",
      wikipedia: "https://pt.wikipedia.org/wiki/David_Raya"
    }
  },
  "447855": {
    fifaId: "447855",
    teamCode: "ESP",
    name: "Williams Jr.",
    fullName: "Nico Williams",
    number: 17,
    position: "FW",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/1792665e-37cb-421d-969b-e6a3edbd8d76/WILLIAMS-Nico_447855",
    dateOfBirth: "2002-07-12",
    height: 181,
    socials: {
      instagram: "nicolas_williams9",
      wikipedia: "https://pt.wikipedia.org/wiki/Nico_Williams"
    }
  },
  "447860": {
    fifaId: "447860",
    teamCode: "ESP",
    name: "\xC1lex B.",
    fullName: "Alex Baena",
    number: 15,
    position: "MF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/19c2a085-e986-4c5b-8af7-aa98f7adc36e/BAENA-Alex_447860",
    dateOfBirth: "2001-07-20",
    height: 172,
    socials: {
      instagram: "alexbbaena",
      wikipedia: "https://pt.wikipedia.org/wiki/%C3%81lex_Baena"
    }
  },
  "447864": {
    fifaId: "447864",
    teamCode: "ESP",
    name: "B. Iglesias",
    fullName: "Borja Iglesias",
    number: 26,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/e90fda84-dae1-44e9-b030-9ce63b11b2d4/IGLESIAS-Borja_447864",
    dateOfBirth: "1993-01-17",
    height: 187,
    socials: {
      instagram: "borjaiglesias9",
      wikipedia: "https://pt.wikipedia.org/wiki/Borja_Iglesias"
    }
  },
  "447866": {
    fifaId: "447866",
    teamCode: "ESP",
    name: "Gavi",
    fullName: "Gavi",
    number: 9,
    position: "MF",
    club: "Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/4a8278cb-43c6-4a1a-8aa8-896c67daf977/GAVI_447866",
    dateOfBirth: "2004-08-05",
    height: 173,
    socials: {
      instagram: "pablogavi",
      wikipedia: "https://pt.wikipedia.org/wiki/Gavi_(futebolista)"
    }
  },
  "447991": {
    fifaId: "447991",
    teamCode: "PAR",
    name: "G. Olveira",
    fullName: "Gaston Olveira",
    number: 22,
    position: "GK",
    club: "Sol de Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/732355e7-ab77-473e-b0eb-25ac3fcdaac2/OLVEIRA-Gaston_447991",
    dateOfBirth: "1993-04-21",
    height: 191,
    socials: {
      instagram: "gastonolveira1",
      wikipedia: "https://en.wikipedia.org/wiki/Gast%C3%B3n_Olveira"
    }
  },
  "448014": {
    fifaId: "448014",
    teamCode: "AUS",
    name: "Circati",
    fullName: "Alessandro Circati",
    number: 3,
    position: "DF",
    club: "Hearts",
    pictureUrl: "https://digitalhub.fifa.com/transform/0bbf6585-1c6b-4416-8a3f-31a1d8d1625b/CIRCATI-Alessandro_448014",
    dateOfBirth: "2003-10-10",
    height: 191,
    socials: {
      instagram: "alessandrocircati",
      wikipedia: "https://en.wikipedia.org/wiki/Alessandro_Circati"
    }
  },
  "448015": {
    fifaId: "448015",
    teamCode: "AUS",
    name: "Volpato",
    fullName: "Cristian Volpato",
    number: 20,
    position: "FW",
    club: "Colorado Rapids",
    pictureUrl: "https://digitalhub.fifa.com/transform/e455ae41-95f0-454b-bd12-abdaffa68b7d/VOLPATO-Cristian_448015",
    dateOfBirth: "2003-11-15",
    height: 187,
    socials: {
      instagram: "cristianvolpato",
      wikipedia: "https://en.wikipedia.org/wiki/Cristian_Volpato"
    }
  },
  "448051": {
    fifaId: "448051",
    teamCode: "MEX",
    name: "L.Chavez",
    fullName: "Luis Chavez",
    number: 24,
    position: "MF",
    club: "D\xEDnamo Moscou",
    pictureUrl: "https://digitalhub.fifa.com/transform/a09b97d9-6b02-45d4-aae8-b8ed274e5634/CHAVEZ-Luis_448051",
    dateOfBirth: "1996-01-15",
    height: 178,
    socials: {
      instagram: "lc24",
      wikipedia: "https://pt.wikipedia.org/wiki/Luis_Ch%C3%A1vez"
    }
  },
  "448081": {
    fifaId: "448081",
    teamCode: "POR",
    name: "G. Ramos",
    fullName: "Gon\xE7alo Ramos",
    number: 9,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/040f6a55-0f54-430e-a03b-bb994ee40921/GONCALO-RAMOS_448081",
    dateOfBirth: "2001-06-20",
    height: 185,
    socials: {
      instagram: "goncaloramos88",
      wikipedia: "https://pt.wikipedia.org/wiki/Gon%C3%A7alo_Ramos"
    }
  },
  "448092": {
    fifaId: "448092",
    teamCode: "POR",
    name: "Rui Silva",
    fullName: "Rui Silva",
    number: 22,
    position: "GK",
    club: "Real Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/11360803-25b9-4af9-b4a1-5916e0cd03cb/RUI-SILVA_448092",
    dateOfBirth: "1994-02-07",
    height: 191,
    socials: {
      instagram: "ruisilva_1",
      wikipedia: "https://pt.wikipedia.org/wiki/Rui_Silva_(futebolista)"
    }
  },
  "448103": {
    fifaId: "448103",
    teamCode: "SUI",
    name: "Rieder",
    fullName: "Fabian Rieder",
    number: 22,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/7e5b9fb5-dfcf-47e7-b185-ebd6d915e0be/RIEDER-Fabian_448103",
    dateOfBirth: "2002-02-16",
    height: 181,
    socials: {
      instagram: "fabianrieder32",
      wikipedia: "https://pt.wikipedia.org/wiki/Fabian_Rieder"
    }
  },
  "448104": {
    fifaId: "448104",
    teamCode: "SUI",
    name: "Itten",
    fullName: "Cedric Itten",
    number: 26,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/b9cc3593-aa7e-4f6f-b22b-2cdeae513a1e/ITTEN-Cedric_448104",
    dateOfBirth: "1996-12-27",
    height: 190,
    socials: {
      instagram: "cedricitten_13",
      wikipedia: "https://en.wikipedia.org/wiki/Cedric_Itten"
    }
  },
  "448107": {
    fifaId: "448107",
    teamCode: "SUI",
    name: "Kobel",
    fullName: "Gregor Kobel",
    number: 1,
    position: "GK",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/8c199208-00cd-46ca-877b-f0fd4fb08e31/KOBEL-Gregor_448107",
    dateOfBirth: "1997-12-06",
    height: 196,
    socials: {
      instagram: "gregorkobel",
      wikipedia: "https://pt.wikipedia.org/wiki/Gregor_Kobel"
    }
  },
  "448112": {
    fifaId: "448112",
    teamCode: "SUI",
    name: "Amdouni",
    fullName: "Zeki Amdouni",
    number: 23,
    position: "FW",
    club: "S.L. Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/64a9489f-28d0-40ca-9592-3cda9cb7cac5/AMDOUNI-Zeki_448112",
    dateOfBirth: "2000-12-04",
    height: 183,
    socials: {
      instagram: "zekiamdouni",
      wikipedia: "https://en.wikipedia.org/wiki/Zeki_Amdouni"
    }
  },
  "448114": {
    fifaId: "448114",
    teamCode: "SUI",
    name: "Ndoye",
    fullName: "Dan Ndoye",
    number: 11,
    position: "FW",
    club: "OGC Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/b536dbbe-88a2-4caf-97c0-6baac25c43fe/NDOYE-Dan_448114",
    socials: {
      instagram: "dandan_ndoye",
      wikipedia: "https://pt.wikipedia.org/wiki/Dan_Ndoye"
    },
    dateOfBirth: "2000-10-25",
    height: 184
  },
  "448120": {
    fifaId: "448120",
    teamCode: "SUI",
    name: "Jashari",
    fullName: "Ardon Jashari",
    number: 14,
    position: "MF",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/9e9fc9ed-5b8e-4c1e-a4e3-c29201d34dae/JASHARI-Ardon_448120",
    dateOfBirth: "2002-07-30",
    height: 181,
    socials: {
      instagram: "ardonjashari",
      wikipedia: "https://en.wikipedia.org/wiki/Ardon_Jashari"
    }
  },
  "448124": {
    fifaId: "448124",
    teamCode: "SUI",
    name: "Fassnacht",
    fullName: "Christian Fassnacht",
    number: 16,
    position: "FW",
    club: "BSC Young Boys",
    pictureUrl: "https://digitalhub.fifa.com/transform/7ece88c1-0971-4298-a4f1-00547bf2c889/FASSNACHT-Christian_448124",
    dateOfBirth: "1993-11-11",
    height: 185,
    socials: {
      instagram: "fassnacht16",
      wikipedia: "https://en.wikipedia.org/wiki/Christian_Fassnacht"
    }
  },
  "448127": {
    fifaId: "448127",
    teamCode: "SUI",
    name: "Okafor",
    fullName: "Noah Okafor",
    number: 19,
    position: "FW",
    club: "FC Basel",
    pictureUrl: "https://digitalhub.fifa.com/transform/dd8abcd7-7775-4f67-9e25-eaa6e7cb2b97/OKAFOR-Noah_448127",
    socials: {
      instagram: "noah.okafor",
      wikipedia: "https://pt.wikipedia.org/wiki/Noah_Okafor"
    },
    dateOfBirth: "2000-05-24",
    height: 185
  },
  "448128": {
    fifaId: "448128",
    teamCode: "COD",
    name: "Pickel",
    fullName: "Charles Pickel",
    number: 18,
    position: "MF",
    club: "Lausanne-Sport",
    pictureUrl: "https://digitalhub.fifa.com/transform/1a0ecb32-cde2-4987-a0e0-2bf8ee4376c5/PICKEL-Charles_448128",
    dateOfBirth: "1997-05-15",
    height: 187,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Charles_Pickel"
    }
  },
  "448131": {
    fifaId: "448131",
    teamCode: "SUI",
    name: "Vargas",
    fullName: "Ruben Vargas",
    number: 17,
    position: "FW",
    club: "Sevilla FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/625f7ce0-81a9-4bab-9b18-c9ec395b5096/VARGAS-Ruben_448131",
    socials: {
      instagram: "rubenvargas11",
      wikipedia: "https://pt.wikipedia.org/wiki/Rub%C3%A9n_Vargas"
    },
    dateOfBirth: "1998-08-05",
    height: 179
  },
  "448136": {
    fifaId: "448136",
    teamCode: "SUI",
    name: "Eray Coemert",
    fullName: "Eray Coemert",
    number: 18,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/9b17e0f6-f09e-417d-9829-857d7a7d1fa3/COEMERT-Eray_448136",
    dateOfBirth: "1998-02-04",
    height: 183,
    socials: {
      instagram: "eray_coemert"
    }
  },
  "448140": {
    fifaId: "448140",
    teamCode: "NED",
    name: "Van De Ven",
    fullName: "Micky Van De Ven",
    number: 15,
    position: "DF",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/f9f50877-4cd1-4ab9-83d8-2908ad6fbc70/VAN-DE-VEN-Micky_448140",
    dateOfBirth: "2001-04-19",
    height: 193,
    socials: {
      instagram: "mickyvdven",
      wikipedia: "https://pt.wikipedia.org/wiki/Micky_van_de_Ven"
    }
  },
  "448149": {
    fifaId: "448149",
    teamCode: "NED",
    name: "Koopmeiners",
    fullName: "Teun Koopmeiners",
    number: 20,
    position: "MF",
    club: "Brentford",
    pictureUrl: "https://digitalhub.fifa.com/transform/dd457729-e889-46e1-9845-f6e1b194893e/KOOPMEINERS-Teun_448149",
    dateOfBirth: "1998-02-28",
    height: 185,
    socials: {
      instagram: "teunkoopmeiners",
      wikipedia: "https://pt.wikipedia.org/wiki/Teun_Koopmeiners"
    }
  },
  "448151": {
    fifaId: "448151",
    teamCode: "NED",
    name: "Flekken",
    fullName: "Mark Flekken",
    number: 23,
    position: "GK",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3d85e26-25ec-46df-957c-9e5feee3faf3/FLEKKEN-Mark_448151",
    dateOfBirth: "1993-06-13",
    height: 195,
    socials: {
      instagram: "markflekken",
      wikipedia: "https://pt.wikipedia.org/wiki/Mark_Flekken"
    }
  },
  "448152": {
    fifaId: "448152",
    teamCode: "NED",
    name: "Gakpo",
    fullName: "Cody Gakpo",
    number: 11,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/bbb5637f-0587-4ddd-8a82-604c0d921bb3/GAKPO-Cody_448152",
    dateOfBirth: "1999-05-07",
    height: 193,
    socials: {
      instagram: "codymathesgakpo",
      wikipedia: "https://pt.wikipedia.org/wiki/Cody_Gakpo"
    }
  },
  "448153": {
    fifaId: "448153",
    teamCode: "NED",
    name: "Lang",
    fullName: "Noa Lang",
    number: 17,
    position: "FW",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/683cef55-109a-4bc3-a41a-8bb4d64d556f/LANG-Noa_448153",
    dateOfBirth: "1999-06-17",
    height: 176,
    socials: {
      instagram: "noano",
      wikipedia: "https://pt.wikipedia.org/wiki/Noa_Lang"
    }
  },
  "448157": {
    fifaId: "448157",
    teamCode: "NED",
    name: "Til",
    fullName: "Guus Til",
    number: 16,
    position: "MF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/79d54014-e674-49c2-8b01-94958f41743a/TIL-Guus_448157",
    dateOfBirth: "1997-12-22",
    height: 188,
    socials: {
      instagram: "guustil",
      wikipedia: "https://pt.wikipedia.org/wiki/Guus_Til"
    }
  },
  "448159": {
    fifaId: "448159",
    teamCode: "NED",
    name: "Weghorst",
    fullName: "Wout Weghorst",
    number: 9,
    position: "FW",
    club: "Ajax",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b0de826-85e3-4404-9dbc-6e6ac7675ae3/WEGHORST-Wout_448159",
    dateOfBirth: "1992-08-07",
    height: 197,
    socials: {
      instagram: "wout.weghorst",
      wikipedia: "https://pt.wikipedia.org/wiki/Wout_Weghorst"
    }
  },
  "448160": {
    fifaId: "448160",
    teamCode: "CRO",
    name: "Su\u010Di\u0107",
    fullName: "Luka Sucic",
    number: 21,
    position: "MF",
    club: "RB Salzburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/4f4c5521-6b60-46e0-b93b-4aaae66f28f7/SUCIC-Luka_448160",
    dateOfBirth: "2002-09-08",
    height: 185,
    socials: {
      instagram: "luka_sucic",
      wikipedia: "https://pt.wikipedia.org/wiki/Luka_Su%C4%8Di%C4%87"
    }
  },
  "448164": {
    fifaId: "448164",
    teamCode: "CRO",
    name: "Jaki\u0107",
    fullName: "Kristijan Jakic",
    number: 18,
    position: "DF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/8fdebc61-0e5a-4d33-bf9f-3dcb4b413f21/JAKIC-Kristijan_448164",
    dateOfBirth: "1997-05-14",
    height: 181,
    socials: {
      instagram: "jakic97",
      wikipedia: "https://en.wikipedia.org/wiki/Kristijan_Jaki%C4%87"
    }
  },
  "448171": {
    fifaId: "448171",
    teamCode: "CRO",
    name: "\u0160utalo",
    fullName: "Josip Sutalo",
    number: 6,
    position: "DF",
    club: "Ajax",
    pictureUrl: "https://digitalhub.fifa.com/transform/5b23d028-3bf8-4355-8364-7838975c264f/SUTALO-Josip_448171",
    dateOfBirth: "2000-02-28",
    height: 185,
    socials: {
      instagram: "josip.sutalo",
      wikipedia: "https://pt.wikipedia.org/wiki/Josip_%C5%A0utalo"
    }
  },
  "448174": {
    fifaId: "448174",
    teamCode: "CRO",
    name: "Pongra\u010Di\u0107",
    fullName: "Marin Pongracic",
    number: 3,
    position: "DF",
    club: "Fiorentina",
    pictureUrl: "https://digitalhub.fifa.com/transform/002f5150-852a-45f5-9a9b-46cd3dcaface/PONGRACIC-Marin_448174",
    dateOfBirth: "1997-09-11",
    height: 193,
    socials: {
      instagram: "marinpongracic",
      wikipedia: "https://en.wikipedia.org/wiki/Marin_Pongra%C4%8Di%C4%87"
    }
  },
  "448179": {
    fifaId: "448179",
    teamCode: "CRO",
    name: "Kotarski",
    fullName: "Dominik Kotarski",
    number: 23,
    position: "GK",
    club: "Dinamo Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/4fb248c2-8d15-4415-ab5f-19bf997447ae/KOTARSKI-Dominik_448179",
    dateOfBirth: "2000-02-10",
    height: 190,
    socials: {
      instagram: "dominikkotarski24",
      wikipedia: "https://en.wikipedia.org/wiki/Dominik_Kotarski"
    }
  },
  "448180": {
    fifaId: "448180",
    teamCode: "CRO",
    name: "Gvardiol",
    fullName: "Josko Gvardiol",
    number: 4,
    position: "DF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/18cba70e-f4ed-4f57-8e6a-5d4bfd3df8b0/GVARDIOL-Josko_448180",
    dateOfBirth: "2002-01-23",
    height: 185,
    socials: {
      instagram: "josko_gvardiol",
      wikipedia: "https://pt.wikipedia.org/wiki/Jo%C5%A1ko_Gvardiol"
    }
  },
  "448189": {
    fifaId: "448189",
    teamCode: "ENG",
    name: "Gordon",
    fullName: "Anthony Gordon",
    number: 18,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/bb7bbfe0-791d-408e-a2c2-f33156fce3e8/GORDON-Anthony_448189",
    dateOfBirth: "2001-02-24",
    height: 182,
    socials: {
      instagram: "anthonygordon",
      wikipedia: "https://pt.wikipedia.org/wiki/Anthony_Gordon"
    }
  },
  "448196": {
    fifaId: "448196",
    teamCode: "ENG",
    name: "Saka",
    fullName: "Bukayo Saka",
    number: 7,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/b1182d25-62ad-4ad8-8bae-2b7577569484/MUMIN-Abdul_441336",
    dateOfBirth: "2001-09-05",
    height: 178,
    socials: {
      instagram: "bukayosaka87",
      wikipedia: "https://pt.wikipedia.org/wiki/Bukayo_Saka"
    }
  },
  "448198": {
    fifaId: "448198",
    teamCode: "ENG",
    name: "Toney",
    fullName: "Ivan Toney",
    number: 22,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/720c0b56-6b1c-49aa-8c9d-5aec2c23c673/TONEY-Ivan_448198",
    dateOfBirth: "1996-03-16",
    height: 185,
    socials: {
      instagram: "ivantoney1",
      wikipedia: "https://pt.wikipedia.org/wiki/Ivan_Toney"
    }
  },
  "448202": {
    fifaId: "448202",
    teamCode: "ENG",
    name: "Bellingham",
    fullName: "Jude Bellingham",
    number: 10,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/d711b37f-ec06-4ea7-bb52-50ba0a42ef67/BELLINGHAM-Jude_448202",
    dateOfBirth: "2003-06-29",
    height: 183,
    socials: {
      instagram: "judebellingham",
      wikipedia: "https://pt.wikipedia.org/wiki/Jude_Bellingham"
    }
  },
  "448203": {
    fifaId: "448203",
    teamCode: "ENG",
    name: "Watkins",
    fullName: "Ollie Watkins",
    number: 19,
    position: "FW",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/876d6c91-be07-4b54-a86d-d73e2ef52d8f/WATKINS-Ollie_448203",
    dateOfBirth: "1995-12-30",
    height: 180,
    socials: {
      instagram: "olliewatkins",
      wikipedia: "https://pt.wikipedia.org/wiki/Ollie_Watkins"
    }
  },
  "448214": {
    fifaId: "448214",
    teamCode: "USA",
    name: "Tillman",
    fullName: "Malik Tillman",
    number: 17,
    position: "MF",
    club: "Seattle Sounders",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8c38ca3-7100-4bca-88e7-4ea66fd86ff7/TILLMAN-Malik_448214",
    dateOfBirth: "2002-05-28",
    height: 187,
    socials: {
      instagram: "malik.tillman",
      wikipedia: "https://pt.wikipedia.org/wiki/Malik_Tillman"
    }
  },
  "448217": {
    fifaId: "448217",
    teamCode: "USA",
    name: "Turner",
    fullName: "Matt Turner",
    number: 1,
    position: "GK",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/01fb042f-5de5-41df-8104-7445672fdca5/TURNER-Matt_448217",
    dateOfBirth: "1994-06-24",
    height: 190,
    socials: {
      instagram: "headdturnerr",
      wikipedia: "https://pt.wikipedia.org/wiki/Matt_Turner"
    }
  },
  "448252": {
    fifaId: "448252",
    teamCode: "ARG",
    name: "Enzo F.",
    fullName: "Enzo Fernandez",
    number: 24,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/b88c6da2-28db-4d61-a668-ac8e84114063/FERNANDEZ-Enzo_448252",
    dateOfBirth: "2001-01-17",
    height: 178,
    socials: {
      instagram: "enzojfernandez",
      wikipedia: "https://pt.wikipedia.org/wiki/Enzo_Fern%C3%A1ndez"
    }
  },
  "448290": {
    fifaId: "448290",
    teamCode: "ECU",
    name: "Pacho",
    fullName: "Willian Pacho",
    number: 6,
    position: "DF",
    club: "Aucas",
    pictureUrl: "https://digitalhub.fifa.com/transform/cda5e4c5-69a6-46ee-b6d1-230be57c4847/PACHO-Willian_448290",
    dateOfBirth: "2001-10-16",
    height: 188,
    socials: {
      instagram: "pachowillian",
      wikipedia: "https://pt.wikipedia.org/wiki/Willian_Pacho"
    }
  },
  "448295": {
    fifaId: "448295",
    teamCode: "ECU",
    name: "Valle",
    fullName: "Gonzalo Valle",
    number: 22,
    position: "GK",
    club: "El Nacional",
    pictureUrl: "https://digitalhub.fifa.com/transform/d67ebe06-be17-4735-a8a7-9659eb37cf37/VALLE-Gonzalo_448295",
    dateOfBirth: "1996-02-28",
    height: 186,
    socials: {
      instagram: "jhegsonmendez",
      wikipedia: "https://en.wikipedia.org/wiki/Gonzalo_Valle"
    }
  },
  "448299": {
    fifaId: "448299",
    teamCode: "ECU",
    name: "Valencia",
    fullName: "Anthony Valencia",
    number: 8,
    position: "MF",
    club: "Pachuca",
    pictureUrl: "https://digitalhub.fifa.com/transform/b21d23fa-c045-4f5d-9721-59740e4006b2/VALENCIA-Anthony_448299",
    dateOfBirth: "2003-07-21",
    height: 173,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Anthony_Valencia"
    }
  },
  "448310": {
    fifaId: "448310",
    teamCode: "ECU",
    name: "K. Rodriguez",
    fullName: "Kevin Rodriguez",
    number: 11,
    position: "FW",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/c35d8b13-4ad6-45d8-853e-8d7f6bd98214/RODRIGUEZ-Kevin_448310",
    dateOfBirth: "2000-03-04",
    height: 190,
    socials: {
      instagram: "kevin_larola9",
      wikipedia: "https://pt.wikipedia.org/wiki/Kevin_Rodr%C3%ADguez"
    }
  },
  "448312": {
    fifaId: "448312",
    teamCode: "ECU",
    name: "Angulo",
    fullName: "Nilson Angulo",
    number: 20,
    position: "FW",
    club: "Independiente del Valle",
    pictureUrl: "https://digitalhub.fifa.com/transform/b90df9f2-8054-4d40-b375-f7728a31a069/ANGULO-Nilson_448312",
    dateOfBirth: "2003-06-19",
    height: 184,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Nilson_Angulo"
    }
  },
  "448332": {
    fifaId: "448332",
    teamCode: "FRA",
    name: "Maignan",
    fullName: "Mike Maignan",
    number: 16,
    position: "GK",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/3f92a933-a22d-4f58-8f4f-b51370aeacf4/MAIGNAN-Mike_448332",
    dateOfBirth: "1995-07-03",
    height: 191,
    socials: {
      instagram: "mike_maignan16",
      wikipedia: "https://pt.wikipedia.org/wiki/Mike_Maignan"
    }
  },
  "448341": {
    fifaId: "448341",
    teamCode: "BEL",
    name: "Doku",
    fullName: "Jeremy Doku",
    number: 11,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/df41be47-900d-41fe-90eb-b493f7609869/DOKU-Jeremy_448341",
    dateOfBirth: "2002-05-27",
    height: 173,
    socials: {
      instagram: "jeremydoku",
      wikipedia: "https://pt.wikipedia.org/wiki/J%C3%A9r%C3%A9my_Doku"
    }
  },
  "448343": {
    fifaId: "448343",
    teamCode: "BEL",
    name: "Vanaken",
    fullName: "Hans Vanaken",
    number: 20,
    position: "MF",
    club: "Wolfsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/9018ca03-c5c1-4dc1-8d4f-7ee07308dc55/VANAKEN-Hans_448343",
    dateOfBirth: "1992-08-24",
    height: 195,
    socials: {
      instagram: "hansvanaken20",
      wikipedia: "https://pt.wikipedia.org/wiki/Hans_Vanaken"
    }
  },
  "448346": {
    fifaId: "448346",
    teamCode: "BEL",
    name: "Theate",
    fullName: "Arthur Theate",
    number: 3,
    position: "DF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/34da124d-c474-4154-90e9-aa132a5df818/THEATE-Arthur_448346",
    dateOfBirth: "2000-05-25",
    height: 185,
    socials: {
      instagram: "arthurtheate",
      wikipedia: "https://pt.wikipedia.org/wiki/Arthur_Theate"
    }
  },
  "448355": {
    fifaId: "448355",
    teamCode: "BEL",
    name: "Trossard",
    fullName: "Leandro Trossard",
    number: 10,
    position: "FW",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/78476568-5abb-4047-b6c0-fd9651e0f39d/TROSSARD-Leandro_448355",
    dateOfBirth: "1994-12-04",
    height: 172,
    socials: {
      instagram: "leandrotrossard",
      wikipedia: "https://pt.wikipedia.org/wiki/Leandro_Trossard"
    }
  },
  "448360": {
    fifaId: "448360",
    teamCode: "BEL",
    name: "Mechele",
    fullName: "Brandon Mechele",
    number: 4,
    position: "DF",
    club: "Leicester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/dda9e35d-eedf-403b-8953-a5dc213fbf67/MECHELE-Brandon_448360",
    dateOfBirth: "1993-01-28",
    height: 190,
    socials: {
      instagram: "brandonmechele",
      wikipedia: "https://en.wikipedia.org/wiki/Brandon_Mechele"
    }
  },
  "448362": {
    fifaId: "448362",
    teamCode: "BEL",
    name: "Charles De Ketelaere",
    fullName: "Charles De Ketelaere",
    number: 17,
    position: "FW",
    club: "PSV",
    pictureUrl: "https://digitalhub.fifa.com/transform/2ce231c2-05f7-4353-921c-242c863a8d54/DE-KETELAERE-Charles_448362",
    dateOfBirth: "2001-03-10",
    height: 192,
    socials: {
      instagram: "charlesdeketelaere",
      wikipedia: "https://pt.wikipedia.org/wiki/Charles_De_Ketelaere"
    }
  },
  "448363": {
    fifaId: "448363",
    teamCode: "HAI",
    name: "Delcroix",
    fullName: "Hannes Delcroix",
    number: 5,
    position: "DF",
    club: "Laval",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b98bc6d-0a33-4ad0-b0fc-18ba00c15e1c/DELCROIX-Hannes_448363",
    dateOfBirth: "1999-02-28",
    height: 183,
    socials: {
      instagram: "hannes_delcroix",
      wikipedia: "https://en.wikipedia.org/wiki/Hannes_Delcroix"
    }
  },
  "448364": {
    fifaId: "448364",
    teamCode: "BEL",
    name: "Onana",
    fullName: "Amadou Onana",
    number: 24,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/697ee4f8-3df1-4ce5-a8b9-c9dae1ed6aba/ONANA-Amadou_448364",
    dateOfBirth: "2001-08-16",
    height: 192,
    socials: {
      instagram: "its_onana",
      wikipedia: "https://pt.wikipedia.org/wiki/Amadou_Onana"
    }
  },
  "448366": {
    fifaId: "448366",
    teamCode: "BEL",
    name: "De Winter",
    fullName: "Koni De Winter",
    number: 16,
    position: "DF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/a19702c3-a309-4e23-9957-dfbe0d9d5d43/DE-WINTER-Koni_448366",
    dateOfBirth: "2002-06-12",
    height: 191,
    socials: {
      instagram: "konidewinter",
      wikipedia: "https://en.wikipedia.org/wiki/Koni_De_Winter"
    }
  },
  "448373": {
    fifaId: "448373",
    teamCode: "BEL",
    name: "De Cuyper",
    fullName: "Maxim De Cuyper",
    number: 5,
    position: "DF",
    club: "RSC Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c22dfc4-3eb2-4778-b310-ef4b62aef0c6/DE-CUYPER-Maxim_448373",
    dateOfBirth: "2000-12-22",
    height: 182,
    socials: {
      instagram: "maxim.decuyper",
      wikipedia: "https://en.wikipedia.org/wiki/Maxim_De_Cuyper"
    }
  },
  "448377": {
    fifaId: "448377",
    teamCode: "BEL",
    name: "Lukebakio",
    fullName: "Dodi Lukebakio",
    number: 14,
    position: "FW",
    club: "Sevilla",
    pictureUrl: "https://digitalhub.fifa.com/transform/5672576a-616d-45a3-8f06-95aa772bb821/LUKEBAKIO-Dodi_448377",
    dateOfBirth: "1997-09-24",
    height: 184,
    socials: {
      instagram: "lukebakio",
      wikipedia: "https://pt.wikipedia.org/wiki/Dodi_Lukebakio"
    }
  },
  "448390": {
    fifaId: "448390",
    teamCode: "CAN",
    name: "Mathieu Choiniere",
    fullName: "Mathieu Choiniere",
    number: 6,
    position: "MF",
    club: "Nashville SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/d74aed0f-7268-4a91-8dc2-13a76e2cdf28/CHOINIERE-Mathieu_448390",
    dateOfBirth: "1999-02-07",
    height: 173,
    socials: {
      instagram: "mathieu_choiniere",
      wikipedia: "https://en.wikipedia.org/wiki/Mathieu_Choini%C3%A8re"
    }
  },
  "448402": {
    fifaId: "448402",
    teamCode: "CAN",
    name: "Waterman",
    fullName: "Joel Waterman",
    number: 5,
    position: "DF",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/f5b31eb7-c506-4ad3-b857-06c22e1bb263/WATERMAN-Joel_448402",
    dateOfBirth: "1996-01-24",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Joel_Waterman"
    }
  },
  "448411": {
    fifaId: "448411",
    teamCode: "CAN",
    name: "Shaffelburg",
    fullName: "Jacob Shaffelburg",
    number: 14,
    position: "MF",
    club: "Toronto FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/fd23f2a2-eb9d-4232-97ff-03c924d6b24e/SHAFFELBURG-Jacob_448411",
    dateOfBirth: "1999-11-26",
    height: 181,
    socials: {
      instagram: "jacobshaff",
      wikipedia: "https://en.wikipedia.org/wiki/Jacob_Shaffelburg"
    }
  },
  "448420": {
    fifaId: "448420",
    teamCode: "BRA",
    name: "L. Henrique",
    fullName: "Luiz Henrique",
    number: 21,
    position: "FW",
    club: "Real Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/a2b269b6-cc1d-4693-b72a-6359c41597b7/LUIZ-HENRIQUE_448420",
    dateOfBirth: "2001-01-02",
    height: 182,
    socials: {
      instagram: "luizhenrique_07",
      wikipedia: "https://pt.wikipedia.org/wiki/Luiz_Henrique_(futebolista)"
    }
  },
  "448497": {
    fifaId: "448497",
    teamCode: "IRN",
    name: "M.Mohebbi",
    fullName: "Mohammad Mohebbi",
    number: 8,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/aef63530-cc2b-4b8e-b06b-6c0a9fb90ec0/MOHEBBI-Mohammad_448497",
    socials: {
      instagram: "mohammadmohebi_official"
    },
    dateOfBirth: "1998-12-20",
    height: 187
  },
  "448505": {
    fifaId: "448505",
    teamCode: "IRN",
    name: "S.Hardani",
    fullName: "Saleh Hardani",
    number: 2,
    position: "DF",
    club: "Dinamo Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/0357126d-f784-46a7-901d-33d54b66598b/HARDANI-Saleh_448505",
    dateOfBirth: "1998-12-26",
    height: 176,
    socials: {
      instagram: "saadat.hardani2"
    }
  },
  "448507": {
    fifaId: "448507",
    teamCode: "IRN",
    name: "P. Niazmand",
    fullName: "Payam Niazmand",
    number: 12,
    position: "GK",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a4d3867-6d31-4e40-8718-312350b29fb4/NIAZMAND-Payam_448507",
    dateOfBirth: "1995-04-06",
    height: 193,
    socials: {
      instagram: "payamniazmand",
      wikipedia: "https://en.wikipedia.org/wiki/Payam_Niazmand"
    }
  },
  "448557": {
    fifaId: "448557",
    teamCode: "JPN",
    name: "Kamada",
    fullName: "Daichi Kamada",
    number: 15,
    position: "MF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/40432f8c-1b4a-444e-b3a4-709164e708d6/KAMADA-Daichi_448557",
    dateOfBirth: "1996-08-05",
    height: 180,
    socials: {
      instagram: "kamadadaichi",
      wikipedia: "https://pt.wikipedia.org/wiki/Daichi_Kamada"
    }
  },
  "448569": {
    fifaId: "448569",
    teamCode: "JPN",
    name: "Machino",
    fullName: "Shuto Machino",
    number: 6,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d060ae7-d04d-4bc3-9b76-d4ad6b52a0c3/MACHINO-Shuto_448569",
    dateOfBirth: "1999-09-30",
    height: 185,
    socials: {
      instagram: "machino9.30",
      wikipedia: "https://en.wikipedia.org/wiki/Sh%C5%ABto_Machino"
    }
  },
  "448580": {
    fifaId: "448580",
    teamCode: "KOR",
    name: "M H Kim",
    fullName: "Kim Moonhwan ",
    number: 15,
    position: "DF",
    club: "Al-Wasl",
    pictureUrl: "https://digitalhub.fifa.com/transform/352f1315-e0c8-46fd-b0f4-5f56cac5ff18/KIM-Moonhwan_448580",
    dateOfBirth: "1995-08-01",
    height: 173,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Kim_Moon-hwan"
    }
  },
  "448585": {
    fifaId: "448585",
    teamCode: "KOR",
    name: "H J Yang",
    fullName: "Yang Hyunjun ",
    number: 20,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/537b866b-290c-4da9-a0bb-5984410d1509/YANG-Hyunjun_448585",
    dateOfBirth: "2002-05-25",
    height: 179,
    socials: {
      instagram: "yang.hyunjunx",
      wikipedia: "https://en.wikipedia.org/wiki/Yang_Hyun-jun"
    }
  },
  "448586": {
    fifaId: "448586",
    teamCode: "KOR",
    name: "H G Oh",
    fullName: "Oh Hyeongyu",
    number: 18,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/e273b84d-3432-4404-8c33-7ecaaa2bc214/OH-Hyeongyu_448586",
    dateOfBirth: "2001-04-12",
    height: 183,
    socials: {
      instagram: "oh.hyeongyu",
      wikipedia: "https://en.wikipedia.org/wiki/Oh_Hyeon-gyu"
    }
  },
  "448598": {
    fifaId: "448598",
    teamCode: "MAR",
    name: "Saibari",
    fullName: "Ismael Saibari",
    number: 11,
    position: "MF",
    club: "Lorient",
    pictureUrl: "https://digitalhub.fifa.com/transform/250526c6-26b5-4425-8a21-231c7952e34d/SAIBARI-Ismael_448598",
    dateOfBirth: "2001-01-28",
    height: 185,
    socials: {
      instagram: "ismaelsaibari",
      wikipedia: "https://pt.wikipedia.org/wiki/Ismael_Saibari"
    }
  },
  "448607": {
    fifaId: "448607",
    teamCode: "MAR",
    name: "Riad",
    fullName: "Chadi Riad",
    number: 18,
    position: "DF",
    club: "Parma",
    pictureUrl: "https://digitalhub.fifa.com/transform/074f7da4-2459-4f56-b245-0b496782d067/RIAD-Chadi_448607",
    dateOfBirth: "2003-06-17",
    height: 186,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Chadi_Riad"
    }
  },
  "448612": {
    fifaId: "448612",
    teamCode: "MAR",
    name: "El Khannouss",
    fullName: "Bilal El Khannouss",
    number: 23,
    position: "MF",
    club: "Brest",
    pictureUrl: "https://digitalhub.fifa.com/transform/8e73a0cb-8200-4870-b0bc-12901de8076f/EL-KHANNOUSS-Bilal_448612",
    dateOfBirth: "2004-05-10",
    height: 180,
    socials: {
      instagram: "bilalekns_34",
      wikipedia: "https://pt.wikipedia.org/wiki/Bilal_El_Khannouss"
    }
  },
  "448662": {
    fifaId: "448662",
    teamCode: "TUN",
    name: "Achouri",
    fullName: "Elias Achouri",
    number: 7,
    position: "FW",
    club: "Al Arabi",
    pictureUrl: "https://digitalhub.fifa.com/transform/5ffd95df-83a5-4768-9331-0842c3f433b6/ACHOURI-Elias_448662",
    dateOfBirth: "1999-02-10",
    height: 187,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Elias_Achouri"
    }
  },
  "448815": {
    fifaId: "448815",
    teamCode: "SEN",
    name: "Iliman",
    fullName: "Iliman Ndiaye",
    number: 13,
    position: "FW",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/6e228075-d552-4471-80b9-6beb5f574ac6/NDIAYE-Iliman_448815",
    dateOfBirth: "2000-03-06",
    height: 180,
    socials: {
      instagram: "ilimanndiaye10",
      wikipedia: "https://pt.wikipedia.org/wiki/Iliman_Ndiaye"
    }
  },
  "448821": {
    fifaId: "448821",
    teamCode: "SEN",
    name: "Mory",
    fullName: "Mory Diaw",
    number: 23,
    position: "GK",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/79100f28-7542-4023-b782-e40ecd748f93/DIAW-Mory_448821",
    dateOfBirth: "1993-06-22",
    height: 197,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mory_Diaw"
    }
  },
  "448825": {
    fifaId: "448825",
    teamCode: "SEN",
    name: "Pathe",
    fullName: "Pathe Ciss",
    number: 6,
    position: "MF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/fa3c3939-ed3d-46f5-9474-39fe481be534/CISS-Pathe_448825",
    dateOfBirth: "1994-03-16",
    height: 186,
    socials: {
      instagram: "papite8",
      wikipedia: "https://pt.wikipedia.org/wiki/Path%C3%A9_Ciss"
    }
  },
  "461177": {
    fifaId: "461177",
    teamCode: "MEX",
    name: "Vargas",
    fullName: "Obed Vargas",
    number: 18,
    position: "MF",
    club: "Tigres",
    pictureUrl: "https://digitalhub.fifa.com/transform/c0990d50-6120-459c-a66a-bd91ee7e46bc/VARGAS-Obed_461177",
    dateOfBirth: "2005-08-05",
    height: 175,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Obed_Vargas"
    }
  },
  "461788": {
    fifaId: "461788",
    teamCode: "EGY",
    name: "M.Attia",
    fullName: "Marawan Attia",
    number: 19,
    position: "MF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf051f82-c8a8-4328-9439-2ab64f616b83/MARAWAN-ATTIA_461788",
    dateOfBirth: "1998-08-01",
    height: 176
  },
  "463125": {
    fifaId: "463125",
    teamCode: "PAR",
    name: "Ramon Sosa",
    fullName: "Ramon Sosa",
    number: 7,
    position: "MF",
    club: "Hurac\xE1n",
    pictureUrl: "https://digitalhub.fifa.com/transform/fb29327f-14b3-4b8f-af4e-3816404afaed/SOSA-Ramon_463125",
    dateOfBirth: "1999-08-31",
    height: 178,
    socials: {
      instagram: "ramon.sosa17",
      wikipedia: "https://pt.wikipedia.org/wiki/Ram%C3%B3n_Sosa"
    }
  },
  "463127": {
    fifaId: "463127",
    teamCode: "PAR",
    name: "Gabriel Avalos",
    fullName: "Gabriel Avalos",
    number: 21,
    position: "FW",
    club: "Libertad",
    pictureUrl: "https://digitalhub.fifa.com/transform/58eb53dc-567a-489a-b2f9-3a905f5841b7/AVALOS-Gabriel_463127",
    dateOfBirth: "1991-07-09",
    height: 185,
    socials: {
      instagram: "gabi.ava11"
    }
  },
  "463128": {
    fifaId: "463128",
    teamCode: "PAR",
    name: "Diego Gomez",
    fullName: "Diego Gomez",
    number: 8,
    position: "MF",
    club: "Club Olimpia",
    pictureUrl: "https://digitalhub.fifa.com/transform/88e45d01-241d-4d9d-8b40-3f2cb2963d4d/GOMEZ-Diego_463128",
    dateOfBirth: "2003-03-27",
    height: 183,
    socials: {
      instagram: "diegogomez08_"
    }
  },
  "463218": {
    fifaId: "463218",
    teamCode: "RSA",
    name: "Mudau",
    fullName: "Khuliso Mudau",
    number: 20,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/29d0b36b-2727-4fc0-ab1e-4d21b5858f5a/MUDAU-Khuliso_463218",
    dateOfBirth: "1995-04-26",
    height: 179,
    socials: {
      instagram: "sailor_mudau",
      wikipedia: "https://en.wikipedia.org/wiki/Khuliso_Mudau"
    }
  },
  "463221": {
    fifaId: "463221",
    teamCode: "RSA",
    name: "Nkosinathi Sibisi",
    fullName: "Nkosinathi Sibisi",
    number: 19,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/1fb66990-444a-4e4b-9047-41c2542ea91a/SIBISI-Nkosinathi_463221",
    dateOfBirth: "1995-09-22",
    height: 172,
    socials: {
      instagram: "nkosinathi_sibisi29"
    }
  },
  "463234": {
    fifaId: "463234",
    teamCode: "RSA",
    name: "Maseko",
    fullName: "Thapelo Maseko",
    number: 12,
    position: "FW",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/a8c4c69e-b074-4a10-9bfc-38c85175560d/MASEKO-Thapelo_463234",
    dateOfBirth: "2003-11-11",
    height: 178,
    socials: {
      instagram: "thapelo_maseko40",
      wikipedia: "https://en.wikipedia.org/wiki/Thapelo_Maseko"
    }
  },
  "463236": {
    fifaId: "463236",
    teamCode: "RSA",
    name: "Adams",
    fullName: "Jayden Adams",
    number: 23,
    position: "MF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/d238f3d6-bc5d-44c6-b312-2989524bea12/ADAMS-Jayden_463236",
    dateOfBirth: "2001-05-05",
    height: 177,
    socials: {
      instagram: "jaydenadams_23",
      wikipedia: "https://en.wikipedia.org/wiki/Jayden_Adams"
    }
  },
  "463282": {
    fifaId: "463282",
    teamCode: "AUT",
    name: "Alexander Prass",
    fullName: "Alexander Prass",
    number: 22,
    position: "MF",
    club: "FC Liefering",
    pictureUrl: "https://digitalhub.fifa.com/transform/be716fd1-7641-4a96-a618-5f2c2214c84f/PRASS-Alexander_463282",
    dateOfBirth: "2001-05-26",
    height: 180,
    socials: {
      instagram: "alex__prass",
      wikipedia: "https://en.wikipedia.org/wiki/Alexander_Prass"
    }
  },
  "463283": {
    fifaId: "463283",
    teamCode: "AUT",
    name: "Romano Schmid",
    fullName: "Romano Schmid",
    number: 18,
    position: "MF",
    club: "SV Werder Bremen",
    pictureUrl: "https://digitalhub.fifa.com/transform/558d5b09-0c44-4c7e-bccb-1bf9ac31ca72/SCHMID-Romano_463283",
    dateOfBirth: "2000-01-27",
    height: 168,
    socials: {
      instagram: "romano_schmid",
      wikipedia: "https://en.wikipedia.org/wiki/Romano_Schmid"
    }
  },
  "463286": {
    fifaId: "463286",
    teamCode: "AUT",
    name: "Patrick Wimmer",
    fullName: "Patrick Wimmer",
    number: 21,
    position: "FW",
    club: "VfL Wolfsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/30760937-4e34-4c1b-b5a3-8b1375d79728/WIMMER-Patrick_463286",
    dateOfBirth: "2001-05-30",
    height: 182,
    socials: {
      instagram: "patrick_wimmer",
      wikipedia: "https://en.wikipedia.org/wiki/Patrick_Wimmer"
    }
  },
  "463287": {
    fifaId: "463287",
    teamCode: "AUT",
    name: "Marco Friedl",
    fullName: "Marco Friedl",
    number: 23,
    position: "DF",
    club: "SV Werder Bremen",
    pictureUrl: "https://digitalhub.fifa.com/transform/dfc45944-180c-4df6-96b2-ef69faee7ee7/FRIEDL-Marco_463287",
    dateOfBirth: "1998-03-16",
    height: 187,
    socials: {
      instagram: "marcofriedl_32",
      wikipedia: "https://en.wikipedia.org/wiki/Marco_Friedl"
    }
  },
  "463288": {
    fifaId: "463288",
    teamCode: "AUT",
    name: "Phillip Mwene",
    fullName: "Phillip Mwene",
    number: 16,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/c7b91eab-9cfc-4f0f-be61-71d31d1c4db8/MWENE-Phillip_463288",
    dateOfBirth: "1994-01-29",
    height: 170,
    socials: {
      instagram: "mwene",
      wikipedia: "https://pt.wikipedia.org/wiki/Phillipp_Mwene"
    }
  },
  "463465": {
    fifaId: "463465",
    teamCode: "ECU",
    name: "Joel Ordonez",
    fullName: "Joel Ordonez",
    number: 4,
    position: "DF",
    club: "LAFC",
    pictureUrl: "https://digitalhub.fifa.com/transform/54a42d16-279a-4566-8c46-ac75d8ea095a/ORDONEZ-Joel_463465",
    dateOfBirth: "2004-04-21",
    height: 188,
    socials: {
      instagram: "joel_ordonez04",
      wikipedia: "https://en.wikipedia.org/wiki/Joel_Ord%C3%B3%C3%B1ez"
    }
  },
  "463468": {
    fifaId: "463468",
    teamCode: "ECU",
    name: "Alan Minda",
    fullName: "Alan Minda",
    number: 14,
    position: "MF",
    club: "FC Dallas",
    pictureUrl: "https://digitalhub.fifa.com/transform/b43c46a0-9e62-4202-b9e4-c625b36afc16/MINDA-Alan_463468",
    dateOfBirth: "2003-05-14",
    height: 174,
    socials: {
      instagram: "mindaalan",
      wikipedia: "https://pt.wikipedia.org/wiki/Alan_Minda"
    }
  },
  "463476": {
    fifaId: "463476",
    teamCode: "ECU",
    name: "Denil Castillo",
    fullName: "Denil Castillo",
    number: 18,
    position: "MF",
    club: "Independiente del Valle",
    pictureUrl: "https://digitalhub.fifa.com/transform/60f9a338-e7cb-45a0-a0ae-926740080bec/CASTILLO-Denil_463476",
    dateOfBirth: "2004-03-24",
    height: 189,
    socials: {
      instagram: "denilcastillo_5",
      wikipedia: "https://en.wikipedia.org/wiki/Denil_Castillo"
    }
  },
  "463489": {
    fifaId: "463489",
    teamCode: "ECU",
    name: "Yaimar Medina",
    fullName: "Yaimar Medina",
    number: 26,
    position: "DF",
    club: "Emelec",
    pictureUrl: "https://digitalhub.fifa.com/transform/84400276-88b5-4054-b0fb-f8206f384291/MEDINA-Yaimar_463489",
    dateOfBirth: "2004-11-05",
    height: 173,
    socials: {
      instagram: "medina_yaimar",
      wikipedia: "https://en.wikipedia.org/wiki/Yaimar_Medina"
    }
  },
  "463495": {
    fifaId: "463495",
    teamCode: "ECU",
    name: "Kendry Paez",
    fullName: "Kendry Paez",
    number: 10,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/ee18ba2f-5e31-4e33-8739-f0d59033c409/PAEZ-Kendry_463495",
    dateOfBirth: "2007-05-04",
    height: 178,
    socials: {
      instagram: "kendrypaez.10",
      wikipedia: "https://pt.wikipedia.org/wiki/Kendry_P%C3%A1ez"
    }
  },
  "463580": {
    fifaId: "463580",
    teamCode: "NZL",
    name: "Finn Surman",
    fullName: "Finn Surman",
    number: 16,
    position: "DF",
    club: "NEC Nijmegen",
    pictureUrl: "https://digitalhub.fifa.com/transform/99c5d1bb-fd52-4ce3-a0e0-8f2e8b1083cf/SURMAN-Finn_463580",
    dateOfBirth: "2003-09-23",
    height: 190,
    socials: {
      instagram: "finn_surman",
      wikipedia: "https://en.wikipedia.org/wiki/Finn_Surman"
    }
  },
  "463661": {
    fifaId: "463661",
    teamCode: "ARG",
    name: "V. Barco",
    fullName: "Valentin Barco",
    number: 8,
    position: "MF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/b3a01b61-2e37-439e-b277-5d37c89923ab/BARCO-Valentin_463661",
    dateOfBirth: "2004-07-23",
    height: 172,
    socials: {
      instagram: "colo.barco",
      wikipedia: "https://pt.wikipedia.org/wiki/Valent%C3%ADn_Barco"
    }
  },
  "463746": {
    fifaId: "463746",
    teamCode: "BRA",
    name: "Endrick",
    fullName: "Endrick",
    number: 19,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/a3eda53d-b792-4cbf-8924-159d1b6d75af/ENDRICK_463746",
    dateOfBirth: "2006-07-21",
    height: 172,
    socials: {
      instagram: "endrick",
      wikipedia: "https://pt.wikipedia.org/wiki/Endrick"
    }
  },
  "463780": {
    fifaId: "463780",
    teamCode: "ENG",
    name: "O'Reilly",
    fullName: "Nico Oreilly",
    number: 3,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/6a6be1c6-3496-49ba-81ca-354bdb2f404c/OREILLY-Nico_390761",
    dateOfBirth: "2005-03-21",
    height: 177,
    socials: {
      instagram: "nico33"
    }
  },
  "463800": {
    fifaId: "463800",
    teamCode: "AUT",
    name: "Chukwuemeka",
    fullName: "Carney Chukwuemeka",
    number: 17,
    position: "MF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/469aeffb-5ff1-4782-87c4-b3791f045384/CHUKWUEMEKA-Carney_463800",
    dateOfBirth: "2003-10-20",
    height: 187,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Carney_Chukwuemeka"
    }
  },
  "463809": {
    fifaId: "463809",
    teamCode: "ENG",
    name: "Jarell Quansah",
    fullName: "Jarell Quansah",
    number: 26,
    position: "DF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/60c5fb68-c640-45dc-a493-75e1d9f3450c/QUANSAH-Jarell_463809",
    dateOfBirth: "2003-01-29",
    height: 190,
    socials: {
      instagram: "jarellquansah",
      wikipedia: "https://pt.wikipedia.org/wiki/Jarell_Quansah"
    }
  },
  "463817": {
    fifaId: "463817",
    teamCode: "CAN",
    name: "Owen Goodman",
    fullName: "Owen Goodman",
    number: 18,
    position: "GK",
    club: "Marselha",
    pictureUrl: "https://digitalhub.fifa.com/transform/a226584e-2566-49be-b8e7-b8e73d3aa127/GOODMAN-Owen_463817",
    dateOfBirth: "2003-11-27",
    height: 193,
    socials: {
      instagram: "owengoodman_",
      wikipedia: "https://en.wikipedia.org/wiki/Owen_Goodman"
    }
  },
  "464055": {
    fifaId: "464055",
    teamCode: "FRA",
    name: "Gusto",
    fullName: "Malo Gusto",
    number: 2,
    position: "DF",
    club: "Inter Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/a747375e-cd17-4ef2-8241-fa7b9a7dab2b/GUSTO-Malo_464055",
    dateOfBirth: "2003-05-19",
    height: 179,
    socials: {
      instagram: "malogusto",
      wikipedia: "https://pt.wikipedia.org/wiki/Malo_Gusto"
    }
  },
  "464103": {
    fifaId: "464103",
    teamCode: "CIV",
    name: "Ange-Yoan Bonny",
    fullName: "Ange-Yoan Bonny",
    number: 9,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2bd7f75-2634-437d-9b8e-45d23380a755/BONNY-Ange-Yoan_464103",
    dateOfBirth: "2003-10-25",
    height: 189,
    socials: {
      instagram: "bonnyoan",
      wikipedia: "https://pt.wikipedia.org/wiki/Ange-Yoan_Bonny"
    }
  },
  "464114": {
    fifaId: "464114",
    teamCode: "FRA",
    name: "D. Dou\xE9",
    fullName: "Desire Doue",
    number: 20,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/ca4e60df-4c45-48e9-89e4-70ce6ac3b3b1/DOUE-Desire_464114",
    dateOfBirth: "2005-06-03",
    height: 182,
    socials: {
      instagram: "desire.doue",
      wikipedia: "https://pt.wikipedia.org/wiki/D%C3%A9sir%C3%A9_Dou%C3%A9"
    }
  },
  "464127": {
    fifaId: "464127",
    teamCode: "FRA",
    name: "Robin Risser",
    fullName: "Robin Risser",
    number: 23,
    position: "GK",
    club: "Nantes",
    pictureUrl: "https://digitalhub.fifa.com/transform/834e2e38-78ec-4e02-98a8-dbc085a9637c/RISSER-Robin_464127",
    dateOfBirth: "2004-12-02",
    height: 193,
    socials: {
      instagram: "robin_ris40",
      wikipedia: "https://pt.wikipedia.org/wiki/Robin_Risser"
    }
  },
  "464133": {
    fifaId: "464133",
    teamCode: "CIV",
    name: "Elye Wahi",
    fullName: "Elye Wahi",
    number: 12,
    position: "FW",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/088ceea5-0bdc-4615-9fc2-a99fe888fe44/WAHI-Elye_464133",
    dateOfBirth: "2003-01-02",
    height: 181,
    socials: {
      instagram: "e.wahi7",
      wikipedia: "https://en.wikipedia.org/wiki/Elye_Wahi"
    }
  },
  "464339": {
    fifaId: "464339",
    teamCode: "JPN",
    name: "Keisuke Goto",
    fullName: "Keisuke Goto",
    number: 9,
    position: "FW",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/389ec308-0914-4e7e-95e6-302c1d7bb0b0/GOTO-Keisuke_464339",
    dateOfBirth: "2005-06-03",
    height: 191,
    socials: {
      instagram: "keisuke.0603_42",
      wikipedia: "https://en.wikipedia.org/wiki/Keisuke_Got%C5%8D"
    }
  },
  "464374": {
    fifaId: "464374",
    teamCode: "KOR",
    name: "Bae Junho",
    fullName: "Bae Junho",
    number: 17,
    position: "MF",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/58d034cc-0ae7-4caf-b6d1-41d12d129dd2/BAE-Junho_464374",
    dateOfBirth: "2003-08-21",
    height: 180,
    socials: {
      instagram: "x.xunho__",
      wikipedia: "https://en.wikipedia.org/wiki/Bae_Jun-ho"
    }
  },
  "464457": {
    fifaId: "464457",
    teamCode: "IRQ",
    name: "Ali Jasim",
    fullName: "Ali Jasim",
    number: 17,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/75d61654-11c8-4646-8e47-7c4c977b29b6/ALI-JASIM_464457",
    dateOfBirth: "2004-01-20",
    height: 178,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ali_Jasim"
    }
  },
  "464458": {
    fifaId: "464458",
    teamCode: "IRQ",
    name: "Youssef Amyn",
    fullName: "Youssef Amyn",
    number: 7,
    position: "MF",
    club: "Colorado Rapids",
    pictureUrl: "https://digitalhub.fifa.com/transform/89fe671d-907a-47be-b4b0-4138dc878986/YOUSSEF-AMYN_464458",
    dateOfBirth: "2003-08-21",
    height: 172,
    socials: {
      instagram: "yaminio10",
      wikipedia: "https://en.wikipedia.org/wiki/Youssef_Amyn"
    }
  },
  "464484": {
    fifaId: "464484",
    teamCode: "TUN",
    name: "Ismael Gharbi",
    fullName: "Ismael Gharbi",
    number: 11,
    position: "MF",
    club: "Copenhagen",
    pictureUrl: "https://digitalhub.fifa.com/transform/cd471dba-dc7d-4688-9021-e704b66cec76/GHARBI-Ismael_464484",
    dateOfBirth: "2004-04-10",
    height: 180,
    socials: {
      instagram: "i.gharbi10",
      wikipedia: "https://en.wikipedia.org/wiki/Isma%C3%ABl_Gharbi"
    }
  },
  "464533": {
    fifaId: "464533",
    teamCode: "MEX",
    name: "Brian Gutierrez",
    fullName: "Brian Gutierrez",
    number: 26,
    position: "MF",
    club: "Monterrey",
    pictureUrl: "https://digitalhub.fifa.com/transform/dbca9708-0922-4d1d-97cb-1aa53696d6bd/GUTIERREZ-Brian_464533",
    dateOfBirth: "2003-06-17",
    height: 178,
    socials: {
      instagram: "briangutierrez_11",
      wikipedia: "https://en.wikipedia.org/wiki/Brian_Guti%C3%A9rrez"
    }
  },
  "464542": {
    fifaId: "464542",
    teamCode: "USA",
    name: "Alex Freeman",
    fullName: "Alex Freeman",
    number: 16,
    position: "DF",
    club: "FC Dallas",
    pictureUrl: "https://digitalhub.fifa.com/transform/554008b5-0520-4b67-8cab-c72ba087471f/FREEMAN-Alex_464542",
    dateOfBirth: "2004-08-09",
    height: 188,
    socials: {
      instagram: "_alexfreemann",
      wikipedia: "https://en.wikipedia.org/wiki/Alex_Freeman"
    }
  },
  "464546": {
    fifaId: "464546",
    teamCode: "USA",
    name: "Chris Brady",
    fullName: "Chris Brady",
    number: 25,
    position: "GK",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/843ccc00-8c38-4a4e-91ba-a25694677cf0/BRADY-Chris_464546",
    dateOfBirth: "2004-03-03",
    height: 193,
    socials: {
      instagram: "chrisbrady0",
      wikipedia: "https://en.wikipedia.org/wiki/Chris_Brady_(soccer)"
    }
  },
  "464566": {
    fifaId: "464566",
    teamCode: "BIH",
    name: "Esmir Bajraktarevic",
    fullName: "Esmir Bajraktarevic",
    number: 20,
    position: "FW",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/6a74409c-c030-405e-a042-1c01f408eeff/BAJRAKTAREVIC-Esmir_464566",
    dateOfBirth: "2005-03-10",
    height: 175,
    socials: {
      instagram: "esmirbajraktarevic",
      wikipedia: "https://en.wikipedia.org/wiki/Esmir_Bajraktarevi%C4%87"
    }
  },
  "464842": {
    fifaId: "464842",
    teamCode: "SEN",
    name: "Lamine Camara",
    fullName: "Lamine Camara",
    number: 8,
    position: "MF",
    club: "Marselha",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8bad481-9270-4f53-92fd-ec70fbb7a06e/CAMARA-Lamine_464842",
    dateOfBirth: "2004-01-01",
    height: 174,
    socials: {
      instagram: "lamine_camara_15",
      wikipedia: "https://en.wikipedia.org/wiki/Lamine_Camara"
    }
  },
  "464865": {
    fifaId: "464865",
    teamCode: "SEN",
    name: "El Hadji Malick Diouf",
    fullName: "El Hadji Malick Diouf",
    number: 25,
    position: "DF",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/39400519-512a-43ef-97f2-7760d679aea5/DIOUF-El-Hadji-Malick_464865",
    dateOfBirth: "2004-12-29",
    height: 177,
    socials: {
      instagram: "el_hadji_malick_diouf26"
    }
  },
  "466317": {
    fifaId: "466317",
    teamCode: "CUW",
    name: "Juninho Bacuna",
    fullName: "Juninho Bacuna",
    number: 7,
    position: "MF",
    club: "Moreirense",
    pictureUrl: "https://digitalhub.fifa.com/transform/804768d8-badb-4492-9aef-1e523440aed4/BACUNA-Juninho_466317",
    dateOfBirth: "1997-08-07",
    height: 178,
    socials: {
      instagram: "jbacuna07",
      wikipedia: "https://pt.wikipedia.org/wiki/Juninho_Bacuna"
    }
  },
  "466340": {
    fifaId: "466340",
    teamCode: "CUW",
    name: "Leandro Bacuna",
    fullName: "Leandro Bacuna",
    number: 10,
    position: "MF",
    club: "Groningen",
    pictureUrl: "https://digitalhub.fifa.com/transform/ae48f357-6b53-4d49-b62f-fbfb4a041b62/BACUNA-Leandro_466340",
    dateOfBirth: "1991-08-21",
    height: 180,
    socials: {
      instagram: "leandrobacuna07",
      wikipedia: "https://pt.wikipedia.org/wiki/Leandro_Bacuna"
    }
  },
  "466346": {
    fifaId: "466346",
    teamCode: "CUW",
    name: "Brandley Kuwas",
    fullName: "Brandley Kuwas",
    number: 17,
    position: "FW",
    club: "Sabah FK",
    pictureUrl: "https://digitalhub.fifa.com/transform/e68cdb21-7918-4de8-8a37-8d3f1127184b/KUWAS-Brandley_466346",
    dateOfBirth: "1992-09-19",
    height: 181,
    socials: {
      instagram: "brandleykuwas",
      wikipedia: "https://en.wikipedia.org/wiki/Brandley_Kuwas"
    }
  },
  "466350": {
    fifaId: "466350",
    teamCode: "CUW",
    name: "Sherel Floranus",
    fullName: "Sherel Floranus",
    number: 5,
    position: "DF",
    club: "Al Rayyan",
    pictureUrl: "https://digitalhub.fifa.com/transform/8baacb6b-39cd-4a37-8999-58dd5a1d9fec/FLORANUS-Sherel_466350",
    dateOfBirth: "1998-08-23",
    height: 181,
    socials: {
      instagram: "sherellfloranus_",
      wikipedia: "https://en.wikipedia.org/wiki/Sherel_Floranus"
    }
  },
  "466352": {
    fifaId: "466352",
    teamCode: "CUW",
    name: "Kenji Gorre",
    fullName: "Kenji Gorre",
    number: 14,
    position: "FW",
    club: "Los Angeles Galaxy",
    pictureUrl: "https://digitalhub.fifa.com/transform/115a2099-2406-4ca6-8905-91cc71efc98d/GORRE-Kenji_466352",
    dateOfBirth: "1994-09-29",
    height: 174,
    socials: {
      instagram: "kenjigorre",
      wikipedia: "https://en.wikipedia.org/wiki/Kenji_Gorr%C3%A9"
    }
  },
  "466359": {
    fifaId: "466359",
    teamCode: "CUW",
    name: "Godfried Roemeratoe",
    fullName: "Godfried Roemeratoe",
    number: 6,
    position: "MF",
    club: "Willem II",
    pictureUrl: "https://digitalhub.fifa.com/transform/6ed36808-8d19-481f-acce-2a905fbc364c/ROEMERATOE-Godfried_466359",
    dateOfBirth: "1999-08-19",
    height: 178,
    socials: {
      instagram: "godfriedroemeratoe",
      wikipedia: "https://en.wikipedia.org/wiki/Godfried_Roemeratoe"
    }
  },
  "466361": {
    fifaId: "466361",
    teamCode: "CUW",
    name: "Roshon Van Eijma",
    fullName: "Roshon Van Eijma",
    number: 4,
    position: "DF",
    club: "NAC Breda",
    pictureUrl: "https://digitalhub.fifa.com/transform/f03c40c7-6eef-405c-a287-a1f7f1860a30/VAN-EIJMA-Roshon_466361",
    dateOfBirth: "1998-06-09",
    height: 186,
    socials: {
      instagram: "rvaneijma",
      wikipedia: "https://en.wikipedia.org/wiki/Roshon_van_Eijma"
    }
  },
  "466363": {
    fifaId: "466363",
    teamCode: "CUW",
    name: "Jearl Margaritha",
    fullName: "Jearl Margaritha",
    number: 16,
    position: "FW",
    club: "Go Ahead Eagles",
    pictureUrl: "https://digitalhub.fifa.com/transform/c0d47ad2-fcb1-4d7f-b854-99b99cc0cadf/MARGARITHA-Jearl_466363",
    dateOfBirth: "2000-04-10",
    height: 181,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Jearl_Margaritha"
    }
  },
  "466365": {
    fifaId: "466365",
    teamCode: "CUW",
    name: "Kevin Felida",
    fullName: "Kevin Felida",
    number: 22,
    position: "MF",
    club: "Volendam",
    pictureUrl: "https://digitalhub.fifa.com/transform/f9ebf1d2-90fe-4748-8788-19259714fc40/FELIDA-Kevin_466365",
    dateOfBirth: "1999-11-11",
    height: 174,
    socials: {
      instagram: "kevinfelida",
      wikipedia: "https://en.wikipedia.org/wiki/Kevin_Felida"
    }
  },
  "466370": {
    fifaId: "466370",
    teamCode: "CUW",
    name: "Tyrick Bodak",
    fullName: "Tyrick Bodak",
    number: 25,
    position: "GK",
    club: "Dordrecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/c806d05b-ee7a-482f-beb5-b9a6b5871a11/BODAK-Tyrick_466370",
    dateOfBirth: "2002-05-15",
    height: 190,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Tyrick_Bodak"
    }
  },
  "466372": {
    fifaId: "466372",
    teamCode: "CUW",
    name: "Gervane Kastaneer",
    fullName: "Gervane Kastaneer",
    number: 19,
    position: "FW",
    club: "Almere City",
    pictureUrl: "https://digitalhub.fifa.com/transform/18bea3a9-68ef-4e35-ae04-2d494b39971e/KASTANEER-Gervane_466372",
    dateOfBirth: "1996-06-09",
    height: 189,
    socials: {
      instagram: "gervanek33",
      wikipedia: "https://en.wikipedia.org/wiki/Gervane_Kastaneer"
    }
  },
  "466382": {
    fifaId: "466382",
    teamCode: "CUW",
    name: "Trevor Doornbusch",
    fullName: "Trevor Doornbusch",
    number: 26,
    position: "GK",
    club: "Molde",
    pictureUrl: "https://digitalhub.fifa.com/transform/f6d2d4d6-a63d-4278-a520-5edb0dc24e69/DOORNBUSCH-Trevor_466382",
    dateOfBirth: "1999-07-06",
    height: 188,
    socials: {
      instagram: "trevordoornbusch.24",
      wikipedia: "https://en.wikipedia.org/wiki/Trevor_Doornbusch"
    }
  },
  "466585": {
    fifaId: "466585",
    teamCode: "CAN",
    name: "Moise Bombito",
    fullName: "Moise Bombito",
    number: 15,
    position: "DF",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/2d2bbffa-0dcf-47c1-b681-706566867489/BOMBITO-Moise_466585",
    dateOfBirth: "2000-03-30",
    height: 190,
    socials: {
      instagram: "m.bombito_",
      wikipedia: "https://en.wikipedia.org/wiki/Mo%C3%AFse_Bombito"
    }
  },
  "466624": {
    fifaId: "466624",
    teamCode: "USA",
    name: "Folarin Balogun",
    fullName: "Folarin Balogun",
    number: 20,
    position: "FW",
    club: "Monaco",
    pictureUrl: "https://digitalhub.fifa.com/transform/bd47db79-966e-4eba-a8da-f6ba01148f27/BALOGUN-Folarin_466624",
    dateOfBirth: "2001-07-03",
    height: 179,
    socials: {
      instagram: "balogun",
      wikipedia: "https://pt.wikipedia.org/wiki/Folarin_Balogun"
    }
  },
  "466687": {
    fifaId: "466687",
    teamCode: "CAN",
    name: "Ali Ahmed",
    fullName: "Ali Ahmed",
    number: 20,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/123bdaa9-e54b-4b1c-8fd4-5dac88de915e/AHMED-Ali_466687",
    dateOfBirth: "2000-10-10",
    height: 180,
    socials: {
      instagram: "aahmed22_",
      wikipedia: "https://en.wikipedia.org/wiki/Ali_Ahmed_(soccer)"
    }
  },
  "466835": {
    fifaId: "466835",
    teamCode: "HAI",
    name: "Alexandre Pierre",
    fullName: "Alexandre Pierre",
    number: 12,
    position: "GK",
    club: "Le Mans",
    pictureUrl: "https://digitalhub.fifa.com/transform/68889bed-7acd-4e67-a3bd-a18a300e70a0/PIERRE-Alexandre_466835",
    dateOfBirth: "2001-02-25",
    height: 190,
    socials: {
      instagram: "pierrot.jr",
      wikipedia: "https://en.wikipedia.org/wiki/Alexandre_Pierre"
    }
  },
  "466838": {
    fifaId: "466838",
    teamCode: "HAI",
    name: "Danley Jean Jacques",
    fullName: "Danley Jean Jacques",
    number: 17,
    position: "MF",
    club: "Metz",
    pictureUrl: "https://digitalhub.fifa.com/transform/948f9361-348d-4c5d-a26f-83205cae2f6b/JEAN-JACQUES-Danley_466838",
    dateOfBirth: "2000-05-20",
    height: 182,
    socials: {
      instagram: "danley_jean_jacques27",
      wikipedia: "https://en.wikipedia.org/wiki/Danley_Jean_Jacques"
    }
  },
  "466844": {
    fifaId: "466844",
    teamCode: "HAI",
    name: "Markhus Lacroix",
    fullName: "Markhus Lacroix",
    number: 13,
    position: "DF",
    club: "Mirebalais",
    pictureUrl: "https://digitalhub.fifa.com/transform/d7492aa1-5f11-45df-9059-0075ef046a0a/LACROIX-Markhus_466844",
    dateOfBirth: "1993-10-14",
    height: 175,
    socials: {
      instagram: "duke.lacroix",
      wikipedia: "https://en.wikipedia.org/wiki/Duke_Lacroix"
    }
  },
  "466853": {
    fifaId: "466853",
    teamCode: "HAI",
    name: "Josue Duverger",
    fullName: "Josue Duverger",
    number: 23,
    position: "GK",
    club: "Don Bosco",
    pictureUrl: "https://digitalhub.fifa.com/transform/7f30e7f0-2c85-4fa5-aa66-09d5bd74f435/DUVERGER-Josue_466853",
    dateOfBirth: "2000-04-27",
    height: 187,
    socials: {
      instagram: "josue_duverger01",
      wikipedia: "https://en.wikipedia.org/wiki/Josu%C3%A9_Duverger"
    }
  },
  "466862": {
    fifaId: "466862",
    teamCode: "HAI",
    name: "Garven Metusala",
    fullName: "Garven Metusala",
    number: 14,
    position: "DF",
    club: "Dunkerque",
    pictureUrl: null,
    dateOfBirth: "1999-12-31",
    height: 186,
    socials: {
      instagram: "garvenmtsa",
      wikipedia: "https://en.wikipedia.org/wiki/Garven_Metusala"
    }
  },
  "466865": {
    fifaId: "466865",
    teamCode: "HAI",
    name: "Derrick Etienne",
    fullName: "Derrick Etienne",
    number: 7,
    position: "FW",
    club: "Odense",
    pictureUrl: "https://digitalhub.fifa.com/transform/1ddc26ef-11b7-4086-8386-49f6c6bf027c/ETIENNE-Derrick_466865",
    dateOfBirth: "1996-11-25",
    height: 178,
    socials: {
      instagram: "detienne10",
      wikipedia: "https://en.wikipedia.org/wiki/Derrick_Etienne_Jr."
    }
  },
  "472877": {
    fifaId: "472877",
    teamCode: "TUR",
    name: "Irfan Can Kahveci",
    fullName: "Irfan Can Kahveci",
    number: 17,
    position: "FW",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/4661ea5f-9a56-4047-bbcf-6748250e0ebe/KAHVECI-Irfan-Can_472877",
    dateOfBirth: "1995-07-15",
    height: 180,
    socials: {
      instagram: "irfan",
      wikipedia: "https://pt.wikipedia.org/wiki/%C4%B0rfan_Kahveci"
    }
  },
  "472908": {
    fifaId: "472908",
    teamCode: "CZE",
    name: "Vladimir Coufal",
    fullName: "Vladimir Coufal",
    number: 5,
    position: "DF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/e013f16f-8ada-4532-b3c4-b674b0e08cc9/COUFAL-Vladimir_472908",
    dateOfBirth: "1992-08-22",
    height: 175,
    socials: {
      instagram: "cuf_5",
      wikipedia: "https://pt.wikipedia.org/wiki/Vladim%C3%ADr_Coufal"
    }
  },
  "473062": {
    fifaId: "473062",
    teamCode: "URU",
    name: "E. Martinez",
    fullName: "Emiliano Martinez",
    number: 15,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/0cf69c75-fc91-401b-a1f3-f8f833c87eed/MARTINEZ-Emiliano_473062",
    dateOfBirth: "1999-08-17",
    height: 184,
    socials: {
      instagram: "emimartinez.32",
      wikipedia: "https://pt.wikipedia.org/wiki/Emiliano_Mart%C3%ADnez_(futebolista)"
    }
  },
  "473113": {
    fifaId: "473113",
    teamCode: "ENG",
    name: "Eberechi Eze",
    fullName: "Eberechi Eze",
    number: 21,
    position: "MF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/c08bf1d9-1dce-4862-b810-2f9e198a4950/EZE-Eberechi_473113",
    dateOfBirth: "1998-06-29",
    height: 178,
    socials: {
      instagram: "eze",
      wikipedia: "https://pt.wikipedia.org/wiki/Eberechi_Eze"
    }
  },
  "474973": {
    fifaId: "474973",
    teamCode: "ESP",
    name: "Pau Cubarsi",
    fullName: "Pau Cubarsi",
    number: 22,
    position: "DF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/02b8f052-fa36-41a9-807e-e8f7c6a96d61/CUBARSI-Pau_474973",
    dateOfBirth: "2007-01-22",
    height: 183,
    socials: {
      instagram: "paucubarsi",
      wikipedia: "https://pt.wikipedia.org/wiki/Pau_Cubars%C3%AD"
    }
  },
  "475036": {
    fifaId: "475036",
    teamCode: "BRA",
    name: "Rayan",
    fullName: "Rayan",
    number: 26,
    position: "FW",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/c5de4283-2fbb-4691-8de4-39959ad7b755/RAYAN_475036",
    dateOfBirth: "2006-08-03",
    height: 187,
    socials: {
      instagram: "rayann",
      wikipedia: "https://pt.wikipedia.org/wiki/Rayan"
    }
  },
  "475195": {
    fifaId: "475195",
    teamCode: "GER",
    name: "Assan Ouedraogo",
    fullName: "Assan Ouedraogo",
    number: 25,
    position: "MF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/3bdd0feb-2965-4dff-9aa1-22b6d769e90d/OUEDRAOGO-Assan_475195",
    dateOfBirth: "2006-05-09",
    height: 191,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Assan_Ou%C3%A9draogo"
    }
  },
  "475921": {
    fifaId: "475921",
    teamCode: "IRN",
    name: "Amirmohammad Razaghinia",
    fullName: "Amirmohammad Razaghinia",
    number: 26,
    position: "MF",
    club: "Trabzonspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/6526cdf8-5f63-4c78-b14d-9af4cdb862af/RAZAGHINIA-Amirmohammad_475921",
    dateOfBirth: "2006-04-11",
    height: 187,
    socials: {
      instagram: "amir_razaghinia8"
    }
  },
  "476348": {
    fifaId: "476348",
    teamCode: "PAR",
    name: "Damian Bobadilla",
    fullName: "Damian Bobadilla",
    number: 16,
    position: "MF",
    club: "Atletico Tucum\xE1n",
    pictureUrl: "https://digitalhub.fifa.com/transform/720524b9-bfc5-4139-a873-cba0a35bfa95/BOBADILLA-Damian_476348",
    dateOfBirth: "2001-07-11",
    height: 180,
    socials: {
      instagram: "damibobadilla_8",
      wikipedia: "https://pt.wikipedia.org/wiki/Dami%C3%A1n_Bobadilla"
    }
  },
  "477470": {
    fifaId: "477470",
    teamCode: "NOR",
    name: "Bobb",
    fullName: "Oscar Bobb",
    number: 22,
    position: "MF",
    club: "Union Berlin",
    pictureUrl: "https://digitalhub.fifa.com/transform/8cadf37e-ea31-43d7-bc0d-935e74adfe95/BOBB-Oscar_477470",
    dateOfBirth: "2003-07-12",
    height: 177,
    socials: {
      instagram: "oscarbobb",
      wikipedia: "https://pt.wikipedia.org/wiki/Oscar_Bobb"
    }
  },
  "477536": {
    fifaId: "477536",
    teamCode: "URU",
    name: "Federico Vinas",
    fullName: "Federico Vinas",
    number: 21,
    position: "FW",
    club: "LAFC",
    pictureUrl: "https://digitalhub.fifa.com/transform/d89cb053-d9ce-4999-91da-7e9b58f2682a/VINAS-Federico_477536",
    dateOfBirth: "1998-06-30",
    height: 181,
    socials: {
      instagram: "federicovinas98",
      wikipedia: "https://en.wikipedia.org/wiki/Federico_Vi%C3%B1as"
    }
  },
  "477770": {
    fifaId: "477770",
    teamCode: "CPV",
    name: "Pico Lopes",
    fullName: "Pico Lopes",
    number: 4,
    position: "DF",
    club: "Toulouse",
    pictureUrl: "https://digitalhub.fifa.com/transform/aae92383-d5ce-4d00-8eb8-71891a619d11/PICO-LOPES_477770",
    dateOfBirth: "1992-06-17",
    height: 186,
    socials: {
      instagram: "pico_lopes",
      wikipedia: "https://pt.wikipedia.org/wiki/Roberto_Lopes_(futebolista_nascido_em_1992)"
    }
  },
  "477777": {
    fifaId: "477777",
    teamCode: "CIV",
    name: "Oumar Diakite",
    fullName: "Oumar Diakite",
    number: 14,
    position: "FW",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c9072f7-1c82-483b-9f41-a749332fff71/DIAKITE-Oumar_477777",
    dateOfBirth: "2003-12-20",
    height: 182,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Oumar_Diakit%C3%A9"
    }
  },
  "477778": {
    fifaId: "477778",
    teamCode: "CIV",
    name: "Simon Adingra",
    fullName: "Simon Adingra",
    number: 10,
    position: "FW",
    club: "Kasimpasa",
    pictureUrl: "https://digitalhub.fifa.com/transform/ba7341af-8a89-4260-9711-37bec1618ff2/ADINGRA-Simon_477778",
    dateOfBirth: "2002-01-01",
    height: 175,
    socials: {
      instagram: "simon.adingra",
      wikipedia: "https://pt.wikipedia.org/wiki/Simon_Adingra"
    }
  },
  "477790": {
    fifaId: "477790",
    teamCode: "ALG",
    name: "Mohamed Amoura",
    fullName: "Mohamed Amoura",
    number: 18,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/5aa32614-1ae5-49be-aed3-f9636a556385/AMOURA-Mohamed_477790",
    dateOfBirth: "2000-05-09",
    height: 170,
    socials: {
      instagram: "amoura_mohammed_el_amine",
      wikipedia: "https://pt.wikipedia.org/wiki/Mohamed_Amoura"
    }
  },
  "477795": {
    fifaId: "477795",
    teamCode: "ALG",
    name: "Fares Chaibi",
    fullName: "Fares Chaibi",
    number: 10,
    position: "MF",
    club: "Twente",
    pictureUrl: "https://digitalhub.fifa.com/transform/81f29a61-d5a0-466a-86dd-d52b61f29462/CHAIBI-Fares_477795",
    dateOfBirth: "2002-11-28",
    height: 183,
    socials: {
      instagram: "fareschaibi28",
      wikipedia: "https://en.wikipedia.org/wiki/Far%C3%A8s_Cha%C3%AFbi"
    }
  },
  "477802": {
    fifaId: "477802",
    teamCode: "CIV",
    name: "Ousmane Diomande",
    fullName: "Ousmane Diomande",
    number: 2,
    position: "DF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/45b55597-6503-4470-a778-af125afb698a/DIOMANDE-Ousmane_477802",
    dateOfBirth: "2003-12-04",
    height: 190,
    socials: {
      instagram: "ousdiomande",
      wikipedia: "https://en.wikipedia.org/wiki/Ousmane_Diomande"
    }
  },
  "477817": {
    fifaId: "477817",
    teamCode: "ALG",
    name: "Oussama Benbot",
    fullName: "Oussama Benbot",
    number: 16,
    position: "GK",
    club: "Lens",
    pictureUrl: "https://digitalhub.fifa.com/transform/884914ab-5fde-4b43-a31a-99b35849afc8/BENBOT-Oussama_477817",
    dateOfBirth: "1994-10-11",
    height: 188,
    socials: {
      instagram: "oussama.benbot",
      wikipedia: "https://en.wikipedia.org/wiki/Oussama_Benbot"
    }
  },
  "477825": {
    fifaId: "477825",
    teamCode: "CIV",
    name: "Odilon Kossounou",
    fullName: "Odilon Kossounou",
    number: 7,
    position: "DF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3d01f63-7112-4a0d-a50b-0d85927676e9/KOSSOUNOU-Odilon_477825",
    dateOfBirth: "2001-01-04",
    height: 191,
    socials: {
      instagram: "odilonkossounou",
      wikipedia: "https://pt.wikipedia.org/wiki/Odilon_Kossounou"
    }
  },
  "477827": {
    fifaId: "477827",
    teamCode: "CPV",
    name: "Deroy Duarte",
    fullName: "Deroy Duarte",
    number: 14,
    position: "MF",
    club: "Fortuna Sittard",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2a1dda5-24bd-4ef1-8ef4-cde9f3f3b644/DEROY-DUARTE_477827",
    dateOfBirth: "1999-07-04",
    height: 177,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Deroy_Duarte"
    }
  },
  "477829": {
    fifaId: "477829",
    teamCode: "COD",
    name: "Dylan Batubinsika",
    fullName: "Dylan Batubinsika",
    number: 5,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/f5388f1a-825a-4a7d-9668-1f618b0686ea/BATUBINSIKA-Dylan_477829",
    dateOfBirth: "1996-02-15",
    height: 185,
    socials: {
      instagram: "d.batubinsika21",
      wikipedia: "https://en.wikipedia.org/wiki/Dylan_Batubinsika"
    }
  },
  "477831": {
    fifaId: "477831",
    teamCode: "CPV",
    name: "Logan Costa",
    fullName: "Logan Costa",
    number: 5,
    position: "DF",
    club: "Omonia",
    pictureUrl: "https://digitalhub.fifa.com/transform/248677f0-fc09-4244-a18f-7ef9afb98dcc/LOGAN-COSTA_477831",
    dateOfBirth: "2001-04-01",
    height: 190,
    socials: {
      instagram: "l_costa01",
      wikipedia: "https://pt.wikipedia.org/wiki/Logan_Costa"
    }
  },
  "477832": {
    fifaId: "477832",
    teamCode: "CPV",
    name: "Sidny Lopes Cabral",
    fullName: "Sidny Lopes Cabral",
    number: 13,
    position: "DF",
    club: "Mar\xEDtimo",
    pictureUrl: "https://digitalhub.fifa.com/transform/4fd8eea9-a8fe-4571-8bbc-fe728f6160e7/SIDNY-LOPES-CABRAL_477832",
    dateOfBirth: "2002-09-18",
    height: 176,
    socials: {
      instagram: "sidnylc",
      wikipedia: "https://en.wikipedia.org/wiki/Sidny_Lopes_Cabral"
    }
  },
  "477833": {
    fifaId: "477833",
    teamCode: "COD",
    name: "Joris Kayembe",
    fullName: "Joris Kayembe",
    number: 12,
    position: "DF",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/1bb4fcb6-fbfd-4f37-a827-eee403ed2a4f/KAYEMBE-Joris_477833",
    dateOfBirth: "1994-08-08",
    height: 180,
    socials: {
      instagram: "joriskayembe23",
      wikipedia: "https://en.wikipedia.org/wiki/Joris_Kayembe"
    }
  },
  "477835": {
    fifaId: "477835",
    teamCode: "COD",
    name: "Simon Banza",
    fullName: "Simon Banza",
    number: 23,
    position: "FW",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/bea02c15-ba1f-4592-a3dd-80b301e94226/BANZA-Simon_477835",
    dateOfBirth: "1996-08-13",
    height: 189,
    socials: {
      instagram: "simbnz",
      wikipedia: "https://pt.wikipedia.org/wiki/Simon_Banza"
    }
  },
  "477847": {
    fifaId: "477847",
    teamCode: "CPV",
    name: "Steven Moreira",
    fullName: "Steven Moreira",
    number: 22,
    position: "DF",
    club: "Columbus Crew",
    pictureUrl: "https://digitalhub.fifa.com/transform/79a2bdd5-b9a9-41d1-8fdd-3dff50346705/STEVEN-MOREIRA_477847",
    dateOfBirth: "1994-08-13",
    height: 178,
    socials: {
      instagram: "s_moreira20",
      wikipedia: "https://pt.wikipedia.org/wiki/Steven_Moreira"
    }
  },
  "477849": {
    fifaId: "477849",
    teamCode: "CPV",
    name: "Helio Varela",
    fullName: "Helio Varela",
    number: 26,
    position: "MF",
    club: "Penafiel",
    pictureUrl: "https://digitalhub.fifa.com/transform/8c4d8ef4-54e9-4144-84c4-d4933b752442/HELIO-VARELA_477849",
    dateOfBirth: "2002-05-03",
    height: 176,
    socials: {
      instagram: "helio_varela",
      wikipedia: "https://en.wikipedia.org/wiki/H%C3%A9lio_Varela"
    }
  },
  "477852": {
    fifaId: "477852",
    teamCode: "CPV",
    name: "Kevin Pina",
    fullName: "Kevin Pina",
    number: 6,
    position: "MF",
    club: "Belenenses",
    pictureUrl: "https://digitalhub.fifa.com/transform/40e5a4a5-c7f0-4b0e-8a6e-d8ffbaa12d29/KEVIN-PINA_477852",
    dateOfBirth: "1997-01-27",
    height: 177,
    socials: {
      instagram: "kevinpina95",
      wikipedia: "https://en.wikipedia.org/wiki/Kevin_Pina_(footballer)"
    }
  },
  "477853": {
    fifaId: "477853",
    teamCode: "COD",
    name: "Gedeon Kalulu",
    fullName: "G\xE9d\xE9on Kalulu",
    number: 24,
    position: "DF",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/842e89cb-5c6f-4484-bbc2-b9e6d50c2de5/KALULU-Gedeon_477853",
    dateOfBirth: "1997-08-29",
    height: 178,
    socials: {
      instagram: "iam__k2",
      wikipedia: "https://en.wikipedia.org/wiki/G%C3%A9d%C3%A9on_Kalulu"
    }
  },
  "477855": {
    fifaId: "477855",
    teamCode: "CPV",
    name: "Joao Paulo",
    fullName: "Joao Paulo",
    number: 8,
    position: "MF",
    club: "CSKA Sofia",
    pictureUrl: "https://digitalhub.fifa.com/transform/18ee15aa-604d-4dea-964e-7b0a73f3f710/JOAO-PAULO_477855",
    dateOfBirth: "1998-05-26",
    height: 180,
    socials: {
      instagram: "jpfernandes_18"
    }
  },
  "477856": {
    fifaId: "477856",
    teamCode: "CPV",
    name: "Jovane Cabral",
    fullName: "Jovane Cabral",
    number: 7,
    position: "MF",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/4bc8360c-8ddd-4449-9e5f-a100502763b7/JOVANE-CABRAL_477856",
    dateOfBirth: "1998-06-14",
    height: 174,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Jovane_Cabral"
    }
  },
  "477859": {
    fifaId: "477859",
    teamCode: "COD",
    name: "Fiston Mayele",
    fullName: "Fiston Mayele",
    number: 19,
    position: "FW",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/cfecc0dd-e887-4645-b9dc-b9d90296f314/MAYELE-Fiston_477859",
    dateOfBirth: "1994-06-24",
    height: 185,
    socials: {
      instagram: "mayelefiston",
      wikipedia: "https://en.wikipedia.org/wiki/Fiston_Mayele"
    }
  },
  "477862": {
    fifaId: "477862",
    teamCode: "CPV",
    name: "Gilson Benchimol",
    fullName: "Gilson Benchimol",
    number: 9,
    position: "FW",
    club: "Vit\xF3ria SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/11269eaf-5399-423a-9e27-934a7058a71d/GILSON-BENCHIMOL_477862",
    dateOfBirth: "2001-12-29",
    height: 187,
    socials: {
      instagram: "benchimol_tavares",
      wikipedia: "https://pt.wikipedia.org/wiki/Gilson_Tavares"
    }
  },
  "477864": {
    fifaId: "477864",
    teamCode: "COD",
    name: "Aaron Tshibola",
    fullName: "Aaron Tshibola",
    number: 15,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a9cce05-2dd6-4f24-add3-7f4ad4232790/TSHIBOLA-Aaron_477864",
    dateOfBirth: "1995-01-02",
    height: 184,
    socials: {
      instagram: "aarontshibolaa",
      wikipedia: "https://en.wikipedia.org/wiki/Aaron_Tshibola"
    }
  },
  "478364": {
    fifaId: "478364",
    teamCode: "NED",
    name: "Justin Kluivert",
    fullName: "Justin Kluivert",
    number: 7,
    position: "MF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/a80059a3-3430-4e4a-b6c6-fecc2edf4627/KLUIVERT-Justin_478364",
    dateOfBirth: "1999-05-05",
    height: 173,
    socials: {
      instagram: "justinkluivert",
      wikipedia: "https://pt.wikipedia.org/wiki/Justin_Kluivert"
    }
  },
  "479056": {
    fifaId: "479056",
    teamCode: "IRQ",
    name: "Mustafa Saadoon",
    fullName: "Mustafa Saadoon",
    number: 25,
    position: "DF",
    club: "Al-Naft",
    pictureUrl: "https://digitalhub.fifa.com/transform/0a9bb9d5-b94d-4978-9fee-6d6baf634c05/MUSTAFA-SAADOON_479056",
    dateOfBirth: "2001-05-25",
    height: 181,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mustafa_Saadoon_(footballer,_born_2001)"
    }
  },
  "479072": {
    fifaId: "479072",
    teamCode: "IRQ",
    name: "Merchas Doski",
    fullName: "Merchas Doski",
    number: 23,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2ac4751-fd73-4685-8bb6-de4c07266fda/MERCHAS-DOSKI_479072",
    dateOfBirth: "1999-12-07",
    height: 173,
    socials: {
      instagram: "merchas_doski",
      wikipedia: "https://en.wikipedia.org/wiki/Merchas_Doski"
    }
  },
  "479294": {
    fifaId: "479294",
    teamCode: "JPN",
    name: "Kaishu Sano",
    fullName: "Kaishu Sano",
    number: 24,
    position: "MF",
    club: "Leeds United",
    pictureUrl: "https://digitalhub.fifa.com/transform/f5caca4b-2a48-4d7d-906e-1c2c39a6f15c/SANO-Kaishu_479294",
    dateOfBirth: "2000-12-30",
    height: 176,
    socials: {
      instagram: "kaishusano_1230",
      wikipedia: "https://en.wikipedia.org/wiki/Kaish%C5%AB_Sano"
    }
  },
  "479316": {
    fifaId: "479316",
    teamCode: "KOR",
    name: "Park Jinseob",
    fullName: "Park Jinseob",
    number: 16,
    position: "DF",
    club: "FC Augsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/a335e21c-19b8-4406-a3fb-e40bc056bd9f/PARK-Jinseob_479316",
    dateOfBirth: "1995-10-23",
    height: 183,
    socials: {
      instagram: "jinseob.park6"
    }
  },
  "479389": {
    fifaId: "479389",
    teamCode: "JOR",
    name: "Mohannad Abutaha",
    fullName: "Mohannad Abutaha",
    number: 20,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/8ba117bd-6dd8-4fc7-aecd-47cf173c362c/MOHANNAD-ABUTAHA_386415",
    dateOfBirth: "2003-02-02",
    height: 173
  },
  "479553": {
    fifaId: "479553",
    teamCode: "IRQ",
    name: "Hussein Ali",
    fullName: "Hussein Ali",
    number: 3,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/9c065420-c134-4227-aef3-d6d07f0a9b8d/HUSSEIN-ALI_479553",
    dateOfBirth: "2002-03-01",
    height: 182,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Hussein_Ali_(footballer,_born_2002)"
    }
  },
  "479601": {
    fifaId: "479601",
    teamCode: "PAR",
    name: "Juan Jose Caceres",
    fullName: "Juan Jose Caceres",
    number: 4,
    position: "DF",
    club: "Dynamo Moscow",
    pictureUrl: "https://digitalhub.fifa.com/transform/b465c59f-b480-4f3d-8f30-bb61a29aa6cb/CACERES-Juan-Jose_479601",
    dateOfBirth: "2000-06-01",
    height: 187,
    socials: {
      instagram: "caceres_j4",
      wikipedia: "https://pt.wikipedia.org/wiki/Juan_Jos%C3%A9_C%C3%A1ceres"
    }
  },
  "479781": {
    fifaId: "479781",
    teamCode: "TUN",
    name: "Mohamed Hadj Mahmoud",
    fullName: "Mohamed Hadj Mahmoud",
    number: 15,
    position: "MF",
    club: "Esp\xE9rance Sportive",
    pictureUrl: "https://digitalhub.fifa.com/transform/bcdeb1a5-6411-40c5-bac8-576703796438/HADJ-MAHMOUD-Mohamed_479781",
    dateOfBirth: "2000-04-24",
    height: 179,
    socials: {
      instagram: "mouhamed_bel_haj_mahmoud"
    }
  },
  "480322": {
    fifaId: "480322",
    teamCode: "CAN",
    name: "Luc De Fougerolles",
    fullName: "Luc De Fougerolles",
    number: 4,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a74297e-1aa4-41fa-a151-782f1211d1a0/DE-FOUGEROLLES-Luc_480322",
    dateOfBirth: "2005-10-12",
    height: 183,
    socials: {
      instagram: "lucdefoug",
      wikipedia: "https://en.wikipedia.org/wiki/Luc_de_Fougerolles"
    }
  },
  "480966": {
    fifaId: "480966",
    teamCode: "CPV",
    name: "Laros Duarte",
    fullName: "Laros Duarte",
    number: 15,
    position: "MF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/2650fbd7-f8a2-409e-8b2d-85042a719c52/LAROS-DUARTE_480966",
    dateOfBirth: "1997-02-28",
    height: 180,
    socials: {
      instagram: "larosduarte_",
      wikipedia: "https://en.wikipedia.org/wiki/Laros_Duarte"
    }
  },
  "480983": {
    fifaId: "480983",
    teamCode: "ALG",
    name: "Zineddine Belaid",
    fullName: "Zineddine Belaid",
    number: 5,
    position: "DF",
    club: "Be\u015Fikta\u015F",
    pictureUrl: "https://digitalhub.fifa.com/transform/f638bd61-6020-4634-bb13-4c19e3b209de/BELAID-Zineddine_480983",
    dateOfBirth: "1999-03-20",
    height: 186,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Zineddine_Bela%C3%AFd"
    }
  },
  "481027": {
    fifaId: "481027",
    teamCode: "HAI",
    name: "Louicius Deedson",
    fullName: "Louicius Deedson",
    number: 11,
    position: "FW",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/3838199f-c956-4b7c-a728-eef76a086a78/DEEDSON-Louicius_481027",
    dateOfBirth: "2001-02-11",
    height: 178,
    socials: {
      instagram: "louiciusdon",
      wikipedia: "https://en.wikipedia.org/wiki/Louicius_Deedson"
    }
  },
  "481180": {
    fifaId: "481180",
    teamCode: "IRN",
    name: "Shahriyar Moghanloo",
    fullName: "Shahriyar Moghanloo",
    number: 20,
    position: "FW",
    club: "Shabab Al Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0036654-fcd0-4f2c-b924-468f7f63828e/MOGHANLOO-Shahriyar_481180",
    dateOfBirth: "1994-12-21",
    height: 189,
    socials: {
      instagram: "shahriyarmoghanlou10"
    }
  },
  "481181": {
    fifaId: "481181",
    teamCode: "IRN",
    name: "Arya Yousefi",
    fullName: "Arya Yousefi",
    number: 17,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/b648ca0d-4664-422c-af5f-da86c97e22b0/YOUSEFI-Arya_481181",
    dateOfBirth: "2002-04-22",
    height: 181,
    socials: {
      instagram: "ariayousefiii"
    }
  },
  "481183": {
    fifaId: "481183",
    teamCode: "IRQ",
    name: "Akam Hashim",
    fullName: "Akam Hashim",
    number: 5,
    position: "DF",
    club: "Erbil SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/a0dea4f6-7d64-4613-bdd0-558480ddbc80/AKAM-HASHIM_481183_",
    dateOfBirth: "1998-08-16",
    height: 184,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Akam_Hashim"
    }
  },
  "481242": {
    fifaId: "481242",
    teamCode: "RSA",
    name: "Rayners",
    fullName: "Iqraam Rayners",
    number: 15,
    position: "FW",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/f13ebf2a-3cac-4af7-bd73-2b70ed5ecc1a/RAYNERS-Iqraam_481242",
    dateOfBirth: "1995-12-19",
    height: 174,
    socials: {
      instagram: "iqraamrayners",
      wikipedia: "https://en.wikipedia.org/wiki/Iqraam_Rayners"
    }
  },
  "481610": {
    fifaId: "481610",
    teamCode: "ENG",
    name: "Elliot Anderson",
    fullName: "Elliot Anderson",
    number: 8,
    position: "MF",
    club: "Newcastle United",
    pictureUrl: "https://digitalhub.fifa.com/transform/8da5855f-c957-4151-94a0-731e9714249f/ANDERSON-Elliot_481610",
    dateOfBirth: "2002-11-06",
    height: 179,
    socials: {
      instagram: "elliotandersonn",
      wikipedia: "https://pt.wikipedia.org/wiki/Elliot_Anderson"
    }
  },
  "482621": {
    fifaId: "482621",
    teamCode: "ENG",
    name: "Kobbie Mainoo",
    fullName: "Kobbie Mainoo",
    number: 16,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/add399f5-3af6-4ce6-b078-8595e805f1be/MAINOO-Kobbie_482621",
    dateOfBirth: "2005-04-19",
    height: 183,
    socials: {
      instagram: "kobbie",
      wikipedia: "https://pt.wikipedia.org/wiki/Kobbie_Mainoo"
    }
  },
  "482670": {
    fifaId: "482670",
    teamCode: "IRN",
    name: "Mohammad Ghorbani",
    fullName: "Mohammad Ghorbani",
    number: 21,
    position: "MF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/814c55cf-f0a4-4191-bb6d-81c14881ad72/GHORBANI-Mohammad_482670",
    dateOfBirth: "2001-10-07",
    height: 190,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mohammad_Ghorbani_(footballer)"
    }
  },
  "482774": {
    fifaId: "482774",
    teamCode: "CRO",
    name: "Martin Baturina",
    fullName: "Martin Baturina",
    number: 16,
    position: "MF",
    club: "Dinamo Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/b9125a74-a920-4ffc-922b-68d57c524f4e/BATURINA-Martin_482774",
    socials: {
      instagram: "martinbaturina",
      wikipedia: "https://en.wikipedia.org/wiki/Martin_Baturina"
    },
    dateOfBirth: "2003-02-16",
    height: 172
  },
  "482775": {
    fifaId: "482775",
    teamCode: "NZL",
    name: "Tyler Bindon",
    fullName: "Tyler Bindon",
    number: 4,
    position: "DF",
    club: "Reading",
    pictureUrl: "https://digitalhub.fifa.com/transform/14976514-36f8-43b9-80c8-67fb73d13d6b/BINDON-Tyler_482775",
    dateOfBirth: "2005-01-27",
    height: 190,
    socials: {
      instagram: "tylerbindonn",
      wikipedia: "https://en.wikipedia.org/wiki/Tyler_Bindon"
    }
  },
  "482780": {
    fifaId: "482780",
    teamCode: "CPV",
    name: "Kelvin Pires",
    fullName: "Kelvin Pires",
    number: 25,
    position: "DF",
    club: "Acad\xE9mica",
    pictureUrl: "https://digitalhub.fifa.com/transform/612ea8e3-613d-4c06-a13b-d7a1de98a43d/KELVIN-PIRES_482780",
    dateOfBirth: "2000-06-05",
    height: 193,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Kelvin_Pires"
    }
  },
  "482782": {
    fifaId: "482782",
    teamCode: "CPV",
    name: "Dailon Livramento",
    fullName: "Dailon Livramento",
    number: 19,
    position: "FW",
    club: "Pa\xE7os de Ferreira",
    pictureUrl: "https://digitalhub.fifa.com/transform/cded048a-5237-4aac-83d6-cbdbc3fec36f/DAILON-LIVRAMENTO_482782",
    dateOfBirth: "2001-05-04",
    height: 185,
    socials: {
      instagram: "dailonlivramento",
      wikipedia: "https://pt.wikipedia.org/wiki/Dailon_Livramento"
    }
  },
  "482783": {
    fifaId: "482783",
    teamCode: "CPV",
    name: "Wagner Pina",
    fullName: "Wagner Pina",
    number: 24,
    position: "DF",
    club: "Gil Vicente",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0ebca3f-fcb5-4872-a5ce-a17d0d39a88c/WAGNER-PINA_482783",
    dateOfBirth: "2002-11-03",
    height: 180,
    socials: {
      instagram: "wagnerpina_",
      wikipedia: "https://en.wikipedia.org/wiki/Wagner_Pina"
    }
  },
  "482869": {
    fifaId: "482869",
    teamCode: "ALG",
    name: "Jaouen Hadjam",
    fullName: "Jaouen Hadjam",
    number: 13,
    position: "DF",
    club: "SPAL",
    pictureUrl: "https://digitalhub.fifa.com/transform/c24e6b93-736c-41a7-be57-2e165509ce5c/HADJAM-Jaouen_482869",
    dateOfBirth: "2003-03-26",
    height: 185,
    socials: {
      instagram: "jaouen.h3",
      wikipedia: "https://en.wikipedia.org/wiki/Jaouen_Hadjam"
    }
  },
  "482874": {
    fifaId: "482874",
    teamCode: "ALG",
    name: "Anis Hadj Moussa",
    fullName: "Anis Hadj Moussa",
    number: 11,
    position: "FW",
    club: "Be\u015Fikta\u015F",
    pictureUrl: "https://digitalhub.fifa.com/transform/7446a4bb-0884-461c-8fd7-7ce4c93a0a46/HADJ-MOUSSA-Anis_482874",
    dateOfBirth: "2002-02-11",
    height: 176,
    socials: {
      instagram: "hadj.a20",
      wikipedia: "https://en.wikipedia.org/wiki/Anis_Hadj_Moussa"
    }
  },
  "482885": {
    fifaId: "482885",
    teamCode: "TUN",
    name: "Elias Saad",
    fullName: "Elias Saad",
    number: 8,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/2037123b-a7b7-4922-adcd-37607cd92c43/SAAD-Elias_482885",
    dateOfBirth: "1999-12-27",
    height: 185,
    socials: {
      instagram: "elias.a.saad",
      wikipedia: "https://en.wikipedia.org/wiki/Elias_Saad"
    }
  },
  "482931": {
    fifaId: "482931",
    teamCode: "CRO",
    name: "Marco Pasalic",
    fullName: "Marco Pasalic",
    number: 24,
    position: "FW",
    club: "Hajduk Split",
    pictureUrl: "https://digitalhub.fifa.com/transform/ea070001-3892-4086-89c9-fe982a729f5d/PASALIC-Marco_482931",
    dateOfBirth: "2000-09-14",
    height: 177,
    socials: {
      instagram: "marco_pasalic",
      wikipedia: "https://en.wikipedia.org/wiki/Marco_Pa%C5%A1ali%C4%87"
    }
  },
  "482969": {
    fifaId: "482969",
    teamCode: "BIH",
    name: "Nihad Mujakic",
    fullName: "Nihad Mujakic",
    number: 2,
    position: "DF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/2722d62f-602e-4c37-8513-f74b7d11efe4/MUJAKIC-Nihad_482969",
    dateOfBirth: "1998-04-15",
    height: 189,
    socials: {
      instagram: "nihadmujakic18",
      wikipedia: "https://en.wikipedia.org/wiki/Nihad_Mujaki%C4%87"
    }
  },
  "482974": {
    fifaId: "482974",
    teamCode: "BIH",
    name: "Ivan Basic",
    fullName: "Ivan Basic",
    number: 13,
    position: "MF",
    club: "Be\u015Fikta\u015F",
    pictureUrl: "https://digitalhub.fifa.com/transform/7ab9c56e-39f0-4d4a-b5c4-e0583fd57319/BASIC-Ivan_482974",
    dateOfBirth: "2002-04-30",
    height: 178,
    socials: {
      instagram: "basicivan1",
      wikipedia: "https://en.wikipedia.org/wiki/Ivan_Ba%C5%A1i%C4%87"
    }
  },
  "482976": {
    fifaId: "482976",
    teamCode: "BIH",
    name: "Amar Dedic",
    fullName: "Amar Dedic",
    number: 7,
    position: "DF",
    club: "Al Fateh",
    pictureUrl: "https://digitalhub.fifa.com/transform/87dcec5a-fbf4-45d7-8f1e-26e00140cce7/DEDIC-Amar_482976",
    dateOfBirth: "2002-08-18",
    height: 180,
    socials: {
      instagram: "amar_dc",
      wikipedia: "https://en.wikipedia.org/wiki/Amar_Dedi%C4%87"
    }
  },
  "482978": {
    fifaId: "482978",
    teamCode: "BIH",
    name: "Nikola Vasilj",
    fullName: "Nikola Vasilj",
    number: 1,
    position: "GK",
    club: "Midtjylland",
    pictureUrl: "https://digitalhub.fifa.com/transform/be1c5819-9bc1-4bf3-b677-9172d1be6bea/VASILJ-Nikola_482978",
    dateOfBirth: "1995-12-02",
    height: 193,
    socials: {
      instagram: "nikolavasilj22",
      wikipedia: "https://en.wikipedia.org/wiki/Nikola_Vasilj"
    }
  },
  "482984": {
    fifaId: "482984",
    teamCode: "BIH",
    name: "Haris Tabakovic",
    fullName: "Haris Tabakovic",
    number: 23,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/b84ad80f-6b2b-455d-9c2e-f71195b5c2ba/TABAKOVIC-Haris_482984",
    dateOfBirth: "1994-06-20",
    height: 196,
    socials: {
      instagram: "_haristabakovic",
      wikipedia: "https://en.wikipedia.org/wiki/Haris_Tabakovi%C4%87"
    }
  },
  "483127": {
    fifaId: "483127",
    teamCode: "JOR",
    name: "Nour Baniateyah",
    fullName: "Nour Baniateyah",
    number: 12,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/6c4042af-5cac-4b05-94b8-c57aa8f3083f/NOUR-BANIATEYAH_483127",
    dateOfBirth: "1993-01-25",
    height: 179
  },
  "483161": {
    fifaId: "483161",
    teamCode: "EGY",
    name: "Mostafa Zico",
    fullName: "Mostafa Zico",
    number: 11,
    position: "MF",
    club: "Nantes",
    pictureUrl: "https://digitalhub.fifa.com/transform/f417b544-6a3c-46a9-af78-d43d6cedcad1/MOSTAFA-ZICO_483161",
    dateOfBirth: "1997-04-27",
    height: 179,
    socials: {
      instagram: "mostafamohamed.11"
    }
  },
  "483182": {
    fifaId: "483182",
    teamCode: "EGY",
    name: "Hossam Abdelmaguid",
    fullName: "Hossam Abdelmaguid",
    number: 4,
    position: "DF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/406ef52d-c003-4108-b9c2-126b4ad8354b/HOSSAM-ABDELMAGUID_483182",
    dateOfBirth: "2001-04-30",
    height: 193,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Hossam_Abdelmaguid"
    }
  },
  "483183": {
    fifaId: "483183",
    teamCode: "EGY",
    name: "Mahmoud Saber",
    fullName: "Mahmoud Saber",
    number: 21,
    position: "MF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/f1c9f887-0fab-447c-9c91-33aba2c2dbe1/MAHMOUD-SABER_483183",
    dateOfBirth: "2001-07-30",
    height: 170,
    socials: {
      instagram: "mahmoudsaber_33",
      wikipedia: "https://en.wikipedia.org/wiki/Mahmoud_Saber"
    }
  },
  "483264": {
    fifaId: "483264",
    teamCode: "SWE",
    name: "Viktor Johansson",
    fullName: "Viktor Johansson",
    number: 12,
    position: "GK",
    club: "G\xF6ztepe",
    pictureUrl: "https://digitalhub.fifa.com/transform/c311a4ac-f9ad-48d3-99dc-b9c53345d0f9/JOHANSSON-Viktor_483264",
    dateOfBirth: "1998-09-14",
    height: 187,
    socials: {
      instagram: "viktorjohansson_",
      wikipedia: "https://en.wikipedia.org/wiki/Viktor_Johansson"
    }
  },
  "483276": {
    fifaId: "483276",
    teamCode: "SWE",
    name: "Gabriel Gudmundsson",
    fullName: "Gabriel Gudmundsson",
    number: 5,
    position: "DF",
    club: "Wolfsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/43fd52e9-e3a9-46f6-8432-7bfbbb394678/GUDMUNDSSON-Gabriel_483276",
    dateOfBirth: "1999-04-29",
    height: 181,
    socials: {
      instagram: "gudmundsson_",
      wikipedia: "https://pt.wikipedia.org/wiki/Gabriel_Gudmundsson"
    }
  },
  "483304": {
    fifaId: "483304",
    teamCode: "SWE",
    name: "Gustaf Lagerbielke",
    fullName: "Gustaf Lagerbielke",
    number: 2,
    position: "DF",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/12a80a14-c33d-480f-8742-315485c114c1/LAGERBIELKE-Gustaf_483304",
    dateOfBirth: "2000-04-10",
    height: 193,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Gustaf_Lagerbielke_(footballer)"
    }
  },
  "483312": {
    fifaId: "483312",
    teamCode: "SWE",
    name: "Isak Hien",
    fullName: "Isak Hien",
    number: 4,
    position: "DF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/0daf43d1-2714-4cc3-ab8b-3cf2020bf150/HIEN-Isak_483312",
    dateOfBirth: "1999-01-13",
    height: 191,
    socials: {
      instagram: "isakhienz",
      wikipedia: "https://pt.wikipedia.org/wiki/Isak_Hien"
    }
  },
  "483319": {
    fifaId: "483319",
    teamCode: "SWE",
    name: "Hjalmar Ekdal",
    fullName: "Hjalmar Ekdal",
    number: 14,
    position: "DF",
    club: "Elfsborg",
    pictureUrl: "https://digitalhub.fifa.com/transform/23439c93-9021-4c30-b8b1-45141ad89e8c/EKDAL-Hjalmar_483319",
    dateOfBirth: "1998-10-21",
    height: 187,
    socials: {
      instagram: "hjalmarekdal",
      wikipedia: "https://en.wikipedia.org/wiki/Hjalmar_Ekdal"
    }
  },
  "483327": {
    fifaId: "483327",
    teamCode: "SWE",
    name: "Viktor Gyokeres",
    fullName: "Viktor Gyokeres",
    number: 17,
    position: "FW",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/ca3d75bf-7e31-4269-9933-b296eb3f5bff/GYOKERES-Viktor_483327",
    dateOfBirth: "1998-06-04",
    height: 189,
    socials: {
      instagram: "viktorgyokeres",
      wikipedia: "https://pt.wikipedia.org/wiki/Viktor_Gy%C3%B6keres"
    }
  },
  "483442": {
    fifaId: "483442",
    teamCode: "NOR",
    name: "Patrick Berg",
    fullName: "Patrick Berg",
    number: 6,
    position: "MF",
    club: "Rosenborg",
    pictureUrl: "https://digitalhub.fifa.com/transform/aa692fb8-40c4-4273-a583-46ca3f57c34c/BERG-Patrick_483442",
    dateOfBirth: "1997-11-24",
    height: 178,
    socials: {
      instagram: "patrickberg",
      wikipedia: "https://en.wikipedia.org/wiki/Patrick_Berg"
    }
  },
  "483448": {
    fifaId: "483448",
    teamCode: "NOR",
    name: "Antonio Nusa",
    fullName: "Antonio Nusa",
    number: 20,
    position: "FW",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/8522d4db-c622-4f88-9b98-62753ca74eec/NUSA-Antonio_483448",
    dateOfBirth: "2005-04-17",
    height: 183,
    socials: {
      instagram: "nusaantonio",
      wikipedia: "https://pt.wikipedia.org/wiki/Antonio_Nusa"
    }
  },
  "483471": {
    fifaId: "483471",
    teamCode: "FRA",
    name: "Brice Samba",
    fullName: "Brice Samba",
    number: 1,
    position: "GK",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/99fa69d0-8c6e-4c11-a78c-98a70aa322f8/SAMBA-Brice_483471",
    dateOfBirth: "1994-04-25",
    height: 187,
    socials: {
      instagram: "brice_samba1",
      wikipedia: "https://pt.wikipedia.org/wiki/Brice_Samba"
    }
  },
  "483481": {
    fifaId: "483481",
    teamCode: "NED",
    name: "Mats Wieffer",
    fullName: "Mats Wieffer",
    number: 12,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/df746a89-9b34-41d7-8d45-39dc4f010e12/WIEFFER-Mats_483481",
    dateOfBirth: "1999-11-16",
    height: 189,
    socials: {
      instagram: "matswieffer",
      wikipedia: "https://en.wikipedia.org/wiki/Mats_Wieffer"
    }
  },
  "483496": {
    fifaId: "483496",
    teamCode: "NOR",
    name: "Ryerson",
    fullName: "Julian Ryerson",
    number: 26,
    position: "FW",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf3ebe3b-012d-411b-af4e-ba0b59bb9e17/RYERSON-Julian_483496",
    dateOfBirth: "1997-11-17",
    height: 186,
    socials: {
      instagram: "julianryerson",
      wikipedia: "https://pt.wikipedia.org/wiki/Julian_Ryerson"
    }
  },
  "483497": {
    fifaId: "483497",
    teamCode: "NOR",
    name: "Aursnes",
    fullName: "Fredrik Aursnes",
    number: 14,
    position: "MF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bf9f1d6-b7ec-4c50-9337-059f6eb0c097/AURSNES-Fredrik_483497",
    dateOfBirth: "1995-12-10",
    height: 181,
    socials: {
      instagram: "fredrikaurs18",
      wikipedia: "https://pt.wikipedia.org/wiki/Fredrik_Aursnes"
    }
  },
  "483505": {
    fifaId: "483505",
    teamCode: "NOR",
    name: "David Moller Wolfe",
    fullName: "David Moller Wolfe",
    number: 5,
    position: "DF",
    club: "\xC5sane Fotball",
    pictureUrl: "https://digitalhub.fifa.com/transform/27678ee5-00fb-4d48-ac88-402cab97d566/MOLLER-WOLFE-David_483505",
    dateOfBirth: "2002-04-23",
    height: 185,
    socials: {
      instagram: "wolfemdavid",
      wikipedia: "https://en.wikipedia.org/wiki/David_M%C3%B8ller_Wolfe"
    }
  },
  "483512": {
    fifaId: "483512",
    teamCode: "NED",
    name: "Jorrel Hato",
    fullName: "Jorrel Hato",
    number: 25,
    position: "DF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/16b4bf89-fc63-492a-afd1-6f400e8eed92/HATO-Jorrel_483512",
    dateOfBirth: "2006-03-07",
    height: 182,
    socials: {
      instagram: "jorrelhato",
      wikipedia: "https://pt.wikipedia.org/wiki/Jorrel_Hato"
    }
  },
  "483516": {
    fifaId: "483516",
    teamCode: "NOR",
    name: "Kristoffer Ajer",
    fullName: "Kristoffer Ajer",
    number: 3,
    position: "DF",
    club: "Brentford",
    pictureUrl: "https://digitalhub.fifa.com/transform/28de8091-50a6-4c54-9e7b-62788b087a3a/AJER-Kristoffer_483516",
    dateOfBirth: "1998-04-17",
    height: 198,
    socials: {
      instagram: "kristoffer.v.ajer",
      wikipedia: "https://pt.wikipedia.org/wiki/Kristoffer_Ajer"
    }
  },
  "483526": {
    fifaId: "483526",
    teamCode: "NED",
    name: "Tijjani Reijnders",
    fullName: "Tijjani Reijnders",
    number: 14,
    position: "MF",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/3f7090ee-2e95-4b6c-a098-729b07484fb2/REIJNDERS-Tijjani_483526",
    dateOfBirth: "1998-07-29",
    height: 178,
    socials: {
      instagram: "tijjanireijnders",
      wikipedia: "https://pt.wikipedia.org/wiki/Tijjani_Reijnders"
    }
  },
  "483530": {
    fifaId: "483530",
    teamCode: "NOR",
    name: "Fredrik Andre Bjorkan",
    fullName: "Fredrik Andre Bjorkan",
    number: 15,
    position: "DF",
    club: "Standard de Li\xE8ge",
    pictureUrl: "https://digitalhub.fifa.com/transform/d46985d1-90f0-4e2a-91f2-d00c0c98d796/BJORKAN-Fredrik-Andre_483530",
    dateOfBirth: "1998-08-21",
    height: 180,
    socials: {
      instagram: "fredrikbjorkan",
      wikipedia: "https://en.wikipedia.org/wiki/Fredrik_Andr%C3%A9_Bj%C3%B8rkan"
    }
  },
  "483535": {
    fifaId: "483535",
    teamCode: "NOR",
    name: "Egil Selvik",
    fullName: "Egil Selvik",
    number: 13,
    position: "GK",
    club: "Midtjylland",
    pictureUrl: "https://digitalhub.fifa.com/transform/b6e7f73a-c70c-4f7c-b0a4-37c8961fb019/SELVIK-Egil_483535",
    dateOfBirth: "1997-07-30",
    height: 187,
    socials: {
      instagram: "egil_s",
      wikipedia: "https://en.wikipedia.org/wiki/Egil_Selvik"
    }
  },
  "483549": {
    fifaId: "483549",
    teamCode: "FRA",
    name: "Za\xEFre-Emery",
    fullName: "Warren Zaire-Emery",
    number: 18,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/c4237ad3-cb10-4854-b9de-54126267d251/ZAIRE-EMERY-Warren_483549",
    dateOfBirth: "2006-03-08",
    height: 176,
    socials: {
      instagram: "wzairemery6",
      wikipedia: "https://pt.wikipedia.org/wiki/Warren_Za%C3%AFre-Emery"
    }
  },
  "483553": {
    fifaId: "483553",
    teamCode: "NED",
    name: "Lutsharel Geertruida",
    fullName: "Lutsharel Geertruida",
    number: 2,
    position: "DF",
    club: "Girona",
    pictureUrl: "https://digitalhub.fifa.com/transform/1248c411-1f1f-436d-9731-3b1c3b6db0e6/GEERTRUIDA-Lutsharel_483553",
    dateOfBirth: "2000-07-18",
    height: 185,
    socials: {
      instagram: "lutshageertruida",
      wikipedia: "https://pt.wikipedia.org/wiki/Lutsharel_Geertruida"
    }
  },
  "483936": {
    fifaId: "483936",
    teamCode: "CZE",
    name: "David Doudera",
    fullName: "David Doudera",
    number: 21,
    position: "DF",
    club: "Sparta Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/04fa0573-e1fa-4158-a14d-7129641cc700/DOUDERA-David_483936",
    dateOfBirth: "1998-05-31",
    height: 175,
    socials: {
      instagram: "david_doudera",
      wikipedia: "https://en.wikipedia.org/wiki/David_Doud%C4%9Bra"
    }
  },
  "483961": {
    fifaId: "483961",
    teamCode: "CZE",
    name: "Tomas Chory",
    fullName: "Tomas Chory",
    number: 19,
    position: "FW",
    club: "Sparta Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/566b2c11-0ed7-4ad0-8e39-2e8a6fb4ba94/CHORY-Tomas_483961",
    dateOfBirth: "1995-01-26",
    height: 199,
    socials: {
      instagram: "tomascoro",
      wikipedia: "https://en.wikipedia.org/wiki/Tom%C3%A1%C5%A1_Chor%C3%BD"
    }
  },
  "483966": {
    fifaId: "483966",
    teamCode: "BIH",
    name: "Benjamin Tahirovic",
    fullName: "Benjamin Tahirovic",
    number: 6,
    position: "MF",
    club: "Lugano",
    pictureUrl: "https://digitalhub.fifa.com/transform/998f85b6-06db-4822-99de-68010b6cdc61/TAHIROVIC-Benjamin_483966",
    dateOfBirth: "2003-03-03",
    height: 191,
    socials: {
      instagram: "b.tahirovic1",
      wikipedia: "https://en.wikipedia.org/wiki/Benjamin_Tahirovi%C4%87"
    }
  },
  "483990": {
    fifaId: "483990",
    teamCode: "CZE",
    name: "David Jurasek",
    fullName: "David Jurasek",
    number: 14,
    position: "DF",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/4e32c53e-28e4-4757-ab4e-c7b18cee9bbf/JURASEK-David_483990",
    dateOfBirth: "2000-08-07",
    height: 183,
    socials: {
      instagram: "dava33__",
      wikipedia: "https://pt.wikipedia.org/wiki/David_Jur%C3%A1sek"
    }
  },
  "484003": {
    fifaId: "484003",
    teamCode: "CZE",
    name: "Mojmir Chytil",
    fullName: "Mojmir Chytil",
    number: 13,
    position: "FW",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/8b7fe7be-c13f-4245-9a48-470a88d95aa9/CHYTIL-Mojmir_484003",
    dateOfBirth: "1999-04-29",
    height: 187,
    socials: {
      instagram: "iam_mojma_",
      wikipedia: "https://en.wikipedia.org/wiki/Mojm%C3%ADr_Chytil"
    }
  },
  "484011": {
    fifaId: "484011",
    teamCode: "CZE",
    name: "Lukas Provod",
    fullName: "Lukas Provod",
    number: 17,
    position: "MF",
    club: "Rangers",
    pictureUrl: "https://digitalhub.fifa.com/transform/e5e6a265-9886-4e25-97c0-c4f2f230277d/PROVOD-Lukas_484011",
    dateOfBirth: "1996-10-23",
    height: 191,
    socials: {
      instagram: "lukas.provod",
      wikipedia: "https://en.wikipedia.org/wiki/Luk%C3%A1%C5%A1_Provod"
    }
  },
  "484012": {
    fifaId: "484012",
    teamCode: "CZE",
    name: "Matej Kovar",
    fullName: "Matej Kovar",
    number: 1,
    position: "GK",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/06f2bdbf-6411-4f1c-885b-3c745e37363e/KOVAR-Matej_484012",
    dateOfBirth: "2000-05-17",
    height: 196,
    socials: {
      instagram: "mkovar1705",
      wikipedia: "https://pt.wikipedia.org/wiki/Mat%C4%9Bj_Kov%C3%A1%C5%99"
    }
  },
  "484022": {
    fifaId: "484022",
    teamCode: "BIH",
    name: "Tarik Muharemovic",
    fullName: "Tarik Muharemovic",
    number: 4,
    position: "DF",
    club: "Dinamo Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/a230cb00-997c-4a8c-9983-b03fa2dbe2ad/MUHAREMOVIC-Tarik_484022",
    dateOfBirth: "2003-02-28",
    height: 192,
    socials: {
      instagram: "tarik.muharemovic",
      wikipedia: "https://en.wikipedia.org/wiki/Tarik_Muharemovi%C4%87"
    }
  },
  "484045": {
    fifaId: "484045",
    teamCode: "SCO",
    name: "Lawrence Shankland",
    fullName: "Lawrence Shankland",
    number: 20,
    position: "FW",
    club: "QPR",
    pictureUrl: "https://digitalhub.fifa.com/transform/6a373a65-ca0e-4c4b-a61b-b98c73fdefdd/SHANKLAND-Lawrence_484045",
    dateOfBirth: "1995-08-10",
    height: 185,
    socials: {
      instagram: "lawrenceshankland",
      wikipedia: "https://en.wikipedia.org/wiki/Lawrence_Shankland"
    }
  },
  "484051": {
    fifaId: "484051",
    teamCode: "SCO",
    name: "Kenny Mclean",
    fullName: "Kenny Mclean",
    number: 23,
    position: "MF",
    club: "Middlesbrough",
    pictureUrl: "https://digitalhub.fifa.com/transform/e1f470ca-8805-4250-8c30-39aa30a16ac9/McLEAN-Kenny_484051",
    dateOfBirth: "1992-01-08",
    height: 183,
    socials: {
      instagram: "kennymclean66",
      wikipedia: "https://en.wikipedia.org/wiki/Kenny_McLean"
    }
  },
  "484065": {
    fifaId: "484065",
    teamCode: "TUR",
    name: "Eren Elmali",
    fullName: "Eren Elmali",
    number: 13,
    position: "DF",
    club: "Trabzonspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/9e9cf618-403b-4984-801d-3e82f0e11d3e/ELMALI-Eren_484065",
    dateOfBirth: "2000-07-07",
    height: 181,
    socials: {
      instagram: "elmali",
      wikipedia: "https://en.wikipedia.org/wiki/Eren_Elmal%C4%B1"
    }
  },
  "484072": {
    fifaId: "484072",
    teamCode: "TUR",
    name: "Samet Akaydin",
    fullName: "Samet Akaydin",
    number: 25,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/72f4dcdb-4463-412b-8ea1-9cb25d4fe44d/AKAYDIN-Samet_484072",
    dateOfBirth: "1994-03-13",
    height: 190,
    socials: {
      instagram: "sametakaydin4",
      wikipedia: "https://en.wikipedia.org/wiki/Samet_Akaydin"
    }
  },
  "484073": {
    fifaId: "484073",
    teamCode: "SCO",
    name: "Dominic Hyam",
    fullName: "Dominic Hyam",
    number: 16,
    position: "DF",
    club: "Bologna",
    pictureUrl: "https://digitalhub.fifa.com/transform/ab423ff9-7286-4242-8898-6d24bf8f1749/HYAM-Dominic_484073",
    dateOfBirth: "1995-12-20",
    height: 188,
    socials: {
      instagram: "domhyam_95",
      wikipedia: "https://en.wikipedia.org/wiki/Dominic_Hyam"
    }
  },
  "484082": {
    fifaId: "484082",
    teamCode: "TUR",
    name: "Abdulkerim Bardakci",
    fullName: "Abdulkerim Bardakci",
    number: 14,
    position: "DF",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/de2b1023-3aee-4233-b83d-07f94fd288d4/BARDAKCI-Abdulkerim_484082",
    dateOfBirth: "1994-09-07",
    height: 185,
    socials: {
      instagram: "abdulkerimbardakci",
      wikipedia: "https://en.wikipedia.org/wiki/Abd%C3%BClkerim_Bardakc%C4%B1"
    }
  },
  "484087": {
    fifaId: "484087",
    teamCode: "TUR",
    name: "Arda G\xFCler",
    fullName: "Arda Guler",
    number: 8,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/e2f26175-13ac-4850-acd7-6408de06ce19/GULER-Arda_484087",
    dateOfBirth: "2005-02-25",
    height: 175,
    socials: {
      instagram: "ardaguler",
      wikipedia: "https://pt.wikipedia.org/wiki/Arda_G%C3%BCler"
    }
  },
  "484092": {
    fifaId: "484092",
    teamCode: "TUR",
    name: "Ismail Yuksek",
    fullName: "Ismail Yuksek",
    number: 16,
    position: "MF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/1f8b0453-0b84-4eea-9c24-9cd992611aed/YUKSEK-Ismail_484092",
    dateOfBirth: "1999-01-26",
    height: 183,
    socials: {
      instagram: "ismailyuksek",
      wikipedia: "https://en.wikipedia.org/wiki/%C4%B0smail_Y%C3%BCksek"
    }
  },
  "484112": {
    fifaId: "484112",
    teamCode: "TUR",
    name: "Yildiz",
    fullName: "Kenan Yildiz",
    number: 11,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/7dff809e-a965-4b36-a7b5-8da772fc96a5/YILDIZ-Kenan_484112",
    dateOfBirth: "2005-05-04",
    height: 187,
    socials: {
      instagram: "kenanyildiz",
      wikipedia: "https://pt.wikipedia.org/wiki/Kenan_Y%C4%B1ld%C4%B1z"
    }
  },
  "484113": {
    fifaId: "484113",
    teamCode: "TUR",
    name: "Ferdi Kadioglu",
    fullName: "Ferdi Kadioglu",
    number: 20,
    position: "DF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/c69621e7-9ba5-438d-89dc-7871b6e0f611/KADIOGLU-Ferdi_484113",
    dateOfBirth: "1999-10-07",
    height: 174,
    socials: {
      instagram: "ferdikadioglu",
      wikipedia: "https://pt.wikipedia.org/wiki/Ferdi_Kad%C4%B1o%C4%9Flu"
    }
  },
  "484139": {
    fifaId: "484139",
    teamCode: "TUR",
    name: "Baris Alper Yilmaz",
    fullName: "Baris Alper Yilmaz",
    number: 21,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/49e46d17-bf69-41b1-a8df-5aeabf137c7d/YILMAZ-Baris-Alper_484139",
    dateOfBirth: "2000-05-23",
    height: 186,
    socials: {
      instagram: "barisalperyilmaz",
      wikipedia: "https://en.wikipedia.org/wiki/Bar%C4%B1%C5%9F_Alper_Y%C4%B1lmaz"
    }
  },
  "484141": {
    fifaId: "484141",
    teamCode: "POR",
    name: "J. Neves",
    fullName: "Jo\xE3o Neves",
    number: 15,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/c79cf261-45b2-484b-860f-9adac3ed7d17/JOAO-NEVES_484141",
    dateOfBirth: "2004-09-27",
    height: 171,
    socials: {
      instagram: "joao_neves87",
      wikipedia: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Neves"
    }
  },
  "484262": {
    fifaId: "484262",
    teamCode: "IRQ",
    name: "Marko Farji",
    fullName: "Marko Farji",
    number: 21,
    position: "FW",
    club: "Hoverla Uzhhorod",
    pictureUrl: "https://digitalhub.fifa.com/transform/97055547-246e-4bc9-8130-5903cd33077d/MARKO-FARJI_484262",
    dateOfBirth: "2004-03-16",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Marko_Farji"
    }
  },
  "484270": {
    fifaId: "484270",
    teamCode: "IRQ",
    name: "Zaid Ismael",
    fullName: "Zaid Ismael",
    number: 24,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/062e505a-0067-4b87-963d-a0e7ad53decb/ZAID-ISMAEL_484270",
    dateOfBirth: "2002-01-03",
    height: 185
  },
  "484276": {
    fifaId: "484276",
    teamCode: "IRQ",
    name: "Ahmed Maknazi",
    fullName: "Ahmed Maknazi",
    number: 15,
    position: "DF",
    club: "Al-Zawraa",
    pictureUrl: "https://digitalhub.fifa.com/transform/b19b8bfa-2aea-4d19-84a9-94cdf65b3445/AHMED-MAKNAZI_484276",
    dateOfBirth: "2001-09-24",
    height: 183
  },
  "484320": {
    fifaId: "484320",
    teamCode: "ESP",
    name: "Lamine Yamal",
    fullName: "Lamine Yamal",
    number: 19,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/37b631d3-c340-4590-91a8-bb00bd5f1e89/YAMAL-Lamine_484320",
    dateOfBirth: "2007-07-13",
    height: 183,
    socials: {
      instagram: "lamineyamal",
      wikipedia: "https://pt.wikipedia.org/wiki/Lamine_Yamal"
    },
    worldCupNote: "## Leitura\nIn\xEDcio discreto e abaixo do potencial \u2014 mais pela situa\xE7\xE3o da equipe do que por um erro individual. Saindo do banco num jogo travado, Yamal teve pouco espa\xE7o para decidir. O cen\xE1rio \xE9 de oportunidade imediata: contra Ar\xE1bia Saudita e Uruguai, a Espanha precisa acordar ofensivamente, e o camisa 19 \xE9 exatamente o tipo de jogador que pode destravar. Espera-se uma evolu\xE7\xE3o forte nas pr\xF3ximas rodadas.\n## Desempenho\nEntrou como substituto na estreia (1 entrada, nenhuma sa\xEDda): come\xE7ou no banco e teve participa\xE7\xE3o parcial no empate sem gols com Cabo Verde. N\xE3o marcou e n\xE3o recebeu cart\xF5es, num jogo em que toda a Espanha passou em branco.\n## N\xFAmeros\nJ1 \xB7 0 gols \xB7 0 cart\xF5es \xB7 1 entrada (substitui\xE7\xE3o). Espanha em 3\xBA do grupo, com 1 ponto e saldo zerado (0 GP, 0 GC) \u2014 nenhum espanhol balan\xE7ou as redes at\xE9 aqui."
  },
  "484691": {
    fifaId: "484691",
    teamCode: "ESP",
    name: "Joan Garcia",
    fullName: "Joan Garcia",
    number: 13,
    position: "GK",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/08439f96-c835-4b28-9fc5-7e90d4e82738/GARCIA-Joan_484691",
    dateOfBirth: "2001-05-04",
    height: 194,
    socials: {
      instagram: "__joangarcia",
      wikipedia: "https://pt.wikipedia.org/wiki/Joan_Garc%C3%ADa"
    }
  },
  "484698": {
    fifaId: "484698",
    teamCode: "SEN",
    name: "Assane Diao",
    fullName: "Assane Diao",
    number: 7,
    position: "FW",
    club: "RC Lens",
    pictureUrl: "https://digitalhub.fifa.com/transform/2b8bf568-c645-4cbc-995a-5980c82e393b/DIAO-Assane_484698",
    dateOfBirth: "2005-09-07",
    height: 185,
    socials: {
      instagram: "assandiao.8",
      wikipedia: "https://pt.wikipedia.org/wiki/Assane_Diao"
    }
  },
  "484728": {
    fifaId: "484728",
    teamCode: "ESP",
    name: "Marc Pubill",
    fullName: "Marc Pubill",
    number: 2,
    position: "DF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/fd21bf4f-bf7d-4917-8afd-3def8e7e5069/PUBILL-Marc_484728",
    dateOfBirth: "2003-06-20",
    height: 191,
    socials: {
      instagram: "markus_pubill27",
      wikipedia: "https://pt.wikipedia.org/wiki/Marc_Pubill"
    }
  },
  "484817": {
    fifaId: "484817",
    teamCode: "NZL",
    name: "Lachlan Bayliss",
    fullName: "Lachlan Bayliss",
    number: 25,
    position: "MF",
    club: "Auckland FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/d63e6762-f433-47f1-82b3-be3627b12941/BAYLISS-Lachlan_484817",
    dateOfBirth: "2002-07-24",
    height: 178,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Lachlan_Bayliss"
    }
  },
  "484848": {
    fifaId: "484848",
    teamCode: "GER",
    name: "Gro\xDF",
    fullName: "Pascal Gross",
    number: 13,
    position: "MF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/c7eaa0cd-48e1-4349-a6d9-dd00553b7913/GROSS-Pascal_484848",
    dateOfBirth: "1991-06-15",
    height: 181,
    socials: {
      instagram: "pascalgross_",
      wikipedia: "https://pt.wikipedia.org/wiki/Pascal_Gro%C3%9F"
    }
  },
  "484849": {
    fifaId: "484849",
    teamCode: "GER",
    name: "Pavlovic",
    fullName: "Aleksandar Pavlovic",
    number: 5,
    position: "MF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/7cfb5f20-6f8a-4329-97a2-be3cb66fea0f/PAVLOVIC-Aleksandar_484849",
    dateOfBirth: "2004-05-03",
    height: 188,
    socials: {
      instagram: "alekspavlovic_",
      wikipedia: "https://pt.wikipedia.org/wiki/Aleksandar_Pavlovi%C4%87"
    }
  },
  "484850": {
    fifaId: "484850",
    teamCode: "GER",
    name: "Beier",
    fullName: "Maximilian Beier",
    number: 14,
    position: "FW",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/34e90391-c4b4-4a96-9b57-71c45bb584c2/BEIER-Maximilian_484850",
    dateOfBirth: "2002-10-17",
    height: 185,
    socials: {
      instagram: "maxbeier.14",
      wikipedia: "https://pt.wikipedia.org/wiki/Maximilian_Beier"
    }
  },
  "484851": {
    fifaId: "484851",
    teamCode: "GER",
    name: "Deniz Undav",
    fullName: "Deniz Undav",
    number: 26,
    position: "FW",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/3ec30e08-a7eb-4781-aea8-0e9ff86ebef1/UNDAV-Deniz_484851",
    dateOfBirth: "1996-07-19",
    height: 179,
    socials: {
      instagram: "denizundav",
      wikipedia: "https://pt.wikipedia.org/wiki/Deniz_Undav"
    }
  },
  "484859": {
    fifaId: "484859",
    teamCode: "NED",
    name: "Quinten Timber",
    fullName: "Quinten Timber",
    number: 26,
    position: "MF",
    club: "AZ Alkmaar",
    pictureUrl: "https://digitalhub.fifa.com/transform/ac98da17-3346-4d88-b52f-4ce34c82f587/TIMBER-Quinten_484859",
    dateOfBirth: "2001-06-17",
    height: 176,
    socials: {
      instagram: "quintentimber",
      wikipedia: "https://en.wikipedia.org/wiki/Quinten_Timber"
    }
  },
  "484860": {
    fifaId: "484860",
    teamCode: "FRA",
    name: "Barcola",
    fullName: "Bradley Barcola",
    number: 12,
    position: "FW",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/10e80ef7-3aa9-4c07-9639-e8bc04828d31/BARCOLA-Bradley_484860",
    dateOfBirth: "2002-09-02",
    height: 187,
    socials: {
      instagram: "bradley_dls",
      wikipedia: "https://pt.wikipedia.org/wiki/Bradley_Barcola"
    }
  },
  "484862": {
    fifaId: "484862",
    teamCode: "SUI",
    name: "Marvin Keller",
    fullName: "Marvin Keller",
    number: 21,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/4c9ca839-ca31-4d4c-a620-3a5117c5efa8/KELLER-Marvin_484862",
    dateOfBirth: "2002-07-03",
    height: 189,
    socials: {
      instagram: "marvinkeller1",
      wikipedia: "https://en.wikipedia.org/wiki/Marvin_Keller_(footballer)"
    }
  },
  "484864": {
    fifaId: "484864",
    teamCode: "SUI",
    name: "Aurele Amenda",
    fullName: "Aurele Amenda",
    number: 24,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/f38da0cf-fda0-4f52-838c-0bb40ab279c8/AMENDA-Aurele_484864",
    dateOfBirth: "2003-07-31",
    height: 194,
    socials: {
      instagram: "aureleamenda",
      wikipedia: "https://en.wikipedia.org/wiki/Aur%C3%A8le_Amenda"
    }
  },
  "485063": {
    fifaId: "485063",
    teamCode: "BIH",
    name: "Samed Bazdar",
    fullName: "Samed Bazdar",
    number: 9,
    position: "FW",
    club: "Stuttgart",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bd9c46f-fb55-4097-ae91-9c7e4f6bb308/BAZDAR-Samed_485063",
    dateOfBirth: "2004-01-31",
    height: 189,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Samed_Ba%C5%BEdar"
    }
  },
  "485064": {
    fifaId: "485064",
    teamCode: "CAN",
    name: "Niko Sigur",
    fullName: "Niko Sigur",
    number: 23,
    position: "DF",
    club: "Toronto FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/e0c93e53-1609-4a5c-95be-b4eb0c044003/SIGUR-Niko_485064",
    dateOfBirth: "2003-09-09",
    height: 178,
    socials: {
      instagram: "nikosigur",
      wikipedia: "https://en.wikipedia.org/wiki/Niko_Sigur"
    }
  },
  "485065": {
    fifaId: "485065",
    teamCode: "CRO",
    name: "Toni Fruk",
    fullName: "Toni Fruk",
    number: 19,
    position: "MF",
    club: "Dinamo Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/f71b54fc-4cf8-463c-b8cc-7837e3d9eca8/FRUK-Toni_390197",
    dateOfBirth: "2001-03-09",
    height: 177,
    socials: {
      instagram: "tonifruk",
      wikipedia: "https://en.wikipedia.org/wiki/Toni_Fruk"
    }
  },
  "485066": {
    fifaId: "485066",
    teamCode: "CRO",
    name: "Petar Sucic",
    fullName: "Petar Sucic",
    number: 17,
    position: "MF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/89c383c2-39ba-413d-b945-e42dd2d47c6d/SUCIC-Petar_485066",
    dateOfBirth: "2003-10-25",
    height: 183,
    socials: {
      instagram: "petar_sucic",
      wikipedia: "https://en.wikipedia.org/wiki/Petar_Su%C4%8Di%C4%87"
    }
  },
  "485068": {
    fifaId: "485068",
    teamCode: "CRO",
    name: "Igor Matanovic",
    fullName: "Igor Matanovic",
    number: 20,
    position: "FW",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/72c82c16-da76-4f5a-a849-5b84343228eb/MATANOVIC-Igor_485068",
    dateOfBirth: "2003-03-31",
    height: 194,
    socials: {
      instagram: "igor.matanovic",
      wikipedia: "https://en.wikipedia.org/wiki/Igor_Matanovi%C4%87"
    }
  },
  "485069": {
    fifaId: "485069",
    teamCode: "BRA",
    name: "Ederson Silva",
    fullName: "Ederson Silva",
    number: 2,
    position: "MF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/5e5df9e4-86e2-4292-bc7a-8e95b4aa7e47/EDERSON-SILVA_485069",
    dateOfBirth: "1999-07-07",
    height: 184,
    socials: {
      instagram: "ederson99",
      wikipedia: "https://pt.wikipedia.org/wiki/%C3%89derson_Jos%C3%A9_dos_Santos_Louren%C3%A7o_da_Silva"
    }
  },
  "485070": {
    fifaId: "485070",
    teamCode: "MEX",
    name: "Raul Rangel",
    fullName: "Raul Rangel",
    number: 1,
    position: "GK",
    club: "Club Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/3ea092ae-841d-4dc6-9ca0-78eb4dfb97c7/RANGEL-Raul_485070",
    dateOfBirth: "2000-02-25",
    height: 190,
    socials: {
      instagram: "raulra_22",
      wikipedia: "https://en.wikipedia.org/wiki/Ra%C3%BAl_Rangel_(footballer)"
    }
  },
  "485080": {
    fifaId: "485080",
    teamCode: "ENG",
    name: "James Trafford",
    fullName: "James Trafford",
    number: 23,
    position: "GK",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/f923135f-5d11-46cb-90a3-517f74cb4c76/TRAFFORD-James_485080",
    dateOfBirth: "2002-10-10",
    height: 197,
    socials: {
      instagram: "jamestrafford",
      wikipedia: "https://pt.wikipedia.org/wiki/James_Trafford"
    }
  },
  "485081": {
    fifaId: "485081",
    teamCode: "POR",
    name: "F. Concei\xE7\xE3o",
    fullName: "Francisco Concei\xE7\xE3o",
    number: 26,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/1cb86e09-cf4e-4b60-8849-09d17dd1f8ad/FRANCISCO-CONCEICAO_485081",
    dateOfBirth: "2002-12-14",
    height: 166,
    socials: {
      instagram: "francisco.conceicao7",
      wikipedia: "https://pt.wikipedia.org/wiki/Francisco_Concei%C3%A7%C3%A3o"
    }
  },
  "485131": {
    fifaId: "485131",
    teamCode: "SCO",
    name: "Ben Gannon-Doak",
    fullName: "Ben Gannon-Doak",
    number: 17,
    position: "FW",
    club: "Rangers",
    pictureUrl: "https://digitalhub.fifa.com/transform/7cf469cc-72f7-4c4b-9312-817920757af3/GANNON-DOAK-Ben_485131",
    dateOfBirth: "2005-11-11",
    height: 173,
    socials: {
      instagram: "bendoak._",
      wikipedia: "https://pt.wikipedia.org/wiki/Ben_Gannon-Doak"
    }
  },
  "485324": {
    fifaId: "485324",
    teamCode: "CUW",
    name: "Arjany Martha",
    fullName: "Arjany Martha",
    number: 15,
    position: "MF",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/d909c1d1-c54d-4dfa-a951-979ae80e7b8a/MARTHA-Arjany_485324",
    dateOfBirth: "2003-09-04",
    height: 180
  },
  "485347": {
    fifaId: "485347",
    teamCode: "CUW",
    name: "Tahith Chong",
    fullName: "Tahith Chong",
    number: 21,
    position: "MF",
    club: "Charleroi",
    pictureUrl: "https://digitalhub.fifa.com/transform/402300d2-89f5-4c17-97be-494664b73565/CHONG-Tahith_485347",
    dateOfBirth: "1999-12-04",
    height: 185,
    socials: {
      instagram: "tahithchong",
      wikipedia: "https://pt.wikipedia.org/wiki/Tahith_Chong"
    }
  },
  "485379": {
    fifaId: "485379",
    teamCode: "CUW",
    name: "Shurandy Sambo",
    fullName: "Shurandy Sambo",
    number: 2,
    position: "DF",
    club: "Al Hazem",
    pictureUrl: "https://digitalhub.fifa.com/transform/4d41ae09-f81a-44fc-a53b-6e1b3e46521b/SAMBO-Shurandy_485379",
    dateOfBirth: "2001-08-19",
    height: 174,
    socials: {
      instagram: "shurandysambo",
      wikipedia: "https://en.wikipedia.org/wiki/Shurandy_Sambo"
    }
  },
  "485409": {
    fifaId: "485409",
    teamCode: "HAI",
    name: "Woodensky Pierre",
    fullName: "Woodensky Pierre",
    number: 26,
    position: "MF",
    club: "Cavaly",
    pictureUrl: "https://digitalhub.fifa.com/transform/72f8c310-2cf0-4329-a479-f2b2871201d7/PIERRE-Woodensky_485409",
    dateOfBirth: "2004-12-30",
    height: 177,
    socials: {
      instagram: "woodensky06",
      wikipedia: "https://en.wikipedia.org/wiki/Woodensky_Pierre"
    }
  },
  "485503": {
    fifaId: "485503",
    teamCode: "JPN",
    name: "Yuito Suzuki",
    fullName: "Yuito Suzuki",
    number: 17,
    position: "MF",
    club: "Urawa Red Diamonds",
    pictureUrl: "https://digitalhub.fifa.com/transform/820d40f4-df00-46d9-a36f-3f7eb523d099/SUZUKI-Yuito_485503",
    dateOfBirth: "2001-10-25",
    height: 175,
    socials: {
      instagram: "yuiton.s",
      wikipedia: "https://en.wikipedia.org/wiki/Yuito_Suzuki"
    }
  },
  "485595": {
    fifaId: "485595",
    teamCode: "ARG",
    name: "G. Simeone",
    fullName: "Giuliano Simeone",
    number: 17,
    position: "FW",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/5d379193-ed78-498b-81c0-0e1a50f2f7c9/SIMEONE-Giuliano_485595",
    dateOfBirth: "2002-12-18",
    height: 174,
    socials: {
      instagram: "simeonegiovanni",
      wikipedia: "https://pt.wikipedia.org/wiki/Giuliano_Simeone"
    }
  },
  "485655": {
    fifaId: "485655",
    teamCode: "FRA",
    name: "Olise",
    fullName: "Michael Olise",
    number: 11,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/979cc206-e23b-4b21-8d40-843607ba8964/OLISE-Michael_485655",
    dateOfBirth: "2001-12-12",
    height: 184,
    socials: {
      instagram: "m.olise",
      wikipedia: "https://pt.wikipedia.org/wiki/Michael_Olise"
    }
  },
  "485664": {
    fifaId: "485664",
    teamCode: "HAI",
    name: "Ruben Providence",
    fullName: "Ruben Providence",
    number: 15,
    position: "FW",
    club: "Troyes",
    pictureUrl: "https://digitalhub.fifa.com/transform/c510536e-4614-459d-9780-060a5e3631ad/PROVIDENCE-Ruben_485664",
    dateOfBirth: "2001-07-07",
    height: 178,
    socials: {
      instagram: "r.providence7",
      wikipedia: "https://en.wikipedia.org/wiki/Ruben_Providence"
    }
  },
  "485666": {
    fifaId: "485666",
    teamCode: "FRA",
    name: "Maghnes Akliouche",
    fullName: "Maghnes Akliouche",
    number: 25,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/86a154a1-3ed6-46b8-977c-3a04925c39bc/AKLIOUCHE-Maghnes_485666",
    dateOfBirth: "2002-02-25",
    height: 183,
    socials: {
      instagram: "maghnes.a",
      wikipedia: "https://pt.wikipedia.org/wiki/Maghnes_Akliouche"
    }
  },
  "485675": {
    fifaId: "485675",
    teamCode: "CIV",
    name: "Evann Guessand",
    fullName: "Evann Guessand",
    number: 22,
    position: "FW",
    club: "Utrecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/a5543d71-798f-42a0-aef9-201b86bc75c1/GUESSAND-Evann_485675",
    dateOfBirth: "2001-07-01",
    height: 188,
    socials: {
      instagram: "e.guessand",
      wikipedia: "https://en.wikipedia.org/wiki/Evann_Guessand"
    }
  },
  "485676": {
    fifaId: "485676",
    teamCode: "HAI",
    name: "Lenny Joseph",
    fullName: "Lenny Joseph",
    number: 16,
    position: "FW",
    club: "Niort",
    pictureUrl: "https://digitalhub.fifa.com/transform/ffcd4548-d3d0-42ca-a926-95fbda75d26a/JOSEPH-Lenny_485676",
    dateOfBirth: "2000-10-12",
    height: 182,
    socials: {
      instagram: "lenny.joseph19",
      wikipedia: "https://en.wikipedia.org/wiki/Lenny_Joseph"
    }
  },
  "485677": {
    fifaId: "485677",
    teamCode: "FRA",
    name: "Manu Kone",
    fullName: "Manu Kone",
    number: 6,
    position: "MF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/fab8dcfa-7c16-4c88-adeb-51cf932e3abc/KONE-Manu_485677",
    dateOfBirth: "2001-05-17",
    height: 185,
    socials: {
      instagram: "manu_kne",
      wikipedia: "https://pt.wikipedia.org/wiki/Manu_Kon%C3%A9"
    }
  },
  "485740": {
    fifaId: "485740",
    teamCode: "MAR",
    name: "Neil El Aynaoui",
    fullName: "Neil El Aynaoui",
    number: 24,
    position: "MF",
    club: "Racing Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/3d04af2c-60a8-48c8-be3e-d13bf5373c0c/EL-AYNAOUI-Neil_485740",
    dateOfBirth: "2001-07-02",
    height: 185,
    socials: {
      instagram: "neilelaynaoui",
      wikipedia: "https://en.wikipedia.org/wiki/Neil_El_Aynaoui"
    }
  },
  "485756": {
    fifaId: "485756",
    teamCode: "MAR",
    name: "Zakaria El Ouahdi",
    fullName: "Zakaria El Ouahdi",
    number: 13,
    position: "DF",
    club: "Troyes",
    pictureUrl: "https://digitalhub.fifa.com/transform/beeb6801-c7ca-401a-b1ab-21db95f44198/EL-OUAHDI-Zakaria_485756",
    dateOfBirth: "2001-12-31",
    height: 171,
    socials: {
      instagram: "z.elouahdi",
      wikipedia: "https://pt.wikipedia.org/wiki/Zakaria_El_Ouahdi"
    }
  },
  "485760": {
    fifaId: "485760",
    teamCode: "MAR",
    name: "Ayyoub Bouaddi",
    fullName: "Ayyoub Bouaddi",
    number: 6,
    position: "MF",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/37fafcb6-10c1-4e8d-b2a7-898ae14fa1a3/BOUADDI-Ayyoub_485760",
    dateOfBirth: "2007-10-02",
    height: 185,
    socials: {
      instagram: "ay.bouaddi",
      wikipedia: "https://pt.wikipedia.org/wiki/Ayyoub_Bouaddi"
    }
  },
  "485767": {
    fifaId: "485767",
    teamCode: "MAR",
    name: "Redouane Halhal",
    fullName: "Redouane Halhal",
    number: 25,
    position: "DF",
    club: "Wydad Casablanca",
    pictureUrl: "https://digitalhub.fifa.com/transform/e515f777-c663-46b0-87e3-9f467c48184f/HALHAL-Redouane_485767",
    dateOfBirth: "2003-03-05",
    height: 189,
    socials: {
      instagram: "r.halhal4",
      wikipedia: "https://en.wikipedia.org/wiki/Redouane_Halhal"
    }
  },
  "485802": {
    fifaId: "485802",
    teamCode: "PAR",
    name: "Alex Arce",
    fullName: "Alex Arce",
    number: 18,
    position: "FW",
    club: "Cerro Porte\xF1o",
    pictureUrl: "https://digitalhub.fifa.com/transform/14209263-2bf9-442b-8d6b-485492f712dd/ARCE-Alex_485802",
    dateOfBirth: "1995-06-16",
    height: 188,
    socials: {
      instagram: "alexarce7785",
      wikipedia: "https://en.wikipedia.org/wiki/%C3%81lex_Arce"
    }
  },
  "485804": {
    fifaId: "485804",
    teamCode: "PAR",
    name: "Gustavo Caballero",
    fullName: "Gustavo Caballero",
    number: 24,
    position: "MF",
    club: "Guaran\xED",
    pictureUrl: "https://digitalhub.fifa.com/transform/ccf6784f-8528-4d47-ba72-500d47ac51af/CABALLERO-Gustavo_485804",
    dateOfBirth: "2001-09-21",
    height: 189,
    socials: {
      instagram: "gustavocaballer0",
      wikipedia: "https://en.wikipedia.org/wiki/Gustavo_Caballero"
    }
  },
  "486074": {
    fifaId: "486074",
    teamCode: "TUR",
    name: "Can Uzun",
    fullName: "Can Uzun",
    number: 26,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/18128593-2c01-460e-9db1-9212fa7dc369/UZUN-Can_486074",
    dateOfBirth: "2005-11-11",
    height: 186,
    socials: {
      instagram: "can.uzun10",
      wikipedia: "https://en.wikipedia.org/wiki/Can_Uzun"
    }
  },
  "486076": {
    fifaId: "486076",
    teamCode: "TUR",
    name: "Oguz Aydin",
    fullName: "Oguz Aydin",
    number: 24,
    position: "FW",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/b29233e3-0131-45eb-96e4-ad77044a1959/AYDIN-Oguz_486076",
    dateOfBirth: "2000-10-27",
    height: 183,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/O%C4%9Fuz_Ayd%C4%B1n"
    }
  },
  "486080": {
    fifaId: "486080",
    teamCode: "CZE",
    name: "Robin Hranac",
    fullName: "Robin Hranac",
    number: 4,
    position: "DF",
    club: "Sparta Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/9550c125-89e2-497f-a098-bcdceb0243e7/HRANAC-Robin_486080",
    dateOfBirth: "2000-01-29",
    height: 189,
    socials: {
      instagram: "robinhranac",
      wikipedia: "https://en.wikipedia.org/wiki/Robin_Hran%C3%A1%C4%8D"
    }
  },
  "486081": {
    fifaId: "486081",
    teamCode: "CZE",
    name: "Lukas Cerv",
    fullName: "Lukas Cerv",
    number: 12,
    position: "MF",
    club: "Sparta Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/87ce4b61-fd6d-4ca3-901d-6dfe039dd809/CERV-Lukas_486081",
    dateOfBirth: "2001-04-10",
    height: 182,
    socials: {
      instagram: "lukas_cerv",
      wikipedia: "https://en.wikipedia.org/wiki/Luk%C3%A1%C5%A1_%C4%8Cerv"
    }
  },
  "486082": {
    fifaId: "486082",
    teamCode: "CZE",
    name: "Pavel Sulc",
    fullName: "Pavel Sulc",
    number: 15,
    position: "FW",
    club: "RB Salzburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/a45ca4c8-04d9-4321-a100-1e57b2d7bbda/SULC-Pavel_486082",
    dateOfBirth: "2000-12-29",
    height: 177,
    socials: {
      instagram: "sulcik_10",
      wikipedia: "https://pt.wikipedia.org/wiki/Pavel_%C5%A0ulc"
    }
  },
  "486130": {
    fifaId: "486130",
    teamCode: "SEN",
    name: "Habib Diarra",
    fullName: "Habib Diarra",
    number: 21,
    position: "MF",
    club: "Al-Arabi",
    pictureUrl: "https://digitalhub.fifa.com/transform/87016310-d872-4f1d-b60a-2c9e702190d7/DIARRA-Habib_486130",
    dateOfBirth: "2004-01-03",
    height: 178,
    socials: {
      instagram: "habib.diarra.38",
      wikipedia: "https://en.wikipedia.org/wiki/Habib_Diarra"
    }
  },
  "486147": {
    fifaId: "486147",
    teamCode: "COD",
    name: "Noah Sadiki",
    fullName: "Noah Sadiki",
    number: 14,
    position: "MF",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/3c5307a2-8894-44fc-a2d0-95c4500a6740/SADIKI-Noah_486147",
    dateOfBirth: "2004-12-17",
    height: 165,
    socials: {
      instagram: "noahjsad27",
      wikipedia: "https://en.wikipedia.org/wiki/Noah_Sadiki"
    }
  },
  "486161": {
    fifaId: "486161",
    teamCode: "RSA",
    name: "Relebohile Mofokeng",
    fullName: "Relebohile Mofokeng",
    number: 10,
    position: "FW",
    club: "Qatar SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/4946f2f8-a809-451e-962b-7b7426bbd633/MOFOKENG-Relebohile_486161",
    dateOfBirth: "2004-10-23",
    height: 168,
    socials: {
      instagram: "relebohile_ratomo_15",
      wikipedia: "https://en.wikipedia.org/wiki/Relebohile_Mofokeng"
    }
  },
  "486168": {
    fifaId: "486168",
    teamCode: "SEN",
    name: "Cherif Ndiaye",
    fullName: "Cherif Ndiaye",
    number: 12,
    position: "FW",
    club: "Stade Rennais",
    pictureUrl: "https://digitalhub.fifa.com/transform/7839c6fe-1ef4-4201-84d7-4540216e1588/NDIAYE-Cherif_486168",
    dateOfBirth: "1996-01-23",
    height: 190,
    socials: {
      instagram: "cherifrek_221",
      wikipedia: "https://en.wikipedia.org/wiki/Cherif_Ndiaye"
    }
  },
  "486196": {
    fifaId: "486196",
    teamCode: "COD",
    name: "Timothy Fayulu",
    fullName: "Timothy Fayulu",
    number: 16,
    position: "GK",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/deee3a8c-2aea-43fd-80d4-18dfdf1fad94/FAYULU-Timothy_486196",
    dateOfBirth: "1999-07-24",
    height: 192,
    socials: {
      instagram: "timofayulu75",
      wikipedia: "https://en.wikipedia.org/wiki/Timothy_Fayulu"
    }
  },
  "486259": {
    fifaId: "486259",
    teamCode: "CIV",
    name: "Mohamed Kone",
    fullName: "Mohamed Kone",
    number: 16,
    position: "GK",
    club: "Lorient",
    pictureUrl: "https://digitalhub.fifa.com/transform/937ed103-c12b-4931-83f1-ee615a67858e/HASSAN-ALTAMBAKTI_403335",
    dateOfBirth: "2002-03-07",
    height: 186,
    socials: {
      instagram: "_mohamedkone1",
      wikipedia: "https://en.wikipedia.org/wiki/Mohamed_Kon%C3%A9_(footballer,_born_2002)"
    }
  },
  "486260": {
    fifaId: "486260",
    teamCode: "CIV",
    name: "Christopher Operi",
    fullName: "Christopher Operi",
    number: 13,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/7ed2ec22-290b-40bb-a4a9-4c3374aa3e91/OPERI-Christopher_486260",
    dateOfBirth: "1997-04-29",
    height: 183,
    socials: {
      instagram: "agbadou_emmanuel",
      wikipedia: "https://en.wikipedia.org/wiki/Christopher_Op%C3%A9ri"
    }
  },
  "486268": {
    fifaId: "486268",
    teamCode: "CIV",
    name: "Emmanuel Agbadou",
    fullName: "Emmanuel Agbadou",
    number: 20,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/d092f8c9-f80e-40e0-ad73-bfa861784408/AGBADOU-Emmanuel_486268",
    dateOfBirth: "1997-06-17",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Emmanuel_Agbadou"
    }
  },
  "486306": {
    fifaId: "486306",
    teamCode: "AUS",
    name: "Nestory Irankunda",
    fullName: "Nestory Irankunda",
    number: 17,
    position: "FW",
    club: "St. Mirren",
    pictureUrl: "https://digitalhub.fifa.com/transform/ebc599f9-d929-4c6c-a60e-7f081cfb7bd6/IRANKUNDA-Nestory_486306",
    dateOfBirth: "2006-02-09",
    height: 165,
    socials: {
      instagram: "nestory._",
      wikipedia: "https://pt.wikipedia.org/wiki/Nestory_Irankunda"
    }
  },
  "486317": {
    fifaId: "486317",
    teamCode: "CIV",
    name: "Guela Doue",
    fullName: "Guela Doue",
    number: 17,
    position: "DF",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/9c597f58-ad63-4248-ac8b-b36e71f7b811/DOUE-Guela_486317",
    dateOfBirth: "2002-10-17",
    height: 187,
    socials: {
      instagram: "guela.doue",
      wikipedia: "https://en.wikipedia.org/wiki/Gu%C3%A9la_Dou%C3%A9"
    }
  },
  "486390": {
    fifaId: "486390",
    teamCode: "USA",
    name: "Max Arfsten",
    fullName: "Max Arfsten",
    number: 18,
    position: "DF",
    club: "Inter Miami",
    pictureUrl: "https://digitalhub.fifa.com/transform/3670d375-3a2f-41c8-8c5a-9c9bbd8f93f4/ARFSTEN-Max_486390",
    dateOfBirth: "2001-04-19",
    height: 185,
    socials: {
      instagram: "maxarfsten",
      wikipedia: "https://en.wikipedia.org/wiki/Max_Arfsten"
    }
  },
  "486614": {
    fifaId: "486614",
    teamCode: "QAT",
    name: "Alhashmi Alhussein",
    fullName: "Alhashmi Alhussein",
    number: 25,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/0565d28e-d1e2-4c0a-9f61-5992e3ed7202/ALHASHMI-ALHUSSEIN_486614",
    dateOfBirth: "2003-08-15",
    height: 182
  },
  "486639": {
    fifaId: "486639",
    teamCode: "QAT",
    name: "Tahsin Mohammed",
    fullName: "Tahsin Mohammed",
    number: 24,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/109e4fa0-f82a-4da0-8cf9-75d90a55b600/TAHSIN-JAMSHID_486639",
    dateOfBirth: "2006-06-16",
    height: 166
  },
  "486875": {
    fifaId: "486875",
    teamCode: "PAR",
    name: "Gustavo Velazquez",
    fullName: "Gustavo Velazquez",
    number: 2,
    position: "DF",
    club: "River Plate",
    pictureUrl: "https://digitalhub.fifa.com/transform/3640b6b7-6993-46be-a35e-e6620579e3c7/VELAZQUEZ-Gustavo_486875",
    dateOfBirth: "1991-04-17",
    height: 189,
    socials: {
      instagram: "pituvelazquez",
      wikipedia: "https://en.wikipedia.org/wiki/Gustavo_Vel%C3%A1zquez"
    }
  },
  "486929": {
    fifaId: "486929",
    teamCode: "CAN",
    name: "Tani Oluwaseyi",
    fullName: "Tani Oluwaseyi",
    number: 12,
    position: "FW",
    club: "Toronto FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/c761fb38-4f2b-47a9-9ede-6bee5f09d6bd/OLUWASEYI-Tani_486929",
    dateOfBirth: "2000-05-15",
    height: 187,
    socials: {
      instagram: "tani.o14",
      wikipedia: "https://en.wikipedia.org/wiki/Tani_Oluwaseyi"
    }
  },
  "489300": {
    fifaId: "489300",
    teamCode: "HAI",
    name: "Martin Experience",
    fullName: "Martin Experience",
    number: 8,
    position: "DF",
    club: "Apollon Limassol",
    pictureUrl: "https://digitalhub.fifa.com/transform/d3101d94-a275-4ecc-9b0c-63688841159d/EXPERIENCE-Martin_489300",
    dateOfBirth: "1999-03-09",
    height: 178,
    socials: {
      instagram: "martin_experience"
    }
  },
  "489417": {
    fifaId: "489417",
    teamCode: "PAR",
    name: "Isidro Pitta",
    fullName: "Isidro Pitta",
    number: 25,
    position: "FW",
    club: "Cerro Porte\xF1o",
    pictureUrl: "https://digitalhub.fifa.com/transform/9b776bee-7e1b-47b0-b4ef-526ff72ac93f/PITTA-Isidro_489417",
    dateOfBirth: "1999-08-14",
    height: 185,
    socials: {
      instagram: "isidro_pitta09",
      wikipedia: "https://pt.wikipedia.org/wiki/Isidro_Pitta"
    }
  },
  "489517": {
    fifaId: "489517",
    teamCode: "NED",
    name: "Jan Paul Van Hecke",
    fullName: "Jan Paul Van Hecke",
    number: 6,
    position: "DF",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/eb113fdd-d066-44a9-a0dc-7bf075fdc57f/VAN-HECKE-Jan-Paul_489517",
    dateOfBirth: "2000-06-08",
    height: 189,
    socials: {
      instagram: "jpvanhecke",
      wikipedia: "https://pt.wikipedia.org/wiki/Jan_Paul_van_Hecke"
    }
  },
  "489518": {
    fifaId: "489518",
    teamCode: "NED",
    name: "Crysencio Summerville",
    fullName: "Crysencio Summerville",
    number: 24,
    position: "FW",
    club: "Sparta Rotterdam",
    pictureUrl: "https://digitalhub.fifa.com/transform/86e9f724-fc5f-4969-92e3-ac658dafacdd/SUMMERVILLE-Crysencio_489518",
    dateOfBirth: "2001-10-30",
    height: 172,
    socials: {
      instagram: "csummerville7",
      wikipedia: "https://pt.wikipedia.org/wiki/Crysencio_Summerville"
    }
  },
  "489520": {
    fifaId: "489520",
    teamCode: "BIH",
    name: "Nikola Katic",
    fullName: "Nikola Katic",
    number: 18,
    position: "DF",
    club: "Rapid Wien",
    pictureUrl: "https://digitalhub.fifa.com/transform/71b1a703-25aa-4193-8bd7-daf0108e7009/KATIC-Nikola_489520",
    dateOfBirth: "1996-10-10",
    height: 194,
    socials: {
      instagram: "nikolakatic2",
      wikipedia: "https://pt.wikipedia.org/wiki/Nikola_Kati%C4%87"
    }
  },
  "489521": {
    fifaId: "489521",
    teamCode: "BIH",
    name: "Stjepan Radeljic",
    fullName: "Stjepan Radeljic",
    number: 21,
    position: "DF",
    club: "Toulouse",
    pictureUrl: "https://digitalhub.fifa.com/transform/d1b9ca91-fc68-44ee-8548-8f2fb4d10a46/RADELJIC-Stjepan_489521",
    dateOfBirth: "1997-09-05",
    height: 201,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Stjepan_Radelji%C4%87"
    }
  },
  "489523": {
    fifaId: "489523",
    teamCode: "BIH",
    name: "Armin Gigovic",
    fullName: "Armin Gigovic",
    number: 8,
    position: "MF",
    club: "Standard de Li\xE8ge",
    pictureUrl: "https://digitalhub.fifa.com/transform/41529cf6-4725-4885-abc1-00dc358ca8b9/GIGOVIC-Armin_489523",
    dateOfBirth: "2002-04-06",
    height: 187,
    socials: {
      instagram: "armingigovic",
      wikipedia: "https://en.wikipedia.org/wiki/Armin_Gigovi%C4%87"
    }
  },
  "489550": {
    fifaId: "489550",
    teamCode: "JOR",
    name: "Husam Abudahab",
    fullName: "Husam Abudahab",
    number: 4,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/90bde687-8728-4d4d-aa72-524b2b251caa/HUSAM-ABUDAHAB_489550",
    dateOfBirth: "2000-05-13",
    height: 186,
    socials: {
      instagram: "husam.abudahab.5"
    }
  },
  "489551": {
    fifaId: "489551",
    teamCode: "JOR",
    name: "Mohammad Abualnadi",
    fullName: "Mohammad Abualnadi",
    number: 16,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/e4e0ffbc-e1af-44f4-8c2e-50bd2dffc4c4/MOHAMMAD-ABUALNADI_489551",
    dateOfBirth: "2001-02-08",
    height: 185,
    socials: {
      instagram: "moabualnadi"
    }
  },
  "489603": {
    fifaId: "489603",
    teamCode: "IRN",
    name: "Ali Nemati",
    fullName: "Ali Nemati",
    number: 19,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/22c62fcc-736e-413e-a925-4bb643e3f007/NEMATI-Ali_489603",
    socials: {
      instagram: "raminrezaeian"
    },
    dateOfBirth: "1996-02-08",
    height: 182
  },
  "489685": {
    fifaId: "489685",
    teamCode: "SWE",
    name: "Jacob Widell Zetterstrom",
    fullName: "Jacob Widell Zetterstrom",
    number: 1,
    position: "GK",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/c93a418b-3456-4b0f-b0e0-8cb27004aebb/WIDELL-ZETTERSTROM-Jacob_489685",
    dateOfBirth: "1998-07-11",
    height: 197,
    socials: {
      instagram: "jacobwzetterstrom",
      wikipedia: "https://en.wikipedia.org/wiki/Jacob_Widell_Zetterstr%C3%B6m"
    }
  },
  "489688": {
    fifaId: "489688",
    teamCode: "SWE",
    name: "Yasin Ayari",
    fullName: "Yasin Ayari",
    number: 18,
    position: "MF",
    club: "AIK",
    pictureUrl: "https://digitalhub.fifa.com/transform/ac9ed8a6-7b39-4962-8245-b80556224ca0/AYARI-Yasin_489688",
    dateOfBirth: "2003-10-06",
    height: 172,
    socials: {
      instagram: "yasin_ayari",
      wikipedia: "https://pt.wikipedia.org/wiki/Yasin_Ayari"
    }
  },
  "489689": {
    fifaId: "489689",
    teamCode: "SWE",
    name: "Lucas Bergvall",
    fullName: "Lucas Bergvall",
    number: 7,
    position: "MF",
    club: "IFK G\xF6teborg",
    pictureUrl: "https://digitalhub.fifa.com/transform/bd927d6a-bb9d-4424-9e96-53c2ebc7220b/BERGVALL-Lucas_489689",
    dateOfBirth: "2006-02-02",
    height: 187,
    socials: {
      instagram: "lucasbergvall",
      wikipedia: "https://pt.wikipedia.org/wiki/Lucas_Bergvall"
    }
  },
  "489691": {
    fifaId: "489691",
    teamCode: "SWE",
    name: "Gustaf Nilsson",
    fullName: "Gustaf Nilsson",
    number: 25,
    position: "FW",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/ba9d4008-fe99-49d2-afb3-c3a9d7a97da8/NILSSON-Gustaf_489691",
    dateOfBirth: "1997-05-23",
    height: 197,
    socials: {
      instagram: "gustafnilssonn",
      wikipedia: "https://en.wikipedia.org/wiki/Gustaf_Nilsson_(footballer,_born_1997)"
    }
  },
  "489696": {
    fifaId: "489696",
    teamCode: "NOR",
    name: "Sondre Langas",
    fullName: "Sondre Langas",
    number: 24,
    position: "DF",
    club: "Groningen",
    pictureUrl: "https://digitalhub.fifa.com/transform/31dda581-ef96-4ab5-a82d-9f5f59a3dd31/LANGAS-Sondre_489696",
    dateOfBirth: "2001-02-02",
    height: 190,
    socials: {
      instagram: "sondrelangas",
      wikipedia: "https://en.wikipedia.org/wiki/Sondre_Lang%C3%A5s"
    }
  },
  "489704": {
    fifaId: "489704",
    teamCode: "POR",
    name: "Renato Veiga",
    fullName: "Renato Veiga",
    number: 13,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/556c6a9a-facb-4a04-8b68-15bee3974c9f/RENATO-VEIGA_489704",
    dateOfBirth: "2003-07-29",
    height: 188,
    socials: {
      instagram: "renatoveiga95",
      wikipedia: "https://pt.wikipedia.org/wiki/Renato_Veiga"
    }
  },
  "489732": {
    fifaId: "489732",
    teamCode: "ENG",
    name: "Madueke",
    fullName: "Noni Madueke",
    number: 20,
    position: "FW",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/115733f4-8e52-477a-867f-063f1e2c7752/MADUEKE-Noni_489732",
    dateOfBirth: "2002-03-10",
    height: 182,
    socials: {
      instagram: "nonzinoo10",
      wikipedia: "https://pt.wikipedia.org/wiki/Noni_Madueke"
    }
  },
  "491166": {
    fifaId: "491166",
    teamCode: "AUS",
    name: "Nishan Velupillay",
    fullName: "Nishan Velupillay",
    number: 23,
    position: "FW",
    club: "Al-Wehda",
    pictureUrl: "https://digitalhub.fifa.com/transform/27f30c93-f04b-4195-b105-4504c81abf6e/VELUPILLAY-Nishan_491166",
    dateOfBirth: "2001-05-07",
    height: 181,
    socials: {
      instagram: "nishan.velupillay",
      wikipedia: "https://en.wikipedia.org/wiki/Nishan_Velupillay"
    }
  },
  "491167": {
    fifaId: "491167",
    teamCode: "JOR",
    name: "Amer Jamous",
    fullName: "Amer Jamous",
    number: 6,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/554abed3-9771-464a-a75d-ac4c1f550eca/AMER-JAMOUS_491167",
    dateOfBirth: "2002-07-03",
    height: 177,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Amer_Jamous"
    }
  },
  "491216": {
    fifaId: "491216",
    teamCode: "POR",
    name: "Samu Costa",
    fullName: "Samuel Costa",
    number: 24,
    position: "DF",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/38256f2e-7139-4848-b609-051bb4623b71/SAMU-COSTA_491216",
    dateOfBirth: "2000-11-27",
    height: 185,
    socials: {
      instagram: "samucosta6",
      wikipedia: "https://pt.wikipedia.org/wiki/Sam%C3%BA_Costa"
    }
  },
  "491218": {
    fifaId: "491218",
    teamCode: "GER",
    name: "Jamie Leweling",
    fullName: "Jamie Leweling",
    number: 9,
    position: "MF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/a53f7aa4-eaba-4bb1-9654-e563adb10d2e/LEWELING-Jamie_491218",
    dateOfBirth: "2001-02-26",
    height: 185,
    socials: {
      instagram: "jamieleweling",
      wikipedia: "https://pt.wikipedia.org/wiki/Jamie_Leweling"
    }
  },
  "491228": {
    fifaId: "491228",
    teamCode: "BIH",
    name: "Martin Zlomislic",
    fullName: "Martin Zlomislic",
    number: 22,
    position: "GK",
    club: "Tuzla City",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2bf5ce5-0160-4561-a0e0-4508621e1820/ZLOMISLIC-Martin_491228",
    dateOfBirth: "1998-08-16",
    height: 189,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Martin_Zlomisli%C4%87"
    }
  },
  "491244": {
    fifaId: "491244",
    teamCode: "NOR",
    name: "Torbjorn Heggem",
    fullName: "Torbjorn Heggem",
    number: 17,
    position: "DF",
    club: "Ranheim Fotball",
    pictureUrl: "https://digitalhub.fifa.com/transform/e7b048fd-7217-470a-9820-eb8b6eab0286/HEGGEM-Torbjorn_491244",
    dateOfBirth: "1999-01-12",
    height: 192,
    socials: {
      instagram: "tlheggem",
      wikipedia: "https://en.wikipedia.org/wiki/Torbj%C3%B8rn_Heggem"
    }
  },
  "491255": {
    fifaId: "491255",
    teamCode: "SWE",
    name: "Svensson",
    fullName: "Daniel Svensson",
    number: 8,
    position: "DF",
    club: "Sampdoria",
    pictureUrl: "https://digitalhub.fifa.com/transform/49dbfd16-1871-40c2-94d5-995f9e38cc04/SVENSSON-Daniel_491255",
    dateOfBirth: "2002-02-12",
    height: 183,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Daniel_Svensson_(footballer,_born_2002)"
    }
  },
  "491269": {
    fifaId: "491269",
    teamCode: "AUT",
    name: "Michael Svoboda",
    fullName: "Michael Svoboda",
    number: 25,
    position: "DF",
    club: "SV Schwechat",
    pictureUrl: "https://digitalhub.fifa.com/transform/f096e299-95db-4ab3-bcb4-ef15da6cda71/SVOBODA-Michael_491269",
    dateOfBirth: "1998-10-15",
    height: 195,
    socials: {
      instagram: "michaelsvoboda30",
      wikipedia: "https://en.wikipedia.org/wiki/Michael_Svoboda"
    }
  },
  "492315": {
    fifaId: "492315",
    teamCode: "KOR",
    name: "Lee Gihyuk",
    fullName: "Lee Gihyuk",
    number: 3,
    position: "MF",
    club: "Ulsan HD",
    pictureUrl: "https://digitalhub.fifa.com/transform/d52ff87a-7e84-497a-bb8e-3feb453ea7c6/LEE-Gihyuk_492315",
    dateOfBirth: "2000-07-07",
    height: 184
  },
  "492358": {
    fifaId: "492358",
    teamCode: "POR",
    name: "T. Ara\xFAjo",
    fullName: "Tom\xE1s Ara\xFAjo",
    number: 4,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/e8840a7f-2bc5-44fb-a7bc-15d7a605691c/TOMAS-ARAUJO_492358",
    dateOfBirth: "2002-05-16",
    height: 187,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Tom%C3%A1s_Ara%C3%BAjo"
    }
  },
  "492363": {
    fifaId: "492363",
    teamCode: "GER",
    name: "Nmecha",
    fullName: "Felix Nmecha",
    number: 23,
    position: "MF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/9895941b-9be6-4900-a336-493f1237b0e6/NMECHA-Felix_492363",
    dateOfBirth: "2000-10-10",
    height: 190,
    socials: {
      instagram: "felix_nmecha",
      wikipedia: "https://en.wikipedia.org/wiki/Felix_Nmecha"
    }
  },
  "492716": {
    fifaId: "492716",
    teamCode: "ENG",
    name: "Morgan Rogers",
    fullName: "Morgan Rogers",
    number: 17,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/426bfdb9-3999-4826-81b8-dd33691a45a2/ROGERS-Morgan_492716",
    dateOfBirth: "2002-07-26",
    height: 187,
    socials: {
      instagram: "mrogers",
      wikipedia: "https://pt.wikipedia.org/wiki/Morgan_Rogers"
    }
  },
  "492859": {
    fifaId: "492859",
    teamCode: "ESP",
    name: "V\xEDctor Mu\xF1oz",
    fullName: "Victor Munoz",
    number: 25,
    position: "FW",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/73c58323-50f9-463b-88f0-abce4d69067c/MUNOZ-Victor_492859",
    dateOfBirth: "2003-07-13",
    height: 173,
    socials: {
      instagram: "victormunoz.7",
      wikipedia: "https://pt.wikipedia.org/wiki/V%C3%ADctor_Mu%C3%B1oz_(futebolista,_2003)"
    }
  },
  "493061": {
    fifaId: "493061",
    teamCode: "SWE",
    name: "Eric Smith",
    fullName: "Eric Smith",
    number: 20,
    position: "DF",
    club: "Ipswich Town",
    pictureUrl: "https://digitalhub.fifa.com/transform/7f7bf320-92e1-4267-bc6b-56f2ec37e94f/SMITH-Eric_493061",
    dateOfBirth: "1997-01-08",
    height: 192,
    socials: {
      instagram: "ericsmith_8",
      wikipedia: "https://en.wikipedia.org/wiki/Eric_Smith_(Swedish_footballer)"
    }
  },
  "493221": {
    fifaId: "493221",
    teamCode: "SUI",
    name: "Miro Muheim",
    fullName: "Miro Muheim",
    number: 2,
    position: "DF",
    club: "FC St. Gallen",
    pictureUrl: "https://digitalhub.fifa.com/transform/d3efd73b-690b-417d-a645-0a45b5c00bc8/MUHEIM-Miro_493221",
    dateOfBirth: "1998-03-24",
    height: 182,
    socials: {
      instagram: "mvromu",
      wikipedia: "https://en.wikipedia.org/wiki/Miro_Muheim"
    }
  },
  "493970": {
    fifaId: "493970",
    teamCode: "CAN",
    name: "Promise David",
    fullName: "Promise David",
    number: 24,
    position: "FW",
    club: "Nashville SC",
    pictureUrl: "https://digitalhub.fifa.com/transform/5e47f75f-c26f-4a7b-81e5-7957cc1027eb/DAVID-Promise_493970",
    dateOfBirth: "2001-07-03",
    height: 195,
    socials: {
      instagram: "txby.72",
      wikipedia: "https://en.wikipedia.org/wiki/Promise_David"
    }
  },
  "493983": {
    fifaId: "493983",
    teamCode: "IRQ",
    name: "Aimar Sher",
    fullName: "Aimar Sher",
    number: 20,
    position: "MF",
    club: "Al-Quwa Al-Jawiya",
    pictureUrl: "https://digitalhub.fifa.com/transform/254f7d31-32e2-472f-8c9a-97c37d2a41c8/AIMAR-SHER_493983",
    dateOfBirth: "2002-12-20",
    height: 180,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Aimar_Sher"
    }
  },
  "494025": {
    fifaId: "494025",
    teamCode: "BEL",
    name: "Matias Fernandez-Pardo",
    fullName: "Matias Fernandez-Pardo",
    number: 26,
    position: "FW",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/568ca230-b521-4f9c-9601-fb0cb6841fde/FERNANDEZ-PARDO-Matias_494025",
    dateOfBirth: "2005-02-03",
    height: 188,
    socials: {
      instagram: "m.fernandez_pardo",
      wikipedia: "https://en.wikipedia.org/wiki/Matias_Fernandez-Pardo"
    }
  },
  "494246": {
    fifaId: "494246",
    teamCode: "RSA",
    name: "Sipho Chaine",
    fullName: "Sipho Chaine",
    number: 16,
    position: "GK",
    club: "Kaizer Chiefs",
    pictureUrl: "https://digitalhub.fifa.com/transform/c06e5903-d546-4bc6-a558-5ce40b336b64/CHAINE-Sipho_494246",
    dateOfBirth: "1996-12-14",
    height: 186,
    socials: {
      instagram: "s__chaine31",
      wikipedia: "https://en.wikipedia.org/wiki/Sipho_Chaine"
    }
  },
  "494248": {
    fifaId: "494248",
    teamCode: "RSA",
    name: "Thalente Mbatha",
    fullName: "Thalente Mbatha",
    number: 5,
    position: "MF",
    club: "AmaZulu",
    pictureUrl: "https://digitalhub.fifa.com/transform/5b2d0a1a-fe59-4136-90d3-4315c34b8500/MBATHA-Thalente_494248",
    dateOfBirth: "2000-03-06",
    height: 179,
    socials: {
      instagram: "thalentembatha04",
      wikipedia: "https://en.wikipedia.org/wiki/Thalente_Mbatha"
    }
  },
  "494277": {
    fifaId: "494277",
    teamCode: "SEN",
    name: "Yehvann Diouf",
    fullName: "Yehvann Diouf",
    number: 1,
    position: "GK",
    club: "Middlesbrough",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b022d7d-d20e-42de-a08d-9e678dab3bc6/DIOUF-Yehvann_494277",
    dateOfBirth: "1999-11-16",
    height: 188,
    socials: {
      instagram: "yehvann",
      wikipedia: "https://pt.wikipedia.org/wiki/Yehvann_Diouf"
    }
  },
  "494279": {
    fifaId: "494279",
    teamCode: "SEN",
    name: "Antoine Mendy",
    fullName: "Antoine Mendy",
    number: 24,
    position: "DF",
    club: "Stade Rennais",
    pictureUrl: "https://digitalhub.fifa.com/transform/6e92b02c-cd04-4c63-a901-36d050c5f772/MENDY-Antoine_494279",
    dateOfBirth: "2004-05-27",
    height: 187,
    socials: {
      instagram: "a.mendy27",
      wikipedia: "https://en.wikipedia.org/wiki/Antoine_Mendy_(footballer)"
    }
  },
  "494291": {
    fifaId: "494291",
    teamCode: "ALG",
    name: "Ibrahim Maza",
    fullName: "Ibrahim Maza",
    number: 22,
    position: "MF",
    club: "Reims",
    pictureUrl: "https://digitalhub.fifa.com/transform/d1a9f2e9-3dda-4bdb-b2a1-f026bb97d9ce/MAZA-Ibrahim_494291",
    dateOfBirth: "2005-11-24",
    height: 180,
    socials: {
      instagram: "ibomaza",
      wikipedia: "https://en.wikipedia.org/wiki/Ibrahim_Maza"
    }
  },
  "494293": {
    fifaId: "494293",
    teamCode: "MAR",
    name: "Chemsdine Talbi",
    fullName: "Chemsdine Talbi",
    number: 7,
    position: "MF",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/b6d54dcf-25e8-4e0f-a155-60e051b4a86e/TALBI-Chemsdine_494293",
    dateOfBirth: "2005-05-09",
    height: 175,
    socials: {
      instagram: "chemsdinetalbi",
      wikipedia: "https://en.wikipedia.org/wiki/Chemsdine_Talbi"
    }
  },
  "494313": {
    fifaId: "494313",
    teamCode: "CPV",
    name: "Yannick Semedo",
    fullName: "Yannick Semedo",
    number: 16,
    position: "MF",
    club: "Porto B",
    pictureUrl: "https://digitalhub.fifa.com/transform/7d0c9c98-3bbe-4379-a6e4-df45573f6e90/YANNICK-SEMEDO_494313",
    dateOfBirth: "1995-12-29",
    height: 176,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Yannick_Semedo"
    }
  },
  "494314": {
    fifaId: "494314",
    teamCode: "CPV",
    name: "Telmo Arcanjo",
    fullName: "Telmo Arcanjo",
    number: 18,
    position: "MF",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/16e60922-64b4-40df-ae20-f53a44891fe9/TELMO-ARCANJO_494314",
    dateOfBirth: "2001-06-21",
    height: 180,
    socials: {
      instagram: "arcanjo__18",
      wikipedia: "https://en.wikipedia.org/wiki/Telmo_Arcanjo"
    }
  },
  "494345": {
    fifaId: "494345",
    teamCode: "ENG",
    name: "Dan Burn",
    fullName: "Dan Burn",
    number: 15,
    position: "DF",
    club: "Newcastle United",
    pictureUrl: "https://digitalhub.fifa.com/transform/ac44e40e-162d-4459-94b6-8971a032e371/BURN-Dan_494345",
    dateOfBirth: "1992-05-09",
    height: 201,
    socials: {
      instagram: "bigdanburn",
      wikipedia: "https://pt.wikipedia.org/wiki/Dan_Burn"
    }
  },
  "494374": {
    fifaId: "494374",
    teamCode: "TUN",
    name: "Hazem Mastouri",
    fullName: "Hazem Mastouri",
    number: 9,
    position: "FW",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/2565fb18-c785-4773-8d83-81c6fd25da1d/MASTOURI-Hazem_494374",
    dateOfBirth: "1997-06-18",
    height: 191,
    socials: {
      instagram: "mastouri_hazem",
      wikipedia: "https://en.wikipedia.org/wiki/Hazem_Mastouri"
    }
  },
  "494375": {
    fifaId: "494375",
    teamCode: "TUN",
    name: "Firas Chaouat",
    fullName: "Firas Chaouat",
    number: 19,
    position: "FW",
    club: "Stade Tunisien",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf52c447-03a8-450b-a4b8-e238b1e3c071/CHAOUAT-Firas_494375",
    dateOfBirth: "1996-05-08",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Firas_Chaouat"
    }
  },
  "494411": {
    fifaId: "494411",
    teamCode: "AUS",
    name: "Kai Trewin",
    fullName: "Kai Trewin",
    number: 15,
    position: "DF",
    club: "Machida Zelvia",
    pictureUrl: "https://digitalhub.fifa.com/transform/5753796c-c01e-444e-8896-5c6c79dcd9fb/TREWIN-Kai_494411",
    dateOfBirth: "2001-05-18",
    height: 183,
    socials: {
      instagram: "kaitrewin",
      wikipedia: "https://en.wikipedia.org/wiki/Kai_Trewin"
    }
  },
  "494429": {
    fifaId: "494429",
    teamCode: "IRN",
    name: "Danial Iri",
    fullName: "Danial Iri",
    number: 25,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/4a94990d-e4cd-4291-922c-b5bbb8a3254f/IRI-Danial_494429",
    dateOfBirth: "2003-10-26",
    height: 182,
    socials: {
      instagram: "danialeiri"
    }
  },
  "494458": {
    fifaId: "494458",
    teamCode: "COD",
    name: "Ngalayel Mukau",
    fullName: "Ngalayel Mukau",
    number: 6,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/72bed90f-aa3d-4f6f-8751-74689a06f326/MUKAU-Ngalayel_494458",
    dateOfBirth: "2004-11-03",
    height: 186,
    socials: {
      instagram: "ngalinhoo"
    }
  },
  "494506": {
    fifaId: "494506",
    teamCode: "KSA",
    name: "Jehad Thikri",
    fullName: "Jehad Thikri",
    number: 25,
    position: "DF",
    club: "Al-Faisaly",
    pictureUrl: "https://digitalhub.fifa.com/transform/0e99f4e8-6619-4e4c-8970-0443d31b83a0/JEHAD-THIKRI_494506",
    dateOfBirth: "2001-07-21",
    height: 184
  },
  "494531": {
    fifaId: "494531",
    teamCode: "PAR",
    name: "Orlando Gill",
    fullName: "Orlando Gill",
    number: 12,
    position: "GK",
    club: "Guaran\xED",
    pictureUrl: "https://digitalhub.fifa.com/transform/29bae713-62ca-48da-8655-9c2caa0e728d/GILL-Orlando_494531",
    dateOfBirth: "2000-06-11",
    height: 190,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Orlando_Gill"
    }
  },
  "494557": {
    fifaId: "494557",
    teamCode: "AUS",
    name: "Patrick Beach",
    fullName: "Patrick Beach",
    number: 18,
    position: "GK",
    club: "Cadiz",
    pictureUrl: "https://digitalhub.fifa.com/transform/0ea3c68c-c425-41c4-b973-c60e2d5b4685/BEACH-Patrick_494557",
    dateOfBirth: "2003-08-06",
    height: 189,
    socials: {
      instagram: "patrickbeach",
      wikipedia: "https://en.wikipedia.org/wiki/Patrick_Beach"
    }
  },
  "494625": {
    fifaId: "494625",
    teamCode: "NOR",
    name: "Marcus Holmgren Pedersen",
    fullName: "Marcus Holmgren Pedersen",
    number: 16,
    position: "DF",
    club: "FC Nordsjaelland",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c96cbed-5df4-46f9-b1f4-b9abbbe7e9d1/HOLMGREN-PEDERSEN-Marcus_494625",
    dateOfBirth: "2000-07-16",
    height: 184,
    socials: {
      instagram: "marcushpederseen",
      wikipedia: "https://en.wikipedia.org/wiki/Marcus_Holmgren_Pedersen"
    }
  },
  "494626": {
    fifaId: "494626",
    teamCode: "NOR",
    name: "Schjelderup",
    fullName: "Andreas Schjelderup",
    number: 21,
    position: "MF",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/22f44194-f9c4-46c1-8621-f9680f7d73bc/SCHJELDERUP-Andreas_494626",
    dateOfBirth: "2004-06-01",
    height: 177,
    socials: {
      instagram: "andreasschjelderup",
      wikipedia: "https://pt.wikipedia.org/wiki/Andreas_Schjelderup"
    }
  },
  "494627": {
    fifaId: "494627",
    teamCode: "NOR",
    name: "Thelo Aasgaard",
    fullName: "Thelo Aasgaard",
    number: 19,
    position: "MF",
    club: "Molde",
    pictureUrl: "https://digitalhub.fifa.com/transform/46e2bce8-3733-457f-8307-9fd06eeda4ce/AASGAARD-Thelo_494627",
    dateOfBirth: "2002-05-02",
    height: 188,
    socials: {
      instagram: "thelo.aasgaard",
      wikipedia: "https://en.wikipedia.org/wiki/Thelo_Aasgaard"
    }
  },
  "494639": {
    fifaId: "494639",
    teamCode: "BIH",
    name: "Arjan Malic",
    fullName: "Arjan Malic",
    number: 24,
    position: "DF",
    club: "Boavista",
    pictureUrl: "https://digitalhub.fifa.com/transform/8b907cf5-e659-4584-acc5-5b0db0f85594/MALIC-Arjan_494639",
    dateOfBirth: "2005-08-28",
    height: 188,
    socials: {
      instagram: "arjanmalic",
      wikipedia: "https://en.wikipedia.org/wiki/Arjan_Mali%C4%87"
    }
  },
  "494640": {
    fifaId: "494640",
    teamCode: "BIH",
    name: "Amar Memic",
    fullName: "Amar Memic",
    number: 15,
    position: "MF",
    club: "Lokomotiva Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/c57e2c22-f510-4109-b3e7-72b5a6b862a9/MEMIC-Amar_494640",
    dateOfBirth: "2001-01-20",
    height: 176,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Amar_Memi%C4%87"
    }
  },
  "494742": {
    fifaId: "494742",
    teamCode: "MAR",
    name: "Youssef Belammari",
    fullName: "Youssef Belammari",
    number: 19,
    position: "DF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/616a2660-9465-4f4f-a565-e354f3890a81/BELAMMARI-Youssef_494742",
    dateOfBirth: "1998-09-20",
    height: 175,
    socials: {
      instagram: "youssef_belammari",
      wikipedia: "https://en.wikipedia.org/wiki/Youssef_Belammari"
    }
  },
  "494800": {
    fifaId: "494800",
    teamCode: "KSA",
    name: "Sultan Mandash",
    fullName: "Sultan Mandash",
    number: 20,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/f360115a-08e8-451c-9fb0-2af3944cd37a/SULTAN-MANDASH_494800",
    dateOfBirth: "1994-10-17",
    height: 172,
    socials: {
      instagram: "sultan_mandash27",
      wikipedia: "https://en.wikipedia.org/wiki/Sultan_Mandash"
    }
  },
  "494989": {
    fifaId: "494989",
    teamCode: "CUW",
    name: "Livano Comenencia",
    fullName: "Livano Comenencia",
    number: 8,
    position: "MF",
    club: "Al Wehda",
    pictureUrl: "https://digitalhub.fifa.com/transform/860cc6e0-a995-485f-ae21-56b451017adf/COMENENCIA-Livano_494989",
    dateOfBirth: "2004-02-03",
    height: 185,
    socials: {
      instagram: "livano076",
      wikipedia: "https://pt.wikipedia.org/wiki/Livano_Comenencia"
    }
  },
  "495046": {
    fifaId: "495046",
    teamCode: "PAR",
    name: "Mauricio",
    fullName: "Mauricio",
    number: 11,
    position: "MF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/20e6d2dd-4d4a-418b-ae0f-0cbcb299d61b/MAURICIO_495046",
    dateOfBirth: "2001-06-22",
    height: 175,
    socials: {
      instagram: "mauriciomp7"
    }
  },
  "495054": {
    fifaId: "495054",
    teamCode: "ARG",
    name: "J.M. L\xF3pez",
    fullName: "Jose Manuel Lopez",
    number: 21,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/fe5c273f-95e7-49c7-b9a5-a332e4da801b/LOPEZ-Jose-Manuel_495054",
    dateOfBirth: "2000-12-06",
    height: 190,
    socials: {
      wikipedia: "https://pt.wikipedia.org/wiki/Flaco_L%C3%B3pez"
    }
  },
  "495347": {
    fifaId: "495347",
    teamCode: "TUR",
    name: "Gul",
    fullName: "Deniz Gul",
    number: 9,
    position: "FW",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/92368352-f3ab-459f-bb72-4a7e432dd39a/GUL-Deniz_495347",
    dateOfBirth: "2004-07-02",
    height: 192,
    socials: {
      instagram: "denizgul_9",
      wikipedia: "https://en.wikipedia.org/wiki/Deniz_G%C3%BCl"
    }
  },
  "495348": {
    fifaId: "495348",
    teamCode: "BEL",
    name: "Senne Lammens",
    fullName: "Senne Lammens",
    number: 12,
    position: "GK",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/9e407610-b85c-45d8-847a-2bae1d24e699/LAMMENS-Senne_495348",
    dateOfBirth: "2002-07-07",
    height: 193,
    socials: {
      instagram: "senne_lammens",
      wikipedia: "https://pt.wikipedia.org/wiki/Senne_Lammens"
    }
  },
  "495349": {
    fifaId: "495349",
    teamCode: "BEL",
    name: "Nicolas Raskin",
    fullName: "Nicolas Raskin",
    number: 23,
    position: "MF",
    club: "Al-Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a366682-88f4-4d6f-ae54-e474030615cc/RASKIN-Nicolas_495349",
    dateOfBirth: "2001-02-23",
    height: 178,
    socials: {
      instagram: "n.raskin",
      wikipedia: "https://en.wikipedia.org/wiki/Nicolas_Raskin"
    }
  },
  "495431": {
    fifaId: "495431",
    teamCode: "SCO",
    name: "George Hirst",
    fullName: "George Hirst",
    number: 18,
    position: "FW",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c9c7ecc-b678-43e6-b8a3-8155776dd003/HIRST-George_495431",
    dateOfBirth: "1999-02-15",
    height: 191,
    socials: {
      instagram: "george_hirst",
      wikipedia: "https://en.wikipedia.org/wiki/George_Hirst_(footballer)"
    }
  },
  "495488": {
    fifaId: "495488",
    teamCode: "EGY",
    name: "H.Abdelkarim",
    fullName: "Hamza Abdelkarim",
    number: 9,
    position: "FW",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/e8c1e0e0-66da-4bfb-ace2-e040710da50c/HAMZA-ABDELKARIM_495488",
    dateOfBirth: "2008-01-01",
    height: 182,
    socials: {
      instagram: "hamzabdelkarim",
      wikipedia: "https://pt.wikipedia.org/wiki/Hamza_Abdelkarim"
    }
  },
  "496358": {
    fifaId: "496358",
    teamCode: "SEN",
    name: "Mbaye",
    fullName: "Ibrahim Mbaye",
    number: 20,
    position: "FW",
    club: "Valencia",
    pictureUrl: "https://digitalhub.fifa.com/transform/1583bcf3-3a11-4ebe-a9ef-18aba9e7f32b/MBAYE-Ibrahim_496358",
    dateOfBirth: "2008-01-24",
    height: 175,
    socials: {
      instagram: "mbayediagne909",
      wikipedia: "https://pt.wikipedia.org/wiki/Ibrahim_Mbaye"
    }
  },
  "497902": {
    fifaId: "497902",
    teamCode: "BEL",
    name: "Diego Moreira",
    fullName: "Diego Moreira",
    number: 19,
    position: "MF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/dfe97726-1409-4cc2-8463-39184fab3a04/MOREIRA-Diego_497902",
    dateOfBirth: "2004-08-06",
    height: 179,
    socials: {
      instagram: "diegzyyy",
      wikipedia: "https://en.wikipedia.org/wiki/Diego_Moreira"
    }
  },
  "498416": {
    fifaId: "498416",
    teamCode: "GER",
    name: "Nick Woltemade",
    fullName: "Nick Woltemade",
    number: 11,
    position: "FW",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/e93d4ee5-827d-47bc-b3d5-3f1c38e7293e/WOLTEMADE-Nick_498416",
    dateOfBirth: "2002-02-14",
    height: 198,
    socials: {
      instagram: "nickwoltemade",
      wikipedia: "https://pt.wikipedia.org/wiki/Nick_Woltemade"
    }
  },
  "498421": {
    fifaId: "498421",
    teamCode: "AUS",
    name: "Paul Okon-Engstler",
    fullName: "Paul Okon-Engstler",
    number: 24,
    position: "MF",
    club: "Melbourne Victory",
    pictureUrl: "https://digitalhub.fifa.com/transform/c010f6a9-53af-4d79-b16d-f25b96670225/OKON-ENGSTLER-Paul_498421",
    dateOfBirth: "2005-01-24",
    height: 185,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Paul_Okon-Engstler"
    }
  },
  "498439": {
    fifaId: "498439",
    teamCode: "HAI",
    name: "Wilguens Paugain",
    fullName: "Wilguens Paugain",
    number: 24,
    position: "DF",
    club: "Racing Club Ha\xEFtien",
    pictureUrl: "https://digitalhub.fifa.com/transform/7f7dae44-300a-405b-81be-f29cef6c0670/PAUGAIN-Wilguens_419172",
    dateOfBirth: "2001-08-24",
    height: 180,
    socials: {
      instagram: "_wilpaug_",
      wikipedia: "https://en.wikipedia.org/wiki/Wilguens_Paugain"
    }
  },
  "498455": {
    fifaId: "498455",
    teamCode: "JPN",
    name: "Junnosuke Suzuki",
    fullName: "Junnosuke Suzuki",
    number: 25,
    position: "DF",
    club: "Kawasaki Frontale",
    pictureUrl: "https://digitalhub.fifa.com/transform/8c87dc57-4626-4945-a93a-b6f5a5620947/SUZUKI-Junnosuke_498455",
    dateOfBirth: "2003-07-12",
    height: 180,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Junnosuke_Suzuki"
    }
  },
  "498458": {
    fifaId: "498458",
    teamCode: "QAT",
    name: "Mohamed Manai",
    fullName: "Mohamed Manai",
    number: 26,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/67e02103-4569-4a5c-a7a2-1f9b42cab1a5/MOHAMED-MANAI_498458",
    dateOfBirth: "2002-10-25",
    height: 180
  },
  "498514": {
    fifaId: "498514",
    teamCode: "JOR",
    name: "Ali Azaizeh",
    fullName: "Ali Azaizeh",
    number: 24,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/1097b48f-74a2-4506-97b3-2dd48364441a/ALI-AZAIZEH_498514",
    dateOfBirth: "2004-04-13",
    height: 178,
    socials: {
      instagram: "ali_azaizeh11",
      wikipedia: "https://en.wikipedia.org/wiki/Ali_Azaizeh"
    }
  },
  "498806": {
    fifaId: "498806",
    teamCode: "AUS",
    name: "Mohamed Toure",
    fullName: "Mohamed Toure",
    number: 9,
    position: "FW",
    club: "Melbourne City",
    pictureUrl: "https://digitalhub.fifa.com/transform/069af350-e4d8-4b30-af2d-6938b9a379fa/TOURE-Mohamed_498806",
    dateOfBirth: "2004-03-26",
    height: 186,
    socials: {
      instagram: "mohamed.2re",
      wikipedia: "https://en.wikipedia.org/wiki/Mohamed_Tour%C3%A9_(soccer,_born_2004)"
    }
  },
  "499102": {
    fifaId: "499102",
    teamCode: "JOR",
    name: "Saleem Obaid",
    fullName: "Saleem Obaid",
    number: 17,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/647ecc0e-11c2-4d0e-9b48-2d8137a00b85/SALEEM-OBAID_499102",
    dateOfBirth: "1992-01-17",
    height: 187,
    socials: {
      instagram: "saleemo_obaid_18",
      wikipedia: "https://en.wikipedia.org/wiki/Salim_Obaid"
    }
  },
  "499290": {
    fifaId: "499290",
    teamCode: "CRO",
    name: "Luka Vuskovic",
    fullName: "Luka Vuskovic",
    number: 22,
    position: "DF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/c905e324-dc60-4e79-a2a1-c06412f27aed/VUSKOVIC-Luka_499290",
    dateOfBirth: "2007-02-24",
    height: 193,
    socials: {
      instagram: "lukavuskovic",
      wikipedia: "https://en.wikipedia.org/wiki/Luka_Vu%C5%A1kovi%C4%87"
    }
  },
  "499800": {
    fifaId: "499800",
    teamCode: "SEN",
    name: "Mamadou Sarr",
    fullName: "Mamadou Sarr",
    number: 2,
    position: "DF",
    club: "Real Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/3abb3fa8-05e3-4973-adb7-ef4b941b8ec1/SARR-Mamadou_499800",
    dateOfBirth: "2005-08-29",
    height: 194,
    socials: {
      instagram: "msarr6_",
      wikipedia: "https://pt.wikipedia.org/wiki/Mamadou_Sarr"
    }
  },
  "499803": {
    fifaId: "499803",
    teamCode: "BEL",
    name: "Mike Penders",
    fullName: "Mike Penders",
    number: 13,
    position: "GK",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/88da8ae8-d4af-47b1-8f4c-e3ac46fbc226/PENDERS-Mike_499803",
    dateOfBirth: "2005-07-31",
    height: 200,
    socials: {
      instagram: "mike.penders",
      wikipedia: "https://pt.wikipedia.org/wiki/Mike_Penders"
    }
  },
  "499912": {
    fifaId: "499912",
    teamCode: "USA",
    name: "Sebastian Berhalter",
    fullName: "Sebastian Berhalter",
    number: 14,
    position: "MF",
    club: "FC Cincinnati",
    pictureUrl: "https://digitalhub.fifa.com/transform/ef9aedbe-e6e8-4eba-9e62-beac982879ef/BERHALTER-Sebastian_499912",
    dateOfBirth: "2001-05-10",
    height: 175,
    socials: {
      instagram: "sebastianberhalter",
      wikipedia: "https://pt.wikipedia.org/wiki/Sebastian_Berhalter"
    }
  },
  "499913": {
    fifaId: "499913",
    teamCode: "USA",
    name: "Matt Freese",
    fullName: "Matt Freese",
    number: 24,
    position: "GK",
    club: "West Brom",
    pictureUrl: "https://digitalhub.fifa.com/transform/c46f695b-3acc-4360-abf4-3110ff60d86e/FREESE-Matt_499913",
    dateOfBirth: "1998-09-02",
    height: 198,
    socials: {
      instagram: "mattyicefreese",
      wikipedia: "https://en.wikipedia.org/wiki/Matt_Freese"
    }
  },
  "500037": {
    fifaId: "500037",
    teamCode: "MEX",
    name: "Gilberto Mora",
    fullName: "Gilberto Mora",
    number: 19,
    position: "MF",
    club: "Tigres",
    pictureUrl: "https://digitalhub.fifa.com/transform/028c85e0-509a-43c4-904a-58ce2d4f6f24/MORA-Gilberto_500037",
    dateOfBirth: "2008-10-14",
    height: 175,
    socials: {
      instagram: "gil_morita",
      wikipedia: "https://en.wikipedia.org/wiki/Gilberto_Mora_(footballer,_born_2008)"
    }
  },
  "500038": {
    fifaId: "500038",
    teamCode: "MEX",
    name: "Mateo Chavez",
    fullName: "Mateo Chavez",
    number: 20,
    position: "DF",
    club: "Chivas",
    pictureUrl: "https://digitalhub.fifa.com/transform/8e8884ee-8964-4fb7-82d8-8a5d341e79a6/CHAVEZ-Mateo_500038",
    dateOfBirth: "2004-05-12",
    height: 178,
    socials: {
      instagram: "mateo.chaveez",
      wikipedia: "https://en.wikipedia.org/wiki/Mateo_Ch%C3%A1vez"
    }
  },
  "502245": {
    fifaId: "502245",
    teamCode: "RSA",
    name: "Olwethu Makhanya",
    fullName: "Olwethu Makhanya",
    number: 24,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/97ff80ac-588e-4b15-8c20-5a3cbd7f30f8/MAKHANYA-Olwethu_502245",
    dateOfBirth: "2004-04-30",
    height: 185,
    socials: {
      instagram: "makhanya_29",
      wikipedia: "https://en.wikipedia.org/wiki/Olwethu_Makhanya"
    }
  },
  "502727": {
    fifaId: "502727",
    teamCode: "SUI",
    name: "Johan Manzambi",
    fullName: "Johan Manzambi",
    number: 9,
    position: "MF",
    club: "SC Freiburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/a0cb9413-32ea-4b8f-9801-55474cb12b77/MANZAMBI-Johan_502727",
    socials: {
      instagram: "jkmanzambi",
      wikipedia: "https://pt.wikipedia.org/wiki/Johan_Manzambi"
    },
    dateOfBirth: "2005-10-14",
    height: 182
  },
  "502945": {
    fifaId: "502945",
    teamCode: "SWE",
    name: "Alexander Bernhardsson",
    fullName: "Alexander Bernhardsson",
    number: 21,
    position: "DF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/165d5004-48b5-4a8c-86ee-d7c982b9b96c/BERNHARDSSON-Alexander_502945",
    dateOfBirth: "1998-09-08",
    height: 184,
    socials: {
      instagram: "alexbernhardsson",
      wikipedia: "https://pt.wikipedia.org/wiki/Alexander_Bernhardsson"
    }
  },
  "502946": {
    fifaId: "502946",
    teamCode: "SWE",
    name: "Benjamin Nygren",
    fullName: "Benjamin Nygren",
    number: 10,
    position: "MF",
    club: "New York Red Bulls",
    pictureUrl: "https://digitalhub.fifa.com/transform/e464be99-48c1-41a9-b5aa-2c5760f1d302/NYGREN-Benjamin_502946",
    dateOfBirth: "2001-07-08",
    height: 187,
    socials: {
      instagram: "benjamin_nygren",
      wikipedia: "https://pt.wikipedia.org/wiki/Benjamin_Nygren"
    }
  },
  "503047": {
    fifaId: "503047",
    teamCode: "SWE",
    name: "Besfort Zeneli",
    fullName: "Besfort Zeneli",
    number: 22,
    position: "MF",
    club: "Djurg\xE5rdens IF",
    pictureUrl: "https://digitalhub.fifa.com/transform/7bd98883-dd6c-4e8f-954e-af31d070eac7/ZENELI-Besfort_503047",
    dateOfBirth: "2002-11-21",
    height: 187,
    socials: {
      instagram: "besfortzenelii",
      wikipedia: "https://en.wikipedia.org/wiki/Besfort_Zeneli"
    }
  },
  "504192": {
    fifaId: "504192",
    teamCode: "RSA",
    name: "Khulumani Ndamane",
    fullName: "Khulumani Ndamane",
    number: 3,
    position: "DF",
    club: "Kaizer Chiefs",
    pictureUrl: "https://digitalhub.fifa.com/transform/a3360ef3-4418-4f0a-9f74-318bdfa4ffd8/NDAMANE-Khulumani_504192",
    dateOfBirth: "2004-02-05",
    height: 183,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Khulumani_Ndamane"
    }
  },
  "504193": {
    fifaId: "504193",
    teamCode: "RSA",
    name: "Tshepang Moremi",
    fullName: "Tshepang Moremi",
    number: 8,
    position: "FW",
    club: "Rangers",
    pictureUrl: "https://digitalhub.fifa.com/transform/5579f48c-4b61-4def-b314-75e873c36961/MOREMI-Tshepang_504193",
    dateOfBirth: "2000-10-02",
    height: 169,
    socials: {
      instagram: "tshepang_moremii",
      wikipedia: "https://en.wikipedia.org/wiki/Tshepang_Moremi"
    }
  },
  "504199": {
    fifaId: "504199",
    teamCode: "RSA",
    name: "Mbekezeli Mbokazi",
    fullName: "Mbekezeli Mbokazi",
    number: 14,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/978b666d-f320-4d49-b717-a08fa7ae456f/MBOKAZI-Mbekezeli_504199",
    dateOfBirth: "2005-09-19",
    height: 177,
    socials: {
      instagram: "mbekezel05",
      wikipedia: "https://en.wikipedia.org/wiki/Mbekezeli_Mbokazi"
    }
  },
  "504200": {
    fifaId: "504200",
    teamCode: "RSA",
    name: "Samukele Kabini",
    fullName: "Samukele Kabini",
    number: 18,
    position: "DF",
    club: "NYCFC",
    pictureUrl: "https://digitalhub.fifa.com/transform/29044a18-4871-49d0-af81-0b0887b148dd/KABINI-Samukelo_504200",
    dateOfBirth: "2004-03-15",
    height: 179,
    socials: {
      instagram: "samu.kabini_3",
      wikipedia: "https://en.wikipedia.org/wiki/Samukele_Kabini"
    }
  },
  "504329": {
    fifaId: "504329",
    teamCode: "COD",
    name: "Steve Kapuadi",
    fullName: "Steve Kapuadi",
    number: 3,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/60a4ad81-dbaa-4276-b291-f002ec98ddfc/KAPUADI-Steve_504329",
    dateOfBirth: "1998-04-30",
    height: 196,
    socials: {
      instagram: "steve.kapuadi",
      wikipedia: "https://en.wikipedia.org/wiki/Steve_Kapuadi"
    }
  },
  "504502": {
    fifaId: "504502",
    teamCode: "TUN",
    name: "Sebastian Tounekti",
    fullName: "Sebastian Tounekti",
    number: 26,
    position: "MF",
    club: "\xC9toile du Sahel",
    pictureUrl: "https://digitalhub.fifa.com/transform/29d9d0d2-28ec-4c0c-9861-a9d8062d5f9d/TOUNEKTI-Sebastian_504502",
    dateOfBirth: "2002-07-13",
    height: 182,
    socials: {
      instagram: "sebastiantounekti",
      wikipedia: "https://en.wikipedia.org/wiki/Sebastian_Tounekti"
    }
  },
  "504931": {
    fifaId: "504931",
    teamCode: "AUS",
    name: "Lucas Herrington",
    fullName: "Lucas Herrington",
    number: 25,
    position: "DF",
    club: "Western United",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0e45418-ff7e-4fdf-a7ac-8e7bf2d63624/HERRINGTON-Lucas_504931",
    dateOfBirth: "2007-09-05",
    height: 193,
    socials: {
      instagram: "lucasherrington5",
      wikipedia: "https://en.wikipedia.org/wiki/Lucas_Herrington"
    }
  },
  "504990": {
    fifaId: "504990",
    teamCode: "BIH",
    name: "Kerim Alajbegovic",
    fullName: "Kerim Alajbegovic",
    number: 19,
    position: "FW",
    club: "Toulouse",
    pictureUrl: "https://digitalhub.fifa.com/transform/9587bf1f-6c8f-4b8d-80c7-799edc4a7036/ALAJBEGOVIC-Kerim_504990",
    dateOfBirth: "2007-09-21",
    height: 186,
    socials: {
      instagram: "kerim.sa10",
      wikipedia: "https://en.wikipedia.org/wiki/Kerim_Alajbegovi%C4%87"
    }
  },
  "505097": {
    fifaId: "505097",
    teamCode: "MAR",
    name: "Samir El Mourabet",
    fullName: "Samir El Mourabet",
    number: 15,
    position: "MF",
    club: "Al Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c4672ea-a846-45f7-ae85-85ec7559a30c/EL-MOURABET-Samir_505097",
    dateOfBirth: "2005-10-06",
    height: 187,
    socials: {
      instagram: "s_elmourabet",
      wikipedia: "https://en.wikipedia.org/wiki/Samir_El_Mourabet"
    }
  },
  "505112": {
    fifaId: "505112",
    teamCode: "MAR",
    name: "Gessime Yassine",
    fullName: "Gessime Yassine",
    number: 16,
    position: "MF",
    club: "Wydad Casablanca",
    pictureUrl: "https://digitalhub.fifa.com/transform/dd763e4f-0cfe-44b1-8e18-ea842260c807/YASSINE-Gessime_505112",
    dateOfBirth: "2005-11-22",
    height: 172,
    socials: {
      instagram: "gessime.yassine",
      wikipedia: "https://en.wikipedia.org/wiki/Gessime_Yassine"
    }
  },
  "505495": {
    fifaId: "505495",
    teamCode: "PAR",
    name: "Alexandro Maidana",
    fullName: "Alexandro Maidana",
    number: 26,
    position: "DF",
    club: "Cruz Azul",
    pictureUrl: "https://digitalhub.fifa.com/transform/e9ad29de-acf1-4cfd-b387-7edf7f480db4/MAIDANA-Alexandro_505495",
    dateOfBirth: "2005-07-26",
    height: 173,
    socials: {
      instagram: "alexmaidana10",
      wikipedia: "https://en.wikipedia.org/wiki/Alexandro_Maidana"
    }
  },
  "506028": {
    fifaId: "506028",
    teamCode: "NED",
    name: "Robin Roefs",
    fullName: "Robin Roefs",
    number: 13,
    position: "GK",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/557e5592-2bf9-4d43-8d51-ee7e2881cb65/ROEFS-Robin_506028",
    dateOfBirth: "2003-01-17",
    height: 193,
    socials: {
      instagram: "robinroefs_",
      wikipedia: "https://en.wikipedia.org/wiki/Robin_Roefs"
    }
  },
  "506038": {
    fifaId: "506038",
    teamCode: "RSA",
    name: "Kamogelo Sebelebele",
    fullName: "Kamogelo Sebelebele",
    number: 25,
    position: "FW",
    club: "Stellenbosch FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/dcd49deb-cb7f-4620-8f79-98a802624026/SEBELEBELE-Kamogelo_506038",
    dateOfBirth: "2002-07-21",
    height: 166,
    socials: {
      instagram: "mikemamosha07",
      wikipedia: "https://en.wikipedia.org/wiki/Kamogelo_Sebelebele"
    }
  },
  "506039": {
    fifaId: "506039",
    teamCode: "RSA",
    name: "Ime Okon",
    fullName: "Ime Okon",
    number: 21,
    position: "DF",
    club: "FCSB",
    pictureUrl: "https://digitalhub.fifa.com/transform/5f5d2eb3-3964-486f-9faa-800200078576/OKON-Ime_506039",
    dateOfBirth: "2004-02-20",
    height: 187,
    socials: {
      instagram: "i.am.ime",
      wikipedia: "https://en.wikipedia.org/wiki/Ime_Okon"
    }
  },
  "506069": {
    fifaId: "506069",
    teamCode: "IRQ",
    name: "Kevin Yakob",
    fullName: "Kevin Yakob",
    number: 19,
    position: "MF",
    club: "FC Eindhoven",
    pictureUrl: "https://digitalhub.fifa.com/transform/c9912381-f7e5-4059-a630-ccbee68ebb7f/KEVIN-YAKOB_506069",
    dateOfBirth: "2000-10-10",
    height: 180,
    socials: {
      instagram: "kevinyakob",
      wikipedia: "https://en.wikipedia.org/wiki/Kevin_Yakob"
    }
  },
  "506088": {
    fifaId: "506088",
    teamCode: "BEL",
    name: "Joaquin Seys",
    fullName: "Joaquin Seys",
    number: 18,
    position: "DF",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/33c2b9de-5ae7-4fa1-8db8-6cff8e2b02f0/SEYS-Joaquin_506088",
    dateOfBirth: "2005-03-28",
    height: 178,
    socials: {
      instagram: "joaquinseys65",
      wikipedia: "https://en.wikipedia.org/wiki/Joaquin_Seys"
    }
  },
  "506124": {
    fifaId: "506124",
    teamCode: "EGY",
    name: "Tarek Alaa",
    fullName: "Tarek Alaa",
    number: 24,
    position: "DF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/9bbd4a65-1d5e-4383-b5d5-cf60bbdcec1d/TAREK-ALAA_506124",
    dateOfBirth: "2002-01-05",
    height: 178,
    socials: {
      instagram: "tarek_alaa_3",
      wikipedia: "https://en.wikipedia.org/wiki/Tarek_Alaa_(footballer,_born_2002)"
    }
  },
  "506202": {
    fifaId: "506202",
    teamCode: "CIV",
    name: "Bazoumana Toure",
    fullName: "Bazoumana Toure",
    number: 24,
    position: "FW",
    club: "Toulouse",
    pictureUrl: "https://digitalhub.fifa.com/transform/fa213cf7-928a-49ab-acc9-b6f5059b188c/TOURE-Bazoumana_506202",
    dateOfBirth: "2006-03-02",
    height: 178,
    socials: {
      instagram: "zoumtoure96",
      wikipedia: "https://en.wikipedia.org/wiki/Bazoumana_Tour%C3%A9"
    }
  },
  "506329": {
    fifaId: "506329",
    teamCode: "ENG",
    name: "Djed Spence",
    fullName: "Djed Spence",
    number: 25,
    position: "DF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/03356baa-b368-4192-bf86-ad3033e57ad2/SPENCE-Djed_506329",
    dateOfBirth: "2000-08-09",
    height: 184,
    socials: {
      instagram: "djedspence",
      wikipedia: "https://en.wikipedia.org/wiki/Djed_Spence"
    }
  },
  "506335": {
    fifaId: "506335",
    teamCode: "TUN",
    name: "Moutaz Neffati",
    fullName: "Moutaz Neffati",
    number: 23,
    position: "DF",
    club: "Club Africain",
    pictureUrl: "https://digitalhub.fifa.com/transform/0f6a863a-959a-40ec-a07f-0c77d7c5a322/NEFFATI-Moutaz_506335",
    dateOfBirth: "2004-09-04",
    height: 182,
    socials: {
      instagram: "moutazneffati",
      wikipedia: "https://en.wikipedia.org/wiki/Moutaz_Neffati"
    }
  },
  "506471": {
    fifaId: "506471",
    teamCode: "CUW",
    name: "Deveron Fonville",
    fullName: "Deveron Fonville",
    number: 24,
    position: "DF",
    club: "Helmond Sport",
    pictureUrl: "https://digitalhub.fifa.com/transform/29abb3b9-0b95-4101-ae19-0aa95d77e362/FONVILLE-Deveron_506471",
    dateOfBirth: "2003-05-16",
    height: 188,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Deveron_Fonville"
    }
  },
  "506473": {
    fifaId: "506473",
    teamCode: "CUW",
    name: "Tyrese Noslin",
    fullName: "Tyrese Noslin",
    number: 13,
    position: "FW",
    club: "NAC Breda",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a1d79e4-2beb-4cc4-aa5d-adea0d32896c/NOSLIN-Tyrese_506473",
    dateOfBirth: "2002-09-11",
    height: 182,
    socials: {
      instagram: "tyresenoslin",
      wikipedia: "https://en.wikipedia.org/wiki/Tyrese_Noslin"
    }
  },
  "506481": {
    fifaId: "506481",
    teamCode: "HAI",
    name: "Keeto Thermoncy",
    fullName: "Keeto Thermoncy",
    number: 3,
    position: "DF",
    club: "Figueirense",
    pictureUrl: "https://digitalhub.fifa.com/transform/012553fc-773a-4fca-a30d-468777a287de/THERMONCY-Keeto_506481",
    dateOfBirth: "2006-03-29",
    height: 179,
    socials: {
      instagram: "keeto.thermoncy",
      wikipedia: "https://en.wikipedia.org/wiki/Keeto_Thermoncy"
    }
  },
  "506483": {
    fifaId: "506483",
    teamCode: "HAI",
    name: "Yassin Fortune",
    fullName: "Yassin Fortune",
    number: 19,
    position: "FW",
    club: "Guadeloupe",
    pictureUrl: "https://digitalhub.fifa.com/transform/8c508739-1d44-49e5-8395-dbba0ff45072/FORTUNE-Yassin_506483",
    dateOfBirth: "1999-01-30",
    height: 186,
    socials: {
      instagram: "yassin_fortune_afc",
      wikipedia: "https://en.wikipedia.org/wiki/Yassin_Fortun%C3%A9"
    }
  },
  "506775": {
    fifaId: "506775",
    teamCode: "CZE",
    name: "Hugo Sochurek",
    fullName: "Hugo Sochurek",
    number: 25,
    position: "MF",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/72b960f8-5b10-4a9d-8726-6525e2ee6796/SOCHUREK-Hugo_506775",
    dateOfBirth: "2008-06-07",
    height: 183,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Hugo_Soch%C5%AFrek"
    }
  },
  "510757": {
    fifaId: "510757",
    teamCode: "HAI",
    name: "Josue Casimir",
    fullName: "Josue Casimir",
    number: 21,
    position: "FW",
    club: "Cosmos Haiti",
    pictureUrl: "https://digitalhub.fifa.com/transform/4a02cdae-6685-4a04-a779-8472e1b0ee39/CASIMIR-Josue_510757",
    dateOfBirth: "2001-09-24",
    height: 178,
    socials: {
      instagram: "j.casimir_",
      wikipedia: "https://en.wikipedia.org/wiki/Josu%C3%A9_Casimir"
    }
  },
  "510850": {
    fifaId: "510850",
    teamCode: "RSA",
    name: "Thabang Matuludi",
    fullName: "Thabang Matuludi",
    number: 2,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/33d0c67e-6bf5-41cb-a8ab-ad1cb098d166/MATULUDI-Thabang_510850",
    dateOfBirth: "1999-01-14",
    height: 189,
    socials: {
      instagram: "thabang_matuludi",
      wikipedia: "https://en.wikipedia.org/wiki/Thabang_Matuludi"
    }
  },
  "510908": {
    fifaId: "510908",
    teamCode: "SUI",
    name: "Luca Jaquez",
    fullName: "Luca Jaquez",
    number: 25,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/2f3d611d-71c6-40ac-bc76-fdad78fe3c5e/JAQUEZ-Luca_510908",
    dateOfBirth: "2003-06-02",
    height: 187,
    socials: {
      instagram: "luca_jaquez",
      wikipedia: "https://en.wikipedia.org/wiki/Luca_Jaquez"
    }
  },
  "510922": {
    fifaId: "510922",
    teamCode: "CIV",
    name: "Yan Diomande",
    fullName: "Yan Diomande",
    number: 11,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/4218dafb-b39b-4640-ac2f-e1d9f104aa6a/DIOMANDE-Yan_510922",
    dateOfBirth: "2006-11-14",
    height: 180,
    socials: {
      instagram: "yandiomande",
      wikipedia: "https://pt.wikipedia.org/wiki/Yan_Diomand%C3%A9"
    }
  },
  "510989": {
    fifaId: "510989",
    teamCode: "COD",
    name: "Brian Cipenga",
    fullName: "Brian Cipenga",
    number: 9,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/ebfc012f-56c2-4279-9eab-02219646f01e/CIPENGA-Brian_510989",
    dateOfBirth: "1998-03-11",
    height: 172
  },
  "510991": {
    fifaId: "510991",
    teamCode: "QAT",
    name: "Ayoub Aloui",
    fullName: "Ayoub Aloui",
    number: 13,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/bdeaddf2-602f-47d1-a3f0-a85abc80c3ff/AYOUB-ALOUI_510991",
    dateOfBirth: "2005-03-11",
    height: 181
  },
  "511009": {
    fifaId: "511009",
    teamCode: "ALG",
    name: "Rafik Belghali",
    fullName: "Rafik Belghali",
    number: 17,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/0007b754-4911-4f39-8c81-df2c156f7aa5/BELGHALI-Rafik_511009",
    dateOfBirth: "2002-06-07",
    height: 180,
    socials: {
      instagram: "rafikbelghali17",
      wikipedia: "https://en.wikipedia.org/wiki/Rafik_Belghali"
    }
  },
  "511010": {
    fifaId: "511010",
    teamCode: "ALG",
    name: "Samir Chergui",
    fullName: "Samir Chergui",
    number: 26,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a1d62d5-a732-4036-b925-d011389a66fb/CHERGUI-Samir_511010",
    dateOfBirth: "1999-02-06",
    height: 185,
    socials: {
      instagram: "chergui31_",
      wikipedia: "https://en.wikipedia.org/wiki/Samir_Chergui"
    }
  },
  "511015": {
    fifaId: "511015",
    teamCode: "GER",
    name: "Nathaniel Brown",
    fullName: "Nathaniel Brown",
    number: 18,
    position: "DF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/68e13808-182e-46b6-a6ec-a54136a57c1b/BROWN-Nathaniel_511015",
    dateOfBirth: "2003-06-16",
    height: 176,
    socials: {
      instagram: "nene.brown27"
    }
  },
  "511118": {
    fifaId: "511118",
    teamCode: "CZE",
    name: "Lukas Hornicek",
    fullName: "Lukas Hornicek",
    number: 23,
    position: "GK",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/d76a995c-dcd7-4219-a555-3336ac87b052/HORNICEK-Lukas_511118",
    dateOfBirth: "2002-07-13",
    height: 198,
    socials: {
      instagram: "l_hornicek91",
      wikipedia: "https://en.wikipedia.org/wiki/Luk%C3%A1%C5%A1_Horn%C3%AD%C4%8Dek"
    }
  },
  "511141": {
    fifaId: "511141",
    teamCode: "CUW",
    name: "Armando Obispo",
    fullName: "Armando Obispo",
    number: 18,
    position: "DF",
    club: "Cambuur",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2384459-9ca9-4dce-b232-5bbfbcd07316/OBISPO-Armando_511141",
    dateOfBirth: "1999-03-05",
    height: 185,
    socials: {
      instagram: "armandoobispo_",
      wikipedia: "https://pt.wikipedia.org/wiki/Armando_Obispo"
    }
  },
  "511710": {
    fifaId: "511710",
    teamCode: "JPN",
    name: "Tomoki Hayakawa",
    fullName: "Tomoki Hayakawa",
    number: 23,
    position: "GK",
    club: "Urawa Red Diamonds",
    pictureUrl: "https://digitalhub.fifa.com/transform/d81ad421-1126-4549-a89f-3fafd8db2a97/HAYAKAWA-Tomoki_511710",
    dateOfBirth: "1999-03-03",
    height: 187,
    socials: {
      instagram: "tomoki.hayakawa_official",
      wikipedia: "https://en.wikipedia.org/wiki/Tomoki_Hayakawa"
    }
  },
  "511828": {
    fifaId: "511828",
    teamCode: "KOR",
    name: "Castrop Jens",
    fullName: "Castrop Jens",
    number: 23,
    position: "DF",
    club: "Girona",
    pictureUrl: "https://digitalhub.fifa.com/transform/d758ee8c-58aa-4562-8b5c-96612458f567/CASTROP-Jens_511828",
    dateOfBirth: "2003-07-29",
    height: 178,
    socials: {
      instagram: "jenscastrop",
      wikipedia: "https://en.wikipedia.org/wiki/Jens_Castrop"
    }
  },
  "511875": {
    fifaId: "511875",
    teamCode: "JOR",
    name: "Odeh Fakhoury",
    fullName: "Odeh Fakhoury",
    number: 11,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/07e6d74d-1e09-4278-97e4-4b0bfcba2de8/ODEH-FAKHOURY_511875",
    dateOfBirth: "2005-11-22",
    height: 180,
    socials: {
      instagram: "odehfakhoury10"
    }
  },
  "511889": {
    fifaId: "511889",
    teamCode: "JOR",
    name: "Anas Badawi",
    fullName: "Anas Badawi",
    number: 26,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/c5fbd430-c7f3-4d67-9d16-e7f4e17a872a/ANAS-BADAWI_511889",
    dateOfBirth: "1997-09-13",
    height: 174,
    socials: {
      instagram: "anas_badawi97",
      wikipedia: "https://en.wikipedia.org/wiki/Anas_Badawi"
    }
  },
  "512039": {
    fifaId: "512039",
    teamCode: "TUN",
    name: "Khalil Ayari",
    fullName: "Khalil Ayari",
    number: 14,
    position: "MF",
    club: "Al Wakrah",
    pictureUrl: "https://digitalhub.fifa.com/transform/9b51ba77-1740-47cc-93f1-1529287d27ea/AYARI-Khalil_512039",
    dateOfBirth: "2005-02-02",
    height: 174,
    socials: {
      instagram: "khalilayari.10",
      wikipedia: "https://en.wikipedia.org/wiki/Khalil_Ayari"
    }
  },
  "512079": {
    fifaId: "512079",
    teamCode: "EGY",
    name: "Mohamed Alaa",
    fullName: "Mohamed Alaa",
    number: 26,
    position: "GK",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/6a209a18-784b-401d-af68-4c768a814a36/MOHAMED-ALAA_512079",
    dateOfBirth: "1999-01-01",
    height: 188,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mohamed_Alaa"
    }
  },
  "512127": {
    fifaId: "512127",
    teamCode: "ALG",
    name: "Achref Abada",
    fullName: "Achref Abada",
    number: 3,
    position: "DF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/8b3d3f92-a378-40d7-92d2-85eed4a732d3/ABADA-Achraf_512127",
    dateOfBirth: "1999-06-15",
    height: 185,
    socials: {
      instagram: "abada_achraf_23",
      wikipedia: "https://en.wikipedia.org/wiki/Achref_Abada"
    }
  },
  "512132": {
    fifaId: "512132",
    teamCode: "ALG",
    name: "Adil Boulbina",
    fullName: "Adil Boulbina",
    number: 20,
    position: "FW",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/167d2400-d78c-4931-8a84-7b27284bd386/BOULBINA-Adil_512132",
    dateOfBirth: "2003-05-02",
    height: 183,
    socials: {
      instagram: "adel_boulbina10",
      wikipedia: "https://en.wikipedia.org/wiki/Adil_Boulbina"
    }
  },
  "512183": {
    fifaId: "512183",
    teamCode: "KSA",
    name: "Mohammed Abu Alshamat",
    fullName: "Mohammed Abu Alshamat",
    number: 26,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/8aee29b9-06b4-4b46-b529-3bb6adf5f9a6/MOHAMMED-ABU-ALSHAMAT_512183",
    dateOfBirth: "2002-08-11",
    height: 170
  },
  "512791": {
    fifaId: "512791",
    teamCode: "QAT",
    name: "Issa Laye",
    fullName: "Issa Laye",
    number: 4,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/542d2f64-858e-4597-8f77-719b40da16dd/ISSA-LAYE_512791",
    dateOfBirth: "1997-12-22",
    height: 178,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Issa_Laye"
    }
  },
  "514070": {
    fifaId: "514070",
    teamCode: "CAN",
    name: "Alfie Jones",
    fullName: "Alfie Jones",
    number: 3,
    position: "DF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/59f64291-f9e7-4d71-82cd-e15eb9a91a1c/JONES-Alfie_514070",
    dateOfBirth: "1997-10-07",
    height: 191,
    socials: {
      instagram: "alfiejon35",
      wikipedia: "https://en.wikipedia.org/wiki/Alfie_Jones"
    }
  },
  "514166": {
    fifaId: "514166",
    teamCode: "BEL",
    name: "Nathan Ngoy",
    fullName: "Nathan Ngoy",
    number: 25,
    position: "DF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/77bea513-328c-4af6-a1b6-89efdfeb03ae/NGOY-Nathan_514166",
    dateOfBirth: "2003-06-10",
    height: 183,
    socials: {
      instagram: "ngoy_nathan",
      wikipedia: "https://en.wikipedia.org/wiki/Nathan_Ngoy"
    }
  },
  "514171": {
    fifaId: "514171",
    teamCode: "COD",
    name: "Matthieu Epolo",
    fullName: "Matthieu Epolo",
    number: 21,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/5b3aa99c-c19f-4087-9230-fcc1023e6baa/EPOLO-Matthieu_514171",
    dateOfBirth: "2005-01-15",
    height: 183,
    socials: {
      instagram: "matthieuepolo",
      wikipedia: "https://en.wikipedia.org/wiki/Matthieu_Epolo"
    }
  },
  "514188": {
    fifaId: "514188",
    teamCode: "GER",
    name: "Malick Thiaw",
    fullName: "Malick Thiaw",
    number: 24,
    position: "DF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/eaa37355-0eca-4954-845c-437aa602db42/THIAW-Malick_514188",
    dateOfBirth: "2001-08-08",
    height: 194,
    socials: {
      instagram: "malick.laye",
      wikipedia: "https://pt.wikipedia.org/wiki/Malick_Thiaw"
    }
  },
  "514202": {
    fifaId: "514202",
    teamCode: "SWE",
    name: "Taha Ali",
    fullName: "Taha Ali",
    number: 26,
    position: "FW",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/9a70800c-37c4-4cd9-b195-f307dbaad09b/ALI-Taha_514202",
    dateOfBirth: "1998-07-01",
    height: 174,
    socials: {
      instagram: "daha.10",
      wikipedia: "https://en.wikipedia.org/wiki/Taha_Ali"
    }
  },
  "514208": {
    fifaId: "514208",
    teamCode: "CIV",
    name: "Christ Inao Oulai",
    fullName: "Christ Inao Oulai",
    number: 26,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/a1bae10b-b280-4234-81c1-063fa931cd02/OULAI-Christ-Inao_514208",
    dateOfBirth: "2006-04-06",
    height: 173,
    socials: {
      instagram: "inao_christ",
      wikipedia: "https://en.wikipedia.org/wiki/Christ_Inao_Oula%C3%AF"
    }
  },
  "514326": {
    fifaId: "514326",
    teamCode: "ECU",
    name: "Jeremy Arevalo",
    fullName: "Jeremy Arevalo",
    number: 24,
    position: "FW",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/9c839f83-e77a-4938-a764-95685591b367/AREVALO-Jeremy_514326",
    dateOfBirth: "2005-03-19",
    height: 182,
    socials: {
      instagram: "jeeremyarevalo",
      wikipedia: "https://en.wikipedia.org/wiki/Jeremy_Ar%C3%A9valo"
    }
  },
  "514334": {
    fifaId: "514334",
    teamCode: "CZE",
    name: "Stepan Chaloupek",
    fullName: "Stepan Chaloupek",
    number: 6,
    position: "DF",
    club: "Girona",
    pictureUrl: "https://digitalhub.fifa.com/transform/35d513e7-429b-44eb-b1bd-671a6a22bc83/CHALOUPEK-Stepan_514334",
    dateOfBirth: "2003-03-08",
    height: 188,
    socials: {
      instagram: "chalyyy.4",
      wikipedia: "https://en.wikipedia.org/wiki/%C5%A0t%C4%9Bp%C3%A1n_Chaloupek"
    }
  },
  "514336": {
    fifaId: "514336",
    teamCode: "MEX",
    name: "Armando Gonzalez",
    fullName: "Armando Gonzalez",
    number: 14,
    position: "FW",
    club: "Braga",
    pictureUrl: "https://digitalhub.fifa.com/transform/81ce3e70-d37d-4109-b423-8cc7732527a1/GONZALEZ-Armando_514336",
    dateOfBirth: "2003-04-20",
    height: 182,
    socials: {
      instagram: "hormiga_glez",
      wikipedia: "https://en.wikipedia.org/wiki/Armando_Gonz%C3%A1lez_(footballer,_born_2003)"
    }
  },
  "514479": {
    fifaId: "514479",
    teamCode: "NOR",
    name: "Sander Tangvik",
    fullName: "Sander Tangvik",
    number: 12,
    position: "GK",
    club: "Viking",
    pictureUrl: "https://digitalhub.fifa.com/transform/c7cb7af6-fa0d-4795-bdba-c53bed58e3fa/TANGVIK-Sander_514479",
    dateOfBirth: "2002-11-29",
    height: 193,
    socials: {
      instagram: "sandertangvik_",
      wikipedia: "https://en.wikipedia.org/wiki/Sander_Tangvik"
    }
  },
  "514526": {
    fifaId: "514526",
    teamCode: "CRO",
    name: "Ivor Pandur",
    fullName: "Ivor Pandur",
    number: 12,
    position: "GK",
    club: "Levante",
    pictureUrl: "https://digitalhub.fifa.com/transform/5a32b76f-ee60-4eb1-a2e0-b12bc86e41e0/PANDUR-Ivor_514526",
    dateOfBirth: "2000-03-25",
    height: 187,
    socials: {
      instagram: "ivorpandur",
      wikipedia: "https://en.wikipedia.org/wiki/Ivor_Pandur"
    }
  },
  "514639": {
    fifaId: "514639",
    teamCode: "SWE",
    name: "Herman Johansson",
    fullName: "Herman Johansson",
    number: 6,
    position: "DF",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/58eb2743-907e-4e6d-8020-28c8767e5cdc/JOHANSSON-Herman_514639",
    dateOfBirth: "1997-10-16",
    height: 190,
    socials: {
      instagram: "hermanjohansson",
      wikipedia: "https://en.wikipedia.org/wiki/Herman_Johansson"
    }
  },
  "516043": {
    fifaId: "516043",
    teamCode: "TUN",
    name: "Adam Arous",
    fullName: "Adam Arous",
    number: 5,
    position: "DF",
    club: "Esp\xE9rance Sportive",
    pictureUrl: "https://digitalhub.fifa.com/transform/7cbb37f5-5dcd-4fa9-919e-f3fe4f843868/AROUS-Adam_516043",
    dateOfBirth: "2004-07-17",
    height: 188,
    socials: {
      instagram: "adem_arous",
      wikipedia: "https://en.wikipedia.org/wiki/Adem_Arous"
    }
  },
  "518200": {
    fifaId: "518200",
    teamCode: "AUS",
    name: "Tete Yengi",
    fullName: "Tete Yengi",
    number: 26,
    position: "FW",
    club: "St Pauli",
    pictureUrl: "https://digitalhub.fifa.com/transform/e581f23a-032d-448c-b389-d49738c8e9c1/YENGI-Tete_518200",
    dateOfBirth: "2000-11-28",
    height: 197,
    socials: {
      instagram: "teteyengi",
      wikipedia: "https://en.wikipedia.org/wiki/Tete_Yengi"
    }
  },
  "519836": {
    fifaId: "519836",
    teamCode: "BRA",
    name: "Igor Thiago",
    fullName: "Igor Thiago",
    number: 25,
    position: "FW",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/d547cc13-69d0-4204-91bf-baf63bbb7328/IGOR-THIAGO_519836",
    dateOfBirth: "2001-06-26",
    height: 190,
    socials: {
      instagram: "thiago01",
      wikipedia: "https://pt.wikipedia.org/wiki/Igor_Thiago"
    }
  },
  "519837": {
    fifaId: "519837",
    teamCode: "IRN",
    name: "Dennis Dargahi",
    fullName: "Dennis Dargahi",
    number: 24,
    position: "FW",
    club: "Sepahan",
    pictureUrl: "https://digitalhub.fifa.com/transform/11560f08-8fe3-4acb-b30f-cf1a0b2e83ad/DARGAHI-Dennis_519837",
    dateOfBirth: "1997-01-09",
    height: 182,
    socials: {
      instagram: "dennis_yerai",
      wikipedia: "https://en.wikipedia.org/wiki/Dennis_Eckert"
    }
  },
  "519954": {
    fifaId: "519954",
    teamCode: "BIH",
    name: "Jovo Lukic",
    fullName: "Jovo Lukic",
    number: 25,
    position: "FW",
    club: "FC Z\xFCrich",
    pictureUrl: "https://digitalhub.fifa.com/transform/8fc08945-7c3e-4e0f-95b4-0c94a72a718d/LUKIC-Jovo_519954",
    dateOfBirth: "1998-11-28",
    height: 190,
    socials: {
      instagram: "jovolukic9",
      wikipedia: "https://pt.wikipedia.org/wiki/Jovo_Luki%C4%87"
    }
  },
  "519958": {
    fifaId: "519958",
    teamCode: "SWE",
    name: "Elliot Stroud",
    fullName: "Elliot Stroud",
    number: 24,
    position: "DF",
    club: "Union Berlin",
    pictureUrl: "https://digitalhub.fifa.com/transform/12d24b4c-5628-4013-8f4d-bddea4ae2258/STROUD-Elliot_519958",
    dateOfBirth: "2002-06-22",
    height: 185,
    socials: {
      instagram: "stroud_elliot",
      wikipedia: "https://en.wikipedia.org/wiki/Elliot_Stroud"
    }
  },
  "519985": {
    fifaId: "519985",
    teamCode: "CZE",
    name: "Denis Visinsky",
    fullName: "Denis Visinsky",
    number: 26,
    position: "FW",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/60b4e376-f163-4918-8742-a2f6ada5fc84/VISINSKY-Denis_519985",
    dateOfBirth: "2003-03-21",
    height: 178,
    socials: {
      instagram: "denis_visinsky",
      wikipedia: "https://en.wikipedia.org/wiki/Denis_Vi%C5%A1insk%C3%BD"
    }
  },
  "520034": {
    fifaId: "520034",
    teamCode: "AUT",
    name: "Florian Wiegele",
    fullName: "Florian Wiegele",
    number: 12,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/7feedee9-3390-40e2-a9aa-8867abd8b89e/WIEGELE-Florian_520034",
    dateOfBirth: "2001-03-21",
    height: 205,
    socials: {
      instagram: "florianwiegele",
      wikipedia: "https://en.wikipedia.org/wiki/Florian_Wiegele"
    }
  },
  "520035": {
    fifaId: "520035",
    teamCode: "AUT",
    name: "David Affengruber",
    fullName: "David Affengruber",
    number: 2,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/cc8957b4-30b2-4559-9ae1-c8d14a3260a5/AFFENGRUBER-David_520035",
    dateOfBirth: "2001-03-19",
    height: 185,
    socials: {
      instagram: "davidaffengruber",
      wikipedia: "https://pt.wikipedia.org/wiki/David_Affengruber"
    }
  },
  "520036": {
    fifaId: "520036",
    teamCode: "AUT",
    name: "Paul Wanner",
    fullName: "Paul Wanner",
    number: 24,
    position: "MF",
    club: "FC Bayern Munich",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0954793-5e15-4708-9ed0-ea59e3501b8c/WANNER-Paul_520036",
    dateOfBirth: "2005-12-23",
    height: 185,
    socials: {
      instagram: "paul_wanner_",
      wikipedia: "https://en.wikipedia.org/wiki/Paul_Wanner"
    }
  },
  "520066": {
    fifaId: "520066",
    teamCode: "PAR",
    name: "Jose Canale",
    fullName: "Jose Canale",
    number: 13,
    position: "DF",
    club: "Olimpia",
    pictureUrl: "https://digitalhub.fifa.com/transform/2039b54f-7036-444c-90d0-da1f89780077/CANALE-Jose_520066",
    dateOfBirth: "1996-07-20",
    height: 192,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Jos%C3%A9_Canale"
    }
  },
  "520068": {
    fifaId: "520068",
    teamCode: "JOR",
    name: "Mohammad Abughoush",
    fullName: "Mohammad Abughoush",
    number: 18,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/5ee84ee8-8e6a-4a6d-aff9-42538c323659/MOHAMMAD-ABUGHOUSH_520068",
    dateOfBirth: "2005-07-13",
    height: 182,
    socials: {
      instagram: "mohammadabughoush95"
    }
  },
  "520070": {
    fifaId: "520070",
    teamCode: "ALG",
    name: "Melvin Mastil",
    fullName: "Melvin Mastil",
    number: 1,
    position: "GK",
    club: "Al-Ettifaq",
    pictureUrl: "https://digitalhub.fifa.com/transform/6d85724d-c5a6-400d-acb9-df73451a4bf4/MASTIL-Melvin_520070",
    dateOfBirth: "2000-02-19",
    height: 194,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Melvin_Mastil"
    }
  },
  "520071": {
    fifaId: "520071",
    teamCode: "ALG",
    name: "Nadhir Benbouali",
    fullName: "Nadhir Benbouali",
    number: 12,
    position: "FW",
    club: "MC Oran",
    pictureUrl: "https://digitalhub.fifa.com/transform/9e9811da-2a8a-48cd-9088-1a45b6f90e0a/BENBOUALI-Nadhir_520071",
    dateOfBirth: "2000-04-17",
    height: 190,
    socials: {
      instagram: "nadirbenbouali45",
      wikipedia: "https://en.wikipedia.org/wiki/Nadhir_Benbouali"
    }
  },
  "520072": {
    fifaId: "520072",
    teamCode: "ALG",
    name: "Fares Ghedjemis",
    fullName: "Fares Ghedjemis",
    number: 25,
    position: "FW",
    club: "Belouizdad",
    pictureUrl: "https://digitalhub.fifa.com/transform/39118134-164a-4baa-9884-de4f4821a0b7/GHEDJEMIS-Fares_520072",
    dateOfBirth: "2002-09-06",
    height: 183,
    socials: {
      instagram: "fares.ghedjemis",
      wikipedia: "https://en.wikipedia.org/wiki/Far%C3%A8s_Ghedjemis"
    }
  },
  "520112": {
    fifaId: "520112",
    teamCode: "NOR",
    name: "Henrik Falchener",
    fullName: "Henrik Falchener",
    number: 25,
    position: "DF",
    club: "Celta Vigo",
    pictureUrl: "https://digitalhub.fifa.com/transform/2990fade-76fd-431e-b7ec-6551ca61de8c/FALCHENER-Henrik_520112",
    dateOfBirth: "2003-05-08",
    height: 194,
    socials: {
      instagram: "falchener1",
      wikipedia: "https://en.wikipedia.org/wiki/Henrik_Falchener"
    }
  },
  "520217": {
    fifaId: "520217",
    teamCode: "SCO",
    name: "Findlay Curtis",
    fullName: "Findlay Curtis",
    number: 25,
    position: "FW",
    club: "Sheffield Wednesday",
    pictureUrl: "https://digitalhub.fifa.com/transform/a6c805c6-37f9-44e9-80a8-e43118e78762/CURTIS-Findlay_520217",
    dateOfBirth: "2006-06-09",
    height: 180,
    socials: {
      instagram: "findlaycurtis_",
      wikipedia: "https://en.wikipedia.org/wiki/Findlay_Curtis"
    }
  },
  "520218": {
    fifaId: "520218",
    teamCode: "JPN",
    name: "Kento Shiogai",
    fullName: "Kento Shiogai",
    number: 26,
    position: "FW",
    club: "Borussia Monchengladbach",
    pictureUrl: "https://digitalhub.fifa.com/transform/86999b3c-aa5d-46d6-b42e-1601dd197182/SHIOGAI-Kento_520218",
    dateOfBirth: "2005-03-26",
    height: 180,
    socials: {
      instagram: "shio_kenken",
      wikipedia: "https://en.wikipedia.org/wiki/Kento_Shiogai"
    }
  },
  "520245": {
    fifaId: "520245",
    teamCode: "TUN",
    name: "Mouhib Chamakh",
    fullName: "Mouhib Chamakh",
    number: 1,
    position: "GK",
    club: "Club Africain",
    pictureUrl: "https://digitalhub.fifa.com/transform/7047e775-2f2c-4ea2-9ca6-6fc23363c591/CHAMAKH-Mouhib_520245",
    dateOfBirth: "2001-08-25",
    height: 189,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Mouhib_Chamakh"
    }
  },
  "520246": {
    fifaId: "520246",
    teamCode: "TUN",
    name: "Raed Chikhaoui",
    fullName: "Raed Chikhaoui",
    number: 24,
    position: "DF",
    club: "CS Sfaxien",
    pictureUrl: "https://digitalhub.fifa.com/transform/8ecb6694-a3aa-4efe-b13d-64a020109ec2/CHIKHAOUI-Raed_520246",
    dateOfBirth: "2004-06-09",
    height: 191,
    socials: {
      instagram: "raed.chikhaoui",
      wikipedia: "https://en.wikipedia.org/wiki/Raed_Chikhaoui"
    }
  },
  "520247": {
    fifaId: "520247",
    teamCode: "TUN",
    name: "Rayan Elloumi",
    fullName: "Rayan Elloumi",
    number: 18,
    position: "FW",
    club: "Esp\xE9rance Sportive",
    pictureUrl: "https://digitalhub.fifa.com/transform/15445a99-9bc9-41c4-8d6f-c46ac25b3d5d/ELLOUMI-Rayan_520247",
    dateOfBirth: "2007-09-17",
    height: 180,
    socials: {
      instagram: "rayanelloumi",
      wikipedia: "https://en.wikipedia.org/wiki/Rayan_Elloumi"
    }
  },
  "522282": {
    fifaId: "522282",
    teamCode: "KOR",
    name: "Cho Wije",
    fullName: "Cho Wije",
    number: 14,
    position: "DF",
    club: "SC Freiburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/11bf36a2-f7f4-4078-978f-70d1119d8f7f/CHO-Wije_522282",
    dateOfBirth: "2001-08-25",
    height: 190
  },
  "522842": {
    fifaId: "522842",
    teamCode: "BIH",
    name: "Mladen Jurkas",
    fullName: "Mladen Jurkas",
    number: 12,
    position: "GK",
    club: "Sloboda Tuzla",
    pictureUrl: "https://digitalhub.fifa.com/transform/d568a177-8466-4ef0-89d6-990d70cac911/JURKAS-Mladen_522842",
    dateOfBirth: "2007-10-07",
    height: 193,
    socials: {
      instagram: "jurkassss",
      wikipedia: "https://en.wikipedia.org/wiki/Mladen_Jurkas"
    }
  },
  "522846": {
    fifaId: "522846",
    teamCode: "BIH",
    name: "Ermin Mahmic",
    fullName: "Ermin Mahmic",
    number: 26,
    position: "MF",
    club: "FC Slovan Liberec",
    pictureUrl: "https://digitalhub.fifa.com/transform/ef292137-a5b1-44b8-b329-031d23320552/MAHMIC-Ermin_522846",
    socials: {
      instagram: "erminmahmiic",
      wikipedia: "https://en.wikipedia.org/wiki/Ermin_Mahmi%C4%87"
    },
    dateOfBirth: "2005-03-14",
    height: 182
  },
  "523007": {
    fifaId: "523007",
    teamCode: "SCO",
    name: "Tyler Fletcher",
    fullName: "Tyler Fletcher",
    number: 8,
    position: "MF",
    club: "Napoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/eb1788f3-b3b1-41f9-b746-85ce1b077c14/FLETCHER-Tyler_523007",
    dateOfBirth: "2007-03-19",
    height: 183,
    socials: {
      instagram: "tylerfletch24",
      wikipedia: "https://en.wikipedia.org/wiki/Tyler_Fletcher"
    }
  },
  "523097": {
    fifaId: "523097",
    teamCode: "CZE",
    name: "Alexandr Sojka",
    fullName: "Alexandr Sojka",
    number: 24,
    position: "MF",
    club: "Jablonec",
    pictureUrl: "https://digitalhub.fifa.com/transform/f8e5df75-7de8-4950-bb53-b1d950621d33/SOJKA-Alexandr_523097",
    dateOfBirth: "2003-04-02",
    height: 188,
    socials: {
      instagram: "sojky.17",
      wikipedia: "https://en.wikipedia.org/wiki/Alexandr_Sojka"
    }
  },
  "523215": {
    fifaId: "523215",
    teamCode: "HAI",
    name: "Dominique Simon",
    fullName: "Dominique Simon",
    number: 25,
    position: "MF",
    club: "Tourbillon",
    pictureUrl: "https://digitalhub.fifa.com/transform/a6ab25e1-5ffa-478b-9a8b-e33411873483/SIMON-Dominique_523215",
    dateOfBirth: "2000-07-29",
    height: 178,
    socials: {
      instagram: "d.simon29",
      wikipedia: "https://en.wikipedia.org/wiki/Dominique_Simon"
    }
  },
  "523236": {
    fifaId: "523236",
    teamCode: "IRQ",
    name: "Ahmed Qasem",
    fullName: "Ahmed Qasem",
    number: 11,
    position: "FW",
    club: "Hoverla Uzhhorod",
    pictureUrl: "https://digitalhub.fifa.com/transform/66155853-6cb6-47af-84e6-f8c492fd1b6a/AHMED-QASIM_523236",
    dateOfBirth: "2003-07-12",
    height: 183,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Ahmed_Qasem"
    }
  },
  "523288": {
    fifaId: "523288",
    teamCode: "MAR",
    name: "Ayoube Amaimouni",
    fullName: "Ayoube Amaimouni",
    number: 21,
    position: "FW",
    club: "AEK Athens",
    pictureUrl: "https://digitalhub.fifa.com/transform/54730a6f-bb75-4909-b3c3-37441159d78e/AMAIMOUNI-Ayoub_523288",
    dateOfBirth: "2004-11-30",
    height: 179,
    socials: {
      instagram: "ayoube.aa",
      wikipedia: "https://en.wikipedia.org/wiki/Ayoube_Amaimouni"
    }
  },
  "523333": {
    fifaId: "523333",
    teamCode: "KSA",
    name: "Ala Alhajji",
    fullName: "Ala Alhajji",
    number: 18,
    position: "MF",
    club: "Al-Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/2fb42f50-394b-46d4-9038-9d9b09564b98/ALA-ALHAJJI_523333",
    dateOfBirth: "1995-12-03",
    height: 178
  },
  "523354": {
    fifaId: "523354",
    teamCode: "SEN",
    name: "Bara Sapoko Ndiaye",
    fullName: "Bara Sapoko Ndiaye",
    number: 22,
    position: "MF",
    club: "Metz",
    pictureUrl: "https://digitalhub.fifa.com/transform/957881a0-4f0a-4ff8-baf4-e0c73f844244/NDIAYE-Bara-Sapoko_523354",
    dateOfBirth: "2007-12-31",
    height: 180,
    socials: {
      instagram: "barasapoko39",
      wikipedia: "https://en.wikipedia.org/wiki/Bara_Sapoko_Ndiaye"
    }
  },
  "524320": {
    fifaId: "524320",
    teamCode: "MAR",
    name: "Amine Sbai",
    fullName: "Amine Sbai",
    number: 17,
    position: "FW",
    club: "Leicester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/d75890bc-bbe6-46a2-ab20-5655effe3479/AMINE-SBAI_524320",
    dateOfBirth: "2000-11-05",
    height: 175,
    socials: {
      instagram: "aminesbai10",
      wikipedia: "https://en.wikipedia.org/wiki/Amine_Sba%C3%AF"
    }
  },
  "1443021717": {
    fifaId: "1443021717",
    teamCode: "BRA",
    name: "Igor Jesus",
    fullName: "Igor Jesus",
    number: 9,
    position: "FW",
    club: "Botafogo",
    pictureUrl: "https://digitalhub.fifa.com/transform/a3fba875-a9c9-4d5b-aa92-ff7319d1177a/1443021717",
    socials: {
      instagram: "igorjesus0"
    },
    instagramPostUrl: "https://www.instagram.com/p/DZMvpiQCP7q/",
    worldCupNote: "## Leitura\nGrande surpresa positiva da Amarelinha. Pouco badalado antes do torneio, Igor Jesus aproveitou as oportunidades e j\xE1 \xE9 coartilheiro do Brasil, eficiente mesmo em minutagem fracionada. Contra a Esc\xF3cia, briga para manter a sequ\xEAncia goleadora e firmar a vaga no ataque.\n## Desempenho\n2 gols em 2 jogos, dividindo a artilharia do Brasil com Vin\xEDcius J\xFAnior (2 a 2). Decisivo em papel de rota\xE7\xE3o \u2014 entrou como substituto em um jogo e foi substitu\xEDdo em outro \u2014, marcando mesmo sem ser presen\xE7a fixa nos 90 minutos. Ficha limpa: 0 cart\xF5es.\n## N\xFAmeros\nJ2 \xB7 2 gols \xB7 0 cart\xF5es \xB7 1 entrada + 1 sa\xEDda (substitui\xE7\xF5es). Brasil em 1\xBA lugar com 4 pontos e 4 gols marcados \u2014 Igor Jesus responde por metade deles."
  }
};

// src/data/playerRegistry.ts
var byFifaId = new Map(
  Object.entries(squads_default)
);
var byTeamCode = /* @__PURE__ */ new Map();
for (const player of byFifaId.values()) {
  const team2 = byTeamCode.get(player.teamCode) ?? [];
  team2.push(player);
  byTeamCode.set(player.teamCode, team2);
}
var normalizeText = (s) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]+/g, "").toUpperCase();
var getPlayerByFifaId = (fifaId) => byFifaId.get(fifaId) ?? null;
var getTeamSquad = (teamCode) => byTeamCode.get(teamCode.toUpperCase()) ?? [];
var resolvePlayerEntry = (teamCode, name, number, fifaId) => {
  if (fifaId) {
    const byId = getPlayerByFifaId(fifaId);
    if (byId) return byId;
  }
  const squad = getTeamSquad(teamCode);
  const normalizedName = normalizeText(name);
  return squad.find((p) => normalizeText(p.name) === normalizedName) ?? squad.find((p) => p.number === number) ?? null;
};

// fifa-sync-core.ts
var SPORTV_URL = "https://ge.globo.com/sportv/";
var normalizeText2 = (value) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]/g, "").toUpperCase();
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
    const dedupeKey = `${normalizeText2(source.Name)}::${link}`;
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
  const localHomeCode = normalizeText2(localMatch.teamA.code);
  const localAwayCode = normalizeText2(localMatch.teamB.code);
  const localHomeName = normalizeText2(localMatch.teamA.name);
  const localAwayName = normalizeText2(localMatch.teamB.name);
  const exactMatch = calendarMatches.find((calendarMatch) => {
    const fifaKickoff = new Date(calendarMatch.Date).getTime();
    const homeCode = normalizeText2(calendarMatch.Home?.Abbreviation || "");
    const awayCode = normalizeText2(calendarMatch.Away?.Abbreviation || "");
    return fifaKickoff === localKickoff && homeCode === localHomeCode && awayCode === localAwayCode;
  });
  if (exactMatch) return exactMatch;
  const nameAndDateMatch = calendarMatches.find((calendarMatch) => {
    const fifaKickoff = new Date(calendarMatch.Date).getTime();
    const homeName = normalizeText2(
      getLocalizedDescription(calendarMatch.Home?.TeamName, language)
    );
    const awayName = normalizeText2(
      getLocalizedDescription(calendarMatch.Away?.TeamName, language)
    );
    return fifaKickoff === localKickoff && homeName === localHomeName && awayName === localAwayName;
  });
  if (nameAndDateMatch) return nameAndDateMatch;
  return calendarMatches.find((calendarMatch) => {
    const homeCode = normalizeText2(calendarMatch.Home?.Abbreviation || "");
    const awayCode = normalizeText2(calendarMatch.Away?.Abbreviation || "");
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
var normalizePlayerName = (name) => normalizeText2(name);
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
  const entry = resolvePlayerEntry(teamCode, player.name, player.number, player.fifaId);
  if (!fallbackPlayer) {
    return {
      ...player,
      // FIFA sometimes publishes a starter without a shirt number (ShirtNumber
      // missing → 0 from getStartingLineupFromLiveFifa). Recover it from the
      // local registry rather than rendering "0".
      number: player.number || entry?.number || player.number,
      socials: player.socials ?? entry?.socials,
      instagramPostUrl: player.instagramPostUrl ?? entry?.instagramPostUrl,
      worldCupNote: player.worldCupNote ?? entry?.worldCupNote,
      fullName: player.fullName ?? entry?.fullName,
      dateOfBirth: player.dateOfBirth ?? entry?.dateOfBirth,
      height: player.height ?? entry?.height
    };
  }
  return {
    ...player,
    // Recover a missing FIFA shirt number from the local lineup, then registry.
    number: player.number || fallbackPlayer.number || entry?.number || player.number,
    club: player.club ?? fallbackPlayer.club ?? entry?.club,
    pictureUrl: player.pictureUrl ?? fallbackPlayer.pictureUrl,
    socials: player.socials ?? fallbackPlayer.socials ?? entry?.socials,
    instagramPostUrl: player.instagramPostUrl ?? fallbackPlayer.instagramPostUrl ?? entry?.instagramPostUrl,
    worldCupNote: player.worldCupNote ?? fallbackPlayer.worldCupNote ?? entry?.worldCupNote,
    fullName: player.fullName ?? fallbackPlayer.fullName ?? entry?.fullName,
    dateOfBirth: player.dateOfBirth ?? fallbackPlayer.dateOfBirth ?? entry?.dateOfBirth,
    height: player.height ?? fallbackPlayer.height ?? entry?.height
  };
});
var enrichFallbackLineupWithFifaPictures = (fallbackLineup, fifaTeam, teamCode) => {
  const fifaPlayers = fifaTeam?.Players ?? [];
  return fallbackLineup.map((player) => {
    const fifaPlayer = fifaPlayers.length ? findMatchingFifaPlayer(player, fifaPlayers) : void 0;
    const fifaPicture = getFifaPlayerPictureUrl(fifaPlayer);
    const resolved = resolvePlayerEntry(
      teamCode,
      player.name,
      player.number,
      player.fifaId ?? fifaPlayer?.IdPlayer
    );
    const entry = resolved && (normalizeText2(resolved.name) === normalizeText2(player.name) || player.fifaId !== void 0 && resolved.fifaId === player.fifaId || fifaPlayer?.IdPlayer !== void 0 && resolved.fifaId === fifaPlayer.IdPlayer) ? resolved : null;
    return {
      ...player,
      fifaId: player.fifaId ?? fifaPlayer?.IdPlayer ?? entry?.fifaId,
      number: fifaPlayer?.ShirtNumber || player.number,
      club: player.club ?? entry?.club,
      pictureUrl: fifaPicture ?? player.pictureUrl ?? entry?.pictureUrl,
      socials: player.socials ?? entry?.socials,
      instagramPostUrl: player.instagramPostUrl ?? entry?.instagramPostUrl,
      worldCupNote: player.worldCupNote ?? entry?.worldCupNote,
      fullName: player.fullName ?? entry?.fullName,
      dateOfBirth: player.dateOfBirth ?? entry?.dateOfBirth,
      height: player.height ?? entry?.height
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
var toIncidentPlayerMention = (fifaPlayer, fallbackName, teamCode) => {
  const fifaNumber = typeof fifaPlayer?.ShirtNumber === "number" ? fifaPlayer.ShirtNumber : void 0;
  const fifaPosition = typeof fifaPlayer?.Position === "number" ? FIFA_POSITION_TO_LOCAL[fifaPlayer.Position] ?? "MF" /* MF */ : void 0;
  const fifaPicture = getFifaPlayerPictureUrl(fifaPlayer);
  const registryEntry = fifaNumber === void 0 || fifaPosition === void 0 || !fifaPicture ? resolvePlayerEntry(teamCode ?? "", fallbackName, fifaNumber ?? -1, fifaPlayer?.IdPlayer) : null;
  return {
    id: fifaPlayer?.IdPlayer ?? registryEntry?.fifaId,
    name: fallbackName,
    number: fifaNumber ?? registryEntry?.number ?? void 0,
    position: fifaPosition ?? registryEntry?.position ?? void 0,
    pictureUrl: fifaPicture ?? registryEntry?.pictureUrl
  };
};
var getIncidentsFromLiveFifa = (fifaMatch, homeTeamCode, awayTeamCode) => {
  const homePlayerNames = buildPlayerNameMap(fifaMatch.HomeTeam);
  const awayPlayerNames = buildPlayerNameMap(fifaMatch.AwayTeam);
  const homePlayers = buildFifaPlayerMap(fifaMatch.HomeTeam);
  const awayPlayers = buildFifaPlayerMap(fifaMatch.AwayTeam);
  const teamCodeFor = (team2) => team2 === "A" ? homeTeamCode : awayTeamCode;
  const buildGoalIncidents = (goals, playerNames, players, team2) => (goals || []).map((goal, index) => {
    const playerName = goal.IdPlayer ? playerNames.get(goal.IdPlayer) || "Jogador" : "Jogador";
    return {
      id: `${team2}-goal-${goal.IdGoal || `${goal.Minute || "sem-minuto"}-${index}`}`,
      time: goal.Minute || "--'",
      type: "GOAL",
      text: `${playerName} marcou.`,
      team: team2,
      playerMentions: [toIncidentPlayerMention(goal.IdPlayer ? players.get(goal.IdPlayer) : void 0, playerName, teamCodeFor(team2))],
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
          playerName,
          teamCodeFor(team2)
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
          playerOffName,
          teamCodeFor(team2)
        ),
        toIncidentPlayerMention(
          substitution.IdPlayerOn ? players.get(substitution.IdPlayerOn) : void 0,
          playerOnName,
          teamCodeFor(team2)
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
  const incidents = fifaLiveMatch ? getIncidentsFromLiveFifa(fifaLiveMatch, localMatch.teamA.code, localMatch.teamB.code) : void 0;
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
  if (counts[0] !== 1) return null;
  const expectedDefenders = formation[0];
  const expectedMidfielders = formation.slice(1, -1).reduce((sum, count) => sum + count, 0);
  const expectedForwards = formation[formation.length - 1];
  const coordFormation = counts[1] === expectedDefenders && counts[2] === expectedMidfielders && counts[3] === expectedForwards ? formation : [counts[1], counts[2], counts[3]];
  if (coordFormation.reduce((s, n) => s + n, 0) !== 10) return null;
  const coords = getFormationCoordinates(coordFormation);
  return starters.map((player, index) => ({
    id: player.IdPlayer,
    fifaId: player.IdPlayer,
    captain: player.Captain ?? false,
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

// trends-core.ts
var TRENDS_RPC_ID = "i0OFE";
var GOOGLE_TRENDS_BATCH_URL = "https://trends.google.com/_/TrendsUi/data/batchexecute?rpcids=" + TRENDS_RPC_ID + "&source-path=%2Ftrending&hl=pt-BR";
var buildGoogleTrendsRequestBody = (geo = "BR", hours = 24) => {
  const innerArgs = JSON.stringify([null, null, geo, 0, "", hours, 1]);
  const fReq = JSON.stringify([[[TRENDS_RPC_ID, innerArgs]]]);
  return "f.req=" + encodeURIComponent(fReq);
};
var formatTrafficPtBr = (volume) => {
  if (typeof volume !== "number" || !Number.isFinite(volume) || volume <= 0) {
    return null;
  }
  const trim = (n) => Number(n.toFixed(1)).toLocaleString("pt-BR");
  if (volume >= 1e6) return `${trim(volume / 1e6)} mi+`;
  if (volume >= 1e3) return `${trim(volume / 1e3)} mil+`;
  return `${volume}+`;
};
var parseGoogleTrendsBatch = (raw, limit = 12) => {
  if (typeof raw !== "string" || !raw.includes(TRENDS_RPC_ID)) {
    return [];
  }
  let entries;
  try {
    const body = raw.replace(/^\)\]\}'\s*/, "");
    const outer = JSON.parse(body);
    const row = outer.find(
      (r) => Array.isArray(r) && r[1] === TRENDS_RPC_ID && typeof r[2] === "string"
    );
    if (!row) return [];
    const inner = JSON.parse(row[2]);
    entries = Array.isArray(inner[1]) ? inner[1] : [];
  } catch {
    return [];
  }
  const topics = [];
  for (const entry of entries) {
    if (!Array.isArray(entry)) continue;
    const title = entry[0];
    if (typeof title !== "string" || !title.trim()) continue;
    const categories = Array.isArray(entry[10]) ? entry[10].filter((c) => typeof c === "number") : [];
    topics.push({
      title: title.trim(),
      traffic: formatTrafficPtBr(entry[6]),
      pictureUrl: null,
      news: null,
      categories
    });
    if (topics.length >= limit) break;
  }
  return topics;
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
        {
          id: "us1",
          name: "M. Turner",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Nottingham Forest",
          pictureUrl: "https://digitalhub.fifa.com/transform/01fb042f-5de5-41df-8104-7445672fdca5/TURNER-Matt_448217"
        },
        {
          id: "us2",
          name: "S. Dest",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "PSV",
          pictureUrl: "https://digitalhub.fifa.com/transform/5ee00bd8-552e-4e02-b680-b16534e53493/DEST-Sergino_406280"
        },
        {
          id: "us3",
          name: "C. Richards",
          number: 3,
          position: "DF",
          x: 38,
          y: 75,
          club: "Crystal Palace",
          pictureUrl: "https://digitalhub.fifa.com/transform/54036d3d-1588-4634-944b-a7c2d97d0b76/RICHARDS-Chris_419062"
        },
        {
          id: "us4",
          name: "T. Ream",
          number: 13,
          position: "DF",
          x: 62,
          y: 75,
          club: "Charlotte FC",
          pictureUrl: "https://digitalhub.fifa.com/transform/964be907-1e8e-49ec-bd7f-7085cf7d79d3/REAM-Tim_339510"
        },
        {
          id: "us5",
          name: "A. Robinson",
          number: 5,
          position: "DF",
          x: 85,
          y: 70,
          club: "Fulham",
          pictureUrl: "https://digitalhub.fifa.com/transform/62363054-d9e0-4926-9404-90b975d56647/ROBINSON-Antonee_441251"
        },
        {
          id: "us6",
          name: "T. Adams",
          number: 4,
          position: "MF",
          x: 30,
          y: 45,
          club: "Bournemouth",
          pictureUrl: "https://digitalhub.fifa.com/transform/7fdbded2-aa27-44b1-9bf1-ff1d17c58f86/ADAMS-Tyler_390238"
        },
        {
          id: "us7",
          name: "W. McKennie",
          number: 8,
          position: "MF",
          x: 50,
          y: 48,
          club: "Juventus",
          pictureUrl: "https://digitalhub.fifa.com/transform/4406f0ad-8f60-4a98-89c0-89797bfe804d/McKENNIE-Weston_390259"
        },
        {
          id: "us8",
          name: "G. Reyna",
          number: 7,
          position: "MF",
          x: 70,
          y: 45,
          club: "Nottingham Forest",
          pictureUrl: "https://digitalhub.fifa.com/transform/b30d701d-d9eb-4b2d-8db4-6841fc9ed1a9/REYNA-Giovanni_419068"
        },
        {
          id: "us9",
          name: "T. Weah",
          number: 21,
          position: "FW",
          x: 15,
          y: 22,
          club: "Juventus",
          pictureUrl: "https://digitalhub.fifa.com/transform/c0dcfa0a-b862-4cd2-9c33-034bd18dc231/WEAH-Timothy_406304"
        },
        {
          id: "us10",
          name: "F. Balogun",
          number: 20,
          position: "FW",
          x: 50,
          y: 28,
          club: "Monaco",
          pictureUrl: "https://digitalhub.fifa.com/transform/bd47db79-966e-4eba-a8da-f6ba01148f27/BALOGUN-Folarin_466624"
        },
        {
          id: "us11",
          name: "C. Pulisic",
          number: 10,
          position: "FW",
          x: 85,
          y: 22,
          club: "Milan",
          pictureUrl: "https://digitalhub.fifa.com/transform/34d1c247-2a09-4fd6-87bc-71ec687a54aa/PULISIC-Christian_390267"
        }
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
        {
          id: "py1",
          name: "C. Coronel",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "New York Red Bulls"
        },
        {
          id: "py2",
          name: "R. Rojas",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "River Plate"
        },
        {
          id: "py3",
          name: "G. Gomez",
          number: 15,
          position: "DF",
          x: 38,
          y: 25,
          club: "Palmeiras",
          pictureUrl: "https://digitalhub.fifa.com/transform/d37c65ce-135e-4bd4-b870-2c2548b93e2d/GOMEZ-Gustavo_369744"
        },
        {
          id: "py4",
          name: "O. Alderete",
          number: 3,
          position: "DF",
          x: 62,
          y: 25,
          club: "Getafe",
          pictureUrl: "https://digitalhub.fifa.com/transform/2b408b3b-5027-445e-9b55-6139deed7bea/ALDERETE-Omar_431202"
        },
        {
          id: "py5",
          name: "J. Alonso",
          number: 6,
          position: "DF",
          x: 85,
          y: 30,
          club: "Atl\xE9tico Mineiro",
          pictureUrl: "https://digitalhub.fifa.com/transform/241fe8c3-a33e-411a-8eca-e81cc3fba926/ALONSO-Junior_369749"
        },
        {
          id: "py6",
          name: "A. Cubas",
          number: 14,
          position: "MF",
          x: 30,
          y: 50,
          club: "Vancouver Whitecaps",
          pictureUrl: "https://digitalhub.fifa.com/transform/5f115675-51fb-4e0c-ac8c-7226b762b4a1/CUBAS-Andres_385306"
        },
        {
          id: "py7",
          name: "M. Villasanti",
          number: 23,
          position: "MF",
          x: 50,
          y: 45,
          club: "Gr\xEAmio"
        },
        {
          id: "py8",
          name: "M. Almir\xF3n",
          number: 10,
          position: "MF",
          x: 70,
          y: 50,
          club: "Newcastle",
          pictureUrl: "https://digitalhub.fifa.com/transform/62600270-27f4-432a-8f1f-1014124829c1/ALMIRON-Miguel_369761",
          instagramHandle: "miguel_almiron"
        },
        {
          id: "py9",
          name: "R. Sosa",
          number: 19,
          position: "FW",
          x: 15,
          y: 75,
          club: "Nottingham Forest",
          pictureUrl: "https://digitalhub.fifa.com/transform/fb29327f-14b3-4b8f-af4e-3816404afaed/SOSA-Ramon_463125"
        },
        {
          id: "py10",
          name: "A. Sanabria",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Torino",
          pictureUrl: "https://digitalhub.fifa.com/transform/97bc175a-1e5c-417f-ab23-492237ddb3ab/SANABRIA-Antonio_369768"
        },
        {
          id: "py11",
          name: "J. Enciso",
          number: 17,
          position: "FW",
          x: 85,
          y: 75,
          club: "Brighton",
          pictureUrl: "https://digitalhub.fifa.com/transform/aa8ef158-6636-46a9-a6fb-185a2f92ad95/ENCISO-Julio_441234"
        }
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
      {
        id: "getv9",
        type: "STREAM",
        name: "GETV",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/categorias/ge-tv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png"
      },
      {
        id: "gb9",
        type: "STREAM",
        name: "Globoplay",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png"
      },
      {
        id: "cz9",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      },
      {
        id: "ns9",
        type: "STREAM",
        name: "NSPORTS",
        iconColor: "#00e476",
        link: "https://nsports.com.br/n/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/892.png"
      },
      {
        id: "sbt9",
        type: "TV ABERTA",
        name: "SBT",
        iconColor: "#05ff85",
        link: "https://www.sbt.com.br/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/901.png"
      },
      {
        id: "g9",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png"
      },
      {
        id: "s9",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png"
      }
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
        {
          id: "mx1",
          name: "L. Malag\xF3n",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Club Am\xE9rica"
        },
        {
          id: "mx2",
          name: "J. S\xE1nchez",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "Cruz Azul",
          pictureUrl: "https://digitalhub.fifa.com/transform/8640d435-8aba-4b52-a864-9952d3a6db5c/SANCHEZ-Jorge_403596"
        },
        {
          id: "mx3",
          name: "C. Montes",
          number: 3,
          position: "DF",
          x: 38,
          y: 75,
          club: "Lokomotiv Moscou",
          pictureUrl: "https://digitalhub.fifa.com/transform/c8c3fa3a-9001-4221-ab3c-754158c0ad8a/MONTES-Cesar_395516"
        },
        {
          id: "mx4",
          name: "J. V\xE1squez",
          number: 5,
          position: "DF",
          x: 62,
          y: 75,
          club: "Genoa",
          pictureUrl: "https://digitalhub.fifa.com/transform/838cb65f-3d60-4acb-855d-35a364c25f1a/VASQUEZ-Johan_425701"
        },
        {
          id: "mx5",
          name: "J. Gallardo",
          number: 23,
          position: "DF",
          x: 85,
          y: 70,
          club: "Monterrey",
          pictureUrl: "https://digitalhub.fifa.com/transform/f1417540-93cb-4b82-9cfe-223e877d5923/GALLARDO-Jesus_402772"
        },
        {
          id: "mx6",
          name: "E. \xC1lvarez",
          number: 4,
          position: "MF",
          x: 30,
          y: 45,
          club: "West Ham",
          pictureUrl: "https://digitalhub.fifa.com/transform/b1581870-6bef-4c29-9a06-f306bbf03ca8/ALVAREZ-Edson_400634"
        },
        {
          id: "mx7",
          name: "L. Ch\xE1vez",
          number: 24,
          position: "MF",
          x: 50,
          y: 48,
          club: "D\xEDnamo Moscou",
          pictureUrl: "https://digitalhub.fifa.com/transform/a09b97d9-6b02-45d4-aae8-b8ed274e5634/CHAVEZ-Luis_448051"
        },
        {
          id: "mx8",
          name: "O. Pineda",
          number: 17,
          position: "MF",
          x: 70,
          y: 45,
          club: "AEK Atenas",
          pictureUrl: "https://digitalhub.fifa.com/transform/ef0f99d9-6838-4b25-8a18-ecd9638bd51f/PINEDA-Orbelin_372090"
        },
        {
          id: "mx9",
          name: "U. Antuna",
          number: 15,
          position: "FW",
          x: 15,
          y: 22,
          club: "Tigres",
          pictureUrl: "https://digitalhub.fifa.com/transform/fd0fef42-8129-4cc0-a958-f44521a742be/1442571310"
        },
        {
          id: "mx10",
          name: "S. Gim\xE9nez",
          number: 11,
          position: "FW",
          x: 50,
          y: 28,
          club: "Milan",
          pictureUrl: "https://digitalhub.fifa.com/transform/0e27d0c6-e057-4d0c-a603-3843fcd0c542/GIMENEZ-Santiago_430759"
        },
        {
          id: "mx11",
          name: "H. Lozano",
          number: 22,
          position: "FW",
          x: 85,
          y: 22,
          club: "San Diego FC",
          pictureUrl: "https://digitalhub.fifa.com/transform/25256872-cd39-4782-862a-45aa19ba5875/1442570768"
        }
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
        {
          id: "sa1",
          name: "R. Williams",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Mamelodi Sundowns",
          pictureUrl: "https://digitalhub.fifa.com/transform/b95f9142-251c-4943-911c-9c8d7ad8dd1c/WILLIAMS-Ronwen_395986",
          instagramHandle: "ronwen30"
        },
        {
          id: "sa2",
          name: "K. Mudau",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "Mamelodi Sundowns",
          pictureUrl: "https://digitalhub.fifa.com/transform/29d0b36b-2727-4fc0-ab1e-4d21b5858f5a/MUDAU-Khuliso_463218"
        },
        {
          id: "sa3",
          name: "S. Ngezana",
          number: 21,
          position: "DF",
          x: 38,
          y: 25,
          club: "FCSB"
        },
        {
          id: "sa4",
          name: "M. Mvala",
          number: 14,
          position: "DF",
          x: 62,
          y: 25,
          club: "Mamelodi Sundowns"
        },
        {
          id: "sa5",
          name: "A. Modiba",
          number: 6,
          position: "DF",
          x: 85,
          y: 30,
          club: "Mamelodi Sundowns",
          pictureUrl: "https://digitalhub.fifa.com/transform/e5ddfbfb-b601-4ff8-83a5-f55162967798/MODIBA-Aubrey_395050"
        },
        {
          id: "sa6",
          name: "T. Mokoena",
          number: 4,
          position: "MF",
          x: 30,
          y: 50,
          club: "Mamelodi Sundowns",
          pictureUrl: "https://digitalhub.fifa.com/transform/bf36679b-73eb-4813-a99d-b9673439dd05/MOKOENA-Teboho_403616"
        },
        {
          id: "sa7",
          name: "S. Sithole",
          number: 13,
          position: "MF",
          x: 50,
          y: 45,
          club: "Tondela",
          pictureUrl: "https://digitalhub.fifa.com/transform/200f1c50-a60a-4c33-ad94-b4dabd605f35/SITHOLE-Sphephelo_390475"
        },
        {
          id: "sa8",
          name: "P. Tau",
          number: 10,
          position: "MF",
          x: 70,
          y: 50,
          club: "Qatar SC"
        },
        {
          id: "sa9",
          name: "E. Mokwana",
          number: 17,
          position: "FW",
          x: 15,
          y: 75,
          club: "Esp\xE9rance"
        },
        {
          id: "sa10",
          name: "L. Foster",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Burnley",
          pictureUrl: "https://digitalhub.fifa.com/transform/155c969c-63e1-438e-bd3d-ce587ac212c6/FOSTER-Lyle_419211"
        },
        {
          id: "sa11",
          name: "T. Zwane",
          number: 11,
          position: "FW",
          x: 85,
          y: 75,
          club: "Mamelodi Sundowns",
          pictureUrl: "https://digitalhub.fifa.com/transform/8d294899-e656-4484-91b7-99d646bc590c/ZWANE-Themba_395984"
        }
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
      {
        id: "getv7",
        type: "STREAM",
        name: "GETV",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/categorias/ge-tv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png"
      },
      {
        id: "gb7",
        type: "STREAM",
        name: "Globoplay",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png"
      },
      {
        id: "cz7",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      },
      {
        id: "ns7",
        type: "STREAM",
        name: "NSPORTS",
        iconColor: "#00e476",
        link: "https://nsports.com.br/n/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/892.png"
      },
      {
        id: "sbt7",
        type: "TV ABERTA",
        name: "SBT",
        iconColor: "#05ff85",
        link: "https://www.sbt.com.br/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/901.png"
      },
      {
        id: "g7",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png"
      },
      {
        id: "s7",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png"
      }
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
        {
          id: "kr1",
          name: "Jo Hyeon-woo",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Ulsan HD",
          pictureUrl: "https://digitalhub.fifa.com/transform/15bfe432-3e69-4900-b736-50ee6fd20cb5/JO-Hyeonwoo_397753"
        },
        {
          id: "kr2",
          name: "Seol Young-woo",
          number: 22,
          position: "DF",
          x: 15,
          y: 70,
          club: "FK Crvena zvezda",
          pictureUrl: "https://digitalhub.fifa.com/transform/db3b1a56-6cf2-42ad-9d02-139333d68f38/SEOL-Youngwoo_429608"
        },
        {
          id: "kr3",
          name: "Kim Min-jae",
          number: 4,
          position: "DF",
          x: 38,
          y: 75,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/743f3b76-7c6e-484c-8f62-4f4e22c082ae/KIM-Minjae_395088"
        },
        {
          id: "kr4",
          name: "Jung Seung-hyun",
          number: 15,
          position: "DF",
          x: 62,
          y: 75,
          club: "Al-Wasl"
        },
        {
          id: "kr5",
          name: "Lee Myung-jae",
          number: 3,
          position: "DF",
          x: 85,
          y: 70,
          club: "Ulsan HD"
        },
        {
          id: "kr6",
          name: "Hwang In-beom",
          number: 6,
          position: "MF",
          x: 30,
          y: 45,
          club: "Feyenoord",
          pictureUrl: "https://digitalhub.fifa.com/transform/70be8ce3-bc90-4585-8871-a951dabf811e/HWANG-Inbeom_395084"
        },
        {
          id: "kr7",
          name: "Park Yong-woo",
          number: 5,
          position: "MF",
          x: 50,
          y: 48,
          club: "Al-Ain"
        },
        {
          id: "kr8",
          name: "Lee Kang-in",
          number: 18,
          position: "MF",
          x: 70,
          y: 45,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/a54e995b-caa3-43c4-981f-b54ada7f678d/LEE-Kangin_418490"
        },
        {
          id: "kr9",
          name: "Hwang Hee-chan",
          number: 11,
          position: "FW",
          x: 15,
          y: 22,
          club: "Wolverhampton",
          pictureUrl: "https://digitalhub.fifa.com/transform/8460686d-d2c7-4d3e-98a5-f797400470ed/HWANG-Heechan_395083"
        },
        {
          id: "kr10",
          name: "Cho Gue-sung",
          number: 9,
          position: "FW",
          x: 50,
          y: 28,
          club: "Midtjylland",
          pictureUrl: "https://digitalhub.fifa.com/transform/6efa6506-c1f1-4659-8249-9bc800f32691/CHO-Guesung_430387"
        },
        {
          id: "kr11",
          name: "Son Heung-min",
          number: 7,
          position: "FW",
          x: 85,
          y: 22,
          club: "Tottenham",
          pictureUrl: "https://digitalhub.fifa.com/transform/f9694bf1-eb42-4d26-9503-e988bd32a435/SON-Heungmin_307849"
        }
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
        {
          id: "cz1",
          name: "J. Stanek",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Slavia Praga",
          pictureUrl: "https://digitalhub.fifa.com/transform/9351d9a7-4be7-4c59-8e0e-3f5fbca8ac7d/STANEK-Jindrich_441162"
        },
        {
          id: "cz2",
          name: "V. Coufal",
          number: 5,
          position: "DF",
          x: 15,
          y: 30,
          club: "West Ham",
          pictureUrl: "https://digitalhub.fifa.com/transform/e013f16f-8ada-4532-b3c4-b674b0e08cc9/COUFAL-Vladimir_472908"
        },
        {
          id: "cz3",
          name: "T. Holes",
          number: 3,
          position: "DF",
          x: 38,
          y: 25,
          club: "Slavia Praga",
          pictureUrl: "https://digitalhub.fifa.com/transform/25d4147e-8cc2-4262-bba5-3e47680a3f23/HOLES-Tomas_441167"
        },
        {
          id: "cz4",
          name: "L. Krejci",
          number: 7,
          position: "DF",
          x: 62,
          y: 25,
          club: "Girona",
          pictureUrl: "https://digitalhub.fifa.com/transform/04ca9e4e-8ab3-458e-a689-2ac49094fb23/KREJCI-Ladislav_441170"
        },
        {
          id: "cz5",
          name: "D. Jur\xE1sek",
          number: 13,
          position: "DF",
          x: 85,
          y: 30,
          club: "Hoffenheim",
          pictureUrl: "https://digitalhub.fifa.com/transform/4e32c53e-28e4-4757-ab4e-c7b18cee9bbf/JURASEK-David_483990"
        },
        {
          id: "cz6",
          name: "T. Soucek",
          number: 22,
          position: "MF",
          x: 30,
          y: 50,
          club: "West Ham",
          pictureUrl: "https://digitalhub.fifa.com/transform/eb34bfe6-5b60-4771-a303-40f68231bbd2/SOUCEK-Tomas_404885"
        },
        {
          id: "cz7",
          name: "A. Bar\xE1k",
          number: 8,
          position: "MF",
          x: 50,
          y: 45,
          club: "Kasimpasa"
        },
        {
          id: "cz8",
          name: "L. Provod",
          number: 14,
          position: "MF",
          x: 70,
          y: 50,
          club: "Slavia Praga",
          pictureUrl: "https://digitalhub.fifa.com/transform/e5e6a265-9886-4e25-97c0-c4f2f230277d/PROVOD-Lukas_484011"
        },
        {
          id: "cz9",
          name: "A. Hlo\u017Eek",
          number: 9,
          position: "FW",
          x: 15,
          y: 75,
          club: "Hoffenheim",
          pictureUrl: "https://digitalhub.fifa.com/transform/530c1ea8-c013-4858-bb7d-0b71a763a1a1/HLOZEK-Adam_433754"
        },
        {
          id: "cz10",
          name: "P. Schick",
          number: 10,
          position: "FW",
          x: 50,
          y: 85,
          club: "Bayer Leverkusen",
          pictureUrl: "https://digitalhub.fifa.com/transform/725e8c7e-c712-45be-9e0a-ec5b121e84ad/SCHICK-Patrik_401481"
        },
        {
          id: "cz11",
          name: "V. Cerny",
          number: 17,
          position: "FW",
          x: 85,
          y: 75,
          club: "Rangers"
        }
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
      {
        id: "cz8",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      }
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
        {
          id: "ca1",
          name: "M. Cr\xE9peau",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "LAFC",
          pictureUrl: "https://digitalhub.fifa.com/transform/c4570ca7-10a7-44ca-901d-fee1e11e4400/CREPEAU-Maxime_331732"
        },
        {
          id: "ca2",
          name: "A. Johnston",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "Celtic",
          pictureUrl: "https://digitalhub.fifa.com/transform/bd760593-4ed3-405e-b497-f508dbc8bbdf/JOHNSTON-Alistair_441252"
        },
        {
          id: "ca3",
          name: "D. Cornelius",
          number: 5,
          position: "DF",
          x: 38,
          y: 75,
          club: "Panathinaikos",
          pictureUrl: "https://digitalhub.fifa.com/transform/efe78874-6cb4-4156-a6ce-af7c6374d11f/CORNELIUS-Derek_371958"
        },
        {
          id: "ca4",
          name: "M. Bombito",
          number: 4,
          position: "DF",
          x: 62,
          y: 75,
          club: "Nice",
          pictureUrl: "https://digitalhub.fifa.com/transform/2d2bbffa-0dcf-47c1-b681-706566867489/BOMBITO-Moise_466585"
        },
        {
          id: "ca5",
          name: "A. Davies",
          number: 19,
          position: "DF",
          x: 85,
          y: 70,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/4b0a6361-55a2-4bde-82a4-8275181091f5/DAVIES-Alphonso_412144"
        },
        {
          id: "ca6",
          name: "S. Eust\xE1quio",
          number: 7,
          position: "MF",
          x: 30,
          y: 45,
          club: "Porto",
          pictureUrl: "https://digitalhub.fifa.com/transform/1c0650a1-bba7-4998-b6b6-ebddeed58058/EUSTAQUIO-Stephen_433635"
        },
        {
          id: "ca7",
          name: "I. Kon\xE9",
          number: 18,
          position: "MF",
          x: 50,
          y: 48,
          club: "Marselha",
          pictureUrl: "https://digitalhub.fifa.com/transform/51344b42-77de-4109-a167-7723dc1d4dd2/KONE-Ismael_441258"
        },
        {
          id: "ca8",
          name: "J. Osorio",
          number: 21,
          position: "MF",
          x: 70,
          y: 45,
          club: "Toronto FC",
          pictureUrl: "https://digitalhub.fifa.com/transform/982a5ed2-0878-4733-b071-cd7cc532ee37/OSORIO-Jonathan_370986"
        },
        {
          id: "ca9",
          name: "T. Buchanan",
          number: 11,
          position: "FW",
          x: 15,
          y: 22,
          club: "Villarreal",
          pictureUrl: "https://digitalhub.fifa.com/transform/a607b6f5-fe42-4a89-9e88-cb9690e4bcd1/BUCHANAN-Tajon_430138"
        },
        {
          id: "ca10",
          name: "J. David",
          number: 20,
          position: "FW",
          x: 50,
          y: 28,
          club: "Juventus",
          pictureUrl: "https://digitalhub.fifa.com/transform/97ad628a-b97d-4657-ac41-f2a667c534e6/DAVID-Jonathan_441257"
        },
        {
          id: "ca11",
          name: "C. Larin",
          number: 17,
          position: "FW",
          x: 85,
          y: 22,
          club: "Club Am\xE9rica",
          pictureUrl: "https://digitalhub.fifa.com/transform/21086aea-3ec5-47b2-a81f-f7316489183a/LARIN-Cyle_390670"
        }
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
        {
          id: "bh1",
          name: "N. Vasilj",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Midtjylland",
          pictureUrl: "https://digitalhub.fifa.com/transform/be1c5819-9bc1-4bf3-b677-9172d1be6bea/VASILJ-Nikola_482978"
        },
        {
          id: "bh2",
          name: "A. Dedi\u0107",
          number: 2,
          position: "DF",
          x: 85,
          y: 30,
          club: "Benfica",
          pictureUrl: "https://digitalhub.fifa.com/transform/87dcec5a-fbf4-45d7-8f1e-26e00140cce7/DEDIC-Amar_482976"
        },
        {
          id: "bh3",
          name: "T. \u0160unji\u0107",
          number: 5,
          position: "DF",
          x: 62,
          y: 25,
          club: "Cagliari",
          pictureUrl: "https://digitalhub.fifa.com/transform/ddc91c53-fc37-453c-b16e-50ef5e2dd2da/SUNJIC-Ivan_372436"
        },
        {
          id: "bh4",
          name: "D. Had\u017Eikaduni\u0107",
          number: 14,
          position: "DF",
          x: 38,
          y: 25,
          club: "FC K\xF6ln",
          pictureUrl: "https://digitalhub.fifa.com/transform/6cacbe9a-89b9-4eee-8d20-4e68fc0ef7ad/HADZIKADUNIC-Dennis_430194"
        },
        {
          id: "bh5",
          name: "S. Kola\u0161inac",
          number: 20,
          position: "DF",
          x: 15,
          y: 30,
          club: "Atalanta",
          pictureUrl: "https://digitalhub.fifa.com/transform/bed62578-6b40-402e-8c63-94159988fe95/KOLASINAC-Sead_376230"
        },
        {
          id: "bh6",
          name: "G. Cimirot",
          number: 8,
          position: "MF",
          x: 35,
          y: 50,
          club: "Standard de Li\xE8ge"
        },
        {
          id: "bh7",
          name: "R. Kruni\u0107",
          number: 16,
          position: "MF",
          x: 65,
          y: 50,
          club: "Fenerbah\xE7e"
        },
        {
          id: "bh8",
          name: "N. Bajrami",
          number: 10,
          position: "MF",
          x: 50,
          y: 62,
          club: "Sassuolo"
        },
        {
          id: "bh9",
          name: "E. Demirovi\u0107",
          number: 9,
          position: "FW",
          x: 15,
          y: 68,
          club: "Stuttgart",
          pictureUrl: "https://digitalhub.fifa.com/transform/b9e9f187-0936-4aba-9c70-2a4bcf2281e0/DEMIROVIC-Ermedin_436743"
        },
        {
          id: "bh10",
          name: "H. Tabakovi\u0107",
          number: 29,
          position: "FW",
          x: 85,
          y: 68,
          club: "Hoffenheim",
          pictureUrl: "https://digitalhub.fifa.com/transform/b84ad80f-6b2b-455d-9c2e-f71195b5c2ba/TABAKOVIC-Haris_482984"
        },
        {
          id: "bh11",
          name: "E. D\u017Eeko",
          number: 17,
          position: "FW",
          x: 50,
          y: 80,
          club: "Fenerbah\xE7e",
          pictureUrl: "https://digitalhub.fifa.com/transform/b5fa7216-27c0-4652-b7df-b099e97a5604/DZEKO-Edin_300409"
        }
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
      {
        id: "g4",
        type: "TV ABERTA",
        name: "Globo",
        iconColor: "#05ff85",
        link: "https://globoplay.globo.com"
      },
      {
        id: "s4",
        type: "TV PAGA",
        name: "SportTV",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz4",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
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
        {
          id: "b1",
          name: "Alisson",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/6b051628-d407-41ce-8a60-dc354ac4ccb8/ALISSON_308370",
          socials: {
            instagram: "https://instagram.com/alisson_becker",
            instagramPostUrl: "https://www.instagram.com/p/DZRPjhwFGT-/?img_index=1"
          }
        },
        {
          id: "b2",
          name: "Danilo",
          number: 13,
          position: "DF",
          x: 15,
          y: 70,
          club: "Juventus",
          pictureUrl: "https://digitalhub.fifa.com/transform/364f443f-83df-4e8e-803c-765feae146a3/DANILO_335656",
          socials: {
            instagram: "https://instagram.com/danilo"
          }
        },
        {
          id: "b3",
          name: "Marquinhos",
          number: 4,
          position: "DF",
          x: 38,
          y: 75,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/30069661-f88d-4ff7-9c4e-071a5cf3c093/MARQUINHOS_332946",
          socials: {
            instagram: "https://instagram.com/marquinhos_m5"
          }
        },
        {
          id: "b4",
          name: "G. Magalh\xE3es",
          number: 3,
          position: "DF",
          x: 62,
          y: 75,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/b5870a76-5391-40b7-a348-e2b17995637b/GABRIEL-MAGALHAES_430601",
          socials: {
            instagram: "https://instagram.com/gmagalhaes4"
          }
        },
        {
          id: "b5",
          name: "Abner",
          number: 6,
          position: "DF",
          x: 85,
          y: 70,
          club: "Lyon",
          socials: {
            instagram: "https://instagram.com/abner_vinicius6"
          }
        },
        {
          id: "b6",
          name: "B. Guimar\xE3es",
          number: 8,
          position: "MF",
          x: 30,
          y: 45,
          club: "Newcastle",
          pictureUrl: "https://digitalhub.fifa.com/transform/0215cb23-c389-4c5a-9bb0-c7044ae7059a/BRUNO-GUIMARAES_430605",
          socials: {
            instagram: "https://instagram.com/brunoguimaraes97"
          }
        },
        {
          id: "b7",
          name: "Jo\xE3o Gomes",
          number: 15,
          position: "MF",
          x: 70,
          y: 45,
          club: "Wolverhampton",
          socials: {
            instagram: "https://instagram.com/joaogomes08"
          }
        },
        {
          id: "b8",
          name: "Raphinha",
          number: 11,
          position: "FW",
          x: 15,
          y: 22,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/b4def0b2-7d6f-4f3a-bcde-600b292096d6/RAPHINHA_433872",
          socials: {
            instagram: "https://instagram.com/raphainha"
          }
        },
        {
          id: "b9",
          name: "Rodrygo",
          number: 21,
          position: "FW",
          x: 50,
          y: 28,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/f03a612a-1563-4fd2-93d4-85f2b53da0b3/1443021592",
          socials: {
            instagram: "https://instagram.com/rodrygogoes"
          }
        },
        {
          id: "b10",
          name: "Vinicius Jr",
          number: 7,
          position: "FW",
          x: 85,
          y: 22,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/1c2722c3-a70b-49d8-bdb4-77109161f533/VINICIUS-JUNIOR_405742",
          socials: {
            instagram: "https://instagram.com/vinijr"
          }
        },
        {
          id: "b11",
          name: "Igor Jesus",
          number: 9,
          position: "FW",
          x: 50,
          y: 10,
          club: "Botafogo",
          pictureUrl: "https://digitalhub.fifa.com/transform/a3fba875-a9c9-4d5b-aa92-ff7319d1177a/1443021717",
          socials: {
            instagram: "https://instagram.com/igorjesus0"
          }
        },
        {
          id: "b14",
          name: "Gabriel Jesus",
          number: 23,
          position: "FW",
          x: 15,
          y: 10,
          club: "Arsenal",
          socials: {
            instagram: "https://instagram.com/gabrieljesus9"
          }
        },
        {
          id: "b13",
          name: "Vitinho",
          number: 22,
          position: "FW",
          x: 85,
          y: 10,
          club: "Flamengo",
          socials: {
            instagram: "https://instagram.com/vitao_oficial"
          }
        },
        {
          id: "b12",
          name: "Neymar Jr",
          number: 10,
          position: "FW",
          x: 15,
          y: 10,
          club: "Al Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/4f7b2e5a-1c3d-4a8b-9e6f-2d5c7b3e1a4f/NEYMAR-Jr_190460",
          socials: {
            instagram: "https://instagram.com/neymarjr"
          }
        }
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
        {
          id: "m1",
          name: "Y. Bounou",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/338ae8a7-8734-423e-ae54-2f783dba77ce/BOUNOU-Yassine_356956"
        },
        {
          id: "m2",
          name: "N. Mazraoui",
          number: 3,
          position: "DF",
          x: 15,
          y: 30,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/000d2b43-36ff-4fe5-90d8-23c96e555c56/MAZRAOUI-Noussair_411680"
        },
        {
          id: "m3",
          name: "A. Dari",
          number: 23,
          position: "DF",
          x: 38,
          y: 25,
          club: "Brest",
          pictureUrl: "https://digitalhub.fifa.com/transform/814883ae-a895-4aac-a723-8bb5ab557255/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "m4",
          name: "N. Aguerd",
          number: 5,
          position: "DF",
          x: 62,
          y: 25,
          club: "West Ham",
          pictureUrl: "https://digitalhub.fifa.com/transform/8be99692-04dd-4c92-8a86-70dc8e6901c7/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "m5",
          name: "A. Hakimi",
          number: 2,
          position: "DF",
          x: 85,
          y: 30,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/22c6ca49-7262-4799-8a9f-530e427321ac/HAKIMI-Achraf_400721"
        },
        {
          id: "m6",
          name: "A. Ounahi",
          number: 8,
          position: "MF",
          x: 30,
          y: 50,
          club: "Panathinaikos",
          pictureUrl: "https://digitalhub.fifa.com/transform/f823c3da-d540-436c-9b56-bfccdc4b51bc/OUNAHI-Azzedine_441307"
        },
        {
          id: "m7",
          name: "S. Amrabat",
          number: 4,
          position: "MF",
          x: 50,
          y: 45,
          club: "Fenerbah\xE7e",
          pictureUrl: "https://digitalhub.fifa.com/transform/cf6efacc-6c34-4679-b833-b2c5371b4ee6/AMRABAT-Sofyan_372266"
        },
        {
          id: "m8",
          name: "B. El Khannouss",
          number: 17,
          position: "MF",
          x: 70,
          y: 50,
          club: "Leicester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/8e73a0cb-8200-4870-b0bc-12901de8076f/EL-KHANNOUSS-Bilal_448612"
        },
        {
          id: "m9",
          name: "H. Ziyech",
          number: 7,
          position: "FW",
          x: 15,
          y: 75,
          club: "Galatasaray",
          pictureUrl: "https://digitalhub.fifa.com/transform/96ff445c-211f-4bc3-b0d8-cc6bb5777982/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "m10",
          name: "Y. En-Nesyri",
          number: 19,
          position: "FW",
          x: 50,
          y: 85,
          club: "Fenerbah\xE7e",
          pictureUrl: "https://digitalhub.fifa.com/transform/2cbd2bc3-0cd6-442e-9877-3cd951e63234/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "m11",
          name: "Brahim D\xEDaz",
          number: 10,
          position: "FW",
          x: 85,
          y: 75,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/b05c2233-cb0a-4abc-9413-e56ad25f0899/DIAZ-Brahim_430740"
        }
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
      {
        id: "g1",
        type: "TV ABERTA",
        name: "Globo",
        iconColor: "#05ff85",
        link: "https://globoplay.globo.com"
      },
      {
        id: "s1",
        type: "TV PAGA",
        name: "SportTV",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "gb1",
        type: "STREAM PAGO",
        name: "Globoplay / FIFA+",
        iconColor: "#00e476",
        link: "https://plus.fifa.com"
      },
      {
        id: "cz1",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
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
        {
          id: "f1",
          name: "Maignan",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "AC Milan",
          pictureUrl: "https://digitalhub.fifa.com/transform/3f92a933-a22d-4f58-8f4f-b51370aeacf4/MAIGNAN-Mike_448332"
        },
        {
          id: "f2",
          name: "T. Hern\xE1ndez",
          number: 22,
          position: "DF",
          x: 15,
          y: 70,
          club: "AC Milan",
          pictureUrl: "https://digitalhub.fifa.com/transform/6f76533f-feca-4811-a010-e6e296b29db8/HERNANDEZ-Theo_408042"
        },
        {
          id: "f3",
          name: "Saliba",
          number: 17,
          position: "DF",
          x: 38,
          y: 75,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/242125e7-67c3-4fcd-b0cc-6c5984c319f4/SALIBA-William_419177"
        },
        {
          id: "f4",
          name: "Upamecano",
          number: 4,
          position: "DF",
          x: 62,
          y: 75,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/daae69ae-72e0-4e42-812f-d19d74d12478/UPAMECANO-Dayot_389876"
        },
        {
          id: "f5",
          name: "Kound\xE9",
          number: 5,
          position: "DF",
          x: 85,
          y: 70,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/31b384b6-20b7-4629-ab33-aa67cf403fc3/KOUNDE-Jules_430707"
        },
        {
          id: "f6",
          name: "Tchouam\xE9ni",
          number: 8,
          position: "MF",
          x: 30,
          y: 50,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/8575fee6-68ae-4be0-9529-7e5c392e06e6/TCHOUAMENI-Aurelien_405893"
        },
        {
          id: "f7",
          name: "Kant\xE9",
          number: 13,
          position: "MF",
          x: 50,
          y: 55,
          club: "Al-Ittihad",
          pictureUrl: "https://digitalhub.fifa.com/transform/355040a8-6b40-452b-92af-7c22f91cb87c/KANTE-Ngolo_398681"
        },
        {
          id: "f8",
          name: "Griezmann",
          number: 7,
          position: "MF",
          x: 70,
          y: 50,
          club: "Atl\xE9tico Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/9f03ff5a-aad3-433a-8e21-cb96143627ac/1442234382"
        },
        {
          id: "f9",
          name: "Demb\xE9l\xE9",
          number: 11,
          position: "FW",
          x: 15,
          y: 25,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/e6eee717-fd8c-4f8f-a7e0-c4f978fe327f/DEMBELE-Ousmane_398680"
        },
        {
          id: "f10",
          name: "K. Mbapp\xE9",
          number: 10,
          position: "FW",
          x: 50,
          y: 15,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/66f6087d-9563-4644-8f10-5614ef6e1e51/MBAPPE-Kylian_389867",
          socials: {
            instagram: "https://instagram.com/k.mbappe"
          }
        },
        {
          id: "f11",
          name: "Barcola",
          number: 20,
          position: "FW",
          x: 85,
          y: 25,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/10e80ef7-3aa9-4c07-9639-e8bc04828d31/BARCOLA-Bradley_484860"
        }
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
        {
          id: "sn1",
          name: "\xC9. Mendy",
          number: 16,
          position: "GK",
          x: 50,
          y: 12,
          club: "Al-Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/9093beeb-51a2-4e1d-b700-73e094c6949c/MENDY-Edouard_433806"
        },
        {
          id: "sn2",
          name: "I. Jakobs",
          number: 5,
          position: "DF",
          x: 15,
          y: 30,
          club: "Monaco",
          pictureUrl: "https://digitalhub.fifa.com/transform/a24c412d-22cb-4d33-a341-e7f5e731756a/JAKOBS-Ismail_430671"
        },
        {
          id: "sn3",
          name: "P. A. Ciss\xE9",
          number: 25,
          position: "DF",
          x: 38,
          y: 25,
          club: "Olympiacos",
          pictureUrl: "https://digitalhub.fifa.com/transform/23048d3f-9ced-4cfc-85ca-ca1281ccf1f1/1442261725"
        },
        {
          id: "sn4",
          name: "K. Koulibaly",
          number: 3,
          position: "DF",
          x: 62,
          y: 25,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/538bee26-1d47-4a95-a0f0-5d706f741e07/KOULIBALY-Kalidou_339820"
        },
        {
          id: "sn5",
          name: "A. Diallo",
          number: 21,
          position: "DF",
          x: 85,
          y: 30,
          club: "Al-Arabi",
          pictureUrl: "https://digitalhub.fifa.com/transform/7a0bf8db-1494-4769-aa3f-7d131d165eb4/1442262267"
        },
        {
          id: "sn6",
          name: "P. M. Sarr",
          number: 17,
          position: "MF",
          x: 30,
          y: 50,
          club: "Tottenham",
          pictureUrl: "https://digitalhub.fifa.com/transform/60281798-1792-4113-ba5c-fbfd3299270f/SARR-Pape-Matar_418798"
        },
        {
          id: "sn7",
          name: "P. Gueye",
          number: 8,
          position: "MF",
          x: 50,
          y: 45,
          club: "Marselha",
          pictureUrl: "https://digitalhub.fifa.com/transform/ce2a3833-450c-413b-990f-7c76132e4913/GUEYE-Pape_431788"
        },
        {
          id: "sn8",
          name: "I. Gueye",
          number: 4,
          position: "MF",
          x: 70,
          y: 50,
          club: "Everton",
          pictureUrl: "https://digitalhub.fifa.com/transform/eec40484-d0a0-48cb-bd21-3b9fb90a0e00/1442261952"
        },
        {
          id: "sn9",
          name: "I. Sarr",
          number: 11,
          position: "FW",
          x: 15,
          y: 75,
          club: "Crystal Palace",
          pictureUrl: "https://digitalhub.fifa.com/transform/695226c6-92b8-4aa6-995e-dcdd2d08eb96/SARR-Ismaila_401889"
        },
        {
          id: "sn10",
          name: "N. Jackson",
          number: 19,
          position: "FW",
          x: 50,
          y: 85,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/27569451-1271-4fb3-86ee-51e88e913ec7/JACKSON-Nicolas_418795"
        },
        {
          id: "sn11",
          name: "H. Diallo",
          number: 9,
          position: "FW",
          x: 85,
          y: 75,
          club: "Al-Rayyan",
          pictureUrl: "https://digitalhub.fifa.com/transform/87016310-d872-4f1d-b60a-2c9e702190d7/DIARRA-Habib_486130"
        }
      ]
    },
    stadiumName: "MetLife Stadium",
    city: "NEW YORK CITY",
    stageName: "Group Stage",
    kickoffTime: "16:00",
    kickoffDate: "16 Junho, 2026",
    kickoffTimestamp: "2026-06-16T16:00:00-03:00",
    status: "FINISHED",
    countdownTargetSeconds: 248400,
    broadcasters: [
      {
        id: "g2",
        type: "TV ABERTA",
        name: "Globo",
        iconColor: "#05ff85",
        link: "https://globoplay.globo.com"
      },
      {
        id: "s2",
        type: "TV PAGA",
        name: "SportTV",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz2",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
    ],
    score: {
      teamA: 3,
      teamB: 1
    }
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
        {
          id: "h1",
          name: "J. Placide",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Bastia",
          pictureUrl: "https://digitalhub.fifa.com/transform/3b4c1123-62c6-4267-9d22-6d138e461a54/PLACIDE-Johny_295922"
        },
        {
          id: "h2",
          name: "C. Arcus",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "Angers",
          pictureUrl: "https://digitalhub.fifa.com/transform/924dd9c4-2333-4662-be95-df5d3d551368/ARCUS-Carlens_397775"
        },
        {
          id: "h3",
          name: "R. Ad\xE9",
          number: 4,
          position: "DF",
          x: 38,
          y: 75,
          club: "LDU Quito",
          pictureUrl: "https://digitalhub.fifa.com/transform/188e1d63-5bfa-450a-b202-730221c18fe1/ADE-Ricardo_275917"
        },
        {
          id: "h4",
          name: "A. Christian Jr",
          number: 3,
          position: "DF",
          x: 62,
          y: 75,
          club: "Figueirense"
        },
        {
          id: "h5",
          name: "M. Saint\xE9",
          number: 13,
          position: "DF",
          x: 85,
          y: 70,
          club: "Mirebalais",
          pictureUrl: "https://digitalhub.fifa.com/transform/338f9a41-36d4-4f87-8425-9d5fdc30ac35/SAINTE-Carl_424556"
        },
        {
          id: "h6",
          name: "B. Alceus",
          number: 8,
          position: "MF",
          x: 30,
          y: 45,
          club: "Apollon Limassol"
        },
        {
          id: "h7",
          name: "D. Jean Jacques",
          number: 17,
          position: "MF",
          x: 50,
          y: 48,
          club: "Metz",
          pictureUrl: "https://digitalhub.fifa.com/transform/948f9361-348d-4c5d-a26f-83205cae2f6b/JEAN-JACQUES-Danley_466838"
        },
        {
          id: "h8",
          name: "L. Pierre",
          number: 14,
          position: "MF",
          x: 70,
          y: 45,
          club: "Dunkerque",
          pictureUrl: "https://digitalhub.fifa.com/transform/68889bed-7acd-4e67-a3bd-a18a300e70a0/PIERRE-Alexandre_466835"
        },
        {
          id: "h9",
          name: "D. Nazon",
          number: 9,
          position: "FW",
          x: 15,
          y: 22,
          club: "Kayserispor",
          pictureUrl: "https://digitalhub.fifa.com/transform/93e74f55-211b-4332-8b5c-d328eb02d026/NAZON-Duckens_394993"
        },
        {
          id: "h10",
          name: "F. Pierrot",
          number: 20,
          position: "FW",
          x: 50,
          y: 28,
          club: "Maccabi Haifa",
          pictureUrl: "https://digitalhub.fifa.com/transform/0faa5cdb-4727-42be-b2b8-cedf04a37dd6/PIERROT-Frantzdy_431693"
        },
        {
          id: "h11",
          name: "L. Don Deedson",
          number: 7,
          position: "FW",
          x: 85,
          y: 22,
          club: "Odense",
          pictureUrl: "https://digitalhub.fifa.com/transform/3838199f-c956-4b7c-a728-eef76a086a78/DEEDSON-Louicius_481027"
        }
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
        {
          id: "sc1",
          name: "A. Gunn",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Norwich City",
          pictureUrl: "https://digitalhub.fifa.com/transform/c13202b1-f3b1-4fe1-bc72-0ee5b3135bbc/GUNN-Angus_411301"
        },
        {
          id: "sc2",
          name: "A. Ralston",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "Celtic",
          pictureUrl: "https://digitalhub.fifa.com/transform/eef7a9cc-256c-4000-ae64-38407521d30b/RALSTON-Anthony_337389"
        },
        {
          id: "sc3",
          name: "J. Souttar",
          number: 5,
          position: "DF",
          x: 38,
          y: 25,
          club: "Rangers",
          pictureUrl: "https://digitalhub.fifa.com/transform/4b905694-87c7-4148-be4b-802e4dbcc7ba/SOUTTAR-John_442430"
        },
        {
          id: "sc4",
          name: "S. McKenna",
          number: 15,
          position: "DF",
          x: 62,
          y: 25,
          club: "Las Palmas",
          pictureUrl: "https://digitalhub.fifa.com/transform/073ebe12-5ba9-4de4-8729-2a0b0e942b43/McKENNA-Scott_442431"
        },
        {
          id: "sc5",
          name: "A. Robertson",
          number: 3,
          position: "DF",
          x: 85,
          y: 30,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/ba94c3aa-e071-4add-b402-5d3f8df8acb9/ROBERTSON-Andy_401339"
        },
        {
          id: "sc6",
          name: "B. Gilmour",
          number: 8,
          position: "MF",
          x: 30,
          y: 50,
          club: "Napoli"
        },
        {
          id: "sc7",
          name: "S. McTominay",
          number: 4,
          position: "MF",
          x: 50,
          y: 45,
          club: "Napoli",
          pictureUrl: "https://digitalhub.fifa.com/transform/483440e3-5bdc-46e2-9b80-77e880b5fd85/McTOMINAY-Scott_433787"
        },
        {
          id: "sc8",
          name: "J. McGinn",
          number: 7,
          position: "MF",
          x: 70,
          y: 50,
          club: "Aston Villa",
          pictureUrl: "https://digitalhub.fifa.com/transform/af6ceadd-a14f-47c0-9f30-fd85d71a94cd/McGINN-John_401334"
        },
        {
          id: "sc9",
          name: "B. Doak",
          number: 11,
          position: "FW",
          x: 15,
          y: 75,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/7cf469cc-72f7-4c4b-9312-817920757af3/GANNON-DOAK-Ben_485131"
        },
        {
          id: "sc10",
          name: "C. Adams",
          number: 10,
          position: "FW",
          x: 50,
          y: 85,
          club: "Torino",
          pictureUrl: "https://digitalhub.fifa.com/transform/1a70c52f-9a4b-4dc1-813b-991877aa4758/ADAMS-Che_433191"
        },
        {
          id: "sc11",
          name: "R. Christie",
          number: 21,
          position: "FW",
          x: 85,
          y: 75,
          club: "Bournemouth",
          pictureUrl: "https://digitalhub.fifa.com/transform/fce70106-25b4-4b34-b12b-10e4c6e90c18/CHRISTIE-Ryan_430097"
        }
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
      {
        id: "cz5",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      }
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
        {
          id: "au1",
          name: "M. Ryan",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "AZ Alkmaar",
          pictureUrl: "https://digitalhub.fifa.com/transform/7c98d5eb-1514-4e8f-a6c6-60f4017b2175/RYAN-Mathew_339117"
        },
        {
          id: "au2",
          name: "N. Atkinson",
          number: 3,
          position: "DF",
          x: 15,
          y: 70,
          club: "Hearts",
          pictureUrl: "https://digitalhub.fifa.com/transform/1b5aed14-761f-47a8-b8e6-b02d805c295d/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "au3",
          name: "H. Souttar",
          number: 19,
          position: "DF",
          x: 38,
          y: 75,
          club: "Leicester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/6777563e-5036-4252-9809-a0cc21d96147/SOUTTAR-Harry_430442"
        },
        {
          id: "au4",
          name: "K. Rowles",
          number: 4,
          position: "DF",
          x: 62,
          y: 75,
          club: "Heart of Midlothian",
          pictureUrl: "https://digitalhub.fifa.com/transform/04fd32f9-273a-460b-aaa7-ce6dcbfb57b8/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "au5",
          name: "J. Bos",
          number: 8,
          position: "DF",
          x: 85,
          y: 70,
          club: "Westerlo",
          pictureUrl: "https://digitalhub.fifa.com/transform/4b537554-d211-4b77-aa31-0935973fdd50/BOS-Jordan_423522"
        },
        {
          id: "au6",
          name: "J. Irvine",
          number: 22,
          position: "MF",
          x: 30,
          y: 45,
          club: "St. Pauli",
          pictureUrl: "https://digitalhub.fifa.com/transform/7726492b-0996-47a2-aafd-bd362844d9df/IRVINE-Jackson_355775"
        },
        {
          id: "au7",
          name: "K. Baccus",
          number: 17,
          position: "MF",
          x: 50,
          y: 48,
          club: "St. Mirren",
          pictureUrl: "https://digitalhub.fifa.com/transform/acb6b0d9-626b-414d-a679-7696cd6e9ec2/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "au8",
          name: "A. Hrustic",
          number: 10,
          position: "MF",
          x: 70,
          y: 45,
          club: "Salernitana",
          pictureUrl: "https://digitalhub.fifa.com/transform/c63012a5-37f8-4317-8a69-60f861fb03a7/HRUSTIC-Ajdin_404319"
        },
        {
          id: "au9",
          name: "M. Boyle",
          number: 6,
          position: "FW",
          x: 15,
          y: 22,
          club: "Hibernian"
        },
        {
          id: "au10",
          name: "M. Duke",
          number: 15,
          position: "FW",
          x: 50,
          y: 28,
          club: "Machida Zelvia",
          pictureUrl: "https://digitalhub.fifa.com/transform/6d8bc1a2-9372-4be3-be28-9786bd087fc4/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "au11",
          name: "C. Goodwin",
          number: 23,
          position: "FW",
          x: 85,
          y: 22,
          club: "Al-Wehda",
          pictureUrl: "https://digitalhub.fifa.com/transform/ca86de50-e8d6-4065-8be5-8501919e6499/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
        }
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
        {
          id: "tr1",
          name: "M. G\xFCnok",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Be\u015Fikta\u015F",
          pictureUrl: "https://digitalhub.fifa.com/transform/1ce10157-fad1-435e-b21d-b4f25a483bc1/GUNOK-Mert_360498"
        },
        {
          id: "tr2",
          name: "Z. \xC7elik",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "Roma",
          pictureUrl: "https://digitalhub.fifa.com/transform/903b63c2-ab06-47b8-911c-bf4f026601fd/CELIK-Zeki_433072"
        },
        {
          id: "tr3",
          name: "M. Demiral",
          number: 3,
          position: "DF",
          x: 38,
          y: 25,
          club: "Al-Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/905e3e12-72e9-440d-96f5-0b3a48aebe92/DEMIRAL-Merih_441179"
        },
        {
          id: "tr4",
          name: "A. Bardakc\u0131",
          number: 14,
          position: "DF",
          x: 62,
          y: 25,
          club: "Galatasaray",
          pictureUrl: "https://digitalhub.fifa.com/transform/de2b1023-3aee-4233-b83d-07f94fd288d4/BARDAKCI-Abdulkerim_484082"
        },
        {
          id: "tr5",
          name: "F. Kadioglu",
          number: 20,
          position: "DF",
          x: 85,
          y: 30,
          club: "Brighton",
          pictureUrl: "https://digitalhub.fifa.com/transform/c69621e7-9ba5-438d-89dc-7871b6e0f611/KADIOGLU-Ferdi_484113"
        },
        {
          id: "tr6",
          name: "H. \xC7alhano\u011Flu",
          number: 10,
          position: "MF",
          x: 30,
          y: 50,
          club: "Inter de Mil\xE3o",
          pictureUrl: "https://digitalhub.fifa.com/transform/f192cf34-173f-47b3-9748-981bd3f21275/CALHANOGLU-Hakan_369304"
        },
        {
          id: "tr7",
          name: "\u0130. Y\xFCksek",
          number: 16,
          position: "MF",
          x: 50,
          y: 45,
          club: "Fenerbah\xE7e",
          pictureUrl: "https://digitalhub.fifa.com/transform/1f8b0453-0b84-4eea-9c24-9cd992611aed/YUKSEK-Ismail_484092"
        },
        {
          id: "tr8",
          name: "A. G\xFCler",
          number: 8,
          position: "MF",
          x: 70,
          y: 50,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/e2f26175-13ac-4850-acd7-6408de06ce19/GULER-Arda_484087"
        },
        {
          id: "tr9",
          name: "K. Akt\xFCrko\u011Flu",
          number: 7,
          position: "FW",
          x: 15,
          y: 75,
          club: "Benfica",
          pictureUrl: "https://digitalhub.fifa.com/transform/9cccf7c0-ebfc-4b65-8587-74742f5a9992/AKTURKOGLU-Kerem_441188"
        },
        {
          id: "tr10",
          name: "K. Y\u0131ld\u0131z",
          number: 11,
          position: "FW",
          x: 50,
          y: 85,
          club: "Juventus",
          pictureUrl: "https://digitalhub.fifa.com/transform/7dff809e-a965-4b36-a7b5-8da772fc96a5/YILDIZ-Kenan_484112"
        },
        {
          id: "tr11",
          name: "B. Y\u0131lmaz",
          number: 21,
          position: "FW",
          x: 85,
          y: 75,
          club: "Galatasaray",
          pictureUrl: "https://digitalhub.fifa.com/transform/49e46d17-bf69-41b1-a8df-5aeabf137c7d/YILMAZ-Baris-Alper_484139"
        }
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
      {
        id: "getv6",
        type: "STREAM",
        name: "GETV",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/categorias/ge-tv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png"
      },
      {
        id: "gb6",
        type: "STREAM",
        name: "Globoplay",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png"
      },
      {
        id: "cz6",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      },
      {
        id: "g6",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png"
      },
      {
        id: "s6",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png"
      }
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
        {
          id: "de1",
          name: "M. ter Stegen",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/dc083bab-2f1f-42e8-b0a3-c56dd449b7ec/1442303551"
        },
        {
          id: "de2",
          name: "J. Kimmich",
          number: 6,
          position: "DF",
          x: 15,
          y: 70,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/ada33dfd-5b01-4792-88f4-14c06641509e/KIMMICH-Joshua_386413"
        },
        {
          id: "de3",
          name: "A. Rudiger",
          number: 2,
          position: "DF",
          x: 38,
          y: 75,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/88c43fe2-0c78-437c-a2bf-388c3673c58c/RUEDIGER-Antonio_379955"
        },
        {
          id: "de4",
          name: "J. Tah",
          number: 4,
          position: "DF",
          x: 62,
          y: 75,
          club: "Bayer Leverkusen",
          pictureUrl: "https://digitalhub.fifa.com/transform/34f74ca0-1102-446c-b098-02decdf58b8d/TAH-Jonathan_401378"
        },
        {
          id: "de5",
          name: "D. Raum",
          number: 3,
          position: "DF",
          x: 85,
          y: 70,
          club: "RB Leipzig",
          pictureUrl: "https://digitalhub.fifa.com/transform/ce3509c6-13ad-441a-8d05-9d42f8a4578c/RAUM-David_430657"
        },
        {
          id: "de6",
          name: "R. Andrich",
          number: 8,
          position: "MF",
          x: 30,
          y: 45,
          club: "Bayer Leverkusen"
        },
        {
          id: "de7",
          name: "I. Gundogan",
          number: 21,
          position: "MF",
          x: 50,
          y: 48,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/6e7836ec-7855-480f-9aed-7dc471e08d63/1442303696"
        },
        {
          id: "de8",
          name: "J. Musiala",
          number: 10,
          position: "MF",
          x: 70,
          y: 45,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/05f50027-268f-43ff-ba75-1b477b37ca60/MUSIALA-Jamal_429642"
        },
        {
          id: "de9",
          name: "L. Sane",
          number: 19,
          position: "FW",
          x: 15,
          y: 22,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/097a6749-47b0-4285-a1f9-8aa0ac0e2c12/SANE-Leroy_404353"
        },
        {
          id: "de10",
          name: "K. Havertz",
          number: 7,
          position: "FW",
          x: 50,
          y: 28,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/1fdd4d11-97d1-4392-b345-5a5eecc54839/HAVERTZ-Kai_411367"
        },
        {
          id: "de11",
          name: "F. Wirtz",
          number: 17,
          position: "FW",
          x: 85,
          y: 22,
          club: "Bayer Leverkusen",
          pictureUrl: "https://digitalhub.fifa.com/transform/3a120189-62cc-441f-b862-7fdd2a9abfa4/WIRTZ-Florian_430669"
        }
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
        {
          id: "cw1",
          name: "E. Room",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Columbus Crew",
          pictureUrl: "https://digitalhub.fifa.com/transform/5bd9ff87-6801-46d2-8f10-ca9eb3ea2ea4/ROOM-Eloy_390650"
        },
        {
          id: "cw2",
          name: "J. Gaari",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "Al Hazem",
          pictureUrl: "https://digitalhub.fifa.com/transform/4744d27b-6a5c-48be-a849-48facb6f6d6e/GAARI-Jurien_431698"
        },
        {
          id: "cw3",
          name: "C. Martina",
          number: 4,
          position: "DF",
          x: 38,
          y: 25,
          club: "NAC Breda"
        },
        {
          id: "cw4",
          name: "C. Martina",
          number: 3,
          position: "DF",
          x: 62,
          y: 25,
          club: "Go Ahead Eagles"
        },
        {
          id: "cw5",
          name: "J. Brenet",
          number: 5,
          position: "DF",
          x: 85,
          y: 30,
          club: "Al Rayyan",
          pictureUrl: "https://digitalhub.fifa.com/transform/2069bb09-aaf0-41dc-81e4-a8f4df33b4e5/BRENET-Joshua_401023"
        },
        {
          id: "cw6",
          name: "L. Bacuna",
          number: 10,
          position: "MF",
          x: 30,
          y: 50,
          club: "Groningen",
          pictureUrl: "https://digitalhub.fifa.com/transform/ae48f357-6b53-4d49-b62f-fbfb4a041b62/BACUNA-Leandro_466340"
        },
        {
          id: "cw7",
          name: "J. Bacuna",
          number: 8,
          position: "MF",
          x: 50,
          y: 45,
          club: "Al Wehda",
          pictureUrl: "https://digitalhub.fifa.com/transform/804768d8-badb-4492-9aef-1e523440aed4/BACUNA-Juninho_466317"
        },
        {
          id: "cw8",
          name: "K. Leerdam",
          number: 14,
          position: "MF",
          x: 70,
          y: 50,
          club: "Los Angeles Galaxy"
        },
        {
          id: "cw9",
          name: "R. Janga",
          number: 9,
          position: "FW",
          x: 15,
          y: 75,
          club: "FCSB"
        },
        {
          id: "cw10",
          name: "G. Nepomuceno",
          number: 11,
          position: "FW",
          x: 50,
          y: 85,
          club: "Melbourne Knights"
        },
        {
          id: "cw11",
          name: "J. Antonisse",
          number: 7,
          position: "FW",
          x: 85,
          y: 75,
          club: "Moreirense",
          pictureUrl: "https://digitalhub.fifa.com/transform/cd0b7ee9-50b8-4043-a957-44df5860e935/ANTONISSE-Jeremy_424047"
        }
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
      {
        id: "cz10",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      }
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
        {
          id: "a1",
          name: "E. Mart\xEDnez",
          number: 23,
          position: "GK",
          x: 50,
          y: 88,
          club: "Aston Villa",
          pictureUrl: "https://digitalhub.fifa.com/transform/1b4390f3-e94f-4851-a36b-595356b3d414/MARTINEZ-Lisandro_402921"
        },
        {
          id: "a2",
          name: "Molina",
          number: 26,
          position: "DF",
          x: 15,
          y: 70,
          club: "Atl\xE9tico Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/7aef8344-2a5b-42f0-b1a0-565d5220aa76/MOLINA-Nahuel_402925"
        },
        {
          id: "a3",
          name: "Romero",
          number: 13,
          position: "DF",
          x: 38,
          y: 75,
          club: "Tottenham",
          pictureUrl: "https://digitalhub.fifa.com/transform/61d5d60a-7e5a-4a29-919d-c52bd80b9a5a/ROMERO-Cristian_431196"
        },
        {
          id: "a4",
          name: "Otamendi",
          number: 19,
          position: "DF",
          x: 62,
          y: 75,
          club: "Benfica",
          pictureUrl: "https://digitalhub.fifa.com/transform/4aedbffa-a35c-4aa5-a7ce-8a29c2af3e72/OTAMENDI-Nicolas_310116"
        },
        {
          id: "a5",
          name: "Tagliafico",
          number: 3,
          position: "DF",
          x: 85,
          y: 70,
          club: "Lyon",
          pictureUrl: "https://digitalhub.fifa.com/transform/dd4d5f75-b3d4-4ff2-81bf-c16bf0b0a061/TAGLIAFICO-Nicolas_308322"
        },
        {
          id: "a6",
          name: "De Paul",
          number: 7,
          position: "MF",
          x: 30,
          y: 45,
          club: "Atl\xE9tico Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/314bcb4c-8c81-4bce-9750-85827a209c1b/DE-PAUL-Rodrigo_428882"
        },
        {
          id: "a7",
          name: "Mac Allister",
          number: 20,
          position: "MF",
          x: 50,
          y: 48,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/78b6a9e4-f2b9-4e19-b414-79b18858caaf/MAC-ALLISTER-Alexis_430628"
        },
        {
          id: "a8",
          name: "Enzo F.",
          number: 24,
          position: "MF",
          x: 70,
          y: 45,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/b88c6da2-28db-4d61-a668-ac8e84114063/FERNANDEZ-Enzo_448252"
        },
        {
          id: "a9",
          name: "Leo Messi",
          number: 10,
          position: "FW",
          x: 50,
          y: 25,
          club: "Inter Miami",
          pictureUrl: "https://digitalhub.fifa.com/transform/19823774-fac0-485a-8a8f-572e7324c6c2/MESSI-Lionel_229397",
          socials: {
            instagram: "https://instagram.com/leomessi"
          }
        },
        {
          id: "a10",
          name: "\xC1lvarez",
          number: 9,
          position: "FW",
          x: 30,
          y: 15,
          club: "Atl\xE9tico Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/c7715f12-adb9-4504-9be2-e2899bdbd172/ALVAREZ-Julian_416081"
        },
        {
          id: "a11",
          name: "Lautaro M.",
          number: 22,
          position: "FW",
          x: 70,
          y: 15,
          club: "Inter de Mil\xE3o",
          pictureUrl: "https://digitalhub.fifa.com/transform/2368bf53-1f73-427b-929e-557187d53ac7/MARTINEZ-Lautaro_402920"
        }
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
        {
          id: "dz1",
          name: "A. Mandrea",
          number: 16,
          position: "GK",
          x: 50,
          y: 12,
          club: "Lens"
        },
        {
          id: "dz2",
          name: "J. Hadjam",
          number: 19,
          position: "DF",
          x: 15,
          y: 30,
          club: "Eintracht Frankfurt",
          pictureUrl: "https://digitalhub.fifa.com/transform/c24e6b93-736c-41a7-be57-2e165509ce5c/HADJAM-Jaouen_482869"
        },
        {
          id: "dz3",
          name: "R. Bensebaini",
          number: 3,
          position: "DF",
          x: 38,
          y: 25,
          club: "Borussia Dortmund",
          pictureUrl: "https://digitalhub.fifa.com/transform/329752fa-e310-4124-8fb2-be7cc478b929/BENSEBAINI-Ramy_395113"
        },
        {
          id: "dz4",
          name: "A. Mandi",
          number: 5,
          position: "DF",
          x: 62,
          y: 25,
          club: "Be\u015Fikta\u015F",
          pictureUrl: "https://digitalhub.fifa.com/transform/dc4250ac-0a37-44da-9ae0-c858225ad8a1/MANDI-Aissa_376285"
        },
        {
          id: "dz5",
          name: "Y. Atal",
          number: 2,
          position: "DF",
          x: 85,
          y: 30,
          club: "Al-Arabi"
        },
        {
          id: "dz6",
          name: "I. Bennacer",
          number: 8,
          position: "MF",
          x: 30,
          y: 50,
          club: "AC Milan"
        },
        {
          id: "dz7",
          name: "H. Aouar",
          number: 28,
          position: "MF",
          x: 50,
          y: 45,
          club: "Al-Ittihad",
          pictureUrl: "https://digitalhub.fifa.com/transform/ac743888-d671-4971-9df9-594b591f2425/AOUAR-Houssem_430698"
        },
        {
          id: "dz8",
          name: "H. Belkebla",
          number: 14,
          position: "MF",
          x: 70,
          y: 50,
          club: "Brest"
        },
        {
          id: "dz9",
          name: "R. Mahrez",
          number: 7,
          position: "FW",
          x: 15,
          y: 75,
          club: "Al-Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/172fb59c-24f2-4bc0-82a2-cdc869badf53/MAHREZ-Riyad_379942"
        },
        {
          id: "dz10",
          name: "A. Gouiri",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Marselha",
          pictureUrl: "https://digitalhub.fifa.com/transform/4818d176-036a-4494-b53e-ada08bba749c/GOUIRI-Amine_405877"
        },
        {
          id: "dz11",
          name: "S. Benrahma",
          number: 20,
          position: "FW",
          x: 85,
          y: 75,
          club: "Lyon"
        }
      ]
    },
    stadiumName: "Arrowhead Stadium",
    city: "KANSAS CITY",
    stageName: "Group Stage",
    kickoffTime: "22:00",
    kickoffDate: "16 Junho, 2026",
    kickoffTimestamp: "2026-06-16T22:00:00-03:00",
    status: "FINISHED",
    countdownTargetSeconds: 27e4,
    broadcasters: [
      {
        id: "g3",
        type: "TV ABERTA",
        name: "Globo",
        iconColor: "#05ff85",
        link: "https://globoplay.globo.com"
      },
      {
        id: "s3",
        type: "TV PAGA",
        name: "SportTV",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "gb3",
        type: "STREAM PAGO",
        name: "Globoplay / FIFA+",
        iconColor: "#00e476",
        link: "https://plus.fifa.com"
      }
    ],
    score: {
      teamA: 3,
      teamB: 0
    }
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
        {
          id: "nl1",
          name: "B. Verbruggen",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Brighton",
          pictureUrl: "https://digitalhub.fifa.com/transform/44bfd693-27d5-4d36-823e-5ff0e6cd2524/VERBRUGGEN-Bart_424081"
        },
        {
          id: "nl2",
          name: "D. Dumfries",
          number: 22,
          position: "DF",
          x: 15,
          y: 70,
          club: "Inter de Mil\xE3o",
          pictureUrl: "https://digitalhub.fifa.com/transform/f2a2746b-7691-40c4-a052-60db3219a856/DUMFRIES-Denzel_436612"
        },
        {
          id: "nl3",
          name: "V. van Dijk",
          number: 4,
          position: "DF",
          x: 38,
          y: 75,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/df0e21eb-c210-4ea6-ab2c-0ac13635a9f8/VAN-DIJK-Virgil_397786"
        },
        {
          id: "nl4",
          name: "M. de Ligt",
          number: 3,
          position: "DF",
          x: 62,
          y: 75,
          club: "Manchester United",
          pictureUrl: "https://digitalhub.fifa.com/transform/f978cdf5-fd66-4f3d-82c1-3ea80e332cea/1442168832"
        },
        {
          id: "nl5",
          name: "N. Ak\xE9",
          number: 5,
          position: "DF",
          x: 85,
          y: 70,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/e44b0c79-cb0b-4ce8-bace-7530a516371f/AKE-Nathan_336088"
        },
        {
          id: "nl6",
          name: "F. de Jong",
          number: 21,
          position: "MF",
          x: 30,
          y: 45,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/fe8176f7-bf45-49fc-bd5e-0bfd0c834992/DE-JONG-Frenkie_422657"
        },
        {
          id: "nl7",
          name: "T. Reijnders",
          number: 14,
          position: "MF",
          x: 50,
          y: 48,
          club: "Milan",
          pictureUrl: "https://digitalhub.fifa.com/transform/3f7090ee-2e95-4b6c-a098-729b07484fb2/REIJNDERS-Tijjani_483526"
        },
        {
          id: "nl8",
          name: "X. Simons",
          number: 7,
          position: "MF",
          x: 70,
          y: 45,
          club: "RB Leipzig",
          pictureUrl: "https://digitalhub.fifa.com/transform/3256af6a-5bc1-4f81-84b7-526c4aa49f2e/1442169724"
        },
        {
          id: "nl9",
          name: "J. Frimpong",
          number: 12,
          position: "FW",
          x: 15,
          y: 22,
          club: "Bayer Leverkusen",
          pictureUrl: "https://digitalhub.fifa.com/transform/a6d80537-faf4-4bf3-8541-39dda191cba2/1442170689"
        },
        {
          id: "nl10",
          name: "M. Depay",
          number: 10,
          position: "FW",
          x: 50,
          y: 28,
          club: "Corinthians",
          pictureUrl: "https://digitalhub.fifa.com/transform/6fe9f49e-5f45-4a44-9807-579be23fc0db/DEPAY-Memphis_336098"
        },
        {
          id: "nl11",
          name: "C. Gakpo",
          number: 11,
          position: "FW",
          x: 85,
          y: 22,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/bbb5637f-0587-4ddd-8a82-604c0d921bb3/GAKPO-Cody_448152"
        }
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
        {
          id: "jp1",
          name: "Z. Suzuki",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Parma",
          pictureUrl: "https://digitalhub.fifa.com/transform/7a045252-7c97-4f14-9493-4977e3e3156e/SUZUKI-Zion_405530"
        },
        {
          id: "jp2",
          name: "Y. Sugawara",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "Southampton",
          pictureUrl: "https://digitalhub.fifa.com/transform/09574b48-f59b-436b-b0db-ab4816a96ede/SUGAWARA-Yukinari_405528"
        },
        {
          id: "jp3",
          name: "K. Itakura",
          number: 4,
          position: "DF",
          x: 38,
          y: 25,
          club: "Borussia Monchengladbach",
          pictureUrl: "https://digitalhub.fifa.com/transform/5797a9db-f271-4f10-a480-1a0fdde80b7b/ITAKURA-Kou_400511"
        },
        {
          id: "jp4",
          name: "T. Tomiyasu",
          number: 22,
          position: "DF",
          x: 62,
          y: 25,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/959b632f-531d-420a-85af-5d0fc3c83d5f/TOMIYASU-Takehiro_403289"
        },
        {
          id: "jp5",
          name: "H. Ito",
          number: 21,
          position: "DF",
          x: 85,
          y: 30,
          club: "Bayern Munique",
          pictureUrl: "https://digitalhub.fifa.com/transform/68ebc735-7e69-4908-98b7-b6d691e9cbf7/ITO-Hiroki_403274"
        },
        {
          id: "jp6",
          name: "W. Endo",
          number: 6,
          position: "MF",
          x: 30,
          y: 50,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/d1f64b72-4fcf-44b4-8f7a-33abe45f3993/Japan-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "jp7",
          name: "H. Morita",
          number: 5,
          position: "MF",
          x: 50,
          y: 45,
          club: "Sporting",
          pictureUrl: "https://digitalhub.fifa.com/transform/3098e878-ab1e-4c8e-8322-77fd1a0b4ac0/Japan-Portraits-FIFA-World-Cup-Qatar-2022"
        },
        {
          id: "jp8",
          name: "T. Kubo",
          number: 20,
          position: "MF",
          x: 70,
          y: 50,
          club: "Real Sociedad",
          pictureUrl: "https://digitalhub.fifa.com/transform/7391febf-1e97-4ce1-89c8-0e3ae529ae81/KUBO-Takefusa_403304"
        },
        {
          id: "jp9",
          name: "J. Ito",
          number: 14,
          position: "FW",
          x: 15,
          y: 75,
          club: "Reims",
          pictureUrl: "https://digitalhub.fifa.com/transform/87ce677a-e78d-474c-bfd7-b7dc77e89e62/ITO-Junya_395321"
        },
        {
          id: "jp10",
          name: "A. Ueda",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Feyenoord",
          pictureUrl: "https://digitalhub.fifa.com/transform/1b05e82f-94e8-470d-9c12-f9bdf1a0e080/UEDA-Ayase_430413"
        },
        {
          id: "jp11",
          name: "K. Mitoma",
          number: 7,
          position: "FW",
          x: 85,
          y: 75,
          club: "Brighton",
          pictureUrl: "https://digitalhub.fifa.com/transform/c329c2a8-50c7-4460-89a3-2a349c12abe7/1442484179"
        }
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
      {
        id: "getv11",
        type: "STREAM",
        name: "GETV",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/categorias/ge-tv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/914.png"
      },
      {
        id: "gb11",
        type: "STREAM",
        name: "Globoplay",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png"
      },
      {
        id: "cz11",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      },
      {
        id: "ns11",
        type: "STREAM",
        name: "NSPORTS",
        iconColor: "#00e476",
        link: "https://nsports.com.br/n/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/892.png"
      },
      {
        id: "sbt11",
        type: "TV ABERTA",
        name: "SBT",
        iconColor: "#05ff85",
        link: "https://www.sbt.com.br/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/901.png"
      },
      {
        id: "g11",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png"
      },
      {
        id: "s11",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png"
      }
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
        {
          id: "ci1",
          name: "Y. Fofana",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Angers",
          pictureUrl: "https://digitalhub.fifa.com/transform/c5bc8a38-479f-4c33-b8f6-9ab95bb45b57/FOFANA-Yahia_405873"
        },
        {
          id: "ci2",
          name: "S. Aurier",
          number: 17,
          position: "DF",
          x: 15,
          y: 70,
          club: "Galatasaray"
        },
        {
          id: "ci3",
          name: "O. Kossounou",
          number: 7,
          position: "DF",
          x: 38,
          y: 75,
          club: "Atalanta",
          pictureUrl: "https://digitalhub.fifa.com/transform/c3d01f63-7112-4a0d-a50b-0d85927676e9/KOSSOUNOU-Odilon_477825"
        },
        {
          id: "ci4",
          name: "E. Ndicka",
          number: 21,
          position: "DF",
          x: 62,
          y: 75,
          club: "Roma",
          pictureUrl: "https://digitalhub.fifa.com/transform/e308dd93-4706-4ed9-80a2-1db8e4a52d6c/PAUGAIN-Wilguens_419172"
        },
        {
          id: "ci5",
          name: "G. Konan",
          number: 3,
          position: "DF",
          x: 85,
          y: 70,
          club: "Al Fayha",
          pictureUrl: "https://digitalhub.fifa.com/transform/8b0c92b7-4756-42a3-8cc8-b997693ff4aa/KONAN-Ghislain_407343"
        },
        {
          id: "ci6",
          name: "F. Kessie",
          number: 8,
          position: "MF",
          x: 30,
          y: 45,
          club: "Al Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/2e649ed1-5e23-4de2-aafc-79fac130f5f0/KESSIE-Franck_371609"
        },
        {
          id: "ci7",
          name: "S. Fofana",
          number: 6,
          position: "MF",
          x: 50,
          y: 48,
          club: "Al Nassr",
          pictureUrl: "https://digitalhub.fifa.com/transform/08197d78-88b8-458f-9ad9-de192f25313c/FOFANA-Seko_405175"
        },
        {
          id: "ci8",
          name: "O. Diomande",
          number: 4,
          position: "MF",
          x: 70,
          y: 45,
          club: "Sporting",
          pictureUrl: "https://digitalhub.fifa.com/transform/45b55597-6503-4470-a778-af125afb698a/DIOMANDE-Ousmane_477802"
        },
        {
          id: "ci9",
          name: "N. Pepe",
          number: 19,
          position: "FW",
          x: 15,
          y: 22,
          club: "Villarreal",
          pictureUrl: "https://digitalhub.fifa.com/transform/1c7519d2-960c-4d19-83e7-40a155f1a8eb/PEPE-Nicolas_402261"
        },
        {
          id: "ci10",
          name: "S. Haller",
          number: 22,
          position: "FW",
          x: 50,
          y: 28,
          club: "Utrecht"
        },
        {
          id: "ci11",
          name: "J. Boga",
          number: 13,
          position: "FW",
          x: 85,
          y: 22,
          club: "Nice"
        }
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
        {
          id: "ec1",
          name: "H. Galindez",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Huracan",
          pictureUrl: "https://digitalhub.fifa.com/transform/679fc90e-2f98-4494-a4dd-f26442fae6d3/GALINDEZ-Hernan_441236"
        },
        {
          id: "ec2",
          name: "A. Preciado",
          number: 17,
          position: "DF",
          x: 15,
          y: 30,
          club: "Sparta Praga",
          pictureUrl: "https://digitalhub.fifa.com/transform/2e9be79f-76b7-4f12-8ba0-c4c21ec8b39d/PRECIADO-Angelo_402974"
        },
        {
          id: "ec3",
          name: "P. Hincapie",
          number: 3,
          position: "DF",
          x: 38,
          y: 25,
          club: "Bayer Leverkusen",
          pictureUrl: "https://digitalhub.fifa.com/transform/b8f68e80-3057-4fbf-be1e-8cf885a713e1/HINCAPIE-Piero_424031"
        },
        {
          id: "ec4",
          name: "F. Torres",
          number: 2,
          position: "DF",
          x: 62,
          y: 25,
          club: "Santos",
          pictureUrl: "https://digitalhub.fifa.com/transform/755ac13c-2122-42ff-b40a-4582be61e59e/TORRES-Felix_402979"
        },
        {
          id: "ec5",
          name: "P. Estupinan",
          number: 7,
          position: "DF",
          x: 85,
          y: 30,
          club: "Brighton",
          pictureUrl: "https://digitalhub.fifa.com/transform/85df33e2-083f-4cef-9fa2-3a8fc7d29466/ESTUPINAN-Pervis_389782"
        },
        {
          id: "ec6",
          name: "M. Caicedo",
          number: 23,
          position: "MF",
          x: 30,
          y: 50,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/ae32bbc5-09f0-4743-ae0a-5b80461bdc79/CAICEDO-Moises_428885"
        },
        {
          id: "ec7",
          name: "A. Franco",
          number: 21,
          position: "MF",
          x: 50,
          y: 45,
          club: "Atletico Mineiro",
          pictureUrl: "https://digitalhub.fifa.com/transform/59ffe3d1-0963-44f5-861e-9eb6590d8fce/FRANCO-Alan_389784"
        },
        {
          id: "ec8",
          name: "K. Paez",
          number: 10,
          position: "MF",
          x: 70,
          y: 50,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/ee18ba2f-5e31-4e33-8739-f0d59033c409/PAEZ-Kendry_463495"
        },
        {
          id: "ec9",
          name: "J. Sarmiento",
          number: 16,
          position: "FW",
          x: 15,
          y: 75,
          club: "Brighton",
          pictureUrl: "https://digitalhub.fifa.com/transform/59b0fcdc-5cbf-4e78-8221-a2a28e651702/1442153740"
        },
        {
          id: "ec10",
          name: "E. Valencia",
          number: 13,
          position: "FW",
          x: 50,
          y: 85,
          club: "Internacional",
          pictureUrl: "https://digitalhub.fifa.com/transform/4688cb2a-6446-4439-ba5f-e4db7b5a18c5/VALENCIA-Enner_373400"
        },
        {
          id: "ec11",
          name: "J. Yeboah",
          number: 9,
          position: "FW",
          x: 85,
          y: 75,
          club: "Venezia",
          pictureUrl: "https://digitalhub.fifa.com/transform/1fc64d7c-4383-4c61-bd76-f22f22b91a8f/YEBOAH-John_405920"
        }
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
      {
        id: "gb12",
        type: "STREAM",
        name: "Globoplay",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png"
      },
      {
        id: "cz12",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      },
      {
        id: "g12",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png"
      },
      {
        id: "s12",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png"
      }
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
        {
          id: "se1",
          name: "R. Olsen",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Aston Villa"
        },
        {
          id: "se2",
          name: "E. Krafth",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "Newcastle"
        },
        {
          id: "se3",
          name: "V. Lindelof",
          number: 3,
          position: "DF",
          x: 38,
          y: 75,
          club: "Manchester United",
          pictureUrl: "https://digitalhub.fifa.com/transform/88b96376-9f31-40fd-a0fc-ae12aab484c4/LINDELOF-Victor_395283"
        },
        {
          id: "se4",
          name: "I. Hien",
          number: 4,
          position: "DF",
          x: 62,
          y: 75,
          club: "Atalanta",
          pictureUrl: "https://digitalhub.fifa.com/transform/0daf43d1-2714-4cc3-ab8b-3cf2020bf150/HIEN-Isak_483312"
        },
        {
          id: "se5",
          name: "L. Augustinsson",
          number: 6,
          position: "DF",
          x: 85,
          y: 70,
          club: "Anderlecht"
        },
        {
          id: "se6",
          name: "D. Kulusevski",
          number: 21,
          position: "MF",
          x: 30,
          y: 45,
          club: "Tottenham"
        },
        {
          id: "se7",
          name: "J. Cajuste",
          number: 20,
          position: "MF",
          x: 50,
          y: 48,
          club: "Ipswich Town"
        },
        {
          id: "se8",
          name: "E. Forsberg",
          number: 10,
          position: "MF",
          x: 70,
          y: 45,
          club: "New York Red Bulls"
        },
        {
          id: "se9",
          name: "V. Gyokeres",
          number: 17,
          position: "FW",
          x: 15,
          y: 22,
          club: "Sporting",
          pictureUrl: "https://digitalhub.fifa.com/transform/ca3d75bf-7e31-4269-9933-b296eb3f5bff/GYOKERES-Viktor_483327"
        },
        {
          id: "se10",
          name: "A. Isak",
          number: 9,
          position: "FW",
          x: 50,
          y: 28,
          club: "Newcastle",
          pictureUrl: "https://digitalhub.fifa.com/transform/c6ffe63b-aefd-43b8-bd9d-3c6e31a8f418/ISAK-Alexander_430150"
        },
        {
          id: "se11",
          name: "A. Elanga",
          number: 11,
          position: "FW",
          x: 85,
          y: 22,
          club: "Nottingham Forest",
          pictureUrl: "https://digitalhub.fifa.com/transform/38e8d10e-aa56-4837-a589-35bc4dcc23a3/ELANGA-Anthony_441137"
        }
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
        {
          id: "tn1",
          name: "A. Dahmen",
          number: 16,
          position: "GK",
          x: 50,
          y: 12,
          club: "Augsburg",
          pictureUrl: "https://digitalhub.fifa.com/transform/90030173-815d-4411-8eac-20fb42834f9d/DAHMEN-Aymen_433365"
        },
        {
          id: "tn2",
          name: "M. Drager",
          number: 20,
          position: "DF",
          x: 15,
          y: 30,
          club: "Basel",
          pictureUrl: "https://digitalhub.fifa.com/transform/a6f8e781-c336-403d-8e6b-69b2501b767a/1442514989"
        },
        {
          id: "tn3",
          name: "D. Bronn",
          number: 6,
          position: "DF",
          x: 38,
          y: 25,
          club: "Servette",
          pictureUrl: "https://digitalhub.fifa.com/transform/9a7aa138-5845-4890-aa20-43f4021160ed/BRONN-Dylan_411653"
        },
        {
          id: "tn4",
          name: "M. Talbi",
          number: 3,
          position: "DF",
          x: 62,
          y: 25,
          club: "Lorient",
          pictureUrl: "https://digitalhub.fifa.com/transform/253ef705-760c-457f-afde-067d2fb39010/TALBI-Montassar_433380"
        },
        {
          id: "tn5",
          name: "A. Abdi",
          number: 2,
          position: "DF",
          x: 85,
          y: 30,
          club: "Nice",
          pictureUrl: "https://digitalhub.fifa.com/transform/8ff3509c-8a73-40ea-ac0e-1beed4560b23/ABDI-Ali_433362"
        },
        {
          id: "tn6",
          name: "E. Skhiri",
          number: 17,
          position: "MF",
          x: 30,
          y: 50,
          club: "Eintracht Frankfurt",
          pictureUrl: "https://digitalhub.fifa.com/transform/e2ba8e19-b4ab-435f-b12c-e56d655c31e6/SKHIRI-Ellyes_411658"
        },
        {
          id: "tn7",
          name: "A. Laidouni",
          number: 14,
          position: "MF",
          x: 50,
          y: 45,
          club: "Al Wakrah",
          pictureUrl: "https://digitalhub.fifa.com/transform/680502d6-145d-4bbb-a055-c182661ce9be/1442514798"
        },
        {
          id: "tn8",
          name: "H. Mejbri",
          number: 10,
          position: "MF",
          x: 70,
          y: 50,
          club: "Burnley",
          pictureUrl: "https://digitalhub.fifa.com/transform/856f0cc0-6dcc-48bc-a8db-f4fe26d8ae06/MEJBRI-Hannibal_433378"
        },
        {
          id: "tn9",
          name: "Y. Msakni",
          number: 7,
          position: "FW",
          x: 15,
          y: 75,
          club: "Al Arabi",
          pictureUrl: "https://digitalhub.fifa.com/transform/dda4d665-f092-461b-b243-aac373166807/1442515172"
        },
        {
          id: "tn10",
          name: "S. Jaziri",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Zamalek",
          pictureUrl: "https://digitalhub.fifa.com/transform/b82cb142-2ff4-4999-9f7f-deabb6617823/1442514129"
        },
        {
          id: "tn11",
          name: "A. Achouri",
          number: 11,
          position: "FW",
          x: 85,
          y: 75,
          club: "Copenhagen",
          pictureUrl: "https://digitalhub.fifa.com/transform/5ffd95df-83a5-4768-9331-0842c3f433b6/ACHOURI-Elias_448662"
        }
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
      {
        id: "gb13",
        type: "STREAM",
        name: "Globoplay",
        iconColor: "#00e476",
        link: "https://globoplay.globo.com/tv-globo/ao-vivo/6120663/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/30.png"
      },
      {
        id: "cz13",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/451.png"
      },
      {
        id: "g13",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/25.png"
      },
      {
        id: "s13",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/",
        logoUrl: "https://extranets.fifa.com/TvStationPhotos/26.png"
      }
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
        {
          id: "es1",
          name: "Unai Sim\xF3n",
          number: 23,
          position: "GK",
          x: 50,
          y: 88,
          club: "Athletic Club",
          pictureUrl: "https://digitalhub.fifa.com/transform/41e0f920-bd7d-4bd6-882b-c83ed33e3f26/SIMON-Unai_430753"
        },
        {
          id: "es2",
          name: "Dani Carvajal",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/e4f534e2-d24e-4d69-aae7-970fe7bcbf54/1442550925"
        },
        {
          id: "es3",
          name: "Robin Le Normand",
          number: 3,
          position: "DF",
          x: 38,
          y: 75,
          club: "Atl\xE9tico de Madrid"
        },
        {
          id: "es4",
          name: "Aymeric Laporte",
          number: 14,
          position: "DF",
          x: 62,
          y: 75,
          club: "Al-Nassr",
          pictureUrl: "https://digitalhub.fifa.com/transform/e923ca38-381d-4187-9d40-9f5f72434530/LAPORTE-Aymeric_335999"
        },
        {
          id: "es5",
          name: "Marc Cucurella",
          number: 24,
          position: "DF",
          x: 85,
          y: 70,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/3bc6b871-a4b2-4201-8885-a77420f4c7c9/CUCURELLA-Marc_430735"
        },
        {
          id: "es6",
          name: "Rodri",
          number: 16,
          position: "MF",
          x: 30,
          y: 48,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/295ab5b2-4dbf-42b9-918b-04fb4ae0ec0a/RODRI_411375"
        },
        {
          id: "es7",
          name: "Pedri",
          number: 20,
          position: "MF",
          x: 50,
          y: 44,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/75a5861e-008f-460c-81e4-8085fa2cc961/PEDRI_423646"
        },
        {
          id: "es8",
          name: "Fabi\xE1n Ruiz",
          number: 8,
          position: "MF",
          x: 70,
          y: 48,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/c40ded96-190d-41c8-90f2-6a253a63b33d/RUIZ-Fabian_430718"
        },
        {
          id: "es9",
          name: "Lamine Yamal",
          number: 19,
          position: "FW",
          x: 15,
          y: 22,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/37b631d3-c340-4590-91a8-bb00bd5f1e89/YAMAL-Lamine_484320"
        },
        {
          id: "es10",
          name: "\xC1lvaro Morata",
          number: 7,
          position: "FW",
          x: 50,
          y: 28,
          club: "Galatasaray",
          pictureUrl: "https://digitalhub.fifa.com/transform/a6d1d8b4-a559-4c7f-aed3-095126b60e1c/1442552095"
        },
        {
          id: "es11",
          name: "Nico Williams",
          number: 11,
          position: "FW",
          x: 85,
          y: 22,
          club: "Athletic Club",
          pictureUrl: "https://digitalhub.fifa.com/transform/1792665e-37cb-421d-969b-e6a3edbd8d76/WILLIAMS-Nico_447855"
        }
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
        {
          id: "cv1",
          name: "Vozinha",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Gil Vicente",
          socials: {
            instagram: "https://instagram.com/vozinha1"
          },
          pictureUrl: "https://digitalhub.fifa.com/transform/b8286230-b161-484e-87a9-ce5a20e6f7d1/VOZINHA_364752"
        },
        {
          id: "cv2",
          name: "Steven Moreira",
          number: 22,
          position: "DF",
          x: 15,
          y: 30,
          club: "Columbus Crew",
          pictureUrl: "https://digitalhub.fifa.com/transform/79a2bdd5-b9a9-41d1-8fdd-3dff50346705/STEVEN-MOREIRA_477847"
        },
        {
          id: "cv3",
          name: "Logan Costa",
          number: 4,
          position: "DF",
          x: 38,
          y: 25,
          club: "Toulouse",
          pictureUrl: "https://digitalhub.fifa.com/transform/248677f0-fc09-4244-a18f-7ef9afb98dcc/LOGAN-COSTA_477831"
        },
        {
          id: "cv4",
          name: "Roberto Lopes",
          number: 3,
          position: "DF",
          x: 62,
          y: 25,
          club: "Shamrock Rovers",
          pictureUrl: "https://digitalhub.fifa.com/transform/aae92383-d5ce-4d00-8eb8-71891a619d11/PICO-LOPES_477770"
        },
        {
          id: "cv5",
          name: "Jo\xE3o Paulo",
          number: 5,
          position: "DF",
          x: 85,
          y: 30,
          club: "Omonia",
          pictureUrl: "https://digitalhub.fifa.com/transform/18ee15aa-604d-4dea-964e-7b0a73f3f710/JOAO-PAULO_477855"
        },
        {
          id: "cv6",
          name: "Kevin Pina",
          number: 8,
          position: "MF",
          x: 30,
          y: 50,
          club: "CSKA Sofia",
          pictureUrl: "https://digitalhub.fifa.com/transform/40e5a4a5-c7f0-4b0e-8a6e-d8ffbaa12d29/KEVIN-PINA_477852"
        },
        {
          id: "cv7",
          name: "Deroy Duarte",
          number: 14,
          position: "MF",
          x: 50,
          y: 45,
          club: "Fortuna Sittard",
          pictureUrl: "https://digitalhub.fifa.com/transform/c2a1dda5-24bd-4ef1-8ef4-cde9f3f3b644/DEROY-DUARTE_477827"
        },
        {
          id: "cv8",
          name: "Jovane Cabral",
          number: 7,
          position: "MF",
          x: 70,
          y: 50,
          club: "Olympiacos",
          pictureUrl: "https://digitalhub.fifa.com/transform/4bc8360c-8ddd-4449-9e5f-a100502763b7/JOVANE-CABRAL_477856"
        },
        {
          id: "cv9",
          name: "Garry Rodrigues",
          number: 11,
          position: "FW",
          x: 15,
          y: 75,
          club: "Sivasspor",
          pictureUrl: "https://digitalhub.fifa.com/transform/c8ad756c-e6dc-4458-ad13-d34d2b668c63/GARRY-RODRIGUES_373344"
        },
        {
          id: "cv10",
          name: "Beb\xE9",
          number: 21,
          position: "FW",
          x: 50,
          y: 85,
          club: "Racing Ferrol"
        },
        {
          id: "cv11",
          name: "Willy Semedo",
          number: 17,
          position: "FW",
          x: 85,
          y: 75,
          club: "Al-Faisaly",
          pictureUrl: "https://digitalhub.fifa.com/transform/37b3a4c5-6899-487c-892a-1d9791945ba3/WILLY-SEMEDO_433724"
        }
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
      {
        id: "g14",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/"
      },
      {
        id: "s14",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz14",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
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
        {
          id: "be1",
          name: "Koen Casteels",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Al-Qadsiah",
          pictureUrl: "https://digitalhub.fifa.com/transform/b0d79089-3449-46e4-9de4-0c0d91f5ab33/1442830192"
        },
        {
          id: "be2",
          name: "Timothy Castagne",
          number: 21,
          position: "DF",
          x: 15,
          y: 70,
          club: "Fulham",
          pictureUrl: "https://digitalhub.fifa.com/transform/58f1cc7c-04f4-43ba-bc82-85c1226fb7a2/CASTAGNE-Timothy_411443"
        },
        {
          id: "be3",
          name: "Wout Faes",
          number: 4,
          position: "DF",
          x: 38,
          y: 75,
          club: "Leicester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/91f5100b-cbf4-4b16-b42b-89acec809f35/1442830885"
        },
        {
          id: "be4",
          name: "Zeno Debast",
          number: 2,
          position: "DF",
          x: 62,
          y: 75,
          club: "Sporting",
          pictureUrl: "https://digitalhub.fifa.com/transform/f6f8a277-eb22-4353-9ce1-a8abe7749d1d/DEBAST-Zeno_448369"
        },
        {
          id: "be5",
          name: "Arthur Theate",
          number: 3,
          position: "DF",
          x: 85,
          y: 70,
          club: "Eintracht Frankfurt",
          pictureUrl: "https://digitalhub.fifa.com/transform/34da124d-c474-4154-90e9-aa132a5df818/THEATE-Arthur_448346"
        },
        {
          id: "be6",
          name: "Amadou Onana",
          number: 24,
          position: "MF",
          x: 30,
          y: 48,
          club: "Aston Villa",
          pictureUrl: "https://digitalhub.fifa.com/transform/697ee4f8-3df1-4ce5-a8b9-c9dae1ed6aba/ONANA-Amadou_448364"
        },
        {
          id: "be7",
          name: "Youri Tielemans",
          number: 8,
          position: "MF",
          x: 50,
          y: 44,
          club: "Aston Villa",
          pictureUrl: "https://digitalhub.fifa.com/transform/158822ad-a0e9-406c-a84d-e79b0392409f/TIELEMANS-Youri_401444"
        },
        {
          id: "be8",
          name: "Kevin De Bruyne",
          number: 7,
          position: "MF",
          x: 70,
          y: 48,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/41fb7de3-9f9e-44f1-b63f-0551f5d33b2b/DE-BRUYNE-Kevin_358120"
        },
        {
          id: "be9",
          name: "J\xE9r\xE9my Doku",
          number: 22,
          position: "FW",
          x: 15,
          y: 22,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/df41be47-900d-41fe-90eb-b493f7609869/DOKU-Jeremy_448341"
        },
        {
          id: "be10",
          name: "Romelu Lukaku",
          number: 10,
          position: "FW",
          x: 50,
          y: 28,
          club: "Roma",
          pictureUrl: "https://digitalhub.fifa.com/transform/302b7fb7-6964-4a52-8db4-9c12778b80fa/LUKAKU-Romelu_358112"
        },
        {
          id: "be11",
          name: "Leandro Trossard",
          number: 11,
          position: "FW",
          x: 85,
          y: 22,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/78476568-5abb-4047-b6c0-fd9651e0f39d/TROSSARD-Leandro_448355"
        }
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
        {
          id: "eg1",
          name: "Mohamed El Shenawy",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Al Ahly",
          pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948"
        },
        {
          id: "eg2",
          name: "Mohamed Hany",
          number: 3,
          position: "DF",
          x: 15,
          y: 30,
          club: "Al Ahly",
          pictureUrl: "https://digitalhub.fifa.com/transform/04f8ef57-e16f-49de-b7d4-ad430c4c430c/MOHAMED-HANY_408950"
        },
        {
          id: "eg3",
          name: "Ramy Rabia",
          number: 5,
          position: "DF",
          x: 38,
          y: 25,
          club: "Al Ahly",
          pictureUrl: "https://digitalhub.fifa.com/transform/403c9e6d-efe6-4917-86ea-c7eddc442208/RABIA-Ramy_344661"
        },
        {
          id: "eg4",
          name: "Mohamed Abdelmonem",
          number: 6,
          position: "DF",
          x: 62,
          y: 25,
          club: "Nice",
          pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948"
        },
        {
          id: "eg5",
          name: "Ahmed Fattouh",
          number: 13,
          position: "DF",
          x: 85,
          y: 30,
          club: "Zamalek",
          pictureUrl: "https://digitalhub.fifa.com/transform/c22759e9-6346-4cb7-8611-74074421be7f/AHMED-FATOUH_430477"
        },
        {
          id: "eg6",
          name: "Hamdi Fathi",
          number: 8,
          position: "MF",
          x: 30,
          y: 50,
          club: "Al Wakrah",
          pictureUrl: "https://digitalhub.fifa.com/transform/2de277f5-cea7-47f9-9635-f9fb3a205c2a/HAMDY-FATHY_429095"
        },
        {
          id: "eg7",
          name: "Marwan Attia",
          number: 19,
          position: "MF",
          x: 50,
          y: 45,
          club: "Al Ahly",
          pictureUrl: "https://digitalhub.fifa.com/transform/cf051f82-c8a8-4328-9439-2ab64f616b83/MARAWAN-ATTIA_461788"
        },
        {
          id: "eg8",
          name: "Emam Ashour",
          number: 22,
          position: "MF",
          x: 70,
          y: 50,
          club: "Al Ahly",
          pictureUrl: "https://digitalhub.fifa.com/transform/6d203b10-285b-4800-b448-e34d2b3a3e09/EMAM-ASHOUR_430482"
        },
        {
          id: "eg9",
          name: "Mahmoud Tr\xE9z\xE9guet",
          number: 7,
          position: "FW",
          x: 15,
          y: 75,
          club: "Trabzonspor",
          pictureUrl: "https://digitalhub.fifa.com/transform/fd2622c8-9bd4-40f0-bb16-6b3311bb1811/TREZEGUET_363863"
        },
        {
          id: "eg10",
          name: "Mostafa Mohamed",
          number: 11,
          position: "FW",
          x: 50,
          y: 85,
          club: "Nantes",
          pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948"
        },
        {
          id: "eg11",
          name: "Mohamed Salah",
          number: 10,
          position: "FW",
          x: 85,
          y: 75,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/8d5236b8-acac-4946-af8e-5b007bcfa284/MOHAMED-SALAH_344654"
        }
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
      {
        id: "g15",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/"
      },
      {
        id: "s15",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz15",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
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
        {
          id: "sau1",
          name: "Mohammed Al-Owais",
          number: 21,
          position: "GK",
          x: 50,
          y: 88,
          club: "Al-Hilal",
          socials: {
            instagram: "https://instagram.com/alowais_33"
          },
          pictureUrl: "https://digitalhub.fifa.com/transform/be2d88f0-e368-49ef-9a33-c7585955c495/MOHAMMED-ALOWAIS_396885"
        },
        {
          id: "sau2",
          name: "Saud Abdulhamid",
          number: 12,
          position: "DF",
          x: 15,
          y: 70,
          club: "Roma",
          pictureUrl: "https://digitalhub.fifa.com/transform/66d9e01f-7f5e-4bef-b5bd-68d1ce4d9849/SAUD-ABDULHAMID_419281"
        },
        {
          id: "sau3",
          name: "Hassan Kadesh",
          number: 14,
          position: "DF",
          x: 38,
          y: 75,
          club: "Al-Ittihad",
          pictureUrl: "https://digitalhub.fifa.com/transform/fc41abe4-036c-4c99-aa2a-b56ddece0c2d/HASSAN-KADISH_401924"
        },
        {
          id: "sau4",
          name: "Ali Al-Bulaihi",
          number: 5,
          position: "DF",
          x: 62,
          y: 75,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/4f8e42cf-4966-4717-8c6d-f1b7f861a291/1442483955"
        },
        {
          id: "sau5",
          name: "Yasser Al-Shahrani",
          number: 13,
          position: "DF",
          x: 85,
          y: 70,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/e7d57d32-2d62-489e-85e7-fddcf1bc17f7/1442482644"
        },
        {
          id: "sau6",
          name: "Mohamed Kanno",
          number: 23,
          position: "MF",
          x: 30,
          y: 48,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/c3eb4162-fd6d-41f1-aad4-1b632b266f19/MOHAMED-KANNO_407993"
        },
        {
          id: "sau7",
          name: "Nasser Al-Dawsari",
          number: 8,
          position: "MF",
          x: 50,
          y: 44,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/81e654c7-8273-4e1f-b909-62613fbf14ea/NASSER-ALDAWSARI_403319"
        },
        {
          id: "sau8",
          name: "Salem Al-Dawsari",
          number: 10,
          position: "MF",
          x: 70,
          y: 48,
          club: "Al-Hilal",
          pictureUrl: "https://digitalhub.fifa.com/transform/d167ee25-02d4-48c1-b6bf-ec1eea3a1633/SALEM-ALDAWSARI_339745"
        },
        {
          id: "sau9",
          name: "Firas Al-Buraikan",
          number: 9,
          position: "FW",
          x: 15,
          y: 22,
          club: "Al-Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/9d59c398-9c66-4dad-b20d-9694a0f74dd4/FERAS-ALBRIKAN_419291"
        },
        {
          id: "sau10",
          name: "Saleh Al-Shehri",
          number: 11,
          position: "FW",
          x: 50,
          y: 28,
          club: "Al-Ittihad",
          pictureUrl: "https://digitalhub.fifa.com/transform/a912d91a-f467-4d57-a2fc-7937f8cafb66/SALEH-ALSHEHRI_425804"
        },
        {
          id: "sau11",
          name: "Abdulrahman Ghareeb",
          number: 7,
          position: "FW",
          x: 85,
          y: 22,
          club: "Al-Nassr"
        }
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
        {
          id: "uy1",
          name: "Sergio Rochet",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Internacional",
          pictureUrl: "https://digitalhub.fifa.com/transform/b5a98e25-83d4-441e-9c25-0eb4581277dc/ROCHET-Sergio_368664"
        },
        {
          id: "uy2",
          name: "Nahitan N\xE1ndez",
          number: 8,
          position: "DF",
          x: 15,
          y: 30,
          club: "Al-Qadsiah"
        },
        {
          id: "uy3",
          name: "Ronald Ara\xFAjo",
          number: 4,
          position: "DF",
          x: 38,
          y: 25,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/41008beb-38a3-46e0-9229-229d0afc8db7/ARAUJO-Ronald_419101"
        },
        {
          id: "uy4",
          name: "Jos\xE9 Mar\xEDa Gim\xE9nez",
          number: 2,
          position: "DF",
          x: 62,
          y: 25,
          club: "Atl\xE9tico de Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/977da143-5380-497d-85f7-d6e5ca34b27c/GIMENEZ-Jose-Maria_368655"
        },
        {
          id: "uy5",
          name: "Math\xEDas Olivera",
          number: 16,
          position: "DF",
          x: 85,
          y: 30,
          club: "Napoli",
          pictureUrl: "https://digitalhub.fifa.com/transform/704d2d9d-1b5f-4296-87f4-b7b591a58116/OLIVERA-Mathias_402893"
        },
        {
          id: "uy6",
          name: "Manuel Ugarte",
          number: 5,
          position: "MF",
          x: 30,
          y: 50,
          club: "Manchester United",
          pictureUrl: "https://digitalhub.fifa.com/transform/4ff94bd7-9c21-4338-be92-bad080e8d541/UGARTE-Manuel_441623"
        },
        {
          id: "uy7",
          name: "Federico Valverde",
          number: 15,
          position: "MF",
          x: 50,
          y: 45,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/bc29f114-2d51-4605-ae7a-eadf774e9d38/VALVERDE-Federico_402884"
        },
        {
          id: "uy8",
          name: "Nicol\xE1s de la Cruz",
          number: 7,
          position: "MF",
          x: 70,
          y: 50,
          club: "Flamengo",
          pictureUrl: "https://digitalhub.fifa.com/transform/7694c9e6-d4f9-4f60-8173-5a3a79bcaaa2/DE-LA-CRUZ-Nicolas_402898"
        },
        {
          id: "uy9",
          name: "Facundo Pellistri",
          number: 11,
          position: "FW",
          x: 15,
          y: 75,
          club: "Panathinaikos",
          pictureUrl: "https://digitalhub.fifa.com/transform/51b7eeb6-cac1-48cd-9ed3-4a18b34c5d90/PELLISTRI-Facundo_439956"
        },
        {
          id: "uy10",
          name: "Darwin N\xFA\xF1ez",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/078805a6-5fbe-44f3-a58c-ed3837ca5665/NUNEZ-Darwin_419126"
        },
        {
          id: "uy11",
          name: "Maximiliano Ara\xFAjo",
          number: 20,
          position: "FW",
          x: 85,
          y: 75,
          club: "Sporting",
          socials: {
            instagram: "https://instagram.com/maximilianoaraujo6"
          },
          pictureUrl: "https://digitalhub.fifa.com/transform/f1a7af03-ada1-4642-927c-5fe06844c89c/ARAUJO-Maxi_419100"
        }
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
      {
        id: "g16",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/"
      },
      {
        id: "s16",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz16",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
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
        {
          id: "ir1",
          name: "Alireza Beiranvand",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Persepolis",
          pictureUrl: "https://digitalhub.fifa.com/transform/c8cf4e84-2bd2-4e20-bb73-c7f14a935b73/BEIRANVAND-Alireza_380007"
        },
        {
          id: "ir2",
          name: "Sadegh Moharrami",
          number: 2,
          position: "DF",
          x: 15,
          y: 70,
          club: "Dinamo Zagreb",
          pictureUrl: "https://digitalhub.fifa.com/transform/c9c01799-0540-466a-b55d-58caf1c5f40e/1441896039"
        },
        {
          id: "ir3",
          name: "Shoja Khalilzadeh",
          number: 5,
          position: "DF",
          x: 38,
          y: 75,
          club: "Tractor",
          pictureUrl: "https://digitalhub.fifa.com/transform/509a4e4e-b242-4488-a334-84faac974457/KHALILZADEH-Shoja_346743"
        },
        {
          id: "ir4",
          name: "Hossein Kanaani",
          number: 13,
          position: "DF",
          x: 62,
          y: 75,
          club: "Persepolis",
          pictureUrl: "https://digitalhub.fifa.com/transform/20ec6667-ff1b-4fb3-8128-ecf2eb1c6e18/KANANI-Hossein_390534"
        },
        {
          id: "ir5",
          name: "Milad Mohammadi",
          number: 3,
          position: "DF",
          x: 85,
          y: 70,
          club: "Persepolis",
          pictureUrl: "https://digitalhub.fifa.com/transform/ed36d5fa-f6ab-4e3c-8bdd-1c5cf555f225/MOHAMMADI-Milad_390537"
        },
        {
          id: "ir6",
          name: "Saeid Ezatolahi",
          number: 6,
          position: "MF",
          x: 30,
          y: 48,
          club: "Shabab Al Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/a2e8983e-9596-49b3-8c5c-e398d66e27c5/EZATOLAHI-Saeid_371736"
        },
        {
          id: "ir7",
          name: "Rouzbeh Cheshmi",
          number: 15,
          position: "MF",
          x: 50,
          y: 44,
          club: "Esteghlal",
          pictureUrl: "https://digitalhub.fifa.com/transform/ecf8d94c-609d-4a5c-8375-8c8e92629a59/CHESHMI-Roozbeh_406595"
        },
        {
          id: "ir8",
          name: "Saman Ghoddos",
          number: 14,
          position: "MF",
          x: 70,
          y: 48,
          club: "Kalba",
          pictureUrl: "https://digitalhub.fifa.com/transform/96d480ac-42c5-4dd6-a2f0-6220ea1a0f4b/GHODDOS-Saman_411644"
        },
        {
          id: "ir9",
          name: "Mehdi Ghayedi",
          number: 10,
          position: "FW",
          x: 15,
          y: 22,
          club: "Kalba",
          pictureUrl: "https://digitalhub.fifa.com/transform/df931c9f-862e-411a-bc23-35af4d0d1bd1/GHAYEDI-Mehdi_403236"
        },
        {
          id: "ir10",
          name: "Sardar Azmoun",
          number: 20,
          position: "FW",
          x: 50,
          y: 28,
          club: "Shabab Al Ahli",
          pictureUrl: "https://digitalhub.fifa.com/transform/c50245ff-0d7f-47b3-8f94-206a58531506/1441897616"
        },
        {
          id: "ir11",
          name: "Mehdi Taremi",
          number: 9,
          position: "FW",
          x: 85,
          y: 22,
          club: "Inter de Mil\xE3o",
          pictureUrl: "https://digitalhub.fifa.com/transform/0d942331-39fb-421e-8a8d-d1f875958559/TAREMI-Mehdi_388475"
        },
        {
          id: "ir12",
          name: "Mohammad Mohebbi",
          number: 8,
          position: "MF",
          x: 50,
          y: 56,
          club: "",
          socials: {
            instagram: "https://instagram.com/mohammadmohebi_official"
          }
        }
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
        {
          id: "nz1",
          name: "Max Crocombe",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Burton Albion",
          pictureUrl: "https://digitalhub.fifa.com/transform/0d8fc4f9-7330-4eaa-bbf0-7dfccbec09db/CROCOMBE-Max_368535"
        },
        {
          id: "nz2",
          name: "Tim Payne",
          number: 2,
          position: "DF",
          x: 15,
          y: 30,
          club: "Wellington Phoenix",
          pictureUrl: "https://digitalhub.fifa.com/transform/2fd43bf7-76f0-4733-88d4-5d5ca820e91c/PAYNE-Tim_331463"
        },
        {
          id: "nz3",
          name: "Michael Boxall",
          number: 5,
          position: "DF",
          x: 38,
          y: 25,
          club: "Minnesota United",
          pictureUrl: "https://digitalhub.fifa.com/transform/e4d41670-878d-4717-b07c-84d09a5f6938/BOXALL-Michael_261367"
        },
        {
          id: "nz4",
          name: "Tyler Bindon",
          number: 4,
          position: "DF",
          x: 62,
          y: 25,
          club: "Reading",
          pictureUrl: "https://digitalhub.fifa.com/transform/14976514-36f8-43b9-80c8-67fb73d13d6b/BINDON-Tyler_482775"
        },
        {
          id: "nz5",
          name: "Liberato Cacace",
          number: 13,
          position: "DF",
          x: 85,
          y: 30,
          club: "Empoli",
          pictureUrl: "https://digitalhub.fifa.com/transform/0954fe05-e301-4ec1-a8ad-2aaccc60d8a7/CACACE-Liberato_405469"
        },
        {
          id: "nz6",
          name: "Joe Bell",
          number: 6,
          position: "MF",
          x: 30,
          y: 50,
          club: "Viking FK",
          pictureUrl: "https://digitalhub.fifa.com/transform/37f084e5-faf4-4447-bdf1-c7ac8b0fa6e8/BELL-Joe_390181"
        },
        {
          id: "nz7",
          name: "Marko Stamenic",
          number: 8,
          position: "MF",
          x: 50,
          y: 45,
          club: "Olympiacos",
          pictureUrl: "https://digitalhub.fifa.com/transform/b0e38724-034f-4d1e-a08a-def455a86569/STAMENIC-Marko_423595"
        },
        {
          id: "nz8",
          name: "Sarpreet Singh",
          number: 10,
          position: "MF",
          x: 70,
          y: 50,
          club: "Leiria",
          pictureUrl: "https://digitalhub.fifa.com/transform/3c43e6c2-50b4-4cb3-ba2e-e94f9a928edd/SINGH-Sarpreet_390209"
        },
        {
          id: "nz9",
          name: "Elijah Just",
          number: 11,
          position: "FW",
          x: 15,
          y: 75,
          club: "SKN St. Polten",
          pictureUrl: "https://digitalhub.fifa.com/transform/fe32736f-5d5f-4870-8db3-5b4560835f53/JUST-Elijah_405454",
          socials: {
            instagram: "https://instagram.com/elijah_just"
          }
        },
        {
          id: "nz10",
          name: "Chris Wood",
          number: 9,
          position: "FW",
          x: 50,
          y: 85,
          club: "Nottingham Forest",
          pictureUrl: "https://digitalhub.fifa.com/transform/431bf921-6e73-469f-87bd-3fb2c010966e/WOOD-Chris_274078"
        },
        {
          id: "nz11",
          name: "Ben Waine",
          number: 17,
          position: "FW",
          x: 85,
          y: 75,
          club: "Plymouth Argyle",
          pictureUrl: "https://digitalhub.fifa.com/transform/88f867f6-433a-4846-a145-fc06b8aac544/WAINE-Ben_419577"
        }
      ]
    },
    stadiumName: "Est\xE1dio de Los Angeles",
    city: "LOS ANGELES",
    stageName: "Group Stage",
    kickoffTime: "22:00",
    kickoffDate: "15 Junho, 2026",
    kickoffTimestamp: "2026-06-15T22:00:00-03:00",
    status: "FINISHED",
    countdownTargetSeconds: 0,
    broadcasters: [
      {
        id: "g17",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/"
      },
      {
        id: "s17",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz17",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
    ],
    score: {
      teamA: 2,
      teamB: 2
    }
  },
  {
    id: "por-cod-2026",
    teamA: {
      name: "PORTUGAL",
      code: "POR",
      flagSvg: "portugal",
      primaryColor: "#006600",
      secondaryColor: "#ff0000",
      group: "Grupo K",
      lineup: [
        {
          id: "p1",
          name: "Diogo Costa",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Porto",
          pictureUrl: "https://digitalhub.fifa.com/transform/3e6d51b7-2c34-4fe4-9dbb-88e455b1c81f/COSTA-Diogo_430980"
        },
        {
          id: "p2",
          name: "Jo\xE3o Cancelo",
          number: 20,
          position: "DF",
          x: 85,
          y: 70,
          club: "Barcelona",
          pictureUrl: "https://digitalhub.fifa.com/transform/a7c59dc4-a6e9-4cc2-82f4-a485a9e2a3db/CANCELO-Joao_384468"
        },
        {
          id: "p3",
          name: "R\xFAben Dias",
          number: 3,
          position: "DF",
          x: 62,
          y: 75,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/e1f6e4c0-cd56-4d69-96d0-f7da13b5d5c6/DIAS-Ruben_414700"
        },
        {
          id: "p4",
          name: "Ant\xF3nio Silva",
          number: 5,
          position: "DF",
          x: 38,
          y: 75,
          club: "Benfica",
          pictureUrl: "https://digitalhub.fifa.com/transform/b2af27b1-8e9f-4aee-a1c1-de0e6f2e15e6/SILVA-Antonio_501041"
        },
        {
          id: "p5",
          name: "Nuno Mendes",
          number: 19,
          position: "DF",
          x: 15,
          y: 70,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/fc26d7b0-b5e8-4d97-8d03-4e3e8c33d54a/MENDES-Nuno_490016"
        },
        {
          id: "p6",
          name: "Jo\xE3o Palhinha",
          number: 26,
          position: "MF",
          x: 50,
          y: 55,
          club: "Bayern M\xFCnchen",
          pictureUrl: "https://digitalhub.fifa.com/transform/0a8c4e68-c22f-4b62-a02c-b29e5f2ddf26/PALHINHA-Joao_432858"
        },
        {
          id: "p7",
          name: "Vitinha",
          number: 16,
          position: "MF",
          x: 30,
          y: 44,
          club: "PSG",
          pictureUrl: "https://digitalhub.fifa.com/transform/d7b4a1c5-e3f8-47d2-9b0e-c5a6e8d2f1b4/FERREIRA-Vitor_491880"
        },
        {
          id: "p8",
          name: "Bruno Fernandes",
          number: 8,
          position: "MF",
          x: 70,
          y: 44,
          club: "Manchester United",
          pictureUrl: "https://digitalhub.fifa.com/transform/5e9b2c7f-1a3d-4f86-b5c8-9e2a7d4f6c1e/FERNANDES-Bruno_389966",
          socials: {
            instagram: "https://instagram.com/brunofernandes.10"
          }
        },
        {
          id: "p9",
          name: "Bernardo Silva",
          number: 10,
          position: "FW",
          x: 85,
          y: 22,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/c4a8e2b6-7f3d-4a5c-8b1e-6d9f2c3e7a4b/SILVA-Bernardo_392682"
        },
        {
          id: "p10",
          name: "Cristiano Ronaldo",
          number: 7,
          position: "FW",
          x: 50,
          y: 15,
          club: "Al Nassr",
          pictureUrl: "https://digitalhub.fifa.com/transform/c1c4b9a2-e3f7-4d8b-9c5e-2a7f3b6d1e8c/RONALDO-Cristiano_384462",
          socials: {
            instagram: "https://instagram.com/cristiano"
          }
        },
        {
          id: "p11",
          name: "Rafael Le\xE3o",
          number: 11,
          position: "FW",
          x: 15,
          y: 22,
          club: "AC Milan",
          pictureUrl: "https://digitalhub.fifa.com/transform/8b3e5f1a-2d7c-4e9b-a6f4-1c8e3b7d5a2f/LEAO-Rafael_467397"
        }
      ]
    },
    teamB: {
      name: "RD CONGO",
      code: "COD",
      flagSvg: "drcongo",
      primaryColor: "#00a3e0",
      secondaryColor: "#ef3340",
      group: "Grupo K",
      lineup: [
        {
          id: "cod1",
          name: "Jo\xEBl Kiassumbua",
          number: 1,
          position: "GK",
          x: 50,
          y: 12
        },
        {
          id: "cod2",
          name: "Jacques Lukeba",
          number: 2,
          position: "DF",
          x: 85,
          y: 30,
          club: "RB Leipzig"
        },
        {
          id: "cod3",
          name: "Chancel Mbemba",
          number: 5,
          position: "DF",
          x: 62,
          y: 25,
          club: "Marseille"
        },
        {
          id: "cod4",
          name: "Dylan Batubinsika",
          number: 4,
          position: "DF",
          x: 38,
          y: 25,
          club: "Paris Saint-Germain"
        },
        {
          id: "cod5",
          name: "Arthur Masuaku",
          number: 3,
          position: "DF",
          x: 15,
          y: 30,
          club: "Nice"
        },
        {
          id: "cod6",
          name: "Paul-Jos\xE9 Mpoku",
          number: 10,
          position: "MF",
          x: 30,
          y: 50,
          club: "Panathinaikos"
        },
        {
          id: "cod7",
          name: "Ga\xEBl Kakuta",
          number: 8,
          position: "MF",
          x: 50,
          y: 55,
          club: "Amiens"
        },
        {
          id: "cod8",
          name: "Meschack Elia",
          number: 11,
          position: "MF",
          x: 70,
          y: 50,
          club: "Young Boys"
        },
        {
          id: "cod9",
          name: "Th\xE9o Bongonda",
          number: 7,
          position: "FW",
          x: 85,
          y: 75
        },
        {
          id: "cod10",
          name: "C\xE9dric Bakambu",
          number: 9,
          position: "FW",
          x: 50,
          y: 80,
          club: "Villarreal"
        },
        {
          id: "cod11",
          name: "Yoane Wissa",
          number: 17,
          position: "FW",
          x: 15,
          y: 75,
          club: "Brentford"
        }
      ]
    },
    stadiumName: "Est\xE1dio de Houston",
    city: "HOUSTON",
    stageName: "Group Stage",
    kickoffTime: "14:00",
    kickoffDate: "17 Junho, 2026",
    kickoffTimestamp: "2026-06-17T14:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: [
      {
        id: "g18",
        type: "TV ABERTA",
        name: "TV Globo",
        iconColor: "#05ff85",
        link: "https://redeglobo.globo.com/"
      },
      {
        id: "s18",
        type: "TV PAGA",
        name: "sportv",
        iconColor: "#ffd700",
        link: "https://ge.globo.com/sportv/"
      },
      {
        id: "cz18",
        type: "YOUTUBE",
        name: "Caz\xE9TV",
        iconColor: "#ed2939",
        link: "https://www.youtube.com/@CazeTV"
      }
    ]
  },
  {
    id: "irq-nor-2026",
    teamA: {
      name: "IRAQUE",
      code: "IRQ",
      flagSvg: "iraq",
      primaryColor: "#ce1126",
      secondaryColor: "#000000",
      group: "Grupo I",
      lineup: [
        {
          id: "iq1",
          name: "J. Hassan",
          number: 12,
          position: "GK",
          x: 50,
          y: 88,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/a7f7a32a-4968-462b-9c34-e8a0d0530b99/JALAL-HASSAN_347085"
        },
        {
          id: "iq2",
          name: "H. Ali",
          number: 3,
          position: "DF",
          x: 15,
          y: 72,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/9c065420-c134-4227-aef3-d6d07f0a9b8d/HUSSEIN-ALI_479553"
        },
        {
          id: "iq3",
          name: "Z. Tahseen",
          number: 4,
          position: "DF",
          x: 35,
          y: 75,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/84a4d1c5-8fe9-4d23-bb47-5dddfdf566bf/ZAID-TAHSEEN_434025"
        },
        {
          id: "iq4",
          name: "A. Hashim",
          number: 5,
          position: "DF",
          x: 65,
          y: 75,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/a0dea4f6-7d64-4613-bdd0-558480ddbc80/AKAM-HASHIM_481183_"
        },
        {
          id: "iq5",
          name: "M. Doski",
          number: 23,
          position: "DF",
          x: 85,
          y: 72,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/c2ac4751-fd73-4685-8bb6-de4c07266fda/MERCHAS-DOSKI_479072"
        },
        {
          id: "iq6",
          name: "I. Bayesh",
          number: 8,
          position: "MF",
          x: 25,
          y: 50,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/390fdc3f-232a-445d-a80e-1c9cc8a67df7/IBRAHIM-BAYESH_433585"
        },
        {
          id: "iq7",
          name: "A. Alammari",
          number: 16,
          position: "MF",
          x: 50,
          y: 48,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/d80ff1d4-6bce-462b-bc11-6b4049fe9741/AMIR-ALAMMARI_433074"
        },
        {
          id: "iq8",
          name: "Z. Ismael",
          number: 24,
          position: "MF",
          x: 75,
          y: 50,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/062e505a-0067-4b87-963d-a0e7ad53decb/ZAID-ISMAEL_484270"
        },
        {
          id: "iq9",
          name: "A. Alhamadi",
          number: 9,
          position: "FW",
          x: 50,
          y: 25,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/00b5271a-9033-43ab-9073-7b2ec9e4426e/ALI-ALHAMADI_436628"
        },
        {
          id: "iq10",
          name: "A. Jasim",
          number: 17,
          position: "FW",
          x: 20,
          y: 22,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/75d61654-11c8-4646-8e47-7c4c977b29b6/ALI-JASIM_464457"
        },
        {
          id: "iq11",
          name: "A. Hussein",
          number: 18,
          position: "FW",
          x: 80,
          y: 22,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/388e5207-980c-407a-828c-270fbd4fdff6/AYMEN-HUSSEIN_395186"
        }
      ]
    },
    teamB: {
      name: "NORUEGA",
      code: "NOR",
      flagSvg: "norway",
      primaryColor: "#ba0c2f",
      secondaryColor: "#00205b",
      group: "Grupo I",
      lineup: [
        {
          id: "no1",
          name: "\xD8. Nyland",
          number: 1,
          position: "GK",
          x: 50,
          y: 12,
          club: "Real Sociedad",
          pictureUrl: "https://digitalhub.fifa.com/transform/4abc883f-1368-46d6-8849-308d06b641e6/NYLAND-Orjan_373235"
        },
        {
          id: "no2",
          name: "K. Ajer",
          number: 3,
          position: "DF",
          x: 22,
          y: 30,
          club: "Brentford",
          pictureUrl: "https://digitalhub.fifa.com/transform/28de8091-50a6-4c54-9e7b-62788b087a3a/AJER-Kristoffer_483516"
        },
        {
          id: "no3",
          name: "D. M\xF8ller Wolfe",
          number: 5,
          position: "DF",
          x: 50,
          y: 28,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/27678ee5-00fb-4d48-ac88-402cab97d566/MOLLER-WOLFE-David_483505"
        },
        {
          id: "no4",
          name: "T. Heggem",
          number: 17,
          position: "DF",
          x: 78,
          y: 30,
          club: "",
          pictureUrl: "https://digitalhub.fifa.com/transform/e7b048fd-7217-470a-9820-eb8b6eab0286/HEGGEM-Torbjorn_491244"
        },
        {
          id: "no5",
          name: "F. Aursnes",
          number: 14,
          position: "MF",
          x: 27,
          y: 48,
          club: "Benfica",
          pictureUrl: "https://digitalhub.fifa.com/transform/5bf9f1d6-b7ec-4c50-9337-059f6eb0c097/AURSNES-Fredrik_483497"
        },
        {
          id: "no6",
          name: "S. Berge",
          number: 8,
          position: "MF",
          x: 50,
          y: 50,
          club: "Burnley",
          pictureUrl: "https://digitalhub.fifa.com/transform/b7cf7654-f43e-4993-975e-5a2a0d5633f8/BERGE-Sander_404645"
        },
        {
          id: "no7",
          name: "M. \xD8degaard",
          number: 10,
          position: "MF",
          x: 73,
          y: 48,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/2b895db6-7f67-4436-b8da-54bdf0dd2e2b/ODEGAARD-Martin_400716"
        },
        {
          id: "no8",
          name: "A. Nusa",
          number: 20,
          position: "FW",
          x: 12,
          y: 72,
          club: "RB Leipzig",
          pictureUrl: "https://digitalhub.fifa.com/transform/8522d4db-c622-4f88-9b98-62753ca74eec/NUSA-Antonio_483448"
        },
        {
          id: "no9",
          name: "A. S\xF8rloth",
          number: 7,
          position: "FW",
          x: 38,
          y: 75,
          club: "Atl\xE9tico Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/23bcc976-2dbc-4fe2-b844-1878ff0cd354/SORLOTH-Alexander_398588"
        },
        {
          id: "no10",
          name: "E. Haaland",
          number: 9,
          position: "FW",
          x: 62,
          y: 75,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/ee269811-9f84-401f-99b8-e953a2704ebb/HAALAND-Erling_419652"
        },
        {
          id: "no11",
          name: "J. Ryerson",
          number: 26,
          position: "FW",
          x: 88,
          y: 72,
          club: "Borussia Dortmund",
          pictureUrl: "https://digitalhub.fifa.com/transform/cf3ebe3b-012d-411b-af4e-ba0b59bb9e17/RYERSON-Julian_483496"
        }
      ]
    },
    stadiumName: "Est\xE1dio de Boston",
    city: "BOSTON",
    stageName: "Group Stage",
    kickoffTime: "19:00",
    kickoffDate: "16 Junho, 2026",
    kickoffTimestamp: "2026-06-16T19:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 4
    },
    countdownTargetSeconds: 0,
    broadcasters: []
  },
  {
    id: "eng-cro-2026",
    teamA: {
      name: "INGLATERRA",
      code: "ENG",
      flagSvg: "england",
      primaryColor: "#ce1124",
      secondaryColor: "#ffffff",
      group: "Grupo L",
      lineup: [
        {
          id: "336022",
          name: "Pickford",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Everton",
          pictureUrl: "https://digitalhub.fifa.com/transform/5f9b3bbf-edb5-4956-bce7-2d0a8e77f6ab/PICKFORD-Jordan_336022",
          fifaId: "336022"
        },
        {
          id: "403049",
          name: "Konsa",
          number: 2,
          position: "DF",
          x: 12,
          y: 72,
          club: "Aston Villa",
          pictureUrl: "https://digitalhub.fifa.com/transform/54b28723-92e1-42e8-97b5-162f5099cf60/KONSA-Ezri_403049",
          fifaId: "403049"
        },
        {
          id: "463780",
          name: "O'Reilly",
          number: 3,
          position: "DF",
          x: 37,
          y: 72,
          club: "Manchester United",
          pictureUrl: "https://digitalhub.fifa.com/transform/6a6be1c6-3496-49ba-81ca-354bdb2f404c/OREILLY-Nico_390761",
          fifaId: "463780"
        },
        {
          id: "369434",
          name: "Stones",
          number: 5,
          position: "DF",
          x: 63,
          y: 72,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/bb455f6a-d793-44ef-92b8-bd1aff6d14d6/STONES-John_369434",
          fifaId: "369434"
        },
        {
          id: "439641",
          name: "James",
          number: 24,
          position: "DF",
          x: 88,
          y: 72,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/1ffcc3c3-fdf3-4b61-9ac5-299213771a62/JAMES-Reece_439641",
          fifaId: "439641"
        },
        {
          id: "433097",
          name: "Declan Rice",
          number: 4,
          position: "MF",
          x: 12,
          y: 45,
          club: "Arsenal",
          pictureUrl: "https://digitalhub.fifa.com/transform/acb98657-fa9b-4202-bc38-075a97b5bf78/RICE-Declan_433097",
          fifaId: "433097"
        },
        {
          id: "481610",
          name: "Elliot Anderson",
          number: 8,
          position: "MF",
          x: 50,
          y: 45,
          club: "Newcastle United",
          pictureUrl: "https://digitalhub.fifa.com/transform/8da5855f-c957-4151-94a0-731e9714249f/ANDERSON-Elliot_481610",
          fifaId: "481610"
        },
        {
          id: "448202",
          name: "Bellingham",
          number: 10,
          position: "MF",
          x: 88,
          y: 45,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/d711b37f-ec06-4ea7-bb52-50ba0a42ef67/BELLINGHAM-Jude_448202",
          fifaId: "448202"
        },
        {
          id: "369419",
          name: "Kane",
          number: 9,
          position: "FW",
          x: 12,
          y: 18,
          club: "Bayern M\xFCnchen",
          pictureUrl: "https://digitalhub.fifa.com/transform/5ad83fe6-1139-4f92-a97c-669052eb1755/KANE-Harry_369419",
          fifaId: "369419"
        },
        {
          id: "448189",
          name: "Gordon",
          number: 18,
          position: "FW",
          x: 50,
          y: 18,
          club: "Liverpool",
          pictureUrl: "https://digitalhub.fifa.com/transform/bb7bbfe0-791d-408e-a2c2-f33156fce3e8/GORDON-Anthony_448189",
          fifaId: "448189"
        },
        {
          id: "489732",
          name: "Madueke",
          number: 20,
          position: "FW",
          x: 88,
          y: 18,
          club: "Chelsea",
          pictureUrl: "https://digitalhub.fifa.com/transform/115733f4-8e52-477a-867f-063f1e2c7752/MADUEKE-Noni_489732",
          fifaId: "489732"
        }
      ]
    },
    teamB: {
      name: "CRO\xC1CIA",
      code: "CRO",
      flagSvg: "croatia",
      primaryColor: "#ff0000",
      secondaryColor: "#ffffff",
      group: "Grupo L",
      lineup: [
        {
          id: "369029",
          name: "Livakovi\u0107",
          number: 1,
          position: "GK",
          x: 50,
          y: 88,
          club: "Fenerbah\xE7e",
          pictureUrl: "https://digitalhub.fifa.com/transform/6f54cf31-4fd8-4dff-aaa7-9db6bf2fa2ec/LIVAKOVIC-Dominik_369029",
          fifaId: "369029"
        },
        {
          id: "433667",
          name: "Stani\u0161i\u0107",
          number: 2,
          position: "DF",
          x: 12,
          y: 72,
          club: "Bayer Leverkusen",
          pictureUrl: "https://digitalhub.fifa.com/transform/c1f59cf4-db22-4b38-af85-ab5692105f95/STANISIC-Josip_433667",
          fifaId: "433667"
        },
        {
          id: "448180",
          name: "Gvardiol",
          number: 4,
          position: "DF",
          x: 37,
          y: 72,
          club: "Manchester City",
          pictureUrl: "https://digitalhub.fifa.com/transform/18cba70e-f4ed-4f57-8e6a-5d4bfd3df8b0/GVARDIOL-Josko_448180",
          fifaId: "448180"
        },
        {
          id: "448171",
          name: "\u0160utalo",
          number: 6,
          position: "DF",
          x: 63,
          y: 72,
          club: "Ajax",
          pictureUrl: "https://digitalhub.fifa.com/transform/5b23d028-3bf8-4355-8364-7838975c264f/SUTALO-Josip_448171",
          fifaId: "448171"
        },
        {
          id: "499290",
          name: "Luka Vuskovic",
          number: 22,
          position: "DF",
          x: 88,
          y: 72,
          club: "Tottenham",
          pictureUrl: "https://digitalhub.fifa.com/transform/c905e324-dc60-4e79-a2a1-c06412f27aed/VUSKOVIC-Luka_499290",
          fifaId: "499290"
        },
        {
          id: "241559",
          name: "Modri\u0107",
          number: 10,
          position: "MF",
          x: 12,
          y: 45,
          club: "Real Madrid",
          pictureUrl: "https://digitalhub.fifa.com/transform/cbff6a19-cce4-45ee-9869-84cf30ce5676/MODRIC-Luka_241559",
          fifaId: "241559"
        },
        {
          id: "380005",
          name: "Mario Pasalic",
          number: 15,
          position: "MF",
          x: 37,
          y: 45,
          club: "Atalanta",
          pictureUrl: "https://digitalhub.fifa.com/transform/f3c0fd5e-6814-4acc-822a-2152e1cf79de/PASALIC-Mario_380005",
          fifaId: "380005"
        },
        {
          id: "482774",
          name: "Martin Baturina",
          number: 16,
          position: "MF",
          x: 63,
          y: 45,
          club: "Dinamo Zagreb",
          pictureUrl: "https://digitalhub.fifa.com/transform/b9125a74-a920-4ffc-922b-68d57c524f4e/BATURINA-Martin_482774",
          fifaId: "482774"
        },
        {
          id: "485066",
          name: "Petar Sucic",
          number: 17,
          position: "MF",
          x: 88,
          y: 45,
          club: "RB Leipzig",
          pictureUrl: "https://digitalhub.fifa.com/transform/89c383c2-39ba-413d-b945-e42dd2d47c6d/SUCIC-Petar_485066",
          fifaId: "485066"
        },
        {
          id: "359381",
          name: "Peri\u0161i\u0107",
          number: 14,
          position: "FW",
          x: 12,
          y: 18,
          club: "Hajduk Split",
          pictureUrl: "https://digitalhub.fifa.com/transform/ba7ea3ab-0ef6-4cdd-834c-79a94739fe26/PERISIC-Ivan_359381",
          fifaId: "359381"
        },
        {
          id: "389754",
          name: "Petar Musa",
          number: 26,
          position: "FW",
          x: 88,
          y: 18,
          club: "Benfica",
          pictureUrl: "https://digitalhub.fifa.com/transform/5c33a6f7-32cc-4821-949d-42fa33de6f74/MUSA-Petar_389754",
          fifaId: "389754"
        }
      ]
    },
    stadiumName: "Dallas Stadium",
    city: "DALLAS",
    stageName: "Group Stage",
    kickoffTime: "17:00",
    kickoffDate: "17 Junho, 2026",
    kickoffTimestamp: "2026-06-17T17:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 4,
      teamB: 2
    },
    countdownTargetSeconds: 0,
    broadcasters: []
  },
  {
    id: "aut-jor-2026",
    teamA: {
      name: "\xC1USTRIA",
      code: "AUT",
      flagSvg: "austria",
      primaryColor: "#ed2939",
      secondaryColor: "#ffffff",
      group: "Grupo J",
      lineup: [
        { id: "aut1", name: "Schlager", number: 1, position: "GK", x: 50, y: 88 },
        { id: "aut16", name: "Phillip Mwene", number: 16, position: "DF", x: 15, y: 70 },
        { id: "aut8", name: "Alaba", number: 8, position: "DF", x: 38, y: 75 },
        { id: "aut3", name: "Kevin Danso", number: 3, position: "DF", x: 62, y: 75 },
        { id: "aut5", name: "Stefan Posch", number: 5, position: "DF", x: 85, y: 70 },
        { id: "aut6", name: "Nicolas Seiwald", number: 6, position: "MF", x: 35, y: 48 },
        { id: "aut4", name: "Xaver Schlager", number: 4, position: "MF", x: 65, y: 48 },
        { id: "aut21", name: "Patrick Wimmer", number: 21, position: "FW", x: 15, y: 26 },
        { id: "aut9", name: "Sabitzer", number: 9, position: "MF", x: 50, y: 32 },
        { id: "aut20", name: "Laimer", number: 20, position: "MF", x: 85, y: 26 },
        { id: "aut7", name: "Arnautovic", number: 7, position: "FW", x: 50, y: 12, captain: true }
      ]
    },
    teamB: {
      name: "JORD\xC2NIA",
      code: "JOR",
      flagSvg: "jordan",
      primaryColor: "#007a3d",
      secondaryColor: "#ce1126",
      group: "Grupo J",
      lineup: [
        { id: "jor1", name: "Yazeed Abulaila", number: 1, position: "GK", x: 50, y: 88 },
        { id: "jor3", name: "Abdallah Nasib", number: 3, position: "DF", x: 15, y: 70 },
        { id: "jor16", name: "Mohammad Abualnadi", number: 16, position: "DF", x: 38, y: 75 },
        { id: "jor5", name: "Yazan Alarab", number: 5, position: "DF", x: 62, y: 75 },
        { id: "jor2", name: "Mohammad Abuhasheesh", number: 2, position: "DF", x: 85, y: 70 },
        { id: "jor6", name: "Amer Jamous", number: 6, position: "MF", x: 35, y: 50 },
        { id: "jor8", name: "Noor Alrawabdeh", number: 8, position: "MF", x: 50, y: 52 },
        { id: "jor21", name: "Nizar Alrashdan", number: 21, position: "MF", x: 65, y: 50 },
        { id: "jor10", name: "Mousa Altamari", number: 10, position: "FW", x: 85, y: 25, captain: true },
        { id: "jor7", name: "Mohammad Abuzraiq", number: 7, position: "FW", x: 15, y: 25 },
        { id: "jor9", name: "Ali Olwan", number: 9, position: "FW", x: 50, y: 12 }
      ]
    },
    stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco",
    city: "\xC1rea da ba\xEDa de S\xE3o Francisco",
    stageName: "Group Stage",
    kickoffTime: "01:00",
    kickoffDate: "17 Junho, 2026",
    kickoffTimestamp: "2026-06-17T01:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 3,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: []
  },
  {
    id: "qat-sui-2026",
    teamA: {
      name: "CATAR",
      code: "QAT",
      flagSvg: "qatar",
      primaryColor: "#8d1b3d",
      secondaryColor: "#ffffff",
      group: "Grupo B",
      lineup: [
        { id: "qat22", name: "Meshaal Barsham", number: 22, position: "GK", x: 50, y: 88 },
        { id: "qat14", name: "Homam Ahmed", number: 14, position: "DF", x: 15, y: 70 },
        { id: "qat5", name: "Jassem Gaber", number: 5, position: "DF", x: 38, y: 75 },
        { id: "qat16", name: "Boualem Khoukhi", number: 16, position: "DF", x: 62, y: 75 },
        { id: "qat2", name: "Pedro Miguel", number: 2, position: "DF", x: 85, y: 70 },
        { id: "qat6", name: "Abdulaziz Hatem", number: 6, position: "MF", x: 35, y: 50 },
        { id: "qat23", name: "A. Madibo", number: 23, position: "MF", x: 50, y: 52 },
        { id: "qat12", name: "Karim Boudiaf", number: 12, position: "MF", x: 65, y: 50 },
        { id: "qat11", name: "Afif", number: 11, position: "FW", x: 85, y: 25 },
        { id: "qat10", name: "Hassan Alhaydos", number: 10, position: "FW", x: 15, y: 25, captain: true },
        { id: "qat19", name: "Almoez Ali", number: 19, position: "FW", x: 50, y: 12 }
      ]
    },
    teamB: {
      name: "SU\xCD\xC7A",
      code: "SUI",
      flagSvg: "switzerland",
      primaryColor: "#d52b1e",
      secondaryColor: "#ffffff",
      group: "Grupo B",
      lineup: [
        { id: "sui1", name: "Kobel", number: 1, position: "GK", x: 50, y: 88 },
        { id: "sui13", name: "Rodriguez", number: 13, position: "DF", x: 15, y: 70 },
        { id: "sui4", name: "Elvedi", number: 4, position: "DF", x: 38, y: 75 },
        { id: "sui5", name: "Akanji", number: 5, position: "DF", x: 62, y: 75 },
        { id: "sui3", name: "Widmer", number: 3, position: "DF", x: 85, y: 70 },
        { id: "sui10", name: "Xhaka", number: 10, position: "MF", x: 35, y: 48, captain: true },
        { id: "sui8", name: "Freuler", number: 8, position: "MF", x: 65, y: 48 },
        { id: "sui17", name: "Vargas", number: 17, position: "FW", x: 15, y: 26 },
        { id: "sui20", name: "Michel Aebischer", number: 20, position: "MF", x: 50, y: 32 },
        { id: "sui11", name: "Ndoye", number: 11, position: "FW", x: 85, y: 26 },
        { id: "sui7", name: "Embolo", number: 7, position: "FW", x: 50, y: 12 }
      ]
    },
    stadiumName: "Est\xE1dio da Ba\xEDa de S\xE3o Francisco",
    city: "\xC1rea da ba\xEDa de S\xE3o Francisco",
    stageName: "Group Stage",
    kickoffTime: "16:00",
    kickoffDate: "13 Junho, 2026",
    kickoffTimestamp: "2026-06-13T16:00:00-03:00",
    status: "FINISHED",
    score: {
      teamA: 1,
      teamB: 1
    },
    countdownTargetSeconds: 0,
    broadcasters: []
  }
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

// src/data/fifaScheduledMatches.ts
var v = (teamA, teamB) => FIFA_MATCH_VENUES[`${teamA.toLowerCase()}-${teamB.toLowerCase()}-2026`] ?? { stadiumName: "A confirmar", city: "A confirmar" };
var FIFA_SCHEDULED_MATCHES = [
  // ── Grupo A ───────────────────────────────────────────────────────────────
  { teamA: "CZE", teamB: "RSA", kickoffTimestamp: "2026-06-18T13:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 1 }, ...v("CZE", "RSA") },
  { teamA: "MEX", teamB: "KOR", kickoffTimestamp: "2026-06-18T22:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 0 }, ...v("MEX", "KOR") },
  { teamA: "CZE", teamB: "MEX", kickoffTimestamp: "2026-06-24T22:00:00-03:00", status: "PRE_GAME", ...v("CZE", "MEX") },
  { teamA: "RSA", teamB: "KOR", kickoffTimestamp: "2026-06-24T22:00:00-03:00", status: "PRE_GAME", ...v("RSA", "KOR") },
  // ── Grupo B ───────────────────────────────────────────────────────────────
  { teamA: "QAT", teamB: "SUI", kickoffTimestamp: "2026-06-13T16:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 1 }, ...v("QAT", "SUI") },
  { teamA: "SUI", teamB: "BIH", kickoffTimestamp: "2026-06-18T16:00:00-03:00", status: "FINISHED", score: { teamA: 4, teamB: 1 }, ...v("SUI", "BIH") },
  { teamA: "CAN", teamB: "QAT", kickoffTimestamp: "2026-06-18T19:00:00-03:00", status: "FINISHED", score: { teamA: 6, teamB: 0 }, ...v("CAN", "QAT") },
  { teamA: "BIH", teamB: "QAT", kickoffTimestamp: "2026-06-24T16:00:00-03:00", status: "PRE_GAME", ...v("BIH", "QAT") },
  { teamA: "SUI", teamB: "CAN", kickoffTimestamp: "2026-06-24T16:00:00-03:00", status: "PRE_GAME", ...v("SUI", "CAN") },
  // ── Grupo C ───────────────────────────────────────────────────────────────
  { teamA: "SCO", teamB: "MAR", kickoffTimestamp: "2026-06-19T19:00:00-03:00", status: "FINISHED", score: { teamA: 0, teamB: 1 }, ...v("SCO", "MAR") },
  { teamA: "BRA", teamB: "HAI", kickoffTimestamp: "2026-06-19T21:30:00-03:00", status: "FINISHED", score: { teamA: 3, teamB: 0 }, ...v("BRA", "HAI") },
  { teamA: "MAR", teamB: "HAI", kickoffTimestamp: "2026-06-24T19:00:00-03:00", status: "PRE_GAME", ...v("MAR", "HAI") },
  { teamA: "SCO", teamB: "BRA", kickoffTimestamp: "2026-06-24T19:00:00-03:00", status: "PRE_GAME", ...v("SCO", "BRA") },
  // ── Grupo D ───────────────────────────────────────────────────────────────
  { teamA: "USA", teamB: "AUS", kickoffTimestamp: "2026-06-19T16:00:00-03:00", status: "FINISHED", score: { teamA: 2, teamB: 0 }, ...v("USA", "AUS") },
  { teamA: "TUR", teamB: "PAR", kickoffTimestamp: "2026-06-20T00:00:00-03:00", status: "LIVE", score: { teamA: 0, teamB: 1 }, ...v("TUR", "PAR") },
  { teamA: "PAR", teamB: "AUS", kickoffTimestamp: "2026-06-25T23:00:00-03:00", status: "PRE_GAME", ...v("PAR", "AUS") },
  { teamA: "TUR", teamB: "USA", kickoffTimestamp: "2026-06-25T23:00:00-03:00", status: "PRE_GAME", ...v("TUR", "USA") },
  // ── Grupo E ───────────────────────────────────────────────────────────────
  { teamA: "GER", teamB: "CIV", kickoffTimestamp: "2026-06-20T17:00:00-03:00", status: "FINISHED", score: { teamA: 2, teamB: 1 }, ...v("GER", "CIV") },
  { teamA: "ECU", teamB: "CUW", kickoffTimestamp: "2026-06-20T21:00:00-03:00", status: "PRE_GAME", ...v("ECU", "CUW") },
  { teamA: "CUW", teamB: "CIV", kickoffTimestamp: "2026-06-25T17:00:00-03:00", status: "PRE_GAME", ...v("CUW", "CIV") },
  { teamA: "ECU", teamB: "GER", kickoffTimestamp: "2026-06-25T17:00:00-03:00", status: "PRE_GAME", ...v("ECU", "GER") },
  // ── Grupo F ───────────────────────────────────────────────────────────────
  { teamA: "NED", teamB: "SWE", kickoffTimestamp: "2026-06-20T14:00:00-03:00", status: "PRE_GAME", ...v("NED", "SWE") },
  { teamA: "TUN", teamB: "JPN", kickoffTimestamp: "2026-06-21T01:00:00-03:00", status: "PRE_GAME", ...v("TUN", "JPN") },
  { teamA: "JPN", teamB: "SWE", kickoffTimestamp: "2026-06-25T20:00:00-03:00", status: "PRE_GAME", ...v("JPN", "SWE") },
  { teamA: "TUN", teamB: "NED", kickoffTimestamp: "2026-06-25T20:00:00-03:00", status: "PRE_GAME", ...v("TUN", "NED") },
  // ── Grupo G ───────────────────────────────────────────────────────────────
  { teamA: "BEL", teamB: "IRN", kickoffTimestamp: "2026-06-21T16:00:00-03:00", status: "PRE_GAME", ...v("BEL", "IRN") },
  { teamA: "NZL", teamB: "EGY", kickoffTimestamp: "2026-06-21T22:00:00-03:00", status: "PRE_GAME", ...v("NZL", "EGY") },
  { teamA: "EGY", teamB: "IRN", kickoffTimestamp: "2026-06-27T00:00:00-03:00", status: "PRE_GAME", ...v("EGY", "IRN") },
  { teamA: "NZL", teamB: "BEL", kickoffTimestamp: "2026-06-27T00:00:00-03:00", status: "PRE_GAME", ...v("NZL", "BEL") },
  // ── Grupo H ───────────────────────────────────────────────────────────────
  { teamA: "ESP", teamB: "KSA", kickoffTimestamp: "2026-06-21T13:00:00-03:00", status: "FINISHED", score: { teamA: 4, teamB: 0 }, ...v("ESP", "KSA") },
  { teamA: "URU", teamB: "CPV", kickoffTimestamp: "2026-06-21T19:00:00-03:00", status: "PRE_GAME", ...v("URU", "CPV") },
  { teamA: "CPV", teamB: "KSA", kickoffTimestamp: "2026-06-26T21:00:00-03:00", status: "PRE_GAME", ...v("CPV", "KSA") },
  { teamA: "URU", teamB: "ESP", kickoffTimestamp: "2026-06-26T21:00:00-03:00", status: "PRE_GAME", ...v("URU", "ESP") },
  // ── Grupo I ───────────────────────────────────────────────────────────────
  { teamA: "IRQ", teamB: "NOR", kickoffTimestamp: "2026-06-16T19:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 4 }, ...v("IRQ", "NOR") },
  { teamA: "FRA", teamB: "IRQ", kickoffTimestamp: "2026-06-22T18:00:00-03:00", status: "PRE_GAME", ...v("FRA", "IRQ") },
  { teamA: "NOR", teamB: "SEN", kickoffTimestamp: "2026-06-22T21:00:00-03:00", status: "PRE_GAME", ...v("NOR", "SEN") },
  { teamA: "NOR", teamB: "FRA", kickoffTimestamp: "2026-06-26T16:00:00-03:00", status: "PRE_GAME", ...v("NOR", "FRA") },
  { teamA: "SEN", teamB: "IRQ", kickoffTimestamp: "2026-06-26T16:00:00-03:00", status: "PRE_GAME", ...v("SEN", "IRQ") },
  // ── Grupo J ───────────────────────────────────────────────────────────────
  { teamA: "AUT", teamB: "JOR", kickoffTimestamp: "2026-06-17T01:00:00-03:00", status: "FINISHED", score: { teamA: 3, teamB: 1 }, ...v("AUT", "JOR") },
  { teamA: "ARG", teamB: "AUT", kickoffTimestamp: "2026-06-22T14:00:00-03:00", status: "PRE_GAME", ...v("ARG", "AUT") },
  { teamA: "JOR", teamB: "ALG", kickoffTimestamp: "2026-06-23T00:00:00-03:00", status: "PRE_GAME", ...v("JOR", "ALG") },
  { teamA: "ALG", teamB: "AUT", kickoffTimestamp: "2026-06-27T23:00:00-03:00", status: "PRE_GAME", ...v("ALG", "AUT") },
  { teamA: "JOR", teamB: "ARG", kickoffTimestamp: "2026-06-27T23:00:00-03:00", status: "PRE_GAME", ...v("JOR", "ARG") },
  // ── Grupo K ───────────────────────────────────────────────────────────────
  { teamA: "POR", teamB: "COD", kickoffTimestamp: "2026-06-17T14:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 1 }, ...v("POR", "COD") },
  { teamA: "UZB", teamB: "COL", kickoffTimestamp: "2026-06-17T23:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 3 }, ...v("UZB", "COL") },
  { teamA: "POR", teamB: "UZB", kickoffTimestamp: "2026-06-23T14:00:00-03:00", status: "PRE_GAME", ...v("POR", "UZB") },
  { teamA: "COL", teamB: "COD", kickoffTimestamp: "2026-06-23T23:00:00-03:00", status: "PRE_GAME", ...v("COL", "COD") },
  { teamA: "COL", teamB: "POR", kickoffTimestamp: "2026-06-27T20:30:00-03:00", status: "PRE_GAME", ...v("COL", "POR") },
  { teamA: "COD", teamB: "UZB", kickoffTimestamp: "2026-06-27T20:30:00-03:00", status: "PRE_GAME", ...v("COD", "UZB") },
  // ── Grupo L ───────────────────────────────────────────────────────────────
  { teamA: "ENG", teamB: "CRO", kickoffTimestamp: "2026-06-17T17:00:00-03:00", status: "FINISHED", score: { teamA: 4, teamB: 2 }, ...v("ENG", "CRO") },
  { teamA: "GHA", teamB: "PAN", kickoffTimestamp: "2026-06-17T20:00:00-03:00", status: "FINISHED", score: { teamA: 1, teamB: 0 }, ...v("GHA", "PAN") },
  { teamA: "ENG", teamB: "GHA", kickoffTimestamp: "2026-06-23T17:00:00-03:00", status: "PRE_GAME", ...v("ENG", "GHA") },
  { teamA: "PAN", teamB: "CRO", kickoffTimestamp: "2026-06-23T20:00:00-03:00", status: "PRE_GAME", ...v("PAN", "CRO") },
  { teamA: "CRO", teamB: "GHA", kickoffTimestamp: "2026-06-27T18:00:00-03:00", status: "PRE_GAME", ...v("CRO", "GHA") },
  { teamA: "PAN", teamB: "ENG", kickoffTimestamp: "2026-06-27T18:00:00-03:00", status: "PRE_GAME", ...v("PAN", "ENG") }
];

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
for (const [teamCode, lineup] of lineupByTeamCode) {
  lineupByTeamCode.set(
    teamCode,
    lineup.map((player) => {
      const entry = resolvePlayerEntry(teamCode, player.name, player.number, player.fifaId);
      if (!entry) return player;
      return {
        ...player,
        fifaId: entry.fifaId,
        fullName: player.fullName ?? entry.fullName,
        club: player.club ?? entry.club,
        pictureUrl: player.pictureUrl ?? entry.pictureUrl,
        socials: player.socials ?? entry.socials,
        instagramPostUrl: player.instagramPostUrl ?? entry.instagramPostUrl,
        dateOfBirth: player.dateOfBirth ?? entry.dateOfBirth,
        height: player.height ?? entry.height
      };
    })
  );
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
var APP_MATCHES = [
  ...BASE_MATCHES,
  ...FIFA_SCHEDULED_MATCHES.filter(
    ({ teamA, teamB }) => !existingIds.has(`${teamA.toLowerCase()}-${teamB.toLowerCase()}-2026`)
  ).map(buildSupplementalMatch)
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

// src/data/wikipediaCountries.ts
var WIKIPEDIA_COUNTRIES = {
  // ── Africa ──────────────────────────────────────────────────────────────────
  ALG: { ptArticle: "Arg\xE9lia", wikidataId: "Q262" },
  ANG: { ptArticle: "Angola", wikidataId: "Q916" },
  BEN: { ptArticle: "Benim", wikidataId: "Q962" },
  BFA: { ptArticle: "Burquina Faso", wikidataId: "Q965" },
  CIV: { ptArticle: "Costa do Marfim", wikidataId: "Q1008" },
  CMR: { ptArticle: "Camar\xF5es", wikidataId: "Q1009" },
  COD: { ptArticle: "Rep\xFAblica Democr\xE1tica do Congo", wikidataId: "Q974" },
  COG: { ptArticle: "Rep\xFAblica do Congo", wikidataId: "Q971" },
  CPV: { ptArticle: "Cabo Verde", wikidataId: "Q1011" },
  EGY: { ptArticle: "Egito", wikidataId: "Q79" },
  ETH: { ptArticle: "Eti\xF3pia", wikidataId: "Q115" },
  GAM: { ptArticle: "G\xE2mbia", wikidataId: "Q1005" },
  GHA: { ptArticle: "Gana", wikidataId: "Q117" },
  GNB: { ptArticle: "Guin\xE9-Bissau", wikidataId: "Q1007" },
  GUI: { ptArticle: "Guin\xE9", wikidataId: "Q1006" },
  KEN: { ptArticle: "Qu\xEAnia", wikidataId: "Q114" },
  LBA: { ptArticle: "L\xEDbia", wikidataId: "Q1016" },
  MAD: { ptArticle: "Madag\xE1scar", wikidataId: "Q1019" },
  MAR: { ptArticle: "Marrocos", wikidataId: "Q1028" },
  MLI: { ptArticle: "Mali", wikidataId: "Q912" },
  MOZ: { ptArticle: "Mo\xE7ambique", wikidataId: "Q573" },
  MRI: { ptArticle: "Maur\xEDcia", wikidataId: "Q1027" },
  MTN: { ptArticle: "Maurit\xE2nia", wikidataId: "Q1025" },
  NGA: { ptArticle: "Nig\xE9ria", wikidataId: "Q1033" },
  RSA: { ptArticle: "\xC1frica do Sul", wikidataId: "Q258" },
  RWA: { ptArticle: "Ruanda", wikidataId: "Q1037" },
  SEN: { ptArticle: "Senegal", wikidataId: "Q1041" },
  SLE: { ptArticle: "Serra Leoa", wikidataId: "Q1044" },
  SOM: { ptArticle: "Som\xE1lia", wikidataId: "Q1045" },
  STP: { ptArticle: "S\xE3o Tom\xE9 e Pr\xEDncipe", wikidataId: "Q1039" },
  SUD: { ptArticle: "Sud\xE3o", wikidataId: "Q1049" },
  TAN: { ptArticle: "Tanz\xE2nia", wikidataId: "Q924" },
  TOG: { ptArticle: "Togo", wikidataId: "Q945" },
  TUN: { ptArticle: "Tun\xEDsia", wikidataId: "Q948" },
  UGA: { ptArticle: "Uganda", wikidataId: "Q1036" },
  ZAM: { ptArticle: "Z\xE2mbia", wikidataId: "Q953" },
  ZIM: { ptArticle: "Zimb\xE1bue", wikidataId: "Q954" },
  // ── Americas ─────────────────────────────────────────────────────────────
  ARG: { ptArticle: "Argentina", wikidataId: "Q414" },
  BOL: { ptArticle: "Bol\xEDvia", wikidataId: "Q750" },
  BRA: { ptArticle: "Brasil", wikidataId: "Q155" },
  CAN: { ptArticle: "Canad\xE1", wikidataId: "Q16" },
  CHI: { ptArticle: "Chile", wikidataId: "Q298" },
  COL: { ptArticle: "Col\xF4mbia", wikidataId: "Q739" },
  CRC: { ptArticle: "Costa Rica", wikidataId: "Q800" },
  CUB: { ptArticle: "Cuba", wikidataId: "Q241" },
  CUW: { ptArticle: "Cura\xE7ao", wikidataId: "Q25279" },
  DOM: { ptArticle: "Rep\xFAblica Dominicana", wikidataId: "Q786" },
  ECU: { ptArticle: "Equador", wikidataId: "Q736" },
  GUA: { ptArticle: "Guatemala", wikidataId: "Q774" },
  GUY: { ptArticle: "Guiana", wikidataId: "Q734" },
  HAI: { ptArticle: "Haiti", wikidataId: "Q790" },
  HON: { ptArticle: "Honduras", wikidataId: "Q783" },
  JAM: { ptArticle: "Jamaica", wikidataId: "Q766" },
  MEX: { ptArticle: "M\xE9xico", wikidataId: "Q96" },
  NCA: { ptArticle: "Nicar\xE1gua", wikidataId: "Q811" },
  PAN: { ptArticle: "Panam\xE1", wikidataId: "Q804" },
  PAR: { ptArticle: "Paraguai", wikidataId: "Q733" },
  PER: { ptArticle: "Peru", wikidataId: "Q419" },
  SLV: { ptArticle: "El Salvador", wikidataId: "Q792" },
  SUR: { ptArticle: "Suriname", wikidataId: "Q730" },
  TRI: { ptArticle: "Trinidad e Tobago", wikidataId: "Q754" },
  URU: { ptArticle: "Uruguai", wikidataId: "Q77" },
  USA: { ptArticle: "Estados Unidos", wikidataId: "Q30" },
  VEN: { ptArticle: "Venezuela", wikidataId: "Q717" },
  // ── Asia ─────────────────────────────────────────────────────────────────
  AFG: { ptArticle: "Afeganist\xE3o", wikidataId: "Q889" },
  BAN: { ptArticle: "Bangladesh", wikidataId: "Q902" },
  BHR: { ptArticle: "Bar\xE9m", wikidataId: "Q398" },
  CHN: { ptArticle: "China", wikidataId: "Q148" },
  IDN: { ptArticle: "Indon\xE9sia", wikidataId: "Q252" },
  IND: { ptArticle: "\xCDndia", wikidataId: "Q668" },
  IRN: { ptArticle: "Ir\xE3", wikidataId: "Q794" },
  IRQ: { ptArticle: "Iraque", wikidataId: "Q796" },
  JOR: { ptArticle: "Jord\xE2nia", wikidataId: "Q810" },
  JPN: { ptArticle: "Jap\xE3o", wikidataId: "Q17" },
  KAZ: { ptArticle: "Cazaquist\xE3o", wikidataId: "Q232" },
  KOR: { ptArticle: "Coreia do Sul", wikidataId: "Q884" },
  KSA: { ptArticle: "Ar\xE1bia Saudita", wikidataId: "Q851" },
  KUW: { ptArticle: "Kuwait", wikidataId: "Q817" },
  LIB: { ptArticle: "L\xEDbano", wikidataId: "Q822" },
  MAS: { ptArticle: "Mal\xE1sia", wikidataId: "Q833" },
  MGL: { ptArticle: "Mong\xF3lia", wikidataId: "Q711" },
  MYA: { ptArticle: "Mianmar", wikidataId: "Q836" },
  NEP: { ptArticle: "Nepal", wikidataId: "Q837" },
  OMA: { ptArticle: "Om\xE3", wikidataId: "Q842" },
  PAK: { ptArticle: "Paquist\xE3o", wikidataId: "Q843" },
  PHI: { ptArticle: "Filipinas", wikidataId: "Q928" },
  QAT: { ptArticle: "Catar", wikidataId: "Q846" },
  SIN: { ptArticle: "Singapura", wikidataId: "Q334" },
  SRI: { ptArticle: "Sri Lanka", wikidataId: "Q854" },
  SYR: { ptArticle: "S\xEDria", wikidataId: "Q858" },
  THA: { ptArticle: "Tail\xE2ndia", wikidataId: "Q869" },
  UAE: { ptArticle: "Emirados \xC1rabes Unidos", wikidataId: "Q878" },
  UZB: { ptArticle: "Uzbequist\xE3o", wikidataId: "Q265" },
  VIE: { ptArticle: "Vietn\xE3", wikidataId: "Q881" },
  YEM: { ptArticle: "I\xEAmen", wikidataId: "Q805" },
  // ── Europe ───────────────────────────────────────────────────────────────
  ALB: { ptArticle: "Alb\xE2nia", wikidataId: "Q222" },
  AND: { ptArticle: "Andorra", wikidataId: "Q228" },
  ARM: { ptArticle: "Arm\xE9nia", wikidataId: "Q399" },
  AUT: { ptArticle: "\xC1ustria", wikidataId: "Q40" },
  AZE: { ptArticle: "Azerbaij\xE3o", wikidataId: "Q227" },
  BEL: { ptArticle: "B\xE9lgica", wikidataId: "Q31" },
  BIH: { ptArticle: "B\xF3snia e Herzegovina", wikidataId: "Q225" },
  BLR: { ptArticle: "Bielorr\xFAssia", wikidataId: "Q184" },
  BUL: { ptArticle: "Bulg\xE1ria", wikidataId: "Q219" },
  CRO: { ptArticle: "Cro\xE1cia", wikidataId: "Q224" },
  CZE: { ptArticle: "Ch\xE9quia", wikidataId: "Q213" },
  DEN: { ptArticle: "Dinamarca", wikidataId: "Q35" },
  ENG: { ptArticle: "Inglaterra", wikidataId: "Q21" },
  ESP: { ptArticle: "Espanha", wikidataId: "Q29" },
  FIN: { ptArticle: "Finl\xE2ndia", wikidataId: "Q33" },
  FRA: { ptArticle: "Fran\xE7a", wikidataId: "Q142" },
  GEO: { ptArticle: "Ge\xF3rgia", wikidataId: "Q230" },
  GER: { ptArticle: "Alemanha", wikidataId: "Q183" },
  GRE: { ptArticle: "Gr\xE9cia", wikidataId: "Q41" },
  HUN: { ptArticle: "Hungria", wikidataId: "Q28" },
  IRL: { ptArticle: "Irlanda", wikidataId: "Q27" },
  ISL: { ptArticle: "Isl\xE2ndia", wikidataId: "Q189" },
  ITA: { ptArticle: "It\xE1lia", wikidataId: "Q38" },
  KOS: { ptArticle: "Kosovo", wikidataId: "Q1246" },
  LTU: { ptArticle: "Litu\xE2nia", wikidataId: "Q37" },
  LUX: { ptArticle: "Luxemburgo", wikidataId: "Q32" },
  LVA: { ptArticle: "Let\xF4nia", wikidataId: "Q211" },
  MKD: { ptArticle: "Maced\xF3nia do Norte", wikidataId: "Q221" },
  MNE: { ptArticle: "Montenegro", wikidataId: "Q236" },
  NED: { ptArticle: "Pa\xEDses Baixos", wikidataId: "Q55" },
  NIR: { ptArticle: "Irlanda do Norte", wikidataId: "Q26" },
  NOR: { ptArticle: "Noruega", wikidataId: "Q20" },
  POL: { ptArticle: "Pol\xF4nia", wikidataId: "Q36" },
  POR: { ptArticle: "Portugal", wikidataId: "Q45" },
  ROU: { ptArticle: "Rom\xEAnia", wikidataId: "Q218" },
  RUS: { ptArticle: "R\xFAssia", wikidataId: "Q159" },
  SCO: { ptArticle: "Esc\xF3cia", wikidataId: "Q22" },
  SRB: { ptArticle: "S\xE9rvia", wikidataId: "Q403" },
  SUI: { ptArticle: "Su\xED\xE7a", wikidataId: "Q39" },
  SVK: { ptArticle: "Eslov\xE1quia", wikidataId: "Q214" },
  SVN: { ptArticle: "Eslov\xEAnia", wikidataId: "Q215" },
  SWE: { ptArticle: "Su\xE9cia", wikidataId: "Q34" },
  TUR: { ptArticle: "Turquia", wikidataId: "Q43" },
  UKR: { ptArticle: "Ucr\xE2nia", wikidataId: "Q212" },
  WAL: { ptArticle: "Pa\xEDs de Gales", wikidataId: "Q25" },
  // ── Oceania ──────────────────────────────────────────────────────────────
  AUS: { ptArticle: "Austr\xE1lia", wikidataId: "Q408" },
  FIJ: { ptArticle: "Fiji", wikidataId: "Q712" },
  NZL: { ptArticle: "Nova Zel\xE2ndia", wikidataId: "Q664" },
  PNG: { ptArticle: "Papua-Nova Guin\xE9", wikidataId: "Q691" },
  SOL: { ptArticle: "Ilhas Salom\xE3o", wikidataId: "Q685" },
  VAN: { ptArticle: "Vanuatu", wikidataId: "Q686" }
};
var wikipediaCountries_default = WIKIPEDIA_COUNTRIES;

// src/data/teamAnalysis.json
var teamAnalysis_default = {
  IRN: "## Leitura\nO Ir\xE3 de Amir Ghalenoei come\xE7ou a Copa com um trope\xE7o: o empate em 2 a 2 com a Nova Zel\xE2ndia soou a pouco para uma sele\xE7\xE3o experiente e com qualidade ofensiva de sobra, liderada por Mehdi Taremi e Sardar Azmoun. O time mostrou poder de fogo, mas preocupou pela fragilidade defensiva. Num Grupo G completamente nivelado \u2014 as quatro sele\xE7\xF5es somam 1 ponto \u2014, os iranianos precisam de mais consist\xEAncia para n\xE3o ficar pelo caminho.\n## Desempenho\nNa estreia, o Ir\xE3 ficou no 2 a 2 com a Nova Zel\xE2ndia num jogo movimentado: o ataque funcionou, com Taremi e Azmoun como refer\xEAncias, mas a defesa vacilou e deixou escapar a vit\xF3ria. Foi um resultado abaixo do esperado diante de um advers\xE1rio teoricamente mais fraco, acendendo o alerta na comiss\xE3o t\xE9cnica iraniana.\n## N\xFAmeros\nJ1 \xB7 1 empate \xB7 2 gols marcados \xB7 2 sofridos (SG 0). O Ir\xE3 divide a lideran\xE7a do Grupo G num cen\xE1rio rar\xEDssimo em que todas as quatro sele\xE7\xF5es empataram a 1\xAA rodada e somam 1 ponto. Pela frente, dois confrontos decisivos: B\xE9lgica e Egito (27/06) \u2014 pontuar \xE9 essencial para sonhar com as oitavas.",
  GER: "## Leitura\nA Alemanha de Julian Nagelsmann \xE9 100% e lidera o Grupo E com autoridade. \xC0 goleada vistosa na estreia somou-se uma vit\xF3ria mais suada sobre a Costa do Marfim \u2014 sinal de maturidade para vencer tamb\xE9m os jogos truncados. Com um meio-campo de alt\xEDssimo n\xEDvel (Wirtz, Musiala, G\xFCndogan, Kimmich) e Deniz Undav embalado na artilharia, a tetracampe\xE3 se firma como uma das grandes for\xE7as do Mundial, com a classifica\xE7\xE3o praticamente encaminhada.\n## Desempenho\nNa estreia, a Alemanha atropelou Cura\xE7ao por 7 a 1, com um ataque irresist\xEDvel. Na sequ\xEAncia, bateu a Costa do Marfim por 2 a 1 num duelo mais equilibrado, mostrando pegada para segurar o resultado diante de um advers\xE1rio organizado. Deniz Undav desponta como artilheiro (3 gols) e Havertz (2) tamb\xE9m aparece em alta; a defesa, s\xF3lida, sofreu apenas dois gols em duas partidas.\n## N\xFAmeros\nJ2 \xB7 2 vit\xF3rias \xB7 9 gols marcados \xB7 2 sofridos. A Alemanha lidera o Grupo E com 6 pontos e o melhor saldo de toda a competi\xE7\xE3o (SG +7). Artilheiro: Deniz Undav, com 3 gols. Pr\xF3ximo desafio: Equador (25/06), j\xE1 com a vaga encaminhada.",
  BEL: "## Leitura\nA gera\xE7\xE3o de ouro belga come\xE7ou a Copa abaixo do esperado. Recheada de estrelas \u2014 De Bruyne no comando, Lukaku na frente, Doku e Trossard pelos lados \u2014, a B\xE9lgica de Rudi Garcia trope\xE7ou logo na estreia, num empate que escancarou velhos problemas de efici\xEAncia. O Grupo G ficou completamente embolado, com as quatro sele\xE7\xF5es somando 1 ponto, e a press\xE3o recai sobre os belgas: s\xE3o favoritos, mas precisam acordar r\xE1pido para n\xE3o complicar a classifica\xE7\xE3o.\n## Desempenho\nNa estreia, a B\xE9lgica ficou no 1 a 1 com o Egito, criando chances mas esbarrando na falta de capricho e numa defesa eg\xEDpcia aplicada. De Bruyne tentou municiar Lukaku, sem o brilho de outros tempos, e o time sofreu um gol que custou os dois pontos. Foi uma atua\xE7\xE3o morna para quem se considera candidato a surpreender no Mundial.\n## N\xFAmeros\nJ1 \xB7 1 empate \xB7 1 gol marcado \xB7 1 sofrido. A B\xE9lgica divide a lideran\xE7a do Grupo G num cen\xE1rio rar\xEDssimo: todas as quatro sele\xE7\xF5es empataram a 1\xAA rodada e somam 1 ponto, com saldo zero. Pr\xF3ximos desafios: Ir\xE3 (21/06) e Nova Zel\xE2ndia (27/06) \u2014 vencer \xE9 quase obrigat\xF3rio para encaminhar a vaga.",
  AUT: "## Leitura\nA \xC1ustria de Ralf Rangnick come\xE7ou a Copa fazendo o dever de casa e mostrando a intensidade que virou marca da equipe: muita press\xE3o, transi\xE7\xF5es r\xE1pidas e efici\xEAncia. A vit\xF3ria na estreia colocou os austr\xEDacos lado a lado com a Argentina na ponta do Grupo J, separados apenas pelo saldo de gols. \xC9 uma sele\xE7\xE3o organizada e perigosa, que chega embalada para o confronto direto que pode definir a lideran\xE7a.\n## Desempenho\nNa estreia, a \xC1ustria venceu a Jord\xE2nia por 3 a 1, impondo seu ritmo de jogo e levando perigo com a movimenta\xE7\xE3o ofensiva t\xEDpica do estilo Rangnick. O time sofreu um gol, mas controlou as a\xE7\xF5es e construiu o resultado com tranquilidade. O pr\xF3ximo compromisso, contra a Argentina, \xE9 o grande teste: um duelo entre duas equipes que abriram a competi\xE7\xE3o vencendo.\n## N\xFAmeros\nJ1 \xB7 1 vit\xF3ria \xB7 3 gols marcados \xB7 1 sofrido. A \xC1ustria divide a lideran\xE7a do Grupo J com a Argentina (ambas com 3 pontos), em segundo pelo saldo de gols (SG +2 contra +3). Pr\xF3ximos desafios: Argentina (22/06) e Arg\xE9lia (27/06).",
  BRA: "## Leitura\nO Brasil de Carlo Ancelotti avan\xE7a na fase de grupos com a defesa em dia, mas ainda buscando o melhor do seu ataque. Depois de um empate sem brilho na estreia, a Sele\xE7\xE3o respondeu com uma vit\xF3ria convincente e assumiu a lideran\xE7a do Grupo C pelo saldo de gols. Com Alisson seguro no gol e o trio ofensivo de Vinicius Jr, Raphinha e Rodrygo, o potencial \xE9 alto \u2014 falta o time engrenar para valer e confirmar o favoritismo nas pr\xF3ximas rodadas.\n## Desempenho\nNa estreia, o Brasil ficou no 1 a 1 com o Marrocos, num jogo travado em que faltou capricho na finaliza\xE7\xE3o. Veio ent\xE3o a rea\xE7\xE3o: 3 a 0 no Haiti, com a equipe mais solta e eficiente, controlando o jogo do in\xEDcio ao fim. O meio-campo de Bruno Guimar\xE3es e Jo\xE3o Gomes deu equil\xEDbrio, enquanto a defesa, liderada por Marquinhos, sofreu apenas o gol do Marrocos em duas partidas.\n## N\xFAmeros\nJ2 \xB7 1 vit\xF3ria \xB7 1 empate \xB7 4 gols marcados \xB7 1 sofrido \xB7 1 clean sheet. O Brasil lidera o Grupo C com 4 pontos e o melhor saldo da chave (SG +3), \xE0 frente do Marrocos pelo crit\xE9rio de gols. Pr\xF3ximo desafio: Esc\xF3cia, em 24/06.",
  MEX: "## Leitura\nO pa\xEDs-sede come\xE7ou a Copa em casa do jeito dos sonhos: 100% de aproveitamento, duas vit\xF3rias e a defesa intranspon\xEDvel. Sob o comando experiente de Javier Aguirre, o M\xE9xico juntou solidez defensiva e efici\xEAncia ofensiva para abrir a competi\xE7\xE3o na lideran\xE7a do Grupo A, com a torcida empurrando em todos os est\xE1dios. A classifica\xE7\xE3o j\xE1 est\xE1 bem encaminhada e o time joga com a confian\xE7a de quem se sente em casa.\n## Desempenho\nNa abertura do Mundial, o M\xE9xico venceu a \xC1frica do Sul por 2 a 0 com autoridade; na sequ\xEAncia, bateu a Coreia do Sul por 1 a 0 num jogo mais truncado, mostrando capacidade de segurar o resultado. Malag\xF3n pouco foi exigido no gol, a dupla de zaga Montes\u2013V\xE1squez deu seguran\xE7a, e Edson \xC1lvarez comandou o meio-campo. Na frente, Santiago Gim\xE9nez e Hirving Lozano s\xE3o os nomes de refer\xEAncia de um ataque que tem sido objetivo.\n## N\xFAmeros\nJ2 \xB7 2 vit\xF3rias \xB7 3 gols marcados \xB7 0 sofridos \xB7 2 clean sheets. O M\xE9xico lidera o Grupo A com 6 pontos e o melhor saldo da chave (SG +3), defesa ainda invicta. Pr\xF3ximo desafio: Rep\xFAblica Tcheca, em 24/06.",
  ARG: "## Leitura\nA atual campe\xE3 do mundo entrou na Copa do jeito que se esperava de uma sele\xE7\xE3o comandada por Lionel Scaloni: madura, equilibrada e mortal nos detalhes. A estreia com goleada e meta zerada sobre a Arg\xE9lia confirmou que a base de 2022 segue afiada, com Messi orquestrando e a defesa de Otamendi e Romero pouco amea\xE7ada. \xC9 candidata natural ao t\xEDtulo e larga na lideran\xE7a do Grupo J.\n## Desempenho\nNo primeiro jogo, a Argentina goleou a Arg\xE9lia por 3 a 0 com autoridade: dominou a posse, criou as melhores chances e n\xE3o deu espa\xE7o para o advers\xE1rio. Emiliano Mart\xEDnez mal trabalhou no gol, e o trio De Paul\u2013Mac Allister\u2013Enzo Fern\xE1ndez controlou o meio-campo. Messi, Lautaro e Juli\xE1n \xC1lvarez formaram um ataque de peso, dando o tom de uma campanha que come\xE7a sem sustos.\n## N\xFAmeros\nJ1 \xB7 1 vit\xF3ria \xB7 3 gols marcados \xB7 0 sofridos \xB7 clean sheet. A Argentina lidera o Grupo J com 3 pontos e o melhor saldo da chave (SG +3), \xE0 frente da \xC1ustria pelo crit\xE9rio de gols. Pr\xF3ximos desafios: \xC1ustria (22/06) e Jord\xE2nia (27/06)."
};

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
function haveMutualRemainingMatch(codeA, codeB, allMatches) {
  return allMatches.some(
    (m) => m.stageName === "Group Stage" && m.status !== "FINISHED" && (m.teamA.code === codeA && m.teamB.code === codeB || m.teamA.code === codeB && m.teamB.code === codeA)
  );
}
function cannotPossiblyFinishTop2(team2, allRows, groupRemainingMatches) {
  const n = groupRemainingMatches.length;
  const totalScenarios = 3 ** n;
  for (let scenario = 0; scenario < totalScenarios; scenario++) {
    const pts = new Map(allRows.map((r) => [r.code, r.points]));
    let s = scenario;
    for (const match of groupRemainingMatches) {
      const outcome = s % 3;
      s = Math.floor(s / 3);
      const a = match.teamA.code;
      const b = match.teamB.code;
      if (outcome === 0) pts.set(a, (pts.get(a) ?? 0) + 3);
      else if (outcome === 1) pts.set(b, (pts.get(b) ?? 0) + 3);
      else {
        pts.set(a, (pts.get(a) ?? 0) + 1);
        pts.set(b, (pts.get(b) ?? 0) + 1);
      }
    }
    const teamPts = pts.get(team2.code) ?? 0;
    const rivalsAbove = allRows.filter(
      (r) => r.code !== team2.code && (pts.get(r.code) ?? 0) > teamPts
    ).length;
    if (rivalsAbove < 2) return false;
  }
  return true;
}
function canPairReachTogether(A, B, targetPts, remaining, allMatches) {
  if (!haveMutualRemainingMatch(A.code, B.code, allMatches)) {
    return true;
  }
  const aOther = (remaining.get(A.code) ?? 0) - 1;
  const bOther = (remaining.get(B.code) ?? 0) - 1;
  if (A.points + 3 + aOther * 3 >= targetPts && B.points + 0 + bOther * 3 >= targetPts)
    return true;
  if (B.points + 3 + bOther * 3 >= targetPts && A.points + 0 + aOther * 3 >= targetPts)
    return true;
  if (A.points + 1 + aOther * 3 >= targetPts && B.points + 1 + bOther * 3 >= targetPts)
    return true;
  return false;
}
function computeGroupQualification(sortedRows, allMatches) {
  const codes = new Set(sortedRows.map((r) => r.code));
  const remaining = new Map(sortedRows.map((r) => [r.code, 0]));
  for (const m of allMatches) {
    if (m.stageName !== "Group Stage" || m.status === "FINISHED") continue;
    if (codes.has(m.teamA.code)) remaining.set(m.teamA.code, remaining.get(m.teamA.code) + 1);
    if (codes.has(m.teamB.code)) remaining.set(m.teamB.code, remaining.get(m.teamB.code) + 1);
  }
  const totalRemaining = [...remaining.values()].reduce((a, b) => a + b, 0);
  if (totalRemaining === 0) {
    return new Map(
      sortedRows.map((row, i) => [
        row.code,
        i < 2 ? "qualified" : i === 3 ? "eliminated" : "contention"
      ])
    );
  }
  const groupRemainingMatches = allMatches.filter(
    (m) => m.stageName === "Group Stage" && m.status !== "FINISHED" && codes.has(m.teamA.code) && codes.has(m.teamB.code)
  );
  const result = /* @__PURE__ */ new Map();
  for (const row of sortedRows) {
    const rivals = sortedRows.filter((r) => r.code !== row.code);
    const myPts = row.points;
    const threats = rivals.filter(
      (r) => r.points + (remaining.get(r.code) ?? 0) * 3 >= myPts
    );
    const qualified = threats.length <= 1 || !threats.some(
      (a, ai) => threats.some(
        (b, bi) => bi > ai && canPairReachTogether(a, b, myPts, remaining, allMatches)
      )
    );
    const eliminated = !qualified && cannotPossiblyFinishTop2(row, sortedRows, groupRemainingMatches);
    result.set(row.code, qualified ? "qualified" : eliminated ? "eliminated" : "contention");
  }
  return result;
}
function computeH2H(teamCode, opponents, matches) {
  let points = 0, gd = 0, gf = 0;
  for (const match of matches) {
    if (match.stageName !== "Group Stage") continue;
    if (match.status !== "LIVE" && match.status !== "FINISHED") continue;
    if (!match.score) continue;
    let scored, conceded;
    if (match.teamA.code === teamCode && opponents.has(match.teamB.code)) {
      scored = match.score.teamA;
      conceded = match.score.teamB;
    } else if (match.teamB.code === teamCode && opponents.has(match.teamA.code)) {
      scored = match.score.teamB;
      conceded = match.score.teamA;
    } else {
      continue;
    }
    gf += scored;
    gd += scored - conceded;
    if (scored > conceded) points += POINTS_FOR_WIN;
    else if (scored === conceded) points += POINTS_FOR_DRAW;
  }
  return { points, gd, gf };
}
function cmpH2H(a, b) {
  return b.points - a.points || b.gd - a.gd || b.gf - a.gf;
}
function sortByOverall(rows) {
  return [...rows].sort(
    (a, b) => b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor
  );
}
function sortSubcluster(rows, matches) {
  if (rows.length === 1) return rows;
  const codes = new Set(rows.map((r) => r.code));
  const h2h = new Map(
    rows.map((r) => [
      r.code,
      computeH2H(r.code, new Set([...codes].filter((c) => c !== r.code)), matches)
    ])
  );
  const sorted = [...rows].sort((a, b) => cmpH2H(h2h.get(a.code), h2h.get(b.code)));
  const result = [];
  let i = 0;
  while (i < sorted.length) {
    const ha = h2h.get(sorted[i].code);
    let j = i + 1;
    while (j < sorted.length && cmpH2H(h2h.get(sorted[j].code), ha) === 0) j++;
    const sub = sorted.slice(i, j);
    result.push(...sub.length === 1 ? sub : sortByOverall(sub));
    i = j;
  }
  return result;
}
function sortTiedCluster(rows, matches) {
  if (rows.length === 1) return rows;
  const codes = new Set(rows.map((r) => r.code));
  const h2h = new Map(
    rows.map((r) => [
      r.code,
      computeH2H(r.code, new Set([...codes].filter((c) => c !== r.code)), matches)
    ])
  );
  const sorted = [...rows].sort((a, b) => cmpH2H(h2h.get(a.code), h2h.get(b.code)));
  const result = [];
  let i = 0;
  while (i < sorted.length) {
    const ha = h2h.get(sorted[i].code);
    let j = i + 1;
    while (j < sorted.length && cmpH2H(h2h.get(sorted[j].code), ha) === 0) j++;
    const cluster = sorted.slice(i, j);
    if (cluster.length === 1) {
      result.push(cluster[0]);
    } else if (cluster.length < rows.length) {
      result.push(...sortSubcluster(cluster, matches));
    } else {
      result.push(...sortByOverall(cluster));
    }
    i = j;
  }
  return result;
}
function sortGroupTable(rows, matches) {
  const byPoints = [...rows].sort((a, b) => b.points - a.points);
  const result = [];
  let i = 0;
  while (i < byPoints.length) {
    let j = i + 1;
    while (j < byPoints.length && byPoints[j].points === byPoints[i].points) j++;
    const cluster = byPoints.slice(i, j);
    result.push(...cluster.length === 1 ? cluster : sortTiedCluster(cluster, matches));
    i = j;
  }
  return result;
}
function groupStandings(rows, matches = APP_MATCHES) {
  const byGroup = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const existing = byGroup.get(row.group);
    if (existing) existing.push(row);
    else byGroup.set(row.group, [row]);
  }
  return Array.from(byGroup.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([group, groupRows]) => {
    const sortedRows = sortGroupTable(groupRows, matches);
    return {
      group,
      rows: sortedRows,
      qualification: computeGroupQualification(sortedRows, matches)
    };
  });
}

// server.ts
var TEAM_ANALYSIS_BY_CODE = teamAnalysis_default;
import_dotenv.default.config();
var APP_VERSION = (() => {
  try {
    return JSON.parse((0, import_node_fs.readFileSync)("package.json", "utf8")).version;
  } catch {
    return process.env.npm_package_version ?? "unknown";
  }
})();
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
var WIKIPEDIA_API_BASE = "https://pt.wikipedia.org/api/rest_v1";
var WIKIDATA_API_BASE = "https://www.wikidata.org/w/api.php";
var COUNTRY_INFO_CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
var WIKIPEDIA_USER_AGENT = "agora-na-copa-2026 (https://github.com/mpbarbosa/agora_na_copa_2026)";
var GOOGLE_TRENDS_CACHE_TTL_MS = 20 * 60 * 1e3;
var APP_MATCHES_BY_ID = new Map(APP_MATCHES.map((match) => [match.id, match]));
var GOAL_INCIDENT_SUFFIX = " marcou.";
var YELLOW_CARD_INCIDENT_SUFFIX = " recebeu amarelo.";
var RED_CARD_INCIDENT_SUFFIX = " foi expulso.";
app.set("trust proxy", 1);
app.use(import_express.default.json());
app.use((req, res, next) => {
  if (req.path.startsWith("/assets/") || req.path === "/favicon.ico") return next();
  const start = Date.now();
  res.on("finish", () => {
    const ms = Date.now() - start;
    const ip = req.ip ?? req.socket.remoteAddress ?? "-";
    const ref = req.get("referer") ?? "-";
    console.log(`[access] ${req.method} ${req.path} ${res.statusCode} ${ms}ms ip=${ip} ref=${ref}`);
  });
  next();
});
var TRIVIA_QUESTIONS = triviaQuestions;
var broadcastGuideCache = null;
var matchStatesCache = null;
var teamLineupsCache = null;
var countryInfoCache = /* @__PURE__ */ new Map();
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
var buildPlayerLeaderKey = (teamCode, playerName) => `${teamCode}:${normalizeText2(playerName)}`;
var isNumericFifaId = (id) => id !== void 0 && /^\d+$/.test(id);
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
      position: player.position,
      club: player.club,
      socials: player.socials,
      pictureUrl: player.pictureUrl,
      instagramPostUrl: player.instagramPostUrl
    });
    return;
  }
  metadataByPlayerKey.set(playerKey, {
    name: current.name || player.name,
    shirtNumber: current.shirtNumber ?? player.number,
    position: current.position ?? player.position,
    club: current.club ?? player.club,
    socials: current.socials ?? player.socials,
    pictureUrl: current.pictureUrl ?? player.pictureUrl,
    instagramPostUrl: current.instagramPostUrl ?? player.instagramPostUrl
  });
};
var buildPlayerLeaderMetadataMap = (lineupsPayload) => {
  const metadataByPlayerKey = /* @__PURE__ */ new Map();
  const playerKeyByFifaId = /* @__PURE__ */ new Map();
  APP_MATCHES.forEach((match) => {
    const lineupEntry = lineupsPayload.lineups[match.id];
    const teamALineup = lineupEntry?.teamA.players ?? match.teamA.lineup;
    const teamBLineup = lineupEntry?.teamB.players ?? match.teamB.lineup;
    const enrich = (teamCode, player) => {
      const entry = resolvePlayerEntry(teamCode, player.name, player.number, player.fifaId);
      upsertPlayerLeaderMetadata(metadataByPlayerKey, teamCode, {
        ...player,
        club: player.club ?? entry?.club,
        socials: player.socials ?? entry?.socials,
        pictureUrl: player.pictureUrl ?? entry?.pictureUrl,
        instagramPostUrl: player.instagramPostUrl ?? entry?.instagramPostUrl
      });
      const fifaId = player.fifaId ?? (isNumericFifaId(player.id) ? player.id : void 0);
      if (fifaId) {
        playerKeyByFifaId.set(`${teamCode}:${fifaId}`, buildPlayerLeaderKey(teamCode, player.name));
      }
    };
    teamALineup.forEach((player) => enrich(match.teamA.code, player));
    teamBLineup.forEach((player) => enrich(match.teamB.code, player));
  });
  return { metadataByPlayerKey, playerKeyByFifaId };
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
  const { metadataByPlayerKey, playerKeyByFifaId } = buildPlayerLeaderMetadataMap(lineupsPayload);
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
      const incidentFifaId = incident.playerMentions?.[0]?.id;
      let metadata = incidentFifaId ? metadataByPlayerKey.get(playerKeyByFifaId.get(`${team2.code}:${incidentFifaId}`) ?? "") : void 0;
      if (!metadata) {
        metadata = metadataByPlayerKey.get(buildPlayerLeaderKey(team2.code, playerName));
      }
      if (!metadata) {
        const shirtNumber = incident.playerMentions?.[0]?.number;
        if (shirtNumber !== void 0) {
          const lineupPlayer = team2.lineup.find((p) => p.number === shirtNumber);
          if (lineupPlayer) {
            metadata = metadataByPlayerKey.get(buildPlayerLeaderKey(team2.code, lineupPlayer.name));
          }
        }
      }
      const canonicalKey = metadata ? buildPlayerLeaderKey(team2.code, metadata.name) : buildPlayerLeaderKey(team2.code, playerName);
      const current = playerLeaders.get(canonicalKey) ?? {
        id: `${team2.code.toLowerCase()}-${normalizeText2(metadata?.name ?? playerName).toLowerCase()}`,
        name: metadata?.name ?? playerName,
        teamCode: team2.code,
        teamName: team2.name,
        teamFlagSvg: team2.flagSvg,
        teamPrimaryColor: team2.primaryColor,
        teamSecondaryColor: team2.secondaryColor,
        shirtNumber: metadata?.shirtNumber,
        position: metadata?.position,
        club: metadata?.club,
        socials: metadata?.socials,
        pictureUrl: metadata?.pictureUrl,
        instagramPostUrl: metadata?.instagramPostUrl,
        goals: 0,
        yellowCards: 0,
        redCards: 0
      };
      if (incident.type === "GOAL") current.goals += 1;
      if (incident.type === "YELLOW_CARD") current.yellowCards += 1;
      if (incident.type === "RED_CARD") current.redCards += 1;
      playerLeaders.set(canonicalKey, current);
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
var resolveMentionToCanonicalKey = (mention, teamCode, teamLineup, metadataByPlayerKey, playerKeyByFifaId) => {
  if (isNumericFifaId(mention.id)) {
    const key = playerKeyByFifaId.get(`${teamCode}:${mention.id}`);
    if (key) return key;
  }
  if (mention.name) {
    const key = buildPlayerLeaderKey(teamCode, mention.name);
    if (metadataByPlayerKey.has(key)) return key;
  }
  if (mention.number !== void 0) {
    const lineupPlayer = teamLineup.find((p) => p.number === mention.number);
    if (lineupPlayer) {
      const key = buildPlayerLeaderKey(teamCode, lineupPlayer.name);
      if (metadataByPlayerKey.has(key)) return key;
    }
  }
  return mention.name ? buildPlayerLeaderKey(teamCode, mention.name) : "";
};
var aggregatePlayerIncidents = async (teamCode, rawPlayerName, language) => {
  const [matchStatesPayload, lineupsPayload] = await Promise.all([
    getMatchStatesPayload(language),
    getTeamLineupsPayload(language)
  ]);
  const { metadataByPlayerKey, playerKeyByFifaId } = buildPlayerLeaderMetadataMap(lineupsPayload);
  const targetKey = buildPlayerLeaderKey(teamCode, rawPlayerName);
  const metadata = metadataByPlayerKey.get(targetKey);
  if (!metadata) return null;
  const teamMatch = APP_MATCHES.find(
    (m) => m.teamA.code === teamCode || m.teamB.code === teamCode
  );
  const teamName = teamMatch ? teamMatch.teamA.code === teamCode ? teamMatch.teamA.name : teamMatch.teamB.name : teamCode;
  const teamFlagSvg = teamMatch ? teamMatch.teamA.code === teamCode ? teamMatch.teamA.flagSvg : teamMatch.teamB.flagSvg : "";
  const incidents = [];
  let latestUpdatedAt = "";
  APP_MATCHES.forEach((match) => {
    const state = matchStatesPayload.states[match.id];
    if (!state?.incidents?.length) return;
    const isTeamA = match.teamA.code === teamCode;
    const isTeamB = match.teamB.code === teamCode;
    if (!isTeamA && !isTeamB) return;
    const teamSide = isTeamA ? "A" : "B";
    const teamInMatch = isTeamA ? match.teamA : match.teamB;
    state.incidents.forEach((incident) => {
      if (incident.team !== teamSide) return;
      (incident.playerMentions ?? []).forEach((mention, mentionIndex) => {
        const resolvedKey = resolveMentionToCanonicalKey(
          mention,
          teamCode,
          teamInMatch.lineup,
          metadataByPlayerKey,
          playerKeyByFifaId
        );
        if (resolvedKey !== targetKey) return;
        incidents.push({
          matchId: match.id,
          matchLabel: `${match.teamA.name} vs ${match.teamB.name}`,
          kickoffTimestamp: match.kickoffTimestamp,
          minute: incident.time,
          type: incident.type,
          ...incident.type === "SUBSTITUTION" && {
            role: mentionIndex === 0 ? "off" : "on"
          }
        });
      });
      if (state.updatedAt > latestUpdatedAt) latestUpdatedAt = state.updatedAt;
    });
  });
  const resolvedSource = resolveTournamentLeadersSource(matchStatesPayload.states);
  incidents.sort((a, b) => {
    const tsDiff = a.kickoffTimestamp.localeCompare(b.kickoffTimestamp);
    if (tsDiff !== 0) return tsDiff;
    return (parseInt(a.minute) || 0) - (parseInt(b.minute) || 0);
  });
  return {
    player: {
      name: metadata.name,
      teamCode,
      teamName,
      teamFlagSvg,
      shirtNumber: metadata.shirtNumber,
      position: metadata.position,
      pictureUrl: metadata.pictureUrl
    },
    incidents,
    summary: {
      goals: incidents.filter((i) => i.type === "GOAL").length,
      yellowCards: incidents.filter((i) => i.type === "YELLOW_CARD").length,
      redCards: incidents.filter((i) => i.type === "RED_CARD").length,
      substitutionsOff: incidents.filter((i) => i.type === "SUBSTITUTION" && i.role === "off").length,
      substitutionsOn: incidents.filter((i) => i.type === "SUBSTITUTION" && i.role === "on").length
    },
    source: resolvedSource,
    note: resolvedSource === "fallback" ? "Incidentes a partir de dados locais (FIFA indispon\xEDvel)." : "Incidentes sincronizados com a FIFA.",
    updatedAt: latestUpdatedAt || (/* @__PURE__ */ new Date()).toISOString()
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
var buildFallbackLineupEntry = (players, teamCode) => ({
  // Enrich the local lineup from the squad registry so editorial/profile fields
  // (worldCupNote, instagramPostUrl, socials, picture, metadata) reach the player
  // card even when no live FIFA lineup is available (finished/upcoming matches).
  players: players.map((player) => {
    const entry = resolvePlayerEntry(teamCode, player.name, player.number, player.fifaId);
    if (!entry) return player;
    return {
      ...player,
      club: player.club ?? entry.club,
      pictureUrl: player.pictureUrl ?? entry.pictureUrl,
      socials: player.socials ?? entry.socials,
      instagramPostUrl: player.instagramPostUrl ?? entry.instagramPostUrl,
      worldCupNote: player.worldCupNote ?? entry.worldCupNote,
      fullName: player.fullName ?? entry.fullName,
      dateOfBirth: player.dateOfBirth ?? entry.dateOfBirth,
      height: player.height ?? entry.height,
      fifaId: player.fifaId ?? entry.fifaId
    };
  }),
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
  const matchHistory = teamMatches.map(
    (reference) => buildTeamViewMatchSummary(
      reference,
      matchStatesPayload.states[reference.match.id],
      broadcastGuidePayload.guides[reference.match.id]
    )
  );
  const lineupReference = currentMatchReference ?? nextMatchReference ?? lastMatchReference ?? teamMatches[0] ?? null;
  const lineup = lineupReference ? lineupReference.isTeamA ? teamLineupsPayload.lineups[lineupReference.match.id]?.teamA ?? buildFallbackLineupEntry(lineupReference.team.lineup, lineupReference.team.code) : teamLineupsPayload.lineups[lineupReference.match.id]?.teamB ?? buildFallbackLineupEntry(lineupReference.team.lineup, lineupReference.team.code) : null;
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
    matchHistory,
    teamAnalysis: TEAM_ANALYSIS_BY_CODE[normalizedTeamCode] ?? null,
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
app.get("/api/player-stats/:teamCode/:playerName", async (req, res) => {
  try {
    const teamCode = req.params.teamCode.toUpperCase();
    const playerName = req.params.playerName;
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    const aggregated = await aggregateTournamentLeaders(language);
    const normalizedPlayerName = normalizeText2(playerName);
    const leader = aggregated.playerLeaders.find(
      (p) => p.teamCode === teamCode && normalizeText2(p.name) === normalizedPlayerName
    );
    if (!leader) {
      res.status(404).json({ error: "Jogador n\xE3o encontrado nos l\xEDderes do torneio" });
      return;
    }
    const payload = {
      goals: leader.goals,
      yellowCards: leader.yellowCards,
      redCards: leader.redCards,
      source: aggregated.source,
      note: aggregated.note,
      updatedAt: aggregated.updatedAt
    };
    res.set("Cache-Control", "no-store");
    res.json(payload);
  } catch (error) {
    console.error("FIFA API Error in /api/player-stats:", error);
    const fallback = {
      goals: 0,
      yellowCards: 0,
      redCards: 0,
      source: "fallback",
      note: "Estat\xEDsticas indispon\xEDveis \u2014 FIFA API inacess\xEDvel.",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    res.json(fallback);
  }
});
app.get("/api/player-incidents/:teamCode/:playerName", async (req, res) => {
  try {
    const teamCode = req.params.teamCode.toUpperCase();
    const playerName = req.params.playerName;
    const language = typeof req.query.language === "string" && req.query.language.trim() ? req.query.language.trim() : DEFAULT_BROADCAST_LANGUAGE;
    const payload = await aggregatePlayerIncidents(teamCode, playerName, language);
    if (!payload) {
      res.status(404).json({ error: "Jogador n\xE3o encontrado" });
      return;
    }
    res.set("Cache-Control", "no-store");
    res.json(payload);
  } catch (error) {
    console.error("FIFA API Error in /api/player-incidents:", error);
    const fallback = {
      player: {
        name: req.params.playerName,
        teamCode: req.params.teamCode.toUpperCase(),
        teamName: req.params.teamCode.toUpperCase(),
        teamFlagSvg: req.params.teamCode.toLowerCase()
      },
      incidents: [],
      summary: { goals: 0, yellowCards: 0, redCards: 0, substitutionsOff: 0, substitutionsOn: 0 },
      source: "fallback",
      note: "Incidentes indispon\xEDveis \u2014 FIFA API inacess\xEDvel.",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    res.json(fallback);
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
async function fetchCountryInfo(code) {
  const entry = wikipediaCountries_default[code.toUpperCase()];
  if (!entry) return null;
  const cached = countryInfoCache.get(code);
  if (cached && cached.expiresAt > Date.now()) return cached.payload;
  const { ptArticle, wikidataId } = entry;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const encodedTitle = encodeURIComponent(ptArticle);
  const summaryUrl = `${WIKIPEDIA_API_BASE}/page/summary/${encodedTitle}`;
  const summaryRes = await fetch(summaryUrl, {
    headers: { "User-Agent": WIKIPEDIA_USER_AGENT }
  });
  if (!summaryRes.ok) {
    return {
      code,
      description: "",
      extract: "",
      thumbnailUrl: null,
      flagSvgUrl: null,
      wikipediaUrl: `https://pt.wikipedia.org/wiki/${encodedTitle}`,
      population: null,
      areaSqKm: null,
      capital: null,
      language: null,
      government: null,
      currency: null,
      source: "fallback",
      note: "Informa\xE7\xF5es indispon\xEDveis \u2014 Wikipedia inacess\xEDvel.",
      updatedAt: now
    };
  }
  const summary = await summaryRes.json();
  const svgFromThumb = (url) => {
    if (!url) return null;
    const m = url.match(
      /^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/thumb\/([^/]+\/[^/]+\/[^/]+\.svg)\//
    );
    return m ? `${m[1]}/${m[2]}` : null;
  };
  const flagSvgUrl = svgFromThumb(summary.originalimage?.source) ?? svgFromThumb(summary.thumbnail?.source);
  const wdUrl = `${WIKIDATA_API_BASE}?action=wbgetentities&ids=${wikidataId}&languages=pt&props=claims&format=json`;
  const wdRes = await fetch(wdUrl, {
    headers: { "User-Agent": WIKIPEDIA_USER_AGENT }
  });
  let population = null;
  let areaSqKm = null;
  let capitalQid = null;
  let languageQids = [];
  let governmentQid = null;
  let currencyQid = null;
  const activeClaim = (arr) => arr.find((c) => c.rank === "preferred") ?? arr.find((c) => !c.qualifiers?.["P582"]) ?? arr.at(-1);
  const qidOf = (claim) => claim?.mainsnak?.datavalue?.value?.id ?? null;
  if (wdRes.ok) {
    const wd = await wdRes.json();
    const claims = wd.entities?.[wikidataId]?.claims ?? {};
    const popClaims = claims["P1082"] ?? [];
    const popAmount = (popClaims.find((c) => c.rank === "preferred") ?? popClaims.at(-1))?.mainsnak?.datavalue?.value?.amount;
    if (popAmount) population = Math.abs(parseInt(popAmount, 10));
    const areaAmount = claims["P2046"]?.[0]?.mainsnak?.datavalue?.value?.amount;
    if (areaAmount) areaSqKm = Math.abs(parseFloat(areaAmount));
    capitalQid = qidOf(activeClaim(claims["P36"] ?? []));
    const langClaims = claims["P37"] ?? [];
    const preferredLangs = langClaims.filter((c) => c.rank === "preferred");
    const activeLangs = preferredLangs.length > 0 ? preferredLangs : langClaims.filter((c) => !c.qualifiers?.["P582"]);
    languageQids = activeLangs.slice(0, 3).map(qidOf).filter(Boolean);
    governmentQid = qidOf(activeClaim(claims["P122"] ?? []));
    currencyQid = qidOf(activeClaim(claims["P38"] ?? []));
  }
  const allQids = [...new Set(
    [capitalQid, ...languageQids, governmentQid, currencyQid].filter(Boolean)
  )];
  let capital = null;
  let language = null;
  let government = null;
  let currency = null;
  if (allQids.length > 0) {
    const labelsUrl = `${WIKIDATA_API_BASE}?action=wbgetentities&ids=${allQids.join("|")}&languages=pt%7Cen&props=labels&format=json`;
    const labelsRes = await fetch(labelsUrl, {
      headers: { "User-Agent": WIKIPEDIA_USER_AGENT }
    });
    if (labelsRes.ok) {
      const labelsData = await labelsRes.json();
      const labelOf = (qid) => {
        if (!qid) return null;
        const labels = labelsData.entities?.[qid]?.labels;
        return labels?.["pt"]?.value ?? labels?.["en"]?.value ?? null;
      };
      capital = labelOf(capitalQid);
      language = languageQids.map(labelOf).filter(Boolean).join(" / ") || null;
      government = labelOf(governmentQid);
      currency = labelOf(currencyQid);
    }
  }
  const payload = {
    code,
    description: summary.description ?? "",
    extract: summary.extract ?? "",
    thumbnailUrl: summary.thumbnail?.source ?? null,
    flagSvgUrl,
    wikipediaUrl: summary.content_urls?.desktop?.page ?? `https://pt.wikipedia.org/wiki/${encodedTitle}`,
    population,
    areaSqKm: areaSqKm ? Math.round(areaSqKm) : null,
    capital,
    language,
    government,
    currency,
    source: "wikipedia",
    note: "Dados da Wikipedia e Wikidata.",
    updatedAt: now
  };
  countryInfoCache.set(code, {
    expiresAt: Date.now() + COUNTRY_INFO_CACHE_TTL_MS,
    payload
  });
  return payload;
}
app.get("/api/country-info/:code", async (req, res) => {
  const code = req.params.code.toUpperCase();
  try {
    const payload = await fetchCountryInfo(code);
    if (!payload) {
      res.status(404).json({ error: "Pa\xEDs n\xE3o encontrado" });
      return;
    }
    res.set("Cache-Control", "public, max-age=3600");
    res.json(payload);
  } catch (error) {
    console.error("Wikipedia API Error in /api/country-info:", error);
    const stale = countryInfoCache.get(code);
    if (stale) {
      res.set("Cache-Control", "public, max-age=3600");
      res.json({ ...stale.payload, source: "fallback", note: "Usando dados em cache \u2014 Wikipedia inacess\xEDvel." });
      return;
    }
    const fallback = {
      code,
      description: "",
      extract: "",
      thumbnailUrl: null,
      flagSvgUrl: null,
      wikipediaUrl: "",
      population: null,
      areaSqKm: null,
      capital: null,
      language: null,
      government: null,
      currency: null,
      source: "fallback",
      note: "Informa\xE7\xF5es indispon\xEDveis \u2014 Wikipedia inacess\xEDvel.",
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    res.json(fallback);
  }
});
var googleTrendsCache = null;
var GOOGLE_TRENDS_FETCH_TIMEOUT_MS = 6e3;
var fetchGoogleTrends = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GOOGLE_TRENDS_FETCH_TIMEOUT_MS);
  let response;
  try {
    response = await fetch(GOOGLE_TRENDS_BATCH_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: buildGoogleTrendsRequestBody("BR", 24)
    });
  } finally {
    clearTimeout(timeout);
  }
  if (!response.ok) {
    throw new Error(`Google Trends request failed (${response.status})`);
  }
  const raw = await response.text();
  const topics = parseGoogleTrendsBatch(raw, 12);
  if (topics.length === 0) {
    throw new Error("Google Trends returned no topics");
  }
  return {
    source: "google-trends",
    note: "Buscas em alta no Brasil \u2022 Google Trends",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    topics
  };
};
var googleTrendsRefreshing = false;
var refreshGoogleTrendsCache = async () => {
  if (googleTrendsRefreshing) return;
  googleTrendsRefreshing = true;
  try {
    const payload = await fetchGoogleTrends();
    googleTrendsCache = { payload, expiresAt: Date.now() + GOOGLE_TRENDS_CACHE_TTL_MS };
  } catch (error) {
    console.error("Google Trends background refresh failed:", error);
  } finally {
    googleTrendsRefreshing = false;
  }
};
app.get("/api/google-trends", (_req, res) => {
  if (googleTrendsCache && googleTrendsCache.expiresAt > Date.now()) {
    res.set("Cache-Control", "public, max-age=600");
    res.json(googleTrendsCache.payload);
    return;
  }
  void refreshGoogleTrendsCache();
  if (googleTrendsCache) {
    res.set("Cache-Control", "public, max-age=60");
    res.json({
      ...googleTrendsCache.payload,
      source: "fallback",
      note: "Atualizando tend\xEAncias do Google\u2026"
    });
    return;
  }
  res.set("Cache-Control", "public, max-age=60");
  res.json({
    source: "fallback",
    note: "Tend\xEAncias indispon\xEDveis no momento.",
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    topics: []
  });
});
void refreshGoogleTrendsCache();
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
app.get("/api/health", (_req, res) => {
  const mem = process.memoryUsage();
  res.set("Cache-Control", "no-store");
  res.json({
    status: "ok",
    version: APP_VERSION,
    uptime: Math.round(process.uptime()),
    load: import_node_os.default.loadavg(),
    memory: {
      rss: mem.rss,
      heapUsed: mem.heapUsed,
      heapTotal: mem.heapTotal,
      external: mem.external
    },
    system: {
      freeMem: import_node_os.default.freemem(),
      totalMem: import_node_os.default.totalmem()
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
