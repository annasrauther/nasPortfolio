"use client"
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor Component
 *
 * This component represents a custom cursor that follows the user's mouse movement.
 * It uses Framer Motion for animations.
 *
 * @component
 * @returns {JSX.Element | null} The Cursor component JSX element or null if on a touch device.
 */
const Cursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Create motion values for cursor position (initially set to (-100, -100))
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Configuration for the spring animation
  const springConfig = { damping: 25, stiffness: 300 };

  // Create spring animations for cursor X and Y positions
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Effect to update cursor position on mouse movement
  useEffect(() => {
    /**
     * Event handler for mouse movement.
     * @param {MouseEvent} e - The MouseEvent object containing mouse-related data.
     */
    const moveCursor = (e: MouseEvent) => {
      // Update cursor position with an offset of 16px (assuming cursor element size is 32x32)
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const checkIsTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };

    // Check if the device is a touch device on component mount
    checkIsTouchDevice();

    const handleResize = () => {
      checkIsTouchDevice();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return null if on a touch device to prevent rendering the Cursor component
  if (isTouchDevice) return null;

  // Render the custom cursor using Framer Motion's motion.div component
  return (
    <motion.div
      className="cursor"
      role="presentation"
      style={{
        // Apply the spring animations to the cursor's translateX and translateY properties
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
