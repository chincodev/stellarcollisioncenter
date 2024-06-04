import React, { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
import Service from "../components/service/Service";
import ChooseUs from "../components/chooseUs/ChooseUs";
import Testimonial from "../components/testimonial/Testimonial";

function PageBuilder(props) {

	const { build } = props
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
				}).filter(e => e) 
			}
		</>
	);
}

export default PageBuilder;
