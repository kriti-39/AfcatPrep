import { useState } from 'react';
import { SubjectPDFSection } from './SubjectPDFs';

const MATERIAL = {
  math: {
    label: '🔢 Maths', color: 'yellow',
    sections: [
      {
        heading: 'Essential Formulas',
        items: [
          'Speed-Distance-Time: D = S × T | Avg speed = 2S₁S₂ / (S₁+S₂)',
          'Percentage change: (Change / Original) × 100',
          'Profit%: (Profit / CP) × 100 | SP = CP × (100+P%) / 100',
          'SI = PRT / 100 | CI = P(1 + R/100)ⁿ – P',
          'HCF × LCM = Product of two numbers',
          'Circle: Area = πr² | Circumference = 2πr',
          'Triangle: Area = (1/2) x b x h | Heron formula: sqrt[s(s-a)(s-b)(s-c)]',
          'Cylinder: V = πr²h | Cone: V = πr²h/3 | Sphere: V = 4πr³/3',
          'Probability: P(E) = Favourable outcomes / Total outcomes',
        ]
      },
      {
        heading: 'Shortcuts & Tricks',
        items: [
          'Square numbers ending in 5: 75² → 7×8=56, append 25 → 5625',
          'Multiply by 11: 47×11 → 4_(4+7)_7 = 517',
          '15% of 240: 10%(24) + 5%(12) = 36',
          'Train crossing a pole: time = train length / speed',
          'Train crossing platform: time = (train + platform length) / speed',
          'Work in x days → 1-day work = 1/x',
          'Pipe fills in x hrs → rate = 1/x per hr',
          'Downstream = B+S | Upstream = B-S',
          'Clock angle = |11M/2 - 30H| where M=mins, H=hours',
        ]
      },
      {
        heading: 'Divisibility Rules',
        items: [
          '2: Last digit is 0,2,4,6,8',
          '3: Sum of digits divisible by 3',
          '4: Last two digits divisible by 4',
          '5: Last digit is 0 or 5',
          '6: Divisible by both 2 and 3',
          '7: Double last digit, subtract from rest — result divisible by 7',
          '8: Last three digits divisible by 8',
          '9: Sum of digits divisible by 9',
          '11: Alternating sum of digits divisible by 11',
        ]
      },
      {
        heading: 'Number System Key Concepts',
        items: [
          'Natural numbers: 1, 2, 3... | Whole numbers: 0, 1, 2...',
          'Integers: ...-2, -1, 0, 1, 2... | Rational: p/q form',
          'Prime numbers up to 50: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47',
          'Unit digit of powers: 2 cycles in 4 (2,4,8,6), 3 in 4 (3,9,7,1)',
          'Remainder theorem: If f(x) ÷ (x-a), remainder = f(a)',
        ]
      }
    ]
  },
  gk: {
    label: '🌍 General Awareness', color: 'green',
    sections: [
      {
        heading: 'Important Battles',
        items: [
          'Battle of Panipat I (1526): Babur vs Ibrahim Lodi → Mughal Empire founded',
          'Battle of Panipat II (1556): Akbar vs Hemu → Mughal power consolidated',
          'Battle of Panipat III (1761): Ahmad Shah Abdali vs Marathas → Maratha decline',
          'Battle of Plassey (1757): British vs Siraj-ud-Daulah → British foothold',
          'Battle of Buxar (1764): British vs combined forces → British supremacy',
          'Battle of Haldighati (1576): Akbar vs Maharana Pratap → inconclusive',
        ]
      },
      {
        heading: 'Key Constitutional Articles',
        items: [
          'Article 14: Right to Equality',
          'Article 19: Right to Freedom (6 freedoms)',
          'Article 21: Right to Life and Personal Liberty',
          'Article 32: Right to Constitutional Remedies (Heart of Constitution)',
          'Article 44: Uniform Civil Code (DPSP)',
          'Article 51A: Fundamental Duties (11 duties — 42nd Amendment 1976)',
          'Article 352: National Emergency',
          'Article 356: President\'s Rule in states',
          'Article 360: Financial Emergency',
        ]
      },
      {
        heading: 'IAF & Defence GK',
        items: [
          'IAF Founded: 8 October 1932',
          'IAF Motto: "Touch the Sky with Glory" (Nabha Sprisham Diptam)',
          'Fighter aircraft: Rafale, Tejas Mk1A, Mirage 2000, Su-30MKI',
          'Operation Meghdoot (1984): Siachen Glacier capture by IAF & Army',
          'Operation Balakot (2019): First airstrike across LoC since 1971',
          'INS Vikrant: India\'s first domestically built aircraft carrier (2022)',
          'Agni-V: ICBM with ~5000 km range, MIRV capable',
          'Chief of Defence Staff: Created in 2019 post Pulwama',
          'Exercise Tasman Saber: India-Australia | Vajra Prahar: India-USA',
        ]
      },
      {
        heading: 'Geography Quick Facts',
        items: [
          'Longest river in India: Ganga (2,525 km)',
          'Largest state by area: Rajasthan | Smallest: Goa',
          'Southernmost point: Indira Point (Andaman & Nicobar)',
          'Tropic of Cancer: Gujarat, Rajasthan, MP, CG, Jharkhand, WB, Tripura, Mizoram',
          'Largest freshwater lake: Wular Lake (J&K)',
          'Largest saltwater lake: Chilika Lake (Odisha)',
          'Highest peak (India): Kangchenjunga (Sikkim border)',
          'Standard Meridian of India: 82°30\'E (passes through Prayagraj)',
        ]
      },
      {
        heading: 'Current Affairs Focus Areas',
        items: [
          'Defence: New aircraft inductions, exercises, treaties signed',
          'Economy: Union Budget 2026 highlights, GDP growth rate',
          'Science: ISRO missions, space achievements',
          'Sports: Olympic/Commonwealth medal winners, host cities',
          'Awards: Bharat Ratna, Padma awards 2025-26 recipients',
          'International: G20, SCO, QUAD summits and outcomes',
          'Environment: COP decisions, India\'s climate targets',
        ]
      },
      {
        heading: '📰 Current Affairs 2026 — Defence & Operations',
        items: [
          '**Operation Urja Suraksha** — Indian Navy operation to protect India\'s energy supply area (Strait of Hormuz)',
          '**Operation Sankalp** — Indian Navy, launched 2019, safeguards Indian vessels (Gulf of Oman & Strait of Hormuz)',
          '**Operation Epic Fury** — Joint USA + Israel operation against Iran, to assassinate Ali Khamenei',
          '**Operation Freedom Shield** — Joint military exercise between USA and South Korea',
          '**Vayu Baan** — Air-launched drone by Indian Air Force; 1st helicopter-dropped unmanned aerial system (30 m, 50 km range)',
          '**Avataar** — Amphibious vehicle for Autonomous Tactical Aerial and Aquatic Reconnaissance (air + underwater drone), developed by AquaAirX',
          '**MAHASAGAR** — Mutual and Holistic Advancement for Security And Growth Across Region',
          '**INS Trikand** — Visited Maputo (capital & largest port city of Mozambique, East Africa) under MAHASAGAR',
          '**GRSE (Garden Reach Shipbuilders & Engineers Ltd.)** — Delivered survey vessel "Sanshodhak" (after Sandhayak, Nirdeshak, Ikshak)',
          '**Iran** withdrew from FIFA',
        ]
      },
      {
        heading: '📰 Current Affairs 2026 — Exercises & International',
        items: [
          '**Sea Dragon 2026** — Multilateral naval exercise; Australia, Japan, New Zealand, India at Guam (USA)',
          '**Lamitiye** — 11th edition; Army, Air Force, Navy; between India and Seychelles',
          '**FATF (Financial Action Task Force)** — Grey list additions: Kuwait, Monaco, Guinea. Black list: Iran, North Korea',
          '**Chile** — 1st country in the Americas & 2nd globally verified by WHO for eliminating Leprosy',
          '**ISA (International Solar Alliance)** — HQ at Gurugram, Haryana; Romania submitted 1st framework agreement. Launched by PM India + President France at COP21 Paris Climate Summit',
          '**Nagoya Protocol** — Under Convention on Biological Diversity; governs access & benefit-sharing of genetic resources. India submitted 1st national report (2026) via Ministry of Environment, Forest & Climate Change / National Biodiversity Authority',
        ]
      },
      {
        heading: '📰 Current Affairs 2026 — People & Appointments',
        items: [
          '**New PM of Nepal** — Balendra Shah',
          '**New Supreme Leader of Iran** — Mojtaba Khamenei',
          '**Former Chairman & MD of Raymond** — Vijaypat Singhania',
          '**CEO of NITI Aayog (2026)** — Nidhi Chhibber',
          '**UCC (Uniform Civil Code)** — Adopted by Uttarakhand',
          '**Bhupathiraju Anmish Varma** — Completed all volcanic summit expedition in 92 days (last: Mount Sidley, Antarctica)',
        ]
      },
      {
        heading: '📰 Current Affairs 2026 — Sports & Cricket',
        items: [
          '**ICC Men\'s T20 World Cup** — Co-hosted by India & Sri Lanka; India won on home soil beating New Zealand (3rd time)',
          '**Sanju Samson** — Player of the Tournament (T20 WC)',
          '**Jasprit Bumrah & Varun Chakaravarthy** — Joint highest wicket-takers (T20 WC)',
          '**Col CK Nayudu Lifetime Achievement (Men)** — Rahul Dravid & Roger Binny',
          '**BCCI Lifetime Achievement (Women)** — Mithali Raj',
          '**Polly Umrigar Award (Best Intl Cricketer, Men)** — Shubman Gill',
          '**Best International Cricketer (Women)** — Smriti Mandhana',
        ]
      },
      {
        heading: '📰 Current Affairs 2026 — Awards, Days & Misc',
        items: [
          '**Jnanpith Award** — Tamil poet & lyricist Vairamuthu',
          '**Women Empowerment Award (UK House of Commons)** — Rituparna Sengupta',
          '**World Wildlife Day (3 March)** — Theme: "Medicinal & Aromatic Plants: Conserving Health, Heritage and Livelihoods"',
          '**World Water Day (22 March)** — Theme: "Water and Gender"',
          '**World TB Day (24 March)** — Theme: "Yes! We Can End TB!"',
          '**ISRO** — Tested CE20 cryogenic engine at Mahendragiri, Tamil Nadu',
          '**Khelo India Tribal Games (Inaugural)** — Chhattisgarh; Mascot: Morveer; Demo sports: Mallakhamb & Kabaddi',
          '**Indian Orchid Festival** — Organised by ICAR in Sikkim; theme "Orchid for Beauty and Prosperity"',
          '**9th Santhal Conference** — Held in Darjeeling, WB. Ol Chiki script (Santhal language) invented by Pandit Raghunath Murmu',
          '**Assam GI Exports** — 1st consignment of GI-tagged Karbi Ginger to London (Singhasan Hills, jhum & tila farming); Joha Rice to Italy & UK (facilitated by APEDA)',
        ]
      }
    ]
  },
  reasoning: {
    label: '🧠 Reasoning', color: 'purple',
    sections: [
      {
        heading: 'Series Patterns',
        items: [
          'Prime series: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...',
          'Square series: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100...',
          'Cube series: 1, 8, 27, 64, 125, 216, 343...',
          'Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...',
          'Alternating series tip: separate odd & even position terms',
          'Letter positions: A=1, B=2 ... M=13 ... Z=26',
          'Opposite letters: A↔Z, B↔Y, C↔X... (sum = 27)',
        ]
      },
      {
        heading: 'Syllogism Rules',
        items: [
          'All A→B + All B→C → All A→C ✓',
          'All A→B + Some B→C → Some A→C ✗ (INVALID)',
          'Some A→B + All B→C → Some A→C ✓',
          'No A is B + All C→A → No C is B ✓',
          'Draw Venn diagrams before selecting answer',
          '"Definite" = always true | "Possible" = may be true',
        ]
      },
      {
        heading: 'Military Aptitude Tips',
        items: [
          'Rotated blocks: track which face is opposite which',
          'Paper folding: unfold backwards from the punched image',
          'Embedded figures: trace the shape\'s angles in complex figure',
          'Mirror image: flip horizontally (left↔right, top stays)',
          'Water image: flip vertically (top↔bottom, left stays)',
          'Cube painting — n×n×n: 3-face=8, 2-face=12(n-2), 1-face=6(n-2)², 0-face=(n-2)³',
          'Clock mirror: actual time = 11:60 – mirror time',
        ]
      },
      {
        heading: 'Direction & Blood Relation',
        items: [
          'Sun rises in East, sets in West — use for shadow problems',
          'At 6am shadow faces West; at 12pm no shadow; at 6pm shadow faces East',
          'Blood relation: draw family tree, don\'t assume genders from names',
          'Coded relations: decode each term before building tree',
          'Direction: always re-orient after each turn',
        ]
      }
    ]
  },
  english: {
    label: '📘 English', color: 'blue',
    sections: [
      {
        heading: 'Grammar Rules (AFCAT Traps)',
        items: [
          'Each/every/either/neither → always singular verb',
          '"The number of" → singular | "A number of" → plural',
          'Collective nouns (army, team) → singular in AFCAT context',
          '"Between" for two | "among" for more than two',
          '"Less" for uncountable | "Fewer" for countable',
          '"Taller than I" not "taller than me" (pronoun case)',
          'Double comparatives wrong: "more better" → "better"',
          '"Since" with perfect tense | "For" with duration',
          'Infinitive after "to" not gerund: "able to go" not "able going"',
        ]
      },
      {
        heading: 'One-Word Substitutions',
        items: [
          'Autobiography — Life story written by oneself',
          'Omnivore — Eats both plants and animals',
          'Insolvent — Cannot pay debts',
          'Philanthropist — Loves mankind and helps them',
          'Misogynist — Hates women',
          'Omniscient — Knows everything',
          'Epicure — Devoted to sensual enjoyment (esp. food)',
          'Infallible — Unable to make mistakes',
          'Teetotaller — One who never drinks alcohol',
          'Cannibal — Eats human flesh',
          'Bilingual — Speaks two languages',
          'Polyglot — Speaks many languages',
          'Agnostic — Neither believes nor disbelieves in God',
          'Atheist — Disbelieves in God',
          'Pseudonym — False name used by an author',
        ]
      },
      {
        heading: 'Idioms & Phrases (AFCAT Favourites)',
        items: [
          'At the drop of a hat — Immediately, without hesitation',
          'Bite the bullet — Endure a painful situation bravely',
          'Beat around the bush — Avoid the main topic',
          'By hook or by crook — By any means necessary',
          'Catch red-handed — Catch in the act',
          'Face the music — Accept punishment',
          'Feather in one\'s cap — Achievement to be proud of',
          'Hit the nail on the head — Describe exactly correctly',
          'In the same boat — In the same difficult situation',
          'Jump the gun — Start before the proper time',
          'Let the cat out of the bag — Reveal a secret accidentally',
          'Spill the beans — Reveal confidential information',
          'Turn over a new leaf — Change for the better',
          'Under the weather — Feeling ill',
          'Burn the midnight oil — Study/work late into the night',
        ]
      },
      {
        heading: 'RC Strategy',
        items: [
          'Read the questions FIRST, then the passage',
          'Skim for main idea in 30 seconds before reading in detail',
          'Eliminate options that are too extreme (always/never)',
          'Inference questions: must be logically supported — don\'t assume',
          'Tone questions: look for adjectives describing the author\'s attitude',
          'Vocabulary-in-context: re-read the sentence with each option',
          'AFCAT passages are usually 200-300 words — 4-5 questions each',
        ]
      }
    ]
  },
};

