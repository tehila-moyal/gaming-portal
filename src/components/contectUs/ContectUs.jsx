import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './ContectUs.scss'
import {Form} from 'react-bootstrap';

export default function ContectUs() {
    const iconsArr=[
        {head:"Address",text:"611 Middle St, Honolulu, HI 96819",icon:"fa-solid fa-location-dot",link:"https://www.google.com/maps/place/Kalihi+Transit+Center/@21.3330215,-157.8785168,3089m/data=!3m1!1e3!4m15!1m8!3m7!1s0x7c00183b8cc3464d:0x4b28f55ff3a7976c!2z15TXldeg15XXnNeV15zXlSwg15TXldeV15DXmSwg15DXqNem15XXqiDXlNeR16jXmdeq!3b1!8m2!3d21.3098845!4d-157.8581401!16s%2Fm%2F02hrh0_!3m5!1s0x7c006fde1805c46f:0xcb6003e9872ad2e3!8m2!3d21.3338888!4d-157.8881388!16s%2Fg%2F11j0tbq44m!5m1!1e1?authuser=0&entry=ttu"},
        {head:"Phone",text:"050-55-66-656",icon:"fa-solid fa-phone",link:'tel:050-55-66-656'},
        {head:"Email",text:"doNotContectUs@games.com",icon:"fa-solid fa-envelope", link:'mailto: doNotContectUs@games.com'},
        {head:"Website",text:"Do you know where you are?",icon:"fa-solid fa-globe", link:'/'},
    ]
  return (
    <div>
        <div className='icons d-flex  justify-content-center'> 
            {iconsArr.length>0&&iconsArr.map(({head,text,icon,link},inx)=>{
                return <div  className='mainAdiv d-flex flex-column align-items-center m-3' key={inx}>
                    
                    <a className="bg-info divA d-flex align-items-center justify-content-center mb-2" target='blanck' href={link}>  
                        <FontAwesomeIcon className='text-secondary' icon={icon}/>
                    </a> 
                    <p className='text-center'><span style={{fontWeight:'bold'}}>{head}</span>: {text}</p>
                </div>
            })}
        </div>

        <div className='d-flex'>
            <Form className='col-5'>
                <Form.Group className="mb-3">
                    <Form.Label>name</Form.Label>
                    <Form.Control placeholder="your name"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="your email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>The type of message</Form.Label>
                    <Form.Select >
                    <option>General contact</option>
                    <option>Offer for a new game on the site</option>
                    <option>Offer for a new tool the site</option>
                    <option>complaint/problem</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="I expect a reply back" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </Form>
            <div className='offset-1'>
                {/* לשים  פה מפה?  API  */}
                <iframe
                width="600"
                height="450"
                src="https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m.html">
                </iframe>
            </div>

        </div>




    </div>
  )
}