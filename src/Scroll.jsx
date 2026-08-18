import { motion } from "motion/react";

function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gold-100 py-4 gap-6" >
      <motion.div
        className=" flex gap-16 font-jura text-3xl text-gold  p-10 mt-20"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        }}
      >
        Weddings  . Birthdays  .Graduations  .Anniversaries .Baby Showers  .Corporate Events
      </motion.div>
    </div>
  );
}

export default Marquee;