import { Scene } from 'phaser';
import { Player, PlayerDirection } from '../gameObjects/Player';

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
            this.player.move(PlayerDirection.Up);
        }

        if(this.cursors?.down.isDown){
            this.player.move(PlayerDirection.Down);
        }

        if(this.cursors?.left.isDown){
            this.player.move(PlayerDirection.Left);
        }

        if(this.cursors?.right.isDown){
            this.player.move(PlayerDirection.Right);
        }        

        this.player.update();

    }
}
