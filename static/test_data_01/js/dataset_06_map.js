//地图相关参数宏观定义
var format = "image/png";
var bounds = [111.434502872, 36.8779520350001,
    119.907174866, 40.2350067780001];

var view = new ol.View({
    center: [98.23584, 39.84159],// ol.proj.transform([98.23584, 39.84159], 'EPSG:4326','EPSG:3857'),
    projection: 'EPSG:4326',
    zoom: 5,
    maxZoom: 20
});

//创建map地图变量，用于后续添加内容
var map = new ol.Map({
    target: document.getElementById('map'),
    view: view,
    controls: ol.control.defaults({
        zoom: false,
        rotate: false,
        attribution: false
    })

});
//创建高德矢量地图
var gaode_img = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
        crossOrigin: 'anonymous'//解决跨域问题
        //高德在线地图底图的url
    })
});
//https://webst04.is.autonavi.com/appmaptile?style=6&x=3382&y=1561&z=12
//高德影像图
var gaode_site = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}',
        crossOrigin: 'anonymous'//解决跨域问题
        //高德在线地图底图的url
    })
});
//高德卫星地图标注
var gaode_site_mark = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
        crossOrigin: 'anonymous'//解决跨域问题
        //高德在线地图底图的url
    })
});

//天地图影像图标注
var tiandi_site_mark = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: "http://t{0-7}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=afa188939c93ab9b4b7026d69813acad"
    })
});

//天地图影像图
var tiandi_site = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: "http://t{0-7}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=afa188939c93ab9b4b7026d69813acad"
    })
});

//天地图矢量图
var tiandi_img = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://t{0-7}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=afa188939c93ab9b4b7026d69813acad'
    })
});

//天地图矢量标注
var tiandi_img_mark = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://t{0-7}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=afa188939c93ab9b4b7026d69813acad'
    })
});

//天地图地形渲染
var tiandi_terrain = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://t{0-7}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk=afa188939c93ab9b4b7026d69813acad'
    })
});

//天地图地形注记
var tiandi_terrain_mark = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://t{0-7}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk=afa188939c93ab9b4b7026d69813acad'
    })
});

//谷歌矢量地图
//http://mt2.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x=11&y=7&z=4&s=Galile
var google_img = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'http://mt{0-3}.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile'
    })
});

//谷歌影像地图
var google_site = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: "http://mt{0-3}.google.cn/vt/lyrs=s&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gali"
    })
});
//高德矢量，高德影像，高德影像标注，天地矢量图，天地矢量图标注，天地影像图，天地影像图标注，天地地形渲染，天地地形渲染标注，谷歌矢量图，谷歌影像地图
var mapNames = [gaode_img, gaode_site, gaode_site_mark, tiandi_img, tiandi_img_mark, tiandi_site, tiandi_site_mark, tiandi_terrain, tiandi_terrain_mark, google_img, google_site];

map.addLayer(gaode_img);

//右下角切换地图功能
{
    $(document).ready(function () {
        $(".ol_map_type_cell").hover(function ($this) {
            $(".ol_map_type_cell").css("display", "block");
        }, function () {
            $(".ol_map_type_cell").css("display", "none");
            var parent = $(this).parents()[0];
            var child_num = $(parent).children().length;
            var child_last = $(parent).children()[child_num - 1];
            $(child_last).css("display", "block")
        });

        $(".map_type_mark").click(function ($this) {
            $this.stopPropagation();

        });
        $(".ol_map_type_cell").click(function ($this) {
            var parent = $(this).parents()[0];
            var save_this = this;

            //删除当前的底图
            var eventImage = $(parent).children(":last").children(":last").children(":last");
            eventImageName = eventImage.attr("id");

            switch (eventImageName) {
                case "gaode_img":
                    map.removeLayer(mapNames[0]);
                    break;
                case "gaode_site":
                    map.removeLayer(mapNames[1]);
                    break;
                case "tiandi_img":
                    map.removeLayer(mapNames[3]);
                    break;
                case "tiandi_site":
                    map.removeLayer(mapNames[5]);
                    break;
                case "tiandi_terrain":
                    map.removeLayer(mapNames[7]);
                    break;
                case "google_img":
                    map.removeLayer(mapNames[9]);
                    break;
                case "google_site":
                    map.removeLayer(mapNames[10]);
                    break;
            }

            //删除当前标注图
            var img_mark_del = $(parent).children(":last").children(":first").children(":first").children(":first").attr("id");
            // console.log(img_mark);
            //高德矢量，高德影像，高德影像标注2，天地矢量图，天地矢量图标注4，天地影像图5，天地影像图标注6，天地地形渲染7，天地地形渲染标注8，谷歌矢量图9，谷歌影像地图10

            switch (img_mark_del) {
                case "gaode_site_mark":
                    map.removeLayer(mapNames[2]);
                    break;
                case "tiandi_img_mark":
                    map.removeLayer(mapNames[4]);
                    break;
                case "tiandi_site_mark":
                    map.removeLayer(mapNames[6]);
                    break;
                case "tiandi_terrain_mark":
                    map.removeLayer(mapNames[8]);
                    break;
            }

            var img_last = $(this).children(":last").children(":last");
            var layerName = img_last.attr("id");

            switch (layerName) {
                case "gaode_img":
                    map.addLayer(mapNames[0]);
                    break;
                case "gaode_site":
                    map.addLayer(mapNames[1]);
                    break;
                case "tiandi_img":
                    map.addLayer(mapNames[3]);
                    break;
                case "tiandi_site":
                    map.addLayer(mapNames[5]);
                    break;
                case "tiandi_terrain":
                    map.addLayer(mapNames[7]);
                    break;
                case "google_img":
                    map.addLayer(mapNames[9]);
                    break;
                case "google_site":
                    map.addLayer(mapNames[10]);
                    break;
            }


            var img_mark = $(this).children(":first").children(":first").children(":first").attr("id");
            console.log(img_mark);
            var img_mark_flag = $(this).children(":first").children(":first").children(":first").prop("checked");
            console.log(img_mark_flag);
            //高德矢量，高德影像，高德影像标注2，天地矢量图，天地矢量图标注4，天地影像图5，天地影像图标注6，天地地形渲染7，天地地形渲染标注8，谷歌矢量图9，谷歌影像地图10
            if (img_mark_flag) {
                switch (img_mark) {
                    case "gaode_site_mark":
                        map.addLayer(mapNames[2]);
                        break;
                    case "tiandi_img_mark":
                        map.addLayer(mapNames[4]);
                        break;
                    case "tiandi_site_mark":
                        map.addLayer(mapNames[6]);
                        break;
                    case "tiandi_terrain_mark":
                        map.addLayer(mapNames[8]);
                        break;
                }
            }

            this.remove();
            var child_num = $(parent).children().length;
            var child_last = $(parent).children()[child_num - 1];
            parent.append(save_this);
        });
    });
}

