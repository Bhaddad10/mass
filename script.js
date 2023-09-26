function loginPage() {
  window.location.href = "index.html";
}

function homePage() {
  window.location.href = "home.html";
}

function goSimulator() {
  window.location.href = "simulador.html";
}

function getUrlParameters() {
  var parameters = {};
  var queryString = window.location.search.substring(1);
  var pairs = queryString.split("&");

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    parameters[key] = value;
  }

  return parameters;
}

function extractParametersFromURL() {
  var urlParameters = getUrlParameters();

  var distribuidora = urlParameters["distribuidora"];
  var bandeira = urlParameters["bandeira"];
  var modalidade = urlParameters["modalidade"];
  var tensao = urlParameters["tensao"];
  var modalidadeAcl = urlParameters["modalidade-acl"];
  var tensaoAcl = urlParameters["tensao-acl"];
  var demandaPonta = urlParameters["demanda-ponta"];
  var demandaForaPonta = urlParameters["demanda-fora-ponta"];
  var consumoPonta = urlParameters["consumo-ponta"];
  var consumoForaPonta = urlParameters["consumo-fora-ponta"];
  var outrasUnidades = urlParameters["unidades-acl"];
  var precoEnergia = urlParameters["preco-energia"];
  var custoAdicional = urlParameters["custo-adicional"];
  var custoAdicionalValue = urlParameters["custo-value"];
  var icms = urlParameters["icms"];
  var pisCofins = urlParameters["pis-cofins"];
  var perdas = urlParameters["perdas"];
  var tipoCalculo = urlParameters["calculo"];
  var anosProjetados = urlParameters["qtd-anos"];
  var mediaPrecoEnergia = urlParameters["media-preco-energia"];
  var livreDscReh = urlParameters["livre-dsc-rh"];
  var catDscReh = urlParameters["cat-dsc-rh"];
  var catKwTusdValueP = urlParameters["cat-kw-tusd-value-p"];
  var catKwTusdValueFp = urlParameters["cat-kw-tusd-value-fp"];
  var catMwhTusdValueP = urlParameters["cat-mwh-tusd-value-p"];
  var catMwhTusdValueFp = urlParameters["cat-mwh-tusd-value-fp"];
  var catMwhTeValueP = urlParameters["cat-mwh-te-value-p"];
  var catMwhTeValueFp = urlParameters["cat-mwh-te-value-fp"];
  var livreKwTusdValueP = urlParameters["liv-kw-tusd-value-p"];
  var livreKwTusdValueFp = urlParameters["liv-kw-tusd-value-fp"];
  var livreMwhTusdValueP = urlParameters["liv-mwh-tusd-value-p"];
  var livreMwhTusdValueFp = urlParameters["liv-mwh-tusd-value-fp"];
  var livreMwhTeValueP = urlParameters["liv-mwh-te-value-p"];
  var livreMwhTeValueFp = urlParameters["liv-mwh-te-value-fp"];

  console.log(catMwhTusdValueP);
  preencherTabela(
    demandaPonta,
    catKwTusdValueP,
    demandaForaPonta,
    catKwTusdValueFp,
    consumoPonta,
    catMwhTusdValueP,
    consumoForaPonta,
    catMwhTusdValueFp,
    catMwhTeValueP,
    catMwhTeValueFp,
    bandeira,
    icms,
    pisCofins
  );
  // Agora você pode usar essas variáveis conforme necessário na página "result.html".
}

