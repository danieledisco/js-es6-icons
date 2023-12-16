/***
 * Traccia:
 * Milestone 1
 * Partendo dalla struttura dati fornita,
 * visualizzare in pagina un box per ogni icona, 
 * in cui è presente il nome dell'icona e l'icona stessa.
 * 
 * Milestone 2
 * Ciascuna icona ha una proprietà "color": 
 * utilizzare questa proprietà per visualizzare le icone del 
 * colore corrispondente.
 * 
 * Milestone 3
 * Aggiungere alla pagina una select in cui le options 
 * corrispondono ai vari tipi di icone (animal, vegetable, user). 
 * Quando l'utente seleziona un tipo dalla select, 
 * visualizzare solamente le icone corrispondenti.
 * 
 * BONUS
 * 1 - modificare la struttura dati fornita e valorizzare la proprietà "color" 
 *     in modo dinamico: generare in modo casuale un codice colore, 
 *     sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri 
 *     alfanumerici compresi tra 0 e 9 e A e F.
 * 2 - popolare le options della select della milestone 3 dinamicamente.
 */
const listIcons =
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	}
	,
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	}
	,
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	}
	,
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	}
	,
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	}
	,
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
	,
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
	,
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
	,
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
/**
 *  Lista delle variabili (Element) del problema
 */






/**
 *  Inserimento label
 */

// 01 . Selezioniamo l'elemento del DOM a cui agganciare lable e select
const headerDownEl = document.getElementById("header_down");
// 02 . Generiamo l'etichetta 
const labelElement = document.createElement('div');
// 03 . Aggiungiamo la classe presente nel CSS
labelElement.className = "labelSelect";
// 04 . Inseriamo la lable
labelElement.innerHTML += "FILTRA PER TIPO"
// 05 . Agganciamo il div dell'etichetta all'elemento selezionato nel punto 01 
headerDownEl.append(labelElement);  

/**
 *  Inserimento Select
 */

// 06 . Creiamo array con le voci della select
const arrayElementSelect = ['all','animal','vegetable','user'];
// 07 . Creiamo elemento select
const selectEl = document.createElement('select');
// 08 . Aggiungiamo alla select la classe 'selectType'
selectEl.className = 'selectType';
// 09 . Cicliamo sui vari elementi della select
for(let i=0; i<arrayElementSelect.length; i++)
{
	// 09.1 . Creiamo option della select
	const opt = document.createElement("option");
	// 09.2 . Valorizziamo value con l'indice i del for
	opt.value = i;
	// 09.3 . Inseriamo l'elemento della select
	opt.innerHTML = arrayElementSelect[i];
	// 09.4 . Agganciamo la option alla select creata al punto 07
	selectEl.appendChild(opt);
}
	
// 10 . Costruita la select nel punto 09, la agganciamo all'elemento selezionato nel punto 01
headerDownEl.append(selectEl);

// 11 . Selezioniamo l'elemento che dovrà contenere tutte le cards
const iconsContainerEl = document.querySelector(".iconsContainer");

// 12 . Cicliamo sugli elementi per metterli in pagina tramite la 
//		funzione createBoxElement(obj);
for (let i = 0; i < listIcons.length; i++)
{
	const obj = listIcons[i];
	createBoxElement(obj);
}

// 13 . Selezioniamo lelemento (evento) relativo alla select
const e = document.querySelector('.selectType');

// 14 . Aspettiamo qualora si cambi selezione alla select (evento)
e.onchange = onChange;



