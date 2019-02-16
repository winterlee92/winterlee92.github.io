

window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame    ||
			  function( callback ){
				window.setTimeout(callback, 1000 / 60);
			  };
	})();
	
(function() {
	var lastTime = 0;
	var vendors = ['webkit', 'moz'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
									  window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
			var id = window.setTimeout(function() {
				callback(currTime + timeToCall);
			}, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());


	function lp() {
			 mv = setTimeout(main, 500);
	    }
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var container = document.getElementById('container');
		container.style.display = "block";
		
		var widthToHeight = 0 ;
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight;
		
		sizeData(newWidth,newHeight);
		resize(newWidth,newHeight);	
		
	}
		
	function sizeData(w,h){
	
		var newWidth = w;
		var newHeight = h;
		// watch
		if ( newWidth === newHeight ){ widthToHeight = 1 / 1;}
		else if ( newWidth === 320 && newHeight === 325){widthToHeight = 65 / 64;}
		else if ( newWidth === 320 && newHeight === 330){widthToHeight = 33 / 32;}
		else if ( newWidth === 320 && newHeight === 290){widthToHeight = 32 / 29;}
		else if (( newWidth === 272 && newHeight === 340)||( newWidth === 312 && newHeight === 390)){widthToHeight = 5/4;}
		// Ipad 1/2/3,Nexus 9
		else if ((newWidth === 1536 && newHeight === 2048)
				||(newWidth === 2732 && newHeight === 2048 )||(newWidth === 2048 && newHeight === 1536)){widthToHeight = 4 / 3;}
		// Chromebook Pixel,Iphone,Iphone 4, Surface Book
		else if ((newWidth === 320 && newHeight === 480) || (newWidth === 640 && newHeight=== 960)
				||(newWidth === 480 && newHeight === 320) || (newWidth === 960 && newHeight=== 640)
				||(newWidth === 2560 && newHeight=== 1700) ||(newWidth === 3000 && newHeight=== 2000)
				||(newWidth === 2160 && newHeight=== 1440) ||(newWidth === 2736 && newHeight=== 1824)){widthToHeight = 3 / 2;}
		// Chromobox 30, Dell Venue 8,MacBook 12, MAcbook Air 13,Macbook Pro 13, Macbook Pro 15
		// Nexus 15,Nexus 7, Samsung Galaxy Tab 10,Sony Xperia Z3/Z4 Tablet
		else if ((newWidth === 800 && newHeight===480) || (newWidth === 1280 && newHeight === 800)
				||(newWidth === 1440 && newHeight === 900) || (newWidth === 2880 && newHeight === 1800)
				||(newWidth === 1200 && newHeight === 1920) || (newWidth === 800 && newHeight === 1280)
				||(newWidth === 1920 && newHeight === 1200) || (newWidth === 2560 && newHeight === 1600)){widthToHeight = 16 / 10;}
		// Nexus 4
		else if (newWidth === 768 && newHeight === 1280){widthToHeight = 5 / 3;}
		// Android One,Chromebook 11, Google Pixel /XL,FTC One M8/M9, iMac 27/5K, Iphone5/6/6 Plus,LG G2/G3,
		// Surface /2/3/Pro/Sony Xperia Z1 Ultra/Z1 Compact/Z2/Z3/Z3 Compact/Sony Xperia C4,
		// Samsung Galaxy 4/S5/S6/S7/S7 Edge,Nexus 6P/Note, Mac Book Air 11 , Moto G/X/5/5X/6/6P
		else if ((newWidth === 720 && newHeight === 1280)||(newWidth === 1366 && newHeight === 768)
				||(newWidth === 5120 && newHeight === 2880)){widthToHeight = 9 / 16;}
		
		//Samsung Galaxy Tab 7
		else if (newWidth === 600 && newHeight===1024){widthToHeight = 10/16;}
		// Samsung Galaxy S8/S8+
		else if (newWidth === 1440 && newHeight===2960){widthToHeight = 18.5 / 9;}
		
		//
		else if (newWidth ===  1080 && newHeight===2160 ||newWidth ===  1440 && newHeight===2880 
				|| newWidth ===  411 && newHeight===823){widthToHeight = 9 / 18;}
		
		//Final
		//GalaxyS5 
		else if(newWidth === 1920 && newHeight === 1080){widthToHeight = 16 / 9;}	
		//iphone 5
		else if(newWidth === 640 && newHeight === 1136){widthToHeight = 40 / 71;}	
		//iphone 6,7,8 plus  //Google Pixel,Google Pixel XL 16：9
		else if (newWidth === 414 && newHeight === 736 || newWidth === 375 && newHeight === 667 
				|| newWidth === 320 && newHeight === 568 || newWidth === 411 && newHeight === 731 
				|| newWidth === 360 && newHeight === 640  || newWidth === 1080 && newHeight === 1920
				|| newWidth === 750 && newHeight === 1334 ||newWidth === 1440 && newHeight === 2560) {widthToHeight = 9 / 16;}	
		//iphone X
		else if (newWidth === 375 && newHeight === 812 || newWidth === 1125 && newHeight === 2436){widthToHeight = 9 / 19.5;}
		//ipad, ipad Pro
		else if (newWidth === 768   && newHeight === 1024 || 
				 newWidth === 2048  && newHeight === 2732 || newWidth === 1024  && newHeight === 1366  ){widthToHeight = 3 / 4;}
		
		else{widthToHeight = 2.5 / 4;}
		
		return (newWidth,newHeight);
	}	
	
	function resize(w,h){
		
		var newWidth = w;
		var newHeight = h;
		
		var newWidthToHeight = newWidth / newHeight;
		if (newWidthToHeight > widthToHeight) {
			newWidth = newHeight * widthToHeight;
			container.style.height = newHeight + 'px';
			container.style.width = newWidth + 'px';
		} 
		else {
			newHeight = newWidth / widthToHeight;
			container.style.width = newWidth + 'px';
			container.style.height = newHeight + 'px';
		}
		var newWidthToHeight = newWidth / newHeight;
		if (newWidthToHeight > widthToHeight) {
			newWidth = newHeight * widthToHeight;
			container.style.height = newHeight + 'px';
			container.style.width = newWidth + 'px';
		} 
		else {
			newHeight = newWidth / widthToHeight;
			container.style.width = newWidth + 'px';
			container.style.height = newHeight + 'px';
		}
		container.style.fontSize = (newWidth / 400) + 'em';
	}
	
	 window.addEventListener("orientationchange", function() {location.reload();}, false);
     document.getElementById("x").innerHTML = "";
	 
	 