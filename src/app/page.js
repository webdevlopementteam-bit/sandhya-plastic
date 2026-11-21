import Image from "next/image";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ProductCarousel from "@/components/ProductCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimations from "@/components/ScrollAnimations";
import SiteFooter from "@/components/SiteFooter";
import { Icon } from "@/components/icons";

const benefits = [
  {
    icon: "leaf",
    title: "Eco-Friendly Materials",
    text: "Made from sustainable, plant-based resources.",
  },
  {
    icon: "recycle",
    title: "100% Recyclable",
    text: "Designed for easy recycling and reduced waste.",
  },
  {
    icon: "globeAmericas",
    title: "Sustainable Future",
    text: "Focused on building a cleaner, greener planet.",
  },
  {
    icon: "boxes",
    title: "Smart Packaging",
    text: "Sustainable packaging with better efficiency.",
  },
];

const aboutFeatures = [
  {
    icon: "paintBrush",
    title: "Plant Watering",
    text: "Available in a variety of modern designs that enhance the beauty of any space.",
  },
  {
    icon: "shieldAlt",
    title: "Durable Material",
    text: (
      <>
        Built with high-quality material for long-lasting durability and
        <br /> crack resistance.
      </>
    ),
  },
  {
    icon: "feather",
    title: "Easy to Handle",
    text: "Designed to be lightweight, our pots are easy to move and reposition without hassle.",
  },
];

const newProducts = [
  {
    image: "/22.jpg.jpeg",
    title: "Vertical Line Classic Pot",
    text: "Minimal vertical line pattern offering a clean and timeless design for versatile use.",
  },
  {
    image: "/62.jpg.jpeg",
    title: "Ribbed Round Planter Pot",
    text: "Stylish ribbed texture with a classic round shape, ideal for both indoor and outdoor decor.",
  },
  {
    image: "/42.jpg.jpeg",
    title: "Square Flare Designer Pot",
    text: "Contemporary square design with a flared top, adding a bold and modern touch to any space.",
  },
  {
    image: "/32.jpg.jpeg",
    title: "Wave Edge Decorative Pot",
    text: "Unique wavy edges create a soft, artistic look, perfect for decorative and aesthetic setups.",
  },
  {
    image: "/72.jpg.jpeg",
    title: "Round Bowl Planter",
    text: "A wide, round-shaped planter that offers a balanced and elegant look, perfect for enhancing both indoor and outdoor spaces.",
  },
];

const topRatedProducts = [
  {
    image: "/Gemini_Generated_Image_cor2epcor2epcor2.jpeg",
    title: "Square Flare Designer Pot",
    text: "Contemporary square design with a flared top, adding a bold and modern touch to any space.",
  },
  {
    image: "/Gemini_Generated_Image_7xqo447xqo447xqo.jpeg",
    title: "Wavy Edge Designer Pot",
    text: "A unique sculpted design with a soft wavy rim, adding a bold and artistic statement to any space.",
  },
  {
    image: "/Gemini_Generated_Image_f2310df2310df231-1.png",
    title: "Fluted White Pot",
    text: "A minimal ribbed design in a clean white finish, perfect for modern and elegant interiors.",
  },
  {
    image: "/Gemini_Generated_Image_hj90l6hj90l6hj90.jpeg",
    title: "Hanging Handle Pot",
    text: "A vibrant and functional design with a built-in handle, ideal for adding a fresh, lively touch.",
  },
];

const featuredProducts = [
  {
    image: "/92.jpg.jpeg",
    title: "Hanging Handle Pot",
    text: "A vibrant and functional design with a built-in handle, ideal for adding a fresh, lively touch.",
  },
  {
    image: "/Gemini_Generated_Image_y4xe5dy4xe5dy4xe-1.png",
    title: "Textured Yellow Bowl Pot",
    text: "A compact woven-texture design that brings warmth and charm to small plant arrangements.",
  },
  {
    image: "/Gemini_Generated_Image_sl60jnsl60jnsl60-1.png",
    title: "Vertical Line Classic Pot",
    text: "Minimal vertical line pattern offering a clean and timeless design for versatile use.",
  },
  {
    image: "/Gemini_Generated_Image_4q8bfc4q8bfc4q8b-1.png",
    title: "Classic Black Nursery Pot",
    text: "A durable and practical pot, perfect for healthy plant growth with a simple, classic look.",
  },
];

