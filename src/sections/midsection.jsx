import React from 'react';
import { midimgone, midimgtwo } from "../assets";
import { Button, AccordionList } from '../components';

const MidSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:mr-4">
          <img 
            src={midimgone}
            alt="" 
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-primary text-2xl font-bold mb-2">Web & Mobile App Development</h2>
          <p className="text-lg py-4">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <Button>Learn More</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-primary text-2xl font-bold mb-2">Digital Strategy Consulting</h2>
          <p className="text-lg py-4">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <Button>Learn More</Button>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <img 
            src={midimgtwo}
            alt="" 
            className="w-full"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        <h1 className='text-primary text-2xl font-bold mb-8 text-center'>Frequently Asked Questions</h1>
        <AccordionList
          items={[
            { title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
            { title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
            { title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?", content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer." },
          ]}
        />
      </div>
    </>
  );
};

export default MidSection;
