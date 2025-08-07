from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL
import hashlib

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'inventory_system'

SALT = 'cinwywywywywywywyrg'

mysql = MySQL(app)

USER_DATA = {
    "username": "admin",
    "password": "password"
}

@app.route('/')
def login_page():
     return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username == USER_DATA['username'] and password == USER_DATA['password']:
        return jsonify({"success": True})
    else:
        return jsonify({'success': False}), 401
    
    if __name__ == '__main__':
        app.run(debug=True)