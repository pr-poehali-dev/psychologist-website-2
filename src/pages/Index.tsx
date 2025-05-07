
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import OnlinePayment from "@/components/OnlinePayment";
import { useState } from "react";

const Index = () => {
  const services = [
    {
      id: "individual",
      name: "Индивидуальная терапия",
      price: 4000
    },
    {
      id: "family",
      name: "Семейная терапия",
      price: 5500
    },
    {
      id: "couple",
      name: "Терапия для пар",
      price: 5000
    },
    {
      id: "online",
      name: "Онлайн-консультация",
      price: 3500
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9F6]">
      {/* Навигация */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="h-6 w-6 text-[#E5857A]" />
            <span className="text-xl font-semibold text-[#333]">ПсихолоГия</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#E5857A] transition-colors">Обо мне</a>
            <a href="#approach" className="text-gray-600 hover:text-[#E5857A] transition-colors">Подход</a>
            <a href="#services" className="text-gray-600 hover:text-[#E5857A] transition-colors">Услуги</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#E5857A] transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-[#E5857A] transition-colors">Контакты</a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="tel:+79001234567" className="hidden md:flex items-center text-sm text-gray-700">
              <Icon name="Phone" className="h-4 w-4 mr-2 text-[#E5857A]" />
              +7 (900) 123-45-67
            </a>
            <Button className="bg-[#E5857A] hover:bg-[#d67268]">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Главный баннер */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FEF7CD]/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 mb-4 bg-[#FDE1D3] text-[#E5857A] rounded-full text-sm font-medium">Дипломированный психолог</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#333] leading-tight mb-6">
                Помогаю обрести <span className="text-[#E5857A]">гармонию</span> и уверенность в себе
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Современный подход к психологической поддержке, основанный на глубоком уважении к вашему внутреннему миру и опыту
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#E5857A] hover:bg-[#d67268]">
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-[#E5857A] text-[#E5857A]">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#FEF7CD] rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#FDE1D3] rounded-full -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Психолог Анна" 
                  className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#333] mb-6">Обо мне</h2>
            <Separator className="mx-auto w-20 bg-[#E5857A] h-1 mb-6" />
            <p className="text-gray-600">
              Я - Анна Петрова, психолог с 8-летним опытом работы. 
              Моя миссия - помочь вам раскрыть свой потенциал и найти гармонию с собой и окружающим миром.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Психолог Анна"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FDE1D3] p-6 rounded-lg shadow-lg">
                  <div className="text-[#E5857A] font-bold text-4xl">8+</div>
                  <div className="text-gray-700">лет опыта</div>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="text-2xl font-serif text-[#333] mb-6">Моя история</h3>
              <p className="text-gray-600 mb-6">
                Я начала свой путь в психологии из глубокого интереса к тому, как работает человеческий разум и какие факторы влияют 
                на наше поведение, эмоции и отношения. Получив образование в области клинической психологии, я посвятила себя 
                изучению различных терапевтических подходов, чтобы предложить своим клиентам наиболее эффективные методы работы.
              </p>
              <p className="text-gray-600 mb-6">
                За 8 лет практики я помогла более 300 клиентам преодолеть жизненные трудности, начиная от повседневного стресса и 
                тревоги, заканчивая глубокими травматическими переживаниями и серьезными кризисами отношений.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FEF7CD] rounded-full flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" className="h-8 w-8 text-[#E5857A]" />
                  </div>
                  <h4 className="text-lg font-medium text-[#333] mb-2">Образование</h4>
                  <p className="text-gray-600 text-sm">МГУ, факультет психологии</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FEF7CD] rounded-full flex items-center justify-center mb-4">
                    <Icon name="Certificate" className="h-8 w-8 text-[#E5857A]" />
                  </div>
                  <h4 className="text-lg font-medium text-[#333] mb-2">Сертификации</h4>
                  <p className="text-gray-600 text-sm">КПТ, гештальт-терапия</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#FEF7CD] rounded-full flex items-center justify-center mb-4">
                    <Icon name="Users" className="h-8 w-8 text-[#E5857A]" />
                  </div>
                  <h4 className="text-lg font-medium text-[#333] mb-2">Клиенты</h4>
                  <p className="text-gray-600 text-sm">300+ довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Мой подход */}
      <section id="approach" className="py-20 bg-[#FCF9F6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#333] mb-6">Мой подход</h2>
            <Separator className="mx-auto w-20 bg-[#E5857A] h-1 mb-6" />
            <p className="text-gray-600">
              Я работаю на основе интегративного подхода, сочетая различные терапевтические 
              методики для достижения наилучших результатов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-[#FEF7CD]/50 flex items-center justify-center">
                <Icon name="Brain" className="h-16 w-16 text-[#E5857A]" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-[#333] mb-3">Когнитивно-поведенческая терапия</h3>
                <p className="text-gray-600">
                  Работа с мыслями, убеждениями и поведением для облегчения эмоциональных проблем и изменения негативных паттернов.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-[#FDE1D3]/50 flex items-center justify-center">
                <Icon name="HeartHandshake" className="h-16 w-16 text-[#E5857A]" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-[#333] mb-3">Гуманистический подход</h3>
                <p className="text-gray-600">
                  Фокус на вашем потенциале к росту и самоактуализации, создание безопасного пространства для самоисследования.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all overflow-hidden">
              <div className="h-48 bg-[#E5DEFF]/50 flex items-center justify-center">
                <Icon name="FlowerLotus" className="h-16 w-16 text-[#E5857A]" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-[#333] mb-3">Майндфулнесс-практики</h3>
                <p className="text-gray-600">
                  Обучение техникам осознанности для лучшего понимания себя, управления стрессом и эмоциональной регуляции.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif text-[#333] mb-6 text-center">Основные принципы моей работы</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FEF7CD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="h-5 w-5 text-[#E5857A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#333] mb-1">Конфиденциальность</h4>
                    <p className="text-gray-600">Абсолютная приватность всего, что происходит во время наших сессий.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FDE1D3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="FileHeart" className="h-5 w-5 text-[#E5857A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#333] mb-1">Безоценочное принятие</h4>
                    <p className="text-gray-600">Создание пространства, где вы можете быть собой без страха осуждения.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#E5DEFF] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Handshake" className="h-5 w-5 text-[#E5857A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#333] mb-1">Сотрудничество</h4>
                    <p className="text-gray-600">Я работаю вместе с вами как партнер на пути к вашим целям.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#FEF7CD] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="LineChart" className="h-5 w-5 text-[#E5857A]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[#333] mb-1">Измеримые результаты</h4>
                    <p className="text-gray-600">Терапия с фокусом на конкретные изменения и улучшения в вашей жизни.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#333] mb-6">Мои услуги</h2>
            <Separator className="mx-auto w-20 bg-[#E5857A] h-1 mb-6" />
            <p className="text-gray-600">
              Я предлагаю различные форматы психологической поддержки, подобранные 
              под ваши индивидуальные потребности и цели
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#FCF9F6] rounded-lg p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon name="UserCheck" className="h-7 w-7 text-[#E5857A]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#333]">Индивидуальная терапия</h3>
                  <p className="text-[#E5857A] font-medium">4000 ₽ / сессия (50 минут)</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Персональные консультации, направленные на решение конкретных проблем или глубокую проработку 
                психологических сложностей. Подходит для работы с тревогой, депрессией, 
                самооценкой, травмами и другими личными запросами.
              </p>
              <div className="flex gap-3">
                <Button className="bg-[#E5857A] hover:bg-[#d67268]">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Записаться
                </Button>
                <Button variant="outline" className="border-[#E5857A] text-[#E5857A]">
                  <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                  Оплатить
                </Button>
              </div>
            </div>

            <div className="bg-[#FCF9F6] rounded-lg p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon name="Users" className="h-7 w-7 text-[#E5857A]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#333]">Семейная терапия</h3>
                  <p className="text-[#E5857A] font-medium">5500 ₽ / сессия (80 минут)</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Работа с семейной системой для улучшения взаимопонимания, разрешения конфликтов 
                и восстановления здоровых отношений между членами семьи. Помогает при сложностях 
                в детско-родительских отношениях и семейных кризисах.
              </p>
              <div className="flex gap-3">
                <Button className="bg-[#E5857A] hover:bg-[#d67268]">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Записаться
                </Button>
                <Button variant="outline" className="border-[#E5857A] text-[#E5857A]">
                  <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                  Оплатить
                </Button>
              </div>
            </div>

            <div className="bg-[#FCF9F6] rounded-lg p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon name="Heart" className="h-7 w-7 text-[#E5857A]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#333]">Терапия для пар</h3>
                  <p className="text-[#E5857A] font-medium">5000 ₽ / сессия (80 минут)</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Помощь парам в разрешении конфликтов, восстановлении доверия, улучшении коммуникации 
                и углублении эмоциональной связи. Эффективна как для пар в кризисе, так и для тех, 
                кто стремится улучшить качество отношений.
              </p>
              <div className="flex gap-3">
                <Button className="bg-[#E5857A] hover:bg-[#d67268]">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Записаться
                </Button>
                <Button variant="outline" className="border-[#E5857A] text-[#E5857A]">
                  <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                  Оплатить
                </Button>
              </div>
            </div>

            <div className="bg-[#FCF9F6] rounded-lg p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon name="Globe" className="h-7 w-7 text-[#E5857A]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#333]">Онлайн-консультации</h3>
                  <p className="text-[#E5857A] font-medium">3500 ₽ / сессия (50 минут)</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Все виды психологической поддержки в удобном онлайн-формате. Идеально подходит 
                для тех, кто часто путешествует, живет в другом городе или предпочитает заниматься 
                в комфортной домашней обстановке.
              </p>
              <div className="flex gap-3">
                <Button className="bg-[#E5857A] hover:bg-[#d67268]">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Записаться
                </Button>
                <Button variant="outline" className="border-[#E5857A] text-[#E5857A]">
                  <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                  Оплатить
                </Button>
              </div>
            </div>
          </div>

          {/* Компонент онлайн-оплаты */}
          <OnlinePayment services={services} />
          
          {/* С чем я работаю */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-serif text-[#333] mb-4">С чем я работаю</h3>
              <p className="text-gray-600">
                Основные сферы, в которых я помогаю своим клиентам найти решения и достичь изменений
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "Brain",
                  title: "Тревожные расстройства",
                  description: "Помощь при тревоге, панических атаках, фобиях и навязчивых состояниях"
                },
                {
                  icon: "CloudRain",
                  title: "Депрессия",
                  description: "Работа с подавленным настроением, апатией и потерей интереса к жизни"
                },
                {
                  icon: "Heart",
                  title: "Отношения",
                  description: "Решение конфликтов, улучшение коммуникации и эмоциональной близости"
                },
                {
                  icon: "Zap",
                  title: "Стресс и выгорание",
                  description: "Стратегии управления стрессом и восстановления энергии"
                },
                {
                  icon: "ShieldCheck",
                  title: "Самооценка",
                  description: "Работа с неуверенностью, самокритикой и внутренним критиком"
                },
                {
                  icon: "Milestone",
                  title: "Жизненные кризисы",
                  description: "Поддержка при переменах, потерях и поисках нового пути"
                }
              ].map((item, index) => (
                <Card key={index} className="border border-[#FDE1D3] bg-white hover:border-[#E5857A] transition-colors">
                  <CardContent className="p-5 flex gap-4">
                    <div className="w-10 h-10 bg-[#FEF7CD] rounded-full flex shrink-0 items-center justify-center">
                      <Icon name={item.icon} className="h-5 w-5 text-[#E5857A]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#333] mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="py-20 bg-[#FCF9F6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#333] mb-6">Отзывы клиентов</h2>
            <Separator className="mx-auto w-20 bg-[#E5857A] h-1 mb-6" />
            <p className="text-gray-600">
              Истории и впечатления тех, кто уже прошел путь психологической работы вместе со мной
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Екатерина М.",
                image: "https://i.pravatar.cc/100?img=5",
                text: "Работа с Анной буквально изменила мою жизнь. После серии сессий я стала гораздо лучше понимать себя, свои потребности и границы. Тревога, которая преследовала меня годами, значительно уменьшилась, и я наконец могу наслаждаться настоящим моментом."
              },
              {
                name: "Сергей Л.",
                image: "https://i.pravatar.cc/100?img=12",
                text: "Мы обратились к Анне с женой, когда наш брак был на грани развода. Благодаря ее профессиональному подходу, мы смогли восстановить доверие и научиться по-новому слышать друг друга. Сейчас наши отношения крепче, чем когда-либо."
              },
              {
                name: "Марина В.",
                image: "https://i.pravatar.cc/100?img=9",
                text: "Анна помогла мне пережить один из самых сложных периодов в моей жизни – потерю близкого человека. Ее поддержка, глубокое понимание и практические инструменты для работы с горем были неоценимы. Я бесконечно благодарна за помощь."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-md p-6 relative">
                <div className="absolute top-0 right-0 w-10 h-10 bg-[#FEF7CD] flex items-center justify-center -mt-3 -mr-3 rounded-full">
                  <Icon name="Quote" className="h-5 w-5 text-[#E5857A]" />
                </div>
                <CardContent className="p-0">
                  <p className="text-gray-600 italic mb-6">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-[#333]">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Icon key={star} name="Star" className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Как проходят консультации */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#333] mb-6">Как проходят консультации</h2>
            <Separator className="mx-auto w-20 bg-[#E5857A] h-1 mb-6" />
            <p className="text-gray-600">
              Ознакомьтесь с процессом нашей совместной работы от первой встречи до достижения результатов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "MessageSquare",
                title: "Первая встреча",
                description: "Знакомство, определение запроса и целей работы, создание доверительного пространства"
              },
              {
                step: "02",
                icon: "Clipboard",
                title: "Диагностика",
                description: "Глубокое изучение ситуации, выявление причин проблемы и ресурсов для ее решения"
              },
              {
                step: "03",
                icon: "Target",
                title: "Работа с запросом",
                description: "Применение психологических техник и методов, направленных на достижение ваших целей"
              },
              {
                step: "04",
                icon: "CheckCircle",
                title: "Результат",
                description: "Закрепление полученных изменений, разработка стратегии поддержания результатов"
              }
            ].map((step, index) => (
              <div key={index} className="bg-[#FCF9F6] rounded-lg p-6 text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-2 bg-[#FDE1D3] z-10">
                    <div className="absolute top-1/2 right-1 w-3 h-3 border-t-2 border-r-2 border-[#E5857A] -translate-y-1/2 rotate-45"></div>
                  </div>
                )}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 relative shadow-md">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E5857A] rounded-full text-white flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                  <Icon name={step.icon} className="h-8 w-8 text-[#E5857A]" />
                </div>
                <h3 className="text-xl font-medium text-[#333] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#E5857A] hover:bg-[#d67268]">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section id="contact" className="py-20 bg-[#FCF9F6]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#333] mb-6">Свяжитесь со мной</h2>
            <Separator className="mx-auto w-20 bg-[#E5857A] h-1 mb-6" />
            <p className="text-gray-600">
              Готовы начать путь к переменам? Заполните форму, и я свяжусь с вами в ближайшее время
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-[#E5857A] to-[#d67268]">
                  <h3 className="text-2xl font-medium text-white mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">Адрес</h4>
                        <p className="text-white/80">г. Москва, ул. Тверская, д. 15, офис 203</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">Телефон</h4>
                        <p className="text-white/80">+7 (900) 123-45-67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Icon name="Mail" className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-white/80">anna@психология.рф</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-8 bg-white/20" />
                  
                  <div>
                    <h4 className="text-white font-medium mb-3">Часы работы</h4>
                    <ul className="space-y-2 text-white/80">
                      <li className="flex justify-between">
                        <span>Понедельник - Пятница:</span>
                        <span>10:00 - 19:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Суббота:</span>
                        <span>10:00 - 15:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Воскресенье:</span>
                        <span>Выходной</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-white font-medium mb-3">Социальные сети</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Icon name="Instagram" className="h-5 w-5 text-white" />
                      </a>
                      <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Icon name="Telegram" className="h-5 w-5 text-white" />
                      </a>
                      <a href="#" className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Icon name="Youtube" className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-medium text-[#333] mb-6">Запись на консультацию</h3>
                  
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5857A]" 
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5857A]" 
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5857A]" 
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Услуга</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5857A]">
                        <option value="">Выберите услугу</option>
                        <option value="individual">Индивидуальная терапия</option>
                        <option value="family">Семейная терапия</option>
                        <option value="couple">Терапия для пар</option>
                        <option value="online">Онлайн-консультация</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                      <textarea 
                        rows={4} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5857A]"
                        placeholder="Опишите кратко вашу ситуацию или вопрос..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="h-4 w-4 text-[#E5857A] focus:ring-[#E5857A] border-gray-300 rounded" 
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                        Я согласен на обработку <a href="#" className="text-[#E5857A] hover:underline">персональных данных</a>
                      </label>
                    </div>
                    
                    <Button className="w-full bg-[#E5857A] hover:bg-[#d67268]">
                      <Icon name="Send" className="h-4 w-4 mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#383341] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="h-6 w-6 text-[#FDE1D3]" />
                <span className="text-xl font-medium">ПсихолоГия</span>
              </div>
              <p className="text-gray-400 mb-4">
                Психологическая поддержка для всех, кто стремится к изменениям, 
                самопознанию и улучшению качества жизни.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#FDE1D3] transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FDE1D3] transition-colors">
                  <Icon name="Telegram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FDE1D3] transition-colors">
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FDE1D3] transition-colors">
                  <Icon name="Vk" className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Индивидуальная терапия</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Семейная терапия</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Терапия для пар</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Онлайн-консультации</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Разделы сайта</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Обо мне</a></li>
                <li><a href="#approach" className="text-gray-400 hover:text-white transition-colors">Подход</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-[#FDE1D3] shrink-0 mt-0.5" />
                  <span className="text-gray-400">г. Москва, ул. Тверская, д. 15, офис 203</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-[#FDE1D3]" />
                  <span className="text-gray-400">+7 (900) 123-45-67</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-[#FDE1D3]" />
                  <span className="text-gray-400">anna@психология.рф</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-gray-700/50" />
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 ПсихолоГия. Все права защищены.</p>
            <div className="mt-4 md:mt-0 flex gap-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