//右上角地图操作相关功能
{
    //全屏方法封装函数
    function PutIntoFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    //自定义全屏函数
    function FullScreen() {
        var full = document.getElementById("map");
        PutIntoFullscreen(full);
    }

    function ZoomIn() {
        view.setZoom(view.getZoom() + 1);
    }

    function ZoomOut() {
        view.setZoom(view.getZoom() - 1);
    }

    //缩放至指定位置
    function ViewInto() {
        view.setCenter([98.23584, 39.84159]);
        view.setZoom(5);
        view.setProjection('EPSG:4326');
    }

    //测量工具实现
    {
        //长度测量
        $(function () {
                //定义矢量数据源
                var source = new ol.source.Vector();
                //定义矢量图层
                var vector = new ol.layer.Vector({
                    source: source,
                    style: new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: 'rgba(255,255,255,0.2)'
                        }),
                        stroke: new ol.style.Stroke({
                            color: '#e21e0a',
                            width: 2
                        }),
                        image: new ol.style.Circle({
                            radius: 5,
                            fill: new ol.style.Fill({
                                color: '#ffcc33'
                            })
                        })
                    })
                });

                //确定当前是否为测量状态
                var measureFlag = false;

                //创建一个当前要绘制的对象
                var sketch = new ol.Feature();
                //创建一个帮助提示框对象
                var helpTooltipElement;
                //创建一个帮助提示信息对象
                var helpTooltip;
                //创建一个测量提示框对象
                var measureTooltipElement;
                //创建一个测量提示信息对象
                var measureTooltip;
                //继续绘制多边形的提示信息
                var continuePolygonMsg = 'Click to continue drawing the polygon';
                //继续绘制线段的提示信息
                var continueLineMsg = 'Click to continue drawing the line';

                //单击事件
                var measureSingleclick;
                //双击事件
                var measureDbclick;
                //定义一个事件监听
                var listener;

                //鼠标移动触发的函数
                var pointerMoveHandler = function (evt) {
                    if (measureFlag) {
                        //Indicates if the map is currently being dragged.
                        //Only set for POINTERDRAG and POINTERMOVE events. Default is false.
                        //如果是平移地图则直接结束
                        if (evt.dragging) {
                            return;
                        }
                        //帮助提示信息
                        var helpMsg = 'Click to start drawing';

                        if (sketch) {
                            //Get the feature's default geometry.
                            //A feature may have any number of named geometries.
                            //获取绘图对象的几何要素
                            var geom = sketch.getGeometry();
                            //如果当前绘制的几何要素是多边形，则将绘制提示信息设置为多边形绘制提示信息
                            //如果当前绘制的几何要素是多线段，则将绘制提示信息设置为多线段绘制提示信息
                            if (geom instanceof ol.geom.Polygon) {
                                helpMsg = continuePolygonMsg;
                            } else if (geom instanceof ol.geom.LineString) {
                                helpMsg = continueLineMsg;
                            }
                        }
                        //设置帮助提示要素的内标签为帮助提示信息
                        helpTooltipElement.innerHTML = helpMsg;
                        //设置帮助提示信息的位置
                        //The coordinate in view projection corresponding to the original browser event.
                        helpTooltip.setPosition(evt.coordinate);
                        //移除帮助提示要素的隐藏样式
                        $(helpTooltipElement).removeClass('hidden');
                    }
                };
                if (measureFlag) {
                    //触发pointermove事件
                    map.on('pointermove', pointerMoveHandler);
                }

                //当鼠标移除地图视图的时为帮助提示要素添加隐藏样式
                $(map.getViewport()).on('mouseout', function () {
                    $(helpTooltipElement).addClass('hidden');
                });

                //获取大地测量复选框
                var geodesicCheckbox = document.getElementById('geodesic');
                //获取类型
                var typeSelect = document.getElementById('type');
                //定义一个交互式绘图对象
                var draw;

                //绘图对象feature存储,划线和画面积
                var all_draw_feature = [];

                //圆点存储对象
                var all_draw_circle = [];


                //添加交互式绘图对象的函数
                function addInteraction(type) {
                    // 获取当前选择的绘制类型
                    // var type = typeSelect.value == 'area' ? 'Polygon' : 'LineString';
                    //创建一个交互式绘图对象
                    draw = new ol.interaction.Draw({
                        //绘制的数据源
                        source: source,
                        //绘制类型
                        type: type,
                        //样式
                        style: new ol.style.Style({
                            fill: new ol.style.Fill({
                                color: 'rgba(255,255,255,0.2)'
                            }),
                            stroke: new ol.style.Stroke({
                                color: 'rgba(0,0,0,0.5)',
                                lineDash: [10, 10],
                                width: 2
                            }),
                            image: new ol.style.Circle({
                                radius: 5,
                                stroke: new ol.style.Stroke({
                                    color: 'rgba(0,0,0,0.7)'
                                }),
                                fill: new ol.style.Fill({
                                    color: 'rgba(255,255,255,0.2)'
                                })
                            })
                        })
                    });
                    //将交互绘图对象添加到地图中
                    map.addInteraction(draw);

                    //创建测量提示框
                    createMeasureTooltip();
                    //创建帮助提示框
                    createHelpTooltip();


                    //定义一个控制鼠标点击次数的变量
                    var count = 0;

                    if (measureFlag) {
                        //绘制开始事件
                        draw.on('drawstart', function (evt) {

                            //提取出feature用于删除
                            all_draw_feature.push(evt.feature);

                            //The feature being drawn.
                            sketch = evt.feature;
                            //提示框的坐标
                            var tooltipCoord = evt.coordinate;
                            //监听几何要素的change事件
                            //Increases the revision counter and dispatches a 'change' event.

                            listener = sketch.getGeometry().on('change', function (evt) {
                                //The event target.
                                //获取绘制的几何对象
                                var geom = evt.target;
                                //定义一个输出对象，用于记录面积和长度
                                var output;
                                if (geom instanceof ol.geom.Polygon) {
                                    map.removeEventListener('singleclick');
                                    map.removeEventListener('dblclick');

                                    // //测量面积，删除双击和单击事件
                                    // ol.Observable.unByKey(measureDbclick);
                                    // ol.Observable.unByKey(measureSingleclick);


                                    //输出多边形的面积
                                    output = formatArea(geom);
                                    //Return an interior point of the polygon.
                                    //获取多变形内部点的坐标
                                    tooltipCoord = geom.getInteriorPoint().getCoordinates();
                                } else if (geom instanceof ol.geom.LineString) {
                                    //输出多线段的长度
                                    output = formatLength(geom);
                                    //Return the last coordinate of the geometry.
                                    //获取多线段的最后一个点的坐标
                                    tooltipCoord = geom.getLastCoordinate();
                                }

                                //设置测量提示框的内标签为最终输出结果
                                measureTooltipElement.innerHTML = output;
                                //设置测量提示信息的位置坐标
                                measureTooltip.setPosition(tooltipCoord);
                            });

                            //地图单击事件
                            measureSingleclick = map.on('singleclick', function (evt) {
                                //设置测量提示信息的位置坐标，用来确定鼠标点击后测量提示框的位置
                                measureTooltip.setPosition(evt.coordinate);
                                //如果是第一次点击，则设置测量提示框的文本内容为起点
                                if (count == 0) {
                                    measureTooltipElement.innerHTML = "起点";
                                }
                                //根据鼠标点击位置生成一个点
                                var point = new ol.geom.Point(evt.coordinate);

                                var point_feature = new ol.Feature(point);
                                //删除圆点
                                all_draw_circle.push(point_feature);

                                //将该点要素添加到矢量数据源中
                                source.addFeature(point_feature);

                                //更改测量提示框的样式，使测量提示框可见
                                measureTooltipElement.className = 'tooltip tooltip-static';
                                //创建测量提示框
                                createMeasureTooltip();
                                //点击次数增加
                                count++;
                            });

                            //地图双击事件
                            measureDbclick = map.on('dblclick', function (evt) {
                                //根据
                                var point = new ol.geom.Point(evt.coordinate);
                                var point_feature = new ol.Feature(point);

                                //删除圆点
                                all_draw_circle.push(point_feature);

                                source.addFeature(point_feature);
                            });
                        }, this);
                        //绘制结束事件
                        draw.on('drawend', function (evt) {
                            //参考绘制次数
                            timesMeasure += 1;

                            count = 0;
                            //设置测量提示框的样式
                            measureTooltipElement.className = 'tooltip tooltip-static';
                            //Set the offset for this overlay.
                            //设置偏移量
                            measureTooltip.setOffset([0, -7]);
                            //清空绘制要素
                            sketch = null;
                            //清空测量提示要素
                            measureTooltipElement = null;
                            //创建测量提示框
                            createMeasureTooltip();
                            //Removes an event listener using the key returned by on() or once().
                            //移除事件监听
                            ol.Observable.unByKey(listener);
                            //移除地图单击事件
                            map.removeEventListener('singleclick');
                        }, this);
                    }
                }

                //创建帮助提示框
                function createHelpTooltip() {
                    //如果已经存在帮助提示框则移除
                    if (helpTooltipElement) {
                        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
                    }
                    //创建帮助提示要素的div
                    helpTooltipElement = document.createElement('div');
                    //设置帮助提示要素的样式
                    helpTooltipElement.className = 'tooltip hidden';
                    //创建一个帮助提示的覆盖标注
                    helpTooltip = new ol.Overlay({
                        element: helpTooltipElement,
                        offset: [15, 0],
                        positioning: 'center-left'
                    });
                    //将帮助提示的覆盖标注添加到地图中
                    map.addOverlay(helpTooltip);
                }

                //创建测量提示框
                function createMeasureTooltip() {
                    //保证一根线上只有一个距离结果数值
                    if (measureTooltipElement) {
                        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
                    }

                    //创建测量提示框的div
                    measureTooltipElement = document.createElement('div');
                    measureTooltipElement.setAttribute('id', 'lengthLabel');
                    //设置测量提示要素的样式
                    measureTooltipElement.className = 'tooltip tooltip-measure';
                    //创建一个测量提示的覆盖标注
                    measureTooltip = new ol.Overlay({
                        element: measureTooltipElement,
                        offset: [0, -15],
                        positioning: 'bottom-center'
                    });
                    //将测量提示的覆盖标注添加到地图中
                    map.addOverlay(measureTooltip);
                }

                //目前仅实现基于3857投影坐标系，是否需要更改测量模式？？

                //格式化测量长度
                var formatLength = function (line) {

                    //Return the coordinates of the linestring.
                    //获取坐标串
                    var coordinates = line.getCoordinates();
                    //初始长度为0
                    var length = 0;
                    //获取源数据的坐标系
                    var sourceProj = map.getView().getProjection();
                    //进行点的坐标转换
                    for (var i = 0; i < coordinates.length - 1; i++) {
                        //第一个点
                        var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
                        //第二个点
                        var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
                        //获取转换后的球面距离
                        //Returns the distance from c1 to c2 using the haversine formula.
                        length += ol.sphere.getDistance(c1, c2);
                    }

                    //如果大地测量复选框被勾选，则计算球面距离
                    // if (geodesicCheckbox.checked) {
                    //     //Return the coordinates of the linestring.
                    //     //获取坐标串
                    //     var coordinates = line.getCoordinates();
                    //     //初始长度为0
                    //     length = 0;
                    //     //获取源数据的坐标系
                    //     var sourceProj = map.getView().getProjection();
                    //     //进行点的坐标转换
                    //     for (var i = 0; i < coordinates.length - 1; i++) {
                    //         //第一个点
                    //         var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
                    //         //第二个点
                    //         var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
                    //         //获取转换后的球面距离
                    //         //Returns the distance from c1 to c2 using the haversine formula.
                    //         length += wgs84Sphere.haversineDistance(c1,c2);
                    //     }
                    // } else {
                    //     //Return the length of the linestring on projected plane.
                    //     //计算平面距离
                    //     length = Math.round(line.getLength() * 100) / 100;
                    // }
                    //定义输出变量
                    var output;
                    //如果长度大于1000，则使用km单位，否则使用m单位
                    if (length > 1000) {
                        output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km'; //换算成KM单位
                    } else {
                        output = (Math.round(length * 100) / 100) + ' ' + 'm'; //m为单位
                    }
                    return output;
                };

                //格式化测量面积
                var formatArea = function (polygon) {

                    var sourceProj = map.getView().getProjection();//获取投影坐标系

                    var geom = (polygon.clone().transform(sourceProj, 'EPSG:3857'));
                    var area = ol.sphere.getArea(geom);

                    // //如果大地测量复选框被勾选，则计算球面面积
                    // if (geodesicCheckbox.checked) {
                    //     //获取初始坐标系
                    //     var sourceProj = map.getView().getProjection();
                    //     //Make a complete copy of the geometry.
                    //     //Transform each coordinate of the geometry from one coordinate reference system to another.
                    //     //The geometry is modified in place. For example, a line will be transformed to a line and a circle to a circle.
                    //     //If you do not want the geometry modified in place, first clone() it and then use this function on the clone.
                    //     //克隆该几何对象然后转换坐标系
                    //     var geom = polygon.clone().transform(sourceProj, 'EPSG:4326');
                    //     //Return the Nth linear ring of the polygon geometry.
                    //     //Return null if the given index is out of range.
                    //     //The exterior linear ring is available at index 0 and the interior rings at index 1 and beyond.
                    //     //获取多边形的坐标系
                    //     var coordinates = geom.getLinearRing(0).getCoordinates();
                    //     //Returns the geodesic area for a list of coordinates.
                    //     //获取球面面积
                    //     area = Math.abs(wgs84Sphere.geodesicArea(coordinates));
                    // } else {
                    //     //获取平面面积
                    //     area = polygon.getArea();
                    // }
                    //定义输出变量
                    var output;
                    //当面积大于10000时，转换为平方千米，否则为平方米
                    if (area > 10000) {
                        output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>';
                    } else {
                        output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>';
                    }
                    return output;
                };
                //添加交互绘图对象
                // addInteraction();

                //清理测量操作
                $("#cleanMeasure").click(function () {
                    var k = 0;
                    for (k = 0; k < timesMeasure; k++) {
                        cleanMeasure();
                    }
                });

                function cleanMeasure() {
                    measureFlag = false;

                    //删除绘制的线
                    var length = all_draw_feature.length;
                    var pop;
                    i = 0;
                    for (i = 0; i < length; i++) {
                        pop = all_draw_feature.pop();
                        vector.getSource().removeFeature(pop);
                    }

                    //删除绘制的点
                    var circle_length = all_draw_circle.length;
                    console.log(circle_length);
                    i = 0;
                    for (i = 0; i < circle_length; i++) {
                        pop = all_draw_circle.pop();
                        vector.getSource().removeFeature(pop);
                    }

                    //删除绘制响应
                    map.removeInteraction(draw);

                    //删除测量提示
                    map.getOverlays().clear();//关键点


                    //清理点击和双击事件
                    ol.Observable.unByKey(measureSingleclick);
                    ol.Observable.unByKey(measureDbclick);

                    //移除事件监听
                    ol.Observable.unByKey(listener);

                    map.removeLayer(vector);

                }

                //设置调用多少次清理函数
                var timesMeasure = 0;

                //开始测量操作
                $("#measureArea").click(function () {

                    if (!measureFlag) {
                        vector.getSource().clear();
                        map.addLayer(vector);
                    }
                    measureFlag = true;
                    //删除绘制响应
                    map.removeInteraction(draw);

                    addInteraction("Polygon");
                });
                $("#measureDis").click(function () {
                    if (!measureFlag) {
                        vector.getSource().clear();
                        map.addLayer(vector);
                    }

                    measureFlag = true;
                    //删除绘制响应
                    map.removeInteraction(draw);

                    addInteraction("LineString");
                });

            }
        );

        function addInteraction(point_type) {
            if(point_type!=='None'){
                draw=new ol.interaction.Draw({
                    source:source,
                    type:"Point",
                    style:point_type
                });
                map.addInteraction(draw);
            }
        }

        // var typeSelect=$(".point_type").css("value");
        // console.log("")
        var draw;//全局变量用于后续删除操作
        //手动添加标注功能
        //定义矢量数据源
        var source = new ol.source.Vector();
        //定义矢量图层
        var vector = new ol.layer.Vector({
            source: source
        });
    }

    //添加鹰眼地图功能
    {
        var layers_now = new ol.layer.Tile({
            source: new ol.source.OSM()
        });
        /*鹰眼地图的view*/
        var view_over = new ol.View({
            center: [98.23584, 39.84159],// ol.proj.transform([98.23584, 39.84159], 'EPSG:4326','EPSG:3857'),
            projection: 'EPSG:4326',
            zoom: 5,
            maxZoom: 20
        });
        var OverviewMap = new ol.control.OverviewMap({
            layers: [layers_now],
            collapseLabel: "\u00BB",//鹰眼展开时功能按钮上的标识
            label: "\u00AB",//鹰眼折叠时功能按钮上的标识
            target: document.getElementById("OverviewMap"),
            //初始为展开显示方式
            collapsed: false,
            view: view_over
        });
        map.addControl(OverviewMap);
    }

    //地图打印功能
    // function preview(fang)
    // {
    //     if (fang < 10){
    //         bdhtml=window.document.body.innerHTML;//获取当前页的html代码
    //         sprnstr="<!--startprint"+fang+"-->";//设置打印开始区域
    //         eprnstr="<!--endprint"+fang+"-->";//设置打印结束区域
    //         prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //从开始代码向后取html
    //         prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
    //         window.document.body.innerHTML=prnhtml;
    //         window.print();
    //         window.document.body.innerHTML=bdhtml;
    //     } else {
    //         window.print();
    //     }
    // }
    function preview() {
        window.print();
    }



}

