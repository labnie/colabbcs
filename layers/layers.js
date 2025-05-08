var wms_layers = [];


        var lyr_googlesatelite_0 = new ol.layer.Tile({
            'title': 'google satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Comunidadades_Colaboratorio_BCS_1 = new ol.format.GeoJSON();
var features_Comunidadades_Colaboratorio_BCS_1 = format_Comunidadades_Colaboratorio_BCS_1.readFeatures(json_Comunidadades_Colaboratorio_BCS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidadades_Colaboratorio_BCS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidadades_Colaboratorio_BCS_1.addFeatures(features_Comunidadades_Colaboratorio_BCS_1);
var lyr_Comunidadades_Colaboratorio_BCS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidadades_Colaboratorio_BCS_1, 
                style: style_Comunidadades_Colaboratorio_BCS_1,
                popuplayertitle: 'Comunidadades_Colaboratorio_BCS',
                interactive: true,
                title: '<img src="styles/legend/Comunidadades_Colaboratorio_BCS_1.png" /> Comunidadades_Colaboratorio_BCS'
            });

lyr_googlesatelite_0.setVisible(true);lyr_Comunidadades_Colaboratorio_BCS_1.setVisible(true);
var layersList = [lyr_googlesatelite_0,lyr_Comunidadades_Colaboratorio_BCS_1];
lyr_Comunidadades_Colaboratorio_BCS_1.set('fieldAliases', {'Name': 'Name', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Colonia': 'Colonia', 'Matrícula': 'Matrícula', 'Matri_fem': 'Matri_fem', 'Matri_masc': 'Matri_masc', 'Docentes': 'Docentes', 'Contex_esc': 'Contex_esc', 'IMG_Esc': 'IMG_Esc', 'Co_coord': 'Co_coord', 'IMG_Coord': 'IMG_Coord', });
lyr_Comunidadades_Colaboratorio_BCS_1.set('fieldImages', {'Name': 'TextEdit', 'Municipio': 'TextEdit', 'Localidad': 'TextEdit', 'Colonia': 'TextEdit', 'Matrícula': 'TextEdit', 'Matri_fem': 'TextEdit', 'Matri_masc': 'TextEdit', 'Docentes': 'TextEdit', 'Contex_esc': 'TextEdit', 'IMG_Esc': 'ExternalResource', 'Co_coord': 'TextEdit', 'IMG_Coord': 'ExternalResource', });
lyr_Comunidadades_Colaboratorio_BCS_1.set('fieldLabels', {'Name': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Localidad': 'inline label - always visible', 'Colonia': 'inline label - always visible', 'Matrícula': 'no label', 'Matri_fem': 'no label', 'Matri_masc': 'no label', 'Docentes': 'no label', 'Contex_esc': 'no label', 'IMG_Esc': 'inline label - visible with data', 'Co_coord': 'inline label - always visible', 'IMG_Coord': 'no label', });
lyr_Comunidadades_Colaboratorio_BCS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});