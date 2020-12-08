import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';
import Header from '../../components/Header';


const ShowDetails =({show})=>{

    const { name , image, summary, _embedded } = show;

    return(
        <div className="show-detail">
            <div className="show-detail__poster" style={{backgroundImage : `url(${image.original})`}}></div>
            <h1>{name}</h1>
             {parse(summary)}
           
         { _embedded.cast.length>0 ? <Cast cast={_embedded} /> : (<div>No cast</div>)}

        <style jsx>{
            `
                .show-detail__poster{
                    height:500px;
                    background-size:cover
                };
            `
        }

        </style>
        </div>
    )
};

ShowDetails.getInitialProps=async({query})=>{

    const {showId} = query
    const response = await axios.get(`http://api.tvmaze.com/shows/${showId}?embed=cast`)
    return {
        show: response.data
    }
}

export default ShowDetails;