import React, { useState } from 'react';

// Define the structure of your form data for TypeScript
interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectDetails: string;
}

const initialFormState: IContactForm = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  projectDetails: '',
};

function ContactForm() {
  // State for the form fields
  const [contactForm, setContactForm] = useState<IContactForm>(initialFormState);
  
  // State to manage the submission process
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Handler for input changes
  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  // Handler for the form submission
  const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Send the form data to your Node.js backend endpoint
      const response = await fetch('https://fecorporation-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const result = await response.json();

      if (!response.ok) {
        // If the server response is not successful, throw an error
        throw new Error(result.error || 'Something went wrong');
      }

      // Handle success
      setSubmitSuccess(true);
      setSubmitMessage(result.message);
      setContactForm(initialFormState); // Reset the form

    } catch (error: any) {
      // Handle errors
      setSubmitSuccess(false);
      setSubmitMessage(error.message || 'Failed to send message. Please try again.');
    } finally {
      // This will run regardless of success or error
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
      <h3 className="text-2xl font-bold mb-6">Start a Conversation</h3>
      
      {submitMessage && (
        <div className={`p-4 rounded-lg mb-6 ${
          submitSuccess 
            ? 'bg-green-100 border border-green-300 text-green-800' 
            : 'bg-red-100 border border-red-300 text-red-800'
        }`}>
          {submitMessage}
        </div>
      )}
      
      {/* The form JSX you provided */}
      <form onSubmit={handleContactFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name *</label>
            <input 
              type="text" 
              name="firstName"
              value={contactForm.firstName}
              onChange={handleContactFormChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name *</label>
            <input 
              type="text" 
              name="lastName"
              value={contactForm.lastName}
              onChange={handleContactFormChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400"
              placeholder="Doe"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input 
            type="email" 
            name="email"
            value={contactForm.email}
            onChange={handleContactFormChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400"
            placeholder="john.doe@company.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Company</label>
          <input 
            type="text" 
            name="company"
            value={contactForm.company}
            onChange={handleContactFormChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400"
            placeholder="Your Company"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Project Details *</label>
          <textarea 
            rows={4}
            name="projectDetails"
            value={contactForm.projectDetails}
            onChange={handleContactFormChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400"
            placeholder="Tell us about your project or financing needs..."
          ></textarea>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 font-bold rounded-lg transition-all duration-300 shadow-lg ${
            isSubmitting 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700'
          } text-white`}
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;