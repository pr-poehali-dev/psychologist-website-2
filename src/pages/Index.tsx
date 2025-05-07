
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Навигация */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Brain" className="h-6 w-6 text-[#6A49D8]" />
            <span className="text-xl font-semibold text-[#333]">МиндПро</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#6A49D8] transition-colors">Обо мне</a>
            <a href="#services" className="text-gray-600 hover:text-[#6A49D8] transition-colors">Услуги</a>
            <a href="#methods" className="text-gray-600 hover:text-[#6A49D8] transition-colors">Методы</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#6A49D8] transition-colors">Отзывы</a>
            <a href="#faq" className="text-gray-600 hover:text-[#6A49D8] transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-[#6A49D8] transition-colors">Контакты</a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="tel:+79001234567" className="hidden md:flex items-center text-sm text-gray-700">
              <Icon name="Phone" className="h-4 w-4 mr-2 text-[#6A49D8]" />
              +7 (900) 123-45-67
            </a>
            <Button className="bg-[#6A49D8] hover:bg-[#5338C0]">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Главный баннер */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-[#f0eeff]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] leading-tight mb-6">
                Найдите свой <span className="text-[#6A49D8]">внутренний баланс</span> и гармонию
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Профессиональная психологическая поддержка для тех, кто хочет 
                эффективно решать личные проблемы и развиваться как личность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#6A49D8] hover:bg-[#5338C0]">
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-[#6A49D8] text-[#6A49D8]">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Бесплатная консультация
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://i.pravatar.cc/100?img=${i+10}`} 
                        alt="Клиент" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-[#333]">500+ довольных клиентов</div>
                  <div className="text-gray-500">за 10 лет практики</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#e8e2ff] rounded-full -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Психолог" 
                  className="w-80 h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-lg p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#f0eeff] rounded-full flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-[#6A49D8]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#333]">Сертифицированный психолог</p>
                    <p className="text-xs text-gray-500">10+ лет опыта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "ShieldCheck",
                title: "Конфиденциальность",
                description: "Гарантирую полную конфиденциальность всех обсуждений и персональных данных"
              },
              {
                icon: "Clipboard",
                title: "Научный подход",
                description: "Использую только проверенные методики когнитивно-поведенческой терапии"
              },
              {
                icon: "Sparkles",
                title: "Индивидуальный подход",
                description: "Каждая программа терапии разрабатывается индивидуально под ваши потребности"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#f0eeff] rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="h-6 w-6 text-[#6A49D8]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#333]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="py-16 bg-[#f8f9fc]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Психолог за работой"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 right-6 bg-white shadow-lg rounded-lg p-3 flex items-center gap-2">
                  <div className="text-[#6A49D8] font-bold text-xl">10+</div>
                  <div className="text-sm">
                    <p className="text-gray-800 font-medium">лет опыта</p>
                    <p className="text-gray-500 text-xs">практики</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">Мария Иванова</h2>
              <h3 className="text-xl text-[#6A49D8] font-medium mb-4">Клинический психолог, психотерапевт</h3>
              
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="about">Обо мне</TabsTrigger>
                  <TabsTrigger value="education">Образование</TabsTrigger>
                  <TabsTrigger value="approach">Подход</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="text-gray-600 space-y-4">
                  <p>
                    Я практикующий психолог с более чем 10-летним опытом работы в сфере психологического 
                    консультирования и психотерапии. За это время я помогла сотням людей 
                    преодолеть личностные кризисы, справиться с тревожными состояниями и депрессией, 
                    улучшить отношения и раскрыть свой потенциал.
                  </p>
                  <p>
                    Моя цель — помочь вам найти внутренние ресурсы и инструменты для решения 
                    жизненных задач, повышения качества жизни и обретения душевного равновесия.
                  </p>
                </TabsContent>
                <TabsContent value="education" className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-[#f0eeff] rounded-full flex shrink-0 items-center justify-center">
                      <Icon name="GraduationCap" className="h-5 w-5 text-[#6A49D8]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#333]">МГУ им. М.В. Ломоносова</p>
                      <p className="text-gray-600 text-sm">Факультет психологии, специализация "Клиническая психология" (2008-2013)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-[#f0eeff] rounded-full flex shrink-0 items-center justify-center">
                      <Icon name="Award" className="h-5 w-5 text-[#6A49D8]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#333]">Институт когнитивно-поведенческой терапии</p>
                      <p className="text-gray-600 text-sm">Сертификат специалиста по КПТ (2014-2015)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-[#f0eeff] rounded-full flex shrink-0 items-center justify-center">
                      <Icon name="Certificate" className="h-5 w-5 text-[#6A49D8]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#333]">Европейская ассоциация психотерапии</p>
                      <p className="text-gray-600 text-sm">Сертификат психотерапевта (2016)</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="approach" className="text-gray-600 space-y-4">
                  <p>
                    В своей работе я применяю интегративный подход, комбинируя методики 
                    когнитивно-поведенческой терапии, схема-терапии и гуманистической психологии. 
                    Это позволяет гибко адаптировать стратегию терапии под индивидуальные 
                    потребности каждого клиента.
                  </p>
                  <p>
                    Я верю, что каждый человек обладает внутренними ресурсами для преодоления трудностей, 
                    и моя задача как психолога — помочь вам обнаружить и активировать эти ресурсы.
                  </p>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8">
                <Button className="bg-[#6A49D8] hover:bg-[#5338C0]">
                  <Icon name="Calendar" className="h-4 w-4 mr-2" />
                  Записаться на консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Мои услуги</h2>
            <p className="text-gray-600">
              Я предлагаю широкий спектр психологических услуг, направленных на решение 
              различных психологических проблем и улучшение качества жизни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "UserCheck",
                title: "Индивидуальная терапия",
                price: "4000",
                description: "Глубокая проработка личных проблем, таких как тревога, депрессия, фобии, самооценка"
              },
              {
                icon: "Users",
                title: "Семейная терапия",
                price: "5500",
                description: "Решение конфликтов, улучшение коммуникации и восстановление взаимопонимания между членами семьи"
              },
              {
                icon: "Heart",
                title: "Терапия для пар",
                price: "5000",
                description: "Работа над улучшением отношений, решением конфликтов и укреплением эмоциональной связи"
              },
              {
                icon: "Building",
                title: "Корпоративная психология",
                price: "от 15000",
                description: "Тренинги и консультации для бизнеса: командообразование, профилактика выгорания, развитие софт-скиллов"
              },
              {
                icon: "Globe",
                title: "Онлайн-консультации",
                price: "3500",
                description: "Психологическая поддержка в удобном формате видеосвязи из любой точки мира"
              },
              {
                icon: "UserPlus",
                title: "Групповая терапия",
                price: "2500",
                description: "Работа в группе до 8 человек для решения схожих психологических проблем, обмен опытом"
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#f0eeff] rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-[#6A49D8]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#333]">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#6A49D8] font-bold">{service.price} ₽/сессия</span>
                    <Button variant="outline" className="text-[#6A49D8] border-[#6A49D8]">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#6A49D8] hover:bg-[#5338C0]">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Методы работы */}
      <section id="methods" className="py-16 bg-[#f8f9fc]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">С чем я работаю</h2>
            <p className="text-gray-600">
              Мой подход основан на научно доказанных методиках, которые помогают эффективно 
              решать различные психологические проблемы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Brain",
                title: "Тревожные расстройства",
                description: "Панические атаки, генерализованное тревожное расстройство, социальная тревожность, ОКР"
              },
              {
                icon: "CloudRain",
                title: "Депрессия",
                description: "Подавленное настроение, апатия, потеря интереса к жизни, эмоциональное выгорание"
              },
              {
                icon: "Heart",
                title: "Отношения",
                description: "Конфликты, недопонимание, созависимость, проблемы коммуникации, ревность"
              },
              {
                icon: "Zap",
                title: "Стресс и ПТСР",
                description: "Хронический стресс, психологические травмы, посттравматическое стрессовое расстройство"
              },
              {
                icon: "EyeOff",
                title: "Самооценка",
                description: "Неуверенность в себе, саморазрушающее поведение, самокритика, перфекционизм"
              },
              {
                icon: "Milestone",
                title: "Жизненные кризисы",
                description: "Возрастные кризисы, смена профессии, потеря близких, поиск смысла жизни"
              },
              {
                icon: "HandMetal",
                title: "Фобии",
                description: "Различные страхи и фобии, мешающие полноценной жизни"
              },
              {
                icon: "Activity",
                title: "Психосоматика",
                description: "Психологические причины физических симптомов и хронических заболеваний"
              },
              {
                icon: "Award",
                title: "Личностный рост",
                description: "Раскрытие потенциала, поиск призвания, постановка и достижение целей"
              }
            ].map((method, index) => (
              <Card key={index} className="border border-[#e1dfec] bg-white hover:border-[#6A49D8] transition-colors">
                <CardContent className="p-5 flex gap-4">
                  <div className="w-10 h-10 bg-[#f0eeff] rounded-full flex shrink-0 items-center justify-center">
                    <Icon name={method.icon} className="h-5 w-5 text-[#6A49D8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] mb-1">{method.title}</h3>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Как проходят консультации</h2>
            <p className="text-gray-600">
              Психотерапия — это структурированный процесс, направленный на достижение ваших целей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: "ClipboardList",
                title: "Первичная консультация",
                description: "Знакомство, выявление запроса, первичная диагностика и постановка целей работы"
              },
              {
                step: "02",
                icon: "Search",
                title: "Диагностика",
                description: "Глубокий анализ проблемы, выявление причин и факторов, поддерживающих проблемное состояние"
              },
              {
                step: "03",
                icon: "Target",
                title: "Терапия",
                description: "Применение техник и методов, направленных на решение проблемы и достижение целей"
              },
              {
                step: "04",
                icon: "CheckCircle",
                title: "Закрепление результатов",
                description: "Проверка достигнутых результатов и разработка плана дальнейшего развития"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#f0eeff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon} className="h-7 w-7 text-[#6A49D8]" />
                </div>
                <div className="text-sm text-[#6A49D8] font-semibold mb-2">ШАГ {step.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#333]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block relative h-10 mt-4">
                    <div className="absolute top-1/2 left-full w-full h-0.5 bg-[#e1dfec] -translate-x-8 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-full w-4 h-4 border-t-2 border-r-2 border-[#e1dfec] -translate-x-6 -translate-y-1/2 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#6A49D8] hover:bg-[#5338C0]">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="py-16 bg-[#f8f9fc]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600">
              Мои клиенты делятся своими впечатлениями и результатами нашей совместной работы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна М.",
                image: "https://i.pravatar.cc/100?img=5",
                position: "HR-менеджер, 34 года",
                text: "Обратилась к Марии с проблемой выгорания и постоянной тревоги. За 10 сессий мы смогли найти причины и разработать стратегию выхода из этого состояния. Сейчас я научилась управлять своим стрессом и чувствую себя намного лучше."
              },
              {
                name: "Дмитрий К.",
                image: "https://i.pravatar.cc/100?img=12",
                position: "Предприниматель, 41 год",
                text: "Семейная терапия с Марией буквально спасла наш брак. Мы с женой научились слышать друг друга и решать конфликты без взаимных обвинений. Появились новые точки соприкосновения и чувство близости, которое мы почти потеряли."
              },
              {
                name: "Елена В.",
                image: "https://i.pravatar.cc/100?img=9",
                position: "Дизайнер, 28 лет",
                text: "Работа с Марией помогла мне преодолеть социальную тревожность, которая мешала и в карьере, и в личной жизни. Теперь я уверенно выступаю на презентациях и больше не испытываю панику перед новыми знакомствами. Спасибо!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#6A49D8]"
                      />
                      <div>
                        <h4 className="font-semibold text-[#333]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="text-[#6A49D8]">
                      <Icon name="Quote" className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                  <div className="mt-4 flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Icon key={star} name="Star" className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600">
              Ответы на наиболее распространенные вопросы о психотерапии
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                question: "Сколько длится одна консультация?",
                answer: "Стандартная продолжительность одной консультации составляет 50 минут. Первичная консультация может длиться до 90 минут, так как включает сбор подробной информации и постановку целей работы."
              },
              {
                question: "Как часто нужно посещать психолога?",
                answer: "Для большинства случаев оптимальной является еженедельная частота встреч, особенно на начальных этапах. По мере достижения результатов, частоту можно снизить до одного раза в две недели, а затем до поддерживающих встреч раз в месяц."
              },
              {
                question: "Сколько всего нужно сессий?",
                answer: "Количество необходимых сессий индивидуально и зависит от сложности запроса, глубины проблемы и интенсивности работы. Для решения конкретных проблем обычно требуется от 8 до 15 сессий, более глубокая терапия может занять от нескольких месяцев до года."
              },
              {
                question: "Чем психолог отличается от психиатра?",
                answer: "Психолог работает с психологическими проблемами, используя методы разговорной терапии и не прописывает медикаменты. Психиатр — это врач, который диагностирует психические расстройства и может назначать лекарственную терапию. При необходимости я могу рекомендовать обращение к психиатру."
              },
              {
                question: "Можно ли проходить психотерапию онлайн?",
                answer: "Да, я провожу онлайн-консультации через защищенные платформы видеосвязи. Исследования показывают, что онлайн-терапия может быть так же эффективна, как и очные встречи, особенно при работе с тревожностью, депрессией и межличностными проблемами."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-[#e1dfec]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-[#333]">{faq.question}</h3>
                    <Icon name="ChevronDown" className="h-5 w-5 text-[#6A49D8]" />
                  </div>
                  <Separator className="my-3" />
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
            <Button size="lg" className="bg-[#6A49D8] hover:bg-[#5338C0]">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Контактная форма */}
      <section id="contact" className="py-16 bg-[#f8f9fc]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-[#6A49D8]">
                <h2 className="text-3xl font-bold text-white mb-4">Свяжитесь со мной</h2>
                <p className="text-white/90 mb-8">
                  Оставьте свои контактные данные, и я свяжусь с вами
                  для уточнения деталей и записи на консультацию
                </p>
                
                <div className="space-y-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <Icon name="MapPin" className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">Адрес</h4>
                      <p className="text-white/80">г. Москва, ул. Арбат, д. 20, офис 305</p>
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
                      <p className="text-white/80">maria@mindpro.ru</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-8 bg-white/20" />
                
                <div>
                  <h4 className="text-white font-medium mb-3">Часы работы</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex justify-between">
                      <span>Понедельник - Пятница:</span>
                      <span>10:00 - 20:00</span>
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
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#333] mb-4">Запись на консультацию</h3>
                <p className="text-gray-600 mb-6">
                  Заполните форму ниже, и я свяжусь с вами в ближайшее время
                  для подтверждения записи
                </p>
                
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A49D8]" 
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A49D8]" 
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A49D8]" 
                      placeholder="example@mail.ru"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Тип консультации</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A49D8]">
                      <option value="">Выберите тип консультации</option>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A49D8]"
                      placeholder="Опишите кратко вашу ситуацию или вопрос..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="h-4 w-4 text-[#6A49D8] focus:ring-[#6A49D8] border-gray-300 rounded" 
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                      Я согласен с <a href="#" className="text-[#6A49D8] hover:underline">политикой конфиденциальности</a>
                    </label>
                  </div>
                  
                  <Button className="w-full bg-[#6A49D8] hover:bg-[#5338C0]">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#2D2A40] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brain" className="h-6 w-6 text-[#9b86ff]" />
                <span className="text-xl font-semibold">МиндПро</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональная психологическая помощь для всех, кто стремится к личностному 
                росту и гармонии с собой и окружающим миром.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#6A49D8]/20 w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#6A49D8]/30 transition-colors">
                  <Icon name="Instagram" className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#6A49D8]/20 w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#6A49D8]/30 transition-colors">
                  <Icon name="Facebook" className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#6A49D8]/20 w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#6A49D8]/30 transition-colors">
                  <Icon name="Telegram" className="h-4 w-4" />
                </a>
                <a href="#" className="bg-[#6A49D8]/20 w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#6A49D8]/30 transition-colors">
                  <Icon name="Youtube" className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Индивидуальная терапия</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Семейная терапия</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Терапия для пар</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Онлайн-консультации</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Групповая терапия</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Обо мне</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#methods" className="text-gray-400 hover:text-white transition-colors">Методы</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-[#9b86ff]" />
                  <span className="text-gray-400">г. Москва, ул. Арбат, д. 20, офис 305</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-[#9b86ff]" />
                  <span className="text-gray-400">+7 (900) 123-45-67</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-[#9b86ff]" />
                  <span className="text-gray-400">maria@mindpro.ru</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-[#9b86ff]" />
                  <span className="text-gray-400">Пн-Пт: 10:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 МиндПро. Все права защищены.</p>
            <div className="mt-4 md:mt-0 flex gap-4 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
