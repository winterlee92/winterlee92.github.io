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
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||   
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
		createImage();
		mv = setTimeout(main, 500);
	}
		
	var gameContainer = document.getElementById("gameContainer");
	var gameContainerBg = document.getElementById("gameContainerBg");
	var elf = document.getElementById("elf");
	var elfEffect  = document.getElementById("elfEffect");
	var startBtn = document.getElementById("startBtn");
	var glowLeft = document.getElementById("glowLeft");
	var glowRight = document.getElementById("glowRight");
	var font = document.getElementById("font");
	var arrow = document.getElementById("arrow");
	var heart = document.getElementById("heart");
	var count = document.getElementById("count");
	
	function main(){
		document.getElementById("loader").style.display = "none";	
		gameContainer.style.display = "block";
		var heartImage = document.getElementsByClassName("heart");			
		heartImage[1].style.margin = "0% 110%";
		heartImage[2].style.margin = "0% 220%";
		var countImage = document.getElementsByClassName("count");
		// countImage[0].style.opacity = "0";
		// countImage[1].style.opacity = "0";
		// countImage[2].style.opacity = "0";
		// countImage[3].style.opacity = "0";
		// heartImage[4].style.margin = "0% 110%";
		// heartImage[5].style.margin = "0% 220%";
		// heartImage[6].style.margin = "0% 220%";
		countImage[0].style.margin = "0% 87%";
		countImage[1].style.margin = "3% 75%";
		countImage[2].style.margin = "0% 63%";
		countImage[3].style.margin = "3% 51%";
		countImage[4].style.margin = "0% 39%";
		countImage[5].style.margin = "3% 27%";
		countImage[6].style.margin = "0% 15%";
		countImage[7].style.margin = "3% 3%";
	}
	
	function createImage(){
		var heartArray = ['heart.png'];
		var i;
		for(i=0; i<3; i++)
		{	 
			if(i < 3)
			{
				var heartImage = document.createElement("IMG");
				heartImage.setAttribute("src", heartArray[0]);	
				heartImage.setAttribute("class","heart");
				heart.appendChild(heartImage);
			}
		}
		
		var countArray = ['count.png'];
		var i;
		for(i=0; i<8; i++)
		{	 
			if(i < 8)
			{
				var countImage = document.createElement("IMG");
				countImage.setAttribute("src", countArray[0]);	
				countImage.setAttribute("class","count");
				count.appendChild(countImage);
			}
		}
	}

	function mouseDown(event) {
		var data = event.target.id;
		elf.style.WebkitAnimationName = "elfRemove";
		elf.style.MozAnimationName = "elfRemove";
		elf.style.animationName = "elfRemove";
		
		elf.style.WebkitanimationDuration = "1s";
		elf.style.MozanimationDuration = "1s";
		elf.style.animationDuration = "1s";
		
		elfEffect.style.WebkitAnimationName = "elfEffectRemove";
		elfEffect.style.MozAnimationName = "elfEffectRemove";
		elfEffect.style.animationName = "elfEffectRemove";	
		
		elfEffect.style.WebkitanimationDuration = "1s";
		elfEffect.style.MozanimationDuration = "1s";
		elfEffect.style.animationDuration = "1s";
		
		gameContainerBg.style.AnimationPlayState="running";
		gameContainerBg.style.MozAnimationPlayState="running";
		gameContainerBg.style.WebkitAnimationPlayState="running";
	
		gameContainerBg.style.WebkitanimationDuration = "1s";
		gameContainerBg.style.MozanimationDuration = "1s";
		gameContainerBg.style.animationDuration = "1s";
	
		startBtn.style.WebkitAnimationName = "startBtnRemove";
		startBtn.style.MozAnimationName = "startBtnRemove";
		startBtn.style.animationName = "startBtnRemove";

		startBtn.style.WebkitanimationDuration = "1s";
		startBtn.style.MozanimationDuration = "1s";
		startBtn.style.animationDuration = "1s";
		
		glowLeft.style.WebkitAnimationName = "glowLeftRemove";
		glowLeft.style.MozAnimationName = "glowLeftRemove";
		glowLeft.style.animationName = "glowLeftRemove";
		
		glowLeft.style.WebkitanimationDuration = "1s";
		glowLeft.style.MozanimationDuration = "1s";
		glowLeft.style.animationDuration = "1s";
		
		glowRight.style.WebkitAnimationName = "glowRightRemove";
		glowRight.style.MozAnimationName = "glowRightRemove";
		glowRight.style.animationName = "glowRightRemove";
		
		glowRight.style.WebkitanimationDuration = "1s";
		glowRight.style.MozanimationDuration = "1s";
		glowRight.style.animationDuration = "1s";
		
		font.style.WebkitAnimationName = "fontRemove";
		font.style.MozAnimationName = "fontRemove";
		font.style.animationName = "fontRemove";
		
		font.style.WebkitanimationDuration = "1s";
		font.style.MozanimationDuration = "1s";
		font.style.animationDuration = "1s";
		
		arrow.style.display = "none"	
		
		countDisplay.style.AnimationPlayState="running";
		countDisplay.style.MozAnimationPlayState="running";
		countDisplay.style.WebkitAnimationPlayState="running";
		
		heart.style.AnimationPlayState="running";
		heart.style.MozAnimationPlayState="running";
		heart.style.WebkitAnimationPlayState="running";
		
		profile.style.AnimationPlayState="running";
		profile.style.MozAnimationPlayState="running";
		profile.style.WebkitAnimationPlayState="running";
	
	}
	
	
	
	function touchstart(event){
		var data = event.target.id;
		elf.style.WebkitAnimationName = "elfRemove";
		elf.style.MozAnimationName = "elfRemove";
		elf.style.animationName = "elfRemove";
		
		elf.style.WebkitanimationDuration = "1s";
		elf.style.MozanimationDuration = "1s";
		elf.style.animationDuration = "1s";
		
		elfEffect.style.WebkitAnimationName = "elfEffectRemove";
		elfEffect.style.MozAnimationName = "elfEffectRemove";
		elfEffect.style.animationName = "elfEffectRemove";	
		
		elfEffect.style.WebkitanimationDuration = "1s";
		elfEffect.style.MozanimationDuration = "1s";
		elfEffect.style.animationDuration = "1s";
		
		gameContainerBg.style.AnimationPlayState="running";
		gameContainerBg.style.MozAnimationPlayState="running";
		gameContainerBg.style.WebkitAnimationPlayState="running";
	
		gameContainerBg.style.WebkitanimationDuration = "1s";
		gameContainerBg.style.MozanimationDuration = "1s";
		gameContainerBg.style.animationDuration = "1s";
	
		startBtn.style.WebkitAnimationName = "startBtnRemove";
		startBtn.style.MozAnimationName = "startBtnRemove";
		startBtn.style.animationName = "startBtnRemove";

		startBtn.style.WebkitanimationDuration = "1s";
		startBtn.style.MozanimationDuration = "1s";
		startBtn.style.animationDuration = "1s";
		
		glowLeft.style.WebkitAnimationName = "glowLeftRemove";
		glowLeft.style.MozAnimationName = "glowLeftRemove";
		glowLeft.style.animationName = "glowLeftRemove";
		
		glowLeft.style.WebkitanimationDuration = "1s";
		glowLeft.style.MozanimationDuration = "1s";
		glowLeft.style.animationDuration = "1s";
		
		glowRight.style.WebkitAnimationName = "glowRightRemove";
		glowRight.style.MozAnimationName = "glowRightRemove";
		glowRight.style.animationName = "glowRightRemove";
		
		glowRight.style.WebkitanimationDuration = "1s";
		glowRight.style.MozanimationDuration = "1s";
		glowRight.style.animationDuration = "1s";
		
		font.style.WebkitAnimationName = "fontRemove";
		font.style.MozAnimationName = "fontRemove";
		font.style.animationName = "fontRemove";
		
		font.style.WebkitanimationDuration = "1s";
		font.style.MozanimationDuration = "1s";
		font.style.animationDuration = "1s";
		
		arrow.style.display = "none"
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
