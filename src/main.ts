import {defineCustomElements as defineIonPhaser} from "@ion-phaser/core";
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

defineIonPhaser(window);

createApp(App).mount('#app')
