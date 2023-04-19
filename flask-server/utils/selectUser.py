import pyodbc
import json
from datetime import datetime

def format_datetime(dt):
    return dt.strftime("%Y-%m-%d %H:%M:%S")

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
    json_results = json.dumps([{
        column[0]: format_datetime(row[i]) if isinstance(row[i], datetime) else row[i]
        for i, column in enumerate(cursor.description)
    } for row in results])

    # Cerrar la conexión y el cursor
    cursor.close()
    # print(json_results)

    return json_results
