window.onscroll = function() {
  var fixedElement = document.querySelector('.video-button');
  var scrollHeight = 70;
  var fixedElementvideo=document.querySelector(".tough");
  var videoscroll=2057;             //to fix the backgroung while scrolling when you want to start 
  var videoscrollchange=2795
  var videoscrollchange2=3300        //after how much scroll you want to change the contant
  var videoscrollend=4065.1         // after compliting scroll normal flow of website
  
if (window.pageYOffset > scrollHeight) {
    fixedElement.classList.add('fixed');
  } 
  
else {
    fixedElement.classList.remove('fixed');
  }

if (window.pageYOffset > videoscroll) {               //to fix the background
    fixedElementvideo.classList.add("fixvideo");
  }
else{
  fixedElementvideo.classList.remove('fixvideo');
}

  if(window.pageYOffset > videoscrollend) {
    fixedElementvideo.classList.remove('fixvideo');     //to end the fixed background for continous flow of website
}
if (window.pageYOffset > videoscrollchange) {           //change in between
  fixedElementvideo.classList.add("changebg");
} 
else{
  fixedElementvideo.classList.remove('changebg');
}
if (window.pageYOffset > videoscrollchange2){
  fixedElementvideo.classList.remove('changebg')
}

if (window.pageYOffset > videoscrollchange2) {           //change in between
  fixedElementvideo.classList.add("changebg2");
} 
else{
  fixedElementvideo.classList.remove('changebg2');
}
// if (window.pageYOffset > videoscrollchange2){
//   fixedElementvideo.classList.remove('changebg')
// }


};
function handleVideoEnd() {
  videocurrentindex=videocurrentindex+1;
  videoposter=videoposter+1
  if (videocurrentindex==0){
    document.getElementById('b11').style.color='white'
    document.getElementById('b11').style.borderColor='white'
    document.getElementById('b44').style.color='rgb(150, 149, 149)'
    document.getElementById('b44').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b22').style.color='rgb(150, 149, 149)'
    document.getElementById('b22').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b33').style.color='rgb(150, 149, 149)'
    document.getElementById('b33').style.borderColor='rgb(150, 149, 149)'
  }
  console.log('Video has ended.');
  if (videocurrentindex==1){
    document.getElementById('b22').style.color='white'
    document.getElementById('b22').style.borderColor='white'
    document.getElementById('b11').style.color='rgb(150, 149, 149)'
    document.getElementById('b11').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b44').style.color='rgb(150, 149, 149)'
    document.getElementById('b44').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b33').style.color='rgb(150, 149, 149)'
    document.getElementById('b33').style.borderColor='rgb(150, 149, 149)'
  }
  if (videocurrentindex==2){
    document.getElementById('b33').style.color='white'
    document.getElementById('b33').style.borderColor='white'
    document.getElementById('b22').style.color='rgb(150, 149, 149)'
    document.getElementById('b22').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b11').style.color='rgb(150, 149, 149)'
    document.getElementById('b11').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b44').style.color='rgb(150, 149, 149)'
    document.getElementById('b44').style.borderColor='rgb(150, 149, 149)'
  }
  if (videocurrentindex==3){
    document.getElementById('b44').style.color='white'
    document.getElementById('b44').style.borderColor='white'
    document.getElementById('b33').style.color='rgb(150, 149, 149)'
    document.getElementById('b33').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b22').style.color='rgb(150, 149, 149)'
    document.getElementById('b22').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b11').style.color='rgb(150, 149, 149)'
    document.getElementById('b11').style.borderColor='rgb(150, 149, 149)'
  }
  console.log('Video has ended.');
  videoElement.src = videoindex[videocurrentindex]; 
  videoElement.poster = videoindexposter[videoposter];
  videoElement.load();
  videoElement.play();
  if (videocurrentindex==3){
    videocurrentindex=-1;
  }
  if (videoposter==3){
    videoposter=-1;
    
  }

}
document.getElementById('b11').style.color='white'
document.getElementById('b11').style.borderColor='white'
let videoposter=0
let videocurrentindex=0;
const videoindexposter=['./images and video/1st video poster.jpg','./images and video/2nd video poster.jpg','./images and video/3rd video poster.jpg','./images and video/4th video poster.jpg']
const videoindex=['./images and video/1st video.mp4','./images and video/3rd_video.mp4','./images and video/2nd_video.mp4','./images and video/4th_video.mp4']
const videoElement = document.getElementById('vid');
videoElement.addEventListener('ended', handleVideoEnd);
document.getElementById('b11').addEventListener('click',function(){
  videocurrentindex=-1
  videoposter=-1
  handleVideoEnd()
})
document.getElementById('b22').addEventListener('click',function(){
  videocurrentindex=0
  videoposter=0
  handleVideoEnd()
})
document.getElementById('b33').addEventListener('click',function(){
  videocurrentindex=1
  videoposter=1
  handleVideoEnd()
})
document.getElementById('b44').addEventListener('click',function(){
  videocurrentindex=2
  videoposter=2
  handleVideoEnd()
})



