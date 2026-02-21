"use client";

import { FormEvent, useState } from "react";

const eventConfig = {
  title: "Sunday Flag Football Pickup",
  subtitle: "You’re registering as a player. Buy-in is collected after you submit.",
  emoji: "🏈",
  location: "Balboa Park, Field 3 · San Diego",
  dateLine: "Sun, Mar 2 · 10:00 AM",
  arriveNote: "Arrive 9:45 AM",
  badgeText: "🏆 COMPETE · $25 BUY-IN",
  cap: 32,
  initiallyRegistered: 8,
  buyIn: 25,
  platformFee: 2.5,
};

type RsvpStatus = "form" | "confirmed" | "error" | "submitting";

export default function FlagFootballRsvpPage() {
  const [status, setStatus] = useState<RsvpStatus>("form");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [registeredCount, setRegisteredCount] = useState(
    eventConfig.initiallyRegistered
  );

  const total = eventConfig.buyIn + eventConfig.platformFee;

  const capPercent = Math.min(
    100,
    Math.round((registeredCount / eventConfig.cap) * 100)
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get("firstName")?.toString().trim(),
      lastName: formData.get("lastName")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim() || null,
      level: formData.get("level")?.toString() || "",
      group: formData.get("group")?.toString().trim() || null,
      notes: formData.get("notes")?.toString().trim() || null,
      agreed: formData.get("agree") === "on",
    };

    // basic front-end validation
    if (!payload.firstName) {
      setStatus("form");
      setErrorMessage("Please enter your first name.");
      return;
    }
    if (!payload.email || !payload.email.includes("@")) {
      setStatus("form");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!payload.agreed) {
      setStatus("form");
      setErrorMessage(
        "You need to agree to the event rules and terms before registering."
      );
      return;
    }

    try {
      const res = await fetch("/api/rsvp/flag-football", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      // if server returned something useful you could read it here
      setRegisteredCount((count) => Math.min(count + 1, eventConfig.cap));
      setStatus("confirmed");
    } catch (err) {
      console.error(err);
      setErrorMessage(
        "Something went wrong while submitting your RSVP. Please try again."
      );
      setStatus("error");
    }
  }

  // small helper to reset the form if they want to submit again
  function goBackToForm() {
    setErrorMessage(null);
    setStatus("form");
  }

  const showForm = status === "form" || status === "submitting";

  return (
    <div className="flag-body">
      {/* HEADER */}
      <header className="site-header">
        <button
          className="back-btn"
          type="button"
          onClick={() => window.history.back()}
        >
          ← Back to Event
        </button>
        <span className="logo">
          B<span>ord</span>
        </span>
        <div style={{ width: 100 }} />
      </header>

      {/* MAIN WRAPPER */}
      {showForm && (
        <div id="rsvp-page" className="page-wrap fade-up">
          {/* Event Banner */}
          <div className="event-banner">
            <div className="banner-em">{eventConfig.emoji}</div>
            <div>
              <div className="banner-title">{eventConfig.title}</div>
              <div className="banner-meta">
                📍 {eventConfig.location}
                <br />
                📅 {eventConfig.dateLine} · {eventConfig.arriveNote}
              </div>
              <div className="banner-badge">{eventConfig.badgeText}</div>
            </div>
          </div>

          {/* CAP BAR */}
          <div className="cap-row">
            <span className="cap-label">
              RSVP Cap: {eventConfig.cap} Players
            </span>
            <span className="cap-nums" id="cap-display">
              {registeredCount} of {eventConfig.cap} registered
            </span>
          </div>
          <div className="cap-bar">
            <div
              className="cap-fill-anim"
              style={{ width: `${capPercent}%` }}
            />
          </div>

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="form-card"
            aria-disabled={status === "submitting"}
          >
            <div className="form-title">Register for This Event</div>
            <div className="form-sub">{eventConfig.subtitle}</div>

            {errorMessage && (
              <div
                style={{
                  background: "rgba(244,63,94,.12)",
                  border: "1px solid rgba(244,63,94,.35)",
                  color: "#fecaca",
                  borderRadius: 8,
                  padding: "8px 10px",
                  fontSize: 12,
                  marginBottom: 16,
                }}
              >
                {errorMessage}
              </div>
            )}

            <div className="field-row">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Jordan"
                  autoComplete="given-name"
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Williams"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="phone">
                Phone Number <span className="optional-tag">Optional</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(619) 555-0123"
                autoComplete="tel"
              />
              <div className="phone-hint">
                Recommended — you&apos;ll get a text reminder the day before and
                updates from the host.
              </div>
            </div>

            <div className="field">
              <label htmlFor="level">Experience Level</label>
              <select id="level" name="level">
                <option value="">Select your level...</option>
                <option value="beginner">Beginner — first time playing flag</option>
                <option value="casual">Casual — played a few times</option>
                <option value="intermediate">
                  Intermediate — play regularly
                </option>
                <option value="competitive">
                  Competitive — league / tournament experience
                </option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="group">
                Coming Solo or With a Group?{" "}
                <span className="optional-tag">Optional</span>
              </label>
              <input
                id="group"
                name="group"
                type="text"
                placeholder="e.g. Solo · or 'with Darius and Keisha'"
              />
            </div>

            <div className="field">
              <label htmlFor="notes">
                Anything the host should know?{" "}
                <span className="optional-tag">Optional</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                placeholder="e.g. injuries, preferred position, running late..."
              />
            </div>

            <div className="field" style={{ marginBottom: 0 }}>
              <label className="checkbox-row">
                <input type="checkbox" id="agree" name="agree" />
                <span className="checkbox-label">
                  I agree to the <a href="#">event rules</a> and Bord&apos;s{" "}
                  <a href="#">Terms of Service</a>. I understand buy-ins are
                  non-refundable for no-shows.
                </span>
              </label>
            </div>

            {/* Payment summary block right under the form */}
            <div className="payment-block" style={{ marginTop: 20 }}>
              <div className="payment-title">💰 Order Summary</div>
              <div className="payment-row">
                <span className="payment-item">
                  Flag Football Buy-In (1 player)
                </span>
                <span className="payment-val">
                  ${eventConfig.buyIn.toFixed(2)}
                </span>
              </div>
              <div className="payment-row">
                <span className="payment-item">Bord Platform Fee</span>
                <span className="payment-val">
                  ${eventConfig.platformFee.toFixed(2)}
                </span>
              </div>
              <div className="payment-divider" />
              <div className="payment-row">
                <span className="payment-total-item">Total Charged Today</span>
                <span className="payment-total-val">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="stripe-note">
                <span className="stripe-badge">STRIPE</span>
                Secure checkout powered by Stripe. (Payment integration to be
                added.)
              </div>
            </div>

            <button
              className="submit-btn"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting"
                ? "Submitting..."
                : "REGISTER & RSVP →"}
            </button>
            <div className="submit-note">
              This will save your RSVP on the server. Payment collection can be
              plugged in next.
            </div>
          </form>
        </div>
      )}

      {/* CONFIRMATION VIEW */}
      {status === "confirmed" && (
        <div id="confirmation" className="conf-wrap">
          <div className="conf-top fade-up">
            <div className="conf-icon check-pop">✅</div>
            <div className="conf-title">YOU&apos;RE IN!</div>
            <div className="conf-sub">
              Registration confirmed for {eventConfig.title}.
              <br />
              Check your email (once you wire that up) for final details.
            </div>
          </div>

          <div className="conf-card fade-up">
            <div className="conf-card-hdr">
              <div className="conf-card-title">📋 YOUR EVENT DETAILS</div>
            </div>
            <div className="conf-card-body">
              <div className="conf-row">
                <span className="conf-ic">🏈</span>
                <div>
                  <div className="conf-label">Event</div>
                  <div className="conf-val">{eventConfig.title}</div>
                </div>
              </div>

              <div className="conf-row">
                <span className="conf-ic">📅</span>
                <div>
                  <div className="conf-label">Date &amp; Time</div>
                  <div className="conf-val">
                    {eventConfig.dateLine}
                    <br />
                    <span
                      style={{ fontSize: 12, color: "#525252", display: "block" }}
                    >
                      {eventConfig.arriveNote}
                    </span>
                  </div>
                </div>
              </div>

              <div className="conf-row">
                <span className="conf-ic">📍</span>
                <div>
                  <div className="conf-label">Location</div>
                  <div className="conf-val">{eventConfig.location}</div>
                </div>
              </div>

              <div className="conf-row" style={{ marginBottom: 0 }}>
                <span className="conf-ic">💰</span>
                <div>
                  <div className="conf-label">Amount</div>
                  <div className="conf-val">
                    ${total.toFixed(2)} (buy-in + platform fee)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="conf-actions fade-up">
            <button className="conf-btn conf-btn-primary" type="button">
              📅 ADD TO CALENDAR
            </button>
            <button
              className="conf-btn conf-btn-secondary"
              type="button"
              onClick={goBackToForm}
            >
              ← Edit RSVP
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="conf-wrap">
          <div className="conf-top fade-up">
            <div className="conf-icon check-pop wlconf-icon">⚠️</div>
            <div className="conf-title wlconf-title">Something went wrong</div>
            <div className="conf-sub">
              {errorMessage ||
                "There was a problem submitting your RSVP. Please go back and try again."}
            </div>
          </div>
          <div className="conf-actions fade-up">
            <button
              className="conf-btn conf-btn-secondary"
              type="button"
              onClick={goBackToForm}
            >
              ← Back to form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}