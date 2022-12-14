import { useEffect, useState } from "react"
import _ from "lodash";
import Results from "./Results";
import Search from "./Search";
import Sort from "./Sort";

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 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");
let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");

    const apiCall = () => {
        fetch(`https://api.github.com/search/repositories?q=${query}&per_page=10`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.item);
                setData(result.items);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        setData(_.orderBy(data, sort, "desc"));
    }, [sort])

    return (
        <div className="search-page">
            <Search onChange={setQuery} onClick={apiCall}/>
            <Sort onChange={setSort}/>
            { 
                data.length 
                    ? <Results data={data}/> 
                    : <></> 
            }
        </div>
    )
}
