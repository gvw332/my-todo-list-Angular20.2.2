# Shopping List Angular – Explications techniques

## Présentation

Cette application est une liste de courses interactive réalisée avec **Angular 20**. Elle permet d’ajouter, modifier, rechercher et supprimer des articles, avec une interface moderne et responsive.

---

## Architecture du projet

```
src/app/
│
├── add-item/         // Composant pour ajouter un article
├── item-list/        // Composant pour afficher/modifier/supprimer les articles
├── services/
│   └── shopping-list.ts   // Service centralisant la logique métier et la persistance
├── pipes/
│   └── uppercase-pipe.ts  // Pipe personnalisée pour afficher les articles en majuscules
├── app.ts            // Composant principal (orchestration, logique globale)
├── app.html          // Template principal (layout, intégration des composants)
└── ...               // Autres fichiers Angular
```

---

## Concepts Angular utilisés

- **Composant** : Unité visuelle et fonctionnelle (ex : `AddItem`, `ItemList`, `App`).
- **Service** : Classe centralisant la logique métier et la persistance (`ShoppingList`).
- **Pipe** : Transformation d’affichage dans le template (`UppercasePipe`).
- **Standalone Components** : Composants autonomes, plus modernes et modulaires.
- **@for, @if** : Boucles et conditions modernes dans les templates Angular 20.
- **EventEmitter** : Communication entre composants enfant et parent.
- **RxJS BehaviorSubject/Observable** : Programmation réactive pour la gestion de la liste.
- **LocalStorage** : Persistance des données dans le navigateur.
- **FormsModule** : Gestion des formulaires et du binding avec `ngModel`.

---

## Fonctionnalités principales

- **Ajout d’article** : Par bouton ou touche Entrée.
- **Suppression** : Avec confirmation.
- **Modification** : Inline, validée par bouton ou touche Entrée.
- **Recherche/filtrage** : Affichage dynamique selon la saisie.
- **Affichage en majuscules** : Via la pipe personnalisée.
- **Messages d’erreur/succès** : Feedback utilisateur.
- **Responsive & accessibilité** : Layout adaptatif, bonnes pratiques d’UI.

---

## Bonnes pratiques appliquées

- **Séparation des responsabilités** : Composants pour l’UI, service pour la logique métier.
- **Organisation des fichiers** : Dossiers `services` et `pipes` pour la clarté et l’évolutivité.
- **Utilisation des dernières syntaxes Angular** : Standalone, @for, @if, etc.
- **Code commenté et structuré** : Pour faciliter la compréhension et la maintenance.

---

## Pour aller plus loin

- Ajouter des tests unitaires (Jasmine/Karma)
- Ajouter un mode sombre/clair
- Améliorer l’accessibilité (ARIA, navigation clavier)
- Connecter à une API distante

---

## Glossaire rapide

- **Composant** : Bloc visuel et logique réutilisable
- **Service** : Classe partagée pour la logique métier
- **Pipe** : Fonction de transformation d’affichage
- **EventEmitter** : Permet d’envoyer des événements d’un composant enfant vers le parent
- **RxJS** : Bibliothèque pour la programmation réactive (Observables)
- **LocalStorage** : Stockage persistant dans le navigateur

---

N’hésite pas à demander des exemples de code ou des explications sur un point précis !
# Exo4App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
