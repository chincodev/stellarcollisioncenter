import React from "react"

function Map(props) {

  return (
      <>
        <div className={props.fullWidth ? '' : 'container'}>
          <div className="location-map">
            <iframe
              src={props.google_maps_url ? props.google_maps_url : props.global.settings.google_maps_url}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </>
  );
}

export default Map;