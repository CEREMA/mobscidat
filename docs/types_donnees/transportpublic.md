---
title: Données de transport public 
tags:
  - TC
---

# Ressources sur les données de transport public
Cette page recense les ressources utiles sur les données de transport public (transport collectif).

## Sites de référence

### Portails nationaux et européens

- **Point d'Accès National transport** : Plateforme nationale de référence pour les données de transport
  - [https://transport.data.gouv.fr/](https://transport.data.gouv.fr/)
  - Documentation : https://doc.transport.data.gouv.fr/type-donnees/operateurs-de-transport-regulier-de-personnes

- **EU-wide multimodal travel information services (MMTIS)** : Réglementation européenne
  - [https://transport.ec.europa.eu/transport-modes/rail/ertms/multimodal-travel-information-services_en](https://transport.ec.europa.eu/transport-modes/rail/ertms/multimodal-travel-information-services_en)
 
- Marchés publics relatifs aux données de transport : 
  [https://documentsmarches.francemobilites.fr/](https://documentsmarches.francemobilites.fr/)

### Organismes de référence

- **GART** : Groupement des Autorités Responsables de Transport
  - [https://www.gart.org/](https://www.gart.org/)

- **UTPF** : Union des Transports Publics et ferroviaires
  - https://www.utpf-mobilites.fr/

### Normes
- **Groupes de travail BNTRA/AFNOR** (GT7), miroir des GT européen CEN TC278
- Normes françaises : https://normes.transport.data.gouv.fr/
- la fabrique des mobilités a organisé des webinaires sur la standardisation des données : https://wiki.lafabriquedesmobilites.fr/wiki/Accueil 

### Autres standards
- **MobilityData** : Organisation internationale pour les standards de mobilité
  - [https://mobilitydata.org/](https://mobilitydata.org/)

- **OpenStreetMap** : Cartographie collaborative incluant les transports
  - [https://wiki.openstreetmap.org/wiki/FR:Transports_en_commun](https://wiki.openstreetmap.org/wiki/FR:Transports_en_commun)
  
## Les principaux types de données

Les données de transport public couvrent un large spectre, de la description de l'offre théorique à l'exploitation en temps réel, en passant par les données tarifaires et d'usage.

### 1. Offre de transport théorique

Description des lignes, arrêts, horaires et circuits planifiés.

**Standards et formats** :
- **GTFS (General Transit Feed Specification)** : Standard de facto international
  - Spécification : [https://gtfs.org/](https://gtfs.org/)
  - Validateur : [https://gtfs-validator.mobilitydata.org/](https://gtfs-validator.mobilitydata.org/)
  - Documentation française : [https://doc.transport.data.gouv.fr/documentation/gtfs](https://doc.transport.data.gouv.fr/documentation/gtfs)

- **NeTEx (Network Timetable Exchange)** : Standard européen normalisé (CEN)
  - Standard CEN : [https://www.transmodel-cen.eu/standards/netex/](https://www.transmodel-cen.eu/standards/netex/)
  - Profil français : [https://normes.transport.data.gouv.fr/](https://normes.transport.data.gouv.fr/)
  - Documentation : [https://doc.transport.data.gouv.fr/documentation/netex](https://doc.transport.data.gouv.fr/documentation/netex)

- **Transmodel** : Modèle de référence européen
  - [https://www.transmodel-cen.eu/](https://www.transmodel-cen.eu/)

**Outils** :
- Convertisseurs GTFS/NeTEx
- Validateurs de données
- Outils de visualisation (ex: [https://gtfs.ouestgo.fr/](https://gtfs.ouestgo.fr/))

### 2. Information voyageurs en temps réel

Données d'exploitation, perturbations, horaires temps réel.

**Standards** :
- **GTFS-RT (GTFS Realtime)** : Extension temps réel de GTFS
  - Spécification : [https://gtfs.org/realtime/](https://gtfs.org/realtime/)
  - Format Protocol Buffers
  - Types : positions véhicules, mises à jour horaires, alertes de service

- **SIRI (Service Interface for Real-time Information)** : Standard européen CEN
  - Spécification : [https://www.transmodel-cen.eu/standards/siri/](https://www.transmodel-cen.eu/standards/siri/)
  - Profil français : [https://normes.transport.data.gouv.fr/normes/siri/](https://normes.transport.data.gouv.fr/normes/siri/)
  - Différents profils : SIRI Lite, SIRI Estimated Timetable, SIRI Vehicle Monitoring, etc.

### 3. Tarification et billettique

Description des tarifs, zones, produits tarifaires et conditions.

**Standards et ressources** :
- **Profil NeTEx Tarif** : Extension tarifaire de NeTEx
  - [https://normes.transport.data.gouv.fr/normes/netex/tarifs/](https://normes.transport.data.gouv.fr/normes/netex/tarifs/)

- GTFS permet aussi de décrire les tarifs (fares, projet d'extension https://gtfs.org/fr/community/extensions/fares-v2/# )

### 4. Accessibilité

Information sur l'accessibilité des arrêts, véhicules et services.

**Ressources** :
- Obligations réglementaires : [https://www.ecologie.gouv.fr/laccessibilite-des-transports-publics](https://www.ecologie.gouv.fr/laccessibilite-des-transports-publics)
- Données d'accessibilité dans NeTEx et GTFS (champ `wheelchair_accessible`)
- Outil : logiciel libre accès libre mobilité : https://mtes-mct.github.io/alm-docs/ 

### 5. Qualité de service et performance

Ponctualité, régularité, fiabilité, fréquentation.

**Indicateurs** :
- Données de ponctualité par ligne/service
- Taux de régularité
- Indice de fréquentation
- Enquêtes de satisfaction

**Cadre réglementaire** :
- Obligations de reporting des AOM
- Indicateurs contractuels d'exploitation

### 6. Données d'usage et de fréquentation

Montées/descentes, validations, origines-destinations.

**Types de données** :
- Validations par arrêt/ligne/horaire
- Matrices origine-destination (OD)
- Taux de remplissage

**Enjeux** :
- Protection des données personnelles (RGPD)
- Anonymisation et agrégation
- Utilisation pour l'optimisation de l'offre

### 7. Infrastructure et matériel roulant

Description des équipements, gares, dépôts, véhicules.

**Données** :
- Caractéristiques des arrêts et pôles d'échanges
- Équipements (abris, bancs, affichage dynamique)
- Parc de véhicules et caractéristiques techniques
- État du patrimoine


## Outils

Partie à compléter !

### Open source

il existe un très grand nombre de logiciels libres pour traiter les données au format GTFS, comme le prouve la liste de MobilityData :
- [https://github.com/MobilityData/awesome-transit](https://github.com/MobilityData/awesome-transit)
Mais aussi ces listes !
- [https://github.com/pomodoren/awesome-open-transport](https://github.com/pomodoren/awesome-open-transport)
- [https://github.com/andredarcie/awesome-gtfs](https://github.com/andredarcie/awesome-gtfs)

Le PAN transport fournit des outils en ligne et certains logiciels libres comme GTFS-diff :
[https://transport.data.gouv.fr/tools/gtfs_diff](https://transport.data.gouv.fr/tools/gtfs_diff)  

Un chercheur allemand qui publie les données GTFS pour toute l'Allemagne (https://gtfs.de/) publie également un logiciel de contrôle des données : (https://github.com/patrickbr/gtfstidy)

#### Producteurs de données

- **Éditeurs de logiciels de SAE** (Systèmes d'Aide à l'Exploitation)
- **Éditeurs de SIV** (Systèmes d'Information Voyageurs)
- **Opérateurs de transport**

#### Outils de validation et conversion

- **GTFS Validator** : [https://gtfs-validator.mobilitydata.org/](https://gtfs-validator.mobilitydata.org/)
- **Netex Validator** : Outils de validation du profil français
- **Convertisseurs** : GTFS ↔ NeTEx

### Visualisation et analyse

- **Outils SIG** : QGIS, ArcGIS avec extensions transport
- **Outils d'analyse** : Python (gtfs-kit, partridge), R
- **Dashboards** : Visualisation de performance et fréquentation

#### services numériques

- **Agrégateurs MaaS** (Mobility as a Service)
- **Calculateurs d'itinéraires multimodaux**
- **Applications grand public** (CityMapper, Google Maps, Moovit, etc.)

#### Projets et initiatives

#### Formations

#### Communautés et forums

