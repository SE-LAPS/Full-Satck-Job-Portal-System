// src/pages/Contact.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS if using npm

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact For Any Query</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i> 
          <p>Homagama, Colombo</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i> 
          <p>jobhunter@info.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i> 
          <p>+94 712 425 308</p>
        </div>
      </div>
      <div className="contact-content">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.3116457!2d78.46169491892919!3d7.851730318231425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1631524246045!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Sri Lanka Location"
        ></iframe>
      </div>
        <div className="contact-form">
          <p>
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste the
            files, add a little code and you're done.{' '}
            <a href="https://example.com/download">Download Now</a>.
          </p>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
