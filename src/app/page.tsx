import Link from "next/link";
import styles from "./page.module.css";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to My Business</h1>
          <p className={styles.subtitle}>
            Providing exceptional services to help your business grow and succeed.
          </p>
          <div className={styles.ctas}>
            <Link href="/services" className={styles.primary}>
              Our Services
            </Link>
            <Link href="/contact" className={styles.secondary}>
              Get In Touch
            </Link>
          </div>
        </section>

        <section className={styles.features}>
          <h2>Why Choose Us?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <h3>Professional</h3>
              <p>Our expert team brings years of industry experience and proven expertise to every project. We maintain the highest standards of professionalism in all our interactions and deliverables.</p>
              <p>From initial consultation to project completion, you can trust our seasoned professionals to handle your business needs with the utmost care and attention to detail.</p>
            </div>
            <div className={styles.feature}>
              <h3>Reliable</h3>
              <p>Consistency and dependability are at the core of our service delivery. We pride ourselves on meeting deadlines and exceeding expectations with every project we undertake.</p>
              <p>Our track record speaks for itself - clients return to us time and again because they know they can count on us to deliver quality results when promised.</p>
            </div>
            <div className={styles.feature}>
              <h3>Innovative</h3>
              <p>We stay ahead of industry trends and embrace cutting-edge technologies to provide solutions that give your business a competitive advantage in today's market.</p>
              <p>Our creative approach to problem-solving ensures that each solution is uniquely tailored to your specific challenges and objectives, not a one-size-fits-all approach.</p>
            </div>
            <div className={styles.feature}>
              <h3>Efficient</h3>
              <p>Our streamlined processes and proven methodologies eliminate unnecessary steps and reduce project timelines without compromising on quality or attention to detail.</p>
              <p>By optimizing workflows and leveraging automation where appropriate, we help you achieve better results faster while keeping costs under control.</p>
            </div>
            <div className={styles.feature}>
              <h3>Customer-Focused</h3>
              <p>Every decision we make is guided by what's best for our clients. We take the time to understand your unique business challenges and goals before proposing solutions.</p>
              <p>Our dedicated account managers ensure clear communication throughout your project, providing regular updates and being available to address any questions or concerns promptly.</p>
            </div>
            <div className={styles.feature}>
              <h3>Scalable</h3>
              <p>Our solutions are designed with growth in mind, ensuring that what we build today can adapt and expand as your business evolves and your needs change over time.</p>
              <p>Whether you're a startup looking to establish your foundation or an enterprise seeking to optimize operations, our scalable approach grows with your ambitions.</p>
            </div>
            <div className={styles.feature}>
              <h3>Secure</h3>
              <p>We implement industry-leading security protocols and best practices to protect your sensitive data and maintain the integrity of your business operations at all times.</p>
              <p>From encrypted communications to secure hosting environments, every aspect of our service is designed with security as a fundamental requirement, not an afterthought.</p>
            </div>
            <div className={styles.feature}>
              <h3>Cost-Effective</h3>
              <p>We believe in delivering maximum value for your investment through transparent pricing, efficient processes, and solutions that provide long-term benefits to your organization.</p>
              <p>Our upfront pricing model eliminates surprises, and our focus on quality means you won't need costly revisions or frequent maintenance down the road.</p>
            </div>
            <div className={styles.feature}>
              <h3>24/7 Support</h3>
              <p>Our commitment to your success doesn't end when the project is delivered. We provide round-the-clock support to ensure your systems run smoothly and your questions get answered quickly.</p>
              <p>Whether it's a technical issue, a quick question, or emergency support, our dedicated team is always available to provide the assistance you need when you need it most.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
}
