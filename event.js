
//event java script//

      var pri,quant,price_display;
      function price(x,z){
        pri=x;
        price_display=z;
        if(quant>0){
          pdisplay(pri,quant,price_display);
        }
      }
      function quantity(y){
        quant=y;
        if(pri>0){
          pdisplay(pri,quant,price_display);
        }
        
      }
      function pdisplay(x,y,z){
        var fp=x*y;
        document.getElementById(z).innerHTML = "&#x20b9; "+fp;
      }

  function fun(x){
if(x==1){
  document.getElementById("content").innerHTML='<object type="text/html" data="suppliers.html" style="width:100%; height:100vh; "></object>';

}
else if(x==2){
  document.getElementById("content").innerHTML='<object type="text/html" data="food.html" style="width:100%; height:100vh; "></object>';
}
else if(x==3){
  document.getElementById("content").innerHTML='<object type="text/html" data="Function hall.html" style="width:100%; height:100vh; "></object>';
}
else if(x==4){
  document.getElementById("content").innerHTML='<object type="text/html" data="mainpage.html" style="width:100%; height:100vh; "></object>';
}
else if(x==5){
  document.getElementById("content").innerHTML='<object type="text/html" data="signup.html" style="width:100%; height:100vh; "></object>';
}

}