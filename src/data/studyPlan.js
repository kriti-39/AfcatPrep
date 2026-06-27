// AFCAT 2 2026 — REVAMPED 39-Day Compressed Plan (InsightsSSB blueprint, merged)
// Fresh restart: Day 1 = June 28, 2026. Last study day = Aug 5. Aug 6-7 buffer/rest. Exam Aug 8, 2026.
// Original 50-day content compressed into 39 days by merging the 11 lightest adjacent day-pairs.

export const START_DATE = '2026-06-28';
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
    day: 1, date: '2026-06-28',
    title: "Number System",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Number System Part 1 — Divisibility Rules, Unit Digit Concepts", mins: 35 },
      { text: "📹 Maths: Number System Part 2 — Remainder Theorem, Number Series, Misc", mins: 35 },
      { text: "📹 GK: Stone Age And Indus Valley", mins: 30 },
      { text: "📋 Number System Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 2, date: '2026-06-29',
    title: "Simplification Part 1",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Simplification Part 1 — Fractions, Numerator & Denominator, Decimals", mins: 35 },
      { text: "📹 Maths: Simplification Part 2 — Indices & Surds, Square Root & Cube Roots", mins: 35 },
      { text: "📹 GK: Vedic And Post Vedic Era", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 3, date: '2026-06-30',
    title: "Simplification Part 2 + Percentage Start",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Simplification Part 3 — LCM & HCF, Misc", mins: 35 },
      { text: "📹 Maths: Simplification Part 4 — Algebra", mins: 35 },
      { text: "📹 Maths: Percentage Part 1 — Theory", mins: 35 },
      { text: "📹 Maths: Percentage Part 2 — Theory, Basic Questions", mins: 35 },
      { text: "📹 GK: Basics Of Mahajanapadas", mins: 30 },
      { text: "📋 Simplification Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 4, date: '2026-07-01',
    title: "Percentage Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Percentage Part 3 — Successive %, Increase And Decrease", mins: 35 },
      { text: "📹 Maths: Percentage Part 4 — Exam Related, Population Based", mins: 35 },
      { text: "📹 GK: Mauryan Empire", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 5, date: '2026-07-02',
    title: "Percentage Part 3",
    subjects: ["math"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Percentage Part 5 — Price Consumption Expense, % Change In Area/Volume", mins: 35 },
      { text: "📹 Maths: Percentage Part 6 — Elections, Misc, Venn, Commission Mix", mins: 35 },
      { text: "📋 Percentage Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Question Practice", mins: 30 }
    ],
  },
  {
    day: 6, date: '2026-07-03',
    title: "Ratio & Proportion Part 1",
    subjects: ["math"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Ratio & Proportion Part 1 — Theory", mins: 35 },
      { text: "📹 Maths: Ratio & Proportion Part 2 — Basic", mins: 35 },
      { text: "📹 Maths: Ratio & Proportion Part 3 — A:B:C Type, Direct/Indirect Proportion", mins: 35 },
      { text: "📄 Question Practice", mins: 30 }
    ],
  },
  {
    day: 7, date: '2026-07-04',
    title: "Ratio & Proportion Part 2",
    subjects: ["math"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Ratio & Proportion Part 4 — Coins, Income", mins: 35 },
      { text: "📹 Maths: Ratio & Proportion Part 5 — Adding/Removing Elements, Misc", mins: 35 },
      { text: "📋 Ratio & Proportion Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Question Practice", mins: 30 }
    ],
  },
  {
    day: 8, date: '2026-07-05',
    title: "Averages Part 1 + Averages Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Average Part 1 — Theory", mins: 35 },
      { text: "📹 Maths: Average Part 2 — Basic, Consecutive No, Adding/Replacing Elements", mins: 35 },
      { text: "📹 GK: Buddhism And Jainism, Important Dynasties", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Maths: Average Part 3 — Weighted Average, Examination Marks, Age Related", mins: 35 },
      { text: "📹 Maths: Average Part 4 — Middle Subject Overlaps, Middle Subject Left Out", mins: 35 },
      { text: "📹 GK: Delhi Sultanate", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 9, date: '2026-07-06',
    title: "Averages Part 3 + Profit & Loss Start",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Average Part 5 — Wrong Written Marks, Misc", mins: 35 },
      { text: "📹 Maths: Profit & Loss Discount Part 1 — Theory", mins: 35 },
      { text: "📹 GK: Mughals, Travellers To India, Bhaktism And Sufism", mins: 30 },
      { text: "📋 Average Assignment (from Telegram — do after watching)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 10, date: '2026-07-07',
    title: "Profit & Loss Part 1 + Profit & Loss Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Profit & Loss Part 2 — Basic, Successive Change, Relation On SP And CP", mins: 35 },
      { text: "📹 Maths: Profit & Loss Part 3 — Marked Price, Dishonest Shopkeeper", mins: 35 },
      { text: "📹 GK: Vijaynagar And Bahmani, Father Of Various Fields", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Maths: Profit & Loss Part 4 — Articles Combined, Finding CP, Finding SP", mins: 35 },
      { text: "📹 Maths: Profit & Loss Part 5 — Discount, Compound Case", mins: 35 },
      { text: "📹 GK: Charter Acts, Land Revenue, Congress Session", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 11, date: '2026-07-08',
    title: "Profit & Loss Part 3",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Profit & Loss Part 6 — Mixed Problems", mins: 35 },
      { text: "📹 GK: Battles And Treaties, Invention And Discoveries", mins: 30 },
      { text: "📋 Profit & Loss Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 12, date: '2026-07-09',
    title: "Simple Interest",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Simple Interest Part 1 — SI Theory, SI Basic", mins: 35 },
      { text: "📹 Maths: Simple Interest Part 2 — Amount Becomes N Times, Two Different Times, Misc", mins: 35 },
      { text: "📹 GK: Governor Generals And Viceroys, Books & Authors", mins: 30 },
      { text: "📋 Simple Interest Assignment (file from Telegram)", mins: 60 },
      { text: "📹 GK: History Video Part 1 (YouTube/Telegram)", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 13, date: '2026-07-10',
    title: "Compound Interest + Mixed Interest + Partnership",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Compound Interest Part 1 — CI Theory, Basic Questions", mins: 35 },
      { text: "📹 Maths: Compound Interest Part 2 — Amount Becomes N Times, CI Misc", mins: 35 },
      { text: "📹 GK: Important Commissions In British India, Political Organisations And Societies", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Maths: Mixed Interest Problems — SI-CI Difference, Mixed SI CI Problems", mins: 35 },
      { text: "📹 GK: Marathas, Revolt Of 1857, Revolutionary Freedom Struggle", mins: 30 },
      { text: "📋 Compound Interest Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 14, date: '2026-07-11',
    title: "Partnership",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Partnership — Share Of One Person, Profit, Finding Invested Time, Misc", mins: 35 },
      { text: "📹 GK: Newspaper In Modern India, Socio-Reform Movement, United Nations", mins: 30 },
      { text: "📋 Partnership Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 15, date: '2026-07-12',
    title: "🔁 Revision Day — Full History",
    subjects: ["revision","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📝 Revise All History Notes (Ancient → Modern India)", mins: 90 },
      { text: "📹 GK: History Video Part 2 (YouTube/Telegram)", mins: 30 },
      { text: "📝 Make flashcards for important battles, dates, personalities", mins: 30 }
    ],
  },
  {
    day: 16, date: '2026-07-13',
    title: "Mixture & Allegation Part 1 + Mixture & Allegation Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Mixture & Allegation Part 1 — Basic, One Item Added, Acid-Water, Alloys", mins: 35 },
      { text: "📹 GK: Alloys, Common Names, First Cabinet Of Free India, Party And Founders", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Maths: Mixture & Allegation Part 2 — Quantity Taken Out/Added, Replacement/Repetition", mins: 35 },
      { text: "📹 GK: SI Units, Logies, Vitamins And Minerals, Disease, Miscellaneous", mins: 30 },
      { text: "📋 Mixture & Allegation Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 17, date: '2026-07-14',
    title: "Time & Work Part 1",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Time & Work Part 1 — Theory, Basic, MDH Ones, Remaining Work", mins: 35 },
      { text: "📹 Maths: Time & Work Part 2 — Additional Persons Hired, Efficiency, Work & Wages, Alternate Days", mins: 35 },
      { text: "📹 GK: Polity Intro, Fundamental Rights, DPSP, Fundamental Duties", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 18, date: '2026-07-15',
    title: "Time & Work Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Time & Work Part 3 — Pipe And Cisterns, Misc", mins: 35 },
      { text: "📹 GK: Union Executive — President, Amendment, Basic Structure, PM And Cabinet", mins: 30 },
      { text: "📋 Time & Work Assignment (file from Telegram)", mins: 60 },
      { text: "📹 GK: GK 50 Most Expected Questions Video (Telegram)", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 19, date: '2026-07-16',
    title: "Time Speed Distance Part 1 + Time Speed Distance Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: TSD Part 1 — Theory", mins: 35 },
      { text: "📹 Maths: TSD Part 2 — Basic, Average Speed, Relative Speed, Parts Of Distance", mins: 35 },
      { text: "📹 GK: Vice President, Union Legislature, State Government", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Maths: TSD Part 3 — Late/Early Arrival, When Distance Is Constant/Time Is Constant", mins: 35 },
      { text: "📹 Maths: TSD Part 4 — With/Without Stoppage, Thief And Police/Chase Problems", mins: 35 },
      { text: "📹 GK: Supreme Court, High Court, Constitutional & Non-Constitutional Bodies", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 20, date: '2026-07-17',
    title: "🔁 Revision Day — Science + Polity",
    subjects: ["revision","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📝 Revise Science Notes (Physics, Chemistry, Biology basics)", mins: 60 },
      { text: "📝 Revise Polity Notes (Constitution, Rights, Parliament)", mins: 60 },
      { text: "📝 Self-test: attempt 20 GK questions from memory", mins: 30 }
    ],
  },
  {
    day: 21, date: '2026-07-18',
    title: "Time Speed Distance Part 3 — Trains + Time Speed Distance Part 4 — Boats + Assignment",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: TSD Part 5 — Trains: Crossing Man/Platform/Another Train, Direction, Length/Relative", mins: 35 },
      { text: "📹 GK: Indices, Curves, Important Economic Terms", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Maths: TSD Part 6 — Speed Of Boat, Speed Of Stream, Upstream And Downstream", mins: 35 },
      { text: "📹 GK: Environment Chronology", mins: 30 },
      { text: "📋 Time Speed & Distance Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 22, date: '2026-07-19',
    title: "Clock",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Clock Part 1 — Theory, Fundamental", mins: 35 },
      { text: "📹 Maths: Clock Part 2 — Angle And Time Finding, Hands Coincidence Cases, Misc", mins: 35 },
      { text: "📹 GK: India Location, Himalayan Mountains, Northern Plains", mins: 30 },
      { text: "📋 Clock Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 23, date: '2026-07-20',
    title: "Ages",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Ages Part 1 — Present Age, 1 Variable Type", mins: 35 },
      { text: "📹 Maths: Ages Part 2 — Comparison Type, Multiple Variable, Future/Past Age, Average Age", mins: 35 },
      { text: "📹 GK: Peninsular Hills, Coastal Plains, Islands Of India", mins: 30 },
      { text: "📋 Ages Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 24, date: '2026-07-21',
    title: "Mensuration Part 1",
    subjects: ["math","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Maths: Mensuration Part 1 — Theory 2D: Triangle, Quadrilateral, Circle, Polygons", mins: 35 },
      { text: "📹 Maths: Mensuration Part 2 — Theory 3D: Cube, Cuboid, Cylinder, Cone, Sphere; Cost Related, Area & Perimeter", mins: 35 },
      { text: "📹 GK: Rivers In India", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 25, date: '2026-07-22',
    title: "Mensuration Part 2",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Mensuration Part 3 — Shaded Region, Melting/Bend Concepts", mins: 35 },
      { text: "📹 Maths: Mensuration Part 4 — Area/Volume % Changes, Misc", mins: 35 },
      { text: "📹 GK: Soils In India, Important Latitudes, Earth Atmosphere + Revise Science", mins: 30 },
      { text: "📋 Mensuration Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 26, date: '2026-07-23',
    title: "🔁 Revision Day — Polity, Economy, Environment, Geography",
    subjects: ["revision","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📝 Revise Polity — Important Articles, Parliament, Judiciary", mins: 45 },
      { text: "📝 Revise Economy — Key terms, Budget basics, Economic organisations", mins: 45 },
      { text: "📝 Revise Environment & Geography — Chronology, Soils, Rivers", mins: 45 },
      { text: "📹 Live class: Ages + Mensuration review (if available on Telegram)", mins: 30 }
    ],
  },
  {
    day: 27, date: '2026-07-24',
    title: "Probability",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Probability Part 1 — Classical Probability, Coins, Dices, Cards", mins: 35 },
      { text: "📹 Maths: Probability Part 2 — Bag Of Balls, Concept And Conditions", mins: 35 },
      { text: "📹 GK: Countries & Currencies, Famous Days And Dates", mins: 30 },
      { text: "📋 Probability Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 28, date: '2026-07-25',
    title: "Statistics",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Statistics Part 1 — Theory, Mean", mins: 35 },
      { text: "📹 Maths: Statistics Part 2 — Median, Mode", mins: 35 },
      { text: "📹 Maths: Statistics Part 3 — Measures Of Dispersion, Misc", mins: 35 },
      { text: "📹 GK: Nicknames Of Famous Personalities, Revolutions, Fathers", mins: 30 },
      { text: "📋 Statistics Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 29, date: '2026-07-26',
    title: "Height & Distance",
    subjects: ["math","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Maths: Height & Distance Part 1 — Theory, Fundamental Trigo Ratios", mins: 35 },
      { text: "📹 Maths: Height & Distance Part 2 — Angle Of Elevation, Angle Of Depression", mins: 35 },
      { text: "📹 Maths: Height & Distance Part 3 — Shadow Based, Misc", mins: 35 },
      { text: "📹 GK: Headquarters, Sports", mins: 30 },
      { text: "📋 Height & Distance Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 30, date: '2026-07-27',
    title: "Analogy + Non-Verbal Reasoning Part 1",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Reasoning: Analogy Part 1 — Theory, Words Related, Numerical/Alphabets Related", mins: 30 },
      { text: "📹 Reasoning: Analogy Part 2 — Advanced Analogies, Figure Analogy", mins: 30 },
      { text: "📹 GK: Revise Sports + Geography", mins: 30 },
      { text: "📋 Analogy Assignment (question practice)", mins: 45 },
      { text: "📹 GK: Sports Video (Telegram/YouTube)", mins: 30 },
      { text: "📹 Reasoning: Non-Verbal Part 1 — Embedded Figure, Odd One Out", mins: 30 },
      { text: "📹 Reasoning: Non-Verbal Part 2 — Missing/Completing Figure, Paper Folding/Cutting", mins: 30 },
      { text: "📹 GK: Awards, First Cabinet Of Free India, Party And Founders", mins: 30 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 31, date: '2026-07-28',
    title: "Non-Verbal Reasoning Part 2",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Non-Verbal Part 3 — Dot Figure, Counting Figures", mins: 30 },
      { text: "📹 Reasoning: Non-Verbal Part 4 — Mirror/Water Image Of Figure, Mixed", mins: 30 },
      { text: "📹 GK: Indian Festivals, Paintings In India, Dances Of India", mins: 30 },
      { text: "📋 Figure/Non-Verbal Reasoning Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 32, date: '2026-07-29',
    title: "Mirror & Water Image",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Mirror And Water Image — Words, Numbers, Figures", mins: 30 },
      { text: "📹 GK: Research Institutes Of India, Musical Instruments & Persons", mins: 30 },
      { text: "📋 Mirror & Water Images Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 33, date: '2026-07-30',
    title: "Number & Alphabet Series",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Reasoning: Series Part 1 — Basic Number Series, Mixed/Alternate Patterns, Alphabet Series", mins: 30 },
      { text: "📹 Reasoning: Series Part 2 — Mixed Alpha+Number, Dictionary, Wrong Term/Missing", mins: 30 },
      { text: "📹 GK: Folk Music Of India, Motto Of Forces", mins: 30 },
      { text: "📋 Series Assignment (question practice)", mins: 45 },
      { text: "📹 GK: Complete Defence, Static + Current Affairs Video (Telegram)", mins: 30 }
    ],
  },
  {
    day: 34, date: '2026-07-31',
    title: "Blood Relation + Direction",
    subjects: ["reasoning","gk"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Reasoning: Blood Relation — Simple Family Tree, Multiple Generations, Coded Relation", mins: 30 },
      { text: "📹 GK: Cities & Towns Nicknames, Minerals", mins: 30 },
      { text: "📋 Blood Relation Assignment (question practice)", mins: 45 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 },
      { text: "📹 Reasoning: Direction — Basic Distance And Direction, Angle Based, Shadow Based, Shortest Distance", mins: 30 },
      { text: "📹 GK: Defence Topics + Sports", mins: 30 },
      { text: "📋 Direction Assignment (question practice)", mins: 45 },
      { text: "📄 Blueprint Notes + Question Practice", mins: 30 }
    ],
  },
  {
    day: 35, date: '2026-08-01',
    title: "Coding-Decoding + Ranking & Order",
    subjects: ["reasoning"],
    hasAssignmentFile: false,
    tasks: [
      { text: "📹 Reasoning: Coding Decoding Part 1 — Letter Coding, Number Coding, Mixed Coding", mins: 30 },
      { text: "📹 Reasoning: Coding Decoding Part 2 — Statement Coding, Message Coding", mins: 30 },
      { text: "📋 Coding Decoding Assignment (question practice)", mins: 45 },
      { text: "📄 Question Practice", mins: 30 },
      { text: "📹 Reasoning: Ranking/Order Part 1 — Simple Ranking, Both Side Rank, Rank Interchange", mins: 30 },
      { text: "📹 Reasoning: Ranking/Order Part 2 — Comparison Type, Ordering", mins: 30 },
      { text: "📋 Ranking/Order Assignment (question practice)", mins: 45 },
      { text: "📹 GK: Awards Video (Telegram/YouTube)", mins: 30 }
    ],
  },
  {
    day: 36, date: '2026-08-02',
    title: "Dice & Cube + Venn Diagram",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Dice And Cube — Faces Identification, Open Dice Folding", mins: 30 },
      { text: "📋 Dice & Cube Assignment (question practice)", mins: 45 },
      { text: "📄 Question Practice", mins: 30 },
      { text: "📹 Reasoning: Venn Diagram — Simple Intersection, Categorical Type, Numerical Type", mins: 30 },
      { text: "📋 Venn Diagram Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Question Practice", mins: 30 }
    ],
  },
  {
    day: 37, date: '2026-08-03',
    title: "Syllogism",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Syllogism Part 1 — Theory, Different Statements (A, E, I, O)", mins: 30 },
      { text: "📹 Reasoning: Syllogism Part 2 — Definite And Possible Cases, Either-Or, Can-Be", mins: 30 },
      { text: "📋 Syllogism Assignment (file from Telegram)", mins: 60 },
      { text: "📹 GK: 100 Most Expected Current Affairs Video (Telegram)", mins: 30 }
    ],
  },
  {
    day: 38, date: '2026-08-04',
    title: "Statement & Conclusion + Jumbled",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Statement & Conclusion — Statement Conclusion, Assumption, Data Sufficiency", mins: 30 },
      { text: "📋 Statement & Conclusion Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Question Practice", mins: 30 },
      { text: "📹 Reasoning: Jumbled — Basic, Group Jumbles (Odd One Out), Number Position Codes, Series", mins: 30 },
      { text: "📋 Jumbled Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Question Practice", mins: 30 }
    ],
  },
  {
    day: 39, date: '2026-08-05',
    title: "Calendar",
    subjects: ["reasoning"],
    hasAssignmentFile: true,
    tasks: [
      { text: "📹 Reasoning: Calendar — Day-Date Relation, Finding Date/Day, Repetition/Leap Year", mins: 30 },
      { text: "📋 Calendar Assignment (file from Telegram)", mins: 60 },
      { text: "📄 Question Practice", mins: 30 }
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
