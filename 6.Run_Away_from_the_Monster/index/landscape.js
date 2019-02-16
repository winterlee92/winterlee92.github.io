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
  
	function htmlFontSize(){
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var width = w > h ? h : w;
		width = width > 720 ? 720 : width
		var fz = ~~(width*100000/500)/10000
		document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz +"px";
		var realfz = ~~(+window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px','')*1000)/1000
		if (fz !== realfz) {
			document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz * (fz / realfz) +"px";
		}
	}
	
	htmlFontSize();
	
	function lp() {
			 mv = setTimeout(main, 500);
			 createImage();
	    }
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var gameContainer = document.getElementById('gameContainer');
		gameContainer.style.display = "block";

		startAnimation();
	}
  
	var headFrame = document.getElementById('headFrame');
	function createImage(){
		
		var imageArray =[
						'url("background.png")',
						'url("greenGradient.png")',
						'url("redGradient.png")',
						'url("headFrame.png")',	
						'url("lifeCrystal.png")'
					];
		var brickArray =[
							'url("brick1.png")',
							'url("brick2.png")',
							'url("brick3.png")',
							'url("brick4.png")',
							'url("brick5.png")',
							'url("brick6.png")',
							'url("brick7.png")',
							'url("brick8-9.png")',
							'url("brick10.png")',
							'url("block.png")',
							'url("graveStone.png")',
							'url("shortFire.png")',
							'url("longFire.png")',
							'url("flowerMonster.png")',
							'url("treeMonster.png")',
							'url("key.png")',
							'url("reward.png")',
							'url("exclamationMark.png")'
						]						
		var characterArray =[
								'c1.png',
								'c2.png',
								'c3.png'
							]							
		var redMonsterArray =[
								'm1.png',
								'm2.png',
								'm3.png',
								'm4.png',
								'm5.png'
							]	
			
		background.style.backgroundImage = imageArray[0];
		greenGradient.style.backgroundImage = imageArray[1];
		redGradient.style.backgroundImage = imageArray[2];
		
		headFrame.style.backgroundImage = imageArray[3];
		lifeCrystal1.style.backgroundImage = imageArray[4];
		lifeCrystal2.style.backgroundImage = imageArray[4];
		lifeCrystal3.style.backgroundImage = imageArray[4];

		brick1.style.backgroundImage = brickArray[0];
		brick2.style.backgroundImage = brickArray[1];
		block.style.backgroundImage = brickArray[9];
		brick3.style.backgroundImage = brickArray[2];
		graveStone1.style.backgroundImage = brickArray[10];
		
		brick4.style.backgroundImage = brickArray[3];
		brick5.style.backgroundImage = brickArray[4];
		graveStone2.style.backgroundImage = brickArray[10];
		flowerMonster1.style.backgroundImage = brickArray[13];
		treeMonster1.style.backgroundImage = brickArray[14];
		treeMonster2.style.backgroundImage = brickArray[14];
		graveStone3.style.backgroundImage = brickArray[10];
		longFire.style.backgroundImage = brickArray[12];
		
		brick6.style.backgroundImage = brickArray[5];
		flowerMonster2.style.backgroundImage = brickArray[13];
		graveStone4.style.backgroundImage = brickArray[10];
		brick7.style.backgroundImage = brickArray[6];
		key.style.backgroundImage = brickArray[15];
		brick8.style.backgroundImage = brickArray[7];
		shortFire1.style.backgroundImage = brickArray[11];
		brick9.style.backgroundImage = brickArray[7];
		shortFire2.style.backgroundImage = brickArray[11];
		brick10.style.backgroundImage = brickArray[8];
		reward.style.backgroundImage = brickArray[16];
		exclamationMark.style.backgroundImage = brickArray[17];

		firstCharacterImage.style.backgroundImage = "url('" + characterArray[0] + "')";
		for(i=0; i < characterArray.length; i++)
		{	 
			if(i <characterArray.length)
			{
				var characterImage = document.createElement("IMG");
				characterImage.setAttribute("src", characterArray[i]);	
				characterImage.setAttribute("class","character");
				character.appendChild(characterImage);
			}
		}	
		
		firstRedMonsterImage.style.backgroundImage = "url('" + redMonsterArray[0] + "')";
		for(i=0; i < redMonsterArray.length; i++)
		{	 
			if(i <redMonsterArray.length)
			{
				var redMonsterImage = document.createElement("IMG");
				redMonsterImage.setAttribute("src", redMonsterArray[i]);	
				redMonsterImage.setAttribute("class","redMonster");
				redMonster.appendChild(redMonsterImage);
			}
		}		
		
		characterAnimation();
		redMonsterAnimation();
  }

	var life = 3;
	var start = true;
	var p = 0000;
	
	var totalPoints = setInterval(count, 50);
	  function count() {
		if (start === true) {
			p++
			document.getElementById("points").innerHTML = '0000'.substr( String(p).length ) + p ;
		}
	  }
  
	var renderCharacter;
	function characterAnimation(){
		var myIndex = 0;			
		var characterImage = document.getElementsByClassName("character");				
		loopCharacter();
		function loopCharacter(){
			var i;
			for (i=0;i<characterImage.length;i++)
			{
				characterImage[i].style.display="none";
			}
			myIndex++;
			if (myIndex > characterImage.length){}
			characterImage[myIndex-1].style.display = "block";
			renderCharacter = setTimeout(loopCharacter,300);			
			 
			if (myIndex === 3){
				myIndex = 0;			
			}		
		}
	} 
	
    var renderRedMonster;
	function redMonsterAnimation(){
		var myIndex = 0;			
		var rM = document.getElementsByClassName("redMonster");		
		loopRedMonster();
		
		function loopRedMonster(){
			var i;
			for (i=0;i<rM.length;i++)
			{
				rM[i].style.display="none";
			}
			myIndex++;
			if (myIndex > rM.length){}
			rM[myIndex-1].style.display = "block";
			renderRedMonster = setTimeout(loopRedMonster,300);			
			 
			if (myIndex === 5){
				myIndex = 0;			
			}		
		}
	} 
	
	var jumpToggle = 0;
	function jumpAnimation(jumpToggle){
		
		var t = jumpToggle ; 

		if (t === 1){
			character.style.animation = " jump 1s ease-in-out 1";
			character.style.webkitAnimation = "jump 1s ease-in-out 1";	
		}
		if (t === 0){
			character.style.animation = " jumpReset 1s ease-in-out 1";
			character.style.webkitAnimation = "jumpReset 1s ease-in-out 1";	
		}
	}
	
	var jumpToggle2 = 0;
	function jumpAnimation2(jumpToggle2){
		
		var t = jumpToggle2 ; 

		if (t === 1){
			character.style.animation = " jump2 1.2s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jump2 1.2s ease-in-out 1 forwards";	
		}
		if (t === 0){
			character.style.animation = " jumpReset2 1.2s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jumpReset2 1.2s ease-in-out 1 forwards";	
		}
	}
	
	var jumptoBrick3Toggle = 0;
	var positionDetectToggle = 0;
	function positionDetectFA(){
		
		var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var BoxElement  = document.querySelector('#obstacle');
		var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
		var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
		
		var characterElement  = document.querySelector('#character');
		var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
		var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
		var characterTop = (100*characterTopValue)/BoxTopValue;
		var characterLeft = (100*characterLeftValue)/BoxLeftValue;
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
		
		var obstacleExtendElement  = document.querySelector('#obstacleExtend');
		var obstacleExtendTopValue = getComputedStyle(obstacleExtendElement).getPropertyValue("top").split("px")[0];
		var obstacleExtendLeftValue = getComputedStyle(obstacleExtendElement).getPropertyValue("left").split("px")[0];
		var obstacleExtendLeft = (100*obstacleExtendLeftValue)/gameContainerLeftValue;
	
		var blockElement  = document.querySelector('#block');
		var blockTopValue = getComputedStyle(blockElement).getPropertyValue("top").split("px")[0];
		var blockLeftValue = getComputedStyle(blockElement).getPropertyValue("left").split("px")[0];
		var blockTop = (100*blockTopValue)/BoxTopValue;
		var blockLeft = (100*blockLeftValue)/BoxLeftValue;
	
		positionDetect = requestAnimationFrame(positionDetectFA);
		
		if (obstacleLeft < 1 && obstacleLeft > -8){
			var dropKeyframes = document.createElement('style');
			dropKeyframes.type = 'text/css';
			var keyFrames = '\
			@keyframes drop{\
				0%{\
					top: first%;\
				}\
				50%{\
					top: second%;\
				}\
				100%{\
					top: second%;\
				}\
			}\
			@-webkit-keyframes drop{\
				0%{\
					top: first%;\
				}\
				50%{\
					top: second%;\
				}\
				100%{\
					top: second%;\
				}\
			}';
			
			var dropValue = {
								'first':characterTop,
								'second':(characterTop+34),
							};
			
			dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
			document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
			if (characterTop < 74 && characterTop > 73){
				character.style.animation = "drop 1s linear 1 forwards";
				character.style.webkitAnimation= "drop 1s linear 1 forwards";
				
				life=life-1;
				loseCrystal(life);
			}
			if (obstacleLeft < 0.2 && characterTop < 52 && characterTop > 51 ){
				character.style.animationPlayState= "paused";
				character.style.webkitAnimationPlayState= "paused";
				if(obstacleLeft<-7){
					character.style.animation = "drop 1s linear 1 forwards";
					character.style.webkitAnimation= "drop 1s linear 1 forwards";
					
					life=life-1;
					loseCrystal(life);
				}
			}	
		}
		if(obstacleLeft < -8 || characterTop > 74){
			pausedAnimation();
			cancelAnimationFrame(positionDetect);
			clearInterval(totalPoints);
		}		
	}
	
	positionDetect = requestAnimationFrame(positionDetectFA);

	function positionDetectFA2(){
		positionDetectToggle = 1;
		
		var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var BoxElement  = document.querySelector('#obstacle');
		var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
		var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
		
		var characterElement  = document.querySelector('#character');
		var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
		var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
		var characterTop = (100*characterTopValue)/BoxTopValue;
		var characterLeft = (100*characterLeftValue)/BoxLeftValue;
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
		
		var obstacleExtendElement  = document.querySelector('#obstacleExtend');
		var obstacleExtendTopValue = getComputedStyle(obstacleExtendElement).getPropertyValue("top").split("px")[0];
		var obstacleExtendLeftValue = getComputedStyle(obstacleExtendElement).getPropertyValue("left").split("px")[0];
		var obstacleExtendLeft = (100*obstacleExtendLeftValue)/gameContainerLeftValue;
	
		var blockElement  = document.querySelector('#block');
		var blockTopValue = getComputedStyle(blockElement).getPropertyValue("top").split("px")[0];
		var blockLeftValue = getComputedStyle(blockElement).getPropertyValue("left").split("px")[0];
		var blockTop = (100*blockTopValue)/BoxTopValue;
		var blockLeft = (100*blockLeftValue)/BoxLeftValue;
		
		positionDetect2 = requestAnimationFrame(positionDetectFA2);
		
		var dropKeyframes = document.createElement('style');
		dropKeyframes.type = 'text/css';
		var keyFrames = '\
		@keyframes drop{\
			0%{\
				top: first%;\
			}\
			50%{\
				top: second%;\
			}\
			100%{\
				top: second%;\
			}\
		}\
		@-webkit-keyframes drop{\
			0%{\
				top: first%;\
			}\
			50%{\
				top: second%;\
			}\
			100%{\
				top: second%;\
			}\
		}';
		
		var dropValue = {
							'first':characterTop,
							'second':(characterTop+46),
						};
		
		dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
		document.getElementsByTagName('div')[43].appendChild(dropKeyframes);

		if(obstacleLeft<-7 && characterTop > 32){
			character.style.animation = "drop 1s linear 1 forwards";
			character.style.webkitAnimation= "drop 1s linear 1 forwards";		
			life= life - 1;
			loseCrystal(life);
			pausedAnimation();
			cancelAnimationFrame(positionDetect2);
			clearInterval(totalPoints);
		}
		
		if((obstacleLeft > -8 && obstacleLeft < -6 )  && characterTop > 74){
			pausedAnimation();
			cancelAnimationFrame(positionDetect2);
			clearInterval(totalPoints);
		}		
		
		if(obstacleLeft < -6 && characterTop > 30 && characterTop < 31 ){
			character.style.animationPlayState= "paused";
			character.style.webkitAnimationPlayState= "paused";
			positionDetect3 = requestAnimationFrame(positionDetectFA3);
			positionDetect4 = requestAnimationFrame(positionDetectFA4);
			positionDetect5 = requestAnimationFrame(positionDetectFA5);
			positionDetect6 = requestAnimationFrame(positionDetectFA6);
			cancelAnimationFrame(positionDetect2);
		}	
	}
	
	function getBox() {
		var graveStone1Box = document.getElementById ("graveStone1Box");
		var character = document.getElementById ("character");	
				
		if (character.getBoundingClientRect) {
			var rect = character.getBoundingClientRect ();
			cl = rect.left;
			ct = rect.top;
			cr = rect.right;
			cb = rect.bottom;  
		}
		if (graveStone1Box.getBoundingClientRect) {
			var rect2 = graveStone1Box.getBoundingClientRect ();
			gl = rect2.left;
			gt = rect2.top;
			gr = rect2.right;
			gb = rect2.bottom;
		}
		if (graveStone2Box.getBoundingClientRect) {
			var rect3 = graveStone2Box.getBoundingClientRect ();
			gl2 = rect3.left;
			gt2 = rect3.top;
			gr2 = rect3.right;
			gb2 = rect3.bottom;
			
			return(cl,ct,cr,cb,gl,gt,gr,gb2,gl2,gt2,gr2,gb2);
		}
		
		if (graveStone3Box.getBoundingClientRect) {
			var rect4 = graveStone3Box.getBoundingClientRect ();
			gl3 = rect4.left;
			gt3 = rect4.top;
			gr3 = rect4.right;
			gb3 = rect4.bottom;
			
			return(cl,ct,cr,cb,gl,gt,gr,gb2,gl2,gt2,gr2,gb2,gb2,gl3,gt3,gr3,gb3);
		}
	} 
	
	function loseCrystal(life){
	
		var BoxElement  = document.querySelector('#obstacle');
		var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
		var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
		
		var characterElement  = document.querySelector('#character');
		var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
		var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
		var characterTop = (100*characterTopValue)/BoxTopValue;
		var characterLeft = (100*characterLeftValue)/BoxLeftValue;
		
	
		var life = life;

			console.log(life);
			crystalArray = [lifeCrystal1,lifeCrystal2,lifeCrystal3]
			crystalArray[life].style.display = "none";
			
			// pausedAnimation();
			
			if(positionDetectToggle === 0  && characterTop  > 99){
				cancelAnimationFrame(positionDetect);
			}
			else if(positionDetectToggle === 1 ){			
				cancelAnimationFrame(positionDetect2);
			}
			// else if(positionDetectToggle === 2 ){			
				// cancelAnimationFrame(positionDetect3);
			// }
   }
   
   // graveStone1
	function positionDetectFA3(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
		
	   
	   positionDetect3 = requestAnimationFrame(positionDetectFA3);
	   
		getBox();
		
	   if((cr > gl+10 && cr < gr && cb >gt) || (cl > gl && cl+10 < gr && cb >gt) )
	   {
			
			life = life - 1;
			loseCrystal(life);
			cancelAnimationFrame(positionDetect3);
			
		}
   }
   
   // graveStone2
	function positionDetectFA4(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
	   
	   positionDetect4 = requestAnimationFrame(positionDetectFA4);
	   
		getBox();
		
		if ((cr > gl2+10 && cr < gr2 && cb >gt2) || (cl > gl2 && cl+10 < gr2 && cb >gt2)){
			life = life - 1;
			loseCrystal(life);
			cancelAnimationFrame(positionDetect4);
		}
   }
   
   // dropAttheMiddle
	function positionDetectFA5(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
		
	   	var BoxElement  = document.querySelector('#obstacle');
		var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
		var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
		
		var characterElement  = document.querySelector('#character');
		var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
		var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
		var characterTop = (100*characterTopValue)/BoxTopValue;
		var characterLeft = (100*characterLeftValue)/BoxLeftValue;
	   
	   positionDetect5 = requestAnimationFrame(positionDetectFA5);
	   
		getBox();
		
		if (obstacleLeft <= -21 && obstacleLeft >= -23 && characterTop > 30 && characterTop < 31){

			var dropKeyframes = document.createElement('style');
			dropKeyframes.type = 'text/css';
			var keyFrames = '\
			@keyframes drop{\
				0%{\
					top: first%;\
				}\
				50%{\
					top: second%;\
				}\
				100%{\
					top: second%;\
				}\
			}\
			@-webkit-keyframes drop{\
				0%{\
					top: first%;\
				}\
				50%{\
					top: second%;\
				}\
				100%{\
					top: second%;\
				}\
			}';
			
			var dropValue = {
								'first':characterTop,
								'second':(characterTop+46),
							};
			
			dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
			document.getElementsByTagName('div')[43].appendChild(dropKeyframes);

			character.style.animation = "drop 1s linear 1 forwards";
			character.style.webkitAnimation= "drop 1s linear 1 forwards";
			cancelAnimationFrame(positionDetect5);
		}
   }
   
   // stopAnimation
   	function positionDetectFA6(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
	   
	   positionDetect6 = requestAnimationFrame(positionDetectFA6);
		
		if(obstacleLeft < -30){
			pausedAnimation();
		}
   }
   
   // graveStone3
   	function positionDetectFA7(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
	   
	   positionDetect7 = requestAnimationFrame(positionDetectFA7);
	   
		getBox();
		
		if ((cr > gl3+10 && cr < gr3 && cb >gt3) || (cl > gl3 && cl+10 < gr3 && cb >gt3)){
			life = life - 1;
			loseCrystal(life);
			cancelAnimationFrame(positionDetectFA7);
		}
   }	
   
	function pausedAnimation(){
			
		obstacleExtend.style.animationPlayState= "paused";
		obstacleExtend.style.webkitAnimationPlayState= "paused";
	
		obstacle.style.animationPlayState= "paused";
		obstacle.style.webkitAnimationPlayState= "paused";
	
		brick2.style.animationPlayState= "paused";
		brick2.style.webkitAnimationPlayState= "paused";
	
		block.style.animationPlayState= "paused";
		block.style.webkitAnimationPlayState= "paused";
	
		flowerMonster1.style.animationPlayState= "paused";
		flowerMonster1.style.webkitAnimationPlayState= "paused";
	
		treeMonster1.style.animationPlayState= "paused";
		treeMonster1.style.webkitAnimationPlayState= "paused";
	
		treeMonster2.style.animationPlayState= "paused";
		treeMonster2.style.webkitAnimationPlayState= "paused";
	
		longFire.style.animationPlayState= "paused";
		longFire.style.webkitAnimationPlayState= "paused";
	
		flowerMonster2.style.animationPlayState= "paused";
		flowerMonster2.style.webkitAnimationPlayState= "paused";
	
		key.style.animationPlayState= "paused";
		key.style.webkitAnimationPlayState= "paused";
	
		brick8.style.animationPlayState= "paused";
		brick8.style.webkitAnimationPlayState= "paused";
	
		shortFire1.style.animationPlayState= "paused";
		shortFire1.style.webkitAnimationPlayState= "paused";
	
		brick9.style.animationPlayState= "paused";
		brick9.style.webkitAnimationPlayState= "paused";
	
		shortFire2.style.animationPlayState= "paused";
		shortFire2.style.webkitAnimationPlayState= "paused";
		
		reward.style.animationPlayState= "paused";
		reward.style.webkitAnimationPlayState= "paused";
	
		exclamationMark.style.animationPlayState= "paused";
		exclamationMark.style.webkitAnimationPlayState= "paused";

		redMonster.style.display = "none";
		firstRedMonsterImage.style.display = "block";
		
		// character.style.display = "none";
		// firstCharacterImage.style.display = "block";
	}
	
	function startAnimation(){
			
		obstacleExtend.style.animation= "obstacleExtend 20s linear 1 forwards";
		obstacleExtend.style.webkitAnimation = "obstacleExtend 20s linear 1 forwards";
	
		obstacle.style.animation= "obstacle 20s linear 1 forwards";
		obstacle.style.webkitAnimation = "obstacle 20s linear 1 forwards";
	
		brick2.style.animation= "brick2 3s 0.5s infinite";
		brick2.style.webkitAnimation = "brick2 3s 0.5s infinite";
	
		block.style.animation= "block 3.5s linear 3s infinite";
		block.style.webkitAnimation = "block 3.5s linear 3s infinite";
	
		flowerMonster1.style.animation= "flowerMonster1 5s linear infinite";
		flowerMonster1.style.webkitAnimation = "flowerMonster1 5s linear infinite";
	
		treeMonster1.style.animation= "treeMonster1 10s linear 3s infinite";
		treeMonster1.style.webkitAnimation = "treeMonster1 10s linear 3s infinite";
	
		treeMonster2.style.animation= "treeMonster2 8s linear infinite";
		treeMonster2.style.webkitAnimation = "treeMonster2 8s linear infinite";
	
		longFire.style.animation= "longFire 1s linear infinite";
		longFire.style.webkitAnimation = "longFire 1s linear infinite";
	
		flowerMonster2.style.animation= "flowerMonster2 5s linear infinite";
		flowerMonster2.style.webkitAnimation = "flowerMonster2 5s linear infinite";
	
		key.style.animation= "key 1s linear infinite";
		key.style.webkitAnimation = "key 1s linear infinite";
	
		brick8.style.animation= "brick8 3s linear infinite";
		brick8.style.webkitAnimation = "brick8 3s linear infinite";
	
		shortFire1.style.animation= "shortFire 2s linear infinite";
		shortFire1.style.webkitAnimation = "shortFire 2s linear infinite";
	
		brick9.style.animation= "brick9 3s linear infinite";
		brick9.style.webkitAnimation = "brick9 3s linear infinite";
	
		shortFire2.style.animation= "shortFire 2s linear infinite";
		shortFire2.style.webkitAnimation = "shortFire 2s linear infinite";
	
		reward.style.animation= "reward 1s linear infinite";
		reward.style.webkitAnimation = "reward 1s linear infinite";
	
		exclamationMark.style.animation= "exclamationMark 1s linear infinite";
		exclamationMark.style.webkitAnimation = "exclamationMark 1s linear infinite";

	}
	
	function mouseDown(e) {
	var data3 = e.target.id;
	console.log(data3);
	
	var gameContainerElement  = document.querySelector('#gameContainer');
	var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
	var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
	
	var BoxElement  = document.querySelector('#obstacle');
	var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
	var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
	
	var characterElement  = document.querySelector('#character');
	var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
	var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
	var characterTop = (100*characterTopValue)/BoxTopValue;
	var characterLeft = (100*characterLeftValue)/BoxLeftValue;
	
	var obstacleElement  = document.querySelector('#obstacle');
	var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
	var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
	var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
	
	var obstacleExtendElement  = document.querySelector('#obstacleExtend');
	var obstacleExtendTopValue = getComputedStyle(obstacleExtendElement).getPropertyValue("top").split("px")[0];
	var obstacleExtendLeftValue = getComputedStyle(obstacleExtendElement).getPropertyValue("left").split("px")[0];
	var obstacleExtendLeft = (100*BoxLeftValue)/gameContainerLeftValue;
	
		if (data3 === "jumpEvent"){
			if (jumpToggle === 0 && (characterTop < 74 && characterTop > 73)) {
				jumpAnimation(jumpToggle);
				jumpToggle = 1;
			}
			else if (jumpToggle === 1 && (characterTop < 74 && characterTop > 73 )) {
				jumpAnimation(jumpToggle);
				jumpToggle = 0;
			}	
			
			if(obstacleLeft > -5.8 && characterTop > 51 && characterTop < 52){

				var jumpKeyframes = document.createElement('style');
				jumpKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick3{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick3{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@keyframes jumptoBrick3Reset{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick3Reset{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}';
				
				var jumpValue = {
									'first':characterTop,
									'second':(characterTop-34),
								};
				
				jumpKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => jumpValue[m]);
				document.getElementsByTagName('div')[43].appendChild(jumpKeyframes);

				if (jumpToggle === 0){
					
					cancelAnimationFrame(positionDetect);
					positionDetect2 = requestAnimationFrame(positionDetectFA2);
					character.style.animation = " jumptoBrick3 1s ease-in-out 1 forwards";
					character.style.webkitAnimation = "jumptoBrick3 1s ease-in-out 1 forwards";	
					character.style.animationPlayState= "running";
					character.style.webkitAnimationPlayState= "running";
					jumpToggle = 1;
				}
				else if (jumpToggle === 1){

					cancelAnimationFrame(positionDetect);
					positionDetect2 = requestAnimationFrame(positionDetectFA2);
					character.style.animation = " jumptoBrick3Reset 1s ease-in-out 1 forwards";
					character.style.webkitAnimation = "jumptoBrick3Reset 1s ease-in-out 1 forwards";	
					character.style.animationPlayState= "running";
					character.style.webkitAnimationPlayState= "running";
					jumpToggle = 0;
				}
			}
			
			if(obstacleLeft < -5.8 && characterTop > 30 && characterTop < 31 ){

				var BoxElement  = document.querySelector('#obstacle');
				var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
				var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
				
				var characterElement  = document.querySelector('#character');
				var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
				var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
				var characterTop = (100*characterTopValue)/BoxTopValue;
				var characterLeft = (100*characterLeftValue)/BoxLeftValue;
				
				var jumpKeyframes = document.createElement('style');
				jumpKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jump2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jump2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@keyframes jumpReset2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jumpReset2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}';
				
				var jumpValue = {
									'first':characterTop,
									'second':(characterTop-34)
								};
				
				jumpKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => jumpValue[m]);
				document.getElementsByTagName('div')[43].appendChild(jumpKeyframes);

				if (jumpToggle2 === 0) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 1;
				}
				else if (jumpToggle2 === 1) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 0;
				}	
			}
		}
	}
	
	function touchstart(e) {
	var data3 = e.target.id;
	console.log(data3);
	
	var gameContainerElement  = document.querySelector('#gameContainer');
	var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
	var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
	
	var BoxElement  = document.querySelector('#obstacle');
	var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
	var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
	
	var characterElement  = document.querySelector('#character');
	var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
	var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
	var characterTop = (100*characterTopValue)/BoxTopValue;
	var characterLeft = (100*characterLeftValue)/BoxLeftValue;
	
	var obstacleElement  = document.querySelector('#obstacle');
	var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
	var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
	var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
	
	var obstacleExtendElement  = document.querySelector('#obstacleExtend');
	var obstacleExtendTopValue = getComputedStyle(obstacleExtendElement).getPropertyValue("top").split("px")[0];
	var obstacleExtendLeftValue = getComputedStyle(obstacleExtendElement).getPropertyValue("left").split("px")[0];
	var obstacleExtendLeft = (100*BoxLeftValue)/gameContainerLeftValue;
	
		if (data3 === "jumpEvent"){
			if (jumpToggle === 0 && (characterTop < 74 && characterTop > 73)) {
				jumpAnimation(jumpToggle);
				jumpToggle = 1;
			}
			else if (jumpToggle === 1 && (characterTop < 74 && characterTop > 73 )) {
				jumpAnimation(jumpToggle);
				jumpToggle = 0;
			}	
			
			if(obstacleLeft > -5.8 && characterTop > 51 && characterTop < 52){

				var jumpKeyframes = document.createElement('style');
				jumpKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick3{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick3{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@keyframes jumptoBrick3Reset{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick3Reset{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}';
				
				var jumpValue = {
									'first':characterTop,
									'second':(characterTop-34),
								};
				
				jumpKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => jumpValue[m]);
				document.getElementsByTagName('div')[43].appendChild(jumpKeyframes);

				if (jumpToggle === 0){
					
					cancelAnimationFrame(positionDetect);
					positionDetect2 = requestAnimationFrame(positionDetectFA2);
					character.style.animation = " jumptoBrick3 1s ease-in-out 1 forwards";
					character.style.webkitAnimation = "jumptoBrick3 1s ease-in-out 1 forwards";	
					character.style.animationPlayState= "running";
					character.style.webkitAnimationPlayState= "running";
					jumpToggle = 1;
				}
				else if (jumpToggle === 1){

					cancelAnimationFrame(positionDetect);
					positionDetect2 = requestAnimationFrame(positionDetectFA2);
					character.style.animation = " jumptoBrick3Reset 1s ease-in-out 1 forwards";
					character.style.webkitAnimation = "jumptoBrick3Reset 1s ease-in-out 1 forwards";	
					character.style.animationPlayState= "running";
					character.style.webkitAnimationPlayState= "running";
					jumpToggle = 0;
				}
			}
			
			if(obstacleLeft < -5.8 && characterTop > 30 && characterTop < 31 ){

				var BoxElement  = document.querySelector('#obstacle');
				var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
				var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
				
				var characterElement  = document.querySelector('#character');
				var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
				var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
				var characterTop = (100*characterTopValue)/BoxTopValue;
				var characterLeft = (100*characterLeftValue)/BoxLeftValue;
				
				var jumpKeyframes = document.createElement('style');
				jumpKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jump2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jump2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@keyframes jumpReset2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}\
				@-webkit-keyframes jumpReset2{\
					0%{\
						top: first%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: first%;\
					}\
				}';
				
				var jumpValue = {
									'first':characterTop,
									'second':(characterTop-34)
								};
				
				jumpKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => jumpValue[m]);
				document.getElementsByTagName('div')[43].appendChild(jumpKeyframes);

				if (jumpToggle2 === 0) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 1;
				}
				else if (jumpToggle2 === 1) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 0;
				}	
			}
		}
	}
	
	var g = document.getElementById("gameContainer");
	var w = document.getElementById("gameContainer"),
    d = document,
    e = d.documentElement,
    x = w.innerWidth || e.clientWidth 
    y = w.innerHeight|| e.clientHeight;
	
	x=w.clientWidth;
	y=w.clientHeight;
	
  (function () {
  
	if (window.matchMedia("(orientation: portrait)").matches) {
		
		g.style.webkitTransform = 'rotate(90deg)'; 
		g.style.mozTransform    = 'rotate(90deg)'; 
		g.style.msTransform     = 'rotate(90deg)'; 
		g.style.oTransform      = 'rotate(90deg)'; 
		g.style.transform       = 'rotate(90deg)'; 
	
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
	
		g.style.webkitTransform = 'rotate(0deg)'; 
		g.style.mozTransform    = 'rotate(0deg)'; 
		g.style.msTransform     = 'rotate(0deg)'; 
		g.style.oTransform      = 'rotate(0deg)'; 
		g.style.transform       = 'rotate(0deg)'; 
	
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