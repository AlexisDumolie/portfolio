import { motion } from 'framer-motion';
import { useState, FormEvent, useRef } from 'react';
import { BsTelephone } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      setStatus({ type: null, message: '' });
      
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès !'
      });

      // Réinitialiser le formulaire
      setFormData({
        from_name: '',
        reply_to: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message.'
      });
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[var(--color-text)] sm:text-4xl mb-4">
            Me Contacter
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-8"></div>
          <p className="text-xl text-[var(--color-accent)] max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
                Informations de Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-[var(--color-accent)]">
                  <svg
                    className="w-6 h-6 text-[var(--color-primary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:alexis.dumolie@gmail.com"
                    className="contact-link"
                  >
                    alexis.dumolie@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-[var(--color-accent)]">
                  <BsTelephone className="w-6 h-6 text-[var(--color-primary)]" />
                  <a href="tel:+33781787978" className="contact-link">
                    07 81 78 79 78
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
                Réseaux Sociaux
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/alexis-dumolie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/AlexisDumolie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-background)] rounded-xl shadow-[var(--shadow-md)] p-8"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-[var(--color-text)] font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={(e) =>
                    setFormData({ ...formData, from_name: e.target.value })
                  }
                  required
                  className="input"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="reply_to" className="block text-[var(--color-text)] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={(e) =>
                    setFormData({ ...formData, reply_to: e.target.value })
                  }
                  required
                  className="input"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[var(--color-text)] font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="input"
                  placeholder="Votre message"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-coffee)] text-white px-8 py-3 rounded-full text-lg font-medium
                         w-full transition-all duration-300 hover:bg-[var(--color-mocha)]
                         disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status.type === 'success'}
              >
                {status.type === 'success' ? 'Message envoyé !' : 'Envoyer'}
              </motion.button>
              {status.type && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-[var(--color-success-light)] text-[var(--color-success)]'
                      : 'bg-[var(--color-error-light)] text-[var(--color-error)]'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
