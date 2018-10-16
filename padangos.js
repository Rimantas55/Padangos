console.log('padangos working')

// Reiktų vengti lietuviškų kintamųjų pavadinimų
var input_padang_aukstis = document.getElementById('padangos_aukstis');
var input_ratl_skersmuo = document.getElementById('ratlankio_skersmuo');
var input_arka_spindulys = document.getElementById('arkos_spindylys');
var div_skaiciuoti_rez = document.getElementById('rezultatas');
var laisvas_tarpas = 10; // cm? mm? ir niekur nepanaudota

function skaiciuoti() {
    var a = parseInt(input_padang_aukstis.value) / 10;    /*--convert mm--> CM--*/
    var b = parseInt(input_ratl_skersmuo.value) * 25.4;    /*--convert inch--> CM--*/
    var c = parseInt(input_arka_spindulys.value);

    // kintamojo pavadinimas neatspindi kas jame saugoma.. gal verčiau "wheel_radius" ar "full_wheel_diameter"
    var skaiciuoti = Math.round(a + b + c);

    div_skaiciuoti_rez.innerHTML = skaiciuoti + " cm ";
    div_skaiciuoti_rez = skaiciuoti;
    console.log('Skaičiavimo rezultatas: ' + skaiciuoti);


}


// if (a >= 50 || a <= 300   ){
// 	alert("Number A or Number B is above 100");
// 	input_a.style.color = 'red';
// 	input_b.style.color = 'red';
// } else {

// 	var sum = a + b;
// console.log(sum);

// 		var eur = convert_to_eur(sum);
// 		result.innerHTML = sum + ' (Eur: ' + eur +")";
// 		input_a.style.background = "green";
// 		input_b.style.background = "green";
// 	}
// }


// if (a > 100 || b > 100){
// 		alert("Number A or Number B is above 100");
// 		input_a.style.color = 'red';
// 		input_b.style.color = 'red';
// 	} else {

// 		var sum = a + b;
// 		// console.log(sum);

// 		var eur = convert_to_eur(sum);
// 		result.innerHTML = sum + ' (Eur: ' + eur +")";
// 		input_a.style.background = "green";
// 		input_b.style.background = "green";
// 	}
// }