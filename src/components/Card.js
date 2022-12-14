import { useEffect, useState } from "react";

let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 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");
let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

export default function Card(props) {
    const {
        avatar_url,
        name, 
        full_name,
        stars,
        description,
        languages_url,
        html_url
    } = props.cardProps;
    
    const [ languages, setLanguages ] = useState([]);

    useEffect(() => {
        fetch(languages_url, requestOptions)
            .then(response => response.json())
            .then(result => setLanguages(Object.keys(result).slice(0, 3)))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="card">
            <div className="card-avatar">
                <img src={avatar_url} />
            </div>
            <div className="card-name">
                <a href={html_url}>
                    {full_name.split("/")[0]}/
                    <b>{name}</b>
                </a>
            </div>
            <div className="card-stars">
                {stars}
            </div>
            <div className="card-description">
                {description}
            </div>
            <div className="card-language">
                <ul>
                    {languages.map(lang => (
                        <li>{lang}</li>
                    ))}
                </ul>
            </div>  
        </div>
    )
}
