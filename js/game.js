var game = new Phaser.Game(800, 600, Phaser.AUTO, 'bricks', { preload: preload, create: create, update: update });

var s;

function preload() {
    game.load.image('brick', 'assets/tiles/brick.png');
}

function create() {
    s = game.add.tileSprite(0, 0, 10, 20, 'brick');
}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        s.tilePosition.x += 8;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        s.tilePosition.x -= 8;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        s.tilePosition.y += 8;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        s.tilePosition.y -= 8;
    }

}