import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SOCIAL_LINKS, SITE_CONFIG } from '../config';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback(null);

    if (!validate()) return;

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFeedback({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          setFeedback(null);
        }, 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('idle');
        setFeedback({ 
          type: 'error', 
          text: 'Failed to send message. Please verify your internet connection or email configuration.' 
        });
      });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info reveal">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">Let's Build Something<br />Amazing Together</h2>
            <p className="contact-desc">
              Whether you have a question, a project idea, or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="contact-methods">
              <div className="contact-method-card glass-card">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <h4>Email Me</h4>
                  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
                </div>
              </div>

              <div className="contact-method-card glass-card mt-4">
                <div className="method-icon">
                  <MessageSquare size={24} />
                </div>
                <div className="method-details">
                  <h4>Social Profiles</h4>
                  <div className="social-links-small">
                    <a href={SOCIAL_LINKS.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <span>•</span>
                    <a href={SOCIAL_LINKS.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <span>•</span>
                    <a href={SOCIAL_LINKS.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a>
                    <span>•</span>
                    <a href={SOCIAL_LINKS.whatsapp.url} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-wrapper glass-card reveal">
            <h3 className="form-title">Send a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                  style={errors.name ? { borderColor: '#ef4444' } : {}}
                />
                {errors.name && <span className="form-error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  style={errors.email ? { borderColor: '#ef4444' } : {}}
                />
                {errors.email && <span className="form-error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                  style={errors.message ? { borderColor: '#ef4444' } : {}}
                />
                {errors.message && <span className="form-error-text">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className={`btn-primary submit-btn ${status}`}
                disabled={status !== 'idle'}
              >
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'sending' && <span className="loader">Sending...</span>}
                {status === 'success' && <><CheckCircle2 size={18} /> Message Sent!</>}
              </button>

              {feedback && (
                <div className={`form-feedback ${feedback.type}`}>
                  {feedback.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

