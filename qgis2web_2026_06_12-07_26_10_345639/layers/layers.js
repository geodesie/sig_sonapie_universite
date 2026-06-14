var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_parcelle_1 = new ol.format.GeoJSON();
var features_parcelle_1 = format_parcelle_1.readFeatures(json_parcelle_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelle_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_1.addFeatures(features_parcelle_1);
var lyr_parcelle_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_1, 
                style: style_parcelle_1,
                popuplayertitle: 'parcelle',
                interactive: true,
                title: '<img src="styles/legend/parcelle_1.png" /> parcelle'
            });

lyr_EsriImagery_0.setVisible(true);lyr_parcelle_1.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_parcelle_1];
lyr_parcelle_1.set('fieldAliases', {'id_parcelle': 'id_parcelle', 'code_parcelle': 'code_parcelle', 'superficie': 'superficie', 'usage': 'usage', 'id_propr_proprietaire': 'id_propr_proprietaire', 'id_titre_titre_foncier': 'id_titre_titre_foncier', 'proprietaire_nom': 'proprietaire_nom', 'proprietaire_prenom': 'proprietaire_prenom', 'proprietaire_contact': 'proprietaire_contact', });
lyr_parcelle_1.set('fieldImages', {'id_parcelle': 'TextEdit', 'code_parcelle': 'TextEdit', 'superficie': 'TextEdit', 'usage': 'TextEdit', 'id_propr_proprietaire': 'TextEdit', 'id_titre_titre_foncier': 'TextEdit', 'proprietaire_nom': 'TextEdit', 'proprietaire_prenom': 'TextEdit', 'proprietaire_contact': 'TextEdit', });
lyr_parcelle_1.set('fieldLabels', {'id_parcelle': 'hidden field', 'code_parcelle': 'no label', 'superficie': 'no label', 'usage': 'no label', 'id_propr_proprietaire': 'no label', 'id_titre_titre_foncier': 'no label', 'proprietaire_nom': 'no label', 'proprietaire_prenom': 'no label', 'proprietaire_contact': 'no label', });
lyr_parcelle_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});