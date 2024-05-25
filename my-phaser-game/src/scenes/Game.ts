import { Scene } from 'phaser';
import { Player } from '../gameObjects/Player';

export class Game extends Scene
{
    player: Player
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');
        this.load.image('player','/PNG/playerShip1_orange.png')
    }

    create ()
    {
        this.player = new Player(this);
        this.add.image(512, 384, 'background');
    }
}
