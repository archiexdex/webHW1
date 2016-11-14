
window.addEventListener( "load", start );

let mode = 10;
let NMax = 65536, NR = -32768, NL = 32767;


function onClick(v) {
    let tmp = v.path[0].id;
    let result = document.getElementById( "now" ).innerHTML;
    console.log(tmp);

    if ( 0 <= tmp && tmp <= 9 || ("A" <= tmp && tmp <= "F") ) {
        if ( result == 0 )
            document.getElementById( "now" ).innerHTML = tmp;
        else {
            let base10 = parseInt(result + tmp, mode);
            if ( base10 >= NMax )
                base10 -= NMax;
            if ( base10 > NL )
                base10 = NL - base10;
            document.getElementById( "now" ).innerHTML = base10.toString(mode).toUpperCase();
        }
    }

    reload();
}

function answer() {
    let result = document.getElementById( "result" ).innerHTML;
    let now = document.getElementById( "now" ).innerHTML;
    now = parseInt(now,mode);
    result = eval( result + now );
    result = Math.trunc(result);
    result = result.toString(mode);
    console.log(result);
    document.getElementById( "now" ).innerHTML = result.toUpperCase() ;
    document.getElementById( "result" ).innerHTML = "";
    reload();
}

function operator(v) {
    let tmp = v.path[0].id;
    let result = document.getElementById( "result" ).innerHTML;
    let now = document.getElementById( "now" ).innerHTML;

    if ( !result || now != "0" ) {
        switch (mode) {
          case 16:
            now = "0x" + now;
            break;
          case 8:
            now = "0o" + now;
            break;
          case 2:
            now = "0b" + now;
            break;
        }
        document.getElementById( "result" ).innerHTML += now + " " + tmp + " ";
        document.getElementById( "now" ).innerHTML = 0;
    }
    else {
        let ptr = result.substr(result.length-2,result.length);
        console.log("last operator " + ptr);
        document.getElementById( "result" ).innerHTML = result.substr(0,result.length-2) + tmp + " ";
    }
    reload();
}

function change(v) {
    let tmp = v.path[0].id;
    let ptr = tmp.substr(0,3);
    let now = document.getElementById( "now" ).innerHTML;
    let base10 = parseInt( now, mode );

    if ( ptr == "hex"){
        mode = 16;
        document.getElementById( "now" ).innerHTML = base10.toString(mode).toUpperCase();
    }
    else if ( ptr == "dec" ) {
        mode = 10;
        document.getElementById( "now" ).innerHTML = base10;
    }
    else if ( ptr == "oct" ) {
        mode = 8;
        document.getElementById( "now" ).innerHTML = base10.toString(mode);
    }
    else if( ptr == "bin" ) {
        mode = 2;
        document.getElementById( "now" ).innerHTML = base10.toString(mode);
    }
    console.log("change mode " + mode);

    document.getElementById( "hexHeader" ).style.color = "black";
    document.getElementById( "decHeader" ).style.color = "black";
    document.getElementById( "octHeader" ).style.color = "black";
    document.getElementById( "binHeader" ).style.color = "black";

    document.getElementById( "hexNow" ).style.color = "black";
    document.getElementById( "decNow" ).style.color = "black";
    document.getElementById( "octNow" ).style.color = "black";
    document.getElementById( "binNow" ).style.color = "black";

    document.getElementById( tmp ).style.color = "#33f3ff";
    document.getElementById( ptr+"Now" ).style.color = "#33f3ff";

    reable();


}

function negate() {
    let now = document.getElementById( "now" ).innerHTML;
    let base10 = parseInt( now, mode );
    document.getElementById( "now" ).innerHTML = ( -1 * base10 ).toString(mode).toUpperCase();
    reload();
}

function reload() {
    let now = document.getElementById( "now" ).innerHTML;
    let base10 = parseInt( now, mode );
    if ( base10 < 0 ) {
        document.getElementById( "hexNow" ).innerHTML = ( NMax + base10 ).toString(16).toUpperCase();
        document.getElementById( "decNow" ).innerHTML = base10
        document.getElementById( "octNow" ).innerHTML = ( NMax + base10 ).toString(8);
        document.getElementById( "binNow" ).innerHTML = ( NMax + base10 ).toString(2);
    }
    else {
        document.getElementById( "hexNow" ).innerHTML = base10.toString(16).toUpperCase();
        document.getElementById( "decNow" ).innerHTML = base10
        document.getElementById( "octNow" ).innerHTML = base10.toString(8);
        document.getElementById( "binNow" ).innerHTML = base10.toString(2);
    }
}

function goBack(v) {
    let tmp = v.path[0].id;
    let result = document.getElementById( "now" ).innerHTML;
    console.log(tmp);


    if ( result.length == 1 ){
        document.getElementById( "now" ).innerHTML = 0;
    }
    else {
        let next = result.substr(0,result.length-1);
        document.getElementById( "now" ).innerHTML = next;
    }
    reload();
}



