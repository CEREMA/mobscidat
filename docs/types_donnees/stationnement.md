---
title: Données de stationnement 
tags:
  - stationnement
---

# Ressources sur les données de stationnement

Cette page recense les ressources utiles sur les données de stationnement

# Sites de référence

Il y a en fait peu de ressources sur les données de stationnement proprement dites, on référencera ici donc aussi quelques sites de référence sur le stationnement.

- GT AITF [https://www.aitf.fr/groupe-travail/stationnement](https://www.aitf.fr/groupe-travail/stationnement)

- Cahiers du stationnement métropolitain, Agence d'urbanisme de Lille, 2024, avec une série de fiches sur les différents types de stationnement : [https://mediatheque.adu-lille-metropole.org/dyn/portal/index.xhtml?aloId=14367&page=alo&req=10](https://mediatheque.adu-lille-metropole.org/dyn/portal/index.xhtml?aloId=14367&page=alo&req=10)

de manière générale les agences d'urbanisme ont produit de nombreuses publications sur le thème du stationnement : [https://www.fnau.org/fr/?s=stationnement](https://www.fnau.org/fr/?s=stationnement)

- CEREMA [https://www.cerema.fr/fr/mots-cles/stationnement](https://www.cerema.fr/fr/mots-cles/stationnement)

ainsi que les rapports du Cerema sur ce thème, sur [ceremadoc](https://doc.cerema.fr/form.aspx?SC=DEFAULT#/Search/(query:(AdvancedQuery:(queryGroups:!((logical:!n,queryClauses:!((index:Title_idx,logical:0,operator:0,otherValue:!n,value:stationnement))))),AdvancedQueryDisplay:'(Titre=stationnement)',FacetFilter:'%7B%22_351%22:%22Mobilit%C3%A9s%22%7D',ForceSearch:!t,InitialSearch:!f,Page:0,PageRange:3,QueryGuid:'1f408ed9-71eb-4c90-9539-ab4e9392c863',ResultSize:10,ScenarioCode:DEFAULT,ScenarioDisplayMode:display-standard,SearchContext:1,SearchGridFieldsShownOnResultsDTO:!(),SearchTerms:'%20stationnement',SortField:DateTRI_sort,SortOrder:0,TemplateParams:(Scenario:'',Scope:Default,Size:!n,Source:'',Support:'',UseCompact:!f),UseSpellChecking:!n),sst:4)) par exemple un [rapport récent (2025) de retour d'expérience sur une méthode de diagnostic rapide du stationnement pour les villes moyennes](https://www.cerema.fr/fr/actualites/expertiser-problematiques-stationnement-mieux-agir).

- règlementation

[https://www.ecologie.gouv.fr/politiques-publiques/parcs-stationnement](https://www.ecologie.gouv.fr/politiques-publiques/parcs-stationnement)   et [guide parcs de stationnement 2023](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide-parcs-de-stationnement-WEB.pdf)

[https://www.ecologie.gouv.fr/politiques-publiques/laccessibilite-du-stationnement](https://www.ecologie.gouv.fr/politiques-publiques/laccessibilite-du-stationnement)

- Marchés Publics concernant les données de stationnement

[https://documentsmarches.francemobilites.fr/Search/?text=donn%C3%A9es%20stationnement&f_type=DOCUMENT&r=1](https://documentsmarches.francemobilites.fr/Search/?text=donn%C3%A9es%20stationnement&f_type=DOCUMENT&r=1)

[https://fr.wikipedia.org/wiki/Stationnement_en_France](https://fr.wikipedia.org/wiki/Stationnement_en_France)

- FNMS

[https://www.fnms.fr/](https://www.fnms.fr/)

- European Parking Association

[https://europeanparking.eu/parking-data-essentials/](https://europeanparking.eu/parking-data-essentials/)

Les données publiées sur le PAN transport

[https://transport.data.gouv.fr/datasets?q=stationnement](https://transport.data.gouv.fr/datasets?q=stationnement) voir aussi [la documentation](https://doc.transport.data.gouv.fr) qui décrit le cadre juridique et les standards.


# Les principaux types de données :

L'offre de stationnement est diverse (publique, privée, en voirie, parc ou ouvrage), elle peut être décrite à différents niveaux de détail (description des places individuelles ou pas, avec distinction entre PMR - livraisons - autopartage - places électriques - autocars  - 2 roues…) selon les besoins (gestion de voirie, de patrimoine, urbanisme, service aux usagers, zones de stationnement payant / ZPS, gestion de la carte mobilité inclusion, suivi des obligations règlementaires, suivi des parcs relais P+R, dépose-minute, etc.) donc un référentiel doit en principe intégrer différents objets reliés entre eux (parc, place, etc.). En général la donnée est décrite sous une forme géoréférencée permettant de produire des cartes sur un SIG, avec des données linéaires ou surfaciques, sans qu'il y ait à notre connaissance de format standards pour décrire ces données, ni de modèle de données.

## Cas d'usage

Les données de stationnement sont utiles pour divers besoin (voirie, patrimoine, logistique urbaine, gestion du stationnement proprement dite) et sont indispensables pour s'assurer du respect des obligations réglementaires (d'urbanisme notamment) ou le suivi des contrats d'exploitation.

## Standards et modèles de données

Le standard européen APDS ([https://www.allianceforparkingdatastandards.org](https://www.allianceforparkingdatastandards.org) avec la documentation technique ici : [https://github.com/parkingdata/spec/tree/master/specs](https://github.com/parkingdata/spec/tree/master/specs)) inclut un modèle de données du stationnement assez général qui semble pouvoir prendre en compte une bonne partie (mais à notre connaissance, il est peu implémenté en France?).

En France, ont été définis un profil d'échange normalisé s'appuyant sur Netex en lien avec le règlement délégué MMTIS, et des schéma de données pour le stationnement vélo, les aires de covoiturage, ainsi que la réglementation des aires de livraison. (cf. plus bas)

DATEX II : ce standard européen pour l'information routière inclut des modules sur le stationnement (notamment pour les aires de stationnement PL sur autoroutes) [site web Datex2](https://datex2.eu/user-domains/parking/)

GBFS pour le stationnement vélo : Pour les vélos en libre-service avec stations

Il est également très utile de parcourir le wiki d'OpenStreetMap qui possède une grande richesse de description au moyen de simples tags, cf. [https://wiki.openstreetmap.org/wiki/FR:Parking](https://wiki.openstreetmap.org/wiki/FR:Parking) , décrits sur ici sur [l'exemple de Montrouge](https://wiki.openstreetmap.org/wiki/Montrouge#Stationnement), et est utilisé par des collectivités comme Montpellier. [Le forum](https://forum.openstreetmap.fr/t/voies-de-stationnement/7046) permet de trouver des réponses rapidement.

Il peut être intéressant aussi de regarder comment le stationnement en voirie est décrit dans le standard américain CDS (voir plus bas).

## Inventaire de l'offre

### En voirie 

Distinction entre stationnement toléré et réglementé (avec description des places). Le recensement du stationnement distingue idéalement les différents types de place (PMR, recharge, covoiturage, 2 roues, etc.).

Il peut être intéressant aussi de regarder comment le stationnement en voirie est décrit dans le standard américain CDS (curb management specification). CDS vise à décrire les trottoirs :
https://www.vianova.io/blog/making-sense-of-curb-and-parking-data-standards
https://www.openmobilityfoundation.org/about-cds/
Jusqu’à récemment, CDS n’était pas utilisé en France à notre connaissance : le projet Interlud+ propose de l’utiliser pour décrire les aires de livraison, et étendre le schéma de données existant (https://schema.data.gouv.fr/CEREMA/schema-aire-livraison/ ).

### Aires de stationnement

### Aires de covoiturage

aires de stationnement PL sur autoroutes : [https://transport.ec.europa.eu/transport-modes/road/parking-areas_en](https://transport.ec.europa.eu/transport-modes/road/parking-areas_en)

Le PAN transport maintient une [base nationale des lieux de covoiturage](https://transport.data.gouv.fr/datasets/base-nationale-des-lieux-de-covoiturage), en conformité [avec un schéma data gouv](https://doc.transport.data.gouv.fr/type-donnees/lieux-de-covoiturage).

### Parcs en enclos 

### Parcs en ouvrage

Le groupe de normalisation GT9 au BNTRA de l'AFNOR a produit une spécification de profil d'échange pour l'information aux usagers (en lien avec le règlement européen MMTIS) qui s'appuie sur Netex. Dans le cadre national a été également spécifié un schema data.gouv, complémentaire du profil Netex.

La Base Nationale des Lieux de Stationnement n'est en revanche plus maintenue par le PAN transport.

[https://norminfo.afnor.org/structure/bntracn-03/transport-public/6316#activite](https://norminfo.afnor.org/structure/bntracn-03/transport-public/6316#activite)

[https://normes.transport.data.gouv.fr/normes/netex/parkings/](https://normes.transport.data.gouv.fr/normes/netex/parkings/)

[https://doc.transport.data.gouv.fr/type-donnees/lieux-de-stationnement/stationnement-hors-voirie/normes-et-standard-schema-national-des-lieux-de-stationnement](https://doc.transport.data.gouv.fr/type-donnees/lieux-de-stationnement/stationnement-hors-voirie/normes-et-standard-schema-national-des-lieux-de-stationnement)

le profil Netex pour le stationnement en ouvrage : [https://normes.transport.data.gouv.fr/normes/netex/parkings/](https://normes.transport.data.gouv.fr/normes/netex/parkings/)

### Stationnement résidentiel

- données foncières : Une étude du Cerema pour la Métropole Européenne de Lille [https://doc.cerema.fr/Default/doc/SYRACUSE/593612/l-etude-du-stationnement-prive-via-les-fichiers-fonciers-sur-la-metropole-europeenne-de-lille](https://doc.cerema.fr/Default/doc/SYRACUSE/593612/l-etude-du-stationnement-prive-via-les-fichiers-fonciers-sur-la-metropole-europeenne-de-lille)

### recharge électrique

### annotation d'images de stationnement de surface
Cet article investigue les outils permettant d'annoter des données de stationnement à partir de photos aériennes, qui serviront de jeu de données de référence pour un apprentissage automatique, et propos notamment un processus d'annotation utilisation Qgis. [https://datagistips.hypotheses.org/1218](https://datagistips.hypotheses.org/1218)


## Stationnement vélo

Les données décrivant l'offre de stationnement vélos sont essentiellement disponibles sur OSM.

[https://doc.transport.data.gouv.fr/type-donnees/documentation-sur-le-stationnement-cyclable](https://doc.transport.data.gouv.fr/type-donnees/documentation-sur-le-stationnement-cyclable)

L'outil géodatamine permet d'extraire les données d'OSM répondait à un schéma data gouv dont le stationnement vélo : [https://geodatamine.fr/](https://geodatamine.fr/)

## Aires de livraison 

Les (arrêtés de circulation relatifs aux aires de livraison) sont décrits dans - arrêtés... (réglementation / aires de livraison

Le projet CEE Interlud+ comprend un programme Digilog de numérisation des aires de livraison :

[https://www.interlud.green/actualites/digilog-une-avancee-prometteuse-pour-la-logistique-urbaine-durable](https://www.interlud.green/actualites/digilog-une-avancee-prometteuse-pour-la-logistique-urbaine-durable)

Un schéma data gouv a été défini pour décrire les arrêtés et les aires (localisés par un point ainsi que par un linéaire ou polygone selon les cas) et les éventuelles bornes de recharge:

[https://schema.data.gouv.fr/CEREMA/schema-aire-livraison/](https://schema.data.gouv.fr/CEREMA/schema-aire-livraison/)

Il existe également un schéma pour les arrêtés permanents de transport de marchandises en ville : [https://schema.data.gouv.fr/CEREMA/schema-arrete-circulation-marchandises/](https://schema.data.gouv.fr/CEREMA/schema-arrete-circulation-marchandises/)

La startup d'état Dialog a pour mission de numériser les arrêtés de circulation routière et donner accès aux données (dont la réglementation sur les aires de livraison et le transport de marchandises).

[https://dialog.beta.gouv.fr/](https://dialog.beta.gouv.fr/)

## Tarification

Les tarifs et règles de tarification peuvent également être décrites dans un référentiel de stationnement. 
L'ouverture des données dans le cadre européen a largement pour objectif d'améliorer les services aux usagers via le développement d'un écosystème de services numériques.

## Usage

Les données d'usage sont les données mesurées ou historisées d'occupation, rotation, respect et paiement du stationnement.

- Données de disponibilité en temps réel : publiées en principe en poen data dans la cadre du règlement MMTIS (APIs et flux temps réel)
- Données de transactions : Les données de paiement, abonnements, FPS (forfait post-stationnement)
- Données de rotation : durées moyennes, taux de rotation selon zones/horaires...

## Données socio-économiques
- Coûts et recettes : Données économiques sur le stationnement (revenus, coûts d'exploitation)
- Enquêtes de comportement : Pratiques des usagers, temps de recherche

# Recueil de données

Les collectivités gestionnaires de voirie et AOM sont amenés à compléter régulièrement leurs données concernant le stationnement, au moyen d'enquêtes, et de comptage (utilisant de plus en plus des systèmes automatisés utilisant des prises de vue embarquées, même si pour l'instant l'utilisation des véhicules de verbalisation par LAPI ne semble pas encore possible pour le recueil de données).

L'utilisation de photos aériennes (PCRS à 5cm) satellitaires (à 20 cm) permet d'identifier les parcs voir les places de stationnement, mais ne semble pas généralisée. L'utilisation de prises de vue au niveau de la voirie (type panoramax) permettrait de compléter la donnée.

