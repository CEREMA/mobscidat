---
title: Trafic routier
tags:
  - trafic
---

# Ressources sur les données de trafic routier

Cette page recense les ressources utiles sur les données de trafic routier en France. Version 0 à compléter !!
Vos contributions pour la mettre à jour sont les bienvenues !

## Vue d’ensemble

Ce site recense beaucoup de ressources : (https://trafic-routier.data.cerema.fr/)


## Types de Données et Sources

*   **Trafic en temps réel :**
    *   Description : Débit, vitesse, taux d'occupation des routes, événements et indicents, incidents.
    *   Sources :
        *   **Data gouv :** [https:/data.gouv.fr/](https://data.gouv.fr/) - portail national open data, les mots-clés permettent de trouver des données par exemple de comptages, mais le recensement n'est pas systèmatique ex.  (https://www.data.gouv.fr/datasets/search/?q=comptages) ; le site trafic-routier data du Cerema recense beaucoup de datasets open data des gestionnaires routiers mais n'est pas mis à jour régulièrement : (https://trafic-routier.data.cerema.fr/acces-aux-donnees-de-trafic-routier-open-data-r25.html) 
        *   **PAN Transport :** [https://transport.data.gouv.fr/](https://transport.data.gouv.fr/) - Informations en temps réel : https://transport.data.gouv.fr/datasets?filter=has_realtime&type=road-data 
        *   **AVATAR :** [https:/avatar.cerema.fr/](https://avatar.cerema.fr/) - Plateforme du Cerema, données de trafic nationales et locales, permet à tout gestionnaire routier de connecter gratuitement ses données temps réel et de publier des données temps réel et comptages agrégés.
    *   Formats : Flux de données (API), cartes interactives, applications mobiles
    *   Standards : DatexII pour le trafic et les événements, [API Avatar](https://avatar.cerema.fr/api/doc)

*   **Comptages routiers : comptages permanents, temporaires, ponctuels**
    *   Description : Mesures de trafic sur des points spécifiques (stations de comptage).
 
*   **Floating Car Data**
    *   Sources de données : https://grist.numerique.gouv.fr/o/mobscidat/kEzvBGMZkSzz/tableaux-donnees-de-mobilite/p/5
    *   Utilisation principale : temps de parcours et vitesse en temps différé et historique, mais aussi estimation d'origines destinations (et "chevelus"), ainsi que capacité à estimer les flux quand croisés avec des données de comptage ; par ailleurs les Extended FCD (XFCD) peuvent fournir des données complémentaires sur les événements déclenchés par les équipements du véhicules (par ex. freinage d'urgence)
    *   Webinaire 2025 : https://www.cerema.fr/fr/actualites/donnees-fcd-floating-data-maitriser-trafic-retour-rendez
    *   Article plus large sur les données "massives" (FCD, FMD, SDK...) https://www.cerema.fr/fr/actualites/apport-donnees-massives-connaissance-mobilites    


*   **Comptages PL :**
- classification nombre d'essieux, pesage : en complément des comptages trafic classiques qui comptent aussi les PL, 14 classes de véhicules
- https://www.cerema.fr/fr/mots-cles/poids-lourd 

*   **Enquêtes OD routières:**
https://www.cerema.fr/fr/actualites/standard-enquetes-circulation
https://www.cerema.fr/fr/actualites/connaitre-mobilites-travers-donnees-origine-destination 

*   **Comptages modes actifs:**
voir page vélo : https://cerema.github.io/mobscidat/types_donnees/velo/#usage-du-velo


## Outils et Ressources

*   **Outils de visualisation et d'analyse :**
    *   open source : QGIS, librairies python...
    *   Logiciels de traitement de données statistiques (R, Python)

*   **Principaux fournisseurs :**

*   **Documentation et standards :**
    *   Formats de données standardisés (e.g., DATEX II pour les données de trafic en temps réel)
    *   Documentation des API des différentes sources de données

## Contributions

Cette page est collaborative. N'hésitez pas à proposer des améliorations, des ajouts de données ou de ressources en soumettant une *pull request* sur le dépôt GitHub du projet.