function clear(v) {
    let tmp = v.path[0].id;
    document.getElementById( "now" ).innerHTML = 0;

    if ( tmp == "clearAll" ) {
        document.getElementById( "result" ).innerHTML = "";
    }
    reload()
}

function recolor() {
    switch (mode) {
      case 16:
      document.getElementById( "0" ).style.color = "black";
      document.getElementById( "1" ).style.color = "black";
      document.getElementById( "2" ).style.color = "black";
      document.getElementById( "3" ).style.color = "black";
      document.getElementById( "4" ).style.color = "black";
      document.getElementById( "5" ).style.color = "black";
      document.getElementById( "6" ).style.color = "black";
      document.getElementById( "7" ).style.color = "black";
      document.getElementById( "8" ).style.color = "black";
      document.getElementById( "9" ).style.color = "black";
      document.getElementById( "A" ).style.color = "black";
      document.getElementById( "B" ).style.color = "black";
      document.getElementById( "C" ).style.color = "black";
      document.getElementById( "D" ).style.color = "black";
      document.getElementById( "E" ).style.color = "black";
      document.getElementById( "F" ).style.color = "black";
        break;
      case 10:
        document.getElementById( "0" ).style.color = "black";
        document.getElementById( "1" ).style.color = "black";
        document.getElementById( "2" ).style.color = "black";
        document.getElementById( "3" ).style.color = "black";
        document.getElementById( "4" ).style.color = "black";
        document.getElementById( "5" ).style.color = "black";
        document.getElementById( "6" ).style.color = "black";
        document.getElementById( "7" ).style.color = "black";
        document.getElementById( "8" ).style.color = "black";
        document.getElementById( "9" ).style.color = "black";
        document.getElementById( "A" ).style.color = "darkgray";
        document.getElementById( "B" ).style.color = "darkgray";
        document.getElementById( "C" ).style.color = "darkgray";
        document.getElementById( "D" ).style.color = "darkgray";
        document.getElementById( "E" ).style.color = "darkgray";
        document.getElementById( "F" ).style.color = "darkgray";
        break;
      case 8:
        document.getElementById( "0" ).style.color = "black";
        document.getElementById( "1" ).style.color = "black";
        document.getElementById( "2" ).style.color = "black";
        document.getElementById( "3" ).style.color = "black";
        document.getElementById( "4" ).style.color = "black";
        document.getElementById( "5" ).style.color = "black";
        document.getElementById( "6" ).style.color = "black";
        document.getElementById( "7" ).style.color = "black";
        document.getElementById( "8" ).style.color = "darkgray";
        document.getElementById( "9" ).style.color = "darkgray";
        document.getElementById( "A" ).style.color = "darkgray";
        document.getElementById( "B" ).style.color = "darkgray";
        document.getElementById( "C" ).style.color = "darkgray";
        document.getElementById( "D" ).style.color = "darkgray";
        document.getElementById( "E" ).style.color = "darkgray";
        document.getElementById( "F" ).style.color = "darkgray";
        break;
      case 2:
        document.getElementById( "0" ).style.color = "black";
        document.getElementById( "1" ).style.color = "black";
        document.getElementById( "2" ).style.color = "darkgray";
        document.getElementById( "3" ).style.color = "darkgray";
        document.getElementById( "4" ).style.color = "darkgray";
        document.getElementById( "5" ).style.color = "darkgray";
        document.getElementById( "6" ).style.color = "darkgray";
        document.getElementById( "7" ).style.color = "darkgray";
        document.getElementById( "8" ).style.color = "darkgray";
        document.getElementById( "9" ).style.color = "darkgray";
        document.getElementById( "A" ).style.color = "darkgray";
        document.getElementById( "B" ).style.color = "darkgray";
        document.getElementById( "C" ).style.color = "darkgray";
        document.getElementById( "D" ).style.color = "darkgray";
        document.getElementById( "E" ).style.color = "darkgray";
        document.getElementById( "F" ).style.color = "darkgray";
        break;
    }
}

