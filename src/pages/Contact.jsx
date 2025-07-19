import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Save to local storage
    const existingMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    existingMessages.push(formData);
    localStorage.setItem("contactMessages", JSON.stringify(existingMessages));

    //  Clear form + show success message
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSuccess(true);

    // Hide success message after 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="fas fa-home me-1"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
          <h1 className="text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="contact-form-card text-center">
                <h2>Send Us a Message</h2>

                {success && (
                  <div className="alert alert-success" role="alert">
                    ✅ Your message has been saved locally!
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
       <section className="location-section">
      <div className="container">
        <h2 className="text-center">Find Us Here</h2>
        <div className="row justify-content-center g-4">
          {/*  Location Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="location-card text-center">
              <div className="icon-circle mx-auto">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h4>Our Main Office</h4>
              <p>123 Main Street, Alexandria, Egypt</p>
              <p className="mb-0">
                <a
                  href="https://maps.google.com/?q=123+Main+Street,+Alexandria,+Egypt"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Map
                </a>
              </p>
            </div>
          </div>

          {/*  Location Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="location-card text-center">
              <div className="icon-circle mx-auto">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h4>Call Us</h4>
              <p>+20 123 456 7890</p>
              <p className="mb-0">
                <a href="tel:+201234567890">Call Now</a>
              </p>
            </div>
          </div>

          {/*  Location Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="location-card text-center">
              <div className="icon-circle mx-auto">
                <i className="fas fa-envelope"></i>
              </div>
              <h4>Email Us</h4>
              <p>info@blaban.com</p>
              <p className="mb-0">
                <a href="mailto:info@blaban.com">Send Email</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/*  Map Section */}
      <section className="map-section mt-4">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.390886676106!2d29.91979438485299!3d31.20009238146747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c490a0b6d91b%3A0x6b7c5c0a7e0f8f8!2sAlexandria%2C%20Alexandria%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1625840000000!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div><br></br><br></br>
      </section>

    
    </div>
  );
};

export default Contact;
