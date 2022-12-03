import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
const FilterEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);
  if (!filterData) {
    return <div>...loading</div>;
  }
  const year = +filterData[0];
  const month = +filterData[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return <p>Invalid filter please adjust your value</p>;
  }

  const allevents = getFilteredEvents({ year: year, month: month });
  console.log(allevents);
  function findEventHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={allevents} />
    </Fragment>
  );
};

export default FilterEventPage;
