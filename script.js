



// req.addEventListener("load", function(){
// 	if(req.status == 200 && req.readyState == 4){
//   	var response = JSON.parse(req.responseText);
//     document.getElementById("title").textContent = response.title;
//     document.getElementById("date").textContent = response.date;
//     document.getElementById("pic").src = response.hdurl;
//     document.getElementById("explanation").textContent = response.explanation;
//   }
// })


function generate(){
	
	var req = new XMLHttpRequest();
	var url = "https://api.nasa.gov/planetary/apod?api_key=";
	var api_key = "5t7DjXqJjYUeYWgsjvFr4vaw8xjRZYvCZtXTNyll";
	var date_req = "&date=";
	var date = "2022-01-06";
	req.open("GET", url + api_key + date_req + date);
	req.send();

  	var response = JSON.parse(req.responseText);
	const para = document.createElement("a");
	const node = document.createTextNode("hello");
	const node1 = document.createTextNode(response.date);
	const node3 = document.createTextNode(response.explanation);
	var node2 = document.createElement("img");
	node2.src = response.hdurl;

	para.appendChild(node);
	para.appendChild(node1);
	para.appendChild(node2);
	para.appendChild(node3);
	
}
