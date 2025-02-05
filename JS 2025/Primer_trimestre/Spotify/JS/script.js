//Menú dropdown de los filtros
document.getElementById('filter-drop').addEventListener('click',()=>{
    let icon = document.getElementById('filter-arrow');
    let all= document.getElementById('filter-all');
    let fav= document.getElementById('filter-fav');
    if (icon.classList.contains("bxs-right-arrow")) {
        icon.classList.remove("bxs-right-arrow");
        icon.classList.add("bxs-down-arrow");
        all.classList.remove("display-none");
        fav.classList.remove("display-none");
    }else{
        icon.classList.remove("bxs-down-arrow");
        icon.classList.add("bxs-right-arrow");
        all.classList.add("display-none");
        fav.classList.add("display-none");
    }
});