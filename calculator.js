
window.addEventListener( "load", start, false );





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
}

function answer() {
}

function goBack(v) {
  let tmp = v.path[0].id;
  let result = document.getElementById( "now" ).innerHTML;
  console.log(tmp);

  if ( tmp == "back" ){
      if ( result.length == 1 ){
          document.getElementById( "now" ).innerHTML = 0;
          return;
      }
      let next = result.substr(0,result.length-1);
      document.getElementById( "now" ).innerHTML = next;
      return;
  }
}



function clear(v) {
    let tmp = v.path[0].id;
    document.getElementById( "now" ).innerHTML = 0;

    if ( tmp == "clearAll" ) {
        document.getElementById( "result" ).innerHTML = "";
    }

}


function negate() {
    let result = document.getElementById( "now" ).innerHTML;
    document.getElementById( "now" ).innerHTML = -result;
}

function start() {



    document.getElementById( "Mod" ).addEventListener("click", onClick);
    document.getElementById( "clear" ).addEventListener("click", clear);
    document.getElementById( "clearAll" ).addEventListener("click", clear);
    document.getElementById( "back" ).addEventListener("click", goBack);
    document.getElementById( "/" ).addEventListener("click", onClick);

    document.getElementById( "A" ).addEventListener("click", onClick);
    document.getElementById( "B" ).addEventListener("click", onClick);
    document.getElementById( "7" ).addEventListener("click", onClick);
    document.getElementById( "8" ).addEventListener("click", onClick);
    document.getElementById( "9" ).addEventListener("click", onClick);
    document.getElementById( "x" ).addEventListener("click", onClick);

    document.getElementById( "C" ).addEventListener("click", onClick);
    document.getElementById( "D" ).addEventListener("click", onClick);
    document.getElementById( "4" ).addEventListener("click", onClick);
    document.getElementById( "5" ).addEventListener("click", onClick);
    document.getElementById( "6" ).addEventListener("click", onClick);
    document.getElementById( "-" ).addEventListener("click", onClick);

    document.getElementById( "E" ).addEventListener("click", onClick);
    document.getElementById( "F" ).addEventListener("click", onClick);
    document.getElementById( "1" ).addEventListener("click", onClick);
    document.getElementById( "2" ).addEventListener("click", onClick);
    document.getElementById( "3" ).addEventListener("click", onClick);
    document.getElementById( "+" ).addEventListener("click", onClick);

    document.getElementById( "bar" ).addEventListener("click", negate);
    document.getElementById( "0" ).addEventListener("click", onClick);
    document.getElementById( "=" ).addEventListener("click", answer);
}
