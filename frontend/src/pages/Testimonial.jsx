import React, { useEffect, useMemo, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonial.css";

const REVIEWS = [
  { name: "Lakshmi", initial: "L", review: "Surprisingly, I can't believe I went through all that treatment without any pain. I have my smile back, something I never expected to be so perfect. Highly recommended!" },
  { name: "B Shivaram", initial: "B", review: "I had a broken tooth and consulted several doctors before visiting. The implant was affordable, quick, and painless. Clinic is very hygienic. Highly recommend!" },
  { name: "Rohan", initial: "R", review: "I was scared of dentists but this experience was smooth. Finally got my new set of teeth with minimal pain. Thanks, Dr. Prem!" },
  { name: "Ananya", initial: "A", review: "The team is professional, friendly, and skilled. They explained the process clearly and made me comfortable throughout." },
  { name: "Suresh", initial: "S", review: "Amazing results! Same-day implant procedure was painless and quick. The staff took great care of me." },
  { name: "Priya", initial: "P", review: "Top-notch care and service. I was nervous but the process was efficient and pain-free. Highly satisfied." },
];

const FAQS = [
  { q: "What are basal implants?", a: "Basal implants are dental implants anchored in deeper cortical bone. They’re very stable and can support same-day teeth." },
  { q: "What are the benefits of basal implants?", a: "Faster healing, excellent stability, fewer surgical steps; suitable even for poor bone quality and certain medical conditions." },
  { q: "How is the basal implant procedure performed?", a: "Implants are placed in basal bone with minimally invasive techniques, enabling quick recovery and early loading." },
  { q: "What is the cost of basal implant treatment?", a: "Costs depend on case complexity and number of implants. Your clinic can provide a personalized estimate." },
  { q: "How long do basal implants last?", a: "With good oral hygiene and regular checkups, they can last many years—often a lifetime." },
];

const getPerView = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function Testimonial() {
  const [perView, setPerView] = useState(getPerView());
  const [page, setPage] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Group reviews into pages based on perView
  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < REVIEWS.length; i += perView) {
      chunks.push(REVIEWS.slice(i, i + perView));
    }
    // keep current page in range when perView changes
    if (page > chunks.length - 1) setPage(0);
    return chunks;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, REVIEWS.length]);

  const prev = () => setPage((p) => (p === 0 ? pages.length - 1 : p - 1));
  const next = () => setPage((p) => (p === pages.length - 1 ? 0 : p + 1));

  return (
    <div className="tmn-wrapper">
      {/* Section 1 — Reviews Carousel */}
      <section className="tmn-section">
        <h2 className="tmn-heading">What Our Patients Say</h2>

        <div className="carousel">
          <button aria-label="Previous" className="nav-btn left" onClick={prev}>
            <FaChevronLeft />
          </button>

          <div className="viewport">
            <div
              className="track"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, gi) => (
                <div className="slide" key={gi}>
                  {group.map((r, i) => (
                    <article className="review-card" key={r.name + i}>
                      <header className="review-header">
                        <span className="initial">{r.initial}</span>
                        <h3>{r.name}</h3>
                      </header>
                      <div className="stars" aria-label="5 star rating">
                        {[...Array(5)].map((_, si) => (
                          <FaStar key={si} className="star" />
                        ))}
                      </div>
                      <p className="review-text">{r.review}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button aria-label="Next" className="nav-btn right" onClick={next}>
            <FaChevronRight />
          </button>
        </div>

        <div className="dots">
          {pages.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Section 2 — FAQ Accordion */}
      <section className="tmn-section faq">
        <h2 className="tmn-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div className="faq-item" key={i}>
                <button
                  className={`faq-q ${open ? "open" : ""}`}
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  {f.q}
                  <span className="chev">{open ? "−" : "+"}</span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: open ? "400px" : "0px" }}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
