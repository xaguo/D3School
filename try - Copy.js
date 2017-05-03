
var map;
var map2;
var view;
var view2;
var viewer;
var scene;//记录中心模型
var center;
var labelEntity;

var r = 200;
const count = 37;
const entityCount = 24;
var features = new Array(entityCount); //加点时使用
var coordinates = new Array(count);
	coordinates[0] = [103.60622, 31.00702];//shuiLiWenHuaZhanTing
	coordinates[1] = [103.61403, 30.99907];//南桥
	coordinates[2] = [103.60855, 31.00678];//512地震遗迹
	coordinates[3] = [103.6058, 31.0078];//安澜索桥
	coordinates[4] = [103.60710, 31.00870];//安澜索桥陈列馆	
	coordinates[5] = [103.611553, 31.005918];//步云廊扶梯
	coordinates[6] = [103.61338, 31.00270];//财神殿
	coordinates[7] = [103.61362, 31.00227];//chengHuangMiao
	coordinates[8] = [103.6078, 31.00925];//chuangkexuezhishui
	coordinates[9] = [103.60871, 31.00896];//erWangMiaoShouPiaoChu
	coordinates[10] = [103.6088, 31.0070];//fuYunTing 在哪儿？？
	coordinates[11] = [103.60492, 31.00858];//guanGuanCheShouPiaoChu
	coordinates[12] = [103.6106, 30.9995];//guShuWuMuGuan
	coordinates[13] = [103.60881, 31.00658];//jingXiuZhiZhiShuiDeZhenFang
	coordinates[14] = [103.6036, 31.0117];//juChang
	coordinates[15] = [103.60560, 31.01099];//minJiangYuanFanZhuang
	coordinates[16] = [103.61565, 31.0042];//wenMiao
	coordinates[17] = [103.611415, 31.00321];//xuanWeiMen
	coordinates[18] = [103.60757, 31.00903];//yanGongTang
	coordinates[19] = [103.6103, 31.00745];//yuLeiShanShouPiaoKou
	coordinates[20] = [103.60145, 31.01438];//yuLeiShanSuiDao
	coordinates[21] = [103.61253, 31.00417];//yuLeiWangQingTing
	coordinates[22] = [103.6100, 31.0058];//yuWangGong
	coordinates[23] = [103.60805, 31.00832];//erWangMiao1

	coordinates[24] = [103.6080501, 31.0083201];//erWangMiao2
	coordinates[25] = [103.60835, 31.00107];//bridge2
	coordinates[26] = [103.60146, 31.01438];//bumingtaizi
	coordinates[27] = [103.6071, 31.0062];//siyuanchashe（卫生间）
	coordinates[28] = [103.61555, 31.00523];//wenMiaoJuMinQu1
	coordinates[29] = [103.61508, 31.00405];//wenMiaoJuMinQu2
	coordinates[30] = [103.61503, 31.00232];//wenMiaoXiaBuFenQiTaJianZhu
	coordinates[31] = [103.61285, 31.00105];//wenMiaoXiaJuMinDi
	coordinates[32] = [103.6075, 31.0050];//xiaoJian (Error)
	coordinates[33] = [103.611765, 31.00627];//yuLeiShanQiTaJianZhu1
	coordinates[34] = [103.6119, 31.0063];//yuLeiShanQiTaJianZhu2
	coordinates[35] = [103.60834, 31.008275];//erWangMianFuShuJianZhu
	coordinates[36] = [103.61192, 31.00285];//wenMiaoDuanQiTaJianZhu
	coordinates[37] = [103.6085, 31.00535];//shu
	coordinates[38] = [103.6090, 31.0058];//dem

	
	
	
//无地形版
var height = new Array(count);
	height[0] = 0;
	height[1] = -10;
	height[2] = 3;
	height[3] = -28;
	height[4] = 8;		
	height[5] = 71;
	height[6] = 26;
	height[7] = -4;
	height[8] = 59; 	
	height[9] = 72.5; 
	height[10] = 20; 
	height[11] = 0; 
	height[12] = -0.5; 
	height[13] = 6; 
	height[14] = 6; 
	height[15] = 19; 	
	height[16] = 0; 	
	height[17] = 52; 
	height[18] = 45; 	
	height[19] = 81; 
	height[20] = 10; 
	height[21] = 127; 
	height[22] = 23; 
	height[23] = 28; 
	
	height[24] = 26.3; 	
	height[25] = -4.8;
	height[26] = 10;	
	height[27] = 5; 	
	height[28] = 2; 
	height[29] = 0; 
	height[30] = 0; 
	height[31] = 0; 
	height[32] = 25; 
	height[33] = 7; 
	height[34] = 10; 
	height[35] = 10; 
	height[36] = 45;
	height[37] = -8;
	height[38] = -16;
	
/*加载地形版
var height = new Array(count);
	height[0] = 690;
	height[1] = 690;
	height[2] = 700;
	height[3] = 690;
	height[4] = 690;		
	height[5] = 760;
	height[6] = 730;
	height[7] = 690;
	height[8] = 755; 	
	height[9] = 764; 
	height[10] = 710; 
	height[11] = 692; 
	height[12] = 692; 
	height[13] = 697; 
	height[14] = 696; 
	height[15] = 712; 	
	height[16] = 690; 	
	height[17] = 690; 
	height[18] = 720; 	
	height[19] = 775; 
	height[20] = 705; 
	height[21] = 817; 
	height[22] = 730; 
	height[23] = 720; 
	height[24] = 710; 	
	height[25] = 690;
	height[26] = 703;	
	height[27] = 695; 	
	height[28] = 700; 
	height[29] = 720; 
	height[30] = 690; 
	height[31] = 690; 
	height[32] = 815; 
	height[33] = 705; 
	height[34] = 727; 
	height[35] = 700; 
	height[36] = 720;
	height[37] = 690;
	height[38] = 674;*/	
	
