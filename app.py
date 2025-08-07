
from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'rom'

SALT = 'cinwywywywywywywyrg'

# Routes for each button
@app.route("/", methods=["GET"])
def menu():
    return render_template('inven.html')

@app.route("/login", methods=["POST"])
def login():
    return "You clicked Login!"

@app.route("/view-product", methods=["POST"])
def view_product():
    return "You clicked View Product!"

@app.route("/add-product", methods=["POST"])
def add_product():
    return "You clicked Add Product!"

@app.route("/update-product", methods=["POST"])
def update_product():
    return "You clicked Update Product!"

@app.route("/delete-product", methods=["POST"])
def delete_product():
    return "You clicked Delete Product!"

@app.route("/register", methods=["POST"])
def register():
    return "You clicked Register!"

@app.route("/logout", methods=["POST"])
def logout():
    return "You clicked Log-out!"

if __name__ == "__main__":
    app.run(debug=True)
