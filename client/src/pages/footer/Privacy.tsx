import Seo from "@/components/Seo"

const Privacy = () => {
  return (
  <div className="min-h-screen bg-white">
     <Seo
  title="Privacy Policy"
  description="Read Inkaer's Privacy Policy to learn how we collect, use, and protect your personal information when you visit our website or use our services."
  name="Inkaer"
  type="website"
/>

      <main className="py-16">
        <div className="mx-auto max-w-4xl padding">
          <div className="text-center mb-12">
            <h1 className="text-bold-3xl">
              Privacy Policy
            </h1>
            <p className="mt-4 desc">
              Last updated: January 11, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">1. Information We Collect</h2>
              <p className="text-small mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us. This may include:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Company information (company name, role, hiring requirements)</li>
                <li>Professional information (resume, work history, skills)</li>
                <li>Communication preferences and feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">2. How We Use Your Information</h2>
              <p className="text-small mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Match candidates with suitable job opportunities</li>
                <li>Communicate with you about our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">3. Information Sharing</h2>
              <p className="text-small mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To facilitate job matching between candidates and employers</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">4. Data Security</h2>
              <p className="text-small mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">5. Data Retention</h2>
              <p className="text-small mb-4">
                We retain your information for as long as necessary to provide our services and fulfill 
                the purposes outlined in this policy. Specific retention periods include:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Account information: Until account deletion is requested</li>
                <li>Candidate profiles: Up to 3 years after last activity</li>
                <li>Communication records: Up to 7 years for business purposes</li>
                <li>Transaction data: As required by law and accounting standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">6. Your Rights</h2>
              <p className="text-small mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability (receive a copy of your data)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">7. Cookies and Tracking</h2>
              <p className="text-small mb-4">
                We use cookies and similar tracking technologies to collect and use personal information about you. 
                For more detailed information about the cookies we use and the purposes for which we use them, 
                please refer to our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">8. Third-Party Services</h2>
              <p className="text-small mb-4">
                Our service may contain links to other sites that are not operated by us. If you click on a 
                third-party link, you will be directed to that third party's site. We strongly advise you to 
                review the Privacy Policy of every site you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">9. International Data Transfers</h2>
              <p className="text-small mb-4">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers are conducted in accordance with applicable data protection laws 
                and with appropriate safeguards in place.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">10. Changes to Privacy Policy</h2>
              <p className="text-small mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">11. Contact Us</h2>
              <p className="text-small mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-small">
                  Email: privacy@inkaer.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Innovation Drive, San Francisco, CA 94105<br />
                  Data Protection Officer: dpo@inkaer.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Privacy