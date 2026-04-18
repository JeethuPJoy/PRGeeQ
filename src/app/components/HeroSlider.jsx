"use client";

import { useState, useEffect, useCallback } from "react";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    title: "Advanced Learning Record Store",
    description: "Capture and analyze all learning activities across multiple platforms with neuroLxp's LRS. Our platform ensures you have a comprehensive view of your learners’ progress and performance, enabling data-driven decisions.",
    accent: "#2D4CC8",
  },
  {
    id: 2,
    title: "Comprehensive Learning Management System",
    description: "Manage all your learning activities seamlessly with neuroLxp's robust LMS capabilities. From course creation to learner tracking, our platform provides all the tools you need to deliver effective education and training.",
    accent: "#2D4CC8",
  },
  {
    id: 3,
    title: "Personalized Learning Experience",
    description: "Enhance learner engagement with neuroLxp's LXP features. Our platform delivers personalized learning paths, tailored content, and interactive experiences to meet each learner's unique needs and preferences.",
    accent: "#2D4CC8",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 250);
  }, [animating, current]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length); 
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-icon-grid" aria-hidden="true" />

        <div className={`hero-content ${animating ? "hero-content--out" : ""}`}>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-description">{slide.description}</p>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button 
              key={i} 
              className={`hero-dot ${i === current ? "hero-dot--active" : ""}`} 
              onClick={() => goTo(i)} 
              role="tab" 
              aria-selected={i === current} 
              aria-label={`Slide ${i + 1}`}  />
          ))}
        </div>
      </div>
    </section>
  );
}