//创建长城墙体相关地图
{
    //土墙
    var cob_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_cob_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //石墙
    var stone_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_stone_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //砖墙
    var brick_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_brick_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //山险墙
    var precipitous_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_precipitous_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //山险
    var precipitous = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_precipitous',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //河险
    var risk_river = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_risk_river',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //其他墙体
    var other_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_other_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //消失的长城
    var disappear_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:the_each_wall_disappear_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
}

//创建墙上单体建筑相关地图
{
    //敌台
    var enemy_tower = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:enemy_tower',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //马面
    var horse_face = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:horse_face',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //水门
    var water_door_on_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:water_door_on_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //城楼
    var gate_tower = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:gate_tower',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //铺房
    var shop_room = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:shop_room',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //烽火台
    var smoke_tower = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:smoke_tower',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
}

//墙外单体
{
    //墩台
    var pier = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:pier',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //烽火台
    var smoke_tower_out_wall = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:smoke_tower_out_wall',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //其他遗址遗迹
    var other_arch = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:other_arch',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
}

//关隘
{
    //水关
    var guanai_water_door = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:guanai_water_door',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
}

//堡镇地图style变量声明
{
    var liaodong_kaiyuan_style = 'greatWall:liaodong_kaiyuan_no';
    var liaodong_aiyang_style = 'greatWall:liaodong_aiyang_no';
    var liaodong_guangning_style = 'greatWall:liaodong_guangning_no';
    var liaodong_qiantun_style = 'greatWall:liaodong_qiantun_no';
    var liaodong_yizhou_style = 'greatWall:liaodong_yizhou_no';
    var liaodong_liaoyang_style = 'greatWall:liaodong_liaoyang_no';
    var jizhen_shanhailu_style = 'greatWall:jizhen_shanhailu_no';
    var jizhen_shimenlu_style = 'greatWall:jizhen_shimenlu_no';
    var jizhen_taitoulu_style = 'greatWall:jizhen_taitoulu_no';
    var jizhen_yanhelu_style = 'greatWall:jizhen_yanhelu_no';
    var jizhen_taipinglu_style = 'greatWall:jizhen_taipinglu_no';
    var jizhen_malanlu_style = 'greatWall:jizhen_malanlu_no';
    var jizhen_xifengkou_style = 'greatWall:jizhen_xifengkou_no';
    var jizhen_songpenglu_style = 'greatWall:jizhen_songpenglu_no';
    var jizhen_qiangzilu_style = 'greatWall:jizhen_qiangzilu_no';
    var jizhen_gubeikou_style = 'greatWall:jizhen_gubeikou_no';
    var jizhen_shitanglu_style = 'greatWall:jizhen_shitanglu_no';
    var jizhen_caojialu_style = 'greatWall:jizhen_caojialu_no';
    var xuanfu_bushulu_style = 'greatWall:xuanfu_bushulu_no';
    var xuanfu_shangxilu_style = 'greatWall:xuanfu_shangxilu_no';
    var xuanfu_xiaxilu_style = 'greatWall:xuanfu_xiaxilu_no';
    var xuanfu_shangbeilu_style = 'greatWall:xuanfu_shangbeilu_no';
    var xuanfu_xiabeilu_style = 'greatWall:xuanfu_xiabeilu_no';
    var xuanfu_zhonglu_style = 'greatWall:xuanfu_zhonglu_no';
    var xuanfu_donglu_style = 'greatWall:xuanfu_donglu_no';
    var xuanfu_nanlu_style = 'greatWall:xuanfu_nanlu_no';
    var xuanfu_nanshan_style = 'greatWall:xuanfu_nanshan_no';
    var datong_east_style = 'greatWall:datong_east_no';
    var datong_jingping_style = 'greatWall:datong_jingping_no';
    var datong_north_east_style = 'greatWall:datong_north_east_no';
    var datong_north_west_style = 'greatWall:datong_north_west_no';
    var datong_weiyuan_style = 'greatWall:datong_weiyuan_no';
    var datong_west_style = 'greatWall:datong_west_no';
    var datong_xinping_style = 'greatWall:datong_xinping_no';
    var datong_zhonglu_style = 'greatWall:datong_zhonglu_no';
    var datong_bushulu_style = 'greatWall:datong_bushulu_no';
    var shanxi_east_style = 'greatWall:shanxi_east_no';
    var shanxi_beilou_style = 'greatWall:shanxi_beilou_no';
    var shanxi_zhonglu_style = 'greatWall:shanxi_zhonglu_no';
    var shanxi_west_style = 'greatWall:shanxi_west_no';
    var shanxi_hebao_style = 'greatWall:shanxi_hebao_no';
    var yulin_east_style = 'greatWall:yulin_east_no';
    var yulin_west_style = 'greatWall:yulin_west_no';
    var yulin_zhonglu_style = 'greatWall:yulin_zhonglu_no';
    var ningxia_east_style = 'greatWall:ningxia_east_no';
    var ningxia_zhonglu_style = 'greatWall:ningxia_zhonglu_no';
    var ningxia_north_style = 'greatWall:ningxia_north_no';
    var ningxia_south_style = 'greatWall:ningxia_south_no';
    var ningxia_west_style = 'greatWall:ningxia_west_no';
    var guyuan_xiamafang_style = 'greatWall:guyuan_xiamafang_no';
    var guyuan_jinglu_style = 'greatWall:guyuan_jinglu_no';
    var guyuan_lanzhou_style = 'greatWall:guyuan_lanzhou_no';
    var guyuan_hezhou_style = 'greatWall:guyuan_hezhou_no';
    var guyuan_lutang_style = 'greatWall:guyuan_lutang_no';
    var gansu_zhuanglang_style = 'greatWall:gansu_zhuanglang_no';
    var gansu_dajing_style = 'greatWall:gansu_dajing_no';
    var gansu_liangzhou_style = 'greatWall:gansu_liangzhou_no';
    var gansu_zhenyu_style = 'greatWall:gansu_zhenyu_no';
    var gansu_suzhou_style = 'greatWall:gansu_suzhou_no';
}

