// import { gsap } from "gsap";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin";


// gsap.registerPlugin(ScrollTrigger,TextPlugin);

// gsap.to(".projects", {
// x: 1000,
// duration: 3, 
// scrollTrigger: ".about"

// });

// // import { gsap } from "gsap";

// // gsap.to(".intro", {
// //   duration: 2,
// //   fontSize: "40px",
// //   color: "#FF5733",
// //   ease: "bounce.out",
// //   repeat: -1,  // Infinite loop
// //   yoyo: true   // Reverse animation
// // });


// gsap.to(".intro h1", {
//   duration: 3,
//   text: "New Animated Text!",
//   ease: "power2.inOut"
// });

// var tl = gsap.timeline({scrollTrigger:{
//   trigger:"#main",
//  //  markers:true,
//   start:"50% 50%",
//   end:"150% 50%",
//   scrub:2,
//   pin:true
// }});
// tl
// .to("#center",{
//  height: "100vh",
// },'a')
// .to("#top",{
//   top: "-50%",
// },'a')
// .to("#bottom",{
//   bottom: "-50%",
// },'a')
// .to("#top-h1",{
//   top: "60%"
// },'a')
// .to("#bottom-h1",{
//   bottom: "-30%"
// },'a')
// .to("#center-h1",{
//  top: "-30%"
// },'a')
// .to(".content1",{
//  delay: -0.2,
//  marginTop: "0%"
// })

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "top top", // Start when the top of #main hits the top of the viewport
    end: "bottom top", // End when the bottom of #main hits the top of the viewport
    scrub: 1, // Sync animation with scrolling
    pin: true // Pin #main during the animation
  }
});

tl
.to("#top", {
  y: "-50vh", // Move the #top section up by 50% of the viewport height
}, 'a')
.to("#bottom", {
  y: "50vh", // Move the #bottom section down by 50% of the viewport height
}, 'a')
.to("#center", {
  height: "100vh", // Expand #center to full viewport height
}, 'a')
.to("#top-h1", {
  y: "50%", // Adjust the position of the top heading
}, 'a')
.to("#bottom-h1", {
  y: "-50%", // Adjust the position of the bottom heading
}, 'a')
.to(".content1", {
  delay: -0.2,
  marginTop: "0%" // Adjust the margin top of the content
});


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main1",
    start: "top top", // Start when the top of #main hits the top of the viewport
    end: "bottom top", // End when the bottom of #main hits the top of the viewport
    scrub: 1, // Sync animation with scrolling
    pin: true // Pin #main during the animation
  }
});

tl
.to("#top1", {
  y: "-50vh", // Move the #top section up by 50% of the viewport height
}, 'a')
.to("#bottom1", {
  y: "50vh", // Move the #bottom section down by 50% of the viewport height
}, 'a')
.to("#center1", {
  height: "100vh", // Expand #center to full viewport height
}, 'a')
.to("#top-h11", {
  y: "50%", // Adjust the position of the top heading
}, 'a')
.to("#bottom-h11", {
  y: "-50%", // Adjust the position of the bottom heading
}, 'a')
.to(".content11", {
  delay: -0.2,
  marginTop: "0%" // Adjust the margin top of the content
});


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main11",
    start: "top top", // Start when the top of #main hits the top of the viewport
    end: "bottom top", // End when the bottom of #main hits the top of the viewport
    scrub: 1, // Sync animation with scrolling
    pin: true // Pin #main during the animation
  }
});

tl
.to("#top111", {
  y: "-50vh", // Move the #top section up by 50% of the viewport height
}, 'a')
.to("#bottom11", {
  y: "50vh", // Move the #bottom section down by 50% of the viewport height
}, 'a')
.to("#center11", {
  height: "100vh", // Expand #center to full viewport height
}, 'a')
.to("#top-h111", {
  y: "50%", // Adjust the position of the top heading
}, 'a')
.to("#bottom-h111", {
  y: "-50%", // Adjust the position of the bottom heading
}, 'a')
.to(".content111", {
  delay: -0.2,
  marginTop: "0%" // Adjust the margin top of the content
});


document.querySelectorAll('.card__image1').forEach(image => {
    image.addEventListener('click', function() {
      const overlay = document.getElementById('overlay');
      const expandedImg = document.getElementById('expandedImg');
      expandedImg.src = this.src;
      overlay.style.display = 'flex';
    });
  });
  
  document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
  });


  document.getElementById('top-close').addEventListener('click', function() {
    document.querySelector('.top-bar').style.display = 'none';


  });


  // document.getElementById('about').addEventListener('click', function() {
  //   document.querySelector('.top-bar').style.display = 'flex';

  // });




 




  // document.getElementById('top-close').addEventListener('click', function() {
  //   alert('Close button clicked!');
  //   document.querySelector('.top-bar').style.display = 'none';
  // });
