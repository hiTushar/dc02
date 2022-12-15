import { useEffect, useState } from "react"
import _ from "lodash";
import Results from "./Results";
import Search from "./Search";
import Sort from "./Sort";
import Loader from "./Loader";

let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_API_ACCESS}`);
let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(false);

    const apiCall = () => {
        setLoading(true);
        fetch(`https://api.github.com/search/repositories?q=${query}&per_page=20`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                if(!_.isEmpty(result.items)) setData(result.items);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        setData(_.orderBy(data, sort, "desc"));
    }, [sort])

    return (
        <div className="search-page">
            <div className={`search-page-controls ${data.length ? "" : "search-init"}`}>
                <Search onChange={setQuery} onClick={apiCall}/>
                { 
                    data.length 
                        ? <Sort onChange={setSort}/>
                        : null
                }
            </div>
            { 
                loading
                    ? <Loader />
                    : data.length 
                        ? <Results data={data}/> 
                        : null 
            }
        </div>
    )
}