//调用TileWMS地图，堡镇地图名称变量声明
{
    var liaodong_kaiyuan = null;
    var liaodong_aiyang = null;
    var liaodong_guangning = null;
    var liaodong_qiantun = null;
    var liaodong_yizhou = null;
    var liaodong_liaoyang = null;
    var jizhen_shanhailu = null;
    var jizhen_shimenlu = null;
    var jizhen_taitoulu = null;
    var jizhen_yanhelu = null;
    var jizhen_taipinglu = null;
    var jizhen_malanlu = null;
    var jizhen_xifengkou = null;
    var jizhen_songpenglu = null;
    var jizhen_qiangzilu = null;
    var jizhen_gubeikou = null;
    var jizhen_shitanglu = null;
    var jizhen_caojialu = null;
    var xuanfu_bushulu = null;
    var xuanfu_shangxilu = null;
    var xuanfu_xiaxilu = null;
    var xuanfu_shangbeilu = null;
    var xuanfu_xiabeilu = null;
    var xuanfu_zhonglu = null;
    var xuanfu_donglu = null;
    var xuanfu_nanlu = null;
    var xuanfu_nanshan = null;
    var datong_east = null;
    var datong_jingping = null;
    var datong_north_east = null;
    var datong_north_west = null;
    var datong_weiyuan = null;
    var datong_west = null;
    var datong_xinping = null;
    var datong_zhonglu = null;
    var datong_bushulu = null;
    var shanxi_east = null;
    var shanxi_beilou = null;
    var shanxi_zhonglu = null;
    var shanxi_west = null;
    var shanxi_hebao = null;
    var yulin_east = null;
    var yulin_west = null;
    var yulin_zhonglu = null;
    var ningxia_east = null;
    var ningxia_zhonglu = null;
    var ningxia_north = null;
    var ningxia_south = null;
    var ningxia_west = null;
    var guyuan_xiamafang = null;
    var guyuan_jinglu = null;
    var guyuan_lanzhou = null;
    var guyuan_hezhou = null;
    var guyuan_lutang = null;
    var gansu_zhuanglang = null;
    var gansu_dajing = null;
    var gansu_liangzhou = null;
    var gansu_zhenyu = null;
    var gansu_suzhou = null;
}

