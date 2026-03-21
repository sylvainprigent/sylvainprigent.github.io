# Eve Analytics — Plateforme d’analyse de données de microscopie à grande échelle (Pharma / R&D préclinique)

## Contexte

Les équipes de recherche pharmaceutique génèrent des volumes massifs de données de microscopie 3D résolues dans le temps (>1 To par expérience) à l’aide des microscopes de Nanolive.
Les workflows existants étaient manuels, fragmentés et incapables de passer à l’échelle, créant des goulets d’étranglement dans l’exploitation des données, la reproductibilité et la rapidité de prise de décision.

L’objectif était de concevoir et d’industrialiser Eve Analytics, une plateforme d’analytique haute performance permettant le traitement automatisé et la visualisation de jeux de données de microscopie complexes, tout en respectant des contraintes strictes de confidentialité, de déploiement on-premise et de validation scientifique.

## Rôle — Data Solution Architect

* Pilotage de la conception d’architecture de bout en bout d’une plateforme analytique modulaire pour les workflows d’imagerie scientifique
* Traduction des besoins de la recherche préclinique en une architecture data & compute scalable
* Interface entre scientifiques R&D, product management et équipes d’ingénierie
* Définition de la stratégie technique, des objectifs de performance et de l’approche de validation

## Défis clés

* Traiter à grande échelle de jeux de données d’imagerie 2D / 3D / 3D+t avec des contraintes proches du temps réel
* Garantir un temps de traitement inférieur au temps d’acquisition
* Supporter un déploiement on-premise entièrement isolés pour les clients pharmaceutiques
* Garantir de la reproductibilité scientifique et de la traçabilité
* Adapter l'installation à des environnements IT clients hétérogènes

## Contributions & réalisations

* Conception d’un pipeline de traitement de données haute performance combinant des modules de calcul Python / C++ et des stratégies de stockage optimisées
* Réalisation de preuves de concept validant la scalabilité de l’architecture sur des jeux de données >1 To
* Définition des modèles de données et de la stratégie de base de données permettant un suivi structuré des expériences et la reproductibilité des résultats
* Proposition de stratégies d’optimisation des performances (parallélisation, gestion mémoire, refactoring algorithmique) réduisant significativement la latence de traitement
* Animation d’ateliers de conception avec les équipes de recherche afin d’aligner les workflows scientifiques avec les capacités produit
* Construction de user story mapping et de la feuille de route technique supportant la vision produit Eve 2.0
* Mise en place d’un framework de test et de validation sur des jeux de données précliniques de référence pour renforcer la crédibilité scientifique
* Contribution aux décisions de design UX améliorant l’utilisabilité pour les chercheurs non techniques
* Support technique aux équipes commerciales et customer pour faciliter l’adoption de la solution

## Technologies & pratiques

**Architecture & ingénierie**

Python, C++, SQL, TensorFlow

**Delivery & collaboration**

Agile / Scrum, YouTrack, Microsoft Teams, Salesforce

## Résultats

* Lancement d’Eve Analytics 2.0 permettant l’analyse automatisée de microscopie à grande échelle
* Amélioration de la productivité de recherche et du temps de cycle des expériences
* Possibilité de déploiements sécurisés dans des environnements pharmaceutiques réglementés
* Mise en place d’une architecture logicielle scalable pour les évolutions futures du produit

## Périmètre des données

* Imagerie de microscopie volumique en séries temporelles
* Jeux de données biologiques 2D / 3D / 3D+t