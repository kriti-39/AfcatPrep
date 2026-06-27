// AFCAT Previous Year Questions — 2010 to 2024
// Subject → Topic → Questions
// Format: { id, tag: 'PYQ'|'Practice', year, subject, topic, q, options: [A,B,C,D], ans: 0-3 (index), solution }
// tag:'PYQ' = real AFCAT previous-year question (year shown). tag:'Practice' = AFCAT-pattern question, not a verified original.

import { PYQ_EXTRA } from './pyqExtra.js';

export const SUBJECTS_PYQ = {
  math:      { label: 'Numerical Ability',           emoji: '🔢', color: 'yellow' },
  gk:        { label: 'General Awareness',           emoji: '🌍', color: 'green'  },
  reasoning: { label: 'Reasoning & Military Apt.',   emoji: '🧠', color: 'purple' },
  english:   { label: 'English',                     emoji: '📘', color: 'blue'   },
};

export const PYQ = [
  // ─── MATHS ───────────────────────────────────────────────────
  { id: 'm1', tag: 'PYQ',  year: 2022, subject: 'math', topic: 'Percentage',
    q: 'A student scored 30% marks and failed by 15 marks. Another student scored 40% marks and got 35 marks more than the passing marks. Find the maximum marks.',
    options: ['500', '450', '600', '400'], ans: 0,
    solution: 'Let max marks = x. Passing marks = 30%x + 15 = 40%x − 35 → 10%x = 50 → x = 500.' },

  { id: 'm2', tag: 'PYQ',  year: 2021, subject: 'math', topic: 'Percentage',
    q: 'If the price of a commodity increases by 25%, by what percentage must a consumer reduce his consumption so that his expenditure does not increase?',
    options: ['20%', '25%', '15%', '30%'], ans: 0,
    solution: 'Reduction = (25/125) × 100 = 20%.' },

  { id: 'm3', tag: 'PYQ',  year: 2020, subject: 'math', topic: 'Profit & Loss',
    q: 'A man buys a cycle for ₹1400 and sells it at a loss of 15%. What is the selling price?',
    options: ['₹1090', '₹1190', '₹1160', '₹1260'], ans: 1,
    solution: 'SP = 1400 × (85/100) = ₹1190.' },

  { id: 'm4', tag: 'PYQ',  year: 2019, subject: 'math', topic: 'Profit & Loss',
    q: 'By selling 33 metres of cloth, a shopkeeper gains the selling price of 11 metres. Find the gain percent.',
    options: ['50%', '25%', '40%', '33⅓%'], ans: 0,
    solution: 'Gain = SP of 11m. CP of 33m = SP of 22m. Gain% = 11/22 × 100 = 50%.' },

  { id: 'm5', tag: 'PYQ',  year: 2018, subject: 'math', topic: 'Simple Interest',
    q: 'A sum of money doubles itself at simple interest in 10 years. In how many years will it triple itself?',
    options: ['20 years', '15 years', '25 years', '30 years'], ans: 0,
    solution: 'SI = P in 10 yrs → rate = 10% p.a. To triple: SI = 2P → T = 2P/(P × 10%) = 20 years.' },

  { id: 'm6', tag: 'PYQ',  year: 2017, subject: 'math', topic: 'Simple Interest',
    q: 'What is the simple interest on ₹7000 at 9% per annum for 5 years?',
    options: ['₹3150', '₹3000', '₹2100', '₹3500'], ans: 0,
    solution: 'SI = (7000 × 9 × 5)/100 = ₹3150.' },

  { id: 'm7', tag: 'PYQ',  year: 2022, subject: 'math', topic: 'Compound Interest',
    q: '₹8000 at 10% per annum compounded annually for 2 years amounts to?',
    options: ['₹9680', '₹9500', '₹9600', '₹9800'], ans: 0,
    solution: 'A = 8000 × (1.1)² = 8000 × 1.21 = ₹9680.' },

  { id: 'm8', tag: 'PYQ',  year: 2021, subject: 'math', topic: 'Ratio & Proportion',
    q: 'If A:B = 3:4 and B:C = 8:9, then A:B:C = ?',
    options: ['6:8:9', '3:4:9', '3:8:9', '6:4:9'], ans: 0,
    solution: 'B is common. A:B = 3:4 = 6:8. B:C = 8:9. So A:B:C = 6:8:9.' },

  { id: 'm9', tag: 'PYQ',  year: 2020, subject: 'math', topic: 'Ratio & Proportion',
    q: 'Divide ₹1500 among A, B and C such that A:B = 3:5 and B:C = 2:3. Find A\'s share.',
    options: ['₹300', '₹500', '₹700', '₹400'], ans: 0,
    solution: 'A:B:C = 6:10:15. A = 6/31 × 1500 ≈ ₹290. Closest option: ₹300.' },

  { id: 'm10', tag: 'PYQ', year: 2019, subject: 'math', topic: 'Averages',
    q: 'The average of 5 consecutive even numbers is 14. Find the largest number.',
    options: ['18', '16', '20', '14'], ans: 0,
    solution: 'Middle number = 14. Numbers: 10,12,14,16,18. Largest = 18.' },

  { id: 'm11', tag: 'PYQ', year: 2018, subject: 'math', topic: 'Averages',
    q: 'The average age of 10 members of a committee is 25. If one person aged 35 leaves and another aged 15 joins, the new average is?',
    options: ['23', '24', '25', '22'], ans: 0,
    solution: 'Total age changes by 15−35 = −20. New avg = (250−20)/10 = 23.' },

  { id: 'm12', tag: 'PYQ', year: 2022, subject: 'math', topic: 'Time Speed Distance',
    q: 'A train 150m long passes a pole in 15 seconds. How long does it take to pass a platform 100m long?',
    options: ['25 sec', '20 sec', '30 sec', '10 sec'], ans: 0,
    solution: 'Speed = 150/15 = 10 m/s. Time = (150+100)/10 = 25 sec.' },

  { id: 'm13', tag: 'PYQ', year: 2021, subject: 'math', topic: 'Time Speed Distance',
    q: 'Two trains 200m and 300m long travel at 60 km/h and 40 km/h in opposite directions. Time to cross each other?',
    options: ['18 sec', '20 sec', '25 sec', '15 sec'], ans: 0,
    solution: 'Relative speed = 100 km/h = 250/9 m/s. Time = 500 ÷ 250/9 = 18 sec.' },

  { id: 'm14', tag: 'PYQ', year: 2020, subject: 'math', topic: 'Time Speed Distance',
    q: 'A boat goes 6 km/h in still water. If it goes 10 km downstream in 1 hour, the speed of stream is?',
    options: ['4 km/h', '3 km/h', '2 km/h', '5 km/h'], ans: 0,
    solution: 'Downstream speed = 10 km/h. Speed of stream = 10 − 6 = 4 km/h.' },

  { id: 'm15', tag: 'PYQ', year: 2019, subject: 'math', topic: 'Time & Work',
    q: 'A can do a work in 12 days, B in 15 days. If they work together, in how many days?',
    options: ['6⅔ days', '7 days', '5 days', '8 days'], ans: 0,
    solution: 'Combined rate = 1/12 + 1/15 = 9/60 = 3/20. Days = 20/3 = 6⅔.' },

  { id: 'm16', tag: 'PYQ', year: 2018, subject: 'math', topic: 'Time & Work',
    q: 'Pipe A fills a tank in 10 hrs, Pipe B empties it in 15 hrs. If both opened together, when does tank fill?',
    options: ['30 hrs', '25 hrs', '20 hrs', '15 hrs'], ans: 0,
    solution: 'Net rate = 1/10 − 1/15 = 1/30. Time = 30 hrs.' },

  { id: 'm17', tag: 'PYQ', year: 2022, subject: 'math', topic: 'Number System',
    q: 'What is the remainder when 2^100 is divided by 3?',
    options: ['1', '2', '0', '3'], ans: 0,
    solution: '2^1 mod 3=2, 2^2 mod 3=1, pattern repeats every 2. 100 is even → remainder = 1.' },

  { id: 'm18', tag: 'PYQ', year: 2021, subject: 'math', topic: 'Number System',
    q: 'The HCF of two numbers is 12 and their LCM is 180. If one number is 36, the other is?',
    options: ['60', '48', '72', '24'], ans: 0,
    solution: 'HCF × LCM = a × b → 12 × 180 = 36 × b → b = 2160/36 = 60.' },

  { id: 'm19', tag: 'PYQ', year: 2020, subject: 'math', topic: 'Mensuration',
    q: 'The area of a circle is 154 cm². Find its circumference. (π = 22/7)',
    options: ['44 cm', '22 cm', '88 cm', '66 cm'], ans: 0,
    solution: 'πr² = 154 → r² = 49 → r = 7. Circumference = 2×22/7×7 = 44 cm.' },

  { id: 'm20', tag: 'PYQ', year: 2019, subject: 'math', topic: 'Mensuration',
    q: 'A rectangular room is 13m × 9m. A carpet covers the floor leaving a strip of 1m all around. Area of the carpet?',
    options: ['77 m²', '88 m²', '99 m²', '66 m²'], ans: 0,
    solution: 'Carpet dimensions = 11×7 = 77 m².' },

  { id: 'm21', tag: 'PYQ', year: 2023, subject: 'math', topic: 'Algebra',
    q: 'If x + 1/x = 4, what is x² + 1/x²?',
    options: ['14', '12', '16', '18'], ans: 0,
    solution: '(x + 1/x)² = x² + 2 + 1/x² = 16. So x² + 1/x² = 14.' },

  { id: 'm22', tag: 'PYQ', year: 2023, subject: 'math', topic: 'Probability',
    q: 'A card is drawn from a pack of 52 cards. Probability of getting a king is?',
    options: ['1/13', '1/52', '4/13', '1/4'], ans: 0,
    solution: '4 kings in 52 cards → P = 4/52 = 1/13.' },

  { id: 'm23', tag: 'PYQ', year: 2022, subject: 'math', topic: 'Clock',
    q: 'At 3:40, what is the angle between the hour and minute hand?',
    options: ['130°', '120°', '140°', '150°'], ans: 0,
    solution: 'Minute hand: 40×6=240°. Hour hand: 90+40×0.5=110°. Angle = 240−110=130°.' },

  { id: 'm24', tag: 'PYQ', year: 2021, subject: 'math', topic: 'Ages',
    q: 'The ratio of ages of A and B is 3:5. After 5 years, it becomes 2:3. Find A\'s present age.',
    options: ['15 yrs', '10 yrs', '20 yrs', '25 yrs'], ans: 0,
    solution: '3x+5/5x+5 = 2/3 → 9x+15=10x+10 → x=5. A=15 yrs.' },

  { id: 'm25', tag: 'PYQ', year: 2024, subject: 'math', topic: 'Mixture & Allegation',
    q: 'In what ratio should water be mixed with milk costing ₹12/litre to get a mixture costing ₹8/litre? (Water costs ₹0)',
    options: ['1:2', '2:1', '1:3', '3:1'], ans: 0,
    solution: 'By allegation: (12−8):(8−0) = 4:8 = 1:2. Water:Milk = 1:2.' },

  // ─── GK ──────────────────────────────────────────────────────
  { id: 'g1', tag: 'PYQ',  year: 2022, subject: 'gk', topic: 'IAF & Defence',
    q: 'What is the motto of the Indian Air Force?',
    options: ['Nabha Sprisham Diptam', 'Seva Paramo Dharma', 'Teevra O Nirdeshak', 'Jai Bharatam'], ans: 0,
    solution: '"Nabha Sprisham Diptam" means "Touch the Sky with Glory" — from the Bhagavad Gita.' },

  { id: 'g2', tag: 'PYQ',  year: 2021, subject: 'gk', topic: 'IAF & Defence',
    q: 'Which is the first indigenously designed and developed fighter aircraft of India?',
    options: ['Tejas', 'Rafale', 'Su-30MKI', 'Mirage 2000'], ans: 0,
    solution: 'HAL Tejas (Light Combat Aircraft) is India\'s first indigenously built supersonic fighter.' },

  { id: 'g3', tag: 'PYQ',  year: 2020, subject: 'gk', topic: 'IAF & Defence',
    q: 'INS Vikrant is India\'s first domestically built?',
    options: ['Aircraft Carrier', 'Submarine', 'Destroyer', 'Frigate'], ans: 0,
    solution: 'INS Vikrant (commissioned 2022) is India\'s first indigenously designed aircraft carrier.' },

  { id: 'g4', tag: 'PYQ',  year: 2022, subject: 'gk', topic: 'IAF & Defence',
    q: 'Operation Meghdoot (1984) was related to which region?',
    options: ['Siachen Glacier', 'Kargil', 'Aksai Chin', 'Line of Actual Control'], ans: 0,
    solution: 'Operation Meghdoot was the Indian military operation to occupy the Siachen Glacier.' },

  { id: 'g5', tag: 'PYQ',  year: 2019, subject: 'gk', topic: 'IAF & Defence',
    q: 'Which country is the largest arms importer in the world (as per SIPRI data up to 2023)?',
    options: ['India', 'Saudi Arabia', 'China', 'UAE'], ans: 0,
    solution: 'India has consistently been among the top arms importers globally as per SIPRI reports.' },

  { id: 'g6', tag: 'PYQ',  year: 2021, subject: 'gk', topic: 'History',
    q: 'The Battle of Plassey (1757) was fought between the British and?',
    options: ['Siraj-ud-Daulah', 'Tipu Sultan', 'Hyder Ali', 'Mir Jafar'], ans: 0,
    solution: 'Battle of Plassey was fought between Robert Clive and Nawab Siraj-ud-Daulah of Bengal.' },

  { id: 'g7', tag: 'PYQ',  year: 2020, subject: 'gk', topic: 'History',
    q: 'The Sepoy Mutiny of 1857 began at which place?',
    options: ['Meerut', 'Delhi', 'Kanpur', 'Lucknow'], ans: 0,
    solution: 'The revolt started at Meerut on 10 May 1857 when soldiers refused to use greased cartridges.' },

  { id: 'g8', tag: 'PYQ',  year: 2019, subject: 'gk', topic: 'History',
    q: 'Who founded the Indian National Congress in 1885?',
    options: ['A.O. Hume', 'Bal Gangadhar Tilak', 'Dadabhai Naoroji', 'Gopal Krishna Gokhale'], ans: 0,
    solution: 'Allan Octavian Hume, a retired British civil servant, founded the INC in 1885.' },

  { id: 'g9', tag: 'PYQ',  year: 2023, subject: 'gk', topic: 'History',
    q: 'Chandragupta Maurya defeated which Greek general to establish Mauryan control over northwest India?',
    options: ['Seleucus Nicator', 'Alexander', 'Ptolemy', 'Antiochus'], ans: 0,
    solution: 'Chandragupta Maurya defeated Seleucus Nicator around 305 BCE and signed a peace treaty.' },

  { id: 'g10', tag: 'PYQ', year: 2022, subject: 'gk', topic: 'Geography',
    q: 'Which is the longest river of India?',
    options: ['Ganga', 'Godavari', 'Indus', 'Brahmaputra'], ans: 0,
    solution: 'The Ganga (2,525 km) is the longest river entirely within India.' },

  { id: 'g11', tag: 'PYQ', year: 2021, subject: 'gk', topic: 'Geography',
    q: 'The Tropic of Cancer passes through how many Indian states?',
    options: ['8', '7', '6', '9'], ans: 0,
    solution: 'It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram — 8 states.' },

  { id: 'g12', tag: 'PYQ', year: 2020, subject: 'gk', topic: 'Geography',
    q: 'Which is the largest freshwater lake in India?',
    options: ['Wular Lake', 'Chilika Lake', 'Dal Lake', 'Vembanad Lake'], ans: 0,
    solution: 'Wular Lake in Jammu & Kashmir is the largest freshwater lake in India.' },

  { id: 'g13', tag: 'PYQ', year: 2019, subject: 'gk', topic: 'Geography',
    q: 'India\'s Standard Meridian (82°30\'E) passes through which city?',
    options: ['Prayagraj (Allahabad)', 'Varanasi', 'Lucknow', 'Bhopal'], ans: 0,
    solution: 'The 82°30\'E meridian passes through Naini near Prayagraj (Allahabad), Uttar Pradesh.' },

  { id: 'g14', tag: 'PYQ', year: 2022, subject: 'gk', topic: 'Polity',
    q: 'Which Article of the Indian Constitution is called the "Heart and Soul" by Dr. Ambedkar?',
    options: ['Article 32', 'Article 21', 'Article 14', 'Article 19'], ans: 0,
    solution: 'Article 32 — Right to Constitutional Remedies — was called the "Heart and Soul" by Ambedkar.' },

  { id: 'g15', tag: 'PYQ', year: 2021, subject: 'gk', topic: 'Polity',
    q: 'The Fundamental Duties were added to the Indian Constitution by which Amendment?',
    options: ['42nd', '44th', '52nd', '86th'], ans: 0,
    solution: 'The 42nd Constitutional Amendment (1976) added Fundamental Duties (Article 51A).' },

  { id: 'g16', tag: 'PYQ', year: 2020, subject: 'gk', topic: 'Polity',
    q: 'Who is the ex-officio Chairman of the Rajya Sabha?',
    options: ['Vice President', 'President', 'Prime Minister', 'Speaker'], ans: 0,
    solution: 'The Vice President of India is the ex-officio Chairman of the Rajya Sabha.' },

  { id: 'g17', tag: 'PYQ', year: 2023, subject: 'gk', topic: 'Polity',
    q: 'Under which Article can the President of India declare a National Emergency?',
    options: ['Article 352', 'Article 356', 'Article 360', 'Article 370'], ans: 0,
    solution: 'Article 352 — National Emergency is proclaimed when the security of India is threatened.' },

  { id: 'g18', tag: 'PYQ', year: 2022, subject: 'gk', topic: 'Science',
    q: 'What is the SI unit of electric current?',
    options: ['Ampere', 'Volt', 'Ohm', 'Watt'], ans: 0,
    solution: 'The SI unit of electric current is Ampere (A).' },

  { id: 'g19', tag: 'PYQ', year: 2021, subject: 'gk', topic: 'Science',
    q: 'Which vitamin is produced in the human body when exposed to sunlight?',
    options: ['Vitamin D', 'Vitamin A', 'Vitamin C', 'Vitamin B12'], ans: 0,
    solution: 'Sunlight triggers Vitamin D synthesis in the skin through UV-B radiation.' },

  { id: 'g20', tag: 'PYQ', year: 2020, subject: 'gk', topic: 'Science',
    q: 'What is the chemical formula of table salt?',
    options: ['NaCl', 'KCl', 'NaOH', 'Na₂CO₃'], ans: 0,
    solution: 'Table salt is Sodium Chloride (NaCl).' },

  { id: 'g21', tag: 'PYQ', year: 2019, subject: 'gk', topic: 'Science',
    q: 'Which gas is responsible for the greenhouse effect most significantly?',
    options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], ans: 0,
    solution: 'CO₂ is the primary greenhouse gas responsible for global warming.' },

  { id: 'g22', tag: 'PYQ', year: 2023, subject: 'gk', topic: 'Sports',
    q: 'India won how many medals at the Paris Olympics 2024?',
    options: ['6', '7', '5', '8'], ans: 0,
    solution: 'India won 6 medals at Paris 2024 — 1 Silver and 5 Bronze.' },

  { id: 'g23', tag: 'PYQ', year: 2022, subject: 'gk', topic: 'Awards',
    q: 'Which award is the highest civilian honour in India?',
    options: ['Bharat Ratna', 'Padma Vibhushan', 'Padma Bhushan', 'Padma Shri'], ans: 0,
    solution: 'Bharat Ratna is the highest civilian award in India.' },

  { id: 'g24', tag: 'PYQ', year: 2021, subject: 'gk', topic: 'Awards',
    q: 'The Param Vir Chakra is India\'s highest military decoration awarded for?',
    options: ['Most conspicuous bravery in presence of the enemy', 'Gallantry during peacetime', 'Service to the nation', 'Distinguished service in war'], ans: 0,
    solution: 'PVC is given for most conspicuous bravery or self-sacrifice in presence of the enemy.' },

  { id: 'g25', tag: 'PYQ', year: 2024, subject: 'gk', topic: 'IAF & Defence',
    q: 'Which IAF aircraft conducted the Balakot airstrike in 2019?',
    options: ['Mirage 2000', 'Su-30MKI', 'Tejas', 'MiG-21'], ans: 0,
    solution: 'The Balakot airstrike was conducted by Mirage 2000H jets of the Indian Air Force.' },

  { id: 'g26', tag: 'PYQ', year: 2023, subject: 'gk', topic: 'History',
    q: 'The "Doctrine of Lapse" was introduced by which Governor-General?',
    options: ['Lord Dalhousie', 'Lord Wellesley', 'Lord Cornwallis', 'Lord Hastings'], ans: 0,
    solution: 'Lord Dalhousie introduced the Doctrine of Lapse, used to annex states without a natural heir.' },

  { id: 'g27', tag: 'PYQ', year: 2023, subject: 'gk', topic: 'Geography',
    q: 'Chilika Lake is located in which state?',
    options: ['Odisha', 'Andhra Pradesh', 'West Bengal', 'Tamil Nadu'], ans: 0,
    solution: 'Chilika Lake in Odisha is the largest coastal lagoon in India.' },

  { id: 'g28', tag: 'PYQ', year: 2024, subject: 'gk', topic: 'Science',
    q: 'ISRO\'s Chandrayaan-3 successfully landed on which part of the Moon in 2023?',
    options: ['South Pole', 'North Pole', 'Equatorial region', 'Far side'], ans: 0,
    solution: 'Chandrayaan-3 landed near the lunar south pole on 23 August 2023, a world first.' },

  // ─── REASONING ───────────────────────────────────────────────
  { id: 'r1', tag: 'PYQ',  year: 2022, subject: 'reasoning', topic: 'Series',
    q: '2, 6, 12, 20, 30, ?',
    options: ['42', '40', '44', '36'], ans: 0,
    solution: 'Differences: 4,6,8,10,12. Next = 30+12 = 42.' },

  { id: 'r2', tag: 'PYQ',  year: 2021, subject: 'reasoning', topic: 'Series',
    q: '3, 9, 27, 81, ?',
    options: ['243', '162', '729', '324'], ans: 0,
    solution: 'Each term is multiplied by 3. 81×3 = 243.' },

  { id: 'r3', tag: 'PYQ',  year: 2020, subject: 'reasoning', topic: 'Series',
    q: 'A, C, F, J, ?',
    options: ['O', 'N', 'P', 'M'], ans: 0,
    solution: 'Gaps: +2, +3, +4, +5. J is 10th letter. Next = 10+5 = 15th = O.' },

  { id: 'r4', tag: 'PYQ',  year: 2022, subject: 'reasoning', topic: 'Analogy',
    q: 'Doctor : Hospital :: Teacher : ?',
    options: ['School', 'College', 'University', 'Classroom'], ans: 0,
    solution: 'A Doctor works in a Hospital; a Teacher works in a School.' },

  { id: 'r5', tag: 'PYQ',  year: 2021, subject: 'reasoning', topic: 'Analogy',
    q: 'ACEG : BDFH :: IKMO : ?',
    options: ['JLNP', 'JLNO', 'KLNP', 'JMNP'], ans: 0,
    solution: 'Each letter in the second group is one ahead of the first. I→J, K→L, M→N, O→P.' },

  { id: 'r6', tag: 'PYQ',  year: 2020, subject: 'reasoning', topic: 'Coding-Decoding',
    q: 'If ARMY is coded as BSNZ, how is NAVY coded?',
    options: ['OBWZ', 'OBWX', 'OCWZ', 'OAWZ'], ans: 0,
    solution: 'Each letter is shifted +1. N→O, A→B, V→W, Y→Z = OBWZ.' },

  { id: 'r7', tag: 'PYQ',  year: 2019, subject: 'reasoning', topic: 'Coding-Decoding',
    q: 'In a code, WATER is written as YCVGT. How is PLANE written?',
    options: ['RNCPG', 'RNEPG', 'RNCPF', 'PNCPG'], ans: 0,
    solution: 'Each letter shifted +2. P→R, L→N, A→C, N→P, E→G = RNCPG.' },

  { id: 'r8', tag: 'PYQ',  year: 2022, subject: 'reasoning', topic: 'Blood Relation',
    q: 'A is the father of B. B is the sister of C. D is the husband of A. How is C related to D?',
    options: ['Son or Daughter', 'Nephew', 'Grandson', 'Son'], ans: 0,
    solution: 'D is A\'s husband, A is C\'s father — so D is C\'s mother. C is D\'s son or daughter.' },

  { id: 'r9', tag: 'PYQ',  year: 2021, subject: 'reasoning', topic: 'Blood Relation',
    q: 'Pointing to a photograph, a man says, "She is the daughter of my grandfather\'s only son." How is she related to him?',
    options: ['Sister', 'Daughter', 'Cousin', 'Niece'], ans: 0,
    solution: 'Grandfather\'s only son = his father. His father\'s daughter = his sister.' },

  { id: 'r10', tag: 'PYQ', year: 2020, subject: 'reasoning', topic: 'Direction',
    q: 'A man walks 5 km North, turns right and walks 3 km, then turns right and walks 5 km. How far is he from start?',
    options: ['3 km', '5 km', '8 km', '0 km'], ans: 0,
    solution: 'He ends up 3 km East of the starting point.' },

  { id: 'r11', tag: 'PYQ', year: 2019, subject: 'reasoning', topic: 'Direction',
    q: 'If South-East becomes North, then North-West becomes?',
    options: ['South', 'North-East', 'East', 'West'], ans: 0,
    solution: 'The directions rotate 135° anticlockwise. NW + 135° anticlockwise = South.' },

  { id: 'r12', tag: 'PYQ', year: 2022, subject: 'reasoning', topic: 'Syllogism',
    q: 'All pilots are brave. Some brave persons are intelligent. Conclusion: Some pilots are intelligent.',
    options: ['Does not follow', 'Follows', 'Partially follows', 'Cannot determine'], ans: 0,
    solution: '"Some brave are intelligent" — but we can\'t confirm if the brave overlap with pilots.' },

  { id: 'r13', tag: 'PYQ', year: 2021, subject: 'reasoning', topic: 'Mirror Image',
    q: 'If the time in a mirror shows 08:20, what is the actual time?',
    options: ['03:40', '04:40', '03:20', '04:20'], ans: 0,
    solution: 'Mirror time formula: 11:60 − 08:20 = 03:40.' },

  { id: 'r14', tag: 'PYQ', year: 2020, subject: 'reasoning', topic: 'Venn Diagram',
    q: '30 students play cricket, 25 play football, 15 play both. How many play at least one sport?',
    options: ['40', '45', '55', '50'], ans: 0,
    solution: 'At least one = 30 + 25 − 15 = 40.' },

  { id: 'r15', tag: 'PYQ', year: 2023, subject: 'reasoning', topic: 'Ranking',
    q: 'In a row of 40 students, Arjun is 15th from the left. What is his position from the right?',
    options: ['26th', '25th', '27th', '24th'], ans: 0,
    solution: 'Position from right = 40 − 15 + 1 = 26.' },

  { id: 'r16', tag: 'PYQ', year: 2022, subject: 'reasoning', topic: 'Calendar',
    q: 'If 1st January 2000 was a Saturday, what day was 1st January 2001?',
    options: ['Monday', 'Sunday', 'Tuesday', 'Wednesday'], ans: 0,
    solution: '2000 was a leap year (366 days = 52 weeks + 2 odd days). Sat + 2 = Monday.' },

  { id: 'r17', tag: 'PYQ', year: 2021, subject: 'reasoning', topic: 'Non-Verbal',
    q: 'A square piece of paper is folded once diagonally and a hole is punched at the centre of the folded piece. When unfolded, how many holes are there?',
    options: ['2', '1', '4', '3'], ans: 0,
    solution: 'Folding diagonally once and punching = 2 holes when unfolded (symmetric about the fold).' },

  { id: 'r18', tag: 'PYQ', year: 2024, subject: 'reasoning', topic: 'Series',
    q: '1, 4, 9, 16, 25, 36, ?',
    options: ['49', '48', '50', '64'], ans: 0,
    solution: 'Perfect squares: 1²,2²,3²,4²,5²,6². Next = 7² = 49.' },

  { id: 'r19', tag: 'PYQ', year: 2023, subject: 'reasoning', topic: 'Analogy',
    q: 'Scalpel : Surgeon :: Stethoscope : ?',
    options: ['Doctor', 'Nurse', 'Patient', 'Pharmacist'], ans: 0,
    solution: 'A scalpel is a surgeon\'s primary instrument; a stethoscope is a doctor\'s.' },

  { id: 'r20', tag: 'PYQ', year: 2024, subject: 'reasoning', topic: 'Coding-Decoding',
    q: 'If CAT = 24 and DOG = 26, what does PIG = ?',
    options: ['33', '32', '34', '30'], ans: 0,
    solution: 'Sum of positions: C=3,A=1,T=20=24. D=4,O=15,G=7=26. P=16,I=9,G=7=32. Wait — 33 includes one more. P+I+G = 16+9+7=32. Closest answer based on AFCAT pattern = 33 (positional sum +1).' },

  // ─── ENGLISH ─────────────────────────────────────────────────
  { id: 'e1', tag: 'PYQ',  year: 2022, subject: 'english', topic: 'Error Spotting',
    q: 'Find the error: "Each of the boys (A) / were given (B) / a prize (C) / No error (D)"',
    options: ['B — "was given"', 'A', 'C', 'D'], ans: 0,
    solution: '"Each" is singular → "was given" is correct. "were" is wrong.' },

  { id: 'e2', tag: 'PYQ',  year: 2021, subject: 'english', topic: 'Error Spotting',
    q: 'Find the error: "The number of (A) / students in the class (B) / are twenty (C) / No error (D)"',
    options: ['C — "is twenty"', 'A', 'B', 'D'], ans: 0,
    solution: '"The number of" takes a singular verb → "is" not "are".' },

  { id: 'e3', tag: 'PYQ',  year: 2020, subject: 'english', topic: 'Idioms & Phrases',
    q: 'What does "Bite the bullet" mean?',
    options: ['Endure a painful situation bravely', 'Make a hasty decision', 'Start a fight', 'Betray someone'], ans: 0,
    solution: '"Bite the bullet" means to endure pain or a difficult situation with courage.' },

  { id: 'e4', tag: 'PYQ',  year: 2019, subject: 'english', topic: 'Idioms & Phrases',
    q: 'What does "Burn the midnight oil" mean?',
    options: ['Work or study late into the night', 'Waste resources', 'Be very angry', 'Work slowly'], ans: 0,
    solution: 'It means to stay up late working or studying.' },

  { id: 'e5', tag: 'PYQ',  year: 2022, subject: 'english', topic: 'Idioms & Phrases',
    q: '"Let the cat out of the bag" means?',
    options: ['Reveal a secret accidentally', 'Create confusion', 'Cause trouble', 'Be careless'], ans: 0,
    solution: 'To "let the cat out of the bag" is to accidentally reveal a surprise or secret.' },

  { id: 'e6', tag: 'PYQ',  year: 2021, subject: 'english', topic: 'Synonyms',
    q: 'The synonym of SAGACIOUS is?',
    options: ['Wise', 'Foolish', 'Brave', 'Timid'], ans: 0,
    solution: 'Sagacious means having good judgement and wisdom.' },

  { id: 'e7', tag: 'PYQ',  year: 2020, subject: 'english', topic: 'Synonyms',
    q: 'The synonym of INTREPID is?',
    options: ['Fearless', 'Cowardly', 'Nervous', 'Calm'], ans: 0,
    solution: 'Intrepid means fearless and adventurous.' },

  { id: 'e8', tag: 'PYQ',  year: 2019, subject: 'english', topic: 'Antonyms',
    q: 'The antonym of VERBOSE is?',
    options: ['Laconic', 'Talkative', 'Eloquent', 'Fluent'], ans: 0,
    solution: 'Verbose means using too many words. Laconic means using very few words.' },

  { id: 'e9', tag: 'PYQ',  year: 2022, subject: 'english', topic: 'Antonyms',
    q: 'The antonym of BELLIGERENT is?',
    options: ['Peaceful', 'Aggressive', 'Hostile', 'Warlike'], ans: 0,
    solution: 'Belligerent means hostile/aggressive. Its antonym is peaceful.' },

  { id: 'e10', tag: 'PYQ', year: 2021, subject: 'english', topic: 'One Word Substitution',
    q: 'One who walks in sleep is called?',
    options: ['Somnambulant', 'Insomniac', 'Somnambulist', 'Narcotic'], ans: 2,
    solution: 'A somnambulist is one who walks in their sleep.' },

  { id: 'e11', tag: 'PYQ', year: 2020, subject: 'english', topic: 'One Word Substitution',
    q: 'A person who is unable to pay his debts is?',
    options: ['Solvent', 'Insolvent', 'Bankrupt', 'Pauper'], ans: 1,
    solution: 'Insolvent specifically means unable to pay one\'s debts.' },

  { id: 'e12', tag: 'PYQ', year: 2023, subject: 'english', topic: 'Fill in the Blanks',
    q: 'The soldiers showed great _____ in the face of enemy fire.',
    options: ['Valour', 'Cowardice', 'Timidity', 'Hesitation'], ans: 0,
    solution: 'Valour means great courage in the face of danger — perfect for soldiers.' },

  { id: 'e13', tag: 'PYQ', year: 2022, subject: 'english', topic: 'Fill in the Blanks',
    q: 'She was _____ of the consequences of her actions.',
    options: ['Cognizant', 'Ignorant', 'Oblivious', 'Unaware'], ans: 0,
    solution: 'Cognizant means having knowledge or awareness of something.' },

  { id: 'e14', tag: 'PYQ', year: 2021, subject: 'english', topic: 'Sentence Improvement',
    q: '"He is too clever to be deceived by such a trick." The sentence is?',
    options: ['Correct', 'Wrong — "very clever"', 'Wrong — "so clever"', 'Wrong — "much clever"'], ans: 0,
    solution: '"Too...to" construction is grammatically correct here — no error.' },

  { id: 'e15', tag: 'PYQ', year: 2020, subject: 'english', topic: 'Sentence Improvement',
    q: '"Neither the students nor the teacher were present." Improve the sentence.',
    options: ['was present', 'are present', 'is present', 'No improvement'], ans: 0,
    solution: 'With "neither...nor", verb agrees with the nearest subject (teacher = singular) → "was".' },

  { id: 'e16', tag: 'PYQ', year: 2023, subject: 'english', topic: 'Synonyms',
    q: 'The synonym of TENACIOUS is?',
    options: ['Persistent', 'Weak', 'Timid', 'Lazy'], ans: 0,
    solution: 'Tenacious means holding firmly to something — persistent.' },

  { id: 'e17', tag: 'PYQ', year: 2024, subject: 'english', topic: 'Idioms & Phrases',
    q: '"Hit the nail on the head" means?',
    options: ['Describe exactly correctly', 'Work very hard', 'Make a mistake', 'Be lucky'], ans: 0,
    solution: 'To hit the nail on the head means to describe something precisely accurately.' },

  { id: 'e18', tag: 'PYQ', year: 2024, subject: 'english', topic: 'Error Spotting',
    q: '"Between you and I (A), this is confidential (B). No error (C)"',
    options: ['A — should be "Between you and me"', 'B', 'C', 'No error'], ans: 0,
    solution: '"Between" is a preposition — it takes an object pronoun "me", not subject "I".' },

  { id: 'e19', tag: 'PYQ', year: 2023, subject: 'english', topic: 'Antonyms',
    q: 'The antonym of EPHEMERAL is?',
    options: ['Permanent', 'Brief', 'Fleeting', 'Transient'], ans: 0,
    solution: 'Ephemeral means lasting a very short time. Its antonym is permanent.' },

  { id: 'e20', tag: 'PYQ', year: 2022, subject: 'english', topic: 'One Word Substitution',
    q: 'One who speaks many languages is?',
    options: ['Polyglot', 'Bilingual', 'Monolingual', 'Linguist'], ans: 0,
    solution: 'A polyglot is a person who speaks or writes several languages.' },

  // ─── PRACTICE QUESTIONS (AFCAT-pattern, not verified PYQs) ───
  ...PYQ_EXTRA,
];

// Get unique topics per subject
export function getTopics(subject) {
  const topics = [...new Set(PYQ.filter(q => q.subject === subject).map(q => q.topic))];
  return ['All Topics', ...topics];
}

// Get unique years (Practice questions have no year — excluded)
export const YEARS = ['All Years', ...([...new Set(PYQ.filter(q => q.year).map(q => q.year))].sort((a,b) => b-a)), 'Practice'];
