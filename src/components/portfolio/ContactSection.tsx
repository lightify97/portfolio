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

  return (
    <section id="contact" className="py-16 md:py-24 bg-yellow-300 dark:bg-zinc-900">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="bg-indigo-600 dark:bg-indigo-500 text-white border-4 border-black dark:border-white px-6 py-4 md:px-10 md:py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Let&apos;s Work Together
          </h2>
        </div>
        <p className="mt-6 text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 font-bold max-w-3xl">
          Ready to bring your ideas to life? I&apos;m always excited to work on interesting projects and collaborate with amazing people.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-base md:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wider">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] focus:-translate-y-1 transition-all bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-lg md:text-xl font-bold"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base md:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wider">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-6 py-4 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] focus:-translate-y-1 transition-all bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-lg md:text-xl font-bold"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-base md:text-lg font-black text-zinc-900 dark:text-zinc-100 mb-3 uppercase tracking-wider">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-6 py-4 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:focus:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] focus:-translate-y-1 transition-all resize-none bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-lg md:text-xl font-bold"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          <div className="text-center space-y-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-xl md:text-2xl font-black uppercase tracking-wider"
            >
              {isSubmitting ? (
                <>
                  <Icon icon="solar:loading-outline" width={24} height={24} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Icon icon="solar:letter-outline" width={24} height={24} />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="relative p-6 bg-green-500 dark:bg-green-600 border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] text-white">
                <div className="flex items-center gap-3 text-xl md:text-2xl font-black">
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
            <Link
              href="mailto:lightify6@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-white dark:bg-zinc-800 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all text-lg md:text-xl font-black text-zinc-900 dark:text-white uppercase tracking-wider"
            >
              <Icon icon="solar:letter-bold" width={24} height={24} />
              Send Email
            </Link>

            <Link
              href="/CV.pdf"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-blue-600 dark:bg-blue-500 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all text-lg md:text-xl font-black text-white uppercase tracking-wider"
            >
              <Icon icon="solar:download-outline" width={24} height={24} />
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
