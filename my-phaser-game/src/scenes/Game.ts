import { Scene } from 'phaser';
import { Player } from '../gameObjects/Player';

export class Game extends Scene
{
    player: Player
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        //this.load.image('background', 'bg.png');
        this.load.image('player','/PNG/playerShip1_orange.png')
    }

    create ()
    {
        // setup input ...
        this.cursors = this.input.keyboard?.createCursorKeys();        
        this.player = new Player(this);
    }

    update(){
        //console.log(Math.random())
        if(this.cursors?.up.isDown){
            this.player.move('up');
        }

        if(this.cursors?.down.isDown){
            this.player.move('down');
        }

        this.player.update();

    }
}
