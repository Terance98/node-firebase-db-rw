import requests
for i in range (50):
	r = requests.get(url = "http://127.0.0.1:4000/write",params = {'in':i,'out':i+1})
	print(r.text)