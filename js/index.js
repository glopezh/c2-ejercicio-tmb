const appKey = "b67dd9c2172aca130360a6c3dfd3b6e5";
const appId = "3fa55726";

const url = "https://api.tmb.cat/v1/ibus/stops/";
const codigoParada = 2775;

const errorElemento = document.querySelector(".error");
const mensajeElemento = document.querySelector(".mensaje");

fetch(`${url}${codigoParada}?app_key=${appKey}&app_id=${appId}`)
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      imprimirError();
      return;
    }
    return response.json();
  })
  .then((datosTMB) => extraerDatos(datosTMB));

const extraerDatos = (datos) => {
  const {
    data:{ ibus },
  } = datos;
  const { line, "text-ca": tiempo } = ibus[0];
  mensajeElemento.textContent = `La linea ${line} llega dentro de ${tiempo}.`;
};

const imprimirError = () => {
  errorElemento.classList.add("on");
};
