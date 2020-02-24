import requests

r = requests.get("http://127.0.0.1:4000/read")
print(r.text)