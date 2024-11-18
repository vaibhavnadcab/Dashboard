(function(){var t={series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],chart:{height:320,type:"line",zoom:{enabled:!1}},colors:["#5c67f7"],dataLabels:{enabled:!1},stroke:{curve:"straight",width:3},grid:{borderColor:"#f2f5f7"},title:{text:"Product Trends by Month",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},a=new ApexCharts(document.querySelector("#line-chart"),t);a.render();var t={series:[{name:"High - 2013",data:[28,29,33,36,32,32,33]},{name:"Low - 2013",data:[12,11,14,18,17,13,13]}],chart:{height:320,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#5c67f7","#e354d4"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"Average High & Low Temperature",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},grid:{borderColor:"#f2f5f7"},markers:{size:1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"],title:{text:"Month",fontSize:"13px",fontWeight:"bold",style:{color:"#8c9097"}},labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{title:{text:"Temperature",fontSize:"13px",fontWeight:"bold",style:{color:"#8c9097"}},labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},min:5,max:40},legend:{position:"top",horizontalAlign:"right",offsetX:-10}},a=new ApexCharts(document.querySelector("#line-chart-datalabels"),t);a.render();for(var h=14844186e5,u=[],f=0;f<120;f++){h=h+864e5;var y=[h,dataSeries[1][f].value];u.push(y)}var t={series:[{name:"XYZ MOTORS",data:u}],chart:{type:"area",stacked:!1,height:320,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom"}},dataLabels:{enabled:!1},markers:{size:0},title:{text:"Stock Price Movement",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},grid:{borderColor:"#f2f5f7"},colors:["#5c67f7"],yaxis:{labels:{formatter:function(e){return(e/1e6).toFixed(0)},show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},title:{text:"Price",fontSize:"13px",fontWeight:"bold",style:{color:"#8c9097"}}},xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},tooltip:{shared:!1,y:{formatter:function(e){return(e/1e6).toFixed(0)}}}},a=new ApexCharts(document.querySelector("#zoom-chart"),t);a.render();var t={series:[{data:series.monthDataSeries2.prices}],colors:["#5c67f7"],chart:{height:320,type:"line",id:"areachart-2"},annotations:{yaxis:[{y:8200,borderColor:"#00E396",label:{borderColor:"#00E396",style:{color:"#fff",background:"#00E396"},text:"Support"}},{y:8600,y2:9e3,borderColor:"#000",fillColor:"#FEB019",opacity:.2,label:{borderColor:"#333",style:{fontSize:"10px",color:"#333",background:"#FEB019"},text:"Y-axis range"}}],xaxis:[{x:new Date("23 Nov 2017").getTime(),strokeDashArray:0,borderColor:"#775DD0",label:{borderColor:"#775DD0",style:{color:"#fff",background:"#775DD0"},text:"Anno Test"}},{x:new Date("26 Nov 2017").getTime(),x2:new Date("28 Nov 2017").getTime(),fillColor:"#B3F7CA",opacity:.4,label:{borderColor:"#B3F7CA",style:{fontSize:"10px",color:"#fff",background:"#00E396"},offsetY:-10,text:"X-axis range"}}],points:[{x:new Date("01 Dec 2017").getTime(),y:8607.55,marker:{size:8,fillColor:"#fff",strokeColor:"red",radius:2,cssClass:"apexcharts-custom-class"},label:{borderColor:"#FF4560",offsetY:0,style:{color:"#fff",background:"#FF4560"},text:"Point Annotation"}},{x:new Date("08 Dec 2017").getTime(),y:9340.85,marker:{size:0},image:{path:"https://laravelui.spruko.com/xintra/build/assets/images/faces/1.jpg"}}]},dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{borderColor:"#f2f5f7"},title:{text:"Line with Annotations",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},labels:series.monthDataSeries1.dates,xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},a=new ApexCharts(document.querySelector("#annotation-chart"),t);a.render();var t={series:[{data:[34,44,54,21,12,43,33,23,66,66,58]}],chart:{type:"line",height:345},stroke:{curve:"stepline"},grid:{borderColor:"#f2f5f7"},dataLabels:{enabled:!1},colors:["#5c67f7"],title:{text:"Stepline Chart",align:"left"},markers:{hover:{sizeOffset:4}},xaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},m=new ApexCharts(document.querySelector("#stepline-chart"),t);m.render();var t={series:[{name:"Sales",data:[4,3,10,9,29,19,22,9,12,7,19,5,13,9,17,2,7,5]}],chart:{height:320,type:"line"},forecastDataPoints:{count:7},stroke:{width:3,curve:"smooth"},xaxis:{type:"datetime",categories:["1/11/2000","2/11/2000","3/11/2000","4/11/2000","5/11/2000","6/11/2000","7/11/2000","8/11/2000","9/11/2000","10/11/2000","11/11/2000","12/11/2000","1/11/2001","2/11/2001","3/11/2001","4/11/2001","5/11/2001","6/11/2001"],tickAmount:10,labels:{formatter:function(e,r,s){return s.dateFormatter(new Date(r),"dd MMM")},style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},grid:{borderColor:"#f2f5f7"},title:{text:"Forecast",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#5c67f7"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},yaxis:{min:-10,max:40,labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}}},a=new ApexCharts(document.querySelector("#gradient-chart"),t);a.render();var t={series:[{name:"Peter",data:[5,5,10,8,7,5,4,null,null,null,10,10,7,8,6,9]},{name:"Johnny",data:[10,15,null,12,null,10,12,15,null,null,12,null,14,null,null,null]},{name:"David",data:[null,null,null,null,3,4,1,3,4,6,7,9,5,null,null,null]}],chart:{height:320,type:"line",zoom:{enabled:!1},animations:{enabled:!1}},grid:{borderColor:"#f2f5f7"},stroke:{width:[3,3,2],curve:"straight"},colors:["#5c67f7","#e354d4","#ff8e6f"],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],title:{text:"Missing data (null values)",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},xaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},a=new ApexCharts(document.querySelector("#null-chart"),t);a.render(),Apex={chart:{height:160},dataLabels:{enabled:!1},stroke:{curve:"straight"},toolbar:{tools:{selection:!1}},markers:{size:6,hover:{size:10}},tooltip:{followCursor:!1,theme:"dark",x:{show:!1},marker:{show:!1},y:{title:{formatter:function(){return""}}}},grid:{clipMarkers:!1},yaxis:{tickAmount:2},xaxis:{type:"datetime"}};var t={series:[{data:n(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})}],chart:{id:"fb",group:"social",type:"line",height:160},colors:["#5c67f7"],stroke:{curve:"straight",width:3},grid:{borderColor:"#f2f5f7"},xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},a=new ApexCharts(document.querySelector("#chart-line"),t);a.render();var g={series:[{data:n(new Date("11 Feb 2017").getTime(),20,{min:10,max:30})}],chart:{id:"tw",group:"social",type:"line",height:160},stroke:{curve:"straight",width:3},colors:["#e354d4"],grid:{borderColor:"#f2f5f7"},xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},w=new ApexCharts(document.querySelector("#chart-line2"),g);w.render();var C={series:[{data:n(new Date("11 Feb 2017").getTime(),20,{min:10,max:60})}],chart:{id:"yt",group:"social",type:"area",height:160},stroke:{curve:"straight",width:3},colors:["#ff8e6f"],grid:{borderColor:"#f2f5f7"},xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},S=new ApexCharts(document.querySelector("#chart-area"),C);S.render();var t={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[87,57,74,99,75,38,62,47,82,56,45,47]}],chart:{height:320,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:[3,4,3],curve:"straight",dashArray:[0,8,5]},colors:["#5c67f7","#e354d4","#ff8e6f"],title:{text:"Page Statistics",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},legend:{tooltipHoverFormatter:function(e,r){return e+" - "+r.w.globals.series[r.seriesIndex][r.dataPointIndex]}},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"],labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},tooltip:{y:[{title:{formatter:function(e){return e+" (mins)"}}},{title:{formatter:function(e){return e+" per session"}}},{title:{formatter:function(e){return e}}}]},grid:{borderColor:"#f1f1f1"}},a=new ApexCharts(document.querySelector("#dashed-chart"),t);a.render();var x=0,l=[],d=864e5;let b=7776e5;function v(e,r,s){for(var o=0;o<r;){var i=e,c=Math.floor(Math.random()*(s.max-s.min+1))+s.min;l.push({x:i,y:c}),x=e,e+=d,o++}}v(new Date("11 Feb 2017 GMT").getTime(),10,{min:10,max:90});function z(e,r){var s=e+d;x=s;for(var o=0;o<l.length-10;o++)l[o].x=s-b-d,l[o].y=0;l.push({x:s,y:Math.floor(Math.random()*(r.max-r.min+1))+r.min})}var t={series:[{data:l.slice()}],chart:{id:"dynamic-chart",height:320,type:"line",animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},colors:["#5c67f7"],stroke:{curve:"smooth",width:3},title:{text:"Dynamic Updating Chart",align:"left",style:{fontSize:"13px",fontWeight:"bold",color:"#8c9097"}},markers:{size:0},xaxis:{type:"datetime",range:b,labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{max:100,labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},legend:{show:!1}},a=new ApexCharts(document.querySelector("#dynamic-chart"),t);a.render(),window.setInterval(function(){z(x,{min:10,max:90}),a.updateSeries([{data:l}])},1e3);function n(e,r,s){for(var o=0,i=[];o<r;){var c=e,p=Math.floor(Math.random()*(s.max-s.min+1))+s.min;i.push([c,p]),e+=864e5,o++}return i}var l=n(new Date("11 Feb 2017").getTime(),185,{min:30,max:90}),t={series:[{data:l}],chart:{id:"chart2",type:"line",height:200,toolbar:{autoSelected:"pan",show:!1}},colors:["#5c67f7"],stroke:{width:3},fill:{opacity:1},markers:{size:0},grid:{borderColor:"#f2f5f7"},xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}}},yaxis:{labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},a=new ApexCharts(document.querySelector("#brush-chart1"),t);a.render();var W={series:[{data:l}],chart:{id:"chart1",height:130,type:"area",brush:{target:"chart2",enabled:!0},selection:{enabled:!0,xaxis:{min:new Date("19 Jun 2017").getTime(),max:new Date("14 Aug 2017").getTime()}}},dataLabels:{enabled:!1},colors:["#e354d4"],fill:{type:"gradient",gradient:{opacityFrom:.91,opacityTo:.1}},grid:{borderColor:"#f2f5f7"},markers:{size:0},xaxis:{type:"datetime",labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-xaxis-label"}},tooltip:{enabled:!1}},yaxis:{tickAmount:2,labels:{show:!0,style:{colors:"#8c9097",fontSize:"11px",fontWeight:600,cssClass:"apexcharts-yaxis-label"}}}},k=new ApexCharts(document.querySelector("#brush-chart"),W);k.render()})();
