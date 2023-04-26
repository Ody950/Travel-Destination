
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";



function Home(props){
  
return(

<>

<Tours dataa={props.data}/>
<Footer/>


</>
)


}

export default Home;