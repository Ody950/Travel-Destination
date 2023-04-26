
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import './TourDetails.css'

function TourDetails(props) {
  const { id } = useParams()
  
  const city = props.datas.find(city => city.id === id);
  
  const [showMore, setShowMore] = useState(false);
  
  const showMore1 = () => {
    setShowMore(!showMore);
  }
  
  return (
    <>
      <section className='p11'>
      <p>{showMore ? city.info : `${city.info.slice(0, 240)}...`}</p>
      <button className= 'button1' onClick={showMore1}>{showMore ? 'See less' : 'See more'}</button>

      </section>
    </>
  )
}

export default TourDetails;
