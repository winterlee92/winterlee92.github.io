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
	
	var mv;
	function lp() {
		mv = setTimeout(main, 500);
		// createImage();
	}
		
	var gameContainer = document.getElementById("gameContainer");
	var elf = document.getElementById("elf");
	var elfEffect  = document.getElementById("elfEffect");
	var startBtn = document.getElementById("startBtn");
	var glowLeft = document.getElementById("glowLeft");
	var glowRight = document.getElementById("glowRight");
	
	function main(){
		document.getElementById("loader").style.display = "none";	
		gameContainer.style.display = "block";
		
	}
	
	// function createImage(){
		// var bowLightArray = ['glow.png'];
		// var i;
		// for(i=0; i<bowLightArray.length; i++)
		// {	 
			// if(i < bowLightArray.length)
			// {
				// var glow = document.createElement("IMG");
				// glow.setAttribute("src", bowLightArray[i]);	
				// glow.setAttribute("class","glow");
				// bowLight.appendChild(glow);
			// }
		// }
	// }
	
	function mouseDown(event) {
		var data = event.target.id;
		elf.style.WebkitAnimationName = "elfRemove";
		elf.style.MozAnimationName = "elfRemove";
		elf.style.animationName = "elfRemove";
		
		elfEffect.style.WebkitAnimationName = "elfEffectRemove";
		elfEffect.style.MozAnimationName = "elfEffectRemove";
		elfEffect.style.animationName = "elfEffectRemove";	
		
		gameContainerBg.style.AnimationPlayState="running";
		gameContainerBg.style.MozAnimationPlayState="running";
		gameContainerBg.style.WebkitAnimationPlayState="running";
	
		startBtn.style.WebkitAnimationName = "startBtnRemove";
		startBtn.style.MozAnimationName = "startBtnRemove";
		startBtn.style.animationName = "startBtnRemove";

		glowLeft.style.WebkitAnimationName = "glowLeftRemove";
		glowLeft.style.MozAnimationName = "glowLeftRemove";
		glowLeft.style.animationName = "glowLeftRemove";
		
		glowRight.style.WebkitAnimationName = "glowRightRemove";
		glowRight.style.MozAnimationName = "glowRightRemove";
		glowRight.style.animationName = "glowRightRemove";
	}
	
	
	(function () {
  
	if (window.matchMedia("(orientation: portrait)").matches) {
		
		gameContainer.style.webkitTransform = 'rotate(90deg)'; 
		gameContainer.style.mozTransform    = 'rotate(90deg)'; 
		gameContainer.style.msTransform     = 'rotate(90deg)'; 
		gameContainer.style.oTransform      = 'rotate(90deg)'; 
		gameContainer.style.transform       = 'rotate(90deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
		
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 720,
		safeHeight: 1280
		}
	}

	if (window.matchMedia("(orientation: landscape)").matches) {
	
		gameContainer.style.webkitTransform = 'rotate(0deg)'; 
		gameContainer.style.mozTransform    = 'rotate(0deg)'; 
		gameContainer.style.msTransform     = 'rotate(0deg)'; 
		gameContainer.style.oTransform      = 'rotate(0deg)'; 
		gameContainer.style.transform       = 'rotate(0deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
			
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 1280,
		safeHeight: 720
		}
	}
	
	resizeGame = function () {
	
		var viewport, newGameWidth, newGameHeight, newGameX, newGameY;
						
		viewport = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		
		if (game.height / game.width > viewport.height / viewport.width) {
		
			if (game.safeHeight / game.width > viewport.height / viewport.width) {
			 
			  newGameHeight = viewport.height * game.height / game.safeHeight;
			  newGameWidth = newGameHeight * game.width / game.height;
			} else {
				
			  
			  newGameWidth = viewport.width;
			  newGameHeight = newGameWidth * game.height / game.width;
			}
		} else { 
			if (game.height / game.safeWidth > viewport.height / viewport.width) {
				
				newGameHeight = viewport.height;
				newGameWidth = newGameHeight * game.width / game.height;
			} else {
				 
				
				newGameWidth = viewport.width * game.width / game.safeWidth;
				newGameHeight = newGameWidth * game.height / game.width;
			}
		}
		
		game.element.style.width = newGameWidth + "px";
		game.element.style.height = newGameHeight + "px";
		  
		newGameX = (viewport.width - newGameWidth) / 2;
		newGameY = (viewport.height - newGameHeight) / 2;
				
		game.element.style.margin = newGameY + "px " + newGameX + "px";
	};
window.addEventListener("resize", resizeGame);
resizeGame();
}())
