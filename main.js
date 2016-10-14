//Initiate Phaser Framework
var game = new Phaser.Game(640, 360, Phaser.canvas);
var cursors;

var GameState = {
    //Load game assets before the game starts
    preload: function(){
        this.load.image('background', 'desert.png');
        this.load.image('character', 'stickman.png');
    },
    
    //Executed after everything is loaded
    create: function(){
        this.background = this.game.add.sprite(0,0, 'background');
        
        game.physics.startSystem(Phaser.Physics.P2JS);
        
        this.character = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY, 'character');
        this.character.anchor.setTo(0.5,0.5);
        this.character.scale.setTo(0.05,0.05);
        
//        this.game.physics.P2JS.enable(this.character);
        
        cursors = game.input.keyboard.createCursorKeys();
        
    },
    //This is executed each frame
    update: function(){
//        this.character.body.setZeroVelocity();
        if (cursors.left.isDown)
        {
            this.character.body.moveLeft(400);
        }
    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');