"use client";

import emailjs from '@emailjs/browser';
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'lightify6@gmail.com',
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate form completion percentage
  const formCompletion = () => {
    const fields = [formData.name, formData.email, formData.message];
    const filledFields = fields.filter(f => f.trim().length > 0).length;
    return (filledFields / fields.length) * 100;
  };

  // Confetti effect for success
  const createConfetti = () => {
    return Array.from({ length: 50 }, (_, i) => {
      const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <div
          key={i}
          className={`absolute w-2 h-2 ${color} animate-confetti`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      );
    });
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white dark:bg-zinc-950">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 lg:mb-16">
        <div className="bg-indigo-600 dark:bg-indigo-500 text-white border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter">
            Let&apos;s Work Together
          </h2>
        </div>
        <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-zinc-800 dark:text-zinc-200 font-bold max-w-3xl">
          Ready to bring your ideas to life? I&apos;m always excited to work on interesting projects and collaborate with amazing people.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-8 md:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm md:text-base lg:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-2 md:mb-3 uppercase tracking-wider">
                Name *
              </label>
              {/* Focus spotlight */}
              {focusedField === 'name' && (
                <div className="absolute -inset-1 bg-blue-500/20 blur-xl transition-all duration-300 rounded-lg" />
              )}
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="relative w-full px-4 md:px-6 py-2 md:py-4 border-3 md:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:md:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] focus:-translate-y-1 transition-all bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-base md:text-lg lg:text-xl font-bold"
                placeholder="Your full name"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-sm md:text-base lg:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-2 md:mb-3 uppercase tracking-wider">
                Email *
              </label>
              {focusedField === 'email' && (
                <div className="absolute -inset-1 bg-blue-500/20 blur-xl transition-all duration-300 rounded-lg" />
              )}
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="relative w-full px-4 md:px-6 py-2 md:py-4 border-3 md:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:md:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] focus:-translate-y-1 transition-all bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-base md:text-lg lg:text-xl font-bold"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mb-4 md:mb-6 relative">
            <label htmlFor="message" className="block text-sm md:text-base lg:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-2 md:mb-3 uppercase tracking-wider">
              Message *
            </label>
            {focusedField === 'message' && (
              <div className="absolute -inset-1 bg-blue-500/20 blur-xl transition-all duration-300 rounded-lg" />
            )}
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="relative w-full px-4 md:px-6 py-2 md:py-4 border-3 md:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] focus:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:focus:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:md:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] focus:-translate-y-1 transition-all resize-none bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-base md:text-lg lg:text-xl font-bold"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          <div className="text-center space-y-4 md:space-y-6">
            {/* Progress-fill submit button */}
            <div className="relative inline-block">
              <div
                className="absolute inset-0 bg-blue-800 transition-all duration-500 ease-out"
                style={{ width: `${formCompletion()}%` }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-5 bg-blue-600 hover:bg-blue-700 text-white border-3 md:border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-xl lg:text-2xl font-black uppercase tracking-wider min-w-[200px] md:min-w-[300px]"
              >
                {isSubmitting ? (
                  <>
                    <Icon icon="solar:loading-outline" className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon icon="solar:letter-outline" className="w-5 h-5 md:w-6 md:h-6" />
                    Send Message
                    <Icon icon="solar:alt-arrow-right-bold" className="ml-auto group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" />
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="relative p-6 bg-green-500 dark:bg-green-600 border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] text-white overflow-hidden">
                {/* Confetti celebration */}
                <div className="absolute inset-0 pointer-events-none">
                  {createConfetti()}
                </div>
                <div className="relative flex items-center gap-3 text-xl md:text-2xl font-black">
                  <Icon icon="solar:check-circle-bold" width={28} height={28} />
                  <span>Message sent successfully!</span>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="absolute top-3 right-3 text-white hover:text-black dark:hover:text-white transition-colors"
                >
                  <Icon icon="solar:close-circle-bold" width={24} height={24} />
                </button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="relative p-6 bg-red-500 dark:bg-red-600 border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] text-white">
                <div className="flex items-center gap-3 text-xl md:text-2xl font-black">
                  <Icon icon="solar:close-circle-bold" width={28} height={28} />
                  <span>Failed to send message</span>
                </div>
                <p className="text-lg md:text-xl mt-2 font-bold">
                  Please try again or contact me directly at lightify6@gmail.com
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="absolute top-3 right-3 text-white hover:text-black dark:hover:text-white transition-colors"
                >
                  <Icon icon="solar:close-circle-bold" width={24} height={24} />
                </button>
              </div>
            )}
          </div>
        </form>

        {/* Alternative Contact Methods */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 font-bold mb-8">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Email reveal animation on hover */}
            <Link
              href="mailto:lightify6@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-white dark:bg-zinc-800 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all text-lg md:text-xl font-black text-zinc-900 dark:text-white uppercase tracking-wider relative overflow-hidden"
            >
              <Icon icon="solar:letter-bold" width={24} height={24} className="group-hover:animate-bounce" style={{ animationDuration: "0.5s" }} />
              <span className="relative">
                Send Email
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
              <Icon icon="solar:alt-arrow-right-bold" className="ml-auto group-hover:translate-x-1 transition-transform" width={20} height={20} />
            </Link>

            <Link
              href="/CV.pdf"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-blue-600 dark:bg-blue-500 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all text-lg md:text-xl font-black text-white uppercase tracking-wider"
            >
              <Icon icon="solar:download-outline" width={24} height={24} className="group-hover:animate-bounce" style={{ animationDuration: "0.5s" }} />
              <span className="relative">
                Download CV
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
              <Icon icon="solar:alt-arrow-down-bold" className="ml-auto group-hover:translate-y-1 transition-transform" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
