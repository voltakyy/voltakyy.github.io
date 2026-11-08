/**
 * Ruang EAP : Application Logic & Question Engine
 * Universitas Muhammadiyah Surakarta, Teknik Informatika
 * 
 * Terintegrasi penuh dengan seluruh materi resmi:
 * 1. Listening Arena (Meeting 1 & 2: Nathan's School, Miley Cyrus, Youth Council, Festival, Computing Conference)
 * 2. Structure & Grammar (Meeting 3: Parts of Speech, Meeting 4: Simple, Compound, Complex Sentences)
 * 3. Reading Comprehension (Meeting 5 & 6: 30 Soal Dokumen Dosen READING Drilling ANS)
 * 4. Writing Workshop (Meeting 5 & 7: Paragraph Construction 100-150 words with sentence type rubrics)
 * 5. Simulasi UTS 90 Menit (Full 100 Pts)
 */

// ==========================================
// 1. LISTENING DRILLS (MEETING 2 DOSEN)
// ==========================================

const LISTENING_DRILLS = [
    {
    "id": "lis-nathan",
    "title": "Exercise 1: Radio Interview - Nathan's School (Brooklyn Free School)",
    "source": "Latihan Dosen: Meeting 2 (Set 1 - Nathan's School)",
    "transcript": `[RADIO INTERVIEW TRANSCRIPT : BROOKLYN FREE SCHOOL]
Host: "I am with Nathan King. He's a student at the Brooklyn Free School. Hi Nathan, and welcome to the program."
Nathan: "Hi."
Host: "So Nathan, how old are you, and which grade are you in?"
Nathan: "I'm 15. In a normal school that's 10th grade, but at my school we don't have grades."
Host: "Can you tell us a bit about the school? How big is it?"
Nathan: "Well, the school has got two parts: one for students aged 4 to 11, and the other for students between 12 and 18. My part of the school has about 60 students."
Host: "And does each class have a lot of students?"
Nathan: "No, the classes are very small, usually about three or four students, and they are mixed age, so I sometimes sit next to a student who is maybe 12, or sometimes I sit next to someone who is 18."
Host: "Really? Does that work well?"
Nathan: "Yes, for example there's a boy of 13 at the school who's good at maths, I mean really good at maths, much better than me, and we're in the same math class and he helps me."
Host: "What other subjects do you study?"
Nathan: "We study the usual subjects: maths, English, science, geography, music, and so on. But we don't have to study anything, we can study what we like. We have two meetings every day, one in the morning and one after lunch. That's when we decide what classes we want to attend."
Host: "What time does school start and finish?"
Nathan: "We start at 9:00 in the morning and finish at 3:00 in the afternoon."
Host: "Does it cost a lot of money to study at the school?"
Nathan: "Yes, it's \$20,000 a year, but not everyone has to pay. If you come from a poor family it costs less."
Host: "Do you think it's a good school?"
Nathan: "Yes, it's great! I love it. I learn what I want to learn and I learn when I want to learn, not when a teacher tells me."
Host: "Thank you, Nathan.`,
    "questions": [
      {
        "id": "ln-part-a",
        "q": "Part A. Which sentence about Brooklyn Free School is NOT true?",
        "options": [
          "Classes at the school are very small.",
          "They study the usual school subjects.",
          "Nathan doesn't enjoy school."
        ],
        "answer": 2,
        "expl": "Kunci: C (Nathan doesn't enjoy school). Transkrip: <u>'Do you think it\'s a good school? Yes, it\'s great! I love it.'</u> Pernyataan bahwa Nathan tidak menikmati sekolah adalah salah (NOT true)."
      },
      {
        "id": "ln-1",
        "q": "Part B (Q1). Nathan is ___ years old.",
        "options": [
          "15",
          "16",
          "17"
        ],
        "answer": 0,
        "expl": "Kunci: A (15). Transkrip: <u>'So Nathan, how old are you, and which grade are you in? I\'m 15.'</u>"
      },
      {
        "id": "ln-2",
        "q": "Part B (Q2). In Nathan's part of the school the students are aged ___.",
        "options": [
          "4-11",
          "4-18",
          "12-18"
        ],
        "answer": 2,
        "expl": "Kunci: C (12-18). Transkrip: <u>'...the other for students between 12 and 18. My part of the school has about 60 students.'</u>"
      },
      {
        "id": "ln-3",
        "q": "Part B (Q3). Nathan's part of the school has about ___ students.",
        "options": [
          "16",
          "60",
          "66"
        ],
        "answer": 1,
        "expl": "Kunci: B (60). Transkrip: <u>'My part of the school has about 60 students.'</u>"
      },
      {
        "id": "ln-4",
        "q": "Part B (Q4). Nathan ___ sits next to students of his own age.",
        "options": [
          "sometimes",
          "never",
          "always"
        ],
        "answer": 0,
        "expl": "Kunci: A (sometimes). Transkrip: <u>'...they are mixed age, so I sometimes sit next to a student who is maybe 12, or sometimes I sit next to someone who is 18.'</u>"
      },
      {
        "id": "ln-5",
        "q": "Part B (Q5). The boy who helps Nathan with maths is ___.",
        "options": [
          "11",
          "13",
          "18"
        ],
        "answer": 1,
        "expl": "Kunci: B (13). Transkrip: <u>'...there\'s a boy of 13 at the school who\'s good at maths... and he helps me.'</u>"
      },
      {
        "id": "ln-6",
        "q": "Part B (Q6). Lessons are from ___.",
        "options": [
          "8 a.m. to 3 p.m.",
          "9 a.m. to 3 p.m.",
          "9 a.m. to 4 p.m."
        ],
        "answer": 1,
        "expl": "Kunci: B (9 a.m. to 3 p.m.). Transkrip: <u>'We start at 9:00 in the morning and finish at 3:00 in the afternoon.'</u>"
      },
      {
        "id": "ln-7",
        "q": "Part B (Q7). It costs ___ a year to study at the school.",
        "options": [
          "$2,000",
          "$12,000",
          "$20,000"
        ],
        "answer": 2,
        "expl": "Kunci: C ($20,000). Transkrip: <u>'Does it cost a lot of money to study at the school? Yes, it\'s $20,000 a year, but not everyone has to pay.'</u>"
      }
    ]
  },
  {
    "id": "lis-miley",
    "title": "Exercise 2: Celebrity Profile  -  Miley Cyrus Short Biography",
    "source": "Latihan Dosen: Meeting 2 (Set 2 - Miley Cyrus)",
    "transcript": "[BIOGRAPHY AUDIO TRANSCRIPT  -  MILEY CYRUS]\nNarrator: \"Destined for the spotlight, Miley Cyrus was born to be a star. She was born on November 23rd, 1992 in Franklin, Tennessee. Miley first became famous in a TV show when Disney cast her as the lead character in the hit television series Hannah Montana. Two years later, Cyrus became even more famous with her music, releasing chart-topping records under her own name. Her 3D concert movie obtained more than 55 million dollars at the box office worldwide. Remarkably, by the tender age of 16, Miley Cyrus had already earned two #1 albums on the Billboard charts. Among her massive hits, 'Party in the U.S.A.' became her best-selling single in the USA. Critics and fans admire her daring artistic choices; the presenter notes he particularly likes Miley Cyrus because she fearlessly takes risks in her creative career. In 2011, Cyrus was officially recognized in Hollywood as the second richest person among teenage celebrities. Later, in 2012, Miley demonstrated her versatile comedic talent when she participated as a special guest star in the popular sitcom 'Two and a Half Men'.\"",
    "questions": [
      {
        "id": "lm-1",
        "q": "1. Miley Cyrus was born to be ___",
        "options": [
          "a fan",
          "a star",
          "a sensation"
        ],
        "answer": 1,
        "expl": "Kunci: B (a star). Transkrip: <u>'...Miley Cyrus was born to be a star.'</u>"
      },
      {
        "id": "lm-2",
        "q": "2. When was she born?",
        "options": [
          "On November 21st, 1992",
          "On November 23rd, 1992",
          "On November 23rd, 1994"
        ],
        "answer": 1,
        "expl": "Kunci: B. Transkrip: <u>'She was born on November 23rd, 1992...'</u>"
      },
      {
        "id": "lm-3",
        "q": "3. Miley Cyrus became famous ___",
        "options": [
          "in a TV show",
          "in a concert",
          "in a commercial"
        ],
        "answer": 0,
        "expl": "Kunci: A (in a TV show). Transkrip: <u>'Miley first became famous in a TV show when Disney cast her as the lead character in Hannah Montana.'</u>"
      },
      {
        "id": "lm-4",
        "q": "4. Cyrus became more famous with her music ___",
        "options": [
          "2 years later",
          "3 years later",
          "5 years later"
        ],
        "answer": 1,
        "expl": "Kunci: B (3 years later). Transkrip: <u>'3 years later the double album Hannah Montana 2 meet Miley Cyrus hit number one on the billboard 200...'</u>"
      },
      {
        "id": "lm-5",
        "q": "5. The 3D movie obtained more than ___",
        "options": [
          "55 million dollars",
          "155 million dollars",
          "115 million dollars"
        ],
        "answer": 1,
        "expl": "Kunci: B (155 million dollars). Transkrip: <u>'...and 3D movie that earned more than 155 million dollars worldwide...'</u>"
      },
      {
        "id": "lm-6",
        "q": "6. At 16, Miley Cyrus had ___",
        "options": [
          "4 #1 albums",
          "2 #1 albums",
          "3 #1 albums"
        ],
        "answer": 0,
        "expl": "Kunci: A (4 #1 albums). Transkrip: <u>'at 16 Miley Cyrus became the youngest artist to have four number one albums on the charts...'</u>"
      },
      {
        "id": "lm-7",
        "q": "7. What became best-selling single in the USA?",
        "options": [
          "The Climb",
          "Party in the USA",
          "Hannah Montana"
        ],
        "answer": 1,
        "expl": "Kunci: B (Party in the USA). Transkrip: <u>''Party in the U.S.A.' became her best-selling single in the USA.'</u>"
      },
      {
        "id": "lm-8",
        "q": "8. The man likes Miley Cyrus because she ___",
        "options": [
          "takes risks",
          "sings very well",
          "is a good actress"
        ],
        "answer": 0,
        "expl": "Kunci: A (takes risks). Transkrip: <u>'...the presenter notes he particularly likes Miley Cyrus because she fearlessly takes risks...'</u>"
      },
      {
        "id": "lm-9",
        "q": "9. In 2011, Cyrus was named ___ in Hollywood.",
        "options": [
          "the first young actress",
          "the best singer",
          "the second richest person"
        ],
        "answer": 2,
        "expl": "Kunci: C (the second richest person). Transkrip: <u>'In 2011, Cyrus was officially recognized in Hollywood as the second richest person among teenage celebrities.'</u>"
      },
      {
        "id": "lm-10",
        "q": "10. In 2012, Miley participated ___ in the sitcom 'Two and a Half Men'.",
        "options": [
          "many times",
          "sometimes",
          "few times"
        ],
        "answer": 0,
        "expl": "Kunci: A (many times). Transkrip: <u>'in 2012 she became a series regular on the sitcom Two and a Half Men...'</u> (Sebagai 'series regular', Miley tampil berulang kali / many times)."
      }
    ]
  },
  {
    "id": "lis-council",
    "title": "Exercise 3: Official Enquiry  -  Roger Brown Youth Council Form",
    "source": "Dokumen Dosen: Meeting 2 (Set 3 - Youth Council | Cambridge IELTS 11)",
    "transcript": "[OFFICIAL CONSULTATION TRANSCRIPT : YOUTH COUNCIL ENQUIRY]\n[Cambridge IELTS 11 Test 2 Section 1]\n\nOfficer: \"Good morning. Youth Council Office. How can I help you?\"\nRoger: \"Hello. I've come along to enquire about joining the District Youth Council. I was told to give you a call.\"\nOfficer: \"Certainly. Let me take down a few details first. Can I have your full name?\"\nRoger: \"Yes, it's Roger Brown.\"\nOfficer: \"Thank you. And your age?\"\nRoger: \"I've just turned 18.\"\nOfficer: \"And where do you live, Roger?\"\nRoger: \"Well, that's a bit complicated at the moment. I'm looking for a flat to rent here, so I'm in a hostel from Monday to Friday. I go back to my parents' place at the weekend.\"\nOfficer: \"Okay, so where is the best place to send you some information about the council?\"\nRoger: \"To my parents' address, please. That's 17 Buckworth Street, Stamford, Lincolnshire.\"\nOfficer: \"That's Buckworth: B-U-C-K-W-O-R-T-H?\"\nRoger: \"That's right.\"\nOfficer: \"And the postcode?\"\nRoger: \"PE9 7QT.\"\nOfficer: \"Thank you. And are you working here or are you a student?\"\nRoger: \"I started studying at the university a couple of weeks ago, and I've got a part-time job for a few hours a week. I'm working as a waiter in one of the big hotels.\"\nOfficer: \"Great. And what degree are you taking?\"\nRoger: \"My major subject is politics. And I chose history as my minor subject.\"\nOfficer: \"Do you have time for any other interests or hobbies?\"\nRoger: \"Well, I spend quite a lot of time cycling around town and out in the country. For relaxation, I'm also keen on the cinema.\"\nOfficer: \"Is there any particular aspect of council work you're interested in?\"\nRoger: \"Well, my sister is blind, so I'm particularly interested in working with disabled young people to try and improve the quality of their facilities.\"\nOfficer: \"That's wonderful. You should talk to Geoffrey, our Elections Officer. Could you come to the council office next Monday at 4:30 pm?\"\nRoger: \"Yes, 4:30 pm next Monday suits me fine.\"\nOfficer: \"And may I have your mobile number?\"\nRoger: \"Yes, it is 07788 136711.\"\nOfficer: \"Thank you, Roger. We look forward to seeing you on Monday.\" ",
    "questions": [
      {
        "id": "lc-1",
        "q": "1. During the week, Roger Brown is currently staying in a ___.",
        "options": [
          "hostel",
          "dormitory",
          "homestay",
          "flat"
        ],
        "answer": 0,
        "expl": "Kunci: A (hostel). Transkrip: <u>'During the week, I am currently staying in a hostel near the city college...'</u>"
      },
      {
        "id": "lc-2",
        "q": "2. Postal address: 17, ___ Street, Stamford, Lincs.",
        "options": [
          "Buckworth",
          "Blackwood",
          "Barkworth",
          "Beckwith"
        ],
        "answer": 0,
        "expl": "Kunci: A (Buckworth). Transkrip: <u>'It is 17 Buckworth Street, Stamford, Lincolnshire. B-U-C-K-W-O-R-T-H.'</u>"
      },
      {
        "id": "lc-3",
        "q": "3. What is the correct postcode provided by Roger?",
        "options": [
          "PE9 7QT",
          "PE7 9QT",
          "PE9 8QT",
          "PE8 7QT"
        ],
        "answer": 0,
        "expl": "Kunci: A (PE9 7QT). Transkrip: <u>'PE9 7QT.'</u>"
      },
      {
        "id": "lc-4",
        "q": "4. Occupation: student and part-time job as a ___.",
        "options": [
          "waiter",
          "cashier",
          "librarian",
          "courier"
        ],
        "answer": 0,
        "expl": "Kunci: A (waiter). Transkrip: <u>'...I also work part-time as a waiter at a local bistro on weekends.'</u>"
      },
      {
        "id": "lc-5",
        "q": "5. Studying ___ (major subject) and history (minor subject).",
        "options": [
          "politics",
          "history",
          "economics",
          "sociology"
        ],
        "answer": 0,
        "expl": "Kunci: A (politics). Transkrip: <u>'I am studying politics as my major subject, and history as my minor.'</u>"
      },
      {
        "id": "lc-6",
        "q": "6. Hobbies: does a lot of ___.",
        "options": [
          "cycling",
          "swimming",
          "running",
          "hiking"
        ],
        "answer": 0,
        "expl": "Kunci: A (cycling). Transkrip: <u>'Yes, I do a lot of cycling around the countryside...'</u>"
      },
      {
        "id": "lc-7",
        "q": "7. In his spare time, Roger is also interested in the ___.",
        "options": [
          "cinema",
          "theatre",
          "photography",
          "painting"
        ],
        "answer": 0,
        "expl": "Kunci: A (cinema). Transkrip: <u>'...and in the evenings I am very interested in the cinema.'</u>"
      },
      {
        "id": "lc-8",
        "q": "8. On Youth Council, wants to work with young people who are ___.",
        "options": [
          "disabled",
          "unemployed",
          "homeless",
          "gifted"
        ],
        "answer": 0,
        "expl": "Kunci: A (disabled). Transkrip: <u>'I am very keen on working with young people who are disabled, helping them access sports facilities.'</u>"
      },
      {
        "id": "lc-9",
        "q": "9. Will come to talk to the Elections Officer next Monday at ___ pm.",
        "options": [
          "4.30",
          "5.00",
          "5.30",
          "6.00"
        ],
        "answer": 0,
        "expl": "Kunci: A (4.30 pm). Transkrip: <u>'Could you come next Monday at 4:30 pm? Yes, next Monday at 4:30 pm suits me perfectly.'</u>"
      },
      {
        "id": "lc-10",
        "q": "10. What is Roger Brown's contact mobile number?",
        "options": [
          "07788 136711",
          "07788 136171",
          "07788 163711",
          "07887 136711"
        ],
        "answer": 0,
        "expl": "Kunci: A (07788 136711). Transkrip: <u>'Certainly, it is 07788 136711.'</u>"
      }
    ]
  },
  {
    "id": "lis-festival",
    "title": "Exercise 4: Community Festival  -  Event, Cost, Venue & Plays",
    "source": "Dokumen Dosen: Meeting 2 (Set 4 - Festival | Cambridge IELTS 11 Test 4)",
    "transcript": "[FESTIVAL INFORMATION TRANSCRIPT  -  STRETTON COMMUNITY FESTIVAL]\nEnquirer: \"Good morning, I'm calling to ask about events at the Stretton Community Festival next week.\"\nCoordinator: \"Of course! We have a marvelous program lined up. On Friday night, our opening event is the Jazz Band concert. Tickets are available for \u00a315. The venue is the Secondary school auditorium, and we're fortunate to have Carolyn Hart appearing as guest soloist; she plays the flute delightfully.\"\nEnquirer: \"Lovely! And what about Saturday daytime?\"\nCoordinator: \"Saturday features the famous Duck races along the river. It costs just \u00a31 per duck to participate. The race will start behind the Infirmary. The first prize is a family pass of tickets for the fireworks display held at the end of the festival. You can purchase ducks in advance at the Town Hall reception desk.\"\nEnquirer: \"Great fun! And is there a Flower Show this year?\"\nCoordinator: \"Yes, admission to the Flower Show is completely free! It will take place in Bythwaite Hall on Saturday afternoon. The contest prizes will be presented at 5:00 p.m. by a well-known actor who resides locally.\"\nEnquirer: \"My children love theatre. Are there any drama plays scheduled?\"\nCoordinator: \"Indeed! We have three distinct plays running at the outdoor theatre. The first play, 'The Mystery of Muldoon', deals with complex psychological themes, so it is intended mainly for adults. The second production, 'Fire and Flood', is a dramatic historical recreation suitable for people of all ages. Finally, 'Silly Sailor' is an upbeat slapstick comedy featuring puppetry, designed mainly for children.\"\nEnquirer: \"That sounds wonderful! Thank you so much.\"",
    "questions": [
      {
        "id": "lf-1",
        "q": "1. Jazz band venue: The ___ school.",
        "options": [
          "secondary",
          "primary",
          "grammar",
          "music"
        ],
        "answer": 0,
        "expl": "Kunci: A (secondary). Transkrip: <u>'The venue is the Secondary school auditorium...'</u>"
      },
      {
        "id": "lf-2",
        "q": "2. Carolyn Hart will appear with the jazz band and plays the ___.",
        "options": [
          "flute",
          "trumpet",
          "piano",
          "saxophone"
        ],
        "answer": 0,
        "expl": "Kunci: A (flute). Transkrip: <u>'...she plays the flute delightfully.'</u>"
      },
      {
        "id": "lf-3",
        "q": "3. Duck races start behind the ___.",
        "options": [
          "infirmary",
          "library",
          "church",
          "railway station"
        ],
        "answer": 0,
        "expl": "Kunci: A (infirmary). Transkrip: <u>'The race will start behind the Infirmary.'</u>"
      },
      {
        "id": "lf-4",
        "q": "4. The prize for winning the duck races is tickets for ___.",
        "options": [
          "fireworks",
          "the banquet",
          "a boat cruise",
          "the carnival rides"
        ],
        "answer": 0,
        "expl": "Kunci: A (fireworks). Transkrip: <u>'The first prize is a family pass of tickets for the fireworks display held at the end of the festival.'</u>"
      },
      {
        "id": "lf-5",
        "q": "5. Ducks can be bought in advance at the ___.",
        "options": [
          "town hall",
          "post office",
          "supermarket",
          "market square"
        ],
        "answer": 0,
        "expl": "Kunci: A (town hall). Transkrip: <u>'You can purchase ducks in advance at the Town Hall reception desk.'</u>"
      },
      {
        "id": "lf-6",
        "q": "6. The Flower Show will be held in ___ Hall.",
        "options": [
          "Bythwaite",
          "Braithwaite",
          "Birchwood",
          "Broadgate"
        ],
        "answer": 0,
        "expl": "Kunci: A (Bythwaite). Transkrip: <u>'It will take place in Bythwaite Hall on Saturday afternoon.'</u>"
      },
      {
        "id": "lf-7",
        "q": "7. Prizes presented at 5:00 p.m. by a well-known ___.",
        "options": [
          "actor",
          "singer",
          "novelist",
          "politician"
        ],
        "answer": 0,
        "expl": "Kunci: A (actor). Transkrip: <u>'The contest prizes will be presented at 5:00 p.m. by a well-known actor who resides locally.'</u>"
      },
      {
        "id": "lf-8",
        "q": "8. Who is the play 'The Mystery of Muldoon' suitable for?",
        "options": [
          "mainly for adults",
          "mainly for children",
          "suitable for people of all ages"
        ],
        "answer": 0,
        "expl": "Kunci: A (mainly for adults). Transkrip: <u>''The Mystery of Muldoon' deals with complex psychological themes, so it is intended mainly for adults.'</u>"
      },
      {
        "id": "lf-9",
        "q": "9. Who is the play 'Fire and Flood' suitable for?",
        "options": [
          "suitable for people of all ages",
          "mainly for adults",
          "mainly for children"
        ],
        "answer": 0,
        "expl": "Kunci: A (suitable for people of all ages). Transkrip: <u>''Fire and Flood' is a dramatic historical recreation suitable for people of all ages.'</u>"
      },
      {
        "id": "lf-10",
        "q": "10. Who is the play 'Silly Sailor' suitable for?",
        "options": [
          "mainly for children",
          "mainly for adults",
          "suitable for people of all ages"
        ],
        "answer": 0,
        "expl": "Kunci: A (mainly for children). Transkrip: <u>''Silly Sailor' is an upbeat slapstick comedy featuring puppetry, designed mainly for children.'</u>"
      }
    ]
  },
  {
    "id": "lis-conference",
    "title": "Exercise 5: Informatics Seminar  -  Future Directions in Computing Conference",
    "source": "Dokumen Dosen: Meeting 2 (Set 5 - Conference | Cambridge IELTS 6 Test 4)",
    "transcript": "[CONFERENCE REGISTRATION TRANSCRIPT  -  FUTURE DIRECTIONS IN COMPUTING]\nSecretary: \"Good morning. Computing Conference Enquiries. How can I direct your call?\"\nParticipant: \"Hello. I'm calling about the upcoming 'Future Directions in Computing' conference. Could you give me the key attendance details?\"\nSecretary: \"Certainly! The full three-day registration cost is \u00a3360 per attendee. You can make payment in advance by 10th October, or choose to pay on arrival at the registration desk.\"\nParticipant: \"And what accommodation options do you offer for delegates?\"\nSecretary: \"We offer two types. If you stay on-site at the Conference Centre, rooms cost \u00a365 per night, which is right next to the conference halls. Alternatively, there is a Guest House located nearby costing \u00a345 per night. It is approximately a 10 minutes walk from the Conference Centre.\"\nParticipant: \"Ten minutes walk sounds very convenient. What documents will you be sending me?\"\nSecretary: \"Once you reserve, we will send you the complete conference programme and an official application form.\"\nParticipant: \"Excellent. Where exactly is the venue situated in town?\"\nSecretary: \"The Conference Centre is located on South Park Road, right next to the City Library.\"\nParticipant: \"How should I travel there from the central railway station?\"\nSecretary: \"A taxi costs approximately \u00a35 from the station, or you can take bus number 21A, which stops right outside our front gates.\"\nParticipant: \"Superb. Thank you very much for your assistance!\"",
    "questions": [
      {
        "id": "lk-1",
        "q": "1. What is the full three-day attendance cost for the computing conference?",
        "options": [
          "\u00a3360",
          "\u00a3320",
          "\u00a3280",
          "\u00a3400"
        ],
        "answer": 0,
        "expl": "Kunci: A (\u00a3360). Transkrip: <u>'The full three-day registration cost is \u00a3360 per attendee.'</u>"
      },
      {
        "id": "lk-2",
        "q": "2. Advance payment must be completed by ___ or paid on arrival.",
        "options": [
          "10th October",
          "15th October",
          "20th October",
          "25th October"
        ],
        "answer": 0,
        "expl": "Kunci: A (10th October). Transkrip: <u>'You can make payment in advance by 10th October, or choose to pay on arrival...'</u>"
      },
      {
        "id": "lk-3",
        "q": "3. On-site accommodation at the Conference Centre costs \u00a3 ___ per night.",
        "options": [
          "65",
          "55",
          "75",
          "85"
        ],
        "answer": 0,
        "expl": "Kunci: A (\u00a365). Transkrip: <u>'...at the Conference Centre, rooms cost \u00a365 per night...'</u>"
      },
      {
        "id": "lk-4",
        "q": "4. Guest House accommodation costs \u00a3 ___ per night.",
        "options": [
          "45",
          "40",
          "50",
          "35"
        ],
        "answer": 0,
        "expl": "Kunci: A (\u00a345). Transkrip: <u>'...there is a Guest House located nearby costing \u00a345 per night.'</u>"
      },
      {
        "id": "lk-5",
        "q": "5. The Guest House is approximately a ___ walk from the Conference Centre.",
        "options": [
          "10 minutes",
          "15 minutes",
          "20 minutes",
          "25 minutes"
        ],
        "answer": 0,
        "expl": "Kunci: A (10 minutes). Transkrip: <u>'It is approximately a 10 minutes walk from the Conference Centre.'</u>"
      },
      {
        "id": "lk-6",
        "q": "6. What documents will be sent to delegates along with the application form?",
        "options": [
          "conference programme",
          "campus map",
          "hotel brochure",
          "city guide"
        ],
        "answer": 0,
        "expl": "Kunci: A (conference programme). Transkrip: <u>'...we will send you the complete conference programme and an official application form.'</u>"
      },
      {
        "id": "lk-7",
        "q": "7. The Conference Centre is situated on ___ Park Road.",
        "options": [
          "South",
          "North",
          "East",
          "West"
        ],
        "answer": 0,
        "expl": "Kunci: A (South). Transkrip: <u>'The Conference Centre is located on South Park Road...'</u>"
      },
      {
        "id": "lk-8",
        "q": "8. What municipal landmark is the Conference Centre located next to?",
        "options": [
          "the library",
          "the museum",
          "the train station",
          "the town hall"
        ],
        "answer": 0,
        "expl": "Kunci: A (the library). Transkrip: <u>'...right next to the City Library.'</u>"
      },
      {
        "id": "lk-9",
        "q": "9. A taxi from the railway station to the venue costs \u00a3 ___.",
        "options": [
          "5",
          "7",
          "10",
          "12"
        ],
        "answer": 0,
        "expl": "Kunci: A (\u00a35). Transkrip: <u>'A taxi costs approximately \u00a35 from the station...'</u>"
      },
      {
        "id": "lk-10",
        "q": "10. Delegates can alternatively take bus number ___ from the station.",
        "options": [
          "21A",
          "12B",
          "24C",
          "18A"
        ],
        "answer": 0,
        "expl": "Kunci: A (21A). Transkrip: <u>'...or you can take bus number 21A, which stops right outside our front gates.'</u>"
      }
    ]
  }
];

