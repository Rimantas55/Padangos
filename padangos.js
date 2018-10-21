console.log('padangos working');

var input_padang_aukstis = document.getElementById('padangos_aukstis');
var input_ratl_skersmuo = document.getElementById('ratlankio_skersmuo');
var input_arka_spindulys = document.getElementById('arkos_spindylys');
var input_distance = document.getElementById('kilometras');

var clearance = 10;

var div_rezultatas = document.getElementById('rezultatas');


function skaiciuoti() {

    /*--rato ir arkos funkcijos kintamieji--*/
    var a = parseInt(input_padang_aukstis.value) / 10;
    /*--convert mm--> CM--*/
    var b = parseInt(input_ratl_skersmuo.value) * 2.54;
    /*--convert inch--> CM--*/
    var c = parseInt(input_arka_spindulys.value);
    var radius = Math.round(a + b / 2 + clearance);

    div_rezultatas.innerHTML = radius + " cm ";
    console.log('Visas rato dydis + 10 cm. yra ' + radius);

    if (c > radius) {
        console.log('Ratas telpa i arka: ' + c + " > " + radius);
        div_rezultatas.style.background = 'lightgreen';
        div_rezultatas.innerHTML = "Ratas telpa i arka!<br>";
        div_rezultatas.style.color = "white";
        div_rezultatas.style.fontSize = "200%";

        /*--Bonuso kintamieji rato apsisukimo kartai nurodzius kilometrus--*/
        var wheel_length = 2 * (a + b) * Math.PI; // rato ilgis cm
        var distance = parseInt(input_distance.value) * 10 ** 5;
        var total_wheel_rounds = Math.round(wheel_length * distance); // kadangi apsisukimu daug, apvalinam razultata, o ne rato ilgi - gausim mazesne paklaida
        div_rezultatas.innerHTML += "Ratas apsisuks " + total_wheel_rounds + " kartus.";

    } else {
        console.log('Ratas netelpa i arka: ' + c + " <= " + radius);
        div_rezultatas.style.background = 'red';
        div_rezultatas.innerHTML = "Ratas netelpa i arka!<br>";
        div_rezultatas.style.color = "white";
        div_rezultatas.style.fontSize = "200%";
    }
}


  
	
