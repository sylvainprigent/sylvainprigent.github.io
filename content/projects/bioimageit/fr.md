# BioImage-IT — Plateforme d’analyse de données scientifiques conforme aux principes FAIR (Recherche / Sciences de la vie)

## Contexte

Les équipes de recherche en sciences de la vie s’appuient sur des outils d’analyse hétérogènes développés dans différents environnements de programmation (Python, C++, Java), ce qui génère de fortes frictions en matière de gestion des données, de reproductibilité et d’adoption des outils.

L’objectif de BioImage-IT était de concevoir une plateforme modulaire d'analyse scientifique permettant aux chercheurs de gérer, traiter et visualiser des jeux de données d’imagerie complexes, tout en assurant une conformité native aux principes FAIR (Findable, Accessible, Interoperable, Reusable).

La plateforme permet un déploiement multi-systèmes d’exploitation, une intégration fluide de nouveaux algorithmes et l’industrialisation d’outils de recherche pour des utilisateurs finaux non techniques.

## Rôle — Data Solution Architect / Scientific Software Engineer

* Rédaction du dossier de financement accadémique
* Pilotage de l’architecture et du développement d’une plateforme d’analytique scalable pour les workflows de données de recherche
* Traduction des contraintes issues des mathématiques appliquées et de la recherche en imagerie biologique en fonctionnalités logicielles prêtes pour la production
* Interface entre développeurs d’algorithmes, biologistes et équipes d’ingénierie logicielle
* Participation à la définition de la feuille de route technique et de la stratégie d’extensibilité de la plateforme

## Défis clés

* Gérer de jeux de données d’imagerie multimodale à grande échelle (2D / 3D / 3D+t)
* Garantir la reproductibilité de bout en bout et la traçabilité des expériences
* Intégrer des outils de recherche hétérogènes sans redéveloppement des interfaces graphiques
* Supporter l’installation dynamique et l’exécution d’algorithmes intensifs en calcul
* Garantir la compatibilité multiplateforme (Linux / MacOS / Windows)
* Faciliter l’adoption par des utilisateurs scientifiques non programmeurs

## Contributions & réalisations

* Conception et implémentation de modules d’analyse haute performance en Python, C++ et CUDA pour accélérer les workflows de traitement d’images
* Conception de l’architecture de plateforme basée sur des plugins permettant l’intégration de backends externes tels que OMERO
* Contribution à l’industrialisation d’algorithmes de recherche via des environnements d’exécution conteneurisés (Conda / Docker), améliorant la fiabilité du déploiement
* Développement de fonctionnalités applicatives full-stack (Python / Qt) permettant l’exploration interactive et la visualisation des données
* Conception de la couche de gestion des données conforme aux principes FAIR avec suivi automatique de la provenance
* Définition de la feuille de route d’évolution technique alignée avec les besoins des collaborations de recherche
* Animation de sessions de formation et support technique pour accélérer l’adoption de la plateforme dans les laboratoires
* Présentation des capacités de la plateforme lors de conférences et séminaires scientifiques
* Co-rédaction d’une publication évaluée par les pairs décrivant la méthodologie et l’impact de la plateforme

## Technologies & pratiques

**Architecture & ingénierie**

* Python (SciPy, Pandas, Scikit-Learn, PyTorch), C++, CUDA
* Conda, Docker
* Ingénierie logicielle multiplateforme (Linux, MacOS, Windows)

**Delivery & collaboration scientifique**

* Agile, cycles d’itération Lean orientés recherche

## Résultats

* Livraison de la plateforme BioImage-IT permettant l’industrialisation des workflows d’analyse d’images de recherche
* Réduction du temps d’adoption de nouveaux algorithmes grâce à l’élimination des contraintes de redéveloppement d’interfaces graphiques
* Amélioration de la reproductibilité scientifique et de la traçabilité des expériences
* Facilitation du transfert technologique des équipes de mathématiques appliquées vers les laboratoires de biologie
* Contribution à une publication évaluée par les pairs dans la revue Nature Methods

## Périmètre des données

* Jeux de données d’imagerie biologique multidimensionnelle
* Données de microscopie volumique 2D / 3D / résolues dans le temps

# Publication
- [Nature method: https://www.nature.com/articles/s41592-022-01642-9](https://www.nature.com/articles/s41592-022-01642-9)

# Code
- [github: https://bioimageit.github.io](https://bioimageit.github.io)