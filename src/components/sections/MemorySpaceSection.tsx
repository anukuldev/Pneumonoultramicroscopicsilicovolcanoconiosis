import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { birthdayConfig } from "@/config/birthdayConfig";

/* =========================================================
   LUXURY PALETTE
========================================================= */

const BLACK = "#090809";
const GOLD = "#d8b58a";
const GOLD_LIGHT = "#ead5b7";
const IVORY = "#f8f1ea";
const ROSE = "#a97980";

/* =========================================================
   LUXURY PHOTO
========================================================= */

function LuxuryPhoto({
  url,
  position,
  rotation,
  scale,
  index,
}: {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  index: number;
}) {
  const group = useRef<THREE.Group>(null);

  const [hovered, setHovered] = useState(false);

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const image = loader.load(url);

    image.colorSpace = THREE.SRGBColorSpace;
    image.anisotropy = 8;

    return image;
  }, [url]);

  const phase = useMemo(
    () => index * 0.73 + Math.random() * 0.5,
    [index]
  );

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    /*
      Extremely subtle movement.
      Luxury design should feel calm,
      not animated like a game.
    */

    group.current.position.y =
      position[1] +
      Math.sin(time * 0.28 + phase) * 0.11;

    group.current.position.x =
      position[0] +
      Math.cos(time * 0.21 + phase) * 0.06;

    group.current.rotation.y =
      rotation[1] +
      Math.sin(time * 0.17 + phase) * 0.025;

    group.current.rotation.z =
      rotation[2] +
      Math.cos(time * 0.14 + phase) * 0.018;

    const target =
      hovered ? scale * 1.045 : scale;

    const current = group.current.scale.x;

    const next = THREE.MathUtils.lerp(
      current,
      target,
      0.07
    );

    group.current.scale.setScalar(next);
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* -----------------------------------------------
          DEEP SHADOW
      ------------------------------------------------ */}

      <mesh position={[0, -0.02, -0.08]}>
        <planeGeometry args={[2.76, 2.02]} />

        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.72}
        />
      </mesh>

      {/* -----------------------------------------------
          OUTER GOLD FRAME
      ------------------------------------------------ */}

      <mesh>
        <planeGeometry args={[2.58, 1.84]} />

        <meshBasicMaterial color={GOLD} />
      </mesh>

      {/* -----------------------------------------------
          BLACK MAT
      ------------------------------------------------ */}

      <mesh position={[0, 0, 0.018]}>
        <planeGeometry args={[2.48, 1.74]} />

        <meshBasicMaterial color="#0c0a0b" />
      </mesh>

      {/* -----------------------------------------------
          PHOTO
      ------------------------------------------------ */}

      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[2.34, 1.60]} />

        <meshBasicMaterial
          map={texture}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* -----------------------------------------------
          VERY SUBTLE GLASS
      ------------------------------------------------ */}

      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[2.34, 1.60]} />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={hovered ? 0.055 : 0.008}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* -----------------------------------------------
          TINY GOLD DETAIL
      ------------------------------------------------ */}

      <mesh position={[-1.17, 0.80, 0.08]}>
        <circleGeometry args={[0.018, 16]} />

        <meshBasicMaterial
          color={GOLD_LIGHT}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   SOFT GOLD DUST
========================================================= */

function GoldDust() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 420;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] =
        (Math.random() - 0.5) * 25;

      array[i * 3 + 1] =
        (Math.random() - 0.5) * 16;

      array[i * 3 + 2] =
        (Math.random() - 0.5) * 22 - 4;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * 0.002;

    points.current.position.y =
      Math.sin(
        state.clock.elapsedTime * 0.08
      ) * 0.08;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color={GOLD_LIGHT}
        size={0.025}
        transparent
        opacity={0.38}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================================================
   AMBIENT LIGHT
========================================================= */

