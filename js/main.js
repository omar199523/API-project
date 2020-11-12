

let req = requsteApi("https://v6.exchangerate-api.com/v6/"+ config.MY_KEY + "/latest/USD","GET");

getId("formInput").addEventListener("change",function (){
    let result = converMany(req.conversion_rates[getValue("fromSelect")],req.conversion_rates[getValue("toSelect")],getValue("formInput"));
    getId("toInput").value= result
});

getId("toInput").addEventListener("change",function (){
    let result =converMany(req.conversion_rates[getValue("toSelect")],req.conversion_rates[getValue("fromSelect")],getValue("toInput"));
    getId("formInput").value= result
});

getId("fromSelect").addEventListener("change",function (){
    let result = converMany(req.conversion_rates[getValue("fromSelect")],req.conversion_rates[getValue("toSelect")],getValue("formInput"));
    getId("toInput").value= result
});

getId("toSelect").addEventListener("change",function (){
    let result =converMany(req.conversion_rates[getValue("toSelect")],req.conversion_rates[getValue("fromSelect")],getValue("toInput"));
    getId("formInput").value= result
});
