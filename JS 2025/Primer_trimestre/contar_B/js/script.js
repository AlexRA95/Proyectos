const countBs =(palabra)=>{
    let cont = 0;

        for(char of palabra){
            if (char==="B" ) {
                cont++;
            }
        }

        return cont;
};

console.log(countBs("BebbbbbbBioadaoiwaodB"));
