var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_LISTADOOXXOS2026OXXOSBARAS_1 = new ol.format.GeoJSON();
var features_LISTADOOXXOS2026OXXOSBARAS_1 = format_LISTADOOXXOS2026OXXOSBARAS_1.readFeatures(json_LISTADOOXXOS2026OXXOSBARAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LISTADOOXXOS2026OXXOSBARAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LISTADOOXXOS2026OXXOSBARAS_1.addFeatures(features_LISTADOOXXOS2026OXXOSBARAS_1);
cluster_LISTADOOXXOS2026OXXOSBARAS_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LISTADOOXXOS2026OXXOSBARAS_1
});
var lyr_LISTADOOXXOS2026OXXOSBARAS_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LISTADOOXXOS2026OXXOSBARAS_1, 
                style: style_LISTADOOXXOS2026OXXOSBARAS_1,
                popuplayertitle: 'LISTADO OXXOS 2026-OXXOS - BARAS',
                interactive: true,
                title: 'LISTADO OXXOS 2026-OXXOS - BARAS'
            });
var group_OXXOSBARAS = new ol.layer.Group({
                                layers: [lyr_LISTADOOXXOS2026OXXOSBARAS_1,],
                                fold: 'close',
                                title: 'OXXOS.BARAS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_LISTADOOXXOS2026OXXOSBARAS_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_OXXOSBARAS];
lyr_LISTADOOXXOS2026OXXOSBARAS_1.set('fieldAliases', {'Razón Social ': 'Razón Social ', 'Denominación': 'Denominación', 'Ubicación ': 'Ubicación ', 'NÚMERO OFICIAL': 'NÚMERO OFICIAL', 'Cuenta Predial ': 'Cuenta Predial ', 'Status Actual Uso de Suelo': 'Status Actual Uso de Suelo', 'Status Uso de Suelo 2020': 'Status Uso de Suelo 2020', 'Status Uso de Suelo 2021': 'Status Uso de Suelo 2021', 'Status Uso de Suelo 2022': 'Status Uso de Suelo 2022', 'Status Uso de Suelo 2023': 'Status Uso de Suelo 2023', 'Status Uso de Suelo 2024': 'Status Uso de Suelo 2024', 'Status Uso de Suelo 2025': 'Status Uso de Suelo 2025', 'Status Uso de Suelo 2026': 'Status Uso de Suelo 2026', 'Permisos de Construcción': 'Permisos de Construcción', 'Permisos de Anuncios': 'Permisos de Anuncios', 'UBICACIÓN': 'UBICACIÓN', });
lyr_LISTADOOXXOS2026OXXOSBARAS_1.set('fieldImages', {'Razón Social ': 'TextEdit', 'Denominación': 'TextEdit', 'Ubicación ': 'TextEdit', 'NÚMERO OFICIAL': 'TextEdit', 'Cuenta Predial ': 'TextEdit', 'Status Actual Uso de Suelo': 'TextEdit', 'Status Uso de Suelo 2020': 'TextEdit', 'Status Uso de Suelo 2021': 'TextEdit', 'Status Uso de Suelo 2022': 'TextEdit', 'Status Uso de Suelo 2023': 'TextEdit', 'Status Uso de Suelo 2024': 'TextEdit', 'Status Uso de Suelo 2025': 'TextEdit', 'Status Uso de Suelo 2026': 'TextEdit', 'Permisos de Construcción': 'TextEdit', 'Permisos de Anuncios': 'TextEdit', 'UBICACIÓN': 'TextEdit', });
lyr_LISTADOOXXOS2026OXXOSBARAS_1.set('fieldLabels', {'Razón Social ': 'inline label - always visible', 'Denominación': 'inline label - always visible', 'Ubicación ': 'inline label - always visible', 'NÚMERO OFICIAL': 'inline label - always visible', 'Cuenta Predial ': 'inline label - always visible', 'Status Actual Uso de Suelo': 'inline label - always visible', 'Status Uso de Suelo 2020': 'inline label - always visible', 'Status Uso de Suelo 2021': 'inline label - always visible', 'Status Uso de Suelo 2022': 'inline label - always visible', 'Status Uso de Suelo 2023': 'inline label - always visible', 'Status Uso de Suelo 2024': 'inline label - always visible', 'Status Uso de Suelo 2025': 'inline label - always visible', 'Status Uso de Suelo 2026': 'inline label - always visible', 'Permisos de Construcción': 'inline label - always visible', 'Permisos de Anuncios': 'inline label - always visible', 'UBICACIÓN': 'inline label - always visible', });
lyr_LISTADOOXXOS2026OXXOSBARAS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});