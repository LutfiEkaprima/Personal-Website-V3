import React, { useRef, useState } from 'react';
import Button from '../ui/Button';
import { useInView } from '../utils/useInView';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import SocialLink from '../ui/SocialLink';

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1, once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/LutfiEkaprima', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/lutfiekaprima/', label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: 'mailto:lutfiekj@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-3xl mx-auto text-center mb-16"
          style={{
            transform: isInView ? 'none' : 'translateY(40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
          ref={ref}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700">
            Have a question or want to work together? Fill out the form below or reach out through social media.
          </p>
        </div>
        
        <div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          style={{
            transform: isInView ? 'none' : 'translateY(40px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
          }}
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-blue-600 text-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-8">
                  Fill out the form and I'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:lutfiekj@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                      lutfiekj@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-200">Indonesia, Banten, Kabupaten Tangerang</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-semibold mb-3">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <SocialLink 
                      key={index} 
                      href={link.href} 
                      label={link.label}
                      light
                    >
                      {link.icon}
                    </SocialLink>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-8">
              <form onSubmit={handleSubmit} netlify>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
                
                {submitMessage && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
