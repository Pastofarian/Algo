var playGame = 
	function(nombreAllumette) {
		let joueur1 = window.prompt('Pseudo joueur 1'); // On demande le pseudo du joueur 1 et on ecrit ce pseudo dans la variable joueur1
		let joueur2 = window.prompt('Pseudo joueur 2'); // Meme chose pour le joueur 2
		/*
			listeJoueur est une liste.
			Une liste de variable. Ici ma liste sera donc [joueur1, joueur2]
			Je les met dans un tableau pour pouvoir ensuite faire une boucle sur ces 2 joueurs. 
			Ainsi je peux me permettre de leur appliquer le meme traitement
			Sans devoir ecrire les meme ligne de code pour chaque joueur
		*/
		let listeJoueur = [joueur1, joueur2]; // On cree une variable de type tableau pour contenir nos 2 joueurs
		while(true) { // La petite technique avec le break
			for (let i in listeJoueur) { // On boucle sur chaque joueur. Ici i vaudra 1, puis 2. On aurait pu le faire dans une boucle for ou meme un while
				let input; // On definit la variable dans laquelle on va ranger le choix du joueur actuel
				do {
					input = parseInt(window.prompt('[' + listeJoueur[i] + '] Il reste ' + nombreAllumette + ' allumette(s)\nCombien souhaitez-vous en retirer? (1, 2, 3)'));
				} while (input !== 1 && input !== 2 && input !== 3); // Tant que le joueur n'a pas rentre un nombre valide, on lui redemande.
				nombreAllumette -= input; // On applique le choix du joueur sur le nombre d'allumette
				if (nombreAllumette <= 0) {
					console.log('Le nombre d\'allumette a atteint 0');
					/*
						A ce moment ci, on sait que le nombre d'allumette est <= 0. Donc le jeu est fini. 
						la variable i vaut l'indice du joueur qui vient de jouer. Donc listeJoueur[i] est le nom du joueur qui a perdu.
					*/
					for (let j in listeJoueur) { // On reboucle sur les joueurs du tableau
						if (i === j) console.log(listeJoueur[j] + ' a gagne !'); // si i est different de j, c'est qu'on est sur l'autre joueur, donc le gagnant
						else console.log(listeJoueur[j] + ' a perdu...'); // si est egal a j, c'est que l'on est sur le joueur qui vient de jouer et a donc perdu
					}
					return; // Ca fonctionne un peu comme un break, sauf que au lieu d'interrompre la boucle en cours, ca coupe la fonction totalement et renvoie une valeur.
					// Mais ici on ne renvoit rien. On l'utilise juste pour sortir de la fonction et du while (true)
				}
			}
		}
	}


/* Pour lancer le jeu, je dois appeler ma fonction qui est contenue dans la variable playGame 
   Pour un soucis de modularite j'ai laisse la possibilite de choisir le nombre d'allumettes qui seront utilisee pour la partie dans l'appel de la fonction
   Ainsi, la variable nombreAllumette, recoit une valeur au tout debut de la fonction
*/
playGame(20); 
