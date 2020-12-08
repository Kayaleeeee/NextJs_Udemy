const Thumnail=({imgUrl, caption})=>{

    return (
        <div className="thumnail">
            <img src={imgUrl} className="thumnail_image"></img>
            <h3 className="thumnail_caption">{caption}</h3>

            <style jsx>{` 
                
                .thumnail_image{
                    border-radius:10%;
                }
            `}
            </style>
        </div>
    )
}

export default Thumnail;
