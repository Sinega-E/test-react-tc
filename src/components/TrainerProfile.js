import React, { useState } from 'react';

const trainersData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Certified Yoga Instructor',
    bio: 'Passionate yoga instructor with 8+ years of experience helping clients improve flexibility, strength, and mindfulness.',
    experience: '8+ Years',
    specialization: 'Yoga, Meditation, Nutrition',
    classMode: 'Whatsapp, Zoom, Offline',
    availability: 'Mon-Fri (8 AM - 6 PM), Sat (10 AM - 4 PM)',
    photo: './assets/slider-img-1.png', // Default image
    audio: './assets/intro-audio.mp3',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Certified Pilates Instructor',
    bio: 'Expert Pilates instructor with 10+ years of experience helping clients improve posture, strength, and overall well-being.',
    experience: '10+ Years',
    specialization: 'Pilates, Stretching, Core Strength',
    classMode: 'Whatsapp, Zoom, Offline',
    availability: 'Mon-Fri (7 AM - 5 PM), Sat (9 AM - 2 PM)',
    photo: './assets/slider-img-2.png', // Default image
    audio: './assets/intro-audio.mp3',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'Certified Fitness Trainer',
    bio: 'Dynamic fitness trainer with 6+ years of experience in personal training and group fitness sessions.',
    experience: '6+ Years',
    specialization: 'Strength Training, Weight Loss, Fitness Nutrition',
    classMode: 'Whatsapp, Zoom, Offline',
    availability: 'Mon-Fri (6 AM - 7 PM), Sat (8 AM - 12 PM)',
    photo: './assets/slider-img-3.png', // Default image
    audio: './assets/intro-audio.mp3',
  },
  {
    id: 4,
    name: 'Michael Lee',
    title: 'Certified Wellness Coach',
    bio: 'Holistic wellness coach with a focus on mental health, nutrition, and mindfulness.',
    experience: '7+ Years',
    specialization: 'Mindfulness, Nutrition, Stress Management',
    classMode: 'Whatsapp, Zoom, Offline',
    availability: 'Mon-Fri (9 AM - 6 PM), Sat (10 AM - 3 PM)',
    photo: './assets/slider-img-4.png', // Default image
    audio: './assets/intro-audio.mp3',
  },
];

const TrainerProfile = () => {
  const [showAll, setShowAll] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState({}); // Store uploaded photos

  const handleShowMore = () => {
    setShowAll(true); // Show all profiles when "Show More" is clicked
  };

  const handleFileChange = (id, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhotos((prev) => ({
          ...prev,
          [id]: reader.result, // Update photo for specific trainer
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const displayedTrainers = showAll ? trainersData : trainersData.slice(0, 3); // Initially show 3, then all if 'showAll' is true

  return (
    <section id="trainers" className="trainer-profile">
      <div className="container">
        <div className="heading-container">
          <h2 className="section-headings">Get to Know Our Trainers</h2>
          <p className="tagline">Learn from Experts Who Inspire and Guide You</p>
        </div>

        <div className="trainer-cards">
          {displayedTrainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              {/* File input for photo upload */}
              <input
                type="file"
                accept="image/*"
                className="file-upload"
                onChange={(e) => handleFileChange(trainer.id, e)}
              />
              <img
                src={uploadedPhotos[trainer.id] || trainer.photo} // Use uploaded photo if available, else default
                alt={`${trainer.name} Photo`}
                className="trainer-photo"
              />
              <h3 className="trainer-name">{trainer.name}</h3>
              <p className="trainer-title">{trainer.title}</p>
              <p className="trainer-bio">{trainer.bio}</p>
              <div className="trainer-details">
                <p>
                  <strong className="trainer-side-heading">Experience:</strong> {trainer.experience}
                </p>
                <p>
                  <strong className="trainer-side-heading">Specialization:</strong> {trainer.specialization}
                </p>
                <p>
                  <strong className="trainer-side-heading">Mode of Class:</strong> {trainer.classMode}
                </p>
                <p>
                  <strong className="trainer-side-heading">Availability:</strong> {trainer.availability}
                </p>
              </div>
              {/* Audio Element Above Button */}
              <div className="trainer-intro-audio">
                <audio controls>
                  <source src={trainer.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              <button className="btn">Book a Demo Session</button>
            </div>
          ))}
        </div>

        {!showAll && (
          <a href="#" className="show-more" onClick={handleShowMore}>
            Show More
          </a>
        )}
      </div>
    </section>
  );
};

export default TrainerProfile;
