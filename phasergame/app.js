var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var score = 0;
var life = 3;

function preload(){
  game.load.image('sky', 'assets/sky.png')
  game.load.image('ground', 'assets/platform.png')
  game.load.image('star', 'assets/star.png')
  game.load.spritesheet('dude', 'assets/dude.png')
  game.load.spritesheet('baddie', 'assets/baddie.png')
}

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // Add the sky background
  game.add.sprite(0,0,'sky');
  // Making group of platforms with same physics attributes
  platforms = game.add.physicsGroup();
  platforms.enableBody = true;
  // Ground
  var ground = platforms.create(0, game.world.height - 50, 'ground');
  ground.scale.setTo(2,2);
  ground.body.immovable = true;
  // Ledges
  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;
  ledge = platforms.create(-150, 250, 'ground');
  ledge.body.immovable = true;

  // Player
  player = game.add.sprite(32, game.world.height - 220, 'dude')
  // creating animations for player sprite
  player.animations.add('left', [0,1,2,3], 10, true);
  player.animations.add('right', [5,6,7,8], 10, true);
  // applying physics to player sprite
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  // Enemies
  enemy1 = game.add.sprite(760, 20, 'baddie');
  // creating animations for enemy1
  enemy1.animations.add('left', [0,1], 10, true)
  enemy1.animations.add('right', [2,3], 10, true)
  // apply physics to the enemy
  game.physics.arcade.enable(enemy1);
  enemy1.body.bounce.y = 0.2;
  enemy1.body.gravity.y = 500;
  enemy1.body.collideWorldBounds = true;

  enemy2 = game.add.sprite(10, 20, 'baddie');
  // creating animations for enemy2
  enemy2.animations.add('left', [0,1], 10, true)
  enemy2.animations.add('right', [2,3], 10, true)
  // apply physics to the enemy
  game.physics.arcade.enable(enemy2);
  enemy2.body.bounce.y = 0.2;
  enemy2.body.gravity.y = 500;
  enemy2.body.collideWorldBounds = true;

  enemy3 = game.add.sprite(200, 20, 'baddie');
  // creating animations for enemy3
  enemy3.animations.add('left', [0,1], 10, true)
  enemy3.animations.add('right', [2,3], 10, true)
  // apply physics to the enemy
  game.physics.arcade.enable(enemy3);
  enemy3.body.bounce.y = 0.2;
  enemy3.body.gravity.y = 500;
  enemy3.body.collideWorldBounds = true;

  // Create keyboard entry
  cursors = game.input.keyboard.createCursorKeys();

  // Create stars
  stars = game.add.physicsGroup();
  stars.enableBody = true;
  // create 12 stars with a loop
  for (var i = 0; i < 12; i++){
    var star = stars.create(i * 70, 0, 'star');
    star.body.gravity.y = 200;
    star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }
}


  // Setting style for text
  var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    //  The Text is positioned at these coordinates within textbound
    scorelabel = game.add.text(-60, 0, "Your score is: ", style);
    scoretext = game.add.text(70, 0, score, style);
    scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    scoretext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //  We'll set the bounds to be from x0, y520 (top down) and be 800px wide by 100px high
    scorelabel.setTextBounds(0, 520, 800, 100);
    scoretext.setTextBounds(0, 520, 800, 100);
    //  Doing the same for lives count
    lifelabel = game.add.text(-300, 0, "Lives: ", style);
    lifetext = game.add.text(-240, 0, life, style);
    lifelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    lifetext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //  We'll set the bounds to be from x0, y520 (top down) and be 800px wide by 100px high
    lifelabel.setTextBounds(0, 0, 800, 100);
    lifetext.setTextBounds(0, 0, 800, 100);
}

function update() {
  // Collide the player and the stars with the platforms
  game.physics.arcade.collide(player, platforms);
  // Collide the enemies and the stars with the platforms
  game.physics.arcade.collide(enemy1, platforms);
  game.physics.arcade.collide(enemy2, platforms);
  game.physics.arcade.collide(enemy3, platforms);
  // Reset the player’s velocity (movement) if no events
  player.body.velocity.x = 0;

  // Left key pressed
  if (cursors.left.isDown){
        // Move to the left
        player.body.velocity.x = -150;
        // Play animation
        player.animations.play('left');
    } else if (cursors.right.isDown) {
      	player.body.velocity.x = 150;
      	player.animations.play('right');
  	} else {
      //  Stand still
      player.animations.stop();
      player.frame = 4;
    }
  //  Allow the player to jump if they are touching the ground.
  if (cursors.up.isDown && player.body.touching.down){
    player.body.velocity.y = -300;
  }

  //Enemy AI
  if (enemy1.x > 759){
    enemy1.animations.play('left');
    enemy1.body.velocity.x = -120;
  } else if (enemy1.x < 405) {
    enemy1.animations.play('right')
    enemy1.body.velocity.x = 120
  }

  if (enemy2.x > 200){
    enemy2.animations.play('left');
    enemy2.body.velocity.x = -80;
  } else if (enemy2.x < 21) {
    enemy2.animations.play('right')
    enemy2.body.velocity.x = 80
  }

  if (enemy3.x > 759){
    enemy3.animations.play('left');
    enemy3.body.velocity.x = -150;
  } else if (enemy3.x < 201) {
    enemy3.animations.play('right')
    enemy3.body.velocity.x = 150
  }

  // Collision with stars
  game.physics.arcade.collide(stars, platforms);
  // Call collectStar function when we overlap with a star sprite
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  // Player triggers loseLife when they make contact with enemies
  game.physics.arcade.overlap(player, enemy1, loseLife, null, this);
  game.physics.arcade.overlap(player, enemy2, loseLifeLeft, null, this);
  game.physics.arcade.overlap(player, enemy3, loseLife, null, this);
}

// Define the collectStar function
function collectStar(player, star){
  // Remove the star from the screen
  star.kill()
  // Update the score variable
  score = score + 1;
  // The score is reflected in the text
  scoretext.setText(score);
  // Create a new star
  star = stars.create(Math.floor(Math.random() * 750), 0, 'star');
  star.body.gravity.y = 200;
  star.body.bounce.y = 0.7 + Math.random() * 0.2;
}

// Define the loseLife function
function loseLife(player, enemy){
  enemy.kill();
  life = life - 1;
  lifetext.setText(life);
  enemy.reset(760, 20);
}

function loseLifeLeft(player, enemy){
  enemy.kill();
  life = life - 1;
  lifetext.setText(life);
  enemy.reset(10, 20);
}


//
