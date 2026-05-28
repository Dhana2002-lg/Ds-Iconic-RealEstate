import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Counter from "./Counter";
import { TrendingUp, Users, Shield } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const counters = [
    { target: 10, suffix: "+", label: "Projects Launched", icon: TrendingUp },
    { target: 500, suffix: "+", label: "Happy Families", icon: Users },
    { target: 1000, suffix: "+", label: "Plots Sold", icon: Shield },
    { target: 10, suffix: "+", label: "Years of Trust", icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-28 bg-[#f9fafb] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00883d]/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fb111f]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[520px]">
              <img
  src="/satyanarayana.png"
  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  alt="Director D. Satyanarayana"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Director card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 w-[230px]"
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                Director
              </p>
              <h3 className="font-serif text-lg font-bold text-gray-900 mt-1">
                D. Satyanarayana
              </h3>
              <p className="text-[#00883d] text-sm font-semibold">M.Com</p>
              <div className="mt-3 h-[2px] w-10 bg-gradient-to-r from-[#00883d] to-[#fb111f]" />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            {/* TAG */}
            <span className="section-tag mb-5">
              About Us
            </span>

            {/* TITLE */}
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Building Dreams,{" "}
              <span className="gradient-text italic">
                One Plot
              </span>{" "}
              at a Time
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 leading-8">
              DS Iconic Real Estate is a trusted name in premium open plot communities across Andhra Pradesh.
              We specialize in VMRDA approved layouts with clear titles and transparent documentation.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Under the leadership of <span className="font-semibold text-gray-900">D. Satyanarayana (M.Com)</span>,
              we have delivered landmark projects across Narsipatnam and surrounding regions.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "VMRDA Approved",
                "Clear Title",
                "Prime Locations",
                "Trusted Brand",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-xs font-semibold border border-[#00883d]/30 text-[#00883d] bg-[#00883d]/5"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* COUNTERS */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {counters.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:-translate-y-1 transition"
                >
                  <div className="text-3xl font-bold text-[#00883d] font-serif">
                    <Counter target={c.target} suffix={c.suffix} />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{c.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}