const regexp = new RegExp (/(\d)\1*/g);
function chuckNorris(msg) {
  msg = prompt('Mettez votre mot ou phrase, appuyez sur F12 pour avoir la console et recevoir le résultat du calcul'); //Demande de valeur via le prompt // Création d'une règle regex qui va vérifier s'il y a des digits '1' globalement qui sont précédés de quelque chose ou de rien;
  let chaineATransformer = msg.split('') // Création de variable + séparation du paramètre(chaîne de caractère) dans un tableau via la méthode split('');
  .map(chaineATransformer => parseInt(chaineATransformer.charCodeAt(0), 10).toString(2).padStart(7, '0')) //On va utiliser la méthode map pour boucler dans le tableau les méthodes parseInt,charCodeAt,toString et padStart
                                                                                                          //On utilise la méthode parseInt pour transformer la chaîne de caractère
                                                                                                          //en chiffre, qu'on va mettre en base (10),
                                                                                                          //la fonction charCodeAt va nous permettre d'avoir le code ASCII du caractère en question
                                                                                                          //La méthode toString(2) va nous permettre de transformer le nombre reçu de la méthode parseInt en binaire
                                                                                                          //La méthode padStart va nous permettre de remplir notre nombre à 7 caractère avec des '0' en commençant vers la gauche
  .join('') //Join va nous permettre de créer un objet presque comme le tableau sauf que ç'en pas vraiment un, on va faire joindre du coup tout les éléments du tableau.
  .match(regexp) // Match va nous permettre de séparer les 0 des 1, avec des virgules, comme ça lors de la conversion en unaire on pourra déterminer les 0 des 1
  .map(chaineATransformer => (chaineATransformer[0] === '1' ? '0 ' : '00 ') + '0' .repeat(chaineATransformer.length))// Ici avec le ternary operator et map nous allons vérifier et insérer en plus les valeurs '0' s'il trouve un '1' et '00'
                                                                                                                  // s'il trouve un '0' et finalement nous allons ensuite remplacer grâce à repeat() les '1' par des '0'
  .join(' '); // On joint tout les éléments sans prendre les virgules







  alert(chaineATransformer); // On affiche en alert la réponse
}

const btnExo = document.querySelector('.exo1');// Sélection du code HTML Button

btnExo.addEventListener('click', chuckNorris);//EventListener qui va attendre qu'on click sur le bouton pour lancer
