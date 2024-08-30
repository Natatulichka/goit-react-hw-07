import css from "./SearchBox.module.css";
import { onFilterChange, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(onFilterChange(evt.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.searchBox}
        placeholder="Search contacts by Name"
      />
    </div>
  );
}
export default SearchBox;
