
var map;
var map2;
var view;
var view2;
var viewer;
var scene;//记录中心模型
var center;

var r = 200;
const count = 6;
const entityCount = 6;
var features = new Array(entityCount); //加点时使用
var coordinates = new Array(count);

	coordinates[0] = [103.6058, 31.0078];//安澜索桥
	coordinates[1] = [103.60710, 31.00870];//安澜索桥陈列馆
	coordinates[2] = [103.60757, 31.00903];//yanGongTang
	coordinates[3] = [103.60805, 31.00832];//erWangMiao1
	coordinates[4] = [103.6080501, 31.0083201];//erWangMiao2
	coordinates[5] = [103.60834, 31.008275];//erWangMianFuShuJianZhu

	
//无地形版
var height = new Array(count);

	height[0] = -28;
	height[1] = 8;
	height[2] = 45;
	height[3] = 28;
	height[4] = 26.3;
	height[5] = 10;
	
	
var buttonVisual = 1;
var longitude = 0;
var latitude = 0;
var entity = new Array(entityCount);

var model;

var name2222 = new Array( "安澜索桥", "安澜索桥陈列馆", "堰功堂", "二王庙", "二王庙附属", "二王庙售票");


function loadMap(){
	//地图的定义 
	
	view = new ol.View({
		projection: 'EPSG:4326',
		center:[103.6091, 31.0055],
		zoom: 16
	})
	map = new ol.Map({
		target: 'map',
		controls: ol.control.defaults({
			attributionOptions: ({
			  collapsible: false
			})
		}),
		renderer: 'canvas',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.XYZ({
					projection:"EPSG:4326",
					//attributions: [attribution],
					url: 'http://www.scgis.net.cn/iMap/iMapServer/DefaultRest/services/newtianditudlg/tile/{z}/{y}/{x}.png'
				})
			})],
		view: view
	})
	view2 = new ol.View({
        projection: 'EPSG:4326',
		center:[103.6091, 31.0055],
		zoom: 18
    });
	map2 = new ol.Map({
		target: 'map2',
		controls: ol.control.defaults({
			attributionOptions: ({
			  collapsible: false
			})
		}),
		renderer: 'canvas',
		layers:[ 
			new ol.layer.Tile({
				source: new ol.source.XYZ({
					projection:"EPSG:4326",
					//attributions: [attribution],
					url: 'http://www.scgis.net.cn/iMap/iMapServer/DefaultRest/services/newtianditudlg/tile/{z}/{y}/{x}.png'
				})
			})],
		view: view2
	})
	//显示经纬度
	map.addControl(new ol.control.MousePosition({
	  undefinedHTML: '',
	  projection: 'EPSG:4326', 
	  coordinateFormat: function(coordinate) {
	      return ol.coordinate.format(coordinate, '{x}, {y}', 4); 
	  }              
  })
	);
	addCesium();
	addPoints(); 
	addtransition();
}


function addPoints(){
	var nameM;
	var feature1;
	var textFill = new ol.style.Fill({
		color: '#5B5B5B'
	});
	var textStroke = new ol.style.Stroke({
		color: '#FFFFFF',
		width: 1
	});	
	
	for (var i = 0; i < entityCount; ++i) {     
		features[i] = new ol.Feature(new ol.geom.Point(coordinates[i])); 
		feature1 = features[i];
		nameM = name2222[i];
		feature1.set('nameM', nameM); 
		
		var style = new ol.style.Style({
			image: new ol.style.Icon({
				src: 'image/house1.png'
			}),
			text: new ol.style.Text({
				text: nameM,
				fill: textFill,
				stroke: textStroke,
				offsetX: -5,
				offsetY: -20
			})
		});
		
		feature1.setStyle(style);
	}
	
	var source1 = new ol.source.Vector({
		features: features
	});  

	
	var pointsLayer = new ol.layer.Vector({
		source: source1
		//style: styleFunction
	});
	
	map.addLayer(pointsLayer);  
	map2.addLayer(pointsLayer);
}