//创建边镇城池相关地图
function createCityMap() {
    //辽东镇地图
    {

        //北路——开原路
        liaodong_kaiyuan = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": liaodong_kaiyuan_style,
                    "LAYERS": 'greatWall:liaodong_kaiyuan',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
                // ,
                // serverType: 'geoserver',
                // crossOrigin: 'anonymous'
            })
        });


        //东路——叆阳城
        liaodong_aiyang = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": liaodong_aiyang_style,
                    "LAYERS": 'greatWall:liaodong_aiyang',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //中路——广宁分司
        liaodong_guangning = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": liaodong_guangning_style,
                    "LAYERS": 'greatWall:liaodong_guangning',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });

        //南路——前屯路
        liaodong_qiantun = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": liaodong_qiantun_style,
                    "LAYERS": 'greatWall:liaodong_qiantun',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });

        //西路——义州路
        liaodong_yizhou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": liaodong_yizhou_style,
                    "LAYERS": 'greatWall:liaodong_yizhou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //东路——辽阳东
        liaodong_liaoyang = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": liaodong_liaoyang_style,
                    "LAYERS": 'greatWall:liaodong_liaoyang',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //蓟镇地图
    {
        //山海路
        jizhen_shanhailu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_shanhailu_style,
                    "LAYERS": 'greatWall:jizhen_shanhailu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //石门路
        jizhen_shimenlu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_shimenlu_style,
                    "LAYERS": 'greatWall:jizhen_shimenlu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //台头路
        jizhen_taitoulu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_taitoulu_style,
                    "LAYERS": 'greatWall:jizhen_taitoulu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });

        //燕河路
        jizhen_yanhelu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_yanhelu_style,
                    "LAYERS": 'greatWall:jizhen_yanhelu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //太平路
        jizhen_taipinglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_taipinglu_style,
                    "LAYERS": 'greatWall:jizhen_taipinglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //马兰路
        jizhen_malanlu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_malanlu_style,
                    "LAYERS": 'greatWall:jizhen_malanlu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //喜峰口
        jizhen_xifengkou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_xifengkou_style,
                    "LAYERS": 'greatWall:jizhen_xifengkou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //松棚路
        jizhen_songpenglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_songpenglu_style,
                    "LAYERS": 'greatWall:jizhen_songpenglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //墙子路
        jizhen_qiangzilu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_qiangzilu_style,
                    "LAYERS": 'greatWall:jizhen_songpenglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //古北口路
        jizhen_gubeikou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_gubeikou_style,
                    "LAYERS": 'greatWall:jizhen_gubeikou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //石塘路
        jizhen_shitanglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_shitanglu_style,
                    "LAYERS": 'greatWall:jizhen_shitanglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //曹家路
        jizhen_caojialu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": jizhen_caojialu_style,
                    "LAYERS": 'greatWall:jizhen_caojialu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //宣府镇地图
    {
        //不属路
        xuanfu_bushulu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_bushulu_style,
                    "LAYERS": 'greatWall:xuanfu_bushulu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //上西路
        xuanfu_shangxilu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_shangxilu_style,
                    "LAYERS": 'greatWall:xuanfu_shangxilu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //下西路
        xuanfu_xiaxilu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_xiaxilu_style,
                    "LAYERS": 'greatWall:xuanfu_xiaxilu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //上北路
        xuanfu_shangbeilu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_shangbeilu_style,
                    "LAYERS": 'greatWall:xuanfu_shangbeilu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //下北路
        xuanfu_xiabeilu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_xiabeilu_style,
                    "LAYERS": 'greatWall:xuanfu_xiabeilu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //中路
        xuanfu_zhonglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_zhonglu_style,
                    "LAYERS": 'greatWall:xuanfu_zhonglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //东路
        xuanfu_donglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_donglu_style,
                    "LAYERS": 'greatWall:xuanfu_donglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //南路
        xuanfu_nanlu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_nanlu_style,
                    "LAYERS": 'greatWall:xuanfu_nanlu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //南山
        xuanfu_nanshan = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": xuanfu_nanshan_style,
                    "LAYERS": 'greatWall:xuanfu_nanshan',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //大同镇地图
    {
        //东路
        datong_east = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_east_style,
                    "LAYERS": 'greatWall:datong_east',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //井坪路
        datong_jingping = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_jingping_style,
                    "LAYERS": 'greatWall:datong_jingping',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //北东路
        datong_north_east = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_north_east_style,
                    "LAYERS": 'greatWall:datong_north_east',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //北西路
        datong_north_west = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_north_west_style,
                    "LAYERS": 'greatWall:datong_north_west',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //威远路
        datong_weiyuan = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_weiyuan_style,
                    "LAYERS": 'greatWall:datong_weiyuan',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //西路
        datong_west = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_west_style,
                    "LAYERS": 'greatWall:datong_west',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //新平路
        datong_xinping = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_xinping_style,
                    "LAYERS": 'greatWall:datong_xinping',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //中路
        datong_zhonglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_zhonglu_style,
                    "LAYERS": 'greatWall:datong_zhonglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //不属路
        datong_bushulu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": datong_bushulu_style,
                    "LAYERS": 'greatWall:datong_bushulu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //山西镇地图
    {
        //东路
        shanxi_east = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": shanxi_east_style,
                    "LAYERS": 'greatWall:shanxi_east',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //北楼路
        shanxi_beilou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": shanxi_beilou_style,
                    "LAYERS": 'greatWall:shanxi_beilou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //中路
        shanxi_zhonglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": shanxi_zhonglu_style,
                    "LAYERS": 'greatWall:shanxi_zhonglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //西路
        shanxi_west = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": shanxi_west_style,
                    "LAYERS": 'greatWall:shanxi_west',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //河保路
        shanxi_hebao = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": shanxi_hebao_style,
                    "LAYERS": 'greatWall:shanxi_hebao',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //榆林镇地图
    {
        //东路
        yulin_east = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": yulin_east_style,
                    "LAYERS": 'greatWall:yulin_east',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //西路
        yulin_west = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": yulin_west_style,
                    "LAYERS": 'greatWall:yulin_west',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //中路
        yulin_zhonglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": yulin_zhonglu_style,
                    "LAYERS": 'greatWall:yulin_zhonglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //宁夏镇地图
    {
        //东路
        ningxia_east = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": ningxia_east_style,
                    "LAYERS": 'greatWall:ningxia_east',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //中路
        ningxia_zhonglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": ningxia_zhonglu_style,
                    "LAYERS": 'greatWall:ningxia_zhonglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        // 北路
        ningxia_north = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": ningxia_north_style,
                    "LAYERS": 'greatWall:ningxia_north',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //南路
        ningxia_south = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": ningxia_south_style,
                    "LAYERS": 'greatWall:ningxia_south',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //西路
        ningxia_west = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": ningxia_west_style,
                    "LAYERS": 'greatWall:ningxia_west',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //固原镇地图
    {
        //下马房关路
        guyuan_xiamafang = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": guyuan_xiamafang_style,
                    "LAYERS": 'greatWall:guyuan_xiamafang',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //靖虏路
        guyuan_jinglu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": guyuan_jinglu_style,
                    "LAYERS": 'greatWall:guyuan_jinglu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //兰州路
        guyuan_lanzhou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": guyuan_lanzhou_style,
                    "LAYERS": 'greatWall:guyuan_lanzhou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //河州路
        guyuan_hezhou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": guyuan_hezhou_style,
                    "LAYERS": 'greatWall:guyuan_hezhou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //芦塘路
        guyuan_lutang = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": guyuan_lutang_style,
                    "LAYERS": 'greatWall:guyuan_lutang',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
    //甘肃镇
    {
        //庄浪路
        gansu_zhuanglang = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": gansu_zhuanglang_style,
                    "LAYERS": 'greatWall:gansu_zhuanglang',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //大靖路
        gansu_dajing = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": gansu_dajing_style,
                    "LAYERS": 'greatWall:gansu_dajing',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //凉州路
        gansu_liangzhou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": gansu_liangzhou_style,
                    "LAYERS": 'greatWall:gansu_liangzhou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //镇域直辖
        gansu_zhenyu = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": gansu_zhenyu_style,
                    "LAYERS": 'greatWall:gansu_zhenyu',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
        //肃州路
        gansu_suzhou = new ol.layer.Tile({
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://localhost:8080/geoserver/greatWall/wms',
                params: {
                    'FORMAT': format,
                    'VERSION': '1.1.1',
                    tiled: true,
                    "STYLES": gansu_suzhou_style,
                    "LAYERS": 'greatWall:gansu_suzhou',
                    "exceptions": 'application/vnd.ogc.se_inimage',
                    tilesOrigin: 112.884651184082 + "," + 39.3513298034668
                }
            })
        });
    }
}

//墙上单体
{
    //敌台
    var on_wall_enemy_tower = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:on_wall_enemy_tower',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //城楼
    var on_wall_gate_tower = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:on_wall_gate_tower',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //马面
    var on_wall_horse_face = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:on_wall_horse_face',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //铺房
    var on_wall_shop_room = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:on_wall_shop_room',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //烽火台
    var on_wall_smoke_tower = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:on_wall_smoke_tower',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
    //水门
    var on_wall_water_door = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://localhost:8080/geoserver/greatWall/wms',
            params: {
                'FORMAT': format,
                'VERSION': '1.1.1',
                "LAYERS": 'greatWall:on_wall_water_door',
                "exceptions": 'application/vnd.ogc.se_inimage',
            }
        })
    });
}