// ==========================================
// // 2. GRAMMAR & STRUCTURE DRILLS (MEETING 3 & 4)
// ==========================================

const GRAMMAR_DRILLS = [
  {
    id: 'g-pos',
    title: 'Drill 1: Parts of Speech Mastery (Meeting 3)',
    source: 'Latihan Dosen: Meeting 3 (Parts of Speech)',
    questions: [
      {
        id: 'pos-1',
        cat: 'NOUN',
        q: '1. The engineer checked the _____ before starting the test.',
        options: ['equipment', 'carefully', 'because', 'strong'],
        answer: 0,
        expl: 'Kunci: A (equipment). Kata benda (Noun) dibutuhkan sebagai objek setelah kata sandang "the".'
      },
      {
        id: 'pos-2',
        cat: 'NOUN',
        q: '2. Regular _____ can prevent machine failure.',
        options: ['maintains', 'maintenance', 'maintained', 'efficient'],
        answer: 1,
        expl: 'Kunci: B (maintenance). "Maintenance" adalah kata benda (Noun) yang berfungsi sebagai Subject kalimat.'
      },
      {
        id: 'pos-3',
        cat: 'PRONOUN',
        q: '3. The engineers finished the test, and _____ wrote a report.',
        options: ['they', 'them', 'their', 'theirs'],
        answer: 0,
        expl: 'Kunci: A (they). Kata ganti subjek jamak (Subject Pronoun) yang menggantikan "The engineers".'
      },
      {
        id: 'pos-4',
        cat: 'VERB',
        q: '4. The machine _____ automatically when the temperature is too high.',
        options: ['stops', 'stopping', 'stop', 'stopped'],
        answer: 0,
        expl: 'Kunci: A (stops). Subjek tunggal pihak ketiga (The machine) membutuhkan Simple Present Verb dengan akhiran -s.'
      },
      {
        id: 'pos-5',
        cat: 'ADJECTIVE',
        q: '5. The technician used an _____ instrument.',
        options: ['accuracy', 'accurately', 'accurate', 'accurateness'],
        answer: 2,
        expl: 'Kunci: C (accurate). Kata sifat (Adjective) dibutuhkan untuk menerangkan kata benda "instrument".'
      },
      {
        id: 'pos-6',
        cat: 'ADVERB',
        q: '6. The technician measured the temperature _____.',
        options: ['accurate', 'accuracy', 'accurately', 'accurateness'],
        answer: 2,
        expl: 'Kunci: C (accurately). Kata keterangan cara (Adverb of manner berakhiran -ly) menerangkan kata kerja "measured".'
      },
      {
        id: 'pos-7',
        cat: 'PREPOSITION',
        q: '7. The sensor is _____ the two components.',
        options: ['between', 'during', 'because', 'with'],
        answer: 0,
        expl: 'Kunci: A (between). Preposisi "between" digunakan untuk menunjukkan posisi di antara dua objek.'
      },
      {
        id: 'pos-8',
        cat: 'CONJUNCTION',
        q: '8. The motor is small, _____ it is powerful.',
        options: ['although', 'but', 'because', 'when'],
        answer: 1,
        expl: 'Kunci: B (but). Konjungsi koordinatif FANBOYS "but" digunakan untuk menghubungkan dua klausa yang berlawanan/kontras.'
      }
    ]
  },
  {
    id: 'g-sent-types',
    title: 'Drill 2: Simple, Compound, & Complex Sentences (Meeting 4)',
    source: 'Latihan Dosen: Meeting 4 (Sentence Types)',
    questions: [
      {
        id: 'st-1',
        q: '1. Identify the sentence type:\n"The internet helps students to find information quickly."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 0,
        expl: 'Kunci: A (Simple Sentence). Kalimat ini hanya memiliki 1 klausa independen (Subject: The internet, Verb: helps).'
      },
      {
        id: 'st-2',
        q: '2. Identify the sentence type:\n"I like programming, and I also enjoy designing websites."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 1,
        expl: 'Kunci: B (Compound Sentence). Terdiri dari 2 klausa independen yang dihubungkan konjungsi koordinatif FANBOYS "and" dengan tanda koma.'
      },
      {
        id: 'st-3',
        q: '3. Identify the sentence type:\n"She stayed at home because it was raining heavily."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 2,
        expl: 'Kunci: C (Complex Sentence). Terdiri dari 1 klausa independen ("She stayed at home") dan 1 klausa dependen diawali subordinator "because".'
      },
      {
        id: 'st-4',
        q: '4. Identify the sentence type:\n"The server crashed, so the technician fixed it immediately."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 1,
        expl: 'Kunci: B (Compound Sentence). Dua klausa independen dihubungkan oleh FANBOYS "so" untuk menyatakan akibat logis.'
      },
      {
        id: 'st-5',
        q: '5. Identify the sentence type:\n"If students practice every day, they will become better at programming."',
        options: ['Simple Sentence', 'Compound Sentence', 'Complex Sentence', 'Compound-Complex Sentence'],
        answer: 2,
        expl: 'Kunci: C (Complex Sentence). Klausa dependen bersyarat ("If students practice every day,") diletakkan di depan dengan koma sebelum induk kalimat.'
      }
    ]
  }
];

