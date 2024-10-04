-- https://miro.com/app/board/uXjVLX_kZmI=/
-- Table: head_word
CREATE TABLE head_word (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entry TEXT NOT NULL,
    language INTEGER NOT NULL,
    FOREIGN KEY (language) REFERENCES language(id)
);

-- Table: head_word_definition
CREATE TABLE head_word_definition (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    gloss TEXT,
    full_definition TEXT,
    head_word_id INTEGER,
    FOREIGN KEY (head_word_id) REFERENCES head_word(id) ON DELETE CASCADE
);

-- Table: language
CREATE TABLE language (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: related_head_words
CREATE TABLE related_head_words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    relationship_type_id INTEGER,
    entry_id_1 INTEGER,
    entry_id_2 INTEGER,
    FOREIGN KEY (relationship_type_id) REFERENCES relationship_type(id),
    FOREIGN KEY (entry_id_1) REFERENCES head_word(id) ON DELETE CASCADE,
    FOREIGN KEY (entry_id_2) REFERENCES head_word(id) ON DELETE CASCADE
);

-- Table: relationship_type
CREATE TABLE relationship_type (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: root
CREATE TABLE root (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    root_text TEXT NOT NULL
);

-- Table: head_word_roots
CREATE TABLE head_word_roots (
    root_id INTEGER,
    head_word_id INTEGER,
    PRIMARY KEY (root_id, head_word_id),
    FOREIGN KEY (root_id) REFERENCES root(id) ON DELETE CASCADE,
    FOREIGN KEY (head_word_id) REFERENCES head_word(id) ON DELETE CASCADE
);

-- Table: word_form
CREATE TABLE word_form (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    form TEXT NOT NULL,
    form_details_id INTEGER,
    FOREIGN KEY (form_details_id) REFERENCES form_details(id)
);

-- Table: head_word_forms
CREATE TABLE head_word_forms (
    head_word_id INTEGER,
    word_form_id INTEGER,
    PRIMARY KEY (head_word_id, word_form_id),
    FOREIGN KEY (head_word_id) REFERENCES head_word(id) ON DELETE CASCADE,
    FOREIGN KEY (word_form_id) REFERENCES word_form(id) ON DELETE CASCADE
);

-- Table: form_details
CREATE TABLE form_details (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    part_of_speech_id INTEGER,
    gender_id INTEGER,
    number_id INTEGER,
    case_id INTEGER,
    state_id INTEGER,
    mood_id INTEGER,
    tense_id INTEGER,
    stem_id INTEGER,
    voice_id INTEGER,
    person_id INTEGER,
    transliteration TEXT,
    source TEXT,
    source_reference TEXT,
    form_gloss TEXT,
    note_text TEXT,
    FOREIGN KEY (part_of_speech_id) REFERENCES part_of_speech(id),
    FOREIGN KEY (gender_id) REFERENCES grammatical_gender(id),
    FOREIGN KEY (number_id) REFERENCES grammatical_number(id),
    FOREIGN KEY (case_id) REFERENCES grammatical_case(id),
    FOREIGN KEY (state_id) REFERENCES grammatical_state(id),
    FOREIGN KEY (mood_id) REFERENCES grammatical_mood(id),
    FOREIGN KEY (tense_id) REFERENCES grammatical_tense(id),
    FOREIGN KEY (stem_id) REFERENCES grammatical_stem(id),
    FOREIGN KEY (voice_id) REFERENCES grammatical_voice(id),
    FOREIGN KEY (person_id) REFERENCES grammatical_person(id)
);

-- Table: part_of_speech
CREATE TABLE part_of_speech (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_gender
CREATE TABLE grammatical_gender (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_number
CREATE TABLE grammatical_number (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_case
CREATE TABLE grammatical_case (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_state
CREATE TABLE grammatical_state (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_mood
CREATE TABLE grammatical_mood (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_tense
CREATE TABLE grammatical_tense (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_stem
CREATE TABLE grammatical_stem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_voice
CREATE TABLE grammatical_voice (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Table: grammatical_person
CREATE TABLE grammatical_person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);
