// ## 3. feladat
// - A `js/03/concatArrays.js` fájlban dolgozz!
// - Írj egy függvényt, amely első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak!  
// - A függvény neve `concatArrays` legyen! 

// A függvény:
//    - összefűzi egy tömbbe az összes elemet,
//    - eltávolítja az ismétlődő elemeket,
//    - eltávolítja az összes olyan string-et, amely tartalmazza az első paraméterként megadott karaktert,
//    - eltávolítja a string-ek végén lévő whitespace karaktert,
//    - visszaadja ezt az új tömböt.

const concatArrays = (char, ...strArr) => {
    let array = [...strArr].flat();
    array = [...new Set(array)];
    array = array.filter((item) => !item.includes(char));
    array = array.map((item) => item.trimEnd());
    return array;
  };
  
  export default concatArrays;