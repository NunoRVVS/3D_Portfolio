import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y:50, opacity:0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay:0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.2 }                
        )
    })

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/*LEFT*/}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="bottle-design" />
                    </div>
                    <div className="text-content">
                        <h2>Any type of bottle design, name it!! We will do it.</h2>
                        <p className="text-white-50 md:text-xl">
                            This is a mock up app concept build using only CSS and a bit of JS.
                        </p>
                    </div>
                </div>
                {/*RIGHT*/}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#d2cac0e2]">
                            <img src="/images/project2.png" alt="Velogram" />
                        </div>
                        <h2>Velogram</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#d3c6b6d2]">
                            <img src="/images/project3.png" alt="Free-chronicle" />
                        </div>
                        <h2>Free-chronicle</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection