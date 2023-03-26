import pyodbc
import json

def getAllUsers():

    # Se establece la conexión a la base de datos
    conn = pyodbc.connect('Driver={SQL Server};'
                        'Server=localhost\SQLEXPRESS;'
                        'Database=GeekBoxParty;'
                        'Trusted_Connection=yes;')

    # Se crea un cursor para realizar la consulta
    cursor = conn.cursor()

    # Se realiza la consulta SELECT
    cursor.execute('SELECT * FROM Users')

    # Se obtienen los resultados de la consulta
    results = cursor.fetchall()

    # Convertir los resultados en un objeto JSON
    json_results = json.dumps([dict(zip([column[0] for column in cursor.description], row)) for row in results])

    # Cerrar la conexión y el cursor
    cursor.close()
    print(json_results)

    return json_results
