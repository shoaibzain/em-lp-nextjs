"use client"
import React, { useState, useEffect, useCallback } from "react";

// This functional component represents a custom cursor with a flare effect.
function CustomCursor() {
  // State to track the current cursor position (x, y coordinates).
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);

  // State to track whether the cursor is over a form element.
  const [isInput, setIsInput] = useState(false);

  // Debounce function
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleMouseMove = useCallback((e) => {
    // Update the cursor position based on the mouse coordinates.
    setPosition({ x: e.clientX, y: e.clientY });

    // Get the target element that the cursor is currently over.
    const target = e.target;
    const computedStyle = window.getComputedStyle(target);

    // Check if the cursor is over a clickable element by inspecting the cursor style.
    const isClickable = computedStyle.getPropertyValue("cursor") === "pointer";

    // Check if the cursor is over a form element by inspecting the tag name of the target element.
    const isFormElement =
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT" ||
      target.tagName === "BUTTON";

    setIsPointer(isClickable);
    setIsInput(isFormElement);
  }, []); // 5ms debounce time for smoother cursor movement

  // Set up an effect to add and remove the mousemove event listener.
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]); // The empty dependency array ensures that this effect runs only once on mount.

  // Adjust the flare size based on whether the cursor is over a clickable element or a form element.
  const getFlareSize = () => {
    if (isPointer) return 0;
    if (isInput) return 15;
    return 30;
  };

  const flareSize = getFlareSize();

  // Adjust the cursor position to create a visual effect when over a clickable element.
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  // Render the custom cursor element with dynamic styles based on cursor state.
  return (
    <div
      className={`hidden sm:block flare ${isPointer ? "pointer" : ""} ${
        isInput ? "input-cursor" : ""
      }`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
        transition:
          "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out",
        backgroundColor: isInput ? "rgba(226, 20, 104, 0.2)" : "transparent",
      }}
    ></div>
  );
}

// Export the FlareCursor component to be used in other parts of the application.
export default CustomCursor;