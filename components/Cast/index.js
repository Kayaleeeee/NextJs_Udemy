import Thumnail from "../Thumnail";


const Cast=({ cast })=>{

    // console.log(cast)

    const renderCast=()=>{
        return cast.cast.map((val, ind)=>{
            const {image, name}= val.person;
            return (
                <li key={ind} style={{marginRight:'1rem'}}>
                    <Thumnail 
                    imgUrl={(image && image.medium) || undefined}
                    caption={name}
                    ></Thumnail>
                </li>)
        });
    }

    return(
        <div className="cast">
            <h3>Cast</h3>
            <ul className="cast__list">
                {renderCast()}
            </ul>
            <style jsx>
                {
                    `

                    .cast{
                        width:100%;
                    }
                    .cast__list{
                        display:flex;
                        list-style:none;
                        overflow-x:scroll;
                    }
                    `
                }
            </style>

        </div>
    )
}

export default Cast;