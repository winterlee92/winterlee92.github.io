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
  
	function lp() {
			 mv = setTimeout(main, 500);
			 createImage();
	    }
	
	var gameContainer = document.getElementById("gameContainer");
	var loseInterface = document.getElementById("loseInterface");
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var gameContainer = document.getElementById('gameContainer');
		gameContainer.style.display = "block";
		
		 
	}
  
	function createImage(){
	var itemArray =
					[
						'url("background.png")',
						'url("headFrame.png")',
						'url("lifeCrystal.png")',
						'url("mainCharacter.png")',
						'url("startButton.png")',
						'url("hand.png")',
						'url("redGradient.png")',
						'url("handCursor.png")',
						'url("greenGradient.png")',
						'url("buttonBackground.png")',
						'url("loseStar.png")',
						'url("again1.png")',
						'url("again2.png")',
						'url("again3.png")',
						'url("again4.png")',
						'url("sad.png")',
						'url("graveStone.png")',
						'url("treeMonster.png")',
						'url("flowerMonster_L.png")',
						'url("key1.png")',
						'url("reward.png")',
						'url("exclamationMark.png")',
						'url("longFire.png")',
						'url("shortFire.png")',
					];
	
	gameContainer.style.backgroundImage = itemArray[0];
	headFrame.style.backgroundImage = itemArray[1];
	lifeCrystal1.style.backgroundImage = itemArray[2];
	lifeCrystal2.style.backgroundImage = itemArray[2];
	lifeCrystal3.style.backgroundImage = itemArray[2];
	mainCharacter.style.backgroundImage = itemArray[3];
	startButton.style.backgroundImage = itemArray[4];
	redGradient.style.backgroundImage = itemArray[6];
	handCursor.style.backgroundImage = itemArray[7];
	greenGradient.style.backgroundImage = itemArray[8];
	loseInterface.style.backgroundImage = itemArray[9];
	loseStar.style.backgroundImage = itemArray[10];
	loseStar2.style.backgroundImage = itemArray[10];
	loseStar3.style.backgroundImage = itemArray[10];
	again1.style.backgroundImage = itemArray[11];
	again2.style.backgroundImage = itemArray[12];
	again3.style.backgroundImage = itemArray[13];
	again4.style.backgroundImage = itemArray[14];
	loseHandCursor.style.backgroundImage = itemArray[7];
	sad.style.backgroundImage = itemArray[15];
	
	graveStone1.style.backgroundImage = itemArray[16];
	graveStone2.style.backgroundImage = itemArray[16];
	graveStone3.style.backgroundImage = itemArray[16];
	graveStone4.style.backgroundImage = itemArray[16];
	
	treeMonster1.style.backgroundImage = itemArray[17];
	treeMonster2.style.backgroundImage = itemArray[17];
	
	flowerMonster1.style.backgroundImage = itemArray[18];
	flowerMonster2.style.backgroundImage = itemArray[18];
	
	key1.style.backgroundImage = itemArray[19];
	
	reward.style.backgroundImage = itemArray[20];
	exclamationMark.style.backgroundImage = itemArray[21];
	
	longFire.style.backgroundImage = itemArray[22];
	shortFire.style.backgroundImage = itemArray[23];
	
	var characterArray = [
							'c1.png',
							'c2.png',
							'c3.png'
						]
	
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
	
	var redMonsterArray = [
							'm1.png',
							'm2.png',
							'm3.png',
							'm4.png',
							'm5.png'
						]
	
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
	
	var brickArray = [
						'url("brick1.png")',
						'url("brick2.png")',
						'url("brick3.png")',
						'url("brick4.png")',
						'url("brick5.png")',
						'url("brick6.png")',
						'url("brick7.png")',
						'url("brick8-9.png")',
						'url("brick10.png")',
						'url("block1.png")'
					]
	
	brick1.style.backgroundImage = brickArray[0];
	brick2.style.backgroundImage = brickArray[1];
	brick3.style.backgroundImage = brickArray[2];
	brick4.style.backgroundImage = brickArray[3];
	brick5.style.backgroundImage = brickArray[4];
	brick6.style.backgroundImage = brickArray[5];
	brick7.style.backgroundImage = brickArray[6];
	brick8.style.backgroundImage = brickArray[7];
	brick9.style.backgroundImage = brickArray[7];
	brick10.style.backgroundImage = brickArray[8];
	
	block1.style.backgroundImage = brickArray[9];
  }
  
	var renderCharacter;
	function characterAnimation(){
		var myIndex = 0;			
		var c = document.getElementsByClassName("character");		
		loopCharacter();
		function loopCharacter(){
			var i;
			for (i=0;i<c.length;i++)
			{
				c[i].style.display="none";
			}
			myIndex++;
			if (myIndex > c.length){}
			c[myIndex-1].style.display = "block";
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
  
	var life=3;
	function detectValue(){
		
		var brick1Element  = document.querySelector('#brick1');
		var brick1LeftStyle = getComputedStyle(brick1Element).getPropertyValue("left").split("px")[0];

		var brick1BoxElement  = document.querySelector('#gameContainer');
		var brick1BoxStyle = getComputedStyle(brick1BoxElement).getPropertyValue("width").split("px")[0];
	
		brick1Percentage = (100*brick1LeftStyle)/brick1BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

		var characterBoxElement  = document.querySelector('#gameContainer');
		var characterBoxStyle = getComputedStyle(characterBoxElement).getPropertyValue("height").split("px")[0];
		
		var block1Element  = document.querySelector('#block1');
		var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];

		characterTopPercentage = (100*characterTopStyle)/characterBoxStyle;
		
		var BoxElement  = document.querySelector('#gameContainer');
		var BoxStyle = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];

		block1Percentage = (100*block1LeftStyle)/BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterWidthStyle = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];

		characterLeftPercentage = (100*characterWidthStyle)/BoxStyle;

		var block1Element  = document.querySelector('#block1');
		var block1TopStyle = getComputedStyle(block1Element).getPropertyValue("top").split("px")[0];
		
		block1TopPercentage = (100*block1TopStyle)/BoxStyle;
		
		detectAnimation = requestAnimationFrame(detectValue);
		if (brick1Percentage <= -58){
			if(characterTopPercentage >= 75){
				
			pausedAllAnimation();
			
			character.style.animation = "drop1 1s forwards";
			character.style.webkitAnimation= "drop1 1s forwards";
			
			var rM = document.getElementsByClassName("redMonster");	
			
			rM[0].style.display = "none";
			rM[1].style.display = "none";
			rM[2].style.display = "none";
			rM[3].style.display = "none";
			rM[4].style.display = "none";
			
			firstRedMonsterImage.style.display = "block";
			
			life=life-1;
				
			loseCrystal(life);
			loseInterfaceAnimation();
			
			clearTimeout(renderRedMonster);
			cancelAnimationFrame(detectAnimation);
			}
			if(characterTopPercentage < 75){
				if( block1Percentage < 38 && characterTopPercentage >51){
				pausedAllAnimation();
				var dropBlock1Keyframes = document.createElement('style');
				dropBlock1Keyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes drop1{\
					0%{\
						left:value%;\
						top: value2%;\
					}\
					50%{\
						left:value%;\
						top: 100%;\
					}\
					100%{\
						left:value%;\
						top: 100%;\
					}\
				}\
				@-webkit-keyframes drop1{\
					0%{\
						left:value%;\
						top: value2%;\
					}\
					50%{\
						left:value%;\
						top: 100%;\
					}\
					100%{\
						left:value%;\
						top: 100%;\
					}\
				}';
				
				var dropBlock1value = 
				{
					'value':characterLeftPercentage,
					'value2':characterTopPercentage+1
				};
					
				dropBlock1Keyframes.innerHTML = keyFrames.replace(/value|value2/g, m => dropBlock1value[m]);
				document.getElementsByTagName('div')[10].appendChild(dropBlock1Keyframes);
				
				character.style.animation = "drop1 1s forwards";
				character.style.webkitAnimation= "drop1 1s forwards";
				
				var dropBlock1Keyframes2 = document.createElement('style');
				dropBlock1Keyframes2.type = 'text/css';
				var keyFrames2 = '\
				@keyframes dropBlock1{\
					0%{\
						left:blockLeft%;\
						top: blockTop%;\
					}\
					50%{\
						left:blockLeft%;\
						top: 100%;\
					}\
					100%{\
						left:blockLeft%;\
						top: 100%;\
					}\
				}\
				@-webkit-keyframes dropBlock1{\
					0%{\
						left:blockLeft%;\
						top: blockTop%;\
					}\
					50%{\
						left:blockLeft%;\
						top: 100%;\
					}\
					100%{\
						left:blockLeft%;\
						top: 100%;\
					}\
				}';
				var dropBlock1 = 
				{
					'blockLeft': block1Percentage,
					'blockTop': block1TopPercentage+30
				};
				
				dropBlock1Keyframes2.innerHTML = keyFrames2.replace(/blockLeft|blockTop/g, m => dropBlock1[m]);
				document.getElementsByTagName('div')[19].appendChild(dropBlock1Keyframes2);
				
				block1.style.animation = "dropBlock1 1s forwards";
				block1.style.webkitAnimation= "dropBlock1 1s forwards";
				
				var rM = document.getElementsByClassName("redMonster");	

				rM[0].style.display = "none";
				rM[1].style.display = "none";
				rM[2].style.display = "none";
				rM[3].style.display = "none";
				rM[4].style.display = "none";

				firstRedMonsterImage.style.display = "block";

				life=life-1;

				loseCrystal(life);
				loseInterfaceAnimation();

				clearTimeout(renderRedMonster);
				cancelAnimationFrame(detectAnimation);
				}
			}
		}
	}
	
	function detectValue2(){
		
		var brick1Element  = document.querySelector('#brick1');
		var brick1LeftStyle = getComputedStyle(brick1Element).getPropertyValue("left").split("px")[0];

		var brick1BoxElement  = document.querySelector('#gameContainer');
		var brick1BoxStyle = getComputedStyle(brick1BoxElement).getPropertyValue("width").split("px")[0];
		brick1Percentage = (100*brick1LeftStyle)/brick1BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

		var characterBoxElement  = document.querySelector('#gameContainer');
		var characterBoxStyle = getComputedStyle(characterBoxElement).getPropertyValue("height").split("px")[0];
		
		var block1Element  = document.querySelector('#block1');
		var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
		characterTopPercentage = (100*characterTopStyle)/characterBoxStyle;
		
		var BoxElement  = document.querySelector('#gameContainer');
		var BoxStyle = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
		block1Percentage = (100*block1LeftStyle)/BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterWidthStyle = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];
		characterLeftPercentage = (100*characterWidthStyle)/BoxStyle;	
		
		detectAnimation2 = requestAnimationFrame(detectValue2);

		if (brick1Percentage <= -58){
			if(characterTopPercentage >= 75){			
			
				pausedAllAnimation();
				
				character.style.animation= "dropReset1 1s forwards";
				character.style.webkitAnimation= "dropReset1 1s forwards";
				
				var rM = document.getElementsByClassName("redMonster");	
				
				rM[0].style.display = "none";
				rM[1].style.display = "none";
				rM[2].style.display = "none";
				rM[3].style.display = "none";
				rM[4].style.display = "none";
				
				firstRedMonsterImage.style.display = "block";
				
				life=life-1;
				
				loseInterfaceResetAnimation();
				loseCrystal(life);
				
				clearTimeout(renderRedMonster);
				cancelAnimationFrame(detectAnimation2);
			}
			if(characterTopPercentage < 75){
				if ( block1Percentage < 38  && characterTopPercentage >51){
					pausedAllAnimation();
					var dropBlock1Keyframes = document.createElement('style');
					dropBlock1Keyframes.type = 'text/css';
					var keyFrames = '\
					@keyframes dropReset1{\
						0%{\
							left:value%;\
							top: value2%;\
						}\
						50%{\
							left:value%;\
							top: 100%;\
						}\
						100%{\
							left:value%;\
							top: 100%;\
						}\
					}\
					@-webkit-keyframes dropReset1{\
						0%{\
							left:value%;\
							top: value2%;\
						}\
						50%{\
							left:value%;\
							top: 100%;\
						}\
						100%{\
							left:value%;\
							top: 100%;\
						}\
					}';
						
					var dropBlock1value = 
					{
						'value':characterLeftPercentage,
						'value2':characterTopPercentage+1
					};
					
					dropBlock1Keyframes.innerHTML = keyFrames.replace(/value|value2/g, m => dropBlock1value[m]);
					document.getElementsByTagName('div')[10].appendChild(dropBlock1Keyframes);
					
					character.style.animation= "dropReset1 1s forwards";
					character.style.webkitAnimation= "dropReset1 1s forwards";
					
					dropBlock1Keyframes.innerHTML = keyFrames.replace(/value|value2/g, m => dropBlock1value[m]);
					document.getElementsByTagName('div')[10].appendChild(dropBlock1Keyframes);

					var dropBlock1Keyframes2 = document.createElement('style');
					dropBlock1Keyframes2.type = 'text/css';
					var keyFrames2 = '\
					@keyframes dropBlockReset1{\
						0%{\
							left:blockLeft%;\
							top: blockTop%;\
						}\
						50%{\
							left:blockLeft%;\
							top: 100%;\
						}\
						100%{\
							left:blockLeft%;\
							top: 100%;\
						}\
					}\
					@-webkit-keyframes dropBlockReset1{\
						0%{\
							left:blockLeft%;\
							top: blockTop%;\
						}\
						50%{\
							left:blockLeft%;\
							top: 100%;\
						}\
						100%{\
							left:blockLeft%;\
							top: 100%;\
						}\
					}';
					var dropBlock1 = 
					{
					'blockLeft': block1Percentage,
					'blockTop': block1TopPercentage+30
					};

					dropBlock1Keyframes2.innerHTML = keyFrames2.replace(/blockLeft|blockTop/g, m => dropBlock1[m]);
					document.getElementsByTagName('div')[19].appendChild(dropBlock1Keyframes2);

					block1.style.animation = "dropBlockReset1 1s forwards";
					block1.style.webkitAnimation= "dropBlockReset1 1s forwards";
					
					var rM = document.getElementsByClassName("redMonster");	
					
					rM[0].style.display = "none";
					rM[1].style.display = "none";
					rM[2].style.display = "none";
					rM[3].style.display = "none";
					rM[4].style.display = "none";
					
					firstRedMonsterImage.style.display = "block";
					
					life=life-1;
					
					loseInterfaceResetAnimation();
					loseCrystal(life);
					
					clearTimeout(renderRedMonster);
					cancelAnimationFrame(detectAnimation2);
				}
			}
		}

	}
	
	function detectValue3(){
		
	var brick1Element  = document.querySelector('#brick1');
		var brick1LeftStyle = getComputedStyle(brick1Element).getPropertyValue("left").split("px")[0];

		var brick1BoxElement  = document.querySelector('#gameContainer');
		var brick1BoxStyle = getComputedStyle(brick1BoxElement).getPropertyValue("width").split("px")[0];
	
		brick1Percentage = (100*brick1LeftStyle)/brick1BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

		var characterBoxElement  = document.querySelector('#gameContainer');
		var characterBoxStyle = getComputedStyle(characterBoxElement).getPropertyValue("height").split("px")[0];
		
		var block1Element  = document.querySelector('#block1');
		var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];

		characterTopPercentage = (100*characterTopStyle)/characterBoxStyle;
		
		var BoxElement  = document.querySelector('#gameContainer');
		var BoxStyle = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];

		block1Percentage = (100*block1LeftStyle)/BoxStyle;
		
		var characterElement  = document.querySelector('#character');
		var characterWidthStyle = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];

		characterLeftPercentage = (100*characterWidthStyle)/BoxStyle;

		detectAnimation3 = requestAnimationFrame(detectValue3);
		
		if (brick1Percentage <= -58){
			if(characterTopPercentage >= 75){
			pausedAllAnimation();
			
			var dropBlock1Keyframes = document.createElement('style');
				dropBlock1Keyframes.type = 'text/css';
				var keyFrames = '\
				@keyframes drop1{\
					0%{\
						left:value%;\
						top: 76%;\
					}\
					50%{\
						left:value%;\
						top: 100%;\
					}\
					100%{\
						left:value%;\
						top: 100%;\
					}\
				}\
				@-webkit-keyframes drop1{\
					0%{\
						left:value%;\
						top: 76%;\
					}\
					50%{\
						left:value%;\
						top: 100%;\
					}\
					100%{\
						left:value%;\
						top: 100%;\
					}\
				}';
				
				var dropBlock1value = 
				{
					'value':characterLeftPercentage,
					'value2':characterTopPercentage+1
				};
					
				dropBlock1Keyframes.innerHTML = keyFrames.replace(/value|value2/g, m => dropBlock1value[m]);
				document.getElementsByTagName('div')[10].appendChild(dropBlock1Keyframes);
	
			
			character.style.animation = "drop1 1s forwards";
			character.style.webkitAnimation= "drop1 1s forwards";
			
			var rM = document.getElementsByClassName("redMonster");	
			
			rM[0].style.display = "none";
			rM[1].style.display = "none";
			rM[2].style.display = "none";
			rM[3].style.display = "none";
			rM[4].style.display = "none";
			
			firstRedMonsterImage.style.display = "block";
			
			life=life-1;
				
			loseCrystal(life);
			loseInterfaceReset2Animation();
			
			clearTimeout(renderRedMonster);
			cancelAnimationFrame(detectAnimation3);
		}
		
			if(characterTopPercentage < 75){
				if( block1Percentage < 38  && characterTopPercentage >51){
					pausedAllAnimation();
					var dropBlock1Keyframes = document.createElement('style');
					dropBlock1Keyframes.type = 'text/css';
					var keyFrames = '\
					@keyframes drop1{\
						0%{\
							left:value%;\
							top: value2%;\
						}\
						50%{\
							left:value%;\
							top: 100%;\
						}\
						100%{\
							left:value%;\
							top: 100%;\
						}\
					}\
					@-webkit-keyframes drop1{\
						0%{\
							left:value%;\
							top: value2%;\
						}\
						50%{\
							left:value%;\
							top: 100%;\
						}\
						100%{\
							left:value%;\
							top: 100%;\
						}\
					}';
					
					var dropBlock1value = 
					{
						'value':characterLeftPercentage,
						'value2':characterTopPercentage+1
					};
					
					dropBlock1Keyframes.innerHTML = keyFrames.replace(/value|value2/g, m => dropBlock1value[m]);
					document.getElementsByTagName('div')[10].appendChild(dropBlock1Keyframes);
					
					character.style.animation = "drop1 1s forwards";
					character.style.webkitAnimation= "drop1 1s forwards";
					
					var dropBlock1Keyframes2 = document.createElement('style');
					dropBlock1Keyframes2.type = 'text/css';
					var keyFrames2 = '\
					@keyframes dropBlock1{\
						0%{\
							left:blockLeft%;\
							top: blockTop%;\
						}\
						50%{\
							left:blockLeft%;\
							top: 100%;\
						}\
						100%{\
							left:blockLeft%;\
							top: 100%;\
						}\
					}\
					@-webkit-keyframes dropBlock1{\
						0%{\
							left:blockLeft%;\
							top: blockTop%;\
						}\
						50%{\
							left:blockLeft%;\
							top: 100%;\
						}\
						100%{\
							left:blockLeft%;\
							top: 100%;\
						}\
					}';
					var dropBlock1 = 
					{
						'blockLeft': block1Percentage,
						'blockTop': block1TopPercentage+30
					};

					dropBlock1Keyframes2.innerHTML = keyFrames2.replace(/blockLeft|blockTop/g, m => dropBlock1[m]);
					document.getElementsByTagName('div')[19].appendChild(dropBlock1Keyframes2);

					block1.style.animation = "dropBlock1 1s forwards";
					block1.style.webkitAnimation= "dropBlock1 1s forwards";
					
					var rM = document.getElementsByClassName("redMonster");	

					rM[0].style.display = "none";
					rM[1].style.display = "none";
					rM[2].style.display = "none";
					rM[3].style.display = "none";
					rM[4].style.display = "none";

					firstRedMonsterImage.style.display = "block";

					life=life-1;

					loseCrystal(life);
					loseInterfaceReset2Animation();

					clearTimeout(renderRedMonster);
					cancelAnimationFrame(detectAnimation3);
				}
			}
		}
	}
	
	function pausedAllAnimation(){
		
		brick1.style.animationPlayState = "paused";
		brick1.style.webkitAnimationPlayState = "paused";
		
		brick2.style.animationPlayState = "paused";
		brick2.style.webkitAnimationPlayState = "paused";
			
		brick3.style.animationPlayState = "paused";
		brick3.style.webkitAnimationPlayState = "paused";

		brick4.style.animationPlayState = "paused";
		brick4.style.webkitAnimationPlayState = "paused";			
			
		brick5.style.animationPlayState = "paused";
		brick5.style.webkitAnimationPlayState = "paused";	
		
		brick6.style.animationPlayState = "paused";
		brick6.style.webkitAnimationPlayState = "paused";
		
		brick7.style.animationPlayState = "paused";
		brick7.style.webkitAnimationPlayState = "paused";
		
		brick8.style.animationPlayState = "paused";
		brick8.style.webkitAnimationPlayState = "paused";
		
		brick9.style.animationPlayState = "paused";
		brick9.style.webkitAnimationPlayState = "paused";
		
		brick10.style.animationPlayState = "paused";
		brick10.style.webkitAnimationPlayState = "paused";
		
		block1.style.animationPlayState = "paused";
		block1.style.webkitAnimationPlayState = "paused";
		
		graveStone1.style.animationPlayState = "paused";
		graveStone1.style.webkitAnimationPlayState = "paused";
		
		graveStone2.style.animationPlayState = "paused";
		graveStone2.style.webkitAnimationPlayState = "paused";
		
		graveStone3.style.animationPlayState = "paused";
		graveStone3.style.webkitAnimationPlayState = "paused";
		
		graveStone4.style.animationPlayState = "paused";
		graveStone4.style.webkitAnimationPlayState = "paused";
		
		treeMonsterBox1.style.animationPlayState = "paused";
		treeMonsterBox1.style.webkitAnimationPlayState = "paused";
		
		treeMonster1.style.animationPlayState = "paused";
		treeMonster1.style.webkitAnimationPlayState = "paused";

		treeMonsterBox2.style.animationPlayState = "paused";
		treeMonsterBox2.style.webkitAnimationPlayState = "paused";
		
		treeMonster2.style.animationPlayState = "paused";
		treeMonster2.style.webkitAnimationPlayState = "paused";
		
		flowerMonsterBox1.style.animationPlayState = "paused";
		flowerMonsterBox1.style.webkitAnimationPlayState = "paused";
		
		flowerMonster1.style.animationPlayState = "paused";
		flowerMonster1.style.webkitAnimationPlayState = "paused";
		
		flowerMonsterBox2.style.animationPlayState = "paused";
		flowerMonsterBox2.style.webkitAnimationPlayState = "paused";
		
		flowerMonster2.style.animationPlayState = "paused";
		flowerMonster2.style.webkitAnimationPlayState = "paused";
		
		redMonster.style.animationPlayState = "paused";
		redMonster.style.webkitAnimationPlayState = "paused";
		
		longFire.style.animationPlayState = "paused";
		longFire.style.webkitAnimationPlayState = "paused";
		
		shortFire.style.animationPlayState = "paused";
		shortFire.style.webkitAnimationPlayState = "paused";

	    key1.style.animationPlayState = "paused";
		key1.style.webkitAnimationPlayState = "paused";

		reward.style.animationPlayState = "paused";
		reward.style.webkitAnimationPlayState = "paused";

	    exclamationMark.style.animationPlayState = "paused";
		exclamationMark.style.webkitAnimationPlayState = "paused";

	}
	
	function loseInterfaceAnimation(){
		
		again1.style.display = "block";
		again2.style.display = "block";
		again3.style.display = "block";
		again4.style.display = "block";
		loseHandCursor.style.display = "block";
		sad.style.display = "block";
		
		again1.style.animationPlayState = "running";
		again1.style.webkitAnimationPlayState = "running";
		again2.style.animationPlayState = "running";
		again2.style.webkitAnimationPlayState = "running";		
		again3.style.animationPlayState = "running";
		again3.style.webkitAnimationPlayState = "running";	
		again4.style.animationPlayState = "running";
		again4.style.webkitAnimationPlayState = "running";	
		loseHandCursor.style.animationPlayState = "running";
		loseHandCursor.style.webkitAnimationPlayState = "running";
		sad.style.animationPlayState = "running";
		sad.style.webkitAnimationPlayState = "running";
		grayscaleLayer.style.animationPlayState = "running";
		grayscaleLayer.style.webkitAnimationPlayState = "running";
		loseInterface.style.animationPlayState = "running";
		loseInterface.style.webkitAnimationPlayState = "running";
		
	}
  
	function loseInterfaceResetAnimation(){

		loseInterface.style.display = "block";
		again1.style.display = "block";
		again2.style.display = "block";
		again3.style.display = "block";
		again4.style.display = "block";
		loseHandCursor.style.display = "block";
		sad.style.display = "block";	
		grayscaleLayer.style.display = "block";	
		
		again1.style.animation= "againReset1 5s forwards 1,againReset1-2 2s forwards 1, againReset1-2 2s forwards 2.5s 1;"
		again1.style.webkitAnimation = "againReset1 5s forwards 1,againReset1-2 2s forwards 1, againReset1-2 2s forwards 2.5s 1;"
		again2.style.animation = "againReset2 5s forwards 0.5s 1,againReset2-2 2s forwards 0.5s 1, againReset2-2 2s forwards 3s 1;";
		again2.style.webkitAnimation = "againReset2 5s forwards 0.5s 1,againReset2-2 2s forwards 0.5s 1, againReset2-2 2s forwards 3s 1;";		
		again3.style.animation = "againReset3 5s forwards 1s 1,againReset3-2 2s forwards 1s 1, againReset3-2 2s forwards 3.5s 1;";
		again3.style.webkitAnimation = "againReset3 5s forwards 1s 1,againReset3-2 2s forwards 1s 1, againReset3-2 2s forwards 3.5s 1;";	
		again4.style.animation = "againReset4 5s forwards 1.5s 1,againReset4-2 2s forwards 1.5s 1, againReset4-2 2s forwards 4s 1;";
		again4.style.webkitAnimation = "againReset4 5s forwards 1.5s 1,againReset4-2 2s forwards 1.5s 1, againReset4-2 2s forwards 4s 1;";
		loseHandCursor.style.animation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		loseHandCursor.style.webkitAnimation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		sad.style.animation = "loseInterfaceReset 1s linear forwards";
		sad.style.webkitAnimation = "loseInterfaceReset 1s linear forwards";
		loseInterface.style.animation = "loseInterfaceReset 1s linear forwards";
		loseInterface.style.webkitAnimation = "loseInterfaceReset 1s linear forwards";
		grayscaleLayer.style.animation = "grayscaleResetLayer 1s linear forwards;"
		grayscaleLayer.style.webkitAnimation = "grayscaleResetLayer 1s linear forwards;"
		
  }
  
  	function loseInterfaceReset2Animation(){

		loseInterface.style.display = "block";
		again1.style.display = "block";
		again2.style.display = "block";
		again3.style.display = "block";
		again4.style.display = "block";
		loseHandCursor.style.display = "block";
		sad.style.display = "block";	
		grayscaleLayer.style.display = "block";	
		
		again1.style.animation= "again1 5s forwards 1,again1-2 2s forwards 1, again1-2 2s forwards 2.5s 1;"
		again1.style.webkitAnimation = "again1 5s forwards 1,again1-2 2s forwards 1, again1-2 2s forwards 2.5s 1;"
		again2.style.animation = "again2 5s forwards 0.5s 1,again2-2 2s forwards 0.5s 1, again2-2 2s forwards 3s 1;";
		again2.style.webkitAnimation = "again2 5s forwards 0.5s 1,again2-2 2s forwards 0.5s 1, again2-2 2s forwards 3s 1;";		
		again3.style.animation = "again3 5s forwards 1s 1,again3-2 2s forwards 1s 1, again3-2 2s forwards 3.5s 1;";
		again3.style.webkitAnimation = "again3 5s forwards 1s 1,again3-2 2s forwards 1s 1, again3-2 2s forwards 3.5s 1;";	
		again4.style.animation = "again4 5s forwards 1.5s 1,again4-2 2s forwards 1.5s 1, again4-2 2s forwards 4s 1;";
		again4.style.webkitAnimation = "again4 5s forwards 1.5s 1,again4-2 2s forwards 1.5s 1, again4-2 2s forwards 4s 1;";
		loseHandCursor.style.animation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		loseHandCursor.style.webkitAnimation = "loseHandCursorDisplay 1.5s forwards 1, loseHandCursor 1.5s infinite 0.5s;"
		sad.style.animation = "loseInterface 1s linear forwards";
		sad.style.webkitAnimation = "loseInterface 1s linear forwards";
		loseInterface.style.animation = "loseInterface 1s linear forwards";
		loseInterface.style.webkitAnimation = "loseInterface 1s linear forwards";
		grayscaleLayer.style.animation = "grayscaleLayer 1s linear forwards;"
		grayscaleLayer.style.webkitAnimation = "grayscaleLayer 1s linear forwards;"
		
  }
  
    function clearLoseInterface(){
	  
		loseInterface.style.display = "none";
		again1.style.display = "none";
		again2.style.display = "none";
		again3.style.display = "none";
		again4.style.display = "none";
		loseHandCursor.style.display = "none";
		sad.style.display = "none";	
		grayscaleLayer.style.display = "none";	
		loseInterface.style.zIndex = "none";

  }
  
    function resetAnimation(){
	  
	redMonster.style.animation= "redMonsterReset 2s linear forwards,redMonsterReset2 20s linear 2s 1";
	redMonster.style.webkitAnimation = "redMonsterReset 2s linear forwards,redMonsterReset2 20s linear 2s 1";
	
	brick1.style.animation = "brickReset1 20s linear forwards";
	brick1.style.webkitAnimation = "brickReset1 20s linear forwards";
	
	brick2.style.animation = "brickReset2 3s infinite , brickReset2-2 20s linear forwards";
	brick2.style.webkitAnimation = "brickReset2 3s infinite , brickReset2-2 20s linear forwards";
		
	brick3.style.animation = "brickReset3 20s linear 1.5s forwards";
	brick3.style.webkitAnimation = "brickReset3 20s linear 1.5s forwards";

	brick4.style.animation = "brickReset4 20s linear 2.5s forwards";
	brick4.style.webkitAnimation = "brickReset4 20s linear 2.5s forwards";			
		
	brick5.style.animation = "brickReset5 20s linear 7s forwards";
	brick5.style.webkitAnimation = "brickReset5 20s linear 7s forwards";	
		
	longFire.style.animation = "longFireReset 20s linear 11.5s forwards,longFireAnimation 1s linear 15s forwards";
	longFire.style.webkitAnimation = "longFireReset 20s linear 11.5s forwards,longFireAnimation 1s linear 15s forwards";	
		
	brick6.style.animation = "brickReset6 20s linear 4.5s forwards";
	brick6.style.webkitAnimation = "brickReset6 20s 4.5s linear forwards";
	
	brick7.style.animation = "brickReset7 20s linear 4.5s forwards";
	brick7.style.webkitAnimation = "brickReset7 20s linear 4.5s forwards";
		
	brick8.style.animation = "brickReset8 20s linear 4.5s forwards, brickAnimation8 3s linear 4.5s infinite";
	brick8.style.webkitAnimation = "brickReset8 20s linear 4.5s forwards, brickAnimation8 3s linear 4.5s infinite";

	brick9.style.animation = "brickReset9 20s linear 4.5s forwards, brickAnimation9 3s linear 4.5s infinite";
	brick9.style.webkitAnimation = "brickReset9 20s linear 4.5s forwards, brickAnimation9 3s linear 4.5s infinite";			
		
	brick10.style.animation = "brickReset10 20s linear 4.5s forwards";
	brick10.style.webkitAnimation = "brickReset10 20s linear 4.5s forwards";	
		
	shortFire.style.animation = "shortFireReset 20s linear 4.5s forwards,shortFireAnimation 2.5s ease-in-out 21s forwards";
	shortFire.style.webkitAnimation = "shortFireReset 20s linear 4.5s forwards,shortFireAnimation 2.5s ease-in-out 21s forwards";	
	
	block1.style.animation = "blockReset1 20s linear forwards";
	block1.style.webkitAnimation = "blockReset1 20s linear forwards";
	  
	
	graveStone1.style.animation = "graveStoneReset1 20s linear 3s forwards";
	graveStone1.style.webkitAnimation = "graveStoneReset1 20s linear 3s forwards";	  
	  
	graveStone3.style.animation = "graveStoneReset3 20s linear 7.5s forwards";
	graveStone3.style.webkitAnimation = "graveStoneReset3 20s linear 7.5s forwards";  
	  
	flowerMonsterBox1.style.animation = "flowerMonsterBoxReset1 20s linear 8.5s forwards";
	flowerMonsterBox1.style.webkitAnimation = "flowerMonsterBoxReset1 20s linear 8.5s forwards";    
	    
	flowerMonster1.style.animation = "flowerMonsterReset1 8s linear 1s infinite";
	flowerMonster1.style.webkitAnimation = "flowerMonsterReset1 8s linear 1s infinite";    
	  
	graveStone2.style.animation = "graveStoneReset2 20s linear 6.8s forwards";
	graveStone2.style.webkitAnimation = "graveStoneReset2 20s linear 6.8s forwards";	  
	  
	treeMonsterBox1.style.animation = "treeMonsterBoxReset1 20s linear 2.5s forwards";
	treeMonsterBox1.style.webkitAnimation = "treeMonsterBoxReset1 20s linear 2.5s forwards";    
	
	treeMonster1.style.animation = "treeMonsterReset1 8s linear 10s infinite";
	treeMonster1.style.webkitAnimation = "treeMonsterReset1 8s linear 10s infinite";  
	
	treeMonsterBox2.style.animation = "treeMonsterBoxReset1 20s linear 8s forwards";
	treeMonsterBox2.style.webkitAnimation = "treeMonsterBoxReset1 20s linear 8s forwards";    
	  
	treeMonster2.style.animation = "treeMonsterReset2 7s linear 12s infinite";
	treeMonster2.style.webkitAnimation = "treeMonsterReset2 7s linear 12s infinite";    
	   
	   
	key1.style.animation = "keyReset1 20s linear 4.5s forwards, keyUpDownReset1 1s linear infinite";
	key1.style.webkitAnimation = "keyReset1 20s linear 4.5s forwards, keyUpDownReset1 1s linear infinite";    
	
	
	graveStone4.style.animation = "graveStoneReset4 20s linear 4.5s forwards";
	graveStone4.style.webkitAnimation = "graveStoneReset4 20s linear 4.5s forwards";	  
	  
	flowerMonsterBox2.style.animation = "flowerMonsterBoxReset2 20s linear 4.5s forwards";
	flowerMonsterBox2.style.webkitAnimation = "flowerMonsterBoxReset2 20s linear 4.5s forwards";    
	  
	flowerMonster2.style.animation = "flowerMonsterReset2 8s linear 13s infinite";
	flowerMonster2.style.webkitAnimation = "flowerMonsterReset2 8s linear 13s infinite";  
	  
	reward.style.animation = "rewardReset 20s linear 4.5s forwards,rewardAnimationReset 2s linear 20s infinite";
	reward.style.webkitAnimation = "rewardReset 20s linear 4.5s forwards,rewardAnimationReset 2s linear 20s infinite";    
	   
	exclamationMark.style.animation = "exclamationMarkReset 20s linear 4.5s forwards,exclamationMarkUpDownReset 1s linear 5s infinite";
	exclamationMark.style.webkitAnimation = "exclamationMarkReset 20s linear 4.5s forwards,exclamationMarkUpDownReset 1s linear 5s infinite";    

	}
  
    function resetAnimation2(){
	  
	 redMonster.style.animation= "redMonster 2s linear forwards,redMonster2 20s linear 2s 1";
	redMonster.style.webkitAnimation = "redMonster 2s linear forwards,redMonster2 20s linear 2s 1";
	
	brick1.style.animation = "brick1 20s linear forwards";
	brick1.style.webkitAnimation = "brick1 20s linear forwards";
	
	brick2.style.animation = "brick2 3s infinite , brick2-2 20s linear forwards";
	brick2.style.webkitAnimation = "brick2 3s infinite , brick2-2 20s linear forwards";
		
	brick3.style.animation = "brick3 20s linear 1.5s forwards";
	brick3.style.webkitAnimation = "brick3 20s linear 1.5s forwards";

	brick4.style.animation = "brick4 20s linear 2.5s forwards";
	brick4.style.webkitAnimation = "brick4 20s linear 2.5s forwards";			
		
	brick5.style.animation = "brick5 20s linear 7s forwards";
	brick5.style.webkitAnimation = "brick5 20s linear 7s forwards";	
		
	longFire.style.animation = "longFire 20s linear 11.5s forwards,longFireAnimation 1s linear 15s forwards";
	longFire.style.webkitAnimation = "longFire 20s linear 11.5s forwards,longFireAnimation 1s linear 15s forwards";	
		
	brick6.style.animation = "brick6 20s linear 4.5s forwards";
	brick6.style.webkitAnimation = "brick6 20s 4.5s linear forwards";
	
	brick7.style.animation = "brick7 20s linear 4.5s forwards";
	brick7.style.webkitAnimation = "brick7 20s linear 4.5s forwards";
		
	brick8.style.animation = "brick8 20s linear 4.5s forwards, brickAnimation8 3s linear 4.5s infinite";
	brick8.style.webkitAnimation = "brick8 20s linear 4.5s forwards, brickAnimation8 3s linear 4.5s infinite";

	brick9.style.animation = "brick9 20s linear 4.5s forwards, brickAnimation9 3s linear 4.5s infinite";
	brick9.style.webkitAnimation = "brick9 20s linear 4.5s forwards, brickAnimation9 3s linear 4.5s infinite";			
		
	brick10.style.animation = "brick10 20s linear 4.5s forwards";
	brick10.style.webkitAnimation = "brick10 20s linear 4.5s forwards";	
		
	shortFire.style.animation = "shortFire 20s linear 4.5s forwards,shortFireAnimation 2.5s ease-in-out 21s forwards";
	shortFire.style.webkitAnimation = "shortFire 20s linear 4.5s forwards,shortFireAnimation 2.5s ease-in-out 21s forwards";	
	
	block1.style.animation = "block1 20s linear forwards";
	block1.style.webkitAnimation = "block1 20s linear forwards";
	  
	
	graveStone1.style.animation = "graveStone1 20s linear 3s forwards";
	graveStone1.style.webkitAnimation = "graveStone1 20s linear 3s forwards";	  
	  
	graveStone3.style.animation = "graveStone3 20s linear 7.5s forwards";
	graveStone3.style.webkitAnimation = "graveStone3 20s linear 7.5s forwards";  
	  
	flowerMonsterBox1.style.animation = "flowerMonsterBox1 20s linear 8.5s forwards";
	flowerMonsterBox1.style.webkitAnimation = "flowerMonsterBox1 20s linear 8.5s forwards";    
	    
	flowerMonster1.style.animation = "flowerMonster1 8s linear 1s infinite";
	flowerMonster1.style.webkitAnimation = "flowerMonster1 8s linear 1s infinite";    
	  
	graveStone2.style.animation = "graveStone2 20s linear 6.8s forwards";
	graveStone2.style.webkitAnimation = "graveStone2 20s linear 6.8s forwards";	  
	  
	treeMonsterBox1.style.animation = "treeMonsterBox1 20s linear 2.5s forwards";
	treeMonsterBox1.style.webkitAnimation = "treeMonsterBox1 20s linear 2.5s forwards";    
	
	treeMonster1.style.animation = "treeMonster1 8s linear 10s infinite";
	treeMonster1.style.webkitAnimation = "treeMonster1 8s linear 10s infinite";  
	
	treeMonsterBox2.style.animation = "treeMonsterBox1 20s linear 8s forwards";
	treeMonsterBox2.style.webkitAnimation = "treeMonsterBox1 20s linear 8s forwards";    
	  
	treeMonster2.style.animation = "treeMonster2 7s linear 12s infinite";
	treeMonster2.style.webkitAnimation = "treeMonster2 7s linear 12s infinite";    
	   
	   
	key1.style.animation = "key1 20s linear 4.5s forwards, keyUpDown1 1s linear infinite";
	key1.style.webkitAnimation = "key1 20s linear 4.5s forwards, keyUpDown1 1s linear infinite";    
	
	
	graveStone4.style.animation = "graveStone4 20s linear 4.5s forwards";
	graveStone4.style.webkitAnimation = "graveStone4 20s linear 4.5s forwards";	  
	  
	flowerMonsterBox2.style.animation = "flowerMonsterBox2 20s linear 4.5s forwards";
	flowerMonsterBox2.style.webkitAnimation = "flowerMonsterBox2 20s linear 4.5s forwards";    
	  
	flowerMonster2.style.animation = "flowerMonster2 8s linear 13s infinite";
	flowerMonster2.style.webkitAnimation = "flowerMonster2 8s linear 13s infinite";  
	  
	reward.style.animation = "reward 20s linear 4.5s forwards,rewardAnimation 2s linear 20s infinite";
	reward.style.webkitAnimation = "reward 20s linear 4.5s forwards,rewardAnimation 2s linear 20s infinite";    
	   
	exclamationMark.style.animation = "exclamationMark 20s linear 4.5s forwards,exclamationMarkUpDown 1s linear 5s infinite";
	exclamationMark.style.webkitAnimation = "exclamationMark 20s linear 4.5s forwards,exclamationMarkUpDown 1s linear 5s infinite";    

  }
  
    function startAnimation(){
	  
	character.style.left = "31%";
	
	redMonster.style.animation= "redMonster 2s linear forwards,redMonster2 20s linear 2s 1";
	redMonster.style.webkitAnimation = "redMonster 2s linear forwards,redMonster2 20s linear 2s 1";
	
	brick1.style.animation = "brick1 20s linear forwards";
	brick1.style.webkitAnimation = "brick1 20s linear forwards";
	
	brick2.style.animation = "brick2 3s infinite , brick2-2 20s linear forwards";
	brick2.style.webkitAnimation = "brick2 3s infinite , brick2-2 20s linear forwards";
		
	brick3.style.animation = "brick3 20s linear 1.5s forwards";
	brick3.style.webkitAnimation = "brick3 20s linear 1.5s forwards";

	brick4.style.animation = "brick4 20s linear 2.5s forwards";
	brick4.style.webkitAnimation = "brick4 20s linear 2.5s forwards";			
		
	brick5.style.animation = "brick5 20s linear 7s forwards";
	brick5.style.webkitAnimation = "brick5 20s linear 7s forwards";	
		
	longFire.style.animation = "longFire 20s linear 11.5s forwards,longFireAnimation 1s linear 15s forwards";
	longFire.style.webkitAnimation = "longFire 20s linear 11.5s forwards,longFireAnimation 1s linear 15s forwards";	
		
	brick6.style.animation = "brick6 20s linear 4.5s forwards";
	brick6.style.webkitAnimation = "brick6 20s 4.5s linear forwards";
	
	brick7.style.animation = "brick7 20s linear 4.5s forwards";
	brick7.style.webkitAnimation = "brick7 20s linear 4.5s forwards";
		
	brick8.style.animation = "brick8 20s linear 4.5s forwards, brickAnimation8 3s linear 4.5s infinite";
	brick8.style.webkitAnimation = "brick8 20s linear 4.5s forwards, brickAnimation8 3s linear 4.5s infinite";

	brick9.style.animation = "brick9 20s linear 4.5s forwards, brickAnimation9 3s linear 4.5s infinite";
	brick9.style.webkitAnimation = "brick9 20s linear 4.5s forwards, brickAnimation9 3s linear 4.5s infinite";			
		
	brick10.style.animation = "brick10 20s linear 4.5s forwards";
	brick10.style.webkitAnimation = "brick10 20s linear 4.5s forwards";	
		
	shortFire.style.animation = "shortFire 20s linear 4.5s forwards,shortFireAnimation 2.5s ease-in-out 21s forwards";
	shortFire.style.webkitAnimation = "shortFire 20s linear 4.5s forwards,shortFireAnimation 2.5s ease-in-out 21s forwards";	
	
	block1.style.animation = "block1 20s linear forwards";
	block1.style.webkitAnimation = "block1 20s linear forwards";
	  
	
	graveStone1.style.animation = "graveStone1 20s linear 3s forwards";
	graveStone1.style.webkitAnimation = "graveStone1 20s linear 3s forwards";	  
	  
	graveStone3.style.animation = "graveStone3 20s linear 7.5s forwards";
	graveStone3.style.webkitAnimation = "graveStone3 20s linear 7.5s forwards";  
	  
	flowerMonsterBox1.style.animation = "flowerMonsterBox1 20s linear 8.5s forwards";
	flowerMonsterBox1.style.webkitAnimation = "flowerMonsterBox1 20s linear 8.5s forwards";    
	    
	flowerMonster1.style.animation = "flowerMonster1 8s linear 1s infinite";
	flowerMonster1.style.webkitAnimation = "flowerMonster1 8s linear 1s infinite";    
	  
	graveStone2.style.animation = "graveStone2 20s linear 6.8s forwards";
	graveStone2.style.webkitAnimation = "graveStone2 20s linear 6.8s forwards";	  
	  
	treeMonsterBox1.style.animation = "treeMonsterBox1 20s linear 2.5s forwards";
	treeMonsterBox1.style.webkitAnimation = "treeMonsterBox1 20s linear 2.5s forwards";    
	
	treeMonster1.style.animation = "treeMonster1 8s linear 10s infinite";
	treeMonster1.style.webkitAnimation = "treeMonster1 8s linear 10s infinite";  
	
	treeMonsterBox2.style.animation = "treeMonsterBox1 20s linear 8s forwards";
	treeMonsterBox2.style.webkitAnimation = "treeMonsterBox1 20s linear 8s forwards";    
	  
	treeMonster2.style.animation = "treeMonster2 7s linear 12s infinite";
	treeMonster2.style.webkitAnimation = "treeMonster2 7s linear 12s infinite";    
	   
	   
	key1.style.animation = "key1 20s linear 4.5s forwards, keyUpDown1 1s linear infinite";
	key1.style.webkitAnimation = "key1 20s linear 4.5s forwards, keyUpDown1 1s linear infinite";    
	
	
	graveStone4.style.animation = "graveStone4 20s linear 4.5s forwards";
	graveStone4.style.webkitAnimation = "graveStone4 20s linear 4.5s forwards";	  
	  
	flowerMonsterBox2.style.animation = "flowerMonsterBox2 20s linear 4.5s forwards";
	flowerMonsterBox2.style.webkitAnimation = "flowerMonsterBox2 20s linear 4.5s forwards";    
	  
	flowerMonster2.style.animation = "flowerMonster2 8s linear 13s infinite";
	flowerMonster2.style.webkitAnimation = "flowerMonster2 8s linear 13s infinite";  
	  
	reward.style.animation = "reward 20s linear 4.5s forwards,rewardAnimation 2s linear 20s infinite";
	reward.style.webkitAnimation = "reward 20s linear 4.5s forwards,rewardAnimation 2s linear 20s infinite";    
	   
	exclamationMark.style.animation = "exclamationMark 20s linear 4.5s forwards,exclamationMarkUpDown 1s linear 5s infinite";
	exclamationMark.style.webkitAnimation = "exclamationMark 20s linear 4.5s forwards,exclamationMarkUpDown 1s linear 5s infinite";    
	
	characterAnimation();
  }
  
    function loseCrystal(life){
	
		var life = life;

			console.log(life);
			crystalArray = [lifeCrystal1,lifeCrystal2,lifeCrystal3]
			crystalArray[life].style.display = "none";
		
		if (life === 0){
			pausedAllAnimation();
			loseInterfaceAnimation();
			loseInterfaceResetAnimation();
			loseInterfaceReset2Animation();
			
			var rM = document.getElementsByClassName("redMonster");	
			
			rM[0].style.display = "none";
			rM[1].style.display = "none";
			rM[2].style.display = "none";
			rM[3].style.display = "none";
			rM[4].style.display = "none";

			firstRedMonsterImage.style.display = "block";
			clearTimeout(renderRedMonster);
		}
   }
  
	function getBox() {
		var graveStone1Box = document.getElementById ("graveStone1Box");
		var graveStone3Box = document.getElementById ("graveStone3Box");
		var flowerMonsterAttack1 = document.getElementById ("flowerMonsterAttack1");
		var character = document.getElementById ("character");	
				
		if (character.getBoundingClientRect) {
			var rect = character.getBoundingClientRect ();
			cl = rect.left;
			ct = rect.top;
			cr = rect.right - rect.left;
			cb = rect.bottom - rect.top;  
		}
		if (graveStone1Box.getBoundingClientRect) {
			var rect2 = graveStone1Box.getBoundingClientRect ();
			gl = rect2.left;
			gt = rect2.top;
			gr = rect2.right - rect2.left;
			gb = rect2.bottom - rect2.top;
		}
		if (graveStone3Box.getBoundingClientRect) {
			var rect3 = graveStone3Box.getBoundingClientRect ();
			x3 = rect3.left;
			y3 = rect3.top;
			w3 = rect3.right - rect3.left;
			h3 = rect3.bottom - rect3.top;		
		}
		if (flowerMonsterAttack1.getBoundingClientRect) {
			var rect4 = flowerMonsterAttack1.getBoundingClientRect ();
			x4 = rect4.left;
			y4 = rect4.top;
			w4 = rect4.right - rect4.left;
			h4 = rect4.bottom - rect4.top;
			
			return(cl,ct,gl,gt,x3,y3,x4,y4,cr,cb,gr,gb,w3,h3,w4,h4);
		}
	}
	
	var graveStone1Toggle = 0;
	var graveStone3Toggle = 0;
	var flowerMonster1Toggle = 0;
	function monsterDetect(){
		getBox();
		monsterDetectValue = requestAnimationFrame(monsterDetect);
		
		if((cr<gr && cr>gl)||(cl>gl && cl<gr)){
			// pausedAllAnimation();
			if (graveStone1Toggle === 0){
				graveStone1Toggle=1;
			var BoxElement  = document.querySelector('#gameContainer');
			var BoxStyle = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];

			var characterElement  = document.querySelector('#character');
			var characterWidthStyle = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];

			characterLeftPercentage = (100*characterWidthStyle)/BoxStyle;
				
			var characterElement  = document.querySelector('#character');
			var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

			characterTopPercentage = (100*characterTopStyle)/BoxStyle;

				life=life-1;
				loseCrystal(life);
				
				var loseLifeKeyframes = document.createElement('style');
				loseLifeKeyframes.type = 'text/css';
				var keyFrames4 = '\
				@keyframes loseLife{\
					0%{\
						top: topValue%\
						left: leftValue%\
						opacity:1;\
					}\
					10%{\
						opacity:0;\
					}\
					20%{\
						opacity:1;\
					}\
					30%{\
						opacity:0;\
					}\
					40%{\
						opacity:1;\
					}\
					50%{\
						opacity:0;\
					}\
					60%{\
						opacity:1;\
					}\
					100%{\
						top: topValue%\
						left: leftValue%\
						opacity:1;\
					}\
				}\
				@-webkit-keyframes loseLife{\
					0%{\
						top: topValue%\
						left: leftValue%\
						opacity:1;\
					}\
					10%{\
						opacity:0;\
					}\
					20%{\
						opacity:1;\
					}\
					30%{\
						opacity:0;\
					}\
					40%{\
						opacity:1;\
					}\
					50%{\
						opacity:0;\
					}\
					60%{\
						opacity:1;\
					}\
					100%{\
						top: topValue%\
						left: leftValue%\
						opacity:1;\
					}\
				}';
			
				var loseLifeValue = 
									{
										'a':characterLeftPercentage,
										'b':characterTopPercentage
									};
									
				loseLifeKeyframes.innerHTML = keyFrames4.replace(/topValue|leftValue/g, m => loseLifeValue[m]);
				document.getElementsByTagName('div')[10].appendChild(loseLifeKeyframes);
				
				character.style.animation = " loseLife 1s ease-in-out 1 forwards";
				character.style.webkitAnimation = "loseLife 1s ease-in-out 1 forwards";		

				// cancelAnimationFrame(monsterDetectValue);
			}
		}
		// if (x3<x && w3>w){
			// if (graveStone3Toggle === 0){
				// graveStone3Toggle=1;
				// character.style.animation = " loseLife2 1s ease-in-out 1 forwards";
				// character.style.webkitAnimation = "loseLife2 1s ease-in-out 1 forwards";		
				// life=life-1;
				// loseCrystal(life);
			// }
		// }
		// if (x4<x){
			
			// if (flowerMonster1Toggle === 0){
				// flowerMonster1Toggle=1;
				// character.style.animation = " loseLife3 1s ease-in-out 1 forwards";
				// character.style.webkitAnimation = "loseLife3 1s ease-in-out 1 forwards";		
				// life=life-1;
				// loseCrystal(life);
			// }
		// }
	}
	monsterDetect();
	var toggle = 0; 
	function jumpAnimation(toggle){
		var t = toggle ; 
		if (toggle === 1){
			character.style.animation = " jump1 1s ease-in-out 1";
			character.style.webkitAnimation = "jump1 1s ease-in-out 1";		
		}
		if (toggle === 0){
			character.style.animation = " jumpReset1 1s ease-in-out 1";
			character.style.webkitAnimation = "jumpReset1 1s ease-in-out 1";	
		}
	}
	
	function mouseDown(e) {
		var data = e.target.id;
		
		console.log(data);
		
		if (data === "startButton" || "mainCharacter"  || "handCursor" )
		{
			handCursor.style.webkitAnimationPlayState = "paused";
			handCursor.style.animationPlayState = "paused";		
			handCursor.style.display = "none";
			handCursor.style.zIndex = "-1";
			mainCharacter.style.display = "none";
			mainCharacter.style.zIndex = "-1";
			startButton.style.display = "none";
			startButton.style.zIndex = "-1";
			firstCharacterImage.style.display = "none";
			
			characterJump.style.zIndex = "5";
			
			var non = "block";
			document.getElementById('firstRedMonsterImage').style.display = non;

			doTimer(
			2000,20,function(steps){
						non = non - (1 / steps);
						document.getElementById('firstRedMonsterImage').style.display = non;				
						},
			function(){
						document.getElementById('firstRedMonsterImage').style.display = "none";										
						redMonsterAnimation();
					}						
			);
			
			startAnimation();
			detectAnimation = requestAnimationFrame(detectValue);
		}
	}
	
	var blockToggle = 0 ;
	var brick3Toggle = 0 ;
	function mouseDown2(e) {
		var data2 = e.target.id;
		
		console.log(data2);
		
		if (data2 === "loseInterface" || "loseStar"  || "loseStar2" || 
		"loseStar3" || "again1" || "again2" || "again3" || "again4" ||
		"loseHandCursor")
		{
			console.log(life);
			blockToggle = 0;
			brick3Toggle = 0;
			graveStone1Toggle = 0;
			// graveStone2Toggle = 0;
			graveStone3Toggle = 0;
			if(life === 2){
				character.style.animation= "none 1s ease-out";
				firstRedMonsterImage.style.display = "none";
				redMonsterAnimation();
				clearLoseInterface();
				resetAnimation();
				detectAnimation2 = requestAnimationFrame(detectValue2);
			}
			
			if(life === 1){
				character.style.animation= "none 1s ease-out";
				firstRedMonsterImage.style.display = "none";
				redMonsterAnimation();
				clearLoseInterface();
				resetAnimation2();
				detectAnimation3 = requestAnimationFrame(detectValue3);
			}
			
			if(life === 0){
				location.reload();
			}
		}
	}
	
	function mouseDown3(e) {
		var data3 = e.target.id;
		console.log(character.style.left);
		console.log(data3);
		if (data3 === "characterJump")
		{
			var BoxElement  = document.querySelector('#gameContainer');
			var BoxStyle = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
			
			var block1Element  = document.querySelector('#block1');
			var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
			block1Percentage = (100*block1LeftStyle)/BoxStyle;
			
			var block1Element  = document.querySelector('#block1');
			var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
			block1Percentage = (100*block1LeftStyle)/BoxStyle;
			
			var brick4Element  = document.querySelector('#brick4');
			var brick4LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
			brick4Percentage = (100*brick4LeftStyle)/BoxStyle;
					
			var characterElement  = document.querySelector('#character');
			var characterWidthStyle = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];
			characterLeftPercentage = (100*characterWidthStyle)/BoxStyle;
	
			console.log(brick4Percentage);		
					
			if (block1Percentage >= 43){
				
				if (brick1Percentage > -46){
					
					if (toggle === 0) {
						jumpAnimation(toggle)
						toggle = 1;
					}
					else if (toggle === 1) {
						jumpAnimation(toggle)
						toggle = 0;
					}
				}
				if (brick1Percentage <= -46){
					if(blockToggle === 0){
						blockToggle = 1;

						var jumpBlock1Keyframes = document.createElement('style');
						jumpBlock1Keyframes.type = 'text/css';
						var keyFrames = '\
						@keyframes jumpBlock1{\
							0% {\
								top: 76%;\
								left: 24%;\
							}\
							10% {\
								top: 74%;\
								left: 24%;\
							}\
							20% {\
								top: 53%;\
								left: 29%;\
							}\
							30% {\
								top: 40%;\
								left: 34%;\
							}\
							40% {\
								top: 53%;\
								left: 39%;\
							}\
							100% {\
								top: 53%;\
								left: 39%;\
							}\
						}\
						@-webkit-keyframes jumpBlock1{\
							0% {\
								top: 76%;\
								left: 24%;\
							}\
							10% {\
								top: 74%;\
								left: 24%;\
							}\
							20% {\
								top: 53%;\
								left: 29%;\
							}\
							30% {\
								top: 40%;\
								left: 34%;\
							}\
							40% {\
								top: 53%;\
								left: 39%;\
							}\
							100% {\
								top: 53%;\
								left: 39%;\
							}\
						}';
					
						var jumpBlock1Value = 
											{
												'24':characterLeftPercentage,
												'29':(characterLeftPercentage+5),
												'34':(characterLeftPercentage+10),
												'39':(characterLeftPercentage+15)
											};
											/24|29|34|39/
						jumpBlock1Keyframes.innerHTML = keyFrames.replace(/24|29|34|39/g, m => jumpBlock1Value[m]);
						document.getElementsByTagName('div')[10].appendChild(jumpBlock1Keyframes);
						
						character.style.animation = " jumpBlock1 1s ease-in-out 1 forwards";
						character.style.webkitAnimation = "jumpBlock1 1s ease-in-out 1 forwards";		
						
					}
					
					var characterElement  = document.querySelector('#character');
					var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

					characterTopPercentage = (100*characterTopStyle)/BoxStyle;
				}
			}
			if (characterLeftPercentage > 45 && characterLeftPercentage < 46 && (brick1Percentage < -53 && brick1Percentage > -59)  ){
				if(brick3Toggle === 0){
					brick3Toggle = 1;	
					var jumpBrick3Keyframes = document.createElement('style');
					jumpBrick3Keyframes.type = 'text/css';
					var keyFrames3 = '\
					@keyframes jumpBrick3{\
						0% {\
							top: 53%;\
							left: 24%;\
						}\
						10% {\
							top: 51%;\
							left: 24%;\
						}\
						20% {\
							top: valueTop%;\
							left: 29%;\
						}\
						30% {\
							top: 17%;\
							left: 34%;\
						}\
						40% {\
							top: valueTop%;\
							left: 39%;\
						}\
						100% {\
							top: valueTop%;\
							left: 39%;\
						}\
					}\
					@-webkit-keyframes jumpBrick3{\
						0% {\
							top: 53%;\
							left: 24%;\
						}\
						10% {\
							top: 51%;\
							left: 24%;\
						}\
						20% {\
							top: valueTop%;\
							left: 29%;\
						}\
						30% {\
							top: 17%;\
							left: 34%;\
						}\
						40% {\
							top: valueTop%;\
							left: 39%;\
						}\
						100% {\
							top: valueTop%;\
							left: 39%;\
						}\
					}\
					@keyframes characterBackward1{\
						0% {\
							left: 60.99%;\
						}\
						100% {\
							left: 32%;\
						}\
					}\
					@-webkit-keyframes characterBackward1{\
						0% {\
							left: 60.99%;\
						}\
						100% {\
							left: 32%;\
						}\
					}';
				
					var jumpBrick3Value = 
										{
											'24':characterLeftPercentage,
											'29':(characterLeftPercentage+5),
											'34':(characterLeftPercentage+10),
											'39':(characterLeftPercentage+15),
											'53':characterTopPercentage,
											'51':(characterTopPercentage-2),
											'valueTop':(characterTopPercentage-23),
											'17':(characterTopPercentage-36)
										};
										
					jumpBrick3Keyframes.innerHTML = keyFrames3.replace(/24|29|34|39|53|51|valueTop|17/g, m => jumpBrick3Value[m]);
					document.getElementsByTagName('div')[10].appendChild(jumpBrick3Keyframes);
					
					character.style.animation = " jumpBrick3 1s ease-in-out forwards,characterBackward1 2.5s ease-in-out 0.5s forwards";
					character.style.webkitAnimation = "jumpBrick3 1s ease-in-out forwards,characterBackward1 2.5s ease-in-out 0.5s forwards";		
					
				}
			}
			if(brick4Percentage>-7 && brick4Percentage<0 ){
				
				console.log(characterLeftPercentage,characterTopPercentage);
				
				var jumpBrick4Keyframes = document.createElement('style');
					jumpBrick4Keyframes.type = 'text/css';
					var brick4Keyframes = '\
					@keyframes jump{\
						0% {\
							top: t1%;\
							left: l1%;\
						}\
						5% {\
							top: t2%;\
							left: l2%;\
						}\
						10% {\
							top: t3%;\
							left: l3%;\
						}\
						15% {\
							top: t4%;\
							left: l4%;\
						}\
						20% {\
							top: t5%;\
							left: l5%;\
						}\
						25% {\
							top: t6%;\
							left: l6%;\
						}\
						30% {\
							top: t6%;\
							left: l7%;\
						}\
						35% {\
							top: t5%;\
							left: l8%;\
						}\
						40% {\
							top: t4%;\
							left: l9%;\
						}\
						45% {\
							top: t3%;\
							left: le10%;\
						}\
						50% {\
							top: t2%;\
							left: le11%;\
						}\
						55% {\
							top: t1%;\
							left: le11%;\
						}\
						100%{\
							top: t1%;\
							left: le11%;\
						}\
					}\
					@-webkit-keyframes jump{\
						0% {\
							top: t1%;\
							left: l1%;\
						}\
						5% {\
							top: t2%;\
							left: l2%;\
						}\
						10% {\
							top: t3%;\
							left: l3%;\
						}\
						15% {\
							top: t4%;\
							left: l4%;\
						}\
						20% {\
							top: t5%;\
							left: l5%;\
						}\
						25% {\
							top: t6%;\
							left: l6%;\
						}\
						30% {\
							top: t6%;\
							left: l7%;\
						}\
						35% {\
							top: t5%;\
							left: l8%;\
						}\
						40% {\
							top: t4%;\
							left: l9%;\
						}\
						45% {\
							top: t3%;\
							left: le10%;\
						}\
						50% {\
							top: t2%;\
							left: le11%;\
						}\
						100%{\
							top: t1%;\
							left: le11%;\
						}\
					}';
				
				var jumpBrick4Value = 
					{
						't1':characterTopPercentage,
						't2':(characterTopPercentage-7),
						't3':(characterTopPercentage-14),
						't4':(characterTopPercentage-21),
						't5':(characterTopPercentage-28),
						't6':(characterTopPercentage-35),			
						'l1':characterLeftPercentage,
						'l2':(characterLeftPercentage+1),
						'l3':(characterLeftPercentage+2),
						'l4':(characterLeftPercentage+3),
						'l5':(characterLeftPercentage+4),
						'l6':(characterLeftPercentage+5),
						'l7':(characterLeftPercentage+6),
						'l8':(characterLeftPercentage+7),
						'l9':(characterLeftPercentage+8),
						'le10':(characterLeftPercentage+9),
						'le11':(characterLeftPercentage+10)		
					}
				
				jumpBrick4Keyframes.innerHTML = brick4Keyframes.replace(/t1|t2|t3|t4|t5|t6|l1|l2|l3|l4|l5|l6|l7|l8|l9|le10|le11/g, m => jumpBrick4Value[m]);
				document.getElementsByTagName('div')[10].appendChild(jumpBrick4Keyframes);

				console.log(jumpBrick4Keyframes.innerHTML);
				
				character.style.animation = " jump 1s linear forwards";
				character.style.webkitAnimation = "jump 1s linear forwards";		
								
			}
		
		}
	}
	
	function touchstart(e) {
		var data = e.target.id;
		
		console.log(data);
		
		if (data === "startButton" || "mainCharacter"  || "handCursor" )
		{
			handCursor.style.webkitAnimationPlayState = "paused";
			handCursor.style.animationPlayState = "paused";		
			handCursor.style.display = "none";
			handCursor.style.zIndex = "-1";
			mainCharacter.style.display = "none";
			mainCharacter.style.zIndex = "-1";
			startButton.style.display = "none";
			startButton.style.zIndex = "-1";
			firstCharacterImage.style.display = "none";
			
			characterJump.style.zIndex = "5";
			
			var non = "block";
			document.getElementById('firstRedMonsterImage').style.display = non;

			doTimer(
			2000,20,function(steps){
						non = non - (1 / steps);
						document.getElementById('firstRedMonsterImage').style.display = non;				
						},
			function(){
						document.getElementById('firstRedMonsterImage').style.display = "none";										
						redMonsterAnimation();
					}						
			);
			
			startAnimation();
			detectAnimation = requestAnimationFrame(detectValue);
		}
	}
	
	var blockToggle = 0 ;
	var brick3Toggle = 0 ;
	function touchstart2(e) {
		var data2 = e.target.id;
		
		console.log(data2);
		
		if (data2 === "loseInterface" || "loseStar"  || "loseStar2" || 
		"loseStar3" || "again1" || "again2" || "again3" || "again4" ||
		"loseHandCursor")
		{
			console.log(life);
			blockToggle = 0;
			brick3Toggle = 0;
			graveStone1Toggle = 0;
			// graveStone2Toggle = 0;
			graveStone3Toggle = 0;
			if(life === 2){
				character.style.animation= "none 1s ease-out";
				firstRedMonsterImage.style.display = "none";
				redMonsterAnimation();
				clearLoseInterface();
				resetAnimation();
				detectAnimation2 = requestAnimationFrame(detectValue2);
			}
			
			if(life === 1){
				character.style.animation= "none 1s ease-out";
				firstRedMonsterImage.style.display = "none";
				redMonsterAnimation();
				clearLoseInterface();
				resetAnimation2();
				detectAnimation3 = requestAnimationFrame(detectValue3);
			}
			
			if(life === 0){
				location.reload();
			}
		}
	}
	
	function touchstart3(e) {
		var data3 = e.target.id;
		console.log(character.style.left);
		console.log(data3);
		if (data3 === "characterJump")
		{
			var BoxElement  = document.querySelector('#gameContainer');
			var BoxStyle = getComputedStyle(BoxElement).getPropertyValue("width").split("px")[0];
			
			var block1Element  = document.querySelector('#block1');
			var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
			block1Percentage = (100*block1LeftStyle)/BoxStyle;
			
			var block1Element  = document.querySelector('#block1');
			var block1LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
			block1Percentage = (100*block1LeftStyle)/BoxStyle;
			
			var brick4Element  = document.querySelector('#brick4');
			var brick4LeftStyle = getComputedStyle(block1Element).getPropertyValue("left").split("px")[0];
			brick4Percentage = (100*brick4LeftStyle)/BoxStyle;
					
			var characterElement  = document.querySelector('#character');
			var characterWidthStyle = getComputedStyle(characterElement).getPropertyValue("left").split("px")[0];
			characterLeftPercentage = (100*characterWidthStyle)/BoxStyle;
	
			console.log(brick4Percentage);		
					
			if (block1Percentage >= 43){
				
				if (brick1Percentage > -46){
					
					if (toggle === 0) {
						jumpAnimation(toggle)
						toggle = 1;
					}
					else if (toggle === 1) {
						jumpAnimation(toggle)
						toggle = 0;
					}
				}
				if (brick1Percentage <= -46){
					if(blockToggle === 0){
						blockToggle = 1;

						var jumpBlock1Keyframes = document.createElement('style');
						jumpBlock1Keyframes.type = 'text/css';
						var keyFrames = '\
						@keyframes jumpBlock1{\
							0% {\
								top: 76%;\
								left: 24%;\
							}\
							10% {\
								top: 74%;\
								left: 24%;\
							}\
							20% {\
								top: 53%;\
								left: 29%;\
							}\
							30% {\
								top: 40%;\
								left: 34%;\
							}\
							40% {\
								top: 53%;\
								left: 39%;\
							}\
							100% {\
								top: 53%;\
								left: 39%;\
							}\
						}\
						@-webkit-keyframes jumpBlock1{\
							0% {\
								top: 76%;\
								left: 24%;\
							}\
							10% {\
								top: 74%;\
								left: 24%;\
							}\
							20% {\
								top: 53%;\
								left: 29%;\
							}\
							30% {\
								top: 40%;\
								left: 34%;\
							}\
							40% {\
								top: 53%;\
								left: 39%;\
							}\
							100% {\
								top: 53%;\
								left: 39%;\
							}\
						}';
					
						var jumpBlock1Value = 
											{
												'24':characterLeftPercentage,
												'29':(characterLeftPercentage+5),
												'34':(characterLeftPercentage+10),
												'39':(characterLeftPercentage+15)
											};
											/24|29|34|39/
						jumpBlock1Keyframes.innerHTML = keyFrames.replace(/24|29|34|39/g, m => jumpBlock1Value[m]);
						document.getElementsByTagName('div')[10].appendChild(jumpBlock1Keyframes);
						
						character.style.animation = " jumpBlock1 1s ease-in-out 1 forwards";
						character.style.webkitAnimation = "jumpBlock1 1s ease-in-out 1 forwards";		
						
					}
					
					var characterElement  = document.querySelector('#character');
					var characterTopStyle = getComputedStyle(characterElement).getPropertyValue("top").split("px")[0];

					characterTopPercentage = (100*characterTopStyle)/BoxStyle;
				}
			}
			if (characterLeftPercentage > 45 && characterLeftPercentage < 46 && (brick1Percentage < -53 && brick1Percentage > -59)  ){
				if(brick3Toggle === 0){
					brick3Toggle = 1;	
					var jumpBrick3Keyframes = document.createElement('style');
					jumpBrick3Keyframes.type = 'text/css';
					var keyFrames3 = '\
					@keyframes jumpBrick3{\
						0% {\
							top: 53%;\
							left: 24%;\
						}\
						10% {\
							top: 51%;\
							left: 24%;\
						}\
						20% {\
							top: valueTop%;\
							left: 29%;\
						}\
						30% {\
							top: 17%;\
							left: 34%;\
						}\
						40% {\
							top: valueTop%;\
							left: 39%;\
						}\
						100% {\
							top: valueTop%;\
							left: 39%;\
						}\
					}\
					@-webkit-keyframes jumpBrick3{\
						0% {\
							top: 53%;\
							left: 24%;\
						}\
						10% {\
							top: 51%;\
							left: 24%;\
						}\
						20% {\
							top: valueTop%;\
							left: 29%;\
						}\
						30% {\
							top: 17%;\
							left: 34%;\
						}\
						40% {\
							top: valueTop%;\
							left: 39%;\
						}\
						100% {\
							top: valueTop%;\
							left: 39%;\
						}\
					}\
					@keyframes characterBackward1{\
						0% {\
							left: 60.99%;\
						}\
						100% {\
							left: 32%;\
						}\
					}\
					@-webkit-keyframes characterBackward1{\
						0% {\
							left: 60.99%;\
						}\
						100% {\
							left: 32%;\
						}\
					}';
				
					var jumpBrick3Value = 
										{
											'24':characterLeftPercentage,
											'29':(characterLeftPercentage+5),
											'34':(characterLeftPercentage+10),
											'39':(characterLeftPercentage+15),
											'53':characterTopPercentage,
											'51':(characterTopPercentage-2),
											'valueTop':(characterTopPercentage-23),
											'17':(characterTopPercentage-36)
										};
										
					jumpBrick3Keyframes.innerHTML = keyFrames3.replace(/24|29|34|39|53|51|valueTop|17/g, m => jumpBrick3Value[m]);
					document.getElementsByTagName('div')[10].appendChild(jumpBrick3Keyframes);
					
					character.style.animation = " jumpBrick3 1s ease-in-out forwards,characterBackward1 2.5s ease-in-out 0.5s forwards";
					character.style.webkitAnimation = "jumpBrick3 1s ease-in-out forwards,characterBackward1 2.5s ease-in-out 0.5s forwards";		
					
				}
			}
			if(brick4Percentage>-7 && brick4Percentage<0 ){
				
				console.log(characterLeftPercentage,characterTopPercentage);
				
				var jumpBrick4Keyframes = document.createElement('style');
					jumpBrick4Keyframes.type = 'text/css';
					var brick4Keyframes = '\
					@keyframes jump{\
						0% {\
							top: t1%;\
							left: l1%;\
						}\
						5% {\
							top: t2%;\
							left: l2%;\
						}\
						10% {\
							top: t3%;\
							left: l3%;\
						}\
						15% {\
							top: t4%;\
							left: l4%;\
						}\
						20% {\
							top: t5%;\
							left: l5%;\
						}\
						25% {\
							top: t6%;\
							left: l6%;\
						}\
						30% {\
							top: t6%;\
							left: l7%;\
						}\
						35% {\
							top: t5%;\
							left: l8%;\
						}\
						40% {\
							top: t4%;\
							left: l9%;\
						}\
						45% {\
							top: t3%;\
							left: le10%;\
						}\
						50% {\
							top: t2%;\
							left: le11%;\
						}\
						55% {\
							top: t1%;\
							left: le11%;\
						}\
						100%{\
							top: t1%;\
							left: le11%;\
						}\
					}\
					@-webkit-keyframes jump{\
						0% {\
							top: t1%;\
							left: l1%;\
						}\
						5% {\
							top: t2%;\
							left: l2%;\
						}\
						10% {\
							top: t3%;\
							left: l3%;\
						}\
						15% {\
							top: t4%;\
							left: l4%;\
						}\
						20% {\
							top: t5%;\
							left: l5%;\
						}\
						25% {\
							top: t6%;\
							left: l6%;\
						}\
						30% {\
							top: t6%;\
							left: l7%;\
						}\
						35% {\
							top: t5%;\
							left: l8%;\
						}\
						40% {\
							top: t4%;\
							left: l9%;\
						}\
						45% {\
							top: t3%;\
							left: le10%;\
						}\
						50% {\
							top: t2%;\
							left: le11%;\
						}\
						100%{\
							top: t1%;\
							left: le11%;\
						}\
					}';
				
				var jumpBrick4Value = 
					{
						't1':characterTopPercentage,
						't2':(characterTopPercentage-7),
						't3':(characterTopPercentage-14),
						't4':(characterTopPercentage-21),
						't5':(characterTopPercentage-28),
						't6':(characterTopPercentage-35),			
						'l1':characterLeftPercentage,
						'l2':(characterLeftPercentage+1),
						'l3':(characterLeftPercentage+2),
						'l4':(characterLeftPercentage+3),
						'l5':(characterLeftPercentage+4),
						'l6':(characterLeftPercentage+5),
						'l7':(characterLeftPercentage+6),
						'l8':(characterLeftPercentage+7),
						'l9':(characterLeftPercentage+8),
						'le10':(characterLeftPercentage+9),
						'le11':(characterLeftPercentage+10)		
					}
				
				jumpBrick4Keyframes.innerHTML = brick4Keyframes.replace(/t1|t2|t3|t4|t5|t6|l1|l2|l3|l4|l5|l6|l7|l8|l9|le10|le11/g, m => jumpBrick4Value[m]);
				document.getElementsByTagName('div')[10].appendChild(jumpBrick4Keyframes);

				console.log(jumpBrick4Keyframes.innerHTML);
				
				character.style.animation = " jump 1s linear forwards";
				character.style.webkitAnimation = "jump 1s linear forwards";		
								
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