function clearMap() {
    //清除辽东镇加载地图
    map.removeLayer(liaodong_kaiyuan);
    map.removeLayer(liaodong_aiyang);
    map.removeLayer(liaodong_guangning);
    map.removeLayer(liaodong_qiantun);
    map.removeLayer(liaodong_yizhou);

    //蓟镇
    map.removeLayer(jizhen_shanhailu);
    map.removeLayer(jizhen_shimenlu);
    map.removeLayer(jizhen_taitoulu);
    map.removeLayer(jizhen_yanhelu);
    map.removeLayer(jizhen_taipinglu);
    map.removeLayer(jizhen_malanlu);
    map.removeLayer(jizhen_xifengkou);
    map.removeLayer(jizhen_songpenglu);
    map.removeLayer(jizhen_qiangzilu);
    map.removeLayer(jizhen_gubeikou);
    map.removeLayer(jizhen_shitanglu);
    map.removeLayer(jizhen_caojialu);

    //宣府镇
    map.removeLayer(xuanfu_bushulu);
    map.removeLayer(xuanfu_shangxilu);
    map.removeLayer(xuanfu_xiaxilu);
    map.removeLayer(xuanfu_shangbeilu);
    map.removeLayer(xuanfu_xiabeilu);
    map.removeLayer(xuanfu_zhonglu);
    map.removeLayer(xuanfu_donglu);
    map.removeLayer(xuanfu_nanlu);
    map.removeLayer(xuanfu_nanshan);

    //大同镇
    map.removeLayer(datong_xinping);
    map.removeLayer(datong_east);
    map.removeLayer(datong_north_east);
    map.removeLayer(datong_north_west);
    map.removeLayer(datong_zhonglu);
    map.removeLayer(datong_weiyuan);
    map.removeLayer(datong_west);
    map.removeLayer(datong_jingping);
    map.removeLayer(datong_bushulu);

    //山西镇
    map.removeLayer(shanxi_east);
    map.removeLayer(shanxi_beilou);
    map.removeLayer(shanxi_zhonglu);
    map.removeLayer(shanxi_west);
    map.removeLayer(shanxi_hebao);

    //榆林镇
    map.removeLayer(yulin_east);
    map.removeLayer(yulin_zhonglu);
    map.removeLayer(yulin_west);

    //宁夏镇
    map.removeLayer(ningxia_east);
    map.removeLayer(ningxia_zhonglu);
    map.removeLayer(ningxia_north);
    map.removeLayer(ningxia_south);
    map.removeLayer(ningxia_west);

    //固原镇
    map.removeLayer(guyuan_xiamafang);
    map.removeLayer(guyuan_jinglu);
    map.removeLayer(guyuan_lanzhou);
    map.removeLayer(guyuan_hezhou);
    map.removeLayer(guyuan_lutang);

    //甘肃镇
    map.removeLayer(gansu_zhuanglang);
    map.removeLayer(gansu_dajing);
    map.removeLayer(gansu_liangzhou);
    map.removeLayer(gansu_zhenyu);
    map.removeLayer(gansu_suzhou);

}

