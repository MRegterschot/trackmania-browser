import { Html } from "@react-three/drei";

export function Loader() {
  return (
    <Html center>
      <div className="loader">
        <div className="lds-dual-ring"></div>
      </div>
    </Html>
  );
}