import React, { useState } from 'react';

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'How long will it take to become fluent?',
      answer:
        'The time required to achieve fluency depends on your current English proficiency and the effort you invest. Rather than setting a rigid timeframe, it\'s better to focus on consistent practice without pressuring yourself. We provide 100% support to enhance your communication skills, but your dedication and consistency are crucial. With regular practice, you can see significant improvement within a few months.',
    },
    {
      question: 'What is the difference between WhatsApp voice chat and Zoom batch classes?',
      answer:
        '<b>WhatsApp Voice Chat:</b> In WhatsApp voice chats, you will work one-on-one with a personal trainer for an hour. This method is tailored for basic-level students who need more time to form sentences. It allows you to think, speak, and identify mistakes at your own pace, helping you build confidence and improve conversational skills gradually.<br><br><b>Zoom Batch Classes:</b> Zoom batch classes consist of up to 5 students per session, led by a personal trainer. These sessions encourage interaction among participants, providing opportunities to practice speaking skills in a group setting and learn collaboratively.',
    },
    {
      question: 'Will the class be compensated if the trainer or student is absent?',
      answer: 'For all package courses, except batch classes, any missed session will be compensated by the trainer.',
    },
    {
      question: 'If I am unable to continue my class after a week of payment, can I get a refund?',
      answer: 'Yes, you are eligible for a refund. We will deduct only the fee for the week of classes you attended.',
    },
    {
      question: 'Can I take a demo before making the payment?',
      answer: 'Absolutely! A demo class will be scheduled at your convenience. After attending the session, you can decide whether to proceed with the payment.',
    },
    {
      question: 'Do you teach grammar every day?',
      answer:
        'Our primary focus is on improving speaking skills, as speaking is essential for mastering English communication. While grammar is important, teaching it daily might feel overwhelming and reminiscent of traditional school lessons. Instead, we create a friendly, engaging environment with conversations and activities. Grammar is incorporated based on the student’s needs and preferences, ensuring the learning process remains enjoyable.',
    },
    {
      question: 'I feel nervous. Will the trainers be soft-spoken?',
      answer:
        'Our trainers are selected for their kindness, patience, and soft-spoken nature. They are trained to create a friendly and comfortable environment for you. If you ever feel uneasy, you can contact our community directly, and we will take prompt action to address your concerns. Your comfort and satisfaction are our top priorities.',
    },
  ];

  return (
    <section id="faqs" className="faqs">
      <div className="container faqs-container">
        <div className="heading-container">
          <h2 className="section-headings">Frequently Asked Questions</h2>
          <p className="tagline">Everything You Need to Know at a Glance!</p>
        </div>

        <div className="accordion">
          {faqData.map((faq, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </div>
              <div
                className="accordion-content"
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0',
                  paddingTop: activeIndex === index ? '20px' : '0',
                  paddingBottom: activeIndex === index ? '20px' : '0',
                }}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
