import AboutContent from "@/components/about/AboutContent";
import Banner from "@/components/about/Banner";
import Layout from "@/components/layout/Layout";
import React from "react";

export default function page() {
    return (
        <Layout>
            <Banner></Banner>
            <AboutContent></AboutContent>
        </Layout>
    );
}
