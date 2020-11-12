function converMany(from,to,input){
    return (input*to)/from;
}
function requsteApi(url,method){
    let xhr=new XMLHttpRequest();
    let result;
    xhr.onreadystatechange =function(){
        if(xhr.readyState ==4 && xhr.status == 200){
            result = JSON.parse(xhr.responseText);
        }
    }
    xhr.open(method,url,false);
    xhr.send();
    return result
}
function getId(id){
    return document.getElementById(id);
}
function getValue(id){
    return document.getElementById(id).value;
}