const COLORS = {
  yellow: { tab: 'border-yellow-400 text-yellow-400', heading: 'text-yellow-400', badge: 'bg-yellow-500/10 border-yellow-500/30', upload: 'bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20' },
  green:  { tab: 'border-green-400 text-green-400',   heading: 'text-green-400',   badge: 'bg-green-500/10 border-green-500/30',   upload: 'bg-green-500/10 text-green-300 hover:bg-green-500/20' },
  purple: { tab: 'border-purple-400 text-purple-400', heading: 'text-purple-400', badge: 'bg-purple-500/10 border-purple-500/30', upload: 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20' },
  blue:   { tab: 'border-blue-400 text-blue-400',     heading: 'text-blue-400',   badge: 'bg-blue-500/10 border-blue-500/30',   upload: 'bg-blue-500/10 text-blue-300 hover:bg-blue-500/20' },
};

// Map MATERIAL keys → subject keys used in PDF store
const SUBJECT_KEY = { math: 'math', gk: 'gk', reasoning: 'reasoning', english: 'english' };

export default function StudyMaterial() {
  const [activeTab, setActiveTab] = useState('math');
  const [openSection, setOpenSection] = useState(0);
  const subject = MATERIAL[activeTab];
  const c = COLORS[subject.color];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-slate-800/50 p-1 rounded-xl overflow-x-auto">
        {Object.entries(MATERIAL).map(([key, val]) => (
          <button
            key={key}
            onClick={() => { setActiveTab(key); setOpenSection(0); }}
            className={`flex-1 min-w-max px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
              activeTab === key
                ? `bg-slate-700 border-b-2 ${COLORS[val.color].tab}`
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {val.label}
          </button>
        ))}
      </div>

      {/* Sections accordion */}
      <div className="space-y-3">
        {subject.sections.map((section, si) => (
          <div key={si} className={`rounded-xl border ${openSection === si ? c.badge : 'border-slate-700 bg-slate-800/40'} overflow-hidden`}>
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => setOpenSection(openSection === si ? -1 : si)}
            >
              <h3 className={`font-semibold text-sm ${openSection === si ? c.heading : 'text-slate-300'}`}>
                {section.heading}
              </h3>
              <span className="text-slate-500 text-lg leading-none">{openSection === si ? '−' : '+'}</span>
            </button>
            {openSection === si && (
              <ul className="px-4 pb-4 space-y-2">
                {section.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-current ${c.heading}`} />
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* PDF section for this subject */}
      <div className="mt-2 border-t border-slate-700/50 pt-2">
        <SubjectPDFSection subject={SUBJECT_KEY[activeTab]} accentClass={c.upload} />
      </div>
    </div>
  );
}
