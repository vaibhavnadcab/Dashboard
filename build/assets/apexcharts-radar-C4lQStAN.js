(function(){var e={series:[{name:"Series 1",data:[80,50,30,40,100,20]}],chart:{height:320,type:"radar"},title:{text:"Basic Radar Chart",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},colors:["#5c67f7"],xaxis:{categories:["January","February","March","April","May","June"]}},r=new ApexCharts(document.querySelector("#radar-basic"),e);r.render();var e={series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}],chart:{height:320,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},title:{text:"Radar Chart - Multi Series",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},colors:["#5c67f7","#e354d4","#ff8e6f"],stroke:{width:2},fill:{opacity:.1},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]}},r=new ApexCharts(document.querySelector("#radar-multiple"),e);r.render();var e={series:[{name:"Series 1",data:[20,100,40,30,50,80,33]}],chart:{height:320,type:"radar"},dataLabels:{enabled:!0},plotOptions:{radar:{size:80,polygons:{strokeColors:"#e9e9e9"}}},title:{text:"Radar with Polygon Fill",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},colors:["#e354d4"],markers:{size:4,colors:["#fff"],strokeColor:"#e354d4",strokeWidth:2},tooltip:{y:{formatter:function(t){return t}}},xaxis:{categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},yaxis:{tickAmount:7,labels:{formatter:function(t,a){return a%2===0?t:""}}}},r=new ApexCharts(document.querySelector("#radar-polygon"),e);r.render()})();