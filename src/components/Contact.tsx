import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Création de site web',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Adresse e-mail invalide.");
      }

      await addDoc(collection(db, 'contact_requests'), {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        projectType: formData.projectType,
        budget: formData.budget.trim(),
        message: formData.message.trim(),
        createdAt: serverTimestamp()
      });

      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Création de site web',
        budget: '',
        message: ''
      });
    } catch (err: any) {
      console.error("Error saving contact request:", err);
      setStatus('error');
      setErrorMessage(err.message || "Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-[#090B10] border-t border-[#151B29] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B89B65]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title, Intro & WhatsApp contacts */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[#B89B65] text-xs font-semibold uppercase tracking-widest block mb-4">
                04 // Contact & Collaboration
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E5DF] font-editorial leading-tight">
                ET SI NOUS CRÉIONS <br />
                <span className="italic font-light text-[#B89B65]">QUELQUE CHOSE ENSEMBLE ?</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-[#858891] leading-relaxed">
              Vous avez un projet, une idée ou une entreprise à développer ? Parlons-en et construisons une expérience digitale remarquable.
            </p>

            {/* Phone & WhatsApp Quick Contacts */}
            <div className="space-y-4 pt-4">
              <span className="text-xs uppercase tracking-wider text-[#B89B65] font-semibold block">
                Contacts direct & WhatsApp
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Number 1 */}
                <div className="bg-[#151B29] border border-[#151B29] p-5 rounded-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[#E8E5DF] font-mono text-sm">
                    <Phone className="w-4 h-4 text-[#B89B65]" />
                    <span>+212 655-501737</span>
                  </div>
                  <a 
                    href="https://wa.me/212655501737" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp 1</span>
                  </a>
                </div>

                {/* Number 2 */}
                <div className="bg-[#151B29] border border-[#151B29] p-5 rounded-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[#E8E5DF] font-mono text-sm">
                    <Phone className="w-4 h-4 text-[#B89B65]" />
                    <span>+212 644-683827</span>
                  </div>
                  <a 
                    href="https://wa.me/212644683827" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp 2</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form connected to Firestore */}
          <div className="lg:col-span-6">
            <div className="bg-[#151B29] border border-[#B89B65]/30 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl relative">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#B89B65]/20 border border-[#B89B65] text-[#B89B65] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-editorial text-[#E8E5DF]">Message bien reçu !</h3>
                  <p className="text-sm text-[#858891] max-w-sm mx-auto">
                    Votre demande a bien été envoyée. Nous vous contacterons prochainement.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-full bg-[#B89B65] text-[#090B10] text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-editorial text-[#E8E5DF] mb-6">Parlons de votre projet</h3>
                  
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage || "Une erreur est survenue. Veuillez réessayer."}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#858891] block">
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Votre nom ou nom d'entreprise"
                      className="w-full bg-[#090B10] border border-[#151B29] rounded-xl px-4 py-3.5 text-sm text-[#E8E5DF] focus:outline-none focus:border-[#B89B65] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#858891] block">
                        Adresse e-mail *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre.email@exemple.com"
                        className="w-full bg-[#090B10] border border-[#151B29] rounded-xl px-4 py-3.5 text-sm text-[#E8E5DF] focus:outline-none focus:border-[#B89B65] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#858891] block">
                        Téléphone (facultatif)
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+33 6 00 00 00 00"
                        className="w-full bg-[#090B10] border border-[#151B29] rounded-xl px-4 py-3.5 text-sm text-[#E8E5DF] focus:outline-none focus:border-[#B89B65] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#858891] block">
                        Type de projet *
                      </label>
                      <select 
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#090B10] border border-[#151B29] rounded-xl px-4 py-3.5 text-sm text-[#E8E5DF] focus:outline-none focus:border-[#B89B65] transition-colors"
                      >
                        <option value="Création de site web">Création de site web</option>
                        <option value="Site e-commerce">Site e-commerce</option>
                        <option value="Design UI/UX">Design UI/UX</option>
                        <option value="Gestion des réseaux sociaux">Gestion des réseaux sociaux</option>
                        <option value="Création de contenu">Création de contenu</option>
                        <option value="Marketing digital">Marketing digital</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-[#858891] block">
                        Budget estimé (facultatif)
                      </label>
                      <input 
                        type="text" 
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="Ex: 3000€ - 5000€"
                        className="w-full bg-[#090B10] border border-[#151B29] rounded-xl px-4 py-3.5 text-sm text-[#E8E5DF] focus:outline-none focus:border-[#B89B65] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-[#858891] block">
                      Message *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre projet, vos objectifs et votre calendrier..."
                      className="w-full bg-[#090B10] border border-[#151B29] rounded-xl px-4 py-3.5 text-sm text-[#E8E5DF] focus:outline-none focus:border-[#B89B65] transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-full bg-[#B89B65] text-[#090B10] text-xs font-bold uppercase tracking-widest hover:bg-[#E8E5DF] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    <span>{status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
