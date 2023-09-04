import requests
from flask import Flask, jsonify
import unicodedata
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def normalize_unicode(text):
    return unicodedata.normalize('NFKD', text).encode('latin-1', 'ignore').decode('utf-8')


def get_distribuidoras():
    api_url = "https://dadosabertos.aneel.gov.br/api/3/action/datastore_search"
    resource_id = "fcf2906c-7c32-4b9b-a637-054e7a5234f4"
    limit = 10000  # Tamanho do lote por requisição
    offset = 0
    all_nomes_empresas = set()

    while True:
        params = {
            "resource_id": resource_id,
            "fields": "SigAgente",
            "limit": limit,
            "offset": offset
        }

        response = requests.get(api_url, params=params)
        data = response.json()

        registros = data['result']['records']

        # Filtrar distribuidoras com ano de vigência igual ou superior ao ano atual
        filtered_registros = [registro for registro in registros]
        nomes_empresas = {normalize_unicode(
            registro['SigAgente']) for registro in filtered_registros}
        all_nomes_empresas.update(nomes_empresas)

        if len(nomes_empresas) < limit:
            break

        offset += limit  # Incrementa o offset pelo tamanho do lote

    nomes_empresas_ordenados = sorted(all_nomes_empresas)
    return nomes_empresas_ordenados


@app.route('/nomes-distribuidoras', methods=['GET'])
def send_data():
    dados = get_distribuidoras()
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
