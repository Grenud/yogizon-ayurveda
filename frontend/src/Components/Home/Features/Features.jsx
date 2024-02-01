import React from "react";
import Cards from "../../Utilities/Cards";

function Features() {


    const cards = [
        {
            title: "Book a Consultation",
            description: "Book a consultation with our doctors and get a prescription.",
            image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGF0aW9ufGVufDB8fDB8fHww",
            buttonLink: "/consult",
            buttonText: "Know More"
        },
        {
            title: "Our Products",
            description: "Buy our products and get them delivered to your doorstep.",
            image: "https://images.unsplash.com/photo-1495461199391-8c39ab674295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D",
            buttonLink: "/products",
            buttonText: "Know More"
        },
    ]


  return (
    <div className="h-screen flex flex-col items-center justify-center md:my-0 my-[16rem]">
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-semibold">Features</h1>
            <p className="text-lg font-light">Some of the features we provide.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-4">
            {
                cards.map((card, index) => (
                    <Cards
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        buttonLink={card.buttonLink}
                        buttonText={card.buttonText}
                    />
                ))
            }
        </div>

    </div>
  );
}

export default Features;
