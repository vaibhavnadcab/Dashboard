var e={series:[{data:[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,53,53,61,27,54,43,19,46]}],chart:{type:"area",height:50,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"var(--primary-color)",opacity:.4}},stroke:{curve:"straight",width:"1"},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60],colorStops:[[{offset:0,color:"var(--primary01)",opacity:.3},{offset:60,color:"var(--primary01)",opacity:.3}]]}},colors:["var(--primary-color)"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(r){return""}}}}},o=new ApexCharts(document.querySelector("#employees"),e);o.render();var e={series:[{data:[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,53,53,61,27,54,43,19,46]}],chart:{type:"area",height:50,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"rgb(227, 84, 212)",opacity:.4}},stroke:{curve:"straight",width:"1"},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60],colorStops:[[{offset:0,color:"rgba(227, 84, 212, 0.1)",opacity:.3},{offset:60,color:"rgba(227, 84, 212, 0.1)",opacity:.3}]]}},colors:["rgb(227, 84, 212)"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(r){return""}}}}},t=new ApexCharts(document.querySelector("#job-applied"),e);t.render();var e={series:[{data:[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,53,53,61,27,54,43,19,46]}],chart:{type:"area",height:50,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"rgb(255, 93, 159)",opacity:.4}},stroke:{curve:"straight",width:"1"},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60],colorStops:[[{offset:0,color:"rgba(255, 93, 159, 0.1)",opacity:.3},{offset:60,color:"rgba(255, 93, 159, 0.1)",opacity:.3}]]}},colors:["rgb(255, 93, 159)"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(r){return""}}}}},a=new ApexCharts(document.querySelector("#total-payouts"),e);a.render();var e={series:[{data:[47,45,54,38,56,24,65,31,37,39,62,51,35,41,35,27,53,53,61,27,54,43,19,46]}],chart:{type:"area",height:50,sparkline:{enabled:!0},dropShadow:{enabled:!0,enabledOnSeries:void 0,top:0,left:0,blur:3,color:"rgb(255, 142, 111)",opacity:.4}},stroke:{curve:"straight",width:"1"},fill:{type:"gradient",gradient:{opacityFrom:.5,opacityTo:.2,stops:[0,60],colorStops:[[{offset:0,color:"rgba(255, 142, 111, 0.1)",opacity:.3},{offset:60,color:"rgba(255, 142, 111, 0.1)",opacity:.3}]]}},colors:["rgb(255, 142, 111)"],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(r){return""}}}}},s=new ApexCharts(document.querySelector("#gross-salary"),e);s.render();var e={series:[{type:"bar",name:"New Projects",data:[45,30,49,45,36,42,30,35,35,54,29,36]},{type:"bar",name:"Inprogress Projects",data:[30,35,25,20,35,25,36,54,36,29,49,42]},{type:"line",name:"Completed Projects",data:[15,30,19,30,34,25,36,45,36,29,49,42]},{type:"area",name:"Onhold Projects",data:[15,20,20,15,25,25,15,15,45,30,45,20]}],chart:{type:"bar",height:336,toolbar:{show:!1},dropShadow:{enabled:!1}},plotOptions:{bar:{columnWidth:"33%",borderRadiusApplication:"around",borderRadiusWhenStacked:"all",borderRadius:3}},stroke:{show:!0,curve:"smooth",lineCap:"butt",width:[5,5,2,2],dashArray:[0,0,3,3]},grid:{borderColor:"#f5f4f4",strokeDashArray:5,yaxis:{lines:{show:!0}}},colors:["var(--primary-color)","rgba(227, 84, 212, 0.4)","rgba(255, 93, 159, 0.2)","rgba(255, 142, 111, 0.1)"],dataLabels:{enabled:!1},legend:{show:!1,position:"bottom"},yaxis:{title:{style:{color:"#adb5be",fontSize:"14px",fontFamily:"Montserrat, sans-serif",fontWeight:600,cssClass:"apexcharts-yaxis-label"}},axisBorder:{show:!0,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!0,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{formatter:function(r){return r.toFixed(0)+""}}},xaxis:{type:"month",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","sep","oct","nov","dec"],axisBorder:{show:!1,color:"rgba(119, 119, 142, 0.05)",offsetX:0,offsetY:0},axisTicks:{show:!1,borderType:"solid",color:"rgba(119, 119, 142, 0.05)",width:6,offsetX:0,offsetY:0},labels:{rotate:-90}}};document.getElementById("project-analysis").innerHTML="";var o=new ApexCharts(document.querySelector("#project-analysis"),e);o.render();var e={series:[500,350,150],chart:{height:288,type:"polarArea"},labels:["Total","Male","Female"],fill:{opacity:.9},stroke:{width:1,colors:void 0},colors:["var(--primary-color)","rgb(227, 84, 212)","rgb(255, 93, 159)"],yaxis:{show:!1},legend:{position:"bottom"}},i=new ApexCharts(document.querySelector("#gender-chart"),e);i.render();