var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i=0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.background;

			//compare with pickedColor
			if(clickedColor===pickedColor){
				messageDisplay.textContent = "CORRECT!";
				changeColors(clickedColor);
				resetButton.textContent="Play Again?";
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent	= "Try Again";
			}
		});
	};
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){

		if(colors[i]){
			squares[i].style.display="block";
			//set color of each square to given color
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	//change background of h1
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";

	resetButton.textContent = "NEW COLORS";
}



// easyBtn.addEventListener("click",function(){
// 	numSquares=3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors=generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;

// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	numSquares=6;
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	colors=generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;

// 	for(var i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}
// });


resetButton.addEventListener("click",function(){
	reset();
});



function changeColors(color){
	//loop through all the squares
	for(var i=0; i<squares.length; i++){
		//set color of each square to given color
		squares[i].style.background = color;
	}

	//set color of header to given color
	h1.style.background = color;

}

function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i =0; i<num; i++){
		//get random color and push into array	
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb("+r+", "+g+", "+b+")"; 
}