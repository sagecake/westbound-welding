"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const isMobile = screenWidth <= 768;
  const isSmallMobile = screenWidth <= 480;

  const sectionTitle = {
    textAlign: "center" as const,
    fontSize: isMobile ? "30px" : "42px",
    fontWeight: 900,
    letterSpacing: isMobile ? "1px" : "2px",
    marginBottom: "10px",
  };

  const sectionLine = {
    width: "60px",
    height: "3px",
    background: "#fff",
    margin: "10px auto 30px auto",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: isSmallMobile
      ? "1fr"
      : isMobile
      ? "repeat(2, 1fr)"
      : "repeat(4, 1fr)",
    gap: isMobile ? "12px" : "20px",
  };

  const hoverWrap = {
    border: "1px solid #222",
    background: "#111",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    display: "block",
  };

  const navLink = {
    margin: isMobile ? "6px 8px" : "0 12px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    letterSpacing: "1px",
    fontSize: isMobile ? "14px" : "15px",
  };

  const inputStyle = {
    width: "100%",
    padding: isMobile ? "12px" : "14px",
    background: "#111",
    border: "1px solid #333",
    color: "#fff",
    fontSize: "16px",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: 700,
    letterSpacing: "1px",
  };

  const socialIconWrap = {
    width: isMobile ? "46px" : "52px",
    height: isMobile ? "46px" : "52px",
    border: "1px solid #333",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textDecoration: "none",
    fontSize: isMobile ? "20px" : "22px",
    fontWeight: 700,
    background: "#111",
  };

  return (
    <main style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          background: "rgba(10,10,10,0.92)",
          padding: isMobile ? "10px 12px" : "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          borderBottom: "1px solid #222",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: isMobile ? "8px" : 0 }}>
          <img src="/welder.png" alt="logo" style={{ width: isMobile ? "30px" : "34px" }} />
          <div style={{ fontWeight: "bold", letterSpacing: "2px", fontSize: isMobile ? "14px" : "16px" }}>
            WESTBOUND
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: isMobile ? "flex-start" : "flex-end",
            width: isMobile ? "100%" : "auto",
          }}
        >
          <a href="#" style={navLink}>Home</a>
          <a href="#about" style={navLink}>About</a>
          <a href="#services" style={navLink}>Services</a>
          <a href="#gallery" style={navLink}>Gallery</a>
          <a href="#quote" style={navLink}>Quote</a>
          <a href="#contact" style={navLink}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: isMobile ? "180px 16px 40px" : "180px 20px 50px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "34px" : "48px",
            letterSpacing: isMobile ? "1px" : "2px",
            lineHeight: 1.1,
            marginBottom: "14px",
          }}
        >
          WESTBOUND WELDING
        </h1>

        <p style={{ fontSize: isMobile ? "16px" : "18px", lineHeight: 1.5, margin: 0 }}>
          Custom Fabrication • CNC Cutting • Mobile Welding
        </p>
        <p style={{ fontSize: isMobile ? "15px" : "16px", lineHeight: 1.5, marginTop: "10px" }}>
          Moose Jaw • Regina • Surrounding Areas
        </p>

        <div style={{ marginTop: isMobile ? "28px" : "35px" }}>
          <img
            src="/welder.png"
            alt="welder logo"
            style={{
              width: isMobile ? "220px" : "320px",
              maxWidth: "80%",
              opacity: 0.95,
            }}
          />
        </div>
      </section>

      {/* HERO BUTTONS */}
      <section style={{ padding: isMobile ? "10px 16px 40px" : "10px 20px 50px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="tel:13066904304"
            style={{
              padding: "14px 30px",
              background: "#fff",
              color: "#000",
              fontWeight: "bold",
              textDecoration: "none",
              display: "inline-block",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? "280px" : "none",
              boxSizing: "border-box",
            }}
          >
            Call Now
          </a>

          <a
            href="#quote"
            style={{
              padding: "14px 30px",
              border: "1px solid #fff",
              color: "#fff",
              textDecoration: "none",
              display: "inline-block",
              width: isMobile ? "100%" : "auto",
              maxWidth: isMobile ? "280px" : "none",
              boxSizing: "border-box",
            }}
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: isMobile ? "60px 16px" : "80px 20px", textAlign: "center" }}>
        <h2 style={sectionTitle}>ABOUT</h2>
        <div style={sectionLine} />

        <div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: isMobile ? "15px" : "16px" }}>
          <p>
            I run Westbound Welding out of Moose Jaw, providing custom fabrication, CNC cutting,
            and mobile welding services across southern Saskatchewan.
          </p>

          <p style={{ marginTop: "20px" }}>
            I’m a Journeyman Welder, CWB all-position stick qualified, and fully insured — with a
            strong focus on quality, durability, and clean workmanship. Every project is built
            properly — strong, precise, and made to last.
          </p>

          <p style={{ marginTop: "20px" }}>
            From custom signs and fireplaces to heavy equipment repairs and attachments, I take
            pride in delivering reliable work that stands out. Whether it’s a custom build or a
            repair that needs to be done right the first time, you can count on consistent,
            professional results.
          </p>

          <p style={{ marginTop: "25px", fontWeight: 700, letterSpacing: "1px" }}>
            JOURNEYMAN WELDER • CWB ALL POSITION • FULLY INSURED
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: isMobile ? "60px 16px" : "80px 20px", textAlign: "center" }}>
        <h2 style={sectionTitle}>SERVICES</h2>
        <div style={sectionLine} />

        <p>Custom Fabrication</p>
        <p>CNC Cutting & Custom Signs</p>
        <p>Custom Wood-Burning & Propane Fireplaces / Fire Tables</p>
        <p>Custom Skid Steer & Excavator Attachments</p>
        <p>Heavy Equipment Repair</p>
        <p>24/7 Mobile Welding</p>
        <p>Handrails & Interior Metal</p>
        <p>Skid Steer / Dirt Work</p>
      </section>

      {/* CNC SIGNS */}
      <section id="gallery" style={{ padding: isMobile ? "60px 16px" : "80px 20px" }}>
        <h2 style={sectionTitle}>CNC SIGNS</h2>
        <div style={sectionLine} />

        <div style={grid}>
          <div className="hover-wrap" style={hoverWrap}><img src="/work1.jpg" alt="work1" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work2.jpg" alt="work2" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work3.jpg" alt="work3" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work4.jpg" alt="work4" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work5.jpg" alt="work5" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work6.jpg" alt="work6" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work7.jpg" alt="work7" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/work8.jpg" alt="work8" style={imageStyle} /></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <div className="hover-wrap" style={{ ...hoverWrap, maxWidth: isMobile ? "100%" : "400px" }}>
            <img src="/work9.jpg" alt="work9" style={imageStyle} />
          </div>
        </div>
      </section>

      {/* FIREPLACES */}
      <section style={{ padding: isMobile ? "60px 16px" : "80px 20px" }}>
        <h2 style={sectionTitle}>FIREPLACES</h2>
        <div style={sectionLine} />

        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
            lineHeight: "1.8",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          Custom-built wood-burning and propane fireplaces, fire tables, and statement pieces made
          to match your space, style, or logo.
        </p>

        <div style={grid}>
          <div className="hover-wrap" style={hoverWrap}><img src="/fireplace1.jpg" alt="fireplace1" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/fireplace2.jpg" alt="fireplace2" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/fireplace3.jpg" alt="fireplace3" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/fireplace4.jpg" alt="fireplace4" style={imageStyle} /></div>
        </div>
      </section>

      {/* ATTACHMENTS */}
      <section style={{ padding: isMobile ? "60px 16px" : "80px 20px" }}>
        <h2 style={sectionTitle}>ATTACHMENTS</h2>
        <div style={sectionLine} />

        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
            lineHeight: "1.8",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          Built for real work — custom skid steer and excavator attachments designed for strength,
          performance, and the specific job you need done.
        </p>

        <div style={grid}>
          <div className="hover-wrap" style={hoverWrap}><img src="/attachment1.jpg" alt="attachment1" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/attachment2.jpg" alt="attachment2" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/attachment3.jpg" alt="attachment3" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/attachment4.jpg" alt="attachment4" style={imageStyle} /></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <div className="hover-wrap" style={{ ...hoverWrap, maxWidth: isMobile ? "100%" : "400px" }}>
            <img src="/attachment5.jpg" alt="attachment5" style={imageStyle} />
          </div>
        </div>
      </section>

      {/* HANDRAILS */}
      <section style={{ padding: isMobile ? "60px 16px" : "80px 20px" }}>
        <h2 style={sectionTitle}>HANDRAILS</h2>
        <div style={sectionLine} />

        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 30px auto",
            lineHeight: "1.8",
            fontSize: isMobile ? "15px" : "16px",
          }}
        >
          Custom-built handrails, interior metal features, and rail systems designed to match your
          space, style, and durability needs.
        </p>

        <div style={grid}>
          <div className="hover-wrap" style={hoverWrap}><img src="/handrail1.jpg" alt="handrail1" style={imageStyle} /></div>
          <div className="hover-wrap" style={hoverWrap}><img src="/handrail2.jpg" alt="handrail2" style={imageStyle} /></div>
          <div className="hover-wrap" style={hover