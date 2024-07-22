import React from "react";
import BlogGrid from "../../components/blog/BlogGrid";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Layout from "../../components/Layout";

function BlogStandardPage() {
  return (
    <Layout
      global={props.global}
      seo_title={props.page.seo_title}
      seo_description={props.page.seo_description}
      og_card_image={props.global.settings.og_card_image}
      url={props.global.settings.url+"/services/"+props.page.slug.current}
    >
      <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <BlogGrid />
    </Layout>
  );
}

export default BlogStandardPage;
