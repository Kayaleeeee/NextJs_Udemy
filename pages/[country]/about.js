import Link from 'next/link'

const About =()=>{
    return(
        <div>This is About page
            <br /><br />
            <Link href="/">
                <a>To mainPage</a></Link>
        </div>
    )
}

export default About;