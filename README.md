# Portfolio · Meryem Aoujil

Portfolio d'urbanisme au style « carnet de terrain » : études de cas, cartographie SIG et planches, entre Rabat et Brest.

Le site n'utilise que du HTML, du CSS et un peu de JavaScript. Il n'y a rien à installer, et il fonctionne tel quel sur GitHub Pages. Pour le voir en local, double-cliquer sur `index.html`.

## Organisation de la page

| Section | Contenu |
| --- | --- |
| Accueil | Présentation, recherche de stage, photo, liens vers le CV et le contact |
| Profil | Trois domaines de compétence, chacun relié à la section qui le prouve |
| Études de cas | 01 ANRU (projet actuel, en cours), 02 Biométropole, 03 Logistique urbaine à Quimper |
| Cartographie SIG | 9 cartes : Lambézellec (Brest), puis l'atlas de la région Tanger-Tétouan-Al Hoceïma |
| Planches d'urbanisme | Du plus récent au plus ancien : Daoulas (2026), Mqam Tolba (2025), médina de Safi (2024), Hay Riad (2023), Dar Bouazza (2022) |
| Parcours | Formations, stages, prochaine étape |
| Boîte à outils | Savoir-faire, logiciels, langues, engagement |
| Contact | E-mail, téléphone, LinkedIn, CV en PDF |

Un clic sur une image l'ouvre dans une visionneuse plein écran. On peut passer d'une image à l'autre avec les flèches, ou en balayant sur téléphone, et ouvrir l'image en taille réelle. Les deux visuels avant/après du projet Biométropole se comparent en faisant glisser la poignée.

## Contenu du dossier

```
index.html                 la page du site
assets/css/style.css       la mise en page et les couleurs
assets/js/main.js          visionneuse et comparateur avant/après
assets/img/portrait.jpg    la photo de profil
assets/img/projets/        les visuels des études de cas
assets/img/cartes/         les 9 cartes SIG
assets/img/logos/          les logos des partenaires (logo-bmh.png)
assets/img/planches/       les planches d'urbanisme
assets/docs/               le CV en PDF
robots.txt                 demande aux moteurs de recherche de ne pas indexer le site (voir plus bas)
.gitignore                 empêche d'envoyer le dossier source/ sur GitHub
```

Chaque image existe en deux tailles : `nom-m.jpg` (environ 900 px) pour les vignettes, et `nom.jpg` (jusqu'à 2 600 px) pour la visionneuse.

## Données personnelles et travaux collectifs

- Les noms des co-équipiers et des encadrants ont été retirés : du texte, et des visuels eux-mêmes (pages de garde du mémoire et du rapport Quimper, cartouche des planches Hay Riad, en-tête de la planche Daoulas, signature de la carte de Lambézellec). Les projets indiquent seulement « équipe de 3 étudiants », « 6 étudiants », etc.
- Le dossier `source/` (PDF d'origine, mémoire complet, rapports) est exclu par `.gitignore` et ne doit jamais être publié.
- Tant que le portfolio n'est pas officiellement lancé, la balise `<meta name="robots" content="noindex…">` et `robots.txt` demandent aux moteurs de recherche de ne pas le référencer. Pour le rendre visible sur Google, supprimer cette balise dans `index.html` ainsi que le fichier `robots.txt`.

## Mettre à jour le site

Depuis le dossier du projet :

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

Le site se met à jour sur GitHub Pages en une à deux minutes.

## Modifier le contenu

- **Textes** : directement dans `index.html`. Chaque section est signalée par un commentaire, par exemple `<!-- ================= PROJETS ================= -->`.
- **Disponibilités** : un commentaire dans l'accueil indique la ligne à ajouter, par exemple « disponible d'avril à septembre 2027 ».
- **Rôle dans chaque projet** : un commentaire en fin de fiche Biométropole donne le modèle `Mon rôle`. Il est conseillé de préciser son rôle pour les travaux collectifs.
- **Remplacer une image** : garder le même nom de fichier dans `assets/img/…`, en fournissant les deux tailles (`nom.jpg` et `nom-m.jpg`), en JPEG de moins de 500 Ko chacune ([squoosh.app](https://squoosh.app) permet de les compresser).

## Logos des partenaires

Le logo de Brest Métropole Habitat (`assets/img/logos/logo-bmh.png`) apparaît dans la fiche du projet ANRU. Les autres partenaires (Quimper Bretagne Occidentale, Cerema, Wilaya Tanger-Tétouan-Al Hoceïma) sont cités en texte dans leurs projets et dans le parcours.

