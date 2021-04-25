import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Layer } from "./layer.js";
import { getSeasonTextures } from "./texturePicker.js";
import { seasonArray }  from "./SeasonsArray.js";

export function AnimationLandingPage() {
    const glParams = {
        antialias: false,
        stencil: false,
        alpha: true,
        depth: false
    };

    const cameraParams = {
        zoom: 5,
        position: [0, 0, 200],
        far: 300,
        near: 1
    };

    const textures = getSeasonTextures(seasonArray[0]);

    return (
        <Canvas linear orthographic gl={glParams} camera={cameraParams}>
            <Suspense fallback={null}>
            <Layer key={0} z={0} texture={textures[0]} factor={0} />
            <Layer key={1} z={10} texture={textures[1]} factor={0.5} />
            <Layer key={2} z={20} texture={textures[2]} factor={0.7} />
            <Layer key={3} z={30} texture={textures[3]} factor={0.4} />
            <Layer key={4} z={40} texture={textures[4]} factor={0} />
            </Suspense>
        </Canvas>
    );
}
