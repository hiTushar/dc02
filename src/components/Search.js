import { Input, Button } from "antd";

export default function Search(props) {
    const { onChange, onClick } = props;

    return (
        <div className="search">
            <form onSubmit={(e) => e.preventDefault()}>
                <Input onChange={(e) => onChange(e.target.value)} />&nbsp;
                <Button onClick={onClick}>Search</Button>
            </form>
        </div>
    )
}
