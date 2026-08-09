import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Cursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #63e;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease;
`;

const CursorFollower = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid #63e;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
`;

const glitterAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
`;

const Glitter = styled.div`
  position: fixed;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #fff;
  pointer-events: none;
  animation: ${glitterAnimation} 1s infinite;
  z-index: 9997;
`;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [glitters, setGlitters] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleHover = () => {
      const hoverables = document.querySelectorAll("a, button, [data-cursor-hover]");
      hoverables.forEach(el => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    const createGlitter = (e) => {
      const glitter = {
        x: e.clientX + (Math.random() * 20 - 10), // Random offset
        y: e.clientY + (Math.random() * 20 - 10), // Random offset
        id: Math.random() // Unique ID for each glitter
      };
      setGlitters((prev) => [...prev, glitter]);
      setTimeout(() => {
        setGlitters((prev) => prev.filter(g => g.id !== glitter.id)); // Remove glitter after some time
      }, 1000); // Duration of glitter visibility
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", createGlitter);
    handleHover();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", createGlitter);
    };
  }, []);

  return (
    <>
      <Cursor style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
      }} />
      <CursorFollower style={{
        left: `${followerPosition.x}px`,
        top: `${followerPosition.y}px`,
        width: isHovering ? "30px" : "40px",
        height: isHovering ? "30px" : "40px"
      }} />
      {glitters.map((glitter) => (
        < Glitter key={glitter.id} style={{
          left: `${glitter.x}px`,
          top: `${glitter.y}px`,
          animationDelay: `${Math.random() * 500}ms` // Random delay for each glitter
        }} />
      ))}
    </>
  );
}