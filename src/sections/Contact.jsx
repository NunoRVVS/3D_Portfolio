import React, { useState } from 'react';
import ContactExperience from '../components/ContactExperience';
import TitleHeader from '../components/TitleHeader'; // Assuming TitleHeader exists in components
import emailjs from '@emailjs/browser'; // If you plan to use EmailJS for form submission

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    // This is where you would integrate with an email service like EmailJS
    setLoading(true)
    try{  
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch(error){
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally{
      setLoading(false)
    }
    
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let's Connect!"
          sub="Feel free to reach out for collaborations or just to say hello."
        />
        <div className="mt-16 grid-12-cols">
          {/*Contact form - Left Side*/}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
              <div>
                <label className="form-label">
                  <span className="form-label-text">Your Name</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="form-input" required />
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span className="form-label-text">Your Email</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email address?" className="form-input" required />
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span className="form-label-text">Your Message</span>
                  <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="form-textarea" required />
                </label>
              </div>
              <button type="submit" disabled={loading}>
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">{loading ? 'Sending...' : 'Send Message'}</p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>
            </div>
          </div>
          {/*3D model experience - Right side*/}
          <div className="xl:col-span-7 min-h-96px">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
