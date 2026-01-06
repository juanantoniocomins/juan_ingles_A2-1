// ============================================================
// tema1-week2-examenes.js - BANCO DE PREGUNTAS COMPLETO
// Tema 1: Week 2 - Introduce Yourself
// ============================================================

console.log('📚 Cargando banco de preguntas Tema 1 - Week 2...');

// BANCO DE PREGUNTAS - 60 preguntas mezclando todos los tipos
window.bancoPreguntasExamen = [

  // MEETING PEOPLE (Preguntas 1-15)
  {
    id: 1,
    tipo: "radio",
    pregunta: "Which expression is more FORMAL when meeting someone for the first time?",
    opciones: [
      { valor: "a", texto: "Nice to meet you" },
      { valor: "b", texto: "Pleased to meet you" },
      { valor: "c", texto: "Hi there!" },
      { valor: "d", texto: "What's up?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Pleased to meet you' is MORE FORMAL than 'Nice to meet you'. Use it in professional contexts, business meetings, or formal events. 'Nice to meet you' is neutral/semi-formal and more versatile."
  },

  {
    id: 2,
    tipo: "radio",
    pregunta: "What is the correct response when someone says 'Nice to meet you'?",
    opciones: [
      { valor: "a", texto: "Thank you" },
      { valor: "b", texto: "Nice to meet you too" },
      { valor: "c", texto: "You're welcome" },
      { valor: "d", texto: "Goodbye" }
    ],
    respuestaCorrecta: "b",
    explicacion: "The correct response is 'Nice to meet you too' or 'And you!'. Always return the greeting. Never say 'Thank you' or 'You're welcome' as responses to greetings."
  },

  {
    id: 3,
    tipo: "radio",
    pregunta: "Which greeting is MORE FORMAL: 'Hello' or 'Good morning'?",
    opciones: [
      { valor: "a", texto: "Hello is more formal" },
      { valor: "b", texto: "Good morning is more formal" },
      { valor: "c", texto: "They are equally formal" },
      { valor: "d", texto: "Neither is formal" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Good morning' is MORE FORMAL than 'Hello'. 'Good morning/afternoon/evening' are used in professional or polite contexts. 'Hello' is neutral and can be used anytime, anywhere."
  },

  {
    id: 4,
    tipo: "radio",
    pregunta: "What does 'Excuse me' mean when starting a conversation?",
    opciones: [
      { valor: "a", texto: "To apologise for a mistake" },
      { valor: "b", texto: "To get someone's attention politely" },
      { valor: "c", texto: "To say goodbye" },
      { valor: "d", texto: "To ask for directions only" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Excuse me' is used to GET SOMEONE'S ATTENTION politely or to start a conversation. It's NOT the same as 'I'm sorry' (which is an apology). Use it before interrupting or speaking to someone."
  },

  {
    id: 5,
    tipo: "radio",
    pregunta: "When you don't understand someone's name, what should you say?",
    opciones: [
      { valor: "a", texto: "What?" },
      { valor: "b", texto: "Sorry?" },
      { valor: "c", texto: "I don't know" },
      { valor: "d", texto: "Repeat!" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Say 'Sorry?' with rising intonation ↗ to politely ask someone to repeat. You can also say 'Can you say that again, please?' or 'Can you repeat, please?'. NEVER say just 'What?' - it's rude."
  },

  {
    id: 6,
    tipo: "text",
    pregunta: "Complete the question: 'Can you ______ that, please?' (to ask someone to say the letters of their name)",
    respuestaCorrecta: "spell",
    explicacion: "'Can you SPELL that, please?' is used to ask someone to say their name letter by letter. Other variants: 'How do you spell that?' or 'Could you spell your name for me?'"
  },

  {
    id: 7,
    tipo: "radio",
    pregunta: "In English-speaking cultures, what is the most common greeting gesture when meeting someone for the first time?",
    opciones: [
      { valor: "a", texto: "Two kisses on the cheek" },
      { valor: "b", texto: "A bow" },
      { valor: "c", texto: "A handshake" },
      { valor: "d", texto: "A hug" }
    ],
    respuestaCorrecta: "c",
    explicacion: "In UK/USA, people SHAKE HANDS when meeting someone for the first time. This is different from Spain where people give two kisses. The handshake should be firm (not too strong, not too weak) with eye contact and a smile."
  },

  {
    id: 8,
    tipo: "select",
    pregunta: "Which phrase is used to respond to 'Pleased to meet you'?",
    opciones: [
      { valor: "a", texto: "Nice day!" },
      { valor: "b", texto: "Pleased to meet you too" },
      { valor: "c", texto: "Thank you very much" },
      { valor: "d", texto: "See you later" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Always RETURN THE GREETING: 'Pleased to meet you' → 'Pleased to meet you too' or 'And you!' (informal). This shows politeness and completes the introduction ritual."
  },

  {
    id: 9,
    tipo: "checkbox",
    pregunta: "Select ALL the expressions you can use to START a conversation politely:",
    opciones: [
      { valor: "a", texto: "Excuse me" },
      { valor: "b", texto: "I'm sorry" },
      { valor: "c", texto: "Hello" },
      { valor: "d", texto: "Goodbye" }
    ],
    respuestasCorrectas: ["a", "b", "c"],
    explicacion: "'Excuse me', 'I'm sorry' (to politely interrupt), and 'Hello' can all be used to START conversations. 'Goodbye' is used to END conversations, not start them."
  },

  {
    id: 10,
    tipo: "true-false",
    pregunta: "'Sorry?' with rising intonation means you didn't understand and want the person to repeat.",
    respuestaCorrecta: "true",
    explicacion: "TRUE! 'Sorry?' ↗ with rising intonation = 'Can you repeat that?' or 'I didn't understand'. This is NOT an apology - it's a polite way to ask for repetition. Common in real conversations."
  },

  {
    id: 11,
    tipo: "radio",
    pregunta: "Choose the CORRECT dialogue when meeting someone:",
    opciones: [
      { valor: "a", texto: "A: Nice to meet you! B: Thank you!" },
      { valor: "b", texto: "A: Nice to meet you! B: Nice to meet you too!" },
      { valor: "c", texto: "A: Nice to meet you! B: Goodbye!" },
      { valor: "d", texto: "A: Nice to meet you! B: I'm sorry!" }
    ],
    respuestaCorrecta: "b",
    explicacion: "Correct dialogue: A: 'Nice to meet you!' → B: 'Nice to meet you too!' or 'And you!'. Always RETURN greetings. Never say 'Thank you' or 'Goodbye' as a response to introductions."
  },

  {
    id: 12,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct introduction:",
    palabras: ["Hi,", "I'm", "Carlos.", "Nice", "to", "meet", "you."],
    respuestaCorrecta: ["Hi,", "I'm", "Carlos.", "Nice", "to", "meet", "you."],
    explicacion: "Correct: 'Hi, I'm Carlos. Nice to meet you.' Structure: Greeting + Name + Polite expression. This is a semi-formal introduction suitable for most contexts."
  },

  {
    id: 13,
    tipo: "fill-blanks",
    pregunta: "Complete the dialogue: A: 'Hello, I'm Beth Scott. ______ to meet you.' B: '______ to meet you too, Linda.'",
    blanks: ["Pleased", "Pleased"],
    explicacion: "A: 'Pleased to meet you.' B: 'Pleased to meet you too.' This is a FORMAL introduction. Remember to return the greeting with 'too' or 'And you!'"
  },

  {
    id: 14,
    tipo: "select",
    pregunta: "Which is the BEST response to 'And you!' in a greeting?",
    opciones: [
      { valor: "a", texto: "Goodbye!" },
      { valor: "b", texto: "I'm fine, thanks" },
      { valor: "c", texto: "Nice to meet you too!" },
      { valor: "d", texto: "Excuse me" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'And you!' is an informal way to return the greeting. It means 'Nice to meet you too!'. Both are acceptable responses."
  },  

  {
    id: 15,
    tipo: "radio",
    pregunta: "In a FORMAL business meeting, which introduction is most appropriate?",
    opciones: [
      { valor: "a", texto: "Hey! What's up?" },
      { valor: "b", texto: "Hi, I'm John" },
      { valor: "c", texto: "Good morning. I'm John Smith. Pleased to meet you." },
      { valor: "d", texto: "Yo! Nice to see you!" }
    ],
    respuestaCorrecta: "c",
    explicacion: "In FORMAL contexts (business, professional), use: 'Good morning/afternoon' + Full name + 'Pleased to meet you'. This shows professionalism and respect. Avoid 'Hey', 'Yo', or very casual greetings."
  },

  {
    id: 16,
    tipo: "radio",
    pregunta: "Which Question Word do you use to ask about PEOPLE?",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "Where" },
      { valor: "c", texto: "Who" },
      { valor: "d", texto: "How" }
    ],
    respuestaCorrecta: "c",
    explicacion: "WHO is used to ask about PEOPLE and their identity. Examples: 'Who is your teacher?' 'Who are your friends?'. WHO = PEOPLE."
  },

  {
    id: 17,
    tipo: "radio",
    pregunta: "Which Question Word do you use to ask about PLACES?",
    opciones: [
      { valor: "a", texto: "When" },
      { valor: "b", texto: "Where" },
      { valor: "c", texto: "Why" },
      { valor: "d", texto: "What" }
    ],
    respuestaCorrecta: "b",
    explicacion: "WHERE is used to ask about PLACES, locations, and directions. Examples: 'Where are you from?' 'Where is the bathroom?'. WHERE = PLACES."
  },

  {
    id: 18,
    tipo: "radio",
    pregunta: "Which Question Word do you use to ask about TIME?",
    opciones: [
      { valor: "a", texto: "When" },
      { valor: "b", texto: "Which" },
      { valor: "c", texto: "Who" },
      { valor: "d", texto: "What" }
    ],
    respuestaCorrecta: "a",
    explicacion: "WHEN is used to ask about TIME, dates, days, and moments. Examples: 'When is your birthday?' 'When is the meeting?'. WHEN = TIME."
  },

  {
    id: 19,
    tipo: "radio",
    pregunta: "Which Question Word do you use to ask about REASONS?",
    opciones: [
      { valor: "a", texto: "How" },
      { valor: "b", texto: "What" },
      { valor: "c", texto: "Why" },
      { valor: "d", texto: "Where" }
    ],
    respuestaCorrecta: "c",
    explicacion: "WHY is used to ask about REASONS, causes, and motivations. Answers usually start with 'Because...'. Example: 'Why are you sad?' → 'Because I'm tired.'"
  },

  {
    id: 20,
    tipo: "radio",
    pregunta: "Which Question Word do you use to ask about THINGS or ACTIONS?",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "When" },
      { valor: "c", texto: "Who" },
      { valor: "d", texto: "Why" }
    ],
    respuestaCorrecta: "a",
    explicacion: "WHAT is used to ask about THINGS, objects, actions, and general information. Examples: 'What's your name?' 'What is this?'. WHAT = THINGS/ACTIONS."
  },

  {
    id: 21,
    tipo: "fill-blanks",
    pregunta: "Complete: '______ is important?' (reason) and '______ book do you prefer?' (choice)",
    blanks: ["Why", "Which"],
    explicacion: "'WHY is important?' asks for a REASON. 'WHICH book do you prefer?' asks you to CHOOSE between options."
  },  

  {
    id: 22,
    tipo: "select",
    pregunta: "Complete: '_____ is your teacher?' (asking about a person)",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "Who" },
      { valor: "c", texto: "Where" },
      { valor: "d", texto: "When" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'WHO is your teacher?' - Use WHO to ask about people's identity. WHO asks about PERSONS, not things."
  },

  {
    id: 23,
    tipo: "select",
    pregunta: "Complete: '_____ are you from?' (asking about origin/place)",
    opciones: [
      { valor: "a", texto: "Who" },
      { valor: "b", texto: "What" },
      { valor: "c", texto: "Where" },
      { valor: "d", texto: "Why" }
    ],
    respuestaCorrecta: "c",
    explicacion: "'WHERE are you from?' - Use WHERE to ask about places, locations, and origins. This is one of the most common questions when meeting new people."
  },

  {
    id: 24,
    tipo: "fill-blanks",
    pregunta: "Complete the questions with the correct Question Words: '______ is your birthday?' and '______ is your name?'",
    blanks: ["When", "What"],
    explicacion: "'WHEN is your birthday?' (time) and 'WHAT is your name?' (thing/information). WHEN = time, WHAT = things/information."
  },

  {
    id: 25,
    tipo: "radio",
    pregunta: "What is the difference between 'WHO' and 'WHO'S'?",
    opciones: [
      { valor: "a", texto: "They are the same" },
      { valor: "b", texto: "WHO = pronoun alone, WHO'S = Who is (contraction)" },
      { valor: "c", texto: "WHO'S is possessive form" },
      { valor: "d", texto: "WHO is informal, WHO'S is formal" }
    ],
    respuestaCorrecta: "b",
    explicacion: "WHO = interrogative pronoun alone. WHO'S = WHO IS (contraction). Example: 'Who is your friend?' = 'Who's your friend?'. Never confuse with WHOSE (possessive)."
  },

  {
    id: 26,
    tipo: "radio",
    pregunta: "Choose the CORRECT question:",
    opciones: [
      { valor: "a", texto: "How is your name?" },
      { valor: "b", texto: "What is your name?" },
      { valor: "c", texto: "Where is your name?" },
      { valor: "d", texto: "Who is your name?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'What is your name?' Use WHAT to ask about names. NEVER say 'How is your name?' - this is a common mistake from Spanish speakers."
  },

  {
    id: 27,
    tipo: "radio",
    pregunta: "Choose the CORRECT question to ask about age:",
    opciones: [
      { valor: "a", texto: "What is your years?" },
      { valor: "b", texto: "How many years are you?" },
      { valor: "c", texto: "How old are you?" },
      { valor: "d", texto: "What is your age?" }
    ],
    respuestaCorrecta: "c",
    explicacion: "CORRECT: 'How old are you?' This is the ONLY correct way to ask about age in English. NEVER translate directly from Spanish 'Cuántos años tienes?'"
  },

  {
    id: 28,
    tipo: "checkbox",
    pregunta: "Select ALL the Question Words that use contractions with 'is':",
    opciones: [
      { valor: "a", texto: "Who's (Who is)" },
      { valor: "b", texto: "What's (What is)" },
      { valor: "c", texto: "Where's (Where is)" },
      { valor: "d", texto: "Which's (Which is)" }
    ],
    respuestasCorrectas: ["a", "b", "c"],
    explicacion: "WHO'S, WHAT'S, WHERE'S are common contractions. WHICH rarely contracts. Examples: 'Who's your friend?', 'What's your name?', 'Where's the bathroom?'"
  },

  {
    id: 29,
    tipo: "true-false",
    pregunta: "Question Words in English ALWAYS go at the beginning of the question.",
    respuestaCorrecta: "true",
    explicacion: "TRUE! Question Words ALWAYS go at the START of questions. Structure: Question Word + TO BE + Subject + ? Example: 'Where ARE you?' NOT 'You are where?'"
  },

  {
    id: 30,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct question:",
    palabras: ["Where", "are", "you", "from", "?"],
    respuestaCorrecta: ["Where", "are", "you", "from", "?"],
    explicacion: "Correct: 'Where are you from?' Structure: Question Word (WHERE) + TO BE (are) + Subject (you) + Complement (from) + ?. This is one of the most common questions when meeting people."
  },

  // QUESTIONS & ANSWERS (Preguntas 31-45)
  {
    id: 31,
    tipo: "radio",
    pregunta: "What are the TWO types of questions with TO BE?",
    opciones: [
      { valor: "a", texto: "Yes/No Questions and WH-Questions" },
      { valor: "b", texto: "Short Questions and Long Questions" },
      { valor: "c", texto: "Open Questions and Closed Questions" },
      { valor: "d", texto: "Simple Questions and Complex Questions" }
    ],
    respuestaCorrecta: "a",
    explicacion: "The two main types are: 1) YES/NO QUESTIONS (Are you Spanish? Is she a teacher?) and 2) WH-QUESTIONS (Where are you? What is your name?). YES/NO questions need inversion, WH-questions use Question Words."
  },

  {
    id: 32,
    tipo: "radio",
    pregunta: "Choose the CORRECT structure for Yes/No questions with TO BE:",
    opciones: [
      { valor: "a", texto: "Subject + TO BE + ?" },
      { valor: "b", texto: "TO BE + Subject + ?" },
      { valor: "c", texto: "TO BE + Subject + Verb + ?" },
      { valor: "d", texto: "Question Word + Subject + TO BE + ?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT structure: TO BE + Subject + ? Example: 'ARE you happy?' NOT 'You are happy?'. We INVERT the verb and subject to form questions."
  },

  {
    id: 33,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct question:",
    palabras: ["Are", "you", "Spanish", "?"],
    respuestaCorrecta: ["Are", "you", "Spanish", "?"],
    explicacion: "Correct: 'Are you Spanish?' Structure: TO BE (Are) + Subject (you) + Adjective (Spanish) + ?. Remember to INVERT in questions."
  },

  {
    id: 34,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct question:",
    palabras: ["Is", "she", "a", "teacher", "?"],
    respuestaCorrecta: ["Is", "she", "a", "teacher", "?"],
    explicacion: "Correct: 'Is she a teacher?' Structure: TO BE (Is) + Subject (she) + Article (a) + Noun (teacher) + ?. Always invert TO BE and Subject."
  },

  {
    id: 35,
    tipo: "radio",
    pregunta: "What is the correct SHORT ANSWER to: 'Are you Spanish?'",
    opciones: [
      { valor: "a", texto: "Yes" },
      { valor: "b", texto: "Yes, I'm" },
      { valor: "c", texto: "Yes, I am" },
      { valor: "d", texto: "Yes, Spanish" }
    ],
    respuestaCorrecta: "c",
    explicacion: "CORRECT: 'Yes, I am'. Short answers are OBLIGATORY in English. Never say just 'Yes' (rude) or 'Yes, I'm' (grammatically incorrect). NEVER contract in affirmative short answers."
  },

  {
    id: 36,
    tipo: "radio",
    pregunta: "What is the correct SHORT ANSWER to: 'Is he your brother?'",
    opciones: [
      { valor: "a", texto: "No" },
      { valor: "b", texto: "No, he isn't" },
      { valor: "c", texto: "No, brother" },
      { valor: "d", texto: "No, his not" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'No, he isn't' or 'No, he's not'. Short answers are REQUIRED. Never say just 'No' - it's very rude. You CAN contract in negative short answers."
  },

  {
    id: 37,
    tipo: "true-false",
    pregunta: "Saying only 'Yes' or 'No' without a short answer is considered rude in English.",
    respuestaCorrecta: "true",
    explicacion: "TRUE! In English, you MUST use short answers. 'Are you Spanish?' → 'Yes, I am' (NOT just 'Yes'). Saying only 'Yes' or 'No' sounds very rude and abrupt."
  },

  {
    id: 38,
    tipo: "checkbox",
    pregunta: "Select ALL the CORRECT short answers to: 'Are they students?'",
    opciones: [
      { valor: "a", texto: "Yes, they are" },
      { valor: "b", texto: "Yes, they're" },
      { valor: "c", texto: "No, they aren't" },
      { valor: "d", texto: "No, they're not" }
    ],
    respuestasCorrectas: ["a", "c", "d"],
    explicacion: "CORRECT: 'Yes, they are' (NO contraction in affirmative), 'No, they aren't', 'No, they're not' (contractions OK in negative). NEVER: 'Yes, they're'."
  },

  {
    id: 39,
    tipo: "select",
    pregunta: "Choose the correct short answer: 'Are you tired?' →",
    opciones: [
      { valor: "a", texto: "Yes, tired" },
      { valor: "b", texto: "No, I'm not" },
      { valor: "c", texto: "No, I amn't" },
      { valor: "d", texto: "Yes, I'm" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'No, I'm not' or 'No, I am not'. NEVER: 'Yes, I'm' (no contractions in affirmative) or 'I amn't' (doesn't exist)."
  },  

  {
    id: 40,
    tipo: "radio",
    pregunta: "Choose the CORRECT WH-question structure:",
    opciones: [
      { valor: "a", texto: "Subject + TO BE + Question Word + ?" },
      { valor: "b", texto: "Question Word + TO BE + Subject + ?" },
      { valor: "c", texto: "TO BE + Question Word + Subject + ?" },
      { valor: "d", texto: "Question Word + Subject + TO BE + ?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT structure: Question Word + TO BE + Subject + ? Example: 'WHERE are you?' 'WHAT is your name?'. Question Words ALWAYS go at the beginning."
  },

  {
    id: 41,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["What", "is", "your", "name", "?"],
    respuestaCorrecta: ["What", "is", "your", "name", "?"],
    explicacion: "Correct: 'What is your name?' Structure: Question Word (What) + TO BE (is) + Possessive (your) + Noun (name) + ?. This is one of the most common questions."
  },

  {
    id: 42,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["How", "old", "are", "you", "?"],
    respuestaCorrecta: ["How", "old", "are", "you", "?"],
    explicacion: "Correct: 'How old are you?' This is the ONLY correct way to ask about age in English. NEVER say 'How many years are you?' or 'What is your age?'"
  },

  {
    id: 43,
    tipo: "radio",
    pregunta: "Which question is INCORRECT?",
    opciones: [
      { valor: "a", texto: "What is your name?" },
      { valor: "b", texto: "How is your name?" },
      { valor: "c", texto: "Where are you from?" },
      { valor: "d", texto: "How old are you?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "INCORRECT: 'How is your name?' This is a common mistake from Spanish speakers (Cómo te llamas?). CORRECT: 'What is your name?' Use WHAT, not HOW."
  },

  {
    id: 44,
    tipo: "fill-blanks",
    pregunta: "Complete the questions: '______ are you from?' and '______ is your phone number?'",
    blanks: ["Where", "What"],
    explicacion: "'WHERE are you from?' (place) and 'WHAT is your phone number?' (thing/information). Use WHERE for places, WHAT for things."
  },

  {
    id: 45,
    tipo: "radio",
    pregunta: "Transform this affirmative into a question: 'She is Italian' → ______",
    opciones: [
      { valor: "a", texto: "She is Italian?" },
      { valor: "b", texto: "Is she Italian?" },
      { valor: "c", texto: "She Italian is?" },
      { valor: "d", texto: "Italian she is?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'Is she Italian?' To transform affirmatives into questions: 1) Move TO BE to the beginning, 2) Keep the subject after TO BE, 3) Add '?'. Structure: TO BE + Subject + ?"
  },

  // REAL ENGLISH SITUATIONS (Preguntas 46-60)
  {
    id: 46,
    tipo: "radio",
    pregunta: "At the airport, the officer asks: 'What's the purpose of your visit?' What does 'purpose' mean?",
    opciones: [
      { valor: "a", texto: "How long you will stay" },
      { valor: "b", texto: "The reason why you are visiting" },
      { valor: "c", texto: "Where you are staying" },
      { valor: "d", texto: "Your passport number" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Purpose' = REASON. 'What's the purpose of your visit?' means 'Why are you visiting?'. Common answers: Tourism, Business, Study, Family visit."
  },

  {
    id: 47,
    tipo: "select",
    pregunta: "Complete the airport dialogue: Officer: 'Is this your first time in London?' Traveler: '_______'",
    opciones: [
      { valor: "a", texto: "Yes, I'm" },
      { valor: "b", texto: "Yes" },
      { valor: "c", texto: "Yes, it is" },
      { valor: "d", texto: "Yes, first" }
    ],
    respuestaCorrecta: "c",
    explicacion: "CORRECT: 'Yes, it is' (referring to 'this' = your first time). Short answers are OBLIGATORY. Never say just 'Yes' or 'Yes, I'm'."
  },

  {
    id: 48,
    tipo: "text",
    pregunta: "You're on holiday in London. The officer asks: 'Where are you staying?' What do you answer? (Use: Hilton Hotel)",
    respuestaCorrecta: "at the hilton hotel",
    explicacion: "Answer: 'At the Hilton Hotel' or 'I'm staying at the Hilton Hotel'. Use AT with specific hotels, addresses, and buildings."
  },

  {
    id: 49,
    tipo: "checkbox",
    pregunta: "Select ALL typical questions at passport control:",
    opciones: [
      { valor: "a", texto: "How long are you here for?" },
      { valor: "b", texto: "What's your favourite colour?" },
      { valor: "c", texto: "Where are you staying?" },
      { valor: "d", texto: "Is this your first time here?" }
    ],
    respuestasCorrectas: ["a", "c", "d"],
    explicacion: "Common questions: length of stay, accommodation, if it's first visit. NOT personal preferences like favourite colour."
  },  

  {
    id: 50,
    tipo: "radio",
    pregunta: "In the 'First Day of Class' dialogue, Tom says 'I'm the new IT assistant!'. What does IT mean?",
    opciones: [
      { valor: "a", texto: "Italian Teacher" },
      { valor: "b", texto: "Information Technology (computers)" },
      { valor: "c", texto: "International Trade" },
      { valor: "d", texto: "Important Task" }
    ],
    respuestaCorrecta: "b",
    explicacion: "IT = Information Technology (Informática/Tecnología). An IT assistant works with computers, software, and technical support."
  },

  {
    id: 51,
    tipo: "true-false",
    pregunta: "In the shopping dialogue, '30% off' means the price is reduced by 30%.",
    respuestaCorrecta: "true",
    explicacion: "TRUE! 'OFF' = DISCOUNT. '30% off' means 30% discount (30% de descuento). If something costs £50 and is 30% off, the new price is £35."
  },

  {
    id: 52,
    tipo: "radio",
    pregunta: "In a shop, you ask: 'Is it available in blue?' What does 'available' mean?",
    opciones: [
      { valor: "a", texto: "Expensive" },
      { valor: "b", texto: "In stock / You can buy it" },
      { valor: "c", texto: "On sale / Discount" },
      { valor: "d", texto: "The correct size" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Available' = IN STOCK, you can buy it (Disponible). 'Is it available in blue?' = 'Do you have this in blue?'"
  },

  {
    id: 53,
    tipo: "text",
    pregunta: "You want to try on clothes in a shop. What place do you ask for? 'Where are the ______?'",
    respuestaCorrecta: "fitting rooms",
    explicacion: "Fitting rooms / Changing rooms / Dressing rooms = PROBADORES. In UK English, 'fitting rooms' is most common. In US English, 'dressing rooms'."
  },

  {
    id: 54,
    tipo: "fill-blanks",
    pregunta: "Complete the shop dialogue: 'What time are you ______ until?' Answer: 'We're ______ until 9 PM.'",
    blanks: ["open", "open"],
    explicacion: "'What time are you open until?' = 'Until what time are you open?' (¿Hasta qué hora están abiertos?). Answer: 'We're open until 9 PM.'"
  },

  {
    id: 55,
    tipo: "radio",
    pregunta: "Choose the CORRECT response: A: 'Can you spell that, please?' B: '_______'",
    opciones: [
      { valor: "a", texto: "No, I can't" },
      { valor: "b", texto: "Sure! K-I-R-S-T-Y" },
      { valor: "c", texto: "Yes, Kirsty" },
      { valor: "d", texto: "It's K-I-R-S-T-Y Smith" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'Sure! K-I-R-S-T-Y' or 'Of course! K-I-R-S-T-Y'. Say each letter individually. 'Sure' and 'Of course' are polite ways to say 'yes'."
  },

  {
    id: 56,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order for a polite shop question:",
    palabras: ["Excuse", "me,", "where", "are", "the", "jackets", "?"],
    respuestaCorrecta: ["Excuse", "me,", "where", "are", "the", "jackets", "?"],
    explicacion: "Correct: 'Excuse me, where are the jackets?' Start with 'Excuse me' to be polite when asking for help in shops or public places."
  },

  {
    id: 57,
    tipo: "checkbox",
    pregunta: "Select ALL the questions you might hear at airport passport control:",
    opciones: [
      { valor: "a", texto: "What's your name?" },
      { valor: "b", texto: "Where are you from?" },
      { valor: "c", texto: "What's the purpose of your visit?" },
      { valor: "d", texto: "What's your favourite food?" }
    ],
    respuestasCorrectas: ["a", "b", "c"],
    explicacion: "At passport control you'll hear: Name, Origin, Purpose of visit, Length of stay, Where staying. NOT personal preferences like favourite food!"
  },

  {
    id: 58,
    tipo: "radio",
    pregunta: "Someone says their name but you don't understand. What's the MOST POLITE response?",
    opciones: [
      { valor: "a", texto: "What?" },
      { valor: "b", texto: "I don't know" },
      { valor: "c", texto: "Sorry? Can you spell that, please?" },
      { valor: "d", texto: "Repeat!" }
    ],
    respuestaCorrecta: "c",
    explicacion: "MOST POLITE: 'Sorry? Can you spell that, please?' or 'Sorry? Can you say that again, please?'. NEVER say just 'What?' - it's rude."
  },

  {
    id: 59,
    tipo: "radio",
    pregunta: "What should you say when you don't understand how to spell a name?",
    opciones: [
      { valor: "a", texto: "What?" },
      { valor: "b", texto: "I don't understand your name" },
      { valor: "c", texto: "Can you spell that, please?" },
      { valor: "d", texto: "Repeat your name!" }
    ],
    respuestaCorrecta: "c",
    explicacion: "POLITE: 'Can you spell that, please?' or 'How do you spell that?'. NEVER: 'What?' (rude) or 'Repeat!' (commanding)."
  },  

  {
    id: 60,
    tipo: "radio",
    pregunta: "In English-speaking cultures, what should you do when someone says 'Nice to meet you'?",
    opciones: [
      { valor: "a", texto: "Say 'Thank you'" },
      { valor: "b", texto: "Say 'Nice to meet you too' and shake hands" },
      { valor: "c", texto: "Say 'Goodbye'" },
      { valor: "d", texto: "Give two kisses on the cheek" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: Say 'Nice to meet you too' (or 'And you!') and SHAKE HANDS. In UK/USA, people shake hands when meeting, NOT two kisses (Spain/Latin cultures)."
  },

  {
    id: 61,
    tipo: "true-false",
    pregunta: "In UK/USA cultures, people give two kisses when meeting someone for the first time.",
    respuestaCorrecta: "false",
    explicacion: "FALSE! In UK/USA, people SHAKE HANDS when meeting for the first time. Two kisses are common in Spain and Latin cultures, not in English-speaking countries."
  },

  {
    id: 62,
    tipo: "radio",
    pregunta: "What is the difference between 'Pardon?' and 'Sorry?'?",
    opciones: [
      { valor: "a", texto: "They mean different things" },
      { valor: "b", texto: "Pardon is more formal (UK), Sorry is more common (USA)" },
      { valor: "c", texto: "Pardon is rude" },
      { valor: "d", texto: "Sorry is only for apologies" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Pardon?' is more FORMAL and common in UK English. 'Sorry?' is more informal and common in USA. Both mean 'Can you repeat?'"
  },

  {
    id: 63,
    tipo: "text",
    pregunta: "Complete: 'I'm sorry to ______' (when you need to interrupt someone politely)",
    respuestaCorrecta: "interrupt",
    explicacion: "'I'm sorry to interrupt' is a polite way to get someone's attention when they're busy or talking. Use it before asking a question."
  },

  {
    id: 64,
    tipo: "sentence-ordering",
    pregunta: "Put in order a FORMAL introduction:",
    palabras: ["Good", "morning.", "I'm", "Beth", "Scott.", "Pleased", "to", "meet", "you."],
    respuestaCorrecta: ["Good", "morning.", "I'm", "Beth", "Scott.", "Pleased", "to", "meet", "you."],
    explicacion: "FORMAL introduction: Time greeting (Good morning) + Full name + 'Pleased to meet you'. This is appropriate for business meetings."
  },

  {
    id: 65,
    tipo: "radio",
    pregunta: "When shaking hands in English cultures, you should:",
    opciones: [
      { valor: "a", texto: "Avoid eye contact" },
      { valor: "b", texto: "Make eye contact and smile" },
      { valor: "c", texto: "Look down" },
      { valor: "d", texto: "Bow first" }
    ],
    respuestaCorrecta: "b",
    explicacion: "When shaking hands: make EYE CONTACT, SMILE, and use a FIRM (not too strong) grip. This shows confidence and respect."
  },

  {
    id: 66,
    tipo: "checkbox",
    pregunta: "Select ALL variants you can use to ask someone to repeat:",
    opciones: [
      { valor: "a", texto: "Can you say that again, please?" },
      { valor: "b", texto: "Can you repeat, please?" },
      { valor: "c", texto: "Sorry?" },
      { valor: "d", texto: "What did you say?" }
    ],
    respuestasCorrectas: ["a", "b", "c", "d"],
    explicacion: "ALL are correct! 'Sorry?' is most common/informal. The others are more complete and polite. All mean 'Can you repeat?'"
  },

  {
    id: 67,
    tipo: "fill-blanks",
    pregunta: "Complete the FORMAL response: A: 'Pleased to meet you.' B: '______ to meet you ______.''",
    blanks: ["Pleased", "too"],
    explicacion: "'Pleased to meet you too' or 'And you!' are correct responses. Remember to RETURN the greeting in English culture."
  },

  {
    id: 68,
    tipo: "true-false",
    pregunta: "'Hello' is more formal than 'Good afternoon'.",
    respuestaCorrecta: "false",
    explicacion: "FALSE! 'Good morning/afternoon/evening' are MORE FORMAL than 'Hello'. Time-based greetings show more politeness and are used in professional contexts."
  },

  {
    id: 69,
    tipo: "radio",
    pregunta: "Which sentence is CORRECT?",
    opciones: [
      { valor: "a", texto: "Im from the Spain" },
      { valor: "b", texto: "Im from Spain" },
      { valor: "c", texto: "I from Spain" },
      { valor: "d", texto: "Im of Spain" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'I'm from Spain' (no article). NEVER: 'the Spain', 'I from' (missing verb), or 'of Spain'."
  },

  {
    id: 70,
    tipo: "select",
    pregunta: "How do you pronounce the 'H' in 'WHO', 'WHAT', 'WHERE'?",
    opciones: [
      { valor: "a", texto: "You pronounce it like 'h' in 'hello'" },
      { valor: "b", texto: "The H is SILENT" },
      { valor: "c", texto: "You pronounce it like 'j' in Spanish" },
      { valor: "d", texto: "You don't say the W" }
    ],
    respuestaCorrecta: "b",
    explicacion: "The H is SILENT in WHO (ju), WHAT (wot), WHERE (wer), WHEN (wen). Only the W sound is pronounced."
  },

  {
    id: 71,
    tipo: "radio",
    pregunta: "Which question is used to choose between LIMITED options?",
    opciones: [
      { valor: "a", texto: "What is your favourite?" },
      { valor: "b", texto: "Which is your favourite?" },
      { valor: "c", texto: "Who is your favourite?" },
      { valor: "d", texto: "Why is your favourite?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'WHICH' is used when choosing between LIMITED OPTIONS. 'What' is for unlimited/general options. Example: 'Which one - the red or the blue?'"
  },

  {
    id: 72,
    tipo: "text",
    pregunta: "Complete: 'What ______ is it?' (asking for the specific hour)",
    respuestaCorrecta: "time",
    explicacion: "'What TIME is it?' is used to ask for the EXACT HOUR. Answer: 'It's 3 o'clock', 'It's half past five', etc."
  },

  {
    id: 73,
    tipo: "sentence-ordering",
    pregunta: "Put in order this WH-question:",
    palabras: ["Why", "are", "you", "here", "?"],
    respuestaCorrecta: ["Why", "are", "you", "here", "?"],
    explicacion: "Structure: Question Word (Why) + TO BE (are) + Subject (you) + Complement (here) + ?. WHY asks for REASONS."
  },

  {
    id: 74,
    tipo: "true-false",
    pregunta: "WH-Questions can be answered with just 'Yes' or 'No'.",
    respuestaCorrecta: "false",
    explicacion: "FALSE! WH-Questions need SPECIFIC INFORMATION as answers. Only Yes/No questions can be answered with Yes/No (+ short answer)."
  },

  {
    id: 75,
    tipo: "radio",
    pregunta: "What's the CORRECT way to answer 'How are you?'",
    opciones: [
      { valor: "a", texto: "Yes, I am" },
      { valor: "b", texto: "I'm fine, thanks" },
      { valor: "c", texto: "I'm 25 years old" },
      { valor: "d", texto: "I'm from Spain" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'I'm fine, thanks' or 'I'm well, thank you'. HOW asks about STATE/CONDITION. NEVER confuse with age or origin."
  },

  {
    id: 76,
    tipo: "fill-blanks",
    pregunta: "Complete: '______ is the party?' (time) and '______ is the reason?' (cause)",
    blanks: ["When", "What"],
    explicacion: "'WHEN is the party?' (time/date). 'WHAT is the reason?' (asking for information). Could also be 'WHY?' for the reason."
  },

  {
    id: 77,
    tipo: "checkbox",
    pregunta: "Select ALL correct contractions with Question Words:",
    opciones: [
      { valor: "a", texto: "Who's = Who is" },
      { valor: "b", texto: "What's = What is" },
      { valor: "c", texto: "Where's = Where is" },
      { valor: "d", texto: "Why's = Why is" }
    ],
    respuestasCorrectas: ["a", "b", "c", "d"],
    explicacion: "ALL are correct contractions! Who's, What's, Where's, When's, Why's, How's are all valid. Only WHICH rarely contracts."
  },

  {
    id: 78,
    tipo: "radio",
    pregunta: "In a Yes/No question with TO BE, where does the verb go?",
    opciones: [
      { valor: "a", texto: "At the end" },
      { valor: "b", texto: "At the beginning (before the subject)" },
      { valor: "c", texto: "After the subject (no change)" },
      { valor: "d", texto: "After the question word" }
    ],
    respuestaCorrecta: "b",
    explicacion: "TO BE goes at the BEGINNING before the subject. Structure: TO BE + Subject + ? Example: 'ARE you happy?' NOT 'You are happy?'"
  },

  {
    id: 79,
    tipo: "sentence-ordering",
    pregunta: "Transform this affirmative into a question:",
    palabras: ["Is", "the", "museum", "closed", "?"],
    respuestaCorrecta: ["Is", "the", "museum", "closed", "?"],
    explicacion: "Affirmative: 'The museum is closed.' → Question: 'Is the museum closed?' Move TO BE to the beginning."
  },

  {
    id: 80,
    tipo: "true-false",
    pregunta: "You CAN contract in affirmative short answers: 'Yes, I'm', 'Yes, she's'.",
    respuestaCorrecta: "false",
    explicacion: "FALSE! NEVER contract in AFFIRMATIVE short answers. Correct: 'Yes, I am', 'Yes, she is'. You CAN contract negatives: 'No, I'm not', 'No, she isn't'."
  },

  {
    id: 81,
    tipo: "radio",
    pregunta: "Choose the CORRECT question structure:",
    opciones: [
      { valor: "a", texto: "You are from where?" },
      { valor: "b", texto: "Where you are from?" },
      { valor: "c", texto: "Where are you from?" },
      { valor: "d", texto: "From where you are?" }
    ],
    respuestaCorrecta: "c",
    explicacion: "CORRECT: 'Where are you from?' Structure: Question Word + TO BE + Subject + Complement + ?. NEVER put Question Word at the end!"
  },

  {
    id: 82,
    tipo: "select",
    pregunta: "What's the correct response to 'Is he your brother?' if the answer is NO?",
    opciones: [
      { valor: "a", texto: "No" },
      { valor: "b", texto: "No, he not" },
      { valor: "c", texto: "No, he isn't" },
      { valor: "d", texto: "No, his not" }
    ],
    respuestaCorrecta: "c",
    explicacion: "CORRECT: 'No, he isn't' or 'No, he's not'. Both contractions are OK in negative. NEVER: just 'No' (rude), 'his not' (wrong pronoun)."
  },

  {
    id: 83,
    tipo: "fill-blanks",
    pregunta: "Complete: 'Are they students?' → 'Yes, ______ ______.'",
    blanks: ["they", "are"],
    explicacion: "'Yes, they are.' Use the SAME PRONOUN in the short answer. NEVER: 'Yes, they're' (no contractions in affirmative)."
  },

  {
    id: 84,
    tipo: "text",
    pregunta: "Transform to question: 'It is cold.' → '______ ______ cold?'",
    respuestaCorrecta: "is it",
    explicacion: "'Is it cold?' Move TO BE to the beginning: Affirmative: It IS cold → Question: IS it cold?"
  },

  {
    id: 85,
    tipo: "radio",
    pregunta: "At the airport, what does 'purpose of your visit' mean?",
    opciones: [
      { valor: "a", texto: "Where you're staying" },
      { valor: "b", texto: "Why you're visiting (reason)" },
      { valor: "c", texto: "How long you're staying" },
      { valor: "d", texto: "Your passport number" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Purpose' = REASON/WHY. Common answers: Tourism, Business, Study, Visiting family. It's one of the standard passport control questions."
  },

  {
    id: 86,
    tipo: "checkbox",
    pregunta: "Select ALL appropriate responses when someone says their name but you didn't understand:",
    opciones: [
      { valor: "a", texto: "Sorry?" },
      { valor: "b", texto: "Can you spell that, please?" },
      { valor: "c", texto: "What?" },
      { valor: "d", texto: "How do you spell that?" }
    ],
    respuestasCorrectas: ["a", "b", "d"],
    explicacion: "POLITE: 'Sorry?', 'Can you spell that?', 'How do you spell that?'. RUDE: 'What?' (alone)."
  },

  {
    id: 87,
    tipo: "sentence-ordering",
    pregunta: "Order this shop question correctly:",
    palabras: ["What", "time", "are", "you", "open", "until", "?"],
    respuestaCorrecta: ["What", "time", "are", "you", "open", "until", "?"],
    explicacion: "'What time are you open until?' asks until what hour they close. Common answer: 'We're open until 9 PM.'"
  },

  {
    id: 88,
    tipo: "true-false",
    pregunta: "'Available' means 'expensive' when shopping.",
    respuestaCorrecta: "false",
    explicacion: "FALSE! 'Available' = IN STOCK, you can buy it (Disponible). NOT expensive. Example: 'Is it available in blue?' = 'Do you have it in blue?'"
  },

  {
    id: 89,
    tipo: "radio",
    pregunta: "What's the meaning of '30% off'?",
    opciones: [
      { valor: "a", texto: "30% more expensive" },
      { valor: "b", texto: "30% discount" },
      { valor: "c", texto: "30 items left" },
      { valor: "d", texto: "Open until 30 minutes" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'OFF' = DISCOUNT. '30% off' = 30% de descuento. If something costs £50 with 30% off, the new price is £35."
  },

  {
    id: 90,
    tipo: "text",
    pregunta: "Where do you try on clothes in a shop? (UK English)",
    respuestaCorrecta: "fitting rooms",
    explicacion: "UK: 'fitting rooms'. USA: 'dressing rooms' or 'changing rooms'. All mean PROBADORES."
  },

  {
    id: 91,
    tipo: "select",
    pregunta: "When spelling names, what should you do?",
    opciones: [
      { valor: "a", texto: "Speak very fast" },
      { valor: "b", texto: "Say each letter slowly and clearly" },
      { valor: "c", texto: "Spell words instead of letters" },
      { valor: "d", texto: "Write it down only" }
    ],
    respuestaCorrecta: "b",
    explicacion: "When spelling: say each letter SLOWLY and CLEARLY. Example: 'K... I... R... S... T... Y'. You can group letters for long names: 'K-I-R... S-T-Y'."
  },

  {
    id: 92,
    tipo: "fill-blanks",
    pregunta: "Complete the polite spelling request: 'Can you ______ that, ______?'",
    blanks: ["spell", "please"],
    explicacion: "'Can you spell that, please?' is the most common way to ask someone to spell their name letter by letter. Always add 'please' for politeness."
  },

  {
    id: 93,
    tipo: "radio",
    pregunta: "Which is CORRECT when responding to 'Can you spell that?'",
    opciones: [
      { valor: "a", texto: "No, I can't" },
      { valor: "b", texto: "Sure! M-A-R-I-A" },
      { valor: "c", texto: "Yes, Maria" },
      { valor: "d", texto: "Maria with an A" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'Sure! M-A-R-I-A' or 'Of course! M-A-R-I-A'. Say each letter individually. 'Sure' and 'Of course' are polite ways to say 'yes'."
  },

  {
    id: 94,
    tipo: "true-false",
    pregunta: "In informal conversation, short answers like 'Home' or 'At three' are acceptable.",
    respuestaCorrecta: "true",
    explicacion: "TRUE! In INFORMAL settings, short answers are OK: 'Where are you?' → 'Home' (instead of 'I'm at home'). But in FORMAL contexts, use complete answers."
  },

  {
    id: 95,
    tipo: "checkbox",
    pregunta: "Select ALL nationalities that are correctly formed:",
    opciones: [
      { valor: "a", texto: "I'm Spanish" },
      { valor: "b", texto: "I'm from France, I'm French" },
      { valor: "c", texto: "I'm Germany" },
      { valor: "d", texto: "I'm from China, I'm Chinese" }
    ],
    respuestasCorrectas: ["a", "b", "d"],
    explicacion: "CORRECT: 'I'm Spanish', 'I'm French', 'I'm Chinese'. WRONG: 'I'm Germany' (that's a country, not a nationality). Say 'I'm German' or 'I'm from Germany'."
  },

  {
    id: 96,
    tipo: "sentence-ordering",
    pregunta: "Order this typical introduction:",
    palabras: ["Hi,", "I'm", "from", "Mexico.", "Nice", "to", "meet", "you."],
    respuestaCorrecta: ["Hi,", "I'm", "from", "Mexico.", "Nice", "to", "meet", "you."],
    explicacion: "Common introduction: Greeting + Origin + Polite expression. Alternative: 'Hi, I'm Pedro from Mexico. Nice to meet you.'"
  },

  {
    id: 97,
    tipo: "radio",
    pregunta: "What's the purpose of 'small talk' in English culture?",
    opciones: [
      { valor: "a", texto: "To ask personal questions" },
      { valor: "b", texto: "To break the ice and start conversations" },
      { valor: "c", texto: "To practice grammar" },
      { valor: "d", texto: "To end conversations" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'Small talk' = casual conversation to BREAK THE ICE. Common topics: weather (UK), profession (USA), sports (Australia). It makes people feel comfortable before deeper conversation."
  },

  {
    id: 98,
    tipo: "select",
    pregunta: "Which topic is SAFEST for small talk in English cultures?",
    opciones: [
      { valor: "a", texto: "Salary and money" },
      { valor: "b", texto: "Age (especially with women)" },
      { valor: "c", texto: "The weather" },
      { valor: "d", texto: "Political opinions" }
    ],
    respuestaCorrecta: "c",
    explicacion: "THE WEATHER is the SAFEST topic everywhere (especially UK). AVOID: salary, age, politics, religion in first meetings. Safe topics: weather, sports, travel, hobbies."
  },

  {
    id: 99,
    tipo: "fill-blanks",
    pregunta: "Complete polite endings: 'It was nice ______ to you!' and 'Have a nice ______!'",
    blanks: ["talking", "day"],
    explicacion: "'It was nice talking to you!' and 'Have a nice day!' are polite ways to END a conversation. Other options: 'See you around!', 'Nice meeting you!'"
  },

  {
    id: 100,
    tipo: "true-false",
    pregunta: "When answering 'Why' questions in English, you usually start with 'Because'.",
    respuestaCorrecta: "true",
    explicacion: "TRUE! WHY questions need REASONS. Answer with 'Because...' Example: 'Why are you happy?' → 'Because it's my birthday!'"
  },
  
  {
    id: 101,
    tipo: "audio-multiple",
    pregunta: "Listen to Sarah's first meeting with Tom. Answer the questions about their introduction",
    audioSrc: "../../audios/t1/exams/week2/meeting-sarah-tom.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What greeting does Sarah use?",
        opciones: [
          { valor: "a", texto: "Hey! What's up?" },
          { valor: "b", texto: "Good morning. Pleased to meet you." },
          { valor: "c", texto: "Hello. Nice to meet you." },
          { valor: "d", texto: "Hi there!" }
        ],
        respuestaCorrecta: "c"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "What does Tom answer?",
        opciones: [
          { valor: "a", texto: "Thank you!" },
          { valor: "b", texto: "Nice to meet you too!" },
          { valor: "c", texto: "Goodbye!" },
          { valor: "d", texto: "Pleased to meet you!" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "What does Sarah ask Tom?",
        opciones: [
          { valor: "a", texto: "How old are you?" },
          { valor: "b", texto: "Where are you staying?" },
          { valor: "c", texto: "What's your name?" },
          { valor: "d", texto: "Can you spell that, please?" }
        ],
        respuestaCorrecta: "d"
      },
      {
        id: "d",
        tipo: "text",
        pregunta: "How does Tom spell his surname? (Write in capital letters)",
        respuestaCorrecta: "JOHNSON",
        explicacion: "Tom says: 'It's J-O-H-N-S-O-N'. When spelling names, say each letter clearly."
      },
      {
        id: "e",
        tipo: "radio",
        pregunta: "What gesture do they do at the end?",
        opciones: [
          { valor: "a", texto: "They give two kisses" },
          { valor: "b", texto: "They shake hands" },
          { valor: "c", texto: "They bow" },
          { valor: "d", texto: "They hug" }
        ],
        respuestaCorrecta: "b"
      }
    ],
    explicacion: "Practice listening to a real introduction dialogue. Remember: 'Nice to meet you' → 'Nice to meet you too', and shaking hands is the standard greeting gesture in English cultures."
  },

  {
    id: 102,
    tipo: "audio-multiple",
    pregunta: "Listen to this airport conversation between an officer and a traveler. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/airport-conversation.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What is the first question the officer asks?",
        opciones: [
          { valor: "a", texto: "What's your name?" },
          { valor: "b", texto: "Where are you from?" },
          { valor: "c", texto: "What's the purpose of your visit?" },
          { valor: "d", texto: "How old are you?" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "Where is the traveler from?",
        opciones: [
          { valor: "a", texto: "Spain" },
          { valor: "b", texto: "France" },
          { valor: "c", texto: "Italy" },
          { valor: "d", texto: "Mexico" }
        ],
        respuestaCorrecta: "d"
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "What is the purpose of the visit?",
        opciones: [
          { valor: "a", texto: "Business" },
          { valor: "b", texto: "Tourism" },
          { valor: "c", texto: "Study" },
          { valor: "d", texto: "Family visit" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "d",
        tipo: "text",
        pregunta: "How long is the traveler staying? (Write the number of days)",
        respuestaCorrecta: "10",
        explicacion: "The traveler says: 'I'm staying for ten days' or 'Ten days'."
      },
      {
        id: "e",
        tipo: "radio",
        pregunta: "Is this the traveler's first time in London?",
        opciones: [
          { valor: "a", texto: "Yes, it is" },
          { valor: "b", texto: "No, it isn't" },
          { valor: "c", texto: "The traveler doesn't say" },
          { valor: "d", texto: "Yes, I'm" }
        ],
        respuestaCorrecta: "a"
      }
    ],
    explicacion: "Common airport passport control questions: 'Where are you from?', 'What's the purpose of your visit?', 'How long are you staying?', 'Is this your first time?'. These are standard security questions."
  },

  {
    id: 103,
    tipo: "audio-multiple",
    pregunta: "Listen to Emma asking for help in a shop. Answer the questions about the conversation",
    audioSrc: "../../audios/t1/exams/week2/shop-conversation.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "How does Emma start the conversation?",
        opciones: [
          { valor: "a", texto: "What?" },
          { valor: "b", texto: "Excuse me" },
          { valor: "c", texto: "Hello, my name is Emma" },
          { valor: "d", texto: "I want jackets" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "What does Emma ask about?",
        opciones: [
          { valor: "a", texto: "Where are the fitting rooms?" },
          { valor: "b", texto: "Where are the jackets?" },
          { valor: "c", texto: "How much is it?" },
          { valor: "d", texto: "Is it available in blue?" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "What does the shop assistant answer?",
        opciones: [
          { valor: "a", texto: "They're on the second floor" },
          { valor: "b", texto: "They're on sale" },
          { valor: "c", texto: "They're available in blue" },
          { valor: "d", texto: "I don't know" }
        ],
        respuestaCorrecta: "a"
      },
      {
        id: "d",
        tipo: "radio",
        pregunta: "What does Emma say at the end?",
        opciones: [
          { valor: "a", texto: "Goodbye" },
          { valor: "b", texto: "Thank you very much" },
          { valor: "c", texto: "You're welcome" },
          { valor: "d", texto: "Excuse me" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "e",
        tipo: "true-false",
        pregunta: "Emma uses polite language in the shop",
        respuestaCorrecta: "true"
      }
    ],
    explicacion: "Polite expressions for shopping: Start with 'Excuse me' to get attention, ask 'Where are...?', and always say 'Thank you' at the end. This is basic politeness in English culture."
  }, 
  {
    id: 104,
    tipo: "audio-multiple",
    pregunta: "Listen to this conversation at a birthday party. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/party-conversation.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What is Emma's cousin's name?",
        opciones: [
          { valor: "a", texto: "Sophie" },
          { valor: "b", texto: "Lucy" },
          { valor: "c", texto: "Maria" },
          { valor: "d", texto: "Emma" }
        ],
        respuestaCorrecta: "a"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "Where is Lucas from?",
        opciones: [
          { valor: "a", texto: "Mexico" },
          { valor: "b", texto: "Spain" },
          { valor: "c", texto: "Brazil" },
          { valor: "d", texto: "Argentina" }
        ],
        respuestaCorrecta: "c"
      },
      {
        id: "c",
        tipo: "text",
        pregunta: "How old is Emma? (Write the number)",
        respuestaCorrecta: "24",
        explicacion: "Emma says: 'I'm 24' when Lucas asks 'How old are you?'"
      },
      {
        id: "d",
        tipo: "radio",
        pregunta: "Where does Lucas live now?",
        opciones: [
          { valor: "a", texto: "In Brazil" },
          { valor: "b", texto: "In Manchester" },
          { valor: "c", texto: "In London" },
          { valor: "d", texto: "In Spain" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "e",
        tipo: "true-false",
        pregunta: "Lucas and Sophie are friends from work",
        respuestaCorrecta: "true"
      }
    ],
    explicacion: "In real party situations, people ask about: connections ('Are you a friend of...?'), origin ('Where are you from?'), and age politely ('How old are you, if you don't mind me asking?'). This is typical small talk."
  },

  {
    id: 105,
    tipo: "audio-multiple",
    pregunta: "Listen to this first day at work conversation. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/first-day-work.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What is Chen's full name?",
        opciones: [
          { valor: "a", texto: "Chen Li" },
          { valor: "b", texto: "Chen Wang" },
          { valor: "c", texto: "Wang Chen" },
          { valor: "d", texto: "Chen Yang" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "What is Robert's job?",
        opciones: [
          { valor: "a", texto: "He's a teacher" },
          { valor: "b", texto: "He's the new assistant" },
          { valor: "c", texto: "He's the office manager" },
          { valor: "d", texto: "He's a student" }
        ],
        respuestaCorrecta: "c"
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "Which city is Chen from?",
        opciones: [
          { valor: "a", texto: "Shanghai" },
          { valor: "b", texto: "Hong Kong" },
          { valor: "c", texto: "Beijing" },
          { valor: "d", texto: "Guangzhou" }
        ],
        respuestaCorrecta: "c"
      },
      {
        id: "d",
        tipo: "text",
        pregunta: "How long has Chen been in London? (Write the number of years)",
        respuestaCorrecta: "2",
        explicacion: "Chen says: 'I'm here for two years now' meaning he's been there for 2 years."
      },
      {
        id: "e",
        tipo: "radio",
        pregunta: "Where did Chen study English?",
        opciones: [
          { valor: "a", texto: "In London" },
          { valor: "b", texto: "At university" },
          { valor: "c", texto: "At a language school" },
          { valor: "d", texto: "He didn't study English" }
        ],
        respuestaCorrecta: "b"
      }
    ],
    explicacion: "First day at work conversations are MORE FORMAL. Use 'Pleased to meet you' (not 'Nice to meet you'), full names (Chen Wang, not just Chen), and professional questions (not personal questions like age)."
  },

  {
    id: 106,
    tipo: "audio-multiple",
    pregunta: "Listen to this telephone conversation for a hotel reservation. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/hotel-reservation.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What is Mrs. Kowalski's first name?",
        opciones: [
          { valor: "a", texto: "Ana" },
          { valor: "b", texto: "Anna" },
          { valor: "c", texto: "Hannah" },
          { valor: "d", texto: "Anne" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "b",
        tipo: "text",
        pregunta: "How do you spell her surname? (Write in capital letters)",
        respuestaCorrecta: "KOWALSKI",
        explicacion: "The receptionist asks 'Can you spell your surname?' and Mrs. Kowalski spells: K-O-W-A-L-S-K-I."
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "What does the receptionist ask for after the name?",
        opciones: [
          { valor: "a", texto: "Her address" },
          { valor: "b", texto: "Her email address" },
          { valor: "c", texto: "Her phone number" },
          { valor: "d", texto: "Her passport" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "d",
        tipo: "radio",
        pregunta: "How does Mrs. Kowalski spell her email?",
        opciones: [
          { valor: "a", texto: "She says the full email together" },
          { valor: "b", texto: "She spells it letter by letter" },
          { valor: "c", texto: "She doesn't give it" },
          { valor: "d", texto: "She writes it down" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "e",
        tipo: "true-false",
        pregunta: "The receptionist confirms the spelling to make sure it's correct",
        respuestaCorrecta: "true"
      }
    ],
    explicacion: "Phone conversations require clear SPELLING because you can't see the person. Always: 1) Speak slowly, 2) Spell letter by letter, 3) Confirm spelling ('Is that correct?'), 4) Use dot, at, dash when spelling emails."
  },
  
  {
    id: 107,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["supermarket", "nearest", "is", "?", "the", "Where", "here", "from"],
    respuestaCorrecta: ["Where", "is", "the", "nearest", "supermarket", "from", "here", "?"],
    explicacion: "Correct: 'Where is the nearest supermarket from here?' Structure: WHERE + TO BE + Subject + from here. Common question when asking for directions."
  },

  {
    id: 108,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["leave", "time", "to", "the", "does", "What", "London", "?", "train"],
    respuestaCorrecta: ["What", "time", "does", "the", "train", "to", "London", "leave", "?"],
    explicacion: "Correct: 'What time does the train to London leave?' Structure: WHAT TIME + DOES + Subject + Verb. Essential for travel situations."
  },

  {
    id: 109,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["school", "learning", "at", "Why", "?", "this", "you", "are", "English"],
    respuestaCorrecta: ["Why", "are", "you", "learning", "English", "at", "this", "school", "?"],
    explicacion: "Correct: 'Why are you learning English at this school?' Structure: WHY + ARE + Subject + Verb-ing. Longer sentence practicing reasons (WHY = Because...)."
  },

  {
    id: 110,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["here", "goes", "centre", "?", "bus", "from", "Which", "city", "the", "to", "the"],
    respuestaCorrecta: ["Which", "bus", "goes", "to", "the", "city", "centre", "from", "here", "?"],
    explicacion: "Correct: 'Which bus goes to the city centre from here?' Structure: WHICH + Noun + Verb. WHICH is used because there are LIMITED bus options."
  },

  {
    id: 111,
    tipo: "radio",
    pregunta: "When do you use WHICH instead of WHAT?",
    opciones: [
      { valor: "a", texto: "Always use WHICH" },
      { valor: "b", texto: "When choosing between LIMITED options" },
      { valor: "c", texto: "Never use WHICH" },
      { valor: "d", texto: "Only for places" }
    ],
    respuestaCorrecta: "b",
    explicacion: "WHICH is used when there are LIMITED OPTIONS to choose from. Example: 'Which colour - red or blue?' WHAT is for unlimited/general options: 'What colour do you like?'"
  },

  {
    id: 112,
    tipo: "fill-blanks",
    pregunta: "Complete: '______ book do you prefer?' (choosing between two books) and '______ is your favourite book?' (general)",
    blanks: ["Which", "What"],
    explicacion: "'WHICH book do you prefer?' (limited choice between options). 'WHAT is your favourite book?' (general, unlimited options)."
  },

  {
    id: 113,
    tipo: "radio",
    pregunta: "Choose the CORRECT question for asking 'WHOSE':",
    opciones: [
      { valor: "a", texto: "Who's bag is this?" },
      { valor: "b", texto: "Whose bag is this?" },
      { valor: "c", texto: "Whos' bag is this?" },
      { valor: "d", texto: "Who bag is this?" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'WHOSE bag is this?' (possession). NEVER confuse: WHO'S = Who is (contraction), WHOSE = possession (¿De quién?)"
  },

  {
    id: 114,
    tipo: "select",
    pregunta: "Complete: '______ tall is your brother?' (asking about height)",
    opciones: [
      { valor: "a", texto: "What" },
      { valor: "b", texto: "How" },
      { valor: "c", texto: "Which" },
      { valor: "d", texto: "Where" }
    ],
    respuestaCorrecta: "b",
    explicacion: "'HOW tall?' asks about HEIGHT. 'How old?' (age), 'How far?' (distance), 'How long?' (duration/length). HOW + adjective = specific information."
  },

  {
    id: 115,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["?", "take", "long", "airport", "the", "get", "does", "How", "to", "to", "it"],
    respuestaCorrecta: ["How", "long", "does", "it", "take", "to", "get", "to", "the", "airport", "?"],
    explicacion: "Correct: 'How long does it take to get to the airport?' Structure: HOW LONG (duration) + DOES + Subject + Verb. Common travel question."
  },

  {
    id: 116,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["?", "museum", "time", "When", "visit", "to", "this", "best", "the", "is"],
    respuestaCorrecta: ["When", "is", "the", "best", "time", "to", "visit", "this", "museum", "?"],
    explicacion: "Correct: 'When is the best time to visit this museum?' Structure: WHEN + TO BE + Subject + to + Verb. Asking about optimal timing."
  },

  {
    id: 117,
    tipo: "sentence-ordering",
    pregunta: "Put the words in order to make a correct WH-question:",
    palabras: ["weekend", "the", "?", "do", "favourite", "at", "What", "your", "thing", "to", "is"],
    respuestaCorrecta: ["What", "is", "your", "favourite", "thing", "to", "do", "at", "the", "weekend", "?"],
    explicacion: "Correct: 'What is your favourite thing to do at the weekend?' Structure: WHAT + TO BE + Possessive + Noun + to do. Perfect for small talk conversations."
  },

  {
    id: 118,
    tipo: "audio-multiple",
    pregunta: "Listen to this restaurant conversation. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/restaurant-order.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What does the customer ask for first?",
        opciones: [
          { valor: "a", texto: "The menu" },
          { valor: "b", texto: "A table for two" },
          { valor: "c", texto: "The bill" },
          { valor: "d", texto: "Water" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "Where is the table?",
        opciones: [
          { valor: "a", texto: "By the window" },
          { valor: "b", texto: "Near the door" },
          { valor: "c", texto: "In the corner" },
          { valor: "d", texto: "Outside" }
        ],
        respuestaCorrecta: "a"
      },
      {
        id: "c",
        tipo: "text",
        pregunta: "What time is the reservation? (Write the hour, e.g., 7)",
        respuestaCorrecta: "7",
        explicacion: "The customer says: 'For seven o'clock' or 'At 7 PM'."
      },
      {
        id: "d",
        tipo: "radio",
        pregunta: "What does the waiter say at the end?",
        opciones: [
          { valor: "a", texto: "Goodbye" },
          { valor: "b", texto: "Follow me, please" },
          { valor: "c", texto: "Thank you" },
          { valor: "d", texto: "See you later" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "e",
        tipo: "true-false",
        pregunta: "The customer is making a reservation for dinner",
        respuestaCorrecta: "true"
      }
    ],
    explicacion: "Restaurant phrases: 'A table for...', 'By the window', 'At... o'clock', 'Follow me'. Essential vocabulary for real dining situations."
  },

  {
    id: 119,
    tipo: "audio-multiple",
    pregunta: "Listen to this gym registration conversation. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/gym-registration.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "What's the customer's name?",
        opciones: [
          { valor: "a", texto: "Mike Smith" },
          { valor: "b", texto: "Michael Smith" },
          { valor: "c", texto: "Mike Johnson" },
          { valor: "d", texto: "Michael Johnson" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "b",
        tipo: "text",
        pregunta: "How do you spell his surname? (Write in capital letters)",
        respuestaCorrecta: "SMITH",
        explicacion: "He spells: S-M-I-T-H when asked by the receptionist."
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "What information does the receptionist ask for after the name?",
        opciones: [
          { valor: "a", texto: "Address" },
          { valor: "b", texto: "Age" },
          { valor: "c", texto: "Phone number" },
          { valor: "d", texto: "Occupation" }
        ],
        respuestaCorrecta: "c"
      },
      {
        id: "d",
        tipo: "radio",
        pregunta: "Why does Michael want to join the gym?",
        opciones: [
          { valor: "a", texto: "To lose weight" },
          { valor: "b", texto: "To get fit" },
          { valor: "c", texto: "For physiotherapy" },
          { valor: "d", texto: "For competition" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "e",
        tipo: "true-false",
        pregunta: "The receptionist confirms all the information at the end",
        respuestaCorrecta: "true"
      }
    ],
    explicacion: "Registration conversations follow a pattern: Name → Spelling → Contact details → Purpose/Reason → Confirmation. This is common in gyms, libraries, clubs, etc."
  },

  {
    id: 120,
    tipo: "audio-multiple",
    pregunta: "Listen to this small talk conversation at a coffee shop. Answer the questions",
    audioSrc: "../../audios/t1/exams/week2/coffee-shop-chat.mp3",
    subpreguntas: [
      {
        id: "a",
        tipo: "radio",
        pregunta: "How do they start the conversation?",
        opciones: [
          { valor: "a", texto: "Talking about the weather" },
          { valor: "b", texto: "Asking for directions" },
          { valor: "c", texto: "Talking about work" },
          { valor: "d", texto: "Asking about family" }
        ],
        respuestaCorrecta: "a"
      },
      {
        id: "b",
        tipo: "radio",
        pregunta: "What's the weather like today?",
        opciones: [
          { valor: "a", texto: "It's raining" },
          { valor: "b", texto: "It's very cold" },
          { valor: "c", texto: "It's lovely and sunny" },
          { valor: "d", texto: "It's snowing" }
        ],
        respuestaCorrecta: "c"
      },
      {
        id: "c",
        tipo: "radio",
        pregunta: "What do they talk about next?",
        opciones: [
          { valor: "a", texto: "Politics" },
          { valor: "b", texto: "The weekend plans" },
          { valor: "c", texto: "Religion" },
          { valor: "d", texto: "Salary" }
        ],
        respuestaCorrecta: "b"
      },
      {
        id: "d",
        tipo: "text",
        pregunta: "How do they end the conversation? (Write 2 words: '__ __')",
        respuestaCorrecta: "see you",
        explicacion: "They say 'See you!' or 'See you around!' to end politely."
      },
      {
        id: "e",
        tipo: "true-false",
        pregunta: "They only talk about safe, neutral topics",
        respuestaCorrecta: "true"
      }
    ],
    explicacion: "Perfect small talk: 1) Weather (safe), 2) Weekend plans (neutral), 3) Polite ending. AVOID: politics, religion, salary, age in casual conversations."
  },

  // AUDIO SIMPLE QUESTIONS (121-135) - Single audio, single answer

  {
    id: 121,
    tipo: "audio",
    pregunta: "Listen and write the greeting you hear:",
    audioSrc: "../../audios/t1/exams/week2/greeting-good-morning.mp3",
    respuestaCorrecta: "good morning",
    explicacion: "The audio says: 'Good morning!'. This is a FORMAL time-based greeting used from sunrise until 12:00 noon. Use it in professional contexts or to show politeness."
  },

  {
    id: 122,
    tipo: "audio",
    pregunta: "Listen and write the greeting you hear:",
    audioSrc: "../../audios/t1/exams/week2/greeting-pleased-to-meet-you.mp3",
    respuestaCorrecta: "pleased to meet you",
    explicacion: "The audio says: 'Pleased to meet you'. This is MORE FORMAL than 'Nice to meet you'. Use it in business meetings, professional contexts, or formal events."
  },

  {
    id: 123,
    tipo: "audio",
    pregunta: "Listen and write the question word you hear:",
    audioSrc: "../../audios/t1/exams/week2/question-word-where.mp3",
    respuestaCorrecta: "where",
    explicacion: "The audio says: 'WHERE'. Remember: the H is SILENT. WHERE is used to ask about PLACES and locations. Pronunciation: /weə/ (wer)."
  },

  {
    id: 124,
    tipo: "audio",
    pregunta: "Listen and write the question word you hear:",
    audioSrc: "../../audios/t1/exams/week2/question-word-why.mp3",
    respuestaCorrecta: "why",
    explicacion: "The audio says: 'WHY'. WHY is used to ask about REASONS and causes. Answers usually start with 'Because...'. Pronunciation: /waɪ/ (wai)."
  },

  {
    id: 125,
    tipo: "audio",
    pregunta: "Listen and write the complete question:",
    audioSrc: "../../audios/t1/exams/week2/question-whats-your-name.mp3",
    respuestaCorrecta: "what's your name",
    explicacion: "The question is: 'What's your name?' or 'What is your name?'. This is the CORRECT way to ask someone's name. NEVER say 'How is your name?' - this is wrong!"
  },

  {
    id: 126,
    tipo: "audio",
    pregunta: "Listen and write the complete question:",
    audioSrc: "../../audios/t1/exams/week2/question-where-are-you-from.mp3",
    respuestaCorrecta: "where are you from",
    explicacion: "The question is: 'Where are you from?'. This asks about your ORIGIN/nationality. Structure: WHERE + ARE + you + FROM + ?. Very common when meeting new people."
  },

  {
    id: 127,
    tipo: "audio",
    pregunta: "Listen and write the complete question:",
    audioSrc: "../../audios/t1/exams/week2/question-how-old-are-you.mp3",
    respuestaCorrecta: "how old are you",
    explicacion: "The question is: 'How old are you?'. This is the ONLY correct way to ask about age in English. NEVER say 'How many years are you?' - this is a direct translation from Spanish and is WRONG."
  },

  {
    id: 128,
    tipo: "audio",
    pregunta: "Listen and write the short answer you hear (2 words):",
    audioSrc: "../../audios/t1/exams/week2/short-answer-yes-i-am.mp3",
    respuestaCorrecta: ["yes i am", "Yes I am", "Yes, I am", "yes, i am", "YES I AM", "YES, I AM"],
    explicacion: "'Yes, I am'. Short answers are OBLIGATORY in English. NEVER contract in affirmative: 'Yes, I am' NOT 'Yes, I'm'."
  },

  {
    id: 129,
    tipo: "audio",
    pregunta: "Listen and write the short answer you hear (3 words):",
    audioSrc: "../../audios/t1/exams/week2/short-answer-no-she-isnt.mp3",
    respuestaCorrecta: ["no she isn't", "No she isn't", "No, she isn't", "no, she isn't", "no she isnt", "No she isnt", "NO SHE ISN'T", "NO, SHE ISN'T"],
    explicacion: "'No, she isn't' or 'No, she's not'. You CAN contract in negative short answers. Both forms are correct."
  },

  {
    id: 130,
    tipo: "audio",
    pregunta: "Listen and write the polite expression you hear (3 words):",
    audioSrc: "../../audios/t1/exams/week2/excuse-me-please.mp3",
    respuestaCorrecta: ["excuse me please", "Excuse me please", "Excuse Me Please", "excuse me, please", "Excuse me, please", "EXCUSE ME PLEASE"],
    explicacion: "'Excuse me, please' is used to POLITELY get someone's attention or to interrupt. More polite than just 'Excuse me'."
  },

  {
    id: 131,
    tipo: "audio",
    pregunta: "Listen and write the polite request you hear (5 words):",
    audioSrc: "../../audios/t1/exams/week2/can-you-spell-that-please.mp3",
    respuestaCorrecta: ["can you spell that please", "Can you spell that please", "Can You Spell That Please", "can you spell that, please", "Can you spell that, please", "CAN YOU SPELL THAT PLEASE"],
    explicacion: "'Can you spell that, please?' is used to ask someone to spell their name or a word letter by letter."
  },

  {
    id: 132,
    tipo: "audio",
    pregunta: "Listen to the spelled surname and write it in capital letters:",
    audioSrc: "../../audios/t1/exams/week2/spelling-robinson.mp3",
    respuestaCorrecta: ["ROBINSON", "Robinson", "robinson"],
    explicacion: "The spelling is: R-O-B-I-N-S-O-N. Robinson is a common English surname meaning 'son of Robin'."
  },

  {
    id: 133,
    tipo: "audio",
    pregunta: "Listen to the spelled name and write it in capital letters:",
    audioSrc: "../../audios/t1/exams/week2/spelling-jones.mp3",
    respuestaCorrecta: ["JONES", "Jones", "jones"],
    explicacion: "The spelling is: J-O-N-E-S. Jones is another very common English surname."
  },

  {
    id: 134,
    tipo: "audio",
    pregunta: "Listen and write the nationality you hear:",
    audioSrc: "../../audios/t1/exams/week2/nationality-australian.mp3",
    respuestaCorrecta: ["australian", "Australian", "AUSTRALIAN"],
    explicacion: "'Australian'. Pronunciation: /ɒˈstreɪliən/. Be careful - many students confuse 'Austrian' (from Austria) with 'Australian' (from Australia)."
  },

  {
    id: 135,
    tipo: "audio",
    pregunta: "Listen and write the complete response (5 words):",
    audioSrc: "../../audios/t1/exams/week2/response-nice-to-meet-you-too.mp3",
    respuestaCorrecta: ["nice to meet you too", "Nice to meet you too", "Nice To Meet You Too", "nice to meet you too!", "Nice to meet you too!", "NICE TO MEET YOU TOO"],
    explicacion: "'Nice to meet you too!' Always RETURN the greeting when someone says 'Nice to meet you'."
  },

  // TEXT QUESTIONS (136-150) - Con múltiples respuestas válidas

  {
    id: 136,
    tipo: "text",
    pregunta: "Complete: 'I ____ from Madrid.' (Write the correct form of TO BE)",
    respuestaCorrecta: ["am", "Am", "AM", "'m", "m"],
    explicacion: "'I AM from Madrid.' Use AM with the pronoun I. TO BE conjugation: I am, You are, He/She/It is, We/You/They are."
  },

  {
    id: 137,
    tipo: "text",
    pregunta: "Write the question for this answer: 'I'm 22 years old.' (Start with 'How')",
    respuestaCorrecta: ["how old are you", "How old are you", "How Old Are You", "HOW OLD ARE YOU", "how old are you?", "How old are you?"],
    explicacion: "Question: 'How old are you?' This is the ONLY correct way to ask about age. Structure: HOW OLD + ARE + you + ?."
  },

  {
    id: 138,
    tipo: "text",
    pregunta: "Write the short answer: 'Are you a student?' → 'Yes, ____ ____.' (2 words)",
    respuestaCorrecta: ["i am", "I am", "I Am", "I AM"],
    explicacion: "'Yes, I am.' Short answers are OBLIGATORY in English. NEVER contract in affirmative: 'Yes, I am' NOT 'Yes, I'm'."
  },

  {
    id: 139,
    tipo: "text",
    pregunta: "Write the nationality: 'I'm from Italy. I'm ________.'",
    respuestaCorrecta: ["italian", "Italian", "ITALIAN"],
    explicacion: "'I'm Italian.' Nationalities ALWAYS start with CAPITAL letters in writing. Italy (country) → Italian (nationality)."
  },

  {
    id: 140,
    tipo: "text",
    pregunta: "Complete the polite question: '_______ you help me, please?' (asking for help)",
    respuestaCorrecta: ["can", "Can", "CAN", "could", "Could", "COULD"],
    explicacion: "'CAN you help me, please?' or 'COULD you help me, please?'. Both are polite requests. COULD is more formal."
  },

  {
    id: 141,
    tipo: "text",
    pregunta: "Write the question word: '______ is your email address?' (asking for information)",
    respuestaCorrecta: ["what", "What", "WHAT"],
    explicacion: "'WHAT is your email address?' Use WHAT to ask for THINGS, information, and details."
  },

  {
    id: 142,
    tipo: "text",
    pregunta: "Complete: 'She _____ a teacher.' (Write the correct form of TO BE)",
    respuestaCorrecta: ["is", "Is", "IS", "'s", "s"],
    explicacion: "'She IS a teacher.' Use IS with he/she/it (third person singular). TO BE forms: I am, You are, He/She/It is."
  },

  {
    id: 143,
    tipo: "text",
    pregunta: "Write the question for this answer: 'I'm from Brazil.' (Start with 'Where')",
    respuestaCorrecta: ["where are you from", "Where are you from", "Where Are You From", "WHERE ARE YOU FROM", "where are you from?", "Where are you from?"],
    explicacion: "Question: 'Where are you from?' Structure: WHERE + ARE + you + FROM + ?. Very common when meeting new people."
  },

  {
    id: 144,
    tipo: "text",
    pregunta: "Write the opposite: 'Good morning' (for leaving/ending)",
    respuestaCorrecta: ["goodbye", "Goodbye", "GOODBYE", "good bye", "Good bye", "bye", "Bye", "BYE"],
    explicacion: "'Goodbye' or 'Bye' is used to END conversations. Other options: 'See you', 'See you later', 'Have a nice day'."
  },

  {
    id: 145,
    tipo: "text",
    pregunta: "Complete the response: A: 'Thank you!' B: 'You're _______!'",
    respuestaCorrecta: ["welcome", "Welcome", "WELCOME"],
    explicacion: "'You're welcome!' is the standard response to 'Thank you'. Other options: 'No problem', 'My pleasure', 'No worries'."
  },

  {
    id: 146,
    tipo: "text",
    pregunta: "Write the question word: '______ are you late?' (asking for the reason)",
    respuestaCorrecta: ["why", "Why", "WHY"],
    explicacion: "'WHY are you late?' WHY asks for REASONS and causes. Answers usually start with 'Because...'."
  },

  {
    id: 147,
    tipo: "text",
    pregunta: "Write the short answer: 'Is he your brother?' → 'No, he _______.' (2 words: contracted form)",
    respuestaCorrecta: ["he isn't", "he isnt", "He isn't", "He isnt", "HE ISN'T", "he's not", "He's not", "HE'S NOT"],
    explicacion: "'No, he isn't' or 'No, he's not'. You CAN contract in NEGATIVE short answers. Both forms are correct."
  },

  {
    id: 148,
    tipo: "text",
    pregunta: "Complete: 'They ______ students.' (Write the correct form of TO BE)",
    respuestaCorrecta: ["are", "Are", "ARE", "'re", "re"],
    explicacion: "'They ARE students.' Use ARE with you/we/they (plural). TO BE forms: I am, You are, They are."
  },

  {
    id: 149,
    tipo: "text",
    pregunta: "Write the preposition: 'I live _____ Madrid.' (indicating the city where you live)",
    respuestaCorrecta: ["in", "In", "IN"],
    explicacion: "'I live IN Madrid.' Use IN for cities, countries, and large areas. Use AT for specific addresses."
  },

  {
    id: 150,
    tipo: "text",
    pregunta: "Write the question for this answer: 'My name is Laura.' (Start with 'What')",
    respuestaCorrecta: ["what is your name", "What is your name", "What Is Your Name", "what's your name", "What's your name", "What's Your Name", "whats your name", "Whats your name", "WHAT IS YOUR NAME", "what is your name?", "What is your name?"],
    explicacion: "Question: 'What is your name?' or 'What's your name?' Structure: WHAT + IS + your name + ?. NEVER say 'How is your name?'!"
  },

  {
    id: 151,
    tipo: "select",
    pregunta: "Complete: 'What's ______ name?' (asking a male person)",
    opciones: [
      { valor: "a", texto: "his" },
      { valor: "b", texto: "her" },
      { valor: "c", texto: "its" },
      { valor: "d", texto: "their" }
    ],
    respuestaCorrecta: "a",
    explicacion: "'What's HIS name?' HIS is the possessive adjective for HE (male). Possessive adjectives: my, your, his (♂), her (♀), its, our, their. They show POSSESSION/ownership."
  },

  {
    id: 152,
    tipo: "text",
    pregunta: "Complete: 'We love ______ teacher.' (Write the possessive adjective for WE)",
    respuestaCorrecta: "our",
    explicacion: "'We love OUR teacher.' OUR is the possessive adjective for WE. Remember: I→my, you→your, he→his, she→her, it→its, we→our, they→their."
  },

  {
    id: 153,
    tipo: "radio",
    pregunta: "Choose the CORRECT sentence:",
    opciones: [
      { valor: "a", texto: "She is my friend. His name is Emma." },
      { valor: "b", texto: "She is my friend. Her name is Emma." },
      { valor: "c", texto: "She is my friend. Its name is Emma." },
      { valor: "d", texto: "She is my friend. Their name is Emma." }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'Her name is Emma.' Use HER for females (she→her). NEVER use HIS for females or ITS for people. HIS=males, HER=females, ITS=animals/things."
  },

  {
    id: 154,
    tipo: "text",
    pregunta: "How do you spell the symbol '@' in an email address? (Write one word)",
    respuestaCorrecta: "at",
    explicacion: "'@' is spelled as 'AT'. Example email: john.smith@email.com = 'john dot smith at email dot com'. Other symbols: . = dot, - = dash, _ = underscore."
  },

  {
    id: 155,
    tipo: "radio",
    pregunta: "How do you spell this email correctly? 'anna_brown@mail.com'",
    opciones: [
      { valor: "a", texto: "anna dash brown at mail dot com" },
      { valor: "b", texto: "anna underscore brown at mail dot com" },
      { valor: "c", texto: "anna dot brown at mail dot com" },
      { valor: "d", texto: "anna space brown at mail dot com" }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'anna underscore brown at mail dot com'. The symbol '_' is called UNDERSCORE. Symbols: . = dot, @ = at, - = dash, _ = underscore."
  },

  {
    id: 156,
    tipo: "radio",
    pregunta: "Choose the correct demonstrative: '______ is my book.' (you're holding the book)",
    opciones: [
      { valor: "a", texto: "This" },
      { valor: "b", texto: "That" },
      { valor: "c", texto: "These" },
      { valor: "d", texto: "Those" }
    ],
    respuestaCorrecta: "a",
    explicacion: "'THIS is my book.' Use THIS for singular objects NEAR you (you can touch them). Use THAT for singular objects FAR from you. THIS/THAT=singular, THESE/THOSE=plural."
  },

  {
    id: 157,
    tipo: "select",
    pregunta: "Complete: '______ are my friends.' (pointing at people across the room)",
    opciones: [
      { valor: "a", texto: "This" },
      { valor: "b", texto: "That" },
      { valor: "c", texto: "These" },
      { valor: "d", texto: "Those" }
    ],
    respuestaCorrecta: "d",
    explicacion: "'THOSE are my friends.' Use THOSE for plural objects/people FAR from you. Rule: THIS=near/singular, THAT=far/singular, THESE=near/plural, THOSE=far/plural."
  },

  {
    id: 158,
    tipo: "text",
    pregunta: "Complete: 'The meeting is _____ 9 o'clock.' (time)",
    respuestaCorrecta: "at",
    explicacion: "'The meeting is AT 9 o'clock.' Use AT for SPECIFIC TIMES: at 9 o'clock, at noon, at midnight, at 3:30. Use IN for months/years, ON for days/dates."
  },

  {
    id: 159,
    tipo: "radio",
    pregunta: "Choose the CORRECT sentence:",
    opciones: [
      { valor: "a", texto: "I live in 25 Main Street." },
      { valor: "b", texto: "I live at 25 Main Street." },
      { valor: "c", texto: "I live on 25 Main Street." },
      { valor: "d", texto: "I live to 25 Main Street." }
    ],
    respuestaCorrecta: "b",
    explicacion: "CORRECT: 'I live AT 25 Main Street.' Use AT for SPECIFIC ADDRESSES (house numbers). Use IN for cities/countries: 'I live IN Madrid' (city), 'I live AT 25 Gran Vía' (address)."
  },

  {
    id: 160,
    tipo: "text",
    pregunta: "Write the number: 'I'm twenty-five years old.' (Write as a number)",
    respuestaCorrecta: "25",
    explicacion: "Twenty-five = 25. When saying age in English: 'I'm 25' or 'I'm 25 years old'. Numbers 21-99: twenty-one (21), thirty-two (32), forty-five (45), etc."
  },

  {
    id: 161,
    tipo: "audio",
    pregunta: "Listen and write the greeting (time-based):",
    audioSrc: "../../audios/t1/exams/week2/greeting-good-afternoon.mp3",
    respuestaCorrecta: ["good afternoon", "Good afternoon", "Good Afternoon", "GOOD AFTERNOON"],
    explicacion: "'Good afternoon' is used from 12:00 noon until around 6:00 PM. It's MORE FORMAL than 'Hello'."
  },

  {
    id: 162,
    tipo: "audio",
    pregunta: "Listen and write the greeting (time-based):",
    audioSrc: "../../audios/t1/exams/week2/greeting-good-evening.mp3",
    respuestaCorrecta: ["good evening", "Good evening", "Good Evening", "GOOD EVENING"],
    explicacion: "'Good evening' is used from around 6:00 PM onwards. It's FORMAL and polite."
  },

  {
    id: 163,
    tipo: "audio",
    pregunta: "Listen and write the complete question:",
    audioSrc: "../../audios/t1/exams/week2/question-when-is-your-birthday.mp3",
    respuestaCorrecta: ["when is your birthday", "When is your birthday", "When Is Your Birthday", "WHEN IS YOUR BIRTHDAY", "when is your birthday?", "When is your birthday?"],
    explicacion: "'When is your birthday?' Structure: WHEN + TO BE + possessive + noun + ?. WHEN asks about TIME/dates."
  },

  {
    id: 164,
    tipo: "audio",
    pregunta: "Listen and write what you hear when someone leaves:",
    audioSrc: "../../audios/t1/exams/week2/farewell-see-you.mp3",
    respuestaCorrecta: ["see you", "See you", "See You", "SEE YOU", "see you!", "See you!"],
    explicacion: "'See you' or 'See you later' is a friendly way to say goodbye. Informal but appropriate for most situations."
  },

  {
    id: 165,
    tipo: "audio",
    pregunta: "Listen and write the question word (time):",
    audioSrc: "../../audios/t1/exams/week2/question-word-when.mp3",
    respuestaCorrecta: ["when", "When", "WHEN"],
    explicacion: "'WHEN' asks about TIME, dates, days, or periods. Pronunciation: /wen/ (the H is SILENT)."
  },

  {
    id: 166,
    tipo: "audio",
    pregunta: "Listen and write the question word (manner/state):",
    audioSrc: "../../audios/t1/exams/week2/question-word-how.mp3",
    respuestaCorrecta: ["how", "How", "HOW"],
    explicacion: "'HOW' asks about MANNER (way of doing) or STATE (condition). Pronunciation: /haʊ/. The H is PRONOUNCED in HOW."
  },

  {
    id: 167,
    tipo: "audio",
    pregunta: "Listen and write the question word (person):",
    audioSrc: "../../audios/t1/exams/week2/question-word-who.mp3",
    respuestaCorrecta: ["who", "Who", "WHO"],
    explicacion: "'WHO' asks about PEOPLE. Pronunciation: /huː/ (sounds like 'hoo'). The H is silent."
  },

  {
    id: 168,
    tipo: "audio",
    pregunta: "Listen and write the question word (thing):",
    audioSrc: "../../audios/t1/exams/week2/question-word-what.mp3",
    respuestaCorrecta: ["what", "What", "WHAT"],
    explicacion: "'WHAT' asks about THINGS, actions, or information. Pronunciation: /wɒt/ (wot). The H is SILENT."
  },

  {
    id: 169,
    tipo: "audio",
    pregunta: "Listen and write the complete Yes/No question:",
    audioSrc: "../../audios/t1/exams/week2/question-are-you-spanish.mp3",
    respuestaCorrecta: ["are you spanish", "Are you spanish", "Are you Spanish", "Are You Spanish", "ARE YOU SPANISH", "are you spanish?", "Are you Spanish?"],
    explicacion: "'Are you Spanish?' Structure: TO BE + Subject + Adjective + ?. Answer: 'Yes, I am' or 'No, I'm not'."
  },

  {
    id: 170,
    tipo: "audio",
    pregunta: "Listen and write the complete Yes/No question:",
    audioSrc: "../../audios/t1/exams/week2/question-is-she-a-teacher.mp3",
    respuestaCorrecta: ["is she a teacher", "Is she a teacher", "Is She A Teacher", "IS SHE A TEACHER", "is she a teacher?", "Is she a teacher?"],
    explicacion: "'Is she a teacher?' Structure: IS + she + a + noun + ?. Answer: 'Yes, she is' or 'No, she isn't'."
  },

  {
    id: 171,
    tipo: "audio",
    pregunta: "Listen and write the polite expression (3 words):",
    audioSrc: "../../audios/t1/exams/week2/thank-you-very-much.mp3",
    respuestaCorrecta: ["thank you very much", "Thank you very much", "Thank You Very Much", "THANK YOU VERY MUCH", "thank you very much!", "Thank you very much!"],
    explicacion: "'Thank you very much' is MORE polite than just 'Thank you'. Use it to show strong appreciation."
  },

  {
    id: 172,
    tipo: "audio",
    pregunta: "Listen and write the response to 'Thank you' (2 words):",
    audioSrc: "../../audios/t1/exams/week2/no-problem.mp3",
    respuestaCorrecta: ["no problem", "No problem", "No Problem", "NO PROBLEM"],
    explicacion: "'No problem' is an informal response to 'Thank you'. More casual than 'You're welcome'."
  },

  {
    id: 173,
    tipo: "audio",
    pregunta: "Listen and write the nationality:",
    audioSrc: "../../audios/t1/exams/week2/nationality-french.mp3",
    respuestaCorrecta: ["french", "French", "FRENCH"],
    explicacion: "'French' is the nationality for people from France. Nationalities ALWAYS start with CAPITAL letters in writing."
  },

  {
    id: 174,
    tipo: "audio",
    pregunta: "Listen and write the nationality:",
    audioSrc: "../../audios/t1/exams/week2/nationality-german.mp3",
    respuestaCorrecta: ["german", "German", "GERMAN"],
    explicacion: "'German' is the nationality for people from Germany. Country: Germany, Nationality: German, Language: German."
  },

  {
    id: 175,
    tipo: "audio",
    pregunta: "Listen and write the nationality:",
    audioSrc: "../../audios/t1/exams/week2/nationality-chinese.mp3",
    respuestaCorrecta: ["chinese", "Chinese", "CHINESE"],
    explicacion: "'Chinese' is the nationality for people from China. Country: China, Nationality: Chinese, Language: Chinese."
  },

  {
    id: 176,
    tipo: "audio",
    pregunta: "Listen and write the nationality:",
    audioSrc: "../../audios/t1/exams/week2/nationality-japanese.mp3",
    respuestaCorrecta: ["japanese", "Japanese", "JAPANESE"],
    explicacion: "'Japanese' is the nationality for people from Japan. Country: Japan, Nationality: Japanese, Language: Japanese."
  },

  {
    id: 177,
    tipo: "audio",
    pregunta: "Listen to the spelled surname and write it in capital letters:",
    audioSrc: "../../audios/t1/exams/week2/spelling-brown.mp3",
    respuestaCorrecta: ["BROWN", "Brown", "brown"],
    explicacion: "The spelling is: B-R-O-W-N. Brown is one of the most common surnames in English-speaking countries."
  },

  {
    id: 178,
    tipo: "audio",
    pregunta: "Listen to the spelled surname and write it in capital letters:",
    audioSrc: "../../audios/t1/exams/week2/spelling-williams.mp3",
    respuestaCorrecta: ["WILLIAMS", "Williams", "williams"],
    explicacion: "The spelling is: W-I-L-L-I-A-M-S. Williams is a very common Welsh surname."
  },

  {
    id: 179,
    tipo: "audio",
    pregunta: "Listen to the spelled surname and write it in capital letters:",
    audioSrc: "../../audios/t1/exams/week2/spelling-taylor.mp3",
    respuestaCorrecta: ["TAYLOR", "Taylor", "taylor"],
    explicacion: "The spelling is: T-A-Y-L-O-R. Taylor is a common English surname originally meaning 'tailor'."
  },

  {
    id: 180,
    tipo: "audio",
    pregunta: "Listen to the spelled surname and write it in capital letters:",
    audioSrc: "../../audios/t1/exams/week2/spelling-martin.mp3",
    respuestaCorrecta: ["MARTIN", "Martin", "martin"],
    explicacion: "The spelling is: M-A-R-T-I-N. Martin is common in English, French, and Spanish-speaking countries."
  },

  {
    id: 181,
    tipo: "audio",
    pregunta: "Listen and write the complete question:",
    audioSrc: "../../audios/t1/exams/week2/question-what-time-is-it.mp3",
    respuestaCorrecta: ["what time is it", "What time is it", "What Time Is It", "WHAT TIME IS IT", "what time is it?", "What time is it?"],
    explicacion: "'What time is it?' Structure: WHAT TIME + TO BE + it + ?. Common answers: 'It's 3 o'clock', 'It's half past five'."
  },

  {
    id: 182,
    tipo: "audio",
    pregunta: "Listen and write the apology phrase (2 words):",
    audioSrc: "../../audios/t1/exams/week2/im-sorry.mp3",
    respuestaCorrecta: ["i'm sorry", "im sorry", "I'm sorry", "Im sorry", "I am sorry", "I AM SORRY", "i am sorry"],
    explicacion: "'I'm sorry' is used to APOLOGIZE or express regret. Different from 'Sorry?' which means 'Can you repeat?'."
  },

  {
    id: 183,
    tipo: "audio",
    pregunta: "Listen and write the complete polite request (6 words):",
    audioSrc: "../../audios/t1/exams/week2/could-you-repeat-that-please.mp3",
    respuestaCorrecta: ["could you repeat that please", "Could you repeat that please", "Could You Repeat That Please", "could you repeat that, please", "Could you repeat that, please", "COULD YOU REPEAT THAT PLEASE"],
    explicacion: "'Could you repeat that, please?' is MORE FORMAL than 'Can you repeat?'. Use COULD for more politeness."
  },

  {
    id: 184,
    tipo: "audio",
    pregunta: "Listen and write the complete question:",
    audioSrc: "../../audios/t1/exams/week2/question-which-colour-do-you-prefer.mp3",
    respuestaCorrecta: ["which colour do you prefer", "Which colour do you prefer", "Which Colour Do You Prefer", "which color do you prefer", "Which color do you prefer", "WHICH COLOUR DO YOU PREFER", "which colour do you prefer?", "Which colour do you prefer?"],
    explicacion: "'Which colour do you prefer?' WHICH is used for LIMITED OPTIONS. UK spelling = 'colour', US spelling = 'color'."
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

console.log(`✅ Banco de preguntas cargado: ${window.bancoPreguntasExamen.length} preguntas disponibles`);
