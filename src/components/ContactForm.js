"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    data.append("access_key", "41cca089-460d-4a17-b5d7-c90b1c256a0c");
    data.append("subject", "New Enquiry - Sandhya Plastic Website");
    data.append("from_name", "Sandhya Plastic Website");

    setStatus("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-input"
          aria-label="Your Name"
          autoComplete="name"
          required
        />
      </div>

      <div className="field-group">
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          className="form-input"
          aria-label="Email"
          autoComplete="email"
          required
        />
      </div>

      <div className="field-group">
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message Here"
          className="form-input form-textarea"
          aria-label="Your Message Here"
          required
        />
      </div>

      <div className="field-group">
        <button
          type="submit"
          className="form-submit"
          disabled={status === "sending"}
        >
          <span>
            {status === "sending" ? "Sending..." : "Send Message"}
          </span>
        </button>
      </div>

      {status === "success" && (
        <p className="form-status" role="status">
          Thank you! Your enquiry has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="form-status" role="alert">
          Unable to send your enquiry. Please try again.
        </p>
      )}
    </form>
  );
}