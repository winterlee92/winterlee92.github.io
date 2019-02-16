

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
			 mv = setTimeout(main, 0);
			 createImage();
	    }
	
	function main(){
	
		document.getElementById("loader").style.display = "none";
		
		var container = document.getElementById('container');
		// var chanceFont = document.getElementById('chanceFont');
		container.style.display = "block";
		
		var widthToHeight = 0 ;
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight;
		
		sizeData(newWidth,newHeight);
		resize(newWidth,newHeight);	
		 
	}
	
	function createImage(){
		
		itemArray = [
						"url('bg.jpg')",
						"url('chanceFont.png')",
						"url('cardBack.png')",
						"url('handCursor.png')",
						"url('handCursorFont.png')",
						"url('firstCardLight.png')",
						"url('secondCardLight.png')",
						"url('secondCardGlow.png')"
						
					];
					
		countFontArray = [
							"url('x2.png')",
							"url('x1.png')",
							"url('x0.png')"
						];
		
		container.style.backgroundImage = itemArray[0];
		chanceFont.style.backgroundImage = itemArray[1];
		handCursor.style.backgroundImage = itemArray[3];
		handCursorFont.style.backgroundImage = itemArray[4];
		firstCardLight.style.backgroundImage = itemArray[5];
		secondCardLight.style.backgroundImage = itemArray[6];
		secondCardGlow.style.backgroundImage = itemArray[7];
		
		countFont.style.backgroundImage = countFontArray[0];
		cardA1.style.backgroundImage = itemArray[2];
		cardA2.style.backgroundImage = itemArray[2];
		cardA3.style.backgroundImage = itemArray[2];
		cardA4.style.backgroundImage = itemArray[2];
		cardA5.style.backgroundImage = itemArray[2];
		cardA6.style.backgroundImage = itemArray[2];
		cardA7.style.backgroundImage = itemArray[2];
		cardA8.style.backgroundImage = itemArray[2];
		cardA9.style.backgroundImage = itemArray[2];
		
		cardB1.style.backgroundImage = itemArray[2];
		cardB2.style.backgroundImage = itemArray[2];
		cardB3.style.backgroundImage = itemArray[2];
		cardB4.style.backgroundImage = itemArray[2];
		cardB5.style.backgroundImage = itemArray[2];
		cardB6.style.backgroundImage = itemArray[2];
		cardB7.style.backgroundImage = itemArray[2];
		cardB8.style.backgroundImage = itemArray[2];
		cardB9.style.backgroundImage = itemArray[2];
		
	
		cardFrameArray = [
					"Frame1.png",
					"Frame2.png",
					"Frame3.png",
					"Frame4.png",
					"Frame5.png",
					"Frame6.png",
					"Frame7.png",
					"Frame8.png",
					"Frame9.png",
					"Frame10.png",
					"Frame11.png",
					"Frame12.png",
					"Frame13.png",
					"Frame14.png",
					"Frame15.png"
				];
		
		cardRevealArray = [
							"cardReveal1.png",
							"cardReveal2.png",
							"cardReveal3.png",
							"cardReveal4.png",
							"cardReveal5.png",
							"cardReveal6.png",
							"cardReveal7.png",
							"cardReveal8.png"
						]
		
		firstCardArray = [
					"firstCard1.png",
					"firstCard2.png",
					"firstCard3.png",
					"firstCard4.png",
					"firstCard5.png",
					"firstCard6.png",
					"firstCard7.png",
					"firstCard8.png",
					"firstCard9.png",
					"firstCard10.png",
					"firstCard11.png"
				]
		
		secondCardArray = ["secondCard.png"]
		
		startButtonArray = [
					"startButton1.png",
					"startButton3.png",
					"startButton4.png",
					"startButton5.png",
					"startButton6.png",
					"startButton7.png",
					"startButton8.png",
					"startButton9.png",
					"startButton10.png",
					"startButton11.png",
					"startButton12.png",
					"startButton13.png",
					"startButton14.png",
					"startButton15.png",
					"startButton16.png",
					"startButton17.png"
				]
		
	for(i=0; i < cardFrameArray.length; i++)
	{	 
		if(i <cardFrameArray.length)
		{
			var frameImage = document.createElement("IMG");
			frameImage.setAttribute("src", cardFrameArray[i]);	
			frameImage.setAttribute("class","cardFrame");
			cardFrame.appendChild(frameImage);
		}
	}	
	
		for(i=0; i < cardRevealArray.length; i++)
	{	 
		if(i <cardRevealArray.length)
		{
			var revealImage = document.createElement("IMG");
			revealImage.setAttribute("src", cardRevealArray[i]);	
			revealImage.setAttribute("class","cardReveal");
			cardReveal.appendChild(revealImage);
		}
	}
	
		for(i=0; i < firstCardArray.length; i++)
	{	 
		if(i <firstCardArray.length)
		{
			var first = document.createElement("IMG");
			first.setAttribute("src", firstCardArray[i]);	
			first.setAttribute("class","firstCard");
			firstCard.appendChild(first);
		}
	}
	
		for(i=0; i < cardFrameArray.length; i++)
	{	 
		if(i <cardFrameArray.length)
		{
			var frameImage2 = document.createElement("IMG");
			frameImage2.setAttribute("src", cardFrameArray[i]);	
			frameImage2.setAttribute("class","secondCardFrame");
			secondCardFrame.appendChild(frameImage2);
		}
	}	
	
		for(i=0; i < cardRevealArray.length; i++)
	{	 
		if(i <cardRevealArray.length)
		{
			var revealImage2 = document.createElement("IMG");
			revealImage2.setAttribute("src", cardRevealArray[i]);	
			revealImage2.setAttribute("class","secondCardReveal");
			secondCardReveal.appendChild(revealImage2);
		}
	}
	
		for(i=0; i < secondCardArray.length; i++)
	{	 
		if(i <secondCardArray.length)
		{
			var second = document.createElement("IMG");
			second.setAttribute("src", secondCardArray[i]);	
			second.setAttribute("class","secondCard");
			secondCard.appendChild(second);
		}
	}
	
		for(i=0; i < startButtonArray.length; i++)
	{	 
		if(i <startButtonArray.length)
		{
			var start = document.createElement("IMG");
			start.setAttribute("src", startButtonArray[i]);	
			start.setAttribute("class","startButton");
			startButton.appendChild(start);
		}
	}
	
	}

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
	
	var renderFrame;
	function frameAnimation(data){
		var data = document.getElementById(data);
		var myIndex = 0;			
		var frame = document.getElementsByClassName("cardFrame");		
		loopFrame();
		function loopFrame(){
			var i;
			for (i=0;i<frame.length;i++)
			{
				frame[i].style.display="none";
			}
			myIndex++;
			if (myIndex > frame.length){}
			frame[myIndex-1].style.display = "block";
			renderFrame = setTimeout(loopFrame,50);			
			 
			if (myIndex === 15){
				revealAnimation(data);
				data.style.backgroundImage = "";
				frame[14].style.display = "none";
				clearTimeout(renderFrame);			
			}	
			
		}
	} 	
		
	var renderBFrame;
	function frameBAnimation(data2){
		var data2 = document.getElementById(data2);
		var myIndex = 0;			
		var frameB = document.getElementsByClassName("secondCardFrame");		
		loopFrameB();
		function loopFrameB(){
			var i;
			for (i=0;i<frameB.length;i++)
			{
				frameB[i].style.display="none";
			}
			myIndex++;
			if (myIndex > frameB.length){}
			frameB[myIndex-1].style.display = "block";
			renderFrameB = setTimeout(loopFrameB,50);			
			
			if (myIndex === 15){
				revealBAnimation(data2);
				data2.style.backgroundImage = "";
				frameB[14].style.display = "none";
				clearTimeout(renderFrameB);			
			}	
			
		}
	} 		
		
	var renderFrame2;
	function frameAnimation2(){
		var myIndex = 0;			
		var frame2 = document.getElementsByClassName("cardFrame");		
		loopFrame2();
		function loopFrame2(){
			var i;
			for (i=0;i<frame2.length;i++)
			{
				frame2[i].style.display="none";
			}
			myIndex++;
			if (myIndex > frame2.length){}
			frame2[myIndex-1].style.display = "block";
			renderFrame2 = setTimeout(loopFrame2,50);			
			 
			if (myIndex === 15){
				myIndex = 0;			
			}		
		}
	} 		
				
	var renderReveal;
	function revealAnimation(data){
		var myIndex = 0;			
		
		var reveal = document.getElementsByClassName("cardReveal");		
		loopReveal();
		function loopReveal(){
			var i;
			for (i=0;i<reveal.length;i++)
			{
				reveal[i].style.display="none";
			}
			myIndex++;
			if (myIndex > reveal.length){}
			reveal[myIndex-1].style.display = "block";
			renderReveal = setTimeout(loopReveal,50);			
			
			if (myIndex === 8){
				reveal[7].style.display = "none";
				clearTimeout(renderReveal);		
				firstCardAnimation();
				
				console.log(data.id);
				firstCard.style.animation = data.id+" 0.5s forwards,"+data.id+" 0.5s reverse 2.8s forwards";
				firstCard.style.webkitAnimation = data.id+" 0.5s forwards,"+data.id+" 0.5s reverse 2.8s forwards";
				
				firstCard.style.animationPlayState = "running";
				firstCard.style.webkitAnimationPlayState = "running";
				firstCardLight.style.animationPlayState = "running";
				firstCardLight.style.webkitAnimationPlayState = "running";

				frameAnimation2();
				
				cardA1.style.display = "none";
				cardA2.style.display = "none";
				cardA3.style.display = "none";
				cardA4.style.display = "none";
				cardA5.style.display = "none";
				cardA6.style.display = "none";
				cardA7.style.display = "none";
				cardA8.style.display = "none";
				cardA9.style.display = "none";
				
				drawContainerB.style.display = "block";
				
			}	
			
		}
	} 		
		
	var renderRevealB;
	function revealBAnimation(data2){
		var myIndex = 0;			
		
		var revealB = document.getElementsByClassName("secondCardReveal");		
		loopRevealB();
		function loopRevealB(){
			var i;
			for (i=0;i<revealB.length;i++)
			{
				revealB[i].style.display="none";
			}
			myIndex++;
			if (myIndex > revealB.length){}
			revealB[myIndex-1].style.display = "block";
			renderRevealB = setTimeout(loopRevealB,50);			
			
			if (myIndex === 8){
				revealB[7].style.display = "none";
				clearTimeout(renderRevealB);		
				secondCardAnimation();
				
				console.log(data2.id);
				secondCard.style.animation = data2.id+" 0.5s forwards";
				secondCard.style.webkitAnimation = data2.id+" 0.5s forwards";
				
				secondCard.style.animationPlayState = "running";
				secondCard.style.webkitAnimationPlayState = "running";
				secondCardLight.style.animationPlayState = "running";
				secondCardLight.style.webkitAnimationPlayState = "running";
				
			}	
		}
	} 		
		
	var renderFirstCard;
	function firstCardAnimation(){
		var myIndex = 0;			
		var first = document.getElementsByClassName("firstCard");		
		loopFirstCard();
		function loopFirstCard(){
			var i;
			for (i=0;i<first.length;i++)
			{
				first[i].style.display="none";
			}
			myIndex++;
			if (myIndex > first.length){}
			first[myIndex-1].style.display = "block";
			renderFirstCard = setTimeout(loopFirstCard,60);			
			
			if (myIndex === 11){
				firstCardLight.style.display = "block";
				first[10].style.display = "block";
				clearTimeout(renderFirstCard);			
			}	
			
		}
	} 		
		
	var renderSecondCard;
	function secondCardAnimation(){
		var myIndex = 0;			
		var second = document.getElementsByClassName("secondCard");		
		loopSecondCard();
		function loopSecondCard(){
			var i;
			for (i=0;i<second.length;i++)
			{
				second[i].style.display="none";
			}
			myIndex++;
			if (myIndex > second.length){}
			second[myIndex-1].style.display = "block";
			renderSecondCard = setTimeout(loopSecondCard,60);			
			
			if (myIndex === 1){
				secondCardLight.style.display = "block";
				second[0].style.display = "block";
				clearTimeout(renderSecondCard);	
				
				secondCardGlow.style.display = "block";
				secondCardGlow.style.animationPlayState = "running";
				secondCardGlow.style.webkitAnimationPlayState = "running";

		
				var non = "none";
				document.getElementById('startButton').style.display = non;

				doTimer(
				2000,20,function(steps){
							non = non - (1 / steps);
							document.getElementById('startButton').style.display = non;				
							},
				function(){
							document.getElementById('startButton').style.display = "block";										
							startButtonAnimation();
						}						
				);
			
			}	
			
		}
	} 

	var renderStartButton;
	function startButtonAnimation(){
		startButton.style.display = "block";
		startButton.style.animationPlayState = "running";
		startButton.style.webkitAnimationPlayState = "running";
		
		var myIndex = 0;			
		var start = document.getElementsByClassName("startButton");		
		loopStartButton();
		function loopStartButton(){
			var i;
			for (i=0;i<start.length;i++)
			{
				start[i].style.display="none";
			}
			myIndex++;
			if (myIndex > start.length){}
			start[myIndex-1].style.display = "block";
			renderStartButton = setTimeout(loopStartButton,60);			
			
			if (myIndex === 16){
				start[15].style.display = "block";
				clearTimeout(renderStartButton);			
			}	
			
		}
	} 	
		
	function mouseDown(e) {
		var data = e.target.id;
		
		console.log(data);
		
		if (data === "cardA1" || "cardA2" || "cardA3" ||
					 "cardA4" || "cardA5" || "cardA6" ||
					 "cardA7" || "cardA8" || "cardA9" ){
						 
						cardFrame.style.zIndex="20";
						cardReveal.style.zIndex="20";
						firstCard.style.zIndex="20";
						countFont.style.backgroundImage = countFontArray[1];
						
						frameAnimation(data);
						drawContainerB.style.display ="block";
 
					}
		
		if(data === "cardA1"){
			
			cardFrame.style.top = "-10%";
			cardFrame.style.left = "-15%";
			
			cardReveal.style.top = "0%";
			cardReveal.style.left = "0%";
			
			firstCard.style.top = "0%";
			firstCard.style.left = "0%";
			
			cardB1.style.display = "none";
		}	

		if(data === "cardA2"){
			
			cardFrame.style.top = "-10%";
			cardFrame.style.left = "20%";

			cardReveal.style.top = "0%";
			cardReveal.style.left = "35%";
			
			firstCard.style.top = "0%";
			firstCard.style.left = "35%";
			
			cardB2.style.display = "none";
		}

		if(data === "cardA3"){
			
			cardFrame.style.top = "-10%";
			cardFrame.style.left = "55%";
			
			cardReveal.style.top = "0%";
			cardReveal.style.left = "70%";
			
			firstCard.style.top = "0%";
			firstCard.style.left = "70%";
			
			cardB3.style.display = "none";
		}		
			
		if(data === "cardA4"){
			
			cardFrame.style.top = "24%";
			cardFrame.style.left = "-15%";

			cardReveal.style.top = "33%";
			cardReveal.style.left = "0%";
			
			firstCard.style.top = "34%";
			firstCard.style.left = "0%";
			
			cardB4.style.display = "none";
			
		}	

		if(data === "cardA5"){
			
			cardFrame.style.top = "24%";
			cardFrame.style.left = "20%";

			cardReveal.style.top = "33%";
			cardReveal.style.left = "35%";
			
			firstCard.style.top = "34%";
			firstCard.style.left = "35%";
			
			cardB5.style.display = "none";
			
			}

		if(data === "cardA6"){
			
			cardFrame.style.top = "24%";
			cardFrame.style.left = "55%";
			
			cardReveal.style.top = "33%";
			cardReveal.style.left = "70%";
			
			firstCard.style.top = "34%";
			firstCard.style.left = "70%";
			
			cardB6.style.display = "none";
		}			
			
		if(data === "cardA7"){
			
			cardFrame.style.top = "58%";
			cardFrame.style.left = "-15%";

			cardReveal.style.top = "68%";
			cardReveal.style.left = "0%";
			
			firstCard.style.top = "68%";
			firstCard.style.left = "0%";
			
			cardB7.style.display = "none";
		}	

		if(data === "cardA8"){
			
			cardFrame.style.top = "58%";
			cardFrame.style.left = "20%";
			
			cardReveal.style.top = "68%";
			cardReveal.style.left = "35%";
			
			firstCard.style.top = "68%";
			firstCard.style.left = "35%";
			
			cardB8.style.display = "none";
		}

		if(data === "cardA9"){
			
			cardFrame.style.top = "58%";
			cardFrame.style.left = "55%";

			cardReveal.style.top = "68%";
			cardReveal.style.left = "70%";
			
			firstCard.style.top = "68%";
			firstCard.style.left = "70%";
			
			cardB9.style.display = "none";
		}	
		
	}
		
	function mouseDown2(e) {
		var data2 = e.target.id;
		
		console.log(data2);
		
		if (data2 === "cardB1" || "cardB2" || "cardB3" ||
					 "cardB4" || "cardB5" || "cardB6" ||
					 "cardB7" || "cardB8" || "cardB9" ){
				 
				clearTimeout(renderFrame2);	
				cardFrame.style.display = "none";
				countFont.style.backgroundImage = countFontArray[2];
				
				drawContainerB.style.zIndex="20";
				secondCardFrame.style.zIndex="20";
				secondCardReveal.style.zIndex="20";
				secondCard.style.zIndex="20";
				
				frameBAnimation(data2);
				drawContainerB.style.display ="block";
				disableBox.style.display ="block";
			}
			
		if(data2 === "cardB1"){
			
			secondCardFrame.style.top = "-10%";
			secondCardFrame.style.left = "-15%";
			
			secondCardReveal.style.top = "0%";
			secondCardReveal.style.left = "0%";
			
			secondCard.style.top = "0%";
			secondCard.style.left = "0%";
			
			secondCardGlow.style.top = "87%";
			
		}	

		if(data2 === "cardB2"){
			
			secondCardFrame.style.top = "-10%";
			secondCardFrame.style.left = "20%";

			secondCardReveal.style.top = "0%";
			secondCardReveal.style.left = "35%";
			
			secondCard.style.top = "0%";
			secondCard.style.left = "35%";
			
			secondCardGlow.style.top = "87.5%";
		}

		if(data2 === "cardB3"){
			
			secondCardFrame.style.top = "-10%";
			secondCardFrame.style.left = "55%";
			
			secondCardReveal.style.top = "0%";
			secondCardReveal.style.left = "70%";
			
			secondCard.style.top = "0%";
			secondCard.style.left = "70%";
			
			secondCardGlow.style.top = "87.5%";
		}		
			
		if(data2 === "cardB4"){
			
			secondCardFrame.style.top = "24%";
			secondCardFrame.style.left = "-15%";

			secondCardReveal.style.top = "33%";
			secondCardReveal.style.left = "0%";
			
			secondCard.style.top = "34%";
			secondCard.style.left = "0%";
			
			secondCardGlow.style.top = "85%";
			
		}	

		if(data2 === "cardB5"){
			
			secondCardFrame.style.top = "24%";
			secondCardFrame.style.left = "20%";

			secondCardReveal.style.top = "33%";
			secondCardReveal.style.left = "35%";
			
			secondCard.style.top = "34%";
			secondCard.style.left = "35%";
			
			secondCardGlow.style.top = "85%";
			
			}

		if(data2 === "cardB6"){
			
			secondCardFrame.style.top = "24%";
			secondCardFrame.style.left = "55%";
			
			secondCardReveal.style.top = "33%";
			secondCardReveal.style.left = "70%";
			
			secondCard.style.top = "34%";
			secondCard.style.left = "70%";
			
			secondCardGlow.style.top = "85%";
		}			
			
		if(data2 === "cardB7"){
			
			secondCardFrame.style.top = "58%";
			secondCardFrame.style.left = "-15%";

			secondCardReveal.style.top = "68%";
			secondCardReveal.style.left = "0%";
			
			secondCard.style.top = "68%";
			secondCard.style.left = "0%";
			
			secondCardGlow.style.top = "87%";
		}	

		if(data2 === "cardB8"){
			
			secondCardFrame.style.top = "58%";
			secondCardFrame.style.left = "20%";
			
			secondCardReveal.style.top = "68%";
			secondCardReveal.style.left = "35%";
			
			secondCard.style.top = "68%";
			secondCard.style.left = "35%";

			secondCardGlow.style.top = "87%";
		}

		if(data2 === "cardB9"){
			
			secondCardFrame.style.top = "58%";
			secondCardFrame.style.left = "55%";

			secondCardReveal.style.top = "68%";
			secondCardReveal.style.left = "70%";
			
			secondCard.style.top = "68%";
			secondCard.style.left = "70%";
			
			secondCardGlow.style.top = "87%";
		}		
		
	}
	
	function touchstart(e) {
		var data = e.target.id;
		
		console.log(data);
		
		if(data === "cardA1"){
			
		}
	}	
		
	function touchstart2(e) {
		var data2 = e.target.id;
		
		console.log(data2);
		
		if(data2 === "cardB1"){
			
		}
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
	 
	 