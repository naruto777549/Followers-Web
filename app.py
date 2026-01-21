from flask import Flask, request, jsonify, render_template
import sqlite3
from instagrapi import Client

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/add_account', methods=['POST'])
def add_account():
    data = request.json
    try:
        cl = Client()
        cl.login(data['username'], data['password'])
        # Save to DB (same as telegram bot)
        return jsonify({'success': True})
    except:
        return jsonify({'success': False})

if __name__ == '__main__':
    app.run(debug=True)