function preencherTabela(
  demandaPonta,
  tusdKwValueP,
  demandaForaPonta,
  tusdKwValueFp,
  consumoPonta,
  tusdMwhValuep,
  consumoForaPonta,
  tusdMWhValueFp,
  teMwhValuep,
  teMwhValueFp,
  bandeira,
  icms,
  pisCofins
) {
  console.log(tusdMwhValuep);
  //Demanda Tusd Ponta
  var catTusdDemandaPonta = document.getElementById("cat-tusd-demanda-ponta");
  var catKwValueP = document.getElementById("cat-kw-value-p");
  var catKwFinalValueP = document.getElementById("cat-kw-final-valuep");

  //Demanda tusd Fora Ponta
  var catTusdDemandaForaPonta = document.getElementById(
    "cat-tusd-demanda-fora-ponta"
  );
  var catKwValueFp = document.getElementById("cat-kw-value-fp");
  var catKwFinalValueFp = document.getElementById("cat-kw-final-value-fp");

  //Consumo Tusd Ponta
  var catTusdConsumoPonta = document.getElementById("cat-tusd-consumo-ponta");
  var catTusdMwhValueP = document.getElementById("cat-tusd-mwh-p");
  var catMwhFinalValueP = document.getElementById("cat-mwh-final-value-p");

  //Consumo Tusd Fora Ponta
  var catTusdConsumoForaPonta = document.getElementById(
    "cat-tusd-consumo-fora-ponta"
  );
  var catTusdMwhValueFp = document.getElementById("cat-tusd-mwh-fp");
  var catMwhFinalValueFp = document.getElementById("cat-mwh-final-value-fp");

  //Consumo TE ponta
  var catTeMwhConsumoPonta = document.getElementById("cat-te-consumo-ponta");
  var catTeMwhValuep = document.getElementById("cat-te-mwh-p");
  var catTeMwhFinalValuep = document.getElementById("cat-te-mwh-final-value-p");
  //Consumo TE fora ponta
  var catTeMwhConsumoForaPonta = document.getElementById(
    "cat-te-consumo-fora-ponta"
  );
  var catTeMwhValueFp = document.getElementById("cat-te-mwh-fp");
  var catTeMwhFinalValueFp = document.getElementById(
    "cat-te-mwh-final-value-fp"
  );

  //Bandeira tarifaria
  var catBandMwh = document.getElementById("cat-bandeira-tarifaria");
  var catBandMwhValue = document.getElementById("valor-bandeira-mwh");
  var catBandFinalValue = document.getElementById("final-bandeira-value");

  //Impostos
  var impostoValue = document.getElementById("impostos");

  //Valor total
  var valorTotal = document.getElementById("valor-total");
  //Demanda tusd
  //Demanda ponta
  var catDemandaPontaValue = parseFloat(demandaPonta * tusdKwValueP);
  catTusdDemandaPonta.textContent = demandaPonta + " kW";
  catKwValueP.textContent = tusdKwValueP.replace(".", ",") + " R$/kW";
  catKwFinalValueP.textContent =
    "R$ " + (demandaPonta * tusdKwValueP).toLocaleString("pt-BR");
  //Demanda fora ponta
  var CatDemandaForaPontaValue = 0;
  if (demandaForaPonta == "") {
    catTusdDemandaForaPonta.textContent = "-";
    catKwValueFp.textContent = "-";
    catKwFinalValueFp.textContent = "-";
  } else {
    catTusdDemandaForaPonta.textContent = demandaForaPonta + " kW";
    catKwValueFp.textContent = tusdKwValueFp.replace(".", ",") + " R$/kW";
    catKwFinalValueFp.textContent =
      "R$ " + (demandaForaPonta * tusdKwValueFp).toLocaleString("pt-BR");
    CatDemandaForaPontaValue = parseFloat(demandaForaPonta * tusdKwValueFp);
  }
  //Consumo Tusd
  //Consumo Ponta
  var catConsumoPontaValue = consumoPonta * tusdMwhValuep;
  catTusdConsumoPonta.textContent = consumoPonta.replace(".", ",") + " MWh";
  catTusdMwhValueP.textContent = tusdMwhValuep.replace(".", ",") + " R$/MWh";
  catMwhFinalValueP.textContent =
    "R$ " + (consumoPonta * tusdMwhValuep).toLocaleString("pt-BR");
  //Consumo fora ponta
  var catConsumoForaPontaValue = consumoForaPonta * tusdMWhValueFp;
  catTusdConsumoForaPonta.textContent =
    consumoForaPonta.replace(".", ",") + " MWh";
  catTusdMwhValueFp.textContent = tusdMWhValueFp.replace(".", ",") + " R$/MWh";
  catMwhFinalValueFp.textContent =
    "R$ " + (tusdMWhValueFp * consumoForaPonta).toLocaleString("pt-BR");

  //Consumo TE
  //Consumo Ponta
  var catConsumoTePontaValue = consumoPonta * teMwhValuep;
  catTeMwhConsumoPonta.textContent = consumoPonta.replace(".", ",") + " MWh";
  catTeMwhValuep.textContent = teMwhValuep.replace(".", ",") + " R$/MWh";
  catTeMwhFinalValuep.textContent =
    "R$ " + (consumoPonta * teMwhValuep).toLocaleString("pt-BR");
  //Consumo Fora Ponta
  var catConsumoTeForaPontaValue = consumoForaPonta * teMwhValueFp;
  catTeMwhConsumoForaPonta.textContent =
    consumoForaPonta.replace(".", ",") + " MWh";
  catTeMwhValueFp.textContent = teMwhValueFp.replace(".", ",") + " R$/MWh";
  catTeMwhFinalValueFp.textContent =
    "R$ " + (consumoForaPonta * teMwhValueFp).toLocaleString("pt-BR");

  //Bandeira tarifaria
  var finalBandeiraValue = 0;
  if (bandeira == "Verde") {
    catBandMwh.textContent = "-";
    catBandMwhValue.textContent = "-";
    catBandFinalValue.textContent = "-";
  } else if (bandeira == "Amarela") {
    var amarela = 14.43;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * amarela;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      amarela.toString().replace(".", ",") + " R$/MWh";
    catBandFinalValue.textContent =
      "R$ " + (aux3 * amarela).toLocaleString("pt-BR");
  } else if (bandeira == "Vermelha P1") {
    var vermelhap1 = 41.69;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * vermelhap1;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + vermelhap1.toString().replace(".", ",") + " R$/MWh";
    catBandFinalValue.textContent =
      "R$ " + (aux3 * vermelhap1).toLocaleString("pt-BR");
  } else if (bandeira == "Vermelha P2") {
    var vermelhap2 = 94.92;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * vermelhap2;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + vermelhap2.toString().replace(".", ",") + " R$/MWh";
    catBandFinalValue.textContent =
      "R$ " + (aux3 * vermelhap2).toLocaleString("pt-BR");
  }

  //Impostos
  //Sem icms na tusd
  impostoValue.textContent =
    "R$ " +
    (
      (catDemandaPontaValue +
        CatDemandaForaPontaValue +
        catConsumoPontaValue +
        catConsumoForaPontaValue) /
        (1 - pisCofins / 100) +
      (catConsumoTePontaValue + catConsumoForaPontaValue + finalBandeiraValue) /
        (1 - icms / 100 - pisCofins / 100) -
      (catDemandaPontaValue +
        CatDemandaForaPontaValue +
        catConsumoPontaValue +
        catConsumoForaPontaValue +
        catConsumoTePontaValue +
        catConsumoForaPontaValue +
        finalBandeiraValue)
    ).toLocaleString("pt-BR");

  //Com ICMS na TUSD
  //(((catDemandaPontaValue + catDemandaForaPontaValue + catConsumoPontaValue + catConsumoForaPontaValue + catConsumoTePontaValue + catConsumoTeForaPontaValuex + finalBandeiraValue) / (1 - icms / 100 -pisCofins / 100)))

  //Calculo de valor total
  var totalCativo =
    catDemandaPontaValue +
    CatDemandaForaPontaValue +
    catConsumoPontaValue +
    catConsumoForaPontaValue +
    catConsumoTePontaValue +
    catConsumoTeForaPontaValue +
    finalBandeiraValue;

  valorTotal.textContent = "R$ " + totalCativo.toLocaleString("pt-BR");
  //console.log(demandaPonta, demandaForaPonta, consumoPonta, consumoForaPonta);
}

