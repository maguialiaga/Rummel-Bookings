import * as React from "react";
import PreLoader from "../components/PreLoader";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Layout>
          <Seo title="Rummel Bookings" />
        </Layout>
      )}
    </>
  );
}
