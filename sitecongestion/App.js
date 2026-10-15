let prefixActif = 'cp1';  
let tronconSelectionne = null;
let courbeDonnees = null; 
let chartCourbeCp = null; 
let chartCourbeDp = null;

const map = new maplibregl.Map({
    container: 'map',
    center: [2.35, 48.85],
    zoom: 9,
    style: {
        version: 8,
        sources: {
            fond_ign: {
                type: 'raster',
                tiles: ['https://data.geopf.fr/tms/1.0.0/GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '© IGN - Géoplateforme'
            }
        },
        layers: [{ id: 'fond_ign', type: 'raster', source: 'fond_ign' }]
    }
});



map.on('load', () => {
    map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
    map.addSource('congestion', {
        type: 'vector',
        tiles: ['https://data.geopf.fr/sandbox/tms/1.0.0/SANDBOX.aggdata12_gpk_19_tms/{z}/{x}/{y}.pbf'],
        minzoom: 4,
        maxzoom: 18
    });

    map.addLayer({
        id: 'cp1-fluide',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['>=', 'cp1_moy', 0.8],
        paint: { 'line-color': '#1a9850', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });


    map.addLayer({
        id: 'cp1-ralenti',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['all', ['>=', 'cp1_moy', 0.4], ['<', 'cp1_moy', 0.8]],
        paint: { 'line-color': '#ffdd00', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });


    map.addLayer({
        id: 'cp1-dense',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['<', 'cp1_moy', 0.4],
        paint: { 'line-color': '#d73027', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });


    map.addLayer({
        id: 'cp1-null',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['!has', 'cp1_moy'],
        paint: { 'line-color': '#707070', 'line-width': ['match', ['get', 'importance'], '1', 4, '2', 2, 1], 'line-dasharray': [3, 2] }
    });


    map.addLayer({
        id: 'cp2-fluide',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['>=', 'cp2_moy', 0.8],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#1a9850', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });

    map.addLayer({
        id: 'cp2-ralenti',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['all', ['>=', 'cp2_moy', 0.4], ['<', 'cp2_moy', 0.8]],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#ffdd00', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });

    map.addLayer({
        id: 'cp2-dense',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['<', 'cp2_moy', 0.4],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#d73027', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });

    map.addLayer({
        id: 'cp2-null',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['!has', 'cp2_moy'],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#707070', 'line-width': ['match', ['get', 'importance'], '1', 4, '2', 2, 1], 'line-dasharray': [3, 2] }
    });


    map.addLayer({
        id: 'cp3-fluide',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['>=', 'cp3_moy', 0.8],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#1a9850', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });

    map.addLayer({
        id: 'cp3-ralenti',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['all', ['>=', 'cp3_moy', 0.4], ['<', 'cp3_moy', 0.8]],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#ffdd00', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });

    map.addLayer({
        id: 'cp3-dense',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['<', 'cp3_moy', 0.4],
        layout: { visibility: 'none' },
        paint: { 'line-color': '#d73027', 'line-width': ['match', ['get', 'importance'], '1', 6, '2', 3, 2] }
    });

    map.addLayer({
        id: 'cp3-null',
        type: 'line',
        source: 'congestion',
        'source-layer': 'aggdata',
        filter: ['!has', 'cp3_moy'],
        layout: { visibility: 'none' },
        paint: { 'line-color':'#707070', 'line-width': ['match', ['get', 'importance'], '1', 4, '2', 2, 1], 'line-dasharray': [3, 2] }
    });
    
    map.addLayer({
    id: 'surbrillance',
    type: 'line',
    source: 'congestion',
    'source-layer': 'aggdata',
    filter: ['==', 'cleabs', ''], 
    paint: {
        'line-color': '#1100f9', 
        'line-width': 8,
        'line-opacity': 0.9
        }
    });


    ['cp1-fluide', 'cp1-ralenti', 'cp1-dense', 'cp1-null',
    'cp2-fluide', 'cp2-ralenti', 'cp2-dense', 'cp2-null',
    'cp3-fluide', 'cp3-ralenti', 'cp3-dense', 'cp3-null'].forEach(id => {
        map.on('click', id, (e) => {
            const props = e.features[0].properties;
            if (tronconSelectionne && tronconSelectionne.cleabs === props.cleabs) {
                tronconSelectionne = null;
                map.setFilter('surbrillance', ['==', 'cleabs', '']);
                document.getElementById('info-panel').style.display = 'none';
            } else {
                tronconSelectionne = props;
                map.setFilter('surbrillance', ['==', 'cleabs', props.cleabs]);
                afficherPanneau(props);
                initCourbeZone();;
            }
    });

    map.on('mouseenter', id, () => {
        map.getCanvas().style.cursor = 'pointer';
        });

    map.on('mousemove', id, (e) => {
        const props = e.features[0].properties;
        const tooltip = document.getElementById('hover-tooltip');
        tooltip.innerHTML = `
            <b>ID :</b> ${props.cleabs ?? 'N/A'}<br>
            <b>Nature :</b> ${props.nature ?? 'N/A'}
    `;

    tooltip.style.left = (e.originalEvent.clientX + 12) + 'px';
    tooltip.style.top = (e.originalEvent.clientY + 12) + 'px';
    tooltip.style.display = 'block';
    });
 
    map.on('mouseleave', id, () => {
        map.getCanvas().style.cursor = '';
        });

    });
});


function changerIndicateur(prefix) {
    ['cp1', 'cp2', 'cp3'].forEach(p => {
        ['fluide', 'ralenti', 'dense', 'null'].forEach(cls => {
            map.setLayoutProperty(`${p}-${cls}`, 'visibility', 'none');  // Cacher toutes les couches cp1, cp2, cp3
        });
    });

    ['fluide', 'ralenti', 'dense', 'null'].forEach(cls => {
        map.setLayoutProperty(`${prefix}-${cls}`, 'visibility', 'visible');  // Afficher seulement le prefix choisi (cp1, cp2 ou cp3)
    });

    // Remettre tous les boutons en gris
    ['cp1', 'cp2', 'cp3'].forEach(p => {
        document.getElementById(`btn-${p}`).style.background = '#eee';
        document.getElementById(`btn-${p}`).style.color = '#333';
    });
    document.getElementById(`btn-${prefix}`).style.background = '#003189';
    document.getElementById(`btn-${prefix}`).style.color = 'white';

    prefixActif = prefix; 
    if (tronconSelectionne) {          
        afficherPanneau(tronconSelectionne); 
        afficherCourbe();
    }
}

function afficherPanneau(props) {
    document.getElementById('info-panel').style.display = 'block';

    // On va chercher les valeurs correspondant à la fenêtre active (cp1, cp2 ou cp3)
    const cpValeur = props[prefixActif + '_moy'];  
    const dpValeur = props['dp' + prefixActif.slice(2) + '_moy']; 
    const nbJoursValeur = props['nb_jours_' + prefixActif];        
    
    const labelFenetre = prefixActif.slice(2) + 'h';  

    // Congestion en %
    const cp = cpValeur !== undefined && cpValeur !== null
        ? Math.round(cpValeur * 100) + ' %'
        : 'N/A';

     // Temps perdu en min/km
    let dp = 'N/A';
    if (dpValeur !== undefined && dpValeur !== null) {
        dp = dpValeur.toFixed(2) + ' min/km';
    }

     // Nombre de jour congestionné par mois
    const jMois = (nbJoursValeur !== undefined && nbJoursValeur !== null)
    ? (nbJoursValeur / 12).toFixed(1) + ' j/mois'
    : 'N/A';

    document.getElementById('info-contenu').innerHTML = `
        <p><b>BDTOPO_id :</b> ${props.cleabs ?? 'N/A'}</p>
        <p><b>HERE_id :</b> ${props.here_dir ?? 'N/A'}</p>
        <p><b>Niveau d'importance :</b> ${props.importance ?? 'N/A'}</p>
        <p><b>Sens_cir :</b> ${props.sens_de_ci ?? 'N/A'}</p>
        <p><b>Longueur_tronçon :</b> ${props.length_bdtopo ? props.length_bdtopo.toFixed(0) + ' m' : 'N/A'}</p>
        <hr>
        <p><b>Fenêtre_active : ${labelFenetre}</b></p>
        <p>Taux de Congestion moyen (% cp) : ${cp}</p>
        <p>Temps perdu moyen (Dp): ${dp}</p>
        <p>Nb jours congestionné par mois : ${jMois}</p>
    `;
}

function fermerPanneau() {
    tronconSelectionne = null;
    map.setFilter('surbrillance', ['==', 'cleabs', '']);
    document.getElementById('info-panel').style.display = 'none';
}


function initCourbeZone() {
    courbeDonnees = null;
    if (chartCourbeCp) { chartCourbeCp.destroy(); chartCourbeCp = null; }
    if (chartCourbeDp) { chartCourbeDp.destroy(); chartCourbeDp = null; }

    const hereDir = tronconSelectionne.here_dir;

    if (!hereDir) {
        document.getElementById('courbe-liens').innerHTML = '';
        document.getElementById('courbe-contenu').innerHTML = `
            <p style="font-size:11px; color:#888;">Pas de données journalières disponibles pour ce segment.</p>`;
        return;
    }

    document.getElementById('courbe-liens').innerHTML = `
        <button onclick="chargerCourbeJournaliere(tronconSelectionne.here_dir)"
            style="width:100%; padding:6px; background:#003189; color:white; border:none; border-radius:4px; cursor:pointer; font-size:14px;">
            Afficher l'évolution journalière
        </button>
        <div style="display:flex; justify-content:center; margin-top:6px; font-size:14px;">
             <a href="https://akatebra.github.io/Stage_Fcdhere/data_csv/${hereDir}.csv" target="_blank" style="color:#003189;">Ouvrir le CSV </a>
        </div>`;
    document.getElementById('courbe-contenu').innerHTML = '';   
}



function chargerCourbeJournaliere(hereDir) {
    if (!hereDir) return;
    

    document.getElementById('courbe-contenu').innerHTML = '<p style="font-size:14px;color:#888;">Chargement...</p>';

    fetch(`https://akatebra.github.io/Stage_Fcdhere/data_csv/${hereDir}.csv`)
        .then(reponse => {
            if (!reponse.ok) throw new Error('pas trouvé');
            return reponse.text();
        })
        .then(texte => {
            const resultat = Papa.parse(texte, { header: true, dynamicTyping: true, skipEmptyLines: true });
            courbeDonnees = resultat.data;  
            afficherCourbe();
            document.querySelector('#courbe-liens button').textContent = "Masquer l'évolution journalière";
            document.querySelector('#courbe-liens button').setAttribute('onclick', 'masquerCourbe()');
        })
        .catch(() => {
            courbeDonnees = null;
            document.getElementById('courbe-contenu').innerHTML = '<p style="font-size:11px;color:#888;">Pas de données journalières pour ce segment.</p>';
        });
}


function afficherCourbe() {
    if (!courbeDonnees) return;

    const num = prefixActif.slice(2); 
    const labels = courbeDonnees.map(j => j.date_jour);
    const valeursCp = courbeDonnees.map(j => j['cp' + num]);
    const valeursDp = courbeDonnees.map(j => j['Dp' + num]);
    const heuresPointe = courbeDonnees.map(j => j['HEURE_POINTE_' + num + 'H']);

    const minVal = Math.min(...valeursCp);
    const minIdx = valeursCp.indexOf(minVal);
    const minDate = labels[minIdx];
    const dpCor = valeursDp[minIdx];

    document.getElementById('courbe-contenu').innerHTML = `
        <p style="font-size:14px; color:#333; margin:4px 0 8px;"><b>Jour le plus congestionné : (${minDate} avec Cp: ${minVal.toFixed(1)}%, Dp: ${dpCor.toFixed(2)} min/km)</b></p>
        <div style="position:relative; height:170px; margin-bottom:12px;"><canvas id="courbe-cp-canvas"></canvas></div>
        <div style="position:relative; height:170px;"><canvas id="courbe-dp-canvas"></canvas></div>
    `;

    if (chartCourbeCp) chartCourbeCp.destroy();
    if (chartCourbeDp) chartCourbeDp.destroy();

    const couleursFenetre = { cp1: '#003189', cp2: '#eda100', cp3: '#e37448' };
    const couleur = couleursFenetre[prefixActif];
    const labelFenetre = num + 'h';

    const tooltipCp = {
        title: (items) => labels[items[0].dataIndex],
        label: (item) => {
            const heure = heuresPointe[item.dataIndex] ? String(heuresPointe[item.dataIndex]).slice(11, 16) : 'N/A';
            return [`Cp : ${valeursCp[item.dataIndex]}%`, `Heure de pointe : ${heure}`];
        }
    };

    const tooltipDp = {
        title: (items) => labels[items[0].dataIndex],
        label: (item) => {
            const heure = heuresPointe[item.dataIndex] ? String(heuresPointe[item.dataIndex]).slice(11, 16) : 'N/A';
            return [`Dp : ${valeursDp[item.dataIndex]} min/km`, `Heure de pointe : ${heure}`];
        }
    };

    chartCourbeCp = new Chart(document.getElementById('courbe-cp-canvas').getContext('2d'), {
        type: 'line',
        data: { labels: labels, datasets: [{ data: valeursCp, borderColor: couleur, backgroundColor: 'transparent', borderWidth: 1.5, pointRadius: 0, pointHoverRadius: 4, tension: 0.15 }] },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: `Taux de congestion par jour(Cp) - fenêtre ${labelFenetre}`, font: { size: 12, weight: 'bold' }, color: '#003189' },
                tooltip: { callbacks: tooltipCp }
            },
            scales: {
                x: { ticks: { maxTicksLimit: 6, font: { size: 9 } } },
                y: { ticks: { font: { size: 9 } } }
            }
        }
    });

    chartCourbeDp = new Chart(document.getElementById('courbe-dp-canvas').getContext('2d'), {
        type: 'line',
        data: { labels: labels, datasets: [{ data: valeursDp, borderColor: couleur, backgroundColor: 'transparent', borderWidth: 1.5, pointRadius: 0, pointHoverRadius: 4, tension: 0.15 }] },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: `Temps perdu par jour(Dp) - fenêtre ${labelFenetre}`, font: { size: 12, weight: 'bold' }, color: '#003189' },
                tooltip: { callbacks: tooltipDp }
            },
            scales: {
                x: { ticks: { maxTicksLimit: 6, font: { size: 9 } } },
                y: { ticks: { font: { size: 9 } } }
            }
        }
    });
}


function masquerCourbe() {
    document.getElementById('courbe-contenu').innerHTML = '';
    document.querySelector('#courbe-liens button').textContent = "Afficher l'évolution journalière";
    document.querySelector('#courbe-liens button').setAttribute ('onclick', 'chargerCourbeJournaliere(tronconSelectionne.here_dir)');
}
    // On récupère le champ de recherche et la zone de résultats
const rechercheInput = document.getElementById('recherche-input');
const rechercheResultats = document.getElementById('recherche-resultats');

let timerRecherche = null;

rechercheInput.addEventListener('input', () => {
    const texte = rechercheInput.value.trim();
    clearTimeout(timerRecherche);
    if (texte.length < 3) {
        rechercheResultats.style.display = 'none';
        return;
    }
    timerRecherche = setTimeout(() => {
        rechercherLieu(texte);
    }, 400);
});

function rechercherLieu(texte) {
    const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(texte)}&limit=5`;

    fetch(url)
        .then(reponse => reponse.json())
        .then(data => {
            afficherResultatsRecherche(data.features);
        })
        .catch(err => {
            console.error('Erreur recherche lieu :', err);
        });
}

function afficherResultatsRecherche(features) {
    if (!features || features.length === 0) {
        rechercheResultats.innerHTML = '<div style="padding:8px; font-size:12px; color:#888;">Aucun résultat</div>';
        rechercheResultats.style.display = 'block';
        return;
    }

    rechercheResultats.innerHTML = features.map(f => `
        <div class="resultat-item" 
             data-lon="${f.geometry.coordinates[0]}" 
             data-lat="${f.geometry.coordinates[1]}"
             style="padding:8px 12px; font-size:12px; cursor:pointer; border-bottom:1px solid #eee;">
            ${f.properties.label}
        </div>
    `).join('');

    rechercheResultats.style.display = 'block';

    document.querySelectorAll('.resultat-item').forEach(item => {
        item.addEventListener('click', () => {
            const lon = parseFloat(item.dataset.lon);
            const lat = parseFloat(item.dataset.lat);
            map.flyTo({ center: [lon, lat], zoom: 13 });
            rechercheResultats.style.display = 'none';
            rechercheInput.value = item.textContent;
        });
    });
}

document.getElementById('icone-recherche').addEventListener('click', () => {
    const texte = rechercheInput.value.trim();
    if (texte.length >= 3) {
        clearTimeout(timerRecherche);
        rechercherLieu(texte);
    }
});