import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const loginModalRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonIconOpenRef = useRef(null);
  const menuButtonIconCloseRef = useRef(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
    if (menuRef.current) {
      menuRef.current.classList.add('open');
    }
    if (menuButtonIconOpenRef.current && menuButtonIconOpenRef.current.style) {
      menuButtonIconOpenRef.current.style.display = 'none';
    }
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    if (menuRef.current) {
      menuRef.current.classList.remove('open');
    }
    if (menuButtonIconOpenRef.current && menuButtonIconOpenRef.current.style) {
      menuButtonIconOpenRef.current.style.display = '';
    }
    document.body.classList.remove('no-scroll');
  };

  const handleClickMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonIconOpenRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickMenu);

    return () => {
      document.removeEventListener('click', handleClickMenu);
    };
  });

  const handleHamClick = () => {
    const hamLinks = document.getElementsByClassName('ham-menu-link');
    Array.from(hamLinks).forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  };

  useEffect(() => {
    handleHamClick();
  });

  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => {
      if (loginModalRef.current) {
        loginModalRef.current.style.display = 'flex';
      }
    }, 0); // Ensure DOM update
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('no-scroll');
    if (loginModalRef.current) {
      loginModalRef.current.style.display = 'none';
    }
  };

  return (
    <div>
      <section className="container-header">
        <img
          className="logoImg"
          src="./logo.png"
          alt="Training Center Logo"
          aria-label="Logo"
        />
        <div className="header">
          <nav>
            <ul className="head-links">
              <li><a className="head-link" href="#courses">Courses</a></li>
              <li><a className="head-link" href="#trainers">Trainers</a></li>
              <li><a className="head-link" href="#registration">Registration</a></li>
              <li><a className="head-link" href="#reviews">Reviews</a></li>
            </ul>
          </nav>
          <div className="login-container">
            <button className="btn login-btn" onClick={openModal}>Log In</button>
          </div>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <button className="hamburger-btn menu-burger-close" onClick={closeMenu} ref={menuButtonIconCloseRef}>
            <i className="fi fi-br-cross-small menu-burger-close-icon"></i>
          </button>
          <nav>
            <ul>
              <li><a className="head-link ham-menu-link" href="#courses">Courses</a></li>
              <li><a className="head-link ham-menu-link" href="#trainers">Trainers</a></li>
              <li><a className="head-link ham-menu-link" href="#registration">Registration</a></li>
              <li><a className="head-link ham-menu-link" href="#reviews">Reviews</a></li>
            </ul>
            <div className="login-container">
              <button className="btn login-btn ham-menu-link" onClick={openModal}>Log In</button>
            </div>
          </nav>
        </div>
        <button className="hamburger-btn menu-burger-open" onClick={openMenu} ref={menuButtonIconOpenRef}>
          <i className="fi fi-br-menu-burger menu-burger-open-icon"></i>
        </button>
      </section>

      {isModalOpen && (
        <div
          id="loginModal"
          className="modal"
          onClick={(e) => e.target.id === 'loginModal' && closeModal()}
          ref={loginModalRef}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form id="loginForm" autoComplete="on">
              <div className="form-group-modal">
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" required>
                  <option value="" defaultValue>Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>
              <div className="form-group-modal">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="form-group-modal">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  autoComplete="current-password"
                />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
