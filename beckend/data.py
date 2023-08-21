import requests
from flask import Flask, jsonify
import unicodedata

app = Flask(__name__)


def normalize_unicode(text):
    return unicodedata.normalize('NFKD', text).encode('latin-1', 'ignore').decode('utf-8')


def get_distribuidoras():
    api_url = "https://dadosabertos.aneel.gov.br/api/3/action/datastore_search"
    params = {
        "resource_id": "fcf2906c-7c32-4b9b-a637-054e7a5234f4",
        "limit": 228000
    }

    response = requests.get(api_url, params=params)

    if response.status_code == 200:
        data = response.json()
        registros = data['result']['records']
        empresas_exibidas = set()
        nomes_empresas_ordenados = []

        for registro in registros:
            sig_agente = registro['SigAgente']
            decoded_sig_agente = normalize_unicode(sig_agente)
            if decoded_sig_agente not in empresas_exibidas:
                empresas_exibidas.add(decoded_sig_agente)
                nomes_empresas_ordenados.append(decoded_sig_agente)

        nomes_empresas_ordenados.sort()

        print("Dados antes de enviar para a página web:")
        for empresa in nomes_empresas_ordenados:
            print(empresa)

        return nomes_empresas_ordenados
    else:
        print("Erro ao obter dados da API")
        return None


@app.route('/nomes-distribuidoras', methods=['GET'])
def send_data():
    dados = get_distribuidoras()
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
