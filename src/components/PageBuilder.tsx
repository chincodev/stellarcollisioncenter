import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Service from "../components/service/Service";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import Map from "../components/map/Map";
import Faq from "./faq/Faq.jsx"
import OtherServiceSlide from './OtherServiceSlide'


function PageBuilder(props) {

	const { build, global } = props
	return (
        <>
			{
				build && build.length && build.map((x, i) => {
        	        if(x._type === 'hero'){
						return <Banner key={i} {...x}/>
					}
        			if(x._type === 'defaultContentSection'){
						return <Service key={i} {...x}/>
					}
        	        if(x._type === 'reviews'){
						return <Testimonial key={i} {...x}/>
					}
        	        if(x._type === 'why_choose'){
						return <ChooseUs key={i} {...x}/>
					}
					if(x._type === 'contact'){
						return <Contact key={i} {...x} global={global} />
					}
					if(x._type === 'map'){
						return <Map key={i} {...x} global={global} />
					}
					if(x._type === 'faq'){
						return <Faq key={i} {...x} global={global} />
					}
					if(x._type === 'servicesSlider'){
						return <OtherServiceSlide key={i} {...x} />
					}
				}).filter(e => e)
			}
		</>
	);
}

export default PageBuilder;
