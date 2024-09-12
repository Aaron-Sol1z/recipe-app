import React from "react";

const SearchBar = ({ handleSubmit, value, onChange, loading}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input value={value} disabled={loading} onChange={onChange} type="text" placeholder="Search Recipe"></input>
            <input value="Search" disabled={loading || !value} type="submit"></input>
        </form>
    )
};

export default SearchBar;