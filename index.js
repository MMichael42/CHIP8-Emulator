console.log('index');
import CPU from '/js/cpu.js';
import Renderer from '/js/renderer.js';

const canvas = document.getElementById('screen');
const buttonLoad = document.getElementById('reset');

const test = '/roms/test.ch8';
const pong = '/roms/pong1.ch8';
const pong2 = '/roms/pong2.ch8';
const stars = '/roms/stars.ch8';
const tetris = '/roms/tetris.ch8';
const maze = '/roms/maze.ch8';
const blinky = '/roms/blinky.ch8';
const invaders = '/roms/invaders.ch8';
const ufo = '/roms/ufo.ch8';
const ibm = '/roms/IBM.ch8';
const tron = '/roms/TRON.ch8';
const landing = '/roms/LANDING.ch8';

const gameArray = [
  'test.ch8', 
  'pong1.ch8', 
  'pong2.ch8', 
  'stars.ch8', 
  'maze.ch8', 
  'blinky.ch8', 
  'invaders.ch8', 
  'ufo.ch8',
  'TRON.ch8',
  'LANDING.ch8'
];

async function loadFile(fileDirStr) {
  let response = await fetch(fileDirStr);
  let data = await response.arrayBuffer();
  return data;
}

buttonLoad.addEventListener('click', event => {
  // console.log(event);

  const selectEleValue = document.getElementById('selectGame').selectedIndex - 1;
  console.log(selectEleValue);
  // canvas.style.width = "400px";
  const selectedGame = '/roms/' + gameArray[selectEleValue];

  loadFile(selectedGame).then( data => {
    console.log('rom loaded');
    let cpu = new CPU();
    const renderer = new Renderer(canvas, 10);
    
    cpu.setRenderer(renderer);
    cpu.init();
    cpu.loadROM(new Uint8Array(data));
    cpu.run();
  });

});



