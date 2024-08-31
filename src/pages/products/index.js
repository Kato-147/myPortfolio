import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_options";

export const Product = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">

{/* Helmet */}

        <Helmet>
          <meta charSet="utf-8" />
          <title> Products | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>

{/* title */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Products </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* product */}

        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <div className="content">
                  <p className="title">{data.title}</p>
                  <p className="description">{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};