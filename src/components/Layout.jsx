import React from "react";
import SEO from "./SEO";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout(props) {

	return (
		<>
			<SEO 
				description={props.seo_description}
				keywords={props.seo_keywords}
				title={props.seo_title}
				image={props.og_card_image}
				url={props.url}
			/>
			<Header {...props.global.settings} />
			{props.children}
			<Footer {...props.global.settings}/>
		</>
	);
}

export default Layout;
