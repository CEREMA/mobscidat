---
title: Données Vélo 
tags:
  - vélo
---

# Ressources sur les données pour le vélo

Cette page recense les ressources utiles sur les données relatives au vélo. Vos contributions pour la mettre à jour sont les bienvenues !

## Vue d’ensemble

Les atlas régionaux, développés par Vélo & territoires donnent une vision d'ensemble de la situation du vélo par région, on y retouve des indicateurs sur 6 thématiques (part modale, véloroutes, fréquentations, accueil vélo, stationnement et aménagements) :
[https://www.velo-territoires.org/observatoires/donnees-velo/atlas-regionaux/](https://www.velo-territoires.org/observatoires/donnees-velo/atlas-regionaux/)

Retrouvez ici tous les observatoires développés par Vélo & territoires:
[https://www.velo-territoires.org/observatoires/](https://www.velo-territoires.org/observatoires/).
Les schémas de données existant sur le sujet du vélo:
[https://www.velo-territoires.org/politiques-cyclables/data-velo-modeles-donnees/](https://www.velo-territoires.org/politiques-cyclables/data-velo-modeles-donnees/)

## Aménagements cyclables

la Base Nationale des Aménagements Cyclables (BNAC) s’appuie sur un schéma de données (développé par l’équipe de transport.data.gouv.fr, en collaboration avec l'association Vélo & Territoires) et est gérée sur Open Street Map :

*  Schéma de données d'aménagements cyclables : [https://schema.data.gouv.fr/etalab/schema-amenagements-cyclables/0.3.3/](https://schema.data.gouv.fr/etalab/schema-amenagements-cyclables/0.3.3/)
*  Les données sont publiées par Géovélo mensuellement au format GeoJSON selon le schema ci-dessus, certaines collectivités publient aussi leurs données, qui sont intégrées à Open Street Map : (à vérifier si toutes les données sont à jour dans OSM) : https://transport.data.gouv.fr/datasets/amenagements-cyclables-france-metropolitaine  
*   [https://transport.data.gouv.fr/datasets?type=bike-data](https://transport.data.gouv.fr/datasets?type=bike-data)

Géovélo publie aussi les données sur ce site :
[https://www.amenagements-cyclables.fr/](https://www.amenagements-cyclables.fr/)

## Stationnement Vélo

([https://doc.transport.data.gouv.fr/type-donnees/documentation-sur-le-stationnement-cyclable](https://doc.transport.data.gouv.fr/type-donnees/documentation-sur-le-stationnement-cyclable))

la Base Nationale du Stationnement Cyclable (BNSC) fonctionne selon le même principe que la BNAC  :


*  Schéma de données : [https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-stationnement-cyclable](https://www.data.gouv.fr/fr/datasets/?schema=etalab/schema-stationnement-cyclable)
*   [https://transport.data.gouv.fr/datasets/stationnements-cyclables-issus-dopenstreetmap](https://transport.data.gouv.fr/datasets/stationnements-cyclables-issus-dopenstreetmap)
    Données gérées dans la base Open Street Map et exportées en JSON selon le schéma format BNSC :

Les collectivités publient également les données les concernant :
[https://transport.data.gouv.fr/datasets?q=stationnement+cyclable](https://transport.data.gouv.fr/datasets?q=stationnement+cyclable)

### stationnements sécurisés en gare

*   Données Gares et Connexion :  [https://ressources.data.sncf.com/explore/dataset/stationnement-securise-velo-en-gare-au-30-06-24/information/](https://ressources.data.sncf.com/explore/dataset/stationnement-securise-velo-en-gare-au-30-06-24/information/)
*   Observatoire de Vélo & territoires :
    [https://www.velo-territoires.org/observatoires/donnees-velo/stationnement-velo-en-gare/](https://www.velo-territoires.org/observatoires/donnees-velo/stationnement-velo-en-gare/) les données proviennent de SNCF Gares & Connexions, et sont corrigées en partie par les Dreals et régions
*   Il manque les données de stationnement vélo dans les parkings en ouvrage ?

## Itinéraires

### Véloroutes

Vélodatamap, un outil développé par Vélo & Territoires, permet de d'observer le tracé actuel et l'état d'avancement des itinéraires eurovélo et des véloroutes nationales, régionales et départementales :
[http://velodatamap.velo-territoires.org/vmap/dashboard](http://velodatamap.velo-territoires.org/vmap/dashboard)

Comme pour les aménagements et le stationnement, il existe un géostandard pour les véloroutes et les voies vertes :
[https://www.velo-territoires.org/politiques-cyclables/data-velo-modeles-donnees/geostandard-veloroutes-voies-vertes/](https://www.velo-territoires.org/politiques-cyclables/data-velo-modeles-donnees/geostandard-veloroutes-voies-vertes/)

Vélo & Territoires propose aussi un outil de signalement des anomalies cyclables, outil qui peut être déployé sur un itinéraire ou un territoire
([https://www.velo-territoires.org/observatoires/outil-signalement-anomalies-cyclables/](https://www.velo-territoires.org/observatoires/outil-signalement-anomalies-cyclables/)), les signalements sont visibles sur la plateforme velodatamap

### Autres itinéraires :

*   départementaux : PDIPR, itinéraires de cyclotourisme et VTT (gérés avec la FFV) ;
    [https://www.data.gouv.fr/datasets/plan-departemental-des-itineraires-de-promenade-et-de-randonnee-pdipr-3/](https://www.data.gouv.fr/datasets/plan-departemental-des-itineraires-de-promenade-et-de-randonnee-pdipr-3/)
*   urbains, dans les grandes agglomérations (ex. voies lyonnaises...)

## Services de vélo en libre-service

Les vélos en libre-service sont publiés selon le même format GBFS que les autres véhicules (trottinettes, auto-partage..), avec la disponibilité en temps réel aux stations

[https://transport.data.gouv.fr/datasets?type=vehicles-sharing](https://transport.data.gouv.fr/datasets?type=vehicles-sharing)

Les données permettent notamment de connaître en temps réel le nombre de vélos mécaniques/électriques à chaque station ainsi que le nombre de bornettes libres. Les données statiques décrivent la postion et les caractéristique des stations.

Les données sont publiées par les opérateurs (ou la collectivité concédante), selon l’opérateur sont publiées également des données statiques décrivant les stations, , par ex pour JC Decaux:
[https://developer.jcdecaux.com/#/opendata/vls?page=static](https://developer.jcdecaux.com/#/opendata/vls?page=static)

## Usage du vélo

OBSMMA : Le projet d'un observatoire de la mobilité des modes actifs (OBSMMA, 2020-2022) , mené conjointement par une équipe du Cerema, de Vélo & Territoires et du Club des villes & territoires cyclables, et subventionné par la Direction à la Sécurité Routière a eu pour objet de préparer la construction d’un baromètre national des déplacements des piétons, des cyclistes et des usagers d’engins de déplacement personnel (EDP) :
[https://www.cerema.fr/fr/actualites/obsmma-publications-du-projet](https://www.cerema.fr/fr/actualites/obsmma-publications-du-projet)

LEVEL (projet en cours): Ce projet a pour but de créer des indicateurs nationaux des pratiques cyclables, représentatifs du territoire et de la diversité des pratiques, à partir des données des compteurs partagés sur la Plateforme nationale des fréquentations. Le Cerema, Réseau Vélo & Marche ainsi que l'université Gustave Eiffel travaillent conjointement à sa réalisation. Ce projet est subventionné par la Direction à la Sécurité Routière.

### Applis mobiles / traces

Les itinéraires suivis par les cyclistes peuvent être observés grâce à des applications comme Strava ou Géovélo. Les données collectées par les utilisateurs de ces applications peuvent être utilisées pour observer la fréquentations des aménagements cyclables, attention ces données ne sont pas représentatives de la population globale des cyclistes. Il est possible de faire une demande de partenariat avec Strava Metro pour avoir accès gratuitement aux traces anonymisés des utilisateurs de la plateforme sur un territoire précis
([https://metro.strava.com/fr](https://metro.strava.com/fr)).
Géovélo propose aussi une solution de suivi du trafic pour les territoires, avec des statistiques sur le réseau cyclable, la répartition du trafic et un outil d'aide à la décision
([https://geovelo.app/fr/territories/](https://geovelo.app/fr/territories/)).

Outdoorvision ([https://outdoorvision.fr/](https://outdoorvision.fr/))
est un service proposé par le Pôle ressources national sports de nature, mission d’appui du ministère chargé des Sports. Il peut compiler les traces GPS des applis suivantes : Garmin Connect™, Polar Flow, Suunto App (Appli Suunto) ou Decathlon,  après connexion et accord de l’utilisateur. Il est aussi possible de partager ses traces directement à Outdoorvision : axé sur les sports de plein air donc plutôt loisirs (le vtt et le vélo de route)

### Comptages

Pour suivre la fréquentation des itinéraires, Vélo & territoires a développé cet observatoire  :
[https://www.velo-territoires.org/observatoires/donnees-velo/frequentation-itineraires/](https://www.velo-territoires.org/observatoires/donnees-velo/frequentation-itineraires/)

chiffres 2023 :
[https://www.velo-territoires.org/observatoires/donnees-velo/frequentations-velo-en-france-2023/](https://www.velo-territoires.org/observatoires/donnees-velo/frequentations-velo-en-france-2023/)
Chiffres 2024 : https://www.velo-territoires.org/actualite/2025/07/24/57310/ 
Chiffres 2025: https://reseau-velo-marche.shinyapps.io/bulletin/ 

La Plateforme nationale des fréquentations (PNF) centralise plus de 1700 compteurs partagés, les données de ces compteurs sont accessibles aux contributeurs et aux adhérents de Vélo & territoires. Ces données sont utilisées par Vélo & territoires pour produire des rapports annuels.
[https://www.velo-territoires.org/observatoires/plateforme-nationale-de-frequentation/](https://www.velo-territoires.org/observatoires/plateforme-nationale-de-frequentation/)

Certains territoires publient aussi leurs données de comptages sur datagouv
[https://www.data.gouv.fr/datasets/search/?q=compteurs+v%C3%A9lo](https://www.data.gouv.fr/datasets/search/?q=compteurs+v%C3%A9lo)
ou ont leurs propres plateformes des fréquentations avec leurs compteurs ( exemple pour l’eurométropole de Metz :
[https://eurometropolemetz.eco-counter.com/](https://eurometropolemetz.eco-counter.com/)
)

Le Rendez-vous Mobilités du Cerema, du 28 septembre 2023 sur &quot;Les dispositifs de comptage des cyclistes&quot; : ce webinaire présentent différentes solutions techniques de comptages ainsi que des cas d'usage.

[https://www.cerema.fr/fr/actualites/dispositifs-comptage-cyclistes-retour-rendez-vous-mobilites?folder=13873](https://www.cerema.fr/fr/actualites/dispositifs-comptage-cyclistes-retour-rendez-vous-mobilites?folder=13873)

[https://numerique360.banquedesterritoires.fr/mobilites/connaissances/flavien-lopez-comment-et-avec-quelles-donnees-peut-on-planifier-des-pistes-cyclables/](https://numerique360.banquedesterritoires.fr/mobilites/connaissances/flavien-lopez-comment-et-avec-quelles-donnees-peut-on-planifier-des-pistes-cyclables/)

### Enquêtes

*   Le recensement de la population, réalisé par l'INSEE, permet d'obtenir des statistiques sur le mode de transport des français pour les déplacement domicile-travail (mobilité professionnelle) : nombre d'actifs occupés de 15 ans ou + qui utilisent principalement un vélo pour aller travailler
    ([https://catalogue-donnees.insee.fr/fr/catalogue/recherche/DS_RP_NAVETTES_PRINC](https://catalogue-donnees.insee.fr/fr/catalogue/recherche/DS_RP_NAVETTES_PRINC)).
    Ces données sont localisées à différents échelles géographiques (commune, arrondissement municipal, arrondissement, département, région, établissement public de coopération intercommunal, unité urbaines 2020, aire d'attraction des villes 2020, bassin de vie 2022, zone d'emploi 2020, France)
*   L'enquêtes mobilités des personnes (EMP), mis en oeuvre en 2019 par le ministère de l'aménagement du territoire et de la transition écologique (SDES : une nouvelles enquête est en cours en 20225). Elle succède à l’enquête nationale transport et déplacements (ENTD), conduite en 2007 et en 2008. Ces enquêtes permettent par exemple d'avoir des statistiques sur le temps passé dans le trafic.
    ([https://www.statistiques.developpement-durable.gouv.fr/resultats-detailles-de-lenquete-mobilite-des-personnes-de-2019](https://www.statistiques.developpement-durable.gouv.fr/resultats-detailles-de-lenquete-mobilite-des-personnes-de-2019))
*   L’enquête nationale sur l’usage du vélo, réalisée par le ministère de la transition écologique en 2023 et 2024 s'intéresse à l'usage du vélo à l'échelle nationale

    [https://www.ecologie.gouv.fr/sites/default/files/documents/DGITM_Enquete%20Nationale%20-%20Usage%20du%20VELO%20-%20Resultats%202023_0.pdf](https://www.ecologie.gouv.fr/sites/default/files/documents/DGITM_Enquete%20Nationale%20-%20Usage%20du%20VELO%20-%20Resultats%202023_0.pdf).
*   Les enquêtes mobilité certifiée Cerema (EMC²) donnent une connaissance de l'usage du vélo sur un territoire précis, avec notamment le calcul de la part modale du vélo ou la distance moyenne / médiane de déplacement par mode
    [https://www.cerema.fr/fr/actualites/actualite-emc2-enquetes-cours-derniers-resultats](https://www.cerema.fr/fr/actualites/actualite-emc2-enquetes-cours-derniers-resultats).

Ces enquêtes sont utilisées pour alimenter ce site qui présente la pratique des modes actifs sur le thème “santé et mobilité”

[https://santemobilite-beta.cerema.fr/home](https://santemobilite-beta.cerema.fr/home)

### Accidentologie

Bilans annuels de la Sécurité Routière :

[https://www.onisr.securite-routiere.gouv.fr/etat-de-l-insecurite-routiere?field_theme_target_id=638](https://www.onisr.securite-routiere.gouv.fr/etat-de-l-insecurite-routiere?field_theme_target_id=638)

## Cyclabilité

*   Le baromètre des villes cyclables est réalisé par la Fédération française des Usagères et Usagers de la Bicyclette (FUB). C'est l’indice de satisfaction des usagers du vélo en France. La position des améliorations perçues depuis 2 ans, la position des points à améliorer en priorité, la position des souhaits de stationnements vélos ainsi que les questions et réponses à l'enquête sont [disponibles en opendata pour chaque EPCI](https://opendata.parlons-velo.fr/). Les données sociologiques des répondants sont disponibles au téléchargement si vous êtes un organisme à but non lucratif.
*   [https://barometre.parlons-velo.fr/](https://barometre.parlons-velo.fr/). [https://www.barometre-velo.fr/](https://www.barometre-velo.fr/)
*   Vélo & territoires a calculé un taux de cyclabilité de la voirie des communes en France, cela constitue une facette de la notion de cyclabilité
    [https://www.velo-territoires.org/actualite/2022/05/11/indicateur-de-cyclabilite/](https://www.velo-territoires.org/actualite/2022/05/11/indicateur-de-cyclabilite/).
*   Lien vers un état de l’art des indicateurs de cyclabilité?

## Plan vélo

Plan vélo et marche national :

[https://www.ecologie.gouv.fr/politiques-publiques/velo-marche-modes-deplacement-vertueux-avantageux](https://www.ecologie.gouv.fr/politiques-publiques/velo-marche-modes-deplacement-vertueux-avantageux)

Cyclopolis est une plateforme open source développée par l’association “la ville à vélo” permettant le suivi du développement du réseau cyclable lyonnais, qui a été adaptée à d’autres villes par d’autres associations.

[https://cyclopolis.fr/](https://cyclopolis.fr/)

[https://cyclopolis.fr/sites-partenaires](https://cyclopolis.fr/sites-partenaires)

Vélo & territoires et le Club des villes et territoires cyclables et marchables ont mené une enquête nationale sur les politiques modes actifs en 2022 :
[https://www.velo-territoires.org/observatoires/enquete-politiques-modes-actifs/enquete-nationale-politiques-modes-actifs-2022/](https://www.velo-territoires.org/observatoires/enquete-politiques-modes-actifs/enquete-nationale-politiques-modes-actifs-2022/)
Celle-ci a interrogé les collectivités françaises sur les stratégies et actions visant à développer le vélo et la marche sur leur territoire.

### Vélo et tourisme ?

Le label “accueil vélo”, tous les services labellisés sont visibles sur une carte par région via les atlas régionaux de RVM

### Vélo sportif

Le nombre de licenses à la fédération francaise de cyclisme et la fédération française de cyclotourisme, ainsi que le nombre d’educateurs pour ces activités sont répertoriés dans l’Observatoire des sports de nature : [https://observatoire.sportsdenature.gouv.fr/](https://observatoire.sportsdenature.gouv.fr/)

## Parc de vélos

### Vol de vélo

L'Académie des Mobilités Actives a réalisée une étude, en 2023 sur le vol de vélos en France, le rapport complet indique les sources de données disponibles sur ce sujet et leur utilisation.

[https://www.mobilites-actives.fr/ressource/le-vol-de-velo-en-france/](https://www.mobilites-actives.fr/ressource/le-vol-de-velo-en-france/)

### Filière du vélo

Statistiques sur le marché vélo par Union Sport Cycle, organisation professionnelle de la filière sport & loisirs : on retrouve notamment le chiffre d'affaires des ventes, de la réparationn ainsi que le nombre de vélos vendus en France.

[https://www.unionsportcycle.com/observatoire-du-cycle/chiffres-marche](https://www.unionsportcycle.com/observatoire-du-cycle/chiffres-marche).
Enquête des emplois de la filière vélo: Le nombre de vélocistes est accessible via Openstreetmap.

[https://filierevelo.com/enquete-emploi-2022/](https://filierevelo.com/enquete-emploi-2022/)

## Cyclologistique

Quelques liens ci-dessous, à compléter par des liens vers des données.

[https://librairie.ademe.fr/mobilite-et-transports/6499-panorama-de-la-cyclologistique-en-france.html](https://librairie.ademe.fr/mobilite-et-transports/6499-panorama-de-la-cyclologistique-en-france.html)

[https://lesboitesavelo.org/cyclologistique/](https://lesboitesavelo.org/cyclologistique/)

[https://mission-transition-ecologique.beta.gouv.fr/projets-entreprise/cyclologistique](https://mission-transition-ecologique.beta.gouv.fr/projets-entreprise/cyclologistique)
