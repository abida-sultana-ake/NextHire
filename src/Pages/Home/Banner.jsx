import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 py-12 lg:py-24">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your{" "}
              <motion.span
                className="text-violet-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  color: ["#3347ff", "#5533ff", "#7a33ff"],
                }}
                transition={{
                  duration: 2,
                  color: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  },
                }}
              >
                Next Hire
              </motion.span>
              Starts Here
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Discover top talent or land your dream job faster, smarter, and
              easier with NextHire.
              <br className="hidden md:inline" />
              Join thousands of professionals shaping their future today. Lets go
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="px-6 py-3 text-lg font-semibold rounded bg-violet-600 hover:bg-violet-700 transition"
              >
                Get Started! 
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src="/src/assets/assetLotties/Banner.png"
              alt="Job Portal Banner"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;