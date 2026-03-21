# Platform-Manager — Plateforme de digitalisation des opérations pour plateaux techniques (Recherche / Environnements de laboratoire)

## Contexte

Les plateaux techniques de recherche s’appuient sur des outils fragmentés et des processus manuels pour gérer la réservation des ressources, le suivi des projets, l’inventaire, la facturation et la documentation qualité, ce qui engendre des inefficacités opérationnelles et limite la traçabilité requise dans les environnements certifiés.

L’objectif de Platform-Manager était de concevoir et de déployer une plateforme web modulaire centralisant les workflows opérationnels afin d’améliorer l’efficacité administrative, de supporter les processus qualité ISO9001 et de permettre un déploiement mutialisé sur plusieurs plateaux techniques.

## Rôle — Solution Architect / Full-Stack Platform Engineer

* Conception et développement d’une plateforme modulaire de gestion des opérations supportant plusieurs plateaux techniques
* Traduction des contraintes opérationnelles des laboratoires en workflows digitaux structurés et en modèles de données
* Pilotage de la définition de la feuille de route technique et de la stratégie de déploiement
* Gestion du cycle de vie complet de la solution, de l’architecture à l’adoption par les utilisateurs

## Défis clés

* Digitalisation de workflows administratifs hétérogènes entre différents plateaux
* Garantie de la cohérence des données et de la traçabilité en conformité avec les exigences de certification qualité
* Support du déploiement multi-sites et flexibilité de configuration
* Automatisation des processus de facturation et de génération de devis liés aux activités projets
* Conception d’un système utilisable par du personnel opérationnel non technique

## Contributions & réalisations

* Conception de modèles de données SQL centralisés supportant la gestion des inventaires, le suivi du cycle de vie des projets et des jeux de données spécifiques aux laboratoires (ex. gestion des anticorps)
* Développement de fonctionnalités web modulaires pour la réservation, la facturation, la génération de devis et le reporting opérationnel
* Mise en place de workflows d’automatisation réduisant significativement l’effort administratif manuel
* Mise en œuvre d’une approche de déploiement conteneurisée (Docker) permettant des installations reproductibles sur ~30 plateaux techniques
* Structuration de la documentation, animation de sessions de formation et démonstrations produit pour favoriser une adoption à grande échelle
* Contribution à l’alignement des capacités de la plateforme avec les exigences des processus ISO9001 et les besoins de traçabilité en audit

## Technologies & pratiques

**Architecture & ingénierie**

* PHP, JQuery, MySQL
* Docker

**Delivery**

* Agile / Scrum

## Résultats

* Déploiement de Platform-Manager sur ~30 plateaux techniques
* Réduction par 5 de la charge administrative pour les équipes opérationnelles
* Amélioration de la standardisation des processus et de la préparation aux audits dans les environnements certifiés
* Meilleure visibilité sur l’utilisation des ressources et fiabilité accrue du suivi financier

## Périmètre des données
* Jeux de données opérationnels et transactionnels
* Données de planification des ressources, d’inventaire et de gestion de projets (basées sur SQL)


## Code: 

- [here](https://bgo-bioimagerie.github.io/platformmanager/)