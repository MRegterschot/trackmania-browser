import { createRoot } from "react-dom/client";
import { Scene } from "./Scene";
import { Canvas } from "@react-three/fiber";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <Canvas>
    <Scene />
  </Canvas>
);
