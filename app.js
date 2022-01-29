
/* 
	###############################
			Impossible de scroller
			Effet s'enlève au click
	###############################
*/



function noScroll(evt) {
	var x = document.documentElement.scrollLeft;
    var y = document.documentElement.scrollTop;
    window.scrollTo(x, y);
}
window.addEventListener('scroll', noScroll);


/* 
	###############################
			Variables
	###############################
*/


// Chargement de la page
	const titreSpans = document.querySelectorAll('.titre-debut span');
	const cercle = document.querySelector('.circle');
	const containerFirst = document.querySelector('.container-first');
	
	const logo1JS = document.querySelector('.logo');
	const RS = document.querySelectorAll('.reseaux-sociaux .fa');
	const circle2 = document.querySelector('.cercle-3');
	//const logo2JS = document.querySelector('.logo-Room');
	const menuFixed = document.querySelector('.navbar');


// Suite du chargement

	// Video indiquant "Bienvenue au Cabinet"
		const videoBienvenueJS = document.querySelectorAll("#videoBienvenue");


	// Suite du chargement
		const partVert = document.querySelector('.vert');
		const welcomeCabinet = document.querySelectorAll('.welcome-cabinet span');
		const logoJS = document.querySelector('.logo');

		// Vidéo
			const videoExp = document.querySelector(".video");
			
			// On fixe la hauteur de la vidéo sur la hauteur de la fenêtre du navigateur
			const heightVideo = document.body.clientHeight;
			videoExp.style.height = heightVideo;


// Hauteur des images des chaque praticien (taille de l'écran / 3)
	const heightDiv2 = document.body.clientHeight / 2;
	const heightPraticien = heightDiv2 - 10;

	

	console.log(heightVideo);
	console.log(heightDiv2);
	console.log("Praticien :" + heightPraticien);
	

/* ------------------------------------------------------ */


/* 
	###############################
			Chargement de la page
	###############################
*/

window.addEventListener('load', () => {

	// On déclare la variable 
	const TL10 = gsap.timeline({pause:true});

	

	// On 
	TL10
	.staggerFrom(logo1JS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 2)
	.staggerFrom(RS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3)	
	.staggerFrom(circle2, 1, {scale:0.5, opacity:0, ease: "power2.out"}, 0.3)
	//.staggerFrom(cercle, 2, {opacity:0, ease: "power2.out"}, 0.5, '+=0.2')

	function TimerEffetPulsation(){
		setTimeout(effetPulsation, 3800)
	}

	function effetPulsation(){
		circle2.classList.add('animation-cercle');
	}


	TL10.play();


	TimerEffetPulsation();



/*  ==> Anciennement les spécialités qui apparaissaient sous le cercle
			const TL11 = gsap.timeline({pause:true, repeat:-1, delay: 2});
			TL11

			// .staggerFrom(spec1, {keyframes:[{duration: 0.8, bottom: -20, opacity: 0, ease: "power2.out"}, {duration: 0.8, top: -20, opacity: 0, ease: "power2.out"}]})
			.staggerFrom(spec1, 0.8, {bottom: -20, opacity: 0, ease: "power2.out"}, 0.5)
			.staggerTo(spec1, 0.8, {top: -20, opacity: 0, ease: "power2.out"}, 0.5)

			.staggerFrom(spec2, 0.8, {bottom: -20, opacity: 0, ease: "power2.out"}, 0.5)
			.staggerTo(spec2, 0.8, {top: -20, opacity: 0, ease: "power2.out"}, 0.5)

			.staggerFrom(spec3, 0.8, {bottom: -20, opacity: 0, ease: "power2.out"}, 0.5)
			.staggerTo(spec3, 0.8, {top: -20, opacity: 0, ease: "power2.out"}, 0.5)

			.staggerFrom(spec4, 0.8, {bottom: -20, opacity: 0, ease: "power2.out"}, 0.5)
			.staggerTo(spec4, 0.8, {top: -20, opacity: 0, ease: "power2.out"}, 0.5)

			.staggerFrom(spec5, 0.8, {bottom: -20, opacity: 0, ease: "power2.out"}, 0.5)
			.staggerTo(spec5, 0.8, {top: -20, opacity: 0, ease: "power2.out"}, 0.5)
			
			
			TL11.play()

	*/


})






/* 
	###############################
			Suite chargement
	###############################
*/

