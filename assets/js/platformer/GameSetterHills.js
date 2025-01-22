// GameSetHills.js Key objective is to define objects for a GameLevel
import BackgroundParallax from './BackgroundParallax.js';
import BackgroundTransitions from './BackgroundTransitions.js';
import Platform from './Platform.js';
import JumpPlatform from './PlatformJump.js';
import PlayerHills from './PlayerHills.js';
import Goomba from './EnemyGoomba.js';
import FlyingGoomba from './FlyingGoomba.js';
import Mushroom from './Mushroom.js';
import Coin from './Coin.js';
import FinishLine from './FinishLine.js';
import BlockPlatform from './BlockPlatform.js';

// Define the GameSetup object literal
const assets = {  
    obstacles: {
      tube: { src: "/images/platformer/obstacles/doorclosed.png",
      hitbox: { widthPercentage: 0.5, heightPercentage: 0.5},
      width: 52, //87
      height: 81, //125
      scaleSize: 100,
      },
      coin: { src: "/images/platformer/obstacles/coin.png" },
    },
    platforms: {
      grass: { src: "/images/platformer/platforms/grass.png" },
      bricks: { src: "/images/platformer/platforms/brick_wall.png" },
      block: { src: "/images/platformer/platforms/brick_block.png" }, 
      itemBlock: {
        src: "/images/platformer/sprites/key.png",
        sizeRatio: 83.2,
        widthRatio: 1.0,
        heightRatio: 1.0,
        width: 5952, // 204
        height: 6000, // 204
        scaleSize: 10, // 80
        speedRatio: 0.7,
        hitbox: { widthPercentage: 0.4, heightPercentage: -0.2 }
      },
    },
    backgrounds: {
      hills: { src: "/images/platformer/backgrounds/hills.png", parallaxSpeed: 0.4, moveOnKeyAction: true },
      mountains: { src: "/images/platformer/backgrounds/mountains.jpg", parallaxSpeed: 0.1, moveOnKeyAction: true },
      clouds: { src: "/images/platformer/backgrounds/clouds.png", parallaxSpeed: 0.5 },
    },
    transitions: {
      loading: { src: "/images/platformer/transitions/greenscreen.png" },
    },
    players: {
      mario: {
        src: "/images/platformer/sprites/mario.png",
        width: 256,
        height: 256,
        scaleSize: 80,
        speedRatio: 0.7,
        idle: {
          left: { row: 1, frames: 15 },
          right: { row: 0, frames: 15 },
        },
        walk: {
          left: { row: 3, frames: 7 },
          right: { row: 2, frames: 7 },
        },
        run: {
          left: { row: 5, frames: 15 },
          right: { row: 4, frames: 15 },
        },
        jump: {
          left: { row: 11, frames: 15 },
          right: { row: 10, frames: 15 },
        },
        hitbox: { widthPercentage: 0.3, heightPercentage: 0.8 }
      },
    },
    enemies: {
      goomba: {
        src: "/images/platformer/sprites/goomba.png",
        width: 448,
        height: 452,
        scaleSize: 60,
        speedRatio: 0.7,
        xPercentage: 0.6,
        hitbox: { widthPercentage: 0.0, heightPercentage: 0.2 }
      },
      flyingGoomba: {
        src: "/images/platformer/sprites/flying-goomba.png",
        width: 448,
        height: 452,
        scaleSize: 60,
        speedRatio: 0.7,
      },
      mushroom: {
        src: "/images/platformer/platforms/mushroom.png",
        width: 200,
        height: 180,
        hitbox: { widthPercentage: 0.0, heightPercentage: 0.2 }
      },
    }
  };

  // Hills Game Level defintion...
  const objects = [
    { name: 'mountains', id: 'background', class: BackgroundParallax, data: assets.backgrounds.mountains },
    { name: 'clouds', id: 'background', class: BackgroundParallax, data: assets.backgrounds.clouds },
    { name: 'hills', id: 'background', class: BackgroundParallax, data: assets.backgrounds.hills },
    { name: 'grass', id: 'floor', class: Platform, data: assets.platforms.grass },

    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.1, yPercentage: 1},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.2, yPercentage: 0.8 },
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.31, yPercentage: 0.75},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.35, yPercentage: 0.8},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.39, yPercentage: 0.8},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.43, yPercentage: 0.8},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.47, yPercentage: 0.8},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.51, yPercentage: 0.8},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.55, yPercentage: 0.75},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.35, yPercentage: 0.4},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.39, yPercentage: 0.4},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.43, yPercentage: 0.4},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.47, yPercentage: 0.4},
    { name: 'blocks', id: 'jumpPlatform', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.51, yPercentage: 0.4},
    { name: 'blocks', id: 'wall', class: BlockPlatform, data: assets.platforms.block, xPercentage: 0.69, yPercentage: 1 },
    { name: 'itemBlock', id: 'jumpPlatform', class: JumpPlatform, data: assets.platforms.itemBlock, xPercentage: 0.56, yPercentage: 0.8 }, //item block is a platform
    { name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.5, yPercentage: 1, minPosition: 0.05 },
    { name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.45, yPercentage: 0.35, minPosition: 0.05, difficulties: ["normal", "hard", "impossible"] },
    { name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.4, yPercentage: 1, minPosition: 0.05, difficulties: ["normal", "hard", "impossible"] },
    { name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.3, yPercentage: 1, minPosition: 0.05, difficulties: ["normal", "hard", "impossible"] },
    { name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.2, yPercentage: 1, minPosition: 0.05, difficulties: ["hard", "impossible"] },
    { name: 'goomba', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.1, yPercentage: 1, minPosition: 0.05, difficulties: ["impossible"] },
    { name: 'goombaSpecial', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.75, yPercentage: 1, minPosition: 0.5 }, // special name is used for random event 2 to make sure that only one of the Goombas ends the random event
    { name: 'goombaSpecial', id: 'goomba', class: Goomba, data: assets.enemies.goomba, xPercentage: 0.95, yPercentage: 1, minPosition: 0.5, difficulties: ["hard", "impossible"] }, //this special name is used for random event 2 to make sure that only one of the Goombas ends the random event
    { name: 'flyingGoomba', id: 'flyingGoomba', class: FlyingGoomba, data: assets.enemies.flyingGoomba, xPercentage: 0.9, minPosition: 0.5, difficulties: ["normal", "hard", "impossible"] },
    { name: 'flyingGoomba', id: 'flyingGoomba', class: FlyingGoomba, data: assets.enemies.flyingGoomba, xPercentage: 0.9, minPosition: 0.5, difficulties: ["hard", "impossible"] },
    { name: 'flyingGoomba', id: 'flyingGoomba', class: FlyingGoomba, data: assets.enemies.flyingGoomba, xPercentage: 0.9, minPosition: 0.5, difficulties: ["impossible"] },
    { name: 'mushroom', id: 'mushroom', class: Mushroom, data: assets.enemies.mushroom, xPercentage: 0.4, yPercentage: 0.65 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.09, yPercentage: 0.88 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.39, yPercentage: 0.6 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.45, yPercentage: 0.6 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.42, yPercentage: 0.6 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.39, yPercentage: 0.2 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.45, yPercentage: 0.2 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.42, yPercentage: 0.2 },
    { name: 'coin', id: 'coin', class: Coin, data: assets.obstacles.coin, xPercentage: 0.68, yPercentage: 0.88 },
    { name: 'mario', id: 'player', class: PlayerHills, data: assets.players.mario },
    { name: 'tube', id: 'finishline', class: FinishLine, data: assets.obstacles.tube, xPercentage: 0.85, yPercentage: 0.85 },
    { name: 'loading', id: 'background', class: BackgroundTransitions, data: assets.transitions.loading },
  ];

  const GameSetHills = {
    tag: 'Hills',
    assets: assets,
    objects: objects
  };

export default GameSetHills;