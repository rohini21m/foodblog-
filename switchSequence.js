function switchGenre(num) {
   
    switch (num) {
        case "10":
            case "100":
            return "police drama !";
            break;
        case "20 ":
        case "30 ":
        case "40":
            
            return " before mid night ";
            break;
        case "50":
        case "60":

            return "before sunset ";
            break;
        case "70":
        case "80":
        case "90":

            return "after sunset";
            break;
        
        default:
            return "Ethan hawke and his craft  ";
            break;
    }
}
console.log(switchGenre("70"));
console.log(switchGenre("50"));
