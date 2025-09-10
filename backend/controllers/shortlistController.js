import { db, admin } from "../config/firebase.js";
import sgMail from "../config/sendgrid.js";

export const submitShortlist = async (req, res) => {

    const { name, company, roleTitle, tools, domain, industry, location, urgency, email } = req.body;

    // Save to Firestore
    const docRef = await db.collection("shortlistRequests").add({
      name,
      company,
      roleTitle,
      tools,
      domain,
      industry,
      location,
      urgency,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

   
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Thank You for Subscribing!',
    text: `Hi ${name || 'there'},\n\nThank you for subscribing!`,
    html: `
      <p>Hi ${name || 'there'},</p>
      <p>Thank you for subscribing!</p>
      <p>Best regards,<br/><strong>Inkaer Team</strong></p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error.message);
    res.status(500).json({ error: 'Email failed to send' });
  }
};