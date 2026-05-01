import { 
  Phone, 
  MapPin, 
  Clock, 
  Wrench, 
  Truck, 
  Hammer, 
  CheckCircle2,
  ChevronRight,
  Star,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { REVIEWS_DATA, CATEGORIES, SERVICES, CATALOG_DATA } from './data';

export default function App() {

  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2]);
  const [nextSlot, setNextSlot] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const selectedCategory = CATEGORIES.find(c => c.id === selectedCategoryId);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndices(prev => {
        const newIndices = [...prev];
        const availableIdx = REVIEWS_DATA
          .map((_, i) => i)
          .filter(i => !prev.includes(i));
          
        if (availableIdx.length > 0) {
          const nextIdx = availableIdx[Math.floor(Math.random() * availableIdx.length)];
          newIndices[nextSlot] = nextIdx;
          setNextSlot(s => (s + 1) % 3);
        }
        return newIndices;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlot]);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass-morphism border-b bg-white/70">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-red text-white p-2 rounded-lg">
              <Hammer size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-950 uppercase">
              Строй <span className="text-brand-red">ДОМ</span>
            </span>
          </div>
          
            <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock size={16} className="text-brand-red" />
              <span>Пн—Сб: 10:00 — 19:00 • Вс: 10:00 — 18:00</span>
            </div>
            <a 
              href="https://yandex.ru/maps/?text=Магнитогорск+Зеленый+Лог+26" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-red transition-colors"
            >
              <MapPin size={16} className="text-brand-red" />
              <span>Зеленый Лог, 26</span>
            </a>
            <a href="tel:89000987933" className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-brand-red transition-colors">
              <Phone size={16} className="text-brand-red" />
              <span>8 (900) 098-79-33</span>
            </a>
          </div>

          <a href="tel:89000987933" className="md:hidden p-2 text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50">
            <Phone size={20} className="text-brand-red" />
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-12 h-full border-x border-slate-900">
              {Array.from({ length: 11 }).map((_, i) => (
                <div key={i} className="border-r border-slate-900" />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-12 bg-brand-red" />
                <span className="technical-label">Магнитогорск • Более 6 лет с вами</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                Магазин строительных товаров <span className="text-brand-red italic">у дома</span>.
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Закрываем повседневные потребности жителей нашего района быстро, удобно и без лишних сложностей. 
                Всё для ремонта и быта в одном месте.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:89000987933"
                  className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-red-200 transition-all flex items-center gap-2 group text-lg"
                >
                  <Phone size={20} />
                  <span>Позвонить</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://yandex.ru/maps/?text=Магнитогорск+Зеленый+Лог+26"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-slate-200 px-8 py-4 rounded-xl flex items-center gap-3 hover:border-brand-red transition-colors group"
                >
                  <MapPin className="text-brand-red" />
                  <div>
                    <p className="text-xs technical-label !text-slate-400 group-hover:text-brand-red transition-colors">Наш адрес</p>
                    <p className="font-semibold text-slate-900">Зеленый Лог, 26</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Floating Accents */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden lg:block opacity-10 pointer-events-none">
            <Hammer size={500} strokeWidth={1} />
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: '6+ лет работы', desc: 'Проверенный временем сервис' },
                { icon: CheckCircle2, title: 'Все в наличии', desc: 'Постоянно расширяем ассортимент' },
                { icon: Star, title: 'Ближе к вам', desc: 'Без поездок в гипермаркеты' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-red shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
             <Truck size={400} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="technical-label !text-slate-400">Наши услуги</span>
                <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8 tracking-tight">
                  Помогаем решать задачи <span className="text-brand-red">под ключ</span>.
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-12">
                  От мелких покупок до масштабного ремонта – мы рядом. Доставим материалы, 
                  посоветуем мастера или выполним монтаж сами.
                </p>
                
                <div className="grid gap-6">
                  {SERVICES.map((s, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 text-brand-red">
                        <s.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{s.title}</h4>
                        <p className="text-slate-400">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm self-start">
                <h3 className="text-xl font-bold mb-4">Нужна помощь мастера?</h3>
                <p className="text-slate-400 mb-6 text-sm">Оставьте заявку по телефону, и мы пришлем специалиста для мелкосрочного ремонта или монтажа в удобное время.</p>
                <a 
                  href="tel:89000987933"
                  className="w-full bg-white text-slate-950 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white transition-all shadow-lg"
                >
                  <Phone size={16} />
                  <span>8 900 098 79 33</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Catalog Section */}
        <section className="py-24 bg-white" id="catalog">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatePresence mode="wait">
              {!selectedCategoryId ? (
                <motion.div
                  key="categories-grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-16">
                    <span className="technical-label">Ассортимент</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 tracking-tight">Популярные категории</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat, i) => (
                      <motion.button
                        key={cat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setSelectedCategoryId(cat.id)}
                        className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-red transition-all text-left shadow-sm hover:shadow-xl hover:shadow-red-50 flex flex-col h-full"
                      >
                        <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all mb-5">
                          <cat.icon size={24} />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-red transition-colors mb-2">{cat.name}</h3>
                          <p className="text-slate-400 text-xs leading-relaxed">{cat.description}</p>
                        </div>
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight size={20} className="text-brand-red" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="catalog-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => setSelectedCategoryId(null)}
                        className="p-3 rounded-2xl bg-slate-50 text-slate-400 hover:text-brand-red hover:bg-red-50 transition-all"
                      >
                        <Hammer className="rotate-[-90deg]" size={24} />
                      </button>
                      <div>
                        <div className="flex items-center gap-2 text-brand-red mb-1">
                          {selectedCategory && <selectedCategory.icon size={18} />}
                          <span className="technical-label uppercase text-[10px] tracking-widest">{selectedCategory?.description}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">{selectedCategory?.name}</h2>
                      </div>
                    </div>

                    {/* Mini switcher for other categories */}
                    <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                      {CATEGORIES.filter(c => c.id !== selectedCategoryId).map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategoryId(cat.id)}
                          className="flex-shrink-0 px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-500 hover:border-brand-red hover:text-brand-red transition-all whitespace-nowrap bg-white shadow-sm"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Diagonal Staggered Product Grid */}
                  <div className="relative py-12">
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-slate-100" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                      {selectedCategoryId && CATALOG_DATA[selectedCategoryId]?.map((prod, i) => (
                        <motion.div
                          key={prod.name + i}
                          initial={{ opacity: 0, x: -30, y: 20 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-50 transition-all group relative overflow-hidden
                            ${i % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-12'}
                            ${i % 3 === 0 ? 'xl:translate-y-0' : i % 3 === 1 ? 'xl:translate-y-16' : 'xl:translate-y-32'}
                          `}
                        >
                          <div className="absolute top-0 left-0 w-1 h-full bg-brand-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                          <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] technical-label !text-slate-400 group-hover:text-brand-red transition-colors">Позиция #{i + 1}</span>
                            <div className="p-2 rounded-lg bg-slate-50 text-slate-300 group-hover:text-brand-red/20 transition-colors">
                              <CheckCircle2 size={16} />
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-brand-red transition-colors min-h-[3rem]">
                            {prod.name}
                          </h4>
                          
                          <div className="flex items-end justify-between border-t border-slate-50 pt-6">
                            <div>
                              <p className="text-xs text-slate-400 mb-1">за {prod.sub}</p>
                              <p className="text-2xl font-bold text-slate-900 tracking-tight group-hover:scale-105 transition-transform origin-left">{prod.price}</p>
                            </div>
                            <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-brand-red group-hover:text-white transition-all">
                              <Phone size={20} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-32 max-w-4xl mx-auto p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden"
                  >
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                      <Hammer size={300} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4">Это малая часть ассортимента!</h3>
                        <p className="text-slate-400 text-lg">
                          В нашем магазине на Зеленом Логу представлено более 5000 позиций. 
                          Крепеж на развес, сантехника, инструмент и многое другое – заходите, подберем всё необходимое.
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <a 
                          href="tel:89000987933" 
                          className="bg-brand-red px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-red-500/20 transition-all flex items-center justify-center gap-3 font-bold text-xl"
                        >
                          <Phone size={24} />
                          <span>Уточнить наличие</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <span className="technical-label">Отзывы</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-4 tracking-tight">Что говорят соседи</h2>
                <p className="text-slate-500 mt-4 leading-relaxed">Мы работаем в этом районе уже 6 лет и ценим каждого клиента. Вот несколько слов от тех, кто постоянно заходит к нам.</p>
              </div>
              <div className="flex gap-1 h-fit">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                      filter: ["drop-shadow(0 0 0px #ef4444)", "drop-shadow(0 0 8px #ef4444)", "drop-shadow(0 0 0px #ef4444)"]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                  >
                    <Star key={i} size={20} className="fill-brand-red text-brand-red" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 min-h-[300px]">
              <AnimatePresence mode="popLayout">
                {visibleIndices.map((idx, slot) => {
                  const review = REVIEWS_DATA[idx];
                  return (
                    <motion.div 
                      key={review.name + review.date + slot} // Unique key for motion per slot
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col h-full"
                    >
                      <p className="text-slate-600 mb-6 italic flex-grow">"{review.text}"</p>
                      <div className="flex items-center justify-between mt-auto gap-4">
                        <div className="flex flex-col">
                          <div className="flex gap-0.5 mb-2">
                            {Array.from({ length: 5 }).map((_, starI) => (
                              <Star 
                                key={starI} 
                                size={12} 
                                className={starI < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"} 
                              />
                            ))}
                          </div>
                          <p className="font-bold text-slate-900 leading-none">{review.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-1 opacity-60 uppercase tracking-wider">{review.date}</p>
                        </div>
                        <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-inner ${
                          idx % 4 === 0 ? 'bg-blue-500' : 
                          idx % 4 === 1 ? 'bg-emerald-500' : 
                          idx % 4 === 2 ? 'bg-amber-500' : 'bg-indigo-500'
                        }`}>
                          {review.name.charAt(0)}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>



        {/* Local Section */}
        <section className="py-24 bg-slate-50" id="contacts">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-slate-50 rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-slate-200">
              <div className="flex-1">
                <div className="bg-brand-red/10 text-brand-red px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-6">
                  Рядом с вами
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Ждем вас на Зеленом Логу!</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Магазин удобно расположен в шаговой доступности для жителей микрорайона. Больше не нужно тратить время на поездки в удаленные гипермаркеты за каждой мелочью.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="technical-label mb-2">Адрес</p>
                    <a 
                      href="https://yandex.ru/maps/?text=Магнитогорск+Зеленый+Лог+26"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 font-bold text-lg underline decoration-brand-red decoration-4 underline-offset-4 hover:text-brand-red transition-colors"
                    >
                      г. Магнитогорск, ул. Зеленый Лог, 26
                    </a>
                  </div>
                  <div>
                    <p className="technical-label mb-2">Телефон</p>
                    <a href="tel:89000987933" className="text-slate-900 font-bold text-lg hover:text-brand-red transition-colors">
                      8 (900) 098-79-33
                    </a>
                  </div>
                  <div>
                    <p className="technical-label mb-2">Режим работы</p>
                    <div className="space-y-2 mt-1">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2 max-w-[240px]">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Пн — Сб</span>
                        <span className="font-bold text-slate-900">10:00 — 19:00</span>
                      </div>
                      <div className="flex items-center justify-between max-w-[240px]">
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Воскресенье</span>
                        <span className="font-bold text-slate-900">10:00 — 18:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="technical-label mb-2">Социальные сети</p>
                    <a 
                      href="https://vk.com/stroy_dom_mgn" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-[#0077FF] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#0066DD] transition-all group shadow-md shadow-blue-100"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
                        <path d="M0 4.8C0 2.14903 2.14903 0 4.8 0H19.2C21.851 0 24 2.14903 24 4.8V19.2C24 21.851 21.851 24 19.2 24H4.8C2.14903 24 0 21.851 0 19.2V4.8Z" fill="#0077FF"/>
                        <path d="M12.639 17.514C7.886 17.514 5.176 14.258 5.062 8.847H7.452C7.531 12.81 9.278 14.488 10.662 14.832V8.847H12.925V12.261C14.31 12.112 15.772 10.575 16.264 8.847H18.528C18.154 11.005 16.558 12.542 15.415 13.202C16.558 13.734 18.39 15.054 19.168 17.514H16.666C16.065 15.642 14.577 14.2 12.925 14.032V17.514H12.639Z" fill="white"/>
                      </svg>
                      <span>Наше сообщество в ВК</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[500px] aspect-square rounded-[2.5rem] overflow-hidden relative border-8 border-white shadow-2xl transition-all">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?panorama%5Bpoint%5D=58.980651%2C53.353101&panorama%5Bdirection%5D=0.000000%2C10.000000&panorama%5Bspan%5D=100.000000%2C50.000000&z=17" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  className="w-full h-full"
                ></iframe>
                {/* Overlay link to open in full maps */}
                <a 
                  href="https://yandex.ru/maps/org/stroy_dvor/173516593414/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-[2rem] shadow-xl flex items-center justify-between group hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[9px] technical-label opacity-40 uppercase tracking-widest">Зелёный Лог 26 (Магнитогорск)</p>
                      <p className="font-bold text-sm">Проложить маршрут</p>
                    </div>
                  </div>
                  <div className="text-brand-red group-hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 opacity-40">
              <Hammer size={20} />
              <span className="font-bold tracking-tight uppercase text-sm">Строй ДОМ</span>
            </div>
            <div className="flex items-center gap-4">
              {/* VK icon removed */}
            </div>
          </div>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            &copy; {new Date().getFullYear()} Строй ДОМ. Работаем для вас более 6 лет. <br />
            Магазин строительных и хозяйственных товаров у дома.
          </p>
        </div>
      </footer>
    </div>
  );
}
