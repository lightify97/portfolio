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
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Let&apos;s Work Together</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;m always excited to work on interesting projects and collaborate with amazing people.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 transition-colors resize-none"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Icon icon="solar:loading-outline" width={20} height={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Icon icon="solar:letter-outline" width={20} height={20} />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="relative mt-4 p-4 bg-green-50 dark:bg-green-950 border-2 border-green-200 dark:border-green-900">
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Icon icon="solar:check-circle-bold" width={20} height={20} />
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  <Icon icon="solar:close-circle-bold" width={20} height={20} />
                </button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-900">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <Icon icon="solar:close-circle-bold" width={20} height={20} />
                  <span className="font-medium">Failed to send message</span>
                </div>
                <p className="text-red-600 dark:text-red-500 text-sm mt-1">
                  Please try again or contact me directly at lightify6@gmail.com
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  <Icon icon="solar:close-circle-bold" width={20} height={20} />
                </button>
              </div>
            )}
          </div>
        </form>

        {/* Alternative Contact Methods */}
        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:lightify6@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium transition-colors"
            >
              <Icon icon="solar:letter-bold" width={18} height={18} />
              Send Email
            </Link>

            <Link
              href="/CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium transition-colors"
            >
              <Icon icon="solar:download-outline" width={18} height={18} />
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
