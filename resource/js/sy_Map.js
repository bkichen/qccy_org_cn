
// 创建地址解析器实例
var map1 = new BMap.Map("container");          // 创建Map实例
            var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
            map1.centerAndZoom(new BMap.Point(116.404, 39.915), 15);                    // 初始化地图，设置中心点坐标和地图级别。
            map1.addControl(new BMap.NavigationControl());  //导航
            map1.addControl(new BMap.OverviewMapControl()); //缩略
            map1.addControl(new BMap.ScaleControl());     //标尺

function getMap(str){
   $("#a1").removeClass("current");
   $("#a2").addClass("current");
    $("#cont1").css("display","none");
    $("#cont2").css("display","block");
    
   
   
  var name = encodeURI(str);
  var url1= "/articlesMap.do?method=getArticlesIndex&columnName="+name+"&date="+Date();
  if(name == "1"){
  	name = encodeURI($("#search").val());
  	if(name==" "){
  		alert("Enter input text");
  		return false;
  		}
  	url1="/articlesMap.do?method=getArticlesDetail&columnName="+name+"&date="+Date();
  }
  
  
  $.ajax({
			type:"GET",
			url:url1,
			success:function(data,status){
			var str = data.split("|");
			var map = new BMap.Map("container");          // 创建Map实例
            
            map.centerAndZoom(point,10);                  // 初始化地图，设置中心点坐标和地图级别。
            map.addControl(new BMap.NavigationControl());  //导航
            map.addControl(new BMap.OverviewMapControl()); //缩略
            map.addControl(new BMap.ScaleControl());     //标尺
			
			$(str).each(function(i){
			var add=str[i].split(",")[0];
			var titles=str[i].split(",")[1];
			var addinfo=str[i].split(",")[2];
			      
			var myGeo = new BMap.Geocoder(); 
					myGeo.getPoint(add, function(point){                        
                     if (point) {               
                       map.centerAndZoom(point, 12);
                          var marker = new BMap.Marker(point);
                          var opts = {
		         	               width : 250,     // 信息窗口宽度
		         	               height: 100,     // 信息窗口高度
		        	               title : titles  // 信息窗口标题
		                     	} 
   	                     marker.addEventListener("click",function(){
    	       	                marker.openInfoWindow(new BMap.InfoWindow(addinfo,opts));
       	                 });
                         map.addOverlay(marker);
                         
                      }
                     else{
                    	   map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
     
		                   var local = new BMap.LocalSearch(map, {
	                           renderOptions:{map: map}
	                      	});
		
		                   local.search(titles);	
                     }
            }, "北京市");
			})
			 
			}
		});

}
