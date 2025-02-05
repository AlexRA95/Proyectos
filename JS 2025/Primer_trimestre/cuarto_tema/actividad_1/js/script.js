document.getElementById("crear").addEventListener('click',()=>{
    let date = new Date( Date.now+(86400e3*31));
    document.cookie=encodeURIComponent('cesta de la compra')+"="+ encodeURIComponent('fvb nwda gydagwu a dwadu') +"; expires="+date;
    let ran64="";
    for (let index = 0; index < 64; index++) {
        ran64+=Math.floor(Math.random()*10);
    }
    if (document.getElementById("usuario").value.length !== 0) {
        document.cookie=document.getElementById("usuario").value+"="+ran64;
    }
    document.cookie="isLoggedIn="+true;
    alert(document.cookie);

});

document.getElementById("eliminar").addEventListener('click',()=>{
    document.cookie="cesta de la compra=feaoaoeoognewgeow; max-age=0";
    document.cookie="isLoggedIn="+false;
    alert(document.cookie);

});