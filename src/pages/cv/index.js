import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { resume, meta } from "../../content_options";

function CanvaEmbed() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '141.4286%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
      <iframe
        loading="lazy"
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
        src="https://www.canva.com/design/DAGPUrDmw3w/ysnTBS_EfBonZl-iw0ZLkQ/view?embed"
        allowFullScreen
        title="Canva Design"
      ></iframe>
    </div>
  );
}

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <div>
      <h1>Nguyễn Viết Toản CV</h1>
      <CanvaEmbed />
      <a href="https://www.canva.com/design/DAGPUrDmw3w/ysnTBS_EfBonZl-iw0ZLkQ/view?utm_content=DAGPUrDmw3w&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
         target="_blank" rel="noopener noreferrer">
        Xem CV trên Canva
      </a>
    </div>
      </Container>
    </HelmetProvider>
  );
};