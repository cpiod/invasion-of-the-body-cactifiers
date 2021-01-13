/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'credits': {
		title: 'Who did this?!',
		body: `
		<p>Idea, writing and hand-drawn characters and backgrounds by <a href='https://www.deviantart.com/wickedwormwood'>Wickedwormwood</a></p>
		<p>Scripting, backgrounds and sound design by <a href='https://cpiod.itch.io/'>cpiod</a></p>
		<p>Music by Lustmord and some bad guy we won't make publicity about"
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
	"Main": "main.mp3"
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	"gunshot": "shotgun.mp3",
	"bell": "elevator-bell.mp3",
	"scream": "scream.mp3"
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	"gun": "gun.png",
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
	"Cuisine": "16-cuisine.png"
});


// Define the Characters
monogatari.characters ({
	'd': {
		name: 'Darling',
		color: '#5bcaff'
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
		'centered <b><p style="color:red;">WARNING: may contain violence, blood and cacti</p></b>',
		'play music Begin loop',
		'centered <h1 style="color:red">INVASION OF THE BODY CACTIFIERS</h1>',
		'centered <p style="color:white;">"Dans la vie, il n\'y a que des cactus" <br/>Jacques Dutronc<br/><br/>"Life is filled with cacti." <br/>Jack of Trunk</p>',
//		'jump Ascenseur',
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
		'Oh my god! What is this?',
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
		'show background Elevator',
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
		'play sound scream',
		'wait 1000',
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
		'Who knows... He may have been one of them.',
		'hide image dead_man',
		'show background Floor3_dead',
		'Anyway, he was dangerous. If only there were a way to tell them apart from humans... I don\'t want to kill a neighbor by mistake.',
		// 14
		'Darling, I\'m home!',
		'jump Home'
	],

	'Home' : [
		// 15
		'show background Home',
		"d Oh, hello honey! How was your day?",
		"Exhausting.",
		"Strange things keep happening, and...",
		"I had this weird feeling- ",
		"d Oh, let it go, don't think about this. You're home now.",
		"d Come eat something!",
		// 16
		'show background Cuisine',
		"Wh... what is this?",
		"d Oh, this little plant! A man on on the streets was seeling them.",
		"d I think it's nice... And it was so cheap! It warms the room, don't you think?",
		"...",
		"... yeah.",
		// 17
		"d Oh, my! I really wanted to make some hummus bus I forgot the chick peas!",
		"d Could you go buy some?",
		"... OK, I won't be long.",
		// 18
		// mort de l'ascenseur
		// mort de la rue
		// 19
		"Again?!",
		// TODO
		'show image gun bottom',
		'wait 1000',
		'hide image afraid_man',
		'show image dead_man center', 
		'show image gun bottom',
		'wait 1000',
		'hide image gun',

		//20
		// avec masque
		// 21.2 sans masque
		'Oh no!',
		'show image gun bottom',
		'wait 1000',
		'hide image afraid_man',
		'show image dead_man center', 
		'show image gun bottom',
		'wait 1000',
		'hide image gun',

		// 21
		'stop music Begin',
		"Honey ! Things are really getting weird out there !",
		// 21.5
		"Honey?",
		// 22
		"Hon...",
		"No, no...",
		'start music Main loop',
		// changement de musique
		"NOOOOOO !",


		'jump credits'
	],	

	'credits' : [
		// TODO change music
		'show message credits',
		'end'
	]
});