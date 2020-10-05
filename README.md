# TP05 - Librairie standard JavaScript

Les 2 exercices ci-dessous sont tirés du site [CodingGame](https://www.codingame.com/).

Pour exécuter votre script, ouvrez la page HTML `index.html` et utilisez la console de Google Chrome pour appeler la fonction désirées.

## Exercice 1 - code unaire Chuck Norris

### Objectif

Le binaire avec des 0 et des 1 c'est bien.
Mais le binaire avec que des 0, ou presque, c'est encore mieux.
À l'origine, c'est un concept inventé par Chuck Norris pour envoyer des messages dits unaires.

Ecrivez une fonction qui, à partir d'un message en entrée, retourne le message codé façon Chuck Norris.

### Règles

Voici le principe d'encodage :

* Le message en entrée est constitué de caractères ASCII (7 bits)
* Le message encodé en sortie est constitué de blocs de 0
* Un bloc est séparé d'un autre bloc par un espace
* Deux blocs consécutifs servent à produire une série de bits de même valeur (que des 1 ou que des 0) :
  * Premier bloc : il vaut toujours 0 ou 00. S'il vaut 0 la série contient des 1, sinon elle contient des 0
  * Deuxième bloc : le nombre de 0 dans ce bloc correspond au nombre de bits dans la série

### Exemple

Prenons un exemple simple avec un message constitué d'un seul caractère : C majuscule.
C en binaire vaut `1000011` ce qui donne avec la technique de Chuck Norris :

* `0 0` (la première série composée d'un seul 1)
* `00 0000` (la deuxième série composée de quatre 0)
* `0 00` (la troisième série composée de deux 1)

C vaut donc : `0 0 00 0000 0 00`

Deuxième exemple, nous voulons encoder le message CC (soit les 14 bits 10000111000011) :

* `0 0` (un seul 1)
* `00 0000` (quatre 0)
* `0 000` (trois 1)
* `00 0000` (quatre 0)
* `0 00` (deux 1)

CC vaut donc : `0 0 00 0000 0 000 00 0000 0 00`

### API de la fonction `chuckNorris`

#### Paramètre

`msg` : le message composé de `N` caractères ASCII (sans retour chariot)

#### Retour

Le message encodé

#### Contraintes

0 < `N` < 100

## Exercice 2 - analyse de températures

### Objectif

Dans cet exercice, vous devez analyser un relevé de températures pour trouver quelle température se rapproche le plus de zéro.

![Exemple de températures](temperature.png)

_Exemple de températures. Ici, -1 est la température la plus proche de 0._

### Règles

Écrivez une fonction qui retourne la température la plus proche de 0 parmi les données d'entrée.
Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro
(par exemple, si les températures sont -5 et 5, alors retourner 5).

### API de la fonction `analyzeTemperature`

Votre fonction reçoit les données en paramètre et retourne le résultat.

#### Paramètres

1. `quantity` : le nombre de températures à analyser.
2. `data` : une chaine de caractères contenant les N températures exprimées sous la forme de nombres entiers allan de -273 à 5526.

#### Retour

0 (zéro) si aucune température n'est fournie.
Sinon, retourner la température la plus proche de 0.

#### Contraintes

0 <= `quantity` <= 10000

#### Exemple

Avec `quantity = 5` et `data = "1 -2 -8 4 5"`, la fonction `analyzeTemperature` retourne `1`.
