
import axios from 'axios';
import Header from '../../components/Header';
import Thumnail from '../../components/Thumnail';

const Home =({shows, country})=>{

    const renderShows =()=>{
        
        return shows.map((showItem, ind)=> {
            const { show }= showItem;
            
            return (<li key={ind}>
                <Thumnail style={{marginLeft:'1rem'}}
                imgUrl={ (show.image && show.image.medium) || undefined}
                caption = {show.name}
                href="/[country]/[showId]"
                as= {`/${country}/${show.id}`}
                />
                </li>)
        })
    }
    
    return(
        <ul className="tvshows">
            {renderShows()}
            <style jsx>
                {
                    `
                    .tvshows{
                            list-style:none;
                            padding:0;
                            margin:0;
                        }
                    `
                }
            </style>
        </ul>
    )
}

Home.getInitialProps=async context=>{
    const country = context.query.country || 'us';
    const response = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`)
    return{
        shows: response.data,
        country
    }
}

export default Home;