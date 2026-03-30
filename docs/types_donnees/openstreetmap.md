---
title: OpenStreetMap
tags:
- OSM
---

## Les données openStreetMap pour le domaine des Mobilités

OpenStreetMap est une source opendata intéressante pour recueillir des données de mobilité, très utilisée entre autres [par la communauté Vélo](#-vélo), mais elle est parfois difficile à appréhender (collecte, traitement, exhaustivité, limites…), selon les cas d'usage.  
Le wiki de la communauté OpenStreetMap fournit beaucoup d'informations, le Cerema avait également produit des rapports sur les OSM pour les transports et la voirie ([un 1er en 2009](https://www.expertises-territoires.fr/upload/docs/application/pdf/2025-05/rapport-osm-cetemed-2009.pdf), [un second en 2016](https://www.expertises-territoires.fr/upload/docs/application/pdf/2025-05/osm_services_publics_-_cerema-2016.pdf)) et  il y a plusieurs années et plus récemment la Fabrique des Mobilités a fait un travail important d'accompagnement autour d'OSM.

Cette page recense plusieurs points d'entrée:

#### OpenStreetMap
[https://forum.openstreetmap.fr/](https://forum.openstreetmap.fr/) pour échanger avec la communauté]

toute la documentation de la communauté francophone est sur le wiki:
[https://wiki.openstreetmap.org/wiki/FR:Page_principale](https://wiki.openstreetmap.org/wiki/FR:Page_principale) 

#### exemples de projet de données territoriales sur le thème de la mobilité:
- *Mob-Vercors* : [https://wiki.openstreetmap.org/wiki/Mobi-Vercors](https://wiki.openstreetmap.org/wiki/Mobi-Vercors)

- *Région Sud-PACA*  Base de données sur les infrastructures, le stationnement et les équipements et services à disposition des cyclistes (audit, collecte, constitution et mise à jour de la base) :
[https://connaissance-territoire.maregionsud.fr/la-plateforme/les-projets/base-de-donnees-velo-en-region-provence-alpes-cote-dazur](https://connaissance-territoire.maregionsud.fr/la-plateforme/les-projets/base-de-donnees-velo-en-region-provence-alpes-cote-dazur)  
[https://wiki.openstreetmap.org/wiki/France/Donn%C3%A9es_v%C3%A9lo_en_R%C3%A9gion_Provence-Alpes-C%C3%B4te_d%27Azur](https://wiki.openstreetmap.org/wiki/France/Donn%C3%A9es_v%C3%A9lo_en_R%C3%A9gion_Provence-Alpes-C%C3%B4te_d%27Azur)

DataSud.fr propose une extraction quotidienne des données OSM, par thématiques métiers, dont pour Mobilité/Transport: Transport par câble, Aéroport, Aménagement cyclable, Routes, Mobilité maritime, Parc relais, Transport public, Voies ferrées, Remontées mécaniques, Itinéraires, Itinéraire cyclable : [https://www.datasud.fr/portal/collections/osm_flux](https://www.datasud.fr/portal/collections/osm_flux)

### points d'intérêt et routes
**GéoDataMine** facilite l'extraction de données thématiques depuis OpenStreetMap, sous la forme de fichiers tableurs ou géographiques. Il est simple de participer, mais pas si facile de télécharger des données d'une thématique spécifique sur son territoire. D'où cet assistant très simple ! Les données sont actualisées quotidiennement, et rendues disponibles aux formats CSV, GeoJSON, XSLX et Shapefile. Elles sont rendues compatibles avec les schémas de données nationaux lorsqu'ils existent, sinon selon les conventions d'OpenStreetMap.

https://geodatamine.fr/ 

#### vélo
La communauté Vélo utilise et contribue beaucoup à OSM comme source de données. Le PAN transport.data.gouv.fr et l'association Vélo & Territoires ont travaillé sur des schéma de données, notammant source principale :

- la Base Nationale des Aménagements Cyclables (BNAC) :  
        schéma de données: [https://schema.data.gouv.fr/etalab/schema-amenagements-cyclables/0.3.3/](https://schema.data.gouv.fr/etalab/schema-amenagements-cyclables/0.3.3/)  
        l'application Géovélo publie mensuellement les données OSM converties au format BNAC : [https://www.data.gouv.fr/fr/datasets/amenagements-cyclables-france-metropolitaine/](https://www.data.gouv.fr/fr/datasets/amenagements-cyclables-france-metropolitaine/)  
        les collectivités publient également leurs données : [https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-amenagements-cyclables](https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-amenagements-cyclables)
  
 - la Base Nationale du Stationnement Cyclable (BNSC) :  
        schéma de données : [https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-stationnement-cyclable](https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-stationnement-cyclable)  
        OSM publie ses données au format BNSC : [https://www.data.gouv.fr/fr/datasets/stationnements-cyclables-issus-dopenstreetmap/](https://www.data.gouv.fr/fr/datasets/stationnements-cyclables-issus-dopenstreetmap/)  
        les collectivités aussi : [https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-stationnement-cyclable](https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-stationnement-cyclable)  


#### Licence
Guide pratique "Tout savoir sur la licence ODbL" : [https://fposm.fr/publication-du-guide-pratique-tout-savoir-sur-la-licence-odbl/](https://fposm.fr/publication-du-guide-pratique-tout-savoir-sur-la-licence-odbl) 

#### Fabrique des Mobilités
-    Présentation d'OSM avec des exemples d'utilisations en collectivités : [https://wiki.lafabriquedesmobilites.fr/wiki/OpenStreetMap](https://wiki.lafabriquedesmobilites.fr/wiki/OpenStreetMap)
-    Etude du rôle d'OSM sur le sujet des données OSM pour les services numériques MaaS : [https://wiki.lafabriquedesmobilites.fr/wiki/OpenStreetMap_et_MaS](https://wiki.lafabriquedesmobilites.fr/wiki/OpenStreetMap_et_MaS)

#### Panoramax
Panoramax est un service numérique de mise en commun de photos de terrain développé par la fabrique des Géocommuns de l'IGN avec une forte implication de la communauté OSM,
avec des cas d'usage pour les acteurs des mobilités notamment les gestionnaires de voirie.
[https://panoramax.fr/cas-d-usage](https://panoramax.fr/cas-d-usage) 
et une instance de contribution hébergée par OSM France [https://panoramax.openstreetmap.fr/](https://panoramax.openstreetmap.fr/)
