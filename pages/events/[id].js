import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

const SingleEventsPage = () => {
  const router = useRouter();
  const { query } = router;
  const item = getEventById(query.id);
  return (
    <div>
      <img
        style={{
          width: "300px",
          height: "500px",
        }}
        src={`/${item.image}`}
        alt=""
      />
      <div>
        <h2>{item.title}</h2>
        <div>
          <span>{item.date}</span>
          <span>{item.location}</span>
        </div>
        <div>{item.description}</div>
      </div>
    </div>
  );
};

export default SingleEventsPage;
