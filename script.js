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
  var impostos = urlParameters["imposto"];
  var icmsNaTusd = urlParameters["icms-na-tusd"];
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
  var descontoEnergia = urlParameters["desconto-energia"];
  var reajusteAcl = urlParameters["reajusteacl"];
  var reajusteCat = urlParameters["reajustecat"];
  var anoMigracao = urlParameters["anomigracao"];
  var mesMigracao = urlParameters["mesmigracao"];
  var preco1 = urlParameters["preco1"];
  var preco2 = urlParameters["preco2"];
  var preco3 = urlParameters["preco3"];
  var preco4 = urlParameters["preco4"];
  var preco5 = urlParameters["preco5"];
  var geracao = urlParameters["geracao"];
  var montanteDiesel = urlParameters["montanteDiesel"];
  var tarifaDiesel = urlParameters["tarifaDiesel"];
  var tarifaCovid = urlParameters["tarifaCovid"];
  var tarifaEscassez = urlParameters["tarifaEscassez"];

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
    pisCofins,
    impostos,
    icmsNaTusd,
    modalidade,
    livreKwTusdValueP,
    livreKwTusdValueFp,
    livreMwhTusdValueP,
    livreMwhTusdValueFp,
    livreMwhTeValueP,
    livreMwhTeValueFp,
    perdas,
    custoAdicional,
    custoAdicionalValue,
    modalidadeAcl,
    tensaoAcl,
    tensao,
    distribuidora,
    descontoEnergia,
    precoEnergia,
    catDscReh,
    livreDscReh,
    tipoCalculo,
    anosProjetados,
    mediaPrecoEnergia,
    reajusteAcl,
    reajusteCat,
    anoMigracao,
    mesMigracao,
    preco1,
    preco2,
    preco3,
    preco4,
    preco5,
    geracao,
    montanteDiesel,
    tarifaDiesel,
    tarifaEscassez,
    tarifaCovid
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
  pisCofins,
  impostos,
  icmsNaTusd,
  modalidade,
  livreKwTusdValueP,
  livreKwTusdValueFp,
  livreMwhTusdValueP,
  livreMwhTusdValueFp,
  livreMwhTeValueP,
  livreMwhTeValueFp,
  perdas,
  custoAdicional,
  custoAdicionalValue,
  modalidadeAcl,
  tensaoAcl,
  tensao,
  distribuidora,
  descontoEnergia,
  precoEnergia,
  catDscReh,
  livreDscReh,
  tipoCalculo,
  anosProjetados,
  mediaPrecoEnergia,
  reajusteAcl,
  reajusteCat,
  anoMigracao,
  mesMigracao,
  preco1,
  preco2,
  preco3,
  preco4,
  preco5,
  geracao,
  montanteDiesel,
  tarifaDiesel,
  tarifaEscassez,
  tarifaCovid
) {
  ///////////////////////////////////////////////////////////////
  var perfilCativo = document.getElementById("perfil-cativo");
  perfilCativo.textContent = tensao;
  var modalidadeCativo = document.getElementById("modalidade-cativo");
  modalidadeCativo.textContent = modalidade;
  var bandeiraTarifaria = document.getElementById("bandeira-tarifaria");
  bandeiraTarifaria.textContent = bandeira;
  var dist = document.getElementById("distribuidora");
  dist.textContent = distribuidora;
  var resolucao = document.getElementById("resolucao");
  resolucao.textContent = catDscReh;
  //////////////////////////////////////////////////////////////////
  var perfilLivre = document.getElementById("perfil-livre");
  perfilLivre.textContent = tensaoAcl;
  var modalidadeLivre = document.getElementById("modalidade-livre");

  modalidadeLivre.textContent = modalidadeAcl;
  var valorEnergia = document.getElementById("valor-energia");
  valorEnergia.textContent = "R$" + precoEnergia;
  var icmsValue = document.getElementById("icms-value");
  icmsValue.textContent = icms + "%";
  var pisCofinsValue = document.getElementById("pis-cofins-value");
  pisCofinsValue.textContent = pisCofins + "%";
  var comSemImpostos = document.getElementById("com-sem-impostos");
  comSemImpostos.textContent = impostos;
  var descontoDaEnergia = document.getElementById("desconto-energia");
  if (descontoEnergia != 0) {
    descontoDaEnergia.textContent = "Incentivada " + descontoEnergia + "%";
  } else {
    descontoDaEnergia.textContent = "Convencional";
  }
  ////////////////////////////////////////////////////////////////////////
  //Preencher tabela de consumidor cativo

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
  var text1 = document.getElementById("text-tdp");
  var text2 = document.getElementById("text-dfp");
  if (modalidade == "Verde") {
    text1.textContent = "1. TUSD Demanda";
    text2.textContent = "2.";
    var maiorDemanda = Math.max(demandaPonta, demandaForaPonta);
    var maiorTarifa = Math.max(tusdKwValueP, tusdKwValueFp);
    var catDemandaPontaValue = parseFloat(maiorDemanda * maiorTarifa);
    catTusdDemandaPonta.textContent = maiorDemanda + " kW";
    catKwValueP.textContent =
      "R$ " + maiorTarifa.toString().replace(".", ",") + " / kW";
    catKwFinalValueP.textContent =
      "R$ " +
      (maiorDemanda * maiorTarifa).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else {
    catDemandaPontaValue = demandaPonta * tusdKwValueP;
    catTusdDemandaPonta.textContent = demandaPonta + " kW";
    catKwValueP.textContent = "R$ " + tusdKwValueP.replace(".", ",") + " / kW";
    catKwFinalValueP.textContent =
      "R$ " +
      (demandaPonta * tusdKwValueP).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }

  //Demanda fora ponta
  var CatDemandaForaPontaValue = 0;
  if (tusdKwValueFp == 0) {
    catTusdDemandaForaPonta.textContent = "-";
    catKwValueFp.textContent = "-";
    catKwFinalValueFp.textContent = "-";
    CatDemandaForaPontaValue = 0;
  } else {
    catTusdDemandaForaPonta.textContent = demandaForaPonta + " kW";
    catKwValueFp.textContent =
      "R$ " + tusdKwValueFp.replace(".", ",") + " / kW";
    catKwFinalValueFp.textContent =
      "R$ " +
      (demandaForaPonta * tusdKwValueFp).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    CatDemandaForaPontaValue = parseFloat(demandaForaPonta * tusdKwValueFp);
  }
  //Consumo Tusd
  //Consumo Ponta
  var catConsumoPontaValue = consumoPonta * tusdMwhValuep;
  catTusdConsumoPonta.textContent = consumoPonta.replace(".", ",") + " MWh";
  catTusdMwhValueP.textContent =
    "R$ " + tusdMwhValuep.replace(".", ",") + " / MWh";
  catMwhFinalValueP.textContent =
    "R$ " +
    (consumoPonta * tusdMwhValuep).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  //Consumo fora ponta
  var catConsumoForaPontaValue = consumoForaPonta * tusdMWhValueFp;
  catTusdConsumoForaPonta.textContent =
    consumoForaPonta.replace(".", ",") + " MWh";
  catTusdMwhValueFp.textContent =
    "R$ " + tusdMWhValueFp.replace(".", ",") + " / MWh";
  catMwhFinalValueFp.textContent =
    "R$ " +
    (tusdMWhValueFp * consumoForaPonta).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //Consumo TE
  //Consumo Ponta
  var catConsumoTePontaValue = consumoPonta * teMwhValuep;
  catTeMwhConsumoPonta.textContent = consumoPonta.replace(".", ",") + " MWh";
  catTeMwhValuep.textContent = "R$ " + teMwhValuep.replace(".", ",") + " / MWh";
  catTeMwhFinalValuep.textContent =
    "R$ " +
    (consumoPonta * teMwhValuep).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  //Consumo Fora Ponta
  var catConsumoTeForaPontaValue = consumoForaPonta * teMwhValueFp;
  catTeMwhConsumoForaPonta.textContent =
    consumoForaPonta.replace(".", ",") + " MWh";
  catTeMwhValueFp.textContent =
    "R$ " + teMwhValueFp.replace(".", ",") + " / MWh";
  catTeMwhFinalValueFp.textContent =
    "R$ " +
    (consumoForaPonta * teMwhValueFp).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //Bandeira tarifaria
  var finalBandeiraValue = 0;
  if (bandeira == "Verde") {
    catBandMwh.textContent = "-";
    catBandMwhValue.textContent = "-";
    catBandFinalValue.textContent = "-";
  } else if (bandeira == "Amarela") {
    var amarela = 13.43;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * amarela;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + amarela.toString().replace(".", ",") + " / MWh";
    catBandFinalValue.textContent =
      "R$ " +
      (aux3 * amarela).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else if (bandeira == "Vermelha P1") {
    var vermelhap1 = 55;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * vermelhap1;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + vermelhap1.toString().replace(".", ",") + " / MWh";
    catBandFinalValue.textContent =
      "R$ " +
      (aux3 * vermelhap1).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else if (bandeira == "Vermelha P2") {
    var vermelhap2 = 94;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * vermelhap2;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + vermelhap2.toString().replace(".", ",") + " / MWh";
    catBandFinalValue.textContent =
      "R$ " +
      (aux3 * vermelhap2).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else if (bandeira == "Média") {
    var media = 31.89;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * media;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + media.toString().replace(".", ",") + " / MWh";
    catBandFinalValue.textContent =
      "R$ " +
      (aux3 * media).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else if (bandeira == "Escassez Hídrica") {
    var escassez = 134;
    var aux1 = parseFloat(consumoPonta);
    var aux2 = parseFloat(consumoForaPonta);
    var aux3 = aux1 + aux2;
    finalBandeiraValue = aux3 * escassez;
    catBandMwh.textContent =
      aux3.toFixed(2).toString().replace(".", ",") + " MWh";
    catBandMwhValue.textContent =
      "R$ " + escassez.toString().replace(".", ",") + " / MWh";
    catBandFinalValue.textContent =
      "R$ " +
      (aux3 * escassez).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
  //Geração diesel
  var valorDieselFinal = 0;

  var campMontante = document.getElementById("diesel-montante");
  var campTarifaDiesel = document.getElementById("diesel-tarifa");
  var dieselTotal = document.getElementById("diesel-total");

  if (geracao == "Sim") {
    campMontante.textContent = montanteDiesel;
    campTarifaDiesel.textContent = tarifaDiesel;
    valorDieselFinal = montanteDiesel * tarifaDiesel;
    dieselTotal.textContent = valorDieselFinal;
  } else {
    valorDieselFinal = 0;
    campMontante.textContent = "-";
    campTarifaDiesel.textContent = "-";
    dieselTotal.textContent = "-";
  }

  //Impostos
  var finalImpostosValue = 0;
  if (impostos == "Sem impostos") {
    finalImpostosValue = 0;
    impostoValue.textContent = "-";
  } else if (impostos == "Com impostos") {
    if (icmsNaTusd == "Sim") {
      //Com icms na tusd
      finalImpostosValue =
        (catDemandaPontaValue +
          CatDemandaForaPontaValue +
          catConsumoPontaValue +
          catConsumoForaPontaValue +
          catConsumoTePontaValue +
          catConsumoTeForaPontaValue +
          finalBandeiraValue) /
          (1 - icms / 100 - pisCofins / 100) -
        (catDemandaPontaValue +
          CatDemandaForaPontaValue +
          catConsumoPontaValue +
          catConsumoForaPontaValue +
          catConsumoTePontaValue +
          catConsumoTeForaPontaValue +
          finalBandeiraValue);
      impostoValue.textContent =
        "R$ " +
        finalImpostosValue.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    } else if (icmsNaTusd == "Não") {
      //Sem icms na TUSD
      finalImpostosValue =
        (catDemandaPontaValue +
          CatDemandaForaPontaValue +
          catConsumoPontaValue +
          catConsumoForaPontaValue) /
          (1 - pisCofins / 100) +
        (catConsumoTePontaValue +
          catConsumoTeForaPontaValue +
          finalBandeiraValue) /
          (1 - icms / 100 - pisCofins / 100) -
        (catDemandaPontaValue +
          CatDemandaForaPontaValue +
          catConsumoPontaValue +
          catConsumoForaPontaValue +
          catConsumoTePontaValue +
          catConsumoTeForaPontaValue +
          finalBandeiraValue);
      impostoValue.textContent =
        "R$ " +
        finalImpostosValue.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    }
  }

  //Calculo de valor total
  var totalCativo =
    catDemandaPontaValue +
    CatDemandaForaPontaValue +
    catConsumoPontaValue +
    catConsumoForaPontaValue +
    catConsumoTePontaValue +
    catConsumoTeForaPontaValue +
    finalBandeiraValue +
    finalImpostosValue +
    valorDieselFinal;

  valorTotal.textContent =
    "R$ " +
    totalCativo.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //Preencher tabela de consumidor livre
  //Demanda Ponta
  var livreTusdKwDemandaPonta = document.getElementById(
    "livre-tusd-demanda-ponta"
  );
  var livreTusdKwDemandaPontaValue = document.getElementById(
    "livre-tusd-kw-dp-value"
  );
  var livreTusdKwDemandaPontaFinalValue = document.getElementById(
    "livre-tusd-kw-dp-final-value"
  );

  if (demandaForaPonta < 500) {
    demandaForaPonta = 500;
  }
  var livreDemandaPontaValue = 0;
  if ((modalidadeAcl = "Verde")) {
    var maiorDemanda = Math.max(demandaPonta, demandaForaPonta);

    var maiorTarifa = Math.max(livreKwTusdValueP, livreKwTusdValueFp);

    livreDemandaPontaValue = parseFloat(maiorDemanda * maiorTarifa);

    livreTusdKwDemandaPonta.textContent = maiorDemanda + " kW";

    livreTusdKwDemandaPontaValue.textContent =
      "R$ " +
      maiorTarifa.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      " / kW";

    livreTusdKwDemandaPontaFinalValue.textContent =
      "R$ " +
      livreDemandaPontaValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else {
    livreDemandaPontaValue = demandaPonta * livreKwTusdValueP;

    livreTusdKwDemandaPonta.textContent =
      demandaPonta.replace(".", ",") + " kW";

    livreTusdKwDemandaPontaValue.textContent =
      "R$ " + livreKwTusdValueP.replace(".", ",") + " / kW";

    livreTusdKwDemandaPontaFinalValue.textContent =
      "R$ " +
      livreDemandaPontaValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }

  //Desconto demanda ponta
  var livreDescTusdKwDemandaPonta = document.getElementById(
    "livre-tusd-desc-demanda-ponta"
  );
  var livreDescTusdKwDemandaPontaValue = document.getElementById(
    "livre-tusd-kw-dp-desc"
  );
  var livreDescTusdKwDemandaPontaFinalValue = document.getElementById(
    "livre-desc-tusd-kw-dp-final-value"
  );

  var descDemandaPontaValue = 0;
  if (modalidadeAcl == "Verde") {
    var maiorDemanda = Math.max(demandaPonta, demandaForaPonta);

    var maiorTarifa = Math.max(livreKwTusdValueP, livreKwTusdValueFp);

    var tarifa = (descontoEnergia * maiorTarifa) / 100;

    descDemandaPontaValue = parseFloat(maiorDemanda * tarifa);

    livreDescTusdKwDemandaPonta.textContent = maiorDemanda + " kW";
    livreDescTusdKwDemandaPontaValue.textContent =
      "R$ " +
      tarifa.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      " / kW";
    livreDescTusdKwDemandaPontaFinalValue.textContent =
      "R$ (" +
      descDemandaPontaValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      ")";
  } else {
    var tarifaDescontoDemandaPonta =
      (livreKwTusdValueP * descontoEnergia) / 100;

    descDemandaPontaValue = demandaPonta * tarifaDescontoDemandaPonta;

    livreDescTusdKwDemandaPonta.textContent =
      demandaPonta.replace(".", ",") + " kW";

    livreDescTusdKwDemandaPontaValue.textContent =
      "R$ " +
      tarifaDescontoDemandaPonta.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      " / kW";

    livreDescTusdKwDemandaPontaFinalValue.textContent =
      "R$ (" +
      descDemandaPontaValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      ")";
  }
  //Demanda Fora ponta
  var livreDemandaForaPonta = demandaForaPonta * livreKwTusdValueFp;
  if (livreKwTusdValueFp != 0) {
    var livreTusdKwDemandaForaPonta = document.getElementById(
      "livre-tusd-demanda-fora-ponta"
    );
    livreTusdKwDemandaForaPonta.textContent =
      demandaForaPonta.replace(".", ",") + " kW";
    var livreTusdKwDemandaForaPontaValue =
      document.getElementById("livre-tusd-kw-dfp");
    livreTusdKwDemandaForaPontaValue.textContent =
      "R$ " + livreKwTusdValueFp.replace(".", ",") + " / kW";
    var livreTusdKwDemandaForaPontaFinalValue = document.getElementById(
      "livre-tusd-kw-dfp-final-value"
    );
    livreTusdKwDemandaForaPontaFinalValue.textContent =
      "R$ " +
      livreDemandaForaPonta.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else {
    var livreTusdKwDemandaForaPonta = document.getElementById(
      "livre-tusd-demanda-fora-ponta"
    );
    livreTusdKwDemandaForaPonta.textContent = "-";
    var livreTusdKwDemandaForaPontaValue =
      document.getElementById("livre-tusd-kw-dfp");
    livreTusdKwDemandaForaPontaValue.textContent = "-";
    var livreTusdKwDemandaForaPontaFinalValue = document.getElementById(
      "livre-tusd-kw-dfp-final-value"
    );
    livreTusdKwDemandaForaPontaFinalValue.textContent = "-";
  }
  //Desconto demanda fora ponta
  var tarifaDescontoDemandaForaPonta =
    (livreKwTusdValueFp * descontoEnergia) / 100;
  var descontoDemandaForaPonta =
    demandaForaPonta * tarifaDescontoDemandaForaPonta;
  if (modalidadeAcl == "Verde") {
    var livreDescTusdKwDemandaForaPonta = document.getElementById(
      "livre-tusd-desc-demanda-fora-ponta"
    );
    livreDescTusdKwDemandaForaPonta.textContent = "-";
    var livreDescTusdKwDemandaForaPontaValue = document.getElementById(
      "livre-tusd-kw-dfp-desc"
    );
    livreDescTusdKwDemandaForaPontaValue.textContent = "-";
    var livreDescTusdKwDemandaForaPontaFinalValue = document.getElementById(
      "livre-desc-tusd-kw-dfp-final-value"
    );
    livreDescTusdKwDemandaForaPontaFinalValue.textContent = "-";
  } else {
    var livreDescTusdKwDemandaForaPonta = document.getElementById(
      "livre-tusd-desc-demanda-fora-ponta"
    );
    livreDescTusdKwDemandaForaPonta.textContent =
      demandaForaPonta.replace(".", ",") + " kW";
    var livreDescTusdKwDemandaForaPontaValue = document.getElementById(
      "livre-tusd-kw-dfp-desc"
    );
    livreDescTusdKwDemandaForaPontaValue.textContent =
      "R$ " +
      tarifaDescontoDemandaForaPonta.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      " / kW";
    var livreDescTusdKwDemandaForaPontaFinalValue = document.getElementById(
      "livre-desc-tusd-kw-dfp-final-value"
    );
    livreDescTusdKwDemandaForaPontaFinalValue.textContent =
      "R$ (" +
      descontoDemandaForaPonta.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      ")";
  }
  //Consumo Ponta
  var livreConsumoPonta = consumoPonta * livreMwhTusdValueP;
  var livreTusdMwhConsumoPonta = document.getElementById(
    "livre-tusd-consumo-ponta"
  );
  livreTusdMwhConsumoPonta.textContent =
    consumoPonta.replace(".", ",") + " MWh";
  var livreTusdMwhConsumoPontaValue = document.getElementById(
    "livre-tusd-mwh-p-value"
  );
  livreTusdMwhConsumoPontaValue.textContent =
    "R$ " + livreMwhTusdValueP.replace(".", ",") + " / MWh";
  var livreTusdMwhConsumoPontaValueFinalValue = document.getElementById(
    "livre-tusd-mwh-p-final-value"
  );
  livreTusdMwhConsumoPontaValueFinalValue.textContent =
    "R$ " +
    livreConsumoPonta.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  //Consumo Fora ponta
  var livreConsumoForaPonta = consumoForaPonta * livreMwhTusdValueFp;
  var livreMwhConsumoForaPonta = document.getElementById(
    "livre-tusd-consumo-fora-ponta"
  );
  livreMwhConsumoForaPonta.textContent =
    consumoForaPonta.replace(".", ",") + " MWh";
  var livreMwhConsumoForaPontaValue = document.getElementById(
    "livre-tusd-mwh-fp-value"
  );
  livreMwhConsumoForaPontaValue.textContent =
    "R$ " + livreMwhTusdValueFp.replace(".", ",") + " / MWh";
  var livreMwhConsumoForaPontaFinalValue = document.getElementById(
    "livre-tusd-mwh-fp-final-value"
  );
  livreMwhConsumoForaPontaFinalValue.textContent =
    "R$" +
    livreConsumoForaPonta.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //Desconto tusd encargo ponta
  var tarifaDescontoEncargo =
    ((livreMwhTusdValueP - livreMwhTusdValueFp) * descontoEnergia) / 100;
  var descontoEncargo = consumoPonta * tarifaDescontoEncargo;
  if (modalidadeAcl == "Verde") {
    var livreMwhDescontoEncargoPonta = document.getElementById(
      "livre-tusd-mwh-encargo"
    );
    livreMwhDescontoEncargoPonta.textContent =
      consumoPonta.replace(".", ",") + " MWh";
    var livreMwhDescontoEncargoPontaValue = document.getElementById(
      "livre-tusd-encargo-mwh-value"
    );
    livreMwhDescontoEncargoPontaValue.textContent =
      "R$ " +
      tarifaDescontoEncargo.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      " / MWh";
    var livreMwhDescontoEncargoPontaFinalValue = document.getElementById(
      "livre-tusd-encargo-mwh-final-value"
    );
    livreMwhDescontoEncargoPontaFinalValue.textContent =
      "R$ (" +
      descontoEncargo.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      ")";
  } else {
    var livreMwhDescontoEncargoPonta = document.getElementById(
      "livre-tusd-mwh-encargo"
    );
    livreMwhDescontoEncargoPonta.textContent = "-";
    var livreMwhDescontoEncargoPontaValue = document.getElementById(
      "livre-tusd-encargo-mwh-value"
    );
    var tarifaDescontoEncargo =
      ((tusdMwhValuep - tusdMWhValueFp) * descontoEnergia) / 100;
    livreMwhDescontoEncargoPontaValue.textContent = "-";
    var livreMwhDescontoEncargoPontaFinalValue = document.getElementById(
      "livre-tusd-encargo-mwh-final-value"
    );
    livreMwhDescontoEncargoPontaFinalValue.textContent = "-";
  }

  //Custo ccee
  var montanteCustoCcee =
    (consumoPonta * 1 + consumoForaPonta * 1) * (1 + perdas / 100);
  var tarifaCustoCcee = precoEnergia * (1 - 9.25 / 100);
  var livreCustoCcee = document.getElementById("custo-ccee-consumo");
  livreCustoCcee.textContent =
    montanteCustoCcee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " MWh";
  var livreCustoCceeValue = document.getElementById("custo-ccee-tarifa");
  livreCustoCceeValue.textContent = "R$ " + 35 + " / MWh";
  var livreCustoCceeFinalValue = document.getElementById(
    "custo-cee-final-value"
  );
  var custoTotalCcee = montanteCustoCcee * 35;
  livreCustoCceeFinalValue.textContent =
    "R$ " +
    custoTotalCcee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  //Energia livre
  var energiaLivre = montanteCustoCcee * tarifaCustoCcee;
  var livreEnergiaLivre = document.getElementById("energia-livre-consumo");
  livreEnergiaLivre.textContent =
    montanteCustoCcee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " MWh";
  var livreEnergiaLivreValue = document.getElementById("energia-livre-tarifa");
  livreEnergiaLivreValue.textContent =
    "R$ " +
    tarifaCustoCcee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) +
    " / MWh";
  var livreEnergiaLivreFinalValue = document.getElementById(
    "energia-livre-final-value"
  );
  livreEnergiaLivreFinalValue.textContent =
    "R$ " +
    energiaLivre.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  ////////////////////////////////////////////////////////
  //custocovid e escassez
  var montanteCovid = document.getElementById("conta-covid-consumo");
  var covidTarifa = document.getElementById("conta-covid-tarifa");
  var covidFinalValue = document.getElementById("conta-covid-final-value");

  montanteCovid.textContent =
    montanteCustoCcee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " MWh";
  covidTarifa.textContent = "R$ " + tarifaCovid + " /MWh";
  covidFinalValue.textContent =
    "R$ " +
    (montanteCustoCcee * tarifaCovid).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  var montanteEscassez = document.getElementById("escassez-hidrica-consumo");
  var escassezTarifa = document.getElementById("escassez-hidrica-tarifa");
  var escassezFinalValue = document.getElementById(
    "escassez-hidrica-final-value"
  );

  montanteEscassez.textContent =
    montanteCustoCcee.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " MWh";
  escassezTarifa.textContent = "R$ " + tarifaEscassez + " /MWh";
  escassezFinalValue.textContent =
    "R$" +
    (montanteCustoCcee * tarifaEscassez).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  //Imposto energia livre
  var impEnergiaLivre =
    ((energiaLivre / (1 - 9.25 / 100)) * 9.25) / 100 +
    ((energiaLivre / (1 - 9.25 / 100) / (1 - icms / 100)) * icms) / 100;
  var livreImpostoEnergiaLivreValue =
    document.getElementById("imposto-el-value");
  livreImpostoEnergiaLivreValue.textContent =
    "R$ " +
    impEnergiaLivre.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //Imposto energia livre distribuidora
  /////////////////////////////////////////////Tipo 1
  //Sem icms na tusd
  var livreImpostoEnergiaLivreDistribuidoraValue =
    document.getElementById("imposto-eld-value");
  var impEnergiaLivreDist = 0;
  if (tipoCalculo == "tipo1") {
    if (icmsNaTusd == "Não") {
      impEnergiaLivreDist =
        (livreDemandaPontaValue +
          -descDemandaPontaValue +
          livreDemandaForaPonta +
          -descontoDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta) /
          (1 - icms / 100) -
        (livreDemandaPontaValue +
          -descDemandaPontaValue +
          livreDemandaForaPonta +
          -descontoDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta);
    }
    //Com icms na tusd
    else {
      impEnergiaLivreDist =
        (livreDemandaPontaValue +
          -descDemandaPontaValue +
          livreDemandaForaPonta +
          -descontoDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta) /
          (1 - icms / 100 - pisCofins / 100) -
        (livreDemandaPontaValue +
          -descDemandaPontaValue +
          livreDemandaForaPonta +
          -descontoDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta);
    }
  } //////////////////////////////////////////////////////Tipo2
  else {
    if (icmsNaTusd == "Não") {
      impEnergiaLivreDist =
        (livreDemandaPontaValue +
          livreDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta) /
          (1 - icms / 100) -
        (livreDemandaPontaValue +
          livreDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta);
    } else {
      impEnergiaLivreDist =
        (livreDemandaPontaValue +
          livreDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta) /
          (1 - icms / 100 - pisCofins / 100) -
        (livreDemandaPontaValue +
          livreDemandaForaPonta +
          livreConsumoPonta +
          livreConsumoForaPonta);
    }
  }

  console.log(impEnergiaLivreDist);
  livreImpostoEnergiaLivreDistribuidoraValue.textContent =
    "R$ " +
    impEnergiaLivreDist.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  //acessoria
  var custoAcessoria = 0;
  var acessoriaValue = document.getElementById("acessoria-value");
  if (custoAdicionalValue != 0) {
    custoAcessoria = parseFloat(custoAdicionalValue);
    acessoriaValue.textContent =
      "R$ " +
      custoAdicionalValue.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  } else {
    custoAcessoria = 0;
    acessoriaValue.textContent = "-";
  }

  //Total Livre
  var livreTotalValue =
    livreDemandaPontaValue +
    -descDemandaPontaValue +
    livreDemandaForaPonta +
    -descontoDemandaForaPonta +
    livreConsumoPonta +
    livreConsumoForaPonta +
    -descontoEncargo +
    custoTotalCcee +
    energiaLivre +
    impEnergiaLivre +
    impEnergiaLivreDist +
    custoAcessoria;
  var totalLivre = document.getElementById("total-livre");
  totalLivre.textContent =
    "R$ " +
    (
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      energiaLivre +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria
    ).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  ///////////////////////////
  var resultTotalCativo = document.getElementById("result-total-cativo");
  resultTotalCativo.textContent =
    "R$ " +
    totalCativo.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  var resultTotalLivre = document.getElementById("result-total-livre");
  resultTotalLivre.textContent =
    "R$ " +
    livreTotalValue.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  var economiaMensal = document.getElementById("economia-mensal");
  economiaMensal.textContent =
    "(" +
    (((totalCativo - livreTotalValue) / totalCativo) * 100).toFixed(0) +
    "%" +
    ")" +
    "R$ " +
    (totalCativo - livreTotalValue).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  /////////////////////////
  var totalCativoAnual = totalCativo * 12;
  var totalLivreAnual = livreTotalValue * 12;
  var resultadoAnual = totalCativoAnual - totalLivreAnual;
  var resultTotalCativo = document.getElementById("result-total-cativo-anual");
  resultTotalCativo.textContent =
    "R$ " +
    (totalCativo * 12).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  var resultTotalLivre = document.getElementById("result-total-livre-anual");
  resultTotalLivre.textContent =
    "R$ " +
    (livreTotalValue * 12).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  var economiaMensal = document.getElementById("economia-mensal-anual");
  economiaMensal.textContent =
    "(" +
    ((resultadoAnual / totalCativoAnual) * 100).toFixed(0) +
    "%)" +
    "R$ " +
    resultadoAnual.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  ///////////////////////////////
  totalCativo = totalCativo * 12;
  livreTotalValue = livreTotalValue * 12;
  var eco = totalCativo - livreTotalValue;
  var xValues = ["Cativo", "Livre", "Economia"];
  var yValues = [totalCativo, livreTotalValue, eco];
  var barColors = ["red", "green", "blue"];

  new Chart(grafico, {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "R$",
          data: yValues,
          backgroundColor: barColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true, // Define se a legenda será exibida ou não
          position: "top",
          labels: {
            boxWidth: 20,
            font: {
              size: 12,
            },
          },
        },
        title: {
          display: true,
          text: "Gráfico de Economia Anual",
          font: {
            size: 20,
          },
          color: "black",
        },
      },
    },
  });

  preencherProjecao();

  function preencherProjecao() {
    var tableBody = document.getElementById("tableBody");

    var mesDeMigra = 0;

    if (mesMigracao == "Janeiro") {
      mesDeMigra = 12;
    } else if (mesMigracao == "Fevereiro") {
      mesDeMigra = 11;
    } else if (mesMigracao == "Março") {
      mesDeMigra = 10;
    } else if (mesMigracao == "Abril") {
      mesDeMigra = 9;
    } else if (mesMigracao == "Maio") {
      mesDeMigra = 8;
    } else if (mesMigracao == "Junho") {
      mesDeMigra = 7;
    } else if (mesMigracao == "Julho") {
      mesDeMigra = 6;
    } else if (mesMigracao == "Agosto") {
      mesDeMigra = 5;
    } else if (mesMigracao == "Setembro") {
      mesDeMigra = 4;
    } else if (mesMigracao == "Outubro") {
      mesDeMigra = 3;
    } else if (mesMigracao == "Novembro") {
      mesDeMigra = 2;
    } else if (mesMigracao == "Dezembro") {
      mesDeMigra = 1;
    }

    var custoDistribuidora = 0;
    var custAcl = 0;
    var precoDaEnergia = precoEnergia;
    var ecoMensal = 0;
    var ecoPrctg = 0;

    var projCustoCcee = 0;

    projCustoCcee = precoDaEnergia * (1 - 9.25 / 100);

    var projEnergiaLivre = montanteCustoCcee * projCustoCcee;

    custoDistribuidora = totalCativo / 12;

    custAcl =
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      projEnergiaLivre +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria;

    ecoMensal = custoDistribuidora - custAcl;

    ecoPrctg = parseFloat(ecoMensal) / parseFloat(custoDistribuidora);

    var dataAtual = new Date();

    var mesAtual = dataAtual.getMonth();

    var mesesRestatantes = 11 - mesAtual;

    var ano1 = ecoMensal * parseFloat(mesesRestatantes);

    //////////////////////////////////////////////////////////////////////////
    var custoDistAno1 = 0;
    var custoAclano1 = 0;
    var ecoMensalAno1 = 0;
    var ecoPrtcgAno1 = 0;
    var ecoAnualAno1 = 0;

    var projCustoCceeAno1 = 0;
    var projEnergiaLivreAno1 = 0;

    projCustoCceeAno1 = preco1 * (1 - 9.25 / 100);

    projEnergiaLivreAno1 = projCustoCceeAno1 * montanteCustoCcee;

    custoDistAno1 = totalCativo / 12;

    custoAclano1 =
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      projEnergiaLivreAno1 +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria;

    ecoMensalAno1 = custoDistAno1 - custoAclano1;

    ecoPrtcgAno1 =
      (parseFloat(ecoMensalAno1) / parseFloat(custoDistAno1)) * 100;

    ecoAnualAno1 = ecoMensalAno1 * parseFloat(mesDeMigra);
    //////////////////////////////////////////////////////////////////////////
    var custoDistAno2 = 0;
    var custoAclano2 = 0;
    var ecoMensalAno2 = 0;
    var ecoPrtcgAno2 = 0;
    var ecoAnualAno2 = 0;

    var projCustoCceeAno2 = 0;
    var projEnergiaLivreAno2 = 0;

    projCustoCceeAno2 = preco2 * (1 - 9.25 / 100);

    projEnergiaLivreAno2 = projCustoCceeAno2 * montanteCustoCcee;

    custoDistAno2 = custoDistAno1 * (1 + reajusteCat / 100);

    custoAclano2 =
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      projEnergiaLivreAno2 +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria;

    custoAclano2 = custoAclano2 * (1 + reajusteAcl / 100);

    ecoMensalAno2 = custoDistAno2 - custoAclano2;

    ecoPrtcgAno2 =
      (parseFloat(ecoMensalAno2) / parseFloat(custoDistAno2)) * 100;

    ecoAnualAno2 = ecoMensalAno2 * 12;
    //////////////////////////////////////////////////////////////////////////

    var custoDistAno3 = 0;
    var custoAclano3 = 0;
    var ecoMensalAno3 = 0;
    var ecoPrtcgAno3 = 0;
    var ecoAnualAno3 = 0;

    var projCustoCceeAno3 = 0;
    var projEnergiaLivreAno3 = 0;

    projCustoCceeAno3 = preco3 * (1 - 9.25 / 100) * (1 - 9.25 / 100);

    projEnergiaLivreAno3 = projCustoCceeAno3 * montanteCustoCcee;

    custoDistAno3 = custoDistAno2 * (1 + reajusteCat / 100);

    custoAclano3 =
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      projEnergiaLivreAno3 +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria;

    custoAclano3 = custoAclano2 * (1 + reajusteAcl / 100);

    ecoMensalAno3 = custoDistAno3 - custoAclano3;

    ecoPrtcgAno3 =
      (parseFloat(ecoMensalAno3) / parseFloat(custoDistAno3)) * 100;

    ecoAnualAno3 = ecoMensalAno3 * 12;
    //////////////////////////////////////////////////////////////////////////

    var custoDistAno4 = 0;
    var custoAclano4 = 0;
    var ecoMensalAno4 = 0;
    var ecoPrtcgAno4 = 0;
    var ecoAnualAno4 = 0;

    var projCustoCceeAno4 = 0;
    var projEnergiaLivreAno4 = 0;

    projCustoCceeAno4 = preco4 * (1 - 9.25 / 100) * (1 - 9.25 / 100);

    projEnergiaLivreAno4 = projCustoCceeAno4 * montanteCustoCcee;

    custoDistAno4 = custoDistAno3 * (1 + reajusteCat / 100);

    custoAclano4 =
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      projEnergiaLivreAno4 +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria;

    custoAclano4 = custoAclano3 * (1 + reajusteAcl / 100);

    ecoMensalAno4 = custoDistAno4 - custoAclano4;

    ecoPrtcgAno4 =
      (parseFloat(ecoMensalAno4) / parseFloat(custoDistAno4)) * 100;

    ecoAnualAno4 = ecoMensalAno4 * 12;
    //////////////////////////////////////////////////////////////////////////

    var custoDistAno5 = 0;
    var custoAclano5 = 0;
    var ecoMensalAno5 = 0;
    var ecoPrtcgAno5 = 0;
    var ecoAnualAno5 = 0;

    var projCustoCceeAno5 = 0;
    var projEnergiaLivreAno5 = 0;

    projCustoCceeAno5 = preco5 * (1 - 9.25 / 100) * (1 - 9.25 / 100);

    projEnergiaLivreAno5 = projCustoCceeAno5 * montanteCustoCcee;

    custoDistAno5 = custoDistAno4 * (1 + reajusteCat / 100);

    custoAclano5 =
      livreDemandaPontaValue +
      -descDemandaPontaValue +
      livreDemandaForaPonta +
      -descontoDemandaForaPonta +
      livreConsumoPonta +
      livreConsumoForaPonta +
      -descontoEncargo +
      custoTotalCcee +
      projEnergiaLivreAno5 +
      impEnergiaLivre +
      impEnergiaLivreDist +
      custoAcessoria;

    custoAclano5 = custoAclano4 * (1 + reajusteAcl / 100);

    ecoMensalAno5 = custoDistAno5 - custoAclano5;

    ecoPrtcgAno5 =
      (parseFloat(ecoMensalAno5) / parseFloat(custoDistAno5)) * 100;

    ecoAnualAno5 = ecoMensalAno5 * 12;
    //////////////////////////////////////////////////////////////////////////

    var rowAno1 = document.createElement("tr");
    var rowAno2 = document.createElement("tr");
    var rowAno3 = document.createElement("tr");
    var rowAno4 = document.createElement("tr");
    var rowAno5 = document.createElement("tr");
    var rowMedia = document.createElement("tr");

    rowMedia.innerHTML = `
    <td>${"Média/Total"}
    <td>${
      "R$" +
      (
        parseFloat(
          custoDistAno1 +
            custoDistAno2 +
            custoDistAno3 +
            custoDistAno4 +
            custoDistAno5
        ) / 5
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    }
    <td>${
      "R$" +
      (
        parseFloat(
          custoAclano1 +
            custoAclano2 +
            custoAclano3 +
            custoAclano4 +
            custoAclano5
        ) / 5
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    }
    <td>${
      "R$" +
      (
        (parseFloat(preco1) +
          parseFloat(preco2) +
          parseFloat(preco3) +
          parseFloat(preco4) +
          parseFloat(preco5)) /
        5
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    }
    <td>${
      "R$" +
      (
        parseFloat(
          ecoMensalAno1 +
            ecoMensalAno2 +
            ecoMensalAno3 +
            ecoMensalAno4 +
            ecoMensalAno5
        ) / 5
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    }
    <td>${(
      (
        (ecoPrtcgAno1 +
          ecoPrtcgAno2 +
          ecoPrtcgAno3 +
          ecoPrtcgAno4 +
          ecoPrtcgAno5) /
        5
      ).toFixed(2) + "%"
    ).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}
    <td>${
      "R$" +
      (
        parseFloat(
          ecoAnualAno1 +
            ecoAnualAno2 +
            ecoAnualAno3 +
            ecoAnualAno4 +
            ecoAnualAno5
        ) / 5
      ).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    }

    `;

    rowAno1.innerHTML = `
      <td>${parseFloat(anoMigracao) + " (" + mesMigracao + ")"}</td>
      <td>R$${custoDistAno1.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${custoAclano1.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${preco1.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${ecoMensalAno1.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>${ecoPrtcgAno1.toFixed(2)}%</td>
      <td>R$${ecoAnualAno1.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
    `;
    rowAno2.innerHTML = `
      <td>${parseFloat(anoMigracao) + 1}</td>
      <td>R$${custoDistAno2.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${custoAclano2.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${preco2.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${ecoMensalAno2.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>${ecoPrtcgAno2.toFixed(2)}%</td>
      <td>R$${ecoAnualAno2.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
    `;
    rowAno3.innerHTML = `
      <td>${parseFloat(anoMigracao) + 2}</td>
      <td>R$${custoDistAno3.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${custoAclano3.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${preco3.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${ecoMensalAno3.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>${ecoPrtcgAno3.toFixed(2)}%</td>
      <td>R$${ecoAnualAno3.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
    `;
    rowAno4.innerHTML = `
      <td>${parseFloat(anoMigracao) + 3}</td>
      <td>R$${custoDistAno4.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${custoAclano4.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${preco4.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${ecoMensalAno4.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>${ecoPrtcgAno4.toFixed(2)}%</td>
      <td>R$${ecoAnualAno4.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td> 
    `;
    rowAno5.innerHTML = `
      <td>${parseFloat(anoMigracao) + 4}</td>
      <td>R$${custoDistAno5.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${custoAclano5.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${preco5.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>R$${ecoMensalAno5.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
      <td>${ecoPrtcgAno5.toFixed(2)}%</td>
      <td>R$${ecoAnualAno5.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}</td>
    `;

    tableBody.appendChild(rowAno1);
    tableBody.appendChild(rowAno2);
    tableBody.appendChild(rowAno3);
    tableBody.appendChild(rowAno4);
    tableBody.appendChild(rowAno5);
    tableBody.appendChild(rowMedia);
  }
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
  inpPrecoEnergia = document.getElementById("preco-energia").value;
  inpCustoAdicionalValue = document.getElementById("custo-value").value;
  inpImpostos = document.getElementById("impostos").value;
  inpIcmsNaTusd = document.getElementById("icms-na-tusd").value;
  inpIcms = document.getElementById("icms").value;
  inpPisCofins = document.getElementById("pis-cofins").value;
  inpPerdas = document.getElementById("perdas").value;
  inpTipoCalculo = document.getElementById("calculo").value;
  inpBandeiraTarifaria = document.getElementById("bandeira").value;
  inpDescontoEnergia = document.getElementById("desconto-energia").value;
  reajusteAcl = document.getElementById("reajuste_acl").value;
  reajusteCat = document.getElementById("reajuste_cat").value;
  anoMigracao = document.getElementById("ano_migracao").value;
  mesMigracao = document.getElementById("mes_migracao").value;
  preco1 = document.getElementById("energiaAno1").value;
  preco2 = document.getElementById("energiaAno2").value;
  preco3 = document.getElementById("energiaAno3").value;
  preco4 = document.getElementById("energiaAno4").value;
  preco5 = document.getElementById("energiaAno5").value;
  geracaoDiesel = document.getElementById("geracao").value;
  montanteDiesel = document.getElementById("montante-produzido").value;
  tarifaDiesel = document.getElementById("tarifa-gerador").value;
  inpTarifaCovid = document.getElementById("tarifa-covid").value;
  inpTarifaEscassez = document.getElementById("tarifa-escassez").value;

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
    "&imposto=" +
    encodeURIComponent(inpImpostos) +
    "&icms-na-tusd=" +
    encodeURIComponent(inpIcmsNaTusd) +
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
    encodeURIComponent(livreMwhTeValueFp) +
    "&desconto-energia=" +
    encodeURIComponent(inpDescontoEnergia) +
    "&reajusteacl=" +
    encodeURIComponent(reajusteAcl) +
    "&reajustecat=" +
    encodeURIComponent(reajusteCat) +
    "&anomigracao=" +
    encodeURIComponent(anoMigracao) +
    "&mesmigracao=" +
    encodeURIComponent(mesMigracao) +
    "&preco1=" +
    encodeURIComponent(preco1) +
    "&preco2=" +
    encodeURIComponent(preco2) +
    "&preco3=" +
    encodeURIComponent(preco3) +
    "&preco4=" +
    encodeURIComponent(preco4) +
    "&preco5=" +
    encodeURIComponent(preco5) +
    "&geracao=" +
    encodeURIComponent(geracaoDiesel) +
    "&montanteDiesel=" +
    encodeURIComponent(montanteDiesel) +
    "&tarifaDiesel=" +
    encodeURIComponent(tarifaDiesel) +
    "&tarifaEscassez=" +
    encodeURIComponent(inpTarifaEscassez) +
    "&tarifaCovid=" +
    encodeURIComponent(inpTarifaCovid);
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
var inpImpostos;
var inpIcmsNaTusd;
var mesMigracao;
var geracaoDiesel;

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
var reajusteAcl = 0;
var reajusteCat = 0;
var anoMigracao = 0;
var preco1 = 0;
var preco2 = 0;
var preco3 = 0;
var preco4 = 0;
var preco5 = 0;
var montanteDiesel = 0;
var tarifaDiesel = 0;
var inpTarifaCovid = 0;
var inpTarifaEscassez = 0;

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
    const selectImpostos = document.getElementById("impostos");
    const inpIcmsNaTusd = document.getElementById("icms-na-tusd");
    const inpicms = document.getElementById("icms");
    const inppiscofins = document.getElementById("pis-cofins");
    const inpPrecoEnergiaTest = document.getElementById("preco-energia");
    const inpPrecoEnergiaAno1 = document.getElementById("energiaAno1");

    inpPrecoEnergiaTest.addEventListener("change", function () {
      inpPrecoEnergiaAno1.value = inpPrecoEnergiaTest.value;
    });

    const url = "https://api-mass.onrender.com/distribuidorasInfo";

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

        selectImpostos.addEventListener("change", function () {
          if (this.value === "Com impostos") {
            inpIcmsNaTusd.disabled = false;
            inpicms.disabled = false;
            inppiscofins.disabled = false;
          } else {
            inpIcmsNaTusd.disabled = true;
            inpicms.disabled = true;
            inppiscofins.disabled = true;
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
          var mod = selectModalidade.value;
          var inpDemandaPonta = document.getElementById("demanda-ponta");
          getCativoProfile();

          if (mod == "Verde") {
            inpDemandaPonta.disabled = true;
          } else {
            inpDemandaPonta.disabled = false;
          }
        });

        selectModalidadeAcl.addEventListener("change", function () {
          getLivreProfile();
        });

        var selectGeracao = document.getElementById("geracao");
        var inpMontanteDiesel = document.getElementById("montante-produzido");
        var inpCustoGerador = document.getElementById("tarifa-gerador");
        selectGeracao.addEventListener("change", function () {
          if (selectGeracao.value == "Sim") {
            inpMontanteDiesel.disabled = false;
            inpCustoGerador.disabled = false;
          } else {
            inpMontanteDiesel.disabled = true;
            inpCustoGerador.disabled = true;
          }
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
          inpTensao = tensao;
          livreDscReh = distDscReh;

          livreKwTusdValueP = tusdKwValueP;
          livreKwTusdValueFp = tusdKwValueFp;
          livreMwhTusdValueP = tusdMWhValueP;
          livreMwhTusdValueFp = tusdMWhValueFp;
          livreMwhTeValueP = maxValueTeP;
          livreMwhTeValueFp = maxValueTeFp;

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
