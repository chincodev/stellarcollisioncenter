import '~/styles/global.css'
import "../../styles/main.css";
import 'react-toastify/dist/ReactToastify.css';

import AppProps from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import { lazy } from 'react'
import { getSettings } from '~/lib/sanity.queries';
import { getClient } from '~/lib/sanity.client';

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

const mono = IBM_Plex_Mono({
  variable: '--font-family-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-family-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

function App({
  Component,
  pageProps,
}) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-family-sans: ${sans.style.fontFamily};
            --font-family-serif: ${serif.style.fontFamily};
            --font-family-mono: ${mono.style.fontFamily};
          }
        `}
      </style>
      {pageProps && pageProps.draftMode ? (
        <PreviewProvider token={pageProps.token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

App.getInitialProps = async (appContext) => {
	const _appProps = await AppProps.getInitialProps(appContext);
	const client = getClient(undefined)
	try {
		const [ settings ] = await Promise.all([
			getSettings(client),
		])
    console.log(settings);
		return { 
		  ..._appProps, 
		  pageProps: { 
			  global: {
			    settings
			  }
		  } 
	  };
	} catch (error) {
    console.log(error);
		return { ..._appProps };
	}
};

export default App