import Hero from "@/components/landing/hero/Hero";
import Partners from "@/components/landing/partners/Partners";
import Products from "@/components/landing/products/Products";
import Sectors from "@/components/landing/Sectors";
import Layout from "@/components/layout/Layout";

export default function Home() {
    return (
        <Layout>
            <Hero></Hero>
            <Sectors></Sectors>
            <Products></Products>
            <Partners></Partners>
        </Layout>
    );
}
