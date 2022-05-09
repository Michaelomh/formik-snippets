import Head from "@components/Head";
import Layout from "@components/Layout";
import React from "react";

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <main>
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>
      </Layout>
    </>
  );
}
