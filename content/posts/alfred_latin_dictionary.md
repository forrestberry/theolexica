---
title: A Latin Dictionary at My Fingertips
date: 2024-09-24T20:28:19-07:00
draft: false
tags:
    - Alfred
    - API
    - Latin
---

I use [Alfred](https://alfred.app) all the time. It is my app launcher, my file finder, and my script swiss army knife. 

I am taking up Latin again. My grammar is still decent by my vocabulary is pretty rough. I frequently need to look up a word. Using an online diction is onerous. So, chatgpt and I wrote a script to use Alfred and the [Latin Is Simple](https://www.latin-is-simple.com/api/) API to make this much faster. 

Command + \<space\>, followed by the letter 'l', and I can start typing a Latin word and the dictionary populates before my eyes.  

![Alfred Image of clavis](/images/alfred-clavis.png)

Here is the script:

```
import sys
import urllib.request
import urllib.parse
import json

BASE_URL = "https://www.latin-is-simple.com/api/vocabulary/search/"

def search_latin_word(query):
    """Search for a Latin word using the Latin-is-Simple API."""
    params = {
        'query': query,
        'forms_only': 'false',
        'format': 'json'
    }
    url = BASE_URL + '?' + urllib.parse.urlencode(params)
    
    headers = {
        'accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
    }
    
    req = urllib.request.Request(url, headers=headers)
    
    with urllib.request.urlopen(req) as response:
        data = response.read().decode('utf-8')
    
    results = json.loads(data)
    return results

def main():
    # Get the query from Alfred's {query} variable
    if len(sys.argv) < 2:
        print(json.dumps({'items': []}))
        sys.exit(0)
    
    query = ' '.join(sys.argv[1:])
    
    try:
        results = search_latin_word(query)
        if not results:
            output = {'items': [{
                'title': 'No results found.',
                'valid': False,
                'icon': {'path': 'icons/error.png'}
            }]}
        else:
            items = []
            for entry in results:
                translations = entry.get('translations_unstructured', {})
                en_translation = translations.get('en', 'No English translation available.')
                item = {
                    'title': entry['full_name'],
                    'subtitle': en_translation,
                    'arg': en_translation,
                    'mods': {
                        'cmd': {
                            'arg': entry['url'],
                            'subtitle': 'Copy URL to Clipboard'
                        }
                    },
                    'icon': {'path': 'icons/latin.png'}
                }
                items.append(item)
            output = {'items': items}
        print(json.dumps(output))
    except Exception as e:
        output = {'items': [{
            'title': 'Error occurred.',
            'subtitle': str(e),
            'valid': False,
            'icon': {'path': 'icons/error.png'}
        }]}
        print(json.dumps(output))

if __name__ == '__main__':
    main()

```

The only trick was adding a User-agent in the header to prevent a 403 error.

