import Card from "./Card";

export default function Results(props) {
    console.log(props.data);
    return (
        <div className="result">
            {
                props.data.map(repo => {
                    const { id, owner, name, stargazers_count, description, languages_url, html_url } = repo;
                    let cardProps = {
                        avatar_url: owner.avatar_url,
                        name,
                        stars: stargazers_count,
                        description,
                        languages_url,
                        html_url
                    };
                    console.log(cardProps);
                    return <Card key={id} cardProps={cardProps} />
                })
            }
        </div>
    )
}
