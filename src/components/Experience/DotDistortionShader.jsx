import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Dots = ({
    gap = 0.25,
    dotSize = 0.04,
    repulsionRadius = 1.8, // Reduced for a smaller "circle"
    distortionStrength = 1.0,
    returnSpeed = 0.1,
    dotColor = "#ffffff",
}) => {
    const { viewport } = useThree();
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Create grid based on viewport size
    const { positions, initialPositions, colors } = useMemo(() => {
        const cols = Math.ceil(viewport.width / gap) + 12;
        const rows = Math.ceil(viewport.height / gap) + 12;
        const count = cols * rows;

        const pos = new Float32Array(count * 3);
        const initialPos = new Float32Array(count * 3);
        const colsArr = new Float32Array(count * 3);
        const colorObj = new THREE.Color(dotColor);

        let i = 0;
        for (let x = 0; x < cols; x++) {
            for (let y = 0; y < rows; y++) {
                const px = (x - cols / 2) * gap;
                const py = (y - rows / 2) * gap;
                const pz = 0;

                pos[i * 3] = px;
                pos[i * 3 + 1] = py;
                pos[i * 3 + 2] = pz;

                initialPos[i * 3] = px;
                initialPos[i * 3 + 1] = py;
                initialPos[i * 3 + 2] = pz;

                colsArr[i * 3] = colorObj.r;
                colsArr[i * 3 + 1] = colorObj.g;
                colsArr[i * 3 + 2] = colorObj.b;
                i++;
            }
        }
        return { positions: pos, initialPositions: initialPos, colors: colsArr };
    }, [viewport, gap, dotColor]);

    useFrame(() => {
        if (!meshRef.current) return;
        const attr = meshRef.current.geometry.attributes.position;

        // Use the reliable global mouse coordinates
        const mx = (mouseRef.current.x * viewport.width) / 2;
        const my = (mouseRef.current.y * viewport.height) / 2;

        for (let i = 0; i < attr.count; i++) {
            const ix = initialPositions[i * 3];
            const iy = initialPositions[i * 3 + 1];
            const cx = attr.getX(i);
            const cy = attr.getY(i);

            const dx = mx - cx;
            const dy = my - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < repulsionRadius) {
                // Quadratic falloff for smoother movement
                const force = Math.pow(1 - dist / repulsionRadius, 2);
                const angle = Math.atan2(dy, dx);

                // Push dots away from the mouse
                const targetX = ix - Math.cos(angle) * force * distortionStrength * 2.5;
                const targetY = iy - Math.sin(angle) * force * distortionStrength * 2.5;

                // Linear interpolation for smooth movement
                attr.setXY(
                    i,
                    cx + (targetX - cx) * 0.2,
                    cy + (targetY - cy) * 0.2
                );
            } else {
                // Spring back to initial position smoothly
                attr.setXY(
                    i,
                    cx + (ix - cx) * returnSpeed,
                    cy + (iy - cy) * returnSpeed
                );
            }
        }
        attr.needsUpdate = true;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={dotSize}
                vertexColors
                transparent
                opacity={0.5}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const DotDistortionShader = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                background: "#000",
                pointerEvents: "none",
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: false, depth: false, stencil: false, alpha: false }}
                dpr={[1, 2]}
            >
                <Dots />
            </Canvas>
        </div>
    );
};

export default DotDistortionShader;
