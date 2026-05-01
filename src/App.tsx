/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MapPin, 
  Clock, 
  Wrench, 
  Truck, 
  CheckCircle2, 
  Hammer, 
  Droplet, 
  Zap, 
  Thermometer, 
  Paintbrush, 
  Drill, 
  ChevronRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const REVIEWS_DATA = [
  { name: 'Александр', text: 'Лучший магазин крепежа в районе. Всегда есть в наличии нужные саморезы и болты.', date: '2 недели назад' },
  { name: 'Мария', text: 'Очень вежливый персонал. Помогли выбрать смеситель и посоветовали мастера.', date: '1 месяц назад' },
  { name: 'Сергей П.', text: 'Заходил за бензопилой. Проконсультировали, завели, проверили. Очень удобно.', date: '3 дня назад' },
  { name: 'Елена', text: 'Огромный выбор садово-паркового инвентаря. Купила отличный секатор.', date: '5 дней назад' },
  { name: 'Дмитрий', text: 'Цены как в больших сетях, но ехать никуда не надо. Крепеж на развес — супер.', date: '1 неделя назад' },
  { name: 'Иван', text: 'Мастера вызвал через них для ремонта сантехники. Пришли быстро, сделали качественно.', date: '10 дней назад' },
  { name: 'Ольга', text: 'Всегда свежая краска. Помогли с колеровкой прямо на месте.', date: '2 недели назад' },
  { name: 'Владимир', text: 'Покупал сварочный инвертор. Подсказали какой лучше взять для дачи.', date: '4 дня назад' },
  { name: 'Татьяна', text: 'Хороший хозяйственный отдел. Даже лампочки редкие нашлись.', date: '6 дней назад' },
  { name: 'Николай', text: 'Удобно, что работают до 8 вечера. Успеваю заскочить после работы.', date: '1 день назад' },
  { name: 'Артем', text: 'Брал перфоратор в аренду и оснастку. Все в отличном состоянии.', date: '12 дней назад' },
  { name: 'Юлия', text: 'Для сада здесь есть всё! От грунта до сложных систем полива.', date: '8 дней назад' },
  { name: 'Константин', text: 'Самый адекватный выбор сантехники в Зеленом Логу.', date: '20 дней назад' },
  { name: 'Олег', text: 'Хорошие смесители, стоят уже второй год без нареканий.', date: '3 месяца назад' },
  { name: 'Светлана', text: 'Магазин выручает, когда нужно срочно что-то починить дома.', date: '4 дня назад' },
  { name: 'Михаил', text: 'Большой выбор электроинструмента. Цены радуют.', date: '15 дней назад' },
  { name: 'Василий', text: 'Покупал здесь водонагреватель, доставили в тот же день.', date: '1 неделя назад' },
  { name: 'Анна', text: 'Очень удобно: и товары, и услуги мастеров в одном месте.', date: '18 дней назад' },
  { name: 'Евгений', text: 'Крепежа столько, что глаза разбегаются. Нашли всё по списку.', date: '21 день назад' },
  { name: 'Наталья', text: 'Для ремонта квартиры всё брали здесь. Сэкономили кучу времени на поездках.', date: '1 месяц назад' },
  { name: 'Виктор', text: 'Профессиональный подход. Видно, что люди разбираются в товаре.', date: '5 дней назад' },
  { name: 'Павел', text: 'Электрика в наличии вся — от кабеля до умных розеток.', date: '9 дней назад' },
  { name: 'Ирина', text: 'Краска отличного качества, ложится ровно. Спасибо за совет.', date: '14 дней назад' },
  { name: 'Максим', text: 'Для дачи лучший магазин. Инструмент надежный.', date: '11 дней назад' },
  { name: 'Денис', text: 'Доставка работает четко. Подняли на этаж без проблем.', date: '13 дней назад' },
  { name: 'Андрей', text: 'Сварочник работает идеально. Доволен покупкой.', date: '16 дней назад' },
  { name: 'Роман', text: 'Смесители на любой кошелек. Выбрали бюджетный, но качественный.', date: '19 дней назад' },
  { name: 'Станислав', text: 'Брал здесь сухие смеси. Свежий завоз, всё отлично схватилось.', date: '22 дня назад' },
  { name: 'Кирилл', text: 'Постоянно захожу за мелочевкой для дома. Всегда нахожу что нужно.', date: '25 дней назад' },
  { name: 'Георгий', text: 'Садовые шланги и разбрызгиватели здесь дешевле, чем на рынке.', date: '27 дней назад' },
  { name: 'Леонид', text: 'Качественные отвертки и ключи. Инструмент прослужит долго.', date: '1 месяц назад' },
  { name: 'Валерий', text: 'Водонагреватель работает как часы. Спасибо за монтаж.', date: '1 месяц назад' },
  { name: 'Анатолий', text: 'Хороший выбор метизов. Продавец помог подобрать под размер.', date: '1 месяц назад' },
  { name: 'Борис', text: 'Бензопила окупилась за сезон. Надежный аппарат.', date: '1 месяц назад' },
  { name: 'Ярослав', text: 'Сантехнические трубы и фитинги брал для всего дома. Брак не попался.', date: '2 месяца назад' },
  { name: 'Григорий', text: 'Электропроводка теперь вся новая, спасибо за качественный кабель.', date: '2 месяца назад' },
  { name: 'Федор', text: 'Строительные смеси хорошего качества. Работать одно удовольствие.', date: '2 месяца назад' },
  { name: 'Тимофей', text: 'Большой выбор ручного инструмента. Взял набор ключей.', date: '2 месяца назад' },
  { name: 'Семен', text: 'Мастера здесь рукастые. Починили всё быстро и чисто.', date: '2 месяца назад' },
  { name: 'Петр', text: 'Крепеж для мебели нашел только у вас. Редкие размеры.', date: '3 месяца назад' },
  { name: 'Алексей', text: 'Доставили всё вовремя. Упаковано на совесть.', date: '3 месяца назад' },
  { name: 'Никита', text: 'Самый лучший соседский магазин. Респект за ассортимент.', date: '3 месяца назад' },
  { name: 'Аркадий', text: 'Для сада взял много чего. Цветы теперь радуют.', date: '3 месяца назад' },
  { name: 'Руслан', text: 'Сантехника надежная. Установил сам по вашим советам.', date: '3 месяца назад' },
  { name: 'Вадим', text: 'Покупал ламинат и подложку. Качество на высоте.', date: '4 месяца назад' },
  { name: 'Виталий', text: 'Для гаража весь инструмент брал тут. Работает безотказно.', date: '4 месяца назад' },
  { name: 'Юрий', text: 'Электрика по хорошим ценам. Рекомендую.', date: '4 месяца назад' },
  { name: 'Иннокентий', text: 'Брал краску для забора. Перезимовала отлично.', date: '5 месяцев назад' },
  { name: 'Богдан', text: 'Инструмент для мелкого ремонта дома всегда под рукой.', date: '5 месяцев назад' },
  { name: 'Степан', text: 'Хорошие водонагреватели. Теперь в бане всегда горячая вода.', date: '6 месяцев назад' },
];

