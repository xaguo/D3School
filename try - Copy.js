
var map;
var map2;
var view;
var view2;
var viewer;
var scene;//��¼����ģ��
var center;
var labelEntity;

var r = 200;
const count = 37;
const entityCount = 24;
var features = new Array(entityCount); //�ӵ�ʱʹ��
var coordinates = new Array(count);
	coordinates[0] = [103.60622, 31.00702];//shuiLiWenHuaZhanTing
	coordinates[1] = [103.61403, 30.99907];//����
	coordinates[2] = [103.60855, 31.00678];//512�����ż�
	coordinates[3] = [103.6058, 31.0078];//��������
	coordinates[4] = [103.60710, 31.00870];//�������ų��й�	
	coordinates[5] = [103.611553, 31.005918];//�����ȷ���
	coordinates[6] = [103.61338, 31.00270];//�����
	coordinates[7] = [103.61362, 31.00227];//chengHuangMiao
	coordinates[8] = [103.6078, 31.00925];//chuangkexuezhishui
	coordinates[9] = [103.60871, 31.00896];//erWangMiaoShouPiaoChu
	coordinates[10] = [103.6088, 31.0070];//fuYunTing ���Ķ�����
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
	coordinates[27] = [103.6071, 31.0062];//siyuanchashe�������䣩
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

	
	
	
//�޵��ΰ�
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
	
