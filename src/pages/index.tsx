import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Code from "../components/code/code";
import Link from "../components/link/link";

const App = () => (
  <Layout>
    <SEO />
    <Code>
      lyft
      https://github.com
    </Code>

    <Link to="/about">About</Link>
  </Layout>
);

export default App;