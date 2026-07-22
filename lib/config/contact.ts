export interface ContactFormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
}

export interface ContactConfig {
  title: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  form: {
    title: string;
    description: string;
    fields: ContactFormField[];
    submitButton: {
      text: string;
    };
    successMessage: string;
    errorMessage: string;
  };
  contactInfo: {
    title: string;
    items: Array<{
      icon: string;
      label: string;
      value: string;
      link?: string;
    }>;
  };
  mapEmbed?: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  animationSettings: {
    staggerChildren: number;
    listItemDelay: number;
    formFieldsDelay: number;
    contactInfoDelay: number;
  };
}

export const contactConfig: ContactConfig = {
  title: "Contact ACM RVCE",
  description:
    "Get in touch with the ACM RVCE team for any queries or feedback",
  hero: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    image: "/about/about-acm-image.jpg",
  },
  form: {
    title: "Send us a message",
    description:
      "Got a technical issue? Want to send us feedback about a feature? Need details about any event? Let us know.",
    fields: [
      {
        id: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
        minLength: 3,
        maxLength: 50,
      },
      {
        id: "email",
        label: "Your email",
        type: "email",
        placeholder: "example@rvce.edu.in",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        required: true,
        pattern: "[0-9]{10}",
      },
      {
        id: "subject",
        label: "Subject",
        type: "text",
        placeholder: "How can we help you?",
        required: true,
        minLength: 5,
        maxLength: 100,
      },
      {
        id: "message",
        label: "Your message",
        type: "textarea",
        placeholder: "Leave a comment...",
        required: true,
        minLength: 10,
        maxLength: 500,
      },
    ],
    submitButton: {
      text: "Send Message",
    },
    successMessage: "Thank you! Your message has been sent successfully.",
    errorMessage: "Oops! Something went wrong. Please try again later.",
  },
  contactInfo: {
    title: "Our Contact Information",
    items: [
      {
        icon: "MapPin",
        label: "Address",
        value:
          "R.V. College of Engineering, Mysore Road, Bengaluru, Karnataka 560059",
        link: "https://maps.google.com/?q=R.V.+College+of+Engineering,+Mysore+Road,+Bengaluru",
      },
      {
        icon: "Mail",
        label: "Email",
        value: "acm@rvce.edu.in",
        link: "mailto:acm@rvce.edu.in",
      },
      {
        icon: "Phone",
        label: "Chair Contact",
        value: "+91 88614 92072",
        link: "tel:+918861492072",
      },
      {
        icon: "Phone",
        label: "Vice Chair Contact",
        value: "+91 91139 06099",
        link: "tel:+919113906099",
      },
    ],
  },
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/acm-rvce/",
      icon: "Linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/acmrvce",
      icon: "Github",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/acm.rvce/",
      icon: "Instagram",
    },
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.599340738658!2d77.49692307583591!3d12.92398338746083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d7d493d%3A0x6e8abd2188934b12!2sR.V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1712233235427!5m2!1sen!2sin",
  animationSettings: {
    staggerChildren: 0.1,
    listItemDelay: 0.2,
    formFieldsDelay: 0.05,
    contactInfoDelay: 0.1,
  },
};
