function closeCookie(){
    var toDelete = document.getElementById("container3")
    toDelete.remove();
}

function emptycart(){
    alert("Your Cart is empty!" )
}

var x = document.getElementById("succulentpic")

function thisimage(){
    x.src = "./images/assets/succulents-1.jpg"
}

function thatimage(){
    x.src = "./images/assets/succulents-2.jpg"
}