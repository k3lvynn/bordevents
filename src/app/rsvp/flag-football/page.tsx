export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#090909",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 32, marginBottom: 12 }}>
          Flag Football RSVP Page ✅
        </h1>
        <p>Route: /rsvp/flag-football</p>
      </div>
    </main>
  );
}