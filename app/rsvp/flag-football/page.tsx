// app/rsvp/flag-football/page.tsx
export default function FlagFootballRSVPPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#000909',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 16px',
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>
        Flag Football RSVP ✅
      </h1>
      <p style={{ fontSize: 18, marginBottom: 8 }}>
        Route: /rsvp/flag-football
      </p>
      <p style={{ opacity: 0.8 }}>
        This is the production RSVP page hosted on Vercel.
      </p>
    </main>
  );
}