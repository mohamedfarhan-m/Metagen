import React from 'react';
import './WorkingProcess.css';
import devCodingImg from '../assets/images/dev&cod.jpeg';
import discoveryImg  from '../assets/images/Disc_Analysis0.jpg.jpeg';
import planningImg   from '../assets/images/planing&design.jpg';
import testingImg    from '../assets/images/Testing&quality.jpg';
import deploymentImg from '../assets/images/Deployment & s1.png';

const WorkingProcess = () => {
  const processes = [
    {
      id: 1,
      title: "Discovery &\nAnalysis",
      description: "We analyze your business requirements, understand your goals, and identify the best technology solutions",
      image: discoveryImg,
      number: "01"
    },
    {
      id: 2,
      title: "Planning &\nDesign",
      description: "Our team creates detailed architecture, wireframes, and prototypes aligned with your vision",
      image: planningImg,
      number: "02"
    },
    {
      id: 3,
      title: "Development &\nCoding",
      description: "Expert developers build your solution using cutting-edge technologies and best practices",
      image: devCodingImg,
      number: "03"
    },
    {
      id: 4,
      title: "Testing &\nQuality Assurance",
      description: "Rigorous testing ensures bug-free, secure, and high-performance software delivery",
      image: testingImg,
      number: "04"
    },
    {
      id: 5,
      title: "Deployment &\nSupport",
      description: "We launch your solution and provide ongoing maintenance, updates, and technical support",
      image: deploymentImg,
      number: "05"
    }
  ];

  return (
    <section id="process" className="working-process section section-padding fade-anim" data-direction="right">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-header text-center">
              <h2 className="section-title">Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="working-process__shape">
              <svg width="1920" height="547" viewBox="0 0 1920 547" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2081_102)">
                  <path d="M0 442.75L396.716 241.363C407.278 236.001 419.401 234.563 430.925 237.306L943.288 359.247C953.19 361.604 963.576 360.883 973.057 357.179L1508.99 147.829C1519.96 143.543 1532.09 143.269 1543.25 147.054L1766.33 222.758C1784.82 229.035 1805.28 223.966 1818.71 209.778L1920 102.75" stroke="currentColor" strokeWidth="8"></path>
                </g>
                <g filter="url(#filter1_d_2081_102)">
                  <circle cx="1525" cy="145.75" r="15" fill="currentColor"></circle>
                </g>
                <g filter="url(#filter2_d_2081_102)">
                  <circle cx="960" cy="359.75" r="15" fill="currentColor"></circle>
                </g>
                <g filter="url(#filter3_d_2081_102)">
                  <circle cx="412" cy="237.75" r="15" fill="currentColor"></circle>
                </g>
                <defs>
                  <filter id="filter0_d_2081_102" x="-101.811" y="0" width="2124.72" height="546.316" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="50"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.886 0 0 0 0 0.145 0 0 0 0 0.169 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2081_102"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2081_102" result="shape"></feBlend>
                  </filter>
                  <filter id="filter1_d_2081_102" x="1480" y="100.75" width="90" height="90" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.886 0 0 0 0 0.145 0 0 0 0 0.169 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2081_102"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2081_102" result="shape"></feBlend>
                  </filter>
                  <filter id="filter2_d_2081_102" x="915" y="314.75" width="90" height="90" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.886 0 0 0 0 0.145 0 0 0 0 0.169 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2081_102"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2081_102" result="shape"></feBlend>
                  </filter>
                  <filter id="filter3_d_2081_102" x="367" y="192.75" width="90" height="90" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.886 0 0 0 0 0.145 0 0 0 0 0.169 0 0 0 1 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2081_102"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2081_102" result="shape"></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="container medium-container">
        <div className="row">
          <div className="col-12">
            <div className="working-process__items">
              {processes.map((process) => (
                <div className="working-process__item" key={process.id}>
                  <div className="item-thumb">
                    <img src={process.image} alt="working-process" className="w-100 h-100" />
                  </div>
                  <div className="item-content">
                    <h5 className="item-title">
                      {process.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < process.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h5>
                    <p>{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
