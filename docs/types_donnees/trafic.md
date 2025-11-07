---
title: Trafic routier
tags:
  - trafic
---

# Ressources sur les données de trafic routier

Cette page recense les ressources utiles sur les données de trafic routier en France. Version 0 à compléter !!
Vos contributions pour la mettre à jour sont les bienvenues !

## Vue d’ensemble

https://trafic-routier.data.cerema.fr/

---
title: Données de Trafic
---

# Données de Trafic

Cette page recense les principaux types de données disponibles concernant le trafic routier en France. Elle vise à faciliter l'accès aux données pour les chercheurs, les collectivités, les entreprises et tous les acteurs intéressés par la mobilité et les infrastructures.

## Types de Données et Sources

*   **Données de trafic en temps réel :**
    *   Description : Débit, vitesse, taux d'occupation des routes, incidents.
    *   Sources :
        *   **Bison Futé :** [https://www.bison-fute.gouv.fr/](https://www.bison-fute.gouv.fr/) - Informations nationales sur les conditions de circulation.
        *   **Sytadin :** [https://www.sytadin.fr/](https://www.sytadin.fr/) - Informations en temps réel pour la région Île-de-France.
        *   **Trafic-routier.data.cerema.fr :** [https://trafic-routier.data.cerema.fr/](https://trafic-routier.data.cerema.fr/) - Plateforme du Cerema, données nationales et locales.
        *   **Applications de navigation (Waze, Google Maps) :** (Liens variables en fonction de l'application) - Données collaboratives, souvent en temps réel.
    *   Formats : Flux de données (API), cartes interactives, applications mobiles.

*   **Données de comptage routier :**
    *   Description : Mesures de trafic sur des points spécifiques (stations de comptage).
    *   Sources :
        *   **Comptages routiers permanents (Ministère de la Transition Écologique) :** (Difficile de donner un lien direct, souvent intégrées dans des rapports ou accessibles sur demande) - Données nationales, historiques.  Chercher sur [data.gouv.fr](https://www.data.gouv.fr/).
        *   **Collectivités territoriales :** (Varie en fonction de la collectivité, chercher sur leurs sites de données ouvertes) - Départements, régions, métropoles (souvent en open data).
        *   **[trafic-routier.data.cerema.fr](https://trafic-routier.data.cerema.fr/) :** [https://trafic-routier.data.cerema.fr/](https://trafic-routier.data.cerema.fr/) - Agrégation de données de comptage.
    *   Formats : Tableaux de données, fichiers CSV.

*   **Données de simulation de trafic :**
    *   Description : Modèles de trafic pour anticiper les flux, évaluer des scénarios.
    *   Sources :
        *   **Logiciels de simulation (SUMO) :** [https://www.eclipse.org/sumo/](https://www.eclipse.org/sumo/)
 	*   **Logiciels de simulation (VISSIM) :** [https://www.ptvgroup.com/fr/solutions/produits/ptv-vissim/](https://www.ptvgroup.com/fr/solutions/produits/ptv-vissim/) - Nécessitent des données d'entrée (cartographie, matrices origine-destination).
        *   **Études de trafic :** (Pas de lien direct, dépend des bureaux d'études) Souvent réalisées par des bureaux d'études pour des projets spécifiques.

*   **Données de localisation (issus des téléphones portables, véhicules connectés):**
    *   Description : Reconstitution des déplacements, matrices Origine-Destination (OD)
    *   Sources :
        *   **Orange Flux Vision :** [https://fluxvision.orange.fr/](https://fluxvision.orange.fr/)
        *   **Constructeurs automobiles**: (l'accès dépend de chaque constructeur)
    *   Formats : Données agrégées et anonymisées

## Accès aux Données

*   **Plateformes de données ouvertes :**
    *   [data.gouv.fr](https://www.data.gouv.fr/)
    *   Sites de données ouvertes des régions et des collectivités (à chercher individuellement)

*   **Producteurs de données :**
    *   Cerema ([https://trafic-routier.data.cerema.fr/](https://trafic-routier.data.cerema.fr/))
    *   Ministère de la Transition Écologique (via data.gouv.fr et publications)
    *   Collectivités territoriales (via leurs sites de données ouvertes)
    *   Sociétés d'autoroutes (pour les données sur autoroutes, à chercher individuellement)

## Outils et Ressources

*   **Outils de visualisation et d'analyse :**
    *   QGIS
    *   GeoPandas (Python)
    *   Logiciels de traitement de données statistiques (R, Python)

*   **Documentation et standards :**
    *   Formats de données standardisés (e.g., DATEX II pour les données de trafic en temps réel)
    *   Documentation des API des différentes sources de données (à chercher individuellement)

## Contributions

Cette page est collaborative. N'hésitez pas à proposer des améliorations, des ajouts de données ou de ressources en soumettant une *pull request* sur le dépôt GitHub du projet.
