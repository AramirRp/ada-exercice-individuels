let txt=document.querySelector(".txtName");
let morse= document.querySelector(".morseName");


const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
	' ':'/'
};

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'/' : " "
};

function getLatinCharacterList(txt) { //fonction étape 1
    let txt1 = txt.toUpperCase();
	const split_txt=txt1.split("");
    return split_txt;
};

function translateLatinCharacter(text) { //fonction étape 2
	let test2= latinToMorse[text];
    // console.log(latinToMorse[test]);
	return test2;
}; 


$("#code").on("click", function encode()  { //reussir à récup le tableau de etape 1
	let tab1 = getLatinCharacterList(txt.value);
	let tab2 = [];
	  for(let i=0; i < tab1.length; i++){
		  tab2[i]=translateLatinCharacter(tab1[i]);
	  }
	  console.log(tab2);
	  document.body.innerHTML += ''+tab2+'';
	  return tab2;
});


function getMorseCharacterList(morse) { //fonction étape 1
	const split_morse=morse.split(" ");
	// console.log(split_morse);
    return split_morse;
};


function translateMorseCharacter(YUZ) { //fonction étape 2
	let test2= morseToLatin[YUZ];
	return test2;
}; 



$("#Dcode").on("click", function decode() { //reussir à récup le tableau de etape 1
	let tab1 = getMorseCharacterList(morse.value);
	let tab2 = [];
	// console.log(tab2);
	  for(let i=0; i < tab1.length; i++){
		  tab2[i]=translateMorseCharacter(tab1[i]);
	  }
	  document.body.innerHTML += ''+tab2+'';
	console.log(tab2);
	 return tab2;
});


// encode();
// decode();

// code.addEventListener("click", encode());

// function encode() { //reussir à récup le tableau de etape 1
// 	let tab1 = getLatinCharacterList(txt.value);
// 	let tab2 = [];
// 	  for(let i=0; i < tab1.length; i++){
// 		  tab2[i]=translateLatinCharacter(tab1[i]);
// 	  }
// 	  console.log(tab2);
// 	  document.body.innerHTML += ''+tab2+'';
// 	  return tab2;
// };

// function decode() { //reussir à récup le tableau de etape 1
// 	let tab1 = getMorseCharacterList(morse.value);
// 	let tab2 = [];
// 	// console.log(tab2);
// 	  for(let i=0; i < tab1.length; i++){
// 		  tab2[i]=translateMorseCharacter(tab1[i]);
// 	  }
// 	console.log(tab2);
// 	 return tab2;
// };