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
    subject: 'Candidate Shortlist Request Received',
    text: `Dear ${name || ''},\n\nThank you for subscribing!`,
    html: `
      <p>Dear ${name || ''},</p>
      <p>Your candidate shortlist request has been received. Our team is reviewing your requirements, and you will be contacted within 24 hours to confirm details and provide next steps.</p><br/>
      <p>Every shortlist we deliver includes only candidates whose skills, originality, and technical ability have been independently verified. This ensures you spend time only with professionals who are fully capable of performing in the role.
</p><br/>
      <p>You will hear from us shortly.<br/>
      Sincerely,<br/>
      <strong>Inkaer <br/>
      <img alt="logo" src="../assets/logo/logoDark.svg"/></strong></p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('SendGrid error:', error);//.response?.body || error.message);
    res.status(500).json({ error: 'Email failed to send' });
  }
};