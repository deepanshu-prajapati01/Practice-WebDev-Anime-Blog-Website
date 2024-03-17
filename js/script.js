
let data = [
    {
        backgroundImage: "../background_images/1.jpg", image: "../images/1.jpg", aboutPageImage: "../aboutPageImages/1.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/1.jpg"
    },
    {
        backgroundImage: "../background_images/2.jpg", image: "../images/2.jpg", aboutPageImage: "../aboutPageImages/2.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/2.jpg"
    },

    {
        backgroundImage: "../background_images/3.jpg", image: "../images/3.jpg", aboutPageImage: "../aboutPageImages/3.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/3.jpg"
    },

    {
        backgroundImage: "../background_images/4.jpg", image: "../images/4.jpg", aboutPageImage: "../aboutPageImages/4.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/4.jpg"
    },

    {
        backgroundImage: "../background_images/5.jpg", image: "../images/5.jpg", aboutPageImage: "../aboutPageImages/5.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/5.jpg"
    },

    {
        backgroundImage: "../background_images/6.jpg", image: "../images/6.jpg", aboutPageImage: "../aboutPageImages/6.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/6.jpg"
    },

    {
        backgroundImage: "../background_images/7.jpg", image: "../images/7.jpg", aboutPageImage: "../aboutPageImages/7.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/7.jpg"
    },

    {
        backgroundImage: "../background_images/8.jpg", image: "../images/8.jpg", aboutPageImage: "../aboutPageImages/8.jpg", aboutPageBackgroundImage: "../aboutPageBackgroundImages/8.jpg"
    },
]




// setting the content images...

contentImages = document.getElementsByClassName("content-image");
Array.from(contentImages).forEach((contentImage, index) => {
    if (index < data.length) {
        path = data[index+1].image;
        contentImage.src = `${path}`;
    }
});


aboutContentImages = document.getElementsByClassName("about-content-image");
Array.from(aboutContentImages).forEach((aboutContentImage, index) => {
    path = data[index+1].aboutPageImage;
    aboutContentImage.src = `${path}`;
})


searchButton = document.getElementById("submitButton");
searchButton.addEventListener('click', ()=>{
    window.location.href = '../html/index.html';
});