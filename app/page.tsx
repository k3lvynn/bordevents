export default function FlagFootballRSVPPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#000909',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 16 }}>
        Flag Football RSVP Page ✅
      </h1>
      <p style={{ fontSize: 20, marginBottom: 8 }}>
        Route: <code>/rsvp/flag-football</code>
      </p>
      <p style={{ opacity: 0.8, maxWidth: 600 }}>
        This is your dedicated RSVP page for the flag football event. You can
        later replace this text with a real form for players to sign up.
      </p>
    </main>
  );
}