//根据选择情况调用不同的地图
function show_map() {

    clearMap();
    $(document).ready(function () {
        if ($("#vis_city_name").is(":checked")) {
            console.log("print");
            liaodong_kaiyuan_style = 'greatWall:liaodong_kaiyuan';
            liaodong_aiyang_style = 'greatWall:liaodong_aiyang';
            liaodong_guangning_style = 'greatWall:liaodong_guangning';
            liaodong_qiantun_style = 'greatWall:liaodong_qiantun';
            liaodong_yizhou_style = 'greatWall:liaodong_yizhou';
            liaodong_liaoyang_style = 'greatWall:liaodong_liaoyang';
            jizhen_shanhailu_style = 'greatWall:jizhen_shanhailu';
            jizhen_shimenlu_style = 'greatWall:jizhen_shimenlu';
            jizhen_taitoulu_style = 'greatWall:jizhen_taitoulu';
            jizhen_yanhelu_style = 'greatWall:jizhen_yanhelu';
            jizhen_taipinglu_style = 'greatWall:jizhen_taipinglu';
            jizhen_malanlu_style = 'greatWall:jizhen_malanlu';
            jizhen_xifengkou_style = 'greatWall:jizhen_xifengkou';
            jizhen_songpenglu_style = 'greatWall:jizhen_songpenglu';
            jizhen_qiangzilu_style = 'greatWall:jizhen_qiangzilu';
            jizhen_gubeikou_style = 'greatWall:jizhen_gubeikou';
            jizhen_shitanglu_style = 'greatWall:jizhen_shitanglu';
            jizhen_caojialu_style = 'greatWall:jizhen_caojialu';
            xuanfu_bushulu_style = 'greatWall:xuanfu_bushulu';
            xuanfu_shangxilu_style = 'greatWall:xuanfu_shangxilu';
            xuanfu_xiaxilu_style = 'greatWall:xuanfu_xiaxilu';
            xuanfu_shangbeilu_style = 'greatWall:xuanfu_shangbeilu';
            xuanfu_xiabeilu_style = 'greatWall:xuanfu_xiabeilu';
            xuanfu_zhonglu_style = 'greatWall:xuanfu_zhonglu';
            xuanfu_donglu_style = 'greatWall:xuanfu_donglu';
            xuanfu_nanlu_style = 'greatWall:xuanfu_nanlu';
            xuanfu_nanshan_style = 'greatWall:xuanfu_nanshan';
            datong_east_style = 'greatWall:datong_east';
            datong_jingping_style = 'greatWall:datong_jingping';
            datong_north_east_style = 'greatWall:datong_north_east';
            datong_north_west_style = 'greatWall:datong_north_west';
            datong_weiyuan_style = 'greatWall:datong_weiyuan';
            datong_west_style = 'greatWall:datong_west';
            datong_xinping_style = 'greatWall:datong_xinping';
            datong_zhonglu_style = 'greatWall:datong_zhonglu';
            datong_bushulu_style = 'greatWall:datong_bushulu';
            shanxi_east_style = 'greatWall:shanxi_east';
            shanxi_beilou_style = 'greatWall:shanxi_beilou';
            shanxi_zhonglu_style = 'greatWall:shanxi_zhonglu';
            shanxi_west_style = 'greatWall:shanxi_west';
            shanxi_hebao_style = 'greatWall:shanxi_hebao';
            yulin_east_style = 'greatWall:yulin_east';
            yulin_west_style = 'greatWall:yulin_west';
            yulin_zhonglu_style = 'greatWall:yulin_zhonglu';
            ningxia_east_style = 'greatWall:ningxia_east';
            ningxia_zhonglu_style = 'greatWall:ningxia_zhonglu';
            ningxia_north_style = 'greatWall:ningxia_north';
            ningxia_south_style = 'greatWall:ningxia_south';
            ningxia_west_style = 'greatWall:ningxia_west';
            guyuan_xiamafang_style = 'greatWall:guyuan_xiamafang';
            guyuan_jinglu_style = 'greatWall:guyuan_jinglu';
            guyuan_lanzhou_style = 'greatWall:guyuan_lanzhou';
            guyuan_hezhou_style = 'greatWall:guyuan_hezhou';
            guyuan_lutang_style = 'greatWall:guyuan_lutang';
            gansu_zhuanglang_style = 'greatWall:gansu_zhuanglang';
            gansu_dajing_style = 'greatWall:gansu_dajing';
            gansu_liangzhou_style = 'greatWall:gansu_liangzhou';
            gansu_zhenyu_style = 'greatWall:gansu_zhenyu';
            gansu_suzhou_style = 'greatWall:gansu_suzhou';
            createCityMap();
            // clearMap();
        }
        //调用边镇城池地图
        else {
            console.log("con");
            {
                liaodong_kaiyuan_style = 'greatWall:liaodong_kaiyuan_no';
                liaodong_aiyang_style = 'greatWall:liaodong_aiyang_no';
                liaodong_guangning_style = 'greatWall:liaodong_guangning_no';
                liaodong_qiantun_style = 'greatWall:liaodong_qiantun_no';
                liaodong_yizhou_style = 'greatWall:liaodong_yizhou_no';
                liaodong_liaoyang_style = 'greatWall:liaodong_liaoyang_no';
                jizhen_shanhailu_style = 'greatWall:jizhen_shanhailu_no';
                jizhen_shimenlu_style = 'greatWall:jizhen_shimenlu_no';
                jizhen_taitoulu_style = 'greatWall:jizhen_taitoulu_no';
                jizhen_yanhelu_style = 'greatWall:jizhen_yanhelu_no';
                jizhen_taipinglu_style = 'greatWall:jizhen_taipinglu_no';
                jizhen_malanlu_style = 'greatWall:jizhen_malanlu_no';
                jizhen_xifengkou_style = 'greatWall:jizhen_xifengkou_no';
                jizhen_songpenglu_style = 'greatWall:jizhen_songpenglu_no';
                jizhen_qiangzilu_style = 'greatWall:jizhen_qiangzilu_no';
                jizhen_gubeikou_style = 'greatWall:jizhen_gubeikou_no';
                jizhen_shitanglu_style = 'greatWall:jizhen_shitanglu_no';
                jizhen_caojialu_style = 'greatWall:jizhen_caojialu_no';
                xuanfu_bushulu_style = 'greatWall:xuanfu_bushulu_no';
                xuanfu_shangxilu_style = 'greatWall:xuanfu_shangxilu_no';
                xuanfu_xiaxilu_style = 'greatWall:xuanfu_xiaxilu_no';
                xuanfu_shangbeilu_style = 'greatWall:xuanfu_shangbeilu_no';
                xuanfu_xiabeilu_style = 'greatWall:xuanfu_xiabeilu_no';
                xuanfu_zhonglu_style = 'greatWall:xuanfu_zhonglu_no';
                xuanfu_donglu_style = 'greatWall:xuanfu_donglu_no';
                xuanfu_nanlu_style = 'greatWall:xuanfu_nanlu_no';
                xuanfu_nanshan_style = 'greatWall:xuanfu_nanshan_no';
                datong_east_style = 'greatWall:datong_east_no';
                datong_jingping_style = 'greatWall:datong_jingping_no';
                datong_north_east_style = 'greatWall:datong_north_east_no';
                datong_north_west_style = 'greatWall:datong_north_west_no';
                datong_weiyuan_style = 'greatWall:datong_weiyuan_no';
                datong_west_style = 'greatWall:datong_west_no';
                datong_xinping_style = 'greatWall:datong_xinping_no';
                datong_zhonglu_style = 'greatWall:datong_zhonglu_no';
                datong_bushulu_style = 'greatWall:datong_bushulu_no';
                shanxi_east_style = 'greatWall:shanxi_east_no';
                shanxi_beilou_style = 'greatWall:shanxi_beilou_no';
                shanxi_zhonglu_style = 'greatWall:shanxi_zhonglu_no';
                shanxi_west_style = 'greatWall:shanxi_west_no';
                shanxi_hebao_style = 'greatWall:shanxi_hebao_no';
                yulin_east_style = 'greatWall:yulin_east_no';
                yulin_west_style = 'greatWall:yulin_west_no';
                yulin_zhonglu_style = 'greatWall:yulin_zhonglu_no';
                ningxia_east_style = 'greatWall:ningxia_east_no';
                ningxia_zhonglu_style = 'greatWall:ningxia_zhonglu_no';
                ningxia_north_style = 'greatWall:ningxia_north_no';
                ningxia_south_style = 'greatWall:ningxia_south_no';
                ningxia_west_style = 'greatWall:ningxia_west_no';
                guyuan_xiamafang_style = 'greatWall:guyuan_xiamafang_no';
                guyuan_jinglu_style = 'greatWall:guyuan_jinglu_no';
                guyuan_lanzhou_style = 'greatWall:guyuan_lanzhou_no';
                guyuan_hezhou_style = 'greatWall:guyuan_hezhou_no';
                guyuan_lutang_style = 'greatWall:guyuan_lutang_no';
                gansu_zhuanglang_style = 'greatWall:gansu_zhuanglang_no';
                gansu_dajing_style = 'greatWall:gansu_dajing_no';
                gansu_liangzhou_style = 'greatWall:gansu_liangzhou_no';
                gansu_zhenyu_style = 'greatWall:gansu_zhenyu_no';
                gansu_suzhou_style = 'greatWall:gansu_suzhou_no';
            }
            createCityMap();
            // clearMap();
        }


        {
            //调用辽东镇地图
            {
                //调用辽东镇-开原路地图
                if ($("#liaodong_kaiyuan").is(":checked")) {
                    map.addLayer(liaodong_kaiyuan);
                }
                //调用辽东镇-叆阳城地图
                if ($("#liaodong_aiyang").is(":checked")) {
                    map.addLayer(liaodong_aiyang);
                }
                //辽东镇-广宁分司
                if ($("#liaodong_guangning").is(":checked")) {
                    map.addLayer(liaodong_guangning);
                }
                //辽东镇-前屯路
                if ($("#liaodong_qiantun").is(":checked")) {
                    map.addLayer(liaodong_qiantun);
                }
                //辽东镇-义州路
                if ($("#liaodong_yizhou").is(":checked")) {
                    map.addLayer(liaodong_yizhou);
                }
                //辽东镇-辽阳东
                if ($("#liaodong_liaoyang").is(":checked")) {
                    map.addLayer(liaodong_liaoyang);
                }
            }

            //调用蓟镇地图
            {
                if ($("#jizhen_shanhai").is(":checked")) {
                    map.addLayer(jizhen_shanhailu);
                }
                if ($("#jizhen_shimen").is(":checked")) {
                    map.addLayer(jizhen_shimenlu);
                }
                if ($("#jizhen_taitou").is(":checked")) {
                    map.addLayer(jizhen_taitoulu);
                }
                if ($("#jizhen_yanhe").is(":checked")) {
                    map.addLayer(jizhen_yanhelu);
                }
                if ($("#jizhen_taiping").is(":checked")) {
                    map.addLayer(jizhen_taipinglu);
                }
                if ($("#jizhen_malan").is(":checked")) {
                    map.addLayer(jizhen_malanlu);
                }
                if ($("#jizhen_xifeng").is(":checked")) {
                    map.addLayer(jizhen_xifengkou);
                }
                if ($("#jizhen_songpeng").is(":checked")) {
                    map.addLayer(jizhen_songpenglu);
                }
                if ($("#jizhen_qiangzi").is(":checked")) {
                    map.addLayer(jizhen_qiangzilu);
                }
                if ($("#jizhen_gubeikou").is(":checked")) {
                    map.addLayer(jizhen_gubeikou);
                }
                if ($("#jizhen_shitang").is(":checked")) {
                    map.addLayer(jizhen_shitanglu);
                }
                if ($("#jizhen_caojia").is(":checked")) {
                    map.addLayer(jizhen_caojialu);
                }

            }

            //调用宣府镇地图
            {
                if ($("#xuanfu_bushulu").is(":checked")) {
                    map.addLayer(xuanfu_bushulu);
                }
                if ($("#xuanfu_shangxilu").is(":checked")) {
                    map.addLayer(xuanfu_shangxilu);
                }
                if ($("#xuanfu_xiaxilu").is(":checked")) {
                    map.addLayer(xuanfu_xiaxilu);
                }
                if ($("#xuanfu_shangbeilu").is(":checked")) {
                    map.addLayer(xuanfu_shangbeilu);
                }
                if ($("#xuanfu_xiabeilu").is(":checked")) {
                    map.addLayer(xuanfu_xiabeilu);
                }
                if ($("#xuanfu_zhonglu").is(":checked")) {
                    map.addLayer(xuanfu_zhonglu);
                }
                if ($("#xuanfu_east").is(":checked")) {
                    map.addLayer(xuanfu_donglu);
                }
                if ($("#xuanfu_south").is(":checked")) {
                    map.addLayer(xuanfu_nanlu);
                }
                if ($("#xuanfu_nanshan").is(":checked")) {
                    map.addLayer(xuanfu_nanshan);
                }
            }

            //调用大同镇地图
            {
                if ($("#datong_east").is(":checked")) {
                    map.addLayer(datong_east);
                }
                if ($("#datong_jingping").is(":checked")) {
                    map.addLayer(datong_jingping);
                }
                if ($("#datong_north_east").is(":checked")) {
                    map.addLayer(datong_north_east);
                }
                if ($("#datong_north_west").is(":checked")) {
                    map.addLayer(datong_north_west);
                }
                if ($("#datong_weiyuan").is(":checked")) {
                    map.addLayer(datong_weiyuan);
                }
                if ($("#datong_west").is(":checked")) {
                    map.addLayer(datong_west);
                }
                if ($("#datong_xinping").is(":checked")) {
                    map.addLayer(datong_xinping);
                }
                if ($("#datong_zhonglu").is(":checked")) {
                    map.addLayer(datong_zhonglu);
                }
                if ($("#datong_bushulu").is(":checked")) {
                    map.addLayer(datong_bushulu);
                }
            }

            //调用山西镇地图
            {
                if ($("#shanxi_east").is(":checked")) {
                    map.addLayer(shanxi_east);
                }
                if ($("#shanxi_beilou").is(":checked")) {
                    map.addLayer(shanxi_beilou);
                }
                if ($("#shanxi_zhonglu").is(":checked")) {
                    map.addLayer(shanxi_zhonglu);
                }
                if ($("#shanxi_west").is(":checked")) {
                    map.addLayer(shanxi_west);
                }
                if ($("#shanxi_hebao").is(":checked")) {
                    map.addLayer(shanxi_hebao);
                }
            }

            //调用榆林镇地图
            {
                if ($("#yulin_east").is(":checked")) {
                    map.addLayer(yulin_east);
                }
                if ($("#yulin_west").is(":checked")) {
                    map.addLayer(yulin_west);
                }
                if ($("#yulin_zhonglu").is(":checked")) {
                    map.addLayer(yulin_zhonglu);
                }
            }

            //调用宁夏镇地图
            {
                if ($("#ningxia_east").is(":checked")) {
                    map.addLayer(ningxia_east);
                }
                if ($("#ningxia_zhonglu").is(":checked")) {
                    map.addLayer(ningxia_zhonglu);
                }
                if ($("#ningxia_north").is(":checked")) {
                    map.addLayer(ningxia_north);
                }
                if ($("#ningxia_south").is(":checked")) {
                    map.addLayer(ningxia_south);
                }
                if ($("#ningxia_west").is(":checked")) {
                    map.addLayer(ningxia_west);
                }
            }

            //调用固原镇地图
            {
                if ($("#guyuan_xiamafang").is(":checked")) {
                    map.addLayer(guyuan_xiamafang);
                }
                if ($("#guyuan_jinglu").is(":checked")) {
                    map.addLayer(guyuan_jinglu);
                }
                if ($("#guyuan_lanzhou").is(":checked")) {
                    map.addLayer(guyuan_lanzhou);
                }
                if ($("#guyuan_hezhou").is(":checked")) {
                    map.addLayer(guyuan_hezhou);
                }
                if ($("#guyuan_lutang").is(":checked")) {
                    map.addLayer(guyuan_lutang);
                }
            }

            //调用甘肃镇地图
            {
                if ($("#gansu_zhuanglang").is(":checked")) {
                    map.addLayer(gansu_zhuanglang);
                }
                if ($("#gansu_dajing").is(":checked")) {
                    map.addLayer(gansu_dajing);
                }
                if ($("#gansu_liangzhou").is(":checked")) {
                    map.addLayer(gansu_liangzhou);
                }
                if ($("#gansu_zhenyu").is(":checked")) {
                    map.addLayer(gansu_zhenyu);
                }
                if ($("#gansu_suzhou").is(":checked")) {
                    map.addLayer(gansu_suzhou);
                }
            }
        }

        //长城墙体
        {
            //土墙
            if ($("#cob_wall").is(":checked")) {
                map.addLayer(cob_wall);
            }
            //石墙
            if ($("#stone_wall").is(":checked")) {
                map.addLayer(stone_wall);
            }

            //砖墙
            if ($("#brick_wall").is(":checked")) {
                map.addLayer(brick_wall);
            }

            //山险墙
            if ($("#precipitous_wall").is(":checked")) {
                map.addLayer(precipitous_wall);
            }

            //山险
            if ($("#precipitous").is(":checked")) {
                map.addLayer(precipitous);
            }

            //河险
            if ($("#risk_river").is(":checked")) {
                map.addLayer(risk_river);
            }

            //其他墙体
            if ($("#other_wall").is(":checked")) {
                map.addLayer(other_wall);
            }

            //消失的长城
            if ($("#disappear_wall").is(":checked")) {
                map.addLayer(disappear_wall);
            }
        }

        //墙上单体
        {
            //敌台
            if ($("#enemy_tower").is(":checked")) {
                map.addLayer(on_wall_enemy_tower);
            }
            //马面
            if ($("#horse_face").is(":checked")) {
                map.addLayer(on_wall_horse_face);
            }
            //水门
            if ($("#water_door_on_wall").is(":checked")) {
                map.addLayer(on_wall_water_door);
            }
            //城楼
            if ($("#gate_tower").is(":checked")) {
                map.addLayer(on_wall_gate_tower);
            }
            //铺房
            if ($("#shop_room").is(":checked")) {
                map.addLayer(on_wall_shop_room);
            }
            //烽火台
            if ($("#smoke_tower").is(":checked")) {
                map.addLayer(on_wall_smoke_tower);
            }
        }

        //墙外单体
        {
            //墩台
            if ($("#pier").is(":checked")) {
                map.addLayer(pier);
            }
            //烽火台
            if ($("#smoke_tower_out_wall").is(":checked")) {
                map.addLayer(smoke_tower_out_wall);
            }
            //其他遗址
            if ($("#other_arch").is(":checked")) {
                map.addLayer(other_arch);
            }
        }

        //关隘
        {
            //水关
            if ($("#guanai_water_door").is(":checked")) {
                map.addLayer(guanai_water_door);
            }
        }

    });
}

