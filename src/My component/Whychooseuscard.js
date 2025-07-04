 import React from 'react'
 import { Card } from 'react-bootstrap';
 const Whychooseuscard = ({Heading,why,bcg}) => {
   return (
   <Card className='h-100'style={{ background: bcg }}>
<Card.Text style={{padding:'10px',marginTop:'150px'}}>
    <h1 style={{textTransform:'uppercase',fontFamily:'Satoshi,sans-serif',fontSize:'25px'}}>{Heading}</h1>
    <p style={{textTransform:"capitalize"}}>{why}</p>
</Card.Text>
   </Card>
   )
 }
 
 export default Whychooseuscard
 