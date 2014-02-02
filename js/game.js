var game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'tube-station', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('station-tiles', 'assets/tube-station/tube_station.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tileset('station-wall', 'assets/tube-station/tiles/brick.png', 64, 64, -1, 0, 0);
    game.load.tileset('station-platform', 'assets/tube-station/tiles/platform.png', 64, 64, -1, 0, 0);
    game.load.image('man', 'assets/sprites/man.png');

}

var map;
var tileset;
var bricklayer;
var platformlayer;

var cursors;
var sprite;

function create() {

    stationMap = game.add.tilemap('station-tiles');

    stationWallTileset = game.add.tileset('station-wall');
    stationPlatformTileset = game.add.tileset('station-platform');
    
    stationWalllayer = game.add.tilemapLayer(0, 0, 1024, 768, stationWallTileset, stationMap, 0);
    stationPlatformLayer = game.add.tilemapLayer(0, 0, 1024, 768, stationPlatformTileset, stationMap, 1);

}

function update() {}

function render() {}