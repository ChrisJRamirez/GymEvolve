import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Build strength and muscle with our challenging weight training classes.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Relax, unwind and find your inner balance with our calming yoga classes 7-days a week.",
    image: image2,
  },
  {
    name: "Core Classes",
    description: "Strengthen your core and get that toned mid-section with our core classes.",
    image: image3,
  },
  {
    name: "Pilates Classes",
    description: "Get fit and toned with low-impact Pilates classes.",
    image: image4,
  },
  {
    name: "Crossfit Classes",
    description: "Reach your fitness goals fast with our intense CrossFit classes!",
    image: image5,
  },
  {
    name: "Zumba Classes",
    description: "Dance your way to fitness with our fun and energetic Zumba classes!",
    image: image6,
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
               />
            ))}
              

          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ourClasses;
