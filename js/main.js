const game = new Phaser.Game(640, 360, Phaser.AUTO);

const GameState = {
	//load the game assets before the game starts.
	preload: function() {
		
	},

	//executed after everything is loaded
	create: function() {

	},
	//this is executed during game loop
	update: function() {

	},


};

game.state.add('GameState', GameState);
game.state.start('GameState');