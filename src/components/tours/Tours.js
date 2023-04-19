





function Tours(props){
return (

<>



{props.dataa.map((items)=> {

return (

<div key={items.id}>
 <h3>{items.name }</h3>
 <img src={items.image} alt={items.image}></img>
 <hr style={{borderColor: 'black'}} />

</div>

)


})}



</>



)

}


export default Tours;