import Image from "next/image";
import { Icon } from "./icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#aboutus" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contactus" },
];

const contacts = [
  {
    icon: "mapMarkerAlt",
    label: "G-6 Sector 1 DSIDC Industreal area bawana 110039",
  },
  { icon: "phoneAlt", label: "+91 92509 07667", href: "tel:+919250907667" },
  { icon: "envelopeOpen", label: "ms134942@gmail.com", href: "mailto:ms134942@gmail.com" },
];

const socials = [
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/sandhyaplastic/" },
  {
    name: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61572032132666",
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer anim" data-anim="fadeIn">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <Image src="/logo.png" alt="Sandhya Plastic" width={1402} height={1121} sizes="140px" />
          </div>
          <p className="footer-tagline">
            Discover premium pots designed to elevate your plants and enhance modern
            living spaces with timeless elegance.
          </p>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-contact">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="footer-contact-icon">
                  <Icon name={c.icon} />
                </span>
                {c.href ? <a href={c.href}>{c.label}</a> : <span>{c.label}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2026 Sandhya Plastic All Right Reserved | Powered by{" "}
          <a href="https://www.cybertricksmedia.com" target="_blank" rel="noopener noreferrer">
            Cybertricksmedia Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}
