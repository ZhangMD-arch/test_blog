var format="image/png";
var bounds=[73.441277, 18.159829,
    135.08693, 53.561771];
var untiled_base=new ol.layer.Image({
    source:new ol.source.ImageWMS({
        ratio:1,
        url: 'http://localhost:8080/geoserver/GreateWall/wms',
        params: {'FORMAT': format,
            'VERSION': '1.1.1',
            "LAYERS": 'GreateWall:%E7%9C%81%E7%95%8C_region',
            "exceptions": 'application/vnd.ogc.se_inimage',
        }
    })
});
var tiled_base = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/GreateWall/wms',
        params: {'FORMAT': format,
            'VERSION': '1.1.1',
            tiled: true,
            "LAYERS": 'GreateWall:%E7%9C%81%E7%95%8C_region',
            "exceptions": 'application/vnd.ogc.se_inimage',
            tilesOrigin: 73.441277 + "," + 18.159829
        }
    })
});

var untiled_all=new ol.layer.Image({
    source:new ol.source.ImageWMS({
        ratio:1,
        url: 'http://localhost:8080/geoserver/GreateWall/wms',
        params: {'FORMAT': format,
            'VERSION': '1.1.1',
            "LAYERS": 'GreateWall:export_output',
            "exceptions": 'application/vnd.ogc.se_inimage',
        }
    })
});
var tiled_all = new ol.layer.Tile({
    visible: false,
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/GreateWall/wms',
        params: {'FORMAT': format,
            'VERSION': '1.1.1',
            tiled: true,
            "LAYERS": 'GreateWall:export_output',
            "exceptions": 'application/vnd.ogc.se_inimage',
            tilesOrigin: 73.441277 + "," + 18.159829
        }
    })
});


function wfs(name) {
    var wfsParams = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName : name,  //图层名称
        viewparams:'p_x:10',
        outputFormat : 'text/javascript',  //重点，不要改变
        format_options : 'callback:loadFeatures'  //回调函数声明

    };
    var vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {  //加载函数
            var url = 'http://localhost:8080/geoserver/wfs';
            $.ajax({
                url: url,
                data : $.param(wfsParams),   //传参
                type : 'GET',
                dataType: 'jsonp',   //解决跨域的关键
                jsonpCallback:'loadFeatures'  //回调
            });
        },
        strategy: ol.loadingstrategy.tile(new ol.tilegrid.createXYZ({
            maxZoom: 25
        })),
        projection: 'EPSG:4326'
    });
    //回调函数使用
    window.loadFeatures = function(response) {
        vectorSource.addFeatures((new ol.format.GeoJSON({
            geometryName: 'geom'//改成geom，要素则不显示在界面上
        })).readFeatures(response));  //载入要素
    };
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 15,
                fill: new ol.style.Fill({
                    color: 'red'
                })
            })
        })
    });
    return vectorLayer;
}
var wfs_layer = null;
function clcall(){
    map.removeLayer(untiled_all);
    map.removeLayer(tiled_all);
    map.removeLayer(wfs_pro_layer_var);
    if(wfs_layer){
        map.removeLayer(untiled_base);
        map.removeLayer(tiled_base);
        map.removeLayer(wfs_layer);
        wfs_layer = null;
    }
}
function wfs_pro_layer(coordinate) {//'x_1:10;x_2:;y_1:;y_2:'
    //sqlView页面不能进行编辑，只能进行查询
    var wfsParams = {
        service : 'WFS',
        version : '1.0.0',
        request : 'GetFeature',
        typeName : 'GreateWall:test_sql_box',  //图层名称，更改为sqlview名称
        viewparams: coordinate,//'x_1:113.46464854478836;y_1:41.66015625;y_2:38.759765625;x_2:114.27714854478836',//coordinate,//更改参数设置条件
        outputFormat : 'text/javascript',  //重点，不要改变
        format_options : 'callback:loadFeatures'  //回调函数声明
    };
    var vectorSource = new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        loader: function(extent, resolution, projection) {  //加载函数
            var url = 'http://localhost:8080/geoserver/wfs';
            $.ajax({
                url: url,
                data : $.param(wfsParams),   //传参
                type : 'GET',
                dataType: 'jsonp',   //解决跨域的关键
                jsonpCallback:'loadFeatures'  //回调
            });
        },
        strategy: ol.loadingstrategy.tile(new ol.tilegrid.createXYZ({
            maxZoom: 25
        })),
        projection: 'EPSG:4326'
    });
    //回调函数使用
    window.loadFeatures = function(response) {
        vectorSource.addFeatures((new ol.format.GeoJSON({
            geometryName: 'geom'//改成geom，要素则不显示在界面上
        })).readFeatures(response));  //载入要素
    };
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 15,
                fill: new ol.style.Fill({
                    color: 'red'
                })
            })
        })
    });
    return vectorLayer;
}

function show_edit_map() {
    console.log(map.getLayers().getLength());
    var name='GreateWall:selected';
    clcall();
    wfs_layer=wfs(name);
    if (map.getLayers().getLength()<2){
        map.addLayer(untiled_base);//显示底图
        map.addLayer(tiled_base);
    }
    map.addLayer(wfs_layer);
    show_all_map_flag=false;
}