var buttonVisual = 1;
var longitude = 0;
var latitude = 0;
var entity = new Array(entityCount);

var model;

var name2222 = new Array("水利文化展厅", "南桥", "512地震遗迹", "安澜索桥", "安澜索桥陈列馆", "步云廊扶梯", "财神殿", "城隍庙", "", "二王庙售票处", "拂云亭", "观光车售票处", "古蜀乌木馆", "", "剧场", "岷江源饭庄", "文庙", "宣威门", "堰功堂", "玉垒山售票口", "玉垒山隧道", "玉垒望晴亭", "禹王宫", "", "");


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

			case 1:
				outClass = 'pt-page-moveToLeft';
				inClass = 'pt-page-moveFromRight';
				break;
			case 2:
				outClass = 'pt-page-moveToRight';
				inClass = 'pt-page-moveFromLeft';
				break;
			case 3:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case 4:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
			case 5:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				break;
			case 6:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				break;
			case 7:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromBottom pt-page-ontop';
				break;
			case 8:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromTop pt-page-ontop';
				break;
			case 9:
				outClass = 'pt-page-moveToLeftFade';
				inClass = 'pt-page-moveFromRightFade';
				break;
			case 10:
				outClass = 'pt-page-moveToRightFade';
				inClass = 'pt-page-moveFromLeftFade';
				break;
			case 11:
				outClass = 'pt-page-moveToTopFade';
				inClass = 'pt-page-moveFromBottomFade';
				break;
			case 12:
				outClass = 'pt-page-moveToBottomFade';
				inClass = 'pt-page-moveFromTopFade';
				break;
			case 13:
				outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
				inClass = 'pt-page-moveFromRight';
				break;
			case 14:
				outClass = 'pt-page-moveToRightEasing pt-page-ontop';
				inClass = 'pt-page-moveFromLeft';
				break;
			case 15:
				outClass = 'pt-page-moveToTopEasing pt-page-ontop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case 16:
				outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
				inClass = 'pt-page-moveFromTop';
				break;
			case 17:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				break;
			case 18:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				break;
			case 19:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromBottom pt-page-ontop';
				break;
			case 20:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromTop pt-page-ontop';
				break;
			case 21:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-scaleUpDown pt-page-delay300';
				break;
			case 22:
				outClass = 'pt-page-scaleDownUp';
				inClass = 'pt-page-scaleUp pt-page-delay300';
				break;
			case 23:
				outClass = 'pt-page-moveToLeft pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 24:
				outClass = 'pt-page-moveToRight pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 25:
				outClass = 'pt-page-moveToTop pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 26:
				outClass = 'pt-page-moveToBottom pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 27:
				outClass = 'pt-page-scaleDownCenter';
				inClass = 'pt-page-scaleUpCenter pt-page-delay400';
				break;
			case 28:
				outClass = 'pt-page-rotateRightSideFirst';
				inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
				break;
			case 29:
				outClass = 'pt-page-rotateLeftSideFirst';
				inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
				break;
			case 30:
				outClass = 'pt-page-rotateTopSideFirst';
				inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
				break;
			case 31:
				outClass = 'pt-page-rotateBottomSideFirst';
				inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
				break;
			case 32:
				outClass = 'pt-page-flipOutRight';
				inClass = 'pt-page-flipInLeft pt-page-delay500';
				break;
			case 33:
				outClass = 'pt-page-flipOutLeft';
				inClass = 'pt-page-flipInRight pt-page-delay500';
				break;
			case 34:
				outClass = 'pt-page-flipOutTop';
				inClass = 'pt-page-flipInBottom pt-page-delay500';
				break;
			case 35:
				outClass = 'pt-page-flipOutBottom';
				inClass = 'pt-page-flipInTop pt-page-delay500';
				break;
			case 36:
				outClass = 'pt-page-rotateFall pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 37:
				outClass = 'pt-page-rotateOutNewspaper';
				inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
				break;
			case 38:
				outClass = 'pt-page-rotatePushLeft';
				inClass = 'pt-page-moveFromRight';
				break;
			case 39:
				outClass = 'pt-page-rotatePushRight';
				inClass = 'pt-page-moveFromLeft';
				break;
			case 40:
				outClass = 'pt-page-rotatePushTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case 41:
				outClass = 'pt-page-rotatePushBottom';
				inClass = 'pt-page-moveFromTop';
				break;
			case 42:
				outClass = 'pt-page-rotatePushLeft';
				inClass = 'pt-page-rotatePullRight pt-page-delay180';
				break;
			case 43:
				outClass = 'pt-page-rotatePushRight';
				inClass = 'pt-page-rotatePullLeft pt-page-delay180';
				break;
			case 44:
				outClass = 'pt-page-rotatePushTop';
				inClass = 'pt-page-rotatePullBottom pt-page-delay180';
				break;
			case 45:
				outClass = 'pt-page-rotatePushBottom';
				inClass = 'pt-page-rotatePullTop pt-page-delay180';
				break;
			case 46:
				outClass = 'pt-page-rotateFoldLeft';
				inClass = 'pt-page-moveFromRightFade';
				break;
			case 47:
				outClass = 'pt-page-rotateFoldRight';
				inClass = 'pt-page-moveFromLeftFade';
				break;
			case 48:
				outClass = 'pt-page-rotateFoldTop';
				inClass = 'pt-page-moveFromBottomFade';
				break;
			case 49:
				outClass = 'pt-page-rotateFoldBottom';
				inClass = 'pt-page-moveFromTopFade';
				break;
			case 50:
				outClass = 'pt-page-moveToRightFade';
				inClass = 'pt-page-rotateUnfoldLeft';
				break;
			case 51:
				outClass = 'pt-page-moveToLeftFade';
				inClass = 'pt-page-rotateUnfoldRight';
				break;
			case 52:
				outClass = 'pt-page-moveToBottomFade';
				inClass = 'pt-page-rotateUnfoldTop';
				break;
			case 53:
				outClass = 'pt-page-moveToTopFade';
				inClass = 'pt-page-rotateUnfoldBottom';
				break;
			case 54:
				outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomLeftIn';
				break;
			case 55:
				outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomRightIn';
				break;
			case 56:
				outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomTopIn';
				break;
			case 57:
				outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomBottomIn';
				break;
			case 58:
				outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeLeftIn';
				break;
			case 59:
				outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeRightIn';
				break;
			case 60:
				outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeTopIn';
				break;
			case 61:
				outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeBottomIn';
				break;
			case 62:
				outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselLeftIn';
				break;
			case 63:
				outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselRightIn';
				break;
			case 64:
				outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselTopIn';
				break;
			case 65:
				outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselBottomIn';
				break;
			case 66:
				outClass = 'pt-page-rotateSidesOut';
				inClass = 'pt-page-rotateSidesIn pt-page-delay200';
				break;
			case 67:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
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

	
	var c = 0;
	var uriString = 'models/duJiangYan/shuiLiWenHuaZhanTing.gltf';
	var modelName = '水利文化展厅';
	var describe = '<img src = "image/2.jpg" alt="水利文化展厅" width=420 height=140><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/subview/2240/12000340.htm">水利文化展厅百度百科</a><br><br>水利文化展厅位于江苏省苏州市西南郊十五公里的木渎镇灵岩山，山上原为吴王馆娃宫旧址，原名“秀峰寺”，宋改“显亲崇报禅院”，唐朝称“灵岩寺”。以后成了净土宗著名道场之一。东晋末陆沅舍宅为寺，梁天监年间（五○二至五一九年）重建寺，并增建佛塔一座。寺的原有建筑除塔以外已不存在，现有建筑都为清末和民国时重建或增建。</p><h1>历史</h1><p>寺座北朝南，西院为吴王宫遗迹。据《吴越春秋》和《越绝书》记载，越国美女西施来吴国后，深得吴王夫差宠爱，夫差在风景秀丽的灵岩山，为西施修建了富丽堂皇的“馆娃宫”。相传现灵岩寺大殿即馆娃宫遗址。宫内有一条别致的长廊，凿空廊下岩石，放一排陶甏，上铺有弹性的楩梓木板。西施与宫女们慢舞其上，发出木琴般的乐音，因名“响屉廊”。灵岩塔西面，至今尚有“响屉”遗名。<br>灵岩山顶花园，原是吴宫中的御花园。园中有月池、日池两口大井，西施常对井梳妆，以水为镜。据地方志记载，明朝一农夫在淘井时，曾发现上镌“敕”字金钗一支，传为西施遗物。</p>';
	var star= "★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);	
	c++;
	uriString = 'models/duJiangYan/nanQiao.gltf';
	modelName = '南桥';
	describe = '<img src = "image/南桥.jpg" alt="南桥"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=Uvg1AIpFmE5T3ygH8hkXMNJbpE_Ue5zqqIahMQYNefm_KvMJIiFMD2hZqTb9r8xl9QiGF1qizeCCClop4Q9OJK">南桥百度百科</a><br><br>都江堰南桥位于都江堰宝瓶口下侧的岷江内江上，是南街与复兴街之间的一座雄伟壮丽的廊式古桥。原名为“普济桥”，曾多次损毁，南桥的最后一次改修，各种彩绘、雕梁画栋、民间彩塑、书画楹联溶为一体，被誉为“水上画楼”、“雄居江源第一桥”、“览胜台”。</p><h1>建筑</h1><p>都江堰南桥位于城南宝瓶口下跌内江咽喉，属于廊式古桥。宋以前无考，始建无考。原名“凌云桥”，后改名“凌虚桥”。清代易名“普济桥”经历了由绳桥、土桥到水泥与木结构结合的演变。南桥共5孔，长54米，宽12米，为桥楼似的民族建筑形式。雕梁画栋、民间彩塑、书画楹联溶为一体，被誉为“水上画楼”、“雄居江源第一桥”、“览胜台”。 现存南桥是2009年改建完毕的，已断断续续改建过多次。桥头楼阁，飞檐刺空。现在看到的南桥是最近的一次改修，各种彩绘，雕梁画栋十分耀眼。屋顶还有《海瑞罢官》、《水漫金山》、《孙悟空三打白骨精》等民间的彩塑，情态各异、栩栩如生。<br>“踩过南桥，风调雨顺、五谷丰登！”经过近百名川西坝子的能工巧匠5个多月的紧张施工，都江堰景区的主要景观之一、被誉为“天府源头第一桥”的都江堰市南桥全面完成了灾后重建工程。昨日上午，都江堰市在离堆公园大门旁的南桥广场举行了简单而隆重的重建竣工及踩桥祈福仪式，庆祝灾后重建的这一重大喜事。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/512diZhenYiJi.gltf';
	modelName = '512地震遗迹';
	describe = '<img src = "image/1.jpg" alt="512地震遗迹"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/27282.htm">512地震遗迹百度百科</a><br><br>512地震遗迹古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/anLanSuoQiao.gltf';
	modelName = '安澜索桥';
	describe = '<img src = "image/安澜索桥1.jpg" alt="安澜索桥"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/389768.htm">安澜索桥百度百科</a><br><br>安澜索桥位于四川省都江堰市,又名“安澜桥”、“夫妻桥”、“何公何母桥”。全长240多公尺，飞架岷江南北，横跨都江堰水利工程，是古代四川西部与阿坝之间的商业要道，是藏、汉、羌族人民的联系纽带。</p><h1>结构</h1><p>安澜索桥始建于宋代以前，明末毁于战火。索桥以木排石墩承托，用粗如碗口的竹缆横飞江面，上铺木板为桥面，两旁以竹索为栏，全长约500米。现在的桥，下移100多米，将竹改为钢，承托缆索的木桩桥墩改为混凝土桩。坐落于都江堰首鱼嘴上，被誉为中国古代五大桥梁，是都江堰最具特征的景观。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/anLanSuoQiaoChenLieGuanDeng.gltf';
	modelName = '安澜索桥陈列馆';
	describe = '<img src = "image/安澜索桥1.jpg" alt="安澜索桥"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/389768.htm">安澜索桥百度百科</a><br><br>安澜索桥位于四川省都江堰市,又名“安澜桥”、“夫妻桥”、“何公何母桥”。全长240多公尺，飞架岷江南北，横跨都江堰水利工程，是古代四川西部与阿坝之间的商业要道，是藏、汉、羌族人民的联系纽带。</p><h1>结构</h1><p>安澜索桥始建于宋代以前，明末毁于战火。索桥以木排石墩承托，用粗如碗口的竹缆横飞江面，上铺木板为桥面，两旁以竹索为栏，全长约500米。现在的桥，下移100多米，将竹改为钢，承托缆索的木桩桥墩改为混凝土桩。坐落于都江堰首鱼嘴上，被誉为中国古代五大桥梁，是都江堰最具特征的景观。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/buYunLangFuTi.gltf';
	modelName = '步云廊扶梯';
	describe = '<img src = "image/步云廊扶梯.jpg" alt="步云廊扶梯"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/10002500.htm">步云廊扶梯百度百科</a><br><br>古运河上的景观桥，“步云廊桥”，取“平步青云”之意。泇运河之前，这里并不是运河航道，只有一条季节河。当地居民在宽度有限的河上建了一座小石桥，供平时通行。泇运河开通之后，河面变宽，限于当时的条件，没有能力建造下面可以过船的跨河大桥，而这里作为船只装卸货物的繁忙地段，又不允许私人渡船提供摆渡服务，运河因此成为一道“天堑”。</p><h1>历史</h1><p>明朝天启元年，即公元1621年，浙江省余姚县才子马希曾（音zeng），出任峄县知县。马知县来到峄县不久，就亲临台儿庄，拜访漕河官员和当地士绅。他发现运河上没有桥，于是捐资建了一座竹木结构的大桥。大桥修好，方便了行人，人们感激不尽，纷纷为他烧香许愿，祈求神灵保佑这位父母官步步高升。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/caiShenDian.gltf';
	modelName = '财神殿';
	describe = '<img src = "image/财神殿.jpg" alt="财神殿"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/10002500.htm">财神殿百度百科</a><br><br>财神殿古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/chengHuangMiao.gltf';
	modelName = '城隍庙';
	describe = '<img src = "image/城隍庙.jpg" alt="城隍庙"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/subview/68876/5071547.htm#viewPageContent">城隍庙百度百科</a><br><br>城隍庙是用来祭祀城隍神的庙宇，城隍，有的地方又称城隍爷，是古代汉民族宗教文化中普遍崇祀的重要神祇之一，大多由有功于地方民众的名臣英雄充当，是汉族民间和道教信奉守护城池之神。他是冥界的地方官，职权相当于阳界的市长。因此城隍就跟城市相关并随城市的发展而发展。城隍产生于古代祭祀而经道教演衍的地方守护神。城隍本指护城河，班固《两都赋序》：“京师修宫室，浚城隍。”祭祀城隍神的例规形成于南北朝时。唐宋时城隍神信仰滋盛。宋代列为国家祀典。元代封之为佑圣王。明初，大封天下城隍神爵位，分为王、公、侯、伯四等，岁时祭祀，分别由国王及府州县守令主之。明太祖此举之意，“以鉴察民之善恶而祸福之，俾幽明举不得幸免”。</p><h1>原始信仰</h1><p>远古时期，农业经济在强大的自然力面前，常常显得软弱无力，一种潜在的恐惧心理使得民众往往把希望寄托于对图腾、祖先和自然神的崇拜之中，通过一定的祭祀求得自然力和祖宗的护佑，在“万物有灵”与“天人合一”观念的支配下，出现了有关神灵的崇拜和祭祀仪式，逐步形成原始信仰。<br>城隍神是由自然神逐渐过渡到人格神的，在传统社会中，人们希望英雄人物死后英灵还在，作为地方神来保护自己。在城隍由自然神演变为人神的过程中，汉代的纪信最早，长安不仅是城隍信仰的原发地和传播地,也产生了最早的城隍人神——纪信。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/chuangkexuezhishui.gltf';
	modelName = '二王庙 创科学治水';
	describe = '<img src = "image/二王庙1.jpg" alt="二王庙"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/erWangMiaoShouPiaoChu.gltf';
	modelName = '二王庙售票处';
	describe = '<img src = "image/二王庙1.jpg" alt="二王庙售票处"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "其他";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/fuYunTing.gltf';
	modelName = '拂云亭';
	describe = '<img src = "image/2.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/guanGuanCheShouPiaoChu.gltf';
	modelName = '观光车售票处';
	describe = '<img src = "image/2.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "其他";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/guShuWuMuGuan.gltf';
	modelName = '古蜀乌木馆';
	describe = '<img src = "image/乌木馆.jpg" alt="古蜀乌木馆"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://www.cdwumu.com/about.asp">古蜀乌木馆简介</a><br><br>成都乌木艺术博物馆坐落于山清水秀的世界双文化遗产名城都江堰，占地70余亩, 由艺术家卢泓杰先生于2000年12月创办，2011年8月正式对外免费开放，是世界首家以研究乌木文化、对乌木实施挖掘和保护、进行乌木艺术品创作和收藏的公益性大型主题民办博物馆，也是一个重要的世界环保文化教育基地。<br>博物馆的主体展示厅为二层复式框架结构，占地面积2800余平方米，外观大气、沉稳。正中为中国古建筑牌坊样式的展厅大门，上书原全国人大主任乔石亲笔题写的“成都乌木艺术博物馆”九个大字。博物馆收藏千余件乌木作品，包括特级作品3件，一级作品35件。馆内藏品既有大自然的鬼斧神工之作，也有艺术家们的巧夺天工之作，聚显“天之灵绝、地之珍绝、人之意绝”。本馆用二十余年时间打造出了一个陈列规模和藏品价值都堪称世界之最的乌木王国。</p><h1>乌木</h1><p> 乌木，川人俗称，又名“炭化木”，主要产于成都平原，椐C14同位素测定，成都乌木断代3200年以上，久至上万年，由埋藏在古河床下数千年不朽的古木炭化形成。其质地坚硬、色泽乌亮、形态万千，兼具石的神韵与木的古雅，展示出了大自然灵性至上、艺术天尊的神秘气氛。加之其耐腐蚀性强，故被视为雕刻工艺品的宝贵原料，民间素有“家有乌木一方，胜得珠宝一箱”之说。 </p>';
	star= "★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/jingXiuZhiZhiShuiDeZhenFang.gltf';
	modelName = '敬修之治水德政坊';
	describe = '<img src = "image/3.jpg" alt="敬修之治水德政坊"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/54250.htm">敬修之治水德政坊百度百科</a><br><br>在二王庙东，清光绪三十三年(公元1907年)建。敬禧，字修之，内蒙古乌兰察布盟人，清光绪间任成都水利同知时，“察民无力负重，会详大府，撤销竹园档”，竹料改由官方采购，工料费由厅、县平摊。百姓感戴，为之建“德政坊”。在二王庙东，清光绪三十三年(公元1907年)建。敬禧，字修之，内蒙古乌兰察布盟人，清光绪间任成都水利同知时，“察民无力负重，会详大府，撤销竹园档”，竹料改由官方采购，工料费由厅、县平摊。百姓感戴，为之建“德政坊”。</p>';
	star= "★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;	 
	uriString = 'models/duJiangYan/juChang.gltf';
	modelName = '剧场';
	describe = '<img src = "image/剧场.jpg" alt="剧场"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/minJiangYuanFanZhuang	.gltf';
	modelName = '岷江源饭庄';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/wenMiao.gltf';
	modelName = '文庙';
	describe = '<img src = "image/4.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/xuanWeiMen.gltf';
	modelName = '宣威门';
	describe = '<img src = "image/5.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yanGongTang.gltf';
	modelName = '堰功堂';
	describe = '<img src = "image/秦堰楼.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuLeiShanShouPiaoKou.gltf';
	modelName = '玉垒山售票口';
	describe = '<img src = "image/玉垒山.jpg" alt="玉垒山"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=sWU6BE-w0ytJsvpFCxSeRlM1tfVyHyqBmaXDfyg9EWW-4LCsHvvKCA-VqqzaAOygE1SCLy0z3hw5Xqw4dR-cma">玉垒山百度百科</a><br><br>玉垒山，据《汉书·地理志》“绵虒县”下原注云“玉垒山湔水所出东南至江阳入江。”《说文》“湔”字下记“湔水出蜀郡绵虒玉垒山东南入江。”刘琳在《华阳国志校注》中指出湔水为今白沙河玉垒山即湔水发源地以北的九顶山。玉垒山逶迤而南直趋灌县（今都江堰市）西北，即都江堰水利工程-内江“宝瓶口”一侧山体，另一侧为“离堆”（小者，后人在上建有伏龙观），李冰治水时两者为一体的一座山，为开“宝瓶口”限制进入内江灌溉的水流量（多的水由飞沙堰入外江即岷江），开山分水，分开的小的低的山体为“离堆”，主山为“玉垒山”。历史上岷江上游洪水泛滥就是由此冲向成都平原的。而首当其冲者就是杜宇的都城郫。因此学术界普遍均认同杜宇派鳖灵治水之地为岷江上游的玉垒山。<br>玉垒山巅，原有明宣德年间建之玉观峰寺院，因年久失修已为废墟。玉垒山石刻共三幅，分别刻于三国、明、清，最上方一幅“玉垒山”三字，为蜀后主亲书，其大盈尺。明朝弘治中年，知州赵符节、千户赵方筑城包玉垒山其内，题“三雄秀”，位于“玉垒山”题下。清初又有无名氏题“三定诸蛮”四字。三幅石刻均具较高的书法艺术。</p>';
	star= "其他";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuLeiShanSuiDao.gltf';
	modelName = '玉垒山隧道';
	describe = '<img src = "image/玉垒山.jpg" alt="玉垒山"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=sWU6BE-w0ytJsvpFCxSeRlM1tfVyHyqBmaXDfyg9EWW-4LCsHvvKCA-VqqzaAOygE1SCLy0z3hw5Xqw4dR-cma">玉垒山百度百科</a><br><br>玉垒山，据《汉书·地理志》“绵虒县”下原注云“玉垒山湔水所出东南至江阳入江。”《说文》“湔”字下记“湔水出蜀郡绵虒玉垒山东南入江。”刘琳在《华阳国志校注》中指出湔水为今白沙河玉垒山即湔水发源地以北的九顶山。玉垒山逶迤而南直趋灌县（今都江堰市）西北，即都江堰水利工程-内江“宝瓶口”一侧山体，另一侧为“离堆”（小者，后人在上建有伏龙观），李冰治水时两者为一体的一座山，为开“宝瓶口”限制进入内江灌溉的水流量（多的水由飞沙堰入外江即岷江），开山分水，分开的小的低的山体为“离堆”，主山为“玉垒山”。历史上岷江上游洪水泛滥就是由此冲向成都平原的。而首当其冲者就是杜宇的都城郫。因此学术界普遍均认同杜宇派鳖灵治水之地为岷江上游的玉垒山。<br>玉垒山巅，原有明宣德年间建之玉观峰寺院，因年久失修已为废墟。玉垒山石刻共三幅，分别刻于三国、明、清，最上方一幅“玉垒山”三字，为蜀后主亲书，其大盈尺。明朝弘治中年，知州赵符节、千户赵方筑城包玉垒山其内，题“三雄秀”，位于“玉垒山”题下。清初又有无名氏题“三定诸蛮”四字。三幅石刻均具较高的书法艺术。</p>';
	star= "★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuLeiWangQingTing.gltf';
	modelName = '玉垒望晴亭';
	describe = '<img src = "image/玉垒山.jpg" alt="玉垒山"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=sWU6BE-w0ytJsvpFCxSeRlM1tfVyHyqBmaXDfyg9EWW-4LCsHvvKCA-VqqzaAOygE1SCLy0z3hw5Xqw4dR-cma">玉垒山百度百科</a><br><br>玉垒山，据《汉书·地理志》“绵虒县”下原注云“玉垒山湔水所出东南至江阳入江。”《说文》“湔”字下记“湔水出蜀郡绵虒玉垒山东南入江。”刘琳在《华阳国志校注》中指出湔水为今白沙河玉垒山即湔水发源地以北的九顶山。玉垒山逶迤而南直趋灌县（今都江堰市）西北，即都江堰水利工程-内江“宝瓶口”一侧山体，另一侧为“离堆”（小者，后人在上建有伏龙观），李冰治水时两者为一体的一座山，为开“宝瓶口”限制进入内江灌溉的水流量（多的水由飞沙堰入外江即岷江），开山分水，分开的小的低的山体为“离堆”，主山为“玉垒山”。历史上岷江上游洪水泛滥就是由此冲向成都平原的。而首当其冲者就是杜宇的都城郫。因此学术界普遍均认同杜宇派鳖灵治水之地为岷江上游的玉垒山。<br>玉垒山巅，原有明宣德年间建之玉观峰寺院，因年久失修已为废墟。玉垒山石刻共三幅，分别刻于三国、明、清，最上方一幅“玉垒山”三字，为蜀后主亲书，其大盈尺。明朝弘治中年，知州赵符节、千户赵方筑城包玉垒山其内，题“三雄秀”，位于“玉垒山”题下。清初又有无名氏题“三定诸蛮”四字。三幅石刻均具较高的书法艺术。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuWangGong.gltf';
	modelName = '禹王宫';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	star= "★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/erWangMiao1.gltf';
	modelName = '二王庙';
	describe = '<img src = "image/二王庙1.jpg" alt="二王庙"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">都江堰天气</a><br><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★★★";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	
	
	c++;
	uriString = 'models/duJiangYan/erWangMiao2.gltf';
	modelName = '二王庙';
	describe = '<img src = "image/二王庙1.jpg" alt="二王庙"><h1>简介</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://baike.baidu.com/view/27282.htm">二王庙百度百科</a><br><br>二王庙古建筑群坐落在今都江堰西门外的玉垒山麓，是世界文化遗产都江堰的重要组成部分。该庙是为纪念都江堰的开凿者、秦蜀郡太守李冰及其子二郎而修建的。二王庙初建于南北朝，现存建筑系清末民初所建，山门“二王庙”3个金字是爱国将领冯玉祥将军的手笔。庙内有李冰和二郎的塑像，石壁上嵌有李冰以及后人关于治水的格言，被称为治水三字经。后殿右侧有画家张大千、徐悲鸿等人的碑刻。园中植满各种名贵花木，古木参天，林荫蔽日，是四川的游览观光胜地。</p><h1>建筑概况</h1><p>二王庙前后殿分别塑李冰及其子二郎像。前殿李冰像身着袍服，正襟危坐，手拿着半裹的绢图，凝神沉思治水方案；后殿二郎像草履便服，手执铁锸，英姿勃勃，充满青春豪迈激情。二王庙内匾额、对联、诗文、石碑甚鑫，有清果亲王手书“功垂不朽”、光绪帝御笔“功昭蜀道”，以及“恢拓禹功名父子，创开天府古神仙”等，都是对李冰父子治水功绩的赞颂。李冰殿后陈列商代古木、明代铁花瓶、铁蜡台，以及近代画家徐悲鸿、张大千、关山月的绘画碑刻，都有很高的考古和艺术价值。</p>';
	star= "★★★★★";
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/bridge2.gltf';
	modelName = '桥';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/bumingtaizi.gltf';
	modelName = '不明台子';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/siyuanchashe.gltf';
	modelName = '卫生间';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoJuMinQu1.gltf';
	modelName = '文庙居民区1';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoJuMinQu2.gltf';
	modelName = '文庙居民区2';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoXiaBuFenQiTaJianZhu.gltf';
	modelName = '文庙南部建筑';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoXiaJuMinDi.gltf';
	modelName = '文庙南居民区';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	/*uriString = '../models/duJiangYan/xiaoJian.gltf';
	modelName = '都江堰景区';
	describe = '<img src = "image/翠月湖.jpg" alt="翠月湖"><h1>简介</h1><p><a href="http://baike.baidu.com/view/389768.htm">翠月湖百度百科</a><br><br>翠月湖位于世界文化遗产地、中国历史文化名城、中国优秀旅游城市四川省都江堰市境内，翠月湖总面积800余亩，其中湖泊面积200多亩，森林、果园、草坪约500多亩。位于青城山山麓的岷江河畔，距都江堰8公里，这里属亚热带湿润气候，常年最低气温为4.6 ℃，最高气温为34℃，年平均气温15.2 ℃，是理想的避暑胜地。因其出众的绿色生态自然环境，享有“蜀中小西湖”的美誉。 是中国AAA级旅游区。园内林木苍翠，鱼果相戏，景色如画，典雅温馨的中式建筑与豪华浪漫的欧式建筑错落有致地分布于院内各处。</p><h1>传说</h1><p>美丽的地方总伴有美丽的故事，相传蜀郡太守李冰父子组织修建都江堰水利工程后，岷江外江下游不远的地方便形成了一片美丽的湖泊，湖边景色优美，草树丛生，居栖着成群白鹭和梅花鹿。蜀郡守李冰的后代中有一位叫翠月的姑娘经常顺江而下，来这里赏景观鸟，戏水沐浴，久而久之这片湖水便被人们称为翠月湖。两千多年过去了，或许那湖边的梅花鹿已随翠月去了天涯海角，唯有白鹭在这里代代繁衍，恪守着这一神奇的传说。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);*/
	//c++;
	uriString = 'models/duJiangYan/yuLeiShanQiTaJianZhu1.gltf';
	modelName = '玉垒山其它建筑';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/yuLeiShanQiTaJianZhu2.gltf';
	modelName = '玉垒山其它建筑';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/erWangMianFuShuJianZhu.gltf';
	modelName = '二王庙周边';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoDuanQiTaJianZhu.gltf';
	modelName = '文庙段其他建筑';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/shu.gltf';
	modelName = '都江堰景区';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/dem.gltf';
	modelName = '都江堰景区';
	describe = '<img src = "image/3.jpg" alt="都江堰"><h1>简介</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">都江堰百度百科</a><br><br>都江堰是世界文化遗产（2000年被联合国教科文组织列入“世界文化遗产”名录），世界自然遗产（四川大熊猫栖息地），全国重点文物保护单位，国家级风景名胜区，国家AAAAA级旅游景区。<br>都江堰位于四川省成都市都江堰市城西，坐落在成都平原西部的岷江上，始建于秦昭王末年(约公元前256～前251)[1]  ，是蜀郡太守李冰父子在前人鳖灵开凿的基础上组织修建的大型水利工程，由分水鱼嘴、飞沙堰、宝瓶口等部分组成，两千多年来一直发挥着防洪灌溉的作用，使成都平原成为水旱从人、沃野千里的"天府之国"，至今灌区已达30余县市、面积近千万亩，是全世界迄今为止，年代最久、唯一留存、仍在一直使用，以无坝引水为特征的宏大水利工程，凝聚着中国古代汉族劳动人民勤劳、勇敢、智慧的结晶。<br>都江堰风景区主要有伏龙观、二王庙、安澜索桥、玉垒关、离堆公园、玉垒山公园、玉女峰、灵岩寺、普照寺、翠月湖、都江堰水利工程等。<br></p><h1>名字由来</h1><p>秦蜀郡太守李冰建堰初期，都江堰名称叫“湔堋”，这是因为都江堰旁的玉垒山，秦汉以前叫“湔山”，而那时都江堰周围的主要居住民族是氐羌人，他们把堰叫做“堋”，所以都江堰就叫“湔堋”。<br>三国蜀汉时期，都江堰地区设置都安县，因县得名，都江堰称“都安堰”。同时，又叫“金堤”，这是突出鱼嘴分水堤的作用，用堤代堰作名称。<br>关于都江这一名称的来源，《蜀水考》说：“府河，一名成都江，有二源，即郫江，流江也。”流江是检江的另一种称呼，成都平原上的府河即郫江，南河即检江，它们的上游，就是都江堰内江分流的柏条河和走马河。《括地志》说：“都江即成都江”。从宋代开始，把整个都江堰水利系统的工程概括起来，叫都江堰，才较为准确地代表了整个水利工程系统，一直沿用至今。<br></p><h1>修建背景</h1><p>号称“天府之国”的成都平原，在古代是一个水旱灾害十分严重的地方。李白在《蜀道难》这篇著名的诗歌中“蚕丛及鱼凫，开国何茫然”、“人或成鱼鳖”的感叹和惨状，就是那个时代的真实写照。这种状况是由岷江和成都平原“恶劣”的自然条件造成的。<br>都江堰的创建，又有其特定的历史根源。战国时期，刀兵峰起，战乱纷呈，饱受战乱之苦的人民，渴望中国尽快统一。适巧，经过商鞅变法改革的秦国一时名君贤相辈出，国势日盛。他们正确认识到巴、蜀在统一中国过程中特殊的战略地位，“得蜀则得楚，楚亡则天下并矣”(秦相司马错语)。在这一历史大背景下，战国末期秦昭王委任知天文、识地理、隐居岷峨的李冰为蜀郡太守。李冰上任后，首先下决心根治岷江水患，发展川西农业，造福成都平原，为秦国统一中国创造经济基础。</p><h1>修建过程</h1><p>秦昭襄王五十一年（公元前256年），秦国蜀郡太守李冰和他的儿子，吸取前人的治水经验，率领当地人民，主持修建了著名的都江堰水利工程。都江堰的整体规划是将岷江水流分成两条，其中一条水流引入成都平原，这样既可以分洪减灾，又可以引水灌田、变害为利。主体工程包括鱼嘴分水堤、飞沙堰溢洪道和宝瓶口进水口。</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);

}

