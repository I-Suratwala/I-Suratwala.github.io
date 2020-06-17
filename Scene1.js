class Scene1 extends Phaser.scene {
  constructor() {
    super("bootGame")
  }
  preload() {

  }
  create() {
    this.add.text(20,20,"LOADING...");
    this.scene.start("playGame");
  }
  update() {

  }
}
