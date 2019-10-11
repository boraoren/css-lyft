import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";


export type AboutPageProps = RouteComponentProps;

const AboutPage: React.FC<AboutPageProps> = ({ location }) => (
  <Layout>
    <SEO
      title="css lyft react project"
      description="All about Lyft css project"
    />
    <h3>
      Hi, you are on the <code>{location.pathname}</code> page!
    </h3>
  </Layout>
);

export default AboutPage;