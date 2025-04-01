'use client';

import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { profileData } from '@/data/profile';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('');

    try {
      // Use the existing formData state object
      const payload = {
        access_key: 'd210c4dd-08a9-49e9-b4ba-aa1408a79806',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative py-20 overflow-hidden"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute h-[40rem] w-[40rem] -top-40 -right-40 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute h-[30rem] w-[30rem] -bottom-32 -left-32 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="relative layout-wrapper">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let&apos;s create something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
            <div className="relative p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">{profileData.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-auto border-t border-border/50">
                <p className="text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {Object.entries(profileData.links).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      {getSocialIcon(platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/20 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
            <form
              onSubmit={handleSubmit}
              className="relative p-8 flex flex-col h-full"
            >
              <div className="space-y-6 flex-grow">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors min-h-[120px] resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              {result && (
                <div
                  className={`mt-4 p-3 rounded-xl ${
                    result.includes('Success')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {result}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return <Github className="h-5 w-5" />;
    case 'linkedin':
      return <Linkedin className="h-5 w-5" />;
    case 'twitter':
      return <Twitter className="h-5 w-5" />;
    default:
      return <Mail className="h-5 w-5" />;
  }
};
