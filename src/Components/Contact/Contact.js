import React, {useState} from 'react'


import './Contact.css'

import Form from './Form'

const Contact = () => {

    const [view, setView] = useState(false)


    const viewHandler = () => {
      view === true ? setView(false) : setView(true)
    }

  return (
    <>
        {view === false ? (
            <section id="contact"  className='default-container'>
            <h1 id="titleContact" className='titelMimimized'> CONTACT US </h1>
            <button className='button' onClick={viewHandler}>Open</button >
            </section>
        ) : (
            <section id="contact"  className='default-container'>
            <h1 id="titleContact" className='titelMimimized'> CONTACT US </h1>
            <Form></Form>
            <button className='button' onClick={viewHandler}>Open</button >
            </section>
        )}
    </>
      )
}

export default Contact