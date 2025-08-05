import Link from "next/link";
import styles from "./page.module.css";
import Navigation from "../components/Navigation";
import SimpleSlider from "./SimpleSlider";
import TestimonialsSlider from "../components/TestimonialsSlider";
import ImagesSlider from "../components/ImagesSlider";

export default function Home() {
  const carouselItems = [
    {
      title: "Professional",
      content: [
        "Our expert team brings years of industry experience and proven expertise to every project. We maintain the highest standards of professionalism in all our interactions and deliverables.",
        "From initial consultation to project completion, you can trust our seasoned professionals to handle your business needs with the utmost care and attention to detail."
      ]
    },
    {
      title: "Reliable",
      content: [
        "Consistency and dependability are at the core of our service delivery. We pride ourselves on meeting deadlines and exceeding expectations with every project we undertake.",
        "Our track record speaks for itself - clients return to us time and again because they know they can count on us to deliver quality results when promised."
      ]
    },
    {
      title: "Innovative",
      content: [
        "We stay ahead of industry trends and embrace cutting-edge technologies to provide solutions that give your business a competitive advantage in today's market.",
        "Our creative approach to problem-solving ensures that each solution is uniquely tailored to your specific challenges and objectives, not a one-size-fits-all approach."
      ]
    },
    {
      title: "Efficient",
      content: [
        "Our streamlined processes and proven methodologies eliminate unnecessary steps and reduce project timelines without compromising on quality or attention to detail.",
        "By optimizing workflows and leveraging automation where appropriate, we help you achieve better results faster while keeping costs under control."
      ]
    },
    {
      title: "Customer-Focused",
      content: [
        "Every decision we make is guided by what's best for our clients. We take the time to understand your unique business challenges and goals before proposing solutions.",
        "Our dedicated account managers ensure clear communication throughout your project, providing regular updates and being available to address any questions or concerns promptly."
      ]
    },
    {
      title: "Scalable",
      content: [
        "Our solutions are designed with growth in mind, ensuring that what we build today can adapt and expand as your business evolves and your needs change over time.",
        "Whether you're a startup looking to establish your foundation or an enterprise seeking to optimize operations, our scalable approach grows with your ambitions."
      ]
    },
    {
      title: "Secure",
      content: [
        "We implement industry-leading security protocols and best practices to protect your sensitive data and maintain the integrity of your business operations at all times.",
        "From encrypted communications to secure hosting environments, every aspect of our service is designed with security as a fundamental requirement, not an afterthought."
      ]
    },
    {
      title: "Cost-Effective",
      content: [
        "We believe in delivering maximum value for your investment through transparent pricing, efficient processes, and solutions that provide long-term benefits to your organization.",
        "Our upfront pricing model eliminates surprises, and our focus on quality means you won't need costly revisions or frequent maintenance down the road."
      ]
    },
    {
      title: "24/7 Support",
      content: [
        "Our commitment to your success doesn't end when the project is delivered. We provide round-the-clock support to ensure your systems run smoothly and your questions get answered quickly.",
        "Whether it's a technical issue, a quick question, or emergency support, our dedicated team is always available to provide the assistance you need when you need it most."
      ]
    }
  ];

  const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      quote: "Working with this team transformed our business completely. Their professionalism and expertise exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Digital Solutions",
      quote: "The results speak for themselves. Our efficiency increased by 40% after implementing their solutions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Global Enterprises",
      quote: "Exceptional service and support. They were available 24/7 and always went above and beyond to help us succeed.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "Innovation Labs",
      quote: "Their innovative approach to problem-solving helped us stay ahead of the competition. Highly recommended!",
      rating: 5
    }
  ];

  const imagesData = [
    {
      src: "/swirl.svg",
      alt: "Team collaboration",
      title: "Our Professional Team",
      description: "Experienced professionals working together to deliver exceptional results for our clients."
    },
    {
      src: "/swirl.svg",
      alt: "Modern office space",
      title: "State-of-the-Art Workspace",
      description: "Our modern facilities are designed to foster creativity and productivity."
    },
    {
      src: "/swirl.svg",
      alt: "Client meeting",
      title: "Client-Focused Approach",
      description: "We prioritize understanding our clients' needs to deliver tailored solutions."
    },
    {
      src: "/swirl.svg",
      alt: "Technology solutions",
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies to provide innovative solutions for your business."
    }
  ];

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
          <SimpleSlider items={carouselItems} />
        </section>

        <section className={styles.features}>
          <h2>What Our Clients Say</h2>
          <TestimonialsSlider testimonials={testimonialsData} />
        </section>

        <section className={styles.features}>
          <h2>Our Work & Workspace</h2>
          <ImagesSlider images={imagesData} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 My Business. All rights reserved.</p>
      </footer>
    </div>
  );
}
