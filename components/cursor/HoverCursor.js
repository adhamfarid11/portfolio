// import { useEffect, useState, useRef } from "react";

// export default function CustomHoverCursor() {
//     const cursorRef = useRef(null);

//     useEffect(() => {
//         document.addEventListener("mousemove", (event) => {
//             const { clientX, clientY } = event;
//             const mouseX = clientX - cursorRef.current.clientWidth / 2;
//             const mouseY = clientY - cursorRef.current.clientHeight / 2;
//             cursorRef.current.style.transform = `translate3d(
//                 ${mouseX}px,
//                 ${mouseY}px,
//                 0
//             )`;
//         });
//     }, []);

//     return (
//         <div className="hover-cursor" ref={cursorRef}>
//             <p>Click Me</p>
//         </div>
//     );
// }
