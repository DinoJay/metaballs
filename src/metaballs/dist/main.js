var MetaballSimulation=function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=8)}([function(t,e){!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([function(t,e){t.exports={0:[],1:["W","S"],2:["E","S"],3:["W","E"],4:["N","E"],5:["N","W","S","E"],6:["N","S"],7:["N","W"],8:["N","W"],9:["N","S"],10:["N","E","S","W"],11:["N","E"],12:["E","W"],13:["E","S"],14:["S","W"],15:[]}},function(t,e){t.exports=function(t){for(var e=[],i=0;i<t.length-1;i++){e.push([]);for(var s=0;s<t[i].length-1;s++){var r=t[i][s],h=t[i][s+1],l=t[i+1][s],n=t[i+1][s+1];e[i].push((l<<0)+(n<<1)+(h<<2)+(r<<3))}}return e}},function(t,e){t.exports=function(t,e,i,s,r){return t===e?null:i+(s-i)*(r-t)/(e-t)}},function(t,e){t.exports=function(t,e,i){for(var s=0,r=0;r<i.length;r++){var h=i[r],l=t-h.x,n=e-h.y,c=l*l+n*n;s+=h.r2/c}return s}},function(t,e){t.exports=function(t){t.minX;for(var e=t.maxX,i=t.stepX,s=(t.minY,t.maxY),r=t.stepX,h=t.fn,l=Math.ceil(s/r),n=Math.ceil(e/i),c=[],o=0;o<=l;o++){var a=o*r;c.push([]);for(var _=0;_<=n;_++){var f=_*i;c[o].push(h(f,a))}}return c}},function(t,e){t.exports=function(t,e){for(var i=[],s=0;s<t.length;s++){i.push([]);for(var r=0;r<t[s].length;r++)i[s].push(t[s][r]>e)}return i}},function(t,e,i){var s=i(0),r=i(1),h=i(3),l=i(4),n=i(5),c=i(2),o=function(t){if(this.draw=t.draw,!this.draw)throw new Error("Must provide a draw function");if(this._canvas=t.canvas,this._cellSize=t.cellSize,this._threshold=t.threshold||1,this._ctx=this._canvas.getContext("2d"),t.circles)this._circles=t.circles;else{this._circles=[];for(var e=0;e<t.numCircles;e++)this._circles.push(this.generateCircle())}this.recalculate()};o.prototype.clone=function(t){return new o({draw:t.draw||this.draw,canvas:t.canvas||this._canvas,cellSize:t.cellSize||this._cellSize,threshold:t.threshold||this._threshold,circles:this._circles})},o.prototype.generateCircle=function(){var t={x:Math.random()*this._canvas.width,y:Math.random()*this._canvas.height,vx:2*Math.random()-1,vy:2*Math.random()-1,r:30+30*Math.random()};return t.r2=t.r*t.r,t},o.prototype.tickCircles=function(){for(var t=0;t<this._circles.length;t++){var e=this._circles[t];e.x+e.r>this._canvas.width?e.vx=-Math.abs(e.vx):e.x-e.r<0&&(e.vx=+Math.abs(e.vx)),e.y+e.r>this._canvas.height?e.vy=-Math.abs(e.vy):e.y-e.r<0&&(e.vy=+Math.abs(e.vy)),e.x+=e.vx,e.y+=e.vy}},o.prototype.recalculate=function(){this._samples=l({minX:0,maxX:this._canvas.width,stepX:this._cellSize,minY:0,maxY:this._canvas.height,stepY:this._cellSize,fn:function(t,e){return h(t,e,this._circles)}.bind(this)}),this._thresholdedSamples=n(this._samples,this._threshold),this._cellTypes=r(this._thresholdedSamples)},o.prototype.tick=function(){this.tickCircles(),this.recalculate()},o.prototype.drawBg=function(){this._ctx.fillStyle="black",this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)},o.prototype.drawCircles=function(t){this._ctx.strokeStyle=t||"green";for(var e=0;e<this._circles.length;e++){var i=this._circles[e];this._ctx.beginPath(),this._ctx.arc(i.x,i.y,i.r,0,2*Math.PI),this._ctx.stroke()}},o.prototype.drawCornerSamples=function(){this._ctx.fillStyle="#888",this._ctx.font="10px monospace";for(var t=0;t<this._samples.length;t++)for(var e=0;e<this._samples[t].length;e++){var i=this._samples[t][e],s=e*this._cellSize,r=t*this._cellSize;this._ctx.fillRect(s-2,r-2,4,4),this._ctx.fillText((""+i).substr(0,4),s+5,r+7)}},o.prototype.drawThresholdedCells=function(){this._ctx.fillStyle="green";for(var t=0;t<this._thresholdedSamples.length;t++)for(var e=0;e<this._thresholdedSamples[t].length;e++){var i=this._thresholdedSamples[t][e],s=e*this._cellSize,r=t*this._cellSize;i&&this._ctx.fillRect(Math.floor(s-this._cellSize/2),Math.floor(r-this._cellSize/2),this._cellSize,this._cellSize)}},o.prototype.drawThresholdedCorners=function(){this._ctx.fillStyle="#888";for(var t=0;t<this._thresholdedSamples.length;t++)for(var e=0;e<this._thresholdedSamples[t].length;e++){var i=this._thresholdedSamples[t][e],s=e*this._cellSize,r=t*this._cellSize;this._ctx.fillStyle=i?"#0f0":"#888",this._ctx.fillRect(s-2,r-2,4,4)}},o.prototype.drawCellClassification=function(){this._ctx.fillStyle="#888",this._ctx.font="10px monospace";for(var t=0;t<this._cellTypes.length;t++)for(var e=0;e<this._cellTypes[t].length;e++){var i=this._cellTypes[t][e],s=e*this._cellSize+(this._cellSize-10)/2,r=t*this._cellSize+(this._cellSize+10)/2;this._ctx.fillText(i,s,r)}},o.prototype.drawGridLines=function(t,e){this._ctx.strokeStyle="#888";for(var i=t||0;i<this._canvas.width;i+=this._cellSize)this._ctx.beginPath(),this._ctx.moveTo(i,0),this._ctx.lineTo(i,this._canvas.height),this._ctx.stroke();for(var s=e||0;s<this._canvas.height;s+=this._cellSize)this._ctx.beginPath(),this._ctx.moveTo(0,s),this._ctx.lineTo(this._canvas.width,s),this._ctx.stroke()},o.prototype.drawScaledLine=function(t,e){var i=t[1]*this._cellSize,s=t[0]*this._cellSize,r=e[1]*this._cellSize,h=e[0]*this._cellSize;this._ctx.beginPath(),this._ctx.moveTo(i,s),this._ctx.lineTo(r,h),this._ctx.stroke()},o.prototype.draw45DegContours=function(){this._ctx.strokeStyle="green";for(var t=0;t<this._cellTypes.length;t++)for(var e=0;e<this._cellTypes[t].length;e++){var i=this._cellTypes[t][e],r=s[i],h={N:[t,e+.5],W:[t+.5,e],E:[t+.5,e+1],S:[t+1,e+.5]};2===r.length?this.drawScaledLine(h[r[0]],h[r[1]]):4===r.length&&(this.drawScaledLine(h[r[0]],h[r[1]]),this.drawScaledLine(h[r[2]],h[r[3]]))}},o.prototype.drawSmoothContours=function(){this._ctx.strokeStyle="green";for(var t=0;t<this._cellTypes.length;t++)for(var e=0;e<this._cellTypes[t].length;e++){var i=this._cellTypes[t][e],r=s[i],h=this._samples[t][e],l=this._samples[t][e+1],n=this._samples[t+1][e],o=this._samples[t+1][e+1],a=(4&i)==(8&i)?.5:c(h,l,0,1,this._threshold),_=(2&i)==(4&i)?.5:c(l,o,0,1,this._threshold),f=(1&i)==(2&i)?.5:c(n,o,0,1,this._threshold),p={N:[t,e+a],W:[t+((1&i)==(8&i)?.5:c(h,n,0,1,this._threshold)),e],E:[t+_,e+1],S:[t+1,e+f]};2===r.length?this.drawScaledLine(p[r[0]],p[r[1]]):4===r.length&&(this.drawScaledLine(p[r[0]],p[r[1]]),this.drawScaledLine(p[r[2]],p[r[3]]))}},t.exports=o}])},function(t,e){t.exports=function(t,e,i,s,r){return t===e?null:i+(s-i)*(r-t)/(e-t)}},function(t,e){t.exports=function(t,e){for(var i=[],s=0;s<t.length;s++){i.push([]);for(var r=0;r<t[s].length;r++)i[s].push(t[s][r]>e)}return i}},function(t,e){t.exports=function(t){t.minX;for(var e=t.maxX,i=t.stepX,s=(t.minY,t.maxY),r=t.stepX,h=t.fn,l=Math.ceil(s/r),n=Math.ceil(e/i),c=[],o=0;o<=l;o++){var a=o*r;c.push([]);for(var _=0;_<=n;_++){var f=_*i;c[o].push(h(f,a))}}return c}},function(t,e){t.exports=function(t,e,i){for(var s=0,r=0;r<i.length;r++){var h=i[r],l=t-h.x,n=e-h.y,c=l*l+n*n;s+=h.r2/c}return s}},function(t,e){t.exports=function(t){for(var e=[],i=0;i<t.length-1;i++){e.push([]);for(var s=0;s<t[i].length-1;s++){var r=t[i][s],h=t[i][s+1],l=t[i+1][s],n=t[i+1][s+1];e[i].push((l<<0)+(n<<1)+(h<<2)+(r<<3))}}return e}},function(t,e){t.exports={0:[],1:["W","S"],2:["E","S"],3:["W","E"],4:["N","E"],5:["N","W","S","E"],6:["N","S"],7:["N","W"],8:["N","W"],9:["N","S"],10:["N","E","S","W"],11:["N","E"],12:["E","W"],13:["E","S"],14:["S","W"],15:[]}},function(t,e,i){var s=i(6),r=i(5),h=i(4),l=i(3),n=i(2),c=i(1),o=function(t){if(this.draw=t.draw,!this.draw)throw new Error("Must provide a draw function");if(this._canvas=t.canvas,this._cellSize=t.cellSize,this._threshold=t.threshold||1,this._ctx=this._canvas.getContext("2d"),t.circles)this._circles=t.circles;else{this._circles=[];for(var e=0;e<t.numCircles;e++)this._circles.push(this.generateCircle())}this.recalculate()};o.prototype.clone=function(t){return new o({draw:t.draw||this.draw,canvas:t.canvas||this._canvas,cellSize:t.cellSize||this._cellSize,threshold:t.threshold||this._threshold,circles:this._circles})},o.prototype.generateCircle=function(){var t={x:Math.random()*this._canvas.width,y:Math.random()*this._canvas.height,vx:2*Math.random()-1,vy:2*Math.random()-1,r:30+30*Math.random()};return t.r2=t.r*t.r,t},o.prototype.tickCircles=function(){for(var t=0;t<this._circles.length;t++){var e=this._circles[t];e.x+e.r>this._canvas.width?e.vx=-Math.abs(e.vx):e.x-e.r<0&&(e.vx=+Math.abs(e.vx)),e.y+e.r>this._canvas.height?e.vy=-Math.abs(e.vy):e.y-e.r<0&&(e.vy=+Math.abs(e.vy)),e.x+=e.vx,e.y+=e.vy}},o.prototype.recalculate=function(){this._samples=l({minX:0,maxX:this._canvas.width,stepX:this._cellSize,minY:0,maxY:this._canvas.height,stepY:this._cellSize,fn:function(t,e){return h(t,e,this._circles)}.bind(this)}),this._thresholdedSamples=n(this._samples,this._threshold),this._cellTypes=r(this._thresholdedSamples)},o.prototype.tick=function(){this.tickCircles(),this.recalculate()},o.prototype.drawBg=function(){this._ctx.fillStyle="black",this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height)},o.prototype.drawCircles=function(t){this._ctx.strokeStyle=t||"green";for(var e=0;e<this._circles.length;e++){var i=this._circles[e];this._ctx.beginPath(),this._ctx.arc(i.x,i.y,i.r,0,2*Math.PI),this._ctx.stroke()}},o.prototype.drawCornerSamples=function(){this._ctx.fillStyle="#888",this._ctx.font="10px monospace";for(var t=0;t<this._samples.length;t++)for(var e=0;e<this._samples[t].length;e++){var i=this._samples[t][e],s=e*this._cellSize,r=t*this._cellSize;this._ctx.fillRect(s-2,r-2,4,4),this._ctx.fillText((""+i).substr(0,4),s+5,r+7)}},o.prototype.drawThresholdedCells=function(){this._ctx.fillStyle="green";for(var t=0;t<this._thresholdedSamples.length;t++)for(var e=0;e<this._thresholdedSamples[t].length;e++){var i=this._thresholdedSamples[t][e],s=e*this._cellSize,r=t*this._cellSize;i&&this._ctx.fillRect(Math.floor(s-this._cellSize/2),Math.floor(r-this._cellSize/2),this._cellSize,this._cellSize)}},o.prototype.drawThresholdedCorners=function(){this._ctx.fillStyle="#888";for(var t=0;t<this._thresholdedSamples.length;t++)for(var e=0;e<this._thresholdedSamples[t].length;e++){var i=this._thresholdedSamples[t][e],s=e*this._cellSize,r=t*this._cellSize;this._ctx.fillStyle=i?"#0f0":"#888",this._ctx.fillRect(s-2,r-2,4,4)}},o.prototype.drawCellClassification=function(){this._ctx.fillStyle="#888",this._ctx.font="10px monospace";for(var t=0;t<this._cellTypes.length;t++)for(var e=0;e<this._cellTypes[t].length;e++){var i=this._cellTypes[t][e],s=e*this._cellSize+(this._cellSize-10)/2,r=t*this._cellSize+(this._cellSize+10)/2;this._ctx.fillText(i,s,r)}},o.prototype.drawGridLines=function(t,e){this._ctx.strokeStyle="#888";for(var i=t||0;i<this._canvas.width;i+=this._cellSize)this._ctx.beginPath(),this._ctx.moveTo(i,0),this._ctx.lineTo(i,this._canvas.height),this._ctx.stroke();for(var s=e||0;s<this._canvas.height;s+=this._cellSize)this._ctx.beginPath(),this._ctx.moveTo(0,s),this._ctx.lineTo(this._canvas.width,s),this._ctx.stroke()},o.prototype.drawScaledLine=function(t,e){var i=t[1]*this._cellSize,s=t[0]*this._cellSize,r=e[1]*this._cellSize,h=e[0]*this._cellSize;this._ctx.beginPath(),this._ctx.moveTo(i,s),this._ctx.lineTo(r,h),this._ctx.stroke()},o.prototype.draw45DegContours=function(){this._ctx.strokeStyle="green";for(var t=0;t<this._cellTypes.length;t++)for(var e=0;e<this._cellTypes[t].length;e++){var i=this._cellTypes[t][e],r=s[i],h={N:[t,e+.5],W:[t+.5,e],E:[t+.5,e+1],S:[t+1,e+.5]};2===r.length?this.drawScaledLine(h[r[0]],h[r[1]]):4===r.length&&(this.drawScaledLine(h[r[0]],h[r[1]]),this.drawScaledLine(h[r[2]],h[r[3]]))}},o.prototype.drawSmoothContours=function(){this._ctx.strokeStyle="green";for(var t=0;t<this._cellTypes.length;t++)for(var e=0;e<this._cellTypes[t].length;e++){var i=this._cellTypes[t][e],r=s[i],h=this._samples[t][e],l=this._samples[t][e+1],n=this._samples[t+1][e],o=this._samples[t+1][e+1],a=(4&i)==(8&i)?.5:c(h,l,0,1,this._threshold),_=(2&i)==(4&i)?.5:c(l,o,0,1,this._threshold),f=(1&i)==(2&i)?.5:c(n,o,0,1,this._threshold),p={N:[t,e+a],W:[t+((1&i)==(8&i)?.5:c(h,n,0,1,this._threshold)),e],E:[t+_,e+1],S:[t+1,e+f]};2===r.length?this.drawScaledLine(p[r[0]],p[r[1]]):4===r.length&&(this.drawScaledLine(p[r[0]],p[r[1]]),this.drawScaledLine(p[r[2]],p[r[3]]))}},t.exports=o},function(t,e,i){i(7),t.exports=i(0)}]);