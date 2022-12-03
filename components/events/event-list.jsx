import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;

  return (
    <div
      style={{
        display: "grid",
        gridGap: "20px",
      }}
    >
      {items.map((e) => (
        <EventItem data={e} key={e.id} />
      ))}
    </div>
  );
};

export default EventList;
