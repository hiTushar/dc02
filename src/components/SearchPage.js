import { useEffect, useState } from "react"
import _ from "lodash";
import Results from "./Results";
import Search from "./Search";
import Sort from "./Sort";
import Loader from "./Loader";
import Pagination from "./Pagination";

const TOTAL_CARDS = 100;
const CARDS_PER_PAGE = 20;

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
    const [offset, setOffset] = useState(0);
    const [dataPortion, setDataPortion] = useState([]);
    const [sort, setSort] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");
    const [loading, setLoading] = useState(false);

    const apiCall = () => {
        setLoading(true);
        fetch(`https://api.github.com/search/repositories?q=${query}&per_page=${TOTAL_CARDS}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                if(!_.isEmpty(result.items)) setData(result.items);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        setData(_.orderBy(data, sort, sortOrder));
    }, [sort, sortOrder])

    useEffect(() => {
        setDataPortion(data.slice(CARDS_PER_PAGE * offset, CARDS_PER_PAGE * offset + CARDS_PER_PAGE));
    }, [offset])

    return (
        <div className="search-page">
            <div className={`search-page-controls ${data.length ? "" : "search-init"}`}>
                <Search onChange={setQuery} onClick={apiCall}/>
                { 
                    data.length 
                        ? <Sort onChange={setSort} sort={sort} setSortOrder={setSortOrder} sortOrder={sortOrder}/>
                        : null
                }
            </div>
            { 
                loading
                    ? <Loader />
                    : data.length 
                        ? (
                            <>
                                <Results data={dataPortion}/> 
                                <Pagination setOffset={setOffset}/>
                            </>
                        )
                        : null 
            }
        </div>
    )
}
