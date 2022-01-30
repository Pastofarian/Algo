/*1.
Si transport == “velo” => affichez “vous roulez à vélo”;
Si transport == “moto” => affichez “vous roulez à moto”;
Si transport == “bus” => affichez “vous roulez en bus”;
Si transport == “voiture” => affichez “vous roulez en voiture”;
Dans les autres cas => affichez “mode de transport inconnu”;
*/

switch(transport) {
    case "vélo" : 
    console.log("c'est un vélo");
    break;

    case "moto" : 
    console.log("c'est une moto");
    break;

    case "bus" : 
    console.log("c'est un bus");
    break;

    case "voiture" : 
    console.log("c'est un voiture");
    break;

    default :
    console.log("véhicule inconnu");
    break;
}
/*
2.
Modifier le switch précédent 
Si transport == “velo” => affichez “vous roulez  à vélo”;
Si transport == “moto” OU “velo” => affichez “vous roulez dans un véhicule à 2 roues;
Si transport == “bus” => affichez “vous roulez en bus”;
Si transport == “voiture” => affichez “vous roulez en voiture”;
Dans les autres cas => affichez “mode de transport inconnu”;
*/

let transport = "moto";

switch(transport) {
    case "vélo" : 
    console.log("vous roulez  à vélo");
    

    case "moto" : 
    console.log("vous roulez dans un véhicule à 2 roues");
    break;

    case "bus" : 
    console.log("vous roulez en bus");
    break;

    case "voiture" : 
    console.log("vous roulez en voiture");
    break;

    default :
    console.log("véhicule inconnu");
    break;
}
