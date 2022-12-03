import Link from "next/link";

const MainHeader = () => {
  return (
    <header>
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "skyblue",
        }}
      >
        <Link href="/">
          <h1>Events</h1>
        </Link>
        <Link
          style={{
            verticalAlign: "middle",
            marginTop: "36px",
          }}
          href="/events"
        >
          All Events
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
