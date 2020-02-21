

function checkImage() {
    let imgSrc1 =document.getElementById("part1").src;
    //alert(imgSrc1);
    let check1 = imgSrc1.substr(1,60);
    //alert(check1);

    let imgSrc2 =document.getElementById("part2").src;
    //alert(imgSrc2);
    let check2 = imgSrc2.substr(1,60);
    //alert(check2);

    let imgSrc3 =document.getElementById("part3").src;
    //alert(imgSrc3);
    let check3 = imgSrc3.substr(1,60);
    //alert(check3);

    let imgSrc4 =document.getElementById("part4").src;
    //alert(imgSrc4);
    let check4 = imgSrc4.substr(1,60);
    //alert(check4);

    let imgSrc5 =document.getElementById("part5").src;
    //alert(imgSrc5);
    let check5 = imgSrc5.substr(1,60);
    //alert(check5);

    let checkTong = false;
    if(check1===check2){
        if(check1===check3){
             if(check1===check4){
                 if(check1==check5){
                     checkTong =true;
                 }
             }
        }
    }
    //alert(checkTong);
    if(checkTong){
        document.getElementsByClassName("partImage")[0].style.boxShadow = "green 2px 2px 3px";
        document.getElementsByClassName("partImage")[1].style.boxShadow = "green 2px 2px 3px";
        document.getElementsByClassName("partImage")[2].style.boxShadow = "green 2px 2px 3px";
        document.getElementsByClassName("partImage")[3].style.boxShadow = "green 2px 2px 3px";
        document.getElementsByClassName("partImage")[4].style.boxShadow = "green 2px 2px 3px";
    }else{
        document.getElementsByClassName("partImage")[0].style.boxShadow = "red 2px 2px 3px";
        document.getElementsByClassName("partImage")[1].style.boxShadow = "red 2px 2px 3px";
        document.getElementsByClassName("partImage")[2].style.boxShadow = "red 2px 2px 3px";
        document.getElementsByClassName("partImage")[3].style.boxShadow = "red 2px 2px 3px";
        document.getElementsByClassName("partImage")[4].style.boxShadow = "red 2px 2px 3px";
    }
}

function changeImage1() {
    let imgURLPart1 = ['images/funny-cat1_part1x1.jpg','images/monkey_part1x1.jpg','images/panda_swap_part1x1.jpg'];
    let count = Math.floor(Math.random()*3);
    //alert(count);
    document.getElementById("part1").src = imgURLPart1[count] ;
    checkImage();
}
function changeImage2() {
    let imgURLPart2 = ['images/funny-cat1_part2x1.jpg','images/monkey_part2x1.jpg','images/panda_swap_part2x1.jpg'];
    let count = Math.floor(Math.random()*3);
    //alert(count);
    document.getElementById("part2").src = imgURLPart2[count] ;
    checkImage();
}
function changeImage3() {
    let imgURLPart3 = ['images/funny-cat1_part3x1.jpg','images/monkey_part3x1.jpg','images/panda_swap_part3x1.jpg'];
    let count = Math.floor(Math.random()*3);
    //alert(count);
    document.getElementById("part3").src = imgURLPart3[count] ;
    checkImage();
}

function changeImage4() {
    let imgURLPart4 = ['images/funny-cat1_part4x1.jpg','images/monkey_part4x1.jpg','images/panda_swap_part4x1.jpg'];
    let count = Math.floor(Math.random()*3);
    //alert(count);
    document.getElementById("part4").src = imgURLPart4[count] ;
    checkImage();
}
function changeImage5() {
    let imgURLPart5 = ['images/funny-cat1_part5x1.jpg','images/monkey_part5x1.jpg','images/panda_swap_part5x1.jpg'];
    let count = Math.floor(Math.random()*3);
    //alert(count);
    document.getElementById("part5").src = imgURLPart5[count] ;
    checkImage();
}
