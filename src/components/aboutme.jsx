import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, textVariant2, footerVariants, fadeIn } from '../../utils/motion'


export default function Aboutme({darkMode}) {

    return (
        <section className={`h-screen flex flex-col items-center justify-center overflow-hidden ${darkMode ? "text-coffee" : "text-verge-black"}`}>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 1 }}
                className={"flex flex-col items-start justify-center"}
            >
                <motion.h4 className="sm:px-32 px-12 lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase max-w-screen-xl"  variants={textVariant2}>ABOUT ME</motion.h4>
                <motion.h4 className="sm:px-32 px-12 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase t max-w-screen-xl" variants={textVariant2}>I'm Zeno, a driven professional with a background in business and IT. I'm passionate about fitness, reading, and travel. Now, I'm aiming to excel as a Product Owner. Explore my profile to learn more about me!</motion.h4>
            </motion.div>
        </section>

    )
}


// import { motion } from 'framer-motion';
// import { slideIn, staggerContainer, textVariant, textVariant2, footerVariants, fadeIn } from '../../utils/motion'


// export default function Aboutme() {

//     return (
//         <section className="h-screen flex flex-col items-center justify-center overflow-hidden">

//             <motion.div
//                 variants={staggerContainer}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: false, amount: 1 }}
//                 className={"flex flex-col items-start justify-center "}
//             >
//                 <motion.h4 className="sm:px-32 px-12 lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase text-verge-black"  variants={textVariant2}>ABOUT ME</motion.h4>
//                 <motion.h4 className="sm:px-32 px-12 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase text-verge-black" variants={textVariant2}>I'm Zeno, a driven professional with a background in business and IT. <br></br>I'm passionate about fitness, reading, and travel. <br></br>Now, I'm aiming to excel as a Product Owner. <br></br>Explore my profile to learn more about me!</motion.h4>
//             </motion.div>
//         </section>

//     )
// }









