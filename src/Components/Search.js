import React from 'react';

const Search = (props) => {

    return(

        <div className='d-flex justify-content-center align-items-center  pt-3 mt-4 rounded'>

           <div className='input-group'>
               <input
                   className='form-control rounded me-1'
                   name="search"
                   placeholder="search by name"
                   value={props.searchKey}
                   onChange={props.onSearchChange}
               />
            </div>
        </div>
    )
}

export default Search
