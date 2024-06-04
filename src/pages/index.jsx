import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import Banner from "../components/banner/Banner";
import Service from "../components/service/Service";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Testimonial from "../components/testimonial/Testimonial";
import Layout from '../components/Layout';
import PageBuilder from '../components/PageBuilder';
import { getPageBySlug } from '../lib/sanity.client'

export const getStaticProps = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
	const client = getClient(draftMode ? { token: readToken } : undefined)
	const page = await getPageBySlug(client, 'home')
	if (!page) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			page,
			draftMode,
			token: draftMode ? readToken : '',
		},
	}
}

export default function IndexPage(props) {
  return (
    <Layout
      global={props.global}
      title={props.page.seo_title}
      description={props.page.seo_description}
      image={props.page.og_card_image}
      url={"/"+(props.page.slug === "home" ? '' : props.page.slug)}
    >
    	<PageBuilder build={props.page.pageBuilder} />
    </ Layout>
  )
}