function addtransition(){

	var Modernizr = window.Modernizr;
	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		current = 0;
	var divcss;
		
		
	function init() {
		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );
		$pages.eq( current ).addClass( 'pt-page-current' );		
		var select = new ol.interaction.Select();
		map.addInteraction(select); 	
		var p;
		select.on('select', function(e) {
  			//console.log(e.selected[0].q.geometry.j[0]);
			if(e.selected[0]!=undefined){
				longitude = e.selected[0].q.geometry.j[0];
				latitude = e.selected[0].q.geometry.j[1];
				chooseEntities(longitude , latitude);
				nextPage(58);	
				var t = setTimeout("document.getElementById( 'returnButton' ).style.visibility ='visible';",600,"JavaScript"); 	
				var t2 = setTimeout("document.getElementById( 'map2' ).style.visibility ='visible';",600,"JavaScript");
				var t3 = setTimeout("document.getElementById( 'container' ).style.visibility ='visible';",600,"JavaScript");
				view2.setCenter([longitude, latitude]);
				view2.setZoom(18);
				
				scene.primitives.remove(p);
				//缓冲区
				var sphere = new Cesium.SphereGeometry({
					vertexFormat : Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
					radius : r
				});
				p = scene.primitives.add(new Cesium.Primitive({
					geometryInstances : new Cesium.GeometryInstance({
						geometry : Cesium.SphereGeometry.createGeometry(sphere),
						modelMatrix : Cesium.Matrix4.multiplyByTranslation(
							Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(longitude, latitude)),
							new Cesium.Cartesian3(0.0, 0.0, 0.0), new Cesium.Matrix4()),
						attributes : {
							color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(0, 0.749, 1, 0.15))
						}
					}),
					appearance : new Cesium.PerInstanceColorAppearance({
						closed: true
					})
				}));
				changeTable();
			}
		});
		var select2 = new ol.interaction.Select();
		map2.addInteraction(select2);
		select2.on('select', function(e) {
  			//console.log(e.selected[0].q.geometry.j[0]);
			if(e.selected[0]!=undefined){
				longitude = e.selected[0].q.geometry.j[0];
				latitude = e.selected[0].q.geometry.j[1];
				chooseEntities(longitude , latitude);
				view2.setCenter([longitude, latitude]);
				view2.setZoom(18);
				
				//缓冲区
				scene.primitives.remove(p);
				var sphere = new Cesium.SphereGeometry({
					vertexFormat : Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
					radius : r
				});
				p = scene.primitives.add(new Cesium.Primitive({
					geometryInstances : new Cesium.GeometryInstance({
						geometry : Cesium.SphereGeometry.createGeometry(sphere),
						modelMatrix : Cesium.Matrix4.multiplyByTranslation(
							Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(longitude, latitude)),
							new Cesium.Cartesian3(0.0, 0.0, 0.0), new Cesium.Matrix4()),
						attributes : {
							color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(0, 0.749, 1, 0.15))
						}
					}),
					appearance : new Cesium.PerInstanceColorAppearance({
						closed: true
					})
				}));
				changeTable();
			}
		});	
		var button = document.getElementById( "returnButton" );
		var map_mini = document.getElementById( "map2" );
		var table = document.getElementById( "container" );
		button.onclick = function (){ 
			nextPage(59); 
			//$( "#dialog" ).dialog( "close" );
			button.style.visibility = "hidden";
			map_mini.style.visibility = "hidden";
			table.style.visibility = "hidden";
			view.setCenter([103.6091, 31.0055]);
			view.setZoom(16);
		};
	}
  
	
	function nextPage( animation ) {
		if(current == 0){
			var $currPage = $pages.eq( current );
			current++;
			var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', inClass = '';	
			
		}
		else{
			var $currPage = $pages.eq( current );
			current--;
			var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', inClass = '';
		}
		switch( animation ) {

			case 58:
				outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeLeftIn';
				break;
			case 59:
				outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeRightIn';
				break;


		}
		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			onEndAnimation( $currPage, $nextPage );
		} );
		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			onEndAnimation( $currPage, $nextPage );
		} );
	}
	
	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}
	init();
}