/*���ص��ΰ�
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

var name2222 = new Array("ˮ���Ļ�չ��", "����", "512�����ż�", "��������", "�������ų��й�", "�����ȷ���", "�����", "������", "", "��������Ʊ��", "����ͤ", "�۹⳵��Ʊ��", "������ľ��", "", "�糡", "ẽ�Դ��ׯ", "����", "������", "�߹���", "����ɽ��Ʊ��", "����ɽ���", "��������ͤ", "������", "", "");


function loadMap(){
	//��ͼ�Ķ��� 
	
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
	//��ʾ��γ��
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
				//������
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
				
				//������
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
		animation: false,  //�Ƿ���ʾ�����ؼ�
		baseLayerPicker: true, //�Ƿ���ʾͼ��ѡ��ؼ�
		geocoder: true, //�Ƿ���ʾ�������ҿؼ�
		timeline: false, //�Ƿ���ʾʱ���߿ؼ�
		sceneModePicker: false, //�Ƿ���ʾͶӰ��ʽ�ؼ�
		navigationHelpButton: false, //�Ƿ���ʾ������Ϣ�ؼ�
		infoBox: true,  //�Ƿ���ʾ���Ҫ��֮����ʾ����Ϣ
		selectionIndicator:false
		/*�������ͼʸ����ͼ����
		imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
        url:'http://t5.tianditu.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg'
    }),*/
	})
	//������ʾʱʹ��viewer.imageryLayers.removeAll()
	viewer.cesiumWidget.creditContainer.remove();//ȥ�������������ֵ�
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
	var modelName = 'ˮ���Ļ�չ��';
	var describe = '<img src = "image/2.jpg" alt="ˮ���Ļ�չ��" width=420 height=140><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/subview/2240/12000340.htm">ˮ���Ļ�չ���ٶȰٿ�</a><br><br>ˮ���Ļ�չ��λ�ڽ���ʡ���������Ͻ�ʮ�幫���ľ��������ɽ��ɽ��ԭΪ�������޹���ַ��ԭ��������¡����θġ����׳籨��Ժ�����Ƴ��ơ������¡����Ժ���˾�������������֮һ������ĩ½����լΪ�£��������䣨��������һ���꣩�ؽ��£�����������һ�����µ�ԭ�н������������Ѳ����ڣ����н�����Ϊ��ĩ�����ʱ�ؽ���������</p><h1>��ʷ</h1><p>���������ϣ���ԺΪ�������ż����ݡ���Խ����͡�Խ���顷���أ�Խ����Ů��ʩ�����������������谮������ڷ羰����������ɽ��Ϊ��ʩ�޽��˸����ûʵġ����޹������ഫ�������´����޹���ַ��������һ�����µĳ��ȣ����������ʯ����һ����괣������е��ԵĘF��ľ�塣��ʩ�빬Ů���������ϣ�����ľ�ٰ�������������������ȡ������������棬�������С����롱������<br>����ɽ����԰��ԭ���⹬�е�����԰��԰�����³ء��ճ����ڴ󾮣���ʩ���Ծ���ױ����ˮΪ�����ݵط�־���أ�����һũ�����Ծ�ʱ�����������ԡ�뷡��ֽ���һ֧����Ϊ��ʩ���</p>';
	var star= "���";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);	
	c++;
	uriString = 'models/duJiangYan/nanQiao.gltf';
	modelName = '����';
	describe = '<img src = "image/����.jpg" alt="����"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=Uvg1AIpFmE5T3ygH8hkXMNJbpE_Ue5zqqIahMQYNefm_KvMJIiFMD2hZqTb9r8xl9QiGF1qizeCCClop4Q9OJK">���ŰٶȰٿ�</a><br><br>����������λ�ڶ����߱�ƿ���²��ẽ��ڽ��ϣ����Ͻ��븴�˽�֮���һ����ΰ׳������ʽ���š�ԭ��Ϊ���ռ��š����������٣����ŵ����һ�θ��ޣ����ֲʻ桢���������������ܡ��黭�����Ϊһ�壬����Ϊ��ˮ�ϻ�¥�������۾ӽ�Դ��һ�š�������ʤ̨����</p><h1>����</h1><p>����������λ�ڳ��ϱ�ƿ���µ��ڽ��ʺ�������ʽ���š�����ǰ�޿���ʼ���޿���ԭ���������š���������������š�������������ռ��š������������š����ŵ�ˮ����ľ�ṹ��ϵ��ݱ䡣���Ź�5�ף���54�ף���12�ף�Ϊ��¥�Ƶ����彨����ʽ�����������������ܡ��黭�����Ϊһ�壬����Ϊ��ˮ�ϻ�¥�������۾ӽ�Դ��һ�š�������ʤ̨���� �ִ�������2009��Ľ���ϵģ��Ѷ϶������Ľ�����Ρ���ͷ¥�󣬷��ܴ̿ա����ڿ����������������һ�θ��ޣ����ֲʻ棬��������ʮ��ҫ�ۡ��ݶ����С�����չ١�����ˮ����ɽ���������������׹Ǿ��������Ĳ��ܣ���̬���졢����������<br>���ȹ����ţ������˳����ȷ�ǣ��������������������ӵ��ܹ��ɽ�5�����µĽ���ʩ���������߾�������Ҫ����֮һ������Ϊ���츮Դͷ��һ�š��Ķ�����������ȫ��������ֺ��ؽ����̡��������磬������������ѹ�԰�����Ե����Ź㳡�����˼򵥶�¡�ص��ؽ���������������ʽ����ף�ֺ��ؽ�����һ�ش�ϲ�¡�</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/512diZhenYiJi.gltf';
	modelName = '512�����ż�';
	describe = '<img src = "image/1.jpg" alt="512�����ż�"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/27282.htm">512�����ż��ٶȰٿ�</a><br><br>512�����ż��Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/anLanSuoQiao.gltf';
	modelName = '��������';
	describe = '<img src = "image/��������1.jpg" alt="��������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/389768.htm">�������ŰٶȰٿ�</a><br><br>��������λ���Ĵ�ʡ��������,�����������š����������š������ι���ĸ�š���ȫ��240�๫�ߣ��ɼ�ẽ��ϱ�����綼����ˮ�����̣��ǹŴ��Ĵ������밢��֮�����ҵҪ�����ǲء�����Ǽ���������ϵŦ����</p><h1>�ṹ</h1><p>��������ʼ�����δ���ǰ����ĩ����ս��������ľ��ʯ�ճ��У��ô�����ڵ����º�ɽ��棬����ľ��Ϊ���棬����������Ϊ����ȫ��Լ500�ס����ڵ��ţ�����100���ף������Ϊ�֣�����������ľ׮�Ŷո�Ϊ������׮�������ڶ������������ϣ�����Ϊ�й��Ŵ�����������Ƕ�������������ľ��ۡ�</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/anLanSuoQiaoChenLieGuanDeng.gltf';
	modelName = '�������ų��й�';
	describe = '<img src = "image/��������1.jpg" alt="��������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/389768.htm">�������ŰٶȰٿ�</a><br><br>��������λ���Ĵ�ʡ��������,�����������š����������š������ι���ĸ�š���ȫ��240�๫�ߣ��ɼ�ẽ��ϱ�����綼����ˮ�����̣��ǹŴ��Ĵ������밢��֮�����ҵҪ�����ǲء�����Ǽ���������ϵŦ����</p><h1>�ṹ</h1><p>��������ʼ�����δ���ǰ����ĩ����ս��������ľ��ʯ�ճ��У��ô�����ڵ����º�ɽ��棬����ľ��Ϊ���棬����������Ϊ����ȫ��Լ500�ס����ڵ��ţ�����100���ף������Ϊ�֣�����������ľ׮�Ŷո�Ϊ������׮�������ڶ������������ϣ�����Ϊ�й��Ŵ�����������Ƕ�������������ľ��ۡ�</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/buYunLangFuTi.gltf';
	modelName = '�����ȷ���';
	describe = '<img src = "image/�����ȷ���.jpg" alt="�����ȷ���"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/10002500.htm">�����ȷ��ݰٶȰٿ�</a><br><br>���˺��ϵľ����ţ����������š���ȡ��ƽ�����ơ�֮�⡣�v�˺�֮ǰ�����ﲢ�����˺Ӻ�����ֻ��һ�����ںӡ����ؾ����ڿ�����޵ĺ��Ͻ���һ��Сʯ�ţ���ƽʱͨ�С��v�˺ӿ�֮ͨ�󣬺��������ڵ�ʱ��������û����������������Թ����Ŀ�Ӵ��ţ���������Ϊ��ֻװж����ķ�æ�ضΣ��ֲ�����˽�˶ɴ��ṩ�ڶɷ����˺���˳�Ϊһ������ǵ����</p><h1>��ʷ</h1><p>��������Ԫ�꣬����Ԫ1621�꣬�㽭ʡ��Ҧ�ز�����ϣ������zeng�����������֪�ء���֪��������ز��ã�������̨��ׯ���ݷ���ӹ�Ա�͵���ʿ���������˺���û���ţ����Ǿ��ʽ���һ����ľ�ṹ�Ĵ��š������޺ã����������ˣ����Ǹм��������׷�Ϊ��������Ը���������鱣����λ��ĸ�ٲ���������</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/caiShenDian.gltf';
	modelName = '�����';
	describe = '<img src = "image/�����.jpg" alt="�����"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/10002500.htm">�����ٶȰٿ�</a><br><br>�����Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/chengHuangMiao.gltf';
	modelName = '������';
	describe = '<img src = "image/������.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/subview/68876/5071547.htm#viewPageContent">������ٶȰٿ�</a><br><br>������������������������������еĵط��ֳƳ���ү���ǹŴ��������ڽ��Ļ����ձ�������Ҫ��o֮һ��������й��ڵط����ڵ�����Ӣ�۳䵱���Ǻ������͵����ŷ��ػ��ǳ�֮������ڤ��ĵط��٣�ְȨ�൱��������г�����˳���͸�������ز�����еķ�չ����չ����������ڹŴ���������������ܵĵط��ػ��񡣳���ָ���Ǻӣ���̡��������򡷣�����ʦ�޹��ң������򡣡����������������γ����ϱ���ʱ������ʱ������������ʢ���δ���Ϊ������䡣Ԫ����֮Ϊ��ʥ����������������³������λ����Ϊ������������ĵȣ���ʱ���룬�ֱ��ɹ�����������������֮����̫��˾�֮�⣬���Լ�����֮�ƶ������֮���������ٲ������⡱��</p><h1>ԭʼ����</h1><p>Զ��ʱ�ڣ�ũҵ������ǿ�����Ȼ����ǰ�������Ե�����������һ��Ǳ�ڵĿ־�����ʹ������������ϣ�������ڶ�ͼ�ڡ����Ⱥ���Ȼ��ĳ��֮�У�ͨ��һ���ļ��������Ȼ�������ڵĻ��ӣ��ڡ��������顱�롰���˺�һ�������֧���£��������й�����ĳ�ݺͼ�����ʽ�����γ�ԭʼ������<br>������������Ȼ���𽥹��ɵ��˸���ģ��ڴ�ͳ����У�����ϣ��Ӣ����������Ӣ�黹�ڣ���Ϊ�ط����������Լ����ڳ�������Ȼ���ݱ�Ϊ����Ĺ����У������ļ������磬���������ǳ���������ԭ���غʹ�����,Ҳ����������ĳ������񡪡����š�</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/chuangkexuezhishui.gltf';
	modelName = '������ ����ѧ��ˮ';
	describe = '<img src = "image/������1.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/erWangMiaoShouPiaoChu.gltf';
	modelName = '��������Ʊ��';
	describe = '<img src = "image/������1.jpg" alt="��������Ʊ��"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/fuYunTing.gltf';
	modelName = '����ͤ';
	describe = '<img src = "image/2.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/guanGuanCheShouPiaoChu.gltf';
	modelName = '�۹⳵��Ʊ��';
	describe = '<img src = "image/2.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/guShuWuMuGuan.gltf';
	modelName = '������ľ��';
	describe = '<img src = "image/��ľ��.jpg" alt="������ľ��"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://www.cdwumu.com/about.asp">������ľ�ݼ��</a><br><br>�ɶ���ľ���������������ɽ��ˮ�������˫�Ļ��Ų����Ƕ����ߣ�ռ��70��Ķ, ��������¬����������2000��12�´��죬2011��8����ʽ������ѿ��ţ��������׼����о���ľ�Ļ�������ľʵʩ�ھ�ͱ�����������ľ����Ʒ�������ղصĹ����Դ���������첩��ݣ�Ҳ��һ����Ҫ�����绷���Ļ��������ء�<br>����ݵ�����չʾ��Ϊ���㸴ʽ��ܽṹ��ռ�����2800��ƽ���ף���۴��������ȡ�����Ϊ�й��Ž����Ʒ���ʽ��չ�����ţ�����ԭȫ���˴�������ʯ�ױ���д�ġ��ɶ���ľ��������ݡ��Ÿ����֡�������ղ�ǧ�����ľ��Ʒ�������ؼ���Ʒ3����һ����Ʒ35�������ڲ�Ʒ���д���Ȼ�Ĺ���֮����Ҳ���������ǵ��ɶ��칤֮�������ԡ���֮�������֮�������֮������������ö�ʮ����ʱ��������һ�����й�ģ�Ͳ�Ʒ��ֵ����������֮�����ľ������</p><h1>��ľ</h1><p> ��ľ�������׳ƣ�������̿��ľ������Ҫ���ڳɶ�ƽԭ���C14ͬλ�زⶨ���ɶ���ľ�ϴ�3200�����ϣ����������꣬������ڹźӴ�����ǧ�겻��Ĺ�ľ̿���γɡ����ʵؼ�Ӳ��ɫ����������̬��ǧ�����ʯ��������ľ�Ĺ��ţ�չʾ���˴���Ȼ�������ϡ�����������������ա���֮���͸�ʴ��ǿ���ʱ���Ϊ��̹���Ʒ�ı���ԭ�ϣ�������С�������ľһ����ʤ���鱦һ�䡱֮˵�� </p>';
	star= "���";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/jingXiuZhiZhiShuiDeZhenFang.gltf';
	modelName = '����֮��ˮ������';
	describe = '<img src = "image/3.jpg" alt="����֮��ˮ������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/54250.htm">����֮��ˮ�������ٶȰٿ�</a><br><br>�ڶ��������������ʮ����(��Ԫ1907��)��������������֮�����ɹ������첼���ˣ���������γɶ�ˮ��֪ͬʱ���������������أ�����󸮣�������԰���������ϸ��ɹٷ��ɹ������Ϸ���������ƽ̯�����ոд���Ϊ֮���������������ڶ��������������ʮ����(��Ԫ1907��)��������������֮�����ɹ������첼���ˣ���������γɶ�ˮ��֪ͬʱ���������������أ�����󸮣�������԰���������ϸ��ɹٷ��ɹ������Ϸ���������ƽ̯�����ոд���Ϊ֮��������������</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;	 
	uriString = 'models/duJiangYan/juChang.gltf';
	modelName = '�糡';
	describe = '<img src = "image/�糡.jpg" alt="�糡"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/minJiangYuanFanZhuang	.gltf';
	modelName = 'ẽ�Դ��ׯ';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "���";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/wenMiao.gltf';
	modelName = '����';
	describe = '<img src = "image/4.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/xuanWeiMen.gltf';
	modelName = '������';
	describe = '<img src = "image/5.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yanGongTang.gltf';
	modelName = '�߹���';
	describe = '<img src = "image/����¥.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuLeiShanShouPiaoKou.gltf';
	modelName = '����ɽ��Ʊ��';
	describe = '<img src = "image/����ɽ.jpg" alt="����ɽ"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=sWU6BE-w0ytJsvpFCxSeRlM1tfVyHyqBmaXDfyg9EWW-4LCsHvvKCA-VqqzaAOygE1SCLy0z3hw5Xqw4dR-cma">����ɽ�ٶȰٿ�</a><br><br>����ɽ���ݡ����顤����־������̌�ء���ԭע�ơ�����ɽ��ˮ���������������뽭������˵�ġ����ա����¼ǡ���ˮ������̌����ɽ�����뽭���������ڡ�������־Уע����ָ����ˮΪ���ɳ������ɽ����ˮ��Դ���Ա��ľŶ�ɽ������ɽ���ƶ���ֱ�����أ��񶼽����У���������������ˮ������-�ڽ�����ƿ�ڡ�һ��ɽ�壬��һ��Ϊ����ѡ���С�ߣ��������Ͻ��з����ۣ��������ˮʱ����Ϊһ���һ��ɽ��Ϊ������ƿ�ڡ����ƽ����ڽ���ȵ�ˮ���������ˮ�ɷ�ɳ�����⽭��ẽ�������ɽ��ˮ���ֿ���С�ĵ͵�ɽ��Ϊ����ѡ�����ɽΪ������ɽ������ʷ��ẽ����κ�ˮ���ľ����ɴ˳���ɶ�ƽԭ�ġ����׵�����߾��Ƕ���Ķ���ۯ�����ѧ�����ձ����ͬ�����ɱ�����ˮ֮��Ϊẽ����ε�����ɽ��<br>����ɽ�ۣ�ԭ����������佨֮��۷���Ժ�������ʧ����Ϊ���档����ɽʯ�̹��������ֱ���������������壬���Ϸ�һ��������ɽ�����֣�Ϊ��������飬���ӯ�ߡ������������֪꣬���Է��ڡ�ǧ���Է����ǰ�����ɽ���ڣ��⡰�����㡱��λ�ڡ�����ɽ�����¡���������������⡰�������������֡�����ʯ�̾��߽ϸߵ��鷨������</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuLeiShanSuiDao.gltf';
	modelName = '����ɽ���';
	describe = '<img src = "image/����ɽ.jpg" alt="����ɽ"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=sWU6BE-w0ytJsvpFCxSeRlM1tfVyHyqBmaXDfyg9EWW-4LCsHvvKCA-VqqzaAOygE1SCLy0z3hw5Xqw4dR-cma">����ɽ�ٶȰٿ�</a><br><br>����ɽ���ݡ����顤����־������̌�ء���ԭע�ơ�����ɽ��ˮ���������������뽭������˵�ġ����ա����¼ǡ���ˮ������̌����ɽ�����뽭���������ڡ�������־Уע����ָ����ˮΪ���ɳ������ɽ����ˮ��Դ���Ա��ľŶ�ɽ������ɽ���ƶ���ֱ�����أ��񶼽����У���������������ˮ������-�ڽ�����ƿ�ڡ�һ��ɽ�壬��һ��Ϊ����ѡ���С�ߣ��������Ͻ��з����ۣ��������ˮʱ����Ϊһ���һ��ɽ��Ϊ������ƿ�ڡ����ƽ����ڽ���ȵ�ˮ���������ˮ�ɷ�ɳ�����⽭��ẽ�������ɽ��ˮ���ֿ���С�ĵ͵�ɽ��Ϊ����ѡ�����ɽΪ������ɽ������ʷ��ẽ����κ�ˮ���ľ����ɴ˳���ɶ�ƽԭ�ġ����׵�����߾��Ƕ���Ķ���ۯ�����ѧ�����ձ����ͬ�����ɱ�����ˮ֮��Ϊẽ����ε�����ɽ��<br>����ɽ�ۣ�ԭ����������佨֮��۷���Ժ�������ʧ����Ϊ���档����ɽʯ�̹��������ֱ���������������壬���Ϸ�һ��������ɽ�����֣�Ϊ��������飬���ӯ�ߡ������������֪꣬���Է��ڡ�ǧ���Է����ǰ�����ɽ���ڣ��⡰�����㡱��λ�ڡ�����ɽ�����¡���������������⡰�������������֡�����ʯ�̾��߽ϸߵ��鷨������</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuLeiWangQingTing.gltf';
	modelName = '��������ͤ';
	describe = '<img src = "image/����ɽ.jpg" alt="����ɽ"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=sWU6BE-w0ytJsvpFCxSeRlM1tfVyHyqBmaXDfyg9EWW-4LCsHvvKCA-VqqzaAOygE1SCLy0z3hw5Xqw4dR-cma">����ɽ�ٶȰٿ�</a><br><br>����ɽ���ݡ����顤����־������̌�ء���ԭע�ơ�����ɽ��ˮ���������������뽭������˵�ġ����ա����¼ǡ���ˮ������̌����ɽ�����뽭���������ڡ�������־Уע����ָ����ˮΪ���ɳ������ɽ����ˮ��Դ���Ա��ľŶ�ɽ������ɽ���ƶ���ֱ�����أ��񶼽����У���������������ˮ������-�ڽ�����ƿ�ڡ�һ��ɽ�壬��һ��Ϊ����ѡ���С�ߣ��������Ͻ��з����ۣ��������ˮʱ����Ϊһ���һ��ɽ��Ϊ������ƿ�ڡ����ƽ����ڽ���ȵ�ˮ���������ˮ�ɷ�ɳ�����⽭��ẽ�������ɽ��ˮ���ֿ���С�ĵ͵�ɽ��Ϊ����ѡ�����ɽΪ������ɽ������ʷ��ẽ����κ�ˮ���ľ����ɴ˳���ɶ�ƽԭ�ġ����׵�����߾��Ƕ���Ķ���ۯ�����ѧ�����ձ����ͬ�����ɱ�����ˮ֮��Ϊẽ����ε�����ɽ��<br>����ɽ�ۣ�ԭ����������佨֮��۷���Ժ�������ʧ����Ϊ���档����ɽʯ�̹��������ֱ���������������壬���Ϸ�һ��������ɽ�����֣�Ϊ��������飬���ӯ�ߡ������������֪꣬���Է��ڡ�ǧ���Է����ǰ�����ɽ���ڣ��⡰�����㡱��λ�ڡ�����ɽ�����¡���������������⡰�������������֡�����ʯ�̾��߽ϸߵ��鷨������</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/yuWangGong.gltf';
	modelName = '������';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	star= "����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/erWangMiao1.gltf';
	modelName = '������';
	describe = '<img src = "image/������1.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	
	
	c++;
	uriString = 'models/duJiangYan/erWangMiao2.gltf';
	modelName = '������';
	describe = '<img src = "image/������1.jpg" alt="������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay><source src="http://localhost:8000/try/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/><source src="http://localhost:8000/try/video/dujiangyan.webm" type="video/webm" ><source src="http://localhost:8000/try/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "������";
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/bridge2.gltf';
	modelName = '��';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/bumingtaizi.gltf';
	modelName = '����̨��';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/siyuanchashe.gltf';
	modelName = '������';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoJuMinQu1.gltf';
	modelName = '���������1';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoJuMinQu2.gltf';
	modelName = '���������2';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoXiaBuFenQiTaJianZhu.gltf';
	modelName = '�����ϲ�����';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoXiaJuMinDi.gltf';
	modelName = '�����Ͼ�����';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	/*uriString = '../models/duJiangYan/xiaoJian.gltf';
	modelName = '�����߾���';
	describe = '<img src = "image/���º�.jpg" alt="���º�"><h1>���</h1><p><a href="http://baike.baidu.com/view/389768.htm">���º��ٶȰٿ�</a><br><br>���º�λ�������Ļ��Ų��ء��й���ʷ�Ļ����ǡ��й��������γ����Ĵ�ʡ�������о��ڣ����º������800��Ķ�����к������200��Ķ��ɭ�֡���԰����ƺԼ500��Ķ��λ�����ɽɽ´��ẽ����ϣ��඼����8������������ȴ�ʪ�����򣬳����������Ϊ4.6 �棬�������Ϊ34�棬��ƽ������15.2 �棬������ı���ʤ�ء�������ڵ���ɫ��̬��Ȼ���������С�����С�������������� ���й�AAA����������԰����ľ�Դ䣬�����Ϸ����ɫ�续��������ܰ����ʽ���������������ŷʽ�����������µطֲ���Ժ�ڸ�����</p><h1>��˵</h1><p>�����ĵط��ܰ��������Ĺ��£��ഫ��̫�����������֯�޽�������ˮ�����̺�ẽ��⽭���β�Զ�ĵط����γ���һƬ�����ĺ��������߾�ɫ���������������������ų�Ⱥ���غ�÷��¹����������ĺ������һλ�д��µĹ��ﾭ��˳�����£��������;�����Ϸˮ��ԡ���ö���֮��Ƭ��ˮ�㱻���ǳ�Ϊ���º�����ǧ�����ȥ�ˣ������Ǻ��ߵ�÷��¹�������ȥ�����ĺ��ǣ�Ψ�а���������������ܣ��������һ����Ĵ�˵��</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);*/
	//c++;
	uriString = 'models/duJiangYan/yuLeiShanQiTaJianZhu1.gltf';
	modelName = '����ɽ��������';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/yuLeiShanQiTaJianZhu2.gltf';
	modelName = '����ɽ��������';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/erWangMianFuShuJianZhu.gltf';
	modelName = '�������ܱ�';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/wenMiaoDuanQiTaJianZhu.gltf';
	modelName = '�������������';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/shu.gltf';
	modelName = '�����߾���';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
	addEntitiesOther(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe);
	c++;
	uriString = 'models/duJiangYan/dem.gltf';
	modelName = '�����߾���';
	describe = '<img src = "image/3.jpg" alt="������"><h1>���</h1><p><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
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
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[1][0]:
			if(lat==coordinates[1][1]){
				viewer.trackedEntity = entity[1];
				center = entity[1];
				/*viewer.entities.add({
					position : Cesium.Cartesian3.fromDegrees(lon, lat, height[1]+25),
					label : {
						text : '����',
						fillColor : Cesium.Color.DEEPPINK,
						outlineColor : Cesium.Color.IVORY,
						outlineWidth : 1,
						style : Cesium.LabelStyle.FILL_AND_OUTLINE
					}
				});*/
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[2][0]: 
			if(lat==coordinates[2][1]){
				viewer.trackedEntity = entity[2];
				center = entity[2];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[3][0]: 
			if(lat==coordinates[3][1]){
				viewer.trackedEntity = entity[3];
				center = entity[3];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[4][0]: 
			if(lat==coordinates[4][1]){
				viewer.trackedEntity = entity[4];
				center = entity[4];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[5][0]:
			if(lat==coordinates[5][1]){
				viewer.trackedEntity = entity[5];
				center = entity[5];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[6][0]: 
			if(lat==coordinates[6][1]){
				viewer.trackedEntity = entity[6];
				center = entity[6];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[7][0]: 
			if(lat==coordinates[7][1]){
				viewer.trackedEntity = entity[7];
				center = entity[7];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[8][0]: 
			if(lat==coordinates[8][1]){
				viewer.trackedEntity = entity[8];
				center = entity[8];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[9][0]:
			if(lat==coordinates[9][1]){
				viewer.trackedEntity = entity[9];
				center = entity[9];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[10][0]: 
			if(lat==coordinates[10][1]){
				viewer.trackedEntity = entity[10];
				center = entity[10];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[11][0]: 
			if(lat==coordinates[11][1]){
				viewer.trackedEntity = entity[11];
				center = entity[11];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[12][0]: 
			if(lat==coordinates[12][1]){
				viewer.trackedEntity = entity[12];
				center = entity[12];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[13][0]:
			if(lat==coordinates[13][1]){
				viewer.trackedEntity = entity[13];
				center = entity[13];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[14][0]: 
			if(lat==coordinates[14][1]){
				viewer.trackedEntity = entity[14];
				center = entity[14];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[15][0]: 
			if(lat==coordinates[15][1]){
				viewer.trackedEntity = entity[15];
				center = entity[15];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[16][0]: 
			if(lat==coordinates[16][1]){
				viewer.trackedEntity = entity[16];
				center = entity[16];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[17][0]:
			if(lat==coordinates[17][1]){
				viewer.trackedEntity = entity[17];
				center = entity[17];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[18][0]: 
			if(lat==coordinates[18][1]){
				viewer.trackedEntity = entity[18];
				center = entity[18];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[19][0]: 
			if(lat==coordinates[19][1]){
				viewer.trackedEntity = entity[19];
				center = entity[19];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[20][0]: 
			if(lat==coordinates[20][1]){
				viewer.trackedEntity = entity[20];
				center = entity[20];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[21][0]:
			if(lat==coordinates[21][1]){
				viewer.trackedEntity = entity[21];
				center = entity[21];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[22][0]: 
			if(lat==coordinates[22][1]){
				viewer.trackedEntity = entity[22];
				center = entity[22];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[23][0]: 
			if(lat==coordinates[23][1]){
				viewer.trackedEntity = entity[23];
				center = entity[23];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		/*case coordinates[24][0]: 
			if(lat==coordinates[24][1]){
				viewer.trackedEntity = entity[24];
				center = entity[24];
			}
			else{
				alert("����γ�Ȳ�ƥ��");
			}
			break;*/
		default: {
			alert("TAT��������鷢���ˣ�Ŀǰ����ԭ��")
			viewer.trackedEntity = entity[14];
			center = entity[14];
		}
	}
	
}
	
//�������
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
	addLabel(entity);//�������ע��
	
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
	a.innerText = center.name+" ��������";
	var nearbyPlaceNum = new Array(0);
	nearbyPlaceNum = getNearby();
	if(t.rows.length>2){//ÿ�γ�ʼ�����ʱ��ɾ������ͷ�͵�һ��������С�
		var i = 2;
		while(i < t.rows.length){
			t.deleteRow(i);
		}
	}
	
	if(nearbyPlaceNum.length <= 0){//�������û�У�����ʾ��
		t.rows[1].cells[0].innerText = "��";
		t.rows[1].cells[1].innerText = "0";
	}
	else if(nearbyPlaceNum.length == 1){//���ֻ��һ������Ե�һ�н����޸�
			t.rows[1].cells[0].innerText = entity[nearbyPlaceNum[0]].name;
			t.rows[1].cells[1].innerText = entity[nearbyPlaceNum[0]].star;
		}
		else{//��һ��Ϊ�޸ģ����ÿ������Ӻ��޸�����
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

