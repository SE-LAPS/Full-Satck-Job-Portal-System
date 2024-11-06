import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/Testimonial.css';

const testimonials = [
  {
    name: "Jane Doe",
    profession: "Software Engineer",
    image: "https://img.freepik.com/free-photo/artist-white_1368-3543.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user",
    feedback: "Simply put, not all hiring solutions are made equally. Our award-winning software is repeatedly rated #1 for our user-friendly design, our intuitive navigation, ease of setup, and ongoing administration."
  },
  {
    name: "John Smith",
    profession: "Product Manager",
    image: "https://static.vecteezy.com/system/resources/thumbnails/003/492/207/small/i-don-t-know-portrait-of-confused-handsome-bearded-young-man-standing-with-raised-arms-and-looking-at-camera-with-answer-indoor-studio-shot-isolated-on-blue-background-free-photo.JPG",
    feedback: "The SmartRecruiters Hiring Platform is made up of nine core products to facilitate effective end-to-end hiring. Each product is built on the same underlying technology, providing you with incredible versatility to turn on what you need, when you need it."
  },
  {
    name: "Angela Martin",
    profession: "UX Designer",
    image: "https://img.freepik.com/premium-photo/im-up-challenge-cropped-portrait-attractive-young-businesswoman-working-her-desk-office_590464-64778.jpg",
    feedback: "While we pride ourselves on our out-of-the box solution, we understand the world around us is moving faster than we could ever keep up. To that end, we encourage our customers to broaden the reach of SmartRecruiters however they see fit - whether through our standard HCM integrations, our vast and open APIs, or our app marketplace full of hundreds of pre-approved and trusted partners."
  },
  {
    name: "Michael Scott",
    profession: "Business Analyst",
    image: "https://img.freepik.com/free-photo/medium-shot-smiley-man-work_23-2149622834.jpg",
    feedback: "Simply put, not all hiring solutions are made equally. Our award-winning software is repeatedly rated #1 for our user-friendly design, our intuitive navigation, ease of setup, and ongoing administration."
  },
  {
    name: "Jan Levinson",
    profession: "Database Administrater",
    image: "https://d1h36vgosc7o6x.cloudfront.net/web/production/uploads/gallery/blogs/13fb8897-cb4a-4047-a91f-79b25c0c24f3/asian-businesswoman-sitting-office-portrait-executive-woman.jpg?f=webp",
    feedback: "The SmartRecruiters Hiring Platform is made up of nine core products to facilitate effective end-to-end hiring. Each product is built on the same underlying technology, providing you with incredible versatility to turn on what you need, when you need it."
  },
  {
    name: "Ryan Howard",
    profession: "Dev-Ops Engineer",
    image: "https://img.freepik.com/premium-photo/portrait-young-man-sitting-his-desk-office_484651-5103.jpg",
    feedback: "While we pride ourselves on our out-of-the box solution, we understand the world around us is moving faster than we could ever keep up. To that end, we encourage our customers to broaden the reach of SmartRecruiters however they see fit - whether through our standard HCM integrations, our vast and open APIs, or our app marketplace full of hundreds of pre-approved and trusted partners."
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="testimonial-container">
      <center><h2 className="testimonial-title">OUR CLIENTS</h2></center>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-card">
              <div className="testimonial-image-container">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-profession">{testimonial.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;