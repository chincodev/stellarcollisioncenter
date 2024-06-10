import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Layout from "../../components/Layout";
import Head from "next/head";
import { getServiceBySlug } from '../../lib/sanity.client'  
import { ToastContainer, toast } from "react-toastify";
import {
    servicesSlugsQuery,
} from '../../lib/sanity.queries'
import { getClient } from "../../lib/sanity.client";
import { isEmpty } from "lodash";
import PageBuilder from "../../components/PageBuilder";
  
export const getStaticProps = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const page = await getServiceBySlug(client, params.slug)
  if (!page || isEmpty(page)) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      layout: true,
      token: draftMode ? readToken : '',
      page,
    },
  }
}


function Service(props) {
  return (
    <Layout
      global={props.global}
      title={props.page.seo_title}
      description={props.page.seo_description}
      image={props.page.og_card_image}
      url={"/"+(props.page.slug === "home" ? '' : props.page.slug)}
    >
      {
        props.page.show_banner && <Breadcrumb pageName={props.page.title} pageTitle={props.page.title} img={props.page.banner_image}/>
      }
      <PageBuilder build={props.page.pageBuilder} />
    </Layout>
  );
}

export default Service;

export const getStaticPaths = async () => {
    const client = getClient()
    const slugs = await client.fetch(servicesSlugsQuery)
    return {
        paths: slugs?.map((slug) => `/services/${slug}`) || [],
        fallback: 'blocking',
    }
}