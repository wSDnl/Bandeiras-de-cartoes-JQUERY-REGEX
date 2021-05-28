// Exemplos para teste
// 5232840333205142
// 5502094845955371

$('#num').keypress( function(){

var numCartao = $('#num').val();
var brand = "null";

	// MASTERCARD
	var regexMastercard =  /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/;
	var resMastercard = regexMastercard.exec(numCartao);
	if(resMastercard){ brand = "<img src='logo/mastercard.png' width='50px'>"; }
	
	// ELO  
	var regexELO = /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/;
	var resELO = regexELO.exec(numCartao);
	if(resELO){ brand = "<img src='logo/elo.png' width='50px'>"; }
	
	// AMEX 
	var regexAmex = /^3[47][0-9]{13}$/;
	var resAmex = regexAmex.exec(numCartao);
	if(resAmex){ brand = "<img src='logo/amex.png' width='50px'>"; }
	
	// Aura 
	var regexAura = /^((?!504175))^((?!5067))(^50[0-9])/;
	var resAura = regexAura.exec(numCartao);
	if(resAura){ brand = "<img src='logo/aura.png' width='50px'>"; }
	
	//Banese Card
	var regexBanese = /^636117/;
	var resBanese = regexBanese.exec(numCartao);
	if(resBanese){ brand = "<img src='logo/banese.png' width='50px'>"; }
	
	// Cabal
	var regexCabal = /(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)/;
	var resCabal = regexCabal.exec(numCartao);
	if(resCabal){ brand = "<img src='logo/cabal.png' width='50px'>"; }
	
	//Diners 
	var regexDiners = /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/;
	var resDiners = regexDiners.exec(numCartao);
	if(resDiners){ brand = "<img src='logo/diners.png' width='50px'>"; }
	
	// Discover
	var regexDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}/;
	var resDiscover = regexDiscover.exec(numCartao);
	if(resDiscover){ brand = "<img src='logo/discover.png' width='50px'>"; }
	
	// Fort Brasil
	var regexFort = /^628167/;
	var resFort = regexFort.exec(numCartao);
	if(resFort){ brand = "<img src='logo/fortbrasil.png' width='50px'>"; }
	
	//GrandCard
	var regexGrandCard = /^605032/;
	var resGrandCard = regexGrandCard.exec(numCartao);
	if(resGrandCard){ brand = "<img src='logo/grandcard.png' width='50px'>"; }
	
	// Hipercard
	var regexHipercard = /^606282|^3841(?:[0|4|6]{1})0/;
	var resHipercard = regexHipercard.exec(numCartao);
	if(resHipercard){ brand = "<img src='logo/hipercard.png' width='50px'>"; }
	
	//JCB
	var regexJCB = /^(?:2131|1800|35\d{3})\d{11}/;
	var resJCB = regexJCB.exec(numCartao);
	if(resJCB){ brand = "<img src='logo/jcb.png' width='50px'>"; }
	
	//Personal Card
	var regexPersonal = /^636085/;
	var resPersonal = regexPersonal.exec(numCartao);
	if(resPersonal){ brand = "<img src='logo/personalcard.png' width='50px'>"; }
	
	// Sorocred
	var regexSorocred = /^627892|^636414/;
	var resSorocred = regexSorocred.exec(numCartao);
	if(resSorocred){ brand = "<img src='logo/sorocred.png' width='50px'>"; }
	
	// Valecard
	var regexValecard = /^606444|^606458|^606482/;
	var resValecard = regexValecard.exec(numCartao);
	if(resValecard){ brand = "<img src='logo/valecard.png' width='50px'>"; }
	
	// Visa 
	var regexVisa = /^4[0-9]{15}$/;
	var resVisa = regexVisa.exec(numCartao);
	if(resVisa){ brand = "<img src='logo/visa.png' width='50px'>"; }
	
		// MOSTRA RESULTADO
		if( brand != 'null'){ 
			$('#card').empty();
			$('#card').append(brand);
		}
		
		if( brand == 'null'){ 
			$('#card').empty(); 
			$('#card').append("<img src='logo/invalido.png' width='50px'>"); 
		}

});

