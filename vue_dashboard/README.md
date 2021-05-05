# Test de développeur Front End Beeye

## Choix de Framework : Vue.js et Vuetify

La page web est divisée en quatre principaux composants. La barre de navigation au sommet de l’app est le premier component présent dans App.js. Ensuite, se suive la barre de titre, qui comprend les actions que l’usager peut choisir. Ceux-ci pouvant changer au fil du temps, j’ai donc utilisé plusieurs boucles dans le code afin de lire des tableaux d’objet.

L’action choisi par l’usager ouvre la deuxième sidebar, celle-ci est la barre de tâche dans l’exemple.

Finalement, le dashboard est le dernier grand component du projet. J’ai placer chacun des trois dans des colonnes du framework CSS pour mieux diviser la page.

Le dossier dashboard possède aussi quelques sous component. Globalement divisé en quatre parties.

1- Dashboard qui sert de grand container et incorpore la liste de personne situé au bas de la page.
2- Le top avec la description des tâches est installé dans DescriptionContainer.
3- Ensuite FilterContainer contient les filtres que l’on peut choisir.
4- Finalement le graphique de barre et ses boutons fonctionnels complètes le dossier de dashboard.

Pour aider à compléter le projet, je me suis servi du framework CSS Vuetify. Ce dernier fonctionnant avec un look de Material design et se rapprochait du design Figma du test. Les nombreux éléments déjà construit ont grandement facilité la tâche et permettait aussi de faire le moins d’erreur de CSS possible. Chacune des pages comprend du CSS mis en scope et n’étant pas accessible aux autres pages afin de ne pas entrer en conflit avec d’autres éléments de style.
