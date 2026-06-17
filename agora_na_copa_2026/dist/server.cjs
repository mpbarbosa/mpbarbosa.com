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

// src/data/squads.json
var squads_default = {
  "229397": {
    fifaId: "229397",
    teamCode: "ARG",
    name: "Leo Messi",
    number: 10,
    position: "FW",
    club: "Inter Miami",
    pictureUrl: "https://digitalhub.fifa.com/transform/19823774-fac0-485a-8a8f-572e7324c6c2/MESSI-Lionel_229397",
    socials: {
      instagram: "https://instagram.com/leomessi"
    }
  },
  "261367": {
    fifaId: "261367",
    teamCode: "NZL",
    name: "Michael Boxall",
    number: 5,
    position: "DF",
    club: "Minnesota United",
    pictureUrl: "https://digitalhub.fifa.com/transform/e4d41670-878d-4717-b07c-84d09a5f6938/BOXALL-Michael_261367"
  },
  "274078": {
    fifaId: "274078",
    teamCode: "NZL",
    name: "Chris Wood",
    number: 9,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/431bf921-6e73-469f-87bd-3fb2c010966e/WOOD-Chris_274078"
  },
  "275917": {
    fifaId: "275917",
    teamCode: "HAI",
    name: "R. Ad\xE9",
    number: 4,
    position: "DF",
    club: "LDU Quito",
    pictureUrl: "https://digitalhub.fifa.com/transform/188e1d63-5bfa-450a-b202-730221c18fe1/ADE-Ricardo_275917"
  },
  "295922": {
    fifaId: "295922",
    teamCode: "HAI",
    name: "J. Placide",
    number: 1,
    position: "GK",
    club: "Bastia",
    pictureUrl: "https://digitalhub.fifa.com/transform/3b4c1123-62c6-4267-9d22-6d138e461a54/PLACIDE-Johny_295922"
  },
  "300409": {
    fifaId: "300409",
    teamCode: "BIH",
    name: "E. D\u017Eeko",
    number: 17,
    position: "FW",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5fa7216-27c0-4652-b7df-b099e97a5604/DZEKO-Edin_300409"
  },
  "307849": {
    fifaId: "307849",
    teamCode: "KOR",
    name: "Son Heung-min",
    number: 7,
    position: "FW",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/f9694bf1-eb42-4d26-9503-e988bd32a435/SON-Heungmin_307849"
  },
  "308322": {
    fifaId: "308322",
    teamCode: "ARG",
    name: "Tagliafico",
    number: 3,
    position: "DF",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/dd4d5f75-b3d4-4ff2-81bf-c16bf0b0a061/TAGLIAFICO-Nicolas_308322"
  },
  "310116": {
    fifaId: "310116",
    teamCode: "ARG",
    name: "Otamendi",
    number: 19,
    position: "DF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/4aedbffa-a35c-4aa5-a7ce-8a29c2af3e72/OTAMENDI-Nicolas_310116"
  },
  "331463": {
    fifaId: "331463",
    teamCode: "NZL",
    name: "Tim Payne",
    number: 2,
    position: "DF",
    club: "Wellington Phoenix",
    pictureUrl: "https://digitalhub.fifa.com/transform/2fd43bf7-76f0-4733-88d4-5d5ca820e91c/PAYNE-Tim_331463"
  },
  "331732": {
    fifaId: "331732",
    teamCode: "CAN",
    name: "M. Cr\xE9peau",
    number: 1,
    position: "GK",
    club: "LAFC",
    pictureUrl: "https://digitalhub.fifa.com/transform/c4570ca7-10a7-44ca-901d-fee1e11e4400/CREPEAU-Maxime_331732"
  },
  "335999": {
    fifaId: "335999",
    teamCode: "ESP",
    name: "Aymeric Laporte",
    number: 14,
    position: "DF",
    club: "Al-Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/e923ca38-381d-4187-9d40-9f5f72434530/LAPORTE-Aymeric_335999"
  },
  "336088": {
    fifaId: "336088",
    teamCode: "NED",
    name: "N. Ak\xE9",
    number: 5,
    position: "DF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/e44b0c79-cb0b-4ce8-bace-7530a516371f/AKE-Nathan_336088"
  },
  "336098": {
    fifaId: "336098",
    teamCode: "NED",
    name: "M. Depay",
    number: 10,
    position: "FW",
    club: "Corinthians",
    pictureUrl: "https://digitalhub.fifa.com/transform/6fe9f49e-5f45-4a44-9807-579be23fc0db/DEPAY-Memphis_336098"
  },
  "337389": {
    fifaId: "337389",
    teamCode: "SCO",
    name: "A. Ralston",
    number: 2,
    position: "DF",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/eef7a9cc-256c-4000-ae64-38407521d30b/RALSTON-Anthony_337389"
  },
  "339117": {
    fifaId: "339117",
    teamCode: "AUS",
    name: "M. Ryan",
    number: 1,
    position: "GK",
    club: "AZ Alkmaar",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c98d5eb-1514-4e8f-a6c6-60f4017b2175/RYAN-Mathew_339117"
  },
  "339510": {
    fifaId: "339510",
    teamCode: "USA",
    name: "T. Ream",
    number: 13,
    position: "DF",
    club: "Charlotte FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/964be907-1e8e-49ec-bd7f-7085cf7d79d3/REAM-Tim_339510"
  },
  "339745": {
    fifaId: "339745",
    teamCode: "KSA",
    name: "Salem Al-Dawsari",
    number: 10,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/d167ee25-02d4-48c1-b6bf-ec1eea3a1633/SALEM-ALDAWSARI_339745"
  },
  "339820": {
    fifaId: "339820",
    teamCode: "SEN",
    name: "K. Koulibaly",
    number: 3,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/538bee26-1d47-4a95-a0f0-5d706f741e07/KOULIBALY-Kalidou_339820"
  },
  "344654": {
    fifaId: "344654",
    teamCode: "EGY",
    name: "Mohamed Salah",
    number: 10,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d5236b8-acac-4946-af8e-5b007bcfa284/MOHAMED-SALAH_344654"
  },
  "344661": {
    fifaId: "344661",
    teamCode: "EGY",
    name: "Ramy Rabia",
    number: 5,
    position: "DF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/403c9e6d-efe6-4917-86ea-c7eddc442208/RABIA-Ramy_344661"
  },
  "346743": {
    fifaId: "346743",
    teamCode: "IRN",
    name: "Shoja Khalilzadeh",
    number: 5,
    position: "DF",
    club: "Tractor",
    pictureUrl: "https://digitalhub.fifa.com/transform/509a4e4e-b242-4488-a334-84faac974457/KHALILZADEH-Shoja_346743"
  },
  "347085": {
    fifaId: "347085",
    teamCode: "IRQ",
    name: "J. Hassan",
    number: 12,
    position: "GK",
    pictureUrl: "https://digitalhub.fifa.com/transform/a7f7a32a-4968-462b-9c34-e8a0d0530b99/JALAL-HASSAN_347085"
  },
  "355775": {
    fifaId: "355775",
    teamCode: "AUS",
    name: "J. Irvine",
    number: 22,
    position: "MF",
    club: "St. Pauli",
    pictureUrl: "https://digitalhub.fifa.com/transform/7726492b-0996-47a2-aafd-bd362844d9df/IRVINE-Jackson_355775"
  },
  "356956": {
    fifaId: "356956",
    teamCode: "MAR",
    name: "Y. Bounou",
    number: 1,
    position: "GK",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/338ae8a7-8734-423e-ae54-2f783dba77ce/BOUNOU-Yassine_356956"
  },
  "358112": {
    fifaId: "358112",
    teamCode: "BEL",
    name: "Romelu Lukaku",
    number: 10,
    position: "FW",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/302b7fb7-6964-4a52-8db4-9c12778b80fa/LUKAKU-Romelu_358112"
  },
  "358120": {
    fifaId: "358120",
    teamCode: "BEL",
    name: "Kevin De Bruyne",
    number: 7,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/41fb7de3-9f9e-44f1-b63f-0551f5d33b2b/DE-BRUYNE-Kevin_358120"
  },
  "360498": {
    fifaId: "360498",
    teamCode: "TUR",
    name: "M. G\xFCnok",
    number: 1,
    position: "GK",
    club: "Be\u015Fikta\u015F",
    pictureUrl: "https://digitalhub.fifa.com/transform/1ce10157-fad1-435e-b21d-b4f25a483bc1/GUNOK-Mert_360498"
  },
  "363863": {
    fifaId: "363863",
    teamCode: "EGY",
    name: "Mahmoud Tr\xE9z\xE9guet",
    number: 7,
    position: "FW",
    club: "Trabzonspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/fd2622c8-9bd4-40f0-bb16-6b3311bb1811/TREZEGUET_363863"
  },
  "364752": {
    fifaId: "364752",
    teamCode: "CPV",
    name: "Vozinha",
    number: 1,
    position: "GK",
    club: "Gil Vicente",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8286230-b161-484e-87a9-ce5a20e6f7d1/VOZINHA_364752",
    socials: {
      instagram: "https://instagram.com/vozinha1"
    }
  },
  "368535": {
    fifaId: "368535",
    teamCode: "NZL",
    name: "Max Crocombe",
    number: 1,
    position: "GK",
    club: "Burton Albion",
    pictureUrl: "https://digitalhub.fifa.com/transform/0d8fc4f9-7330-4eaa-bbf0-7dfccbec09db/CROCOMBE-Max_368535"
  },
  "368655": {
    fifaId: "368655",
    teamCode: "URU",
    name: "Jos\xE9 Mar\xEDa Gim\xE9nez",
    number: 2,
    position: "DF",
    club: "Atl\xE9tico de Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/977da143-5380-497d-85f7-d6e5ca34b27c/GIMENEZ-Jose-Maria_368655"
  },
  "368664": {
    fifaId: "368664",
    teamCode: "URU",
    name: "Sergio Rochet",
    number: 1,
    position: "GK",
    club: "Internacional",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5a98e25-83d4-441e-9c25-0eb4581277dc/ROCHET-Sergio_368664"
  },
  "369304": {
    fifaId: "369304",
    teamCode: "TUR",
    name: "H. \xC7alhano\u011Flu",
    number: 10,
    position: "MF",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/f192cf34-173f-47b3-9748-981bd3f21275/CALHANOGLU-Hakan_369304"
  },
  "369744": {
    fifaId: "369744",
    teamCode: "PAR",
    name: "G. Gomez",
    number: 15,
    position: "DF",
    club: "Palmeiras",
    pictureUrl: "https://digitalhub.fifa.com/transform/d37c65ce-135e-4bd4-b870-2c2548b93e2d/GOMEZ-Gustavo_369744"
  },
  "369749": {
    fifaId: "369749",
    teamCode: "PAR",
    name: "J. Alonso",
    number: 6,
    position: "DF",
    club: "Atl\xE9tico Mineiro",
    pictureUrl: "https://digitalhub.fifa.com/transform/241fe8c3-a33e-411a-8eca-e81cc3fba926/ALONSO-Junior_369749"
  },
  "369761": {
    fifaId: "369761",
    teamCode: "PAR",
    name: "M. Almir\xF3n",
    number: 10,
    position: "MF",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/62600270-27f4-432a-8f1f-1014124829c1/ALMIRON-Miguel_369761"
  },
  "369768": {
    fifaId: "369768",
    teamCode: "PAR",
    name: "A. Sanabria",
    number: 9,
    position: "FW",
    club: "Torino",
    pictureUrl: "https://digitalhub.fifa.com/transform/97bc175a-1e5c-417f-ab23-492237ddb3ab/SANABRIA-Antonio_369768"
  },
  "370986": {
    fifaId: "370986",
    teamCode: "CAN",
    name: "J. Osorio",
    number: 21,
    position: "MF",
    club: "Toronto FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/982a5ed2-0878-4733-b071-cd7cc532ee37/OSORIO-Jonathan_370986"
  },
  "371609": {
    fifaId: "371609",
    teamCode: "CIV",
    name: "F. Kessie",
    number: 8,
    position: "MF",
    club: "Al Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/2e649ed1-5e23-4de2-aafc-79fac130f5f0/KESSIE-Franck_371609"
  },
  "371736": {
    fifaId: "371736",
    teamCode: "IRN",
    name: "Saeid Ezatolahi",
    number: 6,
    position: "MF",
    club: "Shabab Al Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/a2e8983e-9596-49b3-8c5c-e398d66e27c5/EZATOLAHI-Saeid_371736"
  },
  "371958": {
    fifaId: "371958",
    teamCode: "CAN",
    name: "D. Cornelius",
    number: 5,
    position: "DF",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/efe78874-6cb4-4156-a6ce-af7c6374d11f/CORNELIUS-Derek_371958"
  },
  "372090": {
    fifaId: "372090",
    teamCode: "MEX",
    name: "O. Pineda",
    number: 17,
    position: "MF",
    club: "AEK Atenas",
    pictureUrl: "https://digitalhub.fifa.com/transform/ef0f99d9-6838-4b25-8a18-ecd9638bd51f/PINEDA-Orbelin_372090"
  },
  "372266": {
    fifaId: "372266",
    teamCode: "MAR",
    name: "S. Amrabat",
    number: 4,
    position: "MF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf6efacc-6c34-4679-b833-b2c5371b4ee6/AMRABAT-Sofyan_372266"
  },
  "372436": {
    fifaId: "372436",
    teamCode: "BIH",
    name: "T. \u0160unji\u0107",
    number: 5,
    position: "DF",
    club: "Cagliari",
    pictureUrl: "https://digitalhub.fifa.com/transform/ddc91c53-fc37-453c-b16e-50ef5e2dd2da/SUNJIC-Ivan_372436"
  },
  "373235": {
    fifaId: "373235",
    teamCode: "NOR",
    name: "\xD8. Nyland",
    number: 1,
    position: "GK",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/4abc883f-1368-46d6-8849-308d06b641e6/NYLAND-Orjan_373235"
  },
  "373344": {
    fifaId: "373344",
    teamCode: "CPV",
    name: "Garry Rodrigues",
    number: 11,
    position: "FW",
    club: "Sivasspor",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8ad756c-e6dc-4458-ad13-d34d2b668c63/GARRY-RODRIGUES_373344"
  },
  "373400": {
    fifaId: "373400",
    teamCode: "ECU",
    name: "E. Valencia",
    number: 13,
    position: "FW",
    club: "Internacional",
    pictureUrl: "https://digitalhub.fifa.com/transform/4688cb2a-6446-4439-ba5f-e4db7b5a18c5/VALENCIA-Enner_373400"
  },
  "376230": {
    fifaId: "376230",
    teamCode: "BIH",
    name: "S. Kola\u0161inac",
    number: 20,
    position: "DF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/bed62578-6b40-402e-8c63-94159988fe95/KOLASINAC-Sead_376230"
  },
  "376285": {
    fifaId: "376285",
    teamCode: "ALG",
    name: "A. Mandi",
    number: 5,
    position: "DF",
    club: "Be\u015Fikta\u015F",
    pictureUrl: "https://digitalhub.fifa.com/transform/dc4250ac-0a37-44da-9ae0-c858225ad8a1/MANDI-Aissa_376285"
  },
  "379942": {
    fifaId: "379942",
    teamCode: "ALG",
    name: "R. Mahrez",
    number: 7,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/172fb59c-24f2-4bc0-82a2-cdc869badf53/MAHREZ-Riyad_379942"
  },
  "379955": {
    fifaId: "379955",
    teamCode: "GER",
    name: "A. Rudiger",
    number: 2,
    position: "DF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/88c43fe2-0c78-437c-a2bf-388c3673c58c/RUEDIGER-Antonio_379955"
  },
  "380007": {
    fifaId: "380007",
    teamCode: "IRN",
    name: "Alireza Beiranvand",
    number: 1,
    position: "GK",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8cf4e84-2bd2-4e20-bb73-c7f14a935b73/BEIRANVAND-Alireza_380007"
  },
  "385306": {
    fifaId: "385306",
    teamCode: "PAR",
    name: "A. Cubas",
    number: 14,
    position: "MF",
    club: "Vancouver Whitecaps",
    pictureUrl: "https://digitalhub.fifa.com/transform/5f115675-51fb-4e0c-ac8c-7226b762b4a1/CUBAS-Andres_385306"
  },
  "386413": {
    fifaId: "386413",
    teamCode: "GER",
    name: "J. Kimmich",
    number: 6,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/ada33dfd-5b01-4792-88f4-14c06641509e/KIMMICH-Joshua_386413"
  },
  "388475": {
    fifaId: "388475",
    teamCode: "IRN",
    name: "Mehdi Taremi",
    number: 9,
    position: "FW",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/0d942331-39fb-421e-8a8d-d1f875958559/TAREMI-Mehdi_388475"
  },
  "389782": {
    fifaId: "389782",
    teamCode: "ECU",
    name: "P. Estupinan",
    number: 7,
    position: "DF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/85df33e2-083f-4cef-9fa2-3a8fc7d29466/ESTUPINAN-Pervis_389782"
  },
  "389784": {
    fifaId: "389784",
    teamCode: "ECU",
    name: "A. Franco",
    number: 21,
    position: "MF",
    club: "Atletico Mineiro",
    pictureUrl: "https://digitalhub.fifa.com/transform/59ffe3d1-0963-44f5-861e-9eb6590d8fce/FRANCO-Alan_389784"
  },
  "389867": {
    fifaId: "389867",
    teamCode: "FRA",
    name: "K. Mbapp\xE9",
    number: 10,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/66f6087d-9563-4644-8f10-5614ef6e1e51/MBAPPE-Kylian_389867",
    socials: {
      instagram: "https://instagram.com/k.mbappe"
    }
  },
  "389876": {
    fifaId: "389876",
    teamCode: "FRA",
    name: "Upamecano",
    number: 4,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/daae69ae-72e0-4e42-812f-d19d74d12478/UPAMECANO-Dayot_389876"
  },
  "390181": {
    fifaId: "390181",
    teamCode: "NZL",
    name: "Joe Bell",
    number: 6,
    position: "MF",
    club: "Viking FK",
    pictureUrl: "https://digitalhub.fifa.com/transform/37f084e5-faf4-4447-bdf1-c7ac8b0fa6e8/BELL-Joe_390181"
  },
  "390209": {
    fifaId: "390209",
    teamCode: "NZL",
    name: "Sarpreet Singh",
    number: 10,
    position: "MF",
    club: "Leiria",
    pictureUrl: "https://digitalhub.fifa.com/transform/3c43e6c2-50b4-4cb3-ba2e-e94f9a928edd/SINGH-Sarpreet_390209"
  },
  "390238": {
    fifaId: "390238",
    teamCode: "USA",
    name: "T. Adams",
    number: 4,
    position: "MF",
    club: "Bournemouth",
    pictureUrl: "https://digitalhub.fifa.com/transform/7fdbded2-aa27-44b1-9bf1-ff1d17c58f86/ADAMS-Tyler_390238"
  },
  "390259": {
    fifaId: "390259",
    teamCode: "USA",
    name: "W. McKennie",
    number: 8,
    position: "MF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/4406f0ad-8f60-4a98-89c0-89797bfe804d/McKENNIE-Weston_390259"
  },
  "390267": {
    fifaId: "390267",
    teamCode: "USA",
    name: "C. Pulisic",
    number: 10,
    position: "FW",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/34d1c247-2a09-4fd6-87bc-71ec687a54aa/PULISIC-Christian_390267"
  },
  "390475": {
    fifaId: "390475",
    teamCode: "RSA",
    name: "S. Sithole",
    number: 13,
    position: "MF",
    club: "Tondela",
    pictureUrl: "https://digitalhub.fifa.com/transform/200f1c50-a60a-4c33-ad94-b4dabd605f35/SITHOLE-Sphephelo_390475"
  },
  "390534": {
    fifaId: "390534",
    teamCode: "IRN",
    name: "Hossein Kanaani",
    number: 13,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/20ec6667-ff1b-4fb3-8128-ecf2eb1c6e18/KANANI-Hossein_390534"
  },
  "390537": {
    fifaId: "390537",
    teamCode: "IRN",
    name: "Milad Mohammadi",
    number: 3,
    position: "DF",
    club: "Persepolis",
    pictureUrl: "https://digitalhub.fifa.com/transform/ed36d5fa-f6ab-4e3c-8bdd-1c5cf555f225/MOHAMMADI-Milad_390537"
  },
  "390650": {
    fifaId: "390650",
    teamCode: "CUW",
    name: "E. Room",
    number: 1,
    position: "GK",
    club: "Columbus Crew",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bd9ff87-6801-46d2-8f10-ca9eb3ea2ea4/ROOM-Eloy_390650"
  },
  "390670": {
    fifaId: "390670",
    teamCode: "CAN",
    name: "C. Larin",
    number: 17,
    position: "FW",
    club: "Club Am\xE9rica",
    pictureUrl: "https://digitalhub.fifa.com/transform/21086aea-3ec5-47b2-a81f-f7316489183a/LARIN-Cyle_390670"
  },
  "394993": {
    fifaId: "394993",
    teamCode: "HAI",
    name: "D. Nazon",
    number: 9,
    position: "FW",
    club: "Kayserispor",
    pictureUrl: "https://digitalhub.fifa.com/transform/93e74f55-211b-4332-8b5c-d328eb02d026/NAZON-Duckens_394993"
  },
  "395050": {
    fifaId: "395050",
    teamCode: "RSA",
    name: "A. Modiba",
    number: 6,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/e5ddfbfb-b601-4ff8-83a5-f55162967798/MODIBA-Aubrey_395050"
  },
  "395083": {
    fifaId: "395083",
    teamCode: "KOR",
    name: "Hwang Hee-chan",
    number: 11,
    position: "FW",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/8460686d-d2c7-4d3e-98a5-f797400470ed/HWANG-Heechan_395083"
  },
  "395084": {
    fifaId: "395084",
    teamCode: "KOR",
    name: "Hwang In-beom",
    number: 6,
    position: "MF",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/70be8ce3-bc90-4585-8871-a951dabf811e/HWANG-Inbeom_395084"
  },
  "395088": {
    fifaId: "395088",
    teamCode: "KOR",
    name: "Kim Min-jae",
    number: 4,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/743f3b76-7c6e-484c-8f62-4f4e22c082ae/KIM-Minjae_395088"
  },
  "395113": {
    fifaId: "395113",
    teamCode: "ALG",
    name: "R. Bensebaini",
    number: 3,
    position: "DF",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/329752fa-e310-4124-8fb2-be7cc478b929/BENSEBAINI-Ramy_395113"
  },
  "395186": {
    fifaId: "395186",
    teamCode: "IRQ",
    name: "A. Hussein",
    number: 18,
    position: "FW",
    pictureUrl: "https://digitalhub.fifa.com/transform/388e5207-980c-407a-828c-270fbd4fdff6/AYMEN-HUSSEIN_395186"
  },
  "395283": {
    fifaId: "395283",
    teamCode: "SWE",
    name: "V. Lindelof",
    number: 3,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/88b96376-9f31-40fd-a0fc-ae12aab484c4/LINDELOF-Victor_395283"
  },
  "395321": {
    fifaId: "395321",
    teamCode: "JPN",
    name: "J. Ito",
    number: 14,
    position: "FW",
    club: "Reims",
    pictureUrl: "https://digitalhub.fifa.com/transform/87ce677a-e78d-474c-bfd7-b7dc77e89e62/ITO-Junya_395321"
  },
  "395516": {
    fifaId: "395516",
    teamCode: "MEX",
    name: "C. Montes",
    number: 3,
    position: "DF",
    club: "Lokomotiv Moscou",
    pictureUrl: "https://digitalhub.fifa.com/transform/c8c3fa3a-9001-4221-ab3c-754158c0ad8a/MONTES-Cesar_395516"
  },
  "395984": {
    fifaId: "395984",
    teamCode: "RSA",
    name: "T. Zwane",
    number: 11,
    position: "FW",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d294899-e656-4484-91b7-99d646bc590c/ZWANE-Themba_395984"
  },
  "395986": {
    fifaId: "395986",
    teamCode: "RSA",
    name: "R. Williams",
    number: 1,
    position: "GK",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/b95f9142-251c-4943-911c-9c8d7ad8dd1c/WILLIAMS-Ronwen_395986"
  },
  "396885": {
    fifaId: "396885",
    teamCode: "KSA",
    name: "Mohammed Al-Owais",
    number: 21,
    position: "GK",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/be2d88f0-e368-49ef-9a33-c7585955c495/MOHAMMED-ALOWAIS_396885",
    socials: {
      instagram: "https://instagram.com/alowais_33"
    }
  },
  "397753": {
    fifaId: "397753",
    teamCode: "KOR",
    name: "Jo Hyeon-woo",
    number: 1,
    position: "GK",
    club: "Ulsan HD",
    pictureUrl: "https://digitalhub.fifa.com/transform/15bfe432-3e69-4900-b736-50ee6fd20cb5/JO-Hyeonwoo_397753"
  },
  "397775": {
    fifaId: "397775",
    teamCode: "HAI",
    name: "C. Arcus",
    number: 2,
    position: "DF",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/924dd9c4-2333-4662-be95-df5d3d551368/ARCUS-Carlens_397775"
  },
  "397786": {
    fifaId: "397786",
    teamCode: "NED",
    name: "V. van Dijk",
    number: 4,
    position: "DF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/df0e21eb-c210-4ea6-ab2c-0ac13635a9f8/VAN-DIJK-Virgil_397786"
  },
  "398588": {
    fifaId: "398588",
    teamCode: "NOR",
    name: "A. S\xF8rloth",
    number: 7,
    position: "FW",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/23bcc976-2dbc-4fe2-b844-1878ff0cd354/SORLOTH-Alexander_398588"
  },
  "398680": {
    fifaId: "398680",
    teamCode: "FRA",
    name: "Demb\xE9l\xE9",
    number: 11,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/e6eee717-fd8c-4f8f-a7e0-c4f978fe327f/DEMBELE-Ousmane_398680"
  },
  "398681": {
    fifaId: "398681",
    teamCode: "FRA",
    name: "Kant\xE9",
    fullName: "N'Golo Kant\xE9",
    number: 13,
    position: "MF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/355040a8-6b40-452b-92af-7c22f91cb87c/KANTE-Ngolo_398681"
  },
  "FRA-2": {
    fifaId: "FRA-2",
    teamCode: "FRA",
    name: "Pavard",
    fullName: "Benjamin Pavard",
    number: 2,
    position: "DF",
    club: "Inter Milan"
  },
  "FRA-3": {
    fifaId: "FRA-3",
    teamCode: "FRA",
    name: "L. Hern\xE1ndez",
    fullName: "Lucas Hern\xE1ndez",
    number: 3,
    position: "DF",
    club: "PSG"
  },
  "FRA-6": {
    fifaId: "FRA-6",
    teamCode: "FRA",
    name: "Konat\xE9",
    fullName: "Ibrahima Konat\xE9",
    number: 6,
    position: "DF",
    club: "Liverpool"
  },
  "FRA-9": {
    fifaId: "FRA-9",
    teamCode: "FRA",
    name: "Kolo Muani",
    fullName: "Randal Kolo Muani",
    number: 9,
    position: "FW",
    club: "PSG"
  },
  "FRA-12": {
    fifaId: "FRA-12",
    teamCode: "FRA",
    name: "Fofana",
    fullName: "Youssouf Fofana",
    number: 12,
    position: "MF",
    club: "AC Milan"
  },
  "FRA-14": {
    fifaId: "FRA-14",
    teamCode: "FRA",
    name: "Rabiot",
    fullName: "Adrien Rabiot",
    number: 14,
    position: "MF",
    club: "Manchester United"
  },
  "FRA-15": {
    fifaId: "FRA-15",
    teamCode: "FRA",
    name: "M. Thuram",
    fullName: "Marcus Thuram",
    number: 15,
    position: "FW",
    club: "Inter Milan"
  },
  "FRA-16": {
    fifaId: "FRA-16",
    teamCode: "FRA",
    name: "Areola",
    fullName: "Alphonse Areola",
    number: 16,
    position: "GK",
    club: "West Ham"
  },
  "FRA-18": {
    fifaId: "FRA-18",
    teamCode: "FRA",
    name: "Camavinga",
    fullName: "Eduardo Camavinga",
    number: 18,
    position: "MF",
    club: "Real Madrid"
  },
  "FRA-19": {
    fifaId: "FRA-19",
    teamCode: "FRA",
    name: "Coman",
    fullName: "Kingsley Coman",
    number: 19,
    position: "FW",
    club: "Bayern Munich"
  },
  "FRA-21": {
    fifaId: "FRA-21",
    teamCode: "FRA",
    name: "F. Mendy",
    fullName: "Ferland Mendy",
    number: 21,
    position: "DF",
    club: "Real Madrid"
  },
  "FRA-23": {
    fifaId: "FRA-23",
    teamCode: "FRA",
    name: "Lafont",
    fullName: "Alban Lafont",
    number: 23,
    position: "GK",
    club: "Nantes"
  },
  "FRA-24": {
    fifaId: "FRA-24",
    teamCode: "FRA",
    name: "Disasi",
    fullName: "Axel Disasi",
    number: 24,
    position: "DF",
    club: "Chelsea"
  },
  "FRA-25": {
    fifaId: "FRA-25",
    teamCode: "FRA",
    name: "Za\xEFre-Emery",
    fullName: "Warren Za\xEFre-Emery",
    number: 25,
    position: "MF",
    club: "PSG"
  },
  "FRA-26": {
    fifaId: "FRA-26",
    teamCode: "FRA",
    name: "M. Tel",
    fullName: "Mathys Tel",
    number: 26,
    position: "FW",
    club: "Bayern Munich"
  },
  "400511": {
    fifaId: "400511",
    teamCode: "JPN",
    name: "K. Itakura",
    number: 4,
    position: "DF",
    club: "Borussia Monchengladbach",
    pictureUrl: "https://digitalhub.fifa.com/transform/5797a9db-f271-4f10-a480-1a0fdde80b7b/ITAKURA-Kou_400511"
  },
  "400634": {
    fifaId: "400634",
    teamCode: "MEX",
    name: "E. \xC1lvarez",
    number: 4,
    position: "MF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/b1581870-6bef-4c29-9a06-f306bbf03ca8/ALVAREZ-Edson_400634"
  },
  "400716": {
    fifaId: "400716",
    teamCode: "NOR",
    name: "M. \xD8degaard",
    number: 10,
    position: "MF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/2b895db6-7f67-4436-b8da-54bdf0dd2e2b/ODEGAARD-Martin_400716"
  },
  "400721": {
    fifaId: "400721",
    teamCode: "MAR",
    name: "A. Hakimi",
    number: 2,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/22c6ca49-7262-4799-8a9f-530e427321ac/HAKIMI-Achraf_400721"
  },
  "401023": {
    fifaId: "401023",
    teamCode: "CUW",
    name: "J. Brenet",
    number: 5,
    position: "DF",
    club: "Al Rayyan",
    pictureUrl: "https://digitalhub.fifa.com/transform/2069bb09-aaf0-41dc-81e4-a8f4df33b4e5/BRENET-Joshua_401023"
  },
  "401334": {
    fifaId: "401334",
    teamCode: "SCO",
    name: "J. McGinn",
    number: 7,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/af6ceadd-a14f-47c0-9f30-fd85d71a94cd/McGINN-John_401334"
  },
  "401339": {
    fifaId: "401339",
    teamCode: "SCO",
    name: "A. Robertson",
    number: 3,
    position: "DF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/ba94c3aa-e071-4add-b402-5d3f8df8acb9/ROBERTSON-Andy_401339"
  },
  "401378": {
    fifaId: "401378",
    teamCode: "GER",
    name: "J. Tah",
    number: 4,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/34f74ca0-1102-446c-b098-02decdf58b8d/TAH-Jonathan_401378"
  },
  "401444": {
    fifaId: "401444",
    teamCode: "BEL",
    name: "Youri Tielemans",
    number: 8,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/158822ad-a0e9-406c-a84d-e79b0392409f/TIELEMANS-Youri_401444"
  },
  "401481": {
    fifaId: "401481",
    teamCode: "CZE",
    name: "P. Schick",
    number: 10,
    position: "FW",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/725e8c7e-c712-45be-9e0a-ec5b121e84ad/SCHICK-Patrik_401481"
  },
  "401889": {
    fifaId: "401889",
    teamCode: "SEN",
    name: "I. Sarr",
    number: 11,
    position: "FW",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/695226c6-92b8-4aa6-995e-dcdd2d08eb96/SARR-Ismaila_401889"
  },
  "401924": {
    fifaId: "401924",
    teamCode: "KSA",
    name: "Hassan Kadesh",
    number: 14,
    position: "DF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/fc41abe4-036c-4c99-aa2a-b56ddece0c2d/HASSAN-KADISH_401924"
  },
  "402261": {
    fifaId: "402261",
    teamCode: "CIV",
    name: "N. Pepe",
    number: 19,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c7519d2-960c-4d19-83e7-40a155f1a8eb/PEPE-Nicolas_402261"
  },
  "402772": {
    fifaId: "402772",
    teamCode: "MEX",
    name: "J. Gallardo",
    number: 23,
    position: "DF",
    club: "Monterrey",
    pictureUrl: "https://digitalhub.fifa.com/transform/f1417540-93cb-4b82-9cfe-223e877d5923/GALLARDO-Jesus_402772"
  },
  "402884": {
    fifaId: "402884",
    teamCode: "URU",
    name: "Federico Valverde",
    number: 15,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/bc29f114-2d51-4605-ae7a-eadf774e9d38/VALVERDE-Federico_402884"
  },
  "402893": {
    fifaId: "402893",
    teamCode: "URU",
    name: "Math\xEDas Olivera",
    number: 16,
    position: "DF",
    club: "Napoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/704d2d9d-1b5f-4296-87f4-b7b591a58116/OLIVERA-Mathias_402893"
  },
  "402898": {
    fifaId: "402898",
    teamCode: "URU",
    name: "Nicol\xE1s de la Cruz",
    number: 7,
    position: "MF",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/7694c9e6-d4f9-4f60-8173-5a3a79bcaaa2/DE-LA-CRUZ-Nicolas_402898"
  },
  "402920": {
    fifaId: "402920",
    teamCode: "ARG",
    name: "Lautaro M.",
    number: 22,
    position: "FW",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/2368bf53-1f73-427b-929e-557187d53ac7/MARTINEZ-Lautaro_402920"
  },
  "402921": {
    fifaId: "402921",
    teamCode: "ARG",
    name: "E. Mart\xEDnez",
    number: 23,
    position: "GK",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/1b4390f3-e94f-4851-a36b-595356b3d414/MARTINEZ-Lisandro_402921"
  },
  "402925": {
    fifaId: "402925",
    teamCode: "ARG",
    name: "Molina",
    number: 26,
    position: "DF",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/7aef8344-2a5b-42f0-b1a0-565d5220aa76/MOLINA-Nahuel_402925"
  },
  "402974": {
    fifaId: "402974",
    teamCode: "ECU",
    name: "A. Preciado",
    number: 17,
    position: "DF",
    club: "Sparta Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/2e9be79f-76b7-4f12-8ba0-c4c21ec8b39d/PRECIADO-Angelo_402974"
  },
  "402979": {
    fifaId: "402979",
    teamCode: "ECU",
    name: "F. Torres",
    number: 2,
    position: "DF",
    club: "Santos",
    pictureUrl: "https://digitalhub.fifa.com/transform/755ac13c-2122-42ff-b40a-4582be61e59e/TORRES-Felix_402979"
  },
  "403236": {
    fifaId: "403236",
    teamCode: "IRN",
    name: "Mehdi Ghayedi",
    number: 10,
    position: "FW",
    club: "Kalba",
    pictureUrl: "https://digitalhub.fifa.com/transform/df931c9f-862e-411a-bc23-35af4d0d1bd1/GHAYEDI-Mehdi_403236"
  },
  "403274": {
    fifaId: "403274",
    teamCode: "JPN",
    name: "H. Ito",
    number: 21,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/68ebc735-7e69-4908-98b7-b6d691e9cbf7/ITO-Hiroki_403274"
  },
  "403289": {
    fifaId: "403289",
    teamCode: "JPN",
    name: "T. Tomiyasu",
    number: 22,
    position: "DF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/959b632f-531d-420a-85af-5d0fc3c83d5f/TOMIYASU-Takehiro_403289"
  },
  "403304": {
    fifaId: "403304",
    teamCode: "JPN",
    name: "T. Kubo",
    number: 20,
    position: "MF",
    club: "Real Sociedad",
    pictureUrl: "https://digitalhub.fifa.com/transform/7391febf-1e97-4ce1-89c8-0e3ae529ae81/KUBO-Takefusa_403304"
  },
  "403319": {
    fifaId: "403319",
    teamCode: "KSA",
    name: "Nasser Al-Dawsari",
    number: 8,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/81e654c7-8273-4e1f-b909-62613fbf14ea/NASSER-ALDAWSARI_403319"
  },
  "403596": {
    fifaId: "403596",
    teamCode: "MEX",
    name: "J. S\xE1nchez",
    number: 2,
    position: "DF",
    club: "Cruz Azul",
    pictureUrl: "https://digitalhub.fifa.com/transform/8640d435-8aba-4b52-a864-9952d3a6db5c/SANCHEZ-Jorge_403596"
  },
  "403616": {
    fifaId: "403616",
    teamCode: "RSA",
    name: "T. Mokoena",
    number: 4,
    position: "MF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/bf36679b-73eb-4813-a99d-b9673439dd05/MOKOENA-Teboho_403616"
  },
  "404319": {
    fifaId: "404319",
    teamCode: "AUS",
    name: "A. Hrustic",
    number: 10,
    position: "MF",
    club: "Salernitana",
    pictureUrl: "https://digitalhub.fifa.com/transform/c63012a5-37f8-4317-8a69-60f861fb03a7/HRUSTIC-Ajdin_404319"
  },
  "404353": {
    fifaId: "404353",
    teamCode: "GER",
    name: "L. Sane",
    number: 19,
    position: "FW",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/097a6749-47b0-4285-a1f9-8aa0ac0e2c12/SANE-Leroy_404353"
  },
  "404645": {
    fifaId: "404645",
    teamCode: "NOR",
    name: "S. Berge",
    number: 8,
    position: "MF",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/b7cf7654-f43e-4993-975e-5a2a0d5633f8/BERGE-Sander_404645"
  },
  "404885": {
    fifaId: "404885",
    teamCode: "CZE",
    name: "T. Soucek",
    number: 22,
    position: "MF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/eb34bfe6-5b60-4771-a303-40f68231bbd2/SOUCEK-Tomas_404885"
  },
  "405175": {
    fifaId: "405175",
    teamCode: "CIV",
    name: "S. Fofana",
    number: 6,
    position: "MF",
    club: "Al Nassr",
    pictureUrl: "https://digitalhub.fifa.com/transform/08197d78-88b8-458f-9ad9-de192f25313c/FOFANA-Seko_405175"
  },
  "405454": {
    fifaId: "405454",
    teamCode: "NZL",
    name: "Elijah Just",
    number: 11,
    position: "FW",
    club: "SKN St. Polten",
    pictureUrl: "https://digitalhub.fifa.com/transform/fe32736f-5d5f-4870-8db3-5b4560835f53/JUST-Elijah_405454",
    socials: {
      instagram: "https://instagram.com/elijah_just"
    }
  },
  "405469": {
    fifaId: "405469",
    teamCode: "NZL",
    name: "Liberato Cacace",
    number: 13,
    position: "DF",
    club: "Empoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/0954fe05-e301-4ec1-a8ad-2aaccc60d8a7/CACACE-Liberato_405469"
  },
  "405528": {
    fifaId: "405528",
    teamCode: "JPN",
    name: "Y. Sugawara",
    number: 2,
    position: "DF",
    club: "Southampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/09574b48-f59b-436b-b0db-ab4816a96ede/SUGAWARA-Yukinari_405528"
  },
  "405530": {
    fifaId: "405530",
    teamCode: "JPN",
    name: "Z. Suzuki",
    number: 1,
    position: "GK",
    club: "Parma",
    pictureUrl: "https://digitalhub.fifa.com/transform/7a045252-7c97-4f14-9493-4977e3e3156e/SUZUKI-Zion_405530"
  },
  "405873": {
    fifaId: "405873",
    teamCode: "CIV",
    name: "Y. Fofana",
    number: 1,
    position: "GK",
    club: "Angers",
    pictureUrl: "https://digitalhub.fifa.com/transform/c5bc8a38-479f-4c33-b8f6-9ab95bb45b57/FOFANA-Yahia_405873"
  },
  "405877": {
    fifaId: "405877",
    teamCode: "ALG",
    name: "A. Gouiri",
    number: 9,
    position: "FW",
    club: "Marselha",
    pictureUrl: "https://digitalhub.fifa.com/transform/4818d176-036a-4494-b53e-ada08bba749c/GOUIRI-Amine_405877"
  },
  "405893": {
    fifaId: "405893",
    teamCode: "FRA",
    name: "Tchouam\xE9ni",
    number: 8,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/8575fee6-68ae-4be0-9529-7e5c392e06e6/TCHOUAMENI-Aurelien_405893"
  },
  "405920": {
    fifaId: "405920",
    teamCode: "ECU",
    name: "J. Yeboah",
    number: 9,
    position: "FW",
    club: "Venezia",
    pictureUrl: "https://digitalhub.fifa.com/transform/1fc64d7c-4383-4c61-bd76-f22f22b91a8f/YEBOAH-John_405920"
  },
  "406280": {
    fifaId: "406280",
    teamCode: "USA",
    name: "S. Dest",
    number: 2,
    position: "DF",
    club: "PSV",
    pictureUrl: "https://digitalhub.fifa.com/transform/5ee00bd8-552e-4e02-b680-b16534e53493/DEST-Sergino_406280"
  },
  "406304": {
    fifaId: "406304",
    teamCode: "USA",
    name: "T. Weah",
    number: 21,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/c0dcfa0a-b862-4cd2-9c33-034bd18dc231/WEAH-Timothy_406304"
  },
  "406595": {
    fifaId: "406595",
    teamCode: "IRN",
    name: "Rouzbeh Cheshmi",
    number: 15,
    position: "MF",
    club: "Esteghlal",
    pictureUrl: "https://digitalhub.fifa.com/transform/ecf8d94c-609d-4a5c-8375-8c8e92629a59/CHESHMI-Roozbeh_406595"
  },
  "407343": {
    fifaId: "407343",
    teamCode: "CIV",
    name: "G. Konan",
    number: 3,
    position: "DF",
    club: "Al Fayha",
    pictureUrl: "https://digitalhub.fifa.com/transform/8b0c92b7-4756-42a3-8cc8-b997693ff4aa/KONAN-Ghislain_407343"
  },
  "407993": {
    fifaId: "407993",
    teamCode: "KSA",
    name: "Mohamed Kanno",
    number: 23,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3eb4162-fd6d-41f1-aad4-1b632b266f19/MOHAMED-KANNO_407993"
  },
  "408042": {
    fifaId: "408042",
    teamCode: "FRA",
    name: "T. Hern\xE1ndez",
    number: 22,
    position: "DF",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/6f76533f-feca-4811-a010-e6e296b29db8/HERNANDEZ-Theo_408042"
  },
  "408948": {
    fifaId: "408948",
    teamCode: "EGY",
    name: "Mohamed El Shenawy",
    number: 1,
    position: "GK",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948"
  },
  "408950": {
    fifaId: "408950",
    teamCode: "EGY",
    name: "Mohamed Hany",
    number: 3,
    position: "DF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/04f8ef57-e16f-49de-b7d4-ad430c4c430c/MOHAMED-HANY_408950"
  },
  "411301": {
    fifaId: "411301",
    teamCode: "SCO",
    name: "A. Gunn",
    number: 1,
    position: "GK",
    club: "Norwich City",
    pictureUrl: "https://digitalhub.fifa.com/transform/c13202b1-f3b1-4fe1-bc72-0ee5b3135bbc/GUNN-Angus_411301"
  },
  "411367": {
    fifaId: "411367",
    teamCode: "GER",
    name: "K. Havertz",
    number: 7,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/1fdd4d11-97d1-4392-b345-5a5eecc54839/HAVERTZ-Kai_411367"
  },
  "411375": {
    fifaId: "411375",
    teamCode: "ESP",
    name: "Rodri",
    number: 16,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/295ab5b2-4dbf-42b9-918b-04fb4ae0ec0a/RODRI_411375"
  },
  "411443": {
    fifaId: "411443",
    teamCode: "BEL",
    name: "Timothy Castagne",
    number: 21,
    position: "DF",
    club: "Fulham",
    pictureUrl: "https://digitalhub.fifa.com/transform/58f1cc7c-04f4-43ba-bc82-85c1226fb7a2/CASTAGNE-Timothy_411443"
  },
  "411644": {
    fifaId: "411644",
    teamCode: "IRN",
    name: "Saman Ghoddos",
    number: 14,
    position: "MF",
    club: "Kalba",
    pictureUrl: "https://digitalhub.fifa.com/transform/96d480ac-42c5-4dd6-a2f0-6220ea1a0f4b/GHODDOS-Saman_411644"
  },
  "411653": {
    fifaId: "411653",
    teamCode: "TUN",
    name: "D. Bronn",
    number: 6,
    position: "DF",
    club: "Servette",
    pictureUrl: "https://digitalhub.fifa.com/transform/9a7aa138-5845-4890-aa20-43f4021160ed/BRONN-Dylan_411653"
  },
  "411658": {
    fifaId: "411658",
    teamCode: "TUN",
    name: "E. Skhiri",
    number: 17,
    position: "MF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/e2ba8e19-b4ab-435f-b12c-e56d655c31e6/SKHIRI-Ellyes_411658"
  },
  "411680": {
    fifaId: "411680",
    teamCode: "MAR",
    name: "N. Mazraoui",
    number: 3,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/000d2b43-36ff-4fe5-90d8-23c96e555c56/MAZRAOUI-Noussair_411680"
  },
  "412144": {
    fifaId: "412144",
    teamCode: "CAN",
    name: "A. Davies",
    number: 19,
    position: "DF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b0a6361-55a2-4bde-82a4-8275181091f5/DAVIES-Alphonso_412144"
  },
  "416081": {
    fifaId: "416081",
    teamCode: "ARG",
    name: "\xC1lvarez",
    number: 9,
    position: "FW",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/c7715f12-adb9-4504-9be2-e2899bdbd172/ALVAREZ-Julian_416081"
  },
  "418490": {
    fifaId: "418490",
    teamCode: "KOR",
    name: "Lee Kang-in",
    number: 18,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/a54e995b-caa3-43c4-981f-b54ada7f678d/LEE-Kangin_418490"
  },
  "418795": {
    fifaId: "418795",
    teamCode: "SEN",
    name: "N. Jackson",
    number: 19,
    position: "FW",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/27569451-1271-4fb3-86ee-51e88e913ec7/JACKSON-Nicolas_418795"
  },
  "418798": {
    fifaId: "418798",
    teamCode: "SEN",
    name: "P. M. Sarr",
    number: 17,
    position: "MF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/60281798-1792-4113-ba5c-fbfd3299270f/SARR-Pape-Matar_418798"
  },
  "419062": {
    fifaId: "419062",
    teamCode: "USA",
    name: "C. Richards",
    number: 3,
    position: "DF",
    club: "Crystal Palace",
    pictureUrl: "https://digitalhub.fifa.com/transform/54036d3d-1588-4634-944b-a7c2d97d0b76/RICHARDS-Chris_419062"
  },
  "419068": {
    fifaId: "419068",
    teamCode: "USA",
    name: "G. Reyna",
    number: 7,
    position: "MF",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/b30d701d-d9eb-4b2d-8db4-6841fc9ed1a9/REYNA-Giovanni_419068"
  },
  "419100": {
    fifaId: "419100",
    teamCode: "URU",
    name: "Maximiliano Ara\xFAjo",
    number: 20,
    position: "FW",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/f1a7af03-ada1-4642-927c-5fe06844c89c/ARAUJO-Maxi_419100",
    socials: {
      instagram: "https://instagram.com/maximilianoaraujo6"
    }
  },
  "419101": {
    fifaId: "419101",
    teamCode: "URU",
    name: "Ronald Ara\xFAjo",
    number: 4,
    position: "DF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/41008beb-38a3-46e0-9229-229d0afc8db7/ARAUJO-Ronald_419101"
  },
  "419126": {
    fifaId: "419126",
    teamCode: "URU",
    name: "Darwin N\xFA\xF1ez",
    number: 9,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/078805a6-5fbe-44f3-a58c-ed3837ca5665/NUNEZ-Darwin_419126"
  },
  "419172": {
    fifaId: "419172",
    teamCode: "CIV",
    name: "E. Ndicka",
    number: 21,
    position: "DF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/e308dd93-4706-4ed9-80a2-1db8e4a52d6c/PAUGAIN-Wilguens_419172"
  },
  "419177": {
    fifaId: "419177",
    teamCode: "FRA",
    name: "Saliba",
    number: 17,
    position: "DF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/242125e7-67c3-4fcd-b0cc-6c5984c319f4/SALIBA-William_419177"
  },
  "419211": {
    fifaId: "419211",
    teamCode: "RSA",
    name: "L. Foster",
    number: 9,
    position: "FW",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/155c969c-63e1-438e-bd3d-ce587ac212c6/FOSTER-Lyle_419211"
  },
  "419281": {
    fifaId: "419281",
    teamCode: "KSA",
    name: "Saud Abdulhamid",
    number: 12,
    position: "DF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/66d9e01f-7f5e-4bef-b5bd-68d1ce4d9849/SAUD-ABDULHAMID_419281"
  },
  "419291": {
    fifaId: "419291",
    teamCode: "KSA",
    name: "Firas Al-Buraikan",
    number: 9,
    position: "FW",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/9d59c398-9c66-4dad-b20d-9694a0f74dd4/FERAS-ALBRIKAN_419291"
  },
  "419577": {
    fifaId: "419577",
    teamCode: "NZL",
    name: "Ben Waine",
    number: 17,
    position: "FW",
    club: "Plymouth Argyle",
    pictureUrl: "https://digitalhub.fifa.com/transform/88f867f6-433a-4846-a145-fc06b8aac544/WAINE-Ben_419577"
  },
  "419652": {
    fifaId: "419652",
    teamCode: "NOR",
    name: "E. Haaland",
    number: 9,
    position: "FW",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/ee269811-9f84-401f-99b8-e953a2704ebb/HAALAND-Erling_419652",
    socials: {
      instagram: "https://instagram.com/erling"
    }
  },
  "422657": {
    fifaId: "422657",
    teamCode: "NED",
    name: "F. de Jong",
    number: 21,
    position: "MF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/fe8176f7-bf45-49fc-bd5e-0bfd0c834992/DE-JONG-Frenkie_422657"
  },
  "423522": {
    fifaId: "423522",
    teamCode: "AUS",
    name: "J. Bos",
    number: 8,
    position: "DF",
    club: "Westerlo",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b537554-d211-4b77-aa31-0935973fdd50/BOS-Jordan_423522"
  },
  "423595": {
    fifaId: "423595",
    teamCode: "NZL",
    name: "Marko Stamenic",
    number: 8,
    position: "MF",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0e38724-034f-4d1e-a08a-def455a86569/STAMENIC-Marko_423595"
  },
  "423646": {
    fifaId: "423646",
    teamCode: "ESP",
    name: "Pedri",
    number: 20,
    position: "MF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/75a5861e-008f-460c-81e4-8085fa2cc961/PEDRI_423646"
  },
  "424031": {
    fifaId: "424031",
    teamCode: "ECU",
    name: "P. Hincapie",
    number: 3,
    position: "DF",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/b8f68e80-3057-4fbf-be1e-8cf885a713e1/HINCAPIE-Piero_424031"
  },
  "424047": {
    fifaId: "424047",
    teamCode: "CUW",
    name: "J. Antonisse",
    number: 7,
    position: "FW",
    club: "Moreirense",
    pictureUrl: "https://digitalhub.fifa.com/transform/cd0b7ee9-50b8-4043-a957-44df5860e935/ANTONISSE-Jeremy_424047"
  },
  "424081": {
    fifaId: "424081",
    teamCode: "NED",
    name: "B. Verbruggen",
    number: 1,
    position: "GK",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/44bfd693-27d5-4d36-823e-5ff0e6cd2524/VERBRUGGEN-Bart_424081"
  },
  "424556": {
    fifaId: "424556",
    teamCode: "HAI",
    name: "M. Saint\xE9",
    number: 13,
    position: "DF",
    club: "Mirebalais",
    pictureUrl: "https://digitalhub.fifa.com/transform/338f9a41-36d4-4f87-8425-9d5fdc30ac35/SAINTE-Carl_424556"
  },
  "425701": {
    fifaId: "425701",
    teamCode: "MEX",
    name: "J. V\xE1squez",
    number: 5,
    position: "DF",
    club: "Genoa",
    pictureUrl: "https://digitalhub.fifa.com/transform/838cb65f-3d60-4acb-855d-35a364c25f1a/VASQUEZ-Johan_425701"
  },
  "425804": {
    fifaId: "425804",
    teamCode: "KSA",
    name: "Saleh Al-Shehri",
    number: 11,
    position: "FW",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/a912d91a-f467-4d57-a2fc-7937f8cafb66/SALEH-ALSHEHRI_425804"
  },
  "428882": {
    fifaId: "428882",
    teamCode: "ARG",
    name: "De Paul",
    number: 7,
    position: "MF",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/314bcb4c-8c81-4bce-9750-85827a209c1b/DE-PAUL-Rodrigo_428882"
  },
  "428885": {
    fifaId: "428885",
    teamCode: "ECU",
    name: "M. Caicedo",
    number: 23,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/ae32bbc5-09f0-4743-ae0a-5b80461bdc79/CAICEDO-Moises_428885"
  },
  "429095": {
    fifaId: "429095",
    teamCode: "EGY",
    name: "Hamdi Fathi",
    number: 8,
    position: "MF",
    club: "Al Wakrah",
    pictureUrl: "https://digitalhub.fifa.com/transform/2de277f5-cea7-47f9-9635-f9fb3a205c2a/HAMDY-FATHY_429095"
  },
  "429608": {
    fifaId: "429608",
    teamCode: "KOR",
    name: "Seol Young-woo",
    number: 22,
    position: "DF",
    club: "FK Crvena zvezda",
    pictureUrl: "https://digitalhub.fifa.com/transform/db3b1a56-6cf2-42ad-9d02-139333d68f38/SEOL-Youngwoo_429608"
  },
  "429642": {
    fifaId: "429642",
    teamCode: "GER",
    name: "J. Musiala",
    number: 10,
    position: "MF",
    club: "Bayern Munique",
    pictureUrl: "https://digitalhub.fifa.com/transform/05f50027-268f-43ff-ba75-1b477b37ca60/MUSIALA-Jamal_429642"
  },
  "430097": {
    fifaId: "430097",
    teamCode: "SCO",
    name: "R. Christie",
    number: 21,
    position: "FW",
    club: "Bournemouth",
    pictureUrl: "https://digitalhub.fifa.com/transform/fce70106-25b4-4b34-b12b-10e4c6e90c18/CHRISTIE-Ryan_430097"
  },
  "430138": {
    fifaId: "430138",
    teamCode: "CAN",
    name: "T. Buchanan",
    number: 11,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/a607b6f5-fe42-4a89-9e88-cb9690e4bcd1/BUCHANAN-Tajon_430138"
  },
  "430150": {
    fifaId: "430150",
    teamCode: "SWE",
    name: "A. Isak",
    number: 9,
    position: "FW",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/c6ffe63b-aefd-43b8-bd9d-3c6e31a8f418/ISAK-Alexander_430150"
  },
  "430194": {
    fifaId: "430194",
    teamCode: "BIH",
    name: "D. Had\u017Eikaduni\u0107",
    number: 14,
    position: "DF",
    club: "FC K\xF6ln",
    pictureUrl: "https://digitalhub.fifa.com/transform/6cacbe9a-89b9-4eee-8d20-4e68fc0ef7ad/HADZIKADUNIC-Dennis_430194"
  },
  "430387": {
    fifaId: "430387",
    teamCode: "KOR",
    name: "Cho Gue-sung",
    number: 9,
    position: "FW",
    club: "Midtjylland",
    pictureUrl: "https://digitalhub.fifa.com/transform/6efa6506-c1f1-4659-8249-9bc800f32691/CHO-Guesung_430387"
  },
  "430413": {
    fifaId: "430413",
    teamCode: "JPN",
    name: "A. Ueda",
    number: 9,
    position: "FW",
    club: "Feyenoord",
    pictureUrl: "https://digitalhub.fifa.com/transform/1b05e82f-94e8-470d-9c12-f9bdf1a0e080/UEDA-Ayase_430413"
  },
  "430442": {
    fifaId: "430442",
    teamCode: "AUS",
    name: "H. Souttar",
    number: 19,
    position: "DF",
    club: "Leicester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/6777563e-5036-4252-9809-a0cc21d96147/SOUTTAR-Harry_430442"
  },
  "430477": {
    fifaId: "430477",
    teamCode: "EGY",
    name: "Ahmed Fattouh",
    number: 13,
    position: "DF",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/c22759e9-6346-4cb7-8611-74074421be7f/AHMED-FATOUH_430477"
  },
  "430482": {
    fifaId: "430482",
    teamCode: "EGY",
    name: "Emam Ashour",
    number: 22,
    position: "MF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/6d203b10-285b-4800-b448-e34d2b3a3e09/EMAM-ASHOUR_430482"
  },
  "430628": {
    fifaId: "430628",
    teamCode: "ARG",
    name: "Mac Allister",
    number: 20,
    position: "MF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/78b6a9e4-f2b9-4e19-b414-79b18858caaf/MAC-ALLISTER-Alexis_430628"
  },
  "430657": {
    fifaId: "430657",
    teamCode: "GER",
    name: "D. Raum",
    number: 3,
    position: "DF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/ce3509c6-13ad-441a-8d05-9d42f8a4578c/RAUM-David_430657"
  },
  "430669": {
    fifaId: "430669",
    teamCode: "GER",
    name: "F. Wirtz",
    number: 17,
    position: "FW",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/3a120189-62cc-441f-b862-7fdd2a9abfa4/WIRTZ-Florian_430669"
  },
  "430671": {
    fifaId: "430671",
    teamCode: "SEN",
    name: "I. Jakobs",
    number: 5,
    position: "DF",
    club: "Monaco",
    pictureUrl: "https://digitalhub.fifa.com/transform/a24c412d-22cb-4d33-a341-e7f5e731756a/JAKOBS-Ismail_430671"
  },
  "430698": {
    fifaId: "430698",
    teamCode: "ALG",
    name: "H. Aouar",
    number: 28,
    position: "MF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/ac743888-d671-4971-9df9-594b591f2425/AOUAR-Houssem_430698"
  },
  "430707": {
    fifaId: "430707",
    teamCode: "FRA",
    name: "Kound\xE9",
    number: 5,
    position: "DF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/31b384b6-20b7-4629-ab33-aa67cf403fc3/KOUNDE-Jules_430707"
  },
  "430718": {
    fifaId: "430718",
    teamCode: "ESP",
    name: "Fabi\xE1n Ruiz",
    number: 8,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/c40ded96-190d-41c8-90f2-6a253a63b33d/RUIZ-Fabian_430718"
  },
  "430735": {
    fifaId: "430735",
    teamCode: "ESP",
    name: "Marc Cucurella",
    number: 24,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/3bc6b871-a4b2-4201-8885-a77420f4c7c9/CUCURELLA-Marc_430735"
  },
  "430740": {
    fifaId: "430740",
    teamCode: "MAR",
    name: "Brahim D\xEDaz",
    number: 10,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/b05c2233-cb0a-4abc-9413-e56ad25f0899/DIAZ-Brahim_430740"
  },
  "430753": {
    fifaId: "430753",
    teamCode: "ESP",
    name: "Unai Sim\xF3n",
    number: 23,
    position: "GK",
    club: "Athletic Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/41e0f920-bd7d-4bd6-882b-c83ed33e3f26/SIMON-Unai_430753"
  },
  "430759": {
    fifaId: "430759",
    teamCode: "MEX",
    name: "S. Gim\xE9nez",
    number: 11,
    position: "FW",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/0e27d0c6-e057-4d0c-a603-3843fcd0c542/GIMENEZ-Santiago_430759"
  },
  "431196": {
    fifaId: "431196",
    teamCode: "ARG",
    name: "Romero",
    number: 13,
    position: "DF",
    club: "Tottenham",
    pictureUrl: "https://digitalhub.fifa.com/transform/61d5d60a-7e5a-4a29-919d-c52bd80b9a5a/ROMERO-Cristian_431196"
  },
  "431202": {
    fifaId: "431202",
    teamCode: "PAR",
    name: "O. Alderete",
    number: 3,
    position: "DF",
    club: "Getafe",
    pictureUrl: "https://digitalhub.fifa.com/transform/2b408b3b-5027-445e-9b55-6139deed7bea/ALDERETE-Omar_431202"
  },
  "431693": {
    fifaId: "431693",
    teamCode: "HAI",
    name: "F. Pierrot",
    number: 20,
    position: "FW",
    club: "Maccabi Haifa",
    pictureUrl: "https://digitalhub.fifa.com/transform/0faa5cdb-4727-42be-b2b8-cedf04a37dd6/PIERROT-Frantzdy_431693"
  },
  "431698": {
    fifaId: "431698",
    teamCode: "CUW",
    name: "J. Gaari",
    number: 2,
    position: "DF",
    club: "Al Hazem",
    pictureUrl: "https://digitalhub.fifa.com/transform/4744d27b-6a5c-48be-a849-48facb6f6d6e/GAARI-Jurien_431698"
  },
  "431788": {
    fifaId: "431788",
    teamCode: "SEN",
    name: "P. Gueye",
    number: 8,
    position: "MF",
    club: "Marselha",
    pictureUrl: "https://digitalhub.fifa.com/transform/ce2a3833-450c-413b-990f-7c76132e4913/GUEYE-Pape_431788"
  },
  "433072": {
    fifaId: "433072",
    teamCode: "TUR",
    name: "Z. \xC7elik",
    number: 2,
    position: "DF",
    club: "Roma",
    pictureUrl: "https://digitalhub.fifa.com/transform/903b63c2-ab06-47b8-911c-bf4f026601fd/CELIK-Zeki_433072"
  },
  "433074": {
    fifaId: "433074",
    teamCode: "IRQ",
    name: "A. Alammari",
    number: 16,
    position: "MF",
    pictureUrl: "https://digitalhub.fifa.com/transform/d80ff1d4-6bce-462b-bc11-6b4049fe9741/AMIR-ALAMMARI_433074"
  },
  "433191": {
    fifaId: "433191",
    teamCode: "SCO",
    name: "C. Adams",
    number: 10,
    position: "FW",
    club: "Torino",
    pictureUrl: "https://digitalhub.fifa.com/transform/1a70c52f-9a4b-4dc1-813b-991877aa4758/ADAMS-Che_433191"
  },
  "433362": {
    fifaId: "433362",
    teamCode: "TUN",
    name: "A. Abdi",
    number: 2,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/8ff3509c-8a73-40ea-ac0e-1beed4560b23/ABDI-Ali_433362"
  },
  "433365": {
    fifaId: "433365",
    teamCode: "TUN",
    name: "A. Dahmen",
    number: 16,
    position: "GK",
    club: "Augsburg",
    pictureUrl: "https://digitalhub.fifa.com/transform/90030173-815d-4411-8eac-20fb42834f9d/DAHMEN-Aymen_433365"
  },
  "433378": {
    fifaId: "433378",
    teamCode: "TUN",
    name: "H. Mejbri",
    number: 10,
    position: "MF",
    club: "Burnley",
    pictureUrl: "https://digitalhub.fifa.com/transform/856f0cc0-6dcc-48bc-a8db-f4fe26d8ae06/MEJBRI-Hannibal_433378"
  },
  "433380": {
    fifaId: "433380",
    teamCode: "TUN",
    name: "M. Talbi",
    number: 3,
    position: "DF",
    club: "Lorient",
    pictureUrl: "https://digitalhub.fifa.com/transform/253ef705-760c-457f-afde-067d2fb39010/TALBI-Montassar_433380"
  },
  "433585": {
    fifaId: "433585",
    teamCode: "IRQ",
    name: "I. Bayesh",
    number: 8,
    position: "MF",
    pictureUrl: "https://digitalhub.fifa.com/transform/390fdc3f-232a-445d-a80e-1c9cc8a67df7/IBRAHIM-BAYESH_433585"
  },
  "433635": {
    fifaId: "433635",
    teamCode: "CAN",
    name: "S. Eust\xE1quio",
    number: 7,
    position: "MF",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c0650a1-bba7-4998-b6b6-ebddeed58058/EUSTAQUIO-Stephen_433635"
  },
  "433724": {
    fifaId: "433724",
    teamCode: "CPV",
    name: "Willy Semedo",
    number: 17,
    position: "FW",
    club: "Al-Faisaly",
    pictureUrl: "https://digitalhub.fifa.com/transform/37b3a4c5-6899-487c-892a-1d9791945ba3/WILLY-SEMEDO_433724"
  },
  "433754": {
    fifaId: "433754",
    teamCode: "CZE",
    name: "A. Hlo\u017Eek",
    number: 9,
    position: "FW",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/530c1ea8-c013-4858-bb7d-0b71a763a1a1/HLOZEK-Adam_433754"
  },
  "433787": {
    fifaId: "433787",
    teamCode: "SCO",
    name: "S. McTominay",
    number: 4,
    position: "MF",
    club: "Napoli",
    pictureUrl: "https://digitalhub.fifa.com/transform/483440e3-5bdc-46e2-9b80-77e880b5fd85/McTOMINAY-Scott_433787"
  },
  "433806": {
    fifaId: "433806",
    teamCode: "SEN",
    name: "\xC9. Mendy",
    number: 16,
    position: "GK",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/9093beeb-51a2-4e1d-b700-73e094c6949c/MENDY-Edouard_433806"
  },
  "434025": {
    fifaId: "434025",
    teamCode: "IRQ",
    name: "Z. Tahseen",
    number: 4,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/84a4d1c5-8fe9-4d23-bb47-5dddfdf566bf/ZAID-TAHSEEN_434025"
  },
  "436612": {
    fifaId: "436612",
    teamCode: "NED",
    name: "D. Dumfries",
    number: 22,
    position: "DF",
    club: "Inter de Mil\xE3o",
    pictureUrl: "https://digitalhub.fifa.com/transform/f2a2746b-7691-40c4-a052-60db3219a856/DUMFRIES-Denzel_436612"
  },
  "436628": {
    fifaId: "436628",
    teamCode: "IRQ",
    name: "A. Alhamadi",
    number: 9,
    position: "FW",
    pictureUrl: "https://digitalhub.fifa.com/transform/00b5271a-9033-43ab-9073-7b2ec9e4426e/ALI-ALHAMADI_436628"
  },
  "436743": {
    fifaId: "436743",
    teamCode: "BIH",
    name: "E. Demirovi\u0107",
    number: 9,
    position: "FW",
    club: "Stuttgart",
    pictureUrl: "https://digitalhub.fifa.com/transform/b9e9f187-0936-4aba-9c70-2a4bcf2281e0/DEMIROVIC-Ermedin_436743"
  },
  "439956": {
    fifaId: "439956",
    teamCode: "URU",
    name: "Facundo Pellistri",
    number: 11,
    position: "FW",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/51b7eeb6-cac1-48cd-9ed3-4a18b34c5d90/PELLISTRI-Facundo_439956"
  },
  "441137": {
    fifaId: "441137",
    teamCode: "SWE",
    name: "A. Elanga",
    number: 11,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/38e8d10e-aa56-4837-a589-35bc4dcc23a3/ELANGA-Anthony_441137"
  },
  "441162": {
    fifaId: "441162",
    teamCode: "CZE",
    name: "J. Stanek",
    number: 1,
    position: "GK",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/9351d9a7-4be7-4c59-8e0e-3f5fbca8ac7d/STANEK-Jindrich_441162"
  },
  "441167": {
    fifaId: "441167",
    teamCode: "CZE",
    name: "T. Holes",
    number: 3,
    position: "DF",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/25d4147e-8cc2-4262-bba5-3e47680a3f23/HOLES-Tomas_441167"
  },
  "441170": {
    fifaId: "441170",
    teamCode: "CZE",
    name: "L. Krejci",
    number: 7,
    position: "DF",
    club: "Girona",
    pictureUrl: "https://digitalhub.fifa.com/transform/04ca9e4e-8ab3-458e-a689-2ac49094fb23/KREJCI-Ladislav_441170"
  },
  "441179": {
    fifaId: "441179",
    teamCode: "TUR",
    name: "M. Demiral",
    number: 3,
    position: "DF",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/905e3e12-72e9-440d-96f5-0b3a48aebe92/DEMIRAL-Merih_441179"
  },
  "441188": {
    fifaId: "441188",
    teamCode: "TUR",
    name: "K. Akt\xFCrko\u011Flu",
    number: 7,
    position: "FW",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/9cccf7c0-ebfc-4b65-8587-74742f5a9992/AKTURKOGLU-Kerem_441188"
  },
  "441234": {
    fifaId: "441234",
    teamCode: "PAR",
    name: "J. Enciso",
    number: 17,
    position: "FW",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/aa8ef158-6636-46a9-a6fb-185a2f92ad95/ENCISO-Julio_441234"
  },
  "441236": {
    fifaId: "441236",
    teamCode: "ECU",
    name: "H. Galindez",
    number: 1,
    position: "GK",
    club: "Huracan",
    pictureUrl: "https://digitalhub.fifa.com/transform/679fc90e-2f98-4494-a4dd-f26442fae6d3/GALINDEZ-Hernan_441236"
  },
  "441251": {
    fifaId: "441251",
    teamCode: "USA",
    name: "A. Robinson",
    number: 5,
    position: "DF",
    club: "Fulham",
    pictureUrl: "https://digitalhub.fifa.com/transform/62363054-d9e0-4926-9404-90b975d56647/ROBINSON-Antonee_441251"
  },
  "441252": {
    fifaId: "441252",
    teamCode: "CAN",
    name: "A. Johnston",
    number: 2,
    position: "DF",
    club: "Celtic",
    pictureUrl: "https://digitalhub.fifa.com/transform/bd760593-4ed3-405e-b497-f508dbc8bbdf/JOHNSTON-Alistair_441252"
  },
  "441257": {
    fifaId: "441257",
    teamCode: "CAN",
    name: "J. David",
    number: 20,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/97ad628a-b97d-4657-ac41-f2a667c534e6/DAVID-Jonathan_441257"
  },
  "441258": {
    fifaId: "441258",
    teamCode: "CAN",
    name: "I. Kon\xE9",
    number: 18,
    position: "MF",
    club: "Marselha",
    pictureUrl: "https://digitalhub.fifa.com/transform/51344b42-77de-4109-a167-7723dc1d4dd2/KONE-Ismael_441258"
  },
  "441307": {
    fifaId: "441307",
    teamCode: "MAR",
    name: "A. Ounahi",
    number: 8,
    position: "MF",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/f823c3da-d540-436c-9b56-bfccdc4b51bc/OUNAHI-Azzedine_441307"
  },
  "441623": {
    fifaId: "441623",
    teamCode: "URU",
    name: "Manuel Ugarte",
    number: 5,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/4ff94bd7-9c21-4338-be92-bad080e8d541/UGARTE-Manuel_441623"
  },
  "442430": {
    fifaId: "442430",
    teamCode: "SCO",
    name: "J. Souttar",
    number: 5,
    position: "DF",
    club: "Rangers",
    pictureUrl: "https://digitalhub.fifa.com/transform/4b905694-87c7-4148-be4b-802e4dbcc7ba/SOUTTAR-John_442430"
  },
  "442431": {
    fifaId: "442431",
    teamCode: "SCO",
    name: "S. McKenna",
    number: 15,
    position: "DF",
    club: "Las Palmas",
    pictureUrl: "https://digitalhub.fifa.com/transform/073ebe12-5ba9-4de4-8729-2a0b0e942b43/McKENNA-Scott_442431"
  },
  "447855": {
    fifaId: "447855",
    teamCode: "ESP",
    name: "Nico Williams",
    number: 11,
    position: "FW",
    club: "Athletic Club",
    pictureUrl: "https://digitalhub.fifa.com/transform/1792665e-37cb-421d-969b-e6a3edbd8d76/WILLIAMS-Nico_447855"
  },
  "448051": {
    fifaId: "448051",
    teamCode: "MEX",
    name: "L. Ch\xE1vez",
    number: 24,
    position: "MF",
    club: "D\xEDnamo Moscou",
    pictureUrl: "https://digitalhub.fifa.com/transform/a09b97d9-6b02-45d4-aae8-b8ed274e5634/CHAVEZ-Luis_448051"
  },
  "448152": {
    fifaId: "448152",
    teamCode: "NED",
    name: "C. Gakpo",
    number: 11,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/bbb5637f-0587-4ddd-8a82-604c0d921bb3/GAKPO-Cody_448152"
  },
  "448217": {
    fifaId: "448217",
    teamCode: "USA",
    name: "M. Turner",
    number: 1,
    position: "GK",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/01fb042f-5de5-41df-8104-7445672fdca5/TURNER-Matt_448217"
  },
  "448252": {
    fifaId: "448252",
    teamCode: "ARG",
    name: "Enzo F.",
    fullName: "Enzo Fern\xE1ndez",
    number: 24,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/b88c6da2-28db-4d61-a668-ac8e84114063/FERNANDEZ-Enzo_448252"
  },
  "ARG-1": {
    fifaId: "ARG-1",
    teamCode: "ARG",
    name: "W. Ben\xEDtez",
    fullName: "Walter Ben\xEDtez",
    number: 1,
    position: "GK",
    club: "PSG"
  },
  "ARG-2": {
    fifaId: "ARG-2",
    teamCode: "ARG",
    name: "Montiel",
    fullName: "Gonzalo Montiel",
    number: 2,
    position: "DF",
    club: "Nottingham Forest"
  },
  "ARG-4": {
    fifaId: "ARG-4",
    teamCode: "ARG",
    name: "N. P\xE9rez",
    fullName: "Nehu\xE9n P\xE9rez",
    number: 4,
    position: "DF",
    club: "Atl\xE9tico Madrid"
  },
  "ARG-5": {
    fifaId: "ARG-5",
    teamCode: "ARG",
    name: "Paredes",
    fullName: "Leandro Paredes",
    number: 5,
    position: "MF",
    club: "Roma"
  },
  "ARG-6": {
    fifaId: "ARG-6",
    teamCode: "ARG",
    name: "L. Mart\xEDnez",
    fullName: "Lisandro Mart\xEDnez",
    number: 6,
    position: "DF",
    club: "Manchester United"
  },
  "ARG-8": {
    fifaId: "ARG-8",
    teamCode: "ARG",
    name: "G. Rodr\xEDguez",
    fullName: "Guido Rodr\xEDguez",
    number: 8,
    position: "MF",
    club: "Real Betis"
  },
  "ARG-11": {
    fifaId: "ARG-11",
    teamCode: "ARG",
    name: "Garnacho",
    fullName: "Alejandro Garnacho",
    number: 11,
    position: "FW",
    club: "Manchester United"
  },
  "ARG-12": {
    fifaId: "ARG-12",
    teamCode: "ARG",
    name: "Rulli",
    fullName: "Ger\xF3nimo Rulli",
    number: 12,
    position: "GK",
    club: "Atl\xE9tico Madrid"
  },
  "ARG-14": {
    fifaId: "ARG-14",
    teamCode: "ARG",
    name: "Palacios",
    fullName: "Exequiel Palacios",
    number: 14,
    position: "MF",
    club: "Bayer Leverkusen"
  },
  "ARG-15": {
    fifaId: "ARG-15",
    teamCode: "ARG",
    name: "N. Gonz\xE1lez",
    fullName: "Nicol\xE1s Gonz\xE1lez",
    number: 15,
    position: "FW",
    club: "Juventus"
  },
  "ARG-16": {
    fifaId: "ARG-16",
    teamCode: "ARG",
    name: "Acu\xF1a",
    fullName: "Marcos Acu\xF1a",
    number: 16,
    position: "DF",
    club: "Sevilla"
  },
  "ARG-17": {
    fifaId: "ARG-17",
    teamCode: "ARG",
    name: "Lo Celso",
    fullName: "Giovani Lo Celso",
    number: 17,
    position: "MF",
    club: "Villarreal"
  },
  "ARG-18": {
    fifaId: "ARG-18",
    teamCode: "ARG",
    name: "Almada",
    fullName: "Thiago Almada",
    number: 18,
    position: "MF",
    club: "Lyon"
  },
  "ARG-21": {
    fifaId: "ARG-21",
    teamCode: "ARG",
    name: "F. Medina",
    fullName: "Facundo Medina",
    number: 21,
    position: "DF",
    club: "RC Lens"
  },
  "ARG-25": {
    fifaId: "ARG-25",
    teamCode: "ARG",
    name: "Carboni",
    fullName: "Valent\xEDn Carboni",
    number: 25,
    position: "FW",
    club: "Inter Milan"
  },
  "448332": {
    fifaId: "448332",
    teamCode: "FRA",
    name: "Maignan",
    number: 1,
    position: "GK",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/3f92a933-a22d-4f58-8f4f-b51370aeacf4/MAIGNAN-Mike_448332"
  },
  "448341": {
    fifaId: "448341",
    teamCode: "BEL",
    name: "J\xE9r\xE9my Doku",
    number: 22,
    position: "FW",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/df41be47-900d-41fe-90eb-b493f7609869/DOKU-Jeremy_448341"
  },
  "448346": {
    fifaId: "448346",
    teamCode: "BEL",
    name: "Arthur Theate",
    number: 3,
    position: "DF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/34da124d-c474-4154-90e9-aa132a5df818/THEATE-Arthur_448346"
  },
  "448355": {
    fifaId: "448355",
    teamCode: "BEL",
    name: "Leandro Trossard",
    number: 11,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/78476568-5abb-4047-b6c0-fd9651e0f39d/TROSSARD-Leandro_448355"
  },
  "448364": {
    fifaId: "448364",
    teamCode: "BEL",
    name: "Amadou Onana",
    number: 24,
    position: "MF",
    club: "Aston Villa",
    pictureUrl: "https://digitalhub.fifa.com/transform/697ee4f8-3df1-4ce5-a8b9-c9dae1ed6aba/ONANA-Amadou_448364"
  },
  "448369": {
    fifaId: "448369",
    teamCode: "BEL",
    name: "Zeno Debast",
    number: 2,
    position: "DF",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/f6f8a277-eb22-4353-9ce1-a8abe7749d1d/DEBAST-Zeno_448369"
  },
  "448612": {
    fifaId: "448612",
    teamCode: "MAR",
    name: "B. El Khannouss",
    number: 17,
    position: "MF",
    club: "Leicester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/8e73a0cb-8200-4870-b0bc-12901de8076f/EL-KHANNOUSS-Bilal_448612"
  },
  "448662": {
    fifaId: "448662",
    teamCode: "TUN",
    name: "A. Achouri",
    number: 11,
    position: "FW",
    club: "Copenhagen",
    pictureUrl: "https://digitalhub.fifa.com/transform/5ffd95df-83a5-4768-9331-0842c3f433b6/ACHOURI-Elias_448662"
  },
  "461788": {
    fifaId: "461788",
    teamCode: "EGY",
    name: "Marwan Attia",
    number: 19,
    position: "MF",
    club: "Al Ahly",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf051f82-c8a8-4328-9439-2ab64f616b83/MARAWAN-ATTIA_461788"
  },
  "463125": {
    fifaId: "463125",
    teamCode: "PAR",
    name: "R. Sosa",
    number: 19,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/fb29327f-14b3-4b8f-af4e-3816404afaed/SOSA-Ramon_463125"
  },
  "463218": {
    fifaId: "463218",
    teamCode: "RSA",
    name: "K. Mudau",
    number: 2,
    position: "DF",
    club: "Mamelodi Sundowns",
    pictureUrl: "https://digitalhub.fifa.com/transform/29d0b36b-2727-4fc0-ab1e-4d21b5858f5a/MUDAU-Khuliso_463218"
  },
  "463495": {
    fifaId: "463495",
    teamCode: "ECU",
    name: "K. Paez",
    number: 10,
    position: "MF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/ee18ba2f-5e31-4e33-8739-f0d59033c409/PAEZ-Kendry_463495"
  },
  "464457": {
    fifaId: "464457",
    teamCode: "IRQ",
    name: "A. Jasim",
    number: 17,
    position: "FW",
    pictureUrl: "https://digitalhub.fifa.com/transform/75d61654-11c8-4646-8e47-7c4c977b29b6/ALI-JASIM_464457"
  },
  "466317": {
    fifaId: "466317",
    teamCode: "CUW",
    name: "J. Bacuna",
    number: 8,
    position: "MF",
    club: "Al Wehda",
    pictureUrl: "https://digitalhub.fifa.com/transform/804768d8-badb-4492-9aef-1e523440aed4/BACUNA-Juninho_466317"
  },
  "466340": {
    fifaId: "466340",
    teamCode: "CUW",
    name: "L. Bacuna",
    number: 10,
    position: "MF",
    club: "Groningen",
    pictureUrl: "https://digitalhub.fifa.com/transform/ae48f357-6b53-4d49-b62f-fbfb4a041b62/BACUNA-Leandro_466340"
  },
  "466585": {
    fifaId: "466585",
    teamCode: "CAN",
    name: "M. Bombito",
    number: 4,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/2d2bbffa-0dcf-47c1-b681-706566867489/BOMBITO-Moise_466585"
  },
  "466624": {
    fifaId: "466624",
    teamCode: "USA",
    name: "F. Balogun",
    number: 20,
    position: "FW",
    club: "Monaco",
    pictureUrl: "https://digitalhub.fifa.com/transform/bd47db79-966e-4eba-a8da-f6ba01148f27/BALOGUN-Folarin_466624"
  },
  "466835": {
    fifaId: "466835",
    teamCode: "HAI",
    name: "L. Pierre",
    number: 14,
    position: "MF",
    club: "Dunkerque",
    pictureUrl: "https://digitalhub.fifa.com/transform/68889bed-7acd-4e67-a3bd-a18a300e70a0/PIERRE-Alexandre_466835"
  },
  "466838": {
    fifaId: "466838",
    teamCode: "HAI",
    name: "D. Jean Jacques",
    number: 17,
    position: "MF",
    club: "Metz",
    pictureUrl: "https://digitalhub.fifa.com/transform/948f9361-348d-4c5d-a26f-83205cae2f6b/JEAN-JACQUES-Danley_466838"
  },
  "472908": {
    fifaId: "472908",
    teamCode: "CZE",
    name: "V. Coufal",
    number: 5,
    position: "DF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/e013f16f-8ada-4532-b3c4-b674b0e08cc9/COUFAL-Vladimir_472908"
  },
  "477770": {
    fifaId: "477770",
    teamCode: "CPV",
    name: "Roberto Lopes",
    number: 3,
    position: "DF",
    club: "Shamrock Rovers",
    pictureUrl: "https://digitalhub.fifa.com/transform/aae92383-d5ce-4d00-8eb8-71891a619d11/PICO-LOPES_477770"
  },
  "477802": {
    fifaId: "477802",
    teamCode: "CIV",
    name: "O. Diomande",
    number: 4,
    position: "MF",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/45b55597-6503-4470-a778-af125afb698a/DIOMANDE-Ousmane_477802"
  },
  "477825": {
    fifaId: "477825",
    teamCode: "CIV",
    name: "O. Kossounou",
    number: 7,
    position: "DF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/c3d01f63-7112-4a0d-a50b-0d85927676e9/KOSSOUNOU-Odilon_477825"
  },
  "477827": {
    fifaId: "477827",
    teamCode: "CPV",
    name: "Deroy Duarte",
    number: 14,
    position: "MF",
    club: "Fortuna Sittard",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2a1dda5-24bd-4ef1-8ef4-cde9f3f3b644/DEROY-DUARTE_477827"
  },
  "477831": {
    fifaId: "477831",
    teamCode: "CPV",
    name: "Logan Costa",
    number: 4,
    position: "DF",
    club: "Toulouse",
    pictureUrl: "https://digitalhub.fifa.com/transform/248677f0-fc09-4244-a18f-7ef9afb98dcc/LOGAN-COSTA_477831"
  },
  "477847": {
    fifaId: "477847",
    teamCode: "CPV",
    name: "Steven Moreira",
    number: 22,
    position: "DF",
    club: "Columbus Crew",
    pictureUrl: "https://digitalhub.fifa.com/transform/79a2bdd5-b9a9-41d1-8fdd-3dff50346705/STEVEN-MOREIRA_477847"
  },
  "477852": {
    fifaId: "477852",
    teamCode: "CPV",
    name: "Kevin Pina",
    number: 8,
    position: "MF",
    club: "CSKA Sofia",
    pictureUrl: "https://digitalhub.fifa.com/transform/40e5a4a5-c7f0-4b0e-8a6e-d8ffbaa12d29/KEVIN-PINA_477852"
  },
  "477855": {
    fifaId: "477855",
    teamCode: "CPV",
    name: "Jo\xE3o Paulo",
    number: 5,
    position: "DF",
    club: "Omonia",
    pictureUrl: "https://digitalhub.fifa.com/transform/18ee15aa-604d-4dea-964e-7b0a73f3f710/JOAO-PAULO_477855"
  },
  "477856": {
    fifaId: "477856",
    teamCode: "CPV",
    name: "Jovane Cabral",
    number: 7,
    position: "MF",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/4bc8360c-8ddd-4449-9e5f-a100502763b7/JOVANE-CABRAL_477856"
  },
  "479072": {
    fifaId: "479072",
    teamCode: "IRQ",
    name: "M. Doski",
    number: 23,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/c2ac4751-fd73-4685-8bb6-de4c07266fda/MERCHAS-DOSKI_479072"
  },
  "479553": {
    fifaId: "479553",
    teamCode: "IRQ",
    name: "H. Ali",
    number: 3,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/9c065420-c134-4227-aef3-d6d07f0a9b8d/HUSSEIN-ALI_479553"
  },
  "481027": {
    fifaId: "481027",
    teamCode: "HAI",
    name: "L. Don Deedson",
    number: 7,
    position: "FW",
    club: "Odense",
    pictureUrl: "https://digitalhub.fifa.com/transform/3838199f-c956-4b7c-a728-eef76a086a78/DEEDSON-Louicius_481027"
  },
  "482775": {
    fifaId: "482775",
    teamCode: "NZL",
    name: "Tyler Bindon",
    number: 4,
    position: "DF",
    club: "Reading",
    pictureUrl: "https://digitalhub.fifa.com/transform/14976514-36f8-43b9-80c8-67fb73d13d6b/BINDON-Tyler_482775"
  },
  "482869": {
    fifaId: "482869",
    teamCode: "ALG",
    name: "J. Hadjam",
    number: 19,
    position: "DF",
    club: "Eintracht Frankfurt",
    pictureUrl: "https://digitalhub.fifa.com/transform/c24e6b93-736c-41a7-be57-2e165509ce5c/HADJAM-Jaouen_482869"
  },
  "482976": {
    fifaId: "482976",
    teamCode: "BIH",
    name: "A. Dedi\u0107",
    number: 2,
    position: "DF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/87dcec5a-fbf4-45d7-8f1e-26e00140cce7/DEDIC-Amar_482976"
  },
  "482978": {
    fifaId: "482978",
    teamCode: "BIH",
    name: "N. Vasilj",
    number: 1,
    position: "GK",
    club: "Midtjylland",
    pictureUrl: "https://digitalhub.fifa.com/transform/be1c5819-9bc1-4bf3-b677-9172d1be6bea/VASILJ-Nikola_482978"
  },
  "482984": {
    fifaId: "482984",
    teamCode: "BIH",
    name: "H. Tabakovi\u0107",
    number: 29,
    position: "FW",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/b84ad80f-6b2b-455d-9c2e-f71195b5c2ba/TABAKOVIC-Haris_482984"
  },
  "483312": {
    fifaId: "483312",
    teamCode: "SWE",
    name: "I. Hien",
    number: 4,
    position: "DF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/0daf43d1-2714-4cc3-ab8b-3cf2020bf150/HIEN-Isak_483312"
  },
  "483327": {
    fifaId: "483327",
    teamCode: "SWE",
    name: "V. Gyokeres",
    number: 17,
    position: "FW",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/ca3d75bf-7e31-4269-9933-b296eb3f5bff/GYOKERES-Viktor_483327"
  },
  "483448": {
    fifaId: "483448",
    teamCode: "NOR",
    name: "A. Nusa",
    number: 20,
    position: "FW",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/8522d4db-c622-4f88-9b98-62753ca74eec/NUSA-Antonio_483448"
  },
  "483496": {
    fifaId: "483496",
    teamCode: "NOR",
    name: "J. Ryerson",
    number: 26,
    position: "FW",
    club: "Borussia Dortmund",
    pictureUrl: "https://digitalhub.fifa.com/transform/cf3ebe3b-012d-411b-af4e-ba0b59bb9e17/RYERSON-Julian_483496"
  },
  "483497": {
    fifaId: "483497",
    teamCode: "NOR",
    name: "F. Aursnes",
    number: 14,
    position: "MF",
    club: "Benfica",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bf9f1d6-b7ec-4c50-9337-059f6eb0c097/AURSNES-Fredrik_483497"
  },
  "483505": {
    fifaId: "483505",
    teamCode: "NOR",
    name: "D. M\xF8ller Wolfe",
    number: 5,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/27678ee5-00fb-4d48-ac88-402cab97d566/MOLLER-WOLFE-David_483505"
  },
  "483516": {
    fifaId: "483516",
    teamCode: "NOR",
    name: "K. Ajer",
    number: 3,
    position: "DF",
    club: "Brentford",
    pictureUrl: "https://digitalhub.fifa.com/transform/28de8091-50a6-4c54-9e7b-62788b087a3a/AJER-Kristoffer_483516"
  },
  "483526": {
    fifaId: "483526",
    teamCode: "NED",
    name: "T. Reijnders",
    number: 14,
    position: "MF",
    club: "Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/3f7090ee-2e95-4b6c-a098-729b07484fb2/REIJNDERS-Tijjani_483526"
  },
  "483990": {
    fifaId: "483990",
    teamCode: "CZE",
    name: "D. Jur\xE1sek",
    number: 13,
    position: "DF",
    club: "Hoffenheim",
    pictureUrl: "https://digitalhub.fifa.com/transform/4e32c53e-28e4-4757-ab4e-c7b18cee9bbf/JURASEK-David_483990"
  },
  "484011": {
    fifaId: "484011",
    teamCode: "CZE",
    name: "L. Provod",
    number: 14,
    position: "MF",
    club: "Slavia Praga",
    pictureUrl: "https://digitalhub.fifa.com/transform/e5e6a265-9886-4e25-97c0-c4f2f230277d/PROVOD-Lukas_484011"
  },
  "484082": {
    fifaId: "484082",
    teamCode: "TUR",
    name: "A. Bardakc\u0131",
    number: 14,
    position: "DF",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/de2b1023-3aee-4233-b83d-07f94fd288d4/BARDAKCI-Abdulkerim_484082"
  },
  "484087": {
    fifaId: "484087",
    teamCode: "TUR",
    name: "A. G\xFCler",
    number: 8,
    position: "MF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/e2f26175-13ac-4850-acd7-6408de06ce19/GULER-Arda_484087"
  },
  "484092": {
    fifaId: "484092",
    teamCode: "TUR",
    name: "\u0130. Y\xFCksek",
    number: 16,
    position: "MF",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/1f8b0453-0b84-4eea-9c24-9cd992611aed/YUKSEK-Ismail_484092"
  },
  "484112": {
    fifaId: "484112",
    teamCode: "TUR",
    name: "K. Y\u0131ld\u0131z",
    number: 11,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/7dff809e-a965-4b36-a7b5-8da772fc96a5/YILDIZ-Kenan_484112"
  },
  "484113": {
    fifaId: "484113",
    teamCode: "TUR",
    name: "F. Kadioglu",
    number: 20,
    position: "DF",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/c69621e7-9ba5-438d-89dc-7871b6e0f611/KADIOGLU-Ferdi_484113"
  },
  "484139": {
    fifaId: "484139",
    teamCode: "TUR",
    name: "B. Y\u0131lmaz",
    number: 21,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/49e46d17-bf69-41b1-a8df-5aeabf137c7d/YILMAZ-Baris-Alper_484139"
  },
  "484270": {
    fifaId: "484270",
    teamCode: "IRQ",
    name: "Z. Ismael",
    number: 24,
    position: "MF",
    pictureUrl: "https://digitalhub.fifa.com/transform/062e505a-0067-4b87-963d-a0e7ad53decb/ZAID-ISMAEL_484270"
  },
  "484320": {
    fifaId: "484320",
    teamCode: "ESP",
    name: "Lamine Yamal",
    number: 19,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/37b631d3-c340-4590-91a8-bb00bd5f1e89/YAMAL-Lamine_484320"
  },
  "484860": {
    fifaId: "484860",
    teamCode: "FRA",
    name: "Barcola",
    number: 20,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/10e80ef7-3aa9-4c07-9639-e8bc04828d31/BARCOLA-Bradley_484860"
  },
  "485131": {
    fifaId: "485131",
    teamCode: "SCO",
    name: "B. Doak",
    number: 11,
    position: "FW",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/7cf469cc-72f7-4c4b-9312-817920757af3/GANNON-DOAK-Ben_485131"
  },
  "486130": {
    fifaId: "486130",
    teamCode: "SEN",
    name: "H. Diallo",
    number: 9,
    position: "FW",
    club: "Al-Rayyan",
    pictureUrl: "https://digitalhub.fifa.com/transform/87016310-d872-4f1d-b60a-2c9e702190d7/DIARRA-Habib_486130"
  },
  "491244": {
    fifaId: "491244",
    teamCode: "NOR",
    name: "T. Heggem",
    number: 17,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/e7b048fd-7217-470a-9820-eb8b6eab0286/HEGGEM-Torbjorn_491244"
  },
  "PAR-1": {
    fifaId: "PAR-1",
    teamCode: "PAR",
    name: "C. Coronel",
    number: 1,
    position: "GK",
    club: "New York Red Bulls"
  },
  "PAR-2": {
    fifaId: "PAR-2",
    teamCode: "PAR",
    name: "R. Rojas",
    number: 2,
    position: "DF",
    club: "River Plate"
  },
  "PAR-23": {
    fifaId: "PAR-23",
    teamCode: "PAR",
    name: "M. Villasanti",
    number: 23,
    position: "MF",
    club: "Gr\xEAmio"
  },
  "MEX-1": {
    fifaId: "MEX-1",
    teamCode: "MEX",
    name: "L. Malag\xF3n",
    number: 1,
    position: "GK",
    club: "Club Am\xE9rica"
  },
  "MEX-15": {
    fifaId: "MEX-15",
    teamCode: "MEX",
    name: "U. Antuna",
    number: 15,
    position: "FW",
    club: "Tigres",
    pictureUrl: "https://digitalhub.fifa.com/transform/fd0fef42-8129-4cc0-a958-f44521a742be/1442571310"
  },
  "MEX-22": {
    fifaId: "MEX-22",
    teamCode: "MEX",
    name: "H. Lozano",
    number: 22,
    position: "FW",
    club: "San Diego FC",
    pictureUrl: "https://digitalhub.fifa.com/transform/25256872-cd39-4782-862a-45aa19ba5875/1442570768"
  },
  "RSA-21": {
    fifaId: "RSA-21",
    teamCode: "RSA",
    name: "S. Ngezana",
    number: 21,
    position: "DF",
    club: "FCSB"
  },
  "RSA-14": {
    fifaId: "RSA-14",
    teamCode: "RSA",
    name: "M. Mvala",
    number: 14,
    position: "DF",
    club: "Mamelodi Sundowns"
  },
  "RSA-10": {
    fifaId: "RSA-10",
    teamCode: "RSA",
    name: "P. Tau",
    number: 10,
    position: "MF",
    club: "Qatar SC"
  },
  "RSA-17": {
    fifaId: "RSA-17",
    teamCode: "RSA",
    name: "E. Mokwana",
    number: 17,
    position: "FW",
    club: "Esp\xE9rance"
  },
  "RSA-3": {
    fifaId: "RSA-3",
    teamCode: "RSA",
    name: "R. Frosler",
    fullName: "Reeve Frosler",
    number: 3,
    position: "DF",
    club: "Kaizer Chiefs"
  },
  "RSA-5": {
    fifaId: "RSA-5",
    teamCode: "RSA",
    name: "B. Mkhwanazi",
    fullName: "Buhle Mkhwanazi",
    number: 5,
    position: "DF",
    club: "AmaZulu"
  },
  "RSA-7": {
    fifaId: "RSA-7",
    teamCode: "RSA",
    name: "K. Dolly",
    fullName: "Keagan Dolly",
    number: 7,
    position: "FW",
    club: "Kaizer Chiefs"
  },
  "RSA-8": {
    fifaId: "RSA-8",
    teamCode: "RSA",
    name: "B. Zungu",
    fullName: "Bongani Zungu",
    number: 8,
    position: "MF",
    club: "Rangers"
  },
  "RSA-12": {
    fifaId: "RSA-12",
    teamCode: "RSA",
    name: "G. Kekana",
    fullName: "Grant Kekana",
    number: 12,
    position: "DF",
    club: "Mamelodi Sundowns"
  },
  "RSA-15": {
    fifaId: "RSA-15",
    teamCode: "RSA",
    name: "S. Xulu",
    fullName: "Siyanda Xulu",
    number: 15,
    position: "DF",
    club: "Mamelodi Sundowns"
  },
  "RSA-16": {
    fifaId: "RSA-16",
    teamCode: "RSA",
    name: "B. Bvuma",
    fullName: "Bruce Bvuma",
    number: 16,
    position: "GK",
    club: "Kaizer Chiefs"
  },
  "RSA-18": {
    fifaId: "RSA-18",
    teamCode: "RSA",
    name: "N. Blom",
    fullName: "Njabulo Blom",
    number: 18,
    position: "MF",
    club: "NYCFC"
  },
  "RSA-19": {
    fifaId: "RSA-19",
    teamCode: "RSA",
    name: "V. Letsoalo",
    fullName: "Victor Letsoalo",
    number: 19,
    position: "FW",
    club: "Mamelodi Sundowns"
  },
  "RSA-20": {
    fifaId: "RSA-20",
    teamCode: "RSA",
    name: "B. Aubaas",
    fullName: "Bathusi Aubaas",
    number: 20,
    position: "MF",
    club: "Mamelodi Sundowns"
  },
  "RSA-22": {
    fifaId: "RSA-22",
    teamCode: "RSA",
    name: "V. Mothwa",
    fullName: "Veli Mothwa",
    number: 22,
    position: "GK",
    club: "AmaZulu"
  },
  "RSA-23": {
    fifaId: "RSA-23",
    teamCode: "RSA",
    name: "T. Cornell",
    fullName: "Thapelo Cornell",
    number: 23,
    position: "FW",
    club: "Mamelodi Sundowns"
  },
  "RSA-24": {
    fifaId: "RSA-24",
    teamCode: "RSA",
    name: "K. Dlamini",
    fullName: "Kabelo Dlamini",
    number: 24,
    position: "MF",
    club: "Mamelodi Sundowns"
  },
  "RSA-25": {
    fifaId: "RSA-25",
    teamCode: "RSA",
    name: "R. Maarman",
    fullName: "Ronaldo Maarman",
    number: 25,
    position: "FW",
    club: "Stellenbosch FC"
  },
  "RSA-26": {
    fifaId: "RSA-26",
    teamCode: "RSA",
    name: "Y. Maart",
    fullName: "Yusuf Maart",
    number: 26,
    position: "MF",
    club: "Mamelodi Sundowns"
  },
  "KOR-15": {
    fifaId: "KOR-15",
    teamCode: "KOR",
    name: "Jung Seung-hyun",
    number: 15,
    position: "DF",
    club: "Al-Wasl"
  },
  "KOR-3": {
    fifaId: "KOR-3",
    teamCode: "KOR",
    name: "Lee Myung-jae",
    number: 3,
    position: "DF",
    club: "Ulsan HD"
  },
  "KOR-5": {
    fifaId: "KOR-5",
    teamCode: "KOR",
    name: "Park Yong-woo",
    number: 5,
    position: "MF",
    club: "Al-Ain"
  },
  "CZE-8": {
    fifaId: "CZE-8",
    teamCode: "CZE",
    name: "A. Bar\xE1k",
    number: 8,
    position: "MF",
    club: "Kasimpasa"
  },
  "CZE-17": {
    fifaId: "CZE-17",
    teamCode: "CZE",
    name: "V. Cerny",
    number: 17,
    position: "FW",
    club: "Rangers"
  },
  "BIH-8": {
    fifaId: "BIH-8",
    teamCode: "BIH",
    name: "G. Cimirot",
    number: 8,
    position: "MF",
    club: "Standard de Li\xE8ge"
  },
  "BIH-16": {
    fifaId: "BIH-16",
    teamCode: "BIH",
    name: "R. Kruni\u0107",
    number: 16,
    position: "MF",
    club: "Fenerbah\xE7e"
  },
  "BIH-10": {
    fifaId: "BIH-10",
    teamCode: "BIH",
    name: "N. Bajrami",
    number: 10,
    position: "MF",
    club: "Sassuolo"
  },
  "MAR-23": {
    fifaId: "MAR-23",
    teamCode: "MAR",
    name: "A. Dari",
    number: 23,
    position: "DF",
    club: "Brest",
    pictureUrl: "https://digitalhub.fifa.com/transform/814883ae-a895-4aac-a723-8bb5ab557255/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "MAR-5": {
    fifaId: "MAR-5",
    teamCode: "MAR",
    name: "N. Aguerd",
    number: 5,
    position: "DF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/8be99692-04dd-4c92-8a86-70dc8e6901c7/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "MAR-7": {
    fifaId: "MAR-7",
    teamCode: "MAR",
    name: "H. Ziyech",
    number: 7,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/96ff445c-211f-4bc3-b0d8-cc6bb5777982/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "MAR-19": {
    fifaId: "MAR-19",
    teamCode: "MAR",
    name: "Y. En-Nesyri",
    number: 19,
    position: "FW",
    club: "Fenerbah\xE7e",
    pictureUrl: "https://digitalhub.fifa.com/transform/2cbd2bc3-0cd6-442e-9877-3cd951e63234/Morocco-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "FRA-7": {
    fifaId: "FRA-7",
    teamCode: "FRA",
    name: "Griezmann",
    number: 7,
    position: "MF",
    club: "Atl\xE9tico Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/9f03ff5a-aad3-433a-8e21-cb96143627ac/1442234382"
  },
  "SEN-25": {
    fifaId: "SEN-25",
    teamCode: "SEN",
    name: "P. A. Ciss\xE9",
    number: 25,
    position: "DF",
    club: "Olympiacos",
    pictureUrl: "https://digitalhub.fifa.com/transform/23048d3f-9ced-4cfc-85ca-ca1281ccf1f1/1442261725"
  },
  "SEN-21": {
    fifaId: "SEN-21",
    teamCode: "SEN",
    name: "A. Diallo",
    number: 21,
    position: "DF",
    club: "Al-Arabi",
    pictureUrl: "https://digitalhub.fifa.com/transform/7a0bf8db-1494-4769-aa3f-7d131d165eb4/1442262267"
  },
  "SEN-4": {
    fifaId: "SEN-4",
    teamCode: "SEN",
    name: "I. Gueye",
    number: 4,
    position: "MF",
    club: "Everton",
    pictureUrl: "https://digitalhub.fifa.com/transform/eec40484-d0a0-48cb-bd21-3b9fb90a0e00/1442261952"
  },
  "HAI-3": {
    fifaId: "HAI-3",
    teamCode: "HAI",
    name: "A. Christian Jr",
    number: 3,
    position: "DF",
    club: "Figueirense"
  },
  "HAI-8": {
    fifaId: "HAI-8",
    teamCode: "HAI",
    name: "B. Alceus",
    number: 8,
    position: "MF",
    club: "Apollon Limassol"
  },
  "SCO-8": {
    fifaId: "SCO-8",
    teamCode: "SCO",
    name: "B. Gilmour",
    number: 8,
    position: "MF",
    club: "Napoli"
  },
  "AUS-3": {
    fifaId: "AUS-3",
    teamCode: "AUS",
    name: "N. Atkinson",
    number: 3,
    position: "DF",
    club: "Hearts",
    pictureUrl: "https://digitalhub.fifa.com/transform/1b5aed14-761f-47a8-b8e6-b02d805c295d/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "AUS-4": {
    fifaId: "AUS-4",
    teamCode: "AUS",
    name: "K. Rowles",
    number: 4,
    position: "DF",
    club: "Heart of Midlothian",
    pictureUrl: "https://digitalhub.fifa.com/transform/04fd32f9-273a-460b-aaa7-ce6dcbfb57b8/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "AUS-17": {
    fifaId: "AUS-17",
    teamCode: "AUS",
    name: "K. Baccus",
    number: 17,
    position: "MF",
    club: "St. Mirren",
    pictureUrl: "https://digitalhub.fifa.com/transform/acb6b0d9-626b-414d-a679-7696cd6e9ec2/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "AUS-6": {
    fifaId: "AUS-6",
    teamCode: "AUS",
    name: "M. Boyle",
    number: 6,
    position: "FW",
    club: "Hibernian"
  },
  "AUS-15": {
    fifaId: "AUS-15",
    teamCode: "AUS",
    name: "M. Duke",
    number: 15,
    position: "FW",
    club: "Machida Zelvia",
    pictureUrl: "https://digitalhub.fifa.com/transform/6d8bc1a2-9372-4be3-be28-9786bd087fc4/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "AUS-23": {
    fifaId: "AUS-23",
    teamCode: "AUS",
    name: "C. Goodwin",
    number: 23,
    position: "FW",
    club: "Al-Wehda",
    pictureUrl: "https://digitalhub.fifa.com/transform/ca86de50-e8d6-4065-8be5-8501919e6499/Australia-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "GER-1": {
    fifaId: "GER-1",
    teamCode: "GER",
    name: "M. ter Stegen",
    number: 1,
    position: "GK",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/dc083bab-2f1f-42e8-b0a3-c56dd449b7ec/1442303551"
  },
  "GER-8": {
    fifaId: "GER-8",
    teamCode: "GER",
    name: "R. Andrich",
    number: 8,
    position: "MF",
    club: "Bayer Leverkusen"
  },
  "GER-21": {
    fifaId: "GER-21",
    teamCode: "GER",
    name: "I. Gundogan",
    number: 21,
    position: "MF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/6e7836ec-7855-480f-9aed-7dc471e08d63/1442303696"
  },
  "CUW-4": {
    fifaId: "CUW-4",
    teamCode: "CUW",
    name: "C. Martina",
    number: 4,
    position: "DF",
    club: "NAC Breda"
  },
  "CUW-3": {
    fifaId: "CUW-3",
    teamCode: "CUW",
    name: "C. Martina",
    number: 3,
    position: "DF",
    club: "Go Ahead Eagles"
  },
  "CUW-14": {
    fifaId: "CUW-14",
    teamCode: "CUW",
    name: "K. Leerdam",
    number: 14,
    position: "MF",
    club: "Los Angeles Galaxy"
  },
  "CUW-9": {
    fifaId: "CUW-9",
    teamCode: "CUW",
    name: "R. Janga",
    number: 9,
    position: "FW",
    club: "FCSB"
  },
  "CUW-11": {
    fifaId: "CUW-11",
    teamCode: "CUW",
    name: "G. Nepomuceno",
    number: 11,
    position: "FW",
    club: "Melbourne Knights"
  },
  "ALG-16": {
    fifaId: "ALG-16",
    teamCode: "ALG",
    name: "A. Mandrea",
    number: 16,
    position: "GK",
    club: "Lens"
  },
  "ALG-2": {
    fifaId: "ALG-2",
    teamCode: "ALG",
    name: "Y. Atal",
    number: 2,
    position: "DF",
    club: "Al-Arabi"
  },
  "ALG-8": {
    fifaId: "ALG-8",
    teamCode: "ALG",
    name: "I. Bennacer",
    number: 8,
    position: "MF",
    club: "AC Milan"
  },
  "ALG-14": {
    fifaId: "ALG-14",
    teamCode: "ALG",
    name: "H. Belkebla",
    number: 14,
    position: "MF",
    club: "Brest"
  },
  "ALG-20": {
    fifaId: "ALG-20",
    teamCode: "ALG",
    name: "S. Benrahma",
    number: 20,
    position: "FW",
    club: "Lyon"
  },
  "NED-3": {
    fifaId: "NED-3",
    teamCode: "NED",
    name: "M. de Ligt",
    number: 3,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/f978cdf5-fd66-4f3d-82c1-3ea80e332cea/1442168832"
  },
  "NED-7": {
    fifaId: "NED-7",
    teamCode: "NED",
    name: "X. Simons",
    number: 7,
    position: "MF",
    club: "RB Leipzig",
    pictureUrl: "https://digitalhub.fifa.com/transform/3256af6a-5bc1-4f81-84b7-526c4aa49f2e/1442169724"
  },
  "NED-12": {
    fifaId: "NED-12",
    teamCode: "NED",
    name: "J. Frimpong",
    number: 12,
    position: "FW",
    club: "Bayer Leverkusen",
    pictureUrl: "https://digitalhub.fifa.com/transform/a6d80537-faf4-4bf3-8541-39dda191cba2/1442170689"
  },
  "JPN-6": {
    fifaId: "JPN-6",
    teamCode: "JPN",
    name: "W. Endo",
    number: 6,
    position: "MF",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/d1f64b72-4fcf-44b4-8f7a-33abe45f3993/Japan-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "JPN-5": {
    fifaId: "JPN-5",
    teamCode: "JPN",
    name: "H. Morita",
    number: 5,
    position: "MF",
    club: "Sporting",
    pictureUrl: "https://digitalhub.fifa.com/transform/3098e878-ab1e-4c8e-8322-77fd1a0b4ac0/Japan-Portraits-FIFA-World-Cup-Qatar-2022"
  },
  "JPN-7": {
    fifaId: "JPN-7",
    teamCode: "JPN",
    name: "K. Mitoma",
    number: 7,
    position: "FW",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/c329c2a8-50c7-4460-89a3-2a349c12abe7/1442484179"
  },
  "CIV-17": {
    fifaId: "CIV-17",
    teamCode: "CIV",
    name: "S. Aurier",
    number: 17,
    position: "DF",
    club: "Galatasaray"
  },
  "CIV-22": {
    fifaId: "CIV-22",
    teamCode: "CIV",
    name: "S. Haller",
    number: 22,
    position: "FW",
    club: "Utrecht"
  },
  "CIV-13": {
    fifaId: "CIV-13",
    teamCode: "CIV",
    name: "J. Boga",
    number: 13,
    position: "FW",
    club: "Nice"
  },
  "ECU-16": {
    fifaId: "ECU-16",
    teamCode: "ECU",
    name: "J. Sarmiento",
    number: 16,
    position: "FW",
    club: "Brighton",
    pictureUrl: "https://digitalhub.fifa.com/transform/59b0fcdc-5cbf-4e78-8221-a2a28e651702/1442153740"
  },
  "SWE-1": {
    fifaId: "SWE-1",
    teamCode: "SWE",
    name: "R. Olsen",
    number: 1,
    position: "GK",
    club: "Aston Villa"
  },
  "SWE-2": {
    fifaId: "SWE-2",
    teamCode: "SWE",
    name: "E. Krafth",
    number: 2,
    position: "DF",
    club: "Newcastle"
  },
  "SWE-6": {
    fifaId: "SWE-6",
    teamCode: "SWE",
    name: "L. Augustinsson",
    number: 6,
    position: "DF",
    club: "Anderlecht"
  },
  "SWE-21": {
    fifaId: "SWE-21",
    teamCode: "SWE",
    name: "D. Kulusevski",
    number: 21,
    position: "MF",
    club: "Tottenham"
  },
  "SWE-20": {
    fifaId: "SWE-20",
    teamCode: "SWE",
    name: "J. Cajuste",
    number: 20,
    position: "MF",
    club: "Ipswich Town"
  },
  "SWE-10": {
    fifaId: "SWE-10",
    teamCode: "SWE",
    name: "E. Forsberg",
    number: 10,
    position: "MF",
    club: "New York Red Bulls"
  },
  "TUN-20": {
    fifaId: "TUN-20",
    teamCode: "TUN",
    name: "M. Drager",
    number: 20,
    position: "DF",
    club: "Basel",
    pictureUrl: "https://digitalhub.fifa.com/transform/a6f8e781-c336-403d-8e6b-69b2501b767a/1442514989"
  },
  "TUN-14": {
    fifaId: "TUN-14",
    teamCode: "TUN",
    name: "A. Laidouni",
    number: 14,
    position: "MF",
    club: "Al Wakrah",
    pictureUrl: "https://digitalhub.fifa.com/transform/680502d6-145d-4bbb-a055-c182661ce9be/1442514798"
  },
  "TUN-7": {
    fifaId: "TUN-7",
    teamCode: "TUN",
    name: "Y. Msakni",
    number: 7,
    position: "FW",
    club: "Al Arabi",
    pictureUrl: "https://digitalhub.fifa.com/transform/dda4d665-f092-461b-b243-aac373166807/1442515172"
  },
  "TUN-9": {
    fifaId: "TUN-9",
    teamCode: "TUN",
    name: "S. Jaziri",
    number: 9,
    position: "FW",
    club: "Zamalek",
    pictureUrl: "https://digitalhub.fifa.com/transform/b82cb142-2ff4-4999-9f7f-deabb6617823/1442514129"
  },
  "ESP-2": {
    fifaId: "ESP-2",
    teamCode: "ESP",
    name: "Dani Carvajal",
    number: 2,
    position: "DF",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/e4f534e2-d24e-4d69-aae7-970fe7bcbf54/1442550925"
  },
  "ESP-3": {
    fifaId: "ESP-3",
    teamCode: "ESP",
    name: "Robin Le Normand",
    number: 3,
    position: "DF",
    club: "Atl\xE9tico de Madrid"
  },
  "ESP-7": {
    fifaId: "ESP-7",
    teamCode: "ESP",
    name: "\xC1lvaro Morata",
    number: 7,
    position: "FW",
    club: "Galatasaray",
    pictureUrl: "https://digitalhub.fifa.com/transform/a6d1d8b4-a559-4c7f-aed3-095126b60e1c/1442552095"
  },
  "ESP-1": {
    fifaId: "ESP-1",
    teamCode: "ESP",
    name: "David Raya",
    number: 1,
    position: "GK",
    club: "Arsenal"
  },
  "ESP-4": {
    fifaId: "ESP-4",
    teamCode: "ESP",
    name: "Nacho",
    fullName: "Nacho Fern\xE1ndez",
    number: 4,
    position: "DF",
    club: "Fenerbah\xE7e"
  },
  "ESP-5": {
    fifaId: "ESP-5",
    teamCode: "ESP",
    name: "Alejandro Balde",
    number: 5,
    position: "DF",
    club: "Barcelona"
  },
  "ESP-6": {
    fifaId: "ESP-6",
    teamCode: "ESP",
    name: "Pau Cubars\xED",
    number: 6,
    position: "DF",
    club: "Barcelona"
  },
  "ESP-9": {
    fifaId: "ESP-9",
    teamCode: "ESP",
    name: "Ayoze P\xE9rez",
    number: 9,
    position: "FW",
    club: "Betis"
  },
  "ESP-10": {
    fifaId: "ESP-10",
    teamCode: "ESP",
    name: "Dani Olmo",
    number: 10,
    position: "MF",
    club: "Barcelona"
  },
  "ESP-12": {
    fifaId: "ESP-12",
    teamCode: "ESP",
    name: "\xC1lex Remiro",
    number: 12,
    position: "GK",
    club: "Real Sociedad"
  },
  "ESP-13": {
    fifaId: "ESP-13",
    teamCode: "ESP",
    name: "Ferran Torres",
    number: 13,
    position: "FW",
    club: "Barcelona"
  },
  "ESP-15": {
    fifaId: "ESP-15",
    teamCode: "ESP",
    name: "Mart\xEDn Zubimendi",
    number: 15,
    position: "MF",
    club: "Arsenal"
  },
  "ESP-17": {
    fifaId: "ESP-17",
    teamCode: "ESP",
    name: "Mikel Oyarzabal",
    number: 17,
    position: "FW",
    club: "Real Sociedad"
  },
  "ESP-18": {
    fifaId: "ESP-18",
    teamCode: "ESP",
    name: "Mikel Merino",
    number: 18,
    position: "MF",
    club: "Arsenal"
  },
  "ESP-21": {
    fifaId: "ESP-21",
    teamCode: "ESP",
    name: "Alex Baena",
    number: 21,
    position: "MF",
    club: "Villarreal"
  },
  "ESP-22": {
    fifaId: "ESP-22",
    teamCode: "ESP",
    name: "Pedro Porro",
    number: 22,
    position: "DF",
    club: "Tottenham"
  },
  "ESP-25": {
    fifaId: "ESP-25",
    teamCode: "ESP",
    name: "Alex Grimaldo",
    number: 25,
    position: "DF",
    club: "Bayer Leverkusen"
  },
  "ESP-26": {
    fifaId: "ESP-26",
    teamCode: "ESP",
    name: "Yeremy Pino",
    number: 26,
    position: "FW",
    club: "Villarreal"
  },
  "CPV-21": {
    fifaId: "CPV-21",
    teamCode: "CPV",
    name: "Beb\xE9",
    number: 21,
    position: "FW",
    club: "Racing Ferrol"
  },
  "BEL-1": {
    fifaId: "BEL-1",
    teamCode: "BEL",
    name: "Koen Casteels",
    number: 1,
    position: "GK",
    club: "Al-Qadsiah",
    pictureUrl: "https://digitalhub.fifa.com/transform/b0d79089-3449-46e4-9de4-0c0d91f5ab33/1442830192"
  },
  "BEL-4": {
    fifaId: "BEL-4",
    teamCode: "BEL",
    name: "Wout Faes",
    number: 4,
    position: "DF",
    club: "Leicester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/91f5100b-cbf4-4b16-b42b-89acec809f35/1442830885"
  },
  "EGY-6": {
    fifaId: "EGY-6",
    teamCode: "EGY",
    name: "Mohamed Abdelmonem",
    number: 6,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948"
  },
  "EGY-11": {
    fifaId: "EGY-11",
    teamCode: "EGY",
    name: "Mostafa Mohamed",
    number: 11,
    position: "FW",
    club: "Nantes",
    pictureUrl: "https://digitalhub.fifa.com/transform/5bfa85ca-3349-4143-9afa-1b5a43ac8c54/MOHAMED-ELSHENAWY_408948"
  },
  "KSA-5": {
    fifaId: "KSA-5",
    teamCode: "KSA",
    name: "Ali Al-Bulaihi",
    number: 5,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/4f8e42cf-4966-4717-8c6d-f1b7f861a291/1442483955"
  },
  "KSA-13": {
    fifaId: "KSA-13",
    teamCode: "KSA",
    name: "Yasser Al-Shahrani",
    number: 13,
    position: "DF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/e7d57d32-2d62-489e-85e7-fddcf1bc17f7/1442482644"
  },
  "KSA-7": {
    fifaId: "KSA-7",
    teamCode: "KSA",
    name: "Abdulrahman Ghareeb",
    number: 7,
    position: "FW",
    club: "Al-Nassr"
  },
  "URU-8": {
    fifaId: "URU-8",
    teamCode: "URU",
    name: "Nahitan N\xE1ndez",
    number: 8,
    position: "DF",
    club: "Al-Qadsiah"
  },
  "IRN-2": {
    fifaId: "IRN-2",
    teamCode: "IRN",
    name: "Sadegh Moharrami",
    number: 2,
    position: "DF",
    club: "Dinamo Zagreb",
    pictureUrl: "https://digitalhub.fifa.com/transform/c9c01799-0540-466a-b55d-58caf1c5f40e/1441896039"
  },
  "IRN-20": {
    fifaId: "IRN-20",
    teamCode: "IRN",
    name: "Sardar Azmoun",
    number: 20,
    position: "FW",
    club: "Shabab Al Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/c50245ff-0d7f-47b3-8f94-206a58531506/1441897616"
  },
  "IRN-8": {
    fifaId: "IRN-8",
    teamCode: "IRN",
    name: "Mohammad Mohebbi",
    number: 8,
    position: "MF",
    socials: {
      instagram: "https://instagram.com/mohammadmohebi_official"
    }
  },
  "IRQ-5": {
    fifaId: "IRQ-5",
    teamCode: "IRQ",
    name: "A. Hashim",
    number: 5,
    position: "DF",
    pictureUrl: "https://digitalhub.fifa.com/transform/a0dea4f6-7d64-4613-bdd0-558480ddbc80/AKAM-HASHIM_481183_"
  },
  "KSA-Alamri": {
    fifaId: "KSA-Alamri",
    teamCode: "KSA",
    name: "Alamri",
    fullName: "Abdulilah Alamri",
    number: 32,
    position: "DF",
    socials: {
      instagram: "https://instagram.com/aalamri32"
    }
  },
  "IRN-Rezaeian": {
    fifaId: "IRN-Rezaeian",
    teamCode: "IRN",
    name: "Rezaeian",
    fullName: "Ramin Rezaeian",
    number: 19,
    position: "DF",
    socials: {
      instagram: "https://instagram.com/raminrezaeian"
    }
  },
  "ALG-1": {
    fifaId: "ALG-1",
    teamCode: "ALG",
    name: "R. M'Bolhi",
    fullName: "Ra\xEFs M'Bolhi",
    number: 1,
    position: "GK",
    club: "Al-Ettifaq"
  },
  "ALG-4": {
    fifaId: "ALG-4",
    teamCode: "ALG",
    name: "D. Ait Nouri",
    fullName: "Djamel Ait Nouri",
    number: 4,
    position: "DF",
    club: "Wolverhampton"
  },
  "ALG-6": {
    fifaId: "ALG-6",
    teamCode: "ALG",
    name: "M. Tahrat",
    number: 6,
    position: "DF",
    club: "Villarreal"
  },
  "ALG-10": {
    fifaId: "ALG-10",
    teamCode: "ALG",
    name: "A. Zerrouki",
    fullName: "Amir Zerrouki",
    number: 10,
    position: "MF",
    club: "Twente"
  },
  "ALG-11": {
    fifaId: "ALG-11",
    teamCode: "ALG",
    name: "Y. Bela\xEFli",
    fullName: "Youcef Bela\xEFli",
    number: 11,
    position: "FW",
    club: "Be\u015Fikta\u015F"
  },
  "ALG-12": {
    fifaId: "ALG-12",
    teamCode: "ALG",
    name: "A. Maaloul",
    number: 12,
    position: "GK",
    club: "MC Oran"
  },
  "ALG-13": {
    fifaId: "ALG-13",
    teamCode: "ALG",
    name: "M. Fares",
    fullName: "Mohamed Fares",
    number: 13,
    position: "DF",
    club: "SPAL"
  },
  "ALG-15": {
    fifaId: "ALG-15",
    teamCode: "ALG",
    name: "N. Bentaleb",
    fullName: "Nabil Bentaleb",
    number: 15,
    position: "MF",
    club: "Montpellier"
  },
  "ALG-17": {
    fifaId: "ALG-17",
    teamCode: "ALG",
    name: "H. Boudaoui",
    fullName: "Hicham Boudaoui",
    number: 17,
    position: "MF",
    club: "Nice"
  },
  "ALG-18": {
    fifaId: "ALG-18",
    teamCode: "ALG",
    name: "A. Guedioura",
    fullName: "Adl\xE8ne Guedioura",
    number: 18,
    position: "MF",
    club: "Nottingham Forest"
  },
  "ALG-21": {
    fifaId: "ALG-21",
    teamCode: "ALG",
    name: "I. Slimani",
    fullName: "Islam Slimani",
    number: 21,
    position: "FW",
    club: "Brest"
  },
  "ALG-22": {
    fifaId: "ALG-22",
    teamCode: "ALG",
    name: "M. Delmi",
    number: 22,
    position: "MF",
    club: "Reims"
  },
  "ALG-23": {
    fifaId: "ALG-23",
    teamCode: "ALG",
    name: "A. Bensebaini",
    number: 23,
    position: "GK",
    club: "USM Alger"
  },
  "ALG-24": {
    fifaId: "ALG-24",
    teamCode: "ALG",
    name: "O. Benrahma",
    number: 24,
    position: "FW",
    club: "Lyon"
  },
  "ALG-25": {
    fifaId: "ALG-25",
    teamCode: "ALG",
    name: "A. Sayoud",
    number: 25,
    position: "DF",
    club: "Belouizdad"
  },
  "AUS-2": {
    fifaId: "AUS-2",
    teamCode: "AUS",
    name: "N. Hall",
    fullName: "Nathaniel Hall",
    number: 2,
    position: "DF",
    club: "Sunderland"
  },
  "AUS-5": {
    fifaId: "AUS-5",
    teamCode: "AUS",
    name: "T. Degenek",
    fullName: "Trent Degenek",
    number: 5,
    position: "DF",
    club: "Columbus Crew"
  },
  "AUS-7": {
    fifaId: "AUS-7",
    teamCode: "AUS",
    name: "M. Leckie",
    fullName: "Mathew Leckie",
    number: 7,
    position: "FW",
    club: "Melbourne City"
  },
  "AUS-9": {
    fifaId: "AUS-9",
    teamCode: "AUS",
    name: "J. Maclaren",
    fullName: "Jamie Maclaren",
    number: 9,
    position: "FW",
    club: "Melbourne City"
  },
  "AUS-11": {
    fifaId: "AUS-11",
    teamCode: "AUS",
    name: "B. Wright",
    fullName: "Bailey Wright",
    number: 11,
    position: "DF",
    club: "Sunderland"
  },
  "AUS-12": {
    fifaId: "AUS-12",
    teamCode: "AUS",
    name: "D. Vukovic",
    fullName: "Danny Vukovic",
    number: 12,
    position: "GK",
    club: "Genk"
  },
  "AUS-13": {
    fifaId: "AUS-13",
    teamCode: "AUS",
    name: "J. Ireland",
    fullName: "Jackson Ireland",
    number: 13,
    position: "MF",
    club: "Perth Glory"
  },
  "AUS-14": {
    fifaId: "AUS-14",
    teamCode: "AUS",
    name: "C. Ikonomidis",
    fullName: "Chris Ikonomidis",
    number: 14,
    position: "FW",
    club: "Al-Faisaly"
  },
  "AUS-16": {
    fifaId: "AUS-16",
    teamCode: "AUS",
    name: "R. McGree",
    fullName: "Riley McGree",
    number: 16,
    position: "MF",
    club: "Middlesbrough"
  },
  "AUS-18": {
    fifaId: "AUS-18",
    teamCode: "AUS",
    name: "A. Mabil",
    fullName: "Awer Mabil",
    number: 18,
    position: "FW",
    club: "Cadiz"
  },
  "AUS-20": {
    fifaId: "AUS-20",
    teamCode: "AUS",
    name: "D. Izzo",
    fullName: "Milos Degenek",
    number: 20,
    position: "DF",
    club: "Colorado Rapids"
  },
  "AUS-21": {
    fifaId: "AUS-21",
    teamCode: "AUS",
    name: "K. Galloway",
    fullName: "Kye Galloway",
    number: 21,
    position: "MF",
    club: "Central Coast Mariners"
  },
  "AUS-24": {
    fifaId: "AUS-24",
    teamCode: "AUS",
    name: "J. Flabuss",
    number: 24,
    position: "MF",
    club: "Melbourne Victory"
  },
  "AUS-25": {
    fifaId: "AUS-25",
    teamCode: "AUS",
    name: "M. Toure",
    number: 25,
    position: "GK",
    club: "Western United"
  },
  "AUS-26": {
    fifaId: "AUS-26",
    teamCode: "AUS",
    name: "R. Strain",
    fullName: "Ryan Strain",
    number: 26,
    position: "DF",
    club: "St Pauli"
  },
  "BEL-5": {
    fifaId: "BEL-5",
    teamCode: "BEL",
    name: "Jan Vertonghen",
    number: 5,
    position: "DF",
    club: "RSC Anderlecht"
  },
  "BEL-6": {
    fifaId: "BEL-6",
    teamCode: "BEL",
    name: "Axel Witsel",
    number: 6,
    position: "MF",
    club: "Atl\xE9tico Madrid"
  },
  "BEL-9": {
    fifaId: "BEL-9",
    teamCode: "BEL",
    name: "Christian Benteke",
    number: 9,
    position: "FW",
    club: "DC United"
  },
  "BEL-12": {
    fifaId: "BEL-12",
    teamCode: "BEL",
    name: "Simon Mignolet",
    number: 12,
    position: "GK",
    club: "Club Brugge"
  },
  "BEL-13": {
    fifaId: "BEL-13",
    teamCode: "BEL",
    name: "Lo\xEFs Openda",
    number: 13,
    position: "FW",
    club: "RB Leipzig"
  },
  "BEL-14": {
    fifaId: "BEL-14",
    teamCode: "BEL",
    name: "Dodi Lukebakio",
    number: 14,
    position: "FW",
    club: "Sevilla"
  },
  "BEL-15": {
    fifaId: "BEL-15",
    teamCode: "BEL",
    name: "Charles De Ketelaere",
    number: 15,
    position: "MF",
    club: "Atalanta"
  },
  "BEL-16": {
    fifaId: "BEL-16",
    teamCode: "BEL",
    name: "Orel Mangala",
    number: 16,
    position: "MF",
    club: "Nottingham Forest"
  },
  "BEL-17": {
    fifaId: "BEL-17",
    teamCode: "BEL",
    name: "Johan Bakayoko",
    number: 17,
    position: "FW",
    club: "PSV"
  },
  "BEL-18": {
    fifaId: "BEL-18",
    teamCode: "BEL",
    name: "Thomas Meunier",
    number: 18,
    position: "DF",
    club: "Club Brugge"
  },
  "BEL-19": {
    fifaId: "BEL-19",
    teamCode: "BEL",
    name: "Alexis Saelemaekers",
    number: 19,
    position: "MF",
    club: "Roma"
  },
  "BEL-20": {
    fifaId: "BEL-20",
    teamCode: "BEL",
    name: "Aster Vranckx",
    number: 20,
    position: "MF",
    club: "Wolfsburg"
  },
  "BEL-23": {
    fifaId: "BEL-23",
    teamCode: "BEL",
    name: "Koen Casteels",
    number: 23,
    position: "GK",
    club: "Al-Qadsiah"
  },
  "BEL-25": {
    fifaId: "BEL-25",
    teamCode: "BEL",
    name: "Matz Sels",
    number: 25,
    position: "GK",
    club: "Nottingham Forest"
  },
  "BEL-26": {
    fifaId: "BEL-26",
    teamCode: "BEL",
    name: "Brandon Mechele",
    number: 26,
    position: "DF",
    club: "Club Brugge"
  },
  "BIH-3": {
    fifaId: "BIH-3",
    teamCode: "BIH",
    name: "Z. Begi\u0107",
    number: 3,
    position: "DF",
    club: "Vitesse"
  },
  "BIH-4": {
    fifaId: "BIH-4",
    teamCode: "BIH",
    name: "A. Naletili\u0107",
    number: 4,
    position: "DF",
    club: "Dinamo Zagreb"
  },
  "BIH-6": {
    fifaId: "BIH-6",
    teamCode: "BIH",
    name: "S. Pjani\u0107",
    fullName: "Seid Pjani\u0107",
    number: 6,
    position: "MF",
    club: "Lugano"
  },
  "BIH-7": {
    fifaId: "BIH-7",
    teamCode: "BIH",
    name: "S. Rahimi\u0107",
    number: 7,
    position: "MF",
    club: "Al Fateh"
  },
  "BIH-11": {
    fifaId: "BIH-11",
    teamCode: "BIH",
    name: "A. Husi\u0107",
    number: 11,
    position: "FW",
    club: "\u0160ibenik"
  },
  "BIH-12": {
    fifaId: "BIH-12",
    teamCode: "BIH",
    name: "I. Piri\u0107",
    number: 12,
    position: "GK",
    club: "Sloboda Tuzla"
  },
  "BIH-13": {
    fifaId: "BIH-13",
    teamCode: "BIH",
    name: "N. Menalo",
    number: 13,
    position: "FW",
    club: "Be\u015Fikta\u015F"
  },
  "BIH-15": {
    fifaId: "BIH-15",
    teamCode: "BIH",
    name: "A. Hod\u017Ei\u0107",
    number: 15,
    position: "FW",
    club: "Lokomotiva Zagreb"
  },
  "BIH-18": {
    fifaId: "BIH-18",
    teamCode: "BIH",
    name: "M. Kvesi\u0107",
    number: 18,
    position: "MF",
    club: "Rapid Wien"
  },
  "BIH-19": {
    fifaId: "BIH-19",
    teamCode: "BIH",
    name: "L. Duljevic",
    number: 19,
    position: "MF",
    club: "Toulouse"
  },
  "BIH-21": {
    fifaId: "BIH-21",
    teamCode: "BIH",
    name: "E. Muharemovi\u0107",
    number: 21,
    position: "DF",
    club: "Toulouse"
  },
  "BIH-22": {
    fifaId: "BIH-22",
    teamCode: "BIH",
    name: "I. \u0160ehi\u0107",
    fullName: "Ibrahim \u0160ehi\u0107",
    number: 22,
    position: "GK",
    club: "Tuzla City"
  },
  "BIH-23": {
    fifaId: "BIH-23",
    teamCode: "BIH",
    name: "A. Nuhi\xFC",
    number: 23,
    position: "FW",
    club: "Nottingham Forest"
  },
  "BIH-24": {
    fifaId: "BIH-24",
    teamCode: "BIH",
    name: "S. \u0160i\u0161i\u0107",
    number: 24,
    position: "DF",
    club: "Boavista"
  },
  "BIH-25": {
    fifaId: "BIH-25",
    teamCode: "BIH",
    name: "O. \u0160i\u0161i\u0107",
    number: 25,
    position: "MF",
    club: "FC Z\xFCrich"
  },
  "CAN-3": {
    fifaId: "CAN-3",
    teamCode: "CAN",
    name: "S. Vit\xF3ria",
    fullName: "Samuel Vit\xF3ria",
    number: 3,
    position: "DF",
    club: "Nottingham Forest"
  },
  "CAN-6": {
    fifaId: "CAN-6",
    teamCode: "CAN",
    name: "D. Henry",
    fullName: "Derek Henry",
    number: 6,
    position: "MF",
    club: "Nashville SC"
  },
  "CAN-8": {
    fifaId: "CAN-8",
    teamCode: "CAN",
    name: "M. Hoilett",
    fullName: "Junior Hoilett",
    number: 8,
    position: "FW",
    club: "Vancouver Whitecaps"
  },
  "CAN-9": {
    fifaId: "CAN-9",
    teamCode: "CAN",
    name: "C. Cyle Larin",
    number: 9,
    position: "FW",
    club: "Club Am\xE9rica"
  },
  "CAN-10": {
    fifaId: "CAN-10",
    teamCode: "CAN",
    name: "A. Piette",
    fullName: "Samuel Piette",
    number: 10,
    position: "MF",
    club: "CF Montr\xE9al"
  },
  "CAN-12": {
    fifaId: "CAN-12",
    teamCode: "CAN",
    name: "M. Millar",
    fullName: "Mark-Anthony Kaye",
    number: 12,
    position: "MF",
    club: "Toronto FC"
  },
  "CAN-13": {
    fifaId: "CAN-13",
    teamCode: "CAN",
    name: "K. Miller",
    fullName: "Kamal Miller",
    number: 13,
    position: "DF",
    club: "Inter Miami"
  },
  "CAN-14": {
    fifaId: "CAN-14",
    teamCode: "CAN",
    name: "R. Tabla",
    fullName: "Raheem Tabla",
    number: 14,
    position: "FW",
    club: "Toronto FC"
  },
  "CAN-15": {
    fifaId: "CAN-15",
    teamCode: "CAN",
    name: "B. Cornelius-Caleb",
    number: 15,
    position: "DF",
    club: "Anderlecht"
  },
  "CAN-16": {
    fifaId: "CAN-16",
    teamCode: "CAN",
    name: "M. Borjan",
    fullName: "Milan Borjan",
    number: 16,
    position: "GK",
    club: "Red Star Belgrade"
  },
  "CAN-22": {
    fifaId: "CAN-22",
    teamCode: "CAN",
    name: "N. Kone",
    number: 22,
    position: "GK",
    club: "Portland Timbers"
  },
  "CAN-23": {
    fifaId: "CAN-23",
    teamCode: "CAN",
    name: "D. Laryea",
    fullName: "Doneil Henry",
    number: 23,
    position: "DF",
    club: "Toronto FC"
  },
  "CAN-24": {
    fifaId: "CAN-24",
    teamCode: "CAN",
    name: "J. Shaffelburg",
    fullName: "Jacob Shaffelburg",
    number: 24,
    position: "FW",
    club: "Nashville SC"
  },
  "CAN-25": {
    fifaId: "CAN-25",
    teamCode: "CAN",
    name: "S. Adekugbe",
    fullName: "Samuel Adekugbe",
    number: 25,
    position: "DF",
    club: "Hatayspor"
  },
  "CAN-26": {
    fifaId: "CAN-26",
    teamCode: "CAN",
    name: "B. Buchanan",
    number: 26,
    position: "GK",
    club: "CF Montr\xE9al"
  },
  "CIV-2": {
    fifaId: "CIV-2",
    teamCode: "CIV",
    name: "S. Boly",
    fullName: "Willy Boly",
    number: 2,
    position: "DF",
    club: "Nottingham Forest"
  },
  "CIV-5": {
    fifaId: "CIV-5",
    teamCode: "CIV",
    name: "I. Sangar\xE9",
    fullName: "Ibrahim Sangar\xE9",
    number: 5,
    position: "MF",
    club: "Nottingham Forest"
  },
  "CIV-9": {
    fifaId: "CIV-9",
    teamCode: "CIV",
    name: "W. Zaha",
    fullName: "Wilfried Zaha",
    number: 9,
    position: "FW",
    club: "Galatasaray"
  },
  "CIV-10": {
    fifaId: "CIV-10",
    teamCode: "CIV",
    name: "S. Gradel",
    fullName: "Max-Alain Gradel",
    number: 10,
    position: "FW",
    club: "Kasimpasa"
  },
  "CIV-11": {
    fifaId: "CIV-11",
    teamCode: "CIV",
    name: "A. Traor\xE9",
    number: 11,
    position: "FW",
    club: "Villarreal"
  },
  "CIV-12": {
    fifaId: "CIV-12",
    teamCode: "CIV",
    name: "D. Diallo",
    number: 12,
    position: "GK",
    club: "Angers"
  },
  "CIV-14": {
    fifaId: "CIV-14",
    teamCode: "CIV",
    name: "J. Gnagnon",
    number: 14,
    position: "DF",
    club: "Angers"
  },
  "CIV-15": {
    fifaId: "CIV-15",
    teamCode: "CIV",
    name: "S. Di\xE9",
    number: 15,
    position: "MF",
    club: "Boavista"
  },
  "CIV-16": {
    fifaId: "CIV-16",
    teamCode: "CIV",
    name: "D. Dao",
    number: 16,
    position: "MF",
    club: "Lorient"
  },
  "CIV-18": {
    fifaId: "CIV-18",
    teamCode: "CIV",
    name: "D. Kon\xE9",
    number: 18,
    position: "FW",
    club: "Nice"
  },
  "CIV-20": {
    fifaId: "CIV-20",
    teamCode: "CIV",
    name: "B. Fofana",
    number: 20,
    position: "MF",
    club: "Chelsea"
  },
  "CIV-23": {
    fifaId: "CIV-23",
    teamCode: "CIV",
    name: "A. Coulibaly",
    number: 23,
    position: "DF",
    club: "Kasimpasa"
  },
  "CIV-24": {
    fifaId: "CIV-24",
    teamCode: "CIV",
    name: "A. Bamba",
    number: 24,
    position: "GK",
    club: "Toulouse"
  },
  "CIV-25": {
    fifaId: "CIV-25",
    teamCode: "CIV",
    name: "M. Deli",
    number: 25,
    position: "DF",
    club: "Konyaspor"
  },
  "CIV-26": {
    fifaId: "CIV-26",
    teamCode: "CIV",
    name: "Y. Kabor\xE9",
    number: 26,
    position: "MF",
    club: "Manchester City"
  },
  "CPV-2": {
    fifaId: "CPV-2",
    teamCode: "CPV",
    name: "Stopira",
    fullName: "Stopira",
    number: 2,
    position: "DF",
    club: "Rayo Vallecano"
  },
  "CPV-6": {
    fifaId: "CPV-6",
    teamCode: "CPV",
    name: "N. Andrade",
    number: 6,
    position: "MF",
    club: "Belenenses"
  },
  "CPV-9": {
    fifaId: "CPV-9",
    teamCode: "CPV",
    name: "L. Andrade",
    number: 9,
    position: "FW",
    club: "Vit\xF3ria SC"
  },
  "CPV-10": {
    fifaId: "CPV-10",
    teamCode: "CPV",
    name: "R. Soares",
    number: 10,
    position: "MF",
    club: "Greuther F\xFCrth"
  },
  "CPV-12": {
    fifaId: "CPV-12",
    teamCode: "CPV",
    name: "J. Tavares",
    number: 12,
    position: "GK",
    club: "Santa Cruz FC"
  },
  "CPV-13": {
    fifaId: "CPV-13",
    teamCode: "CPV",
    name: "D. Silva",
    number: 13,
    position: "DF",
    club: "Mar\xEDtimo"
  },
  "CPV-15": {
    fifaId: "CPV-15",
    teamCode: "CPV",
    name: "C. Fortes",
    number: 15,
    position: "DF",
    club: "Benfica"
  },
  "CPV-16": {
    fifaId: "CPV-16",
    teamCode: "CPV",
    name: "W. Fortes",
    number: 16,
    position: "FW",
    club: "Porto B"
  },
  "CPV-18": {
    fifaId: "CPV-18",
    teamCode: "CPV",
    name: "R. Tavares",
    number: 18,
    position: "MF",
    club: "Sporting CP"
  },
  "CPV-19": {
    fifaId: "CPV-19",
    teamCode: "CPV",
    name: "B. Dias",
    number: 19,
    position: "MF",
    club: "Pa\xE7os de Ferreira"
  },
  "CPV-20": {
    fifaId: "CPV-20",
    teamCode: "CPV",
    name: "J. Lopes",
    number: 20,
    position: "FW",
    club: "Rio Ave"
  },
  "CPV-23": {
    fifaId: "CPV-23",
    teamCode: "CPV",
    name: "H. Ramos",
    number: 23,
    position: "GK",
    club: "FC Alverca"
  },
  "CPV-24": {
    fifaId: "CPV-24",
    teamCode: "CPV",
    name: "J. Ferreira",
    number: 24,
    position: "DF",
    club: "Gil Vicente"
  },
  "CPV-25": {
    fifaId: "CPV-25",
    teamCode: "CPV",
    name: "L. Da Cruz",
    number: 25,
    position: "MF",
    club: "Acad\xE9mica"
  },
  "CPV-26": {
    fifaId: "CPV-26",
    teamCode: "CPV",
    name: "F. Tavares",
    number: 26,
    position: "FW",
    club: "Penafiel"
  },
  "CUW-6": {
    fifaId: "CUW-6",
    teamCode: "CUW",
    name: "D. Klasen",
    number: 6,
    position: "DF",
    club: "Willem II"
  },
  "CUW-12": {
    fifaId: "CUW-12",
    teamCode: "CUW",
    name: "E. Lont",
    number: 12,
    position: "GK",
    club: "Hapoel Beer-Sheva"
  },
  "CUW-13": {
    fifaId: "CUW-13",
    teamCode: "CUW",
    name: "T. Ezechi\xEBls",
    number: 13,
    position: "DF",
    club: "NAC Breda"
  },
  "CUW-15": {
    fifaId: "CUW-15",
    teamCode: "CUW",
    name: "G. van Dijk",
    number: 15,
    position: "MF",
    club: "Anderlecht"
  },
  "CUW-16": {
    fifaId: "CUW-16",
    teamCode: "CUW",
    name: "S. Thomas",
    number: 16,
    position: "MF",
    club: "Go Ahead Eagles"
  },
  "CUW-17": {
    fifaId: "CUW-17",
    teamCode: "CUW",
    name: "C. Gario",
    number: 17,
    position: "GK",
    club: "Sabah FK"
  },
  "CUW-18": {
    fifaId: "CUW-18",
    teamCode: "CUW",
    name: "T. Meijer",
    number: 18,
    position: "DF",
    club: "Cambuur"
  },
  "CUW-19": {
    fifaId: "CUW-19",
    teamCode: "CUW",
    name: "J. Cijntje",
    number: 19,
    position: "FW",
    club: "Almere City"
  },
  "CUW-20": {
    fifaId: "CUW-20",
    teamCode: "CUW",
    name: "Q. Noels",
    number: 20,
    position: "MF",
    club: "RKC Waalwijk"
  },
  "CUW-21": {
    fifaId: "CUW-21",
    teamCode: "CUW",
    name: "D. Emeran",
    number: 21,
    position: "FW",
    club: "Charleroi"
  },
  "CUW-22": {
    fifaId: "CUW-22",
    teamCode: "CUW",
    name: "N. Bakboord",
    number: 22,
    position: "DF",
    club: "Volendam"
  },
  "CUW-23": {
    fifaId: "CUW-23",
    teamCode: "CUW",
    name: "K. Thomas",
    number: 23,
    position: "FW",
    club: "Excelsior"
  },
  "CUW-24": {
    fifaId: "CUW-24",
    teamCode: "CUW",
    name: "S. Akyol",
    number: 24,
    position: "MF",
    club: "Helmond Sport"
  },
  "CUW-25": {
    fifaId: "CUW-25",
    teamCode: "CUW",
    name: "M. Meesters",
    number: 25,
    position: "DF",
    club: "Dordrecht"
  },
  "CUW-26": {
    fifaId: "CUW-26",
    teamCode: "CUW",
    name: "L. Reenix",
    number: 26,
    position: "FW",
    club: "Molde"
  },
  "CZE-2": {
    fifaId: "CZE-2",
    teamCode: "CZE",
    name: "V. Coufal",
    number: 2,
    position: "DF",
    club: "West Ham"
  },
  "CZE-4": {
    fifaId: "CZE-4",
    teamCode: "CZE",
    name: "O. Celustka",
    fullName: "Ond\u0159ej \u010Cel\u016Fstka",
    number: 4,
    position: "DF",
    club: "Sparta Praga"
  },
  "CZE-6": {
    fifaId: "CZE-6",
    teamCode: "CZE",
    name: "L. Krejci",
    number: 6,
    position: "DF",
    club: "Girona"
  },
  "CZE-11": {
    fifaId: "CZE-11",
    teamCode: "CZE",
    name: "M. Sadilek",
    fullName: "Michal Sad\xEDlek",
    number: 11,
    position: "MF",
    club: "PSV"
  },
  "CZE-12": {
    fifaId: "CZE-12",
    teamCode: "CZE",
    name: "V. Koval",
    number: 12,
    position: "GK",
    club: "Sparta Praga"
  },
  "CZE-15": {
    fifaId: "CZE-15",
    teamCode: "CZE",
    name: "M. Pesek",
    fullName: "Luk\xE1\u0161 Pe\u0161ek",
    number: 15,
    position: "FW",
    club: "RB Salzburg"
  },
  "CZE-16": {
    fifaId: "CZE-16",
    teamCode: "CZE",
    name: "D. Jurasek",
    fullName: "David Jur\xE1sek",
    number: 16,
    position: "DF",
    club: "Hoffenheim"
  },
  "CZE-18": {
    fifaId: "CZE-18",
    teamCode: "CZE",
    name: "O. Lingr",
    fullName: "Ond\u0159ej Lingr",
    number: 18,
    position: "MF",
    club: "Feyenoord"
  },
  "CZE-19": {
    fifaId: "CZE-19",
    teamCode: "CZE",
    name: "T. Chory",
    fullName: "Tom\xE1\u0161 Chor\xFD",
    number: 19,
    position: "FW",
    club: "Sparta Praga"
  },
  "CZE-20": {
    fifaId: "CZE-20",
    teamCode: "CZE",
    name: "J. Kuchta",
    fullName: "Jan Kuchta",
    number: 20,
    position: "FW",
    club: "Slavia Praga"
  },
  "CZE-21": {
    fifaId: "CZE-21",
    teamCode: "CZE",
    name: "M. Vitik",
    fullName: "Martin Vit\xEDk",
    number: 21,
    position: "DF",
    club: "Sparta Praga"
  },
  "CZE-23": {
    fifaId: "CZE-23",
    teamCode: "CZE",
    name: "T. Vaclik",
    fullName: "Tom\xE1\u0161 Vacl\xEDk",
    number: 23,
    position: "GK",
    club: "Olympiacos"
  },
  "CZE-24": {
    fifaId: "CZE-24",
    teamCode: "CZE",
    name: "M. Travnik",
    fullName: "Michal Tr\xE1vn\xEDk",
    number: 24,
    position: "MF",
    club: "Jablonec"
  },
  "CZE-25": {
    fifaId: "CZE-25",
    teamCode: "CZE",
    name: "J. Zeleny",
    number: 25,
    position: "FW",
    club: "Slavia Praga"
  },
  "CZE-26": {
    fifaId: "CZE-26",
    teamCode: "CZE",
    name: "L. Cerv",
    number: 26,
    position: "MF",
    club: "Slavia Praga"
  },
  "ECU-4": {
    fifaId: "ECU-4",
    teamCode: "ECU",
    name: "J. Cifuentes",
    fullName: "Jos\xE9 Cifuentes",
    number: 4,
    position: "MF",
    club: "LAFC"
  },
  "ECU-5": {
    fifaId: "ECU-5",
    teamCode: "ECU",
    name: "W. Arboleda",
    fullName: "William Arboleda",
    number: 5,
    position: "DF",
    club: "S\xE3o Paulo"
  },
  "ECU-6": {
    fifaId: "ECU-6",
    teamCode: "ECU",
    name: "B. Minda",
    number: 6,
    position: "DF",
    club: "Aucas"
  },
  "ECU-8": {
    fifaId: "ECU-8",
    teamCode: "ECU",
    name: "R. Ibarra",
    fullName: "Romario Ibarra",
    number: 8,
    position: "FW",
    club: "Pachuca"
  },
  "ECU-11": {
    fifaId: "ECU-11",
    teamCode: "ECU",
    name: "G. Plata",
    fullName: "Gonzalo Plata",
    number: 11,
    position: "FW",
    club: "Sporting CP"
  },
  "ECU-12": {
    fifaId: "ECU-12",
    teamCode: "ECU",
    name: "A. Dominguez",
    fullName: "Alexander Dom\xEDnguez",
    number: 12,
    position: "GK",
    club: "Liga de Quito"
  },
  "ECU-14": {
    fifaId: "ECU-14",
    teamCode: "ECU",
    name: "A. Gruezo",
    fullName: "Alan Gruezo",
    number: 14,
    position: "MF",
    club: "FC Dallas"
  },
  "ECU-15": {
    fifaId: "ECU-15",
    teamCode: "ECU",
    name: "J. Angulo",
    fullName: "Jordy Angulo",
    number: 15,
    position: "FW",
    club: "Independiente"
  },
  "ECU-18": {
    fifaId: "ECU-18",
    teamCode: "ECU",
    name: "N. Castillo",
    number: 18,
    position: "DF",
    club: "Independiente del Valle"
  },
  "ECU-19": {
    fifaId: "ECU-19",
    teamCode: "ECU",
    name: "C. Mena",
    fullName: "Cristian Mena",
    number: 19,
    position: "DF",
    club: "Racing Club"
  },
  "ECU-20": {
    fifaId: "ECU-20",
    teamCode: "ECU",
    name: "E. Hincapie",
    number: 20,
    position: "MF",
    club: "Independiente del Valle"
  },
  "ECU-22": {
    fifaId: "ECU-22",
    teamCode: "ECU",
    name: "M. Cabezas",
    number: 22,
    position: "GK",
    club: "El Nacional"
  },
  "ECU-24": {
    fifaId: "ECU-24",
    teamCode: "ECU",
    name: "J. Mina",
    fullName: "Jhon Mina",
    number: 24,
    position: "DF",
    club: "Porto"
  },
  "ECU-25": {
    fifaId: "ECU-25",
    teamCode: "ECU",
    name: "O. Mendez",
    fullName: "\xD3scar M\xE9ndez",
    number: 25,
    position: "MF",
    club: "Independiente del Valle"
  },
  "ECU-26": {
    fifaId: "ECU-26",
    teamCode: "ECU",
    name: "G. Pineida",
    number: 26,
    position: "GK",
    club: "Emelec"
  },
  "EGY-2": {
    fifaId: "EGY-2",
    teamCode: "EGY",
    name: "Ahmed Hegazi",
    number: 2,
    position: "DF",
    club: "Al Ittihad"
  },
  "EGY-4": {
    fifaId: "EGY-4",
    teamCode: "EGY",
    name: "Ayman Ashraf",
    number: 4,
    position: "DF",
    club: "Al Ahly"
  },
  "EGY-9": {
    fifaId: "EGY-9",
    teamCode: "EGY",
    name: "Omar Marmoush",
    number: 9,
    position: "FW",
    club: "Manchester City"
  },
  "EGY-12": {
    fifaId: "EGY-12",
    teamCode: "EGY",
    name: "Mohamed Sobhi",
    number: 12,
    position: "MF",
    club: "Al Ahly"
  },
  "EGY-14": {
    fifaId: "EGY-14",
    teamCode: "EGY",
    name: "Zizo",
    number: 14,
    position: "MF",
    club: "Zamalek"
  },
  "EGY-15": {
    fifaId: "EGY-15",
    teamCode: "EGY",
    name: "Akram Tawfik",
    number: 15,
    position: "DF",
    club: "Al Ahly"
  },
  "EGY-16": {
    fifaId: "EGY-16",
    teamCode: "EGY",
    name: "Amr El-Sulaya",
    number: 16,
    position: "MF",
    club: "Al Ahly"
  },
  "EGY-17": {
    fifaId: "EGY-17",
    teamCode: "EGY",
    name: "Ahmed Abdelkader",
    number: 17,
    position: "FW",
    club: "Enppi"
  },
  "EGY-18": {
    fifaId: "EGY-18",
    teamCode: "EGY",
    name: "Karim Fouad",
    number: 18,
    position: "MF",
    club: "Zamalek"
  },
  "EGY-20": {
    fifaId: "EGY-20",
    teamCode: "EGY",
    name: "Ramadan Sobhi",
    number: 20,
    position: "FW",
    club: "Al Ahly"
  },
  "EGY-21": {
    fifaId: "EGY-21",
    teamCode: "EGY",
    name: "Nasser Maher",
    number: 21,
    position: "GK",
    club: "Zamalek"
  },
  "EGY-23": {
    fifaId: "EGY-23",
    teamCode: "EGY",
    name: "Sherif Ekramy",
    number: 23,
    position: "GK",
    club: "Al Ahly"
  },
  "EGY-24": {
    fifaId: "EGY-24",
    teamCode: "EGY",
    name: "Ahmed Sayed Zizo",
    number: 24,
    position: "MF",
    club: "Zamalek"
  },
  "EGY-25": {
    fifaId: "EGY-25",
    teamCode: "EGY",
    name: "Ahmed Ali",
    number: 25,
    position: "FW",
    club: "Zamalek"
  },
  "EGY-26": {
    fifaId: "EGY-26",
    teamCode: "EGY",
    name: "Mahmoud Metwaly",
    number: 26,
    position: "DF",
    club: "Zamalek"
  },
  "GER-5": {
    fifaId: "GER-5",
    teamCode: "GER",
    name: "P. Gro\xDF",
    fullName: "Pascal Gro\xDF",
    number: 5,
    position: "MF",
    club: "Borussia Dortmund"
  },
  "GER-9": {
    fifaId: "GER-9",
    teamCode: "GER",
    name: "N. F\xFCllkrug",
    fullName: "Niclas F\xFCllkrug",
    number: 9,
    position: "FW",
    club: "West Ham"
  },
  "GER-11": {
    fifaId: "GER-11",
    teamCode: "GER",
    name: "C. Nkunku",
    fullName: "Christopher Nkunku",
    number: 11,
    position: "FW",
    club: "Chelsea"
  },
  "GER-12": {
    fifaId: "GER-12",
    teamCode: "GER",
    name: "O. Baumann",
    fullName: "Oliver Baumann",
    number: 12,
    position: "GK",
    club: "Hoffenheim"
  },
  "GER-13": {
    fifaId: "GER-13",
    teamCode: "GER",
    name: "T. M\xFCller",
    fullName: "Thomas M\xFCller",
    number: 13,
    position: "FW",
    club: "Bayern Munique"
  },
  "GER-14": {
    fifaId: "GER-14",
    teamCode: "GER",
    name: "J. Beier",
    fullName: "Maximilian Beier",
    number: 14,
    position: "FW",
    club: "Borussia Dortmund"
  },
  "GER-15": {
    fifaId: "GER-15",
    teamCode: "GER",
    name: "E. Can",
    fullName: "Emre Can",
    number: 15,
    position: "MF",
    club: "Borussia Dortmund"
  },
  "GER-16": {
    fifaId: "GER-16",
    teamCode: "GER",
    name: "R. Mittelst\xE4dt",
    fullName: "Robin Mittelst\xE4dt",
    number: 16,
    position: "DF",
    club: "VfB Stuttgart"
  },
  "GER-18": {
    fifaId: "GER-18",
    teamCode: "GER",
    name: "B. Henrichs",
    fullName: "Benjamin Henrichs",
    number: 18,
    position: "DF",
    club: "RB Leipzig"
  },
  "GER-20": {
    fifaId: "GER-20",
    teamCode: "GER",
    name: "A. Pavlovic",
    fullName: "Aleksandar Pavlovi\u0107",
    number: 20,
    position: "MF",
    club: "Bayern Munique"
  },
  "GER-22": {
    fifaId: "GER-22",
    teamCode: "GER",
    name: "N. Schlotterbeck",
    fullName: "Nico Schlotterbeck",
    number: 22,
    position: "DF",
    club: "Borussia Dortmund"
  },
  "GER-23": {
    fifaId: "GER-23",
    teamCode: "GER",
    name: "S. Gnabry",
    fullName: "Serge Gnabry",
    number: 23,
    position: "FW",
    club: "Bayern Munique"
  },
  "GER-24": {
    fifaId: "GER-24",
    teamCode: "GER",
    name: "T. Sule",
    fullName: "Niklas S\xFCle",
    number: 24,
    position: "DF",
    club: "Borussia Dortmund"
  },
  "GER-25": {
    fifaId: "GER-25",
    teamCode: "GER",
    name: "F. Nmecha",
    fullName: "Felix Nmecha",
    number: 25,
    position: "MF",
    club: "Borussia Dortmund"
  },
  "GER-26": {
    fifaId: "GER-26",
    teamCode: "GER",
    name: "K. Adeyemi",
    fullName: "Karim Adeyemi",
    number: 26,
    position: "FW",
    club: "Borussia Dortmund"
  },
  "HAI-5": {
    fifaId: "HAI-5",
    teamCode: "HAI",
    name: "B. Fequiere",
    number: 5,
    position: "DF",
    club: "Laval"
  },
  "HAI-6": {
    fifaId: "HAI-6",
    teamCode: "HAI",
    name: "S. Metellus",
    number: 6,
    position: "GK",
    club: "CF Montr\xE9al"
  },
  "HAI-10": {
    fifaId: "HAI-10",
    teamCode: "HAI",
    name: "G. Herve",
    number: 10,
    position: "MF",
    club: "Caen"
  },
  "HAI-11": {
    fifaId: "HAI-11",
    teamCode: "HAI",
    name: "J. Pierre",
    number: 11,
    position: "FW",
    club: "Angers"
  },
  "HAI-12": {
    fifaId: "HAI-12",
    teamCode: "HAI",
    name: "R. Joseph",
    number: 12,
    position: "MF",
    club: "Le Mans"
  },
  "HAI-15": {
    fifaId: "HAI-15",
    teamCode: "HAI",
    name: "K. Jean-Baptiste",
    number: 15,
    position: "DF",
    club: "Troyes"
  },
  "HAI-16": {
    fifaId: "HAI-16",
    teamCode: "HAI",
    name: "M. Th\xE9odore",
    number: 16,
    position: "MF",
    club: "Niort"
  },
  "HAI-18": {
    fifaId: "HAI-18",
    teamCode: "HAI",
    name: "H. Noel",
    number: 18,
    position: "FW",
    club: "Red Star"
  },
  "HAI-19": {
    fifaId: "HAI-19",
    teamCode: "HAI",
    name: "G. Dieudonne",
    number: 19,
    position: "DF",
    club: "Guadeloupe"
  },
  "HAI-21": {
    fifaId: "HAI-21",
    teamCode: "HAI",
    name: "F. Volmy",
    number: 21,
    position: "FW",
    club: "Cosmos Haiti"
  },
  "HAI-22": {
    fifaId: "HAI-22",
    teamCode: "HAI",
    name: "J. Lafleur",
    number: 22,
    position: "MF",
    club: "Violette AC"
  },
  "HAI-23": {
    fifaId: "HAI-23",
    teamCode: "HAI",
    name: "S. Pierre-Louis",
    number: 23,
    position: "DF",
    club: "Don Bosco"
  },
  "HAI-24": {
    fifaId: "HAI-24",
    teamCode: "HAI",
    name: "P. Bateau",
    number: 24,
    position: "GK",
    club: "Racing Club Ha\xEFtien"
  },
  "HAI-25": {
    fifaId: "HAI-25",
    teamCode: "HAI",
    name: "G. Gilles",
    number: 25,
    position: "FW",
    club: "Tourbillon"
  },
  "HAI-26": {
    fifaId: "HAI-26",
    teamCode: "HAI",
    name: "M. Prophete",
    number: 26,
    position: "DF",
    club: "Cavaly"
  },
  "IRN-4": {
    fifaId: "IRN-4",
    teamCode: "IRN",
    name: "M. Hosseini",
    fullName: "Majid Hosseini",
    number: 4,
    position: "DF",
    club: "Kasimpasa"
  },
  "IRN-7": {
    fifaId: "IRN-7",
    teamCode: "IRN",
    name: "A. Hajsafi",
    fullName: "Ehsan Hajsafi",
    number: 7,
    position: "DF",
    club: "Persepolis"
  },
  "IRN-11": {
    fifaId: "IRN-11",
    teamCode: "IRN",
    name: "K. Ansarifard",
    fullName: "Karim Ansarifard",
    number: 11,
    position: "FW",
    club: "Nottingham Forest"
  },
  "IRN-12": {
    fifaId: "IRN-12",
    teamCode: "IRN",
    name: "V. Beiranvand",
    number: 12,
    position: "GK",
    club: "Anderlecht"
  },
  "IRN-16": {
    fifaId: "IRN-16",
    teamCode: "IRN",
    name: "A. Noorollahi",
    fullName: "Ali Noorollahi",
    number: 16,
    position: "MF",
    club: "Al-Wehda"
  },
  "IRN-17": {
    fifaId: "IRN-17",
    teamCode: "IRN",
    name: "M. Torabi",
    fullName: "Morteza Pouraliganji",
    number: 17,
    position: "DF",
    club: "Persepolis"
  },
  "IRN-18": {
    fifaId: "IRN-18",
    teamCode: "IRN",
    name: "M. Pouraliganji",
    fullName: "Morteza Pouraliganji",
    number: 18,
    position: "DF",
    club: "Al-Shabab"
  },
  "IRN-21": {
    fifaId: "IRN-21",
    teamCode: "IRN",
    name: "A. Karimi",
    fullName: "Ali Karimi",
    number: 21,
    position: "MF",
    club: "Bayer Leverkusen"
  },
  "IRN-22": {
    fifaId: "IRN-22",
    teamCode: "IRN",
    name: "M. Golalizadeh",
    number: 22,
    position: "DF",
    club: "Tractor"
  },
  "IRN-23": {
    fifaId: "IRN-23",
    teamCode: "IRN",
    name: "A. Shojaei",
    fullName: "Masoud Shojaei",
    number: 23,
    position: "MF",
    club: "Persepolis"
  },
  "IRN-24": {
    fifaId: "IRN-24",
    teamCode: "IRN",
    name: "M. Ebrahimi",
    number: 24,
    position: "MF",
    club: "Sepahan"
  },
  "IRN-25": {
    fifaId: "IRN-25",
    teamCode: "IRN",
    name: "S. Mohebi",
    number: 25,
    position: "FW",
    club: "Persepolis"
  },
  "IRN-26": {
    fifaId: "IRN-26",
    teamCode: "IRN",
    name: "H. Khatir",
    fullName: "Hossein Khatir",
    number: 26,
    position: "FW",
    club: "Trabzonspor"
  },
  "IRQ-1": {
    fifaId: "IRQ-1",
    teamCode: "IRQ",
    name: "F. Hamid",
    number: 1,
    position: "GK",
    club: "Al-Zawraa"
  },
  "IRQ-2": {
    fifaId: "IRQ-2",
    teamCode: "IRQ",
    name: "A. Karrar",
    number: 2,
    position: "DF",
    club: "Al-Shorta"
  },
  "IRQ-6": {
    fifaId: "IRQ-6",
    teamCode: "IRQ",
    name: "M. Waleed",
    number: 6,
    position: "MF",
    club: "Al-Quwa Al-Jawiya"
  },
  "IRQ-7": {
    fifaId: "IRQ-7",
    teamCode: "IRQ",
    name: "H. Al-Mukhtar",
    number: 7,
    position: "FW",
    club: "Colorado Rapids"
  },
  "IRQ-10": {
    fifaId: "IRQ-10",
    teamCode: "IRQ",
    name: "A. Tariq",
    number: 10,
    position: "FW",
    club: "Al-Shorta"
  },
  "IRQ-11": {
    fifaId: "IRQ-11",
    teamCode: "IRQ",
    name: "H. Nadhim",
    number: 11,
    position: "MF",
    club: "Hoverla Uzhhorod"
  },
  "IRQ-13": {
    fifaId: "IRQ-13",
    teamCode: "IRQ",
    name: "M. Subhi",
    number: 13,
    position: "GK",
    club: "Al-Zawraa"
  },
  "IRQ-14": {
    fifaId: "IRQ-14",
    teamCode: "IRQ",
    name: "A. Farhan",
    number: 14,
    position: "DF",
    club: "Al-Kahraba"
  },
  "IRQ-15": {
    fifaId: "IRQ-15",
    teamCode: "IRQ",
    name: "A. Salah",
    number: 15,
    position: "MF",
    club: "Al-Zawraa"
  },
  "IRQ-19": {
    fifaId: "IRQ-19",
    teamCode: "IRQ",
    name: "A. Abdalkarim",
    number: 19,
    position: "FW",
    club: "FC Eindhoven"
  },
  "IRQ-20": {
    fifaId: "IRQ-20",
    teamCode: "IRQ",
    name: "O. Salman",
    number: 20,
    position: "DF",
    club: "Al-Quwa Al-Jawiya"
  },
  "IRQ-21": {
    fifaId: "IRQ-21",
    teamCode: "IRQ",
    name: "A. Razzaq",
    number: 21,
    position: "FW",
    club: "Hoverla Uzhhorod"
  },
  "IRQ-22": {
    fifaId: "IRQ-22",
    teamCode: "IRQ",
    name: "H. Shakir",
    number: 22,
    position: "MF",
    club: "Al-Shorta"
  },
  "IRQ-25": {
    fifaId: "IRQ-25",
    teamCode: "IRQ",
    name: "A. Al-Hamdawi",
    number: 25,
    position: "DF",
    club: "Al-Naft"
  },
  "IRQ-26": {
    fifaId: "IRQ-26",
    teamCode: "IRQ",
    name: "M. Ahmed",
    number: 26,
    position: "GK",
    club: "Al-Minaa"
  },
  "JPN-3": {
    fifaId: "JPN-3",
    teamCode: "JPN",
    name: "S. Machino",
    fullName: "Shuto Machino",
    number: 3,
    position: "FW",
    club: "Gent"
  },
  "JPN-8": {
    fifaId: "JPN-8",
    teamCode: "JPN",
    name: "D. Kamada",
    fullName: "Daichi Kamada",
    number: 8,
    position: "MF",
    club: "Crystal Palace"
  },
  "JPN-10": {
    fifaId: "JPN-10",
    teamCode: "JPN",
    name: "R. Doan",
    fullName: "Ritsu Doan",
    number: 10,
    position: "FW",
    club: "SC Freiburg"
  },
  "JPN-11": {
    fifaId: "JPN-11",
    teamCode: "JPN",
    name: "K. Nakamura",
    fullName: "Keito Nakamura",
    number: 11,
    position: "FW",
    club: "Reims"
  },
  "JPN-12": {
    fifaId: "JPN-12",
    teamCode: "JPN",
    name: "D. Schmidt",
    fullName: "Daniel Schmidt",
    number: 12,
    position: "GK",
    club: "Sint-Truiden"
  },
  "JPN-13": {
    fifaId: "JPN-13",
    teamCode: "JPN",
    name: "W. Tanaka",
    fullName: "Wataru Endo",
    number: 13,
    position: "DF",
    club: "Stuttgart"
  },
  "JPN-15": {
    fifaId: "JPN-15",
    teamCode: "JPN",
    name: "K. Ueda",
    fullName: "Koki Ueda",
    number: 15,
    position: "FW",
    club: "Nice"
  },
  "JPN-16": {
    fifaId: "JPN-16",
    teamCode: "JPN",
    name: "G. Taniguchi",
    fullName: "Gen Shoji",
    number: 16,
    position: "DF",
    club: "Kashima Antlers"
  },
  "JPN-17": {
    fifaId: "JPN-17",
    teamCode: "JPN",
    name: "H. Sakai",
    fullName: "Hiroki Sakai",
    number: 17,
    position: "DF",
    club: "Urawa Red Diamonds"
  },
  "JPN-18": {
    fifaId: "JPN-18",
    teamCode: "JPN",
    name: "M. Numakura",
    number: 18,
    position: "DF",
    club: "Kashima Antlers"
  },
  "JPN-19": {
    fifaId: "JPN-19",
    teamCode: "JPN",
    name: "Y. Soma",
    fullName: "Yuki Soma",
    number: 19,
    position: "MF",
    club: "Nagoya Grampus"
  },
  "JPN-23": {
    fifaId: "JPN-23",
    teamCode: "JPN",
    name: "S. Nishikawa",
    number: 23,
    position: "GK",
    club: "Urawa Red Diamonds"
  },
  "JPN-24": {
    fifaId: "JPN-24",
    teamCode: "JPN",
    name: "A. Tanaka",
    fullName: "Ao Tanaka",
    number: 24,
    position: "MF",
    club: "Leeds United"
  },
  "JPN-25": {
    fifaId: "JPN-25",
    teamCode: "JPN",
    name: "T. Araki",
    number: 25,
    position: "MF",
    club: "Kawasaki Frontale"
  },
  "JPN-26": {
    fifaId: "JPN-26",
    teamCode: "JPN",
    name: "K. Itakura",
    number: 26,
    position: "DF",
    club: "Borussia Monchengladbach"
  },
  "KOR-2": {
    fifaId: "KOR-2",
    teamCode: "KOR",
    name: "Kim Moon-hwan",
    number: 2,
    position: "DF",
    club: "Jeonbuk Hyundai"
  },
  "KOR-8": {
    fifaId: "KOR-8",
    teamCode: "KOR",
    name: "Lee Jae-sung",
    number: 8,
    position: "MF",
    club: "Mainz"
  },
  "KOR-10": {
    fifaId: "KOR-10",
    teamCode: "KOR",
    name: "Na Sang-ho",
    number: 10,
    position: "FW",
    club: "Jeonbuk Hyundai"
  },
  "KOR-12": {
    fifaId: "KOR-12",
    teamCode: "KOR",
    name: "Kim Seung-gyu",
    number: 12,
    position: "GK",
    club: "Vissel Kobe"
  },
  "KOR-13": {
    fifaId: "KOR-13",
    teamCode: "KOR",
    name: "Kwon Kyung-won",
    number: 13,
    position: "DF",
    club: "Tianjin Jinmen Tiger"
  },
  "KOR-14": {
    fifaId: "KOR-14",
    teamCode: "KOR",
    name: "Jeong Woo-yeong",
    number: 14,
    position: "MF",
    club: "SC Freiburg"
  },
  "KOR-16": {
    fifaId: "KOR-16",
    teamCode: "KOR",
    name: "Kim Jin-su",
    number: 16,
    position: "DF",
    club: "FC Augsburg"
  },
  "KOR-17": {
    fifaId: "KOR-17",
    teamCode: "KOR",
    name: "Yang Hyun-jun",
    number: 17,
    position: "FW",
    club: "Celtic"
  },
  "KOR-19": {
    fifaId: "KOR-19",
    teamCode: "KOR",
    name: "Lim Seong-jin",
    number: 19,
    position: "MF",
    club: "Gangwon FC"
  },
  "KOR-20": {
    fifaId: "KOR-20",
    teamCode: "KOR",
    name: "Oh Se-hun",
    number: 20,
    position: "FW",
    club: "Al-Hilal"
  },
  "KOR-21": {
    fifaId: "KOR-21",
    teamCode: "KOR",
    name: "Song Bum-keun",
    number: 21,
    position: "GK",
    club: "Suwon Bluewings"
  },
  "KOR-23": {
    fifaId: "KOR-23",
    teamCode: "KOR",
    name: "Paik Seung-ho",
    number: 23,
    position: "MF",
    club: "Girona"
  },
  "KOR-24": {
    fifaId: "KOR-24",
    teamCode: "KOR",
    name: "Kim Tae-hwan",
    number: 24,
    position: "DF",
    club: "Ulsan HD"
  },
  "KOR-25": {
    fifaId: "KOR-25",
    teamCode: "KOR",
    name: "Cho Hyun-woo",
    number: 25,
    position: "GK",
    club: "Daegu FC"
  },
  "KOR-26": {
    fifaId: "KOR-26",
    teamCode: "KOR",
    name: "Lee Dong-jun",
    number: 26,
    position: "FW",
    club: "Girondin Bordeaux"
  },
  "KSA-1": {
    fifaId: "KSA-1",
    teamCode: "KSA",
    name: "M. Al-Owais",
    fullName: "Mohammed Al-Owais",
    number: 1,
    position: "GK",
    club: "Al-Hilal"
  },
  "KSA-2": {
    fifaId: "KSA-2",
    teamCode: "KSA",
    name: "S. Al-Ghannam",
    number: 2,
    position: "DF",
    club: "Al-Ahli"
  },
  "KSA-3": {
    fifaId: "KSA-3",
    teamCode: "KSA",
    name: "A. Al-Amri",
    fullName: "Ali Al-Amri",
    number: 3,
    position: "DF",
    club: "Al-Ittihad"
  },
  "KSA-4": {
    fifaId: "KSA-4",
    teamCode: "KSA",
    name: "O. Hawsawi",
    number: 4,
    position: "DF",
    club: "Al-Hilal"
  },
  "KSA-6": {
    fifaId: "KSA-6",
    teamCode: "KSA",
    name: "M. Al-Burayk",
    fullName: "Mohammed Al-Burayk",
    number: 6,
    position: "DF",
    club: "Al-Ittihad"
  },
  "KSA-15": {
    fifaId: "KSA-15",
    teamCode: "KSA",
    name: "H. Al-Tambakti",
    fullName: "Hassan Al-Tambakti",
    number: 15,
    position: "DF",
    club: "Al-Hilal"
  },
  "KSA-16": {
    fifaId: "KSA-16",
    teamCode: "KSA",
    name: "A. Al-Shahrani",
    number: 16,
    position: "GK",
    club: "Al-Hilal"
  },
  "KSA-17": {
    fifaId: "KSA-17",
    teamCode: "KSA",
    name: "A. Al-Khaibari",
    number: 17,
    position: "MF",
    club: "Al-Hilal"
  },
  "KSA-18": {
    fifaId: "KSA-18",
    teamCode: "KSA",
    name: "R. Al-Ghamdhi",
    number: 18,
    position: "MF",
    club: "Al-Nassr"
  },
  "KSA-19": {
    fifaId: "KSA-19",
    teamCode: "KSA",
    name: "S. Al-Dawsari",
    number: 19,
    position: "FW",
    club: "Al-Hilal"
  },
  "KSA-20": {
    fifaId: "KSA-20",
    teamCode: "KSA",
    name: "M. Al-Qasim",
    number: 20,
    position: "MF",
    club: "Al-Ahli"
  },
  "KSA-22": {
    fifaId: "KSA-22",
    teamCode: "KSA",
    name: "A. Al-Malki",
    number: 22,
    position: "FW",
    club: "Al-Shabab"
  },
  "KSA-24": {
    fifaId: "KSA-24",
    teamCode: "KSA",
    name: "H. Al-Shahrani",
    number: 24,
    position: "DF",
    club: "Al-Qadsiah"
  },
  "KSA-25": {
    fifaId: "KSA-25",
    teamCode: "KSA",
    name: "I. Al-Jassim",
    number: 25,
    position: "GK",
    club: "Al-Faisaly"
  },
  "MAR-6": {
    fifaId: "MAR-6",
    teamCode: "MAR",
    name: "R. Ait Nouri",
    fullName: "Rayan A\xEFt Nouri",
    number: 6,
    position: "DF",
    club: "Wolverhampton"
  },
  "MAR-9": {
    fifaId: "MAR-9",
    teamCode: "MAR",
    name: "A. Sabiri",
    fullName: "Abdelhamid Sabiri",
    number: 9,
    position: "MF",
    club: "Al-Qadsiah"
  },
  "MAR-11": {
    fifaId: "MAR-11",
    teamCode: "MAR",
    name: "S. Boufal",
    fullName: "Sofiane Boufal",
    number: 11,
    position: "FW",
    club: "Lorient"
  },
  "MAR-12": {
    fifaId: "MAR-12",
    teamCode: "MAR",
    name: "M. Munir",
    number: 12,
    position: "GK",
    club: "Lorient"
  },
  "MAR-13": {
    fifaId: "MAR-13",
    teamCode: "MAR",
    name: "M. Chibi",
    number: 13,
    position: "DF",
    club: "Troyes"
  },
  "MAR-14": {
    fifaId: "MAR-14",
    teamCode: "MAR",
    name: "B. Bouanane",
    number: 14,
    position: "GK",
    club: "Royal Antwerp"
  },
  "MAR-15": {
    fifaId: "MAR-15",
    teamCode: "MAR",
    name: "I. Benoun",
    number: 15,
    position: "DF",
    club: "Al Qadsiah"
  },
  "MAR-16": {
    fifaId: "MAR-16",
    teamCode: "MAR",
    name: "I. Attiyat Allah",
    fullName: "Ibrahim Attiyat Allah",
    number: 16,
    position: "DF",
    club: "Wydad Casablanca"
  },
  "MAR-18": {
    fifaId: "MAR-18",
    teamCode: "MAR",
    name: "W. Cheddira",
    fullName: "Walid Cheddira",
    number: 18,
    position: "FW",
    club: "Parma"
  },
  "MAR-20": {
    fifaId: "MAR-20",
    teamCode: "MAR",
    name: "Y. Jabrane",
    number: 20,
    position: "MF",
    club: "Wydad Casablanca"
  },
  "MAR-21": {
    fifaId: "MAR-21",
    teamCode: "MAR",
    name: "Y. Benrhuma",
    number: 21,
    position: "FW",
    club: "AEK Athens"
  },
  "MAR-22": {
    fifaId: "MAR-22",
    teamCode: "MAR",
    name: "A. Ezzalzouli",
    fullName: "Abde Ezzalzouli",
    number: 22,
    position: "FW",
    club: "Real Betis"
  },
  "MAR-24": {
    fifaId: "MAR-24",
    teamCode: "MAR",
    name: "H. Laroubi",
    number: 24,
    position: "FW",
    club: "Racing Club"
  },
  "MAR-25": {
    fifaId: "MAR-25",
    teamCode: "MAR",
    name: "S. Rzouq",
    number: 25,
    position: "MF",
    club: "Wydad Casablanca"
  },
  "MAR-26": {
    fifaId: "MAR-26",
    teamCode: "MAR",
    name: "A. Louza",
    fullName: "Azzedine Louza",
    number: 26,
    position: "MF",
    club: "Angers"
  },
  "MEX-6": {
    fifaId: "MEX-6",
    teamCode: "MEX",
    name: "E. Gutierrez",
    number: 6,
    position: "MF",
    club: "Al-Ahli"
  },
  "MEX-7": {
    fifaId: "MEX-7",
    teamCode: "MEX",
    name: "H. Herrera",
    fullName: "H\xE9ctor Herrera",
    number: 7,
    position: "MF",
    club: "Houston Dynamo"
  },
  "MEX-8": {
    fifaId: "MEX-8",
    teamCode: "MEX",
    name: "A. Guardado",
    fullName: "Andr\xE9s Guardado",
    number: 8,
    position: "MF",
    club: "Beta Guadalajara"
  },
  "MEX-9": {
    fifaId: "MEX-9",
    teamCode: "MEX",
    name: "R. Jimenez",
    fullName: "Ra\xFAl Jim\xE9nez",
    number: 9,
    position: "FW",
    club: "LA Galaxy"
  },
  "MEX-10": {
    fifaId: "MEX-10",
    teamCode: "MEX",
    name: "A. Vega",
    fullName: "Alexis Vega",
    number: 10,
    position: "FW",
    club: "Chivas"
  },
  "MEX-12": {
    fifaId: "MEX-12",
    teamCode: "MEX",
    name: "G. Ochoa",
    fullName: "Guillermo Ochoa",
    number: 12,
    position: "GK",
    club: "Am\xE9rica"
  },
  "MEX-13": {
    fifaId: "MEX-13",
    teamCode: "MEX",
    name: "C. Alvarez",
    number: 13,
    position: "DF",
    club: "Club Am\xE9rica"
  },
  "MEX-14": {
    fifaId: "MEX-14",
    teamCode: "MEX",
    name: "E. Lainez",
    fullName: "Diego Lainez",
    number: 14,
    position: "MF",
    club: "Braga"
  },
  "MEX-16": {
    fifaId: "MEX-16",
    teamCode: "MEX",
    name: "C. Rodiguez",
    fullName: "Carlos Rodr\xEDguez",
    number: 16,
    position: "DF",
    club: "Cruz Azul"
  },
  "MEX-18": {
    fifaId: "MEX-18",
    teamCode: "MEX",
    name: "A. Sanchez",
    number: 18,
    position: "GK",
    club: "Tigres"
  },
  "MEX-19": {
    fifaId: "MEX-19",
    teamCode: "MEX",
    name: "E. Cordova",
    number: 19,
    position: "FW",
    club: "Tigres"
  },
  "MEX-20": {
    fifaId: "MEX-20",
    teamCode: "MEX",
    name: "J. Macias",
    fullName: "Jos\xE9 Juan Mac\xEDas",
    number: 20,
    position: "FW",
    club: "Chivas"
  },
  "MEX-21": {
    fifaId: "MEX-21",
    teamCode: "MEX",
    name: "R. Alvarado",
    fullName: "Roberto Alvarado",
    number: 21,
    position: "MF",
    club: "Chivas"
  },
  "MEX-25": {
    fifaId: "MEX-25",
    teamCode: "MEX",
    name: "N. Araujo",
    fullName: "Nestor Araujo",
    number: 25,
    position: "DF",
    club: "Celta Vigo"
  },
  "MEX-26": {
    fifaId: "MEX-26",
    teamCode: "MEX",
    name: "J. Aguirre",
    number: 26,
    position: "DF",
    club: "Monterrey"
  },
  "NED-2": {
    fifaId: "NED-2",
    teamCode: "NED",
    name: "D. Blind",
    fullName: "Daley Blind",
    number: 2,
    position: "DF",
    club: "Girona"
  },
  "NED-6": {
    fifaId: "NED-6",
    teamCode: "NED",
    name: "S. de Vrij",
    fullName: "Stefan de Vrij",
    number: 6,
    position: "DF",
    club: "Inter de Mil\xE3o"
  },
  "NED-8": {
    fifaId: "NED-8",
    teamCode: "NED",
    name: "R. Koopmeiners",
    fullName: "Teun Koopmeiners",
    number: 8,
    position: "MF",
    club: "Juventus"
  },
  "NED-9": {
    fifaId: "NED-9",
    teamCode: "NED",
    name: "B. Brobbey",
    fullName: "Brian Brobbey",
    number: 9,
    position: "FW",
    club: "Ajax"
  },
  "NED-13": {
    fifaId: "NED-13",
    teamCode: "NED",
    name: "M. de Roon",
    fullName: "Marten de Roon",
    number: 13,
    position: "MF",
    club: "Atalanta"
  },
  "NED-15": {
    fifaId: "NED-15",
    teamCode: "NED",
    name: "K. Timber",
    fullName: "Quilindschy Hartman",
    number: 15,
    position: "DF",
    club: "Feyenoord"
  },
  "NED-16": {
    fifaId: "NED-16",
    teamCode: "NED",
    name: "J. Gravenberch",
    fullName: "Ryan Gravenberch",
    number: 16,
    position: "MF",
    club: "Liverpool"
  },
  "NED-17": {
    fifaId: "NED-17",
    teamCode: "NED",
    name: "B. Zirkzee",
    fullName: "Joshua Zirkzee",
    number: 17,
    position: "FW",
    club: "Manchester United"
  },
  "NED-18": {
    fifaId: "NED-18",
    teamCode: "NED",
    name: "K. Hartman",
    fullName: "Quilindschy Hartman",
    number: 18,
    position: "DF",
    club: "Feyenoord"
  },
  "NED-19": {
    fifaId: "NED-19",
    teamCode: "NED",
    name: "M. Veerman",
    fullName: "Joey Veerman",
    number: 19,
    position: "MF",
    club: "PSV"
  },
  "NED-20": {
    fifaId: "NED-20",
    teamCode: "NED",
    name: "D. Flekken",
    fullName: "Mark Flekken",
    number: 20,
    position: "GK",
    club: "Brentford"
  },
  "NED-23": {
    fifaId: "NED-23",
    teamCode: "NED",
    name: "J. Timber",
    fullName: "Jurrien Timber",
    number: 23,
    position: "DF",
    club: "Arsenal"
  },
  "NED-24": {
    fifaId: "NED-24",
    teamCode: "NED",
    name: "R. Mijnans",
    fullName: "Quinten Timber",
    number: 24,
    position: "GK",
    club: "Sparta Rotterdam"
  },
  "NED-25": {
    fifaId: "NED-25",
    teamCode: "NED",
    name: "G. Wieffer",
    fullName: "Mats Wieffer",
    number: 25,
    position: "MF",
    club: "Brighton"
  },
  "NED-26": {
    fifaId: "NED-26",
    teamCode: "NED",
    name: "N. Sugawara",
    number: 26,
    position: "DF",
    club: "AZ Alkmaar"
  },
  "NOR-2": {
    fifaId: "NOR-2",
    teamCode: "NOR",
    name: "E. Pedersen",
    fullName: "Emil Pedersen",
    number: 2,
    position: "DF",
    club: "FC Twente"
  },
  "NOR-4": {
    fifaId: "NOR-4",
    teamCode: "NOR",
    name: "L. Ostigard",
    fullName: "Leo \xD8stig\xE5rd",
    number: 4,
    position: "DF",
    club: "Napoli"
  },
  "NOR-6": {
    fifaId: "NOR-6",
    teamCode: "NOR",
    name: "M. Reginiussen",
    number: 6,
    position: "DF",
    club: "Rosenborg"
  },
  "NOR-11": {
    fifaId: "NOR-11",
    teamCode: "NOR",
    name: "O. Thorstvedt",
    fullName: "Oliver Thorstvedt",
    number: 11,
    position: "MF",
    club: "Tottenham"
  },
  "NOR-12": {
    fifaId: "NOR-12",
    teamCode: "NOR",
    name: "M. Grytebust",
    number: 12,
    position: "GK",
    club: "Viking"
  },
  "NOR-13": {
    fifaId: "NOR-13",
    teamCode: "NOR",
    name: "P. Pihlkjaer",
    number: 13,
    position: "DF",
    club: "Midtjylland"
  },
  "NOR-15": {
    fifaId: "NOR-15",
    teamCode: "NOR",
    name: "M. Solbakken",
    fullName: "Mathias Normann",
    number: 15,
    position: "MF",
    club: "Standard de Li\xE8ge"
  },
  "NOR-16": {
    fifaId: "NOR-16",
    teamCode: "NOR",
    name: "C. Aarones",
    number: 16,
    position: "FW",
    club: "FC Nordsjaelland"
  },
  "NOR-18": {
    fifaId: "NOR-18",
    teamCode: "NOR",
    name: "H. Stiller",
    number: 18,
    position: "MF",
    club: "Augsburg"
  },
  "NOR-19": {
    fifaId: "NOR-19",
    teamCode: "NOR",
    name: "K. Johnsen",
    number: 19,
    position: "GK",
    club: "Molde"
  },
  "NOR-21": {
    fifaId: "NOR-21",
    teamCode: "NOR",
    name: "J. Dahl",
    number: 21,
    position: "FW",
    club: "Hoffenheim"
  },
  "NOR-22": {
    fifaId: "NOR-22",
    teamCode: "NOR",
    name: "M. Pedersen",
    fullName: "Morten Thorsby",
    number: 22,
    position: "MF",
    club: "Union Berlin"
  },
  "NOR-23": {
    fifaId: "NOR-23",
    teamCode: "NOR",
    name: "E. Botheim",
    number: 23,
    position: "FW",
    club: "Krasnodar"
  },
  "NOR-24": {
    fifaId: "NOR-24",
    teamCode: "NOR",
    name: "S. Larsen",
    number: 24,
    position: "DF",
    club: "Groningen"
  },
  "NOR-25": {
    fifaId: "NOR-25",
    teamCode: "NOR",
    name: "J. Strand Larsen",
    fullName: "J\xF8rgen Strand Larsen",
    number: 25,
    position: "FW",
    club: "Celta Vigo"
  },
  "NZL-3": {
    fifaId: "NZL-3",
    teamCode: "NZL",
    name: "Callan Elliot",
    number: 3,
    position: "MF",
    club: "Norwich City"
  },
  "NZL-7": {
    fifaId: "NZL-7",
    teamCode: "NZL",
    name: "Alex Greive",
    number: 7,
    position: "FW",
    club: "St Mirren"
  },
  "NZL-12": {
    fifaId: "NZL-12",
    teamCode: "NZL",
    name: "Stefan Marinovic",
    number: 12,
    position: "GK",
    club: "Vancouver Whitecaps"
  },
  "NZL-14": {
    fifaId: "NZL-14",
    teamCode: "NZL",
    name: "Matthew Garbett",
    number: 14,
    position: "MF",
    club: "Troyes"
  },
  "NZL-15": {
    fifaId: "NZL-15",
    teamCode: "NZL",
    name: "Clayton Lewis",
    number: 15,
    position: "MF",
    club: "FC Lugano"
  },
  "NZL-16": {
    fifaId: "NZL-16",
    teamCode: "NZL",
    name: "Ryan Thomas",
    number: 16,
    position: "MF",
    club: "NEC Nijmegen"
  },
  "NZL-18": {
    fifaId: "NZL-18",
    teamCode: "NZL",
    name: "Joe Champness",
    number: 18,
    position: "FW",
    club: "FC Emmen"
  },
  "NZL-19": {
    fifaId: "NZL-19",
    teamCode: "NZL",
    name: "Kosta Barbarouses",
    number: 19,
    position: "FW",
    club: "Melbourne City"
  },
  "NZL-20": {
    fifaId: "NZL-20",
    teamCode: "NZL",
    name: "Sam Sutton",
    number: 20,
    position: "GK",
    club: "Wellington Phoenix"
  },
  "NZL-21": {
    fifaId: "NZL-21",
    teamCode: "NZL",
    name: "Dane Ingham",
    number: 21,
    position: "DF",
    club: "HB K\xF8ge"
  },
  "NZL-22": {
    fifaId: "NZL-22",
    teamCode: "NZL",
    name: "Louis Fenton",
    number: 22,
    position: "DF",
    club: "Livingston"
  },
  "NZL-23": {
    fifaId: "NZL-23",
    teamCode: "NZL",
    name: "Ollie Sail",
    number: 23,
    position: "GK",
    club: "Auckland FC"
  },
  "NZL-24": {
    fifaId: "NZL-24",
    teamCode: "NZL",
    name: "Finn Surman",
    number: 24,
    position: "DF",
    club: "Barnsley"
  },
  "NZL-25": {
    fifaId: "NZL-25",
    teamCode: "NZL",
    name: "Hamish Watson",
    number: 25,
    position: "MF",
    club: "Auckland FC"
  },
  "NZL-26": {
    fifaId: "NZL-26",
    teamCode: "NZL",
    name: "Jake McGlynn",
    number: 26,
    position: "MF",
    club: "New York Red Bulls"
  },
  "PAR-4": {
    fifaId: "PAR-4",
    teamCode: "PAR",
    name: "F. Balbuena",
    fullName: "Fabi\xE1n Balbuena",
    number: 4,
    position: "DF",
    club: "Dynamo Moscow"
  },
  "PAR-5": {
    fifaId: "PAR-5",
    teamCode: "PAR",
    name: "J. Ort\xEDz",
    fullName: "Julio Enciso",
    number: 5,
    position: "MF",
    club: "Independiente"
  },
  "PAR-7": {
    fifaId: "PAR-7",
    teamCode: "PAR",
    name: "D. Segovia",
    number: 7,
    position: "FW",
    club: "Hurac\xE1n"
  },
  "PAR-8": {
    fifaId: "PAR-8",
    teamCode: "PAR",
    name: "M. Cardozo",
    fullName: "\xD3scar Cardozo",
    number: 8,
    position: "FW",
    club: "Club Olimpia"
  },
  "PAR-11": {
    fifaId: "PAR-11",
    teamCode: "PAR",
    name: "A. Romero",
    number: 11,
    position: "FW",
    club: "Juventus"
  },
  "PAR-12": {
    fifaId: "PAR-12",
    teamCode: "PAR",
    name: "R. Fernandez",
    number: 12,
    position: "GK",
    club: "Guaran\xED"
  },
  "PAR-13": {
    fifaId: "PAR-13",
    teamCode: "PAR",
    name: "G. Rojas",
    number: 13,
    position: "DF",
    club: "Olimpia"
  },
  "PAR-16": {
    fifaId: "PAR-16",
    teamCode: "PAR",
    name: "R. Ovelar",
    number: 16,
    position: "MF",
    club: "Atletico Tucum\xE1n"
  },
  "PAR-18": {
    fifaId: "PAR-18",
    teamCode: "PAR",
    name: "A. Gimenez",
    number: 18,
    position: "DF",
    club: "Cerro Porte\xF1o"
  },
  "PAR-20": {
    fifaId: "PAR-20",
    teamCode: "PAR",
    name: "D. Caceres",
    number: 20,
    position: "MF",
    club: "Pumas UNAM"
  },
  "PAR-21": {
    fifaId: "PAR-21",
    teamCode: "PAR",
    name: "L. Almiron",
    number: 21,
    position: "FW",
    club: "Libertad"
  },
  "PAR-22": {
    fifaId: "PAR-22",
    teamCode: "PAR",
    name: "N. Tavarelli",
    number: 22,
    position: "GK",
    club: "Sol de Am\xE9rica"
  },
  "PAR-24": {
    fifaId: "PAR-24",
    teamCode: "PAR",
    name: "J. Benitez",
    number: 24,
    position: "DF",
    club: "Guaran\xED"
  },
  "PAR-25": {
    fifaId: "PAR-25",
    teamCode: "PAR",
    name: "F. Lopez",
    number: 25,
    position: "MF",
    club: "Cerro Porte\xF1o"
  },
  "PAR-26": {
    fifaId: "PAR-26",
    teamCode: "PAR",
    name: "M. Medina",
    number: 26,
    position: "MF",
    club: "Cruz Azul"
  },
  "SCO-6": {
    fifaId: "SCO-6",
    teamCode: "SCO",
    name: "C. McGregor",
    fullName: "Callum McGregor",
    number: 6,
    position: "MF",
    club: "Celtic"
  },
  "SCO-9": {
    fifaId: "SCO-9",
    teamCode: "SCO",
    name: "K. Nisbet",
    fullName: "Kevin Nisbet",
    number: 9,
    position: "FW",
    club: "Millwall"
  },
  "SCO-12": {
    fifaId: "SCO-12",
    teamCode: "SCO",
    name: "D. Gordon",
    fullName: "Craig Gordon",
    number: 12,
    position: "GK",
    club: "Hearts"
  },
  "SCO-13": {
    fifaId: "SCO-13",
    teamCode: "SCO",
    name: "G. Hendry",
    fullName: "Grant Hanley",
    number: 13,
    position: "DF",
    club: "Norwich City"
  },
  "SCO-14": {
    fifaId: "SCO-14",
    teamCode: "SCO",
    name: "S. Hendry",
    fullName: "Stephen Hendry",
    number: 14,
    position: "DF",
    club: "Club Brugge"
  },
  "SCO-16": {
    fifaId: "SCO-16",
    teamCode: "SCO",
    name: "L. Ferguson",
    fullName: "Lewis Ferguson",
    number: 16,
    position: "MF",
    club: "Bologna"
  },
  "SCO-17": {
    fifaId: "SCO-17",
    teamCode: "SCO",
    name: "A. Forrest",
    fullName: "Ryan Jack",
    number: 17,
    position: "MF",
    club: "Rangers"
  },
  "SCO-18": {
    fifaId: "SCO-18",
    teamCode: "SCO",
    name: "K. Tierney",
    fullName: "Kieran Tierney",
    number: 18,
    position: "DF",
    club: "Real Sociedad"
  },
  "SCO-19": {
    fifaId: "SCO-19",
    teamCode: "SCO",
    name: "A. Hickey",
    fullName: "Aaron Hickey",
    number: 19,
    position: "DF",
    club: "Brentford"
  },
  "SCO-20": {
    fifaId: "SCO-20",
    teamCode: "SCO",
    name: "S. Dykes",
    fullName: "Lyndon Dykes",
    number: 20,
    position: "FW",
    club: "QPR"
  },
  "SCO-22": {
    fifaId: "SCO-22",
    teamCode: "SCO",
    name: "J. Shankland",
    fullName: "Lawrence Shankland",
    number: 22,
    position: "FW",
    club: "Hearts"
  },
  "SCO-23": {
    fifaId: "SCO-23",
    teamCode: "SCO",
    name: "P. Turnbull",
    fullName: "David Turnbull",
    number: 23,
    position: "MF",
    club: "Middlesbrough"
  },
  "SCO-24": {
    fifaId: "SCO-24",
    teamCode: "SCO",
    name: "S. Porteous",
    fullName: "Ryan Porteous",
    number: 24,
    position: "DF",
    club: "Watford"
  },
  "SCO-25": {
    fifaId: "SCO-25",
    teamCode: "SCO",
    name: "L. Palmer",
    fullName: "Liam Palmer",
    number: 25,
    position: "DF",
    club: "Sheffield Wednesday"
  },
  "SCO-26": {
    fifaId: "SCO-26",
    teamCode: "SCO",
    name: "Z. Hemming",
    fullName: "Zander Clark",
    number: 26,
    position: "GK",
    club: "St Johnstone"
  },
  "SEN-1": {
    fifaId: "SEN-1",
    teamCode: "SEN",
    name: "S. Mendy",
    fullName: "Seny Dieng",
    number: 1,
    position: "GK",
    club: "Middlesbrough"
  },
  "SEN-2": {
    fifaId: "SEN-2",
    teamCode: "SEN",
    name: "Y. Sabaly",
    fullName: "Youssouf Sabaly",
    number: 2,
    position: "DF",
    club: "Real Betis"
  },
  "SEN-6": {
    fifaId: "SEN-6",
    teamCode: "SEN",
    name: "A. Diallo",
    fullName: "Abdou Diallo",
    number: 6,
    position: "DF",
    club: "RB Leipzig"
  },
  "SEN-7": {
    fifaId: "SEN-7",
    teamCode: "SEN",
    name: "M. Ndiaye",
    fullName: "Mamadou Ndiaye",
    number: 7,
    position: "FW",
    club: "RC Lens"
  },
  "SEN-10": {
    fifaId: "SEN-10",
    teamCode: "SEN",
    name: "S. Man\xE9",
    fullName: "Sadio Man\xE9",
    number: 10,
    position: "FW",
    club: "Al-Nassr"
  },
  "SEN-12": {
    fifaId: "SEN-12",
    teamCode: "SEN",
    name: "G. Gomis",
    number: 12,
    position: "GK",
    club: "Stade Rennais"
  },
  "SEN-13": {
    fifaId: "SEN-13",
    teamCode: "SEN",
    name: "K. Bald\xE9",
    fullName: "Keita Bald\xE9",
    number: 13,
    position: "FW",
    club: "Anderlecht"
  },
  "SEN-14": {
    fifaId: "SEN-14",
    teamCode: "SEN",
    name: "B. Diatta",
    fullName: "Boulaye Dia",
    number: 14,
    position: "FW",
    club: "Lazio"
  },
  "SEN-15": {
    fifaId: "SEN-15",
    teamCode: "SEN",
    name: "L. Mbaye",
    number: 15,
    position: "DF",
    club: "Bologna"
  },
  "SEN-18": {
    fifaId: "SEN-18",
    teamCode: "SEN",
    name: "P. Diallo",
    number: 18,
    position: "MF",
    club: "Ajax"
  },
  "SEN-20": {
    fifaId: "SEN-20",
    teamCode: "SEN",
    name: "B. Diakhaby",
    number: 20,
    position: "DF",
    club: "Valencia"
  },
  "SEN-22": {
    fifaId: "SEN-22",
    teamCode: "SEN",
    name: "P. Aw",
    number: 22,
    position: "MF",
    club: "Metz"
  },
  "SEN-23": {
    fifaId: "SEN-23",
    teamCode: "SEN",
    name: "K. Ndiaye",
    number: 23,
    position: "MF",
    club: "Nottingham Forest"
  },
  "SEN-24": {
    fifaId: "SEN-24",
    teamCode: "SEN",
    name: "D. Mbaye",
    number: 24,
    position: "MF",
    club: "Stade Rennais"
  },
  "SEN-26": {
    fifaId: "SEN-26",
    teamCode: "SEN",
    name: "M. Sy",
    number: 26,
    position: "GK",
    club: "G\xE9n\xE9ration Foot"
  },
  "SWE-5": {
    fifaId: "SWE-5",
    teamCode: "SWE",
    name: "M. Svanberg",
    fullName: "Mattias Svanberg",
    number: 5,
    position: "MF",
    club: "Wolfsburg"
  },
  "SWE-7": {
    fifaId: "SWE-7",
    teamCode: "SWE",
    name: "D. Lustig",
    fullName: "Mikael Lustig",
    number: 7,
    position: "DF",
    club: "IFK G\xF6teborg"
  },
  "SWE-8": {
    fifaId: "SWE-8",
    teamCode: "SWE",
    name: "A. Larsson",
    fullName: "Albin Ekdal",
    number: 8,
    position: "MF",
    club: "Sampdoria"
  },
  "SWE-12": {
    fifaId: "SWE-12",
    teamCode: "SWE",
    name: "K. Nordfeldt",
    number: 12,
    position: "GK",
    club: "G\xF6ztepe"
  },
  "SWE-13": {
    fifaId: "SWE-13",
    teamCode: "SWE",
    name: "C. Danielson",
    number: 13,
    position: "DF",
    club: "AIK"
  },
  "SWE-14": {
    fifaId: "SWE-14",
    teamCode: "SWE",
    name: "D. Holm",
    number: 14,
    position: "MF",
    club: "Elfsborg"
  },
  "SWE-15": {
    fifaId: "SWE-15",
    teamCode: "SWE",
    name: "O. Olsson",
    number: 15,
    position: "DF",
    club: "Midtjylland"
  },
  "SWE-16": {
    fifaId: "SWE-16",
    teamCode: "SWE",
    name: "M. Almqvist",
    number: 16,
    position: "FW",
    club: "Sassuolo"
  },
  "SWE-18": {
    fifaId: "SWE-18",
    teamCode: "SWE",
    name: "S. Larsson",
    fullName: "Sebastian Larsson",
    number: 18,
    position: "MF",
    club: "AIK"
  },
  "SWE-19": {
    fifaId: "SWE-19",
    teamCode: "SWE",
    name: "P. Andersson",
    number: 19,
    position: "DF",
    club: "Malm\xF6 FF"
  },
  "SWE-22": {
    fifaId: "SWE-22",
    teamCode: "SWE",
    name: "O. Pontus",
    number: 22,
    position: "GK",
    club: "Djurg\xE5rdens IF"
  },
  "SWE-23": {
    fifaId: "SWE-23",
    teamCode: "SWE",
    name: "A. Karlsson",
    number: 23,
    position: "FW",
    club: "AEK Athens"
  },
  "SWE-24": {
    fifaId: "SWE-24",
    teamCode: "SWE",
    name: "F. Kristiansen",
    number: 24,
    position: "DF",
    club: "Union Berlin"
  },
  "SWE-25": {
    fifaId: "SWE-25",
    teamCode: "SWE",
    name: "H. Larsson",
    fullName: "Hugo Larsson",
    number: 25,
    position: "MF",
    club: "Eintracht Frankfurt"
  },
  "SWE-26": {
    fifaId: "SWE-26",
    teamCode: "SWE",
    name: "J. Almqvist",
    number: 26,
    position: "FW",
    club: "Atalanta"
  },
  "TUN-1": {
    fifaId: "TUN-1",
    teamCode: "TUN",
    name: "B. Hmam",
    number: 1,
    position: "GK",
    club: "Club Africain"
  },
  "TUN-4": {
    fifaId: "TUN-4",
    teamCode: "TUN",
    name: "Y. Chammam",
    number: 4,
    position: "DF",
    club: "Esp\xE9rance Sportive"
  },
  "TUN-5": {
    fifaId: "TUN-5",
    teamCode: "TUN",
    name: "M. Ben Romdhane",
    number: 5,
    position: "MF",
    club: "Esp\xE9rance Sportive"
  },
  "TUN-8": {
    fifaId: "TUN-8",
    teamCode: "TUN",
    name: "N. Sliti",
    fullName: "Naim Sliti",
    number: 8,
    position: "FW",
    club: "Al-Ahli"
  },
  "TUN-12": {
    fifaId: "TUN-12",
    teamCode: "TUN",
    name: "A. Ben Said",
    number: 12,
    position: "GK",
    club: "\xC9toile du Sahel"
  },
  "TUN-13": {
    fifaId: "TUN-13",
    teamCode: "TUN",
    name: "W. Kechrida",
    number: 13,
    position: "DF",
    club: "Sivasspor"
  },
  "TUN-15": {
    fifaId: "TUN-15",
    teamCode: "TUN",
    name: "G. Meriah",
    fullName: "Ghailene Chaalali",
    number: 15,
    position: "MF",
    club: "Esp\xE9rance Sportive"
  },
  "TUN-18": {
    fifaId: "TUN-18",
    teamCode: "TUN",
    name: "A. Badri",
    number: 18,
    position: "FW",
    club: "Esp\xE9rance Sportive"
  },
  "TUN-19": {
    fifaId: "TUN-19",
    teamCode: "TUN",
    name: "K. Chammam",
    number: 19,
    position: "DF",
    club: "Stade Tunisien"
  },
  "TUN-21": {
    fifaId: "TUN-21",
    teamCode: "TUN",
    name: "O. Machrouh",
    number: 21,
    position: "MF",
    club: "Zamalek"
  },
  "TUN-22": {
    fifaId: "TUN-22",
    teamCode: "TUN",
    name: "F. Ben Mustapha",
    number: 22,
    position: "GK",
    club: "Hannover 96"
  },
  "TUN-23": {
    fifaId: "TUN-23",
    teamCode: "TUN",
    name: "A. Rejeb",
    number: 23,
    position: "MF",
    club: "Club Africain"
  },
  "TUN-24": {
    fifaId: "TUN-24",
    teamCode: "TUN",
    name: "H. Ben Hamida",
    number: 24,
    position: "DF",
    club: "CS Sfaxien"
  },
  "TUN-25": {
    fifaId: "TUN-25",
    teamCode: "TUN",
    name: "M. Sassi",
    fullName: "Mohamed Amine Sassi",
    number: 25,
    position: "MF",
    club: "Wydad Casablanca"
  },
  "TUN-26": {
    fifaId: "TUN-26",
    teamCode: "TUN",
    name: "A. Traoui",
    number: 26,
    position: "FW",
    club: "\xC9toile du Sahel"
  },
  "TUR-4": {
    fifaId: "TUR-4",
    teamCode: "TUR",
    name: "S. Soyuncu",
    fullName: "\xC7a\u011Flar S\xF6y\xFCnc\xFC",
    number: 4,
    position: "DF",
    club: "Atletico Madrid"
  },
  "TUR-5": {
    fifaId: "TUR-5",
    teamCode: "TUR",
    name: "K. Ayhan",
    fullName: "Kaan Ayhan",
    number: 5,
    position: "DF",
    club: "Galatasaray"
  },
  "TUR-6": {
    fifaId: "TUR-6",
    teamCode: "TUR",
    name: "O. Kabak",
    fullName: "Ozan Kabak",
    number: 6,
    position: "DF",
    club: "Hoffenheim"
  },
  "TUR-9": {
    fifaId: "TUR-9",
    teamCode: "TUR",
    name: "S. Yilmaz",
    fullName: "Serdar Dursun",
    number: 9,
    position: "FW",
    club: "Fenerbah\xE7e"
  },
  "TUR-12": {
    fifaId: "TUR-12",
    teamCode: "TUR",
    name: "U. Cakir",
    number: 12,
    position: "GK",
    club: "Trabzonspor"
  },
  "TUR-13": {
    fifaId: "TUR-13",
    teamCode: "TUR",
    name: "O. Toker",
    number: 13,
    position: "MF",
    club: "Trabzonspor"
  },
  "TUR-15": {
    fifaId: "TUR-15",
    teamCode: "TUR",
    name: "A. Aydin",
    number: 15,
    position: "MF",
    club: "Fenerbah\xE7e"
  },
  "TUR-17": {
    fifaId: "TUR-17",
    teamCode: "TUR",
    name: "H. Calhanoglu",
    number: 17,
    position: "MF",
    club: "Inter de Mil\xE3o"
  },
  "TUR-18": {
    fifaId: "TUR-18",
    teamCode: "TUR",
    name: "M. Yazici",
    fullName: "Yusuf Yaz\u0131c\u0131",
    number: 18,
    position: "MF",
    club: "LOSC Lille"
  },
  "TUR-19": {
    fifaId: "TUR-19",
    teamCode: "TUR",
    name: "O. Tufan",
    fullName: "O\u011Fuzhan Tufan",
    number: 19,
    position: "MF",
    club: "Fenerbah\xE7e"
  },
  "TUR-22": {
    fifaId: "TUR-22",
    teamCode: "TUR",
    name: "M. Yildirim",
    number: 22,
    position: "GK",
    club: "Sivasspor"
  },
  "TUR-23": {
    fifaId: "TUR-23",
    teamCode: "TUR",
    name: "I. Kose",
    number: 23,
    position: "DF",
    club: "Galatasaray"
  },
  "TUR-24": {
    fifaId: "TUR-24",
    teamCode: "TUR",
    name: "A. Celik",
    fullName: "Zeki \xC7elik",
    number: 24,
    position: "DF",
    club: "Roma"
  },
  "TUR-25": {
    fifaId: "TUR-25",
    teamCode: "TUR",
    name: "T. Ozcan",
    number: 25,
    position: "MF",
    club: "Bayer Leverkusen"
  },
  "TUR-26": {
    fifaId: "TUR-26",
    teamCode: "TUR",
    name: "E. Demir",
    number: 26,
    position: "FW",
    club: "Galatasaray"
  },
  "URU-3": {
    fifaId: "URU-3",
    teamCode: "URU",
    name: "Diego God\xEDn",
    number: 3,
    position: "DF",
    club: "V\xE9lez S\xE1rsfield"
  },
  "URU-6": {
    fifaId: "URU-6",
    teamCode: "URU",
    name: "Rodrigo Bentancur",
    number: 6,
    position: "MF",
    club: "Tottenham"
  },
  "URU-10": {
    fifaId: "URU-10",
    teamCode: "URU",
    name: "Giorgian de Arrascaeta",
    number: 10,
    position: "MF",
    club: "Flamengo"
  },
  "URU-12": {
    fifaId: "URU-12",
    teamCode: "URU",
    name: "Mart\xEDn Campa\xF1a",
    number: 12,
    position: "GK",
    club: "Deportivo Cali"
  },
  "URU-13": {
    fifaId: "URU-13",
    teamCode: "URU",
    name: "Diego Rossi",
    number: 13,
    position: "FW",
    club: "Fenerbah\xE7e"
  },
  "URU-14": {
    fifaId: "URU-14",
    teamCode: "URU",
    name: "Lucas Torreira",
    number: 14,
    position: "MF",
    club: "Galatasaray"
  },
  "URU-17": {
    fifaId: "URU-17",
    teamCode: "URU",
    name: "Gast\xF3n Pereiro",
    number: 17,
    position: "MF",
    club: "PSV"
  },
  "URU-18": {
    fifaId: "URU-18",
    teamCode: "URU",
    name: "Sebasti\xE1n Coates",
    number: 18,
    position: "DF",
    club: "Sporting CP"
  },
  "URU-19": {
    fifaId: "URU-19",
    teamCode: "URU",
    name: "Mat\xEDas Vecino",
    number: 19,
    position: "MF",
    club: "Lazio"
  },
  "URU-21": {
    fifaId: "URU-21",
    teamCode: "URU",
    name: "Brian Rodr\xEDguez",
    number: 21,
    position: "FW",
    club: "LAFC"
  },
  "URU-22": {
    fifaId: "URU-22",
    teamCode: "URU",
    name: "Guillermo Varela",
    number: 22,
    position: "DF",
    club: "Flamengo"
  },
  "URU-23": {
    fifaId: "URU-23",
    teamCode: "URU",
    name: "Nahuel N\xE1ndez",
    number: 23,
    position: "DF",
    club: "Cagliari"
  },
  "URU-24": {
    fifaId: "URU-24",
    teamCode: "URU",
    name: "Santiago Bueno",
    number: 24,
    position: "DF",
    club: "Wolverhampton"
  },
  "URU-25": {
    fifaId: "URU-25",
    teamCode: "URU",
    name: "Facundo Torres",
    number: 25,
    position: "FW",
    club: "Orlando City"
  },
  "URU-26": {
    fifaId: "URU-26",
    teamCode: "URU",
    name: "Washington Aguirre",
    number: 26,
    position: "GK",
    club: "Nacional"
  },
  "USA-6": {
    fifaId: "USA-6",
    teamCode: "USA",
    name: "Y. Musah",
    fullName: "Yunus Musah",
    number: 6,
    position: "MF",
    club: "Milan"
  },
  "USA-9": {
    fifaId: "USA-9",
    teamCode: "USA",
    name: "J. Sargent",
    fullName: "Josh Sargent",
    number: 9,
    position: "FW",
    club: "Norwich City"
  },
  "USA-11": {
    fifaId: "USA-11",
    teamCode: "USA",
    name: "B. Pulisic",
    fullName: "Brian Pulisic",
    number: 11,
    position: "MF",
    club: "St. Gallen"
  },
  "USA-12": {
    fifaId: "USA-12",
    teamCode: "USA",
    name: "S. Freese",
    fullName: "Sean Johnson",
    number: 12,
    position: "GK",
    club: "New York City FC"
  },
  "USA-14": {
    fifaId: "USA-14",
    teamCode: "USA",
    name: "L. Acosta",
    fullName: "Luciano Acosta",
    number: 14,
    position: "MF",
    club: "FC Cincinnati"
  },
  "USA-15": {
    fifaId: "USA-15",
    teamCode: "USA",
    name: "J. Richards",
    fullName: "Chris Richards",
    number: 15,
    position: "DF",
    club: "Crystal Palace"
  },
  "USA-16": {
    fifaId: "USA-16",
    teamCode: "USA",
    name: "S. Lletget",
    fullName: "Sebastian Lletget",
    number: 16,
    position: "MF",
    club: "FC Dallas"
  },
  "USA-17": {
    fifaId: "USA-17",
    teamCode: "USA",
    name: "J. Morris",
    fullName: "Jordan Morris",
    number: 17,
    position: "FW",
    club: "Seattle Sounders"
  },
  "USA-18": {
    fifaId: "USA-18",
    teamCode: "USA",
    name: "A. Cannon",
    fullName: "DeAndre Yedlin",
    number: 18,
    position: "DF",
    club: "Inter Miami"
  },
  "USA-19": {
    fifaId: "USA-19",
    teamCode: "USA",
    name: "R. Busio",
    fullName: "Gianluca Busio",
    number: 19,
    position: "MF",
    club: "Venezia"
  },
  "USA-22": {
    fifaId: "USA-22",
    teamCode: "USA",
    name: "Z. Steffen",
    fullName: "Zack Steffen",
    number: 22,
    position: "GK",
    club: "Colorado Rapids"
  },
  "USA-23": {
    fifaId: "USA-23",
    teamCode: "USA",
    name: "J. Ferreira",
    fullName: "Jes\xFAs Ferreira",
    number: 23,
    position: "FW",
    club: "FC Dallas"
  },
  "USA-24": {
    fifaId: "USA-24",
    teamCode: "USA",
    name: "D. Moore",
    fullName: "Daryl Dike",
    number: 24,
    position: "FW",
    club: "West Brom"
  },
  "USA-25": {
    fifaId: "USA-25",
    teamCode: "USA",
    name: "J. Carter-Vickers",
    fullName: "Cameron Carter-Vickers",
    number: 25,
    position: "DF",
    club: "Celtic"
  },
  "USA-26": {
    fifaId: "USA-26",
    teamCode: "USA",
    name: "B. Aaronson",
    fullName: "Brenden Aaronson",
    number: 26,
    position: "MF",
    club: "Leeds United"
  },
  "ENG-1": {
    fifaId: "ENG-1",
    teamCode: "ENG",
    name: "J. Pickford",
    fullName: "Jordan Pickford",
    number: 1,
    position: "GK",
    club: "Everton"
  },
  "ENG-2": {
    fifaId: "ENG-2",
    teamCode: "ENG",
    name: "K. Walker",
    fullName: "Kyle Walker",
    number: 2,
    position: "DF",
    club: "Manchester City"
  },
  "ENG-3": {
    fifaId: "ENG-3",
    teamCode: "ENG",
    name: "L. Shaw",
    fullName: "Luke Shaw",
    number: 3,
    position: "DF",
    club: "Manchester United"
  },
  "ENG-4": {
    fifaId: "ENG-4",
    teamCode: "ENG",
    name: "D. Rice",
    fullName: "Declan Rice",
    number: 4,
    position: "MF",
    club: "Arsenal"
  },
  "ENG-5": {
    fifaId: "ENG-5",
    teamCode: "ENG",
    name: "J. Stones",
    fullName: "John Stones",
    number: 5,
    position: "DF",
    club: "Manchester City"
  },
  "ENG-6": {
    fifaId: "ENG-6",
    teamCode: "ENG",
    name: "M. Gu\xE9hi",
    fullName: "Marc Gu\xE9hi",
    number: 6,
    position: "DF",
    club: "Newcastle"
  },
  "ENG-7": {
    fifaId: "ENG-7",
    teamCode: "ENG",
    name: "P. Foden",
    fullName: "Phil Foden",
    number: 7,
    position: "FW",
    club: "Manchester City"
  },
  "ENG-8": {
    fifaId: "ENG-8",
    teamCode: "ENG",
    name: "J. Bellingham",
    fullName: "Jude Bellingham",
    number: 8,
    position: "MF",
    club: "Real Madrid"
  },
  "ENG-9": {
    fifaId: "ENG-9",
    teamCode: "ENG",
    name: "H. Kane",
    fullName: "Harry Kane",
    number: 9,
    position: "FW",
    club: "Bayern M\xFCnchen"
  },
  "ENG-10": {
    fifaId: "ENG-10",
    teamCode: "ENG",
    name: "E. Eze",
    fullName: "Eberechi Eze",
    number: 10,
    position: "FW",
    club: "Crystal Palace"
  },
  "ENG-11": {
    fifaId: "ENG-11",
    teamCode: "ENG",
    name: "B. Saka",
    fullName: "Bukayo Saka",
    number: 11,
    position: "FW",
    club: "Arsenal"
  },
  "ENG-12": {
    fifaId: "ENG-12",
    teamCode: "ENG",
    name: "D. Henderson",
    fullName: "Dean Henderson",
    number: 12,
    position: "GK",
    club: "Crystal Palace"
  },
  "ENG-13": {
    fifaId: "ENG-13",
    teamCode: "ENG",
    name: "A. Gordon",
    fullName: "Anthony Gordon",
    number: 13,
    position: "FW",
    club: "Liverpool"
  },
  "ENG-14": {
    fifaId: "ENG-14",
    teamCode: "ENG",
    name: "C. Gallagher",
    fullName: "Conor Gallagher",
    number: 14,
    position: "MF",
    club: "Atl\xE9tico de Madrid"
  },
  "ENG-15": {
    fifaId: "ENG-15",
    teamCode: "ENG",
    name: "B. White",
    fullName: "Ben White",
    number: 15,
    position: "DF",
    club: "Arsenal"
  },
  "ENG-16": {
    fifaId: "ENG-16",
    teamCode: "ENG",
    name: "K. Mainoo",
    fullName: "Kobbie Mainoo",
    number: 16,
    position: "MF",
    club: "Manchester United"
  },
  "ENG-17": {
    fifaId: "ENG-17",
    teamCode: "ENG",
    name: "O. Watkins",
    fullName: "Ollie Watkins",
    number: 17,
    position: "FW",
    club: "Aston Villa"
  },
  "ENG-18": {
    fifaId: "ENG-18",
    teamCode: "ENG",
    name: "T. Alexander-Arnold",
    fullName: "Trent Alexander-Arnold",
    number: 18,
    position: "MF",
    club: "Real Madrid"
  },
  "ENG-19": {
    fifaId: "ENG-19",
    teamCode: "ENG",
    name: "M. Gibbs-White",
    fullName: "Morgan Gibbs-White",
    number: 19,
    position: "MF",
    club: "Nottingham Forest"
  },
  "ENG-20": {
    fifaId: "ENG-20",
    teamCode: "ENG",
    name: "C. Palmer",
    fullName: "Cole Palmer",
    number: 20,
    position: "MF",
    club: "Chelsea"
  },
  "ENG-21": {
    fifaId: "ENG-21",
    teamCode: "ENG",
    name: "L. Colwill",
    fullName: "Levi Colwill",
    number: 21,
    position: "DF",
    club: "Chelsea"
  },
  "ENG-22": {
    fifaId: "ENG-22",
    teamCode: "ENG",
    name: "R. James",
    fullName: "Reece James",
    number: 22,
    position: "DF",
    club: "Chelsea"
  },
  "ENG-23": {
    fifaId: "ENG-23",
    teamCode: "ENG",
    name: "N. Pope",
    fullName: "Nick Pope",
    number: 23,
    position: "GK",
    club: "Newcastle"
  },
  "ENG-24": {
    fifaId: "ENG-24",
    teamCode: "ENG",
    name: "E. Konsa",
    fullName: "Ezri Konsa",
    number: 24,
    position: "DF",
    club: "Aston Villa"
  },
  "ENG-25": {
    fifaId: "ENG-25",
    teamCode: "ENG",
    name: "A. Wharton",
    fullName: "Adam Wharton",
    number: 25,
    position: "MF",
    club: "Crystal Palace"
  },
  "ENG-26": {
    fifaId: "ENG-26",
    teamCode: "ENG",
    name: "J. Bowen",
    fullName: "Jarrod Bowen",
    number: 26,
    position: "FW",
    club: "West Ham"
  },
  "403001": {
    fifaId: "403001",
    teamCode: "POR",
    name: "D. Costa",
    fullName: "Diogo Costa",
    number: 1,
    position: "GK",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c3541e5-a8cb-458c-b368-7f57c1b5ae03/DIOGO-COSTA_403001"
  },
  "395212": {
    fifaId: "395212",
    teamCode: "POR",
    name: "N. Semedo",
    fullName: "Nelson Semedo",
    number: 2,
    position: "DF",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/7b97ea5c-f883-424a-9133-eead7e175b00/NELSON-SEMEDO_395212"
  },
  "384752": {
    fifaId: "384752",
    teamCode: "POR",
    name: "R\xFAben Dias",
    fullName: "R\xFAben Dias",
    number: 3,
    position: "DF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/7eab2fa3-e7d1-4876-aaaa-a44a9e923750/RUBEN-DIAS_384752"
  },
  "492358": {
    fifaId: "492358",
    teamCode: "POR",
    name: "T. Ara\xFAjo",
    fullName: "Tom\xE1s Ara\xFAjo",
    number: 4,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/e8840a7f-2bc5-44fb-a7bc-15d7a605691c/TOMAS-ARAUJO_492358"
  },
  "403002": {
    fifaId: "403002",
    teamCode: "POR",
    name: "Diogo Dalot",
    fullName: "Diogo Dalot",
    number: 5,
    position: "DF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/d9eaa8b4-91e3-4c4f-b501-4082718f5323/DIOGO-DALOT_403002"
  },
  "441148": {
    fifaId: "441148",
    teamCode: "POR",
    name: "M. Nunes",
    fullName: "Matheus Nunes",
    number: 6,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/49ae9c75-e5f8-404a-8576-81e52d4c8338/MATHEUS-NUNES_441148"
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
      instagram: "https://instagram.com/cristiano"
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
    pictureUrl: "https://digitalhub.fifa.com/transform/4a31c35d-c697-4c1a-ac51-a120b82a3d83/BRUNO-FERNANDES_395206"
  },
  "448081": {
    fifaId: "448081",
    teamCode: "POR",
    name: "G. Ramos",
    fullName: "Gon\xE7alo Ramos",
    number: 9,
    position: "FW",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/040f6a55-0f54-430e-a03b-bb994ee40921/GONCALO-RAMOS_448081"
  },
  "395205": {
    fifaId: "395205",
    teamCode: "POR",
    name: "Bernardo Silva",
    fullName: "Bernardo Silva",
    number: 10,
    position: "MF",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/97535989-5b6f-414b-a582-54a0c48df12a/BERNARDO-SILVA_395205"
  },
  "418535": {
    fifaId: "418535",
    teamCode: "POR",
    name: "Jo\xE3o F\xE9lix",
    fullName: "Jo\xE3o F\xE9lix",
    number: 11,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/e1fd310b-cac5-47ef-95e9-9d0b8b41ba2f/JOAO-FELIX_418535"
  },
  "368689": {
    fifaId: "368689",
    teamCode: "POR",
    name: "Jos\xE9 S\xE1",
    fullName: "Jos\xE9 S\xE1",
    number: 12,
    position: "GK",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/167fd8ff-0a3f-4c15-adc8-859e9d81caa3/JOSE-SA_368689"
  },
  "489704": {
    fifaId: "489704",
    teamCode: "POR",
    name: "Renato Veiga",
    fullName: "Renato Veiga",
    number: 13,
    position: "DF",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/556c6a9a-facb-4a04-8b68-15bee3974c9f/RENATO-VEIGA_489704"
  },
  "441146": {
    fifaId: "441146",
    teamCode: "POR",
    name: "G. In\xE1cio",
    fullName: "Gon\xE7alo In\xE1cio",
    number: 14,
    position: "DF",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/636fe280-77cd-4db8-8c43-e499e1489e31/GONCALO-INACIO_441146"
  },
  "484141": {
    fifaId: "484141",
    teamCode: "POR",
    name: "J. Neves",
    fullName: "Jo\xE3o Neves",
    number: 15,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/c79cf261-45b2-484b-860f-9adac3ed7d17/JOAO-NEVES_484141"
  },
  "418561": {
    fifaId: "418561",
    teamCode: "POR",
    name: "F. Trinc\xE3o",
    fullName: "Francisco Trinc\xE3o",
    number: 16,
    position: "FW",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/3aaa45cd-d807-4825-9145-3b1865a009bb/FRANCISCO-TRINCAO_418561"
  },
  "418550": {
    fifaId: "418550",
    teamCode: "POR",
    name: "Rafael Le\xE3o",
    fullName: "Rafael Le\xE3o",
    number: 17,
    position: "FW",
    club: "AC Milan",
    pictureUrl: "https://digitalhub.fifa.com/transform/a5a760a7-7b47-42ed-8302-3ea75dbe9fc4/RAFAEL-LEAO_418550"
  },
  "418548": {
    fifaId: "418548",
    teamCode: "POR",
    name: "Pedro Neto",
    fullName: "Pedro Neto",
    number: 18,
    position: "FW",
    club: "Chelsea",
    pictureUrl: "https://digitalhub.fifa.com/transform/e4e58acb-f7af-402c-a7b8-e284583ce14f/PEDRO-NETO_418548"
  },
  "384751": {
    fifaId: "384751",
    teamCode: "POR",
    name: "G. Guedes",
    fullName: "Gon\xE7alo Guedes",
    number: 19,
    position: "FW",
    club: "Nottingham Forest",
    pictureUrl: "https://digitalhub.fifa.com/transform/ebae7760-2b89-4f53-bc2a-38b1b276f85b/GONCALO-GUEDES_384751"
  },
  "368649": {
    fifaId: "368649",
    teamCode: "POR",
    name: "Jo\xE3o Cancelo",
    fullName: "Jo\xE3o Cancelo",
    number: 20,
    position: "DF",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/bb6c8016-d4b5-4434-9bba-1ec8cac37300/JOAO-CANCELO_368649"
  },
  "395216": {
    fifaId: "395216",
    teamCode: "POR",
    name: "R\xFAben Neves",
    fullName: "R\xFAben Neves",
    number: 21,
    position: "MF",
    club: "Al-Hilal",
    pictureUrl: "https://digitalhub.fifa.com/transform/884a330c-be4c-442d-becb-2d601c7574d1/RUBEN-NEVES_395216"
  },
  "448092": {
    fifaId: "448092",
    teamCode: "POR",
    name: "Rui Silva",
    fullName: "Rui Silva",
    number: 22,
    position: "GK",
    club: "Real Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/11360803-25b9-4af9-b4a1-5916e0cd03cb/RUI-SILVA_448092"
  },
  "441149": {
    fifaId: "441149",
    teamCode: "POR",
    name: "Vitinha",
    fullName: "Vitinha",
    number: 23,
    position: "MF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/8d21116d-608f-409b-932b-71c1ee1a043c/VITINHA_441149"
  },
  "491216": {
    fifaId: "491216",
    teamCode: "POR",
    name: "Samu Costa",
    fullName: "Samuel Costa",
    number: 24,
    position: "DF",
    club: "Porto",
    pictureUrl: "https://digitalhub.fifa.com/transform/38256f2e-7139-4848-b609-051bb4623b71/SAMU-COSTA_491216"
  },
  "433195": {
    fifaId: "433195",
    teamCode: "POR",
    name: "N. Mendes",
    fullName: "Nuno Mendes",
    number: 25,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/f8d5d7b8-bb64-4427-80d1-911d68b2dd1a/NUNO-MENDES_433195"
  },
  "485081": {
    fifaId: "485081",
    teamCode: "POR",
    name: "F. Concei\xE7\xE3o",
    fullName: "Francisco Concei\xE7\xE3o",
    number: 26,
    position: "FW",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/1cb86e09-cf4e-4b60-8849-09d17dd1f8ad/FRANCISCO-CONCEICAO_485081"
  },
  "441313": {
    fifaId: "441313",
    teamCode: "COD",
    name: "Lionel Mpasi",
    fullName: "Lionel Mpasi",
    number: 1,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/93a9ca9a-b0db-41bb-80e6-878eb46f0c84/MPASI-Lionel_441313"
  },
  "426357": {
    fifaId: "426357",
    teamCode: "COD",
    name: "Aaron Wan-Bissaka",
    fullName: "Aaron Wan-Bissaka",
    number: 2,
    position: "DF",
    club: "West Ham United",
    pictureUrl: "https://digitalhub.fifa.com/transform/55753894-f81e-4e55-84a7-835ef46fc9bb/WAN-BISSAKA-Aaron_426357"
  },
  "504329": {
    fifaId: "504329",
    teamCode: "COD",
    name: "Steve Kapuadi",
    fullName: "Steve Kapuadi",
    number: 3,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/60a4ad81-dbaa-4276-b291-f002ec98ddfc/KAPUADI-Steve_504329"
  },
  "403063": {
    fifaId: "403063",
    teamCode: "COD",
    name: "Axel Tuanzebe",
    fullName: "Axel Tuanzebe",
    number: 4,
    position: "DF",
    club: "Stoke City",
    pictureUrl: "https://digitalhub.fifa.com/transform/c918f48b-6fff-449f-ba1d-a8c84e6a6f00/TUANZEBE-Axel_403063"
  },
  "477829": {
    fifaId: "477829",
    teamCode: "COD",
    name: "Dylan Batubinsika",
    fullName: "Dylan Batubinsika",
    number: 5,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/f5388f1a-825a-4a7d-9668-1f618b0686ea/BATUBINSIKA-Dylan_477829"
  },
  "494458": {
    fifaId: "494458",
    teamCode: "COD",
    name: "Ngalayel Mukau",
    fullName: "Ngalayel Mukau",
    number: 6,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/72bed90f-aa3d-4f6f-8751-74689a06f326/MUKAU-Ngalayel_494458"
  },
  "424119": {
    fifaId: "424119",
    teamCode: "COD",
    name: "Nathanael Mbuku",
    fullName: "Nathanael Mbuku",
    number: 7,
    position: "MF",
    club: "Stade Reims",
    pictureUrl: "https://digitalhub.fifa.com/transform/5977f6d5-d50b-46c4-9e33-d8c4aef7202c/MBUKU-Nathanael_424119"
  },
  "433076": {
    fifaId: "433076",
    teamCode: "COD",
    name: "Samuel Moutoussamy",
    fullName: "Samuel Moutoussamy",
    number: 8,
    position: "MF",
    club: "Nantes",
    pictureUrl: "https://digitalhub.fifa.com/transform/e22f732a-a001-4c41-96c8-138b79ed45b2/MOUTOUSSAMY-Samuel_433076"
  },
  "510989": {
    fifaId: "510989",
    teamCode: "COD",
    name: "Brian Cipenga",
    fullName: "Brian Cipenga",
    number: 9,
    position: "FW",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/ebfc012f-56c2-4279-9eab-02219646f01e/CIPENGA-Brian_510989"
  },
  "441317": {
    fifaId: "441317",
    teamCode: "COD",
    name: "Theo Bongonda",
    fullName: "Theo Bongonda",
    number: 10,
    position: "MF",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/33939502-486c-4dce-a21a-c5c86b0e08f0/BONGONDA-Theo_441317"
  },
  "336439": {
    fifaId: "336439",
    teamCode: "COD",
    name: "Kakuta",
    fullName: "Ga\xEBl Kakuta",
    number: 11,
    position: "FW",
    club: "Amiens",
    pictureUrl: "https://digitalhub.fifa.com/transform/201587e3-e8f9-4201-9ee5-23931fd0f016/KAKUTA-Gael_336439"
  },
  "477833": {
    fifaId: "477833",
    teamCode: "COD",
    name: "Joris Kayembe",
    fullName: "Joris Kayembe",
    number: 12,
    position: "DF",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/1bb4fcb6-fbfd-4f37-a827-eee403ed2a4f/KAYEMBE-Joris_477833"
  },
  "426506": {
    fifaId: "426506",
    teamCode: "COD",
    name: "Meschack Elia",
    fullName: "Meschack Elia",
    number: 13,
    position: "FW",
    club: "Young Boys",
    pictureUrl: "https://digitalhub.fifa.com/transform/8ac2d949-e53e-4f4e-9196-d91ab9bc8f65/ELIA-Meschack_426506"
  },
  "486147": {
    fifaId: "486147",
    teamCode: "COD",
    name: "Noah Sadiki",
    fullName: "Noah Sadiki",
    number: 14,
    position: "MF",
    club: "Anderlecht",
    pictureUrl: "https://digitalhub.fifa.com/transform/3c5307a2-8894-44fc-a2d0-95c4500a6740/SADIKI-Noah_486147"
  },
  "477864": {
    fifaId: "477864",
    teamCode: "COD",
    name: "Aaron Tshibola",
    fullName: "Aaron Tshibola",
    number: 15,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a9cce05-2dd6-4f24-add3-7f4ad4232790/TSHIBOLA-Aaron_477864"
  },
  "486196": {
    fifaId: "486196",
    teamCode: "COD",
    name: "Timothy Fayulu",
    fullName: "Timothy Fayulu",
    number: 16,
    position: "GK",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/deee3a8c-2aea-43fd-80d4-18dfdf1fad94/FAYULU-Timothy_486196"
  },
  "336425": {
    fifaId: "336425",
    teamCode: "COD",
    name: "Bakambu",
    fullName: "C\xE9dric Bakambu",
    number: 17,
    position: "FW",
    club: "Villarreal",
    pictureUrl: "https://digitalhub.fifa.com/transform/25e27fcf-479e-42fe-bd09-63dc8b8fa202/BAKAMBU-Cedric_336425"
  },
  "448128": {
    fifaId: "448128",
    teamCode: "COD",
    name: "Pickel",
    fullName: "Charles Pickel",
    number: 18,
    position: "MF",
    club: "Lausanne-Sport",
    pictureUrl: "https://digitalhub.fifa.com/transform/1a0ecb32-cde2-4987-a0e0-2bf8ee4376c5/PICKEL-Charles_448128"
  },
  "477859": {
    fifaId: "477859",
    teamCode: "COD",
    name: "Fiston Mayele",
    fullName: "Fiston Mayele",
    number: 19,
    position: "FW",
    club: "Panathinaikos",
    pictureUrl: "https://digitalhub.fifa.com/transform/cfecc0dd-e887-4645-b9dc-b9d90296f314/MAYELE-Fiston_477859"
  },
  "441316": {
    fifaId: "441316",
    teamCode: "COD",
    name: "Yoane Wissa",
    fullName: "Yoane Wissa",
    number: 20,
    position: "FW",
    club: "Brentford",
    pictureUrl: "https://digitalhub.fifa.com/transform/df278077-1306-4bc3-99d3-0842d69fdec3/WISSA-Yoane_441316"
  },
  "514171": {
    fifaId: "514171",
    teamCode: "COD",
    name: "Matthieu Epolo",
    fullName: "Matthieu Epolo",
    number: 21,
    position: "GK",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/5b3aa99c-c19f-4087-9230-fcc1023e6baa/EPOLO-Matthieu_514171"
  },
  "356532": {
    fifaId: "356532",
    teamCode: "COD",
    name: "Chancel Mbemba",
    fullName: "Chancel Mbemba",
    number: 22,
    position: "DF",
    club: "Marseille",
    pictureUrl: "https://digitalhub.fifa.com/transform/30bebca0-cc33-4a32-ad33-8a6141647128/MBEMBA-Chancel_356532"
  },
  "477835": {
    fifaId: "477835",
    teamCode: "COD",
    name: "Simon Banza",
    fullName: "Simon Banza",
    number: 23,
    position: "FW",
    club: "Sporting CP",
    pictureUrl: "https://digitalhub.fifa.com/transform/bea02c15-ba1f-4592-a3dd-80b301e94226/BANZA-Simon_477835"
  },
  "477853": {
    fifaId: "477853",
    teamCode: "COD",
    name: "Gedeon Kalulu",
    fullName: "G\xE9d\xE9on Kalulu",
    number: 24,
    position: "DF",
    club: "Lyon",
    pictureUrl: "https://digitalhub.fifa.com/transform/842e89cb-5c6f-4484-bbc2-b9e6d50c2de5/KALULU-Gedeon_477853"
  },
  "433161": {
    fifaId: "433161",
    teamCode: "COD",
    name: "Edo Kayembe",
    fullName: "Edo Kayembe",
    number: 25,
    position: "MF",
    club: "Genk",
    pictureUrl: "https://digitalhub.fifa.com/transform/45763ec1-2979-4fe6-97f9-5e3f90b9c1ee/KAYEMBE-Edo_433161"
  },
  "436572": {
    fifaId: "436572",
    teamCode: "COD",
    name: "Arthur Masuaku",
    fullName: "Arthur Masuaku",
    number: 26,
    position: "DF",
    club: "Nice",
    pictureUrl: "https://digitalhub.fifa.com/transform/7c521f94-2538-45a0-a77e-4a529b9dfc8f/MASUAKU-Arthur_436572"
  },
  "308370": {
    fifaId: "308370",
    teamCode: "BRA",
    name: "Alisson",
    fullName: "Alisson",
    number: 1,
    position: "GK",
    club: "Liverpool",
    pictureUrl: "https://digitalhub.fifa.com/transform/6b051628-d407-41ce-8a60-dc354ac4ccb8/ALISSON_308370"
  },
  "485069": {
    fifaId: "485069",
    teamCode: "BRA",
    name: "Ederson Silva",
    fullName: "Ederson Silva",
    number: 2,
    position: "MF",
    club: "Atalanta",
    pictureUrl: "https://digitalhub.fifa.com/transform/5e5df9e4-86e2-4292-bc7a-8e95b4aa7e47/EDERSON-SILVA_485069"
  },
  "430601": {
    fifaId: "430601",
    teamCode: "BRA",
    name: "G. Magalh\xE3es",
    fullName: "Gabriel Magalhaes",
    number: 3,
    position: "DF",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/b5870a76-5391-40b7-a348-e2b17995637b/GABRIEL-MAGALHAES_430601"
  },
  "332946": {
    fifaId: "332946",
    teamCode: "BRA",
    name: "Marquinhos",
    fullName: "Marquinhos",
    number: 4,
    position: "DF",
    club: "PSG",
    pictureUrl: "https://digitalhub.fifa.com/transform/30069661-f88d-4ff7-9c4e-071a5cf3c093/MARQUINHOS_332946"
  },
  "308386": {
    fifaId: "308386",
    teamCode: "BRA",
    name: "Casemiro",
    fullName: "Casemiro",
    number: 5,
    position: "MF",
    club: "Manchester United",
    pictureUrl: "https://digitalhub.fifa.com/transform/49558d20-3d5d-4afb-bf2a-9dc1ab60a6e6/CASEMIRO_308386"
  },
  "335658": {
    fifaId: "335658",
    teamCode: "BRA",
    name: "Alex Sandro",
    fullName: "Alex Sandro",
    number: 6,
    position: "DF",
    club: "Fluminense",
    pictureUrl: "https://digitalhub.fifa.com/transform/c9b49c28-0494-4261-bb60-c2848b4e1120/ALEX-SANDRO_335658"
  },
  "405742": {
    fifaId: "405742",
    teamCode: "BRA",
    name: "Vinicius Jr",
    fullName: "Vinicius Junior",
    number: 7,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/1c2722c3-a70b-49d8-bdb4-77109161f533/VINICIUS-JUNIOR_405742"
  },
  "430605": {
    fifaId: "430605",
    teamCode: "BRA",
    name: "B. Guimar\xE3es",
    fullName: "Bruno Guimaraes",
    number: 8,
    position: "MF",
    club: "Newcastle",
    pictureUrl: "https://digitalhub.fifa.com/transform/0215cb23-c389-4c5a-9bb0-c7044ae7059a/BRUNO-GUIMARAES_430605"
  },
  "430609": {
    fifaId: "430609",
    teamCode: "BRA",
    name: "Matheus Cunha",
    fullName: "Matheus Cunha",
    number: 9,
    position: "FW",
    club: "Wolverhampton",
    pictureUrl: "https://digitalhub.fifa.com/transform/9189da72-e1b5-4e7b-800d-7eeca119f08c/MATHEUS-CUNHA_430609"
  },
  "433872": {
    fifaId: "433872",
    teamCode: "BRA",
    name: "Raphinha",
    fullName: "Raphinha",
    number: 11,
    position: "FW",
    club: "Barcelona",
    pictureUrl: "https://digitalhub.fifa.com/transform/b4def0b2-7d6f-4f3a-bcde-600b292096d6/RAPHINHA_433872"
  },
  "396315": {
    fifaId: "396315",
    teamCode: "BRA",
    name: "Weverton",
    fullName: "Weverton",
    number: 12,
    position: "GK",
    club: "Palmeiras",
    pictureUrl: "https://digitalhub.fifa.com/transform/c66a5712-81fa-4527-9e5a-8221f11b3274/WEVERTON_396315"
  },
  "335656": {
    fifaId: "335656",
    teamCode: "BRA",
    name: "Danilo",
    fullName: "Danilo",
    number: 13,
    position: "DF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/364f443f-83df-4e8e-803c-765feae146a3/DANILO_335656"
  },
  "431889": {
    fifaId: "431889",
    teamCode: "BRA",
    name: "Bremer",
    fullName: "Bremer",
    number: 14,
    position: "DF",
    club: "Juventus",
    pictureUrl: "https://digitalhub.fifa.com/transform/65ba7159-8278-4610-ac57-2cb9f2bbf11b/BREMER_431889"
  },
  "371956": {
    fifaId: "371956",
    teamCode: "BRA",
    name: "L\xE9o Pereira",
    fullName: "Leo Pereira",
    number: 15,
    position: "DF",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/9f0ecbc1-e1f8-4c5a-a39b-34902fd3cfe7/LEO-PEREIRA_371956"
  },
  "367981": {
    fifaId: "367981",
    teamCode: "BRA",
    name: "Douglas Santos",
    fullName: "Douglas Santos",
    number: 16,
    position: "DF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/7cef9b58-da05-42ba-afe9-aebcd4d40a0e/DOUGLAS-SANTOS_367981"
  },
  "394456": {
    fifaId: "394456",
    teamCode: "BRA",
    name: "Fabinho",
    fullName: "Fabinho",
    number: 17,
    position: "MF",
    club: "Al-Ittihad",
    pictureUrl: "https://digitalhub.fifa.com/transform/f32cd105-d97b-4a7b-8eb0-258271640a72/FABINHO_394456"
  },
  "429392": {
    fifaId: "429392",
    teamCode: "BRA",
    name: "Danilo Santos",
    fullName: "Danilo Santos",
    number: 18,
    position: "MF",
    club: "",
    pictureUrl: "https://digitalhub.fifa.com/transform/e564b92f-7a69-49fe-b259-c5deebf6e451/DANILO-SANTOS_429392"
  },
  "463746": {
    fifaId: "463746",
    teamCode: "BRA",
    name: "Endrick",
    fullName: "Endrick",
    number: 19,
    position: "FW",
    club: "Real Madrid",
    pictureUrl: "https://digitalhub.fifa.com/transform/a3eda53d-b792-4cbf-8924-159d1b6d75af/ENDRICK_463746"
  },
  "411726": {
    fifaId: "411726",
    teamCode: "BRA",
    name: "Paquet\xE1",
    fullName: "Lucas Paqueta",
    number: 20,
    position: "MF",
    club: "West Ham",
    pictureUrl: "https://digitalhub.fifa.com/transform/7d7fce96-8d80-43c3-aa72-c45c44d370c5/LUCAS-PAQUETA_411726"
  },
  "448420": {
    fifaId: "448420",
    teamCode: "BRA",
    name: "L. Henrique",
    fullName: "Luiz Henrique",
    number: 21,
    position: "FW",
    club: "Real Betis",
    pictureUrl: "https://digitalhub.fifa.com/transform/a2b269b6-cc1d-4693-b72a-6359c41597b7/LUIZ-HENRIQUE_448420"
  },
  "430597": {
    fifaId: "430597",
    teamCode: "BRA",
    name: "G. Martinelli",
    fullName: "Gabriel Martinelli",
    number: 22,
    position: "FW",
    club: "Arsenal",
    pictureUrl: "https://digitalhub.fifa.com/transform/4ef5dbd2-50dc-4def-8ae5-5c9f6fee72c2/GABRIEL-MARTINELLI_430597"
  },
  "395427": {
    fifaId: "395427",
    teamCode: "BRA",
    name: "Ederson",
    fullName: "Ederson",
    number: 23,
    position: "GK",
    club: "Manchester City",
    pictureUrl: "https://digitalhub.fifa.com/transform/2a1d5731-391b-4644-a926-1bc899b86c81/EDERSON_395427"
  },
  "430594": {
    fifaId: "430594",
    teamCode: "BRA",
    name: "Roger Iba\xF1ez",
    fullName: "Roger Ibanez",
    number: 24,
    position: "DF",
    club: "Al-Ahli",
    pictureUrl: "https://digitalhub.fifa.com/transform/0b88bb57-5b4b-448f-9af1-44869f36172a/ROGER-IBANEZ_430594"
  },
  "519836": {
    fifaId: "519836",
    teamCode: "BRA",
    name: "Igor Thiago",
    fullName: "Igor Thiago",
    number: 25,
    position: "FW",
    club: "Club Brugge",
    pictureUrl: "https://digitalhub.fifa.com/transform/d547cc13-69d0-4204-91bf-baf63bbb7328/IGOR-THIAGO_519836"
  },
  "475036": {
    fifaId: "475036",
    teamCode: "BRA",
    name: "Rayan",
    fullName: "Rayan",
    number: 26,
    position: "FW",
    club: "Flamengo",
    pictureUrl: "https://digitalhub.fifa.com/transform/c5de4283-2fbb-4691-8de4-39959ad7b755/RAYAN_475036"
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
  return squad.find((p) => p.number === number) ?? squad.find((p) => normalizeText(p.name) === normalizedName) ?? null;
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
      socials: player.socials ?? entry?.socials,
      fullName: player.fullName ?? entry?.fullName,
      dateOfBirth: player.dateOfBirth ?? entry?.dateOfBirth,
      height: player.height ?? entry?.height
    };
  }
  return {
    ...player,
    club: player.club ?? fallbackPlayer.club ?? entry?.club,
    pictureUrl: player.pictureUrl ?? fallbackPlayer.pictureUrl,
    socials: player.socials ?? fallbackPlayer.socials ?? entry?.socials,
    fullName: player.fullName ?? fallbackPlayer.fullName ?? entry?.fullName,
    dateOfBirth: player.dateOfBirth ?? fallbackPlayer.dateOfBirth ?? entry?.dateOfBirth,
    height: player.height ?? fallbackPlayer.height ?? entry?.height
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
    const entry = resolvePlayerEntry(teamCode, player.name, player.number, fifaPlayer.IdPlayer);
    return {
      ...player,
      fifaId: fifaPlayer.IdPlayer,
      number: fifaPlayer.ShirtNumber || player.number,
      pictureUrl: pictureUrl ?? player.pictureUrl,
      socials: player.socials ?? entry?.socials,
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
          pictureUrl: "https://digitalhub.fifa.com/transform/62600270-27f4-432a-8f1f-1014124829c1/ALMIRON-Miguel_369761"
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
          pictureUrl: "https://digitalhub.fifa.com/transform/b95f9142-251c-4943-911c-9c8d7ad8dd1c/WILLIAMS-Ronwen_395986"
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
            instagram: "https://instagram.com/alisson_becker"
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
            instagram: "https://instagram.com/igorgomes97"
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
    status: "PRE_GAME",
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
var WIKIPEDIA_API_BASE = "https://pt.wikipedia.org/api/rest_v1";
var WIKIDATA_API_BASE = "https://www.wikidata.org/w/api.php";
var COUNTRY_INFO_CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
var WIKIPEDIA_USER_AGENT = "agora-na-copa-2026 (https://github.com/mpbarbosa/agora_na_copa_2026)";
var APP_MATCHES_BY_ID = new Map(APP_MATCHES.map((match) => [match.id, match]));
var GOAL_INCIDENT_SUFFIX = " marcou.";
var YELLOW_CARD_INCIDENT_SUFFIX = " recebeu amarelo.";
var RED_CARD_INCIDENT_SUFFIX = " foi expulso.";
app.use(import_express.default.json());
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
      pictureUrl: player.pictureUrl
    });
    return;
  }
  metadataByPlayerKey.set(playerKey, {
    name: current.name || player.name,
    shirtNumber: current.shirtNumber ?? player.number,
    position: current.position ?? player.position,
    club: current.club ?? player.club,
    socials: current.socials ?? player.socials,
    pictureUrl: current.pictureUrl ?? player.pictureUrl
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
        pictureUrl: player.pictureUrl ?? entry?.pictureUrl
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
    res.set("Cache-Control", "no-store");
    res.json({ goals: leader.goals, yellowCards: leader.yellowCards, redCards: leader.redCards });
  } catch (error) {
    console.error("FIFA API Error in /api/player-stats:", error);
    res.status(502).json({ error: error?.message || "Erro ao carregar estat\xEDsticas do jogador" });
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
    updatedAt: now
  };
  countryInfoCache.set(code, {
    expiresAt: Date.now() + COUNTRY_INFO_CACHE_TTL_MS,
    payload
  });
  return payload;
}
app.get("/api/country-info/:code", async (req, res) => {
  try {
    const code = req.params.code.toUpperCase();
    const payload = await fetchCountryInfo(code);
    if (!payload) {
      res.status(404).json({ error: "Pa\xEDs n\xE3o encontrado" });
      return;
    }
    res.set("Cache-Control", "public, max-age=3600");
    res.json(payload);
  } catch (error) {
    console.error("Wikipedia API Error in /api/country-info:", error);
    res.status(502).json({ error: error?.message || "Erro ao carregar informa\xE7\xF5es do pa\xEDs" });
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
