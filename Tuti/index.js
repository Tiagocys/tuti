var usdbrl = document.getElementById('usdbrl');
var eurusd = document.getElementById('eurusd');
var usdjpy = document.getElementById('usdjpy');
var usdchf = document.getElementById('usdchf');
var gbpusd = document.getElementById('gbpusd');
var audusd = document.getElementById('audusd');
var usdcad = document.getElementById('usdcad');
var eurgbp = document.getElementById('eurgbp');
var euraud = document.getElementById('euraud');
var eurchf = document.getElementById('eurchf');
var eurjpy = document.getElementById('eurjpy');

var usdbrl_var = document.getElementById('usdbrl_var');
var eurusd_var = document.getElementById('eurusd_var');
var usdjpy_var = document.getElementById('usdjpy_var');
var usdchf_var = document.getElementById('usdchf_var');
var gbpusd_var = document.getElementById('gbpusd_var');
var audusd_var = document.getElementById('audusd_var');
var usdcad_var = document.getElementById('usdcad_var');
var eurgbp_var = document.getElementById('eurgbp_var');
var euraud_var = document.getElementById('euraud_var');
var eurchf_var = document.getElementById('eurchf_var');
var eurjpy_var = document.getElementById('eurjpy_var');

var usdbrl2 = document.getElementById('usdbrl2');
var eurusd2 = document.getElementById('eurusd2');
var usdjpy2 = document.getElementById('usdjpy2');
var usdchf2 = document.getElementById('usdchf2');
var gbpusd2 = document.getElementById('gbpusd2');
var audusd2 = document.getElementById('audusd2');
var usdcad2 = document.getElementById('usdcad2');
var eurgbp2 = document.getElementById('eurgbp2');
var euraud2 = document.getElementById('euraud2');
var eurchf2 = document.getElementById('eurchf2');
var eurjpy2 = document.getElementById('eurjpy2');

var usdbrl_var2 = document.getElementById('usdbrl_var2');
var eurusd_var2 = document.getElementById('eurusd_var2');
var usdjpy_var2 = document.getElementById('usdjpy_var2');
var usdchf_var2 = document.getElementById('usdchf_var2');
var gbpusd_var2 = document.getElementById('gbpusd_var2');
var audusd_var2 = document.getElementById('audusd_var2');
var usdcad_var2 = document.getElementById('usdcad_var2');
var eurgbp_var2 = document.getElementById('eurgbp_var2');
var euraud_var2 = document.getElementById('euraud_var2');
var eurchf_var2 = document.getElementById('eurchf_var2');
var eurjpy_var2 = document.getElementById('eurjpy_var2');


async function populate(){
    const requestURL = 'https://economia.awesomeapi.com.br/last/usd-brl,eur-usd,usd-jpy,usd-chf,gbp-usd,aud-usd,usd-cad,eur-gbp,eur-aud,eur-chf,eur-jpy';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const cotaçãoDeMoedas = await response.json();

    cotação(cotaçãoDeMoedas);
}


