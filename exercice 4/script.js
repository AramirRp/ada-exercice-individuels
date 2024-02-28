let txt="hello world";

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
	'Z':'--..'
};


function getLatinCharacterList(txt) { //fonction étape 1
    const split_txt=txt.split("");
    console.log(split_txt);
    return split_txt;
};

function translateLatinCharacter() { //fonction étape 2
    let test = "A";
    console.log(latinToMorse[test]);

}; 

function encode() { //reussir à récup le tableau de etape 1
   getLatinCharacterList();
    for(let i=0, i>tab1.length, i++){
        tab1[i]=tab1.toUpperCase(i);
        let tab2 = [];
        tab2[i]=latinToMorse[tab1[i]];
    }
};




getLatinCharacterList(txt);
translateLatinCharacter();
encode();