
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


      {props.dataaa.map((items) => {


        return (
          <tour key={items.id} className='tour1'>
            

            <Link to={`/city/${items.id}`} > <Card className='card1' >

              <Card.Title className='text1'>{items.name}</Card.Title>
              <Card.Img className='image1' variant="top" src={items.image} />
            </Card></Link>
          </tour>


        )



      })}



    </>


  )
}



export default Tour;

