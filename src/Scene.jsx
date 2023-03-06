import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

export function Scene() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Environment background={'both'} files={process.env.PUBLIC_URL + "/textures/sky-env.hdr"} />

      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      <OrbitControls target={[0, 0, 0]}/>
    </Suspense>
  );
}