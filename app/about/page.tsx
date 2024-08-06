
import React from 'react';
import styles from './Component.module.css'; // Import the CSS module
import { FloatingNavDemo } from '../components/FloatingNavDemo';
import { LayoutGridDemo } from '../components/LayoutGridDemo';

const GlassesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </svg>
  );
};

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <FloatingNavDemo></FloatingNavDemo>
      <section className="bg-primary py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-4">
              <GlassesIcon className="h-16 w-16 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Sharma Optics
            </h1>
            <p className="max-w-3xl text-lg text-primary-foreground">
              Providing high-quality eyewear and exceptional eye care services to our community since 1985.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Our History</h2>
              <p className="text-muted-foreground">
                Sharma Optics was founded in 1985 by a team of passionate opticians who were committed to providing the
                highest quality eyewear and eye care services to our local community. Over the years, we&apos;ve grown to
                become a trusted and respected name in the industry, known for our expertise, attention to detail, and
                unwavering dedication to customer satisfaction.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Quality & Service</h2>
              <p className="text-muted-foreground">
                At Sharma Optics, we take pride in our commitment to quality and customer service. Our team of
                experienced opticians and eye care professionals use the latest technology and techniques to ensure that
                every pair of glasses or contact lenses we provide is tailored to the individual needs of our clients.
                We strive to create a welcoming and personalized experience for every customer who walks through our
                doors.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">Our Products & Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-xl font-bold">Eyeglasses</h3>
              <p className="text-muted-foreground">
                Browse our extensive collection of stylish and high-quality eyeglasses, crafted with the latest
                materials and technologies to provide you with the perfect fit and visual clarity.
              </p>
            </div>
            <div className="bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-xl font-bold">Sunglasses</h3>
              <p className="text-muted-foreground">
                Protect your eyes from the sun&apos;s harmful UV rays with our selection of fashionable and functional
                sunglasses, designed to complement any lifestyle.
              </p>
            </div>
            <div className="bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-xl font-bold">Contact Lenses</h3>
              <p className="text-muted-foreground">
                Experience the convenience and comfort of our high-quality contact lenses, available in a variety of
                styles and prescriptions to meet your individual needs.
              </p>
            </div>
            <div className="bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-xl font-bold">Eye Exams</h3>
              <p className="text-muted-foreground">
                Our experienced eye care professionals provide comprehensive eye exams to ensure your vision is at its
                best. We use the latest technology to detect and address any vision issues.
              </p>
            </div>
            <div className="bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-xl font-bold">Optical Services</h3>
              <p className="text-muted-foreground">
                From custom lens fittings to frame adjustments and repairs, our skilled opticians are dedicated to
                providing exceptional optical services to meet all your eyewear needs.
              </p>
            </div>
            <div className="bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-4 text-xl font-bold">Specialty Lenses</h3>
              <p className="text-muted-foreground">
                Explore our selection of specialty lenses, including progressive, bifocal, and anti-reflective options,
                designed to enhance your visual experience and meet your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;