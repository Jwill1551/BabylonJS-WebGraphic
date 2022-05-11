/// <reference path='./vendor/babylon.d.ts' />

// Get our canvas 
const canvas = document.getElementById('renderCanvas');

// Create a BabylonJS engine 
const engine = new BABYLON.Engine(canvas, true);

// Create a camera 
function createCamera(scene) {
    const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 15, new BABYLON.Vector3.Zero(), scene);
    // Let user move our camera 
    camera.attachControl(canvas);

    // Limit Camera Movement
    camera.lowerRadiusLimit = 6;
    camera.lowerAlphaLimit = 20;
} 

// Create a Sun
function createSun(scene){
    const sun = new BABYLON.MeshBuilder.CreateSphere('sun', {segments: 16, diameter: 4}, scene);
}

function createScene() {
    // Create a scene 
    const scene = new BABYLON.Scene(engine);

    // Create a light 
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // Call create methods
    createCamera(scene);
    createSun(scene);

    return scene;
}

const mainScene = createScene();

// Renders the scene
engine.runRenderLoop(() => {
    mainScene.render();
});