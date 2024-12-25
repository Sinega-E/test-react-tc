import React from 'react';

const Navigation = () => {
  const navLinks = [
    {
      href: "#registration",
      icon: "fi fi-ss-form",
      text: "Go to Registration Section",
    },
    {
      href: "#trainers",
      icon: "fi fi-ss-chalkboard-user",
      text: "Go to Trainers Section",
    },
    {
      href: "#faqs",
      icon: "fi fi-ss-comments-question",
      text: "Go to FAQs Section",
    },
    {
      href: "#reviews",
      icon: "fi fi-ss-feedback-review",
      text: "Go to Reviews Section",
    },
  ];

  return (
    <div className="nav-links">
      <ul className="grid-container-nav-link">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className={`nav-link nav-link-${index + 1}`}>
              <i className={`nav-icon ${link.icon}`}></i>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
