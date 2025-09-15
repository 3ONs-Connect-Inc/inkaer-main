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

   
   // Use SendGrid Dynamic Template
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    templateId: process.env.SENDGRID_TEMPLATE_ID, 
    dynamicTemplateData: {
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
    },
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ error: 'Email failed to send' });
  }
};