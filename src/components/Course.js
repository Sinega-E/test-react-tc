import React, { useState, useEffect, useRef } from 'react';

// Mock data for courses and categories
const courses = [
  { title: 'Advanced English', description: 'A brief summary of what the course offers, including key topics covered.', duration: '6 Weeks', difficulty: 'Intermediate', price: '$99', startDate: 'Jan 1, 2025', format: 'Online, Self-paced', skills: 'HTML, CSS, JavaScript', rating: 5, reviews: 120 },
  { title: 'Mathematics', description: 'A brief summary of what the course offers, including key topics covered.', duration: '6 Weeks', difficulty: 'Intermediate', price: '$99', startDate: 'Jan 1, 2025', format: 'Online, Self-paced', skills: 'Math Basics, Algebra', rating: 4, reviews: 100 },
  // Add more course objects here...
];

const CourseSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [visibleCourses, setVisibleCourses] = useState(4); // Initial number of visible courses

  const courseCategoriesRef = useRef(null);
  const courseSubCategoriesRef = useRef(null);

  // Handle category click (add active class)
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // Handle sub-category click (add active class)
  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  // Scroll course categories left and right
  const scrollCategories = (direction) => {
    if (courseCategoriesRef.current) {
      courseCategoriesRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  // Load more courses dynamically
  const loadMoreCourses = () => {
    setVisibleCourses((prev) => prev + 4); // Load 4 more courses on "Show More" click
  };

  // Add event listener for smooth scroll fallback
  useEffect(() => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      // Fallback for browsers that do not support smooth scroll
      document.querySelectorAll('.scroll-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const direction = e.target.id.includes('left') ? 'left' : 'right';
          scrollCategories(direction);
        });
      });
    }
  }, []);

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="heading-container">
          <h2 className="section-headings">Explore Our Courses</h2>
          <p className="tagline">Unlock Your Potential with Our Courses</p>
        </div>

        <div className="course-categories-container">
          {/* Left scroll icon */}
          <i
            id="scroll-left"
            className="scroll-btn left fi fi-ss-angle-circle-left"
            onClick={() => scrollCategories('left')}
          ></i>
          <div className="course-categories" ref={courseCategoriesRef}>
            {['Technology & IT', 'Business & Management', 'Creative Arts & Design', 'Health & Wellness'].map((category) => (
              <div
                key={category}
                className={`category ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          {/* Right scroll icon */}
          <i
            id="scroll-right"
            className="scroll-btn right fi fi-ss-angle-circle-right"
            onClick={() => scrollCategories('right')}
          ></i>
        </div>

        <div className="course-sub-categories-container">
          <div className="course-sub-categories" ref={courseSubCategoriesRef}>
            {['English language', 'Math', 'Science'].map((subCategory) => (
              <div
                key={subCategory}
                className={`sub-category ${activeSubCategory === subCategory ? 'active' : ''}`}
                onClick={() => handleSubCategoryClick(subCategory)}
              >
                {subCategory}
              </div>
            ))}
          </div>
        </div>

        <div className="course-cards">
          {courses.slice(0, visibleCourses).map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-details">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <p><strong className="in-detail">Duration:</strong> {course.duration}</p>
                  <p><strong className="in-detail">Difficulty:</strong> {course.difficulty}</p>
                  <p><strong className="in-detail">Price:</strong> {course.price}</p>
                  <p><strong className="in-detail">Start Date:</strong> {course.startDate}</p>
                  <p><strong className="in-detail">Format:</strong> {course.format}</p>
                  <p><strong className="in-detail">Skills Learned:</strong> {course.skills}</p>
                </div>
                <div className="course-footer">
                  <div className="course-rating">
                    <span>⭐⭐⭐⭐⭐ ({course.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="show-more" onClick={loadMoreCourses}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default CourseSection;
