# app.py flask setup
from flask import Flask, render_template, url_for
app = Flask(__name__)

# home directory 
@app.route('/')
def home_directory():
    return render_template('main.html')


if __name__ == '__main__':
    app.run(debug = True)