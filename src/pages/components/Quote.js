import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './quote.css';

const Quote = (props) => {
  return ( 
    <div className='quotebox'>
      <FontAwesomeIcon icon={'quote-left'} size="sm" className='quote-icon-left' listIcon />
      <ul>
      <li className='quote'>
        {props.quoteText}
      </li>
      <FontAwesomeIcon icon={'quote-right'} size="sm" className='quote-icon-right' />
      </ul>
    </div>
   );
}
 
export default Quote;

