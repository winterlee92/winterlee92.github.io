

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

var timeouts;
	function doTimer(length, resolution, oninstance, oncomplete){
	var steps = (length / 100) * (resolution / 10),
	speed = length / steps,
	count = 0,
	start = new Date().getTime();

	function instance(){
		if(count++ == steps){
			oncomplete(steps, count);
		}
		else{
			oninstance(steps, count);

			var diff = (new Date().getTime() - start) - (count * speed);
			window.setTimeout(instance, (speed - diff));
		}
	}
	timeouts = window.setTimeout(instance, speed);
}
	
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
		
		createImage();
		
	}
		
	function createImage(){

		// images array
		var imageArray = [
					"url('upperBg.png')",
					"url('sakura.png')",
					"url('lanternLeft.png')",
					"url('lanternRight.png')",
					"url('doorLeft.png')",
					"url('doorRight.png')",
					"url('lowerBg00.png')",
					"url('guide.png')",
					"url('chancesBg.png')",
					"url('sushi.png')"
				]
		var butterflyArray = [
								"butterfly01.png",
								"butterfly03.png",	
								"butterfly05.png",	
								"butterfly07.png",	
								"butterfly09.png",		
								"butterfly011.png",	
								"butterfly013.png",	
								"butterfly015.png",	
								"butterfly017.png",		
								"butterfly019.png",			
								"butterfly021.png",	
								"butterfly024.png"
								]
		var tumblerArray = [
							"tumbler01.png",	
							"tumbler05.png",	
							"tumbler09.png",	
							"tumbler013.png",		
							"tumbler017.png",		
							"tumbler021.png",		
							"tumbler025.png",		
							"tumbler029.png",		
							"tumbler033.png",		
							"tumbler037.png",		
							"tumbler041.png",		
							"tumbler045.png",		
							"tumbler048.png"
							]
		var lowerBackground = [
						'lowerBg01.jpg',
						'lowerBg05.jpg',
						'lowerBg09.jpg',
						'lowerBg013.jpg',
						'lowerBg017.jpg',
						'lowerBg021.jpg',
						'lowerBg025.jpg',
						'lowerBg029.jpg',
						'lowerBg033.jpg',
						'lowerBg037.jpg',
						'lowerBg041.jpg',
						'lowerBg047.jpg'							
					]
		var startButtonArray = [
							"startButton01.png",	
							"startButton03.png",	
							"startButton05.png",	
							"startButton07.png",	
							"startButton09.png",		
							"startButton011.png",		
							"startButton013.png",		
							"startButton015.png",		
							"startButton017.png",		
							"startButton019.png",		
							"startButton021.png",		
							"startButton023.png",		
							"startButton025.png",		
							"startButton027.png",		
							"startButton029.png",		
							"startButton031.png",		
							"startButton033.png",		
							"startButton035.png"
						]
		var startButtonArray2 = [
								"startButton058.png",		
								"startButton060.png",		
								"startButton062.png",		
								"startButton064.png",		
								"startButton066.png",		
								"startButton068.png",		
								"startButton070.png",		
								"startButton072.png"
							]		
		var redFishArray = [
					"redFish02.png",	
					"redFish06.png",	
					"redFish010.png",	
					"redFish014.png",	
					"redFish018.png",		
					"redFish022.png",		
					"redFish024.png"
				]
		var blueFishArray = [
				"blueFish02.png",	
				"blueFish06.png",	
				"blueFish010.png",	
				"blueFish014.png",	
				"blueFish018.png",		
				"blueFish022.png",		
				"blueFish024.png"
			]
		var blackFishArray = [
				"blackFish02.png",	
				"blackFish06.png",	
				"blackFish010.png",	
				"blackFish014.png",	
				"blackFish018.png",		
				"blackFish022.png",		
				"blackFish024.png"
			]
		var starEffectArray = [
						'starEffect01.png',
						'starEffect02.png',
						'starEffect03.png',
						'starEffect04.png',	
						'starEffect05.png'						
					]
					
		// use images from array
		innerContainerA.style.backgroundImage = imageArray[0];
		document.getElementById("sakura").style.backgroundImage = imageArray[1];
		lanternLeft.style.backgroundImage = imageArray[2];
		lanternRight.style.backgroundImage = imageArray[3];
		doorLeft.style.backgroundImage = imageArray[4];
		doorRight.style.backgroundImage = imageArray[5];
		lowerBg00.style.backgroundImage = imageArray[6];
		guide.style.backgroundImage = imageArray[7];
		chancesBg.style.backgroundImage = imageArray[8];
		tumblerDefault.style.backgroundImage = tumblerArray[0];
		sushi1.style.backgroundImage = imageArray[9];
		sushi2.style.backgroundImage = imageArray[9];
		sushi3.style.backgroundImage = imageArray[9];
		
		
		//  create and store Images		
		for(i=0; i < butterflyArray.length; i++){	 
			if(i <butterflyArray.length)
			{
				var butterflyLeftImage = document.createElement("IMG");
				butterflyLeftImage.setAttribute("src", butterflyArray[i]);	
				butterflyLeftImage.setAttribute("class","butterflyLeft");
				butterflyLeft.appendChild(butterflyLeftImage);
				
				var butterflyRightImage = document.createElement("IMG");
				butterflyRightImage.setAttribute("src", butterflyArray[i]);	
				butterflyRightImage.setAttribute("class","butterflyRight");
				butterflyRight.appendChild(butterflyRightImage);
			}
		}
		for(i=0; i < tumblerArray.length; i++){	 
			if(i <tumblerArray.length)
			{
				var tumblerImage = document.createElement("IMG");
				tumblerImage.setAttribute("src", tumblerArray[i]);	
				tumblerImage.setAttribute("class","tumbler");
				tumbler.appendChild(tumblerImage);
			}
		}
		for(i=0; i < lowerBackground.length; i++){	 
			if(i <lowerBackground.length)
			{
				var lowerBgImage = document.createElement("IMG");
				lowerBgImage.setAttribute("src", lowerBackground[i]);	
				lowerBgImage.setAttribute("class","lowerBg");
				lowerBg.appendChild(lowerBgImage);
			}
		}
		for(i=0; i < startButtonArray.length; i++){	 
			if(i <startButtonArray.length)
			{
				var startButtonImage = document.createElement("IMG");
				startButtonImage.setAttribute("src", startButtonArray[i]);	
				startButtonImage.setAttribute("class","startButton");
				startButton.appendChild(startButtonImage);
			}
		}
		for(i=0; i < startButtonArray2.length; i++){	 
			if(i <startButtonArray2.length){
				var startButtonImage = document.createElement("IMG");
				startButtonImage.setAttribute("src", startButtonArray2[i]);	
				startButtonImage.setAttribute("class","startButton2");
				startButton2.appendChild(startButtonImage);
			}
		}
		for(i=0; i < redFishArray.length; i++){	 
			if(i <redFishArray.length)
			{
				var redFishImage = document.createElement("IMG");
				redFishImage.setAttribute("src", redFishArray[i]);	
				redFishImage.setAttribute("class","redFish");
				redFish.appendChild(redFishImage);
				
				var blueFishImage = document.createElement("IMG");
				blueFishImage.setAttribute("src", blueFishArray[i]);	
				blueFishImage.setAttribute("class","blueFish");
				blueFish.appendChild(blueFishImage);
				
				var blackFishImage = document.createElement("IMG");
				blackFishImage.setAttribute("src", blackFishArray[i]);	
				blackFishImage.setAttribute("class","blackFish");
				blackFish.appendChild(blackFishImage);
			}
		}
		for(i=0; i < startButtonArray.length; i++){	 
			if(i <startButtonArray.length)
			{
				var startButtonImage = document.createElement("IMG");
				startButtonImage.setAttribute("src", startButtonArray[i]);	
				startButtonImage.setAttribute("class","startButton");
				startButton.appendChild(startButtonImage);
			}
		}
		for(i=0; i < starEffectArray.length; i++){	 
			if(i <starEffectArray.length){
				var starEffectImage = document.createElement("IMG");
				starEffectImage.setAttribute("src", starEffectArray[i]);	
				starEffectImage.setAttribute("class","starEffect");
				starEffect.appendChild(starEffectImage);
			}
		}
		
		// declare render Image variable
		var renderButterflyLeft;
		var renderButterflyRight;
		var renderTumbler;
		var renderLowerBackground;
		var renderStartButton;
		var renderstartButtonClick;
		var renderStarEffect;
		var renderRedFish;
		var renderBlueFish;
		var renderBlackFish;
		
		// create render Image Function
		function butterflyLeftAnimation(){
			var myIndex = 0;			
			var butterflyLeft = document.getElementsByClassName("butterflyLeft");		
			loopButterflyLeft();
			function loopButterflyLeft(){
				var i;
				for (i=0;i<butterflyLeft.length;i++)
				{
					butterflyLeft[i].style.display="none";
				}
				myIndex++;
				if (myIndex > butterflyLeft.length){}
				butterflyLeft[myIndex-1].style.display = "block";
				renderButterflyLeft = setTimeout(loopButterflyLeft,100);			
				 
				if (myIndex === 12){
					myIndex=0;
				}	
			}
		} 
		function butterflyRightAnimation(){
			var myIndex = 0;			
			var butterflyRight = document.getElementsByClassName("butterflyRight");		
			loopButterflyRight();
			function loopButterflyRight(){
				var i;
				for (i=0;i<butterflyRight.length;i++)
				{
					butterflyRight[i].style.display="none";
				}
				myIndex++;
				if (myIndex > butterflyRight.length){}
				butterflyRight[myIndex-1].style.display = "block";
				renderButterflyRight = setTimeout(loopButterflyRight,100);			
				 
				if (myIndex === 12){
					myIndex=0;
				}	
			}
		} 
		function tumblerAnimation(){
			var myIndex = 0;			
			var tumbler = document.getElementsByClassName("tumbler");		
			loopTumbler();
			function loopTumbler(){
				var i;
				for (i=0;i<tumbler.length;i++)
				{
					tumbler[i].style.display="none";
				}
				myIndex++;
				if (myIndex > tumbler.length){}
				tumbler[myIndex-1].style.display = "block";
				renderTumbler = setTimeout(loopTumbler,80);			
				 
				if (myIndex === 12){
					clearTimeout(renderTumbler);		
				}	
			}
		}
		function lowerBackgroundAnimation(){
			var myIndex = 0;			
			var lowerBg = document.getElementsByClassName("lowerBg");		
			loopLowerBackground();
			function loopLowerBackground(){
				var i;
				for (i=0;i<lowerBg.length;i++)
				{
					lowerBg[i].style.display="none";
				}
				myIndex++;
				if (myIndex > lowerBg.length){}
				lowerBg[myIndex-1].style.display = "block";
				renderLowerBackground = setTimeout(loopLowerBackground,100);			
				 
				if (myIndex === 12){
					myIndex = 0;			
				}	
			}
		}
		function startButtonAnimation(){
			var myIndex = 0;			
			var startBtn = document.getElementsByClassName("startButton");		
			loopstartButton();
			function loopstartButton(){
				var i;
				for (i=0;i<startBtn.length;i++)
				{
					startBtn[i].style.display="none";
				}
				myIndex++;
				if (myIndex > startBtn.length){}
				startBtn[myIndex-1].style.display = "block";
				renderStartButton = setTimeout(loopstartButton,100);			
				 
				if (myIndex === 18){
					clearTimeout(renderStartButton);
				}	
			}
		} 
		function startButtonClickAnimation(){
			var myIndex = 0;			
			var startBtn2 = document.getElementsByClassName("startButton2");		
			loopstartButtonClick();
			function loopstartButtonClick(){
				var i;
				for (i=0;i<startBtn2.length;i++)
				{
					startBtn2[i].style.display="none";
				}
				myIndex++;
				if (myIndex > startBtn2.length){}
				startBtn2[myIndex-1].style.display = "block";
				renderstartButtonClick = setTimeout(loopstartButtonClick,70);			
				 
				if (myIndex === 7){
					startBtn2[myIndex-1].style.display = "none";
					clearTimeout(renderstartButtonClick);
				}	
			}
		} 
		function redFishAnimation(){
			var myIndex = 0;			
			var redFish = document.getElementsByClassName("redFish");		
			loopRedFish();
			function loopRedFish(){
				var i;
				for (i=0;i<redFish.length;i++)
				{
					redFish[i].style.display="none";
				}
				myIndex++;
				if (myIndex > redFish.length){}
				redFish[myIndex-1].style.display = "block";
				renderRedFish = setTimeout(loopRedFish,70);			
				 
				if (myIndex === 7){
					myIndex = 0;
				}	
			}
		} 
		function blueFishAnimation(){
			var myIndex = 0;			
			var blueFish = document.getElementsByClassName("blueFish");		
			loopblueFish();
			function loopblueFish(){
				var i;
				for (i=0;i<blueFish.length;i++)
				{
					blueFish[i].style.display="none";
				}
				myIndex++;
				if (myIndex > blueFish.length){}
				blueFish[myIndex-1].style.display = "block";
				renderBlueFish = setTimeout(loopblueFish,70);			
				 
				if (myIndex === 7){
					myIndex = 0;
				}	
			}
		} 
		function blackFishAnimation(){
			var myIndex = 0;			
			var blackFish = document.getElementsByClassName("blackFish");		
			loopblackFish();
			function loopblackFish(){
				var i;
				for (i=0;i<blackFish.length;i++)
				{
					blackFish[i].style.display="none";
				}
				myIndex++;
				if (myIndex > blackFish.length){}
				blackFish[myIndex-1].style.display = "block";
				renderBlackFish = setTimeout(loopblackFish,70);			
				 
				if (myIndex === 7){
					myIndex = 0;
				}	
			}
		} 
		function starEffectAnimation(){
			var myIndex = 0;			
			var starEffect = document.getElementsByClassName("starEffect");		
			loopStarEffect();
			function loopStarEffect(){
				var i;
				for (i=0;i<starEffect.length;i++)
				{
					starEffect[i].style.display="none";
				}
				myIndex++;
				if (myIndex > starEffect.length){}
				starEffect[myIndex-1].style.display = "block";
				renderStarEffect = setTimeout(loopStarEffect,80);			
				 
				if (myIndex === 4){
					starEffect[myIndex-1].style.display ="none";
					clearTimeout(renderStarEffect);
				}	
			}
		} 
		
		// call render Image Function
		butterflyLeftAnimation();
		butterflyRightAnimation();
		tumblerAnimation();
		startButtonAnimation();
		lowerBackgroundAnimation();
		redFishAnimation();
		blueFishAnimation();
		blackFishAnimation();
		
		// startButton Event
		startButton.addEventListener("click", function(){
			startButton.style.display ="none";
			startButtonClickAnimation();
			clearTimeout(renderStartButton);
			guide.style.animation = " guide3 1s forwards 1"
			guide.style.webkitAnimation = " guide3 1s forwards 1 "
			doorLeft.style.animationPlayState = "running";
			doorLeft.style.webkitAnimationPlayState = "running";
			doorRight.style.animationPlayState = "running";
			doorRight.style.webkitAnimationPlayState = "running";
			butterflyRight.style.animationPlayState = "running";
			butterflyRight.style.webkitAnimationPlayState = "running";
			butterflyLeft.style.animationPlayState = "running";
			butterflyLeft.style.webkitAnimationPlayState = "running";
			chances.style.animationPlayState = "running";
			chances.style.webkitAnimationPlayState = "running";
			redFish.style.animationPlayState = "running";
			redFish.style.webkitAnimationPlayState = "running";
			blackFish.style.animationPlayState = "running";
			blackFish.style.webkitAnimationPlayState = "running";
			sushi1.style.animationPlayState = "running";
			sushi1.style.webkitAnimationPlayState = "running";			
			sushi2.style.animationPlayState = "running";
			sushi2.style.webkitAnimationPlayState = "running";
			sushi3.style.animationPlayState = "running";
			sushi3.style.webkitAnimationPlayState = "running";
			
			fishElements();
			
			doTimer(
			1500,60,function(steps){},
					function(){tumblerAnimation();}						
			);
			
			starEffectAnimation();
		});
	}		
	
	function fishElements(){
		
			var fishElementsDetect = requestAnimationFrame(fishElements);
		
			var innerContainerBElement  = document.querySelector('#innerContainerB');
			var innerContainerBTopValue = getComputedStyle(innerContainerBElement).getPropertyValue("height").split("px")[0];
			var innerContainerBLeftValue = getComputedStyle(innerContainerBElement).getPropertyValue("width").split("px")[0];
		
			var blackFishElement  = document.querySelector('#blackFish');
			var blackFishTopValue = getComputedStyle(blackFishElement).getPropertyValue("top").split("px")[0];
			var blackFishLeftValue = getComputedStyle(blackFishElement).getPropertyValue("left").split("px")[0];	
			var blackFishTop = (100*blackFishTopValue)/innerContainerBTopValue;
			var blackFishLeft = (100*blackFishLeftValue)/innerContainerBLeftValue;
		
			var redFishElement  = document.querySelector('#redFish');
			var redFishTopValue = getComputedStyle(redFishElement).getPropertyValue("top").split("px")[0];
			var redFishLeftValue = getComputedStyle(redFishElement).getPropertyValue("left").split("px")[0];
			var redFishTop = (100*redFishTopValue)/innerContainerBTopValue;
			var redFishLeft = (100*redFishLeftValue)/innerContainerBLeftValue;
			
			var blueFishElement  = document.querySelector('#blueFish');
			var blueFishTopValue = getComputedStyle(blueFishElement).getPropertyValue("top").split("px")[0];
			var blueFishLeftValue = getComputedStyle(blueFishElement).getPropertyValue("left").split("px")[0];	
			var blueFishTop = (100*blueFishTopValue)/innerContainerBTopValue;
			var blueFishLeft = (100*blueFishLeftValue)/innerContainerBLeftValue;	
			
			var blackFishFrames = document.createElement('style');
			blackFishFrames.type = 'text/css';
			var keyFrames = '\
			@keyframes blackFishReplace{\
				0%{\
					top: 15%;\
					left: blackFishLeft%;\
				}\
				100%{\
					top: 15%;\
					left: -55%;\
				}\
			}\
			@-webkit-keyframes blackFishReplace{\
				0%{\
					top: 15%;\
					left: blackFishLeft%;\
				}\
				100%{\
					top: 15%;\
					left: -55%;\
				}\
			}';
			
			var blackFishValue = {
								'blackFishLeft':blackFishLeft,
							};
			
			blackFishFrames.innerHTML = keyFrames.replace(/blackFishLeft/g, m => blackFishValue[m]);
			document.getElementsByTagName('div')[23].appendChild(blackFishFrames);
			blackFish.style.animation = "blackFishReplace 5s forwards 1"
			blackFish.style.webkitAnimation = " blackFishReplace 5s forwards 1 "
			
			var redFishFrames = document.createElement('style');
			redFishFrames.type = 'text/css';
			var keyFrames = '\
			@keyframes redFishReplace{\
				0%{\
					top: 57%;\
					left: redFishLeft%;\
				}\
				50%{\
					top: 57%;\
					left: -55%;\
				}\
				100%{\
					top: 57%;\
					left: -55%;\
				}\
			}\
			@-webkit-keyframes redFishReplace{\
				0%{\
					top: 57%;\
					left: redFishLeft%;\
				}\
				50%{\
					top: 57%;\
					left: -55%;\
				}\
				100%{\
					top: 57%;\
					left: -55%;\
				}\
			}';
			
			var redFishValue = {
								'redFishLeft':redFishLeft,
							};
			
			redFishFrames.innerHTML = keyFrames.replace(/redFishLeft/g, m => redFishValue[m]);
			document.getElementsByTagName('div')[23].appendChild(redFishFrames);
			redFish.style.animation = " redFishReplace 5s forwards 1"
			redFish.style.webkitAnimation = " redFishReplace 5s forwards 1 "
			
			var blueFishFrames = document.createElement('style');
			blueFishFrames.type = 'text/css';
			var keyFrames = '\
			@keyframes blueFishReplace{\
				0%{\
					top: 39%;\
					left: blueFishLeft%;\
				}\
				50%{\
					top: 39%;\
					left: 100%;\
				}\
				100%{\
					top: 39%;\
					left: 100%;\
				}\
			}\
			@-webkit-keyframes blueFishReplace{\
				0%{\
					top: 39%;\
					left: blueFishLeft%;\
				}\
				50%{\
					top: 39%;\
					left: 100%;\
				}\
				100%{\
					top: 39%;\
					left: -100%;\
				}\
			}';
			
			var blueFishValue = {
								'blueFishLeft':blueFishLeft,
							};
			
			blueFishFrames.innerHTML = keyFrames.replace(/blueFishLeft/g, m => blueFishValue[m]);
			document.getElementsByTagName('div')[23].appendChild(blueFishFrames);
			blueFish.style.animation = " blueFishReplace 5s forwards 1"
			blueFish.style.webkitAnimation = " blueFishReplace 5s forwards 1 "
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
		else if ((newWidth === 640 && newHeight=== 960) || (newWidth === 960 && newHeight=== 640)
				||(newWidth === 2560 && newHeight=== 1700) ||(newWidth === 3000 && newHeight=== 2000)
				||(newWidth === 2160 && newHeight=== 1440) ||(newWidth === 2736 && newHeight=== 1824)){widthToHeight = 3 / 2;}
		else if ((newWidth === 480 && newHeight === 320) || (newWidth === 320 && newHeight === 480))	{widthToHeight = 2 / 3;}	
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
	 
	 