--- 
title: Données de voirie et réseaux routiers 
tags:
  - voirie
---

# Ressources sur les données de voirie

Cette page recense les ressources utiles sur les données de voirie en France. Elle vise à faciliter l'utilisation des données pour les chercheurs, les collectivités, les entreprises et tous les acteurs intéressés par la mobilité et les infrastructures. Elle peut et doit être améliorée au fil de l'eau, merci d'avance de vos contributions.

## Types de Données

### Linéaire de voirie et référentiels routiers
Tracé des routes, autoroutes, rues, chemins, etc.

*   **Sources nationales et collaboratives :** IGN ([BD TOPO](https://bdtopoexplorer.ign.fr/), Route 500, BD France en cours d'expérimentation), [OpenStreetMap](https://wiki.openstreetmap.org/wiki/FR:Relation:route), Overture Maps, bases de données des collectivités locales et gestionnaires.
  
*   **Réseau Routier National (RRN) / Référentiel National Commun (RNC) :** Référentiel Interurbain ([RIU](https://www.cerema.fr/fr/system/files?file=documents/2017/10/Point3-3_SIGR_GREF_Journee_technique_SIR_2504_2017.pdf)) de la DGITM (https://www.bison-fute.gouv.fr/donnees-sur-le-referentiel.html ), travaux en cours en vue d'un Référentiel National Commun prévus début 2027 par l'IGN et la DGITM (expérimentation sur la DIRSO / Occitanie) pour articuler référentiel routier linéaire et BD TOPO.

*   **Points Routiers (PR) et repérage** : Les Points Routiers sont publiés par les départements et en général publiés sur data.gouv.fr ([exemple](https://www.data.gouv.fr/datasets/bornage-du-reseau-routier-points-pr)) et intégrés dans la BD TOPO.

*   **Formats :** Shapefile, GeoJSON, GeoPackage, CSV.

### Voirie locale, voies communales et chemins ruraux
Données relatives aux voies communales (domaine public) et chemins ruraux (domaine privé de la commune) :
*   Projet **Voies locales en commun** (Fabrique de la donnée territoriale / IGN / ANCT) : le site https://voies-locales.fabriquedesterritoires.ign.fr/ fournit beaucoup de ressources sur ce sujet ; voir aussi [cette présentation](https://cnig.gouv.fr/IMG/pdf/20261104_voies_locales_en_commun_cnig_mobilites.pdf)

*   Schéma et format d'échange de données (tableur / schéma JSON / Frictionless) : https://github.com/IGNF/fabrique-schemas-voies-locales

*   cf. le CR du groupe de travail CNIG "données de mobilité" sur les données de voirie du 4/11/26 : https://cnig.gouv.fr/IMG/pdf/20261104_cr_gt_cnig_donnees_mobilite.pdf 

### Description surfacique de la voirie urbaine
*   PCRS (Plan Corps de Rue Simplifié) : https://pcrs.beta.gouv.fr/
  
*   Standard PCRS : https://cnig.gouv.fr/IMG/documents_wordpress/2017/12/CNIG_RTGE_PCRS_v2.0.pdf

### État de la chaussée
Informations sur l'état de la surface de la route (rugosité, fissures, déformations, etc.). 
Mesures réalisées par les gestionnaires de voirie (État, Départements, Communes) et entreprises spécialisées.

### Signalisation et réglementation routière
*   **Signalisation :** Emplacement et caractéristiques des panneaux de signalisation (directionnels, de danger, d'indication, etc.). Sources : IGN (BD TOPO), OpenStreetMap, bases de données des collectivités.
*   **Réglementation et arrêtés de circulation:** cf. la startup d'état https://dialog.beta.gouv.fr/   -> Numérisation des arrêtés de police et réglementation routière (vitesses limites autorisées - VLA, restrictions, gabarits)

### Équipements publics et gestion des servitudes
*   **Équipements :** Localisation et caractéristiques des équipements tels que l'éclairage public, les bornes de recharge pour véhicules électriques (IRVE), les arrêts de bus, etc. Sources : Bases de données des collectivités, OpenStreetMap.
*   **Desserte forestière et DFCI :** Réseau DFCI (Défense de la Forêt Contre les Incendies), desserte en transport de bois et points d'eau incendie ([NaviForest](https://naviforest.ign.fr/) / extension BD France / standard CNIG dédié).
*   **Infrastructures pour secours (NexSIS) :** Système d'information unifié des SDIS utilisant la BD TOPO pour les calculs d'isochrones et d'interventions.

### Données de trafic et comptages
*   Comptages routiers, données FCD (Floating Car Data), capteurs et boucles de comptage.
*   Page dédiée : https://cerema.github.io/mobscidat/types_donnees/trafic

## Accès aux Données

### Open Data
*   [data.gouv.fr](https://www.data.gouv.fr/) et portails de données ouvertes des collectivités 
*   [transport.data.gouv.fr](https://transport.data.gouv.fr/) (Point d'Accès National aux données de transport et mobilité)
*   [Géoplateforme IGN](https://cartes.gouv.fr/) (services de cartes, données BD TOPO, calcul d'itinéraire, géocodage PR)
*   OpenStreetMap : https://wiki.openstreetmap.org/wiki/FR:Voirie
*   Overture Maps

### Producteurs de données privés
*   TomTom, HERE, Waze, Google


## Outils et Ressources

*   **Outils de visualisation et d'analyse :**
    *   QGIS, GeoPandas (Python), outils métier statistiques et cartographiques.
    *   Plugin QGIS Voies locales (Fabrique de la donnée territoriale) : https://github.com/IGNF/fabrique-qgis-voies-locales
    *   Plateforme et outils *Mes Adresses* / Bases Adresses Locales (BAL) de l'ANCT : https://adresse.data.gouv.fr/

*   **Documentation, standards et groupes de travail :**
    *   Standards de données géographiques (ISO, OGC).
    *   CNIG (Conseil National de l'Information Géolocalisée) : https://cnig.gouv.fr/les-standards-cnig-a18959.html
    *   Standards CNIG connexes : GT accessibilité de la voirie et des cheminements, GT PDIPR (itinéraires de randonnée / GéoTrek), GT desserte forestière et DFCI.


## Contributions

Cette page est collaborative. N'hésitez pas à proposer des améliorations, des ajouts de données ou de ressources en soumettant une *pull request* sur le dépôt GitHub du projet.
 
