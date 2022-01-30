console.log("Permettre de boucler sur les entiers de 1 à 10 et d’afficher à chaque fois les lettres de A à Z (résultat : 1A, 2A, 3A… 10A, 1B, 2B, 3B, … 10B, 1C etc) (indice A à Z = Char code de  65 à 90)")

for(let i=65; i<91; ++i)
for(let x=1; x<11; x++)
console.log((x)+ String.fromCharCode(i));