// ==============================================================
// tema1-week3-examenes.js - BANCO DE PREGUNTAS COMPLETO
// Tema 1: Week 3 - Daily Routines & Present Simple
// ==============================================================

console.log('📚 Cargando banco de preguntas Tema 1 - Week 3...');

// BANCO DE PREGUNTAS - 176 preguntas
window.bancoPreguntasExamen = [

  {
    id: 1,
    tipo: "radio",
    pregunta: "How do you write the number 15 in words?",
    opciones: [
      { valor: "a", texto: "fiveteen" },
      { valor: "b", texto: "fifteen" },
      { valor: "c", texto: "fifty" },
      { valor: "d", texto: "fifthteen" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Fifteen' (15) is written with double E. Remember: 13-19 end in -teen. Common mistake: 'fiveteen' is incorrect."
  },

  {
    id: 2,
    tipo: "radio",
    pregunta: "What number comes after nineteen?",
    opciones: [
      { valor: "a", texto: "twenty" },
      { valor: "b", texto: "twenty-one" },
      { valor: "c", texto: "eighteen" },
      { valor: "d", texto: "thirty" }
    ],
    respuestaCorrecta: "a",
    explicacion: "After nineteen (19) comes twenty (20). The pattern is: 19 → 20 → 21..."
  },

  {
    id: 3,
    tipo: "radio",
    pregunta: "How do you say '18' in English?",
    opciones: [
      { valor: "a", texto: "eightteen" },
      { valor: "b", texto: "eighteen" },
      { valor: "c", texto: "eighty" },
      { valor: "d", texto: "eigteen" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Eighteen' (18) has only ONE T. Don't confuse with 'eighty' (80)."
  },

  {
    id: 4,
    tipo: "matching",
    pregunta: "Match the numbers with their written form:",
    pares: [
      { izquierda: "13", derecha: "thirteen" },
      { izquierda: "14", derecha: "fourteen" },
      { izquierda: "16", derecha: "sixteen" },
      { izquierda: "17", derecha: "seventeen" }
    ],
    explicacion: "Numbers 13-19 end in -teen: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Note the spelling changes."
  },

  {
    id: 5,
    tipo: "radio",
    pregunta: "Which number is correctly spelled?",
    opciones: [
      { valor: "a", texto: "thirtheen" },
      { valor: "b", texto: "threeteen" },
      { valor: "c", texto: "thirteen" },
      { valor: "d", texto: "thirten" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Thirteen' (13) is the correct spelling. It comes from 'three + teen'."
  },

  {
    id: 6,
    tipo: "text",
    pregunta: "Write the number that comes between 'twenty-three' and 'twenty-five' in digits:",
    respuestaCorrecta: ["24", "twenty-four", "twenty four", "twentyfour"],
    explicacion: "The number between 23 and 25 is 24 (twenty-four). Numbers 21-29 follow the pattern: twenty-one, twenty-two, twenty-three, etc."
  },

  {
    id: 7,
    tipo: "radio",
    pregunta: "How do you write '27' in words?",
    opciones: [
      { valor: "a", texto: "twenty-seven" },
      { valor: "b", texto: "twenty seven" },
      { valor: "c", texto: "twentyseven" },
      { valor: "d", texto: "All answers are correct" }
    ],
    respuestaCorrecta: "d",
    explicacion: "27 can be written as 'twenty-seven' (with hyphen), 'twenty seven' (two words), or 'twentyseven' (one word). All forms are acceptable, but 'twenty-seven' with hyphen is most common in formal writing."
  },

  {
    id: 8,
    tipo: "fill-blanks",
    pregunta: "Complete the sequence: fourteen, fifteen, _____, seventeen, eighteen",
    espacios: [
      { id: 1, respuestas: ["sixteen", "16"] }
    ],
    explicacion: "The missing number is 'sixteen' (16). The sequence is: 14, 15, 16, 17, 18."
  },

  {
    id: 9,
    tipo: "true-false",
    pregunta: "'Ninteen' is the correct spelling for the number 19.",
    respuestaCorrecta: false,
    explicacion: "FALSE. The correct spelling is 'nineteen' with double E, not 'ninteen'. Numbers ending in -teen: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen."
  },

  {
    id: 10,
    tipo: "radio",
    pregunta: "What is the correct pronunciation difference between 'thirteen' and 'thirty'?",
    opciones: [
      { valor: "a", texto: "ThirTEEN has stress on the second syllable, THIRTY has stress on the first syllable" },
      { valor: "b", texto: "They sound exactly the same" },
      { valor: "c", texto: "ThirTY has stress on the second syllable, THIRteen has stress on the first syllable" },
      { valor: "d", texto: "There is no difference" }
    ],
    respuestaCorrecta: "a",
    explicacion: "THIRTEEN (13) has stress on -TEEN (second syllable). THIRTY (30) has stress on THIR- (first syllable). This difference is very important to avoid confusion!"
  },

  {
    id: 11,
    tipo: "radio",
    pregunta: "Complete: 'She _____ coffee every morning.' (verb: drink)",
    opciones: [
      { valor: "a", texto: "drink" },
      { valor: "b", texto: "drinks" },
      { valor: "c", texto: "drinking" },
      { valor: "d", texto: "to drink" }
    ],
    respuestaCorrecta: "b",
    explicacion: "With he/she/it, we ADD -S to the verb in Present Simple: She drinks. Rule: I/you/we/they drink, but he/she/it drinks."
  },

  {
    id: 12,
    tipo: "radio",
    pregunta: "Which sentence is CORRECT in Present Simple?",
    opciones: [
      { valor: "a", texto: "He go to school every day." },
      { valor: "b", texto: "He goes to school every day." },
      { valor: "c", texto: "He going to school every day." },
      { valor: "d", texto: "He is go to school every day." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'He goes' is correct. With he/she/it, add -ES to verbs ending in -o, -s, -x, -sh, -ch: go → goes, watch → watches."
  },

  {
    id: 13,
    tipo: "fill-blanks",
    pregunta: "Complete: 'I _____ English every day.' (verb: study)",
    espacios: [
      { id: 1, respuestas: ["study", "Study"] }
    ],
    explicacion: "'I study' is correct. With I/you/we/they, use the BASE FORM of the verb (no -s). Example: I study, you study, they study."
  },

  {
    id: 14,
    tipo: "radio",
    pregunta: "What is the NEGATIVE form of 'They work in London'?",
    opciones: [
      { valor: "a", texto: "They no work in London." },
      { valor: "b", texto: "They not work in London." },
      { valor: "c", texto: "They don't work in London." },
      { valor: "d", texto: "They doesn't work in London." }
    ],
    respuestaCorrecta: "c",
    explicacion: "'They don't work' is correct. Negative: I/you/we/they + DON'T + verb (base form). He/she/it + DOESN'T + verb (base form)."
  },

  {
    id: 15,
    tipo: "radio",
    pregunta: "Complete: 'She _____ eat meat. She's vegetarian.' (negative)",
    opciones: [
      { valor: "a", texto: "don't" },
      { valor: "b", texto: "doesn't" },
      { valor: "c", texto: "isn't" },
      { valor: "d", texto: "no" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'She doesn't eat' is correct. Use DOESN'T with he/she/it. Important: After doesn't, use the BASE FORM of the verb (eat, not eats)."
  },

  {
    id: 16,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct question:",
    palabras: ["pizza", "you", "Do", "like", "?"],
    respuestaCorrecta: ["Do", "you", "like", "pizza", "?"],
    explicacion: "Questions in Present Simple: DO/DOES + subject + verb (base form) + ? → 'Do you like pizza?'"
  },

  {
    id: 17,
    tipo: "radio",
    pregunta: "What is the QUESTION form of 'He plays football'?",
    opciones: [
      { valor: "a", texto: "Do he play football?" },
      { valor: "b", texto: "Does he plays football?" },
      { valor: "c", texto: "Does he play football?" },
      { valor: "d", texto: "He plays football?" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Does he play' is correct. Questions with he/she/it: DOES + subject + verb (base form) + ? Remember: use base form 'play', not 'plays' after DOES."
  },

  {
    id: 18,
    tipo: "fill-blanks",
    pregunta: "Complete: '_____ she live in Madrid?' (question)",
    espacios: [
      { id: 1, respuestas: ["Does", "does"] }
    ],
    explicacion: "'Does she live' is correct. Use DOES for questions with he/she/it: Does she/he/it + verb (base form) + ?"
  },

  {
    id: 19,
    tipo: "radio",
    pregunta: "Which verb form is CORRECT? 'My brother _____ television every evening.'",
    opciones: [
      { valor: "a", texto: "watch" },
      { valor: "b", texto: "watchs" },
      { valor: "c", texto: "watches" },
      { valor: "d", texto: "watching" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'watches' is correct. Spelling rule: verbs ending in -ch, -sh, -s, -x, -o add -ES with he/she/it: watch → watches, go → goes, fix → fixes."
  },

  {
    id: 20,
    tipo: "true-false",
    pregunta: "This sentence is correct: 'She don't like coffee.'",
    respuestaCorrecta: false,
    explicacion: "FALSE. The correct form is 'She doesn't like coffee.' Use DOESN'T (not DON'T) with he/she/it."
  },

  {
    id: 21,
    tipo: "radio",
    pregunta: "Choose the correct sentence:",
    opciones: [
      { valor: "a", texto: "We doesn't go to the gym." },
      { valor: "b", texto: "We don't go to the gym." },
      { valor: "c", texto: "We no go to the gym." },
      { valor: "d", texto: "We not go to the gym." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'We don't go' is correct. Use DON'T with I/you/we/they. Use DOESN'T only with he/she/it."
  },

  {
    id: 22,
    tipo: "fill-blanks",
    pregunta: "Complete the negative: 'They _____ _____ in a bank.' (work)",
    espacios: [
      { id: 1, respuestas: ["don't", "dont", "do not", "Do not", "Don't"] },
      { id: 2, respuestas: ["work", "Work"] }
    ],
    explicacion: "'They don't work' is correct. Negative structure: subject + don't/doesn't + verb (base form)."
  },

  {
    id: 23,
    tipo: "radio",
    pregunta: "What is the correct spelling? 'He _____ for a bus every morning.' (verb: wait)",
    opciones: [
      { valor: "a", texto: "waits" },
      { valor: "b", texto: "wait" },
      { valor: "c", texto: "waites" },
      { valor: "d", texto: "waiting" }
    ],
    respuestaCorrecta: "a",
    explicacion: "'He waits' is correct. Regular verbs add -S with he/she/it: wait → waits, work → works, play → plays."
  },

  {
    id: 24,
    tipo: "radio",
    pregunta: "Which sentence uses Present Simple to express a HABIT?",
    opciones: [
      { valor: "a", texto: "I am eating breakfast now." },
      { valor: "b", texto: "I eat breakfast at 8 o'clock every day." },
      { valor: "c", texto: "I will eat breakfast tomorrow." },
      { valor: "d", texto: "I ate breakfast yesterday." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'I eat breakfast every day' expresses a HABIT/ROUTINE. Present Simple is used for: habits, routines, facts, and things that happen regularly."
  },

  {
    id: 25,
    tipo: "matching",
    pregunta: "Match the subjects with the correct verb forms:",
    pares: [
      { izquierda: "She", derecha: "works" },
      { izquierda: "We", derecha: "work" },
      { izquierda: "He", derecha: "studies" },
      { izquierda: "They", derecha: "study" }
    ],
    explicacion: "He/she/it takes -S/-ES: works, studies. I/you/we/they use base form: work, study."
  },

  {
    id: 26,
    tipo: "radio",
    pregunta: "Complete: 'My sister _____ three languages.' (speak)",
    opciones: [
      { valor: "a", texto: "speak" },
      { valor: "b", texto: "speaks" },
      { valor: "c", texto: "speakes" },
      { valor: "d", texto: "speaking" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'My sister speaks' is correct. Add -S to most verbs with he/she/it: speak → speaks, read → reads, write → writes."
  },

  {
    id: 27,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a negative sentence:",
    palabras: ["alcohol", "don't", "drink", "I"],
    respuestaCorrecta: ["I", "don't", "drink", "alcohol"],
    explicacion: "Negative structure: subject + don't/doesn't + verb (base form). 'I don't drink alcohol.'"
  },

  {
    id: 28,
    tipo: "radio",
    pregunta: "Which question is CORRECT?",
    opciones: [
      { valor: "a", texto: "Where you live?" },
      { valor: "b", texto: "Where do you live?" },
      { valor: "c", texto: "Where you do live?" },
      { valor: "d", texto: "Where are you live?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Where do you live?' is correct. Question structure: WH-word + do/does + subject + verb (base form) + ?"
  },

  {
    id: 29,
    tipo: "fill-blanks",
    pregunta: "Complete the question: '_____ she _____ to music?' (listen)",
    espacios: [
      { id: 1, respuestas: ["Does", "does"] },
      { id: 2, respuestas: ["listen", "Listen"] }
    ],
    explicacion: "'Does she listen' is correct. Question with he/she/it: Does + subject + verb (base form) + ?"
  },

  {
    id: 30,
    tipo: "radio",
    pregunta: "What is the correct short answer to: 'Do you like chocolate?' (Yes)",
    opciones: [
      { valor: "a", texto: "Yes, I like." },
      { valor: "b", texto: "Yes, I do." },
      { valor: "c", texto: "Yes, I'm." },
      { valor: "d", texto: "Yes, I am." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Yes, I do.' is correct. Short answers: Yes, I/you/we/they do. Yes, he/she/it does. Don't repeat the main verb in short answers."
  },

  {
    id: 31,
    tipo: "radio",
    pregunta: "Complete: 'He _____ his homework after dinner.' (do)",
    opciones: [
      { valor: "a", texto: "do" },
      { valor: "b", texto: "dos" },
      { valor: "c", texto: "does" },
      { valor: "d", texto: "doing" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'He does' is correct. The verb DO is irregular: I/you/we/they DO, but he/she/it DOES."
  },

  {
    id: 32,
    tipo: "true-false",
    pregunta: "This sentence is correct: 'Does they play tennis?'",
    respuestaCorrecta: false,
    explicacion: "FALSE. The correct form is 'Do they play tennis?' Use DO with I/you/we/they. Use DOES only with he/she/it."
  },

  {
    id: 33,
    tipo: "radio",
    pregunta: "Which verb form is correct? 'The baby _____ a lot.' (cry)",
    opciones: [
      { valor: "a", texto: "cry" },
      { valor: "b", texto: "crys" },
      { valor: "c", texto: "cries" },
      { valor: "d", texto: "crying" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'cries' is correct. Spelling rule: verbs ending in CONSONANT + Y → change Y to IES: cry → cries, study → studies, try → tries."
  },

  {
    id: 34,
    tipo: "fill-blanks",
    pregunta: "Negative: 'My parents _____ _____ TV in the morning.' (watch)",
    espacios: [
      { id: 1, respuestas: ["don't", "dont", "do not", "Don't", "Do not"] },
      { id: 2, respuestas: ["watch", "Watch"] }
    ],
    explicacion: "'don't watch' is correct. Negative with I/you/we/they: don't + verb (base form)."
  },

  {
    id: 35,
    tipo: "radio",
    pregunta: "What is the correct question? (Ask about his job)",
    opciones: [
      { valor: "a", texto: "What he does do?" },
      { valor: "b", texto: "What does he do?" },
      { valor: "c", texto: "What do he does?" },
      { valor: "d", texto: "What he do?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'What does he do?' is correct. This asks about someone's JOB/PROFESSION. Structure: What + does + subject + do?"
  },

  {
    id: 36,
    tipo: "radio",
    pregunta: "Complete: 'We _____ football on Saturdays.' (play)",
    opciones: [
      { valor: "a", texto: "plays" },
      { valor: "b", texto: "play" },
      { valor: "c", texto: "playes" },
      { valor: "d", texto: "playing" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'We play' is correct. With we/they, use the BASE FORM (no -s): We play, they play, we work, they work."
  },

  {
    id: 37,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a question:",
    palabras: ["work", "Does", "here", "brother", "your", "?"],
    respuestaCorrecta: ["Does", "your", "brother", "work", "here", "?"],
    explicacion: "Question structure: Does + subject + verb (base form) + complement + ? → 'Does your brother work here?'"
  },

  {
    id: 38,
    tipo: "radio",
    pregunta: "Which is the correct short answer to: 'Does she speak English?' (No)",
    opciones: [
      { valor: "a", texto: "No, she don't." },
      { valor: "b", texto: "No, she doesn't." },
      { valor: "c", texto: "No, she isn't." },
      { valor: "d", texto: "No, she not." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'No, she doesn't.' is correct. Short answer for he/she/it: Yes, he/she/it does. No, he/she/it doesn't."
  },

  {
    id: 39,
    tipo: "radio",
    pregunta: "Choose the correct spelling: 'My father _____ to work by car.' (go)",
    opciones: [
      { valor: "a", texto: "gos" },
      { valor: "b", texto: "goe" },
      { valor: "c", texto: "goes" },
      { valor: "d", texto: "go" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'goes' is correct. Verbs ending in -o add -ES with he/she/it: go → goes, do → does."
  },

  {
    id: 40,
    tipo: "fill-blanks",
    pregunta: "Complete: '_____ you _____ coffee or tea?' (prefer)",
    espacios: [
      { id: 1, respuestas: ["Do", "do"] },
      { id: 2, respuestas: ["prefer", "Prefer"] }
    ],
    explicacion: "'Do you prefer' is correct. Questions with you: Do + you + verb (base form) + ?"
  },

  {
    id: 41,
    tipo: "radio",
    pregunta: "Which adverb means '100% of the time'?",
    opciones: [
      { valor: "a", texto: "sometimes" },
      { valor: "b", texto: "usually" },
      { valor: "c", texto: "always" },
      { valor: "d", texto: "often" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Always' = 100% (every time). Frequency scale: always (100%) > usually (80%) > often (60%) > sometimes (40%) > rarely/seldom (20%) > never (0%)."
  },

  {
    id: 42,
    tipo: "radio",
    pregunta: "Where do adverbs of frequency usually go in a sentence with a main verb?",
    opciones: [
      { valor: "a", texto: "At the beginning of the sentence" },
      { valor: "b", texto: "Between the subject and the verb" },
      { valor: "c", texto: "At the end of the sentence" },
      { valor: "d", texto: "Before the subject" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Adverbs of frequency go BETWEEN the subject and the verb: 'I always drink coffee.' Structure: Subject + adverb + verb."
  },

  {
    id: 43,
    tipo: "fill-blanks",
    pregunta: "Complete: 'She _____ goes to the gym. She goes every single day!' (100%)",
    espacios: [
      { id: 1, respuestas: ["always", "Always"] }
    ],
    explicacion: "'always' is correct. Use ALWAYS for things that happen 100% of the time (every time, without exception)."
  },

  {
    id: 44,
    tipo: "radio",
    pregunta: "Which sentence has the adverb of frequency in the CORRECT position?",
    opciones: [
      { valor: "a", texto: "I go always to bed at 11 PM." },
      { valor: "b", texto: "I always go to bed at 11 PM." },
      { valor: "c", texto: "Always I go to bed at 11 PM." },
      { valor: "d", texto: "I go to bed always at 11 PM." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'I always go' is correct. Position: subject + adverb + main verb. Exception: with verb TO BE, the adverb comes AFTER: 'I am always tired.'"
  },

  {
    id: 45,
    tipo: "matching",
    pregunta: "Match the adverbs with their frequency percentage:",
    pares: [
      { izquierda: "never", derecha: "0%" },
      { izquierda: "sometimes", derecha: "40%" },
      { izquierda: "usually", derecha: "80%" },
      { izquierda: "always", derecha: "100%" }
    ],
    explicacion: "Frequency scale: always (100%) > usually (80%) > often (60%) > sometimes (40%) > rarely (20%) > never (0%)."
  },

  {
    id: 46,
    tipo: "radio",
    pregunta: "Complete: 'He _____ eats meat. He only eats vegetables.' (0%)",
    opciones: [
      { valor: "a", texto: "always" },
      { valor: "b", texto: "sometimes" },
      { valor: "c", texto: "never" },
      { valor: "d", texto: "usually" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'never' = 0% (not at any time). 'He never eats meat' means he doesn't eat meat at all."
  },

  {
    id: 47,
    tipo: "radio",
    pregunta: "Where does the adverb of frequency go with the verb TO BE?",
    opciones: [
      { valor: "a", texto: "Before the verb TO BE" },
      { valor: "b", texto: "After the verb TO BE" },
      { valor: "c", texto: "At the beginning of the sentence" },
      { valor: "d", texto: "At the end of the sentence" }
    ],
    respuestaCorrecta: "b",
    explicacion: "With TO BE, the adverb comes AFTER: 'She is always happy.' Structure: subject + TO BE + adverb + adjective/complement."
  },

  {
    id: 48,
    tipo: "sentence-ordering",
    pregunta: "Put the words in the correct order:",
    palabras: ["have", "at", "PM", "usually", "7", "We", "dinner"],
    respuestaCorrecta: ["We", "usually", "have", "dinner", "at", "7", "PM"],
    explicacion: "Correct order: subject + adverb + verb + complement. 'We usually have dinner at 7 PM.'"
  },

  {
    id: 49,
    tipo: "radio",
    pregunta: "Which adverb means 'most of the time, but not always'?",
    opciones: [
      { valor: "a", texto: "never" },
      { valor: "b", texto: "always" },
      { valor: "c", texto: "usually" },
      { valor: "d", texto: "rarely" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Usually' = 80% (most of the time, but not 100%). Example: 'I usually wake up at 7 AM' (most days, but maybe not weekends)."
  },

  {
    id: 50,
    tipo: "fill-blanks",
    pregunta: "Complete: 'They are _____ late for class. They arrive late every day!' (100%)",
    espacios: [
      { id: 1, respuestas: ["always", "Always"] }
    ],
    explicacion: "'always' is correct. With TO BE: subject + TO BE + always + adjective. 'They are always late.'"
  },

  {
    id: 51,
    tipo: "true-false",
    pregunta: "'Rarely' means the same as 'always'.",
    respuestaCorrecta: false,
    explicacion: "FALSE. 'Rarely' = 20% (not often, almost never). 'Always' = 100% (every time). They are opposite."
  },

  {
    id: 52,
    tipo: "radio",
    pregunta: "Complete: 'I _____ go to the cinema. Maybe once or twice a month.' (40%)",
    opciones: [
      { valor: "a", texto: "always" },
      { valor: "b", texto: "sometimes" },
      { valor: "c", texto: "never" },
      { valor: "d", texto: "usually" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'sometimes' = 40% (occasionally, from time to time). 'I sometimes go to the cinema' = I go occasionally, not regularly."
  },

  {
    id: 53,
    tipo: "radio",
    pregunta: "Which sentence is CORRECT?",
    opciones: [
      { valor: "a", texto: "She is tired always." },
      { valor: "b", texto: "She always is tired." },
      { valor: "c", texto: "She is always tired." },
      { valor: "d", texto: "Always she is tired." }
    ],
    respuestaCorrecta: "c",
    explicacion: "'She is always tired' is correct. With TO BE: subject + TO BE + adverb + adjective/complement."
  },

  {
    id: 54,
    tipo: "fill-blanks",
    pregunta: "Complete: 'He _____ drinks alcohol. Maybe once a year.' (20%)",
    espacios: [
      { id: 1, respuestas: ["rarely", "Rarely", "seldom", "Seldom"] }
    ],
    explicacion: "'rarely' or 'seldom' = 20% (not often, almost never). Both words mean the same thing."
  },

  {
    id: 55,
    tipo: "radio",
    pregunta: "Can 'sometimes' go at the beginning or end of a sentence?",
    opciones: [
      { valor: "a", texto: "No, only in the middle" },
      { valor: "b", texto: "Yes, it can go at the beginning, middle, or end" },
      { valor: "c", texto: "Only at the beginning" },
      { valor: "d", texto: "Only at the end" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Sometimes' is flexible and can go in 3 positions: 'Sometimes I drink tea.' / 'I sometimes drink tea.' / 'I drink tea sometimes.' All are correct!"
  },

  {
    id: 56,
    tipo: "radio",
    pregunta: "Complete: 'John is a teacher. _____ students love him.'",
    opciones: [
      { valor: "a", texto: "Her" },
      { valor: "b", texto: "His" },
      { valor: "c", texto: "Their" },
      { valor: "d", texto: "Its" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'His' is correct. HIS = possessive for HE (male). Use HIS for things belonging to a man: his car, his book, his students."
  },

  {
    id: 57,
    tipo: "radio",
    pregunta: "Complete: 'Maria is a doctor. _____ patients trust her.'",
    opciones: [
      { valor: "a", texto: "His" },
      { valor: "b", texto: "Her" },
      { valor: "c", texto: "Their" },
      { valor: "d", texto: "Its" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Her' is correct. HER = possessive for SHE (female). Use HER for things belonging to a woman: her car, her book, her patients."
  },

  {
    id: 58,
    tipo: "radio",
    pregunta: "Complete: 'My parents live in Spain. _____ house is near the beach.'",
    opciones: [
      { valor: "a", texto: "His" },
      { valor: "b", texto: "Her" },
      { valor: "c", texto: "Their" },
      { valor: "d", texto: "Its" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Their' is correct. THEIR = possessive for THEY (plural). Use THEIR for things belonging to more than one person: their house, their car, their children."
  },

  {
    id: 59,
    tipo: "matching",
    pregunta: "Match the subject pronouns with their possessive adjectives:",
    pares: [
      { izquierda: "he", derecha: "his" },
      { izquierda: "she", derecha: "her" },
      { izquierda: "it", derecha: "its" },
      { izquierda: "they", derecha: "their" }
    ],
    explicacion: "Possessive adjectives: I → my, you → your, he → his, she → her, it → its, we → our, they → their."
  },

  {
    id: 60,
    tipo: "fill-blanks",
    pregunta: "Complete: 'Sarah has a cat. _____ cat is very friendly.' (she)",
    espacios: [
      { id: 1, respuestas: ["Her", "her"] }
    ],
    explicacion: "'Her' is correct. Sarah = she, so use HER. Structure: possessive adjective + noun."
  },

  {
    id: 61,
    tipo: "radio",
    pregunta: "Complete: 'Tom and Lisa are married. _____ children go to the same school.'",
    opciones: [
      { valor: "a", texto: "His" },
      { valor: "b", texto: "Her" },
      { valor: "c", texto: "Their" },
      { valor: "d", texto: "Its" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Their' is correct. Tom and Lisa = they (plural), so use THEIR. 'Their children' = the children of Tom and Lisa."
  },

  {
    id: 62,
    tipo: "true-false",
    pregunta: "'Its' (possessive) and 'it's' (contraction) are the same thing.",
    respuestaCorrecta: false,
    explicacion: "FALSE. ITS (no apostrophe) = possessive: 'The dog wagged its tail.' IT'S (with apostrophe) = IT IS: 'It's raining.' Common mistake!"
  },

  {
    id: 63,
    tipo: "radio",
    pregunta: "Complete: 'My brother loves _____ new job.'",
    opciones: [
      { valor: "a", texto: "he" },
      { valor: "b", texto: "him" },
      { valor: "c", texto: "his" },
      { valor: "d", texto: "her" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'his' is correct. My brother = he, so use HIS (possessive). 'His new job' = the job belonging to him."
  },

  {
    id: 64,
    tipo: "fill-blanks",
    pregunta: "Complete: 'Emma is a nurse. _____ job is very stressful.' (she)",
    espacios: [
      { id: 1, respuestas: ["Her", "her"] }
    ],
    explicacion: "'Her' is correct. Emma = she, so use HER. 'Her job' = the job belonging to Emma."
  },

  {
    id: 65,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order:",
    palabras: ["car", "loves", "new", "sister", "My", "her"],
    respuestaCorrecta: ["My", "sister", "loves", "her", "new", "car"],
    explicacion: "Correct order: subject + verb + possessive + adjective + noun. 'My sister loves her new car.'"
  },

  {
    id: 66,
    tipo: "radio",
    pregunta: "Complete: 'The dog is hungry. Give _____ some food.' (talking about the dog)",
    opciones: [
      { valor: "a", texto: "its" },
      { valor: "b", texto: "it" },
      { valor: "c", texto: "his" },
      { valor: "d", texto: "their" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'it' is correct. This is an OBJECT PRONOUN, not a possessive. 'Give it food' = give food to the dog. Object pronouns: me, you, him, her, it, us, them."
  },

  {
    id: 67,
    tipo: "radio",
    pregunta: "Complete: 'My friends live in London. I visit _____ every summer.'",
    opciones: [
      { valor: "a", texto: "they" },
      { valor: "b", texto: "their" },
      { valor: "c", texto: "them" },
      { valor: "d", texto: "theirs" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'them' is correct. This is an OBJECT PRONOUN. 'I visit them' = I visit my friends. Don't confuse: THEIR (possessive) vs THEM (object pronoun)."
  },

  {
    id: 68,
    tipo: "fill-blanks",
    pregunta: "Complete: 'Peter has a new phone. _____ phone is very expensive.' (he)",
    espacios: [
      { id: 1, respuestas: ["His", "his"] }
    ],
    explicacion: "'His' is correct. Peter = he, so use HIS. 'His phone' = the phone belonging to Peter."
  },

  {
    id: 69,
    tipo: "radio",
    pregunta: "Which sentence is CORRECT?",
    opciones: [
      { valor: "a", texto: "Anna loves she dog." },
      { valor: "b", texto: "Anna loves her dog." },
      { valor: "c", texto: "Anna loves hers dog." },
      { valor: "d", texto: "Anna loves his dog." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Anna loves her dog' is correct. Anna = she, so use HER (possessive adjective). Structure: possessive adjective + noun."
  },

  {
    id: 70,
    tipo: "radio",
    pregunta: "Complete: 'My colleagues are very friendly. I like _____ a lot.'",
    opciones: [
      { valor: "a", texto: "they" },
      { valor: "b", texto: "their" },
      { valor: "c", texto: "them" },
      { valor: "d", texto: "theirs" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'them' is correct. 'I like them' = I like my colleagues. THEM is an OBJECT PRONOUN (receives the action of the verb)."
  },

  {
    id: 71,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a question: (verb: read)",
    palabras: ["books", "Do", "you", "read", "every", "day", "?"],
    respuestaCorrecta: ["Do", "you", "read", "books", "every", "day", "?"],
    explicacion: "Question structure: Do + you + verb (base form) + object + time expression + ? → 'Do you read books every day?'"
  },

  {
    id: 72,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a question: (verb: cook)",
    palabras: ["Does", "dinner", "cook", "she", "for", "her", "family", "?"],
    respuestaCorrecta: ["Does", "she", "cook", "dinner", "for", "her", "family", "?"],
    explicacion: "Question with he/she/it: Does + subject + verb (base form) + object + prepositional phrase + ? → 'Does she cook dinner for her family?'"
  },

  {
    id: 73,
    tipo: "sentence-ordering",
    pregunta: "Order the words to form a correct question: (verb: listen)",
    palabras: ["listen", "the", "they", "to", "Do", "radio", "in", "car", "?"],
    respuestaCorrecta: ["Do", "they", "listen", "to", "the", "radio", "in", "the", "car", "?"],
    explicacion: "Question: Do + they + verb + prepositional phrases + ? → 'Do they listen to the radio in the car?'"
  },

  {
    id: 74,
    tipo: "sentence-ordering",
    pregunta: "Make a question with these words: (verb: watch)",
    palabras: ["watch", "Does", "television", "he", "after", "work", "?"],
    respuestaCorrecta: ["Does", "he", "watch", "television", "after", "work", "?"],
    explicacion: "Question: Does + he + verb + object + time expression + ? → 'Does he watch television after work?'"
  },

  {
    id: 75,
    tipo: "sentence-ordering",
    pregunta: "Order these words to make a question: (verb: surf)",
    palabras: ["surf", "weekend", "the", "you", "Internet", "on", "Do", "?"],
    respuestaCorrecta: ["Do", "you", "surf", "the", "Internet", "on", "the", "weekend", "?"],
    explicacion: "Question: Do + you + verb + object + time expression + ? → 'Do you surf the Internet on the weekend?'"
  },

  {
    id: 76,
    tipo: "sentence-ordering",
    pregunta: "Put the words in the correct order: (verb: check)",
    palabras: ["check", "Does", "email", "morning", "every", "her", "she", "?"],
    respuestaCorrecta: ["Does", "she", "check", "her", "email", "every", "morning", "?"],
    explicacion: "Question: Does + she + verb + possessive + object + frequency + ? → 'Does she check her email every morning?'"
  },

  {
    id: 77,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a question: (verb: send)",
    palabras: ["messages", "send", "Do", "text", "you", "to", "friends", "your", "?"],
    respuestaCorrecta: ["Do", "you", "send", "text", "messages", "to", "your", "friends", "?"],
    explicacion: "Question: Do + you + verb + object + prepositional phrase + ? → 'Do you send text messages to your friends?'"
  },

  {
    id: 78,
    tipo: "sentence-ordering",
    pregunta: "Make a question with these words: (verb: talk)",
    palabras: ["Does", "talk", "on", "phone", "the", "she", "lot", "a", "?"],
    respuestaCorrecta: ["Does", "she", "talk", "on", "the", "phone", "a", "lot", "?"],
    explicacion: "Question: Does + she + verb + prepositional phrase + complement + ? → 'Does she talk on the phone a lot?'"
  },

  {
    id: 79,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order: (verb: write)",
    palabras: ["write", "Do", "emails", "work", "you", "at", "?"],
    respuestaCorrecta: ["Do", "you", "write", "emails", "at", "work", "?"],
    explicacion: "Question: Do + you + verb + object + place + ? → 'Do you write emails at work?'"
  },

  {
    id: 80,
    tipo: "sentence-ordering",
    pregunta: "Order these words to form a question: (verb: open)",
    palabras: ["Does", "open", "shop", "the", "Sundays", "on", "?"],
    respuestaCorrecta: ["Does", "the", "shop", "open", "on", "Sundays", "?"],
    explicacion: "Question: Does + subject + verb + time expression + ? → 'Does the shop open on Sundays?'"
  },

  {
    id: 81,
    tipo: "sentence-ordering",
    pregunta: "Make a question with these words: (verb: close)",
    palabras: ["close", "Do", "the", "banks", "at", "o'clock", "5", "?"],
    respuestaCorrecta: ["Do", "the", "banks", "close", "at", "5", "o'clock", "?"],
    explicacion: "Question: Do + plural subject + verb + time + ? → 'Do the banks close at 5 o'clock?'"
  },

  {
    id: 82,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a question: (verb: clean)",
    palabras: ["clean", "Does", "house", "the", "weekends", "on", "she", "?"],
    respuestaCorrecta: ["Does", "she", "clean", "the", "house", "on", "weekends", "?"],
    explicacion: "Question: Does + she + verb + object + time + ? → 'Does she clean the house on weekends?'"
  },

  {
    id: 83,
    tipo: "sentence-ordering",
    pregunta: "Order the words to form a question: (verb: call)",
    palabras: ["call", "Do", "parents", "your", "you", "week", "every", "?"],
    respuestaCorrecta: ["Do", "you", "call", "your", "parents", "every", "week", "?"],
    explicacion: "Question: Do + you + verb + possessive + object + frequency + ? → 'Do you call your parents every week?'"
  },

  {
    id: 84,
    tipo: "sentence-ordering",
    pregunta: "Make a question with these words: (verb: live)",
    palabras: ["live", "Does", "city", "in", "your", "brother", "the", "?"],
    respuestaCorrecta: ["Does", "your", "brother", "live", "in", "the", "city", "?"],
    explicacion: "Question: Does + possessive + subject + verb + place + ? → 'Does your brother live in the city?'"
  },

  {
    id: 85,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a question: (verb: work)",
    palabras: ["work", "Do", "weekends", "on", "they", "?"],
    respuestaCorrecta: ["Do", "they", "work", "on", "weekends", "?"],
    explicacion: "Question: Do + they + verb + time expression + ? → 'Do they work on weekends?'"
  },

  {
    id: 86,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a negative sentence: (verb: study)",
    palabras: ["study", "don't", "weekends", "I", "on"],
    respuestaCorrecta: ["I", "don't", "study", "on", "weekends"],
    explicacion: "Negative: I + don't + verb (base form) + time expression. → 'I don't study on weekends.'"
  },

  {
    id: 87,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a negative sentence: (verb: like)",
    palabras: ["like", "doesn't", "She", "music", "loud"],
    respuestaCorrecta: ["She", "doesn't", "like", "loud", "music"],
    explicacion: "Negative: She + doesn't + verb (base form) + adjective + object. → 'She doesn't like loud music.'"
  },

  {
    id: 88,
    tipo: "sentence-ordering",
    pregunta: "Order these words to form a negative sentence: (verb: play)",
    palabras: ["play", "don't", "sports", "We", "winter", "in"],
    respuestaCorrecta: ["We", "don't", "play", "sports", "in", "winter"],
    explicacion: "Negative: We + don't + verb + object + time. → 'We don't play sports in winter.'"
  },

  {
    id: 89,
    tipo: "sentence-ordering",
    pregunta: "Make a negative sentence with these words: (verb: love)",
    palabras: ["love", "doesn't", "He", "coffee", "morning", "the", "in"],
    respuestaCorrecta: ["He", "doesn't", "love", "coffee", "in", "the", "morning"],
    explicacion: "Negative: He + doesn't + verb + object + time expression. → 'He doesn't love coffee in the morning.'"
  },

  {
    id: 90,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a negative sentence: (verb: eat)",
    palabras: ["eat", "don't", "fast", "They", "food"],
    respuestaCorrecta: ["They", "don't", "eat", "fast", "food"],
    explicacion: "Negative: They + don't + verb + adjective + object. → 'They don't eat fast food.'"
  },

  {
    id: 91,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to form a negative sentence: (verb: hate)",
    palabras: ["hate", "doesn't", "vegetables", "brother", "My"],
    respuestaCorrecta: ["My", "brother", "doesn't", "hate", "vegetables"],
    explicacion: "Negative: Subject + doesn't + verb + object. → 'My brother doesn't hate vegetables.'"
  },

  {
    id: 92,
    tipo: "sentence-ordering",
    pregunta: "Order these words to make a negative sentence: (verb: drink)",
    palabras: ["drink", "don't", "I", "soda", "often"],
    respuestaCorrecta: ["I", "don't", "drink", "soda", "often"],
    explicacion: "Negative with adverb: I + don't + verb + object + adverb. → 'I don't drink soda often.' Note: adverbs can also go between don't and verb."
  },

  {
    id: 93,
    tipo: "sentence-ordering",
    pregunta: "Make a negative sentence: (verb: sleep)",
    palabras: ["sleep", "doesn't", "well", "nights", "She", "at"],
    respuestaCorrecta: ["She", "doesn't", "sleep", "well", "at", "nights"],
    explicacion: "Negative: She + doesn't + verb + adverb + time. → 'She doesn't sleep well at nights.'"
  },

  {
    id: 94,
    tipo: "sentence-ordering",
    pregunta: "Order the words to form a negative sentence: (verb: walk)",
    palabras: ["walk", "don't", "school", "to", "We"],
    respuestaCorrecta: ["We", "don't", "walk", "to", "school"],
    explicacion: "Negative: We + don't + verb + prepositional phrase. → 'We don't walk to school.'"
  },

  {
    id: 95,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a negative sentence: (verb: drive)",
    palabras: ["drive", "doesn't", "work", "to", "He", "car", "his"],
    respuestaCorrecta: ["He", "doesn't", "drive", "his", "car", "to", "work"],
    explicacion: "Negative: He + doesn't + verb + possessive + object + place. → 'He doesn't drive his car to work.'"
  },

  {
    id: 96,
    tipo: "sentence-ordering",
    pregunta: "Order these words to make a negative sentence: (verb: help)",
    palabras: ["help", "don't", "homework", "parents", "their", "with", "They"],
    respuestaCorrecta: ["They", "don't", "help", "their", "parents", "with", "homework"],
    explicacion: "Negative: They + don't + verb + possessive + object + prepositional phrase. → 'They don't help their parents with homework.'"
  },

  {
    id: 97,
    tipo: "sentence-ordering",
    pregunta: "Make a negative sentence with these words: (verb: visit)",
    palabras: ["visit", "doesn't", "grandmother", "She", "her", "often"],
    respuestaCorrecta: ["She", "doesn't", "visit", "her", "grandmother", "often"],
    explicacion: "Negative with adverb: She + doesn't + verb + possessive + object + adverb. → 'She doesn't visit her grandmother often.'"
  },

  {
    id: 98,
    tipo: "sentence-ordering",
    pregunta: "Order the words to form a negative sentence: (verb: buy)",
    palabras: ["buy", "don't", "clothes", "expensive", "I"],
    respuestaCorrecta: ["I", "don't", "buy", "expensive", "clothes"],
    explicacion: "Negative: I + don't + verb + adjective + object. → 'I don't buy expensive clothes.'"
  },

  {
    id: 99,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a negative sentence: (verb: do)",
    palabras: ["do", "doesn't", "homework", "his", "He", "night", "at"],
    respuestaCorrecta: ["He", "doesn't", "do", "his", "homework", "at", "night"],
    explicacion: "Negative with DO: He + doesn't + do + possessive + object + time. → 'He doesn't do his homework at night.' Remember: DO is also a main verb!"
  },

  {
    id: 100,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a negative sentence: (verb: go)",
    palabras: ["go", "don't", "gym", "the", "Sundays", "We", "on", "to"],
    respuestaCorrecta: ["We", "don't", "go", "to", "the", "gym", "on", "Sundays"],
    explicacion: "Negative: We + don't + verb + prepositional phrases + time. → 'We don't go to the gym on Sundays.'"
  },

  {
    id: 101,
    tipo: "radio",
    pregunta: "Which verb is spelled CORRECTLY in the third person singular? (verb: pass)",
    opciones: [
      { valor: "a", texto: "passs" },
      { valor: "b", texto: "passes" },
      { valor: "c", texto: "pass" },
      { valor: "d", texto: "pases" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'passes' is correct. Spelling rule: verbs ending in -SS, -S, -X, -SH, -CH, -O → add -ES with he/she/it. Examples: pass → passes, fix → fixes, wash → washes."
  },

  {
    id: 102,
    tipo: "radio",
    pregunta: "Complete: 'He _____ his hands before eating.' (verb: wash)",
    opciones: [
      { valor: "a", texto: "wash" },
      { valor: "b", texto: "washs" },
      { valor: "c", texto: "washes" },
      { valor: "d", texto: "washies" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'washes' is correct. Verbs ending in -SH add -ES: wash → washes, finish → finishes, brush → brushes."
  },

  {
    id: 103,
    tipo: "radio",
    pregunta: "What is the correct form? 'She _____ broken things.' (verb: fix)",
    opciones: [
      { valor: "a", texto: "fix" },
      { valor: "b", texto: "fixs" },
      { valor: "c", texto: "fixes" },
      { valor: "d", texto: "fixies" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'fixes' is correct. Verbs ending in -X add -ES: fix → fixes, mix → mixes, relax → relaxes."
  },

  {
    id: 104,
    tipo: "radio",
    pregunta: "Complete: 'The teacher _____ English.' (verb: teach)",
    opciones: [
      { valor: "a", texto: "teach" },
      { valor: "b", texto: "teachs" },
      { valor: "c", texto: "teaches" },
      { valor: "d", texto: "teachies" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'teaches' is correct. Verbs ending in -CH add -ES: teach → teaches, watch → watches, catch → catches."
  },

  {
    id: 105,
    tipo: "radio",
    pregunta: "Which is CORRECT? 'She _____ the exam.' (verb: pass)",
    opciones: [
      { valor: "a", texto: "pass" },
      { valor: "b", texto: "passs" },
      { valor: "c", texto: "passes" },
      { valor: "d", texto: "pas" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'passes' is correct. Verbs ending in -SS add -ES: pass → passes, kiss → kisses, miss → misses."
  },

  {
    id: 106,
    tipo: "matching",
    pregunta: "Match the verbs with their correct third person singular forms:",
    pares: [
      { izquierda: "carry", derecha: "carries" },
      { izquierda: "play", derecha: "plays" },
      { izquierda: "worry", derecha: "worries" },
      { izquierda: "enjoy", derecha: "enjoys" }
    ],
    explicacion: "CONSONANT + Y → -IES (carry → carries, worry → worries). VOWEL + Y → -S (play → plays, enjoy → enjoys, say → says)."
  },

  {
    id: 107,
    tipo: "radio",
    pregunta: "Complete: 'The bird _____ in the sky.' (verb: fly)",
    opciones: [
      { valor: "a", texto: "flys" },
      { valor: "b", texto: "flies" },
      { valor: "c", texto: "flyes" },
      { valor: "d", texto: "fly" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'flies' is correct. CONSONANT + Y → change Y to IES: fly → flies, try → tries, cry → cries."
  },

  {
    id: 108,
    tipo: "radio",
    pregunta: "Which is CORRECT? 'He _____ heavy boxes.' (verb: carry)",
    opciones: [
      { valor: "a", texto: "carry" },
      { valor: "b", texto: "carrys" },
      { valor: "c", texto: "carries" },
      { valor: "d", texto: "carryes" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'carries' is correct. CONSONANT + Y → -IES: carry → carries. Compare with VOWEL + Y → -S: play → plays."
  },

  {
    id: 109,
    tipo: "true-false",
    pregunta: "This is correct: 'He enjoyes music.' (verb: enjoy)",
    respuestaCorrecta: false,
    explicacion: "FALSE. The correct form is 'He enjoys music.' VOWEL + Y → just add -S (not -IES): enjoy → enjoys, play → plays, say → says."
  },

  {
    id: 110,
    tipo: "radio",
    pregunta: "Complete: 'She _____ about her job.' (verb: worry)",
    opciones: [
      { valor: "a", texto: "worry" },
      { valor: "b", texto: "worrys" },
      { valor: "c", texto: "worries" },
      { valor: "d", texto: "worryes" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'worries' is correct. CONSONANT + Y → -IES: worry → worries, study → studies, try → tries."
  },

  {
    id: 111,
    tipo: "radio",
    pregunta: "Which verb form is IRREGULAR? 'He _____ a car.'",
    opciones: [
      { valor: "a", texto: "have" },
      { valor: "b", texto: "haves" },
      { valor: "c", texto: "has" },
      { valor: "d", texto: "hase" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'has' is correct. HAVE is IRREGULAR: I/you/we/they have, but he/she/it HAS (not 'haves'). This is an exception!"
  },

  {
    id: 112,
    tipo: "fill-blanks",
    pregunta: "Complete: 'She _____ two brothers.' (verb: have - irregular)",
    espacios: [
      { id: 1, respuestas: ["has", "Has"] }
    ],
    explicacion: "'has' is correct. HAVE is irregular with he/she/it: She has, He has, It has."
  },

  {
    id: 113,
    tipo: "matching",
    pregunta: "Match the verbs with their correct spelling rules:",
    pares: [
      { izquierda: "wash → washes", derecha: "-SH adds -ES" },
      { izquierda: "study → studies", derecha: "consonant+Y → -IES" },
      { izquierda: "play → plays", derecha: "vowel+Y → -S" },
      { izquierda: "have → has", derecha: "irregular verb" }
    ],
    explicacion: "Four main spelling patterns: -SH/-CH/-X/-SS/-O add -ES; consonant+Y→IES; vowel+Y→S; irregulars (have→has, do→does, go→goes)."
  },

  {
    id: 114,
    tipo: "radio",
    pregunta: "Complete: 'My sister _____ to work by bus.' (verb: go)",
    opciones: [
      { valor: "a", texto: "go" },
      { valor: "b", texto: "gos" },
      { valor: "c", texto: "goes" },
      { valor: "d", texto: "goe" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'goes' is correct. Verbs ending in -O add -ES: go → goes, do → does."
  },

  {
    id: 115,
    tipo: "checkbox",
    pregunta: "Which verbs add -ES (not just -S) with he/she/it? Select ALL correct answers:",
    opciones: [
      { valor: "a", texto: "watch" },
      { valor: "b", texto: "work" },
      { valor: "c", texto: "fix" },
      { valor: "d", texto: "study" },
      { valor: "e", texto: "play" },
      { valor: "f", texto: "pass" }
    ],
    respuestasCorrectas: ["a", "c", "d", "f"],
    explicacion: "Add -ES: watch (ends -CH), fix (ends -X), study (consonant+Y), pass (ends -SS). Just add -S: work, play."
  },

  {
    id: 116,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a WH-question:",
    palabras: ["live", "do", "Where", "you", "?"],
    respuestaCorrecta: ["Where", "do", "you", "live", "?"],
    explicacion: "WH-question structure: WH-word + DO/DOES + subject + verb (base form) + ? → 'Where do you live?'"
  },

  {
    id: 117,
    tipo: "sentence-ordering",
    pregunta: "Make a question with these words:",
    palabras: ["start", "What", "does", "time", "work", "she", "?"],
    respuestaCorrecta: ["What", "time", "does", "she", "start", "work", "?"],
    explicacion: "Time question: What time + does + subject + verb + ? → 'What time does she start work?'"
  },

  {
    id: 118,
    tipo: "radio",
    pregunta: "Complete the question: '_____ do you go to the gym?' (asking about frequency)",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "How often" },
      { valor: "c", texto: "Where" },
      { valor: "d", texto: "Who" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'How often' is correct for frequency questions. 'How often do you go to the gym?' → 'Twice a week.'"
  },

  {
    id: 119,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order:",
    palabras: ["does", "Why", "English", "study", "he", "?"],
    respuestaCorrecta: ["Why", "does", "he", "study", "English", "?"],
    explicacion: "Why question: Why + does + subject + verb + object + ? → 'Why does he study English?'"
  },

  {
    id: 120,
    tipo: "radio",
    pregunta: "Complete: '_____ does she work?' → 'In a hospital.'",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "Where" },
      { valor: "c", texto: "When" },
      { valor: "d", texto: "Who" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Where' is correct for place questions. 'Where does she work?' asks about LOCATION. Answer: 'In a hospital.'"
  },

  {
    id: 121,
    tipo: "fill-blanks",
    pregunta: "Complete the question: '_____ do you get up?' (asking about time)",
    espacios: [
      { id: 1, respuestas: ["When", "when", "What time", "what time"] }
    ],
    explicacion: "'When' or 'What time' are correct. Both ask about TIME: 'When/What time do you get up?' → 'At 7 AM.'"
  },

  {
    id: 122,
    tipo: "radio",
    pregunta: "Complete: '_____ likes pizza?' (asking about a person)",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "Where" },
      { valor: "c", texto: "Who" },
      { valor: "d", texto: "How" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Who' is correct for person questions. 'Who likes pizza?' Note: WHO is the subject, so no DO/DOES needed! Answer: 'Tom likes pizza.'"
  },

  {
    id: 123,
    tipo: "sentence-ordering",
    pregunta: "Order these words to make a question:",
    palabras: ["How", "get", "you", "do", "to", "work", "?"],
    respuestaCorrecta: ["How", "do", "you", "get", "to", "work", "?"],
    explicacion: "How question: How + do + you + verb + ? → 'How do you get to work?' asks about METHOD/WAY."
  },

  {
    id: 124,
    tipo: "radio",
    pregunta: "Complete: '_____ do they live in London?' → 'Because they work there.'",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "Why" },
      { valor: "c", texto: "Where" },
      { valor: "d", texto: "When" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Why' is correct for REASON questions. 'Why do they live in London?' → answer with 'Because...'"
  },

  {
    id: 125,
    tipo: "matching",
    pregunta: "Match the WH-words with what they ask about:",
    pares: [
      { izquierda: "Where", derecha: "place/location" },
      { izquierda: "When", derecha: "time" },
      { izquierda: "Why", derecha: "reason" },
      { izquierda: "How often", derecha: "frequency" }
    ],
    explicacion: "WH-words: Where (place), When/What time (time), Why (reason), How often (frequency), What (thing), Who (person), How (manner/way)."
  },

  {
    id: 126,
    tipo: "radio",
    pregunta: "Complete the short answer: 'Do they like coffee?' → 'Yes, _____.'",
    opciones: [
      { valor: "a", texto: "they like" },
      { valor: "b", texto: "they do" },
      { valor: "c", texto: "they are" },
      { valor: "d", texto: "they does" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Yes, they do.' is correct. Short answers: Yes/No + subject + do/does. Don't repeat the main verb!"
  },

  {
    id: 127,
    tipo: "radio",
    pregunta: "What is the correct short answer? 'Does she speak French?' (No)",
    opciones: [
      { valor: "a", texto: "No, she don't." },
      { valor: "b", texto: "No, she doesn't." },
      { valor: "c", texto: "No, she isn't." },
      { valor: "d", texto: "No, she not." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'No, she doesn't.' is correct. Negative short answer with he/she/it: No, he/she/it doesn't."
  },

  {
    id: 128,
    tipo: "fill-blanks",
    pregunta: "Complete: 'Do you work on Saturdays?' → 'No, I _____.'",
    espacios: [
      { id: 1, respuestas: ["don't", "dont", "do not", "Don't"] }
    ],
    explicacion: "'No, I don't.' is correct. Short answer: No + I/you/we/they + don't."
  },

  {
    id: 129,
    tipo: "radio",
    pregunta: "Complete: 'Does he live here?' → 'Yes, _____.'",
    opciones: [
      { valor: "a", texto: "he does" },
      { valor: "b", texto: "he do" },
      { valor: "c", texto: "he lives" },
      { valor: "d", texto: "he is" }
    ],
    respuestaCorrecta: "a",
    explicacion: "'Yes, he does.' is correct. Positive short answer with he/she/it: Yes, he/she/it does."
  },

  {
    id: 130,
    tipo: "matching",
    pregunta: "Match the questions with their short answers:",
    pares: [
      { izquierda: "Do you like tea?", derecha: "Yes, I do." },
      { izquierda: "Does she work here?", derecha: "No, she doesn't." },
      { izquierda: "Do they study Spanish?", derecha: "Yes, they do." },
      { izquierda: "Does it work?", derecha: "No, it doesn't." }
    ],
    explicacion: "Short answers: Yes/No + subject pronoun + do/don't/does/doesn't. Never repeat the main verb in short answers!"
  },

  {
    id: 131,
    tipo: "true-false",
    pregunta: "This short answer is correct: 'Do you drink coffee?' → 'Yes, I drink.'",
    respuestaCorrecta: false,
    explicacion: "FALSE. The correct short answer is 'Yes, I do.' (not 'Yes, I drink'). Never repeat the main verb in short answers."
  },

  {
    id: 132,
    tipo: "radio",
    pregunta: "Complete: 'Do we need tickets?' → 'Yes, _____.'",
    opciones: [
      { valor: "a", texto: "we need" },
      { valor: "b", texto: "we does" },
      { valor: "c", texto: "we do" },
      { valor: "d", texto: "we are" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Yes, we do.' is correct. Short answer with we/they: Yes/No, we/they do/don't."
  },

  {
    id: 133,
    tipo: "fill-blanks",
    pregunta: "Complete the negative short answer: 'Does your brother play football?' → 'No, he _____.'",
    espacios: [
      { id: 1, respuestas: ["doesn't", "doesnt", "does not", "Doesn't"] }
    ],
    explicacion: "'No, he doesn't.' is correct. Negative short answer: No + he/she/it + doesn't."
  },

  {
    id: 134,
    tipo: "radio",
    pregunta: "Complete: 'My brother is very _____. He's 1.90 meters!'",
    opciones: [
      { valor: "a", texto: "short" },
      { valor: "b", texto: "tall" },
      { valor: "c", texto: "small" },
      { valor: "d", texto: "big" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'tall' is correct. Height: tall (alto), short (bajo), medium height/average height (estatura media)."
  },

  {
    id: 135,
    tipo: "radio",
    pregunta: "Complete: 'She has long _____ hair and blue eyes.'",
    opciones: [
      { valor: "a", texto: "blonde" },
      { valor: "b", texto: "blond" },
      { valor: "c", texto: "blondes" },
      { valor: "d", texto: "a blonde" }
    ],
    respuestaCorrecta: "a",
    explicacion: "'blonde' is correct. Hair colors (adjectives): blonde, brown, black, red, grey, white. Structure: She has + adjective + hair."
  },

  {
    id: 136,
    tipo: "matching",
    pregunta: "Match the physical features with their descriptions:",
    pares: [
      { izquierda: "curly hair", derecha: "pelo rizado" },
      { izquierda: "straight hair", derecha: "pelo liso" },
      { izquierda: "wavy hair", derecha: "pelo ondulado" },
      { izquierda: "short hair", derecha: "pelo corto" }
    ],
    explicacion: "Hair texture/length: straight (liso), curly (rizado), wavy (ondulado), short (corto), long (largo), medium length (largo medio)."
  },

  {
    id: 137,
    tipo: "radio",
    pregunta: "Complete: 'He _____ a beard and a moustache.'",
    opciones: [
      { valor: "a", texto: "is" },
      { valor: "b", texto: "has" },
      { valor: "c", texto: "have" },
      { valor: "d", texto: "wears" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'has' is correct. Use HAVE for physical features: He has a beard/moustache/glasses. Also correct: He wears glasses (for things you put on)."
  },

  {
    id: 138,
    tipo: "fill-blanks",
    pregunta: "Complete: 'My sister has _____ hair and _____ eyes.' (describe using colors)",
    espacios: [
      { id: 1, respuestas: ["brown", "black", "blonde", "red", "grey", "Brown", "Black", "Blonde", "Red", "Grey"] },
      { id: 2, respuestas: ["blue", "green", "brown", "grey", "Blue", "Green", "Brown", "Grey"] }
    ],
    explicacion: "Correct answer example: 'brown hair and blue eyes.' Use HAVE + adjective + hair/eyes. Hair colors: blonde, brown, black, red, grey. Eye colors: blue, green, brown, grey."
  },

  {
    id: 139,
    tipo: "radio",
    pregunta: "Which sentence is CORRECT?",
    opciones: [
      { valor: "a", texto: "She is long hair." },
      { valor: "b", texto: "She has long hair." },
      { valor: "c", texto: "She have long hair." },
      { valor: "d", texto: "She with long hair." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'She has long hair' is correct. Use HAVE (not BE) to describe hair and eyes: I have brown eyes, He has curly hair."
  },

  {
    id: 140,
    tipo: "checkbox",
    pregunta: "Which words describe HAIR TEXTURE? Select ALL correct:",
    opciones: [
      { valor: "a", texto: "curly" },
      { valor: "b", texto: "tall" },
      { valor: "c", texto: "straight" },
      { valor: "d", texto: "blue" },
      { valor: "e", texto: "wavy" },
      { valor: "f", texto: "short" }
    ],
    respuestasCorrectas: ["a", "c", "e"],
    explicacion: "Hair TEXTURE: curly, straight, wavy. 'Tall' describes height. 'Blue' describes eye color. 'Short' describes hair LENGTH (not texture)."
  },

  {
    id: 141,
    tipo: "radio",
    pregunta: "Complete: 'She wears _____ because she can't see well.'",
    opciones: [
      { valor: "a", texto: "a beard" },
      { valor: "b", texto: "glasses" },
      { valor: "c", texto: "a moustache" },
      { valor: "d", texto: "curly hair" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'glasses' is correct. Use WEAR + glasses: She wears glasses. Also correct: She has glasses (same meaning)."
  },

  {
    id: 142,
    tipo: "radio",
    pregunta: "Complete: 'My friend always helps others. She is very _____.'",
    opciones: [
      { valor: "a", texto: "shy" },
      { valor: "b", texto: "lazy" },
      { valor: "c", texto: "kind" },
      { valor: "d", texto: "quiet" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'kind' is correct. Kind = helpful, caring, nice to others (amable). Synonyms: nice, friendly, generous."
  },

  {
    id: 143,
    tipo: "matching",
    pregunta: "Match the personality adjectives with their meanings:",
    pares: [
      { izquierda: "funny", derecha: "makes people laugh" },
      { izquierda: "shy", derecha: "doesn't talk much with strangers" },
      { izquierda: "hardworking", derecha: "works a lot" },
      { izquierda: "confident", derecha: "believes in themselves" }
    ],
    explicacion: "Personality adjectives describe character: funny (gracioso), shy (tímido), hardworking (trabajador), confident (seguro de sí mismo)."
  },

  {
    id: 144,
    tipo: "radio",
    pregunta: "Complete: 'He doesn't talk much. He is _____.'",
    opciones: [
      { valor: "a", texto: "outgoing" },
      { valor: "b", texto: "quiet" },
      { valor: "c", texto: "funny" },
      { valor: "d", texto: "creative" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'quiet' is correct. Quiet = doesn't talk much (callado, tranquilo). Opposite: talkative, outgoing."
  },

  {
    id: 145,
    tipo: "checkbox",
    pregunta: "Which adjectives are POSITIVE personality traits? Select ALL correct:",
    opciones: [
      { valor: "a", texto: "friendly" },
      { valor: "b", texto: "lazy" },
      { valor: "c", texto: "intelligent" },
      { valor: "d", texto: "rude" },
      { valor: "e", texto: "generous" },
      { valor: "f", texto: "patient" }
    ],
    respuestasCorrectas: ["a", "c", "e", "f"],
    explicacion: "POSITIVE: friendly, intelligent, generous, patient, kind, hardworking, funny. NEGATIVE: lazy, rude, dishonest, unfriendly."
  },

  {
    id: 146,
    tipo: "radio",
    pregunta: "Complete: 'She always makes me laugh. She is so _____!'",
    opciones: [
      { valor: "a", texto: "boring" },
      { valor: "b", texto: "funny" },
      { valor: "c", texto: "serious" },
      { valor: "d", texto: "shy" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'funny' is correct. Funny = makes people laugh (gracioso, divertido). Opposite: serious, boring."
  },

  {
    id: 147,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a correct sentence: (work)",
    palabras: ["usually", "work", "I", "from", "home"],
    respuestaCorrecta: ["I", "usually", "work", "from", "home"],
    explicacion: "Adverb position: subject + adverb + main verb. 'I usually work from home.' = Normalmente trabajo desde casa."
  },

  {
    id: 148,
    tipo: "radio",
    pregunta: "Complete: 'She _____ studies in the library after class.' (80%)",
    opciones: [
      { valor: "a", texto: "never" },
      { valor: "b", texto: "usually" },
      { valor: "c", texto: "rarely" },
      { valor: "d", texto: "sometimes" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'usually' (80%) is correct. Position: She + usually + studies. Usually = la mayoría del tiempo."
  },

  {
    id: 149,
    tipo: "fill-blanks",
    pregunta: "Complete: 'My parents _____ travel abroad in summer.' (100%)",
    espacios: [
      { id: 1, respuestas: ["always", "Always"] }
    ],
    explicacion: "'always' (100%) is correct. 'My parents always travel' = Mis padres siempre viajan. Position: subject + always + verb."
  },

  {
    id: 150,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order: (live)",
    palabras: ["live", "generally", "They", "in", "city", "the"],
    respuestaCorrecta: ["They", "generally", "live", "in", "the", "city"],
    explicacion: "Adverb position: They + generally + live. 'They generally live in the city.' Generally = normalmente, por lo general."
  },

  {
    id: 151,
    tipo: "radio",
    pregunta: "Complete: 'He _____ goes to the gym on weekends.' (60%)",
    opciones: [
      { valor: "a", texto: "never" },
      { valor: "b", texto: "often" },
      { valor: "c", texto: "always" },
      { valor: "d", texto: "rarely" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'often' (60%) is correct. 'He often goes' = Él va con frecuencia. Position: subject + often + verb."
  },

  {
    id: 152,
    tipo: "fill-blanks",
    pregunta: "Complete: 'I _____ eat breakfast. Maybe twice a week.' (40%)",
    espacios: [
      { id: 1, respuestas: ["sometimes", "Sometimes"] }
    ],
    explicacion: "'sometimes' (40%) is correct. Sometimes = a veces, ocasionalmente. Can also go at beginning or end: 'Sometimes I eat breakfast' or 'I eat breakfast sometimes.'"
  },

  {
    id: 153,
    tipo: "sentence-ordering",
    pregunta: "Order these words: (enjoy)",
    palabras: ["enjoy", "We", "frequently", "movies", "watching"],
    respuestaCorrecta: ["We", "frequently", "enjoy", "watching", "movies"],
    explicacion: "Position: We + frequently + enjoy. 'We frequently enjoy watching movies.' Frequently = con frecuencia (similar to 'often')."
  },

  {
    id: 154,
    tipo: "radio",
    pregunta: "Which sentence is CORRECT?",
    opciones: [
      { valor: "a", texto: "She drinks sometimes coffee." },
      { valor: "b", texto: "She sometimes drinks coffee." },
      { valor: "c", texto: "Sometimes she drinks coffee." },
      { valor: "d", texto: "Options b and c are both correct" }
    ],
    respuestaCorrecta: "d",
    explicacion: "Both b and c are correct! 'Sometimes' can go: (1) between subject and verb: 'She sometimes drinks', or (2) at the beginning: 'Sometimes she drinks'."
  },

  {
    id: 155,
    tipo: "fill-blanks",
    pregunta: "Complete: 'They _____ play video games. Only once or twice a year.' (20%)",
    espacios: [
      { id: 1, respuestas: ["rarely", "Rarely", "seldom", "Seldom"] }
    ],
    explicacion: "'rarely' or 'seldom' (20%) are correct. Both mean 'casi nunca'. Position: They + rarely/seldom + play."
  },

  {
    id: 156,
    tipo: "radio",
    pregunta: "Complete: 'We _____ drink soda. We don't like it.' (0%)",
    opciones: [
      { valor: "a", texto: "always" },
      { valor: "b", texto: "usually" },
      { valor: "c", texto: "never" },
      { valor: "d", texto: "often" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'never' (0%) is correct. Never = nunca, jamás. 'We never drink soda' = No bebemos soda nunca."
  },

  {
    id: 157,
    tipo: "sentence-ordering",
    pregunta: "Order the words (remember: adverb goes AFTER TO BE):",
    palabras: ["tired", "always", "is", "He", "after", "work"],
    respuestaCorrecta: ["He", "is", "always", "tired", "after", "work"],
    explicacion: "With TO BE: subject + BE + adverb + adjective/complement. 'He is always tired after work.' The adverb goes AFTER the verb BE!"
  },

  {
    id: 158,
    tipo: "radio",
    pregunta: "Complete: 'She _____ late for class.' (100%)",
    opciones: [
      { valor: "a", texto: "always is" },
      { valor: "b", texto: "is always" },
      { valor: "c", texto: "is never" },
      { valor: "d", texto: "never is" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'is always' is correct. With TO BE: She + IS + always + adjective. 'She is always late' = Ella siempre llega tarde."
  },

  {
    id: 159,
    tipo: "fill-blanks",
    pregunta: "Complete: 'I _____ _____ happy on Fridays!' (100% - with TO BE)",
    espacios: [
      { id: 1, respuestas: ["am", "Am"] },
      { id: 2, respuestas: ["always", "Always"] }
    ],
    explicacion: "'am always' is correct. Structure: I + AM + always + adjective. 'I am always happy on Fridays!'"
  },

  {
    id: 160,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order (with TO BE):",
    palabras: ["busy", "usually", "We", "are", "on", "Mondays"],
    respuestaCorrecta: ["We", "are", "usually", "busy", "on", "Mondays"],
    explicacion: "With TO BE: We + ARE + usually + adjective. 'We are usually busy on Mondays.' = Normalmente estamos ocupados los lunes."
  },

  {
    id: 161,
    tipo: "true-false",
    pregunta: "This sentence is correct: 'They always are late.'",
    respuestaCorrecta: false,
    explicacion: "FALSE. The correct order is 'They are always late' (not 'always are'). With TO BE: subject + BE + adverb + adjective."
  },

  {
    id: 162,
    tipo: "radio",
    pregunta: "Complete: 'The library _____ quiet in the mornings.' (80%)",
    opciones: [
      { valor: "a", texto: "usually is" },
      { valor: "b", texto: "is usually" },
      { valor: "c", texto: "is never" },
      { valor: "d", texto: "always is" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'is usually' is correct. With TO BE: The library + IS + usually + adjective. 'The library is usually quiet' = La biblioteca suele estar tranquila."
  },

  {
    id: 163,
    tipo: "fill-blanks",
    pregunta: "Complete: 'My friends _____ _____ ready on time.' (0% - with TO BE)",
    espacios: [
      { id: 1, respuestas: ["are", "Are"] },
      { id: 2, respuestas: ["never", "Never"] }
    ],
    explicacion: "'are never' is correct. Structure: My friends + ARE + never + adjective. 'My friends are never ready on time' = Mis amigos nunca están listos a tiempo."
  },

  {
    id: 164,
    tipo: "sentence-ordering",
    pregunta: "Order the words (with TO BE):",
    palabras: ["sometimes", "is", "stressed", "She", "at", "work"],
    respuestaCorrecta: ["She", "is", "sometimes", "stressed", "at", "work"],
    explicacion: "With TO BE: She + IS + sometimes + adjective. 'She is sometimes stressed at work.' = A veces está estresada en el trabajo."
  },

  {
    id: 165,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a negative sentence:",
    palabras: ["work", "don't", "I", "weekends", "usually", "on"],
    respuestaCorrecta: ["I", "don't", "usually", "work", "on", "weekends"],
    explicacion: "Negative with adverb: I + don't + usually + verb. 'I don't usually work on weekends.' = Normalmente no trabajo los fines de semana."
  },

  {
    id: 166,
    tipo: "radio",
    pregunta: "Complete the negative: 'She _____ eat meat. She's vegetarian.'",
    opciones: [
      { valor: "a", texto: "doesn't never" },
      { valor: "b", texto: "never eats" },
      { valor: "c", texto: "doesn't usually" },
      { valor: "d", texto: "don't never" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'never eats' is correct. NEVER is already negative, so DON'T use doesn't! 'She never eats meat' = Ella nunca come carne. NEVER = 0%."
  },

  {
    id: 167,
    tipo: "fill-blanks",
    pregunta: "Complete the negative: 'They _____ _____ travel in winter.' (negative + usually)",
    espacios: [
      { id: 1, respuestas: ["don't", "dont", "do not", "Don't"] },
      { id: 2, respuestas: ["usually", "Usually"] }
    ],
    explicacion: "'don't usually' is correct. Negative + adverb: They + don't + usually + verb. 'They don't usually travel in winter.'"
  },

  {
    id: 168,
    tipo: "true-false",
    pregunta: "This sentence is correct: 'I don't never drink coffee.'",
    respuestaCorrecta: false,
    explicacion: "FALSE. This is a DOUBLE NEGATIVE (incorrect in English). Say: 'I never drink coffee' OR 'I don't drink coffee', but NOT 'don't never' together."
  },

  {
    id: 169,
    tipo: "sentence-ordering",
    pregunta: "Order the words for a negative sentence:",
    palabras: ["video", "often", "games", "doesn't", "He", "play"],
    respuestaCorrecta: ["He", "doesn't", "often", "play", "video", "games"],
    explicacion: "Negative + adverb: He + doesn't + often + verb. 'He doesn't often play video games.' = Él no juega videojuegos con frecuencia."
  },

  {
    id: 170,
    tipo: "radio",
    pregunta: "Which is CORRECT?",
    opciones: [
      { valor: "a", texto: "We don't never go there." },
      { valor: "b", texto: "We never go there." },
      { valor: "c", texto: "We doesn't go there never." },
      { valor: "d", texto: "We don't go never there." }
    ],
    respuestaCorrecta: "b",
    explicacion: "'We never go there' is correct. Use NEVER alone (not with don't). NEVER is already negative!"
  },

  {
    id: 171,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a question:",
    palabras: ["study", "Do", "usually", "you", "at", "night", "?"],
    respuestaCorrecta: ["Do", "you", "usually", "study", "at", "night", "?"],
    explicacion: "Question + adverb: Do + you + usually + verb + ? 'Do you usually study at night?' = ¿Normalmente estudias por la noche?"
  },

  {
    id: 172,
    tipo: "radio",
    pregunta: "Complete the question: '_____ she always late for work?'",
    opciones: [
      { valor: "a", texto: "Do" },
      { valor: "b", texto: "Does" },
      { valor: "c", texto: "Is" },
      { valor: "d", texto: "Are" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'Is' is correct. With TO BE: Is + she + always + adjective? 'Is she always late for work?' = ¿Siempre llega tarde al trabajo?"
  },

  {
    id: 173,
    tipo: "sentence-ordering",
    pregunta: "Make a question with these words:",
    palabras: ["Does", "go", "often", "he", "gym", "the", "to", "?"],
    respuestaCorrecta: ["Does", "he", "often", "go", "to", "the", "gym", "?"],
    explicacion: "Question: Does + he + often + verb + ? 'Does he often go to the gym?' = ¿Va con frecuencia al gimnasio?"
  },

  {
    id: 174,
    tipo: "fill-blanks",
    pregunta: "Complete the question: '_____ you _____ drink coffee?' (asking about frequency with 'usually')",
    espacios: [
      { id: 1, respuestas: ["Do", "do"] },
      { id: 2, respuestas: ["usually", "Usually"] }
    ],
    explicacion: "'Do you usually' is correct. Question: Do + you + usually + verb? 'Do you usually drink coffee?'"
  },

  {
    id: 175,
    tipo: "radio",
    pregunta: "Complete: '_____ they sometimes travel for work?'",
    opciones: [
      { valor: "a", texto: "Does" },
      { valor: "b", texto: "Do" },
      { valor: "c", texto: "Are" },
      { valor: "d", texto: "Is" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Do' is correct (they = plural). Question: Do + they + sometimes + verb? 'Do they sometimes travel for work?'"
  },

  {
    id: 176,
    tipo: "sentence-ordering",
    pregunta: "Order the words to make a question with TO BE:",
    palabras: ["you", "Are", "tired", "always", "after", "work", "?"],
    respuestaCorrecta: ["Are", "you", "always", "tired", "after", "work", "?"],
    explicacion: "Question with TO BE: Are + you + always + adjective? 'Are you always tired after work?' = ¿Siempre estás cansado después del trabajo?"
  },

  {
    id: 177,
    tipo: "audio",
    pregunta: "Listen to Sarah talking about her morning routine. What time does she wake up?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-177.mp3",
    audioTexto: "Hi, my name is Sarah. I wake up at seven o'clock every morning. After that, I have breakfast and then I go to work by bus.",
    opciones: [
      { valor: "a", texto: "At 6 o'clock" },
      { valor: "b", texto: "At 7 o'clock" },
      { valor: "c", texto: "At 8 o'clock" },
      { valor: "d", texto: "At 9 o'clock" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Sarah says 'I wake up at seven o'clock every morning.' The correct answer is 7 o'clock. Audio TTS needed: British female voice, slow speed."
  },

  {
    id: 178,
    tipo: "audio",
    pregunta: "Listen to Tom describing his work schedule. How many days does he work per week?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-178.mp3",
    audioTexto: "Hello, I'm Tom. I work in a hospital. I usually work from Monday to Friday, so that's five days a week. I don't work on weekends. I like my job very much.",
    opciones: [
      { valor: "a", texto: "Three days a week" },
      { valor: "b", texto: "Four days a week" },
      { valor: "c", texto: "Five days a week" },
      { valor: "d", texto: "Seven days a week" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Tom says 'I usually work from Monday to Friday, so that's five days a week.' He works 5 days. Audio TTS needed: British male voice, normal speed."
  },

  {
    id: 179,
    tipo: "audio",
    pregunta: "Listen to Emma talking about her hobbies. How often does she go to the gym?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-179.mp3",
    audioTexto: "My name is Emma. I love sports. I go to the gym three times a week, usually on Monday, Wednesday, and Friday. I also play tennis on Saturdays.",
    opciones: [
      { valor: "a", texto: "Once a week" },
      { valor: "b", texto: "Twice a week" },
      { valor: "c", texto: "Three times a week" },
      { valor: "d", texto: "Every day" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Emma says 'I go to the gym three times a week.' She mentions Monday, Wednesday, and Friday. Audio TTS needed: British female voice, normal speed."
  },

  {
    id: 180,
    tipo: "audio",
    pregunta: "Listen to David describing his brother. What does his brother do?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-180.mp3",
    audioTexto: "I have one brother. His name is Paul. He's twenty-five years old and he works as a teacher. He teaches English in a secondary school. He loves his job.",
    opciones: [
      { valor: "a", texto: "He's a doctor" },
      { valor: "b", texto: "He's a teacher" },
      { valor: "c", texto: "He's an engineer" },
      { valor: "d", texto: "He's a nurse" }
    ],
    respuestaCorrecta: "b",
    explicacion: "David says 'he works as a teacher. He teaches English in a secondary school.' Paul is a teacher. Audio TTS needed: British male voice, normal speed."
  },

  {
    id: 181,
    tipo: "audio",
    pregunta: "Listen to Laura talking about her daily routine. How does she travel to work?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-181.mp3",
    audioTexto: "Good morning! I'm Laura. Every day I wake up at six thirty. I have breakfast at seven and then I travel to work by metro. The journey takes about thirty minutes.",
    opciones: [
      { valor: "a", texto: "By bus" },
      { valor: "b", texto: "By car" },
      { valor: "c", texto: "By metro" },
      { valor: "d", texto: "On foot" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Laura says 'I travel to work by metro.' She takes the metro to work. Audio TTS needed: British female voice, slow speed."
  },

  {
    id: 182,
    tipo: "audio",
    pregunta: "Listen to Michael describing his eating habits. What does he never eat?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-182.mp3",
    audioTexto: "Hi, I'm Michael. I usually eat healthy food. I have fruit and vegetables every day. I sometimes eat fish and chicken, but I never eat red meat. I don't like it.",
    opciones: [
      { valor: "a", texto: "Fish" },
      { valor: "b", texto: "Chicken" },
      { valor: "c", texto: "Vegetables" },
      { valor: "d", texto: "Red meat" }
    ],
    respuestaCorrecta: "d",
    explicacion: "Michael says 'I never eat red meat. I don't like it.' He never eats red meat. Adverb 'never' = 0% frequency. Audio TTS needed: British male voice, normal speed."
  },

  {
    id: 183,
    tipo: "audio",
    pregunta: "Listen to Anna talking about her sister. What sport does her sister play?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-183.mp3",
    audioTexto: "I have a younger sister called Sophie. She's seventeen years old. She studies at university and she loves sports. She plays basketball every weekend with her friends.",
    opciones: [
      { valor: "a", texto: "Football" },
      { valor: "b", texto: "Tennis" },
      { valor: "c", texto: "Basketball" },
      { valor: "d", texto: "Volleyball" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Anna says 'She plays basketball every weekend with her friends.' Sophie plays basketball. Audio TTS needed: British female voice, normal speed."
  },

  {
    id: 184,
    tipo: "audio",
    pregunta: "Listen to Robert describing his work hours. What time does he finish work?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-184.mp3",
    audioTexto: "Hello, my name is Robert. I work in an office in the city centre. I start work at nine o'clock in the morning and I finish at five thirty in the afternoon. Then I go home.",
    opciones: [
      { valor: "a", texto: "At 4:30 PM" },
      { valor: "b", texto: "At 5:00 PM" },
      { valor: "c", texto: "At 5:30 PM" },
      { valor: "d", texto: "At 6:00 PM" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Robert says 'I finish at five thirty in the afternoon.' He finishes work at 5:30 PM. Audio TTS needed: British male voice, normal speed."
  },

  {
    id: 185,
    tipo: "audio",
    pregunta: "Listen to Jessica talking about her evening routine. What does she do after dinner?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-185.mp3",
    audioTexto: "Hi, I'm Jessica. In the evening, I usually have dinner at seven o'clock. After dinner, I always watch television for one hour. Then I read a book before I go to bed.",
    opciones: [
      { valor: "a", texto: "She reads a book" },
      { valor: "b", texto: "She watches television" },
      { valor: "c", texto: "She goes to bed" },
      { valor: "d", texto: "She studies English" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Jessica says 'After dinner, I always watch television for one hour.' The first thing she does after dinner is watch TV. Audio TTS needed: British female voice, slow speed."
  },

  {
    id: 186,
    tipo: "audio",
    pregunta: "Listen to Peter describing his best friend. Where does his friend work?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-186.mp3",
    audioTexto: "My best friend is called James. He's thirty years old and he works in a bank. He lives near me, so we often meet on weekends. He's very friendly and funny.",
    opciones: [
      { valor: "a", texto: "In a school" },
      { valor: "b", texto: "In a hospital" },
      { valor: "c", texto: "In a bank" },
      { valor: "d", texto: "In an office" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Peter says 'he works in a bank.' James works in a bank. Audio TTS needed: British male voice, normal speed."
  },

  {
    id: 187,
    tipo: "audio",
    pregunta: "Listen to Rachel talking about her weekend activities. What does she do on Sundays?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-187.mp3",
    audioTexto: "I'm Rachel. On Saturdays, I usually go shopping with my friends. On Sundays, I always visit my parents. They live in the countryside, about thirty minutes from my house.",
    opciones: [
      { valor: "a", texto: "She goes shopping" },
      { valor: "b", texto: "She visits her parents" },
      { valor: "c", texto: "She studies" },
      { valor: "d", texto: "She works" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Rachel says 'On Sundays, I always visit my parents.' She visits her parents every Sunday. Adverb 'always' = 100%. Audio TTS needed: British female voice, normal speed."
  },

  {
    id: 188,
    tipo: "audio",
    pregunta: "Listen to Mark describing his morning habits. What does he have for breakfast?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-188.mp3",
    audioTexto: "Good morning! I'm Mark. I wake up at six o'clock every day. For breakfast, I usually have coffee and toast with jam. Sometimes I also have an orange or an apple.",
    opciones: [
      { valor: "a", texto: "Tea and biscuits" },
      { valor: "b", texto: "Coffee and toast" },
      { valor: "c", texto: "Cereal and milk" },
      { valor: "d", texto: "Eggs and bacon" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Mark says 'For breakfast, I usually have coffee and toast with jam.' He has coffee and toast. Audio TTS needed: British male voice, slow speed."
  },

  {
    id: 189,
    tipo: "audio",
    pregunta: "Listen to Sophie talking about her family. How many brothers does she have?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-189.mp3",
    audioTexto: "Hello, my name is Sophie. I have a big family. I have two brothers and one sister. My brothers are older than me. They both work in London. My sister is younger and she studies at university.",
    opciones: [
      { valor: "a", texto: "One brother" },
      { valor: "b", texto: "Two brothers" },
      { valor: "c", texto: "Three brothers" },
      { valor: "d", texto: "No brothers" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Sophie says 'I have two brothers and one sister.' She has 2 brothers. Audio TTS needed: British female voice, normal speed."
  },

  {
    id: 190,
    tipo: "audio",
    pregunta: "Listen to Daniel describing his evening routine. What time does he go to bed?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-190.mp3",
    audioTexto: "I'm Daniel. After work, I have dinner and then I usually watch a film or play video games. I go to bed at eleven o'clock every night because I need to wake up early.",
    opciones: [
      { valor: "a", texto: "At 10:00 PM" },
      { valor: "b", texto: "At 11:00 PM" },
      { valor: "c", texto: "At 12:00 AM" },
      { valor: "d", texto: "At 9:00 PM" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Daniel says 'I go to bed at eleven o'clock every night.' He goes to bed at 11:00 PM. Audio TTS needed: British male voice, normal speed."
  },

  {
    id: 191,
    tipo: "audio",
    pregunta: "Listen to Catherine talking about her job. Where does she work?",
    audioSrc: "../../audios/t1/exams/week3/tema1-week3-audio-191.mp3",
    audioTexto: "Hi, I'm Catherine. I work as a nurse in a hospital. I love my job very much. I work from Monday to Friday, but sometimes I also work on Saturdays. It's a busy job but very rewarding.",
    opciones: [
      { valor: "a", texto: "In a school" },
      { valor: "b", texto: "In a shop" },
      { valor: "c", texto: "In a hospital" },
      { valor: "d", texto: "In a restaurant" }
    ],
    respuestaCorrecta: "c",
    explicacion: "Catherine says 'I work as a nurse in a hospital.' She works in a hospital. Audio TTS needed: British female voice, normal speed."
  },

  {
    id: 192,
    tipo: "audio-multiple",
    pregunta: "Listen to Sarah talking about her morning routine and answer ALL the questions below.",
    audioSrc: "../../audios/t1/exams/week3/audio-192.mp3",
    audioTexto: "Good morning! My name is Sarah. I wake up at six thirty every morning. After I wake up, I always have a shower and then I get dressed. For breakfast, I usually have coffee and toast with jam. I never eat eggs in the morning because I don't like them. I leave my house at seven forty-five and I travel to work by metro. The journey takes about thirty minutes.",
    subpreguntas: [
      {
        id: "192a",
        tipo: "radio",
        pregunta: "What time does Sarah wake up?",
        opciones: [
          { valor: "a", texto: "At 6:00 AM" },
          { valor: "b", texto: "At 6:30 AM" },
          { valor: "c", texto: "At 7:00 AM" },
          { valor: "d", texto: "At 7:45 AM" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Sarah says 'I wake up at six thirty every morning.' The correct answer is 6:30 AM."
      },
      {
        id: "192b",
        tipo: "radio",
        pregunta: "What does Sarah always do after waking up?",
        opciones: [
          { valor: "a", texto: "She has breakfast" },
          { valor: "b", texto: "She leaves the house" },
          { valor: "c", texto: "She has a shower" },
          { valor: "d", texto: "She drinks coffee" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Sarah says 'After I wake up, I always have a shower.' The adverb 'always' (100%) indicates this is her routine."
      },
      {
        id: "192c",
        tipo: "radio",
        pregunta: "How does Sarah travel to work?",
        opciones: [
          { valor: "a", texto: "By bus" },
          { valor: "b", texto: "By car" },
          { valor: "c", texto: "By metro" },
          { valor: "d", texto: "On foot" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Sarah says 'I travel to work by metro.' She uses the metro/underground to go to work."
      }
    ],
    explicacion: "This audio tests listening comprehension of daily routines, time expressions, and adverbs of frequency (always, usually, never). Audio TTS: British female voice, normal speed."
  },

  {
    id: 193,
    tipo: "audio-multiple",
    pregunta: "Listen to Tom describing his work schedule and answer the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-193.mp3",
    audioTexto: "Hi, I'm Tom. I work as a software engineer in a technology company. I start work at nine o'clock in the morning and I finish at five thirty in the afternoon. I usually have lunch at one o'clock. I sometimes eat in the office cafeteria, but I often go to a restaurant near my office. I work from Monday to Friday, so I have the weekends free. On Saturdays and Sundays, I never work. I relax at home or I go out with my friends.",
    subpreguntas: [
      {
        id: "193a",
        tipo: "radio",
        pregunta: "What is Tom's job?",
        opciones: [
          { valor: "a", texto: "He's a teacher" },
          { valor: "b", texto: "He's a software engineer" },
          { valor: "c", texto: "He's a doctor" },
          { valor: "d", texto: "He's a manager" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Tom says 'I work as a software engineer in a technology company.' This is his profession."
      },
      {
        id: "193b",
        tipo: "radio",
        pregunta: "What time does Tom finish work?",
        opciones: [
          { valor: "a", texto: "At 5:00 PM" },
          { valor: "b", texto: "At 5:30 PM" },
          { valor: "c", texto: "At 6:00 PM" },
          { valor: "d", texto: "At 9:00 AM" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Tom says 'I finish at five thirty in the afternoon.' He finishes at 5:30 PM."
      },
      {
        id: "193c",
        tipo: "radio",
        pregunta: "How often does Tom work on weekends?",
        opciones: [
          { valor: "a", texto: "Always" },
          { valor: "b", texto: "Usually" },
          { valor: "c", texto: "Sometimes" },
          { valor: "d", texto: "Never" }
        ],
        respuestaCorrecta: "d",
        explicacion: "Tom says 'On Saturdays and Sundays, I never work.' The adverb 'never' (0%) means he doesn't work on weekends at all."
      }
    ],
    explicacion: "This audio practices Present Simple with work routines, time expressions, and adverbs of frequency (usually, sometimes, often, never). Audio TTS: British male voice, normal speed."
  },

  {
    id: 194,
    tipo: "audio-multiple",
    pregunta: "Listen to Emma talking about her family and answer ALL the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-194.mp3",
    audioTexto: "Hello, my name is Emma. I live in London with my husband and our two children. My husband's name is James. He works as a teacher in a secondary school. We have one son and one daughter. Our son is eight years old and his name is Oliver. Our daughter is five years old and her name is Lucy. They both go to school near our house. My parents live in Manchester. They visit us once a month, usually on Sundays. My mother is retired and my father still works part-time.",
    subpreguntas: [
      {
        id: "194a",
        tipo: "radio",
        pregunta: "How many children does Emma have?",
        opciones: [
          { valor: "a", texto: "One child" },
          { valor: "b", texto: "Two children" },
          { valor: "c", texto: "Three children" },
          { valor: "d", texto: "No children" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Emma says 'We have one son and one daughter.' She has two children in total."
      },
      {
        id: "194b",
        tipo: "radio",
        pregunta: "What does Emma's husband do?",
        opciones: [
          { valor: "a", texto: "He's a doctor" },
          { valor: "b", texto: "He's a teacher" },
          { valor: "c", texto: "He's retired" },
          { valor: "d", texto: "He works part-time" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Emma says 'He works as a teacher in a secondary school.' James is a teacher."
      },
      {
        id: "194c",
        tipo: "radio",
        pregunta: "How often do Emma's parents visit?",
        opciones: [
          { valor: "a", texto: "Every week" },
          { valor: "b", texto: "Once a month" },
          { valor: "c", texto: "Twice a month" },
          { valor: "d", texto: "Once a year" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Emma says 'They visit us once a month, usually on Sundays.' Frequency expression: once a month."
      }
    ],
    explicacion: "This audio tests family vocabulary, possessive adjectives (his, her, our, their), and frequency expressions. Audio TTS: British female voice, slow speed."
  },

  {
    id: 195,
    tipo: "audio-multiple",
    pregunta: "Listen to David talking about his hobbies and free time activities. Answer the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-195.mp3",
    audioTexto: "Hi, I'm David. In my free time, I really enjoy playing sports. I go to the gym three times a week, on Monday, Wednesday, and Friday. I always go in the evening after work. On Saturdays, I play football with my friends. Football is my favourite sport. I also like reading. I usually read before I go to bed at night. I read about two books a month. On Sundays, I rarely do any sports. I normally stay at home and relax. Sometimes I watch films or I cook a special meal.",
    subpreguntas: [
      {
        id: "195a",
        tipo: "radio",
        pregunta: "How often does David go to the gym?",
        opciones: [
          { valor: "a", texto: "Every day" },
          { valor: "b", texto: "Twice a week" },
          { valor: "c", texto: "Three times a week" },
          { valor: "d", texto: "Once a week" }
        ],
        respuestaCorrecta: "c",
        explicacion: "David says 'I go to the gym three times a week, on Monday, Wednesday, and Friday.' Frequency: 3 times per week."
      },
      {
        id: "195b",
        tipo: "radio",
        pregunta: "What is David's favourite sport?",
        opciones: [
          { valor: "a", texto: "Tennis" },
          { valor: "b", texto: "Basketball" },
          { valor: "c", texto: "Football" },
          { valor: "d", texto: "Swimming" }
        ],
        respuestaCorrecta: "c",
        explicacion: "David says 'Football is my favourite sport.' He plays football on Saturdays with his friends."
      },
      {
        id: "195c",
        tipo: "radio",
        pregunta: "When does David usually read?",
        opciones: [
          { valor: "a", texto: "In the morning" },
          { valor: "b", texto: "At lunchtime" },
          { valor: "c", texto: "In the afternoon" },
          { valor: "d", texto: "Before bed at night" }
        ],
        respuestaCorrecta: "d",
        explicacion: "David says 'I usually read before I go to bed at night.' Time expression: at night, before bed."
      }
    ],
    explicacion: "This audio tests comprehension of hobbies, frequency expressions (three times a week), adverbs (always, usually, rarely, sometimes), and time expressions. Audio TTS: British male voice, normal speed."
  },

  {
    id: 196,
    tipo: "audio-multiple",
    pregunta: "Listen to Laura describing her typical weekend and answer the questions below.",
    audioSrc: "../../audios/t1/exams/week3/audio-196.mp3",
    audioTexto: "Hello, I'm Laura. On Saturday mornings, I always do the shopping at the supermarket. In the afternoon, I often meet my friends at a café or we go for a walk. On Saturday evenings, I sometimes go to the cinema or stay at home. On Sundays, I never wake up early. I usually get up at ten o'clock and have a big breakfast. In the afternoon, I generally visit my parents. They live nearby. I usually have dinner with them and go home at about eight o'clock.",
    subpreguntas: [
      {
        id: "196a",
        tipo: "radio",
        pregunta: "What does Laura always do on Saturday mornings?",
        opciones: [
          { valor: "a", texto: "She meets her friends" },
          { valor: "b", texto: "She does the shopping" },
          { valor: "c", texto: "She goes to the cinema" },
          { valor: "d", texto: "She visits her parents" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Laura says 'On Saturday mornings, I always do the shopping.' The adverb 'always' (100%) shows this is her regular routine."
      },
      {
        id: "196b",
        tipo: "radio",
        pregunta: "What time does Laura usually get up on Sundays?",
        opciones: [
          { valor: "a", texto: "At 7:00 AM" },
          { valor: "b", texto: "At 8:00 AM" },
          { valor: "c", texto: "At 10:00 AM" },
          { valor: "d", texto: "At 12:00 PM" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Laura says 'I usually get up at about ten o'clock' on Sundays. She wakes up late at 10:00 AM."
      },
      {
        id: "196c",
        tipo: "radio",
        pregunta: "Who does Laura generally visit on Sunday afternoons?",
        opciones: [
          { valor: "a", texto: "Her friends" },
          { valor: "b", texto: "Her brother" },
          { valor: "c", texto: "Her parents" },
          { valor: "d", texto: "Her colleagues" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Laura says 'In the afternoon, I generally visit my parents.' The adverb 'generally' (similar to 'usually') indicates this is her regular routine."
      }
    ],
    explicacion: "This audio practices weekend routines, multiple adverbs of frequency (always, often, usually, sometimes, never, generally), and time expressions (mornings, afternoons, evenings). Audio TTS: British female voice, normal speed."
  },

  {
    id: 197,
    tipo: "audio-multiple",
    pregunta: "Listen to Mark talking about his eating habits and diet. Answer ALL the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-197.mp3",
    audioTexto: "Hi, my name is Mark. I try to eat healthy food. For breakfast, I always have cereal with milk and a banana. I drink orange juice every morning. For lunch, I usually eat a sandwich with salad. I often have chicken or tuna. I never eat fast food during the week because it's not healthy. However, on Fridays or Saturdays, I sometimes have pizza or a burger with my friends. For dinner, I generally cook at home. I like pasta and rice dishes. I often make a big salad too. I rarely eat dessert because I don't have a sweet tooth. But I do drink coffee after every meal.",
    subpreguntas: [
      {
        id: "197a",
        tipo: "radio",
        pregunta: "What does Mark always have for breakfast?",
        opciones: [
          { valor: "a", texto: "Toast and jam" },
          { valor: "b", texto: "Eggs and bacon" },
          { valor: "c", texto: "Cereal with milk and a banana" },
          { valor: "d", texto: "A sandwich" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Mark says 'For breakfast, I always have cereal with milk and a banana.' Adverb 'always' = 100%."
      },
      {
        id: "197b",
        tipo: "radio",
        pregunta: "How often does Mark eat fast food during the week?",
        opciones: [
          { valor: "a", texto: "Always" },
          { valor: "b", texto: "Usually" },
          { valor: "c", texto: "Sometimes" },
          { valor: "d", texto: "Never" }
        ],
        respuestaCorrecta: "d",
        explicacion: "Mark says 'I never eat fast food during the week because it's not healthy.' Adverb 'never' = 0%."
      },
      {
        id: "197c",
        tipo: "radio",
        pregunta: "What does Mark drink after every meal?",
        opciones: [
          { valor: "a", texto: "Water" },
          { valor: "b", texto: "Tea" },
          { valor: "c", texto: "Coffee" },
          { valor: "d", texto: "Orange juice" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Mark says 'But I do drink coffee after every meal.' Frequency expression: after every meal = always."
      }
    ],
    explicacion: "This audio tests food vocabulary, eating habits, adverbs of frequency (always, usually, often, never, sometimes, generally, rarely), and Present Simple for routines. Audio TTS: British male voice, normal speed."
  },

  {
    id: 198,
    tipo: "audio-multiple",
    pregunta: "Listen to Sophie describing her sister and answer the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-198.mp3",
    audioTexto: "Hello, I'm Sophie. I want to tell you about my sister. Her name is Anna and she is twenty-three years old. She lives in Edinburgh, which is in Scotland. She works as a nurse in a big hospital. She loves her job very much. Anna is very hardworking. She usually works five days a week, but sometimes she works at weekends too when the hospital is very busy. Anna has long brown hair and green eyes. She is tall and slim. She is also very kind and friendly. Everyone likes her. In her free time, Anna enjoys painting and going to art galleries. She also plays tennis twice a week. We talk on the phone every Sunday evening.",
    subpreguntas: [
      {
        id: "198a",
        tipo: "radio",
        pregunta: "What is Anna's job?",
        opciones: [
          { valor: "a", texto: "She's a teacher" },
          { valor: "b", texto: "She's a nurse" },
          { valor: "c", texto: "She's a doctor" },
          { valor: "d", texto: "She's an artist" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Sophie says 'She works as a nurse in a big hospital.' Anna is a nurse."
      },
      {
        id: "198b",
        tipo: "radio",
        pregunta: "What does Anna look like?",
        opciones: [
          { valor: "a", texto: "Short with black hair" },
          { valor: "b", texto: "Tall and slim with brown hair" },
          { valor: "c", texto: "Medium height with blonde hair" },
          { valor: "d", texto: "Short and slim with red hair" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Sophie says 'Anna has long brown hair and green eyes. She is tall and slim.' This describes Anna's physical appearance."
      },
      {
        id: "198c",
        tipo: "radio",
        pregunta: "How often do Sophie and Anna talk on the phone?",
        opciones: [
          { valor: "a", texto: "Every day" },
          { valor: "b", texto: "Every Sunday evening" },
          { valor: "c", texto: "Twice a week" },
          { valor: "d", texto: "Once a month" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Sophie says 'We talk on the phone every Sunday evening.' Frequency expression: every Sunday evening."
      }
    ],
    explicacion: "This audio practices talking about other people, physical descriptions (tall, slim, long hair), personality adjectives (hardworking, kind, friendly), jobs, and frequency expressions. Audio TTS: British female voice, normal speed."
  },

  {
    id: 199,
    tipo: "audio-multiple",
    pregunta: "Listen to Robert talking about his daily commute and work life. Answer the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-199.mp3",
    audioTexto: "Good morning. I'm Robert and I work in an office in central London. My working day starts very early. I wake up at five thirty in the morning because I live quite far from my office. I leave my house at six fifteen and I drive to the train station. The journey to the station takes about twenty minutes. Then I take the train to London. The train journey is one hour and fifteen minutes. I usually read the newspaper or check my emails on the train. I arrive at my office at about eight thirty. I work until five o'clock in the afternoon. After work, I sometimes meet colleagues for a drink, but I usually go straight home. I get home at about seven o'clock in the evening. It's a long day, but I enjoy my job.",
    subpreguntas: [
      {
        id: "199a",
        tipo: "radio",
        pregunta: "What time does Robert wake up?",
        opciones: [
          { valor: "a", texto: "At 5:30 AM" },
          { valor: "b", texto: "At 6:15 AM" },
          { valor: "c", texto: "At 8:30 AM" },
          { valor: "d", texto: "At 7:00 AM" }
        ],
        respuestaCorrecta: "a",
        explicacion: "Robert says 'I wake up at five thirty in the morning.' He wakes up at 5:30 AM."
      },
      {
        id: "199b",
        tipo: "radio",
        pregunta: "How long is Robert's train journey to London?",
        opciones: [
          { valor: "a", texto: "Twenty minutes" },
          { valor: "b", texto: "Thirty minutes" },
          { valor: "c", texto: "One hour" },
          { valor: "d", texto: "One hour and fifteen minutes" }
        ],
        respuestaCorrecta: "d",
        explicacion: "Robert says 'The train journey is one hour and fifteen minutes.' Duration: 1 hour 15 minutes."
      },
      {
        id: "199c",
        tipo: "radio",
        pregunta: "What does Robert usually do on the train?",
        opciones: [
          { valor: "a", texto: "He sleeps" },
          { valor: "b", texto: "He reads the newspaper or checks emails" },
          { valor: "c", texto: "He talks on the phone" },
          { valor: "d", texto: "He watches videos" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Robert says 'I usually read the newspaper or check my emails on the train.' Adverb 'usually' (80%)."
      }
    ],
    explicacion: "This audio tests comprehension of daily commute, time expressions, duration (one hour and fifteen minutes), and Present Simple routines. Audio TTS: British male voice, normal speed."
  },

  {
    id: 200,
    tipo: "audio-multiple",
    pregunta: "Listen to Jessica describing her typical evening routine and answer ALL the questions.",
    audioSrc: "../../audios/t1/exams/week3/audio-200.mp3",
    audioTexto: "Hi, I'm Jessica. I want to tell you about my evening routine. I finish work at six o'clock and I get home at about six thirty. When I arrive home, I always change my clothes and put on something comfortable. Then I usually prepare dinner. I often cook pasta or rice with vegetables. I generally eat dinner at about seven thirty. After dinner, I sometimes watch a series on Netflix or I read a book. I really enjoy reading. I also call my best friend two or three times a week. We talk for about an hour. At about ten o'clock, I start getting ready for bed. I always wash my face and brush my teeth. I never forget to do this! I usually go to bed at about eleven o'clock. Before I sleep, I often spend fifteen minutes on my phone checking social media.",
    subpreguntas: [
      {
        id: "200a",
        tipo: "radio",
        pregunta: "What does Jessica always do when she arrives home?",
        opciones: [
          { valor: "a", texto: "She watches TV" },
          { valor: "b", texto: "She prepares dinner" },
          { valor: "c", texto: "She changes her clothes" },
          { valor: "d", texto: "She calls her friend" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Jessica says 'When I arrive home, I always change my clothes and put on something comfortable.' Adverb 'always' = 100%."
      },
      {
        id: "200b",
        tipo: "radio",
        pregunta: "What time does Jessica generally eat dinner?",
        opciones: [
          { valor: "a", texto: "At 6:00 PM" },
          { valor: "b", texto: "At 6:30 PM" },
          { valor: "c", texto: "At 7:30 PM" },
          { valor: "d", texto: "At 11:00 PM" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Jessica says 'I generally eat dinner at about seven thirty.' Time: 7:30 PM. Adverb 'generally' = usually."
      },
      {
        id: "200c",
        tipo: "radio",
        pregunta: "How often does Jessica call her best friend?",
        opciones: [
          { valor: "a", texto: "Every day" },
          { valor: "b", texto: "Once a week" },
          { valor: "c", texto: "Two or three times a week" },
          { valor: "d", texto: "Once a month" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Jessica says 'I also call my best friend two or three times a week.' Frequency: 2-3 times per week."
      }
    ],
    explicacion: "This audio tests evening routine vocabulary, multiple adverbs of frequency (always, usually, often, sometimes, generally, never), and time expressions. Audio TTS: British female voice, slow speed."
  },

  {
    id: 201,
    tipo: "audio-multiple",
    pregunta: "Listen to Michael talking about his best friend and answer the questions below.",
    audioSrc: "../../audios/t1/exams/week3/audio-201.mp3",
    audioTexto: "Hello, my name is Michael. I want to tell you about my best friend. His name is Alex and we've been friends since we were children. Alex is twenty-seven years old and he lives in Manchester with his girlfriend. He works as a graphic designer for an advertising company. He really enjoys his job because he is very creative. Alex is tall and he has short black hair and brown eyes. He wears glasses. He is very intelligent and funny. He always makes me laugh. In his free time, Alex loves playing the guitar. He plays in a band and they perform at small venues on weekends. He also likes travelling. He usually goes abroad twice a year. Last year he visited Japan and Thailand. We meet up once or twice a month. We often go to watch football together because we both support Manchester United. We also text each other almost every day.",
    subpreguntas: [
      {
        id: "201a",
        tipo: "radio",
        pregunta: "What does Alex do for a living?",
        opciones: [
          { valor: "a", texto: "He's a musician" },
          { valor: "b", texto: "He's a teacher" },
          { valor: "c", texto: "He's a graphic designer" },
          { valor: "d", texto: "He's a football player" }
        ],
        respuestaCorrecta: "c",
        explicacion: "Michael says 'He works as a graphic designer for an advertising company.' This is Alex's job/profession."
      },
      {
        id: "201b",
        tipo: "radio",
        pregunta: "What does Alex look like?",
        opciones: [
          { valor: "a", texto: "Short with blonde hair" },
          { valor: "b", texto: "Tall with short black hair and glasses" },
          { valor: "c", texto: "Medium height with long hair" },
          { valor: "d", texto: "Short with red hair" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Michael says 'Alex is tall and he has short black hair and brown eyes. He wears glasses.' This is Alex's physical description."
      },
      {
        id: "201c",
        tipo: "radio",
        pregunta: "How often do Michael and Alex meet up?",
        opciones: [
          { valor: "a", texto: "Every day" },
          { valor: "b", texto: "Once or twice a month" },
          { valor: "c", texto: "Every week" },
          { valor: "d", texto: "Twice a year" }
        ],
        respuestaCorrecta: "b",
        explicacion: "Michael says 'We meet up once or twice a month.' Frequency: 1-2 times per month."
      }
    ],
    explicacion: "This audio practices describing other people, physical descriptions, personality adjectives (intelligent, funny, creative), jobs, hobbies, and frequency expressions. Audio TTS: British male voice, normal speed."
  }  

];

// FUNCIÓN PARA OBTENER PREGUNTAS ALEATORIAS
window.obtenerPreguntasAleatorias = function(cantidad = 20) {
  console.log(`📝 Seleccionando ${cantidad} preguntas aleatorias...`);
  
  const preguntasCopia = [...window.bancoPreguntasExamen];
  const preguntasSeleccionadas = [];
  
  for (let i = 0; i < Math.min(cantidad, preguntasCopia.length); i++) {
    const indiceAleatorio = Math.floor(Math.random() * preguntasCopia.length);
    preguntasSeleccionadas.push(preguntasCopia[indiceAleatorio]);
    preguntasCopia.splice(indiceAleatorio, 1);
  }
  
  console.log(`✅ ${preguntasSeleccionadas.length} preguntas seleccionadas`);
  return preguntasSeleccionadas;
};

// ============================================
// CIERRE DEL ARCHIVO
// ============================================

console.log(`✅ Banco de preguntas cargado: ${window.bancoPreguntasExamen.length} preguntas`);

