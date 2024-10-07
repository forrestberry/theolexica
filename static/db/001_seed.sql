INSERT INTO language (name) 
VALUES ('akkadian'), ('greek'), ('latin'), ('hebrew'), ('aramaic');

INSERT INTO relationship_type (name)
VALUES ('cognate'), ('synonym'), ('conceptual'), ('homonym'), ('easily confused');

INSERT INTO source (name)
VALUES ('A Grammar of Akkadian, 3rd Edition by John Huehnergard'), ('HALOT'), ('BDAG');

INSERT INTO part_of_speech (name)
VALUES ('noun'), ('verb'), ('adjective'), ('adverb'), ('preposition'), ('conjunction'), ('interjection'), ('pronoun'), ('particle'), ('article');

INSERT INTO grammatical_gender (name)
VALUES ('masculine'), ('feminine'), ('neuter'), ('common');

INSERT INTO grammatical_number (name)
VALUES ('singular'), ('dual'), ('plural');

INSERT INTO grammatical_case (name)
VALUES ('nominative'), ('accusative'), ('genitive'), ('dative'), ('ablative'), ('vocative'), ('locative'), ('instrumental'), ('partitive'), ('oblique');

INSERT INTO grammatical_state (name)
VALUES ('absolute'), ('construct'), ('emphatic'); 

INSERT INTO grammatical_mood (name)
VALUES ('indicative'), ('subjunctive'), ('imperative'), ('optative');

INSERT INTO grammatical_tense (name)
VALUES ('preterite'), ('present'), ('imperfect'), ('future'), ('perfect'), ('pluperfect'), ('future perfect'), ('aorist'), ('future perfect'), ('past'), ('future');

INSERT INTO grammatical_stem (name)
VALUES ('g'), ('d'), ('n'), ('c');

INSERT INTO grammatical_voice (name)
VALUES ('active'), ('passive'), ('middle'), ('deponent'); 

INSERT INTO grammatical_person (name)
VALUES ('1'), ('2'), ('3');

INSERT INTO grammatical_verbal_noun (name)
VALUES ('infinitive'), ('participle'), ('gerund');
