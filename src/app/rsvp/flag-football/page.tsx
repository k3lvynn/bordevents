// src/app/rsvp/flag-football/page.tsx
import type { CSSProperties } from "react";
export default function FlagFootballRSVPPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#090909",
        color: "#ffffff",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
        }}
      >
        {/* Header */}
        <header
          style={{
            marginBottom: 24,
          }}
        >
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") window.history.back();
            }}
            style={{
              border: "none",
              background: "none",
              color: "#a8a29e",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              padding: 0,
              marginBottom: 8,
            }}
          >
            ← Back to Events
          </button>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            B<span style={{ color: "#f97316" }}>ord</span> Events
          </div>
        </header>

        {/* Event summary */}
        <section
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            padding: 16,
            marginBottom: 20,
            display: "flex",
            gap: 14,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 10,
              background: "rgba(249,115,22,0.12)",
              border: "1px solid rgba(249,115,22,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              flexShrink: 0,
            }}
          >
            🏈
          </div>
          <div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: 0.5,
                marginBottom: 4,
                textTransform: "uppercase",
              }}
            >
              Sunday Flag Football Pickup
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#a8a29e",
                lineHeight: 1.5,
              }}
            >
              📍 Balboa Park, Field 3 · San Diego
              <br />
              📅 Sunday · 10:00 AM (arrive 9:45)
            </div>
          </div>
        </section>

        {/* Simple RSVP form – this is just a visual form for now */}
        <section
          style={{
            background: "rgba(255,255,255,0.02)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            padding: 20,
            marginBottom: 16,
          }}
        >
          <h1
            style={{
              fontSize: 24,
              letterSpacing: 1,
              marginBottom: 8,
            }}
          >
            RSVP to Play
          </h1>
          <p
            style={{
              fontSize: 13,
              color: "#a8a29e",
              marginBottom: 18,
            }}
          >
            Drop your info below to reserve a spot for this week&apos;s pickup
            game. You&apos;ll get a confirmation email from the host once
            you&apos;re locked in.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#6b7280",
                    marginBottom: 4,
                  }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jordan"
                  style={inputStyle}
                  required
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#6b7280",
                    marginBottom: 4,
                  }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Williams"
                  style={inputStyle}
                  required
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "#6b7280",
                  marginBottom: 4,
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                style={inputStyle}
                required
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "#6b7280",
                  marginBottom: 4,
                }}
              >
                Experience Level
              </label>
              <select style={inputStyle}>
                <option>Beginner</option>
                <option>Casual / pickup only</option>
                <option>League / competitive</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                marginTop: 8,
                padding: "14px 16px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 18,
                letterSpacing: 2,
                textTransform: "uppercase",
                background:
                  "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
                color: "#ffffff",
              }}
            >
              Reserve My Spot
            </button>

            <p
              style={{
                fontSize: 11,
                color: "#6b7280",
                marginTop: 8,
              }}
            >
              This is a demo RSVP page just for the Liberty Station pickup
              proof-of-concept. Payments and confirmations can be handled
              manually with the host for now.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  borderRadius: 7,
  border: "1px solid rgba(255,255,255,0.18)",
  backgroundColor: "rgba(255,255,255,0.04)",
  padding: "10px 12px",
  color: "#ffffff",
  fontSize: 14,
};