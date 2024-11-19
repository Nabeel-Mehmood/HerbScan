import React, { useState, useEffect } from 'react';
import './home.css';
import './header.css';
import './footer.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { register } from 'swiper/element';
import Logo from '../Assets/logo.png';

// Images for the slider
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
import image4 from '../Assets/image4.jpg';
import image5 from '../Assets/image5.jpg';

register();

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevent the default behavior (Prevent file from being opened)
    const file = event.dataTransfer.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow dropping by preventing the default handling
  };

  const handleRemove = () => {
    setUploadedImage(null);
    setImageName("");
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
          {!isScrolled && <span className="logo-text">HerbScan</span>}
        </div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <i className="search-icon fas fa-search"></i>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          {!isScrolled && (
            <button
              className="signup-btn"
              onClick={() => (window.location.href = '/login')}
            >
              Sign Up
            </button>
          )}
        </nav>
      </header>

      {/* First Parallax Section
      <div className="parallax-section search-section">
        
      </div> */}

      {/* Second Parallax Section */}
      <div className="parallax-section content-section">
        {/* File Upload */}
        <div
          className="file-upload"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ border: uploadedImage ? 'none' : '2px dashed #ccc' }}
        >
          <label htmlFor="file-upload-input" className="upload-label">
            <i className="fas fa-cloud-upload-alt upload-icon"></i>
            Drag & Drop your file here or <span>Browse</span>
          </label>
          <input
            type="file"
            id="file-upload-input"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <p className="upload-note">Supported formats: JPG, PNG</p>

          {uploadedImage && (
            <div className="uploaded-image-container">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="uploaded-image"
              />
              <div className="buttons-container">
                <button
                  className="identify-btn"
                  onClick={() => alert(`Image name: ${imageName}`)}
                >
                  Identify
                </button>
                <button className="remove-btn" onClick={handleRemove}>
                  Remove
                </button>
              </div>
              <p className="image-name">Image Name: {imageName}</p>
            </div>
          )}
        </div>

        {/* Image Slider */}
        <div className="image-slider">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Prevent autoplay from stopping on user interaction
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
          >
            <SwiperSlide>
              <div className="slide-container">
                <img src={image1} alt="Slide 1" />
                <div className="caption">Caption for Slide 1</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <img src={image2} alt="Slide 2" />
                <div className="caption">Caption for Slide 2</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <img src={image3} alt="Slide 3" />
                <div className="caption">Caption for Slide 3</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <img src={image4} alt="Slide 4" />
                <div className="caption">Caption for Slide 4</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <img src={image5} alt="Slide 5" />
                <div className="caption">Caption for Slide 5</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 HerbScan. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/help">Help Center</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
