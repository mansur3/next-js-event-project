import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getAllEvents, getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
const AllEventsPage = () => {
  const router = useRouter();
  const allevents = getAllEvents();
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

export default AllEventsPage;
