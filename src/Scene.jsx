import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";

export function Scene() {
  return (
    <Suspense fallback={<Loader />}>
      <Environment background={'both'} files={process.env.PUBLIC_URL + "/textures/sky-env.hdr"} />

      <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={40} />
      <OrbitControls target={[0, 0, 0]} maxPolarAngle={Math.PI / 2}/>

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </Suspense>
  );
}