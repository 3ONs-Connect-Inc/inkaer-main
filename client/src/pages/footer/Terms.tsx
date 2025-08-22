import Seo from "@/components/Seo"


const Terms = () => {
  return (
<div className="min-h-screen bg-white">  
 <Seo
  title="Terms of Service"
  description="Review Inkaer's Terms of Service to understand your rights, responsibilities, and the rules governing the use of our website and services."
  name="Inkaer"
  type="website"
/>

      <main className="py-16">
        <div className="mx-auto max-w-4xl padding">
          <div className="text-center mb-12">
            <h1 className="text-bold-3xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 desc">
              Last updated: January 11, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-small mb-4">
                By accessing and using Inkaer's services, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">2. Service Description</h2>
              <p className="text-small mb-4">
                Inkaer provides a platform that connects employers with pre-vetted engineering talent. Our services include:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Candidate sourcing and vetting</li>
                <li>Technical assessment and verification</li>
                <li>Candidate presentation and shortlisting</li>
                <li>Interview coordination and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">3. User Responsibilities</h2>
              <p className="text-small mb-4">
                Users of our platform agree to:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the service only for lawful purposes</li>
                <li>Respect the confidentiality of candidate information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misuse or abuse the platform in any way</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">4. Payment Terms</h2>
              <p className="text-small mb-4">
                Our pricing is success-based, typically ranging from 10-15% of the hired candidate's base annual salary. 
                Payment terms include:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>No upfront fees required</li>
                <li>Payment due within 30 days of successful hire</li>
                <li>Refund guarantee if hire doesn't work out within 90 days</li>
                <li>All fees are clearly communicated before engagement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">5. Confidentiality</h2>
              <p className="text-small mb-4">
                We maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc list-inside text-small mb-4 space-y-2">
                <li>Client company information and requirements</li>
                <li>Candidate personal and professional information</li>
                <li>Interview feedback and hiring decisions</li>
                <li>Any proprietary information shared during the process</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">6. Limitation of Liability</h2>
              <p className="text-small mb-4">
                Inkaer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">7. Intellectual Property</h2>
              <p className="text-small mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive 
                property of Inkaer and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">8. Termination</h2>
              <p className="text-small mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
                whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">9. Changes to Terms</h2>
              <p className="text-small mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-semibold-2xl mb-4">10. Contact Information</h2>
              <p className="text-small mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-small">
                  Email: legal@inkaer.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Innovation Drive, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Terms