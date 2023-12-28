let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainerEl = document.getElementById("profileContainer");
let imageContainerEl = document.getElementById("imgContainer");
imageContainerEl.classList.add("image_container");

let imgEl = document.createElement("img");
imgEl.src = profileDetails.imgSrc;
imageContainerEl.appendChild(imgEl);

let headingEl = document.createElement("h1");
headingEl.textContent = profileDetails.name;
headingEl.classList.add("heading_card");
imageContainerEl.appendChild(headingEl);

let paraEl = document.createElement("p");
paraEl.textContent = "age: " + profileDetails.age;
imageContainerEl.appendChild(paraEl);