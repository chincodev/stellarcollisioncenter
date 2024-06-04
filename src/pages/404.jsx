import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../components/Layout";
import { getClient, getPageBySlug } from "../lib/sanity.client";
import { isEmpty } from "lodash";

export const getStaticProps = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const page = await getPageBySlug(client, 'page404')
  return {
    props: {
      draftMode,
      layout: true,
      token: draftMode ? readToken : '',
      page,
    },
  }
}


function errorPage(props) {

  if(isEmpty(props.page)){
    ''
  }

  return (
    <Layout
      global={props.global}
      title={props.page.seo_title}
      description={props.page.seo_description}
      image={props.page.og_card_image}
      url={"/404"}
    >
        <Breadcrumb pageName={props.page.title||''} pageTitle={props.page.title||''} img={props.page.banner_image || null}/>
        <div className="error-page mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="error-content-area mt-5 pt-5">
                  <div className="error-btn">
                    <Link legacyBehavior href="/">
                      <a className="primary-btn1">
                        Back to home
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </ Layout>
  );
}

export default errorPage;
