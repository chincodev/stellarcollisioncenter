import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { getClient } from '~/lib/sanity.client'
import imageUrlBuilder from '@sanity/image-url';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

function ChooseUs(props) {

  const client = getClient(undefined)
  const builder = imageUrlBuilder(client);

  return (
    <div className="h2-choose-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title2 text-center">
              <h2>{props.title}</h2>
              <p>
                {props.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center pt-90 pb-90 g-4">
          {
            props.features.map(x => <div className="col-lg-3 col-md-4 col-sm-6 col-10">
              <div className="single-card">
                <div className="icon">
                  <img src={builder.image(x.icon).url()} alt={x.icon.alt} />
                </div>
                <div className="content">
                  <h4>{x.title}</h4>
                  <p>
                  {x.description}
                  </p>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
