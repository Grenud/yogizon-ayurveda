import React from "react";
import { Typography } from "@material-tailwind/react";
import AccordionCard from "../Utilities/AccordionCard";

function FAQs() {
  const accordionContent = [
    {
      id: 1,
      title: "What is Ayurveda?",
      description:
        "Ayurveda is a system of medicine with historical roots in the Indian subcontinent. Globalized and modernized practices derived from Ayurveda traditions are a type of alternative medicine. In countries beyond India, Ayurvedic therapies and practices have been integrated in general wellness applications and in some cases in medical use.",
    },
    {
      id: 2,
      title: "How can Ayurveda help me?",
      description:
        "It is a holistic approach to health that is designed to help people live long, healthy, and well-balanced lives. The focus of Ayurveda is to promote good health, rather than fight disease. But treatments may be recommended for specific health problems."
    },
    {
      id: 3,
      title: "Why choose Ayurveda over modern medicine?",
      description:
        "Ayurveda can be a great alternative to modern medicine. It is a natural way of healing and has no side effects. It is a holistic approach to health that is designed to help people live long, healthy, and well-balanced lives."
    },
    {
      id: 4,
      title: "What are the benefits of Ayurveda?",
      description:
        "The benefits of Ayurveda are numerous. It is a natural way of healing and has no side effects. It is a holistic approach to health that is designed to help people live long, healthy, and well-balanced lives."
    },
    {
      id: 5,
      title: "What are the different types of Ayurveda treatments?",
      description:
        "There are many different types of Ayurveda treatments. Some of the most popular ones are Panchakarma, Abhyanga, Shirodhara, Swedana, and Nasya."
    },
    {
      id: 6,
      title: "How can I get started with Ayurveda?",
      description:
        "You can get started with Ayurveda by consulting a certified Ayurvedic practitioner. They will be able to guide you and provide you with the best treatment plan for your needs."
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8 md:my-8 my-0">
      <div className="flex flex-col justify-center items-center gap-5">
        <Typography variant="h1" color="black" className="font-bold">
          FAQs
        </Typography>
        <Typography variant="p" color="gray" className="font-normal md:text-left text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
        </Typography>
      </div>
      <div className="md:w-[50%] w-[80%] flex flex-col items-center justify-center">
        {
          accordionContent.map((content, index) => (
            <AccordionCard
              key={index}
              title={content.title}
              description={content.description}
              id={content.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default FAQs;
