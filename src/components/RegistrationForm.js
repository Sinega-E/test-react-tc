import React, { useState } from 'react';

const Registration = () => {
  const [isStudentFormVisible, setIsStudentFormVisible] = useState(true);

  // Toggle to show/hide student registration form
  const toggleStudentForm = () => {
    setIsStudentFormVisible(true);
  };

  // Toggle to show/hide trainer registration form
  const toggleTrainerForm = () => {
    setIsStudentFormVisible(false);
  };

  // Filter courses in the dropdown
  const filterCourses = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const courseLabels = document.querySelectorAll('.dropdown-content label');
    courseLabels.forEach((label) => {
      const courseName = label.textContent || label.innerText;
      if (courseName.toLowerCase().includes(searchInput)) {
        label.style.display = '';
      } else {
        label.style.display = 'none';
      }
    });
  };

  return (
    <section id="registration" className="registration-container">
      <div className="heading-container">
        <h2 className="section-headings">Register Now</h2>
        <p className="tagline">Join our platform today and start learning or teaching</p>
      </div>
      <div className="container stu-reg-container" style={{ display: isStudentFormVisible ? 'block' : 'none' }}>
        <div className="registration">
          <div className="register-btn">
            <button className="stu-register-btn btn-active" onClick={toggleStudentForm}>Student Registration Form</button>
            <button className="trainer-register-btn" onClick={toggleTrainerForm}>Trainer Registration Form</button>
          </div>
          <h2 className="registration-type">Student Registration</h2>

          <form action="#" method="post">
            <small>* Required fields</small>
            {/* Personal Information */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth *</label>
              <input type="date" id="sdob" name="dob" required />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="" disabled selected>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer">Prefer not to say</option>
              </select>
            </div>

            {/* Course Details */}
            <div className="form-group">
              <label htmlFor="course">Select Course *</label>
              <select id="course" name="course" required>
                <option value="" disabled selected>Choose a course</option>
                <option value="webdev">Web Development</option>
                <option value="datasci">Data Science</option>
                <option value="graphicdesign">Graphic Design</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Preferred Start Date And Time *</label>
              <input type="datetime-local" id="startDate" name="startDate" required />
            </div>

            {/* Consent */}
            <div className="form-group">
              <label>
                <input type="checkbox" required /> I agree to receive course-related updates via Call/Email/SMS
              </label>
            </div>

            <div className="form-group">
              {/* Submit Button */}
              <button className="registration-btn" type="submit">Register Now</button>
            </div>
          </form>
        </div>
      </div>

      <div className="container trainer-reg-container" style={{ display: !isStudentFormVisible ? 'block' : 'none' }}>
        <div className="registration">
          <div className="register-btn">
            <button className="stu-register-btn" onClick={toggleStudentForm}>Student Registration Form</button>
            <button className="trainer-register-btn btn-active" onClick={toggleTrainerForm}>Trainer Registration Form</button>
          </div>
          <h2 className="registration-type">Trainer Registration</h2>

          <form action="#" method="POST" encType="multipart/form-data">
            <small className="required-text">* Required fields</small>
            {/* Personal Information */}
            <div className="form-group">
              <label htmlFor="tfullName">Full Name *</label>
              <input type="text" id="tfullName" name="fullName" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="tdob">Date of Birth *</label>
              <input type="date" id="tdob" name="dob" required />
            </div>

            <div className="form-group">
              <label htmlFor="tgender">Gender</label>
              <select id="tgender" name="gender">
                <option value="" disabled selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="photo">Upload Photo *</label>
              <input type="file" id="photo" name="photo" accept="image/*" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Phone Number *</label>
              <input type="tel" id="contact" name="contact" placeholder="Enter phone number" required />
            </div>

            <div className="form-group">
              <label htmlFor="temail">Email *</label>
              <input type="email" id="temail" name="email" placeholder="Enter your email" required />
            </div>

            {/* Professional Information */}
            <div className="form-group">
              <label htmlFor="specialization">Specialization/Area of Expertise *</label>
              <input type="text" id="specialization" name="specialization" placeholder="E.g., Yoga, Fitness, Coding" required />
            </div>

            {/* Qualification */}
            <div className="form-group">
              <label htmlFor="qualification">Qualification *</label>
              <select id="qualification" name="qualification" required>
                <option value="" disabled selected>Select Qualification</option>
                <option value="Bachelors in Physical Education">Bachelors in Physical Education</option>
                <option value="Masters in Physical Education">Masters in Physical Education</option>
                <option value="Certified Yoga Instructor">Certified Yoga Instructor</option>
                <option value="Certified Fitness Trainer">Certified Fitness Trainer</option>
                <option value="Nutrition and Wellness Certification">Nutrition and Wellness Certification</option>
                <option value="Coding Bootcamp Graduate">Coding Bootcamp Graduate</option>
                <option value="Teaching Certification">Teaching Certification</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Total Years of Experience</label>
              <input type="number" id="experience" name="experience" placeholder="Enter years of experience" min="0" />
            </div>

            <div className="form-group">
              <label htmlFor="courses">Courses Interested to Teach *</label>
              <div className="dropdown">
                <button className="dropdown-button">Select Courses</button>
                <div className="dropdown-content">
                  {/* Search Input */}
                  <input
                    type="text"
                    id="courseSearch"
                    className="search-input"
                    placeholder="Search courses..."
                    onKeyUp={filterCourses}
                  />

                  {/* Checkbox List */}
                  <label>
                    <input type="checkbox" name="courses" value="Yoga" /> Yoga
                  </label>
                  <label>
                    <input type="checkbox" name="courses" value="Fitness Training" /> Fitness Training
                  </label>
                  <label>
                    <input type="checkbox" name="courses" value="Nutrition Guidance" /> Nutrition Guidance
                  </label>
                  <label>
                    <input type="checkbox" name="courses" value="Coding Basics" /> Coding Basics
                  </label>
                  <label>
                    <input type="checkbox" name="courses" value="Advanced Programming" /> Advanced Programming
                  </label>
                  <label>
                    <input type="checkbox" name="courses" value="Mathematics" /> Mathematics
                  </label>
                  <label>
                    <input type="checkbox" name="courses" value="Science" /> Science
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="headline">Profile Headline/Tagline *</label>
              <input type="text" id="headline" name="headline" placeholder="E.g., Certified Yoga Instructor" required />
            </div>

            {/* Availability & Teaching Details */}
            <div className="radio-group">
              <label>Preferred Work Type *</label>
              <input type="radio" id="fullTime" name="workType" value="Full-Time" required />
              <label htmlFor="fullTime" style={{ fontWeight: 'normal' }}>Full-Time</label>
              <input type="radio" id="partTime" name="workType" value="Part-Time" required />
              <label htmlFor="partTime" style={{ fontWeight: 'normal' }}>Part-Time</label>
            </div>

            <div className="form-group">
              <label htmlFor="teachingMode">Preferred Mode of Teaching *</label>
              <select id="teachingMode" name="teachingMode" required>
                <option value="" disabled selected>Select Teaching Mode</option>
                <option value="Online">Online (Zoom meet)</option>
                <option value="Online">Online (Whatsapp)</option>
                <option value="In-Person">In-Person</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="availability">Availability (Days & Time Slots) *</label>
              <textarea
                id="availability"
                name="availability"
                rows="3"
                placeholder="E.g., Mon-Fri, 9 AM - 12 PM"
                required
              ></textarea>
            </div>

            <div className="form-group">
              {/* Audio Upload */}
              <label htmlFor="audioNote">Upload Audio Note (Self-Introduction) *</label>
              <input type="file" id="audioNote" name="audioNote" accept="audio/*" required />
            </div>

            <div className="form-group">
              {/* Consent and Submission */}
              <label>
                <input type="checkbox" name="agreement" required /> I agree to the Terms & Conditions and consent to display my profile publicly.
              </label>
            </div>

            <div className="form-group">
              <button className="btn" type="submit">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;
