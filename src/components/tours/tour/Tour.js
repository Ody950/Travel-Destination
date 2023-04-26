
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TourDetails from '../../TourDetails/TourDetails';
import { Link, useParams } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import './Tour.css'

function Tour(props) {





  return (
    <>


          <section key={props.id} className='tour1'>
 

            <Link to={`/city/${props.id}`} > <Card className='card1' key={props.id}>

              <Card.Title className='text1'>{props.name}</Card.Title>
              <Card.Img className='image1' variant="top" src={props.image} />
              
             
            </Card></Link>
          </section>


    </>


  )
}



export default Tour;

