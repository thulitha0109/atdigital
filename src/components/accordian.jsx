import React from 'react';

const AccordionList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} isOpen={index === 0} />
      ))}
    </div>
  );
};

const Accordion = ({ title, content, isOpen }) => {
  const [open, setOpen] = React.useState(isOpen);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-auto max-w-5xl items-center bg-slate-50 rounded-lg mb-4">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-lg text-primary font-semibold">{title}</h2>
        <span className="text-gray-600">
          {open ? '-' : '+'}
        </span>
      </div>
      {open && (
        <div className="px-4 pb-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionList;
