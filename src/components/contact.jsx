import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, textVariant2, footerVariants, fadeIn } from '../../utils/motion'


export default function Contact({darkMode}) {

    return (
        <section className={`h-screen flex flex-col items-center justify-center overflow-hidden ${darkMode ? "text-coffee" : "text-verge-black"}`}>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 1 }}
                className={"flex flex-col items-start justify-center "}
            >

                <motion.h4 className="sm:px-32 px-12 lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase "  variants={textVariant2}>CONTACT ME</motion.h4>
                <motion.h4 className="sm:px-32 px-12 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase  max-w-screen-xl" variants={textVariant2}>I am currently looking for opportunities where I can apply my unique mix of business & IT skills, and interest in the Product Owner role. If you would like to connect or have any questions, please do not hesitate to contact me!
</motion.h4>
                
                <motion.div className="flex gap-2 sm:px-32 px-12 lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase mt-5"  variants={textVariant2}>
                <a href="https://www.linkedin.com/in/zeno-degenkamp/" target="_blank">LINKEDIN</a>
                <a href="https://github.com/zenodegenkamp" target="_blank">GITHUB</a>
                <a href="mailto:zenodegenkamp@hotmail.com" target="_blank">EMAIL</a>
                <a href="tel:+31624482061">CALL</a>
                {/* <a href="/" target="_blank">DOWNLOAD CV</a> */}
                </motion.div>

            </motion.div>
        </section>

    )
}