var show_all_map_flag=false;
var wfs_pro_layer_var=null;
function show_pro_map() {
    // console.log(map.getLayers().getLength());
    // var name='GreateWall:test_sql';
    // clcall();
    // wfs_layer=wfs(name);
    // if (map.getLayers().getLength()<2){
    //     map.addLayer(untiled_base);//显示底图
    //     map.addLayer(tiled_base);
    // }
    // map.addLayer(wfs_layer);
    // show_all_map_flag=false;
    if (box_edit_coordinate){
        map.removeLayer(untiled_base);
        map.removeLayer(tiled_base);
        map.removeLayer(wfs_layer);
        map.removeLayer(untiled_all);
        map.removeLayer(tiled_all);
        map.removeLayer(wfs_pro_layer_var);
        var test= 'x_1:'+box_edit_coordinate[0][0][0].toString()+';y_1:'+box_edit_coordinate[0][0][1].toString()
            +';y_2:'+box_edit_coordinate[0][1][1].toString()+';x_2:'+box_edit_coordinate[0][2][0].toString();
        console.log(test);
        wfs_pro_layer_var=wfs_pro_layer(test);
        map.addLayer(untiled_base);//显示底图
        map.addLayer(tiled_base);
        map.addLayer(wfs_pro_layer_var);
        show_all_map_flag=false;
    }
}
function show_all_map() {
    // console.log(map.getLayers().getLength());
    map.removeLayer(untiled_base);
    map.removeLayer(tiled_base);
    map.removeLayer(wfs_layer);
    map.removeLayer(untiled_all);
    map.removeLayer(tiled_all);
    map.removeLayer(wfs_pro_layer_var);
    // console.log(map.getLayers().getLength());
    // for (var i=0;i<map.getLayers().getLength();i++){
    //     map.removeLayer(map.getLayers()[i]);
    // }
    map.addLayer(untiled_base);//显示底图
    map.addLayer(tiled_base);
    map.addLayer(untiled_all);//显示底图
    map.addLayer(tiled_all);
    show_all_map_flag=true;
}
var map = new ol.Map({
    target: document.getElementById('map'),
    view: new ol.View({
        center: [98.23584, 39.84159],// ol.proj.transform([98.23584, 39.84159], 'EPSG:4326','EPSG:3857'),
        projection: 'EPSG:4326',
        maxZoom: 19,
        zoom: 4
    })
});
//实现高亮显示
var featureOverlay = new ol.layer.Vector({
    source: new ol.source.Vector(),
    map: map,
    style: new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: null,
            stroke: new ol.style.Stroke({color: 'red', width: 20})
        })
    })
});
var highlight;
var img_path_html='';
var displayFeatureInfo=function (pixel,coordinate) {
    var feature=map.forEachFeatureAtPixel(pixel,function (feature) {
        return feature;
    });
    var element = popup.getElement();   // 获取充当弹窗的DOM元素
    $(element).popover('destroy');
    if(feature){
        var img_path=feature.getProperties()['img_path'];
        var save_condition_pop=feature.getProperties()['save_condition'];
        console.log(save_condition_pop);
        // var img_name_split=img_path.toString().split("/");
        // var img_name_1='../'+img_name_split[1];
        // for (i=2;i<img_name_split.length-1;i++)
        // {
        //     img_name_1=img_name_1+'/'+img_name_split[i];
        // }
        // img_name_1=img_name_1+'/'+img_name_split[img_name_split.length-1].toString().split(".")[0]+'.jpg';//一定要小写
        // img_name_1=img_name_1.replace(/\s+/g,"%20");
        // img_path_html=img_path_html+'<td><img id="img_gallery_td" src='+img_name_1+' onclick="viewPic()"></td>';

        var popup_flag=document.getElementsByName("show_popup")[0].checked;

        if(popup_flag){

            popup.setPosition(coordinate);  // 将弹窗位置设置为鼠标点击处
            $(element).popover({
                placement: 'top',
                animation: false,
                html: true,
                content: '<p style="height: 50px;width: 100px">建筑保存状态:</p><code>' + feature.getProperties()['save_condition'] + '</code>'+
                    '<p style="height: 50px;width: 100px">建筑类型:</p><code>' + feature.getProperties()['type_build'] + '</code>'
            });
            $(element).popover('show');
            // console.log(img_name_1);//高度
        }
        else{
            var element = popup.getElement();   // 获取充当弹窗的DOM元素
            $(element).popover('destroy');
        }
    }
    if (feature !== highlight) {
        if (highlight) {
            featureOverlay.getSource().removeFeature(highlight);
        }
        if (feature) {
            featureOverlay.getSource().addFeature(feature);
        }
        highlight = feature;
    }
}
function viewPic() {//放大图片展示
    var galley=document.getElementById('img_gallery');
    var viewer=new Viewer(galley,{
        url:'data-original',
        hidden:function () {
            viewer.destroy();
        }
    });
    viewer.show();
}
$(document).keyup(function (e) {
    if(e.keyCode==13){
        console.log("map被双击"+img_path_html);
        document.getElementById('img_gallery').innerHTML=img_path_html;
        img_path_html='';

        //下部图像gallery效果
        var speed=30//速度数值越大速度越慢
        butong_net_left2.innerHTML=butong_net_left1.innerHTML
        function Marquee3(){
            if(butong_net_left2.offsetWidth-butong_net_left.scrollLeft<=0)
                butong_net_left.scrollLeft-=butong_net_left1.offsetWidth
            else{
                butong_net_left.scrollLeft++
            }
        }
        var MyMar3=setInterval(Marquee3,speed)
        butong_net_left.onmouseover=function() {clearInterval(MyMar3)}
        butong_net_left.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}
        //gallery效果结束
    }
});
function modifyWFS(pixel) {
    var feature_m=map.forEachFeatureAtPixel(pixel,function (feature) {
        return feature;
    });
    if(feature_m){
        var save_type=document.getElementById('save_condition').value;
        console.log(save_type);
        feature_m.setProperties({'save_condition':save_type});
        var type_build=document.getElementById('type_build').value;
        console.log(type_build);
        feature_m.setProperties({'type_build':type_build});
        var WFSTSerializer = new ol.format.WFS();
        feature_m.getGeometry().applyTransform(function (flatCoordinates,flatCoordinates2,stride) {
            for (var j=0;j<flatCoordinates.length;j+=stride){
                var y = flatCoordinates[j];
                var x = flatCoordinates[j + 1];
                flatCoordinates[j] = x;
                flatCoordinates[j + 1] = y;
            }
        });
        // var test= 'x_1:'+box_edit_coordinate[0][0][0].toString()+';y_1:'+box_edit_coordinate[0][0][1].toString()
        //     +';y_2:'+box_edit_coordinate[0][1][1].toString()+';x_2:'+box_edit_coordinate[0][2][0].toString();
        // console.log(test);
        var featObject = WFSTSerializer.writeTransaction(null,
            [feature_m], null, {//插入，修改，删除
                featureType: 'selected',//图层名称，需要根据实际情况进行更改
                featureNS: 'http://localhost:8080/GreateWall',  // 注意这个值必须为创建工作区时的命名空间URI
                srsName: 'EPSG:4326'
                // ,
                // viewParams:'test'
            });
        var serializer = new XMLSerializer();
        var featString = serializer.serializeToString(featObject);
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:8080/geoserver/wfs?service=wfs');
        // 指定内容为xml类型
        request.setRequestHeader('Content-Type', 'text/xml');
        request.send(featString);
    }
}

