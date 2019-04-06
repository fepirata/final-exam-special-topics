import React from 'react';



const ResultList = props => {
        
        const dataResults = props.dataResult.map(dataResult => {
                return <div className="dataResult">
                <img src={dataResult.image_url} height="150"></img>
                                <h2>{dataResult.name}</h2>
                                <p>{!dataResult.is_closed ? 'Opened' : 'Closed'}</p>
                                <p>{dataResult.price}</p>
                                <p>{dataResult.review_count}</p>
                                <p>{dataResult.rating}</p>
                                <p>{dataResult.location.address1}</p>
                                <p>{dataResult.phone}</p>
                                <p>{dataResult.url}</p>
                                
                        </div>
        });
        
        return <div>{dataResults}</div>
};
export default ResultList;
