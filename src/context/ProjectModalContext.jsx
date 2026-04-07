import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import '../features/CallToAction.css';

const ProjectModalContext = createContext(null);

const TO_EMAIL = 'info@metagensoft.com';

export const ProjectModalProvider = ({ children }) => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const openModal = () => {
    setIsOpen(true);
    setSubmitted(false);
    reset();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitted(false);
    reset();
    document.body.style.overflow = '';
  };

  const onSubmit = (data) => {
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Service: ${data.service}
Budget: ${data.budget || 'N/A'}
Message: ${data.message}
    `.trim();

    window.location.href = `mailto:${TO_EMAIL}?subject=New Project Enquiry from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const modal = (
    <div className="project-modal-overlay" onClick={closeModal}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>

        <div className="pm-header">
          <div>
            <h3 className="pm-title">Start Your Project</h3>
            <p className="pm-sub">Fill in the details — we'll get back within 24 hrs.</p>
          </div>
          <button type="button" className="pm-close" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {submitted ? (
          <div className="pm-success">
            <div className="pm-success-icon"><i className="fa-solid fa-circle-check"></i></div>
            <h4>All Set!</h4>
            <p>Your email client opened with all details pre-filled. Just hit Send!</p>
            <button type="button" className="pm-btn" onClick={closeModal}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="pm-form">

            <div className="pm-row">
              <div className="pm-group">
                <label>Full Name <span>*</span></label>
                <input
                  placeholder="John Doe"
                  {...register('name', { required: 'Name is required' })}
                  className={errors.name ? 'is-invalid' : ''}
                />
                {errors.name && <span className="pm-field-error">{errors.name.message}</span>}
              </div>
              <div className="pm-group">
                <label>Email Address <span>*</span></label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                  })}
                  className={errors.email ? 'is-invalid' : ''}
                />
                {errors.email && <span className="pm-field-error">{errors.email.message}</span>}
              </div>
            </div>

            <div className="pm-row">
              <div className="pm-group">
                <label>Phone Number</label>
                <input placeholder="+91 00000 00000" {...register('phone')} />
              </div>
              <div className="pm-group">
                <label>Service Needed <span>*</span></label>
                <select
                  {...register('service', { required: 'Please select a service' })}
                  className={errors.service ? 'is-invalid' : ''}
                >
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Cloud Solutions</option>
                  <option>AI &amp; Machine Learning</option>
                  <option>DevOps &amp; CI/CD</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
                {errors.service && <span className="pm-field-error">{errors.service.message}</span>}
              </div>
            </div>

            <div className="pm-group">
              <label>Estimated Budget</label>
              <select {...register('budget')}>
                <option value="">Select budget range</option>
                <option>Under ₹1 Lakh</option>
                <option>₹1L – ₹5L</option>
                <option>₹5L – ₹20L</option>
                <option>₹20L+</option>
                <option>Let's Discuss</option>
              </select>
            </div>

            <div className="pm-group">
              <label>Project Details <span>*</span></label>
              <textarea
                rows="4"
                placeholder="Describe your project, goals, or any specific requirements..."
                {...register('message', { required: 'Please describe your project' })}
                className={errors.message ? 'is-invalid' : ''}
              />
              {errors.message && <span className="pm-field-error">{errors.message.message}</span>}
            </div>

            <button type="submit" className="pm-btn" disabled={isSubmitting}>
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>

          </form>
        )}
      </div>
    </div>
  );

  return (
    <ProjectModalContext.Provider value={{ openModal }}>
      {children}
      {isOpen && createPortal(modal, document.body)}
    </ProjectModalContext.Provider>
  );
};

export const useProjectModal = () => useContext(ProjectModalContext);
