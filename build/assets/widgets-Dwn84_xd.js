(function(){var o={chart:{type:"area",height:50,width:120,sparkline:{enabled:!0}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:2,dashArray:0,fill:{type:"gradient",gradient:{type:"horizontal",colorStops:[[{offset:0,color:"var(--primary-color)",opacity:1},{offset:100,color:"var(--primary-color)",opacity:1}]]}}},fill:{type:"gradient",gradient:{shadeIntensity:1,type:"horizontal",colorStops:[[{offset:0,color:"var(--primary-color)",opacity:.08},{offset:90,color:"var(--primary-color)",opacity:.08}]]}},series:[{name:"Value",data:[14,48,26,36,26,75,45,20,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["var(--primary-color)"]},o=new ApexCharts(document.querySelector("#chart-01"),o);o.render();var s={chart:{type:"area",height:50,width:120,sparkline:{enabled:!0}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:2,dashArray:0,fill:{type:"gradient",gradient:{type:"horizontal",colorStops:[[{offset:0,color:"rgb(227, 84, 212)",opacity:1},{offset:100,color:"rgb(227, 84, 212)",opacity:1}]]}}},fill:{type:"gradient",gradient:{shadeIntensity:1,type:"horizontal",colorStops:[[{offset:0,color:"rgb(227, 84, 212)",opacity:.08},{offset:90,color:"rgb(227, 84, 212)",opacity:.08}]]}},series:[{name:"Value",data:[14,48,26,36,26,75,45,20,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["rgb(227, 84, 212)"]},s=new ApexCharts(document.querySelector("#chart-2"),s);s.render();var t={chart:{type:"area",height:50,width:120,sparkline:{enabled:!0}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:2,dashArray:0,fill:{type:"gradient",gradient:{type:"horizontal",colorStops:[[{offset:0,color:"rgb(255, 142, 111)",opacity:1},{offset:100,color:"rgb(255, 142, 111)",opacity:1}]]}}},fill:{type:"gradient",gradient:{shadeIntensity:1,type:"horizontal",colorStops:[[{offset:0,color:"rgb(255, 142, 111)",opacity:.08},{offset:90,color:"rgb(255, 142, 111)",opacity:.08}]]}},series:[{name:"Value",data:[14,48,26,36,26,75,45,20,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["rgb(255, 142, 111)"]},t=new ApexCharts(document.querySelector("#chart-3"),t);t.render();var l={chart:{type:"area",height:50,width:120,sparkline:{enabled:!0}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:2,dashArray:0,fill:{type:"gradient",gradient:{type:"horizontal",colorStops:[[{offset:0,color:"rgb(255, 93, 159)",opacity:1},{offset:100,color:"rgb(255, 93, 159)",opacity:1}]]}}},fill:{type:"gradient",gradient:{shadeIntensity:1,type:"horizontal",colorStops:[[{offset:0,color:"rgb(255, 93, 159)",opacity:.08},{offset:90,color:"rgb(255, 93, 159)",opacity:.08}]]}},series:[{name:"Value",data:[14,48,26,36,26,75,45,20,55]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["var(--primary-color)"]},l=new ApexCharts(document.querySelector("#chart-4"),l);l.render();var a={chart:{height:275,type:"radialBar",responsive:"true"},plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{margin:0,size:"60%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front"},dataLabels:{show:!0,name:{offsetY:-10,show:!0,color:"var(--text-muted)",fontSize:"14px",fontWeight:"400"},value:{formatter:function(i){return parseInt(i)},color:"#111",fontSize:"36px",show:!0}}}},colors:["rgb(227, 84, 212)","var(--primary-color)"],stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},fill:{type:"gradient",gradient:{type:"horizontal",shadeIntensity:.5,gradientToColors:["var(--primary-color)"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[85],labels:["Total Sales"]},e=new ApexCharts(document.querySelector("#circlechart"),a);e.render();var a={series:[88,85,75,60],labels:["Delivered","Returned","Cancelled","Pending"],chart:{height:218,type:"radialBar"},dataLabels:{enabled:!1},legend:{show:!1},stroke:{show:!0,curve:"smooth",lineCap:"round",colors:"#fff",width:0,dashArray:0},plotOptions:{radialBar:{dataLabels:{name:{offsetY:-3,show:!0,color:"var(--text-muted)",fontSize:"14px",fontWeight:"400"},value:{color:"#111",fontSize:"14px",offsetY:2,show:!0},total:{show:!0,label:"Total",color:"var(--text-muted)",formatter:function(i){return 380}}}}},colors:["var(--primary08)","rgba(227, 84, 212, 0.8)","rgba(255, 93, 159, 0.8)","rgba(255, 142, 111, 0.8)"]},n=new ApexCharts(document.querySelector("#recent-orders"),a);n.render();var a={series:[{name:"Revenue",data:[34,84,15,36,18,19,38,65,21]},{name:"Profit",data:[14,65,24,88,12,65,89,65,48]}],chart:{height:320,type:"line",zoom:{enabled:!1},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:2,left:0,blur:6,color:["rgb(227, 84, 212)","var(--primary-color)"],opacity:.3},toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!0,position:"top",offsetX:0,offsetY:8,markers:{width:5,height:5,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:12,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0}},stroke:{curve:"smooth",width:["2","2"],dashArray:[2,1]},grid:{borderColor:"#f5f4f4",strokeDashArray:3},colors:["rgb(227, 84, 212)","var(--primary-color)"],yaxis:{},xaxis:{type:"week",categories:["0.1","0.2","0.3","0.4","0.5","0.6","0.7","0.8","0.9","1","1.1","1.2","1.3","1.4"],axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}},d=new ApexCharts(document.querySelector("#salerevenue1"),a);d.render();var o={chart:{type:"bar",height:80,width:100,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:3,bottom:-50,left:0,blur:3,color:"var(--primary-color)",opacity:.3}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.9,dashArray:3},series:[{name:"Value",data:[14,20,15,25,33,58]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["var(--primary-color)"]},o=new ApexCharts(document.querySelector("#chart-5"),o);o.render();var s={chart:{type:"bar",height:80,width:100,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:3,bottom:-50,left:0,blur:3,color:"rgb(227, 84, 212)",opacity:.3}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.9,dashArray:3},series:[{name:"Value",data:[14,20,15,25,33,58]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["rgb(227, 84, 212)"]},s=new ApexCharts(document.querySelector("#chart-6"),s);s.render();var t={chart:{type:"bar",height:80,width:100,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:3,bottom:-50,left:0,blur:3,color:"rgb(255, 93, 159)",opacity:.3}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.9,dashArray:3},series:[{name:"Value",data:[14,20,15,25,33,58]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["rgb(255, 93, 159)"]},t=new ApexCharts(document.querySelector("#chart-7"),t);t.render();var l={chart:{type:"bar",height:80,width:100,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:3,bottom:-50,left:0,blur:3,color:"rgb(255, 142, 111)",opacity:.3}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",endingShape:"rounded"}},grid:{show:!1,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:1.9,dashArray:3},series:[{name:"Value",data:[14,20,15,25,33,58]}],yaxis:{min:0,show:!1},xaxis:{show:!1,axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{axisBorder:{show:!1}},colors:["rgb(254, 124, 88)"]},l=new ApexCharts(document.querySelector("#chart-8"),l);l.render();var r={series:[{name:"This Week",data:[88,42,65,44,57,35,33]},{name:"Last Week",data:[-24,-38,-31,-57,-37,-22,-14]}],chart:{toolbar:{show:!1},type:"bar",width:100,height:100,stacked:!0},colors:["rgb(158, 92, 247)","var(--primary-color)"],plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},labels:{show:!1}},yaxis:{tickAmount:4,labels:{show:!1}}},e=new ApexCharts(document.querySelector("#chart-10"),r);e.render();var r={series:[{name:"This Week",data:[68,44,87,35,22,10,88]},{name:"Last Week",data:[-45,-57,-88,-22,-45,-45,-12]}],chart:{toolbar:{show:!1},type:"bar",width:100,height:100,stacked:!0},colors:["#AB54E3","rgb(227, 84, 212)"],plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},labels:{show:!1}},yaxis:{tickAmount:4,labels:{show:!1}}},e=new ApexCharts(document.querySelector("#chart-11"),r);e.render();var r={series:[{name:"This Week",data:[87,45,12,23,56,89,45]},{name:"Last Week",data:[-11,-56,-44,-89,-33,-44,-88]}],chart:{toolbar:{show:!1},type:"bar",width:100,height:100,stacked:!0},colors:["#FF6C5D","rgb(255, 93, 159)"],plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},labels:{show:!1}},yaxis:{tickAmount:4,labels:{show:!1}}},e=new ApexCharts(document.querySelector("#chart-12"),r);e.render();var r={series:[{name:"This Week",data:[77,42,88,14,89,44,45]},{name:"Last Week",data:[-65,-45,-11,-12,-25,-36,-14]}],chart:{toolbar:{show:!1},type:"bar",width:100,height:100,stacked:!0},colors:["#FF663C","rgb(255, 142, 111)"],plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{borderColor:"rgba(0,0,0,0.1)",xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},labels:{show:!1}},yaxis:{tickAmount:4,labels:{show:!1}}},e=new ApexCharts(document.querySelector("#chart-13"),r);e.render();var h={series:[{name:"Sales",data:[144,155,141,142,122,143,121,135,156,127,143,127]},{name:"Profit",data:[133,21,32,37,123,32,47,131,54,132,20,138]},{name:"Income",data:[30,125,36,30,45,135,64,51,59,136,39,51]},{name:"Revenue",data:[30,125,36,30,45,135,64,51,59,136,39,51]}],chart:{toolbar:{show:!1},type:"bar",fontFamily:"'Roboto', sans-serif",fontWeight:"600",height:322,stacked:!0},colors:["var(--primary-color)","rgb(227, 84, 212)","rgb(255, 142, 111)","rgb(255, 93, 159)"],plotOptions:{bar:{horizontal:!1,columnWidth:"20%",borderRadius:"4"}},dataLabels:{enabled:!1},legend:{show:!0,position:"top",offsetX:0,offsetY:8,fontSize:"14px",markers:{width:9,height:9,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:12,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0}},grid:{borderColor:"rgba(0,0,0,0.1)",strokeDashArray:3,xaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yaxis:{tickAmount:4}},f=new ApexCharts(document.querySelector("#salerevenue"),h);f.render();var a={series:[{name:"Orders",data:[24,57,55,18,44,88,65,88,66,55,25,88]},{name:"Delivered",data:[-8,-40,-15,-32,-45,-30,-20,-35,-28,-43,-65,-35]},{name:"Cancelled",data:[18,40,32,65,45,30,-20,35,28,43,-30,-40]}],chart:{type:"line",height:288,toolbar:{show:!1}},colors:["var(--primary-color)","rgb(227, 84, 212)","rgb(255, 93, 159)"],markers:{size:3},dataLabels:{enabled:!1},legend:{show:!0,position:"top",offsetX:0,offsetY:8,markers:{width:5,height:5,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:12,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0}},stroke:{curve:"stepline",width:[2,2,2],lineCap:"round"},grid:{borderColor:"#edeef1",strokeDashArray:2},yaxis:{axisBorder:{show:!0,color:"rgba(227, 84, 212, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(227, 84, 212, 0.05)",width:6,offsetX:0,offsetY:0}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!1,color:"rgba(227, 84, 212, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!1,borderType:"solid",color:"rgba(227, 84, 212, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}},c=new ApexCharts(document.querySelector("#salerevenue2"),a);c.render();var a={series:[{type:"area",name:"Sales",data:[14,35,85,88,45,56,25,36,14,85,96,74]},{type:"bar",name:"Revenue",data:[47,55,56,33,33,48,48,22,22,86,88,99]}],chart:{type:"line",height:290,toolbar:{show:!1},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:7,left:1,blur:3,color:["#000","#000"],opacity:.1}},grid:{show:!1,borderColor:"#f2f6f7"},colors:["rgb(227, 84, 212)","var(--primary-color)"],fill:{type:["gradient","none"],gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.1,stops:[0,90,100],colorStops:[[{offset:0,color:"rgba(227, 84, 212,0.05)",opacity:1},{offset:75,color:"rgba(227, 84, 212,0.05)",opacity:1},{offset:100,color:"rgba(227, 84, 212,0.05)",opacity:1}],[{offset:0,color:"var(--primary005)",opacity:1},{offset:75,color:"var(--primary005)",opacity:1},{offset:100,color:"var(--primary005)",opacity:1}]]}},plotOptions:{bar:{horizontal:!1,columnWidth:"35%",borderRadius:"4"}},stroke:{curve:"smooth",width:[1.5,1.5],lineCap:"round"},dataLabels:{enabled:!1},legend:{show:!0,position:"bottom",offsetX:0,offsetY:8,markers:{width:8,height:8,strokeWidth:0,strokeColor:"#fff",fillColors:void 0,radius:12,customHTML:void 0,onClick:void 0,offsetX:0,offsetY:0}},yaxis:{Show:!0,labels:{show:!0}},xaxis:{show:!1,type:"day",categories:["J","F","M","A","M","J","J","A","S","O","N","D"],axisBorder:{show:!1,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0}}},e=new ApexCharts(document.querySelector("#top-sales"),a);e.render();var a={series:[90,80,75],chart:{height:250,type:"radialBar"},plotOptions:{radialBar:{startAngle:-180,endAngle:180,hollow:{margin:10,size:"60%"},dataLabels:{name:{fontSize:"25px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(i){return 358}}}}},stroke:{dashArray:[0,3,1]},colors:["var(--primary-color)","rgb(227, 84, 212)","rgb(255, 93, 159)"],labels:["Apps","Offline","Website"]},r=new ApexCharts(document.querySelector("#activecustomers"),a);r.render()})();