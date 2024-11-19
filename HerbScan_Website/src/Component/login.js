import React, { useEffect } from 'react'; // Remove useState import
import './login.css';
import Logo from '../Assets/logo.png';
import SignupBg from '../Assets/Signup_bg.jpg';
import SignupRightBg from '../Assets/Signup_rigjt_bg.jpg';

function Login() {
  useEffect(() => {
    const handleScroll = () => {
      // Perform any action needed on scroll (if necessary)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="login-container" style={{ backgroundImage: `url(${SignupBg})` }}>
      {/* Left Section */}
      <div className="login-left">
        <div className="signup-form">
          <img src={Logo} alt="Logo" className="logo" />
          <h2>CREATE YOUR ACCOUNT</h2>
          <div className="input-group fade-in">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-group fade-in">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group fade-in">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="signup-button fade-in">Sign Up</button>
          <p className="login-prompt">Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="floating-image-wrapper">
          <img src={SignupRightBg} alt="Background" className="background-image" />
          <div className="text-overlay" onClick={() => window.location.href = '/'}>Scan with HerbScan</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
