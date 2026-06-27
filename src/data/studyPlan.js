// AFCAT 2 2026 — 40-Day Plan (full InsightsSSB 50-day blueprint compressed into 40 days)
// Day 1 = June 29, 2026. Day 40 = Aug 7. Exam Aug 8, 2026.
// Each video topic = 30 min, each assignment = 60 min. No topic dropped — 50 days merged into 40.

export const START_DATE = '2026-06-29';
export const EXAM_DATE = '2026-08-08';

// subject tags
export const SUBJECTS = {
  math:      { label: 'Maths',     color: 'yellow',  emoji: '🔢' },
  gk:        { label: 'GK',        color: 'green',   emoji: '🌍' },
  reasoning: { label: 'Reasoning', color: 'purple',  emoji: '🧠' },
  revision:  { label: 'Revision',  color: 'red',     emoji: '📝' },
  english:   { label: 'English',   color: 'blue',    emoji: '📘' },
};

// hasAssignmentFile = true means there's an actual file in Telegram (1 hr task)
// Each task entry: { text, mins } — mins = estimated time in minutes
export const STUDY_PLAN = [
  {
    day: 1, date: '2026-06-29',
    title: "Number System",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Number System Part 1 — Divisibility Rules, Unit Digit", mins: 30 },
      { text: "📹 Maths: Number System Part 2 — Remainder Theorem, Number Series, Misc", mins: 30 },
      { text: "📹 GK: Stone Age And Indus Valley", mins: 30 },
      { text: "📋 Number System Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 2, date: '2026-06-30',
    title: "Simplification",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Simplification Part 1 — Fractions, Decimals", mins: 30 },
      { text: "📹 Maths: Simplification Part 2 — Indices & Surds, Roots", mins: 30 },
      { text: "📹 GK: Vedic And Post Vedic Era", mins: 30 }
    ],
  },
  {
    day: 3, date: '2026-07-01',
    title: "Simplification",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Simplification Part 3 — LCM & HCF", mins: 30 },
      { text: "📹 Maths: Simplification Part 4 — Algebra", mins: 30 },
      { text: "📹 Maths: Percentage Part 1 — Theory", mins: 30 },
      { text: "📹 Maths: Percentage Part 2 — Basic Questions", mins: 30 },
      { text: "📹 GK: Basics Of Mahajanapadas", mins: 30 },
      { text: "📋 Simplification Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 4, date: '2026-07-02',
    title: "Percentage + Percentage",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Percentage Part 3 — Successive %, Increase/Decrease", mins: 30 },
      { text: "📹 Maths: Percentage Part 4 — Exam Related, Population", mins: 30 },
      { text: "📹 GK: Mauryan Empire", mins: 30 },
      { text: "📹 Maths: Percentage Part 5 — Price Consumption, % Change Area/Volume", mins: 30 },
      { text: "📹 Maths: Percentage Part 6 — Elections, Venn, Commission", mins: 30 },
      { text: "📋 Percentage Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 5, date: '2026-07-03',
    title: "Ratio & Proportion + Ratio & Proportion",
    subjects: ["math"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Ratio & Proportion Part 1 — Theory", mins: 30 },
      { text: "📹 Maths: Ratio & Proportion Part 2 — Basic", mins: 30 },
      { text: "📹 Maths: Ratio & Proportion Part 3 — A:B:C, Direct/Indirect", mins: 30 },
      { text: "📹 Maths: Ratio & Proportion Part 4 — Coins, Income", mins: 30 },
      { text: "📹 Maths: Ratio & Proportion Part 5 — Add/Remove Elements", mins: 30 },
      { text: "📋 Ratio & Proportion Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 6, date: '2026-07-04',
    title: "Average + Average",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Average Part 1 — Theory", mins: 30 },
      { text: "📹 Maths: Average Part 2 — Basic, Consecutive, Add/Replace", mins: 30 },
      { text: "📹 GK: Buddhism And Jainism, Important Dynasties", mins: 30 },
      { text: "📹 Maths: Average Part 3 — Weighted Average, Marks, Age", mins: 30 },
      { text: "📹 Maths: Average Part 4 — Middle Subject Overlaps", mins: 30 },
      { text: "📹 GK: Delhi Sultanate", mins: 30 }
    ],
  },
  {
    day: 7, date: '2026-07-05',
    title: "Average",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Average Part 5 — Wrong Written Marks, Misc", mins: 30 },
      { text: "📹 Maths: Profit & Loss Part 1 — Theory", mins: 30 },
      { text: "📹 GK: Mughals, Travellers, Bhaktism And Sufism", mins: 30 },
      { text: "📋 Average Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 8, date: '2026-07-06',
    title: "Profit & Loss + Profit & Loss",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Profit & Loss Part 2 — Successive Change, SP/CP", mins: 30 },
      { text: "📹 Maths: Profit & Loss Part 3 — Marked Price, Dishonest Shopkeeper", mins: 30 },
      { text: "📹 GK: Vijaynagar And Bahmani, Father Of Various Fields", mins: 30 },
      { text: "📹 Maths: Profit & Loss Part 4 — Articles Combined, CP/SP", mins: 30 },
      { text: "📹 Maths: Profit & Loss Part 5 — Discount, Compound Case", mins: 30 },
      { text: "📹 GK: Charter Acts, Land Revenue, Congress Session", mins: 30 }
    ],
  },
  {
    day: 9, date: '2026-07-07',
    title: "Profit & Loss",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Profit & Loss Part 6 — Mixed Problems", mins: 30 },
      { text: "📹 GK: Battles And Treaties, Invention And Discoveries", mins: 30 },
      { text: "📋 Profit & Loss Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 10, date: '2026-07-08',
    title: "Simple Interest",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Simple Interest Part 1 — Theory, Basic", mins: 30 },
      { text: "📹 Maths: Simple Interest Part 2 — N Times, Different Times", mins: 30 },
      { text: "📹 GK: Governor Generals And Viceroys, Books & Authors", mins: 30 },
      { text: "📹 GK: History Video Part 1", mins: 30 },
      { text: "📋 Simple Interest Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 11, date: '2026-07-09',
    title: "Compound Interest + Mixed Interest Problems",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Compound Interest Part 1 — Theory, Basic", mins: 30 },
      { text: "📹 Maths: Compound Interest Part 2 — N Times, Misc", mins: 30 },
      { text: "📹 GK: Important Commissions, Political Organisations & Societies", mins: 30 },
      { text: "📹 Maths: Mixed Interest Problems — SI-CI Difference, Mixed", mins: 30 },
      { text: "📹 GK: Marathas, Revolt Of 1857, Revolutionary Freedom Struggle", mins: 30 },
      { text: "📋 Compound Interest Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 12, date: '2026-07-10',
    title: "Partnership",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Partnership — Share, Profit, Invested Time, Misc", mins: 30 },
      { text: "📹 GK: Newspaper In Modern India, Socio-Reform, United Nations", mins: 30 },
      { text: "📋 Partnership Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 13, date: '2026-07-11',
    title: "🔁 Revise Full History (Ancient → Modern) + Mixture & Allegation",
    subjects: ["revision","gk","math"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📝 Revise Full History (Ancient → Modern)", mins: 60 },
      { text: "📹 GK: History Video Part 2", mins: 30 },
      { text: "📹 Maths: Mixture & Allegation Part 1 — Basic, Acid-Water, Alloys", mins: 30 },
      { text: "📹 GK: Alloys, Common Names, First Cabinet, Party & Founders", mins: 30 }
    ],
  },
  {
    day: 14, date: '2026-07-12',
    title: "Mixture & Allegation",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Mixture & Allegation Part 2 — Quantity Out/Added, Replacement", mins: 30 },
      { text: "📹 GK: SI Units, Logies, Vitamins, Minerals, Disease", mins: 30 },
      { text: "📋 Mixture & Allegation Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 15, date: '2026-07-13',
    title: "Time & Work",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Time & Work Part 1 — Theory, MDH, Remaining Work", mins: 30 },
      { text: "📹 Maths: Time & Work Part 2 — Efficiency, Wages, Alternate Days", mins: 30 },
      { text: "📹 GK: Polity Intro, Fundamental Rights, DPSP, Duties", mins: 30 }
    ],
  },
  {
    day: 16, date: '2026-07-14',
    title: "Time & Work",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Time & Work Part 3 — Pipes & Cisterns, Misc", mins: 30 },
      { text: "📹 GK: Union Executive — President, Amendment, PM & Cabinet", mins: 30 },
      { text: "📹 GK: 50 Most Expected Questions Video", mins: 30 },
      { text: "📋 Time & Work Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 17, date: '2026-07-15',
    title: "TSD + TSD",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: TSD Part 1 — Theory", mins: 30 },
      { text: "📹 Maths: TSD Part 2 — Avg Speed, Relative Speed", mins: 30 },
      { text: "📹 GK: Vice President, Union Legislature, State Government", mins: 30 },
      { text: "📹 Maths: TSD Part 3 — Late/Early, Constant Distance/Time", mins: 30 },
      { text: "📹 Maths: TSD Part 4 — Stoppage, Thief & Police", mins: 30 },
      { text: "📹 GK: Supreme Court, High Court, Constitutional Bodies", mins: 30 }
    ],
  },
  {
    day: 18, date: '2026-07-16',
    title: "🔁 Revise Science + Polity + TSD",
    subjects: ["revision","math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📝 Revise Science + Polity", mins: 60 },
      { text: "📹 Maths: TSD Part 5 — Trains: Crossing Man/Platform/Train", mins: 30 },
      { text: "📹 GK: Indices, Curves, Important Economic Terms", mins: 30 }
    ],
  },
  {
    day: 19, date: '2026-07-17',
    title: "TSD",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: TSD Part 6 — Boats, Stream, Upstream/Downstream", mins: 30 },
      { text: "📹 GK: Environment Chronology", mins: 30 },
      { text: "📋 Time Speed & Distance Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 20, date: '2026-07-18',
    title: "Clock",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Clock Part 1 — Theory, Fundamental", mins: 30 },
      { text: "📹 Maths: Clock Part 2 — Angle, Hands Coincidence, Misc", mins: 30 },
      { text: "📹 GK: India Location, Himalayan Mountains, Northern Plains", mins: 30 },
      { text: "📋 Clock Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 21, date: '2026-07-19',
    title: "Ages",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Ages Part 1 — Present Age, 1 Variable", mins: 30 },
      { text: "📹 Maths: Ages Part 2 — Comparison, Future/Past, Avg Age", mins: 30 },
      { text: "📹 GK: Peninsular Hills, Coastal Plains, Islands", mins: 30 },
      { text: "📋 Ages Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 22, date: '2026-07-20',
    title: "Mensuration",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Mensuration Part 1 — 2D: Triangle, Circle, Polygons", mins: 30 },
      { text: "📹 Maths: Mensuration Part 2 — 3D: Cube, Cone, Sphere", mins: 30 },
      { text: "📹 GK: Rivers In India", mins: 30 }
    ],
  },
  {
    day: 23, date: '2026-07-21',
    title: "Mensuration",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Mensuration Part 3 — Shaded Region, Melting/Bend", mins: 30 },
      { text: "📹 Maths: Mensuration Part 4 — Area/Volume % Changes", mins: 30 },
      { text: "📹 GK: Soils, Latitudes, Earth Atmosphere", mins: 30 },
      { text: "📋 Mensuration Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 24, date: '2026-07-22',
    title: "🔁 Revise Polity, Economy, Environment, Geography",
    subjects: ["revision"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📝 Revise Polity, Economy, Environment, Geography", mins: 60 }
    ],
  },
  {
    day: 25, date: '2026-07-23',
    title: "Probability",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Probability Part 1 — Coins, Dices, Cards", mins: 30 },
      { text: "📹 Maths: Probability Part 2 — Bag Of Balls, Conditions", mins: 30 },
      { text: "📹 GK: Countries & Currencies, Famous Days & Dates", mins: 30 },
      { text: "📋 Probability Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 26, date: '2026-07-24',
    title: "Statistics",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Statistics Part 1 — Theory, Mean", mins: 30 },
      { text: "📹 Maths: Statistics Part 2 — Median, Mode", mins: 30 },
      { text: "📹 Maths: Statistics Part 3 — Dispersion, Misc", mins: 30 },
      { text: "📹 GK: Nicknames, Revolutions, Fathers", mins: 30 },
      { text: "📋 Statistics Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 27, date: '2026-07-25',
    title: "Height & Distance",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Height & Distance Part 1 — Trigo Ratios", mins: 30 },
      { text: "📹 Maths: Height & Distance Part 2 — Elevation, Depression", mins: 30 },
      { text: "📹 Maths: Height & Distance Part 3 — Shadow, Misc", mins: 30 },
      { text: "📹 GK: Headquarters, Sports", mins: 30 },
      { text: "📋 Height & Distance Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 28, date: '2026-07-26',
    title: "Analogy",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Analogy Part 1 — Words, Numerical/Alphabets", mins: 30 },
      { text: "📹 Reasoning: Analogy Part 2 — Advanced, Figure Analogy", mins: 30 },
      { text: "📹 GK: Revise Sports + Geography", mins: 30 },
      { text: "📹 GK: Sports Video", mins: 30 },
      { text: "📋 Analogy Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 29, date: '2026-07-27',
    title: "Non-Verbal",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Reasoning: Non-Verbal Part 1 — Embedded Figure, Odd One Out", mins: 30 },
      { text: "📹 Reasoning: Non-Verbal Part 2 — Missing Figure, Paper Folding", mins: 30 },
      { text: "📹 GK: Awards, First Cabinet, Party & Founders", mins: 30 }
    ],
  },
  {
    day: 30, date: '2026-07-28',
    title: "Non-Verbal",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Non-Verbal Part 3 — Dot Figure, Counting Figures", mins: 30 },
      { text: "📹 Reasoning: Non-Verbal Part 4 — Mirror/Water Image, Mixed", mins: 30 },
      { text: "📹 GK: Indian Festivals, Paintings, Dances", mins: 30 },
      { text: "📋 Figure / Non-Verbal Reasoning Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 31, date: '2026-07-29',
    title: "Mirror And Water Image",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Mirror And Water Image — Words, Numbers, Figures", mins: 30 },
      { text: "📹 GK: Research Institutes, Musical Instruments & Persons", mins: 30 },
      { text: "📋 Mirror & Water Images Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 32, date: '2026-07-30',
    title: "Series",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Series Part 1 — Number, Alternate, Alphabet", mins: 30 },
      { text: "📹 Reasoning: Series Part 2 — Mixed, Dictionary, Wrong/Missing", mins: 30 },
      { text: "📹 GK: Folk Music, Motto Of Forces", mins: 30 },
      { text: "📹 GK: Complete Defence, Static + Current Affairs Video", mins: 30 },
      { text: "📋 Series Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 33, date: '2026-07-31',
    title: "Blood Relation",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Blood Relation — Family Tree, Generations, Coded", mins: 30 },
      { text: "📹 GK: Cities & Towns Nicknames, Minerals", mins: 30 },
      { text: "📋 Blood Relation Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 34, date: '2026-08-01',
    title: "Direction",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Direction — Distance, Angle, Shadow, Shortest Path", mins: 30 },
      { text: "📹 GK: Defence Topics + Sports", mins: 30 },
      { text: "📋 Direction Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 35, date: '2026-08-02',
    title: "Coding Decoding",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Coding Decoding Part 1 — Letter, Number, Mixed", mins: 30 },
      { text: "📹 Reasoning: Coding Decoding Part 2 — Statement, Message", mins: 30 },
      { text: "📋 Coding Decoding Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 36, date: '2026-08-03',
    title: "Ranking/Order",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Ranking/Order Part 1 — Position, Both-Side Rank", mins: 30 },
      { text: "📹 Reasoning: Ranking/Order Part 2 — Comparison, Ordering", mins: 30 },
      { text: "📹 GK: Awards Video", mins: 30 },
      { text: "📋 Ranking / Order Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 37, date: '2026-08-04',
    title: "Dice And Cube + Venn Diagram",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Dice And Cube — Faces, Open Dice Folding", mins: 30 },
      { text: "📋 Dice & Cube Assignment (Telegram file)", mins: 60 },
      { text: "📹 Reasoning: Venn Diagram — Intersection, Categorical, Numerical", mins: 30 },
      { text: "📋 Venn Diagram Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 38, date: '2026-08-05',
    title: "Syllogism",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Syllogism Part 1 — Theory, A/E/I/O Statements", mins: 30 },
      { text: "📹 Reasoning: Syllogism Part 2 — Definite/Possible, Either-Or", mins: 30 },
      { text: "📹 GK: 100 Most Expected Current Affairs Video", mins: 30 },
      { text: "📋 Syllogism Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 39, date: '2026-08-06',
    title: "Statement & Conclusion + Jumbled",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Statement & Conclusion — Assumption, Data Sufficiency", mins: 30 },
      { text: "📋 Statement & Conclusion Assignment (Telegram file)", mins: 60 },
      { text: "📹 Reasoning: Jumbled — Group Jumbles, Number Codes, Series", mins: 30 },
      { text: "📋 Jumbled Assignment (Telegram file)", mins: 60 }
    ],
  },
  {
    day: 40, date: '2026-08-07',
    title: "Calendar",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Calendar — Day-Date, Find Date/Day, Leap Year", mins: 30 },
      { text: "📋 Calendar Assignment (Telegram file)", mins: 60 }
    ],
  }
];



// English is a parallel daily track (36 videos × 27 min each)
// Do 1 English video every day alongside the main plan
export const ENGLISH_VIDEOS = [
  'Reading Comprehension — Strategy & Passage Types',
  'Error Spotting Part 1 — Subject-Verb Agreement',
  'Error Spotting Part 2 — Tenses & Articles',
  'Error Spotting Part 3 — Prepositions & Conjunctions',
  'Fill In The Blanks Part 1 — Grammar Based',
  'Fill In The Blanks Part 2 — Vocabulary Based',
  'Sentence Improvement Part 1',
  'Sentence Improvement Part 2',
  'Sentence Rearrangement (Para Jumbles) Part 1',
  'Sentence Rearrangement (Para Jumbles) Part 2',
  'Idioms & Phrases Part 1',
  'Idioms & Phrases Part 2',
  'One Word Substitution Part 1',
  'One Word Substitution Part 2',
  'Synonyms & Antonyms Part 1',
  'Synonyms & Antonyms Part 2',
  'Synonyms & Antonyms Part 3',
  'Active & Passive Voice',
  'Direct & Indirect Speech',
  'Reading Comprehension Practice 1',
  'Reading Comprehension Practice 2',
  'Reading Comprehension Practice 3',
  'Cloze Test Part 1',
  'Cloze Test Part 2',
  'Spotting Errors — Advanced',
  'Vocabulary — High Frequency AFCAT Words Part 1',
  'Vocabulary — High Frequency AFCAT Words Part 2',
  'Vocabulary — High Frequency AFCAT Words Part 3',
  'Grammar Revision — Complete',
  'Previous Year English Paper Analysis Part 1',
  'Previous Year English Paper Analysis Part 2',
  'Previous Year English Paper Analysis Part 3',
  'Mock English Section 1',
  'Mock English Section 2',
  'Mock English Section 3',
  'English Final Revision — All Topics',
];

export const VOCAB_WORDS = [
  { word: 'Abate', meaning: 'To reduce in intensity or amount', example: 'The storm began to abate by evening.' },
  { word: 'Acrimony', meaning: 'Bitterness or ill feeling', example: 'The meeting ended with acrimony.' },
  { word: 'Adroit', meaning: 'Clever or skilful', example: 'She was adroit at negotiations.' },
  { word: 'Alacrity', meaning: 'Brisk and cheerful readiness', example: 'He accepted the challenge with alacrity.' },
  { word: 'Ameliorate', meaning: 'To make something bad better', example: 'Steps were taken to ameliorate the situation.' },
  { word: 'Ambiguous', meaning: 'Open to more than one interpretation', example: 'The law was ambiguous on this point.' },
  { word: 'Anachronism', meaning: 'Something out of its time period', example: 'Using a quill pen today is an anachronism.' },
  { word: 'Anomaly', meaning: 'Something that deviates from the norm', example: 'The data showed an anomaly.' },
  { word: 'Antipathy', meaning: 'A deep-seated aversion', example: 'He felt antipathy toward dishonesty.' },
  { word: 'Astute', meaning: 'Having an ability to assess accurately', example: 'She made an astute observation.' },
  { word: 'Belligerent', meaning: 'Hostile and aggressive', example: 'The belligerent nation refused talks.' },
  { word: 'Benevolent', meaning: 'Well meaning and kindly', example: 'The benevolent king helped the poor.' },
  { word: 'Cacophony', meaning: 'A harsh, discordant mixture of sounds', example: 'The street was full of cacophony.' },
  { word: 'Candid', meaning: 'Truthful and straightforward', example: 'She gave a candid assessment.' },
  { word: 'Capitulate', meaning: 'To cease to resist an opponent', example: 'The enemy was forced to capitulate.' },
  { word: 'Capricious', meaning: 'Given to sudden unpredictable changes', example: 'The weather was capricious.' },
  { word: 'Chivalrous', meaning: 'Courteous and gallant', example: 'He was known for his chivalrous conduct.' },
  { word: 'Clemency', meaning: 'Mercy, leniency', example: 'The judge showed clemency.' },
  { word: 'Covert', meaning: 'Not openly acknowledged', example: 'The covert operation was top secret.' },
  { word: 'Credulous', meaning: 'Too ready to believe things', example: 'He was credulous and easily deceived.' },
  { word: 'Dearth', meaning: 'A scarcity or lack of something', example: 'There was a dearth of skilled workers.' },
  { word: 'Debacle', meaning: 'A sudden disastrous collapse', example: 'The project ended in a debacle.' },
  { word: 'Decorum', meaning: 'Behaviour in keeping with good taste', example: 'Soldiers must maintain decorum.' },
  { word: 'Defunct', meaning: 'No longer existing or functioning', example: 'The defunct company was dissolved.' },
  { word: 'Derogatory', meaning: 'Showing a critical or disrespectful attitude', example: 'He made a derogatory remark.' },
  { word: 'Diffident', meaning: 'Modest or shy due to lack of confidence', example: 'He was diffident in large groups.' },
  { word: 'Diligent', meaning: 'Having or showing care and effort', example: 'She was a diligent student.' },
  { word: 'Discern', meaning: 'To perceive or recognise something', example: 'It was hard to discern the truth.' },
  { word: 'Docile', meaning: 'Ready to accept control', example: 'The docile child followed instructions.' },
  { word: 'Dubious', meaning: 'Hesitating or doubting', example: 'He was dubious about the plan.' },
  { word: 'Ebullient', meaning: 'Cheerful and full of energy', example: 'She had an ebullient personality.' },
  { word: 'Egregious', meaning: 'Outstandingly bad', example: 'It was an egregious error.' },
  { word: 'Emulate', meaning: 'To match or surpass by imitation', example: 'He tried to emulate his idol.' },
  { word: 'Enigma', meaning: 'A mysterious person or thing', example: 'The ancient ruins were an enigma.' },
  { word: 'Enervate', meaning: 'To weaken', example: 'The heat enervated the troops.' },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time', example: 'Fame can be ephemeral.' },
  { word: 'Equanimity', meaning: 'Mental calmness under stress', example: 'She faced the crisis with equanimity.' },
  { word: 'Erudite', meaning: 'Having great knowledge', example: 'He was an erudite scholar.' },
  { word: 'Eulogy', meaning: 'A speech praising someone', example: 'He delivered a moving eulogy.' },
  { word: 'Exacerbate', meaning: 'To make worse', example: 'His words only exacerbated the tension.' },
  { word: 'Exemplary', meaning: 'Serving as a desirable model', example: 'She showed exemplary bravery.' },
  { word: 'Fastidious', meaning: 'Very attentive to detail', example: 'He was fastidious about cleanliness.' },
  { word: 'Fatuous', meaning: 'Silly and pointless', example: 'He made a fatuous remark.' },
  { word: 'Fervent', meaning: 'Having great intensity of feeling', example: 'She was a fervent supporter.' },
  { word: 'Flagrant', meaning: 'Conspicuously wrong or bad', example: 'It was a flagrant violation.' },
  { word: 'Frugal', meaning: 'Sparing in use; economical', example: 'He led a frugal life.' },
  { word: 'Garrulous', meaning: 'Excessively talkative', example: 'The garrulous man dominated the meeting.' },
  { word: 'Gregarious', meaning: 'Fond of company; sociable', example: 'She had a gregarious nature.' },
  { word: 'Guile', meaning: 'Cunning and deceit', example: 'He used guile to win the game.' },
  { word: 'Haughty', meaning: 'Arrogantly superior', example: 'She gave a haughty reply.' },
  { word: 'Hypocrite', meaning: 'A person who claims virtues they do not have', example: 'He was a hypocrite who preached but never practised.' },
  { word: 'Imminent', meaning: 'About to happen', example: 'An imminent attack was expected.' },
  { word: 'Impasse', meaning: 'A situation with no solution', example: 'Talks reached an impasse.' },
  { word: 'Impetuous', meaning: 'Acting without thought', example: 'His impetuous decision cost him dearly.' },
  { word: 'Incessant', meaning: 'Never ceasing', example: 'The incessant noise was unbearable.' },
  { word: 'Indolent', meaning: 'Wanting to avoid activity; lazy', example: 'The indolent soldier was reprimanded.' },
  { word: 'Inept', meaning: 'Lacking skill; incompetent', example: 'The inept manager caused chaos.' },
  { word: 'Ingenious', meaning: 'Clever, original and inventive', example: 'It was an ingenious solution.' },
  { word: 'Intrepid', meaning: 'Fearless; adventurous', example: 'The intrepid pilot flew through the storm.' },
  { word: 'Irascible', meaning: 'Easily made angry', example: 'He was irascible under pressure.' },
  { word: 'Judicious', meaning: 'Having good judgement', example: 'She made a judicious choice.' },
  { word: 'Laconic', meaning: 'Using very few words', example: 'His laconic reply was "Yes."' },
  { word: 'Loquacious', meaning: 'Tending to talk a great deal', example: 'He was loquacious at parties.' },
  { word: 'Lucid', meaning: 'Clear and easily understood', example: 'She gave a lucid explanation.' },
  { word: 'Magnanimous', meaning: 'Generous or forgiving', example: 'He was magnanimous in victory.' },
  { word: 'Malevolent', meaning: 'Having ill will', example: 'He cast a malevolent glance.' },
  { word: 'Meticulous', meaning: 'Showing great attention to detail', example: 'He was meticulous in his work.' },
  { word: 'Mitigate', meaning: 'To lessen severity', example: 'Steps were taken to mitigate damage.' },
  { word: 'Mundane', meaning: 'Lacking interest; dull', example: 'He tired of mundane tasks.' },
  { word: 'Nefarious', meaning: 'Wicked or criminal', example: 'He was involved in nefarious activities.' },
  { word: 'Obdurate', meaning: 'Stubbornly refusing to change', example: 'He remained obdurate despite pleas.' },
  { word: 'Obstinate', meaning: 'Stubbornly refusing to change', example: 'He was obstinate in his views.' },
  { word: 'Ominous', meaning: 'Giving the impression something bad is coming', example: 'The ominous clouds gathered.' },
  { word: 'Ostentatious', meaning: 'Designed to impress', example: 'His ostentatious display annoyed many.' },
  { word: 'Pacify', meaning: 'To quell anger or agitation', example: 'He tried to pacify the crowd.' },
  { word: 'Pedantic', meaning: 'Overly concerned with minor details', example: 'His pedantic corrections were annoying.' },
  { word: 'Perfidious', meaning: 'Guilty of betrayal', example: 'The perfidious act shocked everyone.' },
  { word: 'Plausible', meaning: 'Seeming reasonable or probable', example: 'His excuse was plausible.' },
  { word: 'Pragmatic', meaning: 'Dealing with things practically', example: 'A pragmatic approach was needed.' },
  { word: 'Precarious', meaning: 'Not securely held; uncertain', example: 'The situation was precarious.' },
  { word: 'Prolific', meaning: 'Producing much output', example: 'He was a prolific writer.' },
  { word: 'Prudent', meaning: 'Acting with careful thought', example: 'It was prudent to save money.' },
  { word: 'Pugnacious', meaning: 'Eager to argue or fight', example: 'He had a pugnacious attitude.' },
  { word: 'Querulous', meaning: 'Complaining in a petulant way', example: 'She had a querulous tone.' },
  { word: 'Recalcitrant', meaning: 'Obstinately uncooperative', example: 'The recalcitrant soldier was disciplined.' },
  { word: 'Resilient', meaning: 'Able to withstand or recover quickly', example: 'Soldiers must be resilient.' },
  { word: 'Sagacious', meaning: 'Having good judgement; wise', example: 'The sagacious officer made the right call.' },
  { word: 'Sanguine', meaning: 'Optimistic', example: 'She remained sanguine about the outcome.' },
  { word: 'Sardonic', meaning: 'Grimly mocking', example: 'He gave a sardonic smile.' },
  { word: 'Scrupulous', meaning: 'Diligent and careful', example: 'He was scrupulous about rules.' },
  { word: 'Skeptical', meaning: 'Not easily convinced', example: 'He was skeptical of the claim.' },
  { word: 'Stoic', meaning: 'Enduring without complaint', example: 'He bore the pain with stoic silence.' },
  { word: 'Taciturn', meaning: 'Reserved; saying little', example: 'He was taciturn by nature.' },
  { word: 'Tenacious', meaning: 'Holding on firmly', example: 'She was tenacious in her pursuit.' },
  { word: 'Torpid', meaning: 'Mentally or physically inactive', example: 'The torpid recruit struggled with drills.' },
  { word: 'Truculent', meaning: 'Eager to argue', example: 'His truculent manner put people off.' },
  { word: 'Ubiquitous', meaning: 'Present, appearing everywhere', example: 'Mobile phones are ubiquitous today.' },
  { word: 'Verbose', meaning: 'Using more words than needed', example: 'The report was unnecessarily verbose.' },
  { word: 'Vigilant', meaning: 'Keeping careful watch', example: 'Soldiers must remain vigilant.' },
  { word: 'Vindictive', meaning: 'Having a strong desire for revenge', example: 'He was vindictive in defeat.' },
  { word: 'Volatile', meaning: 'Liable to change rapidly and unpredictably', example: 'The situation was volatile.' },
  { word: 'Wary', meaning: 'Feeling cautious about possible danger', example: 'Be wary of misleading information.' },
  { word: 'Zealous', meaning: 'Having great energy in pursuit of a cause', example: 'He was a zealous officer.' },
];
