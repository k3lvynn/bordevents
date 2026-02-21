// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1.5rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}
      >
        Bord Events
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "32rem",
          marginBottom: "2.5rem",
          color: "#9ca3af",
        }}
      >
        Welcome! Use the link below to open the Flag Football RSVP page.
      </p>

      <Link href="/rsvp/flag-football">
        <button
          style={{
            padding: "0.9rem 1.8rem",
            borderRadius: "999px",
            border: "1px solid #4b5563",
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(56,189,248,0.9))",
            color: "#0f172a",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow:
              "0 10px 25px rgba(15,23,42,0.7), 0 0 0 1px rgba(148,163,184,0.3)",
          }}
        >
          Go to Flag Football RSVP
          <span style={{ fontSize: "1.2rem" }}>↗</span>
        </button>
      </Link>
    </main>
  );
}