import sqlite3
import csv
from collections import defaultdict

# Connect to the SQLite database
conn = sqlite3.connect('vocabulary.sqlite')
cursor = conn.cursor()

# Query to fetch data for flashcards
query = '''
SELECT 
    v.akkadian, 
    v.gloss AS akkadian_gloss, 
    v.huehnergard, 
    p.pos,
    g.gender AS gender,
    v.hebrew_cognate, 
    v.hebrew_gloss,
    v.note
FROM vocabulary v
LEFT JOIN part_of_speech p ON v.part_of_speech = p.id
LEFT JOIN gender g on v.gender_id = g.id
'''

# Fetch the data
cursor.execute(query)
data = cursor.fetchall()

# Helper function to create flashcards
def create_flashcards(data):
    english_to_akkadian = {}
    akkadian_to_english = {}
    
    for row in data:
        akkadian, akkadian_gloss, huehnergard, pos, gender, hebrew_cognate, hebrew_gloss, note = row
        
        extra_info = ''
        if pos:
            extra_info += f'Part of Speech: {pos}'
        if gender:
            extra_info += f'\nGender: {gender}'
        if note:
            extra_info += f'\nNote: {note}'
        if hebrew_cognate and hebrew_gloss:
            extra_info += f'\nHebrew Cognate: {hebrew_cognate} ({hebrew_gloss})'
        
        # Create English to Akkadian flashcards
        if akkadian_gloss not in english_to_akkadian:
            english_to_akkadian[akkadian_gloss] = {
                'front': akkadian_gloss,
                'back': akkadian,
                'extra': extra_info,
                'source': f'A Grammar Of Akkadian Third Edition by John Huehnergard, Lesson {huehnergard}',
                'tags': f'Akkadian Akkadian∷Lesson{huehnergard} Akkadian∷Vocabulary Vocabulary'
            }
        else:
            # Append new Akkadian word to back, separated by a newline
            if english_to_akkadian[akkadian_gloss]['back']:
                english_to_akkadian[akkadian_gloss]['back'] += f'\n{akkadian}'
            else:
                english_to_akkadian[akkadian_gloss]['back'] = akkadian
        
        # Create Akkadian to English flashcards
        if akkadian not in akkadian_to_english:
            akkadian_to_english[akkadian] = {
                'front': akkadian,
                'back': akkadian_gloss,
                'extra': extra_info,
                'source': f'A Grammar Of Akkadian Third Edition by John Huehnergard, Lesson {huehnergard}',
                'tags': f'Akkadian Akkadian∷Lesson{huehnergard} Akkadian∷Vocabulary Vocabulary'
            }
        else:
            # Update count for additional glosses
            current_count = int(akkadian_to_english[akkadian]['front'].split('(')[-1].split(' ')[0]) if '(' in akkadian_to_english[akkadian]['front'] else 1
            new_count = current_count + 1
            
            if new_count > 1:
                akkadian_to_english[akkadian]['front'] = f'{akkadian} ({new_count} answers)'
            else:
                akkadian_to_english[akkadian]['front'] = akkadian
            
            # Append new gloss to back with newline
            if akkadian_to_english[akkadian]['back']:
                akkadian_to_english[akkadian]['back'] += f'\n{akkadian_gloss}'
            else:
                akkadian_to_english[akkadian]['back'] = akkadian_gloss
    
    # Format English to Akkadian cards to include additional meanings
    additional_meanings = defaultdict(set)  # Use a set to avoid duplicates
    for akkadian_gloss, card in english_to_akkadian.items():
        additional_meanings[card['back']].add(akkadian_gloss)
    
    # Add additional meanings if there are multiple entries
    for akkadian_gloss, card in english_to_akkadian.items():
         if card['back'] in additional_meanings and len(additional_meanings[card['back']]) > 1:
            # Exclude the current gloss from additional meanings to avoid redundancy
            meanings = additional_meanings[card['back']] - {akkadian_gloss}
            card['extra'] += f'\nAdditional Meanings: {", ".join(meanings)}'
    
    return english_to_akkadian, akkadian_to_english

# Generate flashcards
english_to_akkadian, akkadian_to_english = create_flashcards(data)

# Save to CSV
def save_to_csv(filename, flashcards):
    with open(filename, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=['front', 'back', 'extra', 'source', 'tags'])
        #writer.writeheader()
        for card in flashcards.values():
            writer.writerow(card)

save_to_csv('english_to_akkadian_flashcards.csv', english_to_akkadian)
save_to_csv('akkadian_to_english_flashcards.csv', akkadian_to_english)

# Close the database connection
conn.close()

# Still an error with the english to akkadian and showing alternate glosses