function getInputs() {
  inpDistribuidora = document.getElementById("distribuidoras").value;
  inpModalidade = document.getElementById("modalidade").value;
  inpTensao = document.getElementById("tensao").value;
  inpModalidadeAcl = document.getElementById("modalidade-acl").value;
  inpTensaoAcl = document.getElementById("fornecimento-acl").value;
  inpDemandaPonta = document.getElementById("demanda-ponta").value;
  inpDemandaForaPonta = document.getElementById("demanda-fora-ponta").value;
  inpConsumoPonta = document.getElementById("consumo-ponta").value;
  inpConsumoForaPonta = document.getElementById("consumo-fora-ponta").value;
  inpOutrasUnidades = document.getElementById("unidades-acl").value;
  inpPrecoEnergia = document.getElementById("preco-energia").value;
  inpCustoAdicional = document.getElementById("custo-adicional").value;
  inpCustoAdicionalValue = document.getElementById("custo-value").value;
  inpIcms = document.getElementById("icms").value;
  inpPisCofins = document.getElementById("pis-cofins").value;
  inpPerdas = document.getElementById("perdas").value;
  inpTipoCalculo = document.getElementById("calculo").value;
  inpAnosProjetados = document.getElementById("qtd-anos").value;
  inpMediaPrecoEnergia = document.getElementById("media-preco-energia").value;
  inpBandeiraTarifaria = document.getElementById("bandeira").value;
  var nextUrl =
    "result.html?" +
    "distribuidora=" +
    encodeURIComponent(inpDistribuidora) +
    "&bandeira=" +
    encodeURIComponent(inpBandeiraTarifaria) +
    "&modalidade=" +
    encodeURIComponent(inpModalidade) +
    "&tensao=" +
    encodeURIComponent(inpTensao) +
    "&modalidade-acl=" +
    encodeURIComponent(inpModalidadeAcl) +
    "&tensao-acl=" +
    encodeURIComponent(inpTensaoAcl) +
    "&demanda-ponta=" +
    encodeURIComponent(inpDemandaPonta) +
    "&demanda-fora-ponta=" +
    encodeURIComponent(inpDemandaForaPonta) +
    "&consumo-ponta=" +
    encodeURIComponent(inpConsumoPonta) +
    "&consumo-fora-ponta=" +
    encodeURIComponent(inpConsumoForaPonta) +
    "&unidades-acl=" +
    encodeURIComponent(inpOutrasUnidades) +
    "&preco-energia=" +
    encodeURIComponent(inpPrecoEnergia) +
    "&custo-adicional=" +
    encodeURIComponent(inpCustoAdicional) +
    "&custo-value=" +
    encodeURIComponent(inpCustoAdicionalValue) +
    "&icms=" +
    encodeURIComponent(inpIcms) +
    "&pis-cofins=" +
    encodeURIComponent(inpPisCofins) +
    "&perdas=" +
    encodeURIComponent(inpPerdas) +
    "&calculo=" +
    encodeURIComponent(inpTipoCalculo) +
    "&qtd-anos=" +
    encodeURIComponent(inpAnosProjetados) +
    "&media-preco-energia=" +
    encodeURIComponent(inpMediaPrecoEnergia) +
    "&livre-dsc-rh=" +
    encodeURIComponent(livreDscReh) +
    "&cat-dsc-rh=" +
    encodeURIComponent(catDscReh) +
    "&cat-kw-tusd-value-p=" +
    encodeURIComponent(catKwTusdValueP) +
    "&cat-kw-tusd-value-fp=" +
    encodeURIComponent(catKwTusdValueFp) +
    "&cat-mwh-tusd-value-p=" +
    encodeURIComponent(catMwhTusdValueP) +
    "&cat-mwh-tusd-value-fp=" +
    encodeURIComponent(catMwhTusdValueFp) +
    "&cat-mwh-te-value-p=" +
    encodeURIComponent(catMwhTeValueP) +
    "&cat-mwh-te-value-fp=" +
    encodeURIComponent(catMwhTeValueFp) +
    "&liv-kw-tusd-value-p=" +
    encodeURIComponent(livreKwTusdValueP) +
    "&liv-kw-tusd-value-fp=" +
    encodeURIComponent(livreKwTusdValueFp) +
    "&liv-mwh-tusd-value-p=" +
    encodeURIComponent(livreMwhTusdValueP) +
    "&liv-mwh-tusd-value-fp=" +
    encodeURIComponent(livreMwhTusdValueFp) +
    "&liv-mwh-te-value-p=" +
    encodeURIComponent(livreMwhTeValueP) +
    "&liv-mwh-te-value-fp=" +
    encodeURIComponent(livreMwhTeValueFp);
  // Redirecionar o usuário para a nova página com os parâmetros
  window.location.href = nextUrl;
}

