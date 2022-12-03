import Link from "next/link";
const EventItem = (props) => {
  let { data } = props;
  const humanReadableDate = new Date(data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const humanReadAddr = data.location.replace(", ", "\n");
  return (
    <div
      style={{
        backgroundColor: "darkblue",
        width: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "300px",
        }}
        src={`/${data.image}`}
        alt={data.image}
      />
      <div>
        <div>
          <h2>{data.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{humanReadAddr}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${data.id}`}>Explore event</Link>
        </div>
      </div>
    </div>
  );
};
export default EventItem;