function cotação(obj){
    var usdbrl_bid = obj.USDBRL.bid;
    var usdbrl_varBid = obj.USDBRL.varBid;
    
    var eurusd_bid = obj.EURUSD.bid;
    var eurusd_varBid = obj.EURUSD.varBid;

    var usdjpy_bid = obj.USDJPY.bid;
    var usdjpy_varBid = obj.USDJPY.varBid;


    usdbrl.textContent = `USD|BRL: ${usdbrl_bid}`;
    if(usdbrl_varBid > 0){
        usdbrl_var.textContent = `+${usdbrl_varBid}`
        usdbrl_var.style.color = 'green';
    }
    else{
        usdbrl_var.textContent = `${usdbrl_varBid}`;
        usdbrl_var.style.color = 'red';
    }
    usdbrl2.textContent = `USD|BRL: ${usdbrl_bid}`;
    if(usdbrl_varBid > 0){
        usdbrl_var2.textContent = `+${usdbrl_varBid}`
        usdbrl_var2.style.color = 'green';
    }
    else{
        usdbrl_var2.textContent = `${usdbrl_varBid}`;
        usdbrl_var2.style.color = 'red';
    }

    eurusd.textContent = `EUR|USD: ${eurusd_bid}`;
    if(eurusd_varBid > 0){
        eurusd_var.textContent = `+${eurusd_varBid}`
        eurusd_var.style.color = 'green';
    }
    else{
        eurusd_var.textContent = `${eurusd_varBid}`;
        eurusd_var.style.color = 'red';
    }

    eurusd2.textContent = `EUR|USD: ${eurusd_bid}`;
    if(eurusd_varBid > 0){
        eurusd_var2.textContent = `+${eurusd_varBid}`
        eurusd_var.style.color = 'green';
    }
    else{
        eurusd_var2.textContent = `${eurusd_varBid}`;
        eurusd_var2.style.color = 'red';
    }

    usdjpy.textContent = `USD|JPY: ${usdjpy_bid}`;
    if(usdjpy_varBid > 0){
        usdjpy_var.textContent = `+${usdjpy_varBid}`
        usdjpy_var.style.color = 'green';
    }
    else{
        usdjpy_var.textContent = `${usdjpy_varBid}`;
        usdjpy_var.style.color = 'red';
    }

    usdjpy2.textContent = `USD|JPY: ${usdjpy_bid}`;
    if(usdjpy_varBid > 0){
        usdjpy_var2.textContent = `+${usdjpy_varBid}`
        usdjpy_var2.style.color = 'green';
    }
    else{
        usdjpy_var2.textContent = `${usdjpy_varBid}`;
        usdjpy_var2.style.color = 'red';
    }

    
    var usdchf_bid = obj.USDCHF.bid;
    var usdchf_varBid = obj.USDCHF.varBid;
	
	usdchf.textContent = `USD|CHF: ${usdchf_bid}`;
    if(usdchf_varBid > 0){
        usdchf_var.textContent = `+${usdchf_varBid}`
        usdchf_var.style.color = 'green';
    }
    else{
        usdchf_var.textContent = `${usdchf_varBid}`;
        usdchf_var.style.color = 'red';
    }

    usdchf2.textContent = `USD|CHF: ${usdchf_bid}`;
    if(usdchf_varBid > 0){
        usdchf_var2.textContent = `+${usdchf_varBid}`
        usdchf_var2.style.color = 'green';
    }
    else{
        usdchf_var2.textContent = `${usdchf_varBid}`;
        usdchf_var2.style.color = 'red';
    }

    var gbpusd_bid = obj.GBPUSD.bid;
    var gbpusd_varBid = obj.GBPUSD.varBid;
	
	gbpusd.textContent = `GBP|USD: ${gbpusd_bid}`;
    if(gbpusd_varBid > 0){
        gbpusd_var.textContent = `+${gbpusd_varBid}`
        gbpusd_var.style.color = 'green';
    }
    else{
        gbpusd_var.textContent = `${gbpusd_varBid}`;
        gbpusd_var.style.color = 'red';
    }

    gbpusd2.textContent = `GBP|USD: ${gbpusd_bid}`;
    if(gbpusd_varBid > 0){
        gbpusd_var2.textContent = `+${gbpusd_varBid}`
        gbpusd_var2.style.color = 'green';
    }
    else{
        gbpusd_var2.textContent = `${gbpusd_varBid}`;
        gbpusd_var2.style.color = 'red';
    }

    
    var audusd_bid = obj.AUDUSD.bid;
    var audusd_varBid = obj.AUDUSD.varBid;
	
	audusd.textContent = `AUD|USD: ${audusd_bid}`;
    if(audusd_varBid > 0){
        audusd_var.textContent = `+${audusd_varBid}`
        audusd_var.style.color = 'green';
    }
    else{
        audusd_var.textContent = `${audusd_varBid}`;
        audusd_var.style.color = 'red';
    }

    audusd2.textContent = `AUD|USD: ${audusd_bid}`;
    if(audusd_varBid > 0){
        audusd_var2.textContent = `+${audusd_varBid}`
        audusd_var2.style.color = 'green';
    }
    else{
        audusd_var2.textContent = `${audusd_varBid}`;
        audusd_var2.style.color = 'red';
    }
    	
    
    var usdcad_bid = obj.USDCAD.bid;
    var usdcad_varBid = obj.USDCAD.varBid;
	
	usdcad.textContent = `USD|CAD: ${usdcad_bid}`;
    if(usdcad_varBid > 0){
        usdcad_var.textContent = `+${usdcad_varBid}`
        usdcad_var.style.color = 'green';
    }
    else{
        usdcad_var.textContent = `${usdcad_varBid}`;
        usdcad_var.style.color = 'red';
    }

    usdcad2.textContent = `USD|CAD: ${usdcad_bid}`;
    if(usdcad_varBid > 0){
        usdcad_var2.textContent = `+${usdcad_varBid}`
        usdcad_var2.style.color = 'green';
    }
    else{
        usdcad_var2.textContent = `${usdcad_varBid}`;
        usdcad_var2.style.color = 'red';
    }
   
    
    var eurgbp_bid = obj.EURGBP.bid;
    var eurgbp_varBid = obj.EURGBP.varBid;
	
	eurgbp.textContent = `EUR|GBP: ${eurgbp_bid}`;
    if(eurgbp_varBid > 0){
        eurgbp_var.textContent = `+${eurgbp_varBid}`
        eurgbp_var.style.color = 'green';
    }
    else{
        eurgbp_var.textContent = `${eurgbp_varBid}`;
        eurgbp_var.style.color = 'red';
    }
    
    eurgbp2.textContent = `EUR|GBP: ${eurgbp_bid}`;
    if(eurgbp_varBid > 0){
        eurgbp_var2.textContent = `+${eurgbp_varBid}`
        eurgbp_var2.style.color = 'green';
    }
    else{
        eurgbp_var2.textContent = `${eurgbp_varBid}`;
        eurgbp_var2.style.color = 'red';
    }

    
    var euraud_bid = obj.EURAUD.bid;
    var euraud_varBid = obj.EURAUD.varBid;
	
	euraud.textContent = `EUR|AUD: ${euraud_bid}`;
    if(euraud_varBid > 0){
        euraud_var.textContent = `+${euraud_varBid}`
        euraud_var.style.color = 'green';
    }
    else{
        euraud_var.textContent = `${euraud_varBid}`;
        euraud_var.style.color = 'red';
    }
    
    euraud2.textContent = `EUR|AUD: ${euraud_bid}`;
    if(euraud_varBid > 0){
        euraud_var2.textContent = `+${euraud_varBid}`
        euraud_var2.style.color = 'green';
    }
    else{
        euraud_var2.textContent = `${euraud_varBid}`;
        euraud_var2.style.color = 'red';
    }
	
    
    var eurchf_bid = obj.EURCHF.bid;
    var eurchf_varBid = obj.EURCHF.varBid;
	
	eurchf.textContent = `EUR|CHF: ${eurchf_bid}`;
    if(eurchf_varBid > 0){
        eurchf_var.textContent = `+${eurchf_varBid}`
        eurchf_var.style.color = 'green';
    }
    else{
        eurchf_var.textContent = `${eurchf_varBid}`;
        eurchf_var.style.color = 'red';
    }
    
    eurchf2.textContent = `EUR|CHF: ${eurchf_bid}`;
    if(eurchf_varBid > 0){
        eurchf_var2.textContent = `+${eurchf_varBid}`
        eurchf_var2.style.color = 'green';
    }
    else{
        eurchf_var2.textContent = `${eurchf_varBid}`;
        eurchf_var2.style.color = 'red';
    }
	
    
    var eurjpy_bid = obj.EURJPY.bid;
    var eurjpy_varBid = obj.EURJPY.varBid;
	
	eurjpy.textContent = `EUR|JPY: ${eurjpy_bid}`;
    if(eurjpy_varBid > 0){
        eurjpy_var.textContent = `+${eurjpy_varBid}`
        eurjpy_var.style.color = 'green';
    }
    else{
        eurjpy_var.textContent = `${eurjpy_varBid}`;
        eurjpy_var.style.color = 'red';
    }

    eurjpy2.textContent = `EUR|JPY: ${eurjpy_bid}`;
    if(eurjpy_varBid > 0){
        eurjpy_var2.textContent = `+${eurjpy_varBid}`
        eurjpy_var2.style.color = 'green';
    }
    else{
        eurjpy_var2.textContent = `${eurjpy_varBid}`;
        eurjpy_var2.style.color = 'red';
    }
	
	
	
	

	
    
    
}

populate();

var play = document.getElementById('play');
var youtube = document.getElementById('youtube');
var x = document.getElementById('x');
play.addEventListener('click',abrirVideo);

function abrirVideo(){
    youtube.style.display = 'block';
    x.addEventListener('click', fecharVideo);
    function fecharVideo(){
        youtube.style.display = 'none';
    }

}

var concurso = document.getElementById('concurso');

concurso.addEventListener('click',abrirYoutube);

function abrirYoutube(){
    window.open('https://youtu.be/U-D4mAziEAg', '_blank');
}