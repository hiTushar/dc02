import Card from "./Card";

export default function Results(props) {
    return (
        <div className="result">
            {
                props.data.map(repo => {
                    const { id, owner, name, full_name, stargazers_count, description, languages_url, html_url } = repo;
                    let cardProps = {
                        avatar_url: owner.avatar_url,
                        name,
                        full_name,
                        stars: stargazers_count,
                        description,
                        languages_url,
                        html_url
                    };
                    return <Card key={id} cardProps={cardProps} />
                })
            }
        </div>
    )
}