const reviews = [
  {
    name: "Riya Sharma",
    text: "\"I recently purchased a few pots from this collection, and I must say I’m genuinely impressed. The quality, finish, and overall design feel very premium. They blend perfectly with my home decor and instantly uplift the look of my space. Even the packaging and delivery experience was smooth.Highly recommended for anyone looking to add elegance to their home.\"",
  },
  {
    name: "Ankit Verma",
    text: "\"These pots exceeded my expectations in every way. The material feels strong and durable, and the designs are very modern yet timeless. I placed them in my living room and balcony, and they have completely enhanced the aesthetic. You can clearly see the attention to detail in each piece. Great value for money and a very satisfying purchase.\"",
  },
  {
    name: "Neha Gupta",
    text: "\"I was looking for something stylish and unique for my indoor plants, and this collection turned out to be perfect. The pots have a very elegant finish and look even better in real life than in pictures. They are sturdy, well-crafted, and add a sophisticated touch to my decor. I’ve already received so many compliments from guests!\"",
  },
];

function IconBox({ icon, title, text, className = "", anim }) {
  return (
    <div
      className={`w icon-box ${className}${anim ? " anim" : ""}`}
      data-anim={anim}
    >
      <div className="icon-box-icon">
        <span className="icon-circle">
          <Icon name={icon} />
        </span>
      </div>
      <div className="icon-box-content">
        <h3 className="icon-box-title">{title}</h3>
        {text && <p className="icon-box-desc">{text}</p>}
      </div>
    </div>
  );
}

