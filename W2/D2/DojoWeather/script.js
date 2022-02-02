function closeCookie(){
    var toDelete = document.getElementById("container2")
    toDelete.remove();
}

function loading(){
    alert("Loading weather report" )
}

function chooseTemperature(){

    var el = document.querySelectorAll("span")
    console.log(el);

    if(select.value == 'cel'){
        for(var i=0; i <el.length; i++)
        el[i].innerText = Math.round((el[i].innerText-32)*(9/5));

    }

    else(select.value == 'far');{
        for(var i=0; i <el.length; i++)
        el[i].innerText = Math.round((el[i].innerText*(9/5) + 32));
    }

}