// //调用wfs方法
// function wfs(name) {
//     var wfsParams = {
//         service : 'WFS',
//         version : '1.0.0',
//         request : 'GetFeature',
//         typeName : name,  //图层名称
//         viewparams:'p_x:10',
//         outputFormat : 'text/javascript',  //重点，不要改变
//         format_options : 'callback:loadFeatures'  //回调函数声明
//
//     };
//     var vectorSource = new ol.source.Vector({
//         format: new ol.format.GeoJSON(),
//         loader: function(extent, resolution, projection) {  //加载函数
//             var url = 'http://localhost:8080/geoserver/wfs';
//             $.ajax({
//                 url: url,
//                 data : $.param(wfsParams),   //传参
//                 type : 'GET',
//                 dataType: 'jsonp',   //解决跨域的关键
//                 jsonpCallback:'loadFeatures'  //回调
//             });
//         },
//         strategy: ol.loadingstrategy.tile(new ol.tilegrid.createXYZ({
//             maxZoom: 25
//         })),
//         projection: 'EPSG:4326'
//     });
//     //回调函数使用
//     window.loadFeatures = function(response) {
//         vectorSource.addFeatures((new ol.format.GeoJSON({
//             geometryName: 'geom'//改成geom，要素则不显示在界面上
//         })).readFeatures(response));  //载入要素
//     };
//     var vectorLayer = new ol.layer.Vector({
//         source: vectorSource,
//         style: new ol.style.Style({
//             image: new ol.style.Circle({
//                 radius: 6,
//                 fill: new ol.style.Fill({
//                     color: 'blue'
//                 })
//             })
//         })
//     });
//     return vectorLayer;
// }
// //弹窗功能
// {
//     //实现高亮显示
//     var featureOverlay = new ol.layer.Vector({
//         source: new ol.source.Vector(),
//         map: map,
//         style: new ol.style.Style({
//             image: new ol.style.Circle({
//                 radius: 5,
//                 fill: null,
//                 stroke: new ol.style.Stroke({color: 'red', width: 20})
//             })
//         })
//     });
//     var highlight;
//
//     var displayFeatureInfo = function (pixel, coordinate) {
//         var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
//             return feature;
//         });
//         var element = popup.getElement();   // 获取充当弹窗的DOM元素
//         $(element).popover('destroy');
//         if (feature) {
//             var img_path = feature.getProperties()['name'];
//             var save_condition_pop = feature.getProperties()['name'];
//             console.log(save_condition_pop);
//
//             // var img_name_split=img_path.toString().split("/");
//             // var img_name_1='../'+img_name_split[1];
//             // for (i=2;i<img_name_split.length-1;i++)
//             // {
//             //     img_name_1=img_name_1+'/'+img_name_split[i];
//             // }
//             // img_name_1=img_name_1+'/'+img_name_split[img_name_split.length-1].toString().split(".")[0]+'.jpg';//一定要小写
//             // img_name_1=img_name_1.replace(/\s+/g,"%20");
//             // img_path_html=img_path_html+'<td><img id="img_gallery_td" src='+img_name_1+' onclick="viewPic()"></td>';
//
//             // var popup_flag = document.getElementsByName("show_popup")[0].checked;
//             var popup_flag = true;
//             if (popup_flag) {
//                 popup.setPosition(coordinate);  // 将弹窗位置设置为鼠标点击处
//                 $(element).popover({
//                     placement: 'top',
//                     animation: false,
//                     html: true,
//                     content: '<p style="height: 50px;width: 100px">城池名称：</p><code>' + feature.getProperties()['name'] + '</code>' +
//                         '<p style="height: 50px;width: 100px">城池等级：</p><code>' + feature.getProperties()['militaryra'] + '</code>'
//                 });
//                 $(element).popover('show');
//                 // console.log(img_name_1);//高度
//             } else {
//                 var element = popup.getElement();   // 获取充当弹窗的DOM元素
//                 $(element).popover('name');
//             }
//         }
//         if (feature != highlight) {
//             if (highlight) {
//                 featureOverlay.getSource().removeFeature(highlight);
//             }
//             if (feature) {
//                 featureOverlay.getSource().addFeature(feature);
//             }
//             highlight = feature;
//         }
//     };
//     // 用户点击地图就会弹出来的弹窗
//     var popup = new ol.Overlay({
//         element: document.getElementById('popup')
//     });
//     map.addOverlay(popup);
//
//     map.on('click', function (evt) {
//         // selectedFeatures.clear();
//         displayFeatureInfo(evt.pixel, evt.coordinate);
//         // modifyWFS(evt.pixel);
//         pixel = evt.pixel;
//         // if(show_all_map_flag){
//         //     show_all_map();
//         // }
//         // else{
//         //     show_pro_map();
//         // }
//         var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
//             console.log(feature);
//         });
//     });
// }
// var wfs_layer=wfs('datong_bushulu');
// map.addLayer(wfs_layer);