function AmbientLight() {
  const left = useRef<THREE.Mesh>(null);
  const right = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (left.current) {
      left.current.material.opacity =
        0.035 +
        Math.sin(t * 0.16) * 0.006;
    }

    if (right.current) {
      right.current.material.opacity =
        0.025 +
        Math.cos(t * 0.13) * 0.005;
    }
  });

  return (
    <>
      {/* Warm champagne light */}

      <mesh
        ref={left}
        position={[-7, 1, -10]}
      >
        <circleGeometry args={[7, 64]} />

        <meshBasicMaterial
          color="#d8a77c"
          transparent
          opacity={0.035}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Very subtle rose warmth */}

      <mesh
        ref={right}
        position={[7, -1, -12]}
      >
        <circleGeometry args={[8, 64]} />

        <meshBasicMaterial
          color={ROSE}
          transparent
          opacity={0.025}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

/* =========================================================
   CAMERA
========================================================= */

function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    const targetX =
      Math.sin(t * 0.045) * 0.42;

    const targetY =
      Math.cos(t * 0.035) * 0.25;

    state.camera.position.x =
      THREE.MathUtils.lerp(
        state.camera.position.x,
        targetX,
        0.018
      );

    state.camera.position.y =
      THREE.MathUtils.lerp(
        state.camera.position.y,
        targetY,
        0.018
      );

    state.camera.position.z =
      THREE.MathUtils.lerp(
        state.camera.position.z,
        8.6,
        0.02
      );

    state.camera.lookAt(
      0,
      0,
      -1.5
    );
  });

  return null;
}

/* =========================================================
   SCENE
========================================================= */

