import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

export function Scene() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      <OrbitControls target={[0, 0, 0]}/>
    </Suspense>
  )
}