

import Tour from "../tours/tour/Tour";
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
function Tours(props) {
  return (

    <>

      


      {props.dataa.map((items) => {


        return (
          <section key={items.id}>
          <Tour image={items.image} id={items.id} name={items.name}/>
          </section>
        )

      })}
    </>



  )

}


export default Tours;