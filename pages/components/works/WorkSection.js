import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function WorkSection() {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    // random bloke's code
    // useEffect(() => {
    //     const pin = gsap.fromTo(
    //         sectionRef.current,
    //         {
    //             translateX: "0vw",
    //         },
    //         {
    //             translateX: "-300vw",
    //             ease: "none",
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: triggerRef.current,
    //                 start: "center center",
    //                 end: "2000 center",
    //                 scrub: 0.5,
    //                 pin: true,
    //             },
    //         }
    //     );
    //     return () => {
    //         {
    //             /* A return function for killing the animation on component unmount */
    //         }
    //         pin.kill();
    //     };
    // }, []);

    const handleScroll = (index) => () => {
        if (window.scrollY >= 80) {
            console.log(`turun - Section ${index}`);
        } else {
            console.log(`mentok - Section ${index}`);
        }
    };

    useEffect(() => {
        const sectionScrollHandler = handleScroll(1);
        sectionRef.current.addEventListener("scroll", sectionScrollHandler);
        return () => {
            sectionRef.current.removeEventListener(
                "scroll",
                sectionScrollHandler
            );
        };
    }, []);

    return (
        <div className="wrapper-work-section" ref={sectionRef}>
            <div className="works-section-card">
                <h1>Frontend Developer</h1>
                <div className="content" data-scroll data-scroll-speed="0.3">
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
                <h1 className="company">Suitmedia</h1>
            </div>
        </div>
        // <div className="wrapper-gsap">
        //     <div className="scroll-section-outer">
        //         <div ref={triggerRef}>
        //             <div ref={sectionRef} className="scroll-section-inner">
        //                 <div style={{ width: "50vw" }}>mew</div>
        //                 <div className="scroll-section">
        //                     <h3>Section 1</h3>
        //                 </div>
        //                 <div className="scroll-section">
        //                     <h3>Section 2</h3>
        //                 </div>
        //                 <div className="scroll-section">
        //                     <h3>Section 3</h3>
        //                 </div>
        //                 <div className="scroll-section">
        //                     <h3>Section 4</h3>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
