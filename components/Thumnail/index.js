import Thumnailstyle from "./styles";
import Link from 'next/link'

const Thumnail=({imgUrl = "https://via.placeholder.com/150", 
caption, href='', as='' })=>{

    return (
        <div className="thumnail">
            <Link href ={href} as={as}>
                <a>
                    <img src={imgUrl} className="thumnail_image"></img>
                    <h3 className="thumnail_caption">{caption}</h3>
                </a>
            </Link>

            <style jsx>
                {Thumnailstyle}
            </style>

            {/* <style jsx>{` 
                
                .thumnail_image{
                    border-radius:10%;
                }
            `}
            </style> */}
        </div>
    )
}

export default Thumnail;