const CATEGORIES = [
  { id: 'faucets', name: 'Смесители', icon: Droplet, description: 'Для кухни и ванной' },
  { id: 'power-tools', name: 'Бензо-электроинструмент', icon: Drill, description: 'Профессиональный выбор' },
  { id: 'fasteners', name: 'Крепеж', icon: Hammer, description: 'Все виды метизов' },
  { id: 'garden', name: 'Садовый инвентарь', icon: MapPin, description: 'Для вашего участка' },
  { id: 'paint', name: 'Краска и ЛКМ', icon: Paintbrush, description: 'Любые цвета и основы' },
  { id: 'hand-tools', name: 'Ручной инструмент', icon: Wrench, description: 'Для бытовых задач' },
  { id: 'plumbing', name: 'Сантехника', icon: Droplet, description: 'Трубы, фитинги, инсталляции' },
  { id: 'electrical', name: 'Электрика', icon: Zap, description: 'Кабель, розетки, автоматы' },
  { id: 'mixes', name: 'Строительные смеси', icon: Hammer, description: 'Клей, штукатурка, стяжка' },
  { id: 'heaters', name: 'Водонагреватели', icon: Thermometer, description: 'Накопительные и проточные' },
  { id: 'welding', name: 'Сварочные аппараты', icon: Zap, description: 'Инверторы и защита' },
];

const SERVICES = [
  { 
    title: 'Доставка по городу', 
    desc: 'Привезем ваш заказ прямо к подъезду или на объект в кратчайшие сроки.', 
    icon: Truck 
  },
  { 
    title: 'Услуги мастеров', 
    desc: 'Профессиональный монтаж и мелкосрочный ремонт любой сложности.', 
    icon: Wrench 
  },
  { 
    title: 'Консультации', 
    desc: 'Поможем подобрать нужный товар и рассчитать количество материалов.', 
    icon: ShieldCheck 
  }
];

