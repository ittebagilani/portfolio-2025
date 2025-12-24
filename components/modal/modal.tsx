"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: any) {
  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current)
      return;

    const xContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3.out",
    });
    const yContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3.out",
    });

    const xCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3.out",
    });
    const yCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3.out",
    });

    const xLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3.out",
    });
    const yLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      xContainer(e.clientX);
      yContainer(e.clientY);
      xCursor(e.clientX);
      yCursor(e.clientY);
      xLabel(e.clientX);
      yLabel(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* IMAGE MODAL */}
      <motion.div
        ref={modalContainer}
        className={styles.modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div
          style={{ top: index * -100 + "%" }}
          className={styles.modalSlider}
        >
          {projects.map((project: any, i: number) => (
            <div
              key={i}
              className={styles.modal}
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={`/images/${project.src}`}
                width={300}
                height={0}
                alt=""
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* CURSOR DOT */}
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />

      {/* CURSOR LABEL */}
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