function reable() {

    switch (mode) {
      case 16:
        document.getElementById( "0" ).addEventListener("click", onClick);
        document.getElementById( "1" ).addEventListener("click", onClick);
        document.getElementById( "2" ).addEventListener("click", onClick);
        document.getElementById( "3" ).addEventListener("click", onClick);
        document.getElementById( "4" ).addEventListener("click", onClick);
        document.getElementById( "5" ).addEventListener("click", onClick);
        document.getElementById( "6" ).addEventListener("click", onClick);
        document.getElementById( "7" ).addEventListener("click", onClick);
        document.getElementById( "8" ).addEventListener("click", onClick);
        document.getElementById( "9" ).addEventListener("click", onClick);
        document.getElementById( "A" ).addEventListener("click", onClick);
        document.getElementById( "B" ).addEventListener("click", onClick);
        document.getElementById( "C" ).addEventListener("click", onClick);
        document.getElementById( "D" ).addEventListener("click", onClick);
        document.getElementById( "E" ).addEventListener("click", onClick);
        document.getElementById( "F" ).addEventListener("click", onClick);
        break;
      case 10:
        document.getElementById( "0" ).addEventListener("click", onClick);
        document.getElementById( "1" ).addEventListener("click", onClick);
        document.getElementById( "2" ).addEventListener("click", onClick);
        document.getElementById( "3" ).addEventListener("click", onClick);
        document.getElementById( "4" ).addEventListener("click", onClick);
        document.getElementById( "5" ).addEventListener("click", onClick);
        document.getElementById( "6" ).addEventListener("click", onClick);
        document.getElementById( "7" ).addEventListener("click", onClick);
        document.getElementById( "8" ).addEventListener("click", onClick);
        document.getElementById( "9" ).addEventListener("click", onClick);
        document.getElementById( "A" ).removeEventListener("click", onClick);
        document.getElementById( "B" ).removeEventListener("click", onClick);
        document.getElementById( "C" ).removeEventListener("click", onClick);
        document.getElementById( "D" ).removeEventListener("click", onClick);
        document.getElementById( "E" ).removeEventListener("click", onClick);
        document.getElementById( "F" ).removeEventListener("click", onClick);
        break;
      case 8:
        document.getElementById( "0" ).addEventListener("click", onClick);
        document.getElementById( "1" ).addEventListener("click", onClick);
        document.getElementById( "2" ).addEventListener("click", onClick);
        document.getElementById( "3" ).addEventListener("click", onClick);
        document.getElementById( "4" ).addEventListener("click", onClick);
        document.getElementById( "5" ).addEventListener("click", onClick);
        document.getElementById( "6" ).addEventListener("click", onClick);
        document.getElementById( "7" ).addEventListener("click", onClick);
        document.getElementById( "8" ).removeEventListener("click", onClick);
        document.getElementById( "9" ).removeEventListener("click", onClick);
        document.getElementById( "A" ).removeEventListener("click", onClick);
        document.getElementById( "B" ).removeEventListener("click", onClick);
        document.getElementById( "C" ).removeEventListener("click", onClick);
        document.getElementById( "D" ).removeEventListener("click", onClick);
        document.getElementById( "E" ).removeEventListener("click", onClick);
        document.getElementById( "F" ).removeEventListener("click", onClick);
        break;
      case 2:
        document.getElementById( "0" ).addEventListener("click", onClick);
        document.getElementById( "1" ).addEventListener("click", onClick);
        document.getElementById( "2" ).removeEventListener("click", onClick);
        document.getElementById( "3" ).removeEventListener("click", onClick);
        document.getElementById( "4" ).removeEventListener("click", onClick);
        document.getElementById( "5" ).removeEventListener("click", onClick);
        document.getElementById( "6" ).removeEventListener("click", onClick);
        document.getElementById( "7" ).removeEventListener("click", onClick);
        document.getElementById( "8" ).removeEventListener("click", onClick);
        document.getElementById( "9" ).removeEventListener("click", onClick);
        document.getElementById( "A" ).removeEventListener("click", onClick);
        document.getElementById( "B" ).removeEventListener("click", onClick);
        document.getElementById( "C" ).removeEventListener("click", onClick);
        document.getElementById( "D" ).removeEventListener("click", onClick);
        document.getElementById( "E" ).removeEventListener("click", onClick);
        document.getElementById( "F" ).removeEventListener("click", onClick);
        break;
    }
    recolor();
}

function start() {

    document.getElementById( "hexHeader" ).addEventListener("click", change);
    document.getElementById( "decHeader" ).addEventListener("click", change);
    document.getElementById( "octHeader" ).addEventListener("click", change);
    document.getElementById( "binHeader" ).addEventListener("click", change);

    document.getElementById( "decHeader" ).style.color = "#33f3ff";
    document.getElementById( "decNow" ).style.color = "#33f3ff";

    document.getElementById( "%" ).addEventListener("click", operator);
    document.getElementById( "clear" ).addEventListener("click", clear);
    document.getElementById( "clearAll" ).addEventListener("click", clear);
    document.getElementById( "back" ).addEventListener("click", goBack);
    document.getElementById( "/" ).addEventListener("click", operator);
    document.getElementById( "*" ).addEventListener("click", operator);
    document.getElementById( "-" ).addEventListener("click", operator);
    document.getElementById( "+" ).addEventListener("click", operator);
    document.getElementById( "bar" ).addEventListener("click", negate);
    document.getElementById( "=" ).addEventListener("click", answer);
    reable();
}
