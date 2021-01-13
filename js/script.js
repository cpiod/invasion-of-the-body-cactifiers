/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'credits': {
		title: 'Who did this?!',
		body: `
		<p>Idea, writing, drawings and backgrounds by <a href='https://www.deviantart.com/wickedwormwood'>Wickedwormwood</a></p>
		<p>Writing, scripting, backgrounds and sound design by <a href='https://cpiod.itch.io/'>cpiod</a></p>
		<p>Darling's base was made by BritishCyborg-69 on deviantart<p>
		<p>Music by Lustmord, Lena Raine, and some guy we won't make publicity about
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	"Begin": "begin.mp3",
	"Main": "main.mp3",
	"Supermarket": "supermarket.mp3"
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	"gunshot": "shotgun.mp3",
	"bell": "elevator-bell.mp3",
	"scream": "scream.mp3",
	"dundundun": "dun-dun-dun.mp3",
	"car": "car.mp3",
	"blast": "blast.mp3",
	"collision": "collision.mp3"
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	"gun": "gunnity_gunnito.png",
	"dog_pancarte": "2.png",
	"dog_maskless": "3.png",
	"dog_almost_maskless": "3_2.png",
	"dead_dog": "4.png",
	"afraid_man": "11-1run.png",
	"dead_man": "11-2runexplode.png",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Metro_1": "1_0.jpg",
	"Metro_2": "1_1.png",
	"Rue": "2.jpg",
	"Entree_0": "5_et_demi.jpg",
	"Entree_1": "6.png",
	"Entree_2": "7grand.png",
	"Elevator": "8-9.png",
	"Elevator_floor2": "9.png",
	"Couloir": "couloir_pf.jpg",
	"Floor2": "9-2secondfloor.png",
	"Floor2_cactus": "9-3-secondfloor.png",
	"Floor2_dead": "9-4-secondfloor.png",
	"Floor3": "11-thirdfloor.png",
	"Floor3_dead": "11-thirdfloor-plus-explose.png",
	"Home": "14.png",
	"Home-no-darling": "21.png",
	"Cuisine": "16-cuisine.png",
	"Jenkins-reveal1": "20-1.gif",
	"Jenkins-reveal2": "20-2.gif",
	"Rue2": "19_0.png",
	"super": "19_1.png",
	"super_dead": "19_2.png",
	"caisse": "19-3caisse.png",
	"darling_dead": "22.png",
	"darling_dead_flou": "23.gif",
	"voiture": "24wheel_and_cacti.gif",
	"arsenal1": "25_1_arsenal.png",
	"arsenal2": "25_2_tour_arsenal.jpg",
	"bouton1": "26-1.png",
	"bouton2": "26-2.png",
	"boom1": "26-3.jpg",
	"boom2": "27_1.png",
	"boom3": "27_2.png",
	"final": "30-cacti-horror.gif"
});


// Define the Characters
monogatari.characters ({
	'd': {
		name: 'Darling',
		color: '#5bcaff',
		expressions: {
			normal: "darling_icon.png"
		}
	},
	'y': {
		name: 'You',
		color: '#5bffca'
	}

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'clear',
		'centered <b><p style="color:red;">WARNING: contains violence, censored male nipples, blood and cacti</p></b>',
		'play music Begin loop',
		'centered <h1 style="color:red">INVASION OF THE BODY CACTIFIERS</h1>',
		'centered <p style="color:white;">"Dans la vie, il n\'y a que des cactus" <br/>Jacques Dutronc<br/><br/>"Life is filled with cacti." <br/>Jack of Trunk</p>',
		'jump back_home',
		'jump Metro'
	],

	'Metro' : [
		// 1
		'show background Metro_1 with shake-little infinite',
		'At last my work day is finished.',
		// 1.5
		'show background Metro_2 with shake-little infinite',
		'I\'m tired.',
		'jump Rue'
	],

	'Rue' : [
		'show background Rue',
		// 2: chien écriteau
		'show image dog_pancarte center with fadeIn', 
		'y Hello neighbor!',
		'He is so polite. Even his dog barks in silence.',
		// 2.5: rien
		'clear',
		'hide image dog_pancarte center with fadeOut',
		'wait 2000',
		// 3: chien sans masque
		'show image dog_almost_maskless center with fadeIn', 
		'y Oh hi Mark.',
		'show image dog_maskless center', 
		'hide image dog_almost_maskless',
		'y Oh my god! What is this?',
		// 4: gun
		'show image gun bottom',
		'wait 900',
		'play sound gunshot',
		'wait 100',
		'hide image dog_maskless',
		'show image dead_dog center', 
		'show image gun bottom',
		'wait 1000',
		'hide image gun',
		// 5
		'y Sorry for about dog, Mark.',
		'hide image dead_dog with fadeOut',
		'That was weird... I thought Mark died two years ago.',
		'Maybe I\'m just tired. Let\'s get home.',
		'jump Immeuble'
	],

	'Immeuble' : [
		// avant 6
		'show background Entree_0 with fadeIn',
		'Home sweet home.',
		// 6
		'show background Entree_1',
		'y Hello, Mrs. Jenkins',
		// 7
		'show background Entree_2',
		'y Oh, you know, as usual. Well, I\'m gonna go.',
		'She is colorful today.',
		'jump Ascenseur'
	],

	'Ascenseur' : [
		// 8
//		'show background Elevator_outside',
//		'I live on the third floor',
		// 9
//		'show background Elevator',
		'show background Elevator with shake-horizontal 1',
		'wait 1000',
		'play sound bell',
		'First floor',
		'show background Elevator with shake-horizontal 1',
		'wait 1000',
		'show background Elevator_floor2 with fadeIn',
		'play sound bell',
		'Second floor',
		'show background Elevator with shake-horizontal 1 with fadeIn',
		'wait 1000',
		'play sound bell',
		'Third fl... Wait what was that ?!',
		{
			'Choice': {
				'Dialog': '',
				'f3': {
					'Text': 'My brain is tricking me... Let\'s go home.',
					'Do': 'jump Floor3'
				},
				'f2': {
					'Text': 'I need to check that thing.',
					'Do': 'jump Floor2'
				}
			}
		}
	],

	'Floor2' : [

		'show background Floor2 with fadeIn',

		'Nothing...',
		'show background Floor2_cactus with fadeIn',
		'wait 1000',

		'show image gun bottom',
		'wait 900',
		'play sound gunshot',
		'wait 100',
		'show background Floor2_dead',
		'show image gun bottom',
		'wait 1000',
		'hide image gun',

		'Stay dead.',
		'I need to go home.',
		'jump Floor3'
	],

	'Floor3' : [
		// 10
		'show background Floor3 with fadeIn',
		// 11
		'wait 1000',
		'play sound scream',
		'show image afraid_man center',
		'!!',
		// 12
		'show image gun bottom',
		'wait 900',
		'play sound gunshot',
		'wait 100',
		'hide image afraid_man',
		'show image dead_man center', 
		'show image gun bottom',
		'wait 1000',
		'hide image gun',
		// 13
		'He was certainly one of them.',
		'hide image dead_man',
		'show background Floor3_dead',
		'Anyway, he was dangerous. If only there was a way to tell them apart from humans... I don\'t want to kill a neighbor by mistake.',
		// 14
		'y Darling, I\'m home!',
		'jump Home'
	],

	'Home' : [
		// 15
		'show background Home',
		"d:normal <i> Oh, hello honey! How was your day? </i>",
		"y Exhausting.",
		"y Strange things keep happening, and...",
		"y I had this weird feeling- ",
		"d:normal <i> Oh, let it go, don't think about this. You're home now.</i> ",
		"d:normal <i>Come eat something!</i>",
		// 16
		'show background Cuisine',
		"y Wh... what is this?",
		"d:normal <i>Oh, this little plant! A man on on the streets was selling them.</i>",
		"d:normal <i>I think it's nice... And it was so cheap! It warms up the room, don't you think?</i>",
		"y ...",
		"y ... yeah.",
		// 17
		"d:normal <i>Oh, my! I really wanted to make some hummus but I forgot the chickpeas!</i>",
		"d:normal <i>Could you go buy some?</i>",
		"y ... OK, I won't be long.",
		"jump supermarket"
	],

	'supermarket' : [
		// 18
		'show background Floor3_dead',
		'wait 1500',
		'show background Elevator with shake-horizontal 2',
		'wait 1000',
		'play sound bell',
		'wait 1000',
		'show background Rue',
		'wait 1500',
		'show background Rue2',
		'wait 1500',
		// mort de l'ascenseur
		// mort de la rue
		// 19
		'stop music Begin',
		'play music Supermarket loop',
		'show background super',
		"Again?!",
		'show image gun bottom',
		'wait 900',
		'play sound gunshot',
		'wait 100',
		'show background super_dead',
		'wait 1000',
		'hide image gun',
		"This is becoming mildly repetitive.",
		'clear',
		// 20
		'show background caisse',
		'wait 2000',
		'..',
		'wait 1000',
		'...',
		'wait 1000',
		'!!',
		'wait 2000',
		"It's finally my turn.",
		'stop music Supermarket',
		'jump back_home',
	],

	'back_home' : [
		'play music Main loop',
		'show background Entree_0 with fadeIn',
		'I need to tell darling. It\'s the cacti! We need to throw the one he got.',
		//20
		'show background Jenkins-reveal1',
		'play sound dundundun',
		// avec masque
		// 21.2 sans masque
		'Oh no! Not you, Mrs. Jenkins!',
		'clear',
		'show background Jenkins-reveal2',
		'show image gun bottom',
		'wait 200',
		'play sound gunshot',
		'wait 400',
		'play sound gunshot',
		'wait 800',
		'hide image gun',
		'Poor Mrs. Jenkins... You bastards!!',
		'You will pay for what you did!',

		// 21
		'show background Home-no-darling',
		"y Honey! Things are really getting weird out there!",
		"y The cacti! They can perfectly imitate any human! They even got Mrs. Jenkins, can you believe it?",
		"y We need to trash yours before it's too late!",
		// 21.5
		"y Honey?",
		// 22
		"y Hon...",
		"y No, no...",
		'show background darling_dead',
		// changement de musique
		"y NOOOOOO!",
		'show background darling_dead_flou',
		"wait 3000",

		'jump the_end'
	],	

	"the_end" : [
		'show background black',
		'I\'m gonna destroy this town.',
		'play sound car loop',
		'show background voiture with fadeIn with shake-little infinite',
		'wait 2000',
		'play sound collision loop',
		'I know where the arsenal is.',
		'No cactus will survive the explosion.',
		'stop sound collision',
		'stop sound car',
		'show background arsenal1 with fadeIn',
		'The arsenal...',
		'show background arsenal2 with fadeIn',
		'They keep them in this building.',
		'The bombs that will end us all.',
		'show background bouton1 with fadeIn',
		'I guess I\'ll die in the explosion... I won\'t be able to warn the world...',
		'I hope...',
		'show background bouton2 with fadeIn',
		'No. I don\'t have hope anymore.',
		'clear',
		'stop music Main',
		'play sound blast',
		'show background boom1 with fadeIn with shake-hard infinite',
		'wait 5000',
		'show background boom2 with fadeIn',
		'wait 2000',
		'show background boom3 with fadeIn',
		'wait 2000',
		'I survived. That\'s a miracle.',
		'show background final with fadeIn',
		"That's a sign. I'm the only one who can save the world.",
		'wait 3000',
		'centered <h1 style="color:red">INVASION OF THE BODY CACTIFIERS</h1>',
		'jump credits'
	],

	'credits' : [
		'show message credits',
		'end'
	]
});