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
		var fz = ~~(width*100000/100)/10000
		document.getElementById('points').style.cssText = 'font-size: ' + fz +"px";
		var realfz = ~~(+window.getComputedStyle(document.getElementById('points')).fontSize.replace('px','')*1000)/1000
		if (fz !== realfz) {
			document.getElementById('points').style.cssText = 'font-size: ' + fz * (fz / realfz) +"px";
		}
	}
	
	htmlFontSize();
	
	function htmlFontSize2(){
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var width = w > h ? h : w;
		width = width > 720 ? 720 : width
		var fz = ~~(width*100000/200)/10000
		document.getElementById('winPoint').style.cssText = 'font-size: ' + fz +"px";
		var realfz = ~~(+window.getComputedStyle(document.getElementById('winPoint')).fontSize.replace('px','')*1000)/1000
		if (fz !== realfz) {
			document.getElementById('winPoint').style.cssText = 'font-size: ' + fz * (fz / realfz) +"px";
		}
	}
	
	htmlFontSize2();
	
	function lp() {
			 mv = setTimeout(main, 500);
			 createImage();
	    }
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var gameContainer = document.getElementById('gameContainer');
		gameContainer.style.display = "block";

	}
  
	var headFrame = document.getElementById('headFrame');
	
	function createImage(){
		
		var imageArray =[
						'url("background.png")',
						'url("greenGradient.png")',
						'url("redGradient.png")',
						'url("headFrame.png")',	
						'url("lifeCrystal.png")',
						'url("startCharacter.png")',
						'url("startFont.png")',
						'url("startCursor.png")',
						'url("loseBackground.png")',
						'url("loseStar.png")',
						'url("again1.png")',
						'url("again2.png")',
						'url("again3.png")',
						'url("again4.png")',
						'url("loseCharacter.png")',
						'url("golds.png")',
						'url("points.png")',
						'url("winStar.png")',
						'url("winButton.png")',
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
		
		startCharacter.style.backgroundImage = imageArray[5];
		startBackground.style.backgroundImage = imageArray[6];
		startCursor.style.backgroundImage = imageArray[7];
		
		loseBackground.style.backgroundImage = imageArray[8];
		
		loseStar.style.backgroundImage = imageArray[9];
		loseStar2.style.backgroundImage = imageArray[9];
		loseStar3.style.backgroundImage = imageArray[9];
		
		loseCharacter.style.backgroundImage = imageArray[14];
		again1.style.backgroundImage = imageArray[10];
		again2.style.backgroundImage = imageArray[11];
		again3.style.backgroundImage = imageArray[12];
		again4.style.backgroundImage = imageArray[13];
		loseHandCursor.style.backgroundImage = imageArray[7];
		
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
		keyDisplay.style.backgroundImage = brickArray[15];
		brick8.style.backgroundImage = brickArray[7];
		shortFire1.style.backgroundImage = brickArray[11];
		brick9.style.backgroundImage = brickArray[7];
		shortFire2.style.backgroundImage = brickArray[11];
		brick10.style.backgroundImage = brickArray[8];
		reward.style.backgroundImage = brickArray[16];
		exclamationMark.style.backgroundImage = brickArray[17];

		winCharacter.style.backgroundImage = imageArray[5];
		winBackground.style.backgroundImage = imageArray[8];
		winCursor.style.backgroundImage = imageArray[7];
		
		// goldBox.style.backgroundImage = imageArray[17];
		golds.style.backgroundImage = imageArray[15];
		result.style.backgroundImage = imageArray[16];
		winStar.style.backgroundImage  = imageArray[17];
		winStar2.style.backgroundImage  = imageArray[17];
		winStar3.style.backgroundImage  = imageArray[17];
		winButton.style.backgroundImage = imageArray[18];
		
		winStarDefault.style.backgroundImage = imageArray[9];
		winStarDefault2.style.backgroundImage = imageArray[9];
		winStarDefault3.style.backgroundImage = imageArray[9];
		
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
		
  }

	var life = 3;
	var start = true;
	var p = 0000;
	var totalPoints;
	
	function count() {
		if (start === true) {
			p++
			document.getElementById("points").innerHTML = '0000'.substr( String(p).length ) + p ;
			totalPoints = requestAnimationFrame(count, 50);
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
			character.style.animation = " jump2 1s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jump2 1s ease-in-out 1 forwards";	
		}
		if (t === 0){
			character.style.animation = " jumpReset2 1s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jumpReset2 1s ease-in-out 1 forwards";	
		}
	}
	
	var jumpToggle3 = 0;
	function jumpAnimation3(jumpToggle3){
		
		var t = jumpToggle3 ; 

		if (t === 1){
			character.style.animation = " jump 1s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jump 1s ease-in-out 1 forwards";	
		}
		if (t === 0){
			character.style.animation = " jumpReset 1s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jumpReset 1s ease-in-out 1 forwards";	
		}
	}
	
	var jumpToggle4 = 0;
	function jumpAnimation4(jumpToggle4){
		
		var t = jumpToggle4 ; 

		if (t === 1){
			character.style.animation = " jump4 1.2s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jump4 1.2s ease-in-out 1 forwards";	
		}
		if (t === 0){
			character.style.animation = " jumpReset4 1.2s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jumpReset4 1.2s ease-in-out 1 forwards";	
		}
	}
	
	var jumpToggle5 = 0;
	function jumpAnimation5(jumpToggle5){
		
		var t = jumpToggle5 ; 

		if (t === 1){
			character.style.animation = " jump5 1.2s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jump5 1.2s ease-in-out 1 forwards";	
		}
		if (t === 0){
			character.style.animation = " jumpReset5 1.2s ease-in-out 1 forwards";
			character.style.webkitAnimation = "jumpReset5 1.2s ease-in-out 1 forwards";	
		}
	}
	
	var jumptoBrick3Toggle = 0;
	var crystalToggle = 0;
	var getHurtToggle = 0;
	function loseCrystal(life,crystalToggle){
	
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
			
		var live = life;
		crystalArray = [lifeCrystal1,lifeCrystal2,lifeCrystal3]
			
		if (live !== -1){	
		
			if 	(crystalToggle === 0) {

				crystalArray[live].style.animation = "lifeCrystal 1s linear 1 1s forwards";
				crystalArray[live].style.webkitAnimation= "lifeCrystal 1s linear 1 1s forwards";
			
				if (getHurtToggle === 0){
				
					characterBox.style.animation = "getHurt 0.5s linear 1 1s forwards";
					characterBox.style.webkitAnimation = "getHurt 0.5s linear 1 1s forwards";
					
					getHurtToggle = 1 ;
					
				}
				else if(getHurtToggle === 1){
					
					characterBox.style.animation = "getHurt2 0.5s linear 1 1s forwards";
					characterBox.style.webkitAnimation = "getHurt2 0.5s linear 1 1s forwards";
					
					getHurtToggle = 0 ;
					
				}
			
			}
			else if (crystalToggle === 1){
				
				crystalArray[live].style.animation = "lifeCrystal 1s linear 1 forwards";
				crystalArray[live].style.webkitAnimation= "lifeCrystal 1s linear 1 forwards";
			
				if (getHurtToggle === 0){
				
					characterBox.style.animation = "getHurt 0.5s linear 1 forwards";
					characterBox.style.webkitAnimation = "getHurt 0.5s linear 1 forwards";
					
					getHurtToggle = 1 ;
					
				}
				else if(getHurtToggle === 1){
					
					characterBox.style.animation = "getHurt2 0.5s linear 1 forwards";
					characterBox.style.webkitAnimation = "getHurt2 0.5s linear 1 forwards";
					
					getHurtToggle = 0 ;
					
				}
				
			}
			

			
			
			if (p > 150){
				p = p - 150;
			}
			else if (p < 150){
				p = 0;
			}
		}
		
		if(live === 0){
			
			pausedAnimation();
			start = false;
			loseInterface.style.display = "block";
			clearTimeout(renderCharacter);
			
		}
		
   }
	
	// drop&jump between brick1&block
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
								'second':(characterTop+50),
							};
			
			dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
			document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
		
			if(obstacleLeft < -18 && obstacleLeft > -25){
				if(characterTop < 74 && characterTop > 73){
					character.style.animation = "drop 1s linear 1 forwards";
					character.style.webkitAnimation= "drop 1s linear 1 forwards";
					firstRedMonsterImage.style.display ="block";
				}
			}
		
			if( obstacleLeft <-35 && obstacleLeft>-38 && characterTop < 51 && characterTop > 50){	
				character.style.animation = "drop 1s linear 1 forwards";
				character.style.webkitAnimation= "drop 1s linear 1 forwards";
				
				var blockDownKeyframes = document.createElement('style');
				blockDownKeyframes.type = 'text/css';
				var keyFrames = '\
					@keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}\
					@-webkit-keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}';

				var blockDownValue = {
					'first':blockLeft
				};

				blockDownKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => blockDownValue[m]);
				document.getElementsByTagName('div')[33].appendChild(blockDownKeyframes);
				
				life=life-1;
				crystalToggle = 1;
				loseCrystal(life,crystalToggle);
				pausedAnimation();
				
				block.style.animation = " blockDown 1s ease-in-out 0.5 forwards running";
				block.style.webkitAnimation = "blockDown 1s ease-in-out 0.5 forwards running";
				
				start=false;
				cancelAnimationFrame(positionDetect);
			}

			if(characterTop > 75){
				life=life-1;
				crystalToggle = 1;
				loseCrystal(life,crystalToggle);
				pausedAnimation();
				start=false;
				cancelAnimationFrame(positionDetect);		
			}
			
	}
	// flowerMonster1
	function positionDetectFA2(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];

		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
		 
	   positionDetect2 = requestAnimationFrame(positionDetectFA2);

		if(obstacleLeft < -120){
			
			life=life-1;
			crystalToggle = 1;
			loseCrystal(life,crystalToggle);
			cancelAnimationFrame(positionDetect2);
			
		}
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

		if(obstacleLeft < -60){
			
			life=life-1;
			crystalToggle = 1;
			loseCrystal(life,crystalToggle);
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

		if(obstacleLeft < -103){
			
			life=life-1;
			crystalToggle = 1;
			loseCrystal(life,crystalToggle);
			cancelAnimationFrame(positionDetect4);
			
		}
   }
   
	// dropAtTheMiddle
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
	   
		if (obstacleLeft <= -85 && obstacleLeft >= -90 && characterTop > 30 && characterTop < 31){

			character.style.animation = "dropAtTheMiddle 1s linear 1 forwards";
			character.style.webkitAnimation= "dropAtTheMiddle 1s linear 1 forwards";
			
			positionDetect6 = requestAnimationFrame(positionDetectFA6);	
			positionDetect7 = requestAnimationFrame(positionDetectFA7);
			positionDetect9 = requestAnimationFrame(positionDetectFA9);
		
			cancelAnimationFrame(positionDetect2);
			cancelAnimationFrame(positionDetect3);
			cancelAnimationFrame(positionDetect4);
			cancelAnimationFrame(positionDetect5);
		
		}
   }
   
	// graveStone3
   	function positionDetectFA6(){

	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];

		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
			   
	   positionDetect6 = requestAnimationFrame(positionDetectFA6);

		if(obstacleLeft < -97){
			
			life=life-1;
			crystalToggle = 1;
			loseCrystal(life,crystalToggle);
			cancelAnimationFrame(positionDetect6);
			
		}
   }	
   
	// treeMonster2
   	function positionDetectFA7(){

	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];

		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
			   
	   positionDetect7 = requestAnimationFrame(positionDetectFA7);

		if(obstacleLeft < -120){
			
			life=life-1;
			crystalToggle = 1;
			loseCrystal(life,crystalToggle);
			cancelAnimationFrame(positionDetect7);
			
		}
   }	
    
    // brick5 jumpTo brick7 (up)
   	function positionDetectFA8(){

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

	   positionDetect8 = requestAnimationFrame(positionDetectFA8);
		
		if (obstacleLeft < -137 && characterTop > 30 && characterTop < 31){
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
							'second':(characterTop+100),
						};
		
		dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
		document.getElementsByTagName('div')[43].appendChild(dropKeyframes);

		character.style.animation = "drop 2s linear 1 forwards";
		character.style.webkitAnimation= "drop 2s linear 1 forwards";
		
		cancelAnimationFrame(positionDetect8);
		}
   }	
   
    // brick5 jumpTo brick7 (down)
   	function positionDetectFA9(){
		
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

	   positionDetect9 = requestAnimationFrame(positionDetectFA9);
	   
		if (obstacleLeft < -140 && characterTop > 73 && characterTop < 74){
			
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

			character.style.animation = "drop 1s linear 1 forwards";
			character.style.webkitAnimation= "drop 1s linear 1 forwards";
			
			if(characterTop > 75){
				life=life-1;
				crystalToggle = 1;
				loseCrystal(life,crystalToggle);
				pausedAnimation();
				start=false;
				cancelAnimationFrame(positionDetect9);
			}
		}
   }
      
   // brick7 stairs
   	function positionDetectFA10(){
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

		positionDetect10 = requestAnimationFrame(positionDetectFA10);

		if (obstacleLeft < -167 && obstacleLeft > -177 && characterTop <= 20 && characterTop >= 19){

			var goDownKeyframes = document.createElement('style');
				goDownKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes goDown{\
					0%{\
						top: first%;\
					}\
					100%{\
						top: second%;\
					}\
				}\
				@-webkit-keyframes goDown{\
					0%{\
						top: first%;\
					}\
					100%{\
						top: second%;\
					}\
				}';
				
				var goDownValue = {
								'first':characterTop,
								'second':(characterTop+14),
							};
				
				goDownKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => goDownValue[m]);
				document.getElementsByTagName('div')[43].appendChild(goDownKeyframes);

				character.style.animation = "goDown 1s linear 1 forwards";
				character.style.webkitAnimation= "goDown 1s linear 1 forwards";
				
				cancelAnimationFrame(positionDetect10);
		}
	}
   
   // key
    function positionDetectFA11(){
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

		positionDetect11 = requestAnimationFrame(positionDetectFA11);
	
		if (obstacleLeft < -185 && obstacleLeft > -187 && characterTop < 34 && characterTop > 33 ){

			key.style.display = "none";
			keyDisplay.style.display = "block";
			cancelAnimationFrame(positionDetect11);
			
		}
	}
   
    // brick7 dropTo brick6
    function positionDetectFA12(){
		
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

		positionDetect12 = requestAnimationFrame(positionDetectFA12);

		if ((obstacleLeft < -194 && obstacleLeft > -201) && (characterTop > 33 && characterTop < 34)){
			
			var dropKeyframes = document.createElement('style');
			dropKeyframes.type = 'text/css';
			var keyFrames = '\
			@keyframes dropAtTheBrick7{\
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
			@-webkit-keyframes dropAtTheBrick7{\
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
								'second':(characterTop+43)
							};
			
			dropKeyframes.innerHTML = keyFrames.replace(/first|second|third|forth/g, m => dropValue[m]);
			document.getElementsByTagName('div')[43].appendChild(dropKeyframes);

			character.style.animation = "dropAtTheBrick7 1s linear 1 forwards";
			character.style.webkitAnimation= "dropAtTheBrick7 1s linear 1 forwards";
			
			positionDetect13 = requestAnimationFrame(positionDetectFA13);
			cancelAnimationFrame(positionDetect12);
		}
	}
   
   // character run
    function positionDetectFA13(){
		
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

		positionDetect13 = requestAnimationFrame(positionDetectFA13);
		
		if(obstacleLeft === -200 && characterLeft <= 9){
			character.style.animation = "characterRun 3s linear 1 forwards";
			character.style.webkitAnimation= "characterRun 3s linear 1 forwards";
		}
		
		if(characterLeft > 10){
			
			var dropKeyframes = document.createElement('style');
			dropKeyframes.type = 'text/css';
			var keyFrames = '\
			@keyframes endDrop{\
				0%{\
					left: third%;\
					top: first%;\
				}\
				50%{\
					left: third%;\
					top: second%;\
				}\
				100%{\
					left: third%;\
					top: second%;\
				}\
			}\
			@-webkit-keyframes endDrop{\
				0%{\
					left: third%;\
					top: first%;\
				}\
				50%{\
					left: third%;\
					top: second%;\
				}\
				100%{\
					left: third%;\
					top: second%;\
				}\
			}';
			
			var dropValue = {
								'first':characterTop,
								'second':(characterTop+50),
								'third':characterLeft
							};
			
			dropKeyframes.innerHTML = keyFrames.replace(/first|second|third/g, m => dropValue[m]);
			document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
	
			character.style.animation = "endDrop 1s linear 1 forwards";
			character.style.webkitAnimation= "endDrop 1 linear 1 forwards";
			
			cancelAnimationFrame(positionDetect13);
		}
	}
	
	// stopAnimation
   	function positionDetectFA14(){
	   
	   	var gameContainerElement  = document.querySelector('#gameContainer');
		var gameContainerTopValue = getComputedStyle(gameContainerElement).getPropertyValue("height").split("px")[0];
		var gameContainerLeftValue = getComputedStyle(gameContainerElement).getPropertyValue("width").split("px")[0];
		
		var BoxElement  = document.querySelector('#obstacle');
		var BoxTopValue = getComputedStyle(BoxElement).getPropertyValue("height").split("px")[0];
		var BoxLeftValue = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];

		
		var obstacleElement  = document.querySelector('#obstacle');
		var obstacleTopValue = getComputedStyle(obstacleElement).getPropertyValue("top").split("px")[0];
		var obstacleLeftValue = getComputedStyle(obstacleElement).getPropertyValue("left").split("px")[0];	
		var obstacleLeft = (100*obstacleLeftValue)/gameContainerLeftValue;
	   
		var characterElement  = document.querySelector('#character');
		var characterTopValue = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];
		var characterLeftValue = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];	
		var characterTop = (100*characterTopValue)/BoxTopValue;
		var characterLeft = (100*characterLeftValue)/BoxLeftValue;
		
	   positionDetect14 = requestAnimationFrame(positionDetectFA14);
		
		if(obstacleLeft <= -200){
			pausedAnimation2();
		}
		
		if (characterTop > 74){
			
			clearTimeout(renderCharacter);
			pausedAnimation();
			start = false;
			loseInterface.style.display = "block";
		
		}
		
   }
   
   positionDetect14 = requestAnimationFrame(positionDetectFA14);
	
	function positionDetectFA15(){
		
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

		var brick8Element  = document.querySelector('#brick8');
		var brick8TopValue = getComputedStyle(brick8Element).getPropertyValue("top").split("px")[0];
		var brick8LeftValue = getComputedStyle(brick8Element).getPropertyValue("left").split("px")[0];	
		var brick8Top = (100*brick8TopValue)/BoxTopValue;
		var brick8Left = (100*brick8LeftValue)/BoxLeftValue;
		
		 positionDetect15 = requestAnimationFrame(positionDetectFA15);
		
		if(characterTop >= 49 && characterTop <= 50){	
		
			character.style.animation= "jumptoBrick8DropDown 3s linear 1 forwards";
			character.style.webkitAnimation= "jumptoBrick8DropDown 3s linear forwards";	
		
		}
		
		if(characterLeft >= 14.8){
			
			var dropKeyframes = document.createElement('style');
			dropKeyframes.type = 'text/css';
			var keyFrames = '\
			@keyframes dropBetweenBrick8_9{\
				0%{\
					top: first%;\
					left: third%\
				}\
				50%{\
					top: second%;\
					left: third%\
				}\
				100%{\
					top: second%;\
					left: third%\
				}\
			}\
			@-webkit-keyframes dropBetweenBrick8_9{\
				0%{\
					top: first%;\
					left: third%\
				}\
				50%{\
					top: second%;\
					left: third%\
				}\
				100%{\
					top: second%;\
					left: third%\
				}\
			}';
			
			var dropValue = {
								'first':characterTop,
								'second':(characterTop+80),
								'third':characterLeft
							};
			
			dropKeyframes.innerHTML = keyFrames.replace(/first|second|third/g, m => dropValue[m]);
			document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
			character.style.animation= "dropBetweenBrick8_9 1s linear 1 forwards";
			character.style.webkitAnimation= "dropBetweenBrick8_9 1s linear forwards";	
		
			cancelAnimationFrame(positionDetect15);
			
		}
	}
	var positionDetect16Toggle = 0;
	function positionDetectFA16(){

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

			var brick9Element  = document.querySelector('#brick9');
			var brick9TopValue = getComputedStyle(brick9Element).getPropertyValue("top").split("px")[0];
			var brick9LeftValue = getComputedStyle(brick9Element).getPropertyValue("left").split("px")[0];	
			var brick9Top = (100*brick9TopValue)/BoxTopValue;
			var brick9Left = (100*brick9LeftValue)/BoxLeftValue;
			
			 positionDetect16 = requestAnimationFrame(positionDetectFA16);

			if(characterLeft >= 17 && positionDetect16Toggle === 0){	
				positionDetect16Toggle=1;
				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick9DropDown{\
					0%{\
						top: first%;\
						left:forth%;\
					}\
					20%{\
						top: second%;\
					}\
					50%{\
						left:fifth%;\
					}\
					75%{\
						top: third%;\
						left:fifth%;\
					}\
					100%{\
						top: first%;\
						left:fifth%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick9DropDown{\
					0%{\
						top: first%;\
						left:forth%;\
					}\
					20%{\
						top: second%;\
					}\
					50%{\
						left:fifth%;\
					}\
					75%{\
						top: third%;\
						left:fifth%;\
					}\
					100%{\
						top: first%;\
						left:fifth%;\
					}\
				}';
				
				var jumptoBrick9DropDown = {
									'first':(brick9Top-16),
									'second':((brick9Top-11)-16),
									'third':((brick9Top+13)-16),
									'forth':characterLeft,
									'fifth':(characterLeft+5)
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second|third|forth|fifth/g, m => jumptoBrick9DropDown[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
						
				character.style.animation= "jumptoBrick9DropDown 3s linear 1 forwards";
				character.style.webkitAnimation= "jumptoBrick9DropDown 3s linear forwards";	
			}
			
			if(characterLeft > 21){
				
				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes dropBetweenBrick9_10{\
					0%{\
						top: first%;\
						left: third%\
					}\
					50%{\
						top: second%;\
						left: third%\
					}\
					100%{\
						top: second%;\
						left: third%\
					}\
				}\
				@-webkit-keyframes dropBetweenBrick9_10{\
					0%{\
						top: first%;\
						left: third%\
					}\
					50%{\
						top: second%;\
						left: third%\
					}\
					100%{\
						top: second%;\
						left: third%\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':(characterTop+80),
									'third':characterLeft
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second|third/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
				
				character.style.animation= "dropBetweenBrick9_10 1s linear 1 forwards";
				character.style.webkitAnimation= "dropBetweenBrick9_10 1s linear forwards";	
			
				cancelAnimationFrame(positionDetect16);
				
			}	
			
		}
	
	function positionDetectFA17(){
		
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
		
		positionDetect17 = requestAnimationFrame(positionDetectFA17);
		
		if(characterLeft > 23 && characterTop > 21 && characterTop < 22){
			
			character.style.animation= "getReward 1s linear 1 forwards";
			character.style.webkitAnimation= "getReward 1s linear forwards";	
			
		}
		
		if (characterLeft >= 28.5){
			
			cancelAnimationFrame(positionDetect17);
			start = false;
			clearTimeout(renderCharacter);
			pausedAnimation();
			console.log(life);
			if (life === 2){
				winStar3.style.display = "none";
				winStar3.style.animation = "";
				winStar3.style.webkitAnimation = "";	
			}
			else if (life === 1){
				winStar3.style.display = "none";
				winStar2.style.display = "none";
				
				winStar3.style.animation = "";
				winStar3.style.webkitAnimation = "";	
				
				winStar2.style.webkitAnimation = "";			
				winStar2.style.webkitAnimation = "";				
			}
			
			winInterface.style.display = "block";
			winCharacter.style.display = "block";
			
			cancelAnimationFrame(positionDetect);
			cancelAnimationFrame(positionDetect2);
			cancelAnimationFrame(positionDetect3);
			cancelAnimationFrame(positionDetect4);
			cancelAnimationFrame(positionDetect5);		
			cancelAnimationFrame(positionDetect8);			
			cancelAnimationFrame(positionDetect10);
			cancelAnimationFrame(positionDetect11);
			cancelAnimationFrame(positionDetect14);
			cancelAnimationFrame(positionDetect12);
			
			htmlFontSize2();
			document.getElementById("winPoint").innerHTML = p ;
			
		}
		
	}
	
	function pausedAnimation(){
			
		obstacleExtend.style.animationPlayState= "paused";
		obstacleExtend.style.webkitAnimationPlayState= "paused";
	
		obstacle.style.animationPlayState= "paused";
		obstacle.style.webkitAnimationPlayState= "paused";
	
		redMonster.style.animationPlayState= "paused";
		redMonster.style.webkitAnimationPlayState= "paused";
	
		brick2.style.animationPlayState= "paused";
		brick2.style.webkitAnimationPlayState= "paused";
	
		block.style.animationPlayState= "paused";
		block.style.webkitAnimationPlayState= "paused";
	
		brick2.style.animationPlayState= "paused";
		brick2.style.webkitAnimationPlayState= "paused";

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
		clearTimeout(renderRedMonster);
		
		// jumpEvent.style.zIndex ="-10";
	}
	
	function pausedAnimation2(){
			
		obstacleExtend.style.animationPlayState= "paused";
		obstacleExtend.style.webkitAnimationPlayState= "paused";
	
		obstacle.style.animationPlayState= "paused";
		obstacle.style.webkitAnimationPlayState= "paused";
	
		redMonster.style.animationPlayState= "paused";
		redMonster.style.webkitAnimationPlayState= "paused";
	
		brick2.style.animationPlayState= "paused";
		brick2.style.webkitAnimationPlayState= "paused";
	
		block.style.animationPlayState= "paused";
		block.style.webkitAnimationPlayState= "paused";
	
		brick2.style.animationPlayState= "paused";
		brick2.style.webkitAnimationPlayState= "paused";

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

		redMonster.style.display = "none";
		clearTimeout(renderRedMonster);
		
		// jumpEvent.style.zIndex ="-10";
	}
	
	function startAnimation(){
			
		obstacleExtend.style.animation= "obstacleExtend 15s linear 1 forwards";
		obstacleExtend.style.webkitAnimation = "obstacleExtend 15s linear 1 forwards";
	
		obstacle.style.animation= "obstacle 15s linear 1 forwards";
		obstacle.style.webkitAnimation = "obstacle 15s linear 1 forwards";
	
		redMonster.style.animation= "redMonster 1s linear 3.5s forwards";
		redMonster.style.webkitAnimation = "redMonster 1s linear 3.5s forwards";
	
		brick2.style.animation= "brick2 3s 0.5s infinite";
		brick2.style.webkitAnimation = "brick2 3s 0.5s infinite";
	
		block.style.animation= "block 3.5s linear 1.5s infinite";
		block.style.webkitAnimation = "block 3.5s linear 1.5s infinite";
	
		flowerMonster1.style.animation= "flowerMonster1 5s linear 6s infinite";
		flowerMonster1.style.webkitAnimation = "flowerMonster1 5s linear 6s infinite";
	
		treeMonster1.style.animation= "treeMonster1 10s linear 5s infinite";
		treeMonster1.style.webkitAnimation = "treeMonster1 10s linear 5s infinite";
	
		treeMonster2.style.animation= "treeMonster2 8s linear 5s infinite";
		treeMonster2.style.webkitAnimation = "treeMonster2 8s linear 5s infinite";
	
		longFire.style.animation= "longFire 1s linear 10s 1 forwards";
		longFire.style.webkitAnimation = "longFire 1s linear 10s 1 forwards";
	
		flowerMonster2.style.animation= "flowerMonster2 5s linear infinite";
		flowerMonster2.style.webkitAnimation = "flowerMonster2 5s linear infinite";
	
		key.style.animation= "key 1s linear infinite";
		key.style.webkitAnimation = "key 1s linear infinite";
	
		brick8.style.animation= "brick8 3s linear infinite";
		brick8.style.webkitAnimation = "brick8 3s linear infinite";
	
		shortFire1.style.animation= "shortFire 2s linear 0.5s infinite";
		shortFire1.style.webkitAnimation = "shortFire 2s linear 0.5s infinite";
	
		brick9.style.animation= "brick9 3s linear infinite";
		brick9.style.webkitAnimation = "brick9 3s linear infinite";
	
		shortFire2.style.animation= "shortFire 2s linear 1.5s infinite";
		shortFire2.style.webkitAnimation = "shortFire 2s linear 1.5s infinite";
	
		reward.style.animation= "reward 1s linear infinite";
		reward.style.webkitAnimation = "reward 1s linear infinite";
	
		exclamationMark.style.animation= "exclamationMark 1s linear infinite";
		exclamationMark.style.webkitAnimation = "exclamationMark 1s linear infinite";

	}
	
	var jumpToBlockToggle = 0;
	var jumpToBrick1Toggle = 0;
	var jumpUpToggle = 0;
	var jumpToBrick1Toggle = 0;
	var graveStoneLifeToggle = 0;
	var graveStone2LifeToggle = 0;
	var flowerMonster1LifeToggle = 0;
	var dropAtTheMiddle = 0;
	var graveStone3LifeToggle = 0;
	var jumpToBrick7Toggle = 0;
	var animationComplete = false;
	
	function mouseDown(e) {
	var data3 = e.target.id;
	// console.log(data3);
	
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
	
	var blockElement  = document.querySelector('#block');
	var blockTopValue = getComputedStyle(blockElement).getPropertyValue("top").split("px")[0];
	var blockLeftValue = getComputedStyle(blockElement).getPropertyValue("left").split("px")[0];
	var blockTop = (100*blockTopValue)/BoxTopValue;
	var blockLeft = (100*blockLeftValue)/BoxLeftValue;
	
	var brick9Element  = document.querySelector('#brick9');
	var brick9TopValue = getComputedStyle(brick9Element).getPropertyValue("top").split("px")[0];
	var brick9LeftValue = getComputedStyle(brick9Element).getPropertyValue("left").split("px")[0];	
	var brick9Top = (100*brick9TopValue)/BoxTopValue;
	var brick9Left = (100*brick9LeftValue)/BoxLeftValue;
		
		if( data3 === "startCharacter" || data3 === "startBackground" || data3 ===  "startCursor"){
			startAnimation();
			characterAnimation();
			redMonsterAnimation();
			totalPoints = requestAnimationFrame(count, 50);
			start=true;
			startInterface.style.display = "none";
			startInterface.style.zIndex ="-10";
			jumpEvent.style.zIndex ="0";
			firstRedMonsterImage.style.display = "none";
			positionDetect = requestAnimationFrame(positionDetectFA);
		}
	
		if (data3 === "loseBackground"||data3 === "loseCharacter"||
		data3 === "again1"||data3 === "again2"||
		data3 === "again3"||data3 === "again4"||
		data3 === "loseHandCursor"){
			
			location.reload();
			
		}
	
		if (data3 === "jumpEvent"){
			console.log(obstacleLeft,characterTop,characterLeft);
			
			if (obstacleLeft>-7 && characterTop<74 && characterTop>73 && jumpToggle === 0) {
				jumpAnimation(jumpToggle);
				jumpToggle = 1;
			}
			else if (obstacleLeft>-7 && characterTop<74 && characterTop>73 && jumpToggle === 1) {
				jumpAnimation(jumpToggle);
				jumpToggle = 0;
			}	
			
			if (obstacleLeft<-7 && obstacleLeft>-16 && characterTop<74 && characterTop>73 && jumpToBlockToggle === 0){
				
				character.style.animation = " jumpToBlock 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBlock 1s ease-in-out 1 forwards";	
				jumpToBlockToggle = 1;
			}

			if (obstacleLeft<-19 && obstacleLeft>-26 && characterTop < 51 && characterTop > 50 && jumpToBrick1Toggle === 0){
				
				character.style.animation = " jumpToBrick1Drop 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBrick1Drop 1s ease-in-out 1 forwards";	
				
				var blockDownKeyframes = document.createElement('style');
				blockDownKeyframes.type = 'text/css';
				var keyFrames = '\
					@keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}\
					@-webkit-keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}';

				var blockDownValue = {
					'first':blockLeft
				};

				blockDownKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => blockDownValue[m]);
				document.getElementsByTagName('div')[33].appendChild(blockDownKeyframes);
				
				block.style.animation = " blockDown 1s ease-in-out 0.5 forwards";
				block.style.webkitAnimation = "blockDown 1s ease-in-out 0.5 forwards";	
				
				jumpToBrick1Toggle = 1;
	
			}
			
			if (obstacleLeft <-26 && obstacleLeft >-60 && characterTop < 51 && characterTop > 50 && jumpToBrick1Toggle === 0){
				
				character.style.animation = " jumpToBrick1 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBrick1 1s ease-in-out 1 forwards";	

				var blockDownKeyframes = document.createElement('style');
				blockDownKeyframes.type = 'text/css';
				var keyFrames = '\
					@keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}\
					@-webkit-keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}';

				var blockDownValue = {
					'first':blockLeft
				};

				blockDownKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => blockDownValue[m]);
				document.getElementsByTagName('div')[33].appendChild(blockDownKeyframes);
				
				block.style.animation = " blockDown 1s ease-in-out 0.5 forwards";
				block.style.webkitAnimation = "blockDown 1s ease-in-out 0.5 forwards";	
				
				jumpToBrick1Toggle = 1;
				
				positionDetect2 = requestAnimationFrame(positionDetectFA2);				
				positionDetect3 = requestAnimationFrame(positionDetectFA3);
				positionDetect4 = requestAnimationFrame(positionDetectFA4);
				positionDetect5 = requestAnimationFrame(positionDetectFA5);
				positionDetect8 = requestAnimationFrame(positionDetectFA8);
				positionDetect10 = requestAnimationFrame(positionDetectFA10);
				positionDetect11 = requestAnimationFrame(positionDetectFA11);
				positionDetect12 = requestAnimationFrame(positionDetectFA12);
		}
		
			if (obstacleLeft <-40 && obstacleLeft >-165 && characterTop < 31 && characterTop > 30){
				
				if (jumpToggle2 === 0) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 1;
				}
				else if (jumpToggle2 === 1) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 0;
				}	
				
			}
		
			//gravestone1
			if (obstacleLeft < - 43 && obstacleLeft > -54 && characterTop < 31 && characterTop > 30 && graveStoneLifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				graveStoneLifeToggle = 1;
			}
			
			if(obstacleLeft < - 43 && obstacleLeft > -57 && characterTop < 31 && characterTop > 30){
				cancelAnimationFrame(positionDetect3);
			}
			
			//gravestone2
			if (obstacleLeft < - 96 && obstacleLeft > -99 && characterTop < 31 && characterTop > 30 && graveStone2LifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				graveStone2LifeToggle = 1;
			}
			
			if(obstacleLeft < - 96 && obstacleLeft > -103 && characterTop < 31 && characterTop > 30){
				cancelAnimationFrame(positionDetect4);
			}
			
			//flowerMonster1
			if (obstacleLeft < - 109 && obstacleLeft > -113 && characterTop < 31 && characterTop > 30 && flowerMonster1LifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				flowerMonster1LifeToggle = 1;
			}
			
			if(obstacleLeft < - 109 && obstacleLeft > -120 && characterTop < 31 && characterTop > 30){
				cancelAnimationFrame(positionDetect2);
			}
			
			//dropAtTheMiddle
			if (obstacleLeft <-70.5 && obstacleLeft > -77 && characterTop < 31 && characterTop > 30 && dropAtTheMiddle === 0){

				character.style.animation = "jumpDropAtTheMiddle 1.8s linear 1 forwards";
				character.style.webkitAnimation= "jumpDropAtTheMiddle 1.8s linear 1 forwards";
				dropAtTheMiddle = 1;
			}
			if (obstacleLeft <-70.5 && obstacleLeft > -84){
				cancelAnimationFrame(positionDetect5);
			}

			//jump3
			if (obstacleLeft <-85 && obstacleLeft >-200 && characterTop < 74 && characterTop > 73){
				
				if (jumpToggle3 === 0) {
					jumpAnimation3(jumpToggle3);
					jumpToggle3 = 1;
				}
				else if (jumpToggle3 === 1) {
					jumpAnimation3(jumpToggle3);
					jumpToggle3 = 0;
				}	
				
			}
			
			//gravestone3
			if (obstacleLeft < - 85 && obstacleLeft > -93 && characterTop < 74 && characterTop > 73 && graveStone3LifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				graveStone3LifeToggle = 1;
			}
			if (obstacleLeft < - 85 && obstacleLeft > -95 && characterTop < 74 && characterTop > 73 ){
				cancelAnimationFrame(positionDetect6);
			}
			
			//treeMonster2
			if(obstacleLeft < - 118 && obstacleLeft > -120 && characterTop < 74 && characterTop > 73 ){
				cancelAnimationFrame(positionDetect7);
			}
			
			//jumpToBrick7
			if(obstacleLeft <-133 && obstacleLeft > -137 && characterTop < 31 && characterTop > 30 && jumpToBrick7Toggle === 0){
				
				character.style.animation = " jumpToBrick7 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBrick7 1s ease-in-out 1 forwards";			
				jumpToBrick7Toggle = 1;
				cancelAnimationFrame(positionDetect8);
			}
			
			//jump4
			if (obstacleLeft <-146 && obstacleLeft >-157 && characterTop < 20 && characterTop > 19){
				if (jumpToggle4 === 0) {
					jumpAnimation4(jumpToggle4);
					jumpToggle4 = 1;
				}
				else if (jumpToggle4 === 1) {
					jumpAnimation4(jumpToggle4);
					jumpToggle4 = 0;
				}	
			}
			
			//jumpToBrick8
			if (obstacleLeft <-185 && obstacleLeft >= -192 && characterTop < 34 && characterTop > 33){

				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick8{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick8{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':(characterTop-30),
									'third':characterLeft,
									'forth':(characterLeft+3),
									'fifth':(characterTop-35+51),
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second|third|forth|fifth/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
				character.style.animation = " jumptoBrick8 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumptoBrick8 1s ease-in-out 1 forwards";			
					
				positionDetect15 = requestAnimationFrame(positionDetectFA15);
				cancelAnimationFrame(positionDetect12);
			}			
			
			
			//jumptoBrick9
			if (obstacleLeft >= -200 && characterLeft > 11 && characterLeft <= 14 && characterTop < 49 ){
				
				cancelAnimationFrame(positionDetect15);
				detectComplete= requestAnimationFrame(detectAnimationComplete);
		
				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick9{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick9{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':(characterTop-30),
									'third':characterLeft,
									'forth':(characterLeft+6),
									'fifth':(brick9Top-18),
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second|third|forth|fifth/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
				character.style.animation = " jumptoBrick9 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumptoBrick9 1s ease-in-out 1 forwards";			

				character.addEventListener("animationend", myEndFunction);
				character.addEventListener("webkitAnimationEnd", myEndFunction);
				
				function myEndFunction() {
					animationComplete = true;
				}
			}
			
			if (obstacleLeft >= -200 && characterLeft > 16 && characterLeft <=21){
			
				cancelAnimationFrame(positionDetect16);
			
				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick10{\
					0%{\
						top: first%;\
						left:second%;\
					}\
					50%{\
						top: 6%;\
					}\
					80%{\
						top: 24%;\
					}\
					100%{\
						top: 22%;\
						left:24%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick10{\
					0%{\
						top: first%;\
						left:second%;\
					}\
					50%{\
						top: 6%;\
					}\
					80%{\
						top: 24%;\
					}\
					100%{\
						top: 22%;\
						left:24%;\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':characterLeft
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
				character.style.animation = " jumptoBrick10 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumptoBrick10 1s ease-in-out 1 forwards";			

				positionDetect17 = requestAnimationFrame(positionDetectFA17);
				
			}
		}
	}
	
	function touchstart(e) {
		e.preventDefault(); 
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
		
		var blockElement  = document.querySelector('#block');
		var blockTopValue = getComputedStyle(blockElement).getPropertyValue("top").split("px")[0];
		var blockLeftValue = getComputedStyle(blockElement).getPropertyValue("left").split("px")[0];
		var blockTop = (100*blockTopValue)/BoxTopValue;
		var blockLeft = (100*blockLeftValue)/BoxLeftValue;
		
		var brick9Element  = document.querySelector('#brick9');
		var brick9TopValue = getComputedStyle(brick9Element).getPropertyValue("top").split("px")[0];
		var brick9LeftValue = getComputedStyle(brick9Element).getPropertyValue("left").split("px")[0];	
		var brick9Top = (100*brick9TopValue)/BoxTopValue;
		var brick9Left = (100*brick9LeftValue)/BoxLeftValue;
		
		if( data3 === "startCharacter" || data3 === "startBackground" || data3 ===  "startCursor"){
			startAnimation();
			characterAnimation();
			redMonsterAnimation();
			totalPoints = requestAnimationFrame(count, 50);
			start=true;
			startInterface.style.display = "none";
			startInterface.style.zIndex ="-10";
			jumpEvent.style.zIndex ="0";
			firstRedMonsterImage.style.display = "none";
			positionDetect = requestAnimationFrame(positionDetectFA);
		}
	
		if (data3 === "loseBackground"||data3 === "loseCharacter"||
		data3 === "again1"||data3 === "again2"||
		data3 === "again3"||data3 === "again4"||
		data3 === "loseHandCursor"){
			
			location.reload();
			
		}
		
		if (data3 === "jumpEvent"){
			console.log(obstacleLeft,characterTop,characterLeft);
			
			if (obstacleLeft>-7 && characterTop<74 && characterTop>73 && jumpToggle === 0) {
				jumpAnimation(jumpToggle);
				jumpToggle = 1;
			}
			else if (obstacleLeft>-7 && characterTop<74 && characterTop>73 && jumpToggle === 1) {
				jumpAnimation(jumpToggle);
				jumpToggle = 0;
			}	
			
			if (obstacleLeft<-7 && obstacleLeft>-16 && characterTop<74 && characterTop>73 && jumpToBlockToggle === 0){
				
				character.style.animation = " jumpToBlock 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBlock 1s ease-in-out 1 forwards";	
				jumpToBlockToggle = 1;
			}

			if (obstacleLeft<-19 && obstacleLeft>-26 && characterTop < 51 && characterTop > 50 && jumpToBrick1Toggle === 0){
				
				character.style.animation = " jumpToBrick1Drop 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBrick1Drop 1s ease-in-out 1 forwards";	
				
				var blockDownKeyframes = document.createElement('style');
				blockDownKeyframes.type = 'text/css';
				var keyFrames = '\
					@keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}\
					@-webkit-keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}';

				var blockDownValue = {
					'first':blockLeft
				};

				blockDownKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => blockDownValue[m]);
				document.getElementsByTagName('div')[33].appendChild(blockDownKeyframes);
				
				block.style.animation = " blockDown 1s ease-in-out 0.5 forwards";
				block.style.webkitAnimation = "blockDown 1s ease-in-out 0.5 forwards";	
				
				jumpToBrick1Toggle = 1;
	
			}
			
			if (obstacleLeft <-26 && obstacleLeft >-60 && characterTop < 51 && characterTop > 50 && jumpToBrick1Toggle === 0){
				
				character.style.animation = " jumpToBrick1 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBrick1 1s ease-in-out 1 forwards";	

				var blockDownKeyframes = document.createElement('style');
				blockDownKeyframes.type = 'text/css';
				var keyFrames = '\
					@keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}\
					@-webkit-keyframes blockDown{\
						0%{\
							top: 63%;\
							left: first%;\
						}\
						50%{\
							top: 150%;\
							left: first%;\
						}\
						100%{\
							top: 150%;\
							left: first%;\
						}\
					}';

				var blockDownValue = {
					'first':blockLeft
				};

				blockDownKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => blockDownValue[m]);
				document.getElementsByTagName('div')[33].appendChild(blockDownKeyframes);
				
				block.style.animation = " blockDown 1s ease-in-out 0.5 forwards";
				block.style.webkitAnimation = "blockDown 1s ease-in-out 0.5 forwards";	
				
				jumpToBrick1Toggle = 1;
				
				positionDetect2 = requestAnimationFrame(positionDetectFA2);				
				positionDetect3 = requestAnimationFrame(positionDetectFA3);
				positionDetect4 = requestAnimationFrame(positionDetectFA4);
				positionDetect5 = requestAnimationFrame(positionDetectFA5);
				positionDetect8 = requestAnimationFrame(positionDetectFA8);
				positionDetect10 = requestAnimationFrame(positionDetectFA10);
				positionDetect11 = requestAnimationFrame(positionDetectFA11);
				positionDetect12 = requestAnimationFrame(positionDetectFA12);
		}
		
			if (obstacleLeft <-40 && obstacleLeft >-165 && characterTop < 31 && characterTop > 30){
				
				if (jumpToggle2 === 0) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 1;
				}
				else if (jumpToggle2 === 1) {
					jumpAnimation2(jumpToggle2);
					jumpToggle2 = 0;
				}	
				
			}
		
			//gravestone1
			if (obstacleLeft < - 43 && obstacleLeft > -54 && characterTop < 31 && characterTop > 30 && graveStoneLifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				graveStoneLifeToggle = 1;
			}
			
			if(obstacleLeft < - 43 && obstacleLeft > -57 && characterTop < 31 && characterTop > 30){
				cancelAnimationFrame(positionDetect3);
			}
			
			//gravestone2
			if (obstacleLeft < - 96 && obstacleLeft > -99 && characterTop < 31 && characterTop > 30 && graveStone2LifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				graveStone2LifeToggle = 1;
			}
			
			if(obstacleLeft < - 96 && obstacleLeft > -103 && characterTop < 31 && characterTop > 30){
				cancelAnimationFrame(positionDetect4);
			}
			
			//flowerMonster1
			if (obstacleLeft < - 109 && obstacleLeft > -113 && characterTop < 31 && characterTop > 30 && flowerMonster1LifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				flowerMonster1LifeToggle = 1;
			}
			
			if(obstacleLeft < - 109 && obstacleLeft > -120 && characterTop < 31 && characterTop > 30){
				cancelAnimationFrame(positionDetect2);
			}
			
			//dropAtTheMiddle
			if (obstacleLeft <-70.5 && obstacleLeft > -77 && characterTop < 31 && characterTop > 30 && dropAtTheMiddle === 0){

				character.style.animation = "jumpDropAtTheMiddle 1.8s linear 1 forwards";
				character.style.webkitAnimation= "jumpDropAtTheMiddle 1.8s linear 1 forwards";
				dropAtTheMiddle = 1;
			}
			if (obstacleLeft <-70.5 && obstacleLeft > -84){
				cancelAnimationFrame(positionDetect5);
			}

			//jump3
			if (obstacleLeft <-85 && obstacleLeft >-200 && characterTop < 74 && characterTop > 73){
				
				if (jumpToggle3 === 0) {
					jumpAnimation3(jumpToggle3);
					jumpToggle3 = 1;
				}
				else if (jumpToggle3 === 1) {
					jumpAnimation3(jumpToggle3);
					jumpToggle3 = 0;
				}	
				
			}
			
			//gravestone3
			if (obstacleLeft < - 85 && obstacleLeft > -93 && characterTop < 74 && characterTop > 73 && graveStone3LifeToggle === 0){
				life=life-1;
				crystalToggle = 0;
				loseCrystal(life,crystalToggle);				
				graveStone3LifeToggle = 1;
			}
			if (obstacleLeft < - 85 && obstacleLeft > -95 && characterTop < 74 && characterTop > 73 ){
				cancelAnimationFrame(positionDetect6);
			}
			
			//treeMonster2
			if(obstacleLeft < - 118 && obstacleLeft > -120 && characterTop < 74 && characterTop > 73 ){
				cancelAnimationFrame(positionDetect7);
			}
			
			//jumpToBrick7
			if(obstacleLeft <-133 && obstacleLeft > -137 && characterTop < 31 && characterTop > 30 && jumpToBrick7Toggle === 0){
				
				character.style.animation = " jumpToBrick7 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumpToBrick7 1s ease-in-out 1 forwards";			
				jumpToBrick7Toggle = 1;
				cancelAnimationFrame(positionDetect8);
			}
			
			//jump4
			if (obstacleLeft <-146 && obstacleLeft >-157 && characterTop < 20 && characterTop > 19){
				if (jumpToggle4 === 0) {
					jumpAnimation4(jumpToggle4);
					jumpToggle4 = 1;
				}
				else if (jumpToggle4 === 1) {
					jumpAnimation4(jumpToggle4);
					jumpToggle4 = 0;
				}	
			}
			
			//jumpToBrick8
			if (obstacleLeft <-185 && obstacleLeft >= -192 && characterTop < 34 && characterTop > 33){

				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick8{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick8{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':(characterTop-30),
									'third':characterLeft,
									'forth':(characterLeft+3),
									'fifth':(characterTop-35+51),
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second|third|forth|fifth/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
				character.style.animation = " jumptoBrick8 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumptoBrick8 1s ease-in-out 1 forwards";			
					
				positionDetect15 = requestAnimationFrame(positionDetectFA15);
				cancelAnimationFrame(positionDetect12);
			}			
			
			
			//jumptoBrick9
			if (obstacleLeft >= -200 && characterLeft > 11 && characterLeft <= 14 && characterTop < 49 ){
				
				cancelAnimationFrame(positionDetect15);
				detectComplete= requestAnimationFrame(detectAnimationComplete);
		
				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick9{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick9{\
					0%{\
						top: first%;\
						left:third%;\
					}\
					50%{\
						top: second%;\
					}\
					100%{\
						top: fifth%;\
						left:forth%;\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':(characterTop-30),
									'third':characterLeft,
									'forth':(characterLeft+6),
									'fifth':(brick9Top-18),
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second|third|forth|fifth/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
				character.style.animation = " jumptoBrick9 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumptoBrick9 1s ease-in-out 1 forwards";			

				character.addEventListener("animationend", myEndFunction);
				character.addEventListener("webkitAnimationEnd", myEndFunction);
				
				function myEndFunction() {
					animationComplete = true;
				}
			}
			
			if (obstacleLeft >= -200 && characterLeft > 16 && characterLeft <=21){
			
				cancelAnimationFrame(positionDetect16);
			
				var dropKeyframes = document.createElement('style');
				dropKeyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes jumptoBrick10{\
					0%{\
						top: first%;\
						left:second%;\
					}\
					50%{\
						top: 6%;\
					}\
					80%{\
						top: 24%;\
					}\
					100%{\
						top: 22%;\
						left:24%;\
					}\
				}\
				@-webkit-keyframes jumptoBrick10{\
					0%{\
						top: first%;\
						left:second%;\
					}\
					50%{\
						top: 6%;\
					}\
					80%{\
						top: 24%;\
					}\
					100%{\
						top: 22%;\
						left:24%;\
					}\
				}';
				
				var dropValue = {
									'first':characterTop,
									'second':characterLeft
								};
				
				dropKeyframes.innerHTML = keyFrames.replace(/first|second/g, m => dropValue[m]);
				document.getElementsByTagName('div')[43].appendChild(dropKeyframes);
			
				character.style.animation = " jumptoBrick10 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "jumptoBrick10 1s ease-in-out 1 forwards";			

				positionDetect17 = requestAnimationFrame(positionDetectFA17);
				
			}
		}
		
	}
	
	function detectAnimationComplete(){
		
		detectComplete= requestAnimationFrame(detectAnimationComplete);
		
		if(animationComplete === true){
			console.log(animationComplete);
			positionDetect16 = requestAnimationFrame(positionDetectFA16);
			cancelAnimationFrame(detectComplete);
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