//Variaveis inputadas por seleção
var inpDistribuidora;
var inpModalidade;
var inpModalidadeAcl;
var inpTensao;
var inpTensaoAcl;
var inpCustoAdicional;
var inpBandeiraTarifaria;

//Variaveis inputadas por texto
var inpDemandaPonta = 0;
var inpDemandaForaPonta = 0;
var inpConsumoPonta = 0;
var inpConsumoForaPonta = 0;
var inpOutrasUnidades;
var inpPrecoEnergia = 0;
var inpDescontoEnergia = 0;
var inpCustoAdicionalValue = 0;
var inpIcms = 0;
var inpPisCofins = 0;
var inpPerdas = 0;
var inpTipoCalculo;
var inpAnosProjetados = 0;
var inpMediaPrecoEnergia = 0;

//Variaveis buscadas no servidor
var livreDscReh;
var catDscReh;

//Variaveis consumidor cativo
var catKwTusdValueP = 0;
var catKwTusdValueFp = 0;
var catMwhTusdValueP = 0;
var catMwhTusdValueFp = 0;
var catMwhTeValueP = 0;
var catMwhTeValueFp = 0;

//Variaveis consumidor livre
var livreKwTusdValueP = 0;
var livreKwTusdValueFp = 0;
var livreMwhTusdValueP = 0;
var livreMwhTusdValueFp = 0;
var livreMwhTeValueP = 0;
var livreMwhTeValueFp = 0;

