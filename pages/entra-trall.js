import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EntraTrallSection from "../components/Produkter/entraTrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Entratrall = () => {
    return (
        <>
            <Head>
                <title>Entra Terrassebrædder</title>
                <meta name="title" content="Entra Terrassebrædder - GreenPlank.dk" />
                <meta name="description" content="ENTRA ™ solid komposittrall inspirerad av naturliga färger, struktur, skönhet och prestanda. Kompositvagn med tunga och spår." />
            </Head>
            <Layout pageTitle="Entra Terrassebrædder">
                <HeaderTwo />
                <PageHeader title="Entra Terrassebrædder" crumbTitle="Entra Terrassebrædder" />
                <StickyHeader />
                <EntraTrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>);
};

export default Entratrall;
