import sqlite3
import shutil
import os

# ------------------------- DO NOT CHANGE THIS CODE ------------------------- #

DATABASE = 'vocabulary.sqlite'
BACKUP_DIR = 'backup/'

def backup_db():
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
    backup_file = os.path.join(BACKUP_DIR, DATABASE+'.bak')
    shutil.copyfile(DATABASE, backup_file)
    print(f'Database backed up to {backup_file}')

# --------------------- ADJUST THIS FUNCTION AS NEEDED ---------------------- #

# DO NOT USE
"""
def migrate_db():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    cursor.executescript('''
        CREATE TABLE IF NOT EXISTS vocabulary (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            akkadian TEXT NOT NULL,
            gloss TEXT NOT NULL,
            part_of_speech INTEGER,
            FOREIGN KEY (part_of_speech) REFERENCES part_of_speech (id)
        );

        CREATE TABLE IF NOT EXISTS part_of_speech (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pos TEXT NOT NULL
        );

    ''')

    conn.commit()
    conn.close()
    print(f'Database migration complete.')
"""
if __name__ == "__main__":
    backup_db()
    #migrate_db()