function Scene() {
  const photos = birthdayConfig.memories;

  /*
    Editorial composition.

    The center remains intentionally empty.
    Photos surround the message like
    framed memories in a private gallery.
  */

  const photoLayout = useMemo(() => {
    const layouts = [
      {
        position: [-5.4, 2.15, -1.8] as [
          number,
          number,
          number
        ],
        rotation: [0.02, 0.34, -0.06] as [
          number,
          number,
          number
        ],
        scale: 0.82,
      },

      {
        position: [5.1, 2.45, -2.6] as [
          number,
          number,
          number
        ],
        rotation: [-0.02, -0.3, 0.055] as [
          number,
          number,
          number
        ],
        scale: 0.95,
      },

      {
        position: [-5.8, -1.8, -0.8] as [
          number,
          number,
          number
        ],
        rotation: [0.02, 0.3, 0.07] as [
          number,
          number,
          number
        ],
        scale: 0.74,
      },

      {
        position: [5.55, -1.75, -1.4] as [
          number,
          number,
          number
        ],
        rotation: [-0.02, -0.35, -0.055] as [
          number,
          number,
          number
        ],
        scale: 0.78,
      },

      {
        position: [-2.8, 4.0, -4.7] as [
          number,
          number,
          number
        ],
        rotation: [0.03, 0.17, -0.045] as [
          number,
          number,
          number
        ],
        scale: 0.58,
      },

      {
        position: [2.7, 3.85, -4.9] as [
          number,
          number,
          number
        ],
        rotation: [-0.03, -0.16, 0.045] as [
          number,
          number,
          number
        ],
        scale: 0.62,
      },

      {
        position: [-2.9, -3.35, -4.4] as [
          number,
          number,
          number
        ],
        rotation: [-0.02, 0.18, 0.05] as [
          number,
          number,
          number
        ],
        scale: 0.60,
      },

      {
        position: [3.0, -3.25, -4.6] as [
          number,
          number,
          number
        ],
        rotation: [0.02, -0.2, -0.045] as [
          number,
          number,
          number
        ],
        scale: 0.64,
      },
    ];

    return photos.map((_, index) => {
      return (
        layouts[index] ?? {
          position: [
            Math.cos(index) * 5,
            Math.sin(index) * 2.5,
            -3,
          ] as [
            number,
            number,
            number
          ],
          rotation: [0, 0, 0] as [
            number,
            number,
            number
          ],
          scale: 0.65,
        }
      );
    });
  }, [photos]);

  return (
    <>
      {/* -----------------------------------------------
          LIGHTING
      ------------------------------------------------ */}

      <ambientLight intensity={0.22} />

      <pointLight
        position={[0, 4, 5]}
        intensity={0.85}
        color="#f2d7b9"
      />

      <pointLight
        position={[-6, 0, 0]}
        intensity={0.28}
        color="#c48b72"
      />

      {/* -----------------------------------------------
          ATMOSPHERE
      ------------------------------------------------ */}

      <AmbientLight />

      <GoldDust />

      {/* -----------------------------------------------
          PHOTOGRAPHS
      ------------------------------------------------ */}

      {photos.map((photo, index) => (
        <LuxuryPhoto
          key={`${photo.image}-${index}`}
          url={photo.image}
          position={photoLayout[index].position}
          rotation={photoLayout[index].rotation}
          scale={photoLayout[index].scale}
          index={index}
        />
      ))}

      <CameraRig />
    </>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function MemorySpaceSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPhase(1);
    }, 3800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="memory-space"
      className="relative h-screen min-h-[650px] overflow-hidden bg-[#090809]"
    >
      {/* =================================================
          3D BACKGROUND
      ================================================= */}

      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 8.6],
            fov: 55,
          }}
          dpr={[1, 2]}
          gl={{
            alpha: false,
            antialias: true,
            powerPreference:
              "high-performance",
          }}
        >
          <color
            attach="background"
            args={[BLACK]}
          />

          <fog
            attach="fog"
            args={[
              BLACK,
              10,
              28,
            ]}
          />

          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* =================================================
          LUXURY VIGNETTE
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(9,8,9,0.22)_52%,rgba(5,4,5,0.82)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* =================================================
          CENTER TYPOGRAPHY
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-7">
        <div className="relative max-w-[650px] text-center">

          {/* subtle luxury light */}

          <div className="absolute left-1/2 top-1/2 h-72 w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b58a]/[0.025] blur-[100px]" />

          <div className="relative">

            {/* small decorative line */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 0.7,
                scaleX: 1,
              }}
              transition={{
                duration: 1.4,
                delay: 0.4,
              }}
              className="mx-auto mb-7 h-px w-12 bg-[#d8b58a]"
            />

            {/* message */}

            <AnimateText
              text={
                phase === 0
                  ? birthdayConfig.memorySpaceTitle
                  : birthdayConfig.memorySpaceMessage
              }
              visible
            />

            {/* tiny heart */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: phase === 1 ? 0.9 : 0,
                y: phase === 1 ? 0 : 8,
              }}
              transition={{
                duration: 1.2,
                delay: 0.35,
              }}
              className="mt-7 text-lg text-[#d8b58a]"
            >
              ♡
            </motion.div>

          </div>
        </div>
      </div>

      {/* =================================================
          TOP LABEL
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 0.7,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="pointer-events-none absolute left-1/2 top-9 z-10 -translate-x-1/2"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-[#d8b58a]/50" />

          <span className="text-[8px] font-medium uppercase tracking-[0.5em] text-[#ead5b7]/75">
            our memories
          </span>

          <span className="h-px w-7 bg-[#d8b58a]/50" />
        </div>
      </motion.div>

      {/* =================================================
          BOTTOM DETAIL
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.4,
        }}
        transition={{
          duration: 1.5,
          delay: 2.8,
        }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <p className="whitespace-nowrap text-[8px] uppercase tracking-[0.38em] text-[#f7eee8]/60">
          forever, beautifully remembered
        </p>
      </motion.div>
    </section>
  );
}

/* =========================================================
   TEXT
========================================================= */

function AnimateText({
  text,
  visible,
}: {
  text: string;
  visible: boolean;
}) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(7px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
        filter: visible
          ? "blur(0px)"
          : "blur(7px)",
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        max-w-[620px]
        font-light
        leading-[1.4]
        tracking-[0.015em]
        text-[#f8f1ea]
        drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]
        text-[1.55rem]
        sm:text-[2.15rem]
        md:text-[2.65rem]
      "
    >
      {text}
    </motion.p>
  );
}