circle2.addEventListener('click', () =>{

	function effetPulsation(){
		circle2.classList.remove('animation-cercle');
	}

	effetPulsation();

	const TL2 = gsap.timeline({pause:true});
	
	const messageBienvenueJS = document.querySelector('.messageBienvenue');

	
	function msgbienvenue(){
		messageBienvenueJS.classList.remove('messageBienvenue');
		messageBienvenueJS.classList.add('messageBienvenueActive');
	}
			msgbienvenue();
	
	
	
	


	TL2
		.staggerTo(circle2, 0.2, {scale:1.2, ease:"power4.easeOut"}, 0.5) // le cercle rebondis (1)
		
		.staggerTo(circle2, 1, {scale:0, ease:"power4.easeOut"}, 0.5) // le cercle disparait

		.staggerTo(logo1JS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 2, '-=1')
		.staggerTo(RS, 1, {top: -100, opacity: 0, ease: "power2.out"}, 0.3,'-=1')

		.staggerTo(messageBienvenueJS, 1 ,{opacity:1, ease:Linear.easeNone}, 0.3)
		.staggerTo(messageBienvenueJS, 1 ,{opacity:0, ease:Linear.easeNone}, 0.3, '+=3')


		//.staggerTo(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5, '-=1') // Enleve "La Room Perio"

		

/*
		.staggerTo(partVert, 1, {scale:1, opacity: 1, ease:"power4.easeOut" }, 1) // Affiche le fond du head
		.staggerTo(specAll, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5) // on enlève toutes les spécialités
		.staggerTo(logoJS, 1, {opacity:1, ease:"power4.easeOut"}, 1) // Affiche la barre où il y a le logo
		.staggerFrom(welcomeCabinet, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.4) // On affiche le "Bienvenue au cabinet Perio"
*/

	// On joue TL2 
	TL2.play();

	

/*


			VIDEO INDIQUANT LA BIENVENUE


*/
		// On affiche la vidéo de bienvenue

		/*
			const videoBienvenueJS = document.querySelector('.videoBienvenue');

			function suiteTraitementVideo(){
				videoBienvenueJS.classList.remove('videoBienvenue');
				videoBienvenueJS.classList.add('videoBienvenueActive');
				videoBienvenueJS.play();
			}

			// on attend 2 seconde avant de jouer "Suite Traitement"
		function videoBienvenueDisplay(){
			setTimeout(suiteTraitementVideo, 2000)
		}
		videoBienvenueDisplay();
		


*/


				
		
			

		// Suite des animations (video de présentation)
			function VideoPresentation(){
				containerFirst.remove(); // On suprime tout ce qu'il y avait dans la première partie pour pouvoir cliquer
				videoExp.classList.add('visible') // On ajoute la classe "Visible" à la vidéo car elle n'est pas visible au lancement de la page
				//menuFixed.style.opacity="1"
				//videoBienvenueJS.classList.remove('videoBienvenueActive');
				//videoBienvenueJS.classList.add('videoBienvenue');
				// On fait une animation d'agrandissement de la vidéo 
				const TL3 = gsap.timeline({pause:true, delay:0.6})
				TL3
				.staggerFrom(videoExp, 1, {scale:0.8, opacity:0, ease:"power4easeOut"}, 1)
				.staggerTo(menuFixed, 1, {opacity:1, ease:"power4easeOut"}, 0.3)
			}

		// on attend 2 seconde avant de jouer "Suite Traitement"
		function videoDisplay(){
			setTimeout(VideoPresentation, 8000)
		}
		videoDisplay();



	// On retirer l'interdiction du scroll
	window.removeEventListener('scroll', noScroll);


})


/* 
	###############################
			On fixe la navbar quand le scroll atteint la fin de la hauteur de la vidéo
	###############################
*/
const h2Traitements = document.querySelector('.h2Traitements');
		
		window.addEventListener('scroll', () => {
			
			const Y = window.scrollY;
				if (Y>= heightVideo){
					menuFixed.classList.add("stickyin");
					menuFixed.classList.remove("stickyout");
				}
				else{
					menuFixed.classList.remove("stickyin");
					menuFixed.classList.add("stickyout");
				}
		});


		



/* 
	###############################
			Partie traitements
	###############################
*/




gsap.to(h2Traitements,{
	duration:0.6,
	y:0,
	scale:2,
	autoAlpha:1,
	scrollTrigger:{
		trigger: h2Traitements,
		markers:false,
		start:"top-=700 center+=100" // Trigger (en haut de l'élément h2) Scroller
	}
})


const childTraitementsJS = document.querySelectorAll('.childTraitements');

gsap.to(childTraitementsJS,{
	duration:0.6,
	y:-20,
	autoAlpha:1,
	scrollTrigger:{
		trigger: childTraitementsJS,
		markers:false,
		start:"top-=100 center+=100" // Trigger (en haut de l'élément h2) Scroller
	}
})



const childTraitementsJS1 = document.querySelectorAll('.childTraitements:nth-child(1)');

gsap.to(childTraitementsJS1,{
	duration:0.6,
	y:0,
	x:600,
	autoAlpha:1,
	scrollTrigger:{
		trigger: childTraitementsJS1,
		markers:false,
		start:"top-=0 center+=100" // Trigger (en haut de l'élément h2) Scroller
	}
})



