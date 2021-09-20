export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('GameScene')
	}

    preload()
    {
        this.load.image('logo', 'assets/logo.png')
    }

    create()
    {
       this.physics.add.image(640, 360, 'logo')
            .setCollideWorldBounds()
            .setBounce(0.5)
    }

    update()
    {
    }

}
