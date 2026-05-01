/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Bug, Star, Zap, Crown, Ghost, Sparkles, Navigation, Phone, X } from 'lucide-react';
import { useState } from 'react';

const Profiles = [
  {
    id: 'daniil',
    name: 'Даниил',
    title: 'Твой Владыка',
    phone: '+7 903 090 0798',
    origin: 'Кольца Сатурна',
    description: 'Единственный человек во вселенной, который может договориться с прусаками в твоей хрущевке. Владеет древней техникой тараканьего гипноза и управления коллективным разумом.',
    stats: { power: '999', charm: 'Over 9000', speed: 'Шустрый' },
    image: '/input_file_0.png',
  },
  {
    id: 'david',
    name: 'Давид',
    title: 'Твой Господин',
    phone: '+7 933 982 8807',
    origin: 'Спутник Титан',
    description: 'Прибыл на Землю, чтобы навести идеальный порядок среди членистоногих. Давид не давит тараканов, он направляет их мощь на благо высших целей.',
    stats: { power: 'Infinite', charm: 'Галактический', speed: 'Световой' },
    image: '/input_file_1.png',
  }
];

const Escorts = [
  { name: 'Блестящая Марта', role: 'Мадагаскарская Дива', image: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=600&h=800&auto=format&fit=crop' },
  { name: 'Сэр Усик', role: 'Элитный Рыжий', image: 'https://images.unsplash.com/photo-1626202356505-49238324968c?q=80&w=600&h=800&auto=format&fit=crop' },
  { name: 'Золотой Панцирь', role: 'Владыка Пустоты', image: 'https://images.unsplash.com/photo-1502441991404-583b27b38d38?q=80&w=600&h=800&auto=format&fit=crop' },
];

const Services = [
  { icon: <Bug className="w-6 h-6 text-amber-500" />, title: 'Тараканий Экскорт', desc: 'Придем на встречу с 1000 верных подданных для поддержки вашего статуса.' },
  { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: 'Сатурнянский Шарм', desc: 'Ослепительное присутствие, вдохновленное блеском колец Сатурна.' },
  { icon: <Crown className="w-6 h-6 text-yellow-500" />, title: 'Коронация на Кухне', desc: 'Признание вашего авторитета среди местных популяций насекомых.' },
  { icon: <Ghost className="w-6 h-6 text-purple-400" />, title: 'Межзвездная Дипломатия', desc: 'Решение любых конфликтов за гранью земного понимания.' },
];

export default function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Contact Overlay */}
      <AnimatePresence>
        {showContact && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setShowContact(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-white/10 p-8 rounded-[2rem] max-w-sm w-full relative"
            >
              <button 
                onClick={() => setShowContact(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors text-neutral-500 hover:text-white"
                id="close-contact"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                <Phone className="text-amber-500" />
                Связь
              </h3>

              <div className="space-y-6 text-left">
                {Profiles.map((p) => (
                  <div key={p.id} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all group">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mb-1 group-hover:text-amber-500 transition-colors">{p.title}</p>
                    <p className="text-xl font-bold mb-2">{p.name}</p>
                    <a 
                      href={`tel:${p.phone.replace(/\s/g, '')}`} 
                      className="text-amber-500 font-mono text-lg block hover:underline tracking-tight"
                    >
                      {p.phone}
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[10px] text-neutral-600 uppercase tracking-[0.2em] text-center italic">
                Для высших слоев общества
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <header className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/saturn_space/1920/1080?grayscale" 
            alt="Saturn Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center px-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-amber-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-amber-500">Elite Saturnian Services</span>
            <Sparkles className="text-amber-500 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6 text-balance">
            САТУРНЯНЕ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-200">ЗДЕСЬ</span>
          </h1>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg md:text-xl font-light italic">
            "Даниил и Давид — истинные повелители тараканов и владыки колец Сатурна. 
            Ваш проводник в мир высшей межпланетной элиты."
          </p>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center opacity-50">
          <span className="text-[10px] uppercase tracking-widest mb-2 font-mono">Прокрутите для ознакомления</span>
          <div className="w-px h-12 bg-white/20" />
        </div>
      </header>

      {/* Profile Section */}
      <section id="profiles" className="py-24 px-4 max-w-7xl mx-auto border-b border-white/5">
        <h2 className="text-xs uppercase tracking-[0.5em] text-amber-500 font-mono mb-12 text-center">Высшее Командование</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {Profiles.map((profile, i) => (
            <motion.div 
              key={profile.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="group relative flex-1 aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 border border-white/5"
            >
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Navigation className="w-4 h-4 text-amber-500 inline" />
                  <span className="text-xs uppercase tracking-widest text-amber-500 font-mono">{profile.origin}</span>
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tight mb-1">{profile.name}</h2>
                <p className="text-lg text-yellow-200/80 font-medium mb-1 italic">{profile.title}</p>
                <p className="text-amber-500 font-mono text-sm mb-4">{profile.phone}</p>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {profile.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {Object.entries(profile.stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="text-[10px] uppercase text-neutral-500 mb-1">{key}</p>
                      <p className="text-xs font-mono text-white">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cockroach Escorts Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.5em] text-amber-500 font-mono mb-12 text-center">Тараканий Экскорт (AI Models)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Escorts.map((escort, i) => (
            <motion.div 
              key={escort.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/5 group"
            >
              <img src={escort.image} alt={escort.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xl font-bold uppercase tracking-tight">{escort.name}</p>
                <p className="text-xs text-amber-500 font-mono uppercase tracking-widest">{escort.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-amber-500/50 transition-colors"
                id={`service-${i}`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold uppercase mb-2 tracking-wide">{service.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="py-24 text-center px-4">
        <Star className="w-12 h-12 text-amber-500 mx-auto mb-8 animate-spin-slow" />
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto">
          СТАНЬТЕ ЧАСТЬЮ МЕЖЗВЕЗДНОЙ ЭЛИТЫ СЕЙЧАС
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContact(true)}
          className="bg-amber-500 text-black px-12 py-5 rounded-full font-black uppercase text-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all"
        >
          СВЯЗАТЬСЯ С ЛОРДАМИ
        </motion.button>
        <p className="mt-12 text-neutral-600 text-xs font-mono uppercase tracking-widest">
          &copy; 2026 Saturnian Cockroach Kingdom. All rights reserved. <br />
          Daniil & David Inc.
        </p>
      </footer>

      {/* Global CSS for spin */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
}
