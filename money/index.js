function coin(){
    var THB = document.getElementById("txt1").value ;
    var Coin = document.getElementById("coin").value ;
  

  if(Coin == "USA"){
    var total = THB/32.12 ;
    document.getElementById("total").innerHTML = total.toFixed(2) + "$"
  }
  else if(Coin == "JPN" ){
    var total = THB/0.29 ;
    document.getElementById("total").innerHTML = total.toFixed(2) + "¥"
  }
  else if(Coin == "CHA" ){
    var total = THB/4.55 ;
    document.getElementById("total").innerHTML = total.toFixed(2) + "¥"
  }
  else if(Coin == "EUR" ){
    var total = THB/37.10 ;
    document.getElementById("total").innerHTML = total.toFixed(2) + "€"
  }
  else if(Coin == "RUB" ){
    var total = THB/0.42 ;
    document.getElementById("total").innerHTML = total.toFixed(2) + "₽"
  }

    
}