const CATALOG_DATA: Record<string, { name: string; price: string; sub: string }[]> = {
  'faucets': [
    { name: 'Смеситель для ванны (шаровый)', price: '2 450 ₽', sub: 'шт' },
    { name: 'Смеситель для кухни (гибкий излив)', price: '1 890 ₽', sub: 'шт' },
    { name: 'Душевая лейка (5 режимов)', price: '650 ₽', sub: 'шт' },
    { name: 'Шланг для душа усиленный (1.5м)', price: '420 ₽', sub: 'шт' },
  ],
  'power-tools': [
    { name: 'Перфоратор Makita (аналог, 800Вт)', price: '4 800 ₽', sub: 'шт' },
    { name: 'Шуруповерт 12V (2 АКБ)', price: '2 950 ₽', sub: 'комплект' },
    { name: 'Болгарка УШМ 125мм (900Вт)', price: '3 200 ₽', sub: 'шт' },
    { name: 'Лобзик электрический (650Вт)', price: '2 600 ₽', sub: 'шт' },
  ],
  'fasteners': [
    { name: 'Саморезы по дереву (3.5х35мм, 100шт)', price: '180 ₽', sub: 'упаковка' },
    { name: 'Болт оцинкованный М8х40 (10шт)', price: '150 ₽', sub: 'комплект' },
    { name: 'Анкерный болт с гайкой 10х100', price: '45 ₽', sub: 'шт' },
    { name: 'Дюбель-гвоздь 6х40 (50шт)', price: '120 ₽', sub: 'упаковка' },
    { name: 'Шуруп универсальный 4х40 (50шт)', price: '95 ₽', sub: 'упаковка' },
    { name: 'Гвозди строительные 100мм (1кг)', price: '160 ₽', sub: 'кг' },
  ],
  'garden': [
    { name: 'Лопата штыковая (рельсовая сталь)', price: '550 ₽', sub: 'шт' },
    { name: 'Грабли витые (12 зубьев)', price: '380 ₽', sub: 'шт' },
    { name: 'Шланг поливочный (армированный, 20м)', price: '1 450 ₽', sub: 'бухта' },
    { name: 'Секатор садовый (профи)', price: '720 ₽', sub: 'шт' },
  ],
  'paint': [
    { name: 'Эмаль ПФ-115 (белая, 2.7кг)', price: '860 ₽', sub: 'банка' },
    { name: 'Краска в/д Interio (7кг)', price: '1 250 ₽', sub: 'ведро' },
    { name: 'Грунтовка глубокого проникновения (10л)', price: '580 ₽', sub: 'канистра' },
    { name: 'Растворитель 646 (0.5л)', price: '140 ₽', sub: 'шт' },
  ],
  'hand-tools': [
    { name: 'Молоток слесарный 500г', price: '450 ₽', sub: 'шт' },
    { name: 'Набор отверток (6 шт)', price: '890 ₽', sub: 'набор' },
    { name: 'Рулетка (5м, магнитный зацеп)', price: '320 ₽', sub: 'шт' },
    { name: 'Уровень строительный (60см)', price: '680 ₽', sub: 'шт' },
  ],
  'plumbing': [
    { name: 'Труба ППР d20 (2м)', price: '120 ₽', sub: 'шт' },
    { name: 'Муфта переходная d20', price: '15 ₽', sub: 'шт' },
    { name: 'Кран шаровый для воды 1/2', price: '350 ₽', sub: 'шт' },
    { name: 'Арматура для бачка (универсальная)', price: '550 ₽', sub: 'комплект' },
  ],
  'electrical': [
    { name: 'Кабель ВВГнг 3х2.5 (1м)', price: '95 ₽', sub: 'метр' },
    { name: 'Автомат 16А (однополюсный)', price: '240 ₽', sub: 'шт' },
    { name: 'Розетка двойная с заземлением', price: '280 ₽', sub: 'шт' },
    { name: 'Светодиодная лампа 10Вт (Е27)', price: '95 ₽', sub: 'шт' },
  ],
  'mixes': [
    { name: 'Клей для плитки (Кнауф, 25кг)', price: '540 ₽', sub: 'мешок' },
    { name: 'Штукатурка гипсовая (Ротбанд, 30кг)', price: '780 ₽', sub: 'мешок' },
    { name: 'Шпатлевка финишная (Ветонит, 20кг)', price: '1 150 ₽', sub: 'мешок' },
    { name: 'Цемент М400 (50кг)', price: '480 ₽', sub: 'мешок' },
  ],
  'heaters': [
    { name: 'Водонагреватель 50л (плоский)', price: '11 800 ₽', sub: 'шт' },
    { name: 'ТЭН для водонагревателя (2кВт)', price: '1 450 ₽', sub: 'шт' },
    { name: 'Магниевый анод', price: '350 ₽', sub: 'шт' },
    { name: 'Клапан предохранительный 1/2', price: '420 ₽', sub: 'шт' },
  ],
  'welding': [
    { name: 'Сварочный инвертор (190А)', price: '7 400 ₽', sub: 'шт' },
    { name: 'Маска Хамелеон (автозатемнение)', price: '1 850 ₽', sub: 'шт' },
    { name: 'Электроды МР-3 (3мм, 5кг)', price: '980 ₽', sub: 'пачка' },
    { name: 'Краги сварочные (кожа)', price: '450 ₽', sub: 'пара' },
  ]
};

