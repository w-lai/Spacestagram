



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
	var url = "https://api.nasa.gov/planetary/apod?api_key=";
	var api_key = "5t7DjXqJjYUeYWgsjvFr4vaw8xjRZYvCZtXTNyll";
	var date_req = "&date=";
	var date = "2022-01-06";
	fetch(url + api_key + "&count=5").then(response => {
		if (!response.ok) {
			throw Error("error");
		}
		return response.json();
	}).then(data => {
		const stuff = data.data.map(user=> {
			return `<div class="post">
			<p>$[user.title]</p>
			<p>$[user.date]</p>
			<p><img src="$[user.hdurl]"/></p>
			<p>$[user.explanation]</p>
			</div>`;
		}).join("");
	document.querySelector("#posts").insertAdjacentHTML("afterbegin", stuff);
	})
}
	
generate();
