function tri(tab){
    
    for(let i=0; i<tab.length-1;i++){
        
        for(let j=i+1;j<tab.length;j++){
            
            if (tab[i]>tab[j]){

                let p = tab[j];
                tab[i]=tab[j];
                tab[j]=p;
            }
        }
    } return tab
}