export default function App() {
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2]);
  const [selectedCategory, setSelectedCategory] = useState<string>('fasteners');

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndices(prev => {
        const slotToChange = Math.floor(Math.random() * prev.length);
        const newIndices = [...prev];
        let nextIdx = Math.floor(Math.random() * REVIEWS_DATA.length);
        while (newIndices.includes(nextIdx)) {
          nextIdx = Math.floor(Math.random() * REVIEWS_DATA.length);
        }
        newIndices[slotToChange] = nextIdx;
        return newIndices;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              <span>Ежедневно: 09:00 — 20:00</span>
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
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm self-start">
                <h3 className="text-2xl font-bold mb-6">Нужна помощь мастера?</h3>
                <p className="text-slate-400 mb-8">Оставьте заявку по телефону, и мы пришлем специалиста для мелкосрочного ремонта или монтажа в удобное время.</p>
                <a 
                  href="tel:89000987933"
                  className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
                >
                  <Phone size={18} />
                  <span>8 900 098 79 33</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Catalog Grid */}
        <section className="py-24 bg-slate-50" id="catalog">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <span className="technical-label">Интерактивный каталог</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-4 tracking-tight">Популярные категории</h2>
              <p className="text-slate-500 mt-2">Нажмите на интересующий раздел, чтобы увидеть примеры товаров и цены</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Sidebar Categories */}
              <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                      selectedCategory === cat.id 
                        ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-red-200' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand-red'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-100'}`}>
                      <cat.icon size={20} />
                    </div>
                    <span className="font-bold text-sm leading-tight">{cat.name}</span>
                  </button>
                ))}
              </div>

              {/* Products Display */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    {CATALOG_DATA[selectedCategory]?.map((prod, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex justify-between items-center group hover:border-brand-red transition-all hover:shadow-md">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm mb-1 leading-tight group-hover:text-brand-red transition-colors">{prod.name}</h4>
                          <p className="text-[10px] technical-label !text-slate-400">Цена за {prod.sub}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-brand-red">{prod.price}</span>
                        </div>
                      </div>
                    ))}
                    <div className="sm:col-span-2 mt-6 p-6 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <p className="font-bold">И это далеко не всё!</p>
                        <p className="text-sm text-slate-400">Более 5000 товаров в магазине. Позвоните, чтобы уточнить наличие.</p>
                      </div>
                      <a href="tel:89000987933" className="bg-brand-red px-6 py-3 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 font-bold text-sm">
                        <Phone size={18} />
                        <span>Спросить наличие</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
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
                  <Star key={i} size={20} className="fill-brand-red text-brand-red" />
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
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <p className="font-bold text-slate-900">{review.name}</p>
                          <p className="text-xs text-slate-400 font-mono">{review.date}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-red border border-slate-200">
                          <Star size={16} className="fill-brand-red" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="px-4 mb-24">
          <div className="max-w-7xl mx-auto bg-brand-red p-8 lg:p-12 rounded-[40px] text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
              <Zap size={300} className="-translate-x-1/2 -translate-y-1/4" />
            </div>
            
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Скидка 5% для постоянных клиентов</h2>
              <p className="text-red-100 text-lg opacity-90">Заходите чаще и получайте персональные предложения на ремонтные материалы.</p>
            </div>
            
            <a 
              href="tel:89000987933"
              className="relative z-10 bg-white text-brand-red px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-3 whitespace-nowrap shadow-xl shadow-red-900/20"
            >
              Узнать подробнее
            </a>
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
                </div>
              </div>
              
              <a 
                href="https://yandex.ru/maps/?text=Магнитогорск+Зеленый+Лог+26"
                target="_blank"
                rel="noreferrer"
                className="w-full lg:w-[450px] aspect-square bg-slate-200 rounded-3xl overflow-hidden relative border-4 border-white shadow-2xl hover:border-brand-red transition-all group"
              >
                 {/* Map Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-100 flex-col px-12 text-center group-hover:bg-slate-50 transition-colors">
                    <MapPin size={48} className="text-brand-red mb-4 animate-bounce" />
                    <p className="font-bold text-slate-900 mb-2 underline decoration-brand-red font-mono">ОТКРЫТЬ В КАРТАХ</p>
                    <p className="text-sm text-slate-500 italic">Магнитогорск, Зеленый Лог 26 (Напротив ЖК "Солнечный")</p>
                 </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
            <Hammer size={24} />
            <span className="font-bold tracking-tight uppercase">Строй ДОМ</span>
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
