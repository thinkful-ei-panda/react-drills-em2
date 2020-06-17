import React from 'react';
import { render } from '@testing-library/react';



export default class Accordion extends React.Component {

  sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

  render() {
    return (

      <ul className='Accordion'>
        <li>
          <button 
          onClick={() => props.}>
            {sections.title}
          </button>
          <p>{sections.content}</p>
        </li>

        <li>
          <button 
          onClick={() => props.}>
            {sections.title}
          </button>
          <p>{sections.content}</p>
        </li>

        <li>
          <button 
          onClick={() => props.}>
            {sections.title}
          </button>
          <p>{sections.content}</p>
        </li>
      </ul>



    )


  }

}