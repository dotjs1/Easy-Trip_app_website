import React,{useRef}from 'react'
import { Container} from 'react-bootstrap';
import Reviews from './Reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const ReviewsPage = ({review}) => {
    const scrollref=useRef(null)
const Scroll=(direction)=>{
const container=scrollref.current;
if(!container)return
const scrollper=300
container.scrollBy({
left:direction==='left'?-scrollper:scrollper,
Behaviour:'smooth'
})
}
  return (
   <Container className="py-5" style={{ minWidth: '100%' }}>
  <h2 className="text-center mb-4">Top Reviews by Our Customer </h2>
  <div   style={{
    display: 'flex',
    overflowX: 'scroll',
    gap: '1rem',
    padding: '0 1rem',
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none' // IE 10+
  }}
  ref={scrollref}
  className="hide-scrollbar"
>
  {review.map((data,index)=>(
    <div style={{ flex: '0 0 auto', width: '60%' }}>
<Reviews Title={data.Title} name={data.name} Review={data.Review} Year={data.Year}/>
      </div>
      )) } 
    </div>
      <div className='arrows' style={{display:'flex',gap:'1rem',justifyContent:'center',padding:'10px'}}>
<FontAwesomeIcon icon={faArrowAltCircleLeft} className="arrow-icon" style={{fontSize:'30px'}} onClick={()=>Scroll('left')}/>
<FontAwesomeIcon icon={faArrowAltCircleRight} className="arrow-icon" style={{fontSize:'30px'}}onClick={()=>Scroll('right')}/>
  </div>
     </Container>
  
  )
}

export default ReviewsPage
