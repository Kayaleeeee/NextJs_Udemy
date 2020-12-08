import {useRouter} from 'next/router';
import {useState} from 'react'

const countries = [
    {
        label:'us',
        name:"united states"
    },
    {
        label:'kr',
        name:"Korea"
    },
    {
        label:'br',
        name:"Brazil"
    },

]


const Header = ()=>{
    const router = useRouter();
    const [selectCoun, setSelectCoun] = useState(router.query.country)

const handleClick=(e)=>{
    setSelectCoun(e.target.value)
    //navigate to Other pages;

    //모든 페이지가 새로고침 됨
    // router.push(`/${e.target.value}`)

    //url만 변경해서 전체가 새로고침 하지 않게 함
    router.push(`/[country]`, `/${e.target.value}`)


}

const renderCountries = ()=>{
    return countries.map((val, ind)=>{
        return (<option key={ind} label={val.name}>{val.label} </option>)
    })
}

return(
    <div className="header">
        <select onChange={(e)=>handleClick(e)} value={selectCoun}>
            {renderCountries()}
        </select>

        <style jsx>{
        `.header{
            background-color: #333;
            display:flex;
            flex-direction:row;
            align-items:center;
            padding:1rem;
            justify-content:center;
            color: white;
        }
            
        `
        }</style>
    </div>
)
}

export default Header;