var pictures = [
	
	"pic/1B692636-2399-45AF-83F1-0BB1117AC48E.jpg",
	"pic/9FCA2A80-7183-4945-A7CB-DAA9EC6C23BE.jpg",
	"pic/untitl1ed.png",
	"pic/untitled.png",
	"pic/untitleewrd.png"


]
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
	if(counter === 5){
		counter = 0;

		}
img.src = pictures[counter];
counter = counter +1;

});