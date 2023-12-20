/**
 * createRandomColor
 * 
 * Questa funzione tramite generateRandomNumber(16) genera dei 
 * numero casuali tra 0 e 15 e tramite la funzione toString(16) li
 * trasforma in cifre esadecimali.
 * Genera quindi una stringa di 7 caratteri che inizia con il carattere # e termina
 * con le 6 cifre esadecimali
 * 
 * Autore DD - 12/2023 
 * @return {string} 
 */
function createRandomColor()
{
	let color = '#';
	for(let i=0; i<6; i++)
	{
		let char = generateRandomNumber(16).toString(16);
		color += char;
	}
	return color;
}

/**
 * generateRandomNumber
 * 
 * Questa funzione genera un numero intero casuale 
 * compreso tra 0 e limit
 * 
 * Autore DD - 12/2023 (scopiazzata da w3s)
 * @param {number} limit Rappresenta il massimo numero che può generare casualmente la funzione
 * @return {number} il numero intero casuale generato tra 0 e limit
 */
function generateRandomNumber(limit)
{
	return Math.floor(Math.random() * limit);
}

/**
 * createIconElement
 * 
 * Questa funzione accetta in ingresso il box di una pagina ed un elemento 
 * di un array di oggetti e tramite il nome dell'oggetto costruice
 * una icona appartenente alla Font Avesome, gli applica come stile il colore 
 * e la aggancia al box passato in ingresso.
 * Come ultimo passo aggiunge al box il nome dell'oggetto
 * 
 * @param {object} boxElement 
 * @param {object} item 
 * 
 * Autore DD - 12/2023
 */
function createIconElement(boxElement, item) 
{
	const icons = document.createElement('i');
	const listIcons = icons.classList;
	listIcons.add(item.family);
	listIcons.add(item.prefix + item.name);
//	icons.style.color = item.color;
	icons.style.color = createRandomColor();
	//icons.style.color = ("black");
	boxElement.append(icons);
	boxElement.innerHTML += item.name;
}

/**
 * createBoxElement
 * 
 * Questa funzione accetta in ingresso un oggetto che contiene
 * i parametri per costruire una icona.
 * Dopo aver creato il box, tramite la funzione  createIconElement(boxElement, obj);
 * si costruisce l'icona e si aggancia al box.
 * Infine il box viene agganciato al conteiner che coniene box ed icone
 * @param {object} obj
 * 
 * Autore DD - 12/2023 
 */
function createBoxElement(obj)
{
    const boxElement = document.createElement('div');
    boxElement.className = 'box';
    createIconElement(boxElement, obj);
    iconsContainerEl.append(boxElement);
}
