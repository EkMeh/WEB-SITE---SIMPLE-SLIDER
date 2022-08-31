var i=0;
var images=[];
var time=3000;
var slide=document.getElementsByName("slide")
images[0]="../src/img1.jpg";
images[1]="../src/img2.jpg";
images[2]="../src/img3.jpg";
images[3]="../src/img4.jpg";
images[4]="../src/img5.jpg";
images[5]="../src/img6.jpg";
images[6]="../src/img7.jpg";
images[7]="../src/img8.jpg";
images[8]="../src/img9.jpg";

function ChangeImages(){
    document.slide.src=images[i];
    if(i<images.length-1)
    {
        i++;
    }
    else
    {
        i=0;
    }

    setTimeout("ChangeImages()", time);
}

window.onload=ChangeImages;