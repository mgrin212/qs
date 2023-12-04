const root = {
  prevDate: "2023-12-02",
  currentDate: "2023-12-03",
  nextDate: "2023-12-04",
  gameWeek: [
    { date: "2023-11-30", dayAbbrev: "THU", numberOfGames: 14 },
    { date: "2023-12-01", dayAbbrev: "FRI", numberOfGames: 2 },
    { date: "2023-12-02", dayAbbrev: "SAT", numberOfGames: 13 },
    { date: "2023-12-03", dayAbbrev: "SUN", numberOfGames: 5 },
    { date: "2023-12-04", dayAbbrev: "MON", numberOfGames: 6 },
    { date: "2023-12-05", dayAbbrev: "TUE", numberOfGames: 8 },
    { date: "2023-12-06", dayAbbrev: "WED", numberOfGames: 4 },
  ],
  oddsPartners: [
    {
      partnerId: 2,
      country: "SE",
      name: "Unibet",
      imageUrl: "https://assets.nhle.com/betting_partner/unibet.svg",
      siteUrl:
        "https://www.unibet.se/betting/sports/filter/ice_hockey/nhl/all/matches",
      bgColor: "#14805E",
      textColor: "#FFFFFF",
      accentColor: "#3AAA35",
    },
    {
      partnerId: 3,
      country: "CZ",
      name: "Tipsport",
      imageUrl: "https://assets.nhle.com/betting_partner/tipsport.svg",
      siteUrl:
        "https://www.tipsport.cz/PartnerRedirectAction.do?pid=16961&sid=20360&bid=34954&tid=11268",
      bgColor: "#2497F2",
      textColor: "#FFFFFF",
      accentColor: "#FFFFFF",
    },
    {
      partnerId: 3,
      country: "SK",
      name: "Tipsport",
      imageUrl: "https://assets.nhle.com/betting_partner/tipsport.svg",
      siteUrl:
        "https://www.tipsport.sk/PartnerRedirectAction.do?pid=6823&sid=9018&bid=23079&tid=8475",
      bgColor: "#2497F2",
      textColor: "#FFFFFF",
      accentColor: "#FFFFFF",
    },
    {
      partnerId: 5,
      country: "RU",
      name: "Liga Stavok",
      imageUrl: "https://assets.nhle.com/betting_partner/ligastavok.svg",
      bgColor: "#007354",
      textColor: "#FFFFFF",
      accentColor: "#FFEB00",
    },
    {
      partnerId: 6,
      country: "FI",
      name: "Veikkaus",
      imageUrl: "https://assets.nhle.com/betting_partner/veikkaus.svg",
      siteUrl: "https://www.veikkaus.fi/fi/vedonlyonti/pitkaveto?t=3-2-1_NHL",
      bgColor: "#0025F5",
      textColor: "#FFFFFF",
      accentColor: "#FFFFFF",
    },
    {
      partnerId: 8,
      country: "CA",
      name: "Sportradar",
      imageUrl: "https://assets.nhle.com/betting_partner/sportsradar.svg",
      siteUrl: "https://sportradar.com",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      accentColor: "#E6E6E6",
    },
    {
      partnerId: 8,
      country: "DE",
      name: "Sportradar",
      imageUrl: "https://assets.nhle.com/betting_partner/sportsradar.svg",
      siteUrl: "https://sportradar.com",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      accentColor: "#E6E6E6",
    },
    {
      partnerId: 9,
      country: "US",
      name: "DraftKings",
      imageUrl: "https://assets.nhle.com/betting_partner/draftkings.svg",
      siteUrl:
        "https://dksb.sng.link/As9kz/720m?_dl=https%3A%2F%2Fsportsbook.draftkings.com%2Fgateway%3Fs%3D158542143%26wpcid%3D331060%26wpsrc%3D1320%26wpcn%3DNHLSportsbook%26wpscn%3DOddsByDK%26wpcrn%3DStatic%26wpscid%3DEvergreen%26wpcrid%3Dxx&psn=NHL&pcid=331060&pcrn=Evergreen&pscn=OddsByDK",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      accentColor: "#FFFFFF",
    },
  ],
  games: [
    {
      id: 2023020369,
      season: 20232024,
      gameType: 2,
      gameDate: "2023-12-03",
      venue: { default: "Xcel Energy Center" },
      startTimeUTC: "2023-12-03T19:00:00Z",
      easternUTCOffset: "-05:00",
      venueUTCOffset: "-06:00",
      tvBroadcasts: [
        { id: 281, market: "N", countryCode: "CA", network: "TVAS" },
        { id: 282, market: "N", countryCode: "CA", network: "SN" },
        { id: 318, market: "A", countryCode: "US", network: "NBCSCH" },
        { id: 324, market: "N", countryCode: "US", network: "NHLN" },
        { id: 361, market: "H", countryCode: "US", network: "BSN" },
        { id: 363, market: "H", countryCode: "US", network: "BSWI" },
      ],
      gameState: "CRIT",
      gameScheduleState: "OK",
      awayTeam: {
        id: 16,
        name: { default: "Blackhawks", es: "Black\thawks" },
        abbrev: "CHI",
        score: 1,
        sog: 28,
        logo: "https://assets.nhle.com/logos/nhl/svg/CHI_light.svg",
      },
      homeTeam: {
        id: 30,
        name: { default: "Wild" },
        abbrev: "MIN",
        score: 4,
        sog: 34,
        logo: "https://assets.nhle.com/logos/nhl/svg/MIN_light.svg",
      },
      gameCenterLink: "/gamecenter/chi-vs-min/2023/12/03/2023020369",
      clock: {
        timeRemaining: "00:04",
        secondsRemaining: 4,
        running: true,
        inIntermission: false,
      },
      neutralSite: false,
      venueTimezone: "US/Central",
      period: 3,
      periodDescriptor: { number: 3, periodType: "REG" },
      goals: [
        {
          period: 1,
          periodDescriptor: { number: 1, periodType: "REG" },
          timeInPeriod: "02:11",
          playerId: 8482079,
          name: { default: "M. Rossi" },
          mugshot: "https://assets.nhle.com/mugs/nhl/20232024/MIN/8482079.png",
          teamAbbrev: "MIN",
          goalsToDate: 7,
          awayScore: 0,
          homeScore: 1,
          strength: "EV",
          highlightClip: 6342300599112,
          highlightClipFr: 6342299637112,
        },
        {
          period: 1,
          periodDescriptor: { number: 1, periodType: "REG" },
          timeInPeriod: "12:08",
          playerId: 8482079,
          name: { default: "M. Rossi" },
          mugshot: "https://assets.nhle.com/mugs/nhl/20232024/MIN/8482079.png",
          teamAbbrev: "MIN",
          goalsToDate: 8,
          awayScore: 0,
          homeScore: 2,
          strength: "PP",
          highlightClip: 6342302177112,
          highlightClipFr: 6342301791112,
        },
        {
          period: 1,
          periodDescriptor: { number: 1, periodType: "REG" },
          timeInPeriod: "17:07",
          playerId: 8475692,
          name: { default: "M. Zuccarello" },
          mugshot: "https://assets.nhle.com/mugs/nhl/20232024/MIN/8475692.png",
          teamAbbrev: "MIN",
          goalsToDate: 6,
          awayScore: 0,
          homeScore: 3,
          strength: "EV",
          highlightClip: 6342301519112,
          highlightClipFr: 6342300144112,
        },
        {
          period: 2,
          periodDescriptor: { number: 2, periodType: "REG" },
          timeInPeriod: "11:36",
          playerId: 8481557,
          name: { default: "M. Boldy" },
          mugshot: "https://assets.nhle.com/mugs/nhl/20232024/MIN/8481557.png",
          teamAbbrev: "MIN",
          goalsToDate: 3,
          awayScore: 0,
          homeScore: 4,
          strength: "PP",
          highlightClip: 6342303102112,
          highlightClipFr: 6342301944112,
        },
        {
          period: 3,
          periodDescriptor: { number: 3, periodType: "REG" },
          timeInPeriod: "12:55",
          playerId: 8479390,
          name: { default: "T. Raddysh" },
          mugshot: "https://assets.nhle.com/mugs/nhl/20232024/CHI/8479390.png",
          teamAbbrev: "CHI",
          goalsToDate: 4,
          awayScore: 1,
          homeScore: 4,
          strength: "PP",
          highlightClip: 6342304814112,
        },
      ],
    },
    {
      id: 2023020370,
      season: 20232024,
      gameType: 2,
      gameDate: "2023-12-03",
      venue: { default: "Madison Square Garden" },
      startTimeUTC: "2023-12-03T23:00:00Z",
      easternUTCOffset: "-05:00",
      venueUTCOffset: "-05:00",
      tvBroadcasts: [
        { id: 27, market: "H", countryCode: "US", network: "MSG" },
        { id: 281, market: "N", countryCode: "CA", network: "TVAS" },
        { id: 314, market: "A", countryCode: "US", network: "NBCSCA" },
        { id: 324, market: "N", countryCode: "US", network: "NHLN" },
      ],
      gameState: "FUT",
      gameScheduleState: "OK",
      awayTeam: {
        id: 28,
        name: { default: "Sharks" },
        abbrev: "SJS",
        record: "6-16-2",
        logo: "https://assets.nhle.com/logos/nhl/svg/SJS_light.svg",
        odds: [
          { providerId: 3, value: "5.0300" },
          { providerId: 2, value: "525.0000" },
          { providerId: 6, value: "6.4000" },
          { providerId: 9, value: "320.0000" },
          { providerId: 8, value: "316.0000" },
        ],
      },
      homeTeam: {
        id: 3,
        name: { default: "Rangers" },
        abbrev: "NYR",
        record: "17-4-1",
        logo: "https://assets.nhle.com/logos/nhl/svg/NYR_light.svg",
        odds: [
          { providerId: 3, value: "5.0300" },
          { providerId: 2, value: "-235.0000" },
          { providerId: 6, value: "1.3500" },
          { providerId: 9, value: "-410.0000" },
          { providerId: 8, value: "-417.0000" },
        ],
      },
      gameCenterLink: "/gamecenter/sjs-vs-nyr/2023/12/03/2023020370",
      neutralSite: false,
      venueTimezone: "America/New_York",
      ticketsLink:
        "https://www.ticketmaster.com/event/3B005EE596A70E29?brand=nhl&wt.mc_id=NHL_LEAGUE_NYR_SCORE_TAB_APP_GM10&utm_source=nhl.com&utm_medium=client&utm_campaign=NHL_LEAGUE_NYR&utm_content=SCORE_TAB_APP_GM10&CAMEFROM=CFC_RANGERS_APP_NHL_SCORES_230807",
      teamLeaders: [
        {
          id: 8475184,
          name: { default: "C. Kreider" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/NYR/8475184.png",
          teamAbbrev: "NYR",
          category: "goals",
          value: 14,
        },
        {
          id: 8480188,
          name: { default: "F. Zetterlund" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/SJS/8480188.png",
          teamAbbrev: "SJS",
          category: "goals",
          value: 6,
        },
        {
          id: 8478550,
          name: { default: "A. Panarin" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/NYR/8478550.png",
          teamAbbrev: "NYR",
          category: "assists",
          value: 19,
        },
        {
          id: 8476881,
          name: { default: "T. Hertl" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/SJS/8476881.png",
          teamAbbrev: "SJS",
          category: "assists",
          value: 13,
        },
        {
          id: 8478048,
          name: {
            default: "I. Shesterkin",
            cs: "I. Šesťorkin",
            sk: "I. Šesťorkin",
          },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/NYR/8478048.png",
          teamAbbrev: "NYR",
          category: "wins",
          value: 10,
        },
        {
          id: 8478406,
          name: { default: "M. Blackwood" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/SJS/8478406.png",
          teamAbbrev: "SJS",
          category: "wins",
          value: 3,
        },
      ],
    },
    {
      id: 2023020371,
      season: 20232024,
      gameType: 2,
      gameDate: "2023-12-03",
      venue: { default: "TD Garden" },
      startTimeUTC: "2023-12-04T00:00:00Z",
      easternUTCOffset: "-05:00",
      venueUTCOffset: "-05:00",
      tvBroadcasts: [
        { id: 31, market: "H", countryCode: "US", network: "NESN" },
        { id: 282, market: "N", countryCode: "CA", network: "SN" },
        { id: 347, market: "A", countryCode: "US", network: "BSOH" },
      ],
      gameState: "FUT",
      gameScheduleState: "OK",
      awayTeam: {
        id: 29,
        name: { default: "Blue Jackets" },
        abbrev: "CBJ",
        record: "8-13-4",
        logo: "https://assets.nhle.com/logos/nhl/svg/CBJ_light.svg",
        odds: [
          { providerId: 3, value: "4.4500" },
          { providerId: 2, value: "340.0000" },
          { providerId: 9, value: "215.0000" },
          { providerId: 8, value: "214.0000" },
        ],
      },
      homeTeam: {
        id: 6,
        name: { default: "Bruins" },
        abbrev: "BOS",
        record: "16-4-3",
        logo: "https://assets.nhle.com/logos/nhl/svg/BOS_light.svg",
        odds: [
          { providerId: 3, value: "4.4500" },
          { providerId: 2, value: "-152.0000" },
          { providerId: 9, value: "-265.0000" },
          { providerId: 8, value: "-270.0000" },
        ],
      },
      gameCenterLink: "/gamecenter/cbj-vs-bos/2023/12/03/2023020371",
      neutralSite: false,
      venueTimezone: "US/Eastern",
      ticketsLink:
        "https://www.ticketmaster.com/event/01005ED7EF3C749B?brand=nhl&wt.mc_id=NHL_LEAGUE_BOS_SCORE_TAB_APP_GM11&utm_source=nhl.com&utm_medium=client&utm_campaign=NHL_LEAGUE_BOS&utm_content=SCORE_TAB_APP_GM11",
      teamLeaders: [
        {
          id: 8477956,
          name: {
            default: "D. Pastrnak",
            cs: "D. Pastrňák",
            sk: "D. Pastrňák",
          },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/BOS/8477956.png",
          teamAbbrev: "BOS",
          category: "goals",
          value: 14,
        },
        {
          id: 8476432,
          name: { default: "B. Jenner" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/CBJ/8476432.png",
          teamAbbrev: "CBJ",
          category: "goals",
          value: 12,
        },
        {
          id: 8477956,
          name: {
            default: "D. Pastrnak",
            cs: "D. Pastrňák",
            sk: "D. Pastrňák",
          },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/BOS/8477956.png",
          teamAbbrev: "BOS",
          category: "assists",
          value: 22,
        },
        {
          id: 8478460,
          name: { default: "Z. Werenski" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/CBJ/8478460.png",
          teamAbbrev: "CBJ",
          category: "assists",
          value: 17,
        },
        {
          id: 8480280,
          name: { default: "J. Swayman" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/BOS/8480280.png",
          teamAbbrev: "BOS",
          category: "wins",
          value: 8,
        },
        {
          id: 8478007,
          name: { default: "E. Merzlikins" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/CBJ/8478007.png",
          teamAbbrev: "CBJ",
          category: "wins",
          value: 6,
        },
      ],
    },
    {
      id: 2023020372,
      season: 20232024,
      gameType: 2,
      gameDate: "2023-12-03",
      venue: { default: "KeyBank Center" },
      startTimeUTC: "2023-12-04T00:00:00Z",
      easternUTCOffset: "-05:00",
      venueUTCOffset: "-05:00",
      tvBroadcasts: [
        { id: 28, market: "H", countryCode: "US", network: "MSG-B" },
        { id: 375, market: "A", countryCode: "US", network: "BSSO" },
      ],
      gameState: "FUT",
      gameScheduleState: "OK",
      awayTeam: {
        id: 18,
        name: { default: "Predators" },
        abbrev: "NSH",
        record: "11-12-0",
        logo: "https://assets.nhle.com/logos/nhl/svg/NSH_light.svg",
        odds: [
          { providerId: 3, value: "4.0800" },
          { providerId: 2, value: "150.0000" },
          { providerId: 9, value: "-110.0000" },
          { providerId: 8, value: "-111.0000" },
        ],
      },
      homeTeam: {
        id: 7,
        name: { default: "Sabres" },
        abbrev: "BUF",
        record: "10-12-2",
        logo: "https://assets.nhle.com/logos/nhl/svg/BUF_light.svg",
        odds: [
          { providerId: 3, value: "4.0800" },
          { providerId: 2, value: "145.0000" },
          { providerId: 9, value: "-110.0000" },
          { providerId: 8, value: "-110.0000" },
        ],
      },
      gameCenterLink: "/gamecenter/nsh-vs-buf/2023/12/03/2023020372",
      neutralSite: false,
      venueTimezone: "America/New_York",
      ticketsLink:
        "https://www.ticketmaster.com/event/00005EDACB065984?brand=nhl&wt.mc_id=NHL_LEAGUE_BUF_SCORE_TAB_APP_GM11&utm_source=nhl.com&utm_medium=client&utm_campaign=NHL_LEAGUE_BUF&utm_content=SCORE_TAB_APP_GM11",
      teamLeaders: [
        {
          id: 8476887,
          name: { default: "F. Forsberg" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/NSH/8476887.png",
          teamAbbrev: "NSH",
          category: "goals",
          value: 12,
        },
        {
          id: 8475784,
          name: { default: "J. Skinner" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/BUF/8475784.png",
          teamAbbrev: "BUF",
          category: "goals",
          value: 10,
        },
        {
          id: 8479999,
          name: { default: "C. Mittelstadt" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/BUF/8479999.png",
          teamAbbrev: "BUF",
          category: "assists",
          value: 16,
        },
        {
          id: 8476887,
          name: { default: "F. Forsberg" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/NSH/8476887.png",
          teamAbbrev: "NSH",
          category: "assists",
          value: 15,
        },
        {
          id: 8477424,
          name: { default: "J. Saros" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/NSH/8477424.png",
          teamAbbrev: "NSH",
          category: "wins",
          value: 8,
        },
        {
          id: 8480045,
          name: { default: "U. Luukkonen" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/BUF/8480045.png",
          teamAbbrev: "BUF",
          category: "wins",
          value: 6,
        },
      ],
    },
    {
      id: 2023020373,
      season: 20232024,
      gameType: 2,
      gameDate: "2023-12-03",
      venue: { default: "Crypto.com Arena" },
      startTimeUTC: "2023-12-04T01:00:00Z",
      easternUTCOffset: "-05:00",
      venueUTCOffset: "-08:00",
      tvBroadcasts: [
        { id: 2, market: "A", countryCode: "US", network: "ALT" },
        { id: 284, market: "N", countryCode: "CA", network: "SN1" },
        { id: 355, market: "H", countryCode: "US", network: "BSW" },
      ],
      gameState: "FUT",
      gameScheduleState: "OK",
      awayTeam: {
        id: 21,
        name: { default: "Avalanche" },
        abbrev: "COL",
        record: "15-6-2",
        logo: "https://assets.nhle.com/logos/nhl/svg/COL_light.svg",
        odds: [
          { providerId: 3, value: "4.0300" },
          { providerId: 2, value: "180.0000" },
          { providerId: 9, value: "114.0000" },
          { providerId: 8, value: "113.0000" },
        ],
      },
      homeTeam: {
        id: 26,
        name: { default: "Kings" },
        abbrev: "LAK",
        record: "13-4-3",
        logo: "https://assets.nhle.com/logos/nhl/svg/LAK_light.svg",
        odds: [
          { providerId: 3, value: "4.0300" },
          { providerId: 2, value: "123.0000" },
          { providerId: 9, value: "-135.0000" },
          { providerId: 8, value: "-136.0000" },
        ],
      },
      gameCenterLink: "/gamecenter/col-vs-lak/2023/12/03/2023020373",
      neutralSite: false,
      venueTimezone: "America/Los_Angeles",
      ticketsLink: "https://www.nhl.com/kings/tickets/",
      teamLeaders: [
        {
          id: 8478420,
          name: { default: "M. Rantanen" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/COL/8478420.png",
          teamAbbrev: "COL",
          category: "goals",
          value: 12,
        },
        {
          id: 8479675,
          name: { default: "T. Moore" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/LAK/8479675.png",
          teamAbbrev: "LAK",
          category: "goals",
          value: 11,
        },
        {
          id: 8480069,
          name: { default: "C. Makar" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/COL/8480069.png",
          teamAbbrev: "COL",
          category: "assists",
          value: 27,
        },
        {
          id: 8477942,
          name: { default: "K. Fiala" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/LAK/8477942.png",
          teamAbbrev: "LAK",
          category: "assists",
          value: 14,
        },
        {
          id: 8480382,
          name: {
            default: "A. Georgiev",
            cs: "A. Georgijev",
            fi: "A. Georgijev",
            sk: "A. Georgijev",
          },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/COL/8480382.png",
          teamAbbrev: "COL",
          category: "wins",
          value: 13,
        },
        {
          id: 8475660,
          name: { default: "C. Talbot" },
          headshot: "https://assets.nhle.com/mugs/nhl/20232024/LAK/8475660.png",
          teamAbbrev: "LAK",
          category: "wins",
          value: 10,
        },
      ],
    },
  ],
};

export type RootType = typeof root;

export type GoalList = (typeof root.games)[0]["goals"];

type ListElement<T> = T extends (infer U)[] ? U : never;

export type GoalType = ListElement<GoalList>;
