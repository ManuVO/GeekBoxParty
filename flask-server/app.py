from flask import Flask
from utils import selectUser
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def holamundo():
    return 'Hola Mundo!'

@app.route('/')
def holamundo():
    print("Hola Mundo ejecutado")
    return 'Hola Mundo!'

@app.route('/users')
def GetAllUsers():
    print("getAllUsersEjecutado")
    return selectUser.getAllUsers()

if __name__ == '__main__':
    app.run()
