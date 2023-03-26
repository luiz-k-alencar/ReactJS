import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>My Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default EventDetailPage;
