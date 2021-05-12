import React from 'react';

function Shoerack(props) {
    return (
        <div className="panel-block is-20">
            <div className="column is-20" id="item-lists">
                {
                    props.shoes.map((shoe, index) => {
                        return (
                            <div key={index} className="columns shoe">
                                <div className="column is-4 has-text-centered">
                                    <img alt="sneaker" src={shoe.image} />
                                </div>
                                <div className="column is-1.5 has-text-centered">
                                    <img alt="shoe logo" src={shoe.logo} className="item-logo" />
                                </div>	    
								<div className="column is-2.5 is-size-5 is-ellipsis">
                                    {shoe.name}
                                </div>	
								<div className="column is-2 is-size-5 is-ellipsis">
                                    ${shoe.price}
                                </div> 			 
								<div className="column is-1.03 has-text-centered">
								    <button className="button is-success" onClick={() => props.newPayment(index) }>
                                        Buy Now!
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Shoerack;