function chooseEntities(lon , lat){
	switch(lon){
		case coordinates[0][0]: 
			if(lat==coordinates[0][1]){
				/*viewer.camera.setView({
					destination : Cesium.Cartesian3.fromDegrees(103.6187, 31.0101, 25.0),
					orientation : {
						heading : Cesium.Math.toRadians(250.0),
						pitch : Cesium.Math.toRadians(-20.0),
						roll : 0.0
					}
				});*/
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
				/*viewer.entities.add({
					position : Cesium.Cartesian3.fromDegrees(lon, lat, height[1]+25),
					label : {
						text : '南桥',
						fillColor : Cesium.Color.DEEPPINK,
						outlineColor : Cesium.Color.IVORY,
						outlineWidth : 1,
						style : Cesium.LabelStyle.FILL_AND_OUTLINE
					}
				});*/
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
		case coordinates[6][0]: 
			if(lat==coordinates[6][1]){
				viewer.trackedEntity = entity[6];
				center = entity[6];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[7][0]: 
			if(lat==coordinates[7][1]){
				viewer.trackedEntity = entity[7];
				center = entity[7];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[8][0]: 
			if(lat==coordinates[8][1]){
				viewer.trackedEntity = entity[8];
				center = entity[8];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[9][0]:
			if(lat==coordinates[9][1]){
				viewer.trackedEntity = entity[9];
				center = entity[9];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[10][0]: 
			if(lat==coordinates[10][1]){
				viewer.trackedEntity = entity[10];
				center = entity[10];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[11][0]: 
			if(lat==coordinates[11][1]){
				viewer.trackedEntity = entity[11];
				center = entity[11];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[12][0]: 
			if(lat==coordinates[12][1]){
				viewer.trackedEntity = entity[12];
				center = entity[12];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[13][0]:
			if(lat==coordinates[13][1]){
				viewer.trackedEntity = entity[13];
				center = entity[13];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[14][0]: 
			if(lat==coordinates[14][1]){
				viewer.trackedEntity = entity[14];
				center = entity[14];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[15][0]: 
			if(lat==coordinates[15][1]){
				viewer.trackedEntity = entity[15];
				center = entity[15];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[16][0]: 
			if(lat==coordinates[16][1]){
				viewer.trackedEntity = entity[16];
				center = entity[16];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[17][0]:
			if(lat==coordinates[17][1]){
				viewer.trackedEntity = entity[17];
				center = entity[17];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[18][0]: 
			if(lat==coordinates[18][1]){
				viewer.trackedEntity = entity[18];
				center = entity[18];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[19][0]: 
			if(lat==coordinates[19][1]){
				viewer.trackedEntity = entity[19];
				center = entity[19];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[20][0]: 
			if(lat==coordinates[20][1]){
				viewer.trackedEntity = entity[20];
				center = entity[20];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[21][0]:
			if(lat==coordinates[21][1]){
				viewer.trackedEntity = entity[21];
				center = entity[21];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[22][0]: 
			if(lat==coordinates[22][1]){
				viewer.trackedEntity = entity[22];
				center = entity[22];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		case coordinates[23][0]: 
			if(lat==coordinates[23][1]){
				viewer.trackedEntity = entity[23];
				center = entity[23];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;
		/*case coordinates[24][0]: 
			if(lat==coordinates[24][1]){
				viewer.trackedEntity = entity[24];
				center = entity[24];
			}
			else{
				alert("错误！纬度不匹配");
			}
			break;*/
		default: {
			alert("TAT神奇的事情发生了，目前不明原因")
			viewer.trackedEntity = entity[14];
			center = entity[14];
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

function addEntitiesOther(uriString, modelName, lon, lat, height, descrip, entity){
	model=new Cesium.ModelGraphics({
		uri:uriString
	})
	entity=viewer.entities.add({
		name:modelName,
		position:Cesium.Cartesian3.fromDegrees(lon, lat, height),
		model:model		
	})
	entity.description = descrip;
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

