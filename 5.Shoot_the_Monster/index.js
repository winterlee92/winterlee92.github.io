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
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	var t4 = document.getElementById("t4");
	var t5 = document.getElementById("t5");
	var t6 = document.getElementById("t6");
	var t7 = document.getElementById("t7");
	var t8 = document.getElementById("t8");
	var t9 = document.getElementById("t9");
	var t10 = document.getElementById("t10");
	
	var count0 = document.getElementsByClassName("count0");	
	var count1 = document.getElementsByClassName("count1");	
	var count2 = document.getElementsByClassName("count2");	
	var count3 = document.getElementsByClassName("count3");		
	var count4 = document.getElementsByClassName("count4");	
	var count5 = document.getElementsByClassName("count5");	

	var guide = document.getElementById("guide");
	var hand = document.getElementById("hand");
	var sparkBox =  document.getElementById("spark");
	
	var hiddenBox1 = document.getElementById("hiddenBox1");
	var apes1 = document.getElementById("apes1");
	var light1 = document.getElementById("light1");
	var attackBox1 = document.getElementById("attackBox1");
	var shootBox1 = document.getElementById("shootBox1");
	var shoot = document.getElementById("shoot");
	var reward1 =  document.getElementById("reward1"); 
	
	var hiddenBox2 = document.getElementById("hiddenBox2");
	var orc1 = document.getElementById("orc1");
	var light2 = document.getElementById("light2");
	var fire2 = document.getElementById("fire2");
	var attackBox2 = document.getElementById("attackBox2");
	var shootBox2 = document.getElementById("shootBox2");
	var shoot2 = document.getElementById("shoot2");
	var reward2 =  document.getElementById("reward2");
	
	var innerContainer =  document.getElementById("innerContainer");
	var redLayer = document.getElementById("redLayer");
	
	
	function main(){
		document.getElementById("loader").style.display = "none";	
		gameContainer.style.display = "block";
		var heartImage = document.getElementsByClassName("heart");			
		heartImage[1].style.left = "110%";
		heartImage[2].style.left = "220%";
		var countImage = document.getElementsByClassName("count");

		countImage[0].style.margin = "0% 91%";
		countImage[1].style.margin = "3% 82%";
		countImage[2].style.margin = "0% 73%";
		countImage[3].style.margin = "3% 64%";
		count0[0].style.margin = "0% 55%";
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
		for(i=0; i<4; i++)
		{	 
			if(i < 4)
			{
				var countImage = document.createElement("IMG");
				countImage.setAttribute("src", countArray[0]);	
				countImage.setAttribute("class","count");
				count.appendChild(countImage);
			}
		}
		
		for(i=0; i<6; i++)
		{	 
			if(i < 6)
			{
				var countImage = document.createElement("IMG");
				countImage.setAttribute("src", countArray[0]);	
				countImage.setAttribute("class","count"+i);
				count.appendChild(countImage);
			}
		}
		
		var apesArray = ["url('apes.png')"];
		apes1.style.backgroundImage = apesArray[0];
		
		var shootArray = ["url('shoot.png')"];
		shoot.style.backgroundImage = shootArray[0];
		shoot2.style.backgroundImage = shootArray[0];
				
				
		var orcArray = ["url('orc.png')"];
		orc1.style.backgroundImage = orcArray[0];

		var lightArray = ["url('glow.png')"];		
		light1.style.backgroundImage = lightArray[0];
		light2.style.backgroundImage = lightArray[0];
				
		var fireArray = ["url('fire.png')"];	
		fire2.style.backgroundImage = fireArray[0];
		
		var sparkArray = ['spark1.png','spark2.png','spark3.png','spark4.png',
		'spark5.png','spark6.png','spark7.png','spark8.png','spark9.png'];	
				
			for(i=0; i<9; i++)
		{	 
			if(i < 9)
			{
				var sparkImage = document.createElement("IMG");
				sparkImage.setAttribute("src", sparkArray[i]);	
				sparkImage.setAttribute("class","spark");
				spark.appendChild(sparkImage);
			}
		}

		var rewardArray = ["url('reward.png')"];
		reward1.style.backgroundImage = rewardArray[0];
		reward2.style.backgroundImage = rewardArray[0];
		
	}

	var renderSpark;
	
	function sparkAnimation(){
		var myIndex = 0;	
		var spark = document.getElementsByClassName("spark");				
		loopSpark();
		function loopSpark(){
			var i;
			for (i=0;i<spark.length;i++)
			{
				spark[i].style.display="none";
			}
			myIndex++;
			if (myIndex > spark.length){}
			spark[myIndex-1].style.display = "block";
			renderSpark = setTimeout(loopSpark,50);			
			
			if (myIndex === 9){
				sparkBox.style.display = "none";
				clearTimeout(renderSpark);			
			}	
			
		}
	} 
	
	function begin(){
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
		
		t1.style.AnimationPlayState="running";
		t1.style.MozAnimationPlayState="running";
		t1.style.WebkitAnimationPlayState="running";
		
		t2.style.AnimationPlayState="running";
		t2.style.MozAnimationPlayState="running";
		t2.style.WebkitAnimationPlayState="running";
		
		t3.style.AnimationPlayState="running";
		t3.style.MozAnimationPlayState="running";
		t3.style.WebkitAnimationPlayState="running";
		
		t4.style.AnimationPlayState="running";
		t4.style.MozAnimationPlayState="running";
		t4.style.WebkitAnimationPlayState="running";
		
		t5.style.AnimationPlayState="running";
		t5.style.MozAnimationPlayState="running";
		t5.style.WebkitAnimationPlayState="running";
			
		t6.style.AnimationPlayState="running";
		t6.style.MozAnimationPlayState="running";
		t6.style.WebkitAnimationPlayState="running";
		
		t7.style.AnimationPlayState="running";
		t7.style.MozAnimationPlayState="running";
		t7.style.WebkitAnimationPlayState="running";
		
		t8.style.AnimationPlayState="running";
		t8.style.MozAnimationPlayState="running";
		t8.style.WebkitAnimationPlayState="running";
		
		t9.style.AnimationPlayState="running";
		t9.style.MozAnimationPlayState="running";
		t9.style.WebkitAnimationPlayState="running";
		
		t10.style.AnimationPlayState="running";
		t10.style.MozAnimationPlayState="running";
		t10.style.WebkitAnimationPlayState="running";
		
		count0[0].style.AnimationPlayState="running";
		count0[0].style.MozAnimationPlayState="running";
		count0[0].style.WebkitAnimationPlayState="running";
		
		count1[0].style.AnimationPlayState="running";
		count1[0].style.MozAnimationPlayState="running";
		count1[0].style.WebkitAnimationPlayState="running";
		
		count2[0].style.AnimationPlayState="running";
		count2[0].style.MozAnimationPlayState="running";
		count2[0].style.WebkitAnimationPlayState="running";
		
		count3[0].style.AnimationPlayState="running";
		count3[0].style.MozAnimationPlayState="running";
		count3[0].style.WebkitAnimationPlayState="running";
		
		count4[0].style.AnimationPlayState="running";
		count4[0].style.MozAnimationPlayState="running";
		count4[0].style.WebkitAnimationPlayState="running";
		
		count5[0].style.AnimationPlayState="running";
		count5[0].style.MozAnimationPlayState="running";
		count5[0].style.WebkitAnimationPlayState="running";
		
		guide.style.AnimationPlayState="running";
		guide.style.MozAnimationPlayState="running";
		guide.style.WebkitAnimationPlayState="running";
		
		hiddenBox1.style.AnimationPlayState="running";
		hiddenBox1.style.MozAnimationPlayState="running";
		hiddenBox1.style.WebkitAnimationPlayState="running";
		
		attackBox1.style.AnimationPlayState="running";
		attackBox1.style.MozAnimationPlayState="running";
		attackBox1.style.WebkitAnimationPlayState="running";
		
		apes1.style.AnimationPlayState="running";
		apes1.style.MozAnimationPlayState="running";
		apes1.style.WebkitAnimationPlayState="running";
		
		light1.style.AnimationPlayState="running";
		light1.style.MozAnimationPlayState="running";
		light1.style.WebkitAnimationPlayState="running";
		
		hand.style.AnimationPlayState="running";
		hand.style.MozAnimationPlayState="running";
		hand.style.WebkitAnimationPlayState="running";
		
		shootBox1.style.AnimationPlayState="running";
		shootBox1.style.MozAnimationPlayState="running";
		shootBox1.style.WebkitAnimationPlayState="running";
	}
	
	function getHurt(){
			gameContainerBg.style.WebkitAnimationName = "getHurt";
			gameContainerBg.style.MozAnimationName = "getHurt";
			gameContainerBg.style.animationName = "getHurt";
			
			gameContainerBg.style.height ="100%";
			gameContainerBg.style.width ="103%";
			gameContainerBg.style.margin = "0% 0%"
			gameContainerBg.style.filter ="brightness(100%)";
			
			gameContainerBg.style.WebkitanimationDuration = "3s";
			gameContainerBg.style.MozanimationDuration = "3s";
			gameContainerBg.style.animationDuration= "3s";
			
			gameContainerBg.style.WebkitanimationDelay = "3s";
			gameContainerBg.style.MozanimationDelay = "3s";
			gameContainerBg.style.animationDelay = "3s";
			
			gameContainerBg.style.animationIterationCount = "3";
			gameContainerBg.style.MozAnimationIterationCount = "3";
			gameContainerBg.style.WebkitAnimationIterationCount = "3";
			
			innerContainer.style.AnimationPlayState="running";
			innerContainer.style.MozAnimationPlayState="running";
			innerContainer.style.WebkitAnimationPlayState="running";
			
			redLayer.style.AnimationPlayState="running";
			redLayer.style.MozAnimationPlayState="running";
			redLayer.style.WebkitAnimationPlayState="running";
	}
	
	function stopHurt(){
		
		gameContainerBg.style.AnimationPlayState="paused";
		gameContainerBg.style.MozAnimationPlayState="paused";
		gameContainerBg.style.WebkitAnimationPlayState="paused";
		
		innerContainer.style.AnimationPlayState="paused";
		innerContainer.style.MozAnimationPlayState="paused";
		innerContainer.style.WebkitAnimationPlayState="paused";
		
		redLayer.style.AnimationPlayState="paused";
		redLayer.style.MozAnimationPlayState="paused";
		redLayer.style.WebkitAnimationPlayState="paused";
		
		fire2.style.AnimationPlayState="paused";
		fire2.style.MozAnimationPlayState="paused";
		fire2.style.WebkitAnimationPlayState="paused";

		fire2.style.zIndex = "-30";
		fire2.style.display = "none";

		light2.style.zIndex = "-30";
		light2.style.display = "none";
		
		redLayer.style.zIndex = "-30";
		redLayer.style.display = "none";
	}
	
	function mouseDown(e) {
		var data = e.target.id;
		console.log(data);
		begin();		
		
		if (data === "attackBox1"){

			sparkAnimation();
			
			attackBox1.style.zIndex = "-30";
			
			shootBox1.style.AnimationPlayState="running";
			shootBox1.style.MozAnimationPlayState="running";
			shootBox1.style.WebkitAnimationPlayState="running";
			
			shoot.style.AnimationPlayState="running";
			shoot.style.MozAnimationPlayState="running";
			shoot.style.WebkitAnimationPlayState="running";
			
			apes1.style.WebkitAnimationName = "killApes1";
			apes1.style.MozAnimationName = "killApes1";
			apes1.style.animationName = "killApes1";
			
			apes1.style.WebkitanimationDelay = "0s";
			apes1.style.MozanimationDelay = "0s";
			apes1.style.animationDelay = "0s";
			
			guide.style.display = "none";
			guide.style.zIndex = "0";
			
			hand.style.WebkitAnimationName = "handRemove";
			hand.style.MozAnimationName = "handRemove";
			hand.style.animationName = "handRemove";
			
			hand.style.WebkitanimationDelay = "0s";
			hand.style.MozanimationDelay = "0s";
			hand.style.animationDelay = "0s";
			
			reward1.style.display = "block";
			reward1.style.AnimationPlayState="running";
			reward1.style.MozAnimationPlayState="running";
			reward1.style.WebkitAnimationPlayState="running";
			
			count5[0].style.WebkitAnimationName = "removeIcon";
			count5[0].style.MozAnimationName = "removeIcon";
			count5[0].style.animationName = "removeIcon";
			
			count5[0].style.WebkitanimationDelay = "0s";
			count5[0].style.MozanimationDelay = "0s";
			count5[0].style.animationDelay = "0s";
			
			hiddenBox2.style.AnimationPlayState="running";
			hiddenBox2.style.MozAnimationPlayState="running";
			hiddenBox2.style.WebkitAnimationPlayState="running";
			
			attackBox2.style.AnimationPlayState="running";
			attackBox2.style.MozAnimationPlayState="running";
			attackBox2.style.WebkitAnimationPlayState="running";
			
			orc1.style.AnimationPlayState="running";
			orc1.style.MozAnimationPlayState="running";
			orc1.style.WebkitAnimationPlayState="running";
			
			light2.style.AnimationPlayState="running";
			light2.style.MozAnimationPlayState="running";
			light2.style.WebkitAnimationPlayState="running";
			
			fire2.style.AnimationPlayState="running";
			fire2.style.MozAnimationPlayState="running";
			fire2.style.WebkitAnimationPlayState="running";
			
			getHurt();
			
		}
		if (data === "attackBox2")
		{
			stopHurt();
			
			hiddenBox1.style.zIndex = "-30";
			shootBox1.style.zIndex = "-30";
			attackBox2.style.zIndex = "-30";
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "18%";
			sparkBox.style.top = "39%";
	
			sparkAnimation();
			
			shootBox2.style.AnimationPlayState="running";
			shootBox2.style.MozAnimationPlayState="running";
			shootBox2.style.WebkitAnimationPlayState="running";
			
			shoot2.style.AnimationPlayState="running";
			shoot2.style.MozAnimationPlayState="running";
			shoot2.style.WebkitAnimationPlayState="running";
			
			
			orc1.style.WebkitAnimationName = "killOrc1";
			orc1.style.MozAnimationName = "killOrc1";
			orc1.style.animationName = "killOrc1";
			
			orc1.style.WebkitanimationDelay = "0s";
			orc1.style.MozanimationDelay = "0s";
			orc1.style.animationDelay = "0s";
			
			count4[0].style.WebkitAnimationName = "removeIcon";
			count4[0].style.MozAnimationName = "removeIcon";
			count4[0].style.animationName = "removeIcon";
			
			count4[0].style.WebkitanimationDelay = "0s";
			count4[0].style.MozanimationDelay = "0s";
			count4[0].style.animationDelay = "0s";
			
			reward2.style.display = "block";
			reward2.style.AnimationPlayState="running";
			reward2.style.MozAnimationPlayState="running";
			reward2.style.WebkitAnimationPlayState="running";
			
		}
	}
	
	function touchstart(e){
		var data = e.target.id;
		console.log(data);
		begin();		
		
		if (data === "attackBox1"){

			sparkAnimation();
			
			attackBox1.style.zIndex = "-30";
			
			shootBox1.style.AnimationPlayState="running";
			shootBox1.style.MozAnimationPlayState="running";
			shootBox1.style.WebkitAnimationPlayState="running";
			
			shoot.style.AnimationPlayState="running";
			shoot.style.MozAnimationPlayState="running";
			shoot.style.WebkitAnimationPlayState="running";
			
			apes1.style.WebkitAnimationName = "killApes1";
			apes1.style.MozAnimationName = "killApes1";
			apes1.style.animationName = "killApes1";
			
			apes1.style.WebkitanimationDelay = "0s";
			apes1.style.MozanimationDelay = "0s";
			apes1.style.animationDelay = "0s";
			
			guide.style.display = "none";
			guide.style.zIndex = "0";
			
			hand.style.WebkitAnimationName = "handRemove";
			hand.style.MozAnimationName = "handRemove";
			hand.style.animationName = "handRemove";
			
			hand.style.WebkitanimationDelay = "0s";
			hand.style.MozanimationDelay = "0s";
			hand.style.animationDelay = "0s";
			
			reward1.style.display = "block";
			reward1.style.AnimationPlayState="running";
			reward1.style.MozAnimationPlayState="running";
			reward1.style.WebkitAnimationPlayState="running";
			
			count5[0].style.WebkitAnimationName = "removeIcon";
			count5[0].style.MozAnimationName = "removeIcon";
			count5[0].style.animationName = "removeIcon";
			
			count5[0].style.WebkitanimationDelay = "0s";
			count5[0].style.MozanimationDelay = "0s";
			count5[0].style.animationDelay = "0s";
			
			hiddenBox2.style.AnimationPlayState="running";
			hiddenBox2.style.MozAnimationPlayState="running";
			hiddenBox2.style.WebkitAnimationPlayState="running";
			
			attackBox2.style.AnimationPlayState="running";
			attackBox2.style.MozAnimationPlayState="running";
			attackBox2.style.WebkitAnimationPlayState="running";
			
			orc1.style.AnimationPlayState="running";
			orc1.style.MozAnimationPlayState="running";
			orc1.style.WebkitAnimationPlayState="running";
			
			light2.style.AnimationPlayState="running";
			light2.style.MozAnimationPlayState="running";
			light2.style.WebkitAnimationPlayState="running";
			
			fire2.style.AnimationPlayState="running";
			fire2.style.MozAnimationPlayState="running";
			fire2.style.WebkitAnimationPlayState="running";
			
			getHurt();
			
		}
	if (data === "attackBox2")
		{
			stopHurt();
			
			hiddenBox1.style.zIndex = "-30";
			shootBox1.style.zIndex = "-30";
			attackBox2.style.zIndex = "-30";
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "18%";
			sparkBox.style.top = "39%";
	
			sparkAnimation();
			
			shootBox2.style.AnimationPlayState="running";
			shootBox2.style.MozAnimationPlayState="running";
			shootBox2.style.WebkitAnimationPlayState="running";
			
			shoot2.style.AnimationPlayState="running";
			shoot2.style.MozAnimationPlayState="running";
			shoot2.style.WebkitAnimationPlayState="running";
			
			
			orc1.style.WebkitAnimationName = "killOrc1";
			orc1.style.MozAnimationName = "killOrc1";
			orc1.style.animationName = "killOrc1";
			
			orc1.style.WebkitanimationDelay = "0s";
			orc1.style.MozanimationDelay = "0s";
			orc1.style.animationDelay = "0s";
			
			count4[0].style.WebkitAnimationName = "removeIcon";
			count4[0].style.MozAnimationName = "removeIcon";
			count4[0].style.animationName = "removeIcon";
			
			count4[0].style.WebkitanimationDelay = "0s";
			count4[0].style.MozanimationDelay = "0s";
			count4[0].style.animationDelay = "0s";
			
			reward2.style.display = "block";
			reward2.style.AnimationPlayState="running";
			reward2.style.MozAnimationPlayState="running";
			reward2.style.WebkitAnimationPlayState="running";
			
		}
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
