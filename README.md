# Carnet de terrain · portfolio d'urbanisme

Site portfolio au style « carnet de terrain », pour présenter des projets d'urbanisme menés entre Rabat et Brest.

> **Version de démonstration anonymisée.** Le nom, la photo, les coordonnées et le CV ont été retirés en attendant la publication officielle. Cette version sert à montrer le rendu du site dans un navigateur.

Le site n'utilise que du HTML, du CSS et un peu de JavaScript. Il n'y a rien à installer et il fonctionne tel quel sur GitHub Pages.

## Contenu du dossier

```
index.html                         la page du site
assets/css/style.css               la mise en page et les couleurs
assets/js/main.js                  le sélecteur de papier
assets/img/portrait-a-venir.svg    l'illustration provisoire à la place de la photo
assets/img/favicon.svg             l'icône de l'onglet
assets/img/projets/                le dossier où ranger les images des projets
robots.txt                         demande aux moteurs de recherche de ne pas indexer le site
.nojekyll                          indique à GitHub de publier les fichiers tels quels
```

## Voir le site sur son ordinateur

Double-cliquer sur `index.html` : le site s'ouvre dans le navigateur.

## Mettre le site en ligne avec GitHub Pages

1. Sur [github.com](https://github.com), cliquer sur **New repository**. Choisir un nom neutre, par exemple `carnet-urbanisme`, cocher **Public**, puis cliquer sur **Create repository**.
2. Cliquer sur **Add file › Upload files**. Glisser **le contenu** du dossier, c'est-à-dire `index.html`, `robots.txt`, `.nojekyll` et le dossier `assets`. Ne pas glisser le dossier parent lui-même. Cliquer ensuite sur **Commit changes**.
3. Aller dans **Settings › Pages**. Choisir **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`. Cliquer sur **Save**.
4. Une à deux minutes plus tard, le site est en ligne à l'adresse `https://IDENTIFIANT.github.io/carnet-urbanisme`.

## Ce que l'anonymisation couvre, et ce qu'elle ne couvre pas

Ce qui a été retiré :

- le nom et le prénom, remplacés par « Prénom Nom » ;
- la photo, remplacée par une illustration de plan ;
- l'adresse e-mail, le téléphone et le lien LinkedIn ;
- le CV en PDF.

Une balise `noindex` et le fichier `robots.txt` demandent aussi aux moteurs de recherche de ne pas référencer le site. Ce n'est qu'une demande : la page reste visible par toute personne qui a le lien.

Points de vigilance :

- **Les projets restent décrits en détail** : écoles, partenaires, lieux et dates. Quelqu'un de son entourage pourrait la reconnaître grâce à ces informations, mais elles ne permettent pas de la contacter.
- **Le compte GitHub** apparaît dans l'adresse du site et sur la page du dépôt. Pour la démonstration, utiliser un compte qui ne porte pas son nom.
- **Git garde l'historique de tous les fichiers déposés.** Une donnée personnelle ajoutée puis supprimée reste consultable dans l'historique du dépôt. Pour la publication officielle, mieux vaut créer un **nouveau dépôt** que d'ajouter les vraies données dans celui-ci.
- `robots.txt` n'est lu qu'à la racine d'un domaine. Il n'a donc d'effet que sur un dépôt nommé `IDENTIFIANT.github.io`. La balise `noindex` de la page, elle, fonctionne dans tous les cas.

## Préparer la version officielle

Dans un nouveau dépôt, à partir d'une copie de ce dossier :

1. Remplacer « Prénom Nom », « [Prénom] » et « prenom.nom@exemple.fr » dans `index.html`.
2. Ajouter la photo dans `assets/img/portrait.jpg` et remplacer la balise `<img src="assets/img/portrait-a-venir.svg" …>`. Un commentaire indique la ligne à utiliser.
3. Remettre les vrais liens de contact, par exemple `<a href="mailto:…">…</a>` et `<a href="https://www.linkedin.com/in/…">LinkedIn</a>`, à la place des boutons grisés.
4. Supprimer la balise `<meta name="robots" …>` et le fichier `robots.txt` pour que le site soit référencé.
5. Changer le titre de l'onglet (`<title>`) et la description pour y mettre le nom.

## Ce qu'il reste à compléter

Chercher les textes entre crochets et les commentaires `À COMPLÉTER` / `À REMPLACER` dans `index.html` :

- les dates de disponibilité pour le stage ;
- le rôle personnel sur chaque projet, en particulier pour le mémoire réalisé à trois ;
- les légendes des images.

## Ajouter les images des projets

1. Préparer des images `.jpg` larges d'environ 1 200 px et de moins de 300 Ko chacune ([squoosh.app](https://squoosh.app) permet de les compresser). Vérifier qu'aucune image ne montre de visage, de nom ou de coordonnées tant que le site est en démonstration.
2. Les ranger dans `assets/img/projets/`, par exemple `01-anru.jpg`.
3. Dans `index.html`, remplacer la ligne `<div class="placeholder hand">…</div>` du projet par :
   ```html
   <img src="assets/img/projets/01-anru.jpg" alt="Carte des usages du quartier, réalisée sur QGIS">
   ```

## Choisir le papier

Le bouton en bas à droite permet de comparer trois papiers : **quadrillé**, **kraft** et **millimétré**. On peut aussi partager un lien qui ouvre directement l'un d'eux, en ajoutant `?papier=kraft` ou `?papier=millimetre` à la fin de l'adresse.

Une fois le choix fait, écrire le papier dans la première balise de `index.html`, par exemple `<html lang="fr" data-paper="kraft">`, puis supprimer le bloc `<div class="paper-switch" …>`.