const childTraitementsJS2 = document.querySelectorAll('.childTraitements:nth-child(2)');

gsap.to(childTraitementsJS2,{
	duration:0.6,
	y:-300,
	x:0,
	autoAlpha:1,
	scrollTrigger:{
		trigger: childTraitementsJS2,
		markers:false,
		start:"top-=270 center+=100" // Trigger (en haut de l'élément h2) Scroller
	}
})



const childTraitementsJS3 = document.querySelectorAll('.childTraitements:nth-child(3)');

gsap.to(childTraitementsJS3,{
	duration:0.6,
	y:0,
	x:-800,
	autoAlpha:1,
	scrollTrigger:{
		trigger: childTraitementsJS,
		markers:false,
		start:"top-=0 center+=100" // Trigger (en haut de l'élément h2) Scroller
	}
})










// ANIMATION SVG



//const praticien = document.querySelectorAll('.svg .people');


//praticien.forEach(function (path) {
//	path.addEventListener('mouseenter', function () {
//		const MonId = this.id;
//		const newId = MonId.replace("Nom-","");
//		console.log(newId)
//		document.querySelector('#NomTxt-' + newId).classList.add('is-active')
//	})
//})





/* 
	###############################
			Images pour chaque praticiens
	###############################
*/



const paragraphPraticienJS = document.querySelectorAll('.paragraphePraticien p');
const h3PraticienJS = document.querySelectorAll('.paragraphePraticien h3');
const imgPraticienJS = document.querySelectorAll('.imgPraticien');


console.log(paragraphPraticienJS);


imgPraticienJS.forEach(element => {
	element.addEventListener('mouseenter', ()=>{
		//console.log(this.id);
		//paragraphPraticienJS.classList.toggle("p-H3-visible")
		//h3PraticienJS.classList.toggle("p-H3-visible")
	})
	
});


/// V2

const jMaletJS = document.querySelector('.jMalet')
const dNisJSand = document.querySelector('#dNisand')
const LafontJS = document.querySelector('#Lafont')
const idJMaletJS = document.querySelector('.jMalet .paragraphePraticien')

const presentationPraticien = document.querySelector('.paragraphePraticien')

const presentationMalet = document.querySelector('.paragraphePraticienMalet')
const presentationNisand = document.querySelector('.paragraphePraticienNisand')
const presentationLafont = document.querySelector('.paragraphePraticienLafont')


const largeur = (window.innerWidth)/3; 

	jMaletJS.style.width =largeur;
	dNisJSand.style.width =largeur;
	LafontJS.style.width =largeur;


	/* 
	###########################
		HOVER DR MALET 
	###########################	
	*/
			jMaletJS.addEventListener("mouseenter", ()=>{
				let Tlequipe = gsap.timeline({pause:true});

				Tlequipe
				.staggerTo(presentationMalet, 1, {top: 167, opacity: 1, ease: "power2.out", backgroundImage:"('./Equipe/6-hover.jpg')"})
			})
			
			jMaletJS.addEventListener("mouseleave", ()=>{
				let Tlequipe = gsap.timeline({pause:true});

				Tlequipe
				.staggerTo(presentationMalet, 0.5, {top:187, opacity: 0, ease: "power2.out"})
			})



			/*
				Dr Malet
			*/

				/*
					Btn n°1
				*/
					const RdMalet1 = document.querySelector('#Malet1')
					console.log(RdMalet1);

					RdMalet1.addEventListener('mouseenter', ()=>{
						console.log('hellooo');
						jMaletJS.classList.remove('jMaletHoverBulle2')
						jMaletJS.classList.add('jMaletHoverBulle1')
					})

					RdMalet1.addEventListener('mouseleave', ()=>{
						jMaletJS.classList.remove('jMaletHoverBulle1')
					})


				
				/*
					Btn n°2
				*/
					const RdMalet2 = document.querySelector('#Malet2')
					const TexteDrMaletJS = document.querySelector('.TexteDrMalet')
					let Tlequipe = gsap.timeline({pause:true});
					
					console.log(RdMalet2);

					RdMalet2.addEventListener('mouseenter', ()=>{
						jMaletJS.classList.remove('jMaletHoverBulle1')
						TexteDrMaletJS.style.opacity="1"
						jMaletJS.classList.add('jMaletHoverBulle2')	
						
						
					})


					RdMalet2.addEventListener('mouseleave', ()=>{
						jMaletJS.classList.remove('jMaletHoverBulle2')
						TexteDrMaletJS.style.opacity="0"
					})


	/* 
	###########################
		HOVER DR Nisand 
	###########################	
	*/
			dNisJSand.addEventListener("mouseenter", ()=>{
				let Tlequipe = gsap.timeline({pause:true});

				Tlequipe
				.staggerTo(presentationNisand, 1, {top: 0, opacity: 1, ease: "power2.out", backgroundImage:"('./Equipe/6-hover.jpg')"})
			})
			
			dNisJSand.addEventListener("mouseleave", ()=>{
				let Tlequipe = gsap.timeline({pause:true});

				Tlequipe
				.staggerTo(presentationNisand, 0.5, {top:-20, opacity: 0, ease: "power2.out"})
			})




	/* 
	###########################
		HOVER DR Lafont 
	###########################	
	*/
	LafontJS.addEventListener("mouseenter", ()=>{
		let Tlequipe = gsap.timeline({pause:true});

		Tlequipe
		.staggerTo(presentationLafont, 1, {top: 0, opacity: 1, ease: "power2.out", backgroundImage:"('./Equipe/6-hover.jpg')"})
	})
	
	LafontJS.addEventListener("mouseleave", ()=>{
		let Tlequipe = gsap.timeline({pause:true});

		Tlequipe
		.staggerTo(presentationLafont, 0.5, {top:-20, opacity: 0, ease: "power2.out"})
	})

 



