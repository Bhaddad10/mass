
function loginPage(){

  window.location.href = "index.html"
}

function homePage(){

  window.location.href = "home.html"
}

function goSimulator(){

  window.location.href = "simulador.html"
}

function goProjection(){

  window.location.href = "projecao.html"
}

function goResult(){

  window.location.href = "result.html"
}
document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};