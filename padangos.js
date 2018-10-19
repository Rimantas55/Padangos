console.log('padangos working')

// Reiktų vengti lietuviškų kintamųjų pavadinimų - ATS: kitam projektui bandysiu naudoti tik EN
var input_padang_aukstis = document.getElementById('padangos_aukstis');
var input_ratl_skersmuo = document.getElementById('ratlankio_skersmuo');
var input_arka_spindulys = document.getElementById('arkos_spindylys');
var div_skaiciuoti_rez = document.getElementById('rezultatas');
var laisvas_tarpas = 10; 
var input_km = document.getElementById('kilometras'); 	 //kilomteru inputas


function skaiciuoti() {
    /*--rato ir arkos funkcijos kintamieji--*/
    var a = parseInt(input_padang_aukstis.value) / 10;    /*--convert mm--> CM--*/
    var b = parseInt(input_ratl_skersmuo.value) * 2.54;   /*--convert inch--> CM--*/
    var c = parseInt(input_arka_spindulys.value);
    var radius = Math.round(a + b/2 + laisvas_tarpas);
    /*--Bonuso kintamieji rato apsisukimo kartai nurodzius kilometrus--*/
    var wheel_length = Math.round((a + b) * 3.14 * 10**5);  		  //verciam i km (global input variable atrodo visasi nereikalingi
    var distance = parseInt(input_km.value);
	var total_wheel_rounds = wheel_length * distance; 
    
    div_skaiciuoti_rez.innerHTML = radius + " cm ";
    console.log('Skaičiavimo rezultatas: ' + radius);

    if (c > radius ){
    console.log('ratas telpa i arka');
    document.getElementById('rezultatas').style.background = 'lightgreen';
    document.getElementById('rezultatas').innerHTML = "Ratas telpa i arka!" + "<br>" + "Nuvaziavus " + distance + " km ratas apsisuks " + total_wheel_rounds + " kartus";
    document.getElementById('rezultatas').style.color = "white";
	document.getElementById('rezultatas').style.fontSize = "150%";
    } else {
    document.getElementById('rezultatas').style.background = 'red';
    document.getElementById('rezultatas').innerHTML = "Ratas netelpa i arka!";
    document.getElementById('rezultatas').style.color = "white";
	document.getElementById('rezultatas').style.fontSize = "200%";
    }
}


  
	
