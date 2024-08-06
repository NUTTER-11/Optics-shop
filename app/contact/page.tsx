import React from 'react';
import Link from "next/link"
import { FC, SVGProps } from "react"
import { FloatingNavDemo } from '../components/FloatingNavDemo';

const Contact: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <FloatingNavDemo></FloatingNavDemo>
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Visit our optical shop or reach out to us through any of the following channels. We're here to help you find
            the perfect eyewear.
          </p>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <MapPinIcon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Visit Us</h3>
                <p className="text-muted-foreground">123 Main St, Anytown USA 12345</p>
                <Link
                  href="https://www.google.com/maps/place/Sharma+Optics/@31.1834107,75.9913741,17z/data=!3m1!4b1!4m6!3m5!1s0x391a94826ea0402b:0x5fb99e83ca4a70c3!8m2!3d31.1834061!4d75.993949!16s%2Fg%2F11hbgjbz18?entry=ttu"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                  prefetch={false}
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <PhoneIcon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MailOpenIcon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p className="text-muted-foreground">
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    info@opticsshop.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FacebookIcon className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <Link href="#" target="_blank" className="text-primary hover:underline" prefetch={false}>
                    Instagram
                  </Link>
                  <Link href="#" target="_blank" className="text-primary hover:underline" prefetch={false}>
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="pic.jpg"
            width="600"
            height="400"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  )
}

const ArrowUpRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const MailOpenIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}

const MapPinIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

const PhoneIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
  )
}

export default Contact
