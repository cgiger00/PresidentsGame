from flask import Flask, render_template, url_for,request
import os

app = Flask(__name__)


@app.route('/')
def index():
  return render_template('webpage.html')

@app.route('/finish', methods=['POST', 'GET'])
def my_form_():
	error = None
	if request.method == 'POST':
		return render_template('finshed.html')
	else:
		error = 'Invalid Answer'
		return 'Page Could Not Load'

@app.route('/hillYES', methods= ['POST','GET'])
def easter_egg():
    error = None
    if request.method == 'GET':
        return render_template('hillary_clinton.html')
    else:
        error = 'Invalid Answer'
        return 'Page could not load'

if __name__ == '__main__':
    os.system("open http://localhost:5000")
    app.run(
            '0.0.0.0',
            port=5000,
            debug=True,
            use_reloader=False)
