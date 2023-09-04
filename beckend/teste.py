import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

url = "https://dadosabertos.aneel.gov.br/api/3/action/datastore_search_sql"
sql_query = "SELECT DISTINCT \"SigAgente\", \"DscSubGrupo\", \"DscModalidadeTarifaria\", \"VlrTUSD\", \"VlrTE\", \"NomPostoTarifario\", \"DscUnidadeTerciaria\" FROM \"fcf2906c-7c32-4b9b-a637-054e7a5234f4\" WHERE \"DscBaseTarifaria\" = 'Tarifa de Aplicação' AND CURRENT_DATE BETWEEN TO_DATE(\"DatInicioVigencia\", 'YYYY-MM-DD') AND TO_DATE(\"DatFimVigencia\", 'YYYY-MM-DD') AND (\"DscModalidadeTarifaria\" = 'Azul' OR \"DscModalidadeTarifaria\" = 'Verde') AND (\"NomPostoTarifario\" = 'Ponta' OR \"NomPostoTarifario\" = 'Fora ponta' ) ORDER BY \"SigAgente\" ASC"

params = {
    "sql": sql_query
}


@app.route('/teste')
def get_data():
    response = requests.get(url, params=params)
    if response.status_code == 200:
        data = response.json()
        records = data["result"]["records"]
        num_records = len(records)  # Contagem de registros
        # Imprimir a quantidade de registros
        print("Quantidade de registros:", num_records)
        return jsonify(records)
    else:
        return jsonify({"error": "Erro na requisição", "status_code": response.status_code})


if __name__ == '__main__':
    app.run()