// 用户点击地图就会弹出来的弹窗
var popup = new ol.Overlay({
    element: document.getElementById('popup')
});
map.addOverlay(popup);

var pixel='';
function btn_modifyWFS(){
    modifyWFS(pixel);
    pixel='';
}

map.on('click',function (evt) {
    selectedFeatures.clear();
    displayFeatureInfo(evt.pixel,evt.coordinate);
    // modifyWFS(evt.pixel);
    pixel=evt.pixel;
    if(show_all_map_flag){
        show_all_map();
    }
    else{
        show_pro_map();
    }
});

//实现框选效果
var boxSelect = new ol.interaction.Select();
var selectedFeatures = boxSelect.getFeatures();
var dragBox = new ol.interaction.DragBox({
    //condition : ol.events.condition.always  默认是always
});
map.addInteraction(dragBox);
var box_edit_coordinate='';
dragBox.on('boxend', function() {

    var radio_show_edit=document.getElementsByName("show_pic_or_edit")[0].checked;
    if (radio_show_edit & !show_all_map_flag){
        var extent = dragBox.getGeometry().getExtent();
        console.log(extent);//box的坐标

        var feature_test=wfs_pro_layer_var.getSource().getFeaturesInExtent(extent);
        var img_path=feature_test[0].getProperties()['img_path'];
        console.log(img_path);
        for(var j=0;j<feature_test.length;j++){
            var img_path=feature_test[j].getProperties()['img_path'];
            console.log(img_path);

            var img_name_split=img_path.toString().split("/");
            var img_name_1='../'+img_name_split[1];
            for (i=2;i<img_name_split.length-1;i++)
            {
                img_name_1=img_name_1+'/'+img_name_split[i];
            }
            img_name_1=img_name_1+'/'+img_name_split[img_name_split.length-1].toString().split(".")[0]+'.jpg';//一定要小写
            img_name_1=img_name_1.replace(/\s+/g,"%20");
            img_path_html=img_path_html+'<td><img id="img_gallery_td" src='+img_name_1+' onclick="viewPic()"></td>';
            console.log(img_path_html);
        }
    }
    else{
        //获得框选区域的经纬度范围，传入sqlview页面，点击btn，调用wfs，显示可编辑区域
        box_edit_coordinate=dragBox.getGeometry().getCoordinates();
        console.log(box_edit_coordinate);
    }


});
dragBox.on('boxstart', function() {
    selectedFeatures.clear();
});
map.on('click', function() {
    selectedFeatures.clear();
});
map.addInteraction(boxSelect);

//结束