function addCesium(){
	viewer = new Cesium.Viewer("cesiumContainer", {
		animation: false,  //是否显示动画控件
		baseLayerPicker: true, //是否显示图层选择控件
		geocoder: true, //是否显示地名查找控件
		timeline: false, //是否显示时间线控件
		sceneModePicker: false, //是否显示投影方式控件
		navigationHelpButton: false, //是否显示帮助信息控件
		infoBox: true,  //是否显示点击要素之后显示的信息
		selectionIndicator:false
		/*国家天地图矢量地图加载
		imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
        url:'http://t5.tianditu.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg'
    }),*/
	})
	//地球不显示时使用viewer.imageryLayers.removeAll()
	viewer.cesiumWidget.creditContainer.remove();//去掉最下面那排字的
	//viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
	
	//scene.screenSpaceCameraController.enableZoom = false;
	
	var imageryLayers= viewer.scene.imageryLayers;
	layer=imageryLayers.addImageryProvider(new bWMTSImageryProvider({
		url:'http://www.scgis.net.cn/iMap/iMapServer/DefaultRest/services/sctilemap_dom_dom//tile/'
		//url:'http://www.scgis.net.cn/imap/imapserver/defaultrest/services/sctilemap/tile/'
	}))


	
	 scene = viewer.scene;
	 var labelEntity = viewer.entities.add({
		//position : Cesium.Cartesian3.fromDegrees(103.6105, 30.9996, 10),
        label : {
            show : true,
            horizontalOrigin : Cesium.HorizontalOrigin.LEFT
        }
    });

	
	var c=0;
	uriString = 'models/duJiangYan/anLanSuoQiao.gltf';
	modelName = '安澜索桥';
	describe = '<img src = "image/安澜索桥1.jpg" alt="安澜索桥"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"> <p>your browser does not support HTML5 video</p></video><p> <a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a> <br><a href="http://baike.baidu.com/view/389768.htm">安澜索桥百度百科</a><br><br>安澜索桥位于四川省都江堰市,又名“安澜桥”、“夫妻桥”、“何公何母桥”。全长240多公尺，飞架岷江南北，横跨都江堰水利工程，是古代四川西部与阿坝之间的商业要道，是藏、汉、羌族人民的联系纽带。</p><h1>结构</h1><p>安澜索桥始建于宋代以前，明末毁于战火。索桥以木排石墩承托，用粗如碗口的竹缆横飞江面，上铺木板为桥面，两旁以竹索为栏，全长约500米。现在的桥，下移100多米，将竹改为钢，承托缆索的木桩桥墩改为混凝土桩。坐落于都江堰首鱼嘴上，被誉为中国古代五大桥梁，是都江堰最具特征的景观。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/anLanSuoQiaoChenLieGuanDeng.gltf';
	modelName = '安澜索桥陈列馆';
	describe = '<img src = "image/安澜索桥1.jpg" alt="安澜索桥"><h1>简介</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"> <p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/389768.htm">安澜索桥百度百科</a><br><br>安澜索桥位于四川省都江堰市,又名“安澜桥”、“夫妻桥”、“何公何母桥”。全长240多公尺，飞架岷江南北，横跨都江堰水利工程，是古代四川西部与阿坝之间的商业要道，是藏、汉、羌族人民的联系纽带。</p><h1>结构</h1><p>安澜索桥始建于宋代以前，明末毁于战火。索桥以木排石墩承托，用粗如碗口的竹缆横飞江面，上铺木板为桥面，两旁以竹索为栏，全长约500米。现在的桥，下移100多米，将竹改为钢，承托缆索的木桩桥墩改为混凝土桩。坐落于都江堰首鱼嘴上，被誉为中国古代五大桥梁，是都江堰最具特征的景观。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
    c++;
    uriString = 'models/duJiangYan/yanGongTang.gltf';
    modelName = '堰功堂';
    describe = '<img src = "image/秦堰楼.jpg" alt="都江堰"><h1>简介</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
    star= "★★★";
    entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
    c++;
	uriString = 'models/duJiangYan/erWangMiao1.gltf';
	modelName = '二王庙';
	describe = '<img src = "image/二王庙1.jpg" alt="二王庙"><h1>简介</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
    c++;
	uriString = 'models/duJiangYan/erWangMiao2.gltf';
	modelName = '二王庙';
	describe = '<img src = "image/二王庙1.jpg" alt="二王庙"><h1>简介</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★★★";
    entity[c] =addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe,star);
    c++;
    uriString = 'models/duJiangYan/erWangMiaoShouPiaoChu.gltf';
    modelName = '二王庙售票处';
    describe = '<img src = "image/二王庙1.jpg" alt="二王庙售票处"><h1>简介</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
    star= "其他";
    entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);


}

