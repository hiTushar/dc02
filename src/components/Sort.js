import { Select, Button } from "antd";

export default function Sort(props) {
    const options = [
         {
            value: "",
            label: "Select",
            disabled: true
         },
         {
            value: "name",
            label: "Name"
         },
         {
            value: "stargazers_count",
            label: "Stars"
         },
         {
            value: "watchers_count",
            label: "Watching"
         },
         {
            value: "created_at",
            label: "Created Date"
         },
         {
            value: "updated_at",
            label: "Updated Date "
         },
    ]
    return (
        <div className="result-sort">
            Sort By:&nbsp;
            <Select 
                onChange={(value) => props.onChange(value)}
                options={options}
                className="card-sort"
                placeholder="sort preference.."
            />&nbsp;
            {
                props.sort 
                    ? <Button onClick={() => props.setSortOrder(props.sortOrder === "asc" ? "desc" : "asc")}>{props.sortOrder === "asc" ? "⬇" : "⬆"}</Button> 
                    : null
            }
        </div>
    )
}
