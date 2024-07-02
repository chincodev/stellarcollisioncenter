import { urlForImage } from '../lib/sanity.image'
import Head from 'next/head'

const SEO = (props) => {
    
    const {
        description = "",
        image = null,
        title = '',
        url = '', 
        keywords = ''
    } = props

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} key='description'/>
            <meta name="keywords" content={keywords}/>
            <link rel="icon" href="/assets/favicon.ico" sizes="any" />
            <link rel="icon" type="image/png" href='/assets/images/icons/logo-full.png' />
            <meta property="og:title" content={title} key='ogTitle'></meta>
            <meta property="og:description" content={description} key='ogDescription'></meta>
            <meta property="og:image" content={image ? urlForImage(image).height(256).width(256).fit('crop').url() : ''} key='ogImage'/> 
            <meta property="og:url" content={url} key='ogUrl'/>
            <meta property="og:site_name" content={'Sogomonyan Law Group,  APC'} key='ogSiteName'/>
            <meta property="og:type" content="website" key='ogType'/>
            <meta name="twitter:card" content={'summary'} key='ogTwitterCard'/>
            <meta name="twitter:title" content={title} key='ogTwitterTitle'/>
            <meta name="twitter:description" content={description} key='ogTwitterDescription'/>
            <meta name="twitter:image" content={image ? urlForImage(image).height(256).width(256).fit('crop').url() : ''} key='ogTwitterImage'/> 
        </Head>
    )

}

export default SEO
