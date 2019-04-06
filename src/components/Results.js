import React from 'react';



const ResultList = props => {
        
        const dataResults = props.dataResult.map(dataResult => {
                return <div className="dataResult">
                                <p>{dataResult.name}</p>
                                <p>{!dataResult.is_closed ? 'Opened' : 'Closed'}</p>
                                <p>{dataResult.price}</p>
                                <p>{dataResult.review_count}</p>
                                <p>{dataResult.rating}</p>
                                <p>{dataResult.location.address1}</p>
                        </div>
        });
        
        return <div>{dataResults}</div>
};
export default ResultList;