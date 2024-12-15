# Application Frontend React - Live Events

## Description

Une application web frontend développée avec React pour gérer et afficher des événements lors du festival. L'application permet aux utilisateurs de consulter une liste d'événements, de voir les détails d'un événement spécifique en utilisant un slug dans l'URL, et de rechercher des événements. L'application interagit avec une API backend pour récupérer les données des événements.

## Fonctionnalités

- Affichage d'une liste d'événements.
- Détail des événements accessibles via un **slug** dans l'URL.
- Recherche et filtrage d'événements.
- Interface utilisateur réactive et interactive.
- Utilisation de React Router pour gérer la navigation entre les pages.

## Prérequis

- **Node.js** (version 14 ou plus)
- **npm** ou **yarn**

## Installation

1. Clonez ce projet sur votre machine locale :
   ```bash
   git clone https://github.com/sevikomer/live-events.git

2. Allez dans le dossier du projet :
cd live-events

3. Installez les dépendances :
Avec npm :
npm install
Avec yarn :
yarn install

Démarrer l'application
Pour démarrer l'application en mode développement, exécutez la commande suivante :
Si vous utilisez npm :
npm start

Si vous utilisez yarn :
yarn start

L'application sera accessible à l'adresse suivante dans votre navigateur :
http://localhost:3000

Structure du Projet
Voici la structure de base de votre projet React :
nom-du-projet/
│
├── public/                  # Contient les fichiers statiques
│   ├── index.html           # Le fichier HTML principal
│
├── src/                     # Contient le code source de l'application
│   ├── components/          # Composants React réutilisables
│   ├── pages/               # Pages de l'application
│   ├── App.js               # Point d'entrée de l'application
│   ├── index.js             # Fichier d'entrée React
│   ├── styles/              # Feuilles de style (CSS, SASS)
│
├── package.json             # Dépendances et scripts du projet
└── README.md                # Ce fichier


Déploiement :
L'application est déployée sur **Netlify** et accessible à l'adresse suivante :  
(https://liveevents1.netlify.app/)






# Live Events

Web application which display festival informations for the visitors 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
