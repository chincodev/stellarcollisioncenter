import React, { useState } from "react";

function Faq(props) {

    const [ active, setActive ] = useState(0)

  return (
      <div className="faq-page pt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center">
        
              <div className="genarel-qustions-area mb-100">
                <div className="accordion" id="accordionExample">
                 
                 {
                    props.content && props.content.length > 0 && props.content.map((x, i) =>  <div key={x.key} className="accordion-item">
                        <h2 className="accordion-header" id={'heading'+i}>
                          <button
                            className={`accordion-button ${i === active ? '' : 'collapsed'}`}
                            onClick={()=>setActive(active === i ? false : i)}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapse"+i}
                            aria-expanded={i === active}
                            aria-controls={"collapse"+i}
                          >
                            {x.question}
                          </button>
                        </h2>
                        <div
                          id={'collapse'+i}
                          className={`accordion-collapse collapse ${i === active ? 'show' : ''}`}
                          aria-labelledby={'heading'+i}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                          {x.answer}
    {" "}
                          </div>
                        </div>
                      </div>)
                 }
                </div>
              </div>
              
            </div>
          
        </div>
      </div>

  );
}

export default Faq;
