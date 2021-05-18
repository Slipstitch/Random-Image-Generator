const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function (){
	const res = await fetch ("https://picsum.photos/v2/list?limit=100");
	const images = await res.json();
	//confirm pics are being pulled
	//console.log(images);
	selectRandomImage(images);
};

//cut getImage() and past in button function body

const selectRandomImage = function (images) {
	const randomIndex = Math.floor(Math.random() * images.length);
    //confirm random number between 0 and99
    //console.log(randomIndex);
    const randomImage = images[randomIndex];
    //console.log(randomImage);
    displayImage(randomImage);

 };

 const displayImage = function (randomImage) {
 	const author = randomImage.author;
 	const imageAddress = randomImage.download_url;
 	authorSpan.innerText = author;
 	img.src = imageAddress;
 	imgDiv.classList.remove("hide");
 };

 button.addEventListener("click", function() {
 	getImage(); // program wont retrieve data til button is pushed
 });
