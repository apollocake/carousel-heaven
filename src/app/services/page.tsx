import Link from "next/link";
import styles from "../page.module.css";
import Navigation from "../../components/Navigation";

export default function Services() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive solutions tailored to meet your business needs and drive growth.
          </p>
        </section>

        <section className={styles.features}>
          <h2>What We Offer</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Consulting</h3>
              <p>
                Strategic business consulting to help you make informed decisions 
                and optimize your operations for maximum efficiency and growth.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Development</h3>
              <p>
                Custom software development solutions that are scalable, reliable, 
                and designed to meet your specific business requirements.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Support</h3>
              <p>
                Ongoing technical support and maintenance to ensure your systems 
                run smoothly and your business operations remain uninterrupted.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Training</h3>
              <p>
                Comprehensive training programs to help your team master new 
                technologies and improve their skills for better productivity.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Integration</h3>
              <p>
                Seamless integration services to connect your existing systems 
                and streamline your workflow for improved efficiency.
              </p>
            </div>
            <div className={styles.feature}>
              <h3>Analytics</h3>
              <p>
                Data analytics and reporting solutions to help you gain insights 
                into your business performance and make data-driven decisions.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.hero}>
          <h2>Ready to Get Started?</h2>
          <p className={styles.subtitle}>
            Contact us today to discuss how our services can help your business succeed.
          </p>
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.primary}>
              Contact Us
            </Link>
            <Link href="/about" className={styles.secondary}>
              Learn More
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
}
