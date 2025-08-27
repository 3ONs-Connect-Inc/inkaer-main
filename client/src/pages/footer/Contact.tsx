import Modal from "@/components/Modal";
import Seo from "@/components/Seo"
import { BtnLoader } from "@/components/ui/Spinner";
import { useContactMutation } from "@/hooks/useContactMutation";
import type { ContactFormData } from "@/utils/api/contact";
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react";


const initialForm: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useContactMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => {
        setSubmitted(true);
        setFormData(initialForm);
      },
      onError: (err: any) => {
        alert("Something went wrong: " + err.message);
      },
    });
  };

   const handleCloseModal = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
     <Seo
  title="Contact"
  description="Get in touch with the Inkaer team. Reach out for support, partnership opportunities, or general inquiries—we’re here to help."
  name="Inkaer"
  type="website"
/>

      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl padding">
            <div className="text-center">
              <h1 className="text-bold-5xl">
                Contact Us
              </h1>
              <p className="mt-6 desc leading-8 max-w-3xl mx-auto">
                Have questions about our services? Want to discuss your hiring needs? 
                We're here to help you find the perfect engineering talent.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl padding">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-bold-3xl  mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-small">contact@inkaer.com</p>
                      <p className="text-sm text-gray-500 mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-900">Phone</h3>
                      <p className="text-small">+1 (905) 933-8653</p>
                      <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9am to 6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-900">Office</h3>
                      <p className="text-small">
                        2967 Dundas St W, 546D<br />
                        Toronto, ON M6P 1Z2<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm sm:text-lg font-medium text-gray-900">Business Hours</h3>
                      <p className="text-small">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-12 lg:mt-0">
                <div className="bg-white p-3 smp-8 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-bold-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                                  value={formData.firstName}
                  onChange={handleChange}
                       required
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                          value={formData.lastName}
                             onChange={handleChange}
                       required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                              value={formData.email}
                           onChange={handleChange}
                       required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Company"
                           value={formData.company}
                        onChange={handleChange}
                       required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How can we help you?"
                               value={formData.subject}
                        onChange={handleChange}
                       required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                              value={formData.message}
                onChange={handleChange}
                required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your hiring needs..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full btn-responsive bg-blue-600  text-white  rounded-lg hover:bg-blue-700 font-medium"
                    >
                     {mutation.isPending ? <BtnLoader/> : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
         <Modal
        isOpen={submitted}
        title="Thank you!"
        message="We’ve received your message. Our team will get back to you shortly."
           onClose={handleCloseModal}
      />
    </div>
  )
}

export default Contact