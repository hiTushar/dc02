import { Select } from "antd";

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
        <Select 
            onChange={(value) => props.onChange(value)}
            options={options}
            className="card-sort"
        />
    )
}
