var broj1, broj2, rez, operacija;

broj1=prompt("Vnesete go prviot broj: ");
broj1=Number(broj1);

broj2=prompt("Vnesete go vtoriot broj: ");
broj2= Number(broj2);

operacija=prompt("Izberete edn operacija od: +,-,*,/ ");


// alert("Broevite i operacijata se "+broj1+" "+broj2+" "+operacija);

switch (operacija) {
    case "+": {
        rez=broj1+broj2;
        alert("Rezultatot e: "+rez);

        break;
    }
    case "-": {
        rez=broj1-broj2;
        alert("Rezultatot e: "+rez);

        break;
    }
    case "*": {
        rez=broj1*broj2;
        alert("Rezultatot e: "+rez);

        break;
    }
    case "/": {

        if (broj2 == 0) {
            alert("Za operacijata delenje vtoriot broj ne smee da e 0 !!! ");
            broj2 = prompt("Izberete go vtoriot broj povtorno (NE SMEE da e 0 !!!) :");
            rez=broj1/broj2;
            alert("Rezultatot e: "+rez);
        }else{

            rez=broj1/broj2;
            alert("Rezultatot e: "+rez);

        }
        
        break;
    }
        
        

    default:{

        break;
    }
        
}