function PromoCard({ image, tag, title, side, hoverEffect, imageAlt = "" }) {
  return (
    <div className={`col c50 promo-col promo-col-${side} anim`} data-anim="zoomIn">
      <div className="wrap">
        <div className="inner-row boxed">
          <div className="col c50">
            <div className="wrap">
              <div className={`w img-hover ${hoverEffect}`}>
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 767px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
          <div className="col c50">
            <div className="wrap">
              <h2 className="w tag promo-tag">{tag}</h2>
              <h2 className="w promo-title">{title}</h2>
              <div className="w">
                <a className="btn" href="#contactus">
                  <span>Click here</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="main-container">
      <Header />

      <main id="main">
        {/* Hero slideshow */}
        <section className="sec hero">
          <HeroSlider />
        </section>

        {/* What We Do */}
        <section className="sec intro anim" data-anim="fadeIn">
          <div className="row">
            <div className="col c100">
              <div className="wrap">
                <h2 className="w tag center">What We Do</h2>
                <h2 className="w title-44 center"> Core Benefits</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Core benefits */}
        <section className="sec benefits">
          <div className="row">
            {benefits.map((item) => (
              <div className="col c25" key={item.title}>
                <div className="wrap">
                  <IconBox {...item} className="icon-box-lg" anim="fadeIn" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promo cards */}
        <section className="sec promo promo-top anim" data-anim="fadeIn">
          <div className="row">
            <PromoCard
              side="left"
              image="/Gemini_Generated_Image_5moh1a5moh1a5moh-1-ezremove.png"
              tag="Redefine Plant Styling"
              title="Modern Pots for Every Space"
              hoverEffect="img-hover-4"
            />
            <PromoCard
              side="right"
              image="/Gemini_Generated_Image_u95zp3u95zp3u95z-ezremove.png"
              tag="Where Elegance Grows"
              title="Discover Luxury Pots for Every Corner"
              hoverEffect="img-hover-4"
            />
          </div>
        </section>

        {/* New products */}
        <section className="sec products new-products anim" data-anim="fadeInUp">
          <div className="row">
            <div className="col c100">
              <div className="wrap">
                <h2 className="w tag tag-lh center">New Products</h2>
                <h2 className="w title-44 title-lh44 center new-products-title">
                  latest Products
                </h2>
                <div className="w new-products-carousel">
                  <ProductCarousel items={newProducts} delay={4000} variant="compact" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="sec about" id="aboutus">
          <div className="row">
            <div className="col about-img-col anim" data-anim="zoomIn">
              <div className="wrap">
                <div className="w about-img">
                  <Image
                    src="/52.jpg.jpeg"
                    alt=""
                    width={1563}
                    height={1563}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="col about-text-col anim" data-anim="fadeIn">
              <div className="wrap">
                <h2 className="w tag tag-lh">About Pots</h2>
                <h2 className="w about-title">Premium Plastic Pots for Every Space</h2>
                <div className="w text-block about-text">
                  <p>
                    Our plastic pots are crafted to offer the perfect balance of
                    durability, style, and functionality. Designed for both indoor
                    and outdoor spaces, these pots are lightweight,
                    weather-resistant, and easy to maintain. With modern designs and
                    high-quality plastic materials, they enhance the beauty of any
                    environment while ensuring long-lasting performance for your
                    plants.
                    <br />
                    Every pot is designed with a focus on clean aesthetics and fine
                    finishing. Its neat and modern appeal adds a premium touch to
                    any space. A perfect blend of simplicity and elegance for
                    contemporary environments.
                  </p>
                </div>
                <div className="w inner-row">
                  {aboutFeatures.map((item) => (
                    <div className="col c33" key={item.title}>
                      <div className="wrap">
                        <IconBox {...item} className="icon-box-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where style meets greenery */}
        <section className="sec greenery anim" data-anim="fadeIn">
          <div className="row">
            <div className="col c100">
              <div className="wrap">
                <h2 className="w greenery-tag">Where style meets greenery</h2>
                <h2 className="w greenery-title">
                  Premium Pots for Modern
                  <br /> Plant Styling
                </h2>
                <div className="w text-block greenery-text">
                  <p>
                    Our premium pots combine modern design with durability, perfect
                    for <br />
                    enhancing your plants and elevating any space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top rated products */}
        <section className="sec products top-rated anim" id="products" data-anim="fadeInUp">
          <div className="row">
            <div className="col c100 col-flush">
              <div className="wrap">
                <h2 className="w tag tag-lh center">Top Rated Products</h2>
                <h2 className="w title-44 title-lh44 center">Popular Products</h2>
                <div className="w top-rated-carousel">
                  <ProductCarousel items={topRatedProducts} delay={5000} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo cards */}
        <section className="sec promo promo-bottom anim" data-anim="fadeIn">
          <div className="row">
            <PromoCard
              side="left"
              image="/48.jpg-scaled.jpeg"
              tag="Redefining Green Luxury"
              title="Discover Premium Pots for Every Space"
              hoverEffect="img-hover-6"
            />
            <PromoCard
              side="right"
              image="/45.jpg-scaled.jpeg"
              tag="Style Beyond Greenery"
              title="Discover Designer Pots for Every Corner"
              hoverEffect="img-hover-6"
            />
          </div>
        </section>

        {/* Testimonials */}
        <section className="sec testimonials anim" data-anim="fadeIn">
          <div className="row">
            <div className="col c100">
              <div className="wrap">
                <div className="w quote-icon">
                  <Icon name="quoteLeft" />
                </div>
                <div className="w review-widget">
                  <ReviewCarousel items={reviews} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured products */}
        <section className="sec products featured anim" data-anim="fadeInUp">
          <div className="row">
            <div className="col c100 col-flush">
              <div className="wrap">
                <h2 className="w tag tag-lh center">Popular Products</h2>
                <h2 className="w title-44 title-lh44 center">Featured Products</h2>
                <div className="w featured-carousel">
                  <ProductCarousel items={featuredProducts} delay={5000} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="sec contact anim" id="contactus" data-anim="fadeIn">
          <div className="row">
            <div className="col c50 contact-img-col">
              <div className="wrap">
                <div className="w img-widget anim" data-anim="zoomIn">
                  <Image
                    src="/72.jpg.jpeg"
                    alt=""
                    width={1563}
                    height={1563}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="col c50 contact-form-col">
              <div className="wrap">
                <h2 className="w tag tag-lh contact-tag">Get In Touch </h2>
                <h2 className="w contact-title">Let Your Space Bloom</h2>
                <div className="w contact-form-widget">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />

      <WhatsAppButton />
      <ScrollAnimations />
    </div>
  );
}
