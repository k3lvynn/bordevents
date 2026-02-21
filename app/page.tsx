// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
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
      <h1 style={{ fontSize: 36, marginBottom: 16 }}>
        Bord Events
      </h1>
      <p style={{ fontSize: 20, marginBottom: 32 }}>
        Welcome! Use this link to RSVP for the next event.
      </p>
      <Link
        href="/rsvp/flag-football"
        style={{
          fontSize: 18,
          padding: '12px 24px',
          borderRadius: 999,
          border: '1px solid #ffffff',
          textDecoration: 'none',
        }}
      >
        RSVP: Flag Football
      </Link>
    </main>
  );
}