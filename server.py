from flask import Flask, render_template, url_for,request
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
		return 'OK'


if __name__ == '__main__':
  app.run(debug=True)