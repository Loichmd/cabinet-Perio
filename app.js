
const containerFirst = document.querySelector('.container-first');
const logo1JS = document.querySelector('.logo');
const RS = document.querySelectorAll('.reseaux-sociaux .fa');
const circle2 = document.querySelector('.cercle-1');
const texteTraductionAccueil = document.querySelector('.traductionAccueil');
const menuFixed = document.querySelector('.navbar');
const videoBienvenueJS = document.querySelectorAll("#videoBienvenue");
const logoJS = document.querySelector('.logo');
const videoExp = document.querySelector(".video");
const videoSize = document.querySelector(".video_size");
const heightVideo = document.body.clientHeight + "px";
videoExp.style.height = heightVideo;
videoSize.style.height = heightVideo;



/* 
	###############################
			No Scroll
	###############################
*/
function noScroll() {
	window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('scroll', noScroll);
});





/* 
	###############################
			Chargement de la page
	###############################
*/

window.addEventListener('load', () => {
	const TL10 = gsap.timeline({pause:true});
	TL10
	.staggerFrom(logo1JS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 2)
	.staggerFrom(RS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3)	
	.staggerFrom(circle2, 1, {scale:0.5, opacity:0, ease: "power2.out"}, 0.3, '-=1.5')
	.staggerFrom(texteTraductionAccueil, 1, {right:-80, opacity:0, ease: "power2.out"}, 0.3, '-=1')
	
	
	function effetPulsation(){
		circle2.classList.add('animation-cercle');
	}

	function TimerEffetPulsation(){
		setTimeout(effetPulsation, 2000)
	}

	TL10.play();
	TimerEffetPulsation();
})



/* 
	###############################
			Suite chargement
	###############################
*/

circle2.addEventListener('click', () =>{
	const TL2 = gsap.timeline({pause:true});
	const messageBienvenueJS = document.querySelector('.messageBienvenue');

	function effetPulsation(){
		circle2.classList.remove('animation-cercle');
	}
	effetPulsation();
	

	function msgbienvenue(){
		messageBienvenueJS.classList.remove('messageBienvenue');
		messageBienvenueJS.classList.add('messageBienvenueActive');
	}
	msgbienvenue();


	TL2
		.staggerTo(circle2, 0.2, {scale:1.2, ease:"power4.easeOut"}, 0.5) 
		.staggerTo(circle2, 1, {scale:0, ease:"power4.easeOut"}, 0.5)
		.staggerTo(logo1JS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 2, '-=1')
		.staggerTo(texteTraductionAccueil, 1, {right:-80, opacity:0, ease: "power2.out"}, 0.3, '-=0.5')
		.staggerTo(RS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3,'-=1')
		.staggerTo(messageBienvenueJS, 1 ,{opacity:1, ease:Linear.easeNone}, 0.3)
		.staggerTo(messageBienvenueJS, 1 ,{opacity:0, ease:Linear.easeNone}, 0.3, '+=3')
	TL2.play();


	function RemoveContainerFirst(){
		containerFirst.remove();
	}			
	function TimerRemoveContainerFirst(){
		setTimeout(RemoveContainerFirst,2000)
	}
	TimerRemoveContainerFirst(); 


	function VideoPresentation(){
		videoExp.classList.add('visible') 
			window.removeEventListener('scroll', noScroll);
			const TL3 = gsap.timeline({pause:true, delay:0.6})
			TL3
			.staggerFrom(videoExp, 1, {scale:1, opacity:0, ease:"power4easeOut"}, 1)
			.staggerTo(menuFixed, 1, {opacity:1, ease:"power4easeOut"}, 0.3)
	}
	function videoDisplay(){
		setTimeout(VideoPresentation, 8000)
	}
	videoDisplay();
})


/* 
	###############################
			Navbar
	###############################
*/
	
window.addEventListener('scroll', () => {
	const Y = window.scrollY;
	const HeightScreen = document.body.clientHeight;
		if (Y>= HeightScreen){
			menuFixed.classList.remove("stickyout");
			menuFixed.classList.add("stickyin");
		}
		else{
			menuFixed.classList.remove("stickyin");
			menuFixed.classList.add("stickyout");
		}
});


/* 
	###############################
			Traitements
	###############################
*/

var accordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordeon.length; i++) {
	accordeon[i].addEventListener("click", function() {
		// On ajoute (ou retire) le -
			this.classList.toggle("toggle-sur-Moins");

		
		var textCache = this.nextElementSibling;

		if (textCache.style.maxHeight) {
			textCache.style.maxHeight = null;
		} 
		else {
			textCache.style.maxHeight = textCache.scrollHeight + "px";
		} 
	});
}
	
	
	

/* 
#######################################
	Slideshow equipe
#######################################
*/

const slider = document.querySelector('.slideshow-container');
let holding = false;
let firstClickX;
let alreadyLeftScrolled;


slider.addEventListener('mousedown', e =>{
	holding = true;
	firstClickX = e.pageX - slider.offsetLeft; 
	alreadyLeftScrolled = slider.scrollLeft;
})

slider.addEventListener('mousemove', e =>{
	if(!holding) return; 
	const x = e.pageX - slider.offsetLeft; 
	const scrolled = (x - firstClickX);
	slider.scrollLeft = alreadyLeftScrolled - scrolled;
})

slider.addEventListener('mouseup', () =>{
	holding=false;
})

slider.addEventListener('mouseleave', () =>{
	holding=false;
})



// Partie Mobile
slider.addEventListener('touchstart', e =>{
	holding = true;
	firstClickX = e.targetTouches[0].pageX - slider.offsetLeft;
	alreadyLeftScrolled = slider.scrollLeft;
})

slider.addEventListener('touchend', () =>{
	holder = false;
})


slider.addEventListener("touchmove", e =>{
	if(!holding) return;
	const x = e.targetTouches[0].pageX - slider.offsetLeft;
	const scrolled = (x - firstClickX);
	slider.scrollLeft = alreadyLeftScrolled - scrolled;
})
	
	
	
	