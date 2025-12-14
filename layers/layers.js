var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_BestArea_1 = new ol.format.GeoJSON();
var features_BestArea_1 = format_BestArea_1.readFeatures(json_BestArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BestArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BestArea_1.addFeatures(features_BestArea_1);
var lyr_BestArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BestArea_1, 
                style: style_BestArea_1,
                popuplayertitle: 'Best Area',
                interactive: false,
                title: '<img src="styles/legend/BestArea_1.png" /> Best Area'
            });
var format_CatchmentArea10min_2 = new ol.format.GeoJSON();
var features_CatchmentArea10min_2 = format_CatchmentArea10min_2.readFeatures(json_CatchmentArea10min_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CatchmentArea10min_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CatchmentArea10min_2.addFeatures(features_CatchmentArea10min_2);
var lyr_CatchmentArea10min_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CatchmentArea10min_2, 
                style: style_CatchmentArea10min_2,
                popuplayertitle: 'Catchment Area (10 min)',
                interactive: true,
                title: '<img src="styles/legend/CatchmentArea10min_2.png" /> Catchment Area (10 min)'
            });
var format_ProposedLocation_3 = new ol.format.GeoJSON();
var features_ProposedLocation_3 = format_ProposedLocation_3.readFeatures(json_ProposedLocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedLocation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedLocation_3.addFeatures(features_ProposedLocation_3);
var lyr_ProposedLocation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedLocation_3, 
                style: style_ProposedLocation_3,
                popuplayertitle: 'Proposed Location',
                interactive: false,
                title: '<img src="styles/legend/ProposedLocation_3.png" /> Proposed Location'
            });

lyr_BaseMap_0.setVisible(true);lyr_BestArea_1.setVisible(true);lyr_CatchmentArea10min_2.setVisible(true);lyr_ProposedLocation_3.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_BestArea_1,lyr_CatchmentArea10min_2,lyr_ProposedLocation_3];
lyr_BestArea_1.set('fieldAliases', {'fid': 'fid', 'index': 'index', });
lyr_CatchmentArea10min_2.set('fieldAliases', {'fid': 'fid', 'index': 'index', });
lyr_ProposedLocation_3.set('fieldAliases', {'What': 'What', 'Lat': 'Lat', 'Long': 'Long', });
lyr_BestArea_1.set('fieldImages', {'fid': 'TextEdit', 'index': 'TextEdit', });
lyr_CatchmentArea10min_2.set('fieldImages', {'fid': 'TextEdit', 'index': 'TextEdit', });
lyr_ProposedLocation_3.set('fieldImages', {'What': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_BestArea_1.set('fieldLabels', {'fid': 'no label', 'index': 'no label', });
lyr_CatchmentArea10min_2.set('fieldLabels', {'fid': 'no label', 'index': 'no label', });
lyr_ProposedLocation_3.set('fieldLabels', {'What': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_ProposedLocation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});