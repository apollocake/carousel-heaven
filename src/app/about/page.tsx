'use client';

import Link from "next/link";
import styles from "../page.module.css";
import Navigation from "../../components/Navigation";
import { performServerAction } from "../../lib/actions";

const handleClick = async () => {
  try {
    console.log('🖱️ Button clicked on client - check browser console');
    
    // Call the server action
    const result = await performServerAction();
    
    console.log('✅ Server action result:', result);
    alert(`Server response: ${result.message}\nTimestamp: ${result.timestamp}`);
  } catch (error) {
    console.error('❌ Error calling server action:', error);
    alert('Error executing server action');
  }
};

export default function About() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Learn more about our company, our mission, and the team behind our success.
          </p>
        </section>

        <section className={styles.features}>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Our Mission</h3>
              <p>
                We are dedicated to providing exceptional services that help businesses 
                grow and succeed in today&apos;s competitive market. Our commitment to quality 
                and innovation drives everything we do.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Our Story</h3>
              <p>
                Founded with a vision to make a difference, we have grown from a small 
                startup to a trusted partner for businesses worldwide. Our journey is 
                marked by continuous learning and adaptation.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Our Values</h3>
              <p>
                Integrity, innovation, and customer satisfaction are at the core of 
                our business. We believe in building long-term relationships based 
                on trust and mutual success.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.hero}>
          <h2>Our Team</h2>
          <p className={styles.subtitle}>
            Our diverse team of experts brings together years of experience and 
            fresh perspectives to deliver outstanding results for our clients.
          </p>
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.primary}>
              Get In Touch
            </Link>
          </div>
        </section>
        <button onClick={handleClick} className={styles.backButton}>Action</button>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
}
