 import React from 'react'
 import { Card } from 'react-bootstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
 const Whychooseuscard = ({Heading,why,bcg,aos}) => {
   return (
   <Card className='h-100'style={{ background: bcg }} data-aos={aos}>
    <Card.Title>
      <div style={{display:'flex', alignItems:'flex-start',paddingLeft:'5px' }}>
   <FontAwesomeIcon icon={faSquareCheck} style={{fontSize:'40px',color:'green'}}/>
      </div>
    </Card.Title>
<Card.Text style={{padding:'10px',marginTop:'150px'}}>
    <h1 style={{textTransform:'uppercase',fontFamily:'Satoshi,sans-serif',fontSize:'25px'}}>{Heading}</h1>
    <p style={{textTransform:"capitalize"}}>{why}</p>
</Card.Text>
   </Card>
   )
 }

 export default Whychooseuscard
 