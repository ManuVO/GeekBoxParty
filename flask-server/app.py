from flask import Flask
from utils import selectUser

app = Flask(__name__)

def holamundo():
    return 'Hola Mundo!'

@app.route('/')
def holamundo():
    print("Hola Mundo ejecutado")
    return 'Hola Mundo!'

@app.route('/users')
def getAllUsers():
    print("getAllUsersEjecutado")
    return selectUser.getAllUsers()

if __name__ == '__main__':
    app.run()
