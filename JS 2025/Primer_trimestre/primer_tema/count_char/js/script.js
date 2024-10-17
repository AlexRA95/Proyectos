const countBs = (palabra, aContar) => {
  let cont = 0
  /** 
 * Esta es la manera chorra 
        for(char of palabra){
          if (char=== aContar ) {
            cont++;
          }
    }
*/
  for (let index = 0; index < palabra.length; index++) {
    if (palabra[index] === aContar) {
      cont++
    }
  }

  if (
    palabra === undefined ||
    aContar === undefined ||
    Number.isInteger(palabra) ||
    Number.isInteger(aContar)
  ) {
    return 'algo no es una palabra'
  } else {
    return cont
  }
}

console.log(countBs('BebbbbbbBioadaoiwaodB', 'b'))
