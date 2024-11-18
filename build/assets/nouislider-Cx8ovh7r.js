(function(){"use strcit";var t=document.getElementById("slider");noUiSlider.create(t,{start:[30,80],connect:!0,range:{min:0,max:100}});var t=document.getElementById("slider-fit");noUiSlider.create(t,{start:[50,90],connect:!0,range:{min:1,max:100}});var t=document.getElementById("slider-round");noUiSlider.create(t,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var l=document.getElementById("primary-colored-slider");noUiSlider.create(l,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var l=document.getElementById("primary1-colored-slider");noUiSlider.create(l,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var l=document.getElementById("primary2-colored-slider");noUiSlider.create(l,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var l=document.getElementById("primary3-colored-slider");noUiSlider.create(l,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var R=document.getElementById("secondary-colored-slider");noUiSlider.create(R,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var D=document.getElementById("warning-colored-slider");noUiSlider.create(D,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var F=document.getElementById("info-colored-slider");noUiSlider.create(F,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var W=document.getElementById("success-colored-slider");noUiSlider.create(W,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var z=document.getElementById("danger-colored-slider");noUiSlider.create(z,{start:[50],step:1,connect:[!0,!1],range:{min:0,max:100}});var t=document.getElementById("slider-square");noUiSlider.create(t,{start:[40],connect:!0,range:{min:0,max:100}});var P=document.getElementById("result"),G=document.querySelectorAll(".sliders"),T=[0,0,0];G.forEach(function(e,r){noUiSlider.create(e,{start:127,connect:[!0,!1],orientation:"vertical",range:{min:0,max:255},format:wNumb({decimals:0})}),e.noUiSlider.on("update",function(){T[r]=e.noUiSlider.get();var i="rgb("+T.join(",")+")";P.style.background=i,P.style.color=i})});var v=!1,h=[60,80],d=document.getElementById("slider1"),s=document.getElementById("slider2"),J=document.getElementById("lockbutton"),K=document.getElementById("slider1-span"),Q=document.getElementById("slider2-span");J.addEventListener("click",function(){v=!v,this.textContent=v?"unlock":"lock"});function V(e,r){if(v){var i=d===r?0:1,p=i?0:1;e-=h[p]-h[i],r.noUiSlider.set(e)}}noUiSlider.create(d,{start:60,animate:!1,range:{min:50,max:100}}),noUiSlider.create(s,{start:80,animate:!1,range:{min:50,max:100}}),d.noUiSlider.on("update",function(e,r){K.innerHTML=e[r]}),s.noUiSlider.on("update",function(e,r){Q.innerHTML=e[r]});function q(){h=[Number(d.noUiSlider.get()),Number(s.noUiSlider.get())]}d.noUiSlider.on("change",q),s.noUiSlider.on("change",q),d.noUiSlider.on("slide",function(e,r){V(e[r],s)}),s.noUiSlider.on("slide",function(e,r){V(e[r],d)});var w=document.getElementById("merging-tooltips");noUiSlider.create(w,{start:[20,80],connect:!0,tooltips:[!0,!0],range:{min:0,max:100}}),X(w,15," - ");function X(e,r,i){var p=getComputedStyle(e).direction==="rtl",L=e.noUiSlider.options.direction==="rtl",M=e.noUiSlider.options.orientation==="vertical",a=e.noUiSlider.getTooltips(),j=e.noUiSlider.getOrigins();a.forEach(function(m,N){m&&j[N].appendChild(m)}),e.noUiSlider.on("update",function(m,N,oe,ie,u){var y=[[]],g=[[]],U=[[]],c=0;a[0]&&(y[0][0]=0,g[0][0]=u[0],U[0][0]=m[0]);for(var o=1;o<u.length;o++)(!a[o]||u[o]-u[o-1]>r)&&(c++,y[c]=[],U[c]=[],g[c]=[]),a[o]&&(y[c].push(o),U[c].push(m[o]),g[c].push(u[o]));y.forEach(function(O,b){for(var E=O.length,B=0;B<E;B++){var I=O[B];if(B===E-1){var x=0;g[b].forEach(function(ne){x+=1e3-ne});var ee=M?"bottom":"right",re=L?0:E-1,te=1e3-g[b][re];x=(p&&!M?100:0)+x/E-te,a[I].innerHTML=U[b].join(i),a[I].style.display="block",a[I].style[ee]=x+"%"}else a[I].style.display="none"}})})}var A=document.getElementById("nonlinear");noUiSlider.create(A,{connect:!0,behaviour:"tap",start:[500,4e3],range:{min:[0],"10%":[500,500],"50%":[4e3,1e3],max:[1e4]}});var Y=[document.getElementById("lower-value"),document.getElementById("upper-value")];A.noUiSlider.on("update",function(e,r,i,p,L){Y[r].innerHTML=e[r]+", "+L[r].toFixed(2)+"%"});var Z=document.getElementById("slider-hide");noUiSlider.create(Z,{start:[30,80],tooltips:!0,connect:!0,range:{min:0,max:100}});var t=document.getElementById("color-slider");noUiSlider.create(t,{start:[20,150,220,270],connect:[!1,!0,!0,!0,!0],range:{min:[0],max:[300]}});for(var H=t.querySelectorAll(".noUi-connect"),_=["c-1-color","c-2-color","c-3-color","c-4-color","c-5-color"],n=0;n<H.length;n++)H[n].classList.add(_[n]);var S=document.getElementById("slider-toggle");noUiSlider.create(S,{orientation:"vertical",start:0,range:{min:[0,1],max:1},format:wNumb({decimals:0})}),S.noUiSlider.on("update",function(e,r){e[r]==="1"?S.classList.add("off"):S.classList.remove("off")});var k=document.getElementById("slider-pips");noUiSlider.create(k,{range:{min:0,max:100},start:[50],pips:{mode:"count",values:5}});var C=k.querySelectorAll(".noUi-value");function $(){var e=Number(this.getAttribute("data-value"));k.noUiSlider.set(e)}for(var n=0;n<C.length;n++)C[n].style.cursor="pointer",C[n].addEventListener("click",$);var f=document.getElementById("soft");noUiSlider.create(f,{start:50,range:{min:0,max:100},pips:{mode:"values",values:[20,80],density:4}}),f.noUiSlider.on("change",function(e,r){e[r]<20?f.noUiSlider.set(20):e[r]>80&&f.noUiSlider.set(80)})})();