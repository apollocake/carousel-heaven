'use client';

import Link from "next/link";
import styles from "../page.module.css";
import Navigation from "../../components/Navigation";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    debugger;
    e.preventDefault();
    // Handle form submission here
    alert('Form submitted! (This is just a demo)');
  };

  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Get in touch with us today. We&apos;d love to hear from you and discuss how we can help your business grow.
          </p>
        </section>

        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Email</h3>
              <p>
                <strong>info@mybusiness.com</strong><br />
                Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Phone</h3>
              <p>
                <strong>+1 (555) 123-4567</strong><br />
                Call us during business hours: Monday - Friday, 9AM - 6PM EST.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Address</h3>
              <p>
                <strong>123 Business Street<br />
                Suite 100<br />
                City, State 12345</strong><br />
                Visit us at our office or schedule a meeting.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.hero}>
          <h2>Send us a Message</h2>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e5e5',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e5e5',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e5e5',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e5e5e5',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                className={styles.primary}
                style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
}
