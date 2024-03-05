let reloj = setInterval(function() {
    let second =new Date().getSeconds();
    let minut =new Date().getMinutes();
    let hour =new Date().getHours();
    console.log(hour+":"+minut+":"+second);
},1000);



