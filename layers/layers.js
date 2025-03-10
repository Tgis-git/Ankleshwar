var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_GIDC_CarbonStock_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'GIDC-Carbon Stock (In Mg/Hect) </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/CarbonStock.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GIDC_CarbonStock_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8126342.070276, 2462807.232000, 8132229.329671, 2467725.360300]
                            })
                        });
var lyr_GIDC_Landuse_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'GIDC-Landuse </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/Landuse.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GIDC_Landuse_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8126347.583987, 2462812.706574, 8132223.888420, 2467714.478894]
                            })
                        });
var lyr_GIDC_Greenbelt_4 = new ol.layer.Image({
                            opacity: 1,
                            title: 'GIDC-Greenbelt </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/Greenbelt.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GIDC_Greenbelt_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8126342.139475, 2462807.232000, 8132229.329671, 2467719.953488]
                            })
                        });
var lyr_Aspect_5 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Aspect </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/Aspect.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Aspect_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8118986.159725, 2456771.359518, 8138099.897237, 2472332.808972]
                            })
                        });
var lyr_Slope_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Slope </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/Slope2.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8118986.159725, 2456771.359518, 8138099.897237, 2472332.808972]
                            })
                        });
var lyr_Elevation_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Elevation </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/Elevation.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Elevation_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8118986.159725, 2456771.359518, 8138099.897237, 2472332.808972]
                            })
                        });
var lyr_Waterbodies_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Waterbodies </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/Waterbodies.png" />',
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Waterbodies_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8118988.197945, 2456772.490217, 8138099.806613, 2472312.945815]
                            })
                        });
var format_Streams_9 = new ol.format.GeoJSON();
var features_Streams_9 = format_Streams_9.readFeatures(json_Streams_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_9.addFeatures(features_Streams_9);
var lyr_Streams_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_9, 
                style: style_Streams_9,
                popuplayertitle: "Streams",
                interactive: true,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_9_0.png" /> 2 <br />\
    <img src="styles/legend/Streams_9_1.png" /> 3 <br />\
    <img src="styles/legend/Streams_9_2.png" /> 4 <br />\
    <img src="styles/legend/Streams_9_3.png" /> 5 <br />\
    <img src="styles/legend/Streams_9_4.png" /> 6 <br />\
    <img src="styles/legend/Streams_9_5.png" /> 7 <br />'
        });
var format_2KmBufferAnkCity_10 = new ol.format.GeoJSON();
var features_2KmBufferAnkCity_10 = format_2KmBufferAnkCity_10.readFeatures(json_2KmBufferAnkCity_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2KmBufferAnkCity_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2KmBufferAnkCity_10.addFeatures(features_2KmBufferAnkCity_10);
var lyr_2KmBufferAnkCity_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2KmBufferAnkCity_10, 
                style: style_2KmBufferAnkCity_10,
                popuplayertitle: "2KmBufferAnkCity",
                interactive: false,
                title: '<img src="styles/legend/2KmBufferAnkCity_10.png" /> 2 Km Buffer -Ankleshwar City'
            });
var format_Merged_11 = new ol.format.GeoJSON();
var features_Merged_11 = format_Merged_11.readFeatures(json_Merged_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Merged_11.addFeatures(features_Merged_11);
var lyr_Merged_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Merged_11, 
                style: style_Merged_11,
                popuplayertitle: "Merged",
                interactive: false,
    title: 'Merged<br />\
    <img src="styles/legend/Merged_11_0.png" /> Ankleshwar City<br />\
    <img src="styles/legend/Merged_11_1.png" /> GIDC<br />'
        });
var group_Boundaries = new ol.layer.Group({
                                layers: [lyr_2KmBufferAnkCity_10,lyr_Merged_11,],
                                fold: "open",
                                title: "Boundaries"});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GIDC_CarbonStock_2.setVisible(true);lyr_GIDC_Landuse_3.setVisible(true);lyr_GIDC_Greenbelt_4.setVisible(true);lyr_Aspect_5.setVisible(true);lyr_Slope_6.setVisible(true);lyr_Elevation_7.setVisible(true);lyr_Waterbodies_8.setVisible(true);lyr_Streams_9.setVisible(true);lyr_2KmBufferAnkCity_10.setVisible(true);lyr_Merged_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_GIDC_CarbonStock_2,lyr_GIDC_Landuse_3,lyr_GIDC_Greenbelt_4,lyr_Aspect_5,lyr_Slope_6,lyr_Elevation_7,lyr_Waterbodies_8,lyr_Streams_9,group_Boundaries];
lyr_Streams_9.set('fieldAliases', {'FID': 'FID', 'STRM_VAL': 'STRM_VAL', });
lyr_2KmBufferAnkCity_10.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_Merged_11.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', 'id': 'id', 'layer': 'layer', 'path': 'path', 'Layer_1': 'Layer_1', });
lyr_Streams_9.set('fieldImages', {'FID': 'Range', 'STRM_VAL': 'TextEdit', });
lyr_2KmBufferAnkCity_10.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_Merged_11.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Layer_1': 'TextEdit', });
lyr_Streams_9.set('fieldLabels', {'FID': 'hidden field', 'STRM_VAL': 'inline label - visible with data', });
lyr_2KmBufferAnkCity_10.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'inline label - visible with data', 'S_Name': 'no label', 'Remark': 'no label', 'GUJ_NAM': 'no label', 'GUJ_NAM2': 'no label', 'GUJ_NAM_1': 'no label', 'Popu_2001': 'no label', 'Status': 'no label', 'BEAT': 'no label', 'ROUND': 'no label', 'RANGE': 'no label', 'DIVISION': 'no label', 'CIRCLE': 'no label', 'VILL_TYPE': 'no label', 'FOREST_AR': 'no label', });
lyr_Merged_11.set('fieldLabels', {'District': 'hidden field', 'Taluka': 'hidden field', 'Village': 'hidden field', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', 'id': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Layer_1': 'inline label - visible with data', });
lyr_Merged_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});