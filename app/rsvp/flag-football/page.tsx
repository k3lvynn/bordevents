// app/rsvp/flag-football/page.tsx
export default function FlagFootballRSVPPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1.5rem",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          Flag Football RSVP ✅
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#9ca3af",
          }}
        >
          This page is live at <code>/rsvp/flag-football</code>.
        </p>
      </div>
    </main>
  );
}