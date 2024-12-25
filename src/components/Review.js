import React, { useState } from "react";

const Review = () => {
  // States for managing the review data
  const [audioReviews, setAudioReviews] = useState([
    { name: "Alex", role: "Student", src: "assets/audio.mp3", img: "assets/men-dp.png" },
    { name: "Maya", role: "Student", src: "assets/audio.mp3", img: "assets/men-dp.png" },
  ]);
  const [videoReviews, setVideoReviews] = useState([
    { name: "Eva", role: "Student", src: "assets/videoplayback.mp4", img: "assets/men-dp.png" },
    { name: "Liam", role: "Student", src: "assets/videoplayback.mp4", img: "assets/men-dp.png" },
  ]);
  const [textReviews, setTextReviews] = useState([
    { name: "Priya", role: "Student", text: "Lorem ipsum dolor sit amet consectetur..." },
    { name: "John", role: "Student", text: "Deserunt nihil libero magni..." },
  ]);

  // States for managing the modal and new review form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewType, setReviewType] = useState("text");
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    text: "",
    audioFile: null,
    videoFile: null,
  });

  // State for playing media (audio/video)
  const [playingAudio, setPlayingAudio] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Handling play events for audio and video
  const handleAudioPlay = (index) => {
    setPlayingAudio(playingAudio === index ? null : index);
  };

  const handleVideoPlay = (index) => {
    setPlayingVideo(playingVideo === index ? null : index);
  };

  // Handling form inputs for new review
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNewReview({
      ...newReview,
      [name]: files ? files[0] : value,
    });
  };

  // Handling the addition of a new review
  const handleAddReview = (e) => {
    e.preventDefault();

    const updatedAudioReviews = [...audioReviews];
    const updatedVideoReviews = [...videoReviews];
    const updatedTextReviews = [...textReviews];

    // Add new reviews based on selected review type
    if (newReview.text) {
      updatedTextReviews.push({
        name: newReview.name,
        role: newReview.role,
        text: newReview.text,
      });
    }

    if (newReview.audioFile) {
      updatedAudioReviews.push({
        name: newReview.name,
        role: newReview.role,
        src: URL.createObjectURL(newReview.audioFile),
        img: "assets/men-dp.png",
      });
    }

    if (newReview.videoFile) {
      updatedVideoReviews.push({
        name: newReview.name,
        role: newReview.role,
        src: URL.createObjectURL(newReview.videoFile),
        img: "assets/men-dp.png",
      });
    }

    // Update state with new review data
    setAudioReviews(updatedAudioReviews);
    setVideoReviews(updatedVideoReviews);
    setTextReviews(updatedTextReviews);

    // Reset the form and close modal
    setIsModalOpen(false);
    setNewReview({
      name: "",
      role: "",
      text: "",
      audioFile: null,
      videoFile: null,
    });
  };

  return (
    <div>
      <section id="reviews" className="reviews">
        <div className="container review-container">
          <div className="heading-container">
            <h2 className="section-headings">Student Voices & Experiences</h2>
            <p className="tagline">Feedback From Our Community - Real Stories, Real Results</p>
          </div>

          {/* Audio Reviews Row */}
          <div className="review-row audio-row">
            {audioReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="audio-review">
                  <audio
                    controls
                    onPlay={() => handleAudioPlay(index)}
                    paused={playingAudio !== index}
                  >
                    <source src={review.src} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="review-profile">
                    <img src={review.img} alt="Profile" />
                    <div className="review-profile-name-designation">
                      <p className="review-profile-name">{review.name}</p>
                      <p className="review-profile-role">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="tagline-review">What Our Students Say</p>

          {/* Text Reviews Row */}
          <div className="review-row carousel-row">
            {textReviews.map((review, index) => (
              <div key={index} className="review-card">
                <p className="review-text"><q>{review.text}</q></p>
                <div className="review-profile">
                  <img src="assets/men-dp.png" alt="Profile" />
                  <div className="review-profile-name-designation">
                    <p className="review-profile-name">{review.name}</p>
                    <p className="review-profile-role">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="tagline-review">In Their Own Words</p>

          {/* Video Reviews Row */}
          <div className="review-row video-row">
            {videoReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="video-review">
                  <video
                    controls
                    onPlay={() => handleVideoPlay(index)}
                    paused={playingVideo !== index}
                  >
                    <source src={review.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="review-profile">
                    <img src={review.img} alt="Profile" />
                    <div className="review-profile-name-designation">
                      <p className="review-profile-name">{review.name}</p>
                      <p className="review-profile-role">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Review Button */}
          <button onClick={() => setIsModalOpen(true)} className="add-review">
            Add Review
          </button>
        </div>
      </section>

      {/* Review Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select Review Type</h3>
            <form onSubmit={handleAddReview}>
              <div>
                <label>
                  <input
                    type="radio"
                    name="reviewType"
                    value="text"
                    checked={reviewType === "text"}
                    onChange={() => setReviewType("text")}
                  />Text Review
                </label>
                <label>
                  <input
                    type="radio"
                    name="reviewType"
                    value="audio"
                    checked={reviewType === "audio"}
                    onChange={() => setReviewType("audio")}
                  />
                  Audio Review
                </label>
                <label>
                  <input
                    type="radio"
                    name="reviewType"
                    value="video"
                    checked={reviewType === "video"}
                    onChange={() => setReviewType("video")}
                  />
                  Video Review
                </label>
              </div>

              {/* Name and Role Inputs */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  value={newReview.role}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {reviewType === "text" && (
                <div>
                  <textarea
                    name="text"
                    placeholder="Write your review here..."
                    value={newReview.text}
                    onChange={handleInputChange}
                    rows="4"
                  />
                </div>
              )}

              {reviewType === "audio" && (
                <div>
                  <input
                    type="file"
                    name="audioFile"
                    accept="audio/*"
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {reviewType === "video" && (
                <div>
                  <input
                    type="file"
                    name="videoFile"
                    accept="video/*"
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <button type="submit">Submit Review</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
