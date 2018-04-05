import React from "react";


const TradeCard = props => (
<div>
 	<div className="col-md-6" id="requested-ticket">
        <h5 className="card-title c.title">{props.watcher}</h5>
        <p className="card-text c.text">{props.wDate}</p>
    </div>
    <div className="col-md-6" id="offered-ticket">
      <h5 className="card-title c.title">{props.swap}</h5>
      <p className="card-text c.text">{props.sDate}</p>
    </div>
	</div>
);

export default TradeCard;

