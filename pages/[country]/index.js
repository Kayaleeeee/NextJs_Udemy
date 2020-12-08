
import axios from 'axios';
import Thumnail from '../../components/Thumnail';


const Home =({shows})=>{

    const renderShows =()=>{
        return shows.map((show, ind)=> {
            // console.log(show)
            return (<li key={ind}><Thumnail imgUrl={show.show.image.medium}/> {show.name}</li>)
        })
    }
    
    return(
        <ul className="tvshows">
            {renderShows()}
        </ul>
    )
}

Home.getInitialProps=async context=>{
    const country = context.query.country || 'us';
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    return{
        shows: response.data
    }
}

export default Home;