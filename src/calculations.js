
export function resistance_calcuation(resistance){
    if (isNaN(resistance)) return 0;
    if (resistance > 0){
        return (100/(100+resistance));
    }
    else{
        return 2 - (100/(100-resistance));
    }
}