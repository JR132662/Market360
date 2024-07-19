import React from 'react'

const Item = ({ Links , title}) => {
  return <ul>
    <h1 className='mb-1 text-blue-500 font-bold'>{title}</h1>
    {
      Links.map((link) =>(
        <li key={link.name} className='mb-1 text-white'>
          <a href={link.link}>
            {link.name}
          </a>
        </li>
      ))}
  </ul>
}

export default Item