/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'credits': {
		title: 'Who did this?!',
		body: `
		<p>Idea, writing and hand-drawn characters by <a href='https://www.deviantart.com/wickedwormwood'>Wickedwormwood</a></p>
		<p>Scripting, backgrounds and sound design by <a href='https://cpiod.itch.io/'>cpiod</a></p>
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
	"afraid_man": "11.png",
	"dead_man": "12.png",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Metro_1": "1_0.jpg",
	"Metro_2": "1_1.png",
	"Rue": "2.jpg",
	"Entree_0": "5_et_demi.jpg",
	"Entree_1": "6.png",
	"Entree_2": "7.png",
	"Elevator_closed": "elevator1_pf.jpg",
	"Couloir": "couloir_pf.jpg"
});


// Define the Characters
monogatari.characters ({
	'm': {
		name: 'Some man',
		color: '#5bcaff'
	},
	'd': {
		name: 'Darling',
		color: '#5bcaff'
	}

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'clear',
		'centered <p style="color:white;">"Dans la vie, il n\'y a que des cactus" <br/>Jacques Dutronc</p>',
		'play music Begin loop',
		'centered <p style="color:white;">"Life is filled with cacti." <br/>Jack of Trunk</p>',
		'jump Metro'
/*		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},*/
/*		'y Hi {{player.name}} Welcome to Monogatari!',
		{
			'Choice': {
				'Dialog': 'y Have you already read some documentation?',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}*/
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
		'Hello neighbor.',
		// 2.5: rien
		'clear',
		'hide image dog_pancarte center with fadeOut',
		'wait 2000',
		// 3: chien sans masque
		'show image dog_almost_maskless center with fadeIn', 
		'Hi !',
		'show image dog_maskless center', 
		'hide image dog_almost_maskless',
		'Oh my god. What is this?',
		// 4: gun
		'show image gun bottom',
		'wait 1000',
		'hide image dog_maskless',
		'show image dead_dog center', 
		'show image gun bottom',
		'wait 1000',
		'hide image gun',
		// 5
		'Sorry for about dog, sir.',
		'hide image dead_dog with fadeOut',
		'That was weird...',
		'Maybe I\'m just tired.',
		'Let\'s get home.',
		'jump Immeuble'
	],

	'Immeuble' : [
		// avant 6
		'show background Entree_0 with fadeIn',
		'Home sweet home.',
		// 6
		'show background Entree_1',
		'Hello, Mrs. Jenkins',
		// 7
		'show background Entree_2',
		'Oh, you know, as usual. Well, I\'m gonna go.',
		'jump Ascenseur'
	],

	'Ascenseur' : [
		// 8
		'show background Elevator_outside',
		'I live on the third floor',
		// 9
		'show background Elevator_closed',
		'show background Elevator_closed with shake-horizontal 1',
		'First floor',
		'wait 1000',
		'show background Elevator_closed with shake-horizontal 1',
		'Second floor',
		'show background Elevator_closed with shake-horizontal 1',
		'wait 1000',
		'third fl... Wait what was that ?!',
		{
			'Choice': {
				'Dialog': '',
				'f3': {
					'Text': 'My brain is tricking me...',
					'Do': 'jump Home'
				},
				'f2': {
					'Text': 'I need to get this',
					'Do': 'jump Floor2'
				}
			}
		}
	],

	'Floor2' : [
		// 10
		'show background floor with fadeIn',
		// 11
		'wait 1000',
		'm They\'re coming!!',
		'!!',
		'show image afraid_man center',
		// 12
		'show image gun bottom',
		'wait 1000',
		'hide image afraid_man',
		'show image dead_man center', 
		'show image gun bottom',
		'wait 1000',
		'hide image gun',
		// 13
		'Who knows... He may have been one of them.',
		'Anyway, he was dangerous.',
		'jump Home'
	],

	'Home' : [
		// 14
		'Darling, I\'m home!',
		// 15
		"d Oh, hello honey ! how was your day ?",
		"Exhausting.",
		"Strange things keep happening, and...",
		"I had this weird feeling- ",
		"d Oh, let it go, don't think about this. You're home now.",
		"d Come eat something !",
		// 16
		"Wh... what is this ?",
		"d Oh, this little plant ! A man on on the streets was seeling them.",
		"d I think it's nice... And it was so cheap ! It warms the room, don't you think ?",
		"...",
		"... yeah.",
		// 17
		"d Oh, my ! I really wanted to make some hummus bus I forgot the chick peas !",
		"d Could you go buy some ?",
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

	'Floor2' : [
		'I am on the second floor',
		'jump credits'
	],	


	'credits' : [
		// TODO change music
		'show message credits',
		'end'
	]
});