if (window.location.href.endsWith("simulador.html")) {
  document.addEventListener("DOMContentLoaded", function () {
    const selectDistribuidoras = document.getElementById("distribuidoras");
    const selectTensao = document.getElementById("tensao");
    const selectModalidade = document.getElementById("modalidade");
    const selectTensaoAcl = document.getElementById("fornecimento-acl");
    const selectModalidadeAcl = document.getElementById("modalidade-acl");
    const inputDFP = document.getElementById("demanda-fora-ponta");
    const seletorCustoAdicional = document.getElementById("custo-adicional");
    const campoCustoValue = document.getElementById("custo-value");
    const selectBandeira = document.getElementById("bandeira");

    const url = "http://127.0.0.1:5000/teste";

    function populateSelect(selectElement, data, key) {
      var uniqueValues = [...new Set(data.map((item) => item[key]))];

      uniqueValues.forEach((value) => {
        var option = document.createElement("option");
        option.text = value;
        selectElement.add(option);
      });
    }

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        // Populando o primeiro <select> com os dados do JSON
        populateSelect(selectDistribuidoras, jsonData, "SigAgente");

        // Populando o campo selectTensao com base na seleção de selectDistribuidoras
        selectDistribuidoras.addEventListener("change", function () {
          var selectedSigAgente = selectDistribuidoras.value;

          // Filtrando os dados do JSON com base no SigAgente selecionado
          var filterGroup = jsonData.filter(
            (item) => item["SigAgente"] === selectedSigAgente
          );

          // Obtendo as opções únicas para o campo selectTensao
          var uniqueTensaoValues = [
            ...new Set(filterGroup.map((item) => item["DscSubGrupo"])),
          ];

          // Limpando o campo selectTensao
          selectModalidade.innerHTML =
            '<option value="" disabled selected hidden>Selecione</option>';
          selectTensao.innerHTML =
            '<option value="" disabled selected hidden>Selecione</option>';
          selectTensaoAcl.innerHTML =
            '<option value="" disabled selected hidden>Selecione</option>';
          selectModalidadeAcl.innerHTML =
            '<option value="" disabled selected hidden>Selecione</option>';

          // Populando o campo selectTensao com as novas opções
          uniqueTensaoValues.forEach((value) => {
            var option = document.createElement("option");
            option.text = value;
            selectTensao.add(option);

            var optionAcl = document.createElement("option");
            optionAcl.text = value;
            selectTensaoAcl.add(optionAcl);
          });
        });

        seletorCustoAdicional.addEventListener("change", function () {
          // Verifica se a opção selecionada é "sim"
          if (this.value === "sim") {
            // Habilita o campo "custo-value"
            campoCustoValue.disabled = false;
          } else {
            // Desabilita o campo "custo-value" e limpa seu valor
            campoCustoValue.disabled = true;
            campoCustoValue.value = "";
          }
        });
        // Adicionando um evento de mudança ao campo selectTensao para atualizar o campo selectModalidade
        selectTensao.addEventListener("change", function () {
          var selectedTensao = selectTensao.value;

          // Filtrando os dados do JSON com base na Tensão selecionada
          var filterTension = jsonData.filter(
            (item) => item["DscSubGrupo"] === selectedTensao
          );

          // Obtendo as opções únicas para o campo selectModalidade
          var uniqueModalidadeValues = [
            ...new Set(
              filterTension.map((item) => item["DscModalidadeTarifaria"])
            ),
          ];

          // Limpando o campo selectModalidade
          selectModalidade.innerHTML =
            '<option value="" disabled selected hidden>Selecione</option>';

          // Populando o campo selectModalidade com as novas opções
          uniqueModalidadeValues.forEach((value) => {
            var option = document.createElement("option");
            option.text = value;
            selectModalidade.add(option);
          });
        });

        selectTensaoAcl.addEventListener("change", function () {
          var selectedTensao = selectTensaoAcl.value;

          var filterTension = jsonData.filter(
            (item) => item["DscSubGrupo"] === selectedTensao
          );

          var uniqueModalidadeAclValues = [
            ...new Set(
              filterTension.map((item) => item["DscModalidadeTarifaria"])
            ),
          ];

          selectModalidadeAcl.innerHTML =
            '<option value="" disabled selected hidden>Selecione</option>';

          uniqueModalidadeAclValues.forEach((value) => {
            var optionAcl = document.createElement("option");
            optionAcl.text = value;
            selectModalidadeAcl.add(optionAcl);
          });
        });

        selectModalidade.addEventListener("change", function () {
          if (selectModalidade.value == "Verde") {
            inputDFP.disabled = true;
          } else {
            inputDFP.disabled = false;
          }

          getCativoProfile();
        });

        selectModalidadeAcl.addEventListener("change", function () {
          getLivreProfile();
        });

        function getCativoProfile() {
          var distribuidora = selectDistribuidoras.value;
          var tensao = selectTensao.value;
          var modalidade = selectModalidade.value;

          var distDscReh;
          var tusdKwValueP = 0;
          var tusdKwValueFp = 0;
          var tusdMWhValueP = 0;
          var tusdMWhValueFp = 0;
          var teMwhValueP = 0;
          var teMwhValueFp = 0;

          var resultadosFiltrados = jsonData.filter(function (json) {
            return (
              json["SigAgente"] === distribuidora &&
              json["DscSubGrupo"] === tensao &&
              json["DscModalidadeTarifaria"] === modalidade
            );
          });
          console.log("Perfil Cativo");
          console.log(
            "Busca: \n Distribuidora: " +
              distribuidora +
              " Tensão: " +
              tensao +
              " Modalidade Tarifária: " +
              modalidade
          );

          var maxValueTeP = 0;
          var maxValueTeFp = 0;

          resultadosFiltrados.forEach(function (json) {
            if (json["DscUnidadeTerciaria"] === "kW") {
              if (json["NomPostoTarifario"] === "Ponta") {
                tusdKwValueP = parseFloat(json["VlrTUSD"].replace(",", "."));
              } else if (json["NomPostoTarifario"] === "Fora ponta") {
                tusdKwValueFp = parseFloat(json["VlrTUSD"].replace(",", "."));
              } else if (
                json["NomPostoTarifario"] === "Não se aplica" &&
                json["DscModalidadeTarifaria"] === "Verde"
              ) {
                tusdKwValueP = parseFloat(json["VlrTUSD"].replace(",", "."));
              }
            } else if (json["DscUnidadeTerciaria"] === "MWh") {
              if (json["NomPostoTarifario"] === "Ponta") {
                tusdMWhValueP = parseFloat(json["VlrTUSD"].replace(",", "."));
                var teMWhValue = parseFloat(json["VlrTE"].replace(",", "."));
                if (teMWhValue > maxValueTeP) {
                  maxValueTeP = teMWhValue;
                }
              } else if (json["NomPostoTarifario"] === "Fora ponta") {
                if (json["DscModalidadeTarifaria"] === "Azul") {
                  tusdMWhValueFp = parseFloat(
                    json["VlrTUSD"].replace(",", ".")
                  );
                } else if (
                  json["DscModalidadeTarifaria"] === "Verde" &&
                  json["NomPostoTarifario"] === "Não se aplica"
                ) {
                  tusdKwValueFp = 0;
                } else {
                  tusdMWhValueFp = parseFloat(
                    json["VlrTUSD"].replace(",", ".")
                  );
                }
                var teMWhValue = parseFloat(json["VlrTE"].replace(",", "."));
                if (teMWhValue > maxValueTeFp) {
                  maxValueTeFp = teMWhValue;
                }
                distDscReh = json["DscREH"];
              }
            }
          });

          inpDistribuidora = distribuidora;
          inpModalidade = modalidade;
          inpTensao = tensao;
          catDscReh = distDscReh;

          catKwTusdValueP = tusdKwValueP;
          catKwTusdValueFp = tusdKwValueFp;
          catMwhTusdValueP = tusdMWhValueP;
          catMwhTusdValueFp = tusdMWhValueFp;
          catMwhTeValueP = maxValueTeP;
          catMwhTeValueFp = maxValueTeFp;

          console.log("Valor do kW na TUSD na ponta", tusdKwValueP);
          console.log("Valor do kW na TUSD Fora ponta", tusdKwValueFp);
          console.log("Valor do MWh na TUSD na ponta", tusdMWhValueP);
          console.log("Valor do MWh na TUSD Fora ponta", tusdMWhValueFp);
          console.log("Valor do MWh na TE na Ponta: ", maxValueTeP);
          console.log("Valor do MWh na TE Fora Ponta: ", maxValueTeFp);

          console.log(catDscReh);
          console.log(
            catKwTusdValueP,
            catKwTusdValueFp,
            catMwhTusdValueP,
            catMwhTusdValueFp,
            catMwhTeValueP,
            catMwhTeValueFp
          );

          console.log("Jsons válidos para busca: ", resultadosFiltrados);
          return resultadosFiltrados;
        }

        function getLivreProfile() {
          var distribuidora = selectDistribuidoras.value;
          var tensao = selectTensaoAcl.value;
          var modalidade = selectModalidadeAcl.value;

          var distDscReh;
          var tusdKwValueP = 0;
          var tusdKwValueFp = 0;
          var tusdMWhValueP = 0;
          var tusdMWhValueFp = 0;
          var teMwhValueP = 0;
          var teMwhValueFp = 0;

          var resultadosFiltrados = jsonData.filter(function (json) {
            return (
              json["SigAgente"] === distribuidora &&
              json["DscSubGrupo"] === tensao &&
              json["DscModalidadeTarifaria"] === modalidade
            );
          });
          console.log("Perfil Livre");
          console.log(
            "Busca: \n Distribuidora: " +
              distribuidora +
              " Tensão: " +
              tensao +
              " Modalidade Tarifária: " +
              modalidade
          );

          var maxValueTeP = 0;
          var maxValueTeFp = 0;

          resultadosFiltrados.forEach(function (json) {
            if (json["DscUnidadeTerciaria"] === "kW") {
              if (json["NomPostoTarifario"] === "Ponta") {
                tusdKwValueP = parseFloat(json["VlrTUSD"].replace(",", "."));
              } else if (json["NomPostoTarifario"] === "Fora ponta") {
                tusdKwValueFp = parseFloat(json["VlrTUSD"].replace(",", "."));
              } else if (
                json["NomPostoTarifario"] === "Não se aplica" &&
                json["DscModalidadeTarifaria"] === "Verde"
              ) {
                tusdKwValueP = parseFloat(json["VlrTUSD"].replace(",", "."));
              }
            } else if (json["DscUnidadeTerciaria"] === "MWh") {
              if (json["NomPostoTarifario"] === "Ponta") {
                tusdMWhValueP = parseFloat(json["VlrTUSD"].replace(",", "."));
                var teMWhValue = parseFloat(json["VlrTE"].replace(",", "."));
                if (teMWhValue > maxValueTeP) {
                  maxValueTeP = teMWhValue;
                }
              } else if (json["NomPostoTarifario"] === "Fora ponta") {
                if (json["DscModalidadeTarifaria"] === "Azul") {
                  tusdMWhValueFp = parseFloat(
                    json["VlrTUSD"].replace(",", ".")
                  );
                } else if (
                  json["DscModalidadeTarifaria"] === "Verde" &&
                  json["NomPostoTarifario"] === "Não se aplica"
                ) {
                  tusdKwValueFp = 0;
                } else {
                  tusdMWhValueFp = parseFloat(
                    json["VlrTUSD"].replace(",", ".")
                  );
                }
                var teMWhValue = parseFloat(json["VlrTE"].replace(",", "."));
                if (teMWhValue > maxValueTeFp) {
                  maxValueTeFp = teMWhValue;
                  distDscReh = json["DscREH"];
                }
              }
            }
          });

          inpDistribuidora = distribuidora;
          inpModalidade = modalidade;
          inptensao = tensao;
          livreDscReh = distDscReh;

          livreKwTusdValueP = tusdKwValueP;
          livreKwTusdValueFp = tusdKwValueFp;
          livreMwhTusdValueP = tusdMWhValueP;
          livreMwhTusdValueFp = tusdMWhValueFp;
          livreMwhTeValuep = maxValueTeP;
          livreMwhTeValueFp = maxValueTeFp;

          console.log("Valor do kW na TUSD na ponta", tusdKwValueP);
          console.log("Valor do kW na TUSD Fora ponta", tusdKwValueFp);
          console.log("Valor do MWh na TUSD na ponta", tusdMWhValueP);
          console.log("Valor do MWh na TUSD Fora ponta", tusdMWhValueFp);
          console.log("Valor do MWh na TE na Ponta: ", maxValueTeP);
          console.log("Valor do MWh na TE Fora Ponta: ", maxValueTeFp);
          console.log(livreDscReh);

          console.log(
            livreKwTusdValueP,
            livreKwTusdValueFp,
            livreMwhTusdValueP,
            livreMwhTusdValueFp,
            livreMwhTeValuep,
            livreMwhTeValueFp
          );

          console.log("Jsons válidos para busca: ", resultadosFiltrados);
          return resultadosFiltrados;
        }
      })

      .catch((error) => {
        console.error("Erro ao carregar JSON:", error);
        window.alert(
          "Erro ao carregar as informações das distribuidoras, tente novamente mais tarde."
        );
      });
  });
}
