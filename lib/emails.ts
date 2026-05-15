import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const FROM = process.env.GMAIL_USER || "drewangers@gmail.com";
const NOTIFY_1 = "drewangers@gmail.com";
const NOTIFY_2 = process.env.NOTIFY_EMAIL_2 || "carolinequinn518@gmail.com";

// ── Notify team of new inquiry ──
export async function sendInquiryNotification(data: Record<string, string>) {
  const subject = `New Retreat Inquiry — ${data.firstName} ${data.lastName || ""} · ${data.company || "Unknown Company"}`;

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1B3A5C;">
      <h2 style="font-size: 24px; font-weight: normal; border-bottom: 1px solid #C9A96E; padding-bottom: 16px;">
        New Retreat Inquiry
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
        ${Object.entries(data)
          .map(
            ([key, val]) => `
          <tr>
            <td style="padding: 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A96E; width: 160px; vertical-align: top;">
              ${key.replace(/([A-Z])/g, " $1").trim()}
            </td>
            <td style="padding: 8px 0; font-size: 14px; color: #1B3A5C;">
              ${val || "—"}
            </td>
          </tr>`
          )
          .join("")}
      </table>
      <div style="margin-top: 32px; padding: 16px; background: #F8F5F0; border-left: 3px solid #C9A96E;">
        <p style="margin: 0; font-size: 12px; color: #888;">
          Submitted via northeastexecutiveretreats.com
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: FROM,
    to: [NOTIFY_1, NOTIFY_2],
    subject,
    html,
  });
}

// ── Auto-reply to prospect ──
export async function sendInquiryAutoReply(
  toEmail: string,
  firstName: string
) {
  await transporter.sendMail({
    from: FROM,
    to: toEmail,
    subject: `We received your retreat inquiry, ${firstName}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1B3A5C;">
        <h2 style="font-size: 24px; font-weight: normal; color: #1B3A5C;">
          Thank you, ${firstName}.
        </h2>
        <div style="width: 40px; height: 1px; background: #C9A96E; margin: 16px 0 24px;"></div>
        <p style="font-size: 15px; line-height: 1.7; color: #444;">
          We received your retreat inquiry and someone from our team will be in touch
          within <strong>24 hours</strong> with a fully custom proposal for your New England retreat.
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444;">
          In the meantime, feel free to explore our destinations for inspiration.
        </p>
        <div style="margin-top: 32px;">
          <a href="https://northeastexecutiveretreats.com/packages"
             style="display: inline-block; background: #1B3A5C; color: #F8F5F0; padding: 12px 28px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;">
            Explore Destinations
          </a>
        </div>
        <p style="margin-top: 40px; font-size: 13px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
          Northeast Executive Retreats · In Partnership with Blue Lobster Travel Co.
        </p>
      </div>
    `,
  });
}

// ── Notify team of new quiz lead ──
export async function sendQuizLeadNotification(data: Record<string, string>) {
  const subject = `New Quiz Lead — ${data.firstName} · ${data.company || "Unknown"} → ${data.destination?.toUpperCase()}`;

  const html = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1B3A5C;">
      <h2 style="font-size: 24px; font-weight: normal; border-bottom: 1px solid #C9A96E; padding-bottom: 16px;">
        New Retreat Builder Lead
      </h2>
      <p style="font-size: 14px; color: #666; margin-top: 16px;">
        Matched to: <strong style="color: #C9A96E;">${data.destination?.toUpperCase()}</strong>
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        ${Object.entries(data)
          .map(
            ([key, val]) => `
          <tr>
            <td style="padding: 6px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A96E; width: 140px;">
              ${key.replace(/([A-Z])/g, " $1").trim()}
            </td>
            <td style="padding: 6px 0; font-size: 14px; color: #1B3A5C;">${val || "—"}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  await transporter.sendMail({
    from: FROM,
    to: [NOTIFY_1, NOTIFY_2],
    subject,
    html,
  });
}

// ── Auto-reply after quiz ──
export async function sendQuizAutoReply(
  toEmail: string,
  firstName: string,
  destination: string
) {
  const destNames: Record<string, string> = {
    newport: "Newport, Rhode Island",
    maine: "Coastal Maine",
    berkshires: "The Berkshires",
    boston: "Boston",
    vermont: "Vermont",
  };
  const destName = destNames[destination] || destination;

  await transporter.sendMail({
    from: FROM,
    to: toEmail,
    subject: `Your ${destName} Retreat Match — Northeast Executive Retreats`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1B3A5C;">
        <h2 style="font-size: 24px; font-weight: normal;">
          ${firstName}, your retreat match is in.
        </h2>
        <div style="width: 40px; height: 1px; background: #C9A96E; margin: 16px 0 24px;"></div>
        <p style="font-size: 15px; line-height: 1.7; color: #444;">
          Based on your team&apos;s goals and preferences, we matched you with
          <strong>${destName}</strong> — one of New England&apos;s finest settings for
          executive retreats and corporate off-sites.
        </p>
        <p style="font-size: 15px; line-height: 1.7; color: #444;">
          Ready to take the next step? Click below to request a custom proposal
          and we&apos;ll come back to you within 24 hours.
        </p>
        <div style="margin-top: 28px;">
          <a href="https://northeastexecutiveretreats.com/contact"
             style="display: inline-block; background: #C9A96E; color: #0F2340; padding: 12px 28px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; margin-right: 12px;">
            Request a Proposal
          </a>
          <a href="https://northeastexecutiveretreats.com/packages/${destination}"
             style="display: inline-block; border: 1px solid #1B3A5C; color: #1B3A5C; padding: 12px 28px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;">
            Explore ${destName}
          </a>
        </div>
        <p style="margin-top: 40px; font-size: 13px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
          Northeast Executive Retreats · In Partnership with Blue Lobster Travel Co.
        </p>
      </div>
    `,
  });
}
