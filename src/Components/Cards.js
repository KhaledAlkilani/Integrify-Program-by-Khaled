import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useParams, useHistory } from "react-router-dom";

const Cards = (props) => {

  const history = useHistory() 
  const [cardData, setCarddata] = useState([])

  const getItems = async () => {
    const response = await fetch('https://api.openbrewerydb.org/breweries')
    const data = await response.json();
    setCarddata(data)
  };

  const cardClick=(id)=>{
    console.log(id)
    history.push('/detail/'+id)
};
    useEffect(() => {
        getItems()
    }, []);

    const printData = cardData
        .filter(key => key.name.toLowerCase().includes(props.searchedName))
        .map(item => {
    return (
    <div className='col-md-4 col-sm-6 mt-5 p-4' >
    <div className='card' style={{borderRadius: '10px'}}>
        <div className='card-body' >
            <ul style={{listStyle: 'none', fontSize: '14px'}}>
                <li>Name: {item.name}</li>
                <li>Brewry type: {item.brewery_type}</li>
                <li>City: {item.city}</li>
                {/* <div className="hide"> */}
                {/* <li>id: {item.id}</li>
                <li>Street: {item.street}</li>
                <li>Address_2: {item.address_2}</li>
                <li>Address_3: {item.address_2}</li>
                <li>State: {item.state}</li>
                <li>County Province: {item.county_province}</li>
                <li>Postal Code: {item.postal_code}</li> */}
                {/* </div> */}
            </ul>
        </div>
        <div style={{borderRadius: '5px'}} onClick={()=>cardClick(item.id)} className='card-footer'>
        View Detail
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

export default Cards