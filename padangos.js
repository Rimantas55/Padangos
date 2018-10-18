console.log('padangos working')

// Reiktų vengti lietuviškų kintamųjų pavadinimų - ATS: kitam projektui bandysiu naudoti tik EN
var input_padang_aukstis = document.getElementById('padangos_aukstis');
var input_ratl_skersmuo = document.getElementById('ratlankio_skersmuo');
var input_arka_spindulys = document.getElementById('arkos_spindylys');
var div_skaiciuoti_rez = document.getElementById('rezultatas');
var laisvas_tarpas = 10; // Rimantas - kazkaip niekir nepanaudojau, gal 23 eiluteje galima buvo vietoj 10?
var input_km = document.getElementById('kilometras'); //kilomteru inputas

function skaiciuoti() {
    var a = parseInt(input_padang_aukstis.value) / 10;    /*--convert mm--> CM--*/
    var b = parseInt(input_ratl_skersmuo.value) * 2.54;    /*--convert inch--> CM--*/
    var c = parseInt(input_arka_spindulys.value);

    // kintamojo pavadinimas neatspindi kas jame saugoma.. gal verčiau "wheel_radius" ar "full_wheel_diameter"
    var skaiciuoti = Math.round(a + b + c);

    div_skaiciuoti_rez.innerHTML = skaiciuoti + " cm " + " Padangos1 apsisukimu skaicius nuvaziavus " + distance + " yra " + total_wheel_rounds;

	console.log('Skaičiavimo rezultatas: ' + skaiciuoti);

    if (a + b < c - 10){ //arba var laisvas_tarpas = 10?;
    console.log('ratas telpa i arka');
    document.getElementById('rezultatas').style.background = 'lightgreen';
    document.getElementById('rezultatas').innerHTML = "Ratas telpa i arka!";
    document.getElementById('rezultatas').style.color = "white";
	document.getElementById('rezultatas').style.fontSize = "200%";
	
    } else {
    document.getElementById('rezultatas').style.background = 'red';
    document.getElementById('rezultatas').innerHTML = "Ratas netelpa i arka!";
    document.getElementById('rezultatas').style.color = "white";
	document.getElementById('rezultatas').style.fontSize = "200%";
	
    }
	
}


  //kiek apsisuks ratas nuvaziavus 100 km? - kolkas dar neadaptavau prie rezultato skaiciavimo*/
  function wheel_rounds_per_km(){
	  var a = parseInt(input_padang_aukstis.value) / 10;    //--convert mm--> CM--
	  var b = parseInt(input_ratl_skersmuo.value) * 2.54;    //--convert inch--> CM--
	  var distance = parseInt(input_km.value); //value yra kilomterais
	  var wheel_length = 
	  ((a + b) * 3.14) / 100000;//verciam i km (global input variable atrodo visasi nereikalingi
	  var wheel_round_one_time = wheel_length;
	  var total_wheel_rounds = wheel_length * distance; 

}

