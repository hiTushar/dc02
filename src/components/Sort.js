export default function Sort(props) {
    return (
        <select onChange={(e) => props.onChange(e.target.value)} defaultValue="">
            <option value="" disabled>Select</option>
            <option value = "name">Name</option>
            <option value = "stargazers_count">Stars</option>
            <option value = "watchers_count">Watching</option>
            <option value = "score">Score</option>
            <option value = "created_at">Created Date</option>
            <option value = "updated_at">Updated Date</option>
        </select>
    )
}
