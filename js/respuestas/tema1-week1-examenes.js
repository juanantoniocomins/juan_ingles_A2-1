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
        tipo: 'checkbox',
        pregunta: 'Which of these are valid UK mobile phone prefixes?',
        opciones: [
            { valor: 'a', texto: '07' },
            { valor: 'b', texto: '01' },
            { valor: 'c', texto: '08' },
            { valor: 'd', texto: '09' }
        ],
        respuestaCorrecta: ['a'],
        explicacion: '💡 UK mobile numbers start with 07. Example: 07700 900123'
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
        tipo: 'text',
        pregunta: 'What symbol is ALWAYS in an email address?',
        respuestaCorrecta: ['@', 'at', 'arroba'],
        explicacion: '💡 Valid emails must contain @ (at symbol) and a domain (.com, .org, etc.)'
    },
    
    {
        id: 8,
        tipo: 'checkbox',
        pregunta: 'Which fields are typically required in a registration form?',
        opciones: [
            { valor: 'a', texto: 'Full name' },
            { valor: 'b', texto: 'Email' },
            { valor: 'c', texto: 'Shoe size' },
            { valor: 'd', texto: 'Password' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Required fields usually include: name, email, and password. Shoe size is not essential.'
    },
    
    {
        id: 9,
        tipo: 'radio',
        pregunta: 'What does "Marital Status" mean?',
        opciones: [
            { valor: 'a', texto: 'Work status' },
            { valor: 'b', texto: 'Civil status (single/married)' },
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
        tipo: 'text',
        pregunta: 'Write an example of a UK postcode (e.g., SW1A 1AA)',
        respuestaCorrecta: ['postcode', 'code', 'sw', 'ec', 'w1'],
        explicacion: '💡 UK postcodes have format like: SW1A 1AA, EC1A 1BB, W1A 0AX'
    },

    {
        id: 12,
        tipo: 'radio',
        pregunta: 'What information is NOT usually in a basic contact form?',
        opciones: [
            { valor: 'a', texto: 'Name' },
            { valor: 'b', texto: 'Email' },
            { valor: 'c', texto: 'Blood type' },
            { valor: 'd', texto: 'Phone' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 Blood type is medical information, not included in basic contact forms.'
    },

    {
        id: 13,
        tipo: 'checkbox',
        pregunta: 'Which are valid email domain extensions?',
        opciones: [
            { valor: 'a', texto: '.com' },
            { valor: 'b', texto: '.co.uk' },
            { valor: 'c', texto: '.xyz' },
            { valor: 'd', texto: '.hello' }
        ],
        respuestaCorrecta: ['a', 'b'],
        explicacion: '💡 .com and .co.uk are standard. .xyz exists but is uncommon. .hello is not valid.'
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
        tipo: 'checkbox',
        pregunta: 'Which pieces of information identify you personally?',
        opciones: [
            { valor: 'a', texto: 'Full name' },
            { valor: 'b', texto: 'Date of birth' },
            { valor: 'c', texto: 'Favorite color' },
            { valor: 'd', texto: 'National ID number' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Personal identification includes: name, DOB, ID number. Not favorite color.'
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
        tipo: 'text',
        pregunta: 'What does "landline" mean? (teléfono fijo)',
        respuestaCorrecta: ['fijo', 'fixed', 'home', 'landline'],
        explicacion: '💡 Landline = teléfono fijo (home phone), as opposed to mobile/cell phone'
    },

    {
        id: 22,
        tipo: 'radio',
        pregunta: 'What\'s the British English word for "apartment"?',
        opciones: [
            { valor: 'a', texto: 'House' },
            { valor: 'b', texto: 'Flat' },
            { valor: 'c', texto: 'Suite' },
            { valor: 'd', texto: 'Room' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Flat (UK) = Apartment (US)'
    },

    {
        id: 23,
        tipo: 'select',
        pregunta: 'What does "Signature" mean in forms?',
        opciones: [
            { valor: 'a', texto: 'Your photo' },
            { valor: 'b', texto: 'Your handwritten name' },
            { valor: 'c', texto: 'Your email' },
            { valor: 'd', texto: 'Your phone' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Signature" = Firma (your handwritten name to confirm/authenticate)'
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

    // ============================================
    // ALFABETO Y SPELLING (20 preguntas)
    // ============================================
    
    {
        id: 26,
        tipo: 'text',
        pregunta: 'How many letters are in the English alphabet?',
        respuestaCorrecta: ['26', 'twenty-six', 'twenty six', 'twentysix'],
        explicacion: '💡 The English alphabet has 26 letters (A-Z)'
    },

    {
        id: 27,
        tipo: 'radio',
        pregunta: 'Which letter comes after "M" in the alphabet?',
        opciones: [
            { valor: 'a', texto: 'L' },
            { valor: 'b', texto: 'N' },
            { valor: 'c', texto: 'O' },
            { valor: 'd', texto: 'K' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Alphabet order: ... K, L, M, N, O, P ...'
    },

    {
        id: 28,
        tipo: 'checkbox',
        pregunta: 'Which are vowels in English?',
        opciones: [
            { valor: 'a', texto: 'A' },
            { valor: 'b', texto: 'E' },
            { valor: 'c', texto: 'B' },
            { valor: 'd', texto: 'I' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 English vowels: A, E, I, O, U (B is a consonant)'
    },

    {
        id: 29,
        tipo: 'select',
        pregunta: 'How do you spell "HELLO" over the phone clearly?',
        opciones: [
            { valor: 'a', texto: 'H-E-L-L-O' },
            { valor: 'b', texto: 'Hello' },
            { valor: 'c', texto: 'HELLO' },
            { valor: 'd', texto: 'H.E.L.L.O' }
        ],
        respuestaCorrecta: 'a',
        explicacion: '💡 Spell letter by letter with hyphens: H-E-L-L-O (or use NATO phonetic alphabet)'
    },

    {
        id: 30,
        tipo: 'text',
        pregunta: 'What is the first letter of the alphabet?',
        respuestaCorrecta: ['a'],
        explicacion: '💡 The alphabet starts with A and ends with Z'
    },

    {
        id: 31,
        tipo: 'radio',
        pregunta: 'What does "double L" mean when spelling?',
        opciones: [
            { valor: 'a', texto: 'One L' },
            { valor: 'b', texto: 'Two Ls' },
            { valor: 'c', texto: 'Three Ls' },
            { valor: 'd', texto: 'No L' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Double L" = LL (two L letters). Example: "Hello" has double-L'
    },

    {
        id: 32,
        tipo: 'text',
        pregunta: 'Write the last letter of the alphabet',
        respuestaCorrecta: ['z'],
        explicacion: '💡 Z is the last (26th) letter of the alphabet'
    },

    {
        id: 33,
        tipo: 'checkbox',
        pregunta: 'Which letters are consonants?',
        opciones: [
            { valor: 'a', texto: 'B' },
            { valor: 'b', texto: 'C' },
            { valor: 'c', texto: 'A' },
            { valor: 'd', texto: 'D' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Consonants are all letters except vowels (A,E,I,O,U). B, C, D are consonants.'
    },

    {
        id: 34,
        tipo: 'select',
        pregunta: 'Which letter is a vowel?',
        opciones: [
            { valor: 'a', texto: 'F' },
            { valor: 'b', texto: 'O' },
            { valor: 'c', texto: 'T' },
            { valor: 'd', texto: 'R' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 O is a vowel. Vowels: A, E, I, O, U'
    },

    {
        id: 35,
        tipo: 'radio',
        pregunta: 'How many vowels are in the English alphabet?',
        opciones: [
            { valor: 'a', texto: '4' },
            { valor: 'b', texto: '5' },
            { valor: 'c', texto: '6' },
            { valor: 'd', texto: '7' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 There are 5 vowels: A, E, I, O, U'
    },

    {
        id: 36,
        tipo: 'text',
        pregunta: 'What letter comes before "Z" in the alphabet?',
        respuestaCorrecta: ['y'],
        explicacion: '💡 Alphabet: ... X, Y, Z'
    },

    {
        id: 37,
        tipo: 'radio',
        pregunta: 'What does "capital letter" mean?',
        opciones: [
            { valor: 'a', texto: 'Small letter (a, b, c)' },
            { valor: 'b', texto: 'Big/uppercase letter (A, B, C)' },
            { valor: 'c', texto: 'Number' },
            { valor: 'd', texto: 'Symbol' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Capital letter = Uppercase = Mayúscula (A, B, C). Lowercase = minúscula (a, b, c)'
    },

    {
        id: 38,
        tipo: 'checkbox',
        pregunta: 'Which words contain double letters?',
        opciones: [
            { valor: 'a', texto: 'Book' },
            { valor: 'b', texto: 'Letter' },
            { valor: 'c', texto: 'Name' },
            { valor: 'd', texto: 'Happy' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Book (oo), Letter (tt), Happy (pp) have double letters. "Name" doesn\'t.'
    },

    {
        id: 39,
        tipo: 'text',
        pregunta: 'Which letter comes after "P"?',
        respuestaCorrecta: ['q'],
        explicacion: '💡 Alphabet order: ... O, P, Q, R ...'
    },

    {
        id: 40,
        tipo: 'select',
        pregunta: 'What is the 10th letter of the alphabet?',
        opciones: [
            { valor: 'a', texto: 'I' },
            { valor: 'b', texto: 'J' },
            { valor: 'c', texto: 'K' },
            { valor: 'd', texto: 'L' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 The 10th letter is J: A B C D E F G H I J'
    },

    {
        id: 41,
        tipo: 'radio',
        pregunta: 'Which word is spelled correctly?',
        opciones: [
            { valor: 'a', texto: 'Adress' },
            { valor: 'b', texto: 'Address' },
            { valor: 'c', texto: 'Addres' },
            { valor: 'd', texto: 'Adres' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Correct spelling: ADDRESS (with double D and double S)'
    },

    {
        id: 42,
        tipo: 'text',
        pregunta: 'How do you say "mayúscula" in English?',
        respuestaCorrecta: ['capital', 'uppercase', 'upper'],
        explicacion: '💡 Mayúscula = Capital letter / Uppercase letter'
    },

    {
        id: 43,
        tipo: 'checkbox',
        pregunta: 'Which letters come between "L" and "P"?',
        opciones: [
            { valor: 'a', texto: 'M' },
            { valor: 'b', texto: 'N' },
            { valor: 'c', texto: 'O' },
            { valor: 'd', texto: 'Q' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 Between L and P: M, N, O (not Q, which comes after P)'
    },

    {
        id: 44,
        tipo: 'select',
        pregunta: 'What does "lowercase" mean?',
        opciones: [
            { valor: 'a', texto: 'Capital letters (A, B, C)' },
            { valor: 'b', texto: 'Small letters (a, b, c)' },
            { valor: 'c', texto: 'Numbers (1, 2, 3)' },
            { valor: 'd', texto: 'Symbols (!,?, @)' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Lowercase = small letters (a, b, c) = minúsculas'
    },

    {
        id: 45,
        tipo: 'radio',
        pregunta: 'Which is the correct spelling?',
        opciones: [
            { valor: 'a', texto: 'Teecher' },
            { valor: 'b', texto: 'Teacher' },
            { valor: 'c', texto: 'Techer' },
            { valor: 'd', texto: 'Teachar' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Correct: TEACHER (tea-cher)'
    },

    // ============================================
    // PRONOMBRES (15 preguntas)
    // ============================================
    
    {
        id: 46,
        tipo: 'radio',
        pregunta: 'What is the first person singular pronoun?',
        opciones: [
            { valor: 'a', texto: 'You' },
            { valor: 'b', texto: 'I' },
            { valor: 'c', texto: 'He' },
            { valor: 'd', texto: 'We' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "I" = Yo (first person singular, always capitalized)'
    },

    {
        id: 47,
        tipo: 'text',
        pregunta: 'What pronoun do we use for a woman? (ella)',
        respuestaCorrecta: ['she'],
        explicacion: '💡 She = Ella (for females). He = Él (for males)'
    },

    {
        id: 48,
        tipo: 'checkbox',
        pregunta: 'Which are subject pronouns?',
        opciones: [
            { valor: 'a', texto: 'I' },
            { valor: 'b', texto: 'Me' },
            { valor: 'c', texto: 'They' },
            { valor: 'd', texto: 'Them' }
        ],
        respuestaCorrecta: ['a', 'c'],
        explicacion: '💡 Subject pronouns: I, you, he, she, it, we, they. Object pronouns: me, you, him, her, it, us, them'
    },

    {
        id: 49,
        tipo: 'select',
        pregunta: 'Which pronoun is used for things/animals (singular)?',
        opciones: [
            { valor: 'a', texto: 'He' },
            { valor: 'b', texto: 'She' },
            { valor: 'c', texto: 'It' },
            { valor: 'd', texto: 'They' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 "It" = for things, animals, or when gender is unknown/irrelevant'
    },

    {
        id: 50,
        tipo: 'radio',
        pregunta: 'What\'s the pronoun for "nosotros/nosotras"?',
        opciones: [
            { valor: 'a', texto: 'They' },
            { valor: 'b', texto: 'We' },
            { valor: 'c', texto: 'You' },
            { valor: 'd', texto: 'Us' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 We = Nosotros/Nosotras (subject pronoun)'
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
        tipo: 'select',
        pregunta: 'Which is the correct sentence?',
        opciones: [
            { valor: 'a', texto: 'Me am a teacher' },
            { valor: 'b', texto: 'I am a teacher' },
            { valor: 'c', texto: 'I is a teacher' },
            { valor: 'd', texto: 'Me is a teacher' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Correct: "I am a teacher". "I" is subject pronoun + "am" is correct verb form.'
    },

    {
        id: 54,
        tipo: 'radio',
        pregunta: 'What pronoun is used for "tú" or "vosotros/ustedes"?',
        opciones: [
            { valor: 'a', texto: 'I' },
            { valor: 'b', texto: 'You' },
            { valor: 'c', texto: 'They' },
            { valor: 'd', texto: 'We' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "You" = Tú/Vosotros/Ustedes (same pronoun for singular and plural)'
    },

    {
        id: 55,
        tipo: 'text',
        pregunta: 'Write the pronoun for "él"',
        respuestaCorrecta: ['he'],
        explicacion: '💡 He = Él (masculine, third person singular)'
    },

    {
        id: 56,
        tipo: 'checkbox',
        pregunta: 'Which pronouns can refer to people?',
        opciones: [
            { valor: 'a', texto: 'I' },
            { valor: 'b', texto: 'It' },
            { valor: 'c', texto: 'They' },
            { valor: 'd', texto: 'You' }
        ],
        respuestaCorrecta: ['a', 'c', 'd'],
        explicacion: '💡 I, they, you refer to people. "It" typically refers to things/animals.'
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
        pregunta: 'What pronoun replaces "the book"? (singular thing)',
        respuestaCorrecta: ['it'],
        explicacion: '💡 "It" replaces singular things: the book → it'
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

    // ============================================
    // VERBO TO BE (25 preguntas)
    // ============================================
    
    {
        id: 61,
        tipo: 'radio',
        pregunta: 'What is the verb TO BE form for "I"?',
        opciones: [
            { valor: 'a', texto: 'is' },
            { valor: 'b', texto: 'am' },
            { valor: 'c', texto: 'are' },
            { valor: 'd', texto: 'be' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 I AM (not "I is" or "I are")'
    },

    {
        id: 62,
        tipo: 'text',
        pregunta: 'Complete: "She _____ a teacher" (verb TO BE)',
        respuestaCorrecta: ['is'],
        explicacion: '💡 She/He/It + IS. Example: She IS a teacher'
    },

    {
        id: 63,
        tipo: 'checkbox',
        pregunta: 'Which sentences are correct?',
        opciones: [
            { valor: 'a', texto: 'I am happy' },
            { valor: 'b', texto: 'You is happy' },
            { valor: 'c', texto: 'They are happy' },
            { valor: 'd', texto: 'He are happy' }
        ],
        respuestaCorrecta: ['a', 'c'],
        explicacion: '💡 Correct: I AM / They ARE. Wrong: You IS (→are) / He ARE (→is)'
    },

    {
        id: 64,
        tipo: 'select',
        pregunta: 'What\'s the contraction of "I am"?',
        opciones: [
            { valor: 'a', texto: 'Im' },
            { valor: 'b', texto: 'I\'m' },
            { valor: 'c', texto: 'Iam' },
            { valor: 'd', texto: 'I am' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 I am = I\'m (with apostrophe)'
    },

    {
        id: 65,
        tipo: 'radio',
        pregunta: 'Choose the correct form: "We _____ students"',
        opciones: [
            { valor: 'a', texto: 'am' },
            { valor: 'b', texto: 'is' },
            { valor: 'c', texto: 'are' },
            { valor: 'd', texto: 'be' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 We/You/They + ARE. Example: We ARE students'
    },

    {
        id: 66,
        tipo: 'text',
        pregunta: 'Write the contraction of "They are"',
        respuestaCorrecta: ['they\'re', 'theyre'],
        explicacion: '💡 They are = They\'re'
    },

    {
        id: 67,
        tipo: 'checkbox',
        pregunta: 'Which are correct contractions?',
        opciones: [
            { valor: 'a', texto: 'I\'m' },
            { valor: 'b', texto: 'He\'s' },
            { valor: 'c', texto: 'We\'re' },
            { valor: 'd', texto: 'They\'s' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 Correct: I\'m, He\'s, We\'re. WRONG: They\'s (correct is They\'re)'
    },

    {
        id: 68,
        tipo: 'select',
        pregunta: 'Correct the mistake: "She are a doctor"',
        opciones: [
            { valor: 'a', texto: 'She am a doctor' },
            { valor: 'b', texto: 'She is a doctor' },
            { valor: 'c', texto: 'She be a doctor' },
            { valor: 'd', texto: 'She are a doctor' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 She/He/It + IS (not "are"). Correct: She IS a doctor'
    },

    {
        id: 69,
        tipo: 'radio',
        pregunta: 'What verb form goes with "It"?',
        opciones: [
            { valor: 'a', texto: 'am' },
            { valor: 'b', texto: 'is' },
            { valor: 'c', texto: 'are' },
            { valor: 'd', texto: 'be' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 It IS (same as he/she → IS)'
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
        tipo: 'radio',
        pregunta: 'What\'s the full form of "You\'re"?',
        opciones: [
            { valor: 'a', texto: 'You is' },
            { valor: 'b', texto: 'You are' },
            { valor: 'c', texto: 'You am' },
            { valor: 'd', texto: 'Your' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 You\'re = You are (NOT "your" which is possessive)'
    },

    {
        id: 74,
        tipo: 'text',
        pregunta: 'Complete: "My friends _____ very nice" (verb TO BE)',
        respuestaCorrecta: ['are'],
        explicacion: '💡 My friends (plural) → ARE. They are very nice.'
    },

    {
        id: 75,
        tipo: 'checkbox',
        pregunta: 'Which sentences use TO BE correctly?',
        opciones: [
            { valor: 'a', texto: 'She is from Spain' },
            { valor: 'b', texto: 'We is students' },
            { valor: 'c', texto: 'I am 25 years old' },
            { valor: 'd', texto: 'They am happy' }
        ],
        respuestaCorrecta: ['a', 'c'],
        explicacion: '💡 Correct: She IS / I AM. Wrong: We IS (→are) / They AM (→are)'
    },

    {
        id: 76,
        tipo: 'select',
        pregunta: 'Which is the interrogative form?',
        opciones: [
            { valor: 'a', texto: 'You are a student?' },
            { valor: 'b', texto: 'Are you a student?' },
            { valor: 'c', texto: 'You is a student?' },
            { valor: 'd', texto: 'Is you a student?' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 Question form: Verb + Subject. Are YOU a student? (Not: You are...?)'
    },

    {
        id: 77,
        tipo: 'radio',
        pregunta: 'How do you say "Él es profesor" in English?',
        opciones: [
            { valor: 'a', texto: 'He am teacher' },
            { valor: 'b', texto: 'He is a teacher' },
            { valor: 'c', texto: 'He are teacher' },
            { valor: 'd', texto: 'His is teacher' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 He IS a teacher (He + is, and use article "a")'
    },

    {
        id: 78,
        tipo: 'text',
        pregunta: 'Write the negative contraction of "is not"',
        respuestaCorrecta: ['isn\'t', 'isnt'],
        explicacion: '💡 is not = isn\'t. Example: He isn\'t here.'
    },

    {
        id: 79,
        tipo: 'checkbox',
        pregunta: 'Which are forms of the verb TO BE?',
        opciones: [
            { valor: 'a', texto: 'am' },
            { valor: 'b', texto: 'is' },
            { valor: 'c', texto: 'are' },
            { valor: 'd', texto: 'have' }
        ],
        respuestaCorrecta: ['a', 'b', 'c'],
        explicacion: '💡 TO BE forms: am, is, are. "Have" is a different verb.'
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
        tipo: 'select',
        pregunta: 'What\'s the negative of "They are"?',
        opciones: [
            { valor: 'a', texto: 'They isn\'t' },
            { valor: 'b', texto: 'They aren\'t' },
            { valor: 'c', texto: 'They not are' },
            { valor: 'd', texto: 'They amn\'t' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 They are not = They aren\'t'
    },

    {
        id: 85,
        tipo: 'radio',
        pregunta: 'Which sentence is WRONG?',
        opciones: [
            { valor: 'a', texto: 'I am tired' },
            { valor: 'b', texto: 'You are happy' },
            { valor: 'c', texto: 'He am sad' },
            { valor: 'd', texto: 'We are ready' }
        ],
        respuestaCorrecta: 'c',
        explicacion: '💡 WRONG: "He am" → Correct: "He IS sad"'
    },

    // ============================================
    // PRESENTACIONES Y SALUDOS (15 preguntas)
    // ============================================
    
    {
        id: 86,
        tipo: 'radio',
        pregunta: 'What\'s the most formal greeting?',
        opciones: [
            { valor: 'a', texto: 'Hi' },
            { valor: 'b', texto: 'Good morning' },
            { valor: 'c', texto: 'Hey' },
            { valor: 'd', texto: 'What\'s up' }
        ],
        respuestaCorrecta: 'b',
        explicacion: '💡 "Good morning" is the most formal. "Hi" is neutral. "Hey/What\'s up" are informal.'
    },

    {
        id: 87,
        tipo: 'text',
        pregunta: 'Complete: "My _____ is John" (name)',
        respuestaCorrecta: ['name'],
        explicacion: '💡 "My name is John" = Mi nombre es John'
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
        pregunta: 'Which are polite expressions?',
        opciones: [
            { valor: 'a', texto: 'Please' },
            { valor: 'b', texto: 'Thank you' },
            { valor: 'c', texto: 'Give me' },
            { valor: 'd', texto: 'Excuse me' }
        ],
        respuestaCorrecta: ['a', 'b', 'd'],
        explicacion: '💡 Polite: Please, Thank you, Excuse me. "Give me" is too direct (say "Can I have...?")'
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
        pregunta: 'Put the words in the correct order:',
        palabras: ['am', 'I', 'student', 'a'],
        respuestaCorrecta: ['I', 'am', 'a', 'student'],
        explicacion: '💡 Correct order: "I am a student"'
    },

    {
        id: 108,
        tipo: 'sentence-ordering',
        pregunta: 'Order these words to form a correct sentence:',
        palabras: ['is', 'name', 'My', 'John'],
        respuestaCorrecta: ['My', 'name', 'is', 'John'],
        explicacion: '💡 Correct order: "My name is John"'
    },

    {
        id: 109,
        tipo: 'true-false',
        pregunta: 'English has 5 vowels: A, E, I, O, U',
        respuestaCorrecta: 'true',
        explicacion: '💡 Correct! The 5 vowels are: A, E, I, O, U'
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
        pregunta: 'Order the words correctly:',
        palabras: ['are', 'students', 'They'],
        respuestaCorrecta: ['They', 'are', 'students'],
        explicacion: '💡 Correct: "They are students"'
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
        pregunta: 'Match each vowel with its position:',
        parejas: [
            { id: 'A', izquierda: 'A', opciones: ['1st', '5th', '9th'] },
            { id: 'B', izquierda: 'E', opciones: ['1st', '5th', '9th'] },
            { id: 'C', izquierda: 'I', opciones: ['1st', '5th', '9th'] }
        ],
        respuestaCorrecta: { 'A': '1st', 'B': '5th', 'C': '9th' },
        explicacion: '💡 A is 1st, E is 5th, I is 9th letter'
    },

    {
        id: 117,
        tipo: 'sentence-ordering',
        pregunta: 'Order correctly:',
        palabras: ['you', 'old', 'How', 'are'],
        respuestaCorrecta: ['How', 'old', 'are', 'you'],
        explicacion: '💡 Correct question: "How old are you?"'
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
        pregunta: 'Complete: "The book is on the _____. The cat is _____ the table"',
        blanks: ['table', 'under'],
        respuestaCorrecta: ['table', 'under'],
        explicacion: '💡 Common prepositions: on, under, in, at'
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
        pregunta: 'Put in order:',
        palabras: ['live', 'I', 'London', 'in'],
        respuestaCorrecta: ['I', 'live', 'in', 'London'],
        explicacion: '💡 "I live in London" - preposition "in" before city'
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
        pregunta: '"Flat" in British English means the same as "apartment" in American English',
        respuestaCorrecta: 'true',
        explicacion: '💡 Correct! Flat (UK) = Apartment (US)'
    },

    {
        id: 125,
        tipo: 'sentence-ordering',
        pregunta: 'Order the sentence:',
        palabras: ['from', 'I', 'Spain', 'am'],
        respuestaCorrecta: ['I', 'am', 'from', 'Spain'],
        explicacion: '💡 "I am from Spain" - structure: subject + verb to be + from + country'
    }    
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

