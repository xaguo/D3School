
var map;
var map2;
var view;
var view2;
var viewer;
var scene;//��¼����ģ��
var center;

var r = 200;
const count = 6;
const entityCount = 6;
var features = new Array(entityCount); //�ӵ�ʱʹ��
var coordinates = new Array(count);

	coordinates[0] = [103.6058, 31.0078];//��������
	coordinates[1] = [103.60710, 31.00870];//�������ų��й�
	coordinates[2] = [103.60757, 31.00903];//yanGongTang
	coordinates[3] = [103.60805, 31.00832];//erWangMiao1
	coordinates[4] = [103.6080501, 31.0083201];//erWangMiao2
	coordinates[5] = [103.60834, 31.008275];//erWangMianFuShuJianZhu

	
//�޵��ΰ�
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

var name2222 = new Array( "��������", "�������ų��й�", "�߹���", "������", "��������", "��������Ʊ");


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

	
	var c=0;
	uriString = 'models/duJiangYan/anLanSuoQiao.gltf';
	modelName = '��������';
	describe = '<img src = "image/��������1.jpg" alt="��������"><h1>���</h1><video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"> <p>your browser does not support HTML5 video</p></video><p> <a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a> <br><a href="http://baike.baidu.com/view/389768.htm">�������ŰٶȰٿ�</a><br><br>��������λ���Ĵ�ʡ��������,�����������š����������š������ι���ĸ�š���ȫ��240�๫�ߣ��ɼ�ẽ��ϱ�����綼����ˮ�����̣��ǹŴ��Ĵ������밢��֮�����ҵҪ�����ǲء�����Ǽ���������ϵŦ����</p><h1>�ṹ</h1><p>��������ʼ�����δ���ǰ����ĩ����ս��������ľ��ʯ�ճ��У��ô�����ڵ����º�ɽ��棬����ľ��Ϊ���棬����������Ϊ����ȫ��Լ500�ס����ڵ��ţ�����100���ף������Ϊ�֣�����������ľ׮�Ŷո�Ϊ������׮�������ڶ������������ϣ�����Ϊ�й��Ŵ�����������Ƕ�������������ľ��ۡ�</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
	c++;
	uriString = 'models/duJiangYan/anLanSuoQiaoChenLieGuanDeng.gltf';
	modelName = '�������ų��й�';
	describe = '<img src = "image/��������1.jpg" alt="��������"><h1>���</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"> <p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/389768.htm">�������ŰٶȰٿ�</a><br><br>��������λ���Ĵ�ʡ��������,�����������š����������š������ι���ĸ�š���ȫ��240�๫�ߣ��ɼ�ẽ��ϱ�����綼����ˮ�����̣��ǹŴ��Ĵ������밢��֮�����ҵҪ�����ǲء�����Ǽ���������ϵŦ����</p><h1>�ṹ</h1><p>��������ʼ�����δ���ǰ����ĩ����ս��������ľ��ʯ�ճ��У��ô�����ڵ����º�ɽ��棬����ľ��Ϊ���棬����������Ϊ����ȫ��Լ500�ס����ڵ��ţ�����100���ף������Ϊ�֣�����������ľ׮�Ŷո�Ϊ������׮�������ڶ������������ϣ�����Ϊ�й��Ŵ�����������Ƕ�������������ľ��ۡ�</p>';
	star= "�����";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
    c++;
    uriString = 'models/duJiangYan/yanGongTang.gltf';
    modelName = '�߹���';
    describe = '<img src = "image/����¥.jpg" alt="������"><h1>���</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/link?url=tUGbhed795n9KlIElOm6f4Ju45kQSjb4JstdY--oU0aVCD1A2RFhT0EFH18Vqi7YIkY_KdF7n29xbMzP1hT5N1AwfyE2VupnuTGBrbTx4pO">�����߰ٶȰٿ�</a><br><br>�������������Ļ��Ų���2000�걻���Ϲ��̿�����֯���롰�����Ļ��Ų�����¼����������Ȼ�Ų����Ĵ�����è��Ϣ�أ���ȫ���ص����ﱣ����λ�����Ҽ��羰��ʤ��������AAAAA�����ξ�����<br>������λ���Ĵ�ʡ�ɶ��ж������г����������ڳɶ�ƽԭ������ẽ��ϣ�ʼ����������ĩ��(Լ��Ԫǰ256��ǰ251)[1]  ������̫�����������ǰ�˱��鿪��Ļ�������֯�޽��Ĵ���ˮ�����̣��ɷ�ˮ���졢��ɳ�ߡ���ƿ�ڵȲ�����ɣ���ǧ������һֱ�����ŷ����ȵ����ã�ʹ�ɶ�ƽԭ��Ϊˮ�����ˡ���Ұǧ���"�츮֮��"����������Ѵ�30�����С������ǧ��Ķ����ȫ��������Ϊֹ�������á�Ψһ���桢����һֱʹ�ã����ް���ˮΪ�����ĺ��ˮ�����̣��������й��Ŵ������Ͷ��������͡��¸ҡ��ǻ۵Ľᾧ��<br>�����߷羰����Ҫ�з����ۡ��������������š����ݹء���ѹ�԰������ɽ��԰����Ů�塢�����¡������¡����º���������ˮ�����̵ȡ�<br></p><h1>��������</h1><p>����̫��������߳��ڣ����������ƽС���ܡ����������Ϊ�������Ե�����ɽ���غ���ǰ�С���ɽ��������ʱ��������Χ����Ҫ��ס������صǼ�ˣ����ǰ��߽�����ܡ�������Զ����߾ͽС���ܡ����<br>������ʱ�ڣ������ߵ������ö����أ����ص����������߳ơ������ߡ���ͬʱ���ֽС���̡�������ͻ�������ˮ�̵����ã��õ̴��������ơ�<br>���ڶ�����һ���Ƶ���Դ������ˮ����˵�������ӣ�һ���ɶ������ж�Դ����ۯ��������Ҳ���������Ǽ콭����һ�ֳƺ����ɶ�ƽԭ�ϵĸ��Ӽ�ۯ�����ϺӼ��콭�����ǵ����Σ����Ƕ������ڽ������İ����Ӻ�����ӡ�������־��˵�����������ɶ����������δ���ʼ��������������ˮ��ϵͳ�Ĺ��̸����������ж����ߣ��Ž�Ϊ׼ȷ�ش���������ˮ������ϵͳ��һֱ��������<br></p><h1>�޽�����</h1><p>�ųơ��츮֮�����ĳɶ�ƽԭ���ڹŴ���һ��ˮ���ֺ�ʮ�����صĵط�������ڡ�����ѡ���ƪ������ʫ���С��ϴԼ����죬������ãȻ�������˻�����ĸ�̾�Ͳ�״�������Ǹ�ʱ������ʵд�ա�����״������ẽ��ͳɶ�ƽԭ�����ӡ�����Ȼ������ɵġ�<br>�����ߵĴ������������ض�����ʷ��Դ��ս��ʱ�ڣ���������ս�ҷ׳ʣ�����ս��֮������񣬿����й�����ͳһ�����ɣ����������䷨�ĸ���ع�һʱ�������౲����������ʢ��������ȷ��ʶ���͡�����ͳһ�й������������ս�Ե�λ����������ó������������²��ӡ�(����˾�����)������һ��ʷ�󱳾��£�ս��ĩ��������ί��֪���ġ�ʶ��������Ặ�����Ϊ��̫�ء�������κ������¾��ĸ���ẽ�ˮ������չ����ũҵ���츣�ɶ�ƽԭ��Ϊ�ع�ͳһ�й����쾭�û�����</p><h1>�޽�����</h1><p>����������ʮһ�꣨��Ԫǰ256�꣩���ع���̫����������Ķ��ӣ���ȡǰ�˵���ˮ���飬���쵱�����������޽��������Ķ�����ˮ�����̡������ߵ�����滮�ǽ�ẽ�ˮ���ֳ�����������һ��ˮ������ɶ�ƽԭ�������ȿ��Էֺ���֣��ֿ�����ˮ����亦Ϊ�������幤�̰��������ˮ�̡���ɳ�������ͱ�ƿ�ڽ�ˮ�ڡ�</p>';
    star= "����";
    entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
    c++;
	uriString = 'models/duJiangYan/erWangMiao1.gltf';
	modelName = '������';
	describe = '<img src = "image/������1.jpg" alt="������"><h1>���</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "������";
	entity[c] = addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe, star);
    c++;
	uriString = 'models/duJiangYan/erWangMiao2.gltf';
	modelName = '������';
	describe = '<img src = "image/������1.jpg" alt="������"><h1>���</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/D3School/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
	star= "������";
    entity[c] =addEntities(uriString, modelName, coordinates[c][0], coordinates[c][1], height[c], describe,star);
    c++;
    uriString = 'models/duJiangYan/erWangMiaoShouPiaoChu.gltf';
    modelName = '��������Ʊ��';
    describe = '<img src = "image/������1.jpg" alt="��������Ʊ��"><h1>���</h1> <video id=0 controls width=360 height=240 autoplay> <source src="/video/dujiangyan.ogv" type="video/ogg"; codecs="theora, vorbis"/> <source src="/video/dujiangyan.webm" type="video/webm" > <source src="/video/dujiangyan.mp4" type="video/mp4"><p>your browser does not support HTML5 video</p></video><p><a href="http://www.weather.com.cn/weather/101270111.shtml">����������</a><br><a href="http://baike.baidu.com/view/27282.htm">������ٶȰٿ�</a><br><br>������Ž���Ⱥ�����ڽ񶼽��������������ɽ´���������Ļ��Ų������ߵ���Ҫ��ɲ��֡�������Ϊ������ߵĿ����ߡ�����̫����������Ӷ��ɶ��޽��ġ�������������ϱ������ִ潨��ϵ��ĩ���������ɽ�š�������3�������ǰ�����������齫�����ֱʡ�����������Ͷ��ɵ�����ʯ����Ƕ������Լ����˹�����ˮ�ĸ��ԣ�����Ϊ��ˮ���־�������Ҳ��л����Ŵ�ǧ���챯����˵ı��̡�԰��ֲ����������ľ����ľ���죬������գ����Ĵ��������۹�ʤ�ء�</p><h1>�����ſ�</h1><p>������ǰ���ֱ�����������Ӷ�����ǰ������������۷�������Σ���������Ű���ľ�ͼ�������˼��ˮ����������������ı������ִ���ʣ�Ӣ�˲����������ഺ�������顣���������Ҷ������ʫ�ġ�ʯ�����Σ�������������顰�������ࡱ�����������ʡ�������������Լ��������������ӣ������츮�����ɡ��ȣ����Ƕ����������ˮ���������̡�����������̴���ľ����������ƿ������̨���Լ����������챯�衢�Ŵ�ǧ����ɽ�µĻ滭���̣����кܸߵĿ��ź�������ֵ��</p>';
    star= "����";
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
				alert("����γ�Ȳ�ƥ��");
			}
			break;
		case coordinates[1][0]:
			if(lat==coordinates[1][1]){
				viewer.trackedEntity = entity[1];
				center = entity[1];

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

		default: {
			alert("TAT��������鷢���ˣ�Ŀǰ����ԭ��")
			viewer.trackedEntity = entity[1];
			center = entity[1];
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

