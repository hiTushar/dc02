export default function Search(props) {
    const { onChange, onClick } = props;

    return (
        <div className="search">
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={(e) => onChange(e.target.value)} />
                <button onClick={onClick}>Click</button>
            </form>
        </div>
    )
}
