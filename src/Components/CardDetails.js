import React from "react";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const CardDetails = () => {

    const {id}= useParams();
   
    const [cardData2, setCarddata2] = useState([])

    const getItem = async () => {
      const response = await fetch('https://api.openbrewerydb.org/breweries')
      const data = await response.json();
      setCarddata2(data)
    };
    useEffect(() => {
        getItem()
    }, []);

    const printData=cardData2.filter(item2=>item2.id===id)
    .map(item => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '85vh'}}>
        <div className='col-md-4 col-sm-6 p-3'>
            <div className='card' style={{borderRadius: '10px'}}>
                <div className='card-body'>
                    <ul style={{listStyle: 'none', fontSize: '14px'}}>
                        <li>Name: {item.name ? item.name : 'null'}</li>
                        <li>Brewry type: {item.brewery_type ? item.brewery_type : 'null'}</li>
                        <li>City: {item.city ? item.city : 'null'}</li>
                        <li>Street: {item.street ? item.street : 'null'}</li>
                        <li>Address_2: {item.address_2 ? item.address_2 : 'null'}</li>
                        <li>Address_3: {item.address_2 ? item.address_3 : 'null'}</li>
                        <li>State: {item.state ? item.state : 'null'}</li>
                        <li>County Province: {item.county_province ? item.county_province : 'null'}</li>
                        <li>Postal Code: {item.postal_code ? item.postal_code : 'null'}</li>
                    </ul>
                </div>
                <div className='card-footer' style={{borderRadius: '5px'}}>
                <a style={{textDecoration: 'none', color: 'black'}} href="/home" > Go Back</a>
                </div>
            </div>
        </div>
        </div>
  )
})            
 return(
    <div className='row'>
        {printData}
    </div>
)
}

export default CardDetails
