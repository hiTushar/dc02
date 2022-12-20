import React from "react";

export default function Pagination(props) {
    function getOffset(page) {
        const { setOffset } = props;
        setOffset(page - 1);
    }

    return (
        <div className="pages">
            <ul>
                <li onClick={(e) => getOffset(e.target.textContent)}>1</li>
                <li onClick={(e) => getOffset(e.target.textContent)}>2</li>
                <li onClick={(e) => getOffset(e.target.textContent)}>3</li>
                <li onClick={(e) => getOffset(e.target.textContent)}>4</li>
                <li onClick={(e) => getOffset(e.target.textContent)}>5</li>
            </ul>
        </div>
    )
}