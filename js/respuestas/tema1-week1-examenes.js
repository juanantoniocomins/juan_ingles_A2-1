// ==============================================================
// tema1-week1-examenes.js - BANCO DE PREGUNTAS COMPLETO
// ==============================================================

console.log('🔄 Cargando banco de preguntas...');

// BANCO DE PREGUNTAS (100 preguntas mezclando todos los tipos)
window.bancoPreguntasExamen = [
    
    // ============================================
    // FORMULARIOS Y DATOS PERSONALES (25 preguntas)
    // ============================================
    
    {
        id: 1,
        tipo: 'radio',
        pregunta: 'What does "DOB" stand for in forms?',
        opciones: [
            { valor: 'a', texto: 'Date of Business' },
            { valor: 'b', texto: 'Date of Birth' },
            { valor: 'c', texto: 'Day of Birth' },
            { valor: 'd', texto: 'Department of Business' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 DOB means "Date of Birth" (Fecha de nacimiento). It\'s a common abbreviation in official forms.'
    },
    
    {
        id: 2,
        tipo: 'radio',
        pregunta: 'In the UK, what term is used for postal code?',
        opciones: [
            { valor: 'a', texto: 'Zip code' },
            { valor: 'b', texto: 'Postcode' },
            { valor: 'c', texto: 'Area code' },
            { valor: 'd', texto: 'Mail code' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 In the UK "Postcode" is used, while "Zip code" is American English.'
    },
    
    {
        id: 3,
        tipo: 'radio',
        pregunta: 'How do you say "_" (underscore) when spelling an email address?',
        opciones: [
            { valor: 'a', texto: 'at' },
            { valor: 'b', texto: 'dot' },
            { valor: 'c', texto: 'underscore' },
            { valor: 'd', texto: 'hyphen' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 The underscore symbol "_" is pronounced "underscore" in email addresses. Example: maria_garcia@email.com = "maria underscore garcia at email dot com"'
    },
    
    {
        id: 4,
        tipo: 'text',
        pregunta: 'Complete: "My _____ name is Smith" (apellido)',
        respuestaCorrecta: ['surname', 'last name', 'family name', 'last'],
        explicacion: '💡 In English: surname = last name = family name (apellido)'
    },
    
    {
        id: 5,
        tipo: 'select',
        pregunta: 'What\'s the correct order for UK addresses?',
        opciones: [
            { valor: 'a', texto: 'Name + Street + Number' },
            { valor: 'b', texto: 'Number + Street + Town' },
            { valor: 'c', texto: 'Street + Town + Number' },
            { valor: 'd', texto: 'Town + Street + Number' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 UK address format: Number + Street Name + Town/City + Postcode'
    },
    
    {
        id: 6,
        tipo: 'radio',
        pregunta: 'How do you pronounce "0" in UK phone numbers?',
        opciones: [
            { valor: 'a', texto: 'Zero only' },
            { valor: 'b', texto: 'Oh or Zero' },
            { valor: 'c', texto: 'Null' },
            { valor: 'd', texto: 'Cipher' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 In phone numbers, "0" can be pronounced as "oh" or "zero". "Oh" is more common.'
    },
    
    {
        id: 7,
        tipo: 'radio',
        pregunta: 'How do you say "/" (forward slash) when spelling an email or web address?',
        opciones: [
            { valor: 'a', texto: 'at' },
            { valor: 'b', texto: 'dot' },
            { valor: 'c', texto: 'underscore' },
            { valor: 'd', texto: 'hyphen' },
            { valor: 'e', texto: 'slash' }
        ],
        respuestaCorrecta: 'e',
        explicacion: '💡 The forward slash "/" is pronounced "slash" in web addresses and emails. Example: http://website.com or user/admin@email.com'
    },
    
    {
        id: 8,
        tipo: 'radio',
        pregunta: 'How do you say "." (period/full stop) when spelling an email address?',
        opciones: [
            { valor: 'a', texto: 'at' },
            { valor: 'b', texto: 'dot' },
            { valor: 'c', texto: 'underscore' },
            { valor: 'd', texto: 'hyphen' },
            { valor: 'e', texto: 'slash' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 The period/full stop "." is pronounced "dot" in email addresses. Example: john.smith@email.com = "john dot smith at email dot com"'
    },
    
    {
        id: 9,
        tipo: 'radio',
        pregunta: 'What does "Marital Status" mean?',
        opciones: [
            { valor: 'a', texto: 'Work status' },
            { valor: 'b', texto: 'Civil status' },
            { valor: 'c', texto: 'Health status' },
            { valor: 'd', texto: 'Education level' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Marital Status" = Estado civil (single, married, divorced, widowed)'
    },
    
    {
        id: 10,
        tipo: 'select',
        pregunta: 'Which title is gender-neutral?',
        opciones: [
            { valor: 'a', texto: 'Mr.' },
            { valor: 'b', texto: 'Mrs.' },
            { valor: 'c', texto: 'Mx.' },
            { valor: 'd', texto: 'Miss' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 "Mx." is a gender-neutral title, increasingly used in forms.'
    },

    {
        id: 11,
        tipo: 'radio',
        pregunta: 'How do you say "@" when spelling an email address?',
        opciones: [
            { valor: 'a', texto: 'at' },
            { valor: 'b', texto: 'dot' },
            { valor: 'c', texto: 'underscore' },
            { valor: 'd', texto: 'hyphen' },
            { valor: 'e', texto: 'slash' }
        ],
        respuestaCorrecta: 'a',
        explicacion: '💡 The @ symbol is pronounced "at" in email addresses. Example: john@email.com = "john at email dot com". This symbol is ALWAYS required in every email address.'
    },

    {
        id: 12,
        tipo: 'radio',
        pregunta: 'How do you say "-" (hyphen/dash) when spelling an email address?',
        opciones: [
            { valor: 'a', texto: 'at' },
            { valor: 'b', texto: 'dot' },
            { valor: 'c', texto: 'underscore' },
            { valor: 'd', texto: 'hyphen' },
            { valor: 'e', texto: 'slash' }
        ],
        respuestaCorrecta: 'd',
        explicacion: '💡 The hyphen/dash "-" is pronounced "hyphen" or "dash" in email addresses. Example: tech-support@email.com = "tech hyphen support at email dot com"'
    },

    {
        id: 13,
        tipo: 'radio',
        pregunta: 'Replace the subject with the correct pronoun: "My mother and father are doctors at the hospital" → "_____ are doctors at the hospital"',
        opciones: [
            { valor: 'a', texto: 'We' },
            { valor: 'b', texto: 'They' },
            { valor: 'c', texto: 'You' },
            { valor: 'd', texto: 'It' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "My mother and father" = two people (3rd person plural) → "They". Remember: They + are. Example: My parents are teachers → They are teachers.'
    },

    {
        id: 14,
        tipo: 'text',
        pregunta: 'Complete: "My first name is John and my _____ name is Smith"',
        respuestaCorrecta: ['last', 'surname', 'family'],
        explicacion: '💡 Last name = surname = family name (apellido)'
    },

    {
        id: 15,
        tipo: 'select',
        pregunta: 'What does "Gender" mean in forms?',
        opciones: [
            { valor: 'a', texto: 'Age' },
            { valor: 'b', texto: 'Sex (Male/Female/Other)' },
            { valor: 'c', texto: 'Nationality' },
            { valor: 'd', texto: 'Religion' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Gender" refers to sex/identity: Male, Female, Non-binary, Other.'
    },

    {
        id: 16,
        tipo: 'radio',
        pregunta: 'In addresses, what does "Flat" mean?',
        opciones: [
            { valor: 'a', texto: 'House' },
            { valor: 'b', texto: 'Apartment' },
            { valor: 'c', texto: 'Street' },
            { valor: 'd', texto: 'Building' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Flat" (UK) = Apartment (US) = Apartamento'
    },

    {
        id: 17,
        tipo: 'text',
        pregunta: 'What does "spell" mean? (deletrear)',
        respuestaCorrecta: ['deletrear', 'letter', 'alphabet'],
        explicacion: '💡 To spell = deletrear. Example: Spell your name letter by letter (J-O-H-N)'
    },

    {
        id: 18,
        tipo: 'radio',
        pregunta: 'Replace the subject with the correct pronoun: "The new hospital in the city centre is very modern" → "_____ is very modern"',
        opciones: [
            { valor: 'a', texto: 'He' },
            { valor: 'b', texto: 'She' },
            { valor: 'c', texto: 'It' },
            { valor: 'd', texto: 'They' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 "The new hospital" = a thing/place (singular) → "It". Remember: It + is. Example: The school is big → It is big. Use "It" for objects, animals, and places.'
    },

    {
        id: 19,
        tipo: 'select',
        pregunta: 'What does "Occupation" mean?',
        opciones: [
            { valor: 'a', texto: 'Place you live' },
            { valor: 'b', texto: 'Your job/profession' },
            { valor: 'c', texto: 'Your hobby' },
            { valor: 'd', texto: 'Your age' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Occupation" = Profesión/Trabajo (teacher, engineer, student, etc.)'
    },

    {
        id: 20,
        tipo: 'radio',
        pregunta: 'Which is correct to say your address?',
        opciones: [
            { valor: 'a', texto: 'I live in 42 Baker Street' },
            { valor: 'b', texto: 'I live at 42 Baker Street' },
            { valor: 'c', texto: 'I live on 42 Baker Street' },
            { valor: 'd', texto: 'I live to 42 Baker Street' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Use "at" with specific addresses: "I live AT 42 Baker Street"'
    },

    {
        id: 21,
        tipo: 'checkbox',
        pregunta: 'Select all the PLURAL pronouns:',
        opciones: [
            { valor: 'a', texto: 'You' },
            { valor: 'b', texto: 'They' },
            { valor: 'c', texto: 'He' },
            { valor: 'd', texto: 'It' },
            { valor: 'e', texto: 'I' },
            { valor: 'f', texto: 'We' },
            { valor: 'g', texto: 'She' }
        ],
        respuestaCorrecta: ['a', 'b', 'f'],
        explicacion: '💡 Plural pronouns are: You, They, We. Remember: You can be singular or plural, but it always uses "are". Singular pronouns: I, He, She, It.'
    },

    {
        id: 22,
        tipo: 'radio',
        pregunta: '📝 Someone asks you: "How are you?" You answer: "I\'m fine, thanks!" What should you say next to be polite?',
        opciones: [
            { valor: 'a', texto: 'Goodbye!' },
            { valor: 'b', texto: 'And you?' },
            { valor: 'c', texto: 'Nice to meet you' },
            { valor: 'd', texto: 'I\'m from Spain' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Answer: "And you?" (¿Y tú?). In English, after answering "How are you?", it is polite and common to return the question. Other options: "How about you?" (¿Qué tal tú?), "What about you?" (¿Y tú qué tal?), "And yourself?" (¿Y usted? - more formal). Example conversation: A: "Hi! How are you?" → B: "I\'m great, thanks! And you?" → A: "I\'m good too, thanks!" This is called "La Pregunta Rebote" (the bounced question). Cambridge English A1 based on your Greetings theory.'
    },

    {
        id: 23,
        tipo: 'sentence-ordering',
        pregunta: 'Put the words in the correct order to make a sentence:',
        palabras: ['are', 'students', 'The', 'countries', 'from', 'my', 'in', 'different', 'class'],
        respuestaCorrecta: ['The', 'students', 'in', 'my', 'class', 'are', 'from', 'different', 'countries'],
        explicacion: '💡 The correct sentence is: "The students in my class are from different countries". Remember: Subject + verb "to be" (are) + complement. The structure is: The students (subject) + are (verb) + from different countries (complement).'
    },

    {
        id: 24,
        tipo: 'checkbox',
        pregunta: 'Which are parts of a UK address?',
        opciones: [
            { valor: 'a', texto: 'House number' },
            { valor: 'b', texto: 'Street name' },
            { valor: 'c', texto: 'Postcode' },
            { valor: 'd', texto: 'ZIP code' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 UK addresses use "Postcode", not "ZIP code" (which is American)'
    },

    {
        id: 25,
        tipo: 'text',
        pregunta: 'What abbreviation is used for "Mister" in titles?',
        respuestaCorrecta: ['mr', 'mr.'],
        explicacion: '💡 Mr. = Mister (title for men). Mrs. = married woman, Ms. = any woman, Miss = unmarried woman'
    },
 
    {
        id: 26,
        tipo: 'sentence-ordering',
        pregunta: 'Put the words in the correct order to make a sentence:',
        palabras: ['school', 'are', 'at', 'teachers', 'My', 'the', 'parents', 'local'],
        respuestaCorrecta: ['My', 'parents', 'are', 'teachers', 'at', 'the', 'local', 'school'],
        explicacion: '💡 The correct sentence is: "My parents are teachers at the local school". Remember: Subject (My parents) + verb "to be" (are) + complement (teachers) + place (at the local school).'
    },
    
    {
        id: 27,
        tipo: 'sentence-ordering',
        pregunta: 'Put the words in the correct order to make a sentence:',
        palabras: ['hospital', 'is', 'the', 'She', 'at', 'doctor', 'a', 'city'],
        respuestaCorrecta: ['She', 'is', 'a', 'doctor', 'at', 'the', 'city', 'hospital'],
        explicacion: '💡 The correct sentence is: "She is a doctor at the city hospital". Remember: Subject (She) + verb "to be" (is) + complement (a doctor) + place (at the city hospital).'
    },

    {
        id: 28,
        tipo: 'radio',
        pregunta: 'Change this sentence to NEGATIVE (without contractions): "The children are very happy at the new school"',
        opciones: [
            { valor: 'a', texto: 'The children not are very happy at the new school' },
            { valor: 'b', texto: 'The children are not very happy at the new school' },
            { valor: 'c', texto: "The children aren't very happy at the new school" },
            { valor: 'd', texto: 'The children are very happy not at the new school' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Negative form WITHOUT contractions: Subject + verb "to be" + NOT + complement. The structure is: The children ARE NOT very happy. Remember: "are not" (NOT "aren\'t" when avoiding contractions).'
    },

    {
        id: 29,
        tipo: 'radio',
        pregunta: 'Change this sentence to INTERROGATIVE: "Your friends are ready for the exam"',
        opciones: [
            { valor: 'a', texto: 'Your friends are ready for the exam?' },
            { valor: 'b', texto: 'Are your friends ready for the exam?' },
            { valor: 'c', texto: 'Are ready your friends for the exam?' },
            { valor: 'd', texto: 'Your friends ready are for the exam?' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Interrogative form: Verb "to be" + Subject + complement + ?. The structure is: ARE your friends ready for the exam? Remember: Put the verb BEFORE the subject to form questions.'
    },

    {
        id: 30,
        tipo: 'radio',
        pregunta: 'Which sentence is CORRECT?',
        opciones: [
            { valor: 'a', texto: 'My sister and I am students at the university' },
            { valor: 'b', texto: 'My sister and I is students at the university' },
            { valor: 'c', texto: 'My sister and I are students at the university' },
            { valor: 'd', texto: 'My sister and I be students at the university' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 "My sister and I" = WE (two people, 1st person plural) → use "are". Remember: I + another person = We. Example: My brother and I are doctors → We are doctors.'
    },

    {
        id: 31,
        tipo: 'radio',
        pregunta: 'Answer the question: "Are you a student?" - Choose the CORRECT short answer:',
        opciones: [
            { valor: 'a', texto: 'Yes, I are' },
            { valor: 'b', texto: 'Yes, I am' },
            { valor: 'c', texto: 'Yes, you are' },
            { valor: 'd', texto: 'Yes, I is' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Short answers with TO BE: Yes + pronoun + verb. "Are you...?" → "Yes, I am" or "No, I am not". Remember: Use "I" in the answer, not "you".'
    },

    {
        id: 32,
        tipo: 'matching',
        pregunta: 'Match the full forms with their contractions:',
        parejas: [
            { izquierda: 'I am', derecha: "I'm" },
            { izquierda: 'You are', derecha: "You're" },
            { izquierda: 'He is', derecha: "He's" },
            { izquierda: 'They are', derecha: "They're" }
        ],
        respuestaCorrecta: {
            'I am': "I'm",
            'You are': "You're",
            'He is': "He's",
            'They are': "They're"
        },
        explicacion: '💡 Contractions combine the pronoun and verb. Example: I am → I\'m, You are → You\'re, He/She/It is → He\'s/She\'s/It\'s, We/They are → We\'re/They\'re.'
    },

    {
        id: 33, 
        tipo: 'checkbox',
        pregunta: 'Select ALL the sentences with the CORRECT form of the verb TO BE:',
        opciones: [
            { valor: 'a', texto: 'I am a teacher' },
            { valor: 'b', texto: 'She are happy' },
            { valor: 'c', texto: 'They is students' },
            { valor: 'd', texto: 'We are from Spain' },
            { valor: 'e', texto: 'He am a doctor' },
            { valor: 'f', texto: 'You are very kind' }
        ],
        respuestaCorrecta: ['a', 'd', 'f'],
        explicacion: '💡 Correct conjugations: I AM, You ARE, He/She/It IS, We ARE, They ARE. Remember: "I am", "You/We/They are", "He/She/It is". The incorrect ones are: "She are" (should be "is"), "They is" (should be "are"), "He am" (should be "is").'
    },

    {
        id: 34,
        tipo: 'fill-blanks',
        pregunta: 'Complete with the correct form of TO BE:',
        frase: 'I ___ a student. My friends ___ teachers. She ___ from Italy.',
        blanks: ['am', 'are', 'is'],
        explicacion: '💡 The correct forms are: I AM a student. My friends ARE teachers. She IS from Italy. Remember: I→am, You/We/They→are, He/She/It→is.'
    },

    {
        id: 35,
        tipo: 'radio',
        pregunta: 'Choose the correct form: "My brother and sister _____ at home"',
        opciones: [
            { valor: 'a', texto: 'am' },
            { valor: 'b', texto: 'is' },
            { valor: 'c', texto: 'are' },
            { valor: 'd', texto: 'be' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 "My brother and sister" = TWO people = THEY → use "are". Remember: plural subjects use "are". My brother and sister ARE at home = They ARE at home.'
    },

    {
        id: 36,
        tipo: 'matching',
        pregunta: 'Match each pronoun with the correct form of TO BE:',
        parejas: [
            { izquierda: 'I', derecha: 'am' },
            { izquierda: 'She', derecha: 'is' },
            { izquierda: 'We', derecha: 'are' },
            { izquierda: 'They', derecha: 'are' }
        ],
        respuestaCorrecta: {
            'I': 'am',
            'She': 'is',
            'We': 'are',
            'They': 'are'
        },
        explicacion: '💡 Verb TO BE conjugation: I am, You are, He/She/It is, We are, They are. This is the foundation of English grammar!'
    },

    {
        id: 37,
        tipo: 'radio',
        pregunta: 'Change this sentence to INTERROGATIVE: "Your parents are very proud of your achievements at school"',
        opciones: [
            { valor: 'a', texto: 'Your parents are very proud of your achievements at school?' },
            { valor: 'b', texto: 'Are your parents very proud of your achievements at school?' },
            { valor: 'c', texto: 'Are very proud your parents of your achievements at school?' },
            { valor: 'd', texto: 'Your parents very proud are of your achievements at school?' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Interrogative form: Verb "to be" + Subject + complement + ?. The structure is: ARE your parents very proud of your achievements at school? Remember: Move the verb BEFORE the subject to form questions.'
    },

    {
        id: 38,
        tipo: 'fill-blanks',
        pregunta: 'Complete with the correct form of TO BE:',
        frase: 'She ___ a doctor. Her children ___ at school. I ___ her colleague.',
        blanks: ['is', 'are', 'am'],
        explicacion: '💡 The correct forms are: She IS a doctor. Her children ARE at school. I AM her colleague. Remember: She→is, Her children (they)→are, I→am.'
    },

    {
        id: 39,
        tipo: 'text',
        pregunta: '🎧 Listen and write the email address you hear:',
        audioSrc: '../../audios/t1/exams/week1/email5.mp3',
        respuestaCorrecta: ['user_2024@test-site.co.uk', 'user_2024@test-site.co.uk.', 'USER_2024@TEST-SITE.CO.UK'],
        explicacion: '💡 The correct email is: user_2024@test-site.co.uk. Remember: "_" is underscore, numbers are spelled individually (two zero two four), "-" is hyphen, "@" is at, "." is dot.'
    },

    {
        id: 40,
        tipo: 'text',
        pregunta: '🎧 Listen and write the email address you hear:',
        audioSrc: '../../audios/t1/exams/week1/email1.mp3',
        respuestaCorrecta: ['maria_garcia@company.co.uk'],
        explicacion: '💡 The correct email is: maria_garcia@company.co.uk (all lower case). Remember: "_" is underscore, "@" is at, "." is dot.'
    },

    {
        id: 41,
        tipo: 'text',
        pregunta: '🎧 Listen and write the email address you hear:',
        audioSrc: '../../audios/t1/exams/week1/email41.mp3',
        respuestaCorrecta: ['JOHN.SMITH@email.com', 'john.smith@email.com', 'John.Smith@email.com'],
        explicacion: '💡 The correct email is: JOHN.SMITH@email.com (first and last name in capitals). Remember: In emails, capital letters don\'t matter (JOHN.SMITH@email.com = john.smith@email.com), but you should write what you hear. "." is dot, "@" is at.'
    },

    {
        id: 42,
        tipo: 'text',
        pregunta: '🎧 Listen and write the email address you hear:',
        audioSrc: '../../audios/t1/exams/week1/email42.mp3',
        respuestaCorrecta: ['contact_us@support.co.uk', 'CONTACT_US@SUPPORT.CO.UK', 'Contact_Us@Support.co.uk'],
        explicacion: '💡 The correct email is: contact_us@support.co.uk (all in lower case). Remember: "_" is underscore, "@" is at, "." is dot. UK domain uses ".co.uk" format.'
    },

    {
        id: 43,
        tipo: 'text',
        pregunta: '🎧 Listen and write the email address you hear:',
        audioSrc: '../../audios/t1/exams/week1/email43.mp3',
        respuestaCorrecta: ['tech_77@site-help.com', 'TECH_77@SITE-HELP.COM', 'Tech_77@Site-Help.com'],
        explicacion: '💡 The correct email is: tech_77@site-help.com (all in lower case). Remember: "_" is underscore, "double seven" = 77, "@" is at, "-" is hyphen, "." is dot.'
    },

    {
        id: 44,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to Maria\'s introduction and answer the questions:',
        audioSrc: '../../audios/t1/exams/week1/presentacion-maria.mp3',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: 'What is her name?',
                opciones: [
                    { valor: 'a', texto: 'Mary' },
                    { valor: 'b', texto: 'Maria' },
                    { valor: 'c', texto: 'Marta' },
                    { valor: 'd', texto: 'Monica' }
                ],
                respuestaCorrecta: 'b'
            },
            {
                id: 'b',
                tipo: 'radio',
                pregunta: 'Where is she from?',
                opciones: [
                    { valor: 'a', texto: 'Barcelona' },
                    { valor: 'b', texto: 'Madrid' },
                    { valor: 'c', texto: 'Valencia' },
                    { valor: 'd', texto: 'London' }
                ],
                respuestaCorrecta: 'b'
            },
            {
                id: 'c',
                tipo: 'text',
                pregunta: 'How old is she? (write the number)',
                respuestaCorrecta: ['28', 'twenty-eight', 'twenty eight', 'twentyeight'],
                explicacion: '💡 She says: "I\'m 28 years old"'
            },
            {
                id: 'd',
                tipo: 'radio',
                pregunta: 'What is her job?',
                opciones: [
                    { valor: 'a', texto: 'Doctor' },
                    { valor: 'b', texto: 'Teacher' },
                    { valor: 'c', texto: 'Engineer' },
                    { valor: 'd', texto: 'Student' }
                ],
                respuestaCorrecta: 'b'
            }
        ],
        
        explicacion: '💡 Practice listening to personal introductions: name, age, origin, and occupation.'
    },

    {
        id: 45,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to Peter\'s introduction and answer the questions:',
        audioSrc: '../../audios/t1/exams/week1/presentacion-peter.mp3',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: 'What is his name?',
                opciones: [
                    { valor: 'a', texto: 'Paul' },
                    { valor: 'b', texto: 'Peter' },
                    { valor: 'c', texto: 'Patrick' },
                    { valor: 'd', texto: 'Philip' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 He says: "My name is Peter"'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: 'Where is he from and where does he live?',
                opciones: [
                    { valor: 'a', texto: 'From England, lives in London' },
                    { valor: 'b', texto: 'From Spain, lives in Madrid' },
                    { valor: 'c', texto: 'From England, lives in Valencia, Spain' },
                    { valor: 'd', texto: 'From France, lives in Paris' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 He says: "I\'m from England, but I live in Valencia, Spain"'
            },
            
            {
                id: 'c',
                tipo: 'text',
                pregunta: 'How old is he? (write the number)',
                respuestaCorrecta: ['45', 'forty-five', 'forty five', 'fortyfive'],
                explicacion: '💡 He says: "I\'m 45 years old"'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: 'What is his profession?',
                opciones: [
                    { valor: 'a', texto: 'Teacher' },
                    { valor: 'b', texto: 'Doctor' },
                    { valor: 'c', texto: 'Airplane pilot' },
                    { valor: 'd', texto: 'Engineer' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 He says: "My profession is an airplane pilot"'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: 'How many children does he have and what are their names?',
                opciones: [
                    { valor: 'a', texto: 'One child: Peter' },
                    { valor: 'b', texto: 'Two children: Mary and Robert' },
                    { valor: 'c', texto: 'Three children: Mary, Robert, and James' },
                    { valor: 'd', texto: 'Four children: Mary, Robert, Sarah, and John' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 He says: "I have two children: a daughter and a son. My daughter Mary is 27 and my son Robert is 31"'
            }
        ],
        
        explicacion: '💡 Practice listening to personal introductions: name, origin, residence, age, profession, and family information.'
    },
   
    {
        id: 46,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to Sophie\'s introduction and answer the questions:',
        audioSrc: '../../audios/t1/exams/week1/presentacion-sophie.mp3',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: 'What is the first name of the girl?',
                opciones: [
                    { valor: 'a', texto: 'Sandra' },
                    { valor: 'b', texto: 'Sophie' },
                    { valor: 'c', texto: 'Sophia' },
                    { valor: 'd', texto: 'Samantha' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 She says: "My name is Sophie". This is a simple listening comprehension question to identify the speaker\'s first name.'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: 'Where is she from and where does she live?',
                opciones: [
                    { valor: 'a', texto: 'From Australia, lives in Sydney' },
                    { valor: 'b', texto: 'From Spain, lives in Madrid' },
                    { valor: 'c', texto: 'From Australia, lives in Barcelona, Spain' },
                    { valor: 'd', texto: 'From New Zealand, lives in Melbourne' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 She says: "I\'m from Australia, but I live in Barcelona, Spain"'
            },
            
            {
                id: 'c',
                tipo: 'text',
                pregunta: 'Write her age in words (how old is she?)',
                respuestaCorrecta: ['34', 'thirty-four', 'thirty four', 'thirtyfour'],
                explicacion: '💡 She says: "I\'m 34 years old". Remember: numbers from 21-34 follow the pattern: twenty-one, twenty-two... thirty-four.'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: 'What is her profession?',
                opciones: [
                    { valor: 'a', texto: 'Nurse' },
                    { valor: 'b', texto: 'Graphic designer' },
                    { valor: 'c', texto: 'Engineer' },
                    { valor: 'd', texto: 'Photographer' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 She says: "I\'m a graphic designer and I work at an international company"'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: 'What is her marital status and where does her brother live?',
                opciones: [
                    { valor: 'a', texto: 'Married, her brother lives in Barcelona' },
                    { valor: 'b', texto: 'Single, her brother lives in Sydney' },
                    { valor: 'c', texto: 'Divorced, her brother lives in Melbourne' },
                    { valor: 'd', texto: 'Single, her brother lives in Brisbane' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 She says: "I\'m single... I have one brother called James. He is 29 years old and he lives in Sydney"'
            }
        ],
        
        explicacion: '💡 Practice listening to personal introductions from a female speaker: name, origin, residence, age, profession, and family information.'
    },

    {
        id: 47,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to Mark\'s daily routine and answer the questions:',
        audioSrc: '../../audios/t1/exams/week1/presentacion-mark.mp3',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: 'What time does Mark wake up?',
                opciones: [
                    { valor: 'a', texto: '6:30 AM' },
                    { valor: 'b', texto: '7:00 AM' },
                    { valor: 'c', texto: '8:00 AM' },
                    { valor: 'd', texto: '7:30 AM' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 He says: "Every day I wake up at 7 o\'clock". Present Simple for habitual actions.'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: 'What is Mark\'s job?',
                opciones: [
                    { valor: 'a', texto: 'Teacher' },
                    { valor: 'b', texto: 'Accountant' },
                    { valor: 'c', texto: 'Manager' },
                    { valor: 'd', texto: 'Nurse' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 He says: "I work as an accountant in a big office". Occupation and present simple routine.'
            },
            
            {
                id: 'c',
                tipo: 'text',
                pregunta: 'What time does he finish work? (write as HH:00 or HH:30)',
                respuestaCorrecta: ['5 pm', '5pm', '5 PM', '17:00', '17.00', 'five pm', 'five o\'clock pm', '5:00 pm', '5:00 PM', 'five o\'clock'],
                explicacion: '💡 He says: "I finish work at 5 PM". Present simple for daily routines and fixed schedules.'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: 'What does Mark do in the evening?',
                opciones: [
                    { valor: 'a', texto: 'He goes to the gym and then goes home' },
                    { valor: 'b', texto: 'He goes to a restaurant' },
                    { valor: 'c', texto: 'He meets friends' },
                    { valor: 'd', texto: 'He studies English' }
                ],
                respuestaCorrecta: 'a',
                explicacion: '💡 He says: "In the evening, I go to the gym. I come home at 7 PM". Multiple activities in present simple routine.'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: 'What time does Mark go to bed?',
                opciones: [
                    { valor: 'a', texto: '9:30 PM' },
                    { valor: 'b', texto: '10:00 PM' },
                    { valor: 'c', texto: '11:00 PM' },
                    { valor: 'd', texto: '10:30 PM' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 He says: "...and then I go to bed at 11 PM". Last activity of the daily routine.'
            }
        ],
        
        explicacion: '💡 Practice Present Simple for daily routines and habitual actions: wake up, work, have meals, exercise, and go to bed. Cambridge English A1-A2 level vocabulary.'
    },

    {
        id: 48,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-r.mp3',
        respuestaCorrecta: ['r', 'R'],
        explicacion: '💡 The letter R: In British English, R is only pronounced before a vowel sound. When you hear the letter name "R", focus on the /ɑːr/ sound (/ar/ sound with rounded lips). This letter is often confused with other letters like L. Position your tongue up and back in your mouth, and round your lips.',
        pista: '💡 Tip: The letter R has a distinctive /ɑːr/ sound. Think of the word "RED" - the first sound is how the letter R is pronounced. Keep your lips rounded!'
    },

    {
        id: 49,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-e.mp3',
        respuestaCorrecta: ['e', 'E'],
        explicacion: '💡 The letter E: In English, when saying the alphabet, E is pronounced /iː/ (like "ee" in "see"). This is the long sound of E. The letter E is a vowel and has multiple sounds in words: long sound (/iː/ as in "he", "she"), short sound (/e/ as in "bed", "red"), and sometimes it is silent (e.g., "name", "like"). When spelling or saying the alphabet, focus on the long /iː/ sound.',
        pista: '💡 Tip: The letter E sounds like /iː/ - similar to the Spanish "i" but longer. Think of the word "SEE" - that\'s the sound of the letter E in the alphabet!'
    },

    {
        id: 50,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-a.mp3',
        respuestaCorrecta: ['a', 'A'],
        explicacion: '💡 The letter A: In the alphabet, A is pronounced /eɪ/ (like "ay"). This is the long A sound. In words, A has different sounds: long /eɪ/ as in "make", "name"; short /æ/ as in "cat", "hat". When spelling or reading the alphabet, focus on the long /eɪ/ diphthong (two vowel sounds together).',
        pista: '💡 Tip: The letter A in the alphabet sounds like "ay" - similar to saying "hey" but without the initial "h". Think of words like "say", "day", "way". It\'s a diphthong: /eɪ/'
    },

    {
        id: 51,
        tipo: 'text',
        pregunta: 'Complete: "_____ are students" (ellos/ellas)',
        respuestaCorrecta: ['they'],
        explicacion: '💡 They = Ellos/Ellas (third person plural)'
    },

    {
        id: 52,
        tipo: 'checkbox',
        pregunta: 'Which pronouns are third person singular?',
        opciones: [
            { valor: 'a', texto: 'He' },
            { valor: 'b', texto: 'She' },
            { valor: 'c', texto: 'It' },
            { valor: 'd', texto: 'We' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 Third person singular: he, she, it. "We" is first person plural.'
    },

    {
        id: 53,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-i.mp3',
        respuestaCorrecta: ['i', 'I'],
        explicacion: '💡 The letter I: In the alphabet, I is pronounced /aɪ/ (like "eye"). This is a diphthong - two vowel sounds combined. In words, I has different sounds: long /aɪ/ as in "like", "bike"; short /ɪ/ as in "sit", "it". When spelling or saying the alphabet, focus on the long /aɪ/ sound (similar to the Spanish "ai" but more pronounced).',
        pista: '💡 Tip: The letter I sounds like "eye" - the same as the English word for your body part that lets you see! Think of words like "time", "mine", "nine". It\'s a diphthong: /aɪ/'
    },

    {
        id: 54,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-o.mp3',
        respuestaCorrecta: ['o', 'O'],
        explicacion: '💡 The letter O: In the alphabet, O is pronounced /əʊ/ (like "oh"). This is the long O sound - a diphthong. In words, O has different sounds: long /əʊ/ as in "go", "home"; short /ɒ/ (British) or /ɑ/ (American) as in "hot", "dog". When spelling or reading the alphabet, focus on the long /əʊ/ sound.',
        pista: '💡 Tip: The letter O sounds like "oh" - the same as when you understand something! Think of words like "go", "no", "so", "rope". The lips are rounded: /əʊ/'
    },

    {
        id: 55,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-u.mp3',
        respuestaCorrecta: ['u', 'U'],
        explicacion: '💡 The letter U: In the alphabet, U is pronounced /juː/ (like "you"). This includes the consonant sound /j/ followed by the long vowel /uː/. In words, U has different sounds: long /juː/ as in "use", "music"; long /uː/ as in "blue", "shoe"; short /ʌ/ as in "cut", "run". When spelling or saying the alphabet, focus on the /juː/ sound.',
        pista: '💡 Tip: The letter U sounds like "you" - the pronoun! Think of words like "music", "university", "useful". Your lips are rounded and projected forward: /juː/'
    },

    {
        id: 56,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-z.mp3',
        respuestaCorrecta: ['z', 'Z'],
        explicacion: '💡 The letter Z: In British English, Z is pronounced /zed/ (pronounced like "zed"). In American English, it\'s /ziː/ ("zee"). For Cambridge English (British), focus on /zed/. The sound /z/ is voiced and similar to "s" but with vibration of the vocal cords. Examples: "zoo", "zero", "lazy". The letter Z is often confused with C and S due to similar sounds.',
        pista: '💡 Tip: In British English, the letter Z is "zed" (not "zee"). Think of the word "zoo" - that\'s the /z/ sound. It\'s like /s/ but with your voice ON!'
    },

    {
        id: 57,
        tipo: 'select',
        pregunta: 'Choose the correct pronoun: "María is a doctor. _____ is very good."',
        opciones: [
            { valor: 'a', texto: 'He' },
            { valor: 'b', texto: 'She' },
            { valor: 'c', texto: 'It' },
            { valor: 'd', texto: 'They' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 María is female → "She" is the correct pronoun'
    },

    {
        id: 58,
        tipo: 'radio',
        pregunta: 'Which pronoun is always written with a capital letter?',
        opciones: [
            { valor: 'a', texto: 'he' },
            { valor: 'b', texto: 'I' },
            { valor: 'c', texto: 'you' },
            { valor: 'd', texto: 'they' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "I" is ALWAYS capitalized in English, no matter where it appears in the sentence'
    },

    {
        id: 59,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-w.mp3',
        respuestaCorrecta: ['w', 'W'],
        explicacion: '💡 The letter W: In English, W is pronounced /dʌbəlˈjuː/ - literally "double you" (because it looks like two V\'s together or two U\'s). The letter W has a distinctive /w/ sound. Examples: "water", "window", "well". The /w/ sound requires rounded lips and is a semi-consonant or glide. W is often confused with V and R by Spanish speakers.',
        pista: '💡 Tip: The letter W sounds like "double you" - it\'s actually two words combined! Think of "we", "wet", "was". Your lips are rounded and move quickly: /w/'
    },


    {
        id: 60,
        tipo: 'checkbox',
        pregunta: 'Which can be replaced by "they"?',
        opciones: [
            { valor: 'a', texto: 'John and Mary' },
            { valor: 'b', texto: 'The books' },
            { valor: 'c', texto: 'My friend' },
            { valor: 'd', texto: 'The students' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 "They" = plural (people OR things). "My friend" is singular → he/she'
    },
   
    {
        id: 61,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-j.mp3',
        respuestaCorrecta: ['j', 'J'],
        explicacion: '💡 The letter J: In English, J is pronounced /dʒeɪ/ - "jay" (sounds like "j" + "ay"). The sound /dʒ/ is an affricate (a stop + fricative combination). Examples: "jump", "job", "just". The letter J is often confused with G (which has a soft sound /dʒ/ in some words like "general"). J always makes the /dʒ/ sound in English.',
        pista: '💡 Tip: The letter J sounds like "jay" - similar to saying "j" as in "jump". It\'s an affricate /dʒ/. Think of "jump", "jeep", "joke". Say it with your mouth in a "ch" position: /dʒeɪ/'
    },

    {
        id: 62,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-v.mp3',
        respuestaCorrecta: ['v', 'V'],
        explicacion: '💡 The letter V: In English, V is pronounced /viː/ - "vee" (the sound /v/ + long "ee"). The sound /v/ is made by placing your lower lip behind your upper teeth and letting air flow while vibrating your vocal cords. Examples: "very", "voice", "love". The letter V is often confused with B by Spanish speakers because in Spanish, V and B have similar sounds.',
        pista: '💡 Tip: The letter V sounds like "vee" (like the Roman numeral 5!). Your teeth are on your lower lip, and your voice is ON. Think of "very", "video", "violin". It\'s the voiced version of F: /viː/'
    },

    {
        id: 63,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-b.mp3',
        respuestaCorrecta: ['b', 'B'],
        explicacion: '💡 The letter B: In English, B is pronounced /biː/ - "bee" (the sound /b/ + long "ee"). The sound /b/ is a voiced bilabial plosive (both lips come together). Examples: "book", "big", "baby". The letter B is often confused with V and P by Spanish speakers. B is voiced (your vocal cords vibrate), while P is unvoiced (no vibration).',
        pista: '💡 Tip: The letter B sounds like "bee" (the insect!). Both lips come together, then release with your voice ON. Think of "baby", "ball", "book". Compare with P (no voice): /biː/'
    },

    {
        id: 64,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-y.mp3',
        respuestaCorrecta: ['y', 'Y'],
        explicacion: '💡 The letter Y: In English, Y is pronounced /waɪ/ - "why" (exactly like the question word "why"). The sound /w/ + long "i" diphthong /aɪ/. The letter Y can be a consonant or a vowel in words. Examples as consonant: "yes", "yell", "you". Examples as vowel: "my", "sky", "happy". Y is often confused with I by learners.',
        pista: '💡 Tip: The letter Y sounds like "why" - exactly like the question word! Think of "yes", "yellow", "young". Your lips are rounded at the beginning: /waɪ/'
    },

    {
        id: 65,
        tipo: 'text',
        pregunta: '🎧 Listen to the letter of the alphabet and write which letter it is:',
        audioSrc: '../../audios/t1/exams/week1/alphabet-letter-h.mp3',
        respuestaCorrecta: ['h', 'H'],
        explicacion: '💡 The letter H: In English, H is pronounced /eɪtʃ/ - "aitch" (the sound /eɪ/ + /tʃ/). The sound /h/ is a voiceless glottal fricative (breath sound from your throat). Examples: "hand", "hello", "happy". Important: In British English, the letter H is pronounced with the vowel /eɪ/, not /eɪtʃ/. The H is sometimes silent in words like "hour", "honest", "honor".',
        pista: '💡 Tip: The letter H sounds like "aitch" in British English (not "haitch"). It\'s a breath sound from your throat. Think of "hi", "hello", "house". It\'s the sound of air: /eɪtʃ/'
    },

    {
        id: 66,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to each greeting and answer the questions about when to use them:',
        audioSrc: null,
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: '🎧 Audio 1: When do we use this greeting?',
                audioSrc: '../../audios/t1/exams/week1/good_afternoon_nice_to_see_you.mp3',
                opciones: [
                    { valor: 'a', texto: 'From midnight to noon (00:00-12:00)' },
                    { valor: 'b', texto: 'From noon to evening (12:00-18:00)' },
                    { valor: 'c', texto: 'From evening to midnight (18:00-00:00)' },
                    { valor: 'd', texto: 'Only when saying goodbye at bedtime' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 "Good afternoon" is used from 12:00 noon until approximately 6:00 PM (18:00). It\'s a polite greeting when you meet someone during the afternoon hours.'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: '🎧 Audio 2: When do we use this greeting?',
                audioSrc: '../../audios/t1/exams/week1/good_evening_welcome_to_our_restaurant.mp3',
                opciones: [
                    { valor: 'a', texto: 'From midnight to noon (00:00-12:00)' },
                    { valor: 'b', texto: 'From noon to evening (12:00-18:00)' },
                    { valor: 'c', texto: 'From evening to midnight (18:00-00:00)' },
                    { valor: 'd', texto: 'Only when saying goodbye at bedtime' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 "Good evening" is used from approximately 6:00 PM (18:00) until late night. Use it when you arrive somewhere or meet someone in the evening. Perfect for restaurants, parties, or evening events!'
            },
            
            {
                id: 'c',
                tipo: 'radio',
                pregunta: '🎧 Audio 3: When do we use this greeting?',
                audioSrc: '../../audios/t1/exams/week1/good_morning_how_are_you_today.mp3',
                opciones: [
                    { valor: 'a', texto: 'From midnight to noon (00:00-12:00)' },
                    { valor: 'b', texto: 'From noon to evening (12:00-18:00)' },
                    { valor: 'c', texto: 'From evening to midnight (18:00-00:00)' },
                    { valor: 'd', texto: 'Only when saying goodbye at bedtime' }
                ],
                respuestaCorrecta: 'a',
                explicacion: '💡 "Good morning" is used from sunrise (or when you wake up) until 12:00 noon. It\'s the most common greeting at the start of the day, at work, school, or when meeting someone before lunchtime.'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: '🎧 Audio 4: When do we use this expression?',
                audioSrc: '../../audios/t1/exams/week1/good_night_sleep_well_see_you_tomorrow.mp3',
                opciones: [
                    { valor: 'a', texto: 'When arriving somewhere in the evening' },
                    { valor: 'b', texto: 'When meeting someone at night' },
                    { valor: 'c', texto: 'Only when saying goodbye before sleeping' },
                    { valor: 'd', texto: 'At any time during the night' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 IMPORTANT: "Good night" is NOT a greeting! It is ONLY used when saying goodbye before going to bed or leaving late at night. Never say "Good night" when arriving somewhere. When you arrive in the evening, say "Good evening" instead.'
            }
        ],
        
        explicacion: '💡 Master the time of day greetings: "Good morning" (until 12pm), "Good afternoon" (12pm-6pm), "Good evening" (6pm onwards when arriving). Remember: "Good night" is for saying goodbye, NOT for greeting! This is Cambridge English A1 essential vocabulary.'
    },

    {
        id: 67,
        tipo: 'text',
        pregunta: '🎧 Listen to the UK phone number and write it (11 digits):',
        audioSrc: '../../audios/t1/exams/week1/phone-number-1.mp3',
        respuestaCorrecta: [
            '07700900456',
            '07700 900456',
            '07700 900 456',
            '077 0090 0456',
            '077-0090-0456',
            '07700-900-456'
        ],
        explicacion: '💡 UK Mobile Number: 07700 900456. Remember: UK mobile numbers always start with "07" and have 11 digits total. When saying phone numbers, you can say "double seven" for "77" and "double oh" for "00". This number is: "oh-double seven-double oh-nine-double oh-four-five-six".',
        pista: '💡 Tip: UK mobile numbers start with 07. Listen for "double" when numbers repeat (e.g., "double seven" = 77).'
    },

    {
        id: 68,
        tipo: 'text',
        pregunta: '🎧 Listen to the UK phone number and write it (11 digits):',
        audioSrc: '../../audios/t1/exams/week1/phone-number-2.mp3',
        respuestaCorrecta: [
            '02079460958',
            '020 7946 0958',
            '020 79460958',
            '020-7946-0958',
            '(020) 7946 0958'
        ],
        explicacion: '💡 UK Landline Number (London): 020 7946 0958. This is a London landline number - the area code "020" represents London. UK landlines have 11 digits total. When saying this number: "oh-two-oh-seven-nine-four-six-oh-nine-five-eight".',
        pista: '💡 Tip: Area code "020" = London. UK landline numbers have 11 digits total including the area code starting with 0.'
    },

    {
        id: 69,
        tipo: 'text',
        pregunta: '🎧 Listen to the UK phone number and write it (11 digits):',
        audioSrc: '../../audios/t1/exams/week1/phone-number-3.mp3',
        respuestaCorrecta: [
            '07455501872',
            '07455 501872',
            '07455 501 872',
            '074 5550 1872',
            '07455-501-872',
            '074-5550-1872'
        ],
        explicacion: '💡 UK Mobile Number: 07455 501872. Another mobile number starting with "07". When saying this number, you can say "oh-seven-four-triple five-oh-one-eight-seven-two" (notice "triple five" for 555). UK mobile numbers are portable and don\'t have area codes.',
        pista: '💡 Tip: Listen for "triple" when a number appears 3 times (e.g., "triple five" = 555). Mobile numbers = 07 prefix.'
    },

    {
        id: 70,
        tipo: 'text',
        pregunta: 'Translate to English: "Yo soy estudiante"',
        respuestaCorrecta: ['i am a student', 'i\'m a student', 'i am student', 'im a student'],
        explicacion: '💡 I am a student / I\'m a student'
    },

    {
        id: 71,
        tipo: 'checkbox',
        pregunta: 'Which pronouns use "are"?',
        opciones: [
            { valor: 'a', texto: 'You' },
            { valor: 'b', texto: 'We' },
            { valor: 'c', texto: 'They' },
            { valor: 'd', texto: 'He' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 You/We/They + ARE. He + IS'
    },

    {
        id: 72,
        tipo: 'select',
        pregunta: 'Choose the correct negative form: "I _____ not a teacher"',
        opciones: [
            { valor: 'a', texto: 'am' },
            { valor: 'b', texto: 'is' },
            { valor: 'c', texto: 'are' },
            { valor: 'd', texto: 'not' }
        ],
        respuestaCorrecta: 'a',
        explicacion: '💡 I AM not / I\'m not (negative form of TO BE with I)'
    },

    {
        id: 73,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to a person filling in a form. Select the correct answer for each question:',
        audioSrc: '../../audios/t1/exams/week1/form-filling-john-smith.mp3',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: '🎧 What is his first name?',
                opciones: [
                    { valor: 'a', texto: 'James' },
                    { valor: 'b', texto: 'John' },
                    { valor: 'c', texto: 'Jonathan' },
                    { valor: 'd', texto: 'Joseph' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 The person says: "My first name is John". First name = nombre de pila. This is Cambridge English A1 vocabulary for filling in personal forms.'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: '🎧 What is his last name / surname?',
                opciones: [
                    { valor: 'a', texto: 'Smyth' },
                    { valor: 'b', texto: 'Smith' },
                    { valor: 'c', texto: 'Smithers' },
                    { valor: 'd', texto: 'Smiley' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 The person says: "My last name is Smith" or "My surname is Smith". Surname = Last name = Family name. Very important for forms!'
            },
            
            {
                id: 'c',
                tipo: 'radio',
                pregunta: '🎧 How old is he?',
                opciones: [
                    { valor: 'a', texto: '20 years old' },
                    { valor: 'b', texto: '23 years old' },
                    { valor: 'c', texto: '25 years old' },
                    { valor: 'd', texto: '30 years old' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 The person says: "I am 25 years old" or "My age is 25". Remember: In English, we use "TO BE" for age: "I am 25", NOT "I have 25 years".'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: '🎧 What is his date of birth (UK format)?',
                opciones: [
                    { valor: 'a', texto: '05/03/1998' },
                    { valor: 'b', texto: '15/03/1998' },
                    { valor: 'c', texto: '15/03/1988' },
                    { valor: 'd', texto: '03/15/1998' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 The person says: "My date of birth is 15 March 1998" or "15 slash 03 slash 1998" (DD/MM/YYYY UK format). In UK: day/month/year. In USA: month/day/year. This is crucial for forms!'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: '🎧 What is his address?',
                opciones: [
                    { valor: 'a', texto: '25 Oxford Street, Liverpool' },
                    { valor: 'b', texto: '25 Oxford Street, Manchester' },
                    { valor: 'c', texto: '25 Oxford Street, London' },
                    { valor: 'd', texto: '52 Oxford Street, London' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 The person says: "My address is 25 Oxford Street, London". Oxford Street is the most famous shopping street in London, UK! Remember: House number + Street name, City. This is Cambridge English A1 vocabulary.'
            }
        ],
        
        explicacion: '💡 Practice listening to personal information: first name, last name, age, date of birth, and address. Essential for filling in forms in English. Cambridge English A1 level - "Filling Forms" vocabulary and skills.'
    },

    {
        id: 74,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to a person providing personal information for a form. Select the correct answer for each field:',
        audioSrc: '../../audios/t1/exams/week1/form-filling-teacher-spanish.mp3',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: '🎧 What is his occupation?',
                opciones: [
                    { valor: 'a', texto: 'Engineer' },
                    { valor: 'b', texto: 'Doctor' },
                    { valor: 'c', texto: 'Teacher' },
                    { valor: 'd', texto: 'Nurse' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 The person says: "My occupation is Teacher". Occupation = Profesión/Trabajo. A teacher works in schools and educates students. This is Cambridge English A1 vocabulary for forms.'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: '🎧 What is his nationality?',
                opciones: [
                    { valor: 'a', texto: 'Portuguese' },
                    { valor: 'b', texto: 'Spanish' },
                    { valor: 'c', texto: 'Italian' },
                    { valor: 'd', texto: 'French' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 The person says: "My nationality is Spanish" or "I am Spanish". Remember: Nationality = the adjective form (Spanish, British, French, etc.). This is essential for official forms and documents.'
            },
            
            {
                id: 'c',
                tipo: 'radio',
                pregunta: '🎧 Where is he from? (Place)',
                opciones: [
                    { valor: 'a', texto: 'Barcelona, Spain' },
                    { valor: 'b', texto: 'Madrid, Spain' },
                    { valor: 'c', texto: 'Valencia, Spain' },
                    { valor: 'd', texto: 'Seville, Spain' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 The person says: "My place is Valencia, Spain" or "I am from Valencia, Spain". Valencia is a major city on the eastern coast of Spain, famous for the City of Arts and Sciences. This is Cambridge English A1 vocabulary.'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: '🎧 What is his marital status?',
                opciones: [
                    { valor: 'a', texto: 'Married' },
                    { valor: 'b', texto: 'Divorced' },
                    { valor: 'c', texto: 'Single' },
                    { valor: 'd', texto: 'Widowed' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 The person says: "My marital status is Single". Single = Soltero/a (not married). Options: Single, Married, Divorced, Widowed. These are standard form categories in Cambridge English A1 level.'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: '🎧 What is his sex / gender?',
                opciones: [
                    { valor: 'a', texto: 'Female' },
                    { valor: 'b', texto: 'Male' },
                    { valor: 'c', texto: 'Other' },
                    { valor: 'd', texto: 'Prefer not to say' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 The person says: "My sex is Male" or "I am Male" (M). Sex/Gender options: Male, Female, Other, Prefer not to say. This is standard form vocabulary in Cambridge English A1-A2.'
            }
        ],
        
        explicacion: '💡 Practice listening to personal form information: occupation, nationality, place (city and country), marital status, and sex/gender. Essential Cambridge English A1 vocabulary for filling in official forms and applications. Different from ID 73 - this version focuses on occupation, nationality, and personal status instead of contact information.'
    },

    {
        id: 75,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to each question about introducing yourself with the verb "To Be" and select the correct answer:',
        audioSrc: null,
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: '🎧 Question 1: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-6.mp3',
                opciones: [
                    { valor: 'a', texto: 'I\'m from Spain' },
                    { valor: 'b', texto: 'I live in Madrid' },
                    { valor: 'c', texto: 'I\'m married' },
                    { valor: 'd', texto: 'Nice to meet you!' }
                ],
                respuestaCorrecta: 'a',
                explicacion: '💡 Question: "Where are you from?" asks about your nationality or origin. Answer: "I\'m from + country/city" (e.g., I\'m from Spain, I\'m from London). Remember: FROM = origin/birth place, different from "Where do you live?" (current residence).'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: '🎧 Question 2: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-7.mp3',
                opciones: [
                    { valor: 'a', texto: 'I\'m from Italy' },
                    { valor: 'b', texto: 'I\'m Italian' },
                    { valor: 'c', texto: 'I\'m a teacher' },
                    { valor: 'd', texto: 'I\'m 30 years old' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 Question: "What is your nationality?" asks about your nationality. Answer: "I\'m + nationality adjective" (e.g., I\'m Italian, I\'m Spanish, I\'m British). Remember: Nationality adjectives always start with CAPITAL letters in English (Spanish, NOT spanish).'
            },
            
            {
                id: 'c',
                tipo: 'radio',
                pregunta: '🎧 Question 3: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-8.mp3',
                opciones: [
                    { valor: 'a', texto: 'I\'m from Valencia' },
                    { valor: 'b', texto: 'I\'m Spanish' },
                    { valor: 'c', texto: 'I live in Valencia, Spain' },
                    { valor: 'd', texto: 'I\'m single' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 Question: "Where do you live?" asks about your current residence/home. Answer: "I live in + city/country" (e.g., I live in Valencia, Spain). Remember: "I live in" = present residence (where you are NOW), different from "I\'m from" (origin/birth place).'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: '🎧 Question 4: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-9.mp3',
                opciones: [
                    { valor: 'a', texto: 'I\'m single' },
                    { valor: 'b', texto: 'I\'m married and I have two children' },
                    { valor: 'c', texto: 'I\'m a doctor' },
                    { valor: 'd', texto: 'I\'m 25 years old' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 Question: "Are you married? Do you have children?" asks about marital status and family. Answer: "I\'m married/single... and I have + number + children" OR "I don\'t have children". Remember: Use TO BE for marital status (I\'m married, NOT I have married), but use HAVE for children (I have two children).'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: '🎧 Question 5: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-10.mp3',
                opciones: [
                    { valor: 'a', texto: 'I\'m from England' },
                    { valor: 'b', texto: 'I\'m a teacher' },
                    { valor: 'c', texto: 'Nice to meet you too!' },
                    { valor: 'd', texto: 'I live in London' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 Statement: "Nice to meet you!" is a polite greeting when meeting someone for the first time. Response: "Nice to meet you too!" or "Pleased to meet you too!". Remember: This is used at the END of an introduction, after exchanging personal information. TOO = también (adding reciprocity).'
            }
        ],
        
        explicacion: '💡 Practice listening to questions about introducing yourself with the verb "To Be": nationality/origin (I\'m from...), nationality adjective (I\'m Spanish), residence (I live in...), marital status/family (I\'m married/I have...), and polite closings (Nice to meet you!). Cambridge English A1 level - "Introducing Yourself" vocabulary from your theory.'
    },

    {
        id: 76,
        tipo: 'text-multiple',
        pregunta: '📝 Read the affirmative sentences with "To Be" and write the transformations:',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>She is from London.</strong><br>Write the NEGATIVE form:',
                respuestaCorrecta: [
                    'She is not from London',
                    'She isn\'t from London',
                    'She\'s not from London',
                    'she is not from london',
                    'she isn\'t from london',
                    'she\'s not from london',
                    'She is not from london',
                    'She isn\'t from london'
                ],
                explicacion: '💡 Negative: "She is not from London" or "She isn\'t from London". Rule: TO BE + NOT = negative. Contractions: isn\'t (is not) or she\'s not.'
            },
            
            {
                id: 'b',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>She is from London.</strong><br>Write the INTERROGATIVE form:',
                respuestaCorrecta: [
                    'Is she from London?',
                    'Is she from London',
                    'is she from london?',
                    'is she from london',
                    'Is she from london?',
                    'Is she from london'
                ],
                explicacion: '💡 Interrogative: "Is she from London?". Rule: TO BE + SUBJECT + complement + ?. The verb moves to the beginning.'
            },
            
            {
                id: 'c',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>They are students at Cambridge University.</strong><br>Write the NEGATIVE form:',
                respuestaCorrecta: [
                    'They are not students at Cambridge University',
                    'They aren\'t students at Cambridge University',
                    'They\'re not students at Cambridge University',
                    'they are not students at cambridge university',
                    'they aren\'t students at cambridge university',
                    'they\'re not students at cambridge university'
                ],
                explicacion: '💡 Negative: "They are not students at Cambridge University" or "They aren\'t students at Cambridge University". THEY always uses ARE. Contractions: aren\'t or they\'re not.'
            },
            
            {
                id: 'd',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>They are students at Cambridge University.</strong><br>Write the INTERROGATIVE form:',
                respuestaCorrecta: [
                    'Are they students at Cambridge University?',
                    'Are they students at Cambridge University',
                    'are they students at cambridge university?',
                    'are they students at cambridge university'
                ],
                explicacion: '💡 Interrogative: "Are they students at Cambridge University?". Rule: ARE (verb) moves to the beginning of the sentence.'
            },
            
            {
                id: 'e',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>My brother is a doctor in Valencia.</strong><br>Write the NEGATIVE form:',
                respuestaCorrecta: [
                    'My brother is not a doctor in Valencia',
                    'My brother isn\'t a doctor in Valencia',
                    'my brother is not a doctor in valencia',
                    'my brother isn\'t a doctor in valencia',
                    'My brother is not a doctor in valencia',
                    'My brother isn\'t a doctor in valencia'
                ],
                explicacion: '💡 Negative: "My brother is not a doctor in Valencia" or "My brother isn\'t a doctor in Valencia". Noun subjects (my brother) work the same as pronouns.'
            },
            
            {
                id: 'f',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>My brother is a doctor in Valencia.</strong><br>Write the INTERROGATIVE form:',
                respuestaCorrecta: [
                    'Is my brother a doctor in Valencia?',
                    'Is my brother a doctor in Valencia',
                    'is my brother a doctor in valencia?',
                    'is my brother a doctor in valencia',
                    'Is my brother a doctor in valencia?',
                    'Is your brother a doctor in Valencia?',
                    'Is your brother a doctor in Valencia',
                    'is your brother a doctor in valencia?'
                ],
                explicacion: '💡 Interrogative: "Is my brother a doctor in Valencia?" or "Is your brother a doctor in Valencia?". You can change possessives in questions (my → your).'
            }
        ],
        
        explicacion: '💡 Practice transforming sentences with "To Be": AFFIRMATIVE → NEGATIVE (add NOT) → INTERROGATIVE (invert word order). Cambridge English A1-A2 grammar from your theory.'
    },

    {
        id: 77,
        tipo: 'audio-multiple',
        pregunta: '🎧 Listen to each question with the verb "To Be" and select the correct answer:',
        audioSrc: null,
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'radio',
                pregunta: '🎧 Question 1: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-1.mp3',
                opciones: [
                    { valor: 'a', texto: 'Yes, I am' },
                    { valor: 'b', texto: 'I am from Spain' },
                    { valor: 'c', texto: 'They are students' },
                    { valor: 'd', texto: 'It is hot' }
                ],
                respuestaCorrecta: 'b',
                explicacion: '💡 Question: "Where are you from?" asks about your origin/country. Answer: "I am from + country/city". Remember: WHERE = place/location.'
            },
            
            {
                id: 'b',
                tipo: 'radio',
                pregunta: '🎧 Question 2: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-2.mp3',
                opciones: [
                    { valor: 'a', texto: 'No, she isn\'t. She is a nurse' },
                    { valor: 'b', texto: 'Yes, he is' },
                    { valor: 'c', texto: 'They are happy' },
                    { valor: 'd', texto: 'I am tired' }
                ],
                respuestaCorrecta: 'a',
                explicacion: '💡 Question: "Is she a doctor?" is a Yes/No question. Answer: "Yes, she is" or "No, she isn\'t". We use SHE (not he!) to answer about a woman.'
            },
            
            {
                id: 'c',
                tipo: 'radio',
                pregunta: '🎧 Question 3: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-3.mp3',
                opciones: [
                    { valor: 'a', texto: 'Yes, it is' },
                    { valor: 'b', texto: 'I am 25 years old' },
                    { valor: 'c', texto: 'My name is Maria' },
                    { valor: 'd', texto: 'We are friends' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 Question: "What is your name?" asks for your name. Answer: "My name is + name" or "I am + name". Remember: WHAT = asking for information.'
            },
            
            {
                id: 'd',
                tipo: 'radio',
                pregunta: '🎧 Question 4: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-4.mp3',
                opciones: [
                    { valor: 'a', texto: 'Yes, they are' },
                    { valor: 'b', texto: 'He is tall' },
                    { valor: 'c', texto: 'I am not hungry' },
                    { valor: 'd', texto: 'She is beautiful' }
                ],
                respuestaCorrecta: 'a',
                explicacion: '💡 Question: "Are they from London?" is a Yes/No question with THEY. Answer: "Yes, they are" or "No, they aren\'t". Remember: THEY = plural, always use ARE.'
            },
            
            {
                id: 'e',
                tipo: 'radio',
                pregunta: '🎧 Question 5: Listen and choose the correct answer',
                audioSrc: '../../audios/t1/exams/week1/tobe-question-5.mp3',
                opciones: [
                    { valor: 'a', texto: 'I am from Spain' },
                    { valor: 'b', texto: 'Yes, I am' },
                    { valor: 'c', texto: 'I am 20 years old' },
                    { valor: 'd', texto: 'We are students' }
                ],
                respuestaCorrecta: 'c',
                explicacion: '💡 Question: "How old are you?" asks about your age. Answer: "I am + age + years old". Remember: In English, we use TO BE for age (I am 20), NOT "have" like in Spanish.'
            }
        ],
        
        explicacion: '💡 Practice listening to questions with the verb "To Be" and matching them with correct answers. This exercise covers: WHERE (place), Yes/No questions, WHAT (information), ARE THEY (plural), and HOW OLD (age). Cambridge English A1-A2 level essential grammar.'
    },

    {
        id: 78,
        tipo: 'text-multiple',
        pregunta: '📝 Read the affirmative sentences with "To Be" and write the transformations:',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>I am a teacher at a primary school.</strong><br>Write the NEGATIVE form:',
                respuestaCorrecta: [
                    'I am not a teacher at a primary school',
                    'I\'m not a teacher at a primary school',
                    'i am not a teacher at a primary school',
                    'i\'m not a teacher at a primary school',
                    'I am not a teacher at a Primary School',
                    'I\'m not a teacher at a Primary School'
                ],
                explicacion: '💡 Negative: "I am not a teacher at a primary school" or "I\'m not a teacher at a primary school". Rule: I + AM + NOT (no contraction for "I am not" → use "I\'m not"). Note: "I amn\'t" does NOT exist in English!'
            },
            
            {
                id: 'b',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>I am a teacher at a primary school.</strong><br>Write the INTERROGATIVE form:',
                respuestaCorrecta: [
                    'Am I a teacher at a primary school?',
                    'Am I a teacher at a primary school',
                    'am i a teacher at a primary school?',
                    'am i a teacher at a primary school',
                    'Am I a teacher at a Primary School?'
                ],
                explicacion: '💡 Interrogative: "Am I a teacher at a primary school?". Rule: AM + I + complement + ?. With "I", always use AM (not is/are). The verb moves to the beginning.'
            },
            
            {
                id: 'c',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>We are happy with the results of the exam.</strong><br>Write the NEGATIVE form:',
                respuestaCorrecta: [
                    'We are not happy with the results of the exam',
                    'We aren\'t happy with the results of the exam',
                    'We\'re not happy with the results of the exam',
                    'we are not happy with the results of the exam',
                    'we aren\'t happy with the results of the exam',
                    'we\'re not happy with the results of the exam'
                ],
                explicacion: '💡 Negative: "We are not happy with the results of the exam" or "We aren\'t happy with the results of the exam". WE always uses ARE. Contractions: aren\'t (are not) or we\'re not (we are not).'
            },
            
            {
                id: 'd',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>We are happy with the results of the exam.</strong><br>Write the INTERROGATIVE form:',
                respuestaCorrecta: [
                    'Are we happy with the results of the exam?',
                    'Are we happy with the results of the exam',
                    'are we happy with the results of the exam?',
                    'are we happy with the results of the exam',
                    'Are you happy with the results of the exam?',
                    'Are you happy with the results of the exam'
                ],
                explicacion: '💡 Interrogative: "Are we happy with the results of the exam?" or "Are you happy with the results of the exam?". Rule: ARE moves to the beginning. You can change WE → YOU when asking a question (perspective change).'
            },
            
            {
                id: 'e',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>The weather is nice and sunny today.</strong><br>Write the NEGATIVE form:',
                respuestaCorrecta: [
                    'The weather is not nice and sunny today',
                    'The weather isn\'t nice and sunny today',
                    'the weather is not nice and sunny today',
                    'the weather isn\'t nice and sunny today',
                    'The weather is not nice and sunny Today'
                ],
                explicacion: '💡 Negative: "The weather is not nice and sunny today" or "The weather isn\'t nice and sunny today". Rule: Noun subjects (the weather) + IS + NOT. Contraction: isn\'t (is not). Weather = IT (singular).'
            },
            
            {
                id: 'f',
                tipo: 'text',
                pregunta: '📝 Affirmative: <strong>The weather is nice and sunny today.</strong><br>Write the INTERROGATIVE form:',
                respuestaCorrecta: [
                    'Is the weather nice and sunny today?',
                    'Is the weather nice and sunny today',
                    'is the weather nice and sunny today?',
                    'is the weather nice and sunny today',
                    'Is the weather nice and sunny Today?'
                ],
                explicacion: '💡 Interrogative: "Is the weather nice and sunny today?". Rule: IS + SUBJECT + complement + ?. The verb IS moves to the beginning of the sentence. Weather = IT, so use IS (not are).'
            }
        ],
        
        explicacion: '💡 Practice transforming sentences with "To Be": AFFIRMATIVE → NEGATIVE (add NOT) → INTERROGATIVE (invert word order). This exercise covers: I am/Am I (special case), We are/Are we, noun subjects (the weather). Cambridge English A1-A2 grammar from your theory.'
    },

    {
        id: 79,
        tipo: 'text-multiple',
        pregunta: '📝 Replace the underlined noun phrases with the correct subject pronoun (it, we, they, you):',
        
        subpreguntas: [
            {
                id: 'a',
                tipo: 'text',
                pregunta: '📝 <strong><u>The book</u> is on the table.</strong><br>Replace with a pronoun: _____ is on the table.',
                respuestaCorrecta: [
                    'It',
                    'it',
                    'IT'
                ],
                explicacion: '💡 Answer: "It is on the table". Rule: Use IT for things and objects (singular). "The book" = one object = IT. Remember: IT is used for animals, objects, and things (not people).'
            },
            
            {
                id: 'b',
                tipo: 'text',
                pregunta: '📝 <strong><u>My friends and I</u> are from Spain.</strong><br>Replace with a pronoun: _____ are from Spain.',
                respuestaCorrecta: [
                    'We',
                    'we',
                    'WE'
                ],
                explicacion: '💡 Answer: "We are from Spain". Rule: Use WE for "speaker + other people". "My friends and I" = I + other people = WE. Remember: WE always uses ARE (not am/is).'
            },
            
            {
                id: 'c',
                tipo: 'text',
                pregunta: '📝 <strong><u>The students</u> are in the classroom.</strong><br>Replace with a pronoun: _____ are in the classroom.',
                respuestaCorrecta: [
                    'They',
                    'they',
                    'THEY'
                ],
                explicacion: '💡 Answer: "They are in the classroom". Rule: Use THEY for plural people or things (more than one). "The students" = plural people = THEY. Remember: THEY always uses ARE (not is).'
            },
            
            {
                id: 'd',
                tipo: 'text',
                pregunta: '📝 <strong><u>Tom and Sarah</u> are my neighbours.</strong><br>Replace with a pronoun: _____ are my neighbours.',
                respuestaCorrecta: [
                    'They',
                    'they',
                    'THEY'
                ],
                explicacion: '💡 Answer: "They are my neighbours". Rule: Use THEY for two or more people (plural). "Tom and Sarah" = 2 people = THEY. Remember: Names of multiple people = THEY (not he/she).'
            },
            
            {
                id: 'e',
                tipo: 'text',
                pregunta: '📝 <strong><u>You and your brother</u> are very tall.</strong><br>Replace with a pronoun: _____ are very tall.',
                respuestaCorrecta: [
                    'You',
                    'you',
                    'YOU'
                ],
                explicacion: '💡 Answer: "You are very tall". Rule: Use YOU (plural) when talking to two or more people. "You and your brother" = 2 people being addressed = YOU (plural). Remember: YOU is the same for singular and plural in English!'
            }
        ],
        
        explicacion: '💡 Practice replacing noun phrases with subject pronouns: IT (things/objects), WE (I + others), THEY (plural people/things), YOU (plural - addressing 2+ people). Cambridge English A1 grammar - Subject Pronouns from your theory.'
    },

    {
        id: 80,
        tipo: 'select',
        pregunta: 'Complete the question: "_____ they from London?"',
        opciones: [
            { valor: 'a', texto: 'Am' },
            { valor: 'b', texto: 'Is' },
            { valor: 'c', texto: 'Are' },
            { valor: 'd', texto: 'Be' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 They → ARE. Question: ARE they from London?'
    },

    {
        id: 81,
        tipo: 'radio',
        pregunta: 'What\'s the contraction of "We are"?',
        opciones: [
            { valor: 'a', texto: 'We\'m' },
            { valor: 'b', texto: 'We\'re' },
            { valor: 'c', texto: 'We\'s' },
            { valor: 'd', texto: 'Were' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 We are = We\'re (NOT "were" which is past tense)'
    },

    {
        id: 82,
        tipo: 'text',
        pregunta: 'Complete: "The book _____ interesting" (singular thing)',
        respuestaCorrecta: ['is'],
        explicacion: '💡 The book (it) → IS interesting'
    },

    {
        id: 83,
        tipo: 'checkbox',
        pregunta: 'Which questions are grammatically correct?',
        opciones: [
            { valor: 'a', texto: 'Is she Spanish?' },
            { valor: 'b', texto: 'Are you from UK?' },
            { valor: 'c', texto: 'Am I late?' },
            { valor: 'd', texto: 'Is they students?' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 Correct questions with TO BE inversion. WRONG: "Is they" → "Are they"'
    },

    {
        id: 84,
        tipo: 'ordering',
        pregunta: '📝 Put the words in the correct order to make a NEGATIVE sentence with "To Be":',
        palabras: ['My', 'parents', 'are', 'not', 'happy', 'with', 'the', 'results', 'of', 'my', 'exam'],
        respuestaCorrecta: ['My', 'parents', 'are', 'not', 'happy', 'with', 'the', 'results', 'of', 'my', 'exam'],
        explicacion: '💡 Correct sentence: "My parents are not happy with the results of my exam." Negative structure: SUBJECT + TO BE + NOT + COMPLEMENT. Remember: "are not" can be contracted to "aren\'t". This is Cambridge English A1-A2 grammar. The word order in negative sentences is: Subject + Verb (TO BE) + NOT + Rest of sentence.'
    },

    {
        id: 85,
        tipo: 'ordering',
        pregunta: '📝 Put the words in the correct order to make an INTERROGATIVE sentence (question) with "To Be":',
        palabras: ['Are', 'you', 'ready', 'for', 'the', 'English', 'test', 'tomorrow', '?'],
        respuestaCorrecta: ['Are', 'you', 'ready', 'for', 'the', 'English', 'test', 'tomorrow', '?'],
        explicacion: '💡 Correct question: "Are you ready for the English test tomorrow?" Interrogative structure: TO BE + SUBJECT + COMPLEMENT + ?. Remember: In questions, the verb "are" moves to the BEGINNING of the sentence. This is Cambridge English A1-A2 grammar. Don\'t forget the question mark (?) at the end!'
    },
  
    {
        id: 86,
        tipo: 'radio',
        pregunta: '📝 When do we use "Good night"?',
        opciones: [
            { valor: 'a', texto: 'When arriving at a party at 9:00 PM' },
            { valor: 'b', texto: 'When entering a restaurant at 8:00 PM' },
            { valor: 'c', texto: 'When saying goodbye before going to bed' },
            { valor: 'd', texto: 'When meeting someone in the evening' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 Answer: "Good night" is ONLY used when saying goodbye before going to bed or leaving late at night. It is NOT a greeting! Common mistake: Using "Good night" when arriving somewhere at night → WRONG. Correct: Use "Good evening" when arriving (greeting). Use "Good night" when leaving (farewell). Cambridge English A1 based on your Greetings theory.'
    },

    {
        id: 87,
        tipo: 'radio',
        pregunta: '📝 It is 8:00 PM and you are entering a restaurant. What is the CORRECT greeting to say?',
        opciones: [
            { valor: 'a', texto: 'Good morning' },
            { valor: 'b', texto: 'Good afternoon' },
            { valor: 'c', texto: 'Good evening' },
            { valor: 'd', texto: 'Good night' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 Answer: "Good evening" (6:00 PM - midnight). IMPORTANT: "Good night" is NOT a greeting! It is only used when saying GOODBYE before going to bed or leaving late at night. When you ARRIVE somewhere in the evening, always use "Good evening". Greetings by time: "Good morning" (00:00-12:00), "Good afternoon" (12:00-18:00), "Good evening" (18:00-midnight for arrivals). Cambridge English A1 vocabulary based on your theory.'
    },

    {
        id: 88,
        tipo: 'checkbox',
        pregunta: 'Which are appropriate responses to "How are you?"',
        opciones: [
            { valor: 'a', texto: 'I\'m fine, thanks' },
            { valor: 'b', texto: 'Very well, thank you' },
            { valor: 'c', texto: 'I have 30 years' },
            { valor: 'd', texto: 'Good, and you?' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Correct responses: I\'m fine/Very well/Good. WRONG: "I have 30 years" (that\'s for age)'
    },

    {
        id: 89,
        tipo: 'select',
        pregunta: 'When do you say "Nice to meet you"?',
        opciones: [
            { valor: 'a', texto: 'Every time you see someone' },
            { valor: 'b', texto: 'When you meet someone for the first time' },
            { valor: 'c', texto: 'When you say goodbye' },
            { valor: 'd', texto: 'When you\'re angry' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Nice to meet you" = Encantado de conocerte (FIRST time meeting)'
    },

    {
        id: 90,
        tipo: 'radio',
        pregunta: 'How do you ask someone\'s age in English?',
        opciones: [
            { valor: 'a', texto: 'How many years do you have?' },
            { valor: 'b', texto: 'How old are you?' },
            { valor: 'c', texto: 'What years you have?' },
            { valor: 'd', texto: 'How age are you?' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Correct: "How old are you?". NOT "How many years do you have?" (that\'s Spanish structure)'
    },

    {
        id: 91,
        tipo: 'text',
        pregunta: 'Complete: "I _____ 25 years old" (age)',
        respuestaCorrecta: ['am', '\'m'],
        explicacion: '💡 In English: I AM 25 years old (use TO BE, not HAVE)'
    },

    {
        id: 92,
        tipo: 'checkbox',
        pregunta: '📝 Which expressions are used when saying GOODBYE in English? (Select all correct answers)',
        opciones: [
            { valor: 'a', texto: 'Good morning' },
            { valor: 'b', texto: 'Goodbye' },
            { valor: 'c', texto: 'See you later' },
            { valor: 'd', texto: 'Good night' }
        ],
        respuestaCorrecta: ['b', 'c', 'd'],
        explicacion: '💡 Correct farewells: "Goodbye" (general), "See you later" (informal), "Good night" (ONLY when leaving, NOT when arriving!). Wrong: "Good morning" is a GREETING (when arriving), not a farewell. Remember: "Good night" is used ONLY for saying goodbye before going to bed or leaving late at night. Cambridge English A1 from your Greetings theory.'
    },

    {
        id: 93,
        tipo: 'select',
        pregunta: 'What\'s the correct way to introduce yourself?',
        opciones: [
            { valor: 'a', texto: 'I have John' },
            { valor: 'b', texto: 'My name is John' },
            { valor: 'c', texto: 'I call John' },
            { valor: 'd', texto: 'I\'m name John' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "My name is..." or "I\'m..." are correct. NOT "I have" or "I call"'
    },

    {
        id: 94,
        tipo: 'radio',
        pregunta: 'How do you respond to "Thank you"?',
        opciones: [
            { valor: 'a', texto: 'Yes' },
            { valor: 'b', texto: 'You\'re welcome' },
            { valor: 'c', texto: 'Please' },
            { valor: 'd', texto: 'Hello' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "You\'re welcome" = De nada. Also: "No problem", "My pleasure"'
    },

    {
        id: 95,
        tipo: 'text',
        pregunta: 'What do you say at night before sleeping?',
        respuestaCorrecta: ['good night', 'goodnight', 'night'],
        explicacion: '💡 "Good night" is used when going to bed or leaving late at night'
    },

    {
        id: 96,
        tipo: 'checkbox',
        pregunta: 'Which questions ask for personal information?',
        opciones: [
            { valor: 'a', texto: 'What\'s your name?' },
            { valor: 'b', texto: 'Where are you from?' },
            { valor: 'c', texto: 'What\'s the time?' },
            { valor: 'd', texto: 'How old are you?' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Personal info questions: name, origin, age. "What\'s the time?" asks about the clock.'
    },

    {
        id: 97,
        tipo: 'select',
        pregunta: 'What time do you say "Good afternoon"?',
        opciones: [
            { valor: 'a', texto: 'Morning (6-12)' },
            { valor: 'b', texto: 'Afternoon (12-18)' },
            { valor: 'c', texto: 'Evening (18-22)' },
            { valor: 'd', texto: 'Night (22-6)' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Good afternoon" = 12pm-6pm approximately'
    },

    {
        id: 98,
        tipo: 'radio',
        pregunta: 'What does "Where are you from?" mean?',
        opciones: [
            { valor: 'a', texto: '¿Cómo te llamas?' },
            { valor: 'b', texto: '¿De dónde eres?' },
            { valor: 'c', texto: '¿Cuántos años tienes?' },
            { valor: 'd', texto: '¿Dónde vives?' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Where are you from?" = ¿De dónde eres? (nationality/origin)'
    },

    {
        id: 99,
        tipo: 'text',
        pregunta: 'How do you say goodbye informally? (short form)',
        respuestaCorrecta: ['bye', 'goodbye', 'see you'],
        explicacion: '💡 Informal: Bye, See you. Formal: Goodbye, Have a nice day'
    },

    {
        id: 100,
        tipo: 'checkbox',
        pregunta: 'Which are correct ways to say your nationality?',
        opciones: [
            { valor: 'a', texto: 'I\'m Spanish' },
            { valor: 'b', texto: 'I\'m from Spain' },
            { valor: 'c', texto: 'I have Spanish' },
            { valor: 'd', texto: 'I am Spain' }
        ],
        respuestaCorrecta: ['a', 'b'],
        explicacion: '💡 Correct: "I\'m Spanish" (nationality) or "I\'m from Spain" (origin). WRONG: "I have Spanish" or "I am Spain"'
    },

    {
        id: 101,
        tipo: 'true-false',
        pregunta: 'The UK uses "Postcode" instead of "ZIP code"',
        respuestaCorrecta: 'true',
        explicacion: '💡 Correct! UK uses "Postcode", while "ZIP code" is American English.'
    },

    {
        id: 102,
        tipo: 'true-false',
        pregunta: 'The pronoun "I" is always written in lowercase',
        respuestaCorrecta: 'false',
        explicacion: '💡 False! "I" is ALWAYS capitalized in English.'
    },

    {
        id: 103,
        tipo: 'fill-blanks',
        pregunta: 'Complete: "My name _____ John and I _____ 25 years old"',
        blanks: ['is', 'am'],
        respuestaCorrecta: ['is', 'am'],
        explicacion: '💡 "My name IS John and I AM 25 years old"'
    },

    {
        id: 104,
        tipo: 'fill-blanks',
        pregunta: 'Complete: "_____ are students and _____ are from Spain"',
        blanks: ['they', 'they'],
        respuestaCorrecta: ['they', 'they'],
        explicacion: '💡 "THEY are students and THEY are from Spain"'
    },

    {
        id: 105,
        tipo: 'matching',
        pregunta: 'Match the English words with their Spanish translations:',
        parejas: [
            { id: 'A', izquierda: 'Surname', opciones: ['Apellido', 'Nombre', 'Dirección'] },
            { id: 'B', izquierda: 'Address', opciones: ['Apellido', 'Nombre', 'Dirección'] },
            { id: 'C', izquierda: 'Postcode', opciones: ['Código postal', 'Teléfono', 'Email'] }
        ],
        respuestaCorrecta: { 'A': 'Apellido', 'B': 'Dirección', 'C': 'Código postal' },
        explicacion: '💡 Surname=Apellido, Address=Dirección, Postcode=Código postal'
    },

    {
        id: 106,
        tipo: 'matching',
        pregunta: 'Match the pronouns with their Spanish translation:',
        parejas: [
            { id: 'A', izquierda: 'I', opciones: ['Yo', 'Tú', 'Él'] },
            { id: 'B', izquierda: 'You', opciones: ['Yo', 'Tú', 'Él'] },
            { id: 'C', izquierda: 'He', opciones: ['Yo', 'Tú', 'Él'] }
        ],
        respuestaCorrecta: { 'A': 'Yo', 'B': 'Tú', 'C': 'Él' },
        explicacion: '💡 I=Yo, You=Tú, He=Él'
    },

    {
        id: 107,
        tipo: 'sentence-ordering',
        pregunta: 'Put the words in the correct order to make a NEGATIVE sentence:',
        palabras: ['is', 'brother', 'Valencia', 'My', 'in', 'doctor', 'a', 'not'],
        respuestaCorrecta: ['My', 'brother', 'is', 'not', 'a', 'doctor', 'in', 'Valencia'],
        explicacion: '💡 Correct order: "My brother is not a doctor in Valencia". NEGATIVE structure with TO BE: SUBJECT + TO BE + NOT + COMPLEMENT. Remember: You can use the contraction "isn\'t" instead of "is not". This is Cambridge English A1-A2 grammar. Word order in negative sentences: Subject + Verb (TO BE) + NOT + Rest of sentence. Based on British Council and your TO BE theory.'
    },

    {
        id: 108,
        tipo: 'sentence-ordering',
        pregunta: 'Order these words to form a correct QUESTION with "To Be":',
        palabras: ['at', 'they', 'Cambridge', 'Are', 'students', 'University', '?'],
        respuestaCorrecta: ['Are', 'they', 'students', 'at', 'Cambridge', 'University', '?'],
        explicacion: '💡 Correct question: "Are they students at Cambridge University?" INTERROGATIVE structure with TO BE: TO BE + SUBJECT + COMPLEMENT + ?. Remember: The verb "are" moves to the BEGINNING of the sentence to form a question. Don\'t forget the question mark (?) at the end! This is Cambridge English A1-A2 grammar. Based on Grammarly, Promova, and your TO BE theory.'
    },

    {
        id: 109,
        tipo: 'sentence-ordering',
        pregunta: 'Put the words in the correct order to make a NEGATIVE QUESTION with "To Be":',
        palabras: ['not', 'results', 'Are', 'the', 'with', 'happy', 'they', '?'],
        respuestaCorrecta: ['Are', 'they', 'not', 'happy', 'with', 'the', 'results', '?'],
        explicacion: '💡 Correct question: "Are they not happy with the results?" NEGATIVE INTERROGATIVE structure: TO BE + SUBJECT + NOT + COMPLEMENT + ?. This is also called "interro-negative sentence". In spoken English, we usually use the contracted form: "Aren\'t they happy with the results?" (more natural). Negative questions are used to: 1) Confirm what we think is true, 2) Show surprise, 3) Express emphasis. Remember: The verb "are" moves to the BEGINNING (like all questions), but we add "not" after the subject. Cambridge English A1-A2 grammar based on British Council, The Free Dictionary, and your TO BE theory.'
    },

    {
        id: 110,
        tipo: 'true-false',
        pregunta: 'The pronoun "It" is only used for animals',
        respuestaCorrecta: 'false',
        explicacion: '💡 False! "It" is used for things, animals, and when gender is unknown.'
    },

    {
        id: 111,
        tipo: 'fill-blanks',
        pregunta: 'Complete with pronouns: "_____ is a doctor. _____ works in a hospital"',
        blanks: ['she', 'she'],
        respuestaCorrecta: ['she', 'she'],
        explicacion: '💡 "SHE is a doctor. SHE works in a hospital" (or He/He)'
    },

    {
        id: 112,
        tipo: 'matching',
        pregunta: 'Match the titles with their meaning:',
        parejas: [
            { id: 'A', izquierda: 'Mr.', opciones: ['Señor', 'Señora', 'Señorita'] },
            { id: 'B', izquierda: 'Mrs.', opciones: ['Señor', 'Señora', 'Señorita'] },
            { id: 'C', izquierda: 'Miss', opciones: ['Señor', 'Señora', 'Señorita'] }
        ],
        respuestaCorrecta: { 'A': 'Señor', 'B': 'Señora', 'C': 'Señorita' },
        explicacion: '💡 Mr.=Señor, Mrs.=Señora (casada), Miss=Señorita (soltera)'
    },

    {
        id: 113,
        tipo: 'sentence-ordering',
        pregunta: 'Order the words correctly to make a NEGATIVE QUESTION with "To Be":',
        palabras: ['not', 'the', 'weather', 'today', '?', 'Is', 'sunny'],
        respuestaCorrecta: ['Is', 'the', 'weather', 'not', 'sunny', 'today', '?'],
        explicacion: '💡 Correct question: "Is the weather not sunny today?" NEGATIVE INTERROGATIVE structure: TO BE + SUBJECT + NOT + ADJECTIVE + TIME + ?. This type of question expresses surprise or expects a "yes" answer. More common contracted form: "Isn\'t the weather sunny today?" Remember: The weather = IT (singular) → uses IS (not are). Negative questions are used to: 1) Show surprise, 2) Confirm what we think is true, 3) Express emphasis. Based on British Council, The Free Dictionary, and your TO BE theory.'
    },

    {
        id: 114,
        tipo: 'true-false',
        pregunta: '"DOB" stands for "Date of Birth"',
        respuestaCorrecta: 'true',
        explicacion: '💡 Correct! DOB = Date of Birth (Fecha de nacimiento)'
    },

    {
        id: 115,
        tipo: 'fill-blanks',
        pregunta: 'Complete the alphabet: A, B, C, _____, E, _____, G',
        blanks: ['d', 'f'],
        respuestaCorrecta: ['d', 'f'],
        explicacion: '💡 A, B, C, D, E, F, G'
    },

    {
        id: 116,
        tipo: 'matching',
        pregunta: 'Match each negative form with its correct contraction:',
        parejas: [
            { izquierda: 'I am not', derecha: 'I\'m not' },
            { izquierda: 'You are not', derecha: 'You aren\'t' },
            { izquierda: 'He is not', derecha: 'He isn\'t' },
            { izquierda: 'We are not', derecha: 'We aren\'t' },
            { izquierda: 'They are not', derecha: 'They aren\'t' }
        ],
        respuestaCorrecta: {
            'I am not': 'I\'m not',
            'You are not': 'You aren\'t',
            'He is not': 'He isn\'t',
            'We are not': 'We aren\'t',
            'They are not': 'They aren\'t'
        },
        explicacion: '💡 Negative contractions with TO BE: I am not = I\'m not (NO existe "I amn\'t"), You are not = You aren\'t, He/She/It is not = He/She/It isn\'t, We are not = We aren\'t, They are not = They aren\'t. IMPORTANT: "I am not" can ONLY contract as "I\'m not", never as "I amn\'t" (this form does NOT exist!). Cambridge English A1-A2 based on ABA English, Dímelo en Inglés, FluentU, and your theory.'
    },

    {
        id: 117,
        tipo: 'sentence-ordering',
        pregunta: 'Order the words correctly to make a NEGATIVE sentence with "To Be":',
        palabras: ['parents', 'not', 'My', 'happy', 'are', 'with', 'exam', 'the', 'results', 'my', 'of'],
        respuestaCorrecta: ['My', 'parents', 'are', 'not', 'happy', 'with', 'the', 'results', 'of', 'my', 'exam'],
        explicacion: '💡 Correct sentence: "My parents are not happy with the results of my exam". NEGATIVE structure: SUBJECT (My parents) + TO BE (are) + NOT + ADJECTIVE (happy) + PREPOSITIONAL PHRASES (with the results / of my exam). Remember: "My parents" = THEY (plural) → uses ARE (not is). You can use the contraction: "My parents aren\'t happy with the results of my exam". Word order in negative sentences: Subject + Verb (TO BE) + NOT + Rest of sentence. Cambridge English A1-A2 based on British Council, PrepEdu, and your theory.'
    },

    {
        id: 118,
        tipo: 'true-false',
        pregunta: 'UK mobile numbers start with 07',
        respuestaCorrecta: 'true',
        explicacion: '💡 Correct! UK mobile numbers begin with 07'
    },

    {
        id: 119,
        tipo: 'fill-blanks',
        pregunta: 'Complete the sentence with the correct forms of TO BE: "My sister _____ a teacher at Cambridge University and she _____ very happy with her job"',
        blanks: 2,
        respuestaCorrecta: [
            ['is', 'Is', 'IS', '\'s', 's'],
            ['is', 'Is', 'IS', '\'s', 's']
        ],
        explicacion: '💡 Correct sentence: "My sister IS a teacher at Cambridge University and she IS very happy with her job". Subject "My sister" = SHE (singular, 3rd person) → uses IS (not am/are). Remember: he/she/it → IS. You can also use contractions: "My sister\'s a teacher..." and "she\'s very happy...". This is Cambridge English A1-A2 grammar about occupations, workplaces, and feelings. Based on British Council, Grammarly, and your TO BE theory.'
    },

    {
        id: 120,
        tipo: 'matching',
        pregunta: 'Match the question words:',
        parejas: [
            { id: 'A', izquierda: 'What', opciones: ['Qué', 'Dónde', 'Cuándo'] },
            { id: 'B', izquierda: 'Where', opciones: ['Qué', 'Dónde', 'Cuándo'] },
            { id: 'C', izquierda: 'When', opciones: ['Qué', 'Dónde', 'Cuándo'] }
        ],
        respuestaCorrecta: { 'A': 'Qué', 'B': 'Dónde', 'C': 'Cuándo' },
        explicacion: '💡 What=Qué, Where=Dónde, When=Cuándo'
    },

    {
        id: 121,
        tipo: 'sentence-ordering',
        pregunta: 'Put the words in order to make an INTERROGATIVE sentence (question) with "To Be":',
        palabras: ['teacher', 'at', 'Is', 'your', 'satisfied', 'Cambridge', 'University', 'with', 'work', 'your', '?'],
        respuestaCorrecta: ['Is', 'your', 'teacher', 'at', 'Cambridge', 'University', 'satisfied', 'with', 'your', 'work', '?'],
        explicacion: '💡 Correct question: "Is your teacher at Cambridge University satisfied with your work?" INTERROGATIVE structure with TO BE: TO BE (Is) + SUBJECT (your teacher at Cambridge University) + ADJECTIVE (satisfied) + PREPOSITIONAL PHRASE (with your work) + ?. Remember: In questions, the verb TO BE moves to the BEGINNING of the sentence. "Your teacher" = HE or SHE (singular) → uses IS (not are). Don\'t forget the question mark (?) at the end! Cambridge English A1-A2 grammar based on Grammarly, Promova, EnglishClub, and your theory.'
    },

    {
        id: 122,
        tipo: 'true-false',
        pregunta: 'The symbol @ is called "at" in English',
        respuestaCorrecta: 'true',
        explicacion: '💡 Correct! @ = "at" or "at sign"'
    },

    {
        id: 123,
        tipo: 'fill-blanks',
        pregunta: 'Complete the personal data: First name: John, _____ name: Smith, _____: 25',
        blanks: ['last', 'age'],
        respuestaCorrecta: ['last', 'age'],
        explicacion: '💡 Last name (surname) and Age are common personal data fields'
    },

    {
        id: 124,
        tipo: 'true-false',
        pregunta: 'With the pronouns HE, SHE, and IT, we always use the form IS of the verb TO BE',
        respuestaCorrecta: 'true',
        explicacion: '💡 TRUE! He, She, and It are singular third person pronouns and ALWAYS use IS. Examples: He is a teacher, She is happy, It is cold. Remember the rule: I → AM, He/She/It → IS, You/We/They → ARE. This is called subject-verb agreement. Cambridge English A1 fundamental grammar based on Grammarly, Promova, Lingokids, and your TO BE theory.'
    },

    {
        id: 125,
        tipo: 'sentence-ordering',
        pregunta: 'Order the words correctly to make a complete sentence:',
        palabras: ['from', 'am', 'I', 'Valencia', 'Spain', 'but', 'in', 'Madrid', 'I', 'live'],
        respuestaCorrecta: ['I', 'am', 'from', 'Valencia', 'Spain', 'but', 'I', 'live', 'in', 'Madrid'],
        explicacion: '💡 Correct sentence: "I am from Valencia Spain but I live in Madrid". Structure: SUBJECT + TO BE + FROM + CITY + COUNTRY + BUT + SUBJECT + LIVE + IN + CITY. This sentence combines origin (where you are from) and residence (where you live now). Remember: TO BE + FROM = origin/birth place, LIVE + IN = current residence. Use FROM with country/city (I am from Spain). Use IN with city for residence (I live in Madrid). Cambridge English A1-A2 based on Woodward English, your "Introducing Yourself" theory, and "I live in..." structure.'
    },

];

// Función para obtener 20 preguntas aleatorias
window.obtenerPreguntasAleatorias = function() {
    const banco = [...window.bancoPreguntasExamen];
    const seleccionadas = [];
    
    // Si hay menos de 20 preguntas, devolver todas
    const numPreguntas = Math.min(20, banco.length);
    
    for (let i = 0; i < numPreguntas; i++) {
        const indiceAleatorio = Math.floor(Math.random() * banco.length);
        seleccionadas.push(banco[indiceAleatorio]);
        banco.splice(indiceAleatorio, 1);
    }
    
    return seleccionadas;
};

console.log('✅ Banco de preguntas cargado:', window.bancoPreguntasExamen.length, 'preguntas disponibles');
