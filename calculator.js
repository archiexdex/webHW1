
window.addEventListener( "load", start );

let mode = 10;



function onClick(v) {
    let tmp = v.path[0].id;
    let result = document.getElementById( "now" ).innerHTML;
    console.log(tmp);

    if ( 0 <= tmp && tmp <= 9 || ("A" <= tmp && tmp <= "F") ) {
        if ( result == 0 )
            document.getElementById( "now" ).innerHTML = tmp;
        else {
            document.getElementById( "now" ).innerHTML += tmp;
        }
    }

    reload();
}

function answer() {
    let result = document.getElementById( "result" ).innerHTML;
    let now = document.getElementById( "now" ).innerHTML;

    result = result + now;
    console.log(result);
    document.getElementById( "now" ).innerHTML = eval(result);
    document.getElementById( "result" ).innerHTML = "";
    reload();
}

function operator(v) {
    let tmp = v.path[0].id;
    let result = document.getElementById( "result" ).innerHTML;
    let now = document.getElementById( "now" ).innerHTML;
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
    if ( !result || now != "0" ) {
        document.getElementById( "result" ).innerHTML += now + " " + tmp + " ";
        document.getElementById( "now" ).innerHTML = 0;
    }
    else {
        let ptr = result.substr(result.length-2,result.length);
        console.log("last operator " + ptr);
        document.getElementById( "result" ).innerHTML = result.substr(0,result.length-2) + tmp + " ";
    }
}

function change(v) {
    let tmp = v.path[0].id;
    let ptr = tmp.substr(0,3);
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

    if ( ptr == "hex")
        mode = 16;
    else if ( ptr == "dec" )
        mode = 10;
    else if ( ptr == "oct" )
        mode = 8;
    else if( ptr == "bin" )
        mode = 2;
    console.log("change mode " + mode);
}




function negate() {
    let result = document.getElementById( "now" ).innerHTML;
    document.getElementById( "now" ).innerHTML = -1 * result;
    reload();
}

function reload() {
    let num = document.getElementById( "now" ).innerHTML;
    let base10 = parseInt( num, mode );
    document.getElementById( "hexNow" ).innerHTML = base10.toString(16).toUpperCase();
    document.getElementById( "decNow" ).innerHTML = base10
    document.getElementById( "octNow" ).innerHTML = base10.toString(8);
    document.getElementById( "binNow" ).innerHTML = base10.toString(2);
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

    document.getElementById( "A" ).addEventListener("click", onClick);
    document.getElementById( "B" ).addEventListener("click", onClick);
    document.getElementById( "7" ).addEventListener("click", onClick);
    document.getElementById( "8" ).addEventListener("click", onClick);
    document.getElementById( "9" ).addEventListener("click", onClick);
    document.getElementById( "*" ).addEventListener("click", operator);

    document.getElementById( "C" ).addEventListener("click", onClick);
    document.getElementById( "D" ).addEventListener("click", onClick);
    document.getElementById( "4" ).addEventListener("click", onClick);
    document.getElementById( "5" ).addEventListener("click", onClick);
    document.getElementById( "6" ).addEventListener("click", onClick);
    document.getElementById( "-" ).addEventListener("click", operator);

    document.getElementById( "E" ).addEventListener("click", onClick);
    document.getElementById( "F" ).addEventListener("click", onClick);
    document.getElementById( "1" ).addEventListener("click", onClick);
    document.getElementById( "2" ).addEventListener("click", onClick);
    document.getElementById( "3" ).addEventListener("click", onClick);
    document.getElementById( "+" ).addEventListener("click", operator);

    document.getElementById( "bar" ).addEventListener("click", negate);
    document.getElementById( "0" ).addEventListener("click", onClick);
    document.getElementById( "=" ).addEventListener("click", answer);
}