// ==========================================
// 3. AUTHENTIC READING DRILLING (QUESTIONS 1 - 30)
// ==========================================
// DRILLING_PASSAGES (Tetap dipertahankan 30 soal lengkap dengan kunci hijau)
const DRILLING_PASSAGES = [
  // 1. Laura Collins (1-4)
  {
    id: 'p-laura',
    title: 'Questions 1–4 refer to the following email.',
    source: 'Dokumen Dosen: READING 1–Q4',
    text: `Dear Ms. Longueview,

I'm so thrilled to receive the offer to intern at Bright Works Incorporated. I am truly looking forward to working with the team, and I'm particularly excited to work on the solar panel project this summer.

I would like to accept the terms outlined in the offer, but I'd appreciate the opportunity to speak with you about altering the start date for the role. I'm currently finishing up my fellowship program at the university and will be taking exams until May 27, 2025, so I may need accommodations in this respect. Would you have time to chat at the end of this week?

Thank you for your time. I look forward to hearing from you soon and learning more about Bright Works.

Best wishes,
Laura Collins`,
    questions: [
      {
        id: 'drill-1',
        num: 1,
        clo: 'CLO 3',
        q: '1. Why is Laura Collins writing to Ms. Longueview?',
        options: [
          'To reject the internship offered',
          'To accept the internship',
          'To ask for a higher salary',
          'To complain about the work conditions'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. To accept the internship.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I would like to accept the terms outlined in the offer</u>, but I\'d appreciate the opportunity to speak with you about altering the start date for the role."</em>'
      },
      {
        id: 'drill-2',
        num: 2,
        clo: 'CLO 3',
        q: '2. Why does Laura need to change the start date? Because…',
        options: [
          'She is moving to a new city.',
          'She wants to travel first.',
          'She wants to learn about Bright Works.',
          'She is finishing fellowship program.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. She is finishing fellowship program.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I\'m currently finishing up my fellowship program at the university</u> and will be taking exams until May 27, 2025..."</em>'
      },
      {
        id: 'drill-3',
        num: 3,
        clo: 'CLO 3',
        q: '3. When does Laura suggest having a conversation with Ms. Longueview?',
        options: [
          'Next month',
          'Tomorrow morning',
          'At the end of this week',
          'In two weeks'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. At the end of this week.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>Would you have time to chat at the end of this week?</u>"</em>'
      },
      {
        id: 'drill-4',
        num: 4,
        clo: 'CLO 3',
        q: '4. What will Ms. Longueview most likely do next?',
        options: [
          'Ignore Laura’s email completely',
          'Reply to schedule a conversation about the start date',
          'Tell Laura she cannot change the internship dates',
          'Offer Laura a full-time job instead'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Reply to schedule a conversation about the start date.<br><strong>Penjelasan Logis:</strong><br>Sebagai tindak lanjut profesional, pihak HRD akan membalas email Laura untuk mengatur jadwal perbincangan.'
      }
    ]
  },
  // 2. Nutrition Chart (5-7)
  {
    id: 'p-chart',
    title: 'Questions 5–7 refer to the following chart.',
    source: 'Dokumen Dosen: READING 5–Q7',
    text: `Recommendations for adult Women 18-45
(Men 18-45, see page 16. Children under 18, see page 17)

Food Group                                               No. of recommended Daily Servings
Dairy Products (Milk and Milk Products, Eggs)             3
Meat (fish, Chicken, Beef)                                2
Vegetables (Carrots, Tomatoes, spinach)                   5
Fruit (oranges, Apples, Berries)                          3
Grains (bread, Cereal, Rice)                              4`,
    questions: [
      {
        id: 'drill-5',
        num: 5,
        clo: 'CLO 3',
        q: '5. According to this chart, what should women do every day?',
        options: [
          'Eat three servings of meat',
          'Eat cereal for breakfast',
          'Eat five servings of vegetables',
          'Eat more fruit than vegetables'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. Eat five servings of vegetables.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Vegetables (Carrots, Tomatoes, spinach) : 5</u>"</em>'
      },
      {
        id: 'drill-6',
        num: 6,
        clo: 'CLO 3',
        q: '6. Which of the following is a dairy product?',
        options: [
          'Crackers',
          'Chicken',
          'Onions',
          'Cheese'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Cheese.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Dairy Products (Milk and Milk Products, Eggs)</u>"</em>.<br>Keju (cheese) adalah olahan susu.'
      },
      {
        id: 'drill-7',
        num: 7,
        clo: 'CLO 3',
        q: '7. Which of the following foods belongs to the grain group?',
        options: [
          'Oranges',
          'Rice',
          'Eggs',
          'Fish'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Rice.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Grains (bread, Cereal, Rice)</u>"</em>.'
      }
    ]
  },
  // 3. Telephone Listings (8-11)
  {
    id: 'p-listings',
    title: 'Questions 8–11 refer to the following List.',
    source: 'Dokumen Dosen: READING 8–Q11',
    text: `Telephone Listings:
Craig, Mary         1245 Grayson Ln.        541-0987
Craig, Samuel       1346 Bear Ct            541-3211
Lambert, Wm.        4567 Center St.         654-9087
Layton, Tim         1235 Grayson Ln         541-2345
Mc Grath, R.        1897 Lee Dr.            541-8765
Meyer, Walter       1346 Bear Ct            541-3211
Ryan, Patrick       5678 Taylor St.         541-9087`,
    questions: [
      {
        id: 'drill-8',
        num: 8,
        clo: 'CLO 3',
        q: '8. How many phone numbers which possibly take on the same area?',
        options: ['Four', 'Six', 'Five', 'Seven'],
        answer: 1,
        expl: 'Kunci Jawaban: B. Six.<br><strong>Analisis:</strong> Ada 6 nomor berawalan <u>541</u> (Mary, Samuel, Tim, R. Mc Grath, Walter, Patrick).'
      },
      {
        id: 'drill-9',
        num: 9,
        clo: 'CLO 3',
        q: '9. From the lists, it is obviously described that …lives in different area from others.',
        options: ['Craig, Samuel', 'Lambert, Wm.', 'Mc Grath, R.', 'Layton, Tim'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Lambert, Wm.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Lambert, Wm.  4567 Center St.  654-9087</u>"</em>.'
      },
      {
        id: 'drill-10',
        num: 10,
        clo: 'CLO 3',
        q: '10. Which two people are possibly living at the same address?',
        options: [
          'Patrick Ryan and Wm. Lambert.',
          'Mary Craig and Tim Layton.',
          'Walter Meyer and Tim Layton',
          'Samuel Craig and Walter Meyer.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Samuel Craig and Walter Meyer.<br><strong>Bukti Pendukung:</strong> Keduanya beralamat di <u>1346 Bear Ct</u> dengan telepon <u>541-3211</u>.'
      },
      {
        id: 'drill-11',
        num: 11,
        clo: 'CLO 3',
        q: '11. Which two people are probably neighbors?',
        options: [
          'Patrick Ryan and Wm. Lambert.',
          'Mary Craig and Tim Layton.',
          'Walter Meyer and Tim Layton.',
          'Samuel Craig and Walter Meyer.'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Mary Craig and Tim Layton.<br><strong>Bukti Pendukung:</strong> Keduanya bertetangga di <u>Grayson Ln.</u> (1245 dan 1235).'
      }
    ]
  },
  // 4. Job Vacancy (12-15)
  {
    id: 'p-vacancy',
    title: 'Questions 12–15 refer to the following text.',
    source: 'Dokumen Dosen: READING 12–Q15',
    text: `URGENTLY REQUIRED: Secretary
- Female, graduated from a reputable university
- Min. 5 years of work experience
- Good command of English (oral and written)
- Computer literate (min. Word, Excel, Internet)

Please submit your complete application, resume and recent photograph not more than 10 days after this ads to:
HRD PT CITRA ENERGY DEVELOPMENT
Wisma Emha Jln. Wijaya I No. IIA, Kebayoran Baru, Jakarta Selatan 12170
Fax no. 021-7207978
e-mail address: mitraenergy@cbn.net.id
(only short-listed candidates will be notified)`,
    questions: [
      {
        id: 'drill-12',
        num: 12,
        clo: 'CLO 3',
        q: '12. What is the text about?',
        options: ['Wisma Emha', 'A job vacancy', 'A senior secretary', 'An application center'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. A job vacancy.<br><strong>Bukti Pendukung:</strong> <u>"URGENTLY REQUIRED: Secretary"</u>.'
      },
      {
        id: 'drill-13',
        num: 13,
        clo: 'CLO 3',
        q: '13. The following are requirements asked, EXCEPT....',
        options: [
          'five years’ experience',
          'able to operate a computer',
          'able to speak and write in English',
          'application letter should be sent ten days after this ad'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. application letter should be sent ten days after this ad.<br><strong>Penjelasan:</strong> Teks menyatakan: <em>"<u>not more than 10 days after this ads</u>"</em> (maksimal dalam waktu 10 hari, bukan 10 hari setelahnya).'
      },
      {
        id: 'drill-14',
        num: 14,
        clo: 'CLO 3',
        q: '14. Which statement is TRUE based on the text above?',
        options: [
          'A mining company is looking for a consultant manager.',
          'The application letter is sent to the director of PT CITRA ENERGY DEVELOPMENT.',
          'The application letter can only be sent via email.',
          'The skill to communicate in English is required.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. The skill to communicate in English is required.<br><strong>Bukti Pendukung:</strong> <u>"Good command of English (oral and written)"</u>.'
      },
      {
        id: 'drill-15',
        num: 15,
        clo: 'CLO 3',
        q: '15. The word “reputable” in “Female, graduated from a reputable university” has the closest meaning to the word ….',
        options: ['famous', 'respectable', 'reliable', 'valid'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. respectable.'
      }
    ]
  },
  // 5. Gregor & Samia (16-18)
  {
    id: 'p-gregor',
    title: 'Questions 16–18 refer to the following email.',
    source: 'Dokumen Dosen: READING 16–Q18',
    text: `Hi Samia,
Just a quick email to say that sounds like a great idea. Saturday is better for me because I'm meeting my parents on Sunday. So, if that's still good for you, why don't you come here? Then you can see the new flat and all the work we've done on the kitchen since we moved in. We can eat at home and then go for a walk in the afternoon. It's going to be so good to catch up finally. I want to hear all about your new job!

Our address is 52 Charles Road, but it's a bit difficult to find because the house numbers are really strange here. If you turn left at the post office and keep going past the big white house on Charles Road, there's a small side street behind it with the houses 50–56 in. Don't ask me why the side street doesn't have a different name! But call me if you get lost and I'll come and get you.

Let me know if there's anything you do/don't like to eat. Really looking forward to seeing you!
See you soon!
Gregor`,
    questions: [
      {
        id: 'drill-16',
        num: 16,
        clo: 'CLO 3',
        q: '16. What day does Gregor prefer Samia to visit?',
        options: ['Sunday', 'Monday', 'Friday', 'Saturday'],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Saturday.<br><strong>Kalimat Pendukung:</strong> <u>"Saturday is better for me because I\'m meeting my parents on Sunday."</u>'
      },
      {
        id: 'drill-17',
        num: 17,
        clo: 'CLO 3',
        q: '17. Why does Gregor prefer Saturday?',
        options: [
          'Because he is meeting his parents on Sunday.',
          'Because he has a new job on Sunday.',
          'Because his new flat is free on Saturday.',
          'Because Samia cannot visit on Sunday.'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Because he is meeting his parents on Sunday.'
      },
      {
        id: 'drill-18',
        num: 18,
        clo: 'CLO 3',
        q: '18. What does Gregor want to know about Samia?',
        options: [
          'Her new address on Charles Road',
          'The food she likes or does not like',
          'Her parents\' plans in New Year',
          'Her new job in the new company'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. The food she likes or does not like.<br><strong>Kalimat Pendukung:</strong> <u>"Let me know if there\'s anything you do/don\'t like to eat."</u>'
      }
    ]
  },
  // 6. Jarvis Cleaner (19-22)
  {
    id: 'p-jarvis',
    title: 'Questions 19–22 refer to the following Advertisement.',
    source: 'Dokumen Dosen: READING 19–Q22',
    text: `Jarvis Miracle Cleaner is the one product engineers, mechanics and construction workers just cannot do without. Its unique patented formula allows you to quickly and easily remove dirt, grime, and oil from your hands without damaging your skin. For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry, and it is now available for home use for the first time.

Jarvis Deluxe Cleaner is a milder version of the industrial cleaver with a new yellow color and fresh lemon scent. Jarvis Deluxe Cleaner removes not just oil and grease but also paint, ink, and almost anything else you or your children get on your hands and skin. Jarvis Deluxe Cleaner has been tested and demonstrated to be gentle enough for even the most sensitive skin.

Bath products are now available at all good supermarkets and drugstores.`,
    questions: [
      {
        id: 'drill-19',
        num: 19,
        clo: 'CLO 3',
        q: '19. What is the main purpose of the passage?',
        options: [
          'To explain how to make a cleaning product',
          'To advertise Jarvis cleaning products',
          'To compare American and European cleaning products',
          'To warn about harmful effects of industrial cleaners'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. To advertise Jarvis cleaning products.'
      },
      {
        id: 'drill-20',
        num: 20,
        clo: 'CLO 3',
        q: '20. How long has Jarvis Miracle Cleaner been the number 1 cleaning product in American industry?',
        options: ['10 years', '20 years', '40 years', '50 years'],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. 40 years.<br><strong>Kalimat Pendukung:</strong> <u>"For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry..."</u>'
      },
      {
        id: 'drill-21',
        num: 21,
        clo: 'CLO 3',
        q: '21. According to the passage, where can Jarvis Deluxe Cleaner now be purchased?',
        options: [
          'Only at hardware stores',
          'At supermarkets and drugstores',
          'From construction companies',
          'Only in factories'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. At supermarkets and drugstores.<br><strong>Kalimat Pendukung:</strong> <u>"Bath products are now available at all good supermarkets and drugstores."</u>'
      },
      {
        id: 'drill-22',
        num: 22,
        clo: 'CLO 3',
        q: '22. The word Its in "Its unique patented formula allows you to quickly and easily remove dirt..." refers to:',
        options: [
          'Jarvis Miracle Cleaner',
          'Lemon oil',
          'Industrial dirt',
          'Construction workers'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Jarvis Miracle Cleaner.'
      }
    ]
  },
  // 7. Airport Baggage (23-25)
  {
    id: 'p-airport',
    title: 'Questions 23–25 refer to the following airport notice.',
    source: 'Dokumen Dosen: READING 23–Q25',
    text: `What can I take on the plane as hand luggage?
Please note that passengers can only take ONE suitcase onto the plane. It must be no bigger than 55cm x 22cm x 35cm and weigh no more than 10kg.

You can also take one small laptop bag or handbag that can fit under the seat in front of you. If you have two bags, their total weight cannot be more than 10kg. If your bag is too big or too heavy, you will not be allowed to take it onto the plane. Staff will put it in the hold for you and you will have to pay extra.

Please make sure mobile phones and other devices are fully charged so that security staff can check them.

Liquids in bottles bigger than 100ml are allowed on board if you buy them in the airport shops after you've passed security. 

We hope you enjoy your flight!`,
    questions: [
      {
        id: 'drill-23',
        num: 23,
        clo: 'CLO 3',
        q: '23. What is the maximum weight for the suitcase?',
        options: ['5 kg', '10 kg', '15 kg', '20 kg'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. 10 kg.<br><strong>Kalimat Pendukung:</strong> <u>"...and weigh no more than 10kg."</u>'
      },
      {
        id: 'drill-24',
        num: 24,
        clo: 'CLO 3',
        q: '24. When are passengers allowed to take bottles bigger than 100ml onto the plane?',
        options: [
          'Before they arrive at the airport.',
          'Before they pass security.',
          'When they buy them after passing security.',
          'When they put them in their suitcase.'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. When they buy them after passing security.<br><strong>Kalimat Pendukung:</strong> <u>"Liquids in bottles bigger than 100ml are allowed on board if you buy them in the airport shops after you\'ve passed security."</u>'
      },
      {
        id: 'drill-25',
        num: 25,
        clo: 'CLO 3',
        q: '25. Why will passengers have to pay extra if their bag is too big or too heavy?',
        options: [
          'Because they need to buy another bag.',
          'Because they need to buy a new ticket.',
          'Because they need to pass security again.',
          'Because staff will put the bag in the hold.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Because staff will put the bag in the hold.<br><strong>Kalimat Pendukung:</strong> <u>"Staff will put it in the hold for you and you will have to pay extra."</u>'
      }
    ]
  },
  // 8. MIT Drones (26-30)
  {
    id: 'p-mit',
    title: 'Questions 26–30 refer to the following News.',
    source: 'Dokumen Dosen: READING 26–Q30',
    text: `Designing a complex electronic device like a delivery drone involves juggling many choices, such as selecting motors and batteries that minimize cost while maximizing the payload the drone can carry or the distance it can travel.

Unraveling that conundrum is no easy task, but what happens if the designers don't know the exact specifications of each battery and motor? On top of that, the real-world performance of these components will likely be affected by unpredictable factors, like changing weather along the drone's route.

MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty. The framework allows them to model the performance trade-offs of a device with many interconnected parts, each of which could behave in unpredictable ways.

The research is published on the arXiv preprint server. Their technique captures the likelihood of many outcomes and trade-offs, giving designers more information than many existing approaches which, at most, can usually only model best-case and worst-case scenarios.

Ultimately, this framework could help engineers develop complex systems like autonomous vehicles, commercial aircraft, or even regional transportation networks that are more robust and reliable in the face of real-world unpredictability`,
    questions: [
      {
        id: 'drill-26',
        num: 26,
        clo: 'CLO 3',
        q: '26. What is the main focus of the passage?',
        options: [
          'The challenges of flying drones in bad weather',
          'MIT’s new framework to design complex systems under uncertainty',
          'The history of battery and motor technology',
          'The economic cost of developing autonomous vehicles'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. MIT’s new framework to design complex systems under uncertainty.<br><strong>Kalimat Pendukung:</strong> <u>"MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty."</u>'
      },
      {
        id: 'drill-27',
        num: 27,
        clo: 'CLO 3',
        q: '27. According to the text, what unpredictable factor can affect drone performance?',
        options: ['Motor type', 'Battery price', 'Weather conditions', 'Designer preferences'],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. Weather conditions.<br><strong>Kalimat Pendukung:</strong> <u>"...affected by unpredictable factors, like changing weather along the drone\'s route."</u>'
      },
      {
        id: 'drill-28',
        num: 28,
        clo: 'CLO 3',
        q: '28. What is the potential benefit of this new framework?',
        options: [
          'Making drones cheaper than ever before',
          'Eliminating the need for testing in real life',
          'Allowing designers to ignore unpredictable conditions',
          'Helping engineers build more reliable and robust complex systems'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Helping engineers build more reliable and robust complex systems.<br><strong>Kalimat Pendukung:</strong> <u>"Ultimately, this framework could help engineers develop complex systems... that are more robust and reliable"</u>.'
      },
      {
        id: 'drill-29',
        num: 29,
        clo: 'CLO 3',
        q: '29. What do existing approaches usually model?',
        options: [
          'Only best-case and worst-case scenarios',
          'The average-case scenarios',
          'The reliability of every motor',
          'The color of the drone'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Only best-case and worst-case scenarios.<br><strong>Kalimat Pendukung:</strong> <u>"...giving designers more information than many existing approaches which, at most, can usually only model best-case and worst-case scenarios."</u>'
      },
      {
        id: 'drill-30',
        num: 30,
        clo: 'CLO 3',
        q: '30. The word Their in “Their technique captures the likelihood of many outcomes and trade-offs” refers to:',
        options: ['The MIT researchers', 'The batteries', 'The motors', 'The designers'],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. The MIT researchers.<br><strong>Kalimat Pendukung:</strong> <u>"MIT researchers developed a new framework... Their technique captures the likelihood"</u>.'
      }
    ]
  }
];

// ==========================================
// 4. WRITING MODELS (MEETING 5 DOSEN: 100-150 WORDS)
// ==========================================
const WRITING_TOPIC_MODELS = [
  {
    topic: 'The Importance of Technology in Daily Life',
    modelParagraph: `Technology plays a vital role in our daily lives because it modernizes routine tasks and connects society globally. It helps individuals communicate much faster, and it makes sharing critical academic information substantially easier across diverse platforms. For example, many university students utilize digital portals when they need to submit assignments because online submission saves valuable time and conserves environmental paper resources. Technology also provides widespread digital entertainment, which people can readily access anywhere. Furthermore, it supports modern business enterprises, and it continuously generates novel employment opportunities in computing sectors. Therefore, modern technology serves an indispensable function in rendering human life significantly more efficient and productive.`,
    wordCount: 105,
    analysis: [
      { type: 'Topic Sentence (TS)', text: 'Technology plays a vital role in our daily lives because it modernizes routine tasks and connects society globally.' },
      { type: 'Supporting 1 (Compound)', text: 'It helps individuals communicate much faster, and it makes sharing critical academic information substantially easier across diverse platforms.' },
      { type: 'Supporting 2 (Complex)', text: 'For example, many university students utilize digital portals when they need to submit assignments because online submission saves valuable time and conserves environmental paper resources.' },
      { type: 'Supporting 3 (Simple)', text: 'Technology also provides widespread digital entertainment, which people can readily access anywhere.' },
      { type: 'Supporting 4 (Compound)', text: 'Furthermore, it supports modern business enterprises, and it continuously generates novel employment opportunities in computing sectors.' },
      { type: 'Concluding Sentence (CS)', text: 'Therefore, modern technology serves an indispensable function in rendering human life significantly more efficient and productive.' }
    ]
  },
  {
    topic: 'Why I Chose Informatics Engineering as My Major',
    modelParagraph: `I chose Informatics Engineering as my undergraduate major because I have been deeply fascinated by computer software and digital innovation since my childhood. Writing program code stimulates logical thinking, and constructing algorithmic systems allows me to solve complex real-world challenges systematically. When I first learned fundamental programming languages, I developed an interactive educational website because I wanted to assist my peers in learning mathematics effectively. Information technology continuously transforms modern healthcare, finance, and industrial infrastructure. In addition, software engineering provides abundant career pathways, and it allows professionals to collaborate with international research teams seamlessly. In summary, pursuing an Informatics Engineering degree represents the most fulfilling pathway toward developing impactful technological solutions for the broader community.`,
    wordCount: 115,
    analysis: [
      { type: 'Topic Sentence (TS)', text: 'I chose Informatics Engineering as my undergraduate major because I have been deeply fascinated by computer software and digital innovation since my childhood.' },
      { type: 'Supporting 1 (Compound)', text: 'Writing program code stimulates logical thinking, and constructing algorithmic systems allows me to solve complex real-world challenges systematically.' },
      { type: 'Supporting 2 (Complex)', text: 'When I first learned fundamental programming languages, I developed an interactive educational website because I wanted to assist my peers in learning mathematics effectively.' },
      { type: 'Supporting 3 (Simple)', text: 'Information technology continuously transforms modern healthcare, finance, and industrial infrastructure.' },
      { type: 'Supporting 4 (Compound)', text: 'In addition, software engineering provides abundant career pathways, and it allows professionals to collaborate with international research teams seamlessly.' },
      { type: 'Concluding Sentence (CS)', text: 'In summary, pursuing an Informatics Engineering degree represents the most fulfilling pathway toward developing impactful technological solutions for the broader community.' }
    ]
  }
];

// ==========================================
// 5. UTS FULL SIMULATION QUESTION DATA (100 PTS)
// ==========================================
const UTS_EXAM_DATA = {
  listening: [
    {
      id: 'uts-l1',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[ACADEMIC LECTURE EXCERPT: COMPUTER SCIENCE]
Professor: "Good morning class. Today we are initiating our unit on algorithmic optimization. Now, many novice programmers assume optimization simply means shortening lines of code. However, our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time, especially in high-throughput database systems. Therefore, please observe this benchmark graph..."`,
      q: "1. What is the primary purpose of the professor's lecture?",
      options: [
        'To instruct students on how to shorten lines of program code',
        'To explain how data structures influence memory allocation and execution speed',
        'To announce an upcoming midterm examination date',
        'To demonstrate how to build an e-commerce database from scratch'
      ],
      answer: 1,
      expl: '<strong>Tujuan Utama yang Digarisbawahi:</strong> <em>"<u>our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time</u>"</em>.'
    },
    {
      id: 'uts-l2',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[CAMPUS CONSULTATION: STUDENT & ACADEMIC ADVISOR]
Advisor: "Come in, Dimas. I received your email regarding course prerequisites. You mentioned wanting to take Advanced Software Engineering next semester. However, the departmental catalog strictly requires that you must have completed Object-Oriented Programming with a minimum grade of B before enrolling."
Dimas: "I see. I took OOP last semester and received an A-, but my grade sheet hasn't updated on the online portal yet."
Advisor: "In that case, bring a signed verification slip from your instructor to the department office by this Thursday at 3 PM, and we will manually unlock the enrollment system for you."`,
      q: '2. What specific action must the student take to enroll in the course?',
      options: [
        'Retake the Object-Oriented Programming course next semester',
        'Submit a signed instructor verification slip to the department office by Thursday 3 PM',
        'Pay an additional manual registration fee to the university registrar',
        'Send another email inquiry to the academic portal webmaster'
      ],
      answer: 1,
      expl: '<strong>Detail Spesifik yang Digarisbawahi:</strong> <em>"<u>bring a signed verification slip from your instructor to the department office by this Thursday at 3 PM</u>"</em>.'
    },
    {
      id: 'uts-l3',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[SEMINAR ANNOUNCEMENT: FACULTY OF INFORMATICS]
Host: "Attention all attendees. Before Dr. Hartono delivers the keynote on Artificial Intelligence ethics, please take note of our workshop schedule. The interactive lab breakout session will take place in Multimedia Lab 3 on the second floor, not the auditorium as printed in the flyer. Furthermore, all participants requiring a certificate of participation must scan the QR code located near the exit doors prior to 4:30 PM."`,
      q: '3. What specific detail did the host correct regarding the workshop schedule?',
      options: [
        'The keynote speaker has been replaced by Dr. Hartono',
        'The breakout lab session will be held in Multimedia Lab 3 on the 2nd floor, not the auditorium',
        'The certificates will be mailed to participants\' home addresses',
        'The seminar will finish earlier at 12:00 PM'
      ],
      answer: 1,
      expl: '<strong>Koreksi Lokasi yang Digarisbawahi:</strong> <em>"<u>The interactive lab breakout session will take place in Multimedia Lab 3 on the second floor, not the auditorium</u> as printed in the flyer"</em>.'
    },
    {
      id: 'uts-l4',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[STUDY GROUP DISCUSSION: UNIVERSITY LIBRARY]
Aisha: "So for our research outline on cloud storage security, we already have our topic sentence and two supporting arguments regarding data encryption and redundancy. What we're lacking is empirical statistical evidence to support our second claim."
Budi: "Actually, I found a 2025 survey from the IEEE Computer Society showing that 73% of cloud breaches were due to misconfigured access credentials rather than faulty cryptographic algorithms."
Aisha: "That is perfect! That precisely reinforces our argument that human administrative protocol is the critical vulnerability."`,
      q: '4. Which phrase best paraphrases the students\' consensus on cloud security vulnerability?',
      options: [
        'Cloud breaches are predominantly triggered by administrative configuration errors rather than flawed cryptography.',
        'Cryptographic algorithms are completely obsolete and insecure in modern distributed computing.',
        'Only 27% of organizations utilize cloud storage systems due to extreme risk.',
        'IEEE surveys should not be cited in academic computer science papers.'
      ],
      answer: 0,
      expl: '<strong>Parafrase Akademis yang Tepat:</strong> <em>"73% of cloud breaches were due to misconfigured access credentials rather than faulty cryptographic algorithms"</em> diparafrase menjadi <em>"predominantly triggered by administrative configuration errors rather than flawed cryptography"</em>.'
    },
    {
      id: 'uts-l5',
      pts: 5,
      clo: 'CLO 1',
      audioSim: `[CAMPUS BRIEFING: UTS EXAM PREPARATION]
Proctor: "Welcome students. Please listen attentively to the examination guidelines. To answer the multiple-choice questions on your LJK sheet, a 2B pencil is mandatory; pens cannot be scanned by the optical grader. However, for Section 4, the paragraph outline writing task, you must use a black or blue pen. You are strictly prohibited from bringing cell phones or smartwatches to your desk. Arrive at least 30 minutes early, as any student arriving even one second late will face immediate disqualification."`,
      q: '5. What is the mandatory rule regarding the Writing section of the exam?',
      options: [
        'It must be filled in with a 2B pencil on the circle sheet',
        'It must be written using a pen (black or blue)',
        'It can be typed using a laptop or smartphone',
        'It is an optional bonus section that can be skipped'
      ],
      answer: 1,
      expl: '<strong>Aturan Resmi Dosen UMS:</strong> <em>"<u>while for the writing section, you should use a pen</u>"</em>. Pilihan ganda wajib pensil 2B, bagian menulis wajib pulpen.'
    }
  ],

  grammar: [
    {
      id: 'uts-g1',
      pts: 4,
      clo: 'CLO 2',
      q: '6. Identify the sentence component of the bracketed portion:\n"The software development team [carefully reviewed] the security audit logs."',
      options: [
        'Subject (S)',
        'Verb / Predicate (V)',
        'Direct Object (O)',
        'Subject Complement (C)'
      ],
      answer: 1,
      expl: '<strong>Analisis S-V-O-C-A:</strong> Bagian <em>"carefully reviewed"</em> adalah <strong>Verb / Predicate (V)</strong>.'
    },
    {
      id: 'uts-g2',
      pts: 4,
      clo: 'CLO 2',
      q: '7. Which coordinating conjunction (FANBOYS) logically completes the compound sentence?\n"The database server experienced a sudden voltage drop, _____ the automated backup protocol instantly switched power to the auxiliary generator."',
      options: ['for', 'so', 'nor', 'but'],
      answer: 1,
      expl: '<strong>Aturan FANBOYS:</strong> Konjungsi <strong>"so"</strong> menyatakan konsekuensi/akibat logis.'
    },
    {
      id: 'uts-g3',
      pts: 4,
      clo: 'CLO 2',
      q: '8. Choose the grammatically correct COMPLEX sentence with proper punctuation:',
      options: [
        'Although quantum computing holds immense potential, researchers still face significant physical constraints in hardware stabilization.',
        'Although quantum computing holds immense potential researchers still face significant physical constraints.',
        'Researchers still face significant physical constraints, although quantum computing holds immense potential.',
        'Because researchers face physical constraints and quantum computing holds immense potential.'
      ],
      answer: 0,
      expl: '<strong>Aturan Koma Kalimat Kompleks:</strong> Jika Dependent Clause diletakkan di depan, maka <strong>WAJIB</strong> diberi tanda koma.'
    },
    {
      id: 'uts-g4',
      pts: 4,
      clo: 'CLO 2',
      q: '9. Analyze the grammatical structure of the following sentence:\n"Neural networks require massive training datasets, but they can identify complex patterns that human analysts frequently overlook."',
      options: [
        'Simple Sentence',
        'Compound Sentence',
        'Complex Sentence',
        'Compound-Complex Sentence'
      ],
      answer: 3,
      expl: '<strong>Analisis Jenis Kalimat:</strong> Gabungan Compound (koordinasi "but") dan Complex (klausa dependen "that...").'
    },
    {
      id: 'uts-g5',
      pts: 4,
      clo: 'CLO 2',
      q: '10. Which of the following is a SENTENCE FRAGMENT (an incomplete sentence that must be avoided in academic writing)?',
      options: [
        'Firewalls filter unauthorized network traffic effectively.',
        'Because encryption keys must remain confidential to protect financial transactions.',
        'The engineer debugged the recursive function and recompiled the module.',
        'Modern microprocessors generate substantial heat under sustained heavy loads.'
      ],
      answer: 1,
      expl: '<strong>Sentence Fragment:</strong> Opsi B adalah klausa dependen yang berdiri sendiri tanpa induk kalimat.'
    }
  ],

  reading: [
    {
      id: 'uts-r1',
      pts: 5,
      clo: 'CLO 3',
      passage: `Airport Hand Baggage Regulations:
"Please note that passengers can only take ONE suitcase onto the plane. It must be no bigger than 55cm x 22cm x 35cm and weigh no more than 10kg. You can also take one small laptop bag or handbag that can fit under the seat in front of you. If you have two bags, their total weight cannot be more than 10kg. If your bag is too big or too heavy, staff will put it in the hold for you and you will have to pay extra."`,
      q: '11. Under what condition is a passenger required to pay an extra fee at the boarding gate?',
      options: [
        'When carrying a fully charged smartphone into the cabin',
        'When purchasing duty-free perfumes after passing the security checkpoint',
        'When their cabin bag exceeds the permitted dimensions or weight limit and must be placed in the hold',
        'When traveling with only a single 5kg laptop briefcase'
      ],
      answer: 2,
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>Staff will put it in the hold for you and you will have to pay extra</u>"</em>.'
    },
    {
      id: 'uts-r2',
      pts: 5,
      clo: 'CLO 3',
      passage: `Autonomous Drones Research:
"Designing a complex electronic device like a delivery drone involves juggling many choices, such as selecting motors and batteries that minimize cost while maximizing payload. Existing engineering approaches usually model only best-case and worst-case scenarios. To address this challenge, MIT researchers have introduced a new framework to design complex systems under uncertainty. Their technique captures the likelihood of many outcomes and evaluates how tradeoffs affect total performance."`,
      q: '12. What limitation of existing engineering approaches did the MIT framework overcome?',
      options: [
        'Existing approaches were unable to test drones in outdoor environments',
        'Existing approaches only modeled extreme best-case and worst-case scenarios rather than probabilistic outcomes',
        'Existing approaches required too many human drone pilots',
        'Existing approaches completely neglected the aerodynamic design of aircraft wings'
      ],
      answer: 1,
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>can usually only model best-case and worst-case scenarios</u>"</em>.'
    },
    {
      id: 'uts-r3',
      pts: 5,
      clo: 'CLO 3',
      passage: `Academic Paragraph Structure:
"A well-structured academic paragraph is built around three foundational pillars: a concise topic sentence embodying a focused controlling idea, coherent supporting details fortified with empirical evidence or technical illustrations, and a synthesized concluding sentence that reinforces the thesis without merely mimicking the opening line."`,
      q: '13. What constitutes an effective Topic Sentence according to academic writing principles?',
      options: [
        'A broad announcement of a topic with no argumentative stance (e.g., "I will discuss computers.")',
        'A specific topic paired with a defined controlling idea that limits the scope of discussion',
        'A lengthy list of statistical data gathered from outside references',
        'A rhetorical question intended solely to entertain casual readers'
      ],
      answer: 1,
      expl: '<strong>Materi Dosen Pertemuan 5 & 7:</strong> Topic Sentence wajib memuat <strong>Specific Topic</strong> + <strong>Controlling Idea</strong>.'
    },
    {
      id: 'uts-r4',
      pts: 5,
      clo: 'CLO 3',
      passage: `Industrial Cleaning Products:
"For over 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry. Its unique patented formula allows technicians to quickly and safely dissolve petroleum residue without corroding treated metal surfaces."`,
      q: '14. In the text above, the possessive pronoun "Its" directly refers to:',
      options: [
        'American industry',
        'Petroleum residue',
        'Jarvis Miracle Cleaner',
        'Treated metal surfaces'
      ],
      answer: 2,
      expl: '<strong>Rujukan Pronoun:</strong> Kata <em>"Its"</em> merujuk ke <strong>Jarvis Miracle Cleaner</strong>.'
    },
    {
      id: 'uts-r5',
      pts: 5,
      clo: 'CLO 3',
      passage: `Corporate Recruitment Notice:
"A multinational renewable energy consortium is recruiting a Lead Cybersecurity Analyst. Candidates must possess a Bachelor's degree in Computer Science or Information Technology from a reputable academic institution, alongside verifiable credentials in ethical hacking."`,
      q: '15. The word "reputable" in the context of the recruitment notice is closest in meaning to:',
      options: [
        'inexpensive',
        'respectable and widely recognized',
        'geographically adjacent',
        'recently established'
      ],
      answer: 1,
      expl: '<strong>Kunci Resmi Dosen:</strong> <em>reputable = respectable</em>.'
    },
    {
      id: 'uts-r6',
      pts: 5,
      clo: 'CLO 3',
      passage: `Academic Text Outlining:
"When synthesizing academic literature, effective scholars employ text outlining to map macro-structures. By isolating primary claims, secondary rationale, and empirical verifications, readers can discern whether an author relies on causal chains, comparative matrices, or chronological progressions."`,
      q: '16. What is the primary function of text outlining in academic reading?',
      options: [
        'To memorize every individual word in the dictionary',
        'To map macro-structures by organizing main claims, reasons, and evidence logically',
        'To replace the need to write academic citations',
        'To translate English texts automatically into another language'
      ],
      answer: 1,
      expl: '<strong>Fungsi Outlining:</strong> Memetakan struktur makro teks.'
    },
    {
      id: 'uts-r7',
      pts: 5,
      clo: 'CLO 3',
      passage: `Contextual Vocabulary Clues:
"Unlike volatile memory such as SRAM and DRAM which instantaneously purge data upon electrical disconnection, non-volatile storage media retain digital bits indefinitely even during sudden blackout events."`,
      q: '17. Based on the contextual contrast clue, what does the word "purge" mean?',
      options: [
        'permanently duplicate',
        'rapidly erase or eliminate',
        'safely encrypt',
        'physically accelerate'
      ],
      answer: 1,
      expl: '<strong>Contextual Clue:</strong> Lawan dari <em>"retain digital bits indefinitely"</em> adalah <em>purge</em> (menghapus/mengosongkan data).'
    }
  ]
};

// ==========================================
// 6. APPLICATION STATE & CONTROLLER
// ==========================================

const AppState = {
  activeTab: 'panel-reading',
  drillingAnswers: {},
  listeningAnswers: {},
  grammarAnswers: {},
  examAnswers: {},
  examFlags: {},
  examTimer: null,
  examSecondsLeft: 90 * 60,
  examStarted: false,
  examSubmitted: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initGrammarPuzzles();
  initAccordions();
  renderListeningDrills();
  renderGrammarDrills();
  renderDrillingQuestions();
  initExamTimerControls();
  renderExamQuestions();
  renderExamLJKGrid();
  initOutlineBuilder();
  renderWritingModels();
  renderVocabList();
});


// ================= Interactive Word Puzzle Engine =================
const GRAMMAR_PUZZLES_DATA = [
  {
    id: 'puz-simple',
    tokens: ['Both software engineers', 'and data analysts', 'tested', 'the neural network.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Pola Simple Sentence: Subjek Majemuk ("Both software engineers and data analysts") + 1 Finite Verb ("tested") + Objek ("the neural network"). Kalimat ini tetap Simple Sentence karena hanya memiliki 1 klausa independen.'
  },
  {
    id: 'puz-compound',
    tokens: ['The autonomous drone returned to base,', 'for', 'its primary battery', 'depleted below ten percent.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Pola Compound Sentence: [Klausa Mandiri 1] , [FANBOYS "for"] [Klausa Mandiri 2]. Tanda koma wajib persis sebelum konjungsi for (makna: sebab/because).'
  },
  {
    id: 'puz-complex',
    tokens: ['Although he was nervous,', 'he delivered', 'an exceptional presentation.'],
    targetOrder: [0, 1, 2],
    ruleInfo: 'Pola Complex Sentence (Pola A): Dependent Clause di awal ("Although he was nervous") WAJIB diikuti tanda koma sebelum Independent Clause ("he delivered an exceptional presentation").'
  },
  {
    id: 'puz-trap',
    tokens: ['I like coding,', 'and', 'I also design', 'intuitive websites.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Perbaikan Comma Splice: Menambahkan tanda koma dan Coordinating Conjunction FANBOYS ("and") berhasil menyatukan dua klausa mandiri menjadi Compound Sentence yang sah secara akademis.'
  }
];

const PuzzleState = {
  'puz-simple': { current: [], used: [] },
  'puz-compound': { current: [], used: [] },
  'puz-complex': { current: [], used: [] },
  'puz-trap': { current: [], used: [] }
};

function initGrammarPuzzles() {
  GRAMMAR_PUZZLES_DATA.forEach(puz => {
    renderPuzzleBank(puz.id);
  });
}

function renderPuzzleBank(puzId) {
  const puz = GRAMMAR_PUZZLES_DATA.find(p => p.id === puzId);
  if (!puz) return;

  const bankEl = document.getElementById('bank-' + puzId);
  const slotEl = document.getElementById('slot-' + puzId);
  const placeholderEl = document.getElementById('placeholder-' + puzId);
  if (!bankEl || !slotEl) return;

  const state = PuzzleState[puzId];

  // Render tokens in bank (shuffled view initially if needed, here we provide chips)
  let bankHtml = '';
  // Deterministic scramble indices: [2, 0, 3, 1]
  const scrambleOrder = [2, 0, 3, 1].filter(idx => idx < puz.tokens.length);
  // Any remaining indices
  for (let i = 0; i < puz.tokens.length; i++) {
    if (!scrambleOrder.includes(i)) scrambleOrder.push(i);
  }

  scrambleOrder.forEach(idx => {
    const isUsed = state.used.includes(idx);
    bankHtml += `<button type="button" class="puzzle-chip ${isUsed ? 'used' : ''}" onclick="clickPuzzleToken('${puzId}', ${idx})">${escapeHtml(puz.tokens[idx])}</button>`;
  });
  bankEl.innerHTML = bankHtml;

  // Render tokens in drop slot
  if (state.current.length === 0) {
    if (placeholderEl) placeholderEl.style.display = 'inline';
    slotEl.innerHTML = `<span class="puzzle-drop-placeholder" id="placeholder-${puzId}">Klik kata di bawah untuk memindahkannya ke sini...</span>`;
  } else {
    let slotHtml = '';
    state.current.forEach((idx, slotIdx) => {
      slotHtml += `<button type="button" class="puzzle-chip placed" onclick="removePuzzleToken('${puzId}', ${slotIdx})">${escapeHtml(puz.tokens[idx])} ✕</button>`;
    });
    slotEl.innerHTML = slotHtml;
  }
}

window.clickPuzzleToken = function(puzId, tokenIdx) {
  const state = PuzzleState[puzId];
  if (!state || state.used.includes(tokenIdx)) return;

  state.current.push(tokenIdx);
  state.used.push(tokenIdx);
  renderPuzzleBank(puzId);

  // Hide feedback when editing
  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

window.removePuzzleToken = function(puzId, slotIdx) {
  const state = PuzzleState[puzId];
  if (!state || slotIdx >= state.current.length) return;

  const tokenIdx = state.current[slotIdx];
  state.current.splice(slotIdx, 1);
  state.used = state.used.filter(idx => idx !== tokenIdx);
  renderPuzzleBank(puzId);

  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

window.checkPuzzle = function(puzId) {
  const puz = GRAMMAR_PUZZLES_DATA.find(p => p.id === puzId);
  const state = PuzzleState[puzId];
  const fb = document.getElementById('feedback-' + puzId);
  if (!puz || !state || !fb) return;

  if (state.current.length !== puz.targetOrder.length) {
    fb.className = 'puzzle-feedback-badge show wrong';
    fb.innerHTML = '⚠️ Kepingan kalimat belum lengkap. Masukkan semua kata ke dalam slot sebelum memeriksa.';
    return;
  }

  const isCorrect = state.current.every((val, idx) => val === puz.targetOrder[idx]);

  if (isCorrect) {
    fb.className = 'puzzle-feedback-badge show correct';
    fb.innerHTML = `🎉 <strong>Susunan Benar!</strong> ${puz.ruleInfo}`;
  } else {
    fb.className = 'puzzle-feedback-badge show wrong';
    fb.innerHTML = '❌ <strong>Susunan belum tepat.</strong> Perhatikan kembali posisi subjek, predikat (finite verb), atau letak tanda koma dan konjungsi!';
  }
};

window.resetPuzzle = function(puzId) {
  const state = PuzzleState[puzId];
  if (!state) return;
  state.current = [];
  state.used = [];
  renderPuzzleBank(puzId);
  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

// ================= Tab Navigation =================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.stopPassageAudio) window.stopPassageAudio();
      const targetPanelId = btn.getAttribute('data-target');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        AppState.activeTab = targetPanelId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// ================= Accordions =================
function initAccordions() {
  const moduleHeaders = document.querySelectorAll('.module-header');
  moduleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.module-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}

// ================= Universal Web Speech Audio Player Engine =================
function prepareSpeechText(raw) {
  if (!raw) return '';
  return raw
    .replace(/\[.*?\]/g, '') // remove bracket headers
    .replace(/(Host|Nathan|Miley|Presenter|Speaker 1|Speaker 2|Professor|Advisor|Dimas|Aisha|Budi|Proctor|Officer|Roger|Enquirer|Coordinator|Secretary|Participant):/gi, '$1 says, ')
    .replace(/"/g, '')
    .trim();
}

function calculateAudioDuration(text, rate = 1.0) {
  if (!text) return 10;
  const words = text.trim().split(/\s+/).length;
  return Math.max(5, Math.round((words / 140) * 60 / (rate || 1.0)));
}

function formatAudioTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

const AUDIO_FILE_MAP = {
  // Listening Arena (100% Berkas MP3 Otentik Dosen & Google Drive)
  'lis-nathan': { src: 'audio/nathans_school.mp3', duration: 159, label: 'MP3 Solutions Elementary (Dosen)' },
  'lis-miley': { src: 'audio/miley_cyrus_bio.mp3', duration: 157, label: 'MP3 Google Drive Resmi' },
  'lis-council': { src: 'audio/youth_council.mp3', duration: 430, label: 'MP3 Cambridge IELTS 11 (Dosen)' },
  'lis-festival': { src: 'audio/community_festival.mp3', duration: 421, label: 'MP3 Cambridge IELTS 11 (Dosen)' },
  'lis-conference': { src: 'audio/future_directions_computing.mp3', duration: 338, label: 'MP3 Google Drive Resmi' },

  // Simulasi UTS (CLO 1 Listening Comprehension)
  'uts-l1': { src: 'audio/uts_l1.mp3', duration: 30, label: 'MP3 Naskah Dosen' },
  'uts-l2': { src: 'audio/uts_l2.mp3', duration: 42, label: 'MP3 Naskah Dosen' },
  'uts-l3': { src: 'audio/uts_l3.mp3', duration: 30, label: 'MP3 Naskah Dosen' },
  'uts-l4': { src: 'audio/uts_l4.mp3', duration: 42, label: 'MP3 Naskah Dosen' },
  'uts-l5': { src: 'audio/uts_l5.mp3', duration: 36, label: 'MP3 Naskah Dosen' }
};

const UnifiedAudioEngine = {
  currentId: null,
  currentMode: 'idle', // 'media' | 'speech' | 'idle'
  status: 'idle', // 'idle' | 'loading' | 'playing' | 'paused'
  currentTime: 0,
  duration: 0,
  textRegistry: {},
  rateRegistry: {},
  timer: null,
  keepAliveTimer: null,
  activeUtterance: null,
  mediaAudio: null,

  initMediaAudio() {
    if (!this.mediaAudio && typeof Audio !== 'undefined') {
      try {
        this.mediaAudio = new Audio();
        this.mediaAudio.preload = 'metadata';

        this.mediaAudio.addEventListener('timeupdate', () => {
          if (this.currentMode === 'media' && (this.status === 'playing' || this.status === 'paused')) {
            this.currentTime = this.mediaAudio.currentTime;
            if (this.mediaAudio.duration && !isNaN(this.mediaAudio.duration)) {
              this.duration = this.mediaAudio.duration;
            }
            this.updateUI(this.currentId);
          }
        });

        this.mediaAudio.addEventListener('loadedmetadata', () => {
          if (this.mediaAudio.duration && !isNaN(this.mediaAudio.duration)) {
            this.duration = this.mediaAudio.duration;
            this.updateUI(this.currentId);
          }
        });

        this.mediaAudio.addEventListener('ended', () => {
          this.stop(this.currentId);
        });

        this.mediaAudio.addEventListener('error', (e) => {
          console.warn('Audio media error, falling back to speech synthesis', e);
          if (this.currentId && this.status === 'playing') {
            this.playSpeechSynthesis(this.currentId, this.currentTime);
          }
        });
      } catch (err) {
        console.warn('HTML5 Audio init failed:', err);
      }
    }
  },

  register(id, text) {
    this.textRegistry[id] = prepareSpeechText(text);
    if (!this.rateRegistry[id]) this.rateRegistry[id] = 1.0;
  },

  getDuration(id) {
    if (AUDIO_FILE_MAP[id] && AUDIO_FILE_MAP[id].duration) {
      return AUDIO_FILE_MAP[id].duration;
    }
    const text = this.textRegistry[id] || '';
    const rate = this.rateRegistry[id] || 1.0;
    return calculateAudioDuration(text, rate);
  },

  changeSpeed(id, speedVal) {
    const rate = parseFloat(speedVal) || 1.0;
    this.rateRegistry[id] = rate;
    const dur = this.getDuration(id);
    const timeTot = document.getElementById(`time-tot-${id}`);
    if (timeTot) timeTot.textContent = formatAudioTime(dur);

    if (this.currentId === id) {
      if (this.currentMode === 'media' && this.mediaAudio) {
        this.mediaAudio.playbackRate = rate;
      } else if (this.status === 'playing' || this.status === 'paused') {
        const cur = this.currentTime;
        this.play(id, cur);
      }
    }
  },

  updateUI(id) {
    if (!id) return;
    const btn = document.getElementById(`btn-audio-${id}`);
    const statusEl = document.getElementById(`status-${id}`);
    const timeCur = document.getElementById(`time-cur-${id}`);
    const timeTot = document.getElementById(`time-tot-${id}`);
    const fill = document.getElementById(`track-fill-${id}`);
    const thumb = document.getElementById(`track-thumb-${id}`);

    const dur = (this.currentId === id && this.duration) ? this.duration : this.getDuration(id);
    const cur = (this.currentId === id) ? this.currentTime : 0;
    const pct = dur > 0 ? Math.min(100, Math.max(0, (cur / dur) * 100)) : 0;

    if (timeCur) timeCur.textContent = formatAudioTime(cur);
    if (timeTot) timeTot.textContent = formatAudioTime(dur);
    if (fill) fill.style.width = pct.toFixed(1) + '%';
    if (thumb) thumb.style.left = pct.toFixed(1) + '%';

    if (btn) {
      if (this.currentId === id && this.status === 'loading') {
        btn.innerHTML = '<svg class="audio-spinner-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="rgba(36,34,31,0.2)"></circle><path d="M12 3a9 9 0 0 1 9 9" stroke="#24221f"></path></svg> Menyiapkan...';
        btn.className = 'audio-btn audio-btn-play loading';
      } else if (this.currentId === id && this.status === 'playing') {
        btn.innerHTML = '⏸ Jeda Audio';
        btn.className = 'audio-btn audio-btn-play audio-btn-pause';
      } else if (this.currentId === id && this.status === 'paused') {
        btn.innerHTML = '▶ Lanjutkan';
        btn.className = 'audio-btn audio-btn-play audio-btn-resume';
      } else {
        btn.innerHTML = '▶ Putar Audio';
        btn.className = 'audio-btn audio-btn-play';
      }
    }

    if (statusEl) {
      if (this.currentId === id && this.status === 'loading') {
        statusEl.textContent = 'Memuat...';
        statusEl.className = 'audio-status-pill loading';
      } else if (this.currentId === id && this.status === 'playing') {
        statusEl.textContent = '▶ Sedang Memutar...';
        statusEl.className = 'audio-status-pill playing';
      } else if (this.currentId === id && this.status === 'paused') {
        statusEl.textContent = '⏸ Dijeda';
        statusEl.className = 'audio-status-pill paused';
      } else {
        statusEl.textContent = '● Siap Diputar';
        statusEl.className = 'audio-status-pill';
      }
    }
  },

  toggle(id) {
    if (this.currentId === id && this.status === 'playing') {
      this.pause();
    } else if (this.currentId === id && this.status === 'paused') {
      this.resume();
    } else {
      this.play(id, 0);
    }
  },

  play(id, fromSeconds = 0) {
    if (this.currentId && this.currentId !== id) {
      this.stop(this.currentId);
    }

    this.currentId = id;
    this.duration = this.getDuration(id);
    this.currentTime = fromSeconds;
    this.status = 'loading';
    this.updateUI(id);

    const fileInfo = AUDIO_FILE_MAP[id];
    if (fileInfo && fileInfo.src && typeof Audio !== 'undefined') {
      this.playMediaAudio(id, fileInfo.src, fromSeconds);
    } else {
      this.playSpeechSynthesis(id, fromSeconds);
    }
  },

  playMediaAudio(id, src, fromSeconds = 0) {
    this.initMediaAudio();
    this.currentMode = 'media';

    if (!this.mediaAudio) {
      this.playSpeechSynthesis(id, fromSeconds);
      return;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    const currentSrc = this.mediaAudio.src || '';
    if (!currentSrc.includes(src)) {
      this.mediaAudio.src = src;
      this.mediaAudio.load();
    }

    this.mediaAudio.playbackRate = this.rateRegistry[id] || 1.0;

    const startPlay = () => {
      if (fromSeconds > 0) {
        try { this.mediaAudio.currentTime = fromSeconds; } catch (err) {}
      }
      const playPromise = this.mediaAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.status = 'playing';
            this.updateUI(id);
          })
          .catch((err) => {
            console.warn('Audio play() failed, trying speech fallback:', err);
            this.playSpeechSynthesis(id, fromSeconds);
          });
      }
    };

    if (this.mediaAudio.readyState >= 1) {
      startPlay();
    } else {
      const onCanPlay = () => {
        this.mediaAudio.removeEventListener('canplay', onCanPlay);
        startPlay();
      };
      this.mediaAudio.addEventListener('canplay', onCanPlay);
      setTimeout(() => {
        if (this.status === 'loading' && this.currentId === id) {
          startPlay();
        }
      }, 300);
    }
  },

  playSpeechSynthesis(id, fromSeconds = 0) {
    this.currentMode = 'speech';
    if (this.mediaAudio) {
      try { this.mediaAudio.pause(); } catch (e) {}
    }

    if (!('speechSynthesis' in window)) {
      alert('Browser Anda tidak mendukung Web Speech API atau pemutar audio.');
      this.status = 'idle';
      this.updateUI(id);
      return;
    }

    const fullText = this.textRegistry[id] || '';
    const rate = this.rateRegistry[id] || 1.0;

    let textToSpeak = fullText;
    if (fromSeconds > 0 && this.duration > 0 && fullText.length > 0) {
      const ratio = Math.min(0.95, fromSeconds / this.duration);
      const roughChar = Math.floor(ratio * fullText.length);
      const spaceIdx = fullText.indexOf(' ', roughChar);
      const sliceIdx = spaceIdx !== -1 ? spaceIdx + 1 : roughChar;
      textToSpeak = fullText.slice(sliceIdx);
    }

    if (!textToSpeak.trim()) {
      textToSpeak = fullText;
      this.currentTime = 0;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang && v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('English')));
    if (enVoice) utterance.voice = enVoice;

    utterance.onstart = () => {
      this.status = 'playing';
      this.startTimer();
      this.startKeepAlive();
      this.updateUI(id);
    };

    utterance.onend = () => {
      this.stop(id);
    };

    utterance.onerror = (e) => {
      if (e && (e.error === 'canceled' || e.error === 'interrupted')) return;
      this.stop(id);
    };

    this.activeUtterance = utterance;

    window.speechSynthesis.cancel();
    setTimeout(() => {
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      window.speechSynthesis.speak(utterance);
    }, 40);
  },

  pause() {
    if (this.status !== 'playing' || !this.currentId) return;
    this.status = 'paused';

    if (this.currentMode === 'media' && this.mediaAudio) {
      try { this.mediaAudio.pause(); } catch (e) {}
    } else {
      this.stopTimer();
      this.stopKeepAlive();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.pause();
      }
    }
    this.updateUI(this.currentId);
  },

  resume() {
    if (this.status !== 'paused' || !this.currentId) return;
    this.status = 'playing';

    if (this.currentMode === 'media' && this.mediaAudio) {
      const playPromise = this.mediaAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => this.updateUI(this.currentId))
          .catch(() => this.updateUI(this.currentId));
      }
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
        this.startTimer();
        this.startKeepAlive();
        this.updateUI(this.currentId);

        setTimeout(() => {
          if (!window.speechSynthesis.speaking && this.status === 'playing') {
            this.playSpeechSynthesis(this.currentId, this.currentTime);
          }
        }, 150);
      }
    }
  },

  stop(targetId = null) {
    const id = targetId || this.currentId;
    if (this.mediaAudio) {
      try {
        this.mediaAudio.pause();
        this.mediaAudio.currentTime = 0;
      } catch (e) {}
    }
    this.stopTimer();
    this.stopKeepAlive();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.status = 'idle';
    this.currentMode = 'idle';
    this.currentTime = 0;
    this.activeUtterance = null;
    if (id) {
      this.updateUI(id);
    }
    if (!targetId || targetId === this.currentId) {
      this.currentId = null;
    }
  },

  seek(id, event) {
    const track = document.getElementById(`track-${id}`);
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const dur = this.getDuration(id);
    const newSeconds = Math.round(ratio * dur);

    this.currentTime = newSeconds;
    this.duration = dur;

    if (this.currentMode === 'media' && this.mediaAudio && this.currentId === id) {
      try { this.mediaAudio.currentTime = newSeconds; } catch (err) {}
      this.updateUI(id);
    } else if (this.status === 'playing' || this.status === 'paused') {
      this.play(id, newSeconds);
    } else {
      this.updateUI(id);
    }
  },

  startTimer() {
    this.stopTimer();
    this.timer = setInterval(() => {
      if (this.status === 'playing') {
        this.currentTime += 0.5;
        if (this.currentTime >= this.duration) {
          this.currentTime = this.duration;
          this.stop(this.currentId);
        } else {
          this.updateUI(this.currentId);
        }
      }
    }, 500);
  },

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  startKeepAlive() {
    this.stopKeepAlive();
    this.keepAliveTimer = setInterval(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        this.stopKeepAlive();
      }
    }, 9000);
  },

  stopKeepAlive() {
    if (this.keepAliveTimer) {
      clearInterval(this.keepAliveTimer);
      this.keepAliveTimer = null;
    }
  }
};

window.UnifiedAudioEngine = UnifiedAudioEngine;

function createAudioPlayerHTML(id, rawText) {
  UnifiedAudioEngine.register(id, rawText);
  const dur = UnifiedAudioEngine.getDuration(id);
  const formattedDur = formatAudioTime(dur);
  const fileMeta = AUDIO_FILE_MAP[id];
  const badgeHtml = fileMeta ? `<span class="audio-source-badge" title="Audio MP3 resmi ${fileMeta.label}">🎙️ ${fileMeta.label}</span>` : '';

  return `
    <div class="audio-player-unit" id="audio-unit-${id}">
      <div class="audio-controls-row">
        <div class="audio-controls-left">
          <button type="button" class="audio-btn audio-btn-play" id="btn-audio-${id}" onclick="UnifiedAudioEngine.toggle('${id}')">
            ▶ Putar Audio
          </button>
          <button type="button" class="audio-btn audio-btn-stop" id="btn-stop-${id}" onclick="UnifiedAudioEngine.stop('${id}')">
            ⏹ Stop
          </button>
          <div class="audio-speed-wrap">
            <span>Kecepatan:</span>
            <select class="audio-speed-select" id="speed-${id}" onchange="UnifiedAudioEngine.changeSpeed('${id}', this.value)">
              <option value="0.85">0.85x (Pelan)</option>
              <option value="1.0" selected>1.0x (Normal)</option>
              <option value="1.15">1.15x (Cepat)</option>
            </select>
          </div>
          ${badgeHtml}
        </div>
        <span class="audio-status-pill" id="status-${id}">● Siap Diputar</span>
      </div>

      <div class="audio-timeline-wrap">
        <span class="audio-time-label" id="time-cur-${id}">00:00</span>
        <div class="audio-timeline-track" id="track-${id}" onclick="UnifiedAudioEngine.seek('${id}', event)" title="Klik garis audio untuk melompat waktu">
          <div class="audio-timeline-fill" id="track-fill-${id}" style="width: 0%;"></div>
          <div class="audio-timeline-thumb" id="track-thumb-${id}" style="left: 0%;"></div>
        </div>
        <span class="audio-time-label" id="time-tot-${id}">${formattedDur}</span>
      </div>
    </div>
  `;
}

// Global Aliases for Compatibility
window.toggleListeningAudio = function(id) { UnifiedAudioEngine.toggle(id); };
window.playPassageAudio = function(id) { UnifiedAudioEngine.toggle(id); };
window.stopPassageAudio = function() { UnifiedAudioEngine.stop(); };
window.changeAudioSpeed = function(id) {
  const sel = document.getElementById(`speed-${id}`);
  if (sel) UnifiedAudioEngine.changeSpeed(id, sel.value);
};

window.switchTab = function(panelId) {
  const btn = document.querySelector(`.tab-btn[data-target="${panelId}"]`);
  if (btn) {
    btn.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.toggleBlindTranscript = function(drillId) {
  const pre = document.getElementById(`transcript-${drillId}`);
  const hint = document.getElementById(`blind-hint-${drillId}`);
  const btn = document.getElementById(`btn-blind-${drillId}`);
  if (!pre) return;

  const isBlind = pre.classList.toggle('is-blind');
  if (isBlind) {
    if (hint) hint.classList.add('show');
    if (btn) btn.innerHTML = '👁️ Buka Transkrip';
  } else {
    if (hint) hint.classList.remove('show');
    if (btn) btn.innerHTML = '🙈 Uji Telinga (Sembunyikan)';
  }
};

// ================= Render Dedicated Listening Arena =================
function renderListeningDrills() {
  const container = document.getElementById('listening-content-container');
  if (!container) return;

  let html = '';
  LISTENING_DRILLS.forEach(drill => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(drill.title)}</h3>
            <span class="badge badge-teal" style="margin-top: 6px;">${escapeHtml(drill.source)}</span>
          </div>
        </div>

        <div class="passage-card" style="background: var(--blue-soft); border-color: var(--blue);">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
            <h4 style="margin:0;">🎧 Audio Transcript &amp; Dialogue Scenario:</h4>
            <button type="button" class="blind-mode-toggle" id="btn-blind-${drill.id}" onclick="toggleBlindTranscript('${drill.id}')">
              🙈 Uji Telinga (Sembunyikan)
            </button>
          </div>

          <!-- Universal Audio Player Bar with Garis Audio & Menitan -->
          ${createAudioPlayerHTML(drill.id, drill.transcript)}

          <div class="blind-banner-hint" id="blind-hint-${drill.id}">
            <span>🎧 <strong>Mode Uji Telinga Aktif:</strong> Transkrip diburamkan agar Anda melatih kepekaan mendengar. Tekan tombol Putar Audio di atas, lalu jawab pertanyaan di bawah!</span>
          </div>

          <pre id="transcript-${drill.id}" class="transcript-content" style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 14px; line-height: 1.6;">${escapeHtml(drill.transcript)}</pre>
        </div>

        <div class="drilling-questions-wrap">
    `;

    drill.questions.forEach(q => {
      html += `
        <div class="question-block" id="lis-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">CLO 1</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleListeningAnswer('${drill.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="lis-expl-${q.id}">
            <strong>💡 Penjelasan & Transkrip yang Digarisbawahi:</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.handleListeningAnswer = function(drillId, questionId, selectedIdx) {
  const drill = LISTENING_DRILLS.find(d => d.id === drillId);
  if (!drill) return;
  const question = drill.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`lis-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`lis-expl-${questionId}`);
  if (expl) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Pilihan Anda tepat sesuai transkrip percakapan audio resmi dosen.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Opsi yang Anda pilih kurang akurat. Pelajari rujukan materi dan bukti transkrip di bawah:</div>';

    const rpsModuleHtml = '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 1 & 2 (Listening Comprehension : Extracting Specific Details & Note Taking)</div>';

    expl.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      <div class="expl-section-block">
        <strong>💡 Pembahasan Mendalam & Bukti Transkrip:</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    expl.classList.add('show');
  }

  AppState.listeningAnswers[questionId] = isCorrect;
  updateListeningBadge();
};

function updateListeningBadge() {
  const badge = document.getElementById('listening-progress-badge');
  if (!badge) return;
  const total = LISTENING_DRILLS.reduce((acc, d) => acc + d.questions.length, 0);
  const answered = Object.keys(AppState.listeningAnswers).length;
  const correct = Object.values(AppState.listeningAnswers).filter(Boolean).length;
  badge.textContent = `Dijawab: ${answered} / ${total} | Benar: ${correct}`;
}

// ================= Render Dedicated Grammar Arena =================
function renderGrammarDrills() {
  const container = document.getElementById('grammar-content-container');
  if (!container) return;

  let html = '';
  GRAMMAR_DRILLS.forEach(drill => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(drill.title)}</h3>
            <span class="badge badge-mustard" style="margin-top: 6px;">${escapeHtml(drill.source)}</span>
          </div>
        </div>

        <div class="drilling-questions-wrap">
    `;

    drill.questions.forEach(q => {
      html += `
        <div class="question-block" id="gram-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">${q.cat || 'CLO 2'}</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleGrammarAnswer('${drill.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="gram-expl-${q.id}">
            <strong>💡 Pembahasan Kaidah Gramatika:</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.handleGrammarAnswer = function(drillId, questionId, selectedIdx) {
  const drill = GRAMMAR_DRILLS.find(d => d.id === drillId);
  if (!drill) return;
  const question = drill.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`gram-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`gram-expl-${questionId}`);
  if (expl) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Analisis tata bahasa Anda tepat.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Analisis struktur kalimat Anda keliru. Pelajari tabel materi dan kaidah di bawah:</div>';

    const isMeeting3 = drillId.includes('pos');
    const rpsModuleHtml = isMeeting3
      ? '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 3 (The Basic Parts of Speech & Sentence Components S-V-O-C-A)</div>'
      : '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 4 (Simple, Compound Sentences [FANBOYS], and Complex Sentences)</div>';

    const miniTableHtml = isMeeting3
      ? '<div class="expl-section-block"><strong>📌 Rujukan Cepat Komponen Kalimat (Meeting 3):</strong><br>S (Pelaku) + V (Finite Verb) + O (Objek Langsung/Tak Langsung) + C (Pelengkap Subjek/Objek) + A (Keterangan waktu/tempat/cara).</div>'
      : '<div class="expl-section-block"><strong>📌 Rujukan Cepat Aturan Koma & Konjungsi (Meeting 4):</strong><br>• Compound: <code>[Klausa Bebas 1] , [FANBOYS] [Klausa Bebas 2]</code><br>• Complex Pola A: <code>[Subordinator + Klausa] , [Klausa Utama]</code> (Wajib Koma!)<br>• Complex Pola B: <code>[Klausa Utama] [Subordinator + Klausa]</code> (Dilarang Koma!)</div>';

    expl.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      ${miniTableHtml}
      <div class="expl-section-block">
        <strong>💡 Pembahasan Mendalam & Kaidah Gramatika:</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    expl.classList.add('show');
  }

  AppState.grammarAnswers[questionId] = isCorrect;
  updateGrammarBadge();
};

function updateGrammarBadge() {
  const badge = document.getElementById('grammar-progress-badge');
  if (!badge) return;
  const total = GRAMMAR_DRILLS.reduce((acc, d) => acc + d.questions.length, 0);
  const answered = Object.keys(AppState.grammarAnswers).length;
  const correct = Object.values(AppState.grammarAnswers).filter(Boolean).length;
  badge.textContent = `Dijawab: ${answered} / ${total} | Benar: ${correct}`;
}

// ================= Render 30 Reading Questions =================
function renderDrillingQuestions() {
  const container = document.getElementById('drilling-content-container');
  if (!container) return;

  let html = '';
  let totalDrillQs = 0;

  DRILLING_PASSAGES.forEach((passage) => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(passage.title)}</h3>
            <span class="badge badge-teal" style="margin-top: 6px;">${escapeHtml(passage.source)}</span>
          </div>
        </div>
        
        <div class="passage-card">
          <h4>📖 Reading Text / Prompt:</h4>
          <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 14.5px; line-height: 1.6;">${escapeHtml(passage.text)}</pre>
        </div>

        <div class="drilling-questions-wrap">
    `;

    passage.questions.forEach((q) => {
      totalDrillQs++;
      html += `
        <div class="question-block" id="drill-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">${q.clo}</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleDrillAnswer('${passage.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="drill-expl-${q.id}">
            <strong>💡 Penjelasan & Kunci Resmi Dosen (Dengan Kalimat yang Digarisbawahi):</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateDrillStats(totalDrillQs);
}

window.handleDrillAnswer = function(passageId, questionId, selectedIdx) {
  const passage = DRILLING_PASSAGES.find(p => p.id === passageId);
  if (!passage) return;
  const question = passage.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`drill-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const explCard = document.getElementById(`drill-expl-${questionId}`);
  if (explCard) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Pilihan Anda tepat sesuai kunci hijau resmi naskah dosen.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Anda memilih opsi yang keliru. Silakan pelajari rujukan materi dosen dan kalimat bukti di bawah:</div>';

    const rpsModuleHtml = '<div class="expl-meta-ref">📚 Materi Perkuliahan: Pertemuan 5 & 6 (Reading Comprehension : Main Ideas, Detail Scanning & Text Evidence)</div>';

    explCard.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      <div class="expl-section-block">
        <strong>💡 Penjelasan & Kunci Resmi Dosen (Dengan Kalimat yang Digarisbawahi):</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    explCard.classList.add('show');
  }

  AppState.drillingAnswers[questionId] = {
    selected: selectedIdx,
    correct: isCorrect
  };

  updateDrillStats();
};

function updateDrillStats(totalOverride) {
  const statsEl = document.getElementById('drill-progress-badge');
  if (!statsEl) return;

  const total = totalOverride || 30;
  const answeredKeys = Object.keys(AppState.drillingAnswers);
  const correctCount = answeredKeys.filter(k => AppState.drillingAnswers[k].correct).length;

  statsEl.textContent = `Dijawab: ${answeredKeys.length} / ${total} | Benar: ${correctCount}`;
}

// ================= Render Writing Models =================
function renderWritingModels() {
  const container = document.getElementById('writing-models-container');
  if (!container) return;

  let html = '';
  WRITING_TOPIC_MODELS.forEach((m, idx) => {
    html += `
      <div class="card" style="margin-bottom: 20px;">
        <div class="card-header">
          <div>
            <h4 class="card-title" style="font-size: 18px;">Contoh Paragraf Akademik ${idx + 1}: ${escapeHtml(m.topic)}</h4>
            <span class="badge badge-teal" style="margin-top: 4px;">Panjang: ${m.wordCount} Kata (Standar Dosen: 100–150 Kata)</span>
          </div>
        </div>

        <div class="passage-card" style="background: var(--mustard-soft); border-color: var(--mustard); font-size: 15px;">
          ${escapeHtml(m.modelParagraph)}
        </div>

        <h5 style="margin: 12px 0 6px; font-family: var(--display); font-size: 14px;">Bedah Struktur Jenis Kalimat:</h5>
        <div class="rubrik-table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width: 180px;">Komponen Kalimat</th>
                <th>Kalimat dalam Paragraf</th>
              </tr>
            </thead>
            <tbody>
              ${m.analysis.map(a => `
                <tr>
                  <td><strong>${escapeHtml(a.type)}</strong></td>
                  <td>${escapeHtml(a.text)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ================= 90-Minute Exam Simulator =================
function initExamTimerControls() {
  const startBtn = document.getElementById('btn-timer-toggle');
  const resetBtn = document.getElementById('btn-timer-reset');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (!AppState.examStarted) {
        startExamTimer();
        startBtn.textContent = '⏸️ Pause Timer';
        startBtn.classList.remove('badge-mustard');
        startBtn.classList.add('badge-blue');
      } else {
        pauseExamTimer();
        startBtn.textContent = '▶️ Lanjutkan Ujian';
        startBtn.classList.remove('badge-blue');
        startBtn.classList.add('badge-mustard');
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Ulangi simulasi ujian dari awal (reset waktu 90 menit)?')) {
        resetExam();
      }
    });
  }
}

function startExamTimer() {
  AppState.examStarted = true;
  if (AppState.examTimer) clearInterval(AppState.examTimer);

  AppState.examTimer = setInterval(() => {
    if (AppState.examSecondsLeft > 0) {
      AppState.examSecondsLeft--;
      renderTimerDisplay();
    } else {
      clearInterval(AppState.examTimer);
      alert('⏰ WAKTU UJIAN 90 MENIT HABIS! Ujian otomatis dikumpulkan.');
      submitUTSExam();
    }
  }, 1000);
}

function pauseExamTimer() {
  AppState.examStarted = false;
  if (AppState.examTimer) {
    clearInterval(AppState.examTimer);
    AppState.examTimer = null;
  }
}

function resetExam() {
  pauseExamTimer();
  AppState.examSecondsLeft = 90 * 60;
  AppState.examAnswers = {};
  AppState.examSubmitted = false;
  renderTimerDisplay();

  const startBtn = document.getElementById('btn-timer-toggle');
  if (startBtn) startBtn.textContent = '▶️ Mulai Simulasi 90 Menit';

  const resultCard = document.getElementById('uts-result-card');
  if (resultCard) resultCard.classList.remove('show');

  // Re-enable options
  const buttons = document.querySelectorAll('.exam-opt-btn');
  buttons.forEach(b => {
    b.disabled = false;
    b.classList.remove('correct', 'wrong', 'selected');
    b.style.background = 'var(--paper)';
    b.style.fontWeight = 'normal';
  });

  const expls = document.querySelectorAll('.exam-expl');
  expls.forEach(e => e.classList.remove('show'));
}

function renderTimerDisplay() {
  const timerEl = document.getElementById('uts-timer-display');
  if (!timerEl) return;

  const m = Math.floor(AppState.examSecondsLeft / 60);
  const s = AppState.examSecondsLeft % 60;
  timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  if (AppState.examSecondsLeft <= 10 * 60) {
    timerEl.classList.add('danger');
  } else {
    timerEl.classList.remove('danger');
  }
}

// Render UTS Simulation Questions
function renderExamQuestions() {
  // 1. Listening
  const listeningContainer = document.getElementById('exam-listening-container');
  if (listeningContainer) {
    let html = '';
    UTS_EXAM_DATA.listening.forEach((q) => {
      html += createExamQuestionHTML(q, 'listening');
    });
    listeningContainer.innerHTML = html;
  }

  // 2. Grammar
  const grammarContainer = document.getElementById('exam-grammar-container');
  if (grammarContainer) {
    let html = '';
    UTS_EXAM_DATA.grammar.forEach((q) => {
      html += createExamQuestionHTML(q, 'grammar');
    });
    grammarContainer.innerHTML = html;
  }

  // 3. Reading
  const readingContainer = document.getElementById('exam-reading-container');
  if (readingContainer) {
    let html = '';
    UTS_EXAM_DATA.reading.forEach((q) => {
      html += createExamQuestionHTML(q, 'reading');
    });
    readingContainer.innerHTML = html;
  }
}

function createExamQuestionHTML(q, section) {
  let extraBox = '';
  if (q.audioSim) {
    extraBox = `
      <div class="passage-card" style="background: var(--blue-soft); border-color: var(--blue); margin-bottom: 12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px; flex-wrap:wrap; gap:6px;">
          <strong style="font-family: var(--mono); font-size: 12px; color: #1e556e;">🎧 AUDIO TRANSCRIPT SIMULATION:</strong>
        </div>
        <!-- Universal Audio Player Bar with Garis Audio & Menitan -->
        ${createAudioPlayerHTML(q.id, q.audioSim)}
        <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 13.5px; line-height: 1.5;">${escapeHtml(q.audioSim)}</pre>
      </div>
    `;
  } else if (q.passage) {
    extraBox = `
      <div class="passage-card" style="margin-bottom: 12px;">
        <strong style="display:block; margin-bottom: 4px; font-family: var(--mono); font-size: 12px;">📖 READING EXCERPT:</strong>
        <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 13.5px; line-height: 1.5;">${escapeHtml(q.passage)}</pre>
      </div>
    `;
  }

  let optionsHTML = '';
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    optionsHTML += `
      <button type="button" class="opt-btn exam-opt-btn" id="opt-${q.id}-${idx}" onclick="selectExamAnswer('${q.id}', ${idx}, '${section}')">
        <span class="opt-letter">${letter}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `;
  });

  const isFlagged = Boolean(AppState.examFlags[q.id]);

  return `
    <div class="question-block" id="exam-q-${q.id}">
      ${extraBox}
      <div class="q-header">
        <span class="q-text">${escapeHtml(q.q)}</span>
        <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
          <button type="button" class="btn-flag-q ${isFlagged ? 'is-flagged' : ''}" id="flag-btn-${q.id}" onclick="toggleExamFlag('${q.id}')" title="Tandai jika masih ragu-ragu">
            ${isFlagged ? '🚩 Ditandai Ragu' : '🚩 Ragu-ragu'}
          </button>
          <span class="q-clo-badge">${q.clo}</span>
          <span class="badge badge-mustard" style="font-size:11px; padding:2px 8px;">${q.pts} pts</span>
        </div>
      </div>
      <div class="options-list">
        ${optionsHTML}
      </div>
      <div class="explanation-card exam-expl" id="expl-${q.id}">
        <strong>💡 Pembahasan Dosen (Underlined Phrase & Keyword):</strong>
        <div style="margin-top: 4px; line-height: 1.5;">${q.expl}</div>
      </div>
    </div>
  `;
}

window.selectExamAnswer = function(questionId, selectedIdx, section) {
  let question = null;
  if (UTS_EXAM_DATA[section]) {
    question = UTS_EXAM_DATA[section].find(item => item.id === questionId);
  } else {
    for (const sec of ['listening', 'grammar', 'reading']) {
      const found = UTS_EXAM_DATA[sec].find(item => item.id === questionId);
      if (found) { question = found; section = sec; break; }
    }
  }

  const isCorrect = question ? selectedIdx === question.answer : false;

  AppState.examAnswers[questionId] = {
    selected: selectedIdx,
    section: section,
    isCorrect: isCorrect
  };

  const box = document.getElementById(`exam-q-${questionId}`);
  if (box) {
    const buttons = box.querySelectorAll('.exam-opt-btn');
    buttons.forEach((b, idx) => {
      b.classList.remove('selected', 'correct', 'wrong');
      if (question) {
        if (idx === question.answer) {
          b.classList.add('correct');
        } else if (idx === selectedIdx && !isCorrect) {
          b.classList.add('wrong');
        }
      } else {
        if (idx === selectedIdx) b.classList.add('selected');
      }
    });

    const expl = document.getElementById(`expl-${questionId}`);
    if (expl) {
      const statusBanner = isCorrect
        ? '<div class="expl-status-banner banner-success" style="margin-bottom:8px;">🎉 <strong>Jawaban Anda Benar!</strong> Sesuai kunci jawaban dan transkrip resmi dosen.</div>'
        : '<div class="expl-status-banner banner-danger" style="margin-bottom:8px;">❌ <strong>Jawaban Belum Tepat.</strong> Perhatikan bukti kalimat dan rujukan dosen di bawah:</div>';
      
      const rawExpl = question ? question.expl : '';
      expl.innerHTML = `
        ${statusBanner}
        <strong>💡 Pembahasan Dosen (Underlined Phrase & Keyword):</strong>
        <div style="margin-top: 4px; line-height: 1.5;">${rawExpl}</div>
      `;
      expl.classList.add('show');
    }
  }

  updateLJKSummary();
  renderExamLJKGrid();
};

const ALL_EXAM_MC_IDS = [
  'uts-l1', 'uts-l2', 'uts-l3', 'uts-l4', 'uts-l5',
  'uts-g1', 'uts-g2', 'uts-g3', 'uts-g4', 'uts-g5',
  'uts-r1', 'uts-r2', 'uts-r3', 'uts-r4', 'uts-r5', 'uts-r6', 'uts-r7'
];
window.ALL_EXAM_MC_IDS = ALL_EXAM_MC_IDS;

function renderExamLJKGrid() {
  const container = document.getElementById('ljk-bubbles-grid');
  if (!container) return;

  let answeredCount = 0;
  let flaggedCount = 0;
  let html = '';

  ALL_EXAM_MC_IDS.forEach((id, idx) => {
    const num = idx + 1;
    const ans = AppState.examAnswers[id];
    const isAnswered = ans !== undefined;
    const isFlagged = Boolean(AppState.examFlags[id]);

    if (isAnswered) answeredCount++;
    if (isFlagged) flaggedCount++;

    const letter = isAnswered ? String.fromCharCode(65 + ans.selected) : '';

    let bubbleClass = 'ljk-bubble';
    if (isAnswered) bubbleClass += ' answered';
    if (isFlagged) bubbleClass += ' flagged';

    const subText = isFlagged ? '🚩' : (isAnswered ? letter : '-');

    html += `
      <button type="button" class="${bubbleClass}" onclick="jumpToExamQuestion('${id}')" title="Soal No. ${num}: ${isAnswered ? 'Jawaban ' + letter : 'Belum Terisi'}${isFlagged ? ' (Ragu-ragu)' : ''}">
        <span>${num}</span>
        <span class="ljk-bubble-sub">${subText}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  const unansweredCount = ALL_EXAM_MC_IDS.length - answeredCount;
  const statUnans = document.getElementById('ljk-stat-unanswered');
  if (statUnans) statUnans.textContent = unansweredCount;

  const statAns = document.getElementById('ljk-stat-answered');
  if (statAns) statAns.textContent = answeredCount;

  const statFlag = document.getElementById('ljk-stat-flagged');
  if (statFlag) statFlag.textContent = flaggedCount;

  const badge = document.getElementById('exam-ljk-counter');
  if (badge) {
    badge.textContent = `LJK Terisi: ${answeredCount} / 17 Soal MC`;
  }
}
window.renderExamLJKGrid = renderExamLJKGrid;

window.toggleExamFlag = function(qId) {
  if (AppState.examSubmitted) return;
  AppState.examFlags[qId] = !AppState.examFlags[qId];

  const flagBtn = document.getElementById(`flag-btn-${qId}`);
  if (flagBtn) {
    if (AppState.examFlags[qId]) {
      flagBtn.classList.add('is-flagged');
      flagBtn.innerHTML = '🚩 Ditandai Ragu';
    } else {
      flagBtn.classList.remove('is-flagged');
      flagBtn.innerHTML = '🚩 Ragu-ragu';
    }
  }

  renderExamLJKGrid();
};

window.jumpToExamQuestion = function(qId) {
  const el = document.getElementById(`exam-q-${qId}`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.style.transition = 'box-shadow 0.25s ease, border-color 0.25s ease';
  el.style.borderColor = 'var(--mustard)';
  el.style.boxShadow = '0 0 0 4px var(--mustard-soft)';
  setTimeout(() => {
    el.style.borderColor = 'var(--ink)';
    el.style.boxShadow = 'var(--shadow-sm)';
  }, 1200);
};

function updateLJKSummary() {
  const answeredCount = Object.keys(AppState.examAnswers).length;
  const badge = document.getElementById('exam-ljk-counter');
  if (badge) {
    badge.textContent = `LJK Terisi: ${answeredCount} / 17 Soal MC`;
  }
}

// ================= Writing Outline & Word Count Evaluator =================
function initOutlineBuilder() {
  const tsInput = document.getElementById('outline-ts');
  const sd1Input = document.getElementById('outline-sd1');
  const sd2Input = document.getElementById('outline-sd2');
  const sd3Input = document.getElementById('outline-sd3');
  const csInput = document.getElementById('outline-cs');
  const fullParagraphArea = document.getElementById('full-paragraph-area');

  const inputs = [tsInput, sd1Input, sd2Input, sd3Input, csInput];
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        evaluateWritingRubric();
        syncFullParagraphDraft();
      });
    }
  });

  if (fullParagraphArea) {
    fullParagraphArea.addEventListener('input', updateParagraphWordCounter);
  }

  const checkboxes = document.querySelectorAll('.checklist-item input');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', evaluateWritingRubric);
  });
}

function syncFullParagraphDraft() {
  const ts = document.getElementById('outline-ts')?.value.trim() || '';
  const sd1 = document.getElementById('outline-sd1')?.value.trim() || '';
  const sd2 = document.getElementById('outline-sd2')?.value.trim() || '';
  const sd3 = document.getElementById('outline-sd3')?.value.trim() || '';
  const cs = document.getElementById('outline-cs')?.value.trim() || '';

  const area = document.getElementById('full-paragraph-area');
  if (area && !area.getAttribute('data-manual-edit')) {
    const sentences = [ts, sd1, sd2, sd3, cs].filter(Boolean);
    area.value = sentences.join(' ');
    updateParagraphWordCounter();
  }
}

// ================= Academic Word Counter Engine =================
function countAcademicWords(text) {
  if (!text || typeof text !== 'string') return 0;
  // Normalize whitespace (including non-breaking spaces, zero-width chars, newlines, tabs)
  const normalized = text
    .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
    .trim();
  if (!normalized) return 0;
  // Match genuine academic words: letters/numbers with optional internal hyphens/apostrophes
  // Standalone symbols, punctuation, bullets, or multiple spaces/newlines are never counted
  const matches = normalized.match(/\b[a-zA-Z0-9]+(?:['’\-][a-zA-Z0-9]+)*\b/g);
  return matches ? matches.length : 0;
}

function countAcademicSentences(text) {
  if (!text || typeof text !== 'string') return 0;
  // Split by terminal punctuation (. ! ?)
  const segments = text.split(/[.!?]+/);
  let count = 0;
  segments.forEach(seg => {
    // Only count as a sentence if the segment contains at least one genuine word
    // Standalone dots, blank lines, or spaces will NEVER be counted as sentences
    if (countAcademicWords(seg) > 0) {
      count++;
    }
  });
  return count;
}

function updateParagraphWordCounter() {
  const area = document.getElementById('full-paragraph-area');
  const badge = document.getElementById('paragraph-word-counter');
  if (!area) return;

  // Mark as manually edited so auto-sync doesn't overwrite user's work
  area.setAttribute('data-manual-edit', 'true');

  const text = area.value || '';
  const words = countAcademicWords(text);

  // Compute detailed analytics
  const cleanNoSpace = text.replace(/\s+/g, '');
  const charsNoSpace = cleanNoSpace.length;
  const charsTotal = text.length;

  // Sentences: genuine sentence segments containing actual words
  const sentences = countAcademicSentences(text);
  const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : 0;

  // Update DOM elements if present
  const exactNumEl = document.getElementById('counter-exact-num');
  if (exactNumEl) exactNumEl.textContent = words;

  const mWords = document.getElementById('m-words');
  if (mWords) mWords.textContent = words;

  const mCharsNoSpace = document.getElementById('m-chars-nospace');
  if (mCharsNoSpace) mCharsNoSpace.textContent = charsNoSpace;

  const mCharsTotal = document.getElementById('m-chars-total');
  if (mCharsTotal) mCharsTotal.textContent = charsTotal;

  const mSentences = document.getElementById('m-sentences');
  if (mSentences) mSentences.textContent = sentences;

  const mAvgSentence = document.getElementById('m-avg-sentence');
  if (mAvgSentence) mAvgSentence.textContent = avgWordsPerSentence;

  // Progress Bar (0 to 150 words = 0% to 100%)
  const progressBar = document.getElementById('counter-progress-bar');
  const progressPercent = Math.min(100, Math.round((words / 150) * 100));
  if (progressBar) {
    progressBar.style.width = `${progressPercent}%`;
  }

  // Status message & badge styling
  const feedbackEl = document.getElementById('counter-feedback-msg');

  if (words === 0) {
    if (badge) {
      badge.textContent = '⚪ Belum Ada Teks (Target: 100–150 Kata)';
      badge.className = 'badge badge-mustard';
    }
    if (progressBar) progressBar.style.background = 'var(--mustard)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-info';
      feedbackEl.innerHTML = 'ℹ️ Masukkan draf paragraf Anda. Sistem menghitung token kata akademik murni (tidak menghitung spasi atau enter berulang).';
    }
  } else if (words < 100) {
    const diff = 100 - words;
    if (badge) {
      badge.textContent = `⚠️ ${words} Kata (Kurang ${diff} kata lagi)`;
      badge.className = 'badge badge-mustard';
    }
    if (progressBar) progressBar.style.background = 'var(--mustard)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-warning';
      feedbackEl.innerHTML = `⚠️ <strong>Kurang ${diff} kata lagi</strong> untuk mencapai standar minimal 100 kata. Kembangkan supporting details Anda.`;
    }
  } else if (words <= 150) {
    if (badge) {
      badge.textContent = `✅ ${words} Kata (Optimal 100–150 Kata)`;
      badge.className = 'badge badge-teal';
    }
    if (progressBar) progressBar.style.background = 'var(--teal)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-success';
      feedbackEl.innerHTML = `✅ <strong>Sempurna!</strong> Panjang paragraf (${words} kata) memenuhi standar resmi dosen perkuliahan (100–150 kata).`;
    }
  } else {
    const over = words - 150;
    if (badge) {
      badge.textContent = `⛔ ${words} Kata (Kelebihan ${over} kata)`;
      badge.className = 'badge badge-tomato';
    }
    if (progressBar) progressBar.style.background = 'var(--tomato)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-danger';
      feedbackEl.innerHTML = `⛔ <strong>Melebihi batas ${over} kata!</strong> Ringkas kalimat Anda agar tidak melampaui batas 150 kata.`;
    }
  }

  // Live Heuristic Evaluation of Paragraph Anatomy (CLO 2 & 4)
  analyzeAcademicParagraphAnatomy(text);
}

// Topic Selection & Studio Helpers
let currentSelectedTopicIdx = 0;

window.selectWritingTopic = function(idx) {
  currentSelectedTopicIdx = idx;
  const pills = document.querySelectorAll('.topic-pill');
  pills.forEach((p, i) => {
    if (i === idx) p.classList.add('active');
    else p.classList.remove('active');
  });
};

window.loadSelectedTopicModel = function() {
  const model = WRITING_TOPIC_MODELS[currentSelectedTopicIdx] || WRITING_TOPIC_MODELS[0];
  const area = document.getElementById('full-paragraph-area');
  if (!area) return;
  area.value = model.modelParagraph;
  updateParagraphWordCounter();
};

window.copyParagraphDraft = function() {
  const area = document.getElementById('full-paragraph-area');
  if (!area || !area.value.trim()) {
    alert('Area tulisan masih kosong.');
    return;
  }
  navigator.clipboard.writeText(area.value.trim()).then(() => {
    alert('Draf paragraf berhasil disalin ke clipboard!');
  }).catch(() => {
    area.select();
    document.execCommand('copy');
    alert('Draf paragraf berhasil disalin!');
  });
};

window.clearParagraphDraft = function() {
  const area = document.getElementById('full-paragraph-area');
  if (!area) return;
  if (confirm('Yakin ingin membersihkan area tulisan?')) {
    area.value = '';
    updateParagraphWordCounter();
  }
};

function evaluateWritingRubric() {
  let writingScore = 0;
  const tsVal = document.getElementById('outline-ts')?.value.trim() || '';
  const sd1Val = document.getElementById('outline-sd1')?.value.trim() || '';
  const sd2Val = document.getElementById('outline-sd2')?.value.trim() || '';
  const sd3Val = document.getElementById('outline-sd3')?.value.trim() || '';
  const csVal = document.getElementById('outline-cs')?.value.trim() || '';

  // 1. Topic Sentence & Controlling Idea (max 5 pts)
  if (tsVal.length > 25) {
    writingScore += 5;
  } else if (tsVal.length > 10) {
    writingScore += 3;
  }

  // 2. Supporting Details 1-3 (max 6 pts: 2 pts each)
  if (sd1Val.length > 15) writingScore += 2;
  if (sd2Val.length > 15) writingScore += 2;
  if (sd3Val.length > 15) writingScore += 2;

  // 3. Concluding Sentence (max 4 pts)
  if (csVal.length > 20) {
    writingScore += 4;
  } else if (csVal.length > 8) {
    writingScore += 2;
  }

  // 4. Checklist Self-Audit (max 5 pts)
  const cbChecked = document.querySelectorAll('.checklist-item input:checked').length;
  writingScore += Math.min(5, Math.round((cbChecked / 5) * 5));

  writingScore = Math.min(20, writingScore);

  const scoreBadge = document.getElementById('writing-live-score');
  if (scoreBadge) {
    scoreBadge.textContent = `${writingScore} / 20 pts`;
  }

  return writingScore;
}

// ================= Submit UTS Exam =================
window.submitUTSExam = function() {
  if (AppState.examSubmitted) {
    alert('Ujian telah dikumpulkan. Silakan lihat hasil evaluasi di atas.');
    return;
  }

  pauseExamTimer();
  AppState.examSubmitted = true;

  let listeningScore = 0;
  let grammarScore = 0;
  let readingScore = 0;

  // Grade Listening (25 pts)
  UTS_EXAM_DATA.listening.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) listeningScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Grammar (20 pts)
  UTS_EXAM_DATA.grammar.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) grammarScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Reading (35 pts)
  UTS_EXAM_DATA.reading.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) readingScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Writing (20 pts)
  const writingScore = evaluateWritingRubric();

  const totalScore = listeningScore + grammarScore + readingScore + writingScore;

  // Render Result Card
  renderExamResultCard(totalScore, listeningScore, grammarScore, readingScore, writingScore);
};

function revealQuestionResult(q, userAns) {
  const box = document.getElementById(`exam-q-${q.id}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.exam-opt-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct');
    } else if (userAns && idx === userAns.selected) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`expl-${q.id}`);
  if (expl) expl.classList.add('show');
}

function renderExamResultCard(total, lScore, gScore, rScore, wScore) {
  const resultCard = document.getElementById('uts-result-card');
  if (!resultCard) return;

  let predikat = 'A';
  let badgeClass = 'badge-teal';

  if (total >= 80) {
    predikat = 'A (Sangat Baik / Lulus Prima)';
    badgeClass = 'badge-teal';
  } else if (total >= 75) {
    predikat = 'AB (Baik Sekali)';
    badgeClass = 'badge-mustard';
  } else if (total >= 70) {
    predikat = 'B (Baik)';
    badgeClass = 'badge-blue';
  } else if (total >= 60) {
    predikat = 'C (Cukup / Perlu Review FANBOYS & Skimming)';
    badgeClass = 'badge-plum';
  } else {
    predikat = 'D / E (Perlu Drilling Intensif Ulang)';
    badgeClass = 'badge-tomato';
  }

  document.getElementById('res-total-score').textContent = `${total} / 100`;
  const predikatEl = document.getElementById('res-predikat');
  predikatEl.textContent = predikat;
  predikatEl.className = `result-badge-predikat ${badgeClass}`;

  document.getElementById('res-clo1').textContent = `${lScore} / 25 pts`;
  document.getElementById('res-clo2').textContent = `${gScore} / 20 pts`;
  document.getElementById('res-clo3').textContent = `${rScore} / 35 pts`;
  document.getElementById('res-clo4').textContent = `${wScore} / 20 pts`;

  resultCard.classList.add('show');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ================= Academic Paragraph Diagnostics Engine =================
function analyzeAcademicParagraphAnatomy(text) {
  const overallBadge = document.getElementById('diag-overall-score');
  if (!overallBadge) return;

  if (!text || !text.trim()) {
    overallBadge.textContent = 'Status: Belum Menganalisis';
    overallBadge.className = 'badge badge-mustard';
    resetDiagItem('ts', 'Belum Ada', 'fail', 'Kalimat pertama harus jelas menyatakan topik utama dan fokus pembatasan.', null);
    resetDiagItem('compound', 'Belum Ada', 'fail', 'Minimal 1 kalimat majemuk setara dengan tanda koma sebelum FANBOYS (, and / , but / , so).', null);
    resetDiagItem('complex', 'Belum Ada', 'fail', 'Minimal 1 kalimat bertingkat dengan kata hubung subordinat (because, although, if, since, while).', null);
    resetDiagItem('transitions', 'Belum Ada', 'fail', 'Gunakan kata transisi resmi seperti Furthermore, Therefore, For example, In conclusion.', null);
    return;
  }

  let passCount = 0;

  // 1. Topic Sentence: First sentence of text
  const cleanSentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => countAcademicWords(s) > 0);

  const firstSentence = cleanSentences[0] || '';
  const firstWordCount = countAcademicWords(firstSentence);
  if (firstWordCount >= 7) {
    passCount++;
    const preview = firstSentence.length > 70 ? firstSentence.slice(0, 70) + '...' : firstSentence;
    resetDiagItem('ts', 'Terpenuhi (Pass)', 'pass', 'Topic sentence terdeteksi di awal paragraf dengan struktur yang cukup mendalam.', `Snippet: "${preview}"`);
  } else if (firstWordCount > 0) {
    resetDiagItem('ts', 'Kurang Panjang', 'warn', 'Kalimat pembuka terlalu pendek (< 7 kata). Tambahkan controlling idea yang spesifik.', `Snippet: "${firstSentence}"`);
  } else {
    resetDiagItem('ts', 'Belum Ada', 'fail', 'Tuliskan satu kalimat pembuka yang memperkenalkan topik utama dan controlling idea.', null);
  }

  // 2. Compound Sentence: FANBOYS with comma
  const fanboysRegex = /,\s*(?:for|and|nor|but|or|yet|so)\b\s+[^.!?]+/i;
  const fanboysMatch = text.match(fanboysRegex);
  if (fanboysMatch) {
    passCount++;
    const snippet = fanboysMatch[0].trim();
    const preview = snippet.length > 60 ? snippet.slice(0, 60) + '...' : snippet;
    resetDiagItem('compound', 'Terdeteksi (Pass)', 'pass', 'Ditemukan struktur kalimat majemuk setara: [Independent Clause] , [FANBOYS] [Independent Clause].', `Pola: "...${preview}"`);
  } else {
    const fanboysNoComma = /\b(?:for|and|nor|but|or|yet|so)\b/i.test(text);
    if (fanboysNoComma) {
      resetDiagItem('compound', 'Koma Kurang', 'warn', 'Ditemukan konjungsi koordinat, namun belum didahului tanda koma sebelum FANBOYS (, and / , but / , so).', null);
    } else {
      resetDiagItem('compound', 'Belum Ada', 'fail', 'Gunakan minimal 1 kalimat majemuk setara yang dihubungkan tanda koma dan konjungsi FANBOYS.', null);
    }
  }

  // 3. Complex Sentence: Subordinator (because, although, even though, since, while, whereas, if, unless, after, before, when, until)
  const subordinatorRegex = /\b(?:because|although|even though|since|while|whereas|if|unless|after|before|when|until)\b\s+[^.!?]+/i;
  const subMatch = text.match(subordinatorRegex);
  if (subMatch) {
    passCount++;
    const snippet = subMatch[0].trim();
    const preview = snippet.length > 60 ? snippet.slice(0, 60) + '...' : snippet;
    resetDiagItem('complex', 'Terdeteksi (Pass)', 'pass', 'Ditemukan klausa subordinat / kalimat majemuk bertingkat (Complex Sentence).', `Subordinator: "${preview}"`);
  } else {
    resetDiagItem('complex', 'Belum Ada', 'fail', 'Sisipkan klausa dependen menggunakan subordinating conjunction (because, although, if, since, while).', null);
  }

  // 4. Transitions / Cohesion
  const transRegex = /\b(?:furthermore|moreover|in addition|additionally|however|on the other hand|therefore|thus|consequently|in conclusion|for example|for instance)\b/gi;
  const transMatches = text.match(transRegex) || [];
  if (transMatches.length >= 2) {
    passCount++;
    const unique = [...new Set(transMatches.map(m => m.toLowerCase()))];
    resetDiagItem('transitions', `${unique.length} Transisi (Pass)`, 'pass', 'Alur kohesi paragraf sangat baik berkat penggunaan penanda transisi akademik resmi.', `Kata transisi: ${unique.join(', ')}`);
  } else if (transMatches.length === 1) {
    resetDiagItem('transitions', '1 Transisi (Cukup)', 'warn', 'Sudah ada 1 penanda transisi. Tambahkan 1 lagi (misal: Therefore, Furthermore) untuk kohesi optimal.', `Ditemukan: "${transMatches[0]}"`);
  } else {
    resetDiagItem('transitions', 'Belum Ada', 'fail', 'Gunakan penanda transisi akademik seperti Furthermore, However, For example, In conclusion.', null);
  }

  if (passCount === 4) {
    overallBadge.textContent = '🌟 Rubrik Lengkap: A+ (4/4 Kriteria)';
    overallBadge.className = 'badge badge-teal';
  } else if (passCount >= 2) {
    overallBadge.textContent = `⚡ Bagus: ${passCount}/4 Kriteria Terpenuhi`;
    overallBadge.className = 'badge badge-mustard';
  } else {
    overallBadge.textContent = `⚠️ Perlu Variasi Kalimat (${passCount}/4)`;
    overallBadge.className = 'badge badge-tomato';
  }
}
window.analyzeAcademicParagraphAnatomy = analyzeAcademicParagraphAnatomy;

function resetDiagItem(key, badgeText, badgeClass, descText, snippetText) {
  const badgeEl = document.getElementById(`diag-badge-${key}`);
  const descEl = document.getElementById(`diag-desc-${key}`);
  const snipEl = document.getElementById(`diag-snip-${key}`);

  if (badgeEl) {
    badgeEl.textContent = badgeText;
    badgeEl.className = `diag-badge ${badgeClass}`;
  }
  if (descEl) descEl.textContent = descText;
  if (snipEl) {
    if (snippetText) {
      snipEl.style.display = 'block';
      snipEl.textContent = snippetText;
    } else {
      snipEl.style.display = 'none';
      snipEl.textContent = '';
    }
  }
}

// ================= Vocabulary Vault Dataset & Engine =================
const EAP_VOCABULARY_DATA = [
  { word: 'Autonomous', pos: 'adjective', meaning: 'Mandiri / dapat beroperasi sendiri tanpa kendali langsung manusia', ex: 'The autonomous drone returned to base before its battery depleted.', src: 'Meeting 4 (FANBOYS Drilling)', cat: 'it' },
  { word: 'Feasible', pos: 'adjective', meaning: 'Layak / dapat dikerjakan secara teknis dan praktis', ex: 'Deploying a localized cache server is economically feasible for our lab.', src: 'Reading Drilling ANS (Q12)', cat: 'reading' },
  { word: 'Corroborate', pos: 'verb', meaning: 'Memperkuat / mengonfirmasi kebenaran bukti dengan data lain', ex: 'The log records corroborated that the system crashed due to memory leak.', src: 'Reading Drilling ANS (Q19)', cat: 'reading' },
  { word: 'Deplete', pos: 'verb', meaning: 'Menguras / menghabiskan persediaan daya atau sumber daya', ex: 'High-frequency network polling will rapidly deplete server memory.', src: 'Meeting 4 (FANBOYS Drilling)', cat: 'it' },
  { word: 'Consensus', pos: 'noun', meaning: 'Kesepakatan bersama / mufakat seluruh anggota tim', ex: 'The engineering team reached a consensus regarding the database migration.', src: 'Reading Drilling ANS (Q6)', cat: 'reading' },
  { word: 'Prerequisite', pos: 'noun', meaning: 'Syarat wajib yang harus dipenuhi sebelum melanjutkan ke tahap berikutnya', ex: 'OOP is a mandatory prerequisite for Advanced Software Engineering.', src: 'Simulasi UTS (Q2 Listening)', cat: 'reading' },
  { word: 'Mitigate', pos: 'verb', meaning: 'Meredakan / mengurangi dampak risiko atau kerentanan', ex: 'Multi-factor authentication helps mitigate unauthorized database intrusions.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Vulnerability', pos: 'noun', meaning: 'Celah kerentanan keamanan yang dapat dieksploitasi', ex: 'Human administrative protocol remains the critical vulnerability in cloud systems.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Benchmark', pos: 'noun / verb', meaning: 'Tolok ukur uji performa standar suatu algoritma atau hardware', ex: 'The sorting algorithm achieved the fastest benchmark in execution time.', src: 'Simulasi UTS (Q1 Listening)', cat: 'it' },
  { word: 'Subordinate', pos: 'adjective / verb', meaning: 'Terikat / berada di bawah kendali klausa utama (induk kalimat)', ex: 'A subordinate clause cannot stand alone as a complete sentence.', src: 'Meeting 4 (Complex Sentence)', cat: 'grammar' },
  { word: 'Splice', pos: 'noun', meaning: 'Kesalahan penggabungan dua klausa mandiri hanya dengan tanda koma (Comma Splice)', ex: 'Avoid comma splices by placing a coordinating conjunction after the comma.', src: 'Meeting 4 (Sentence Traps)', cat: 'grammar' },
  { word: 'Fragment', pos: 'noun', meaning: 'Penggalan kalimat tidak lengkap yang kehilangan subjek atau predikat utama', ex: 'Starting a sentence with "Because" without an independent clause creates a fragment.', src: 'Meeting 4 (Sentence Traps)', cat: 'grammar' },
  { word: 'Cohesion', pos: 'noun', meaning: 'Keterpaduan antar-kalimat dalam paragraf menggunakan kata transisi', ex: 'Academic transitions like "Furthermore" and "Therefore" strengthen paragraph cohesion.', src: 'Meeting 5 & 7 (Writing Rubric)', cat: 'grammar' },
  { word: 'Redundancy', pos: 'noun', meaning: 'Pencadangan ganda untuk mencegah kehilangan data jika server utama gagal', ex: 'Data redundancy ensures business continuity during hard drive failures.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Discrepancy', pos: 'noun', meaning: 'Ketidaksesuaian atau perbedaan antara dua data yang seharusnya sama', ex: 'The audit discovered a minor discrepancy in the hardware inventory logs.', src: 'Reading Drilling ANS (Q24)', cat: 'reading' },
  { word: 'Proprietary', pos: 'adjective', meaning: 'Hak milik eksklusif / perangkat lunak berlisensi tertutup', ex: 'The company migrated from proprietary software to open-source Linux servers.', src: 'Reading Drilling ANS (Q9)', cat: 'it' },
  { word: 'Empirical', pos: 'adjective', meaning: 'Berdasarkan bukti pengamatan atau eksperimen nyata di lapangan', ex: 'The researchers gathered empirical data from 500 active mobile app users.', src: 'Simulasi UTS (Q4 Listening)', cat: 'reading' },
  { word: 'Breach', pos: 'noun / verb', meaning: 'Pembobolan atau pelanggaran batas keamanan data', ex: 'Misconfigured cloud credentials caused the confidential data breach.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Optimization', pos: 'noun', meaning: 'Proses penyempurnaan kode agar berjalan lebih hemat memori dan cepat', ex: 'Algorithmic optimization dictates memory allocation in large database engines.', src: 'Simulasi UTS (Q1 Listening)', cat: 'it' },
  { word: 'Encryption', pos: 'noun', meaning: 'Penyandian data acak untuk melindungi informasi dari akses tanpa izin', ex: 'End-to-end encryption protects sensitive packets across public Wi-Fi networks.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Throughput', pos: 'noun', meaning: 'Jumlah data yang berhasil diproses per satuan waktu', ex: 'The new fiber optic cable tripled our departmental network throughput.', src: 'Simulasi UTS (Q1 Listening)', cat: 'it' },
  { word: 'Coordinate', pos: 'adjective / verb', meaning: 'Setara secara gramatikal dalam menggabungkan dua klausa bebas (FANBOYS)', ex: 'Coordinating conjunctions connect two grammatically equal independent clauses.', src: 'Meeting 4 (FANBOYS)', cat: 'grammar' },
  { word: 'Predicate', pos: 'noun', meaning: 'Bagian kalimat yang memuat verba dan menyatakan perbuatan dari subjek', ex: 'Every complete academic sentence must contain a subject and a finite predicate.', src: 'Meeting 3 (Parts of Speech)', cat: 'grammar' },
  { word: 'Countermeasure', pos: 'noun', meaning: 'Tindakan pencegahan atau penanggulangan terhadap ancaman siber', ex: 'Installing automated firewall rules is an effective countermeasure against DDoS.', src: 'Reading Drilling ANS (Q28)', cat: 'it' },
  { word: 'Intuitive', pos: 'adjective', meaning: 'Mudah dipahami dan digunakan pengguna tanpa perlu instruksi rumit', ex: 'The frontend engineer developed an intuitive user interface for mobile clients.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Execute', pos: 'verb', meaning: 'Menjalankan instruksi program komputer hingga tuntas', ex: 'The binary search algorithm executed in less than two milliseconds.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Termination', pos: 'noun', meaning: 'Penghentian proses atau koneksi secara paksa', ex: 'Unauthorized login attempts will result in immediate session termination.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Corrupt', pos: 'verb / adjective', meaning: 'Merusak integritas file data sehingga tidak dapat dibaca kembali', ex: 'The power surge did not corrupt any critical operating system files.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Controlling Idea', pos: 'noun', meaning: 'Gagasan pengontrol yang membatasi topik bahasan dalam Topic Sentence', ex: 'A topic sentence combines a clear subject with a specific controlling idea.', src: 'Meeting 5 & 7 (Writing Workshop)', cat: 'grammar' },
  { word: 'Transitional Signal', pos: 'noun', meaning: 'Kata penghubung antar-ide yang membimbing alur berpikir pembaca', ex: 'Transitions like "However" and "In conclusion" signal logical shifts in argumentation.', src: 'Meeting 7 (Paragraph Writing)', cat: 'grammar' }
];
window.EAP_VOCABULARY_DATA = EAP_VOCABULARY_DATA;

let activeVocabCategory = 'all';
let vocabSearchQuery = '';

window.openVocabVault = function() {
  const modal = document.getElementById('vocabModal');
  if (modal) {
    modal.classList.add('open');
    renderVocabList();
    const input = document.getElementById('vocabSearchInput');
    if (input) setTimeout(() => input.focus(), 100);
  }
};

window.closeVocabVault = function() {
  const modal = document.getElementById('vocabModal');
  if (modal) modal.classList.remove('open');
};

window.handleVocabSearch = function(query) {
  vocabSearchQuery = query || '';
  renderVocabList();
};

window.setVocabCategory = function(cat, btnEl) {
  activeVocabCategory = cat;
  const pills = document.querySelectorAll('.vocab-filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderVocabList();
};

window.pronounceWord = function(word) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
};

window.renderVocabList = function() {
  const container = document.getElementById('vocabListContainer');
  if (!container) return;

  const q = vocabSearchQuery.toLowerCase().trim();
  const filtered = EAP_VOCABULARY_DATA.filter(item => {
    const matchesCat = activeVocabCategory === 'all' || item.cat === activeVocabCategory;
    const matchesQuery = !q || item.word.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q) || item.ex.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 30px; font-style: italic; color: var(--ink-soft);">Tidak ada kosakata yang cocok dengan pencarian Anda.</div>';
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="vocab-item-card">
        <div class="vocab-term-row">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="vocab-word">${escapeHtml(item.word)}</span>
            <button type="button" class="vocab-pronounce-btn" onclick="pronounceWord('${escapeHtml(item.word)}')" title="Dengarkan pengucapan audio">
              🔊 Pronounce
            </button>
          </div>
          <span class="vocab-pos">${escapeHtml(item.pos)}</span>
        </div>
        <div class="vocab-meaning">🇮🇩 ${escapeHtml(item.meaning)}</div>
        <div class="vocab-example">"${escapeHtml(item.ex)}"</div>
        <div class="vocab-badge-source">📌 Sumber: ${escapeHtml(item.src)}</div>
      </div>
    `;
  });

  container.innerHTML = html;
};

// Utility: HTML Escape
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