/*
const praticien = document.querySelectorAll('.svg .people');
praticien.forEach(function (path) {
		path.addEventListener('mouseenter', function () {
			const MonId = this.id;
			const newId = MonId.replace("Nom-","");
			console.log(newId)
			document.querySelector('#NomTxt-' + newId).classList.add('is-active')
		})
	})
*/







// Get the modal
const modal = document.getElementById("myModal");
const popUp = document.querySelector('.modal')
const boiteContenu = document.querySelector('.modal-content')
const btn = document.querySelector("#myBtn");
const spanClose = document.getElementsByClassName("close")[0];


// Premier +

		btn.addEventListener('click',()=>{
			const TL9 = gsap.timeline({pause:true});
			TL9
			.staggerTo(popUp, 1, {display:"block", scale: 1, ease: "power2.out"}, 1)
			.staggerFrom(boiteContenu, 0.5, {scale:0, ease: "power2.out"}, 0.2, "-=1")

			TL9.play();
		})

		spanClose.addEventListener('click', ()=>{
			popUp.style.display = "none";
		})

		window.addEventListener('click', function(event) {

			if (event.target == modal) {
				modal.style.display = "none";

				
			}
		})




// Deuxième +


		const modal2 = document.getElementById("myModal-2");
		const popUp2 = document.querySelector('.modal-2')
		const boiteContenu2 = document.querySelector('.modal-content-2')
		const btn2 = document.querySelector("#myBtn-2");
		const spanClose2 = document.getElementsByClassName("close-2")[0];

		btn2.addEventListener('click',()=>{
			const TL9 = gsap.timeline({pause:true});
			TL9
			.staggerTo(popUp2, 1, {display:"block", scale: 1, ease: "power2.out"}, 1)
			.staggerFrom(boiteContenu2, 0.5, {scale:0, ease: "power2.out"}, 0.2, "-=1")

			TL9.play();
		})

		spanClose2.addEventListener('click', ()=>{
			popUp2.style.display = "none";
		})

		window.addEventListener('click', function(event) {

			if (event.target == modal) {
				modal2.style.display = "none";

				
			}
		})


/*
const TL10 = gsap.timeline({pause:true});

	// On 
	TL10
	.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
	.staggerFrom(cercle, 2, {opacity:0, ease: "power2.out"}, 0.5, '+=0.2')
*/





/*
##########################
		Infobulle avec Tippy.js
##########################
*/

		tippy('#Nom-5', {
			content: 'Thomas',
			theme: 'light',
			animation: 'perspective-extreme',
			followCursor: true,
		});



		tippy('#Nom-4', {
			content: 'Jean',
			theme: 'light',
			animation: 'shift-away',
			followCursor: true,
		});


		tippy('#Nom-3', {
			content: 'Guillaume',
			theme: 'light',
			animation: 'shift-away',
			followCursor: true,
		});


		tippy('#Nom-2', {
			content: 'Sophie',
			theme: 'light',
			animation: 'shift-away',
			followCursor: true,
		});

		tippy('#Nom-1', {
			content: 'Julie',
			theme: 'light',
			animation: 'shift-away',
			followCursor: true,
		});





/*
##########################
		Accordéon
##########################
*/


var accordeonBleuClair = document.querySelectorAll(".accordionBleuClair");
var i;

for (i = 0; i < accordeonBleuClair.length; i++) {
	accordeonBleuClair[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


var accordeonBleuFonce = document.querySelectorAll(".accordionBleuFonce");
var u;

for (i = 0; i < accordeonBleuFonce.length; i++) {
	accordeonBleuFonce[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}