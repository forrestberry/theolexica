---
title: A Latin Dictionary at My Fingertips
date: 2024-09-24
draft: false
tags:
    - Alfred
    - API
    - Latin
---

I use [Alfred](https://alfred.app) all the time. It is my app launcher, my file finder, and my script swiss army knife. 

I am taking up Latin again. My grammar is still decent by my vocabulary is pretty rough. I frequently need to look up a word. Using an online diction is onerous. So, chatgpt and I wrote a script to use Alfred and the [Latin Is Simple](https://www.latin-is-simple.com/api/) API to make this much faster. 

Command + \<space\>, followed by the letter 'l', and I can start typing a Latin word and the dictionary populates before my eyes.  

![Alfred Image of clavis](/images/alfred-latin-lookup.gif)

[Download the Alfred Workflow](/anki/Latin%20Dictionary.alfredworkflow)

The Alfred Workflow is all you need. But if you are interested in how it is made, continue reading:


See the [Alfred Docs on creating workflows](https://www.alfredapp.com/help/workflows/).

This is a simple workflow that uses a script filter and copy to clipboard block.

![Alfred Latin Dictionary Workflow Image](/images/alfred-latin-dictonary-workflow.png)


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

The only trick with the API was adding a User-agent in the header to prevent a 403 error. The API page has info about API auth that you can get when creating an account. I created an account and could not find it. I messaged the site and did not recieve a response, so this works for now.

Here is how the script is setup in Alfred:

![Alfred Latin Dictionary Script Image](/images/alfred-latin-dictonary-script.png)

To get the live search, set the Queue Delay to "Immediately after each character typed".
![Alfred Latin Dictionary Script Run Settings Image](/images/alfred-latin-dictonary-run-settings.png)

That's it. You have a fast Latin Dictionary at your fingertips.

