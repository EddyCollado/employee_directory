import React, {  useContext } from "react";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext";


const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div class="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" data-toggle="popover" data-content="Disabled Popover"  id="searchBtn">
                        Search
                    </span>
                </div>
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder=""
                aria-label="Search"
                onChange={e => context.handleSearchChange(e)}
                />
            </div>
        </div>
    );
}

export default SearchName;

