import { useState } from "react";

export default function App() {
  const events = [
    { id: 1, title: "Tech Fest", details: "It is a Tech Fest" },
    { id: 2, title: "Workshop", details: "It is a Workshop" }
  ];

  const [show, setShow] = useState(false);
  const [eventData, setEventData] = useState(null);

  const open = (e) => {
    setEventData(e);
    setShow(true);
  };

  const close = () => {
    setShow(false);
    setEventData(null);
  };

  return (
    <div>
      <h3>Events</h3>

      {events.map((e) => (
        <div
          key={e.id}
          onClick={() => open(e)}
          style={{ cursor: "pointer", marginBottom: "10px" }}
        >
          {e.title}
        </div>
      ))}

      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              color: "black"
            }}
          >
            <h4>{eventData.title}</h4>
            <p>{eventData.details}</p>
            <button onClick={close}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
