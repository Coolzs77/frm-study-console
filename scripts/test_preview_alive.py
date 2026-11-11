import json, urllib.request

try:
    targets = json.loads(urllib.request.urlopen("http://localhost:4173/").read()[:100])
    print("Preview server alive")
except Exception as e:
    print("Err:", e)
