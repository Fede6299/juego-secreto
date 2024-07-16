let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let cantidadIntentos = 3;

function asignarTextoElemento(elemento, texto) {
	let elemntoHTML = document.querySelector(elemento);
	elemntoHTML.innerHTML = texto;
}

function verificarIntento() {
	let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

	if (numeroSecreto === numeroUsuario) {
		asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}.`);
		document.querySelector('#reiniciar').removeAttribute('disabled');
	} else {
		if (numeroUsuario > numeroSecreto) {
			asignarTextoElemento('p', 'El número secreto es menor.');
		}
		else {
			asignarTextoElemento('p', 'El número secreto es mayor.');
		}
		intentos++;
		limpiarCaja();
	}
}

function condicionesIniciales() {
	asignarTextoElemento('h1', 'Juego del número secreto');
	asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}, tienes ${cantidadIntentos} ${cantidadIntentos == 1 ? 'intento' : 'intentos'} máximo`);

	numeroSecreto = generarNumeroSecreto();
	intentos = 1;
}

function limpiarCaja() {
	document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

	console.log(numeroGenerado);
	console.log(listaNumerosSorteados);
	
	if (listaNumerosSorteados.length == numeroMaximo) {
		asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
		document.querySelector('#juego').setAttribute('disabled', true);
	} else {
		if (listaNumerosSorteados.includes(numeroGenerado)) {
			return generarNumeroSecreto();
		} else {
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}

function reiniciarJuego() {
	limpiarCaja();
	condicionesIniciales();
	document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();