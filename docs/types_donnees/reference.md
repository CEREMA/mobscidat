---
title: Données de référence
tags:
  - reference
---

# Ressources sur les données de référence

Cette page recense les ressources utiles sur les données de référence utile pour les études sur les mobilités

- Répertoire des informations publiques du ministère de l'écologie : https://www.ecologie.gouv.fr/repertoire-informations-publiques 
- Le catalogue des données pour la transition écologique  : https://ecologie.data.gouv.fr/
- Catalogue data.gouv https://guides.data.gouv.fr/
il est intéressant de noter que **data.gouv a mis en place un serveur MCP** (https://github.com/datagouv/datagouv-mcp) qui permet d'interroger les 73k ressources du portail depuis un client MCP tels que les principaux LLM (chatgpt, claude, mistral...), et que la société FLI a publié un code open source d'utilisation de ce serveur MCP pour qualifier le catalogue data gouv (https://github.com/FLI-GCT/FlowDataGouv/blob/master/docs/plan-mcp-game-changer.md ) utilisable directement dans un démonstrateur FlowDataGouv qui facilite grandement la recherche de données métier donc les données de mobilité : https://demo-fli.fr/explore?q=stationnement&sort=relevance 
- et notamment à propos du moissonnage de catalogue de données : https://guides.data.gouv.fr/guide-data.gouv.fr/moissonnage/les-differents-types-de-moissonneurs
https://doc.data.gouv.fr/moissonnage/dcat/

## Données socio-économiques
### Insee :
 https://www.data.gouv.fr/organizations/institut-national-de-la-statistique-et-des-etudes-economiques-insee/datasets  
 https://www.insee.fr/fr/statistiques?categorie=1 
 https://statistiques-locales.insee.fr/#c=home 

#### recensement de la population et mobilités profesionnelles
Mobilités professionnelles en 2022 : déplacements domicile - lieu de travail Recensement de la population - Base flux de mobilité
https://www.insee.fr/fr/statistiques/8582949 
Cette donnée mise à jour chaque année couvre la France entière et a fait l'objet de nombreuses réutilisations : 

- Le tableau de bord des mobilités durables : https://mobilite-durable-tdb.din.developpement-durable.gouv.fr/accueil/ 
- Terristory : https://terristory.fr/auvergne-rhone-alpes/?zone=epci&maille=epci&zone_id=200046977&nom_territoire=M%C3%A9tropole%20de%20Lyon 
- https://diagnostic-mobilite.fr/app/ qui permet de visualiser les navettes Domicile Travail et Domicile Etudes et d'autres motifs, ainsi qu'une vision du territoire selon plusieurs paramètres intéressants
- la plateforme KITE (https://kite.tellae.fr) permet de visualiser et explorer les données de mobilité INSEE. https://tellae.fr/#/blog/fr/kite_flows_mobpro_mobsco (après avoir sauvegardé les données dans votre projet, vous pouvez ensuite les récupérer dans QGIS avec le plugin dédié. https://plugins.qgis.org/plugins/tellae/ ) 
- https://mobpro-carbone.com/ bilan carbone des déplacements Domicile-Travail et  récupérer les données sources ; uniquement en Ile de France 
- cette dataviz plutôt ciblée vélo : https://public.tableau.com/app/profile/fluxpat3731  
- cette dataviz France entière plutôt ciblée voiture : https://lafluent.fr/demo/  
- l'outil du Cerema MobProGES pour l'évaluation des émissions de GES dues aux déplacement domicile-travail (https://hal.science/hal-05195597 ) qui s'inscrit plus largement sur une [boite à outils autour de la mobilité en zone peu dense](https://www.cerema.fr/fr/actualites/connaitre-mobilite-zone-peu-dense-quels-outils-quelles).
 
Rapport du Cerema présentant les principales sources de données et les méthodes de calage pour la modélisation des déplacements :
https://doc.cerema.fr/Default/doc/SYRACUSE/593732/modelisation-de-la-demande-de-deplacements-donnees-d-entree-et-de-calage-connaissance-des-sources-et 
