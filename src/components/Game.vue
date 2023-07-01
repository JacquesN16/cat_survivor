<template>
  <div ref="gameContainer"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Phaser from 'phaser';

export default {
  setup() {
    const gameContainer = ref(null);
    let game = null;

    onMounted(() => {
      game = new Phaser.Game({
        width: '100%',
        height: '100%',
        type: Phaser.AUTO,
        parent: gameContainer.value,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor('#24252A');
          },
          create() {
            this.helloWorld = this.add.text(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                'Hello World',
                { font: '40px Arial', fill: '#ffffff' }
            );
            this.helloWorld.setOrigin(0.5);
          },
          update() {
            this.helloWorld.angle += 1;
          },
        },
      });
    });

    return {
      gameContainer,
    };
  },
};
</script>

<style>
#gameContainer {
  width: 100%;
  height: 100%;
}
</style>