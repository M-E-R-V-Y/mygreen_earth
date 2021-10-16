var time = 10;
var timerId;

function startTimer() {
  time = 10;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

var myImage = document.getElementById('mainImage');
var imageArray = ["pou_brown1.JPG", "pou_gray1.PNG", "pou_green1.JPG", "pou_yellow1.JPG", "pou_yellow2.JPG", "pou_brown2.JPG", "pou_gray2.JPG","pou_green2.JPG", "pou_yellow3.JPG", "pou_yellow4.JPG", "pou_gray3.JPG", "pou_brown3.JPG", "pou_yellow5.JPG", "pou_yellow6.JPG", "pou_gray4.JPG", "pou_yellow7.JPG", "pou_gray5.JPG", "pou_green3.JPG" ];
var imageIndex = 0;

var score=0;

const greentrash = document.getElementById("GREEN")
const yellowtrash =  document.getElementById("YELLOW")
const browntrash = document.getElementById("BROWN")
const graytrash = document.getElementById("GRAY")

  
    function Yellowtrash(){
       // myImage.setAttribute("src", imageArray[imageIndex]);
          // if (imageIndex === 3 || 8 || 9 || 12 || 13 || 15 ){
            //if (imageIndex === 3 || imageIndex===8 || imageIndex===9 || imageIndex===12 || imageIndex===13 || imageIndex===15) {
            if (imageIndex == 3 || imageIndex== 4 || imageIndex == 8 || imageIndex == 9 || imageIndex == 12 || imageIndex == 13 || imageIndex == 15) {
              
              imageIndex++;
              myImage.setAttribute("src", imageArray[imageIndex]);
              score++;  
            }
         // else {location.href = "./gameover.html?score="; + score;
            else {
           console.log("you failed");
           location.href = "./gameover.html?score="+score;
          }
    resetTime(timerId);
    if (imageIndex > 17){ location.href = "./gameover.html?score="+score;} 
   // imageIndex++;
    }

    function Greentrash(){
      //myImage.setAttribute("src", imageArray[imageIndex]);
      //  if (imageIndex === 2 || 7 || 17) {
      //if (imageIndex === 2 || imageIndex === 7 || imageIndex ===17){
       if (imageIndex == 2 || imageIndex == 7 || imageIndex ==17){
        
        imageIndex++;
        myImage.setAttribute("src", imageArray[imageIndex]);
        score++;
      }
        else {
        console.log("you failed");
        location.href = "./gameover.html?score="+score;
    }
    resetTime(timerId);
    if (imageIndex > 17){location.href = "./gameover.html?score="+score;} 
   // imageIndex++;
  }

    function Browntrash(){
      //myImage.setAttribute("src", imageArray[imageIndex]);
     // if (imageIndex === 0 || 1 || 5 || 11) {
     //if (imageIndex === 0 || imageIndex === 1 ||imageIndex === 5 || imageIndex === 11)
      if (imageIndex == 0 || imageIndex == 1 || imageIndex == 5 || imageIndex == 11)
      { imageIndex++;
        myImage.setAttribute("src", imageArray[imageIndex]);
        score++;
                 }
      else {
       console.log("you failed");
       location.href = "./gameover.html?score="+score;
      }
      resetTime(timerId)
      if (imageIndex > 17){ location.href = "./gameover.html?score="+score;} 
      //imageIndex++;
    
  }

    function Graytrash(){
      myImage.setAttribute("src", imageArray[imageIndex]);
      //if (imageIndex === 6 || 10 || 14) {
      //if (imageIndex === 6 || imageIndex === 10 || imageIndex ===14) {
      if (imageIndex == 6 || imageIndex == 10 || imageIndex ==14 || imageIndex ==16) {  
       
        imageIndex++;
        myImage.setAttribute("src", imageArray[imageIndex]);
        score++;
    }      
      else {
        console.log("you failed");
        location.href = "./gameover.html?score="+score;
    }
    resetTime(timerId)
    if (imageIndex > 17){location.href = "./gameover.html?score="+score;} 
  //  imageIndex++;
  }