function chooseEntities(lon , lat){
	switch(lon){
		case coordinates[0][0]: 
			if(lat==coordinates[0][1]){
				viewer.trackedEntity = entity[0];
				center = entity[0];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[1][0]:
			if(lat==coordinates[1][1]){
				viewer.trackedEntity = entity[1];
				center = entity[1];

			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[2][0]: 
			if(lat==coordinates[2][1]){
				viewer.trackedEntity = entity[2];
				center = entity[2];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[3][0]: 
			if(lat==coordinates[3][1]){
				viewer.trackedEntity = entity[3];
				center = entity[3];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[4][0]: 
			if(lat==coordinates[4][1]){
				viewer.trackedEntity = entity[4];
				center = entity[4];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[5][0]:
			if(lat==coordinates[5][1]){
				viewer.trackedEntity = entity[5];
				center = entity[5];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;

		default: {
			alert("TAT神奇的事情发生了，目前不明原因")
			viewer.trackedEntity = entity[1];
			center = entity[1];
		}
	}
	
}
	
//文字添加
function addLabel(enti){
	var cartographic =  Cesium.Ellipsoid.WGS84.cartesianToCartographic(enti.position.getValue());
	var longitudeSring = Cesium.Math.toDegrees(cartographic.longitude).toFixed(6);
	var latitudeSring = Cesium.Math.toDegrees(cartographic.latitude).toFixed(6);
	var labelEntity = viewer.entities.add({
		position : Cesium.Cartesian3.fromDegrees(longitudeSring, latitudeSring, cartographic.height+20),
		label : {
			text : enti.name,
			fillColor : Cesium.Color.LAVENDAR_BLUSH,
			outlineColor : Cesium.Color.LAVENDAR_BLUSH,
			outlineWidth : 1,
			style : Cesium.LabelStyle.FILL_AND_OUTLINE,
			show : true,
			horizontalOrigin : Cesium.HorizontalOrigin.LEFT,
			pixelOffsetScaleByDistance : new Cesium.NearFarScalar(0, 1.0, 2000, 0.5),
			translucencyByDistance : new Cesium.NearFarScalar(0, 1.0, 1000, 0)
		}
	});
}
	
function addEntities(uriString, modelName, lon, lat, height, descrip, star){
	var entity;
	model=new Cesium.ModelGraphics({
		uri:uriString
	})
	entity=viewer.entities.add({
		name:modelName,
		star:star,
		position:Cesium.Cartesian3.fromDegrees(lon, lat, height),
		model:model		
	})
	entity.description = descrip;
	addLabel(entity);//添加文字注记
	
	return entity;
}



//nearbyPlaceNum.Length
function changeTable(){
	var t=document.getElementById("zebra");
	var a=document.getElementById("name");
	a.innerText = center.name+" 附近景点";
	var nearbyPlaceNum = new Array(0);
	nearbyPlaceNum = getNearby();
	if(t.rows.length>2){//每次初始化表格时，删除除表头和第一行以外的行。
		var i = 2;
		while(i < t.rows.length){
			t.deleteRow(i);
		}
	}
	
	if(nearbyPlaceNum.length <= 0){//如果附近没有，则显示无
		t.rows[1].cells[0].innerText = "无";
		t.rows[1].cells[1].innerText = "0";
	}
	else if(nearbyPlaceNum.length == 1){//如果只有一个，则对第一行进行修改
			t.rows[1].cells[0].innerText = entity[nearbyPlaceNum[0]].name;
			t.rows[1].cells[1].innerText = entity[nearbyPlaceNum[0]].star;
		}
		else{//第一行为修改，其后每行需添加后修改内容
			t.rows[1].cells[0].innerText = entity[nearbyPlaceNum[0]].name;
			t.rows[1].cells[1].innerText = entity[nearbyPlaceNum[0]].star;
			var x,y,z;
			for(var i = 2; i <= nearbyPlaceNum.length;i++){
				x=t.insertRow(2);
				y=x.insertCell(0);
				z=x.insertCell(1);
				y.innerText = entity[nearbyPlaceNum[i-1]].name;
				z.innerText = entity[nearbyPlaceNum[i-1]].star;
			}
		}
	
}
		
function getNearby(){
	var x1 = center.position.getValue().x;
	var y1 = center.position.getValue().y;
	var z1 = center.position.getValue().z;
	var x2;
	var y2;
	var z2;
	var distance;
	var c = 0;
	var near = new Array(0);
	for(var i = 0; i < entityCount - 1; i++){
		x2 = entity[i].position.getValue().x;
		y2 = entity[i].position.getValue().y;
		z2 = entity[i].position.getValue().z;
		if((x2 - x1)>r || (y2 - y1)>r || (z2 - z1)>r)
			continue;
		else{
			if((x2 - x1)<0.001 && (y2 - y1)<0.001 && (z2 - z1)<0.001)
				continue;
			else{
				distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2) + Math.pow((z2-z1),2));
				if(distance < r){
					near[c] = i;
					c++;
				}
			}
		}
	}
	return near;
}
window.onload = loadMap;

