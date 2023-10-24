import React from "react";
import { useRef } from "react";
import frameOne from '../assets/frameOne.png';
import { motion, useTransform, useScroll } from "framer-motion";

export default function ProjectsCarousel() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-200%"]);



  return (
    <section ref={targetRef} style={{ width: "8400px", overflow: "hidden" }} className="relative h-[300vh]">
      <div className="h-screen flex items-center overflow-hidden sticky top-0"></div>
      <motion.div style={{ x }} className="flex gap-4">
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
        <img className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200" style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
      </motion.div>
  
    </section>
  );
}











// import React from "react";
// import { useRef } from "react";
// import frameOne from '../assets/frameOne.png';

// export default function ProjectsCarousel() {
//   const containerRef = useRef(null);

//   const handleScroll = (event) => {
//     const container = containerRef.current;
//     const scrollAmount = event.deltaY;
//     container.scrollTo({
//       top: 0,
//       left: container.scrollLeft + scrollAmount,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="mx-auto h-screen overflow-x-scroll"
//       style={{
//         scrollBehavior: "smooth",
//         transition: "scroll-left 0.5s ease-in-out",
//       }}
//       onWheel={handleScroll}
//     >
//       <div className="flex flex-row gap-4">
//         <img style={{ width: '800px', height: '800px' }} src={frameOne} alt="Frame One" />
//         <img style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
//         <img style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
//         <img style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
//         <img style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
//         <img style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
//         <img style={{ width: '1200px', height: '1200px' }} src={frameOne} alt="Frame One" />
//       </div>
//     </div>
//   );
// }