function handleVideoEnd2() {
  videocurrentindex2=videocurrentindex2+1;
  videoposter2=videoposter2+1
  if (videocurrentindex2==0){
    document.getElementById('b1').style.color='white'
    document.getElementById('b1').style.borderColor='white'
    document.getElementById('b4').style.color='rgb(150, 149, 149)'
    document.getElementById('b4').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b2').style.color='rgb(150, 149, 149)'
    document.getElementById('b2').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b3').style.color='rgb(150, 149, 149)'
    document.getElementById('b3').style.borderColor='rgb(150, 149, 149)'
  }
  console.log('Video has ended.');
  if (videocurrentindex2==1){
    document.getElementById('b2').style.color='white'
    document.getElementById('b2').style.borderColor='white'
    document.getElementById('b1').style.color='rgb(150, 149, 149)'
    document.getElementById('b1').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b4').style.color='rgb(150, 149, 149)'
    document.getElementById('b4').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b3').style.color='rgb(150, 149, 149)'
    document.getElementById('b3').style.borderColor='rgb(150, 149, 149)'
  }
  if (videocurrentindex2==2){
    document.getElementById('b3').style.color='white'
    document.getElementById('b3').style.borderColor='white'
    document.getElementById('b2').style.color='rgb(150, 149, 149)'
    document.getElementById('b2').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b1').style.color='rgb(150, 149, 149)'
    document.getElementById('b1').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b4').style.color='rgb(150, 149, 149)'
    document.getElementById('b4').style.borderColor='rgb(150, 149, 149)'
  }
  if (videocurrentindex2==3){
    document.getElementById('b4').style.color='white'
    document.getElementById('b4').style.borderColor='white'
    document.getElementById('b3').style.color='rgb(150, 149, 149)'
    document.getElementById('b3').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b2').style.color='rgb(150, 149, 149)'
    document.getElementById('b2').style.borderColor='rgb(150, 149, 149)'
    document.getElementById('b1').style.color='rgb(150, 149, 149)'
    document.getElementById('b1').style.borderColor='rgb(150, 149, 149)'
  }

  
  videoElement2.src = videoindex2[videocurrentindex2]; 
  videoElement2.poster = videoindexposter2[videoposter2];
  videoElement2.load();
  videoElement2.play();
  
  if (videocurrentindex2==3){
    videocurrentindex2=-1
  }
  if (videoposter2==3){
    videoposter2=-1
  }
  
  
}
document.getElementById('b1').style.color='white'
document.getElementById('b1').style.borderColor='white'
let videoposter2=0
let videocurrentindex2=0
const videoindexposter2=['./images and video/1st video poster2.jpg','./images and video/2nd video poster2.jpg','./images and video/3rd video poster2.jpg','./images and video/4th video poster2.jpg']
const videoindex2=['./images and video/1st video2.mp4','./images and video/2nd video2.mp4','./images and video/3rd video2.mp4','./images and video/4th video2.mp4']
const videoElement2 = document.getElementById('vid2');
videoElement2.addEventListener('ended', handleVideoEnd2);
document.getElementById('b1').addEventListener('click',function(){
  videocurrentindex2=-1
  videoposter2=-1
  handleVideoEnd2()
})
document.getElementById('b2').addEventListener('click',function(){
  videocurrentindex2=0
  videoposter2=0
  handleVideoEnd2()
})
document.getElementById('b3').addEventListener('click',function(){
  videocurrentindex2=1
  videoposter2=1
  handleVideoEnd2()
})
document.getElementById('b4').addEventListener('click',function(){
  videocurrentindex2=2
  videoposter2=2
  handleVideoEnd2()
})




document.getElementById('forest').addEventListener('click',function(){
  const imagechange=document.getElementById('last-img')
  imagechange.innerHTML='<img src="./images and video/last image2.jpg" alt=""></img>'
  document.getElementById('color').id=''
})
document.getElementById('water').addEventListener('click',function(){
  const imagechange=document.getElementById('last-img')
  imagechange.innerHTML='<img src="./images and video/last image3.jpg" alt=""></img>'
  document.getElementById('color').id=''
})
document.getElementById('urban').addEventListener('click',function(){
  const imagechange=document.getElementById('last-img')
  imagechange.innerHTML='<img src="./images and video/last image1.jpg" alt=""></img>'
  document.getElementById('color').id=''
})
