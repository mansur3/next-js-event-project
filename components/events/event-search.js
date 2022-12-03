import { useRef } from "react";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const selectYear = yearInputRef.current.value;
    const month = monthInputRef.current.value;
    console.log(selectYear, month);

    props.onSearch(selectYear, month);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearInputRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <select id="month" ref={monthInputRef}>
          <option value="1">january</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <button type="submit">Filter</button>
    </form>
  );
};

export default EventSearch;
