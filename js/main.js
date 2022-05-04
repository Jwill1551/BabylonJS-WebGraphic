/// <reference path='./vendor/babylon.d.ts' />

// Get our canvas 
const canvas = document.getElementById('renderCanvas');

// Create a BabylonJS engine 
const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    // Create a scene 
    const scene = new BABYLON.Scene(engine);

    // Create a camera 
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);
    camera.attachControl(canvas, true);

    // Create a light 
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

    // Create a box
    const box = BABYLON.MeshBuilder.CreateBox('box', {
        size: 1
    }, scene);
    box.rotation.x = 2;
    box.rotation.y = 3;

    // create a sphere 
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        segments: 32,
        diameter: 2,
    }, scene);
    sphere.position = new BABYLON.Vector3(3, 0, 0);

    // Create a plane 
    const plane = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
    plane.position = new BABYLON.Vector3(-3, 0, 0);

    // Create a line
    const points = [
        new BABYLON.Vector3(2, 0, 0),
        new BABYLON.Vector3(2, 1, 1),
        new BABYLON.Vector3(2, 1, 0),
    ];

    const lines = BABYLON.MeshBuilder.CreateLines('lines', {
        points,
    }, scene)

    // Create a material 
    const material = new BABYLON.StandardMaterial('material', scene);
    material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    material.emissiveColor = new BABYLON.Color3(0, 0, 0);
    box.material = material;

    const material2 = new BABYLON.StandardMaterial('material2', scene)
    material2.diffuseTexture = new BABYLON.Texture('assets/images/dark_rock.png', scene);
    sphere.material = material2;

    return scene;
}

const mainScene = createScene();

// Renders the scene
engine.runRenderLoop(() => {
    mainScene.render();
});