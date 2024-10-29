import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://art-bernadeta.ch:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Server response:', response);

      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
        setError('');
        setSuccess(true);
      } else {
        console.error('Error sending email');
        setError(t('contact.error'));
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      console.error('Error sending email:', error);
      setError(t('contact.unexpectedError'));
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="row">
        <div className="contact-form">
          <h4>{t('contact.title')}</h4>
          <hr className="decorative-line" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t('contact.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder={t('contact.email')}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              placeholder={t('contact.message')}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? t('contact.submitting') : t('contact.submit')}
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{t('contact.success')}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

