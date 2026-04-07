import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTags, setVisibleTags] = useState([0, 1, 2, 3]);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const rotatingTexts = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'AI & ML'
  ];

  const allTags = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'AI & ML',
    'UI/UX Design',
    'DevOps',
    'Blockchain',
    'IoT Solutions',
    'Cybersecurity',
    'Data Analytics',
    'API Development',
    'E-commerce'
  ];

  useEffect(() => {
    // Typing effect for rotating text
    let typingTimeout;
    let erasingTimeout;

    const typeText = () => {
      const fullText = rotatingTexts[currentText];
      let charIndex = 0;

      setIsTyping(true);
      setDisplayedText('');

      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          // Wait 2 seconds then erase
          erasingTimeout = setTimeout(() => {
            eraseText();
          }, 2000);
        }
      }, 100); // Type speed: 100ms per character
    };

    const eraseText = () => {
      const fullText = rotatingTexts[currentText];
      let charIndex = fullText.length;

      const eraseInterval = setInterval(() => {
        if (charIndex > 0) {
          setDisplayedText(fullText.substring(0, charIndex - 1));
          charIndex--;
        } else {
          clearInterval(eraseInterval);

          // Move to next text
          setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        }
      }, 50); // Erase speed: 50ms per character (faster than typing)
    };

    // Start typing effect
    typeText();

    // Tags rotation animation - rotate one tag at a time smoothly
    const tagsInterval = setInterval(() => {
      setVisibleTags(prev => {
        const newTags = [...prev];
        const randomIndex = Math.floor(Math.random() * 4); // Pick random position
        let newTag;

        // Find a tag that's not currently visible
        do {
          newTag = Math.floor(Math.random() * allTags.length);
        } while (newTags.includes(newTag));

        newTags[randomIndex] = newTag;
        return newTags;
      });
    }, 3000); // Change one tag every 3 seconds for smoother experience

    // Trigger animations after mount
    setTimeout(() => setIsVisible(true), 100);

    // Counter animation for "200+"
    const targetCount = 200;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetCount / steps;
    let currentCount = 0;

    const counterInterval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCounter(targetCount);
        clearInterval(counterInterval);
      } else {
        setCounter(Math.floor(currentCount));
      }
    }, duration / steps);

    return () => {
      clearInterval(tagsInterval);
      clearInterval(counterInterval);
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [currentText]);

  return (
    <section id="hero" className="hero-two section paralax__animation">
      <div className="container medium-container">
        <div className="row">
          <div className="col-12">
            <div className="hero-two__wrapper">
              <div className="hero-content">
                <h5 className="hero-sub-title tp-text-revel-anim" data-delay="0.8">
                  Tech Innovation
                </h5>
                <h1 className="hero-title">
                  <span className="tp-text-revel-anim d-inline-block" data-delay="0.9">
                    SMART SOFTWARE
                  </span>
                </h1>
                <div className="rotating-text-wrapper">
                  <h2 className="hero-next-title">
                    <span className="typing-text">
                      {displayedText}
                      <span className={`typing-cursor ${isTyping ? 'blink' : ''}`}>|</span>
                    </span>
                  </h2>
                </div>
                <a className="button-v2" href="#contact">
                  Get Started
                  <span className="button-icon">
                    <i className="fa-regular fa-arrow-up-right"></i>
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                </a>
              </div>

              <div className="hero-thumb">
                <img src="/assets/images/hero-thumb.png" alt="hero-thumb" />
              </div>

              <div className="hero-info">
                <div className={`info-card ${isVisible ? 'animate-in' : ''}`}>
                  <div className="info-avatars">
                    <ul>
                      <li className="avatar-badge pulse-animation">
                        {counter}+
                      </li>
                      <li className="avatar-item bounce-animation" style={{ animationDelay: '0.2s' }}>
                        <span className="avatar-placeholder"><i className="fa-solid fa-user"></i></span>
                      </li>
                      <li className="avatar-item bounce-animation" style={{ animationDelay: '0.4s' }}>
                        <span className="avatar-placeholder"><i className="fa-solid fa-user"></i></span>
                      </li>
                      <li className="avatar-item bounce-animation" style={{ animationDelay: '0.6s' }}>
                        <span className="avatar-placeholder"><i className="fa-solid fa-user"></i></span>
                      </li>
                    </ul>
                  </div>
                  <span className="info-text slide-up-animation">
                    Happy
                    <br />
                    Clients
                  </span>
                </div>

                <div className="info-items">
                  {visibleTags.map((tagIndex, position) => (
                    <span
                      key={`${position}-${tagIndex}`}
                      className="info-item rotating-tag-animation"
                      style={{ animationDelay: `${position * 0.1}s` }}
                    >
                      {allTags[tagIndex]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-shape">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-100">
          <path fill="#E2252B" d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
