



function generate(){
	var url = "https://api.nasa.gov/planetary/apod?api_key=";
	var api_key = "5t7DjXqJjYUeYWgsjvFr4vaw8xjRZYvCZtXTNyll";
	var date_req = "&date=";
	var date = "2022-01-06";
	var idh = "heart";
	fetch(url + api_key + "&count=5").then(response => {
		if (!response.ok) {
			throw Error("error");
		}
		return response.json();
	}).then(data => {
		console.log(data);
		
		const stuff = data.map(user=> {
			return `<div class="post">
			<p id="title">${user.title}</p>
			<p>${user.date}</p>
			<p id="pic"><img src="${user.hdurl}" width="350" height= "250" /></p>
			<p hidden id="heart"><img src="Heart.png" width="350" height= "250" /></p>
			<p>${user.explanation}</p>
			<button onclick="like(this)">Like</button>
			</div>`;
		}).join("");
	document.querySelector("#posts").insertAdjacentHTML("afterbegin", stuff);
	})
}
	
function like(x){
	if (x.innerHTML == "Like") {
		x.innerHTML = "Unlike";
		document.getElementById("heart").hidden = false;
		document.getElementById("pic").hidden = true;
		setTimeout(function() {
			document.getElementById("heart").hidden = true;
			document.getElementById("pic").hidden = false;
		}, 100);
	}
	else x.innerHTML = "Like";
	
	
}

