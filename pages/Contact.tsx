
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "20a69267-0040-4122-8619-abf794f3efe7"); // Applied your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus('error');
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center py-40 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[500px] w-full text-center"
      >
        <h1 className="text-[2.5rem] font-bold text-background-dark dark:text-white mb-4">Get in Touch</h1>
        <p className="text-background-dark/60 dark:text-white/60 mb-10">
          Have a question? Want to connect? Drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div>
            <label className="block text-sm text-background-dark/80 dark:text-white/80 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-surface-light dark:bg-[#0a0a12] border border-gold-subtle rounded-lg px-4 py-3 text-background-dark dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all shadow-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm text-background-dark/80 dark:text-white/80 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-surface-light dark:bg-[#0a0a12] border border-gold-subtle rounded-lg px-4 py-3 text-background-dark dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all shadow-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-background-dark/80 dark:text-white/80 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-surface-light dark:bg-[#0a0a12] border border-gold-subtle rounded-lg px-4 py-3 text-background-dark dark:text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none shadow-sm"
              placeholder="How can I help?"
            ></textarea>
          </div>

          {message && (
            <div className={`p-4 rounded-lg text-sm font-medium ${status === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gold text-background-dark py-4 rounded-lg font-bold text-lg transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-background-dark/40 dark:text-white/40 text-sm">
            Or email directly:{' '}
            <a href="mailto:hello@aiwithsurya.com" className="text-gold hover:underline">
              somasekharkurapati6423@gmail.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
