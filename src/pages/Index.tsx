
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F7FB]">
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold text-[#6E59A5]">ПсихологПро</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-[#9b87f5]">Обо мне</a>
            <a href="#services" className="text-gray-700 hover:text-[#9b87f5]">Услуги</a>
            <a href="#approach" className="text-gray-700 hover:text-[#9b87f5]">Подход</a>
            <a href="#reviews" className="text-gray-700 hover:text-[#9b87f5]">Отзывы</a>
            <a href="#contacts" className="text-gray-700 hover:text-[#9b87f5]">Контакты</a>
          </nav>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Записаться
          </Button>
        </div>
      </header>

      {/* Главный экран */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Помогаю людям обрести <span className="text-[#9b87f5]">психологическое благополучие</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Профессиональная психологическая помощь для взрослых.
              Более 10 лет опыта работы с различными проблемами и ситуациями.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6">
                <Icon name="Calendar" className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] px-8 py-6">
                <Icon name="MessageCircle" className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
              alt="Психолог" 
              className="rounded-full h-64 w-64 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Обо мне */}
      <section id="about" className="py-16 bg-[#F6F7FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                alt="Психолог за работой" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Елена Петрова</h3>
              <p className="text-lg text-gray-600 mb-4">
                Клинический психолог с опытом более 10 лет. Специализируюсь на когнитивно-поведенческой терапии, 
                работе с тревожными расстройствами, депрессией и проблемами в отношениях.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-[#9b87f5]" />
                  <span>Высшее психологическое образование (МГУ)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-[#9b87f5]" />
                  <span>Сертифицированный специалист по КПТ</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-[#9b87f5]" />
                  <span>Регулярное повышение квалификации</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-[#9b87f5]" />
                  <span>Более 500 успешных случаев</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Мои услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Я предлагаю индивидуальный подход к каждому клиенту с учетом его потребностей и особенностей
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#E5DEFF] w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="UserCheck" className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Индивидуальная терапия</h3>
                <p className="text-gray-600">
                  Персональные консультации для решения конкретных психологических проблем
                </p>
                <div className="mt-4 text-[#9b87f5] font-medium">От 3000 ₽ / сессия</div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#E5DEFF] w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="Users" className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Семейная терапия</h3>
                <p className="text-gray-600">
                  Работа с парами и семьями для улучшения отношений и коммуникации
                </p>
                <div className="mt-4 text-[#9b87f5] font-medium">От 4500 ₽ / сессия</div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-[#E5DEFF] w-14 h-14 flex items-center justify-center mb-4">
                  <Icon name="Globe" className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Онлайн-консультации</h3>
                <p className="text-gray-600">
                  Удаленные сессии с психологом в удобное для вас время через видеосвязь
                </p>
                <div className="mt-4 text-[#9b87f5] font-medium">От 2500 ₽ / сессия</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* С чем я работаю */}
      <section id="approach" className="py-16 bg-[#F6F7FB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">С чем я работаю</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Brain", title: "Тревожные расстройства", desc: "Панические атаки, фобии, ОКР, социальная тревожность" },
              { icon: "Cloud", title: "Депрессия", desc: "Подавленное настроение, апатия, выгорание" },
              { icon: "Heart", title: "Отношения", desc: "Конфликты в паре, сложности в коммуникации" },
              { icon: "Activity", title: "Стресс", desc: "Управление стрессом, преодоление кризисных ситуаций" },
              { icon: "Frown", title: "Самооценка", desc: "Неуверенность в себе, комплексы" },
              { icon: "Target", title: "Самоопределение", desc: "Поиск себя, профессиональное самоопределение" }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 flex gap-4">
                  <div className="rounded-full bg-[#E5DEFF] w-12 h-12 shrink-0 flex items-center justify-center">
                    <Icon name={item.icon} className="h-5 w-5 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              Узнать больше о методах работы
            </Button>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.", 
                text: "Елена помогла мне справиться с паническими атаками, которые мучили меня годами. После полугода работы я наконец чувствую, что контролирую свою жизнь.",
                date: "Май 2024"
              },
              {
                name: "Михаил Д.", 
                text: "Обратился к Елене в период тяжелого профессионального выгорания. Она дала мне работающие инструменты и поддержку, чтобы выйти из этого состояния.",
                date: "Март 2024"
              },
              {
                name: "Ольга и Сергей", 
                text: "Спасибо за помощь нашей семье! Мы смогли наладить коммуникацию и научились слышать друг друга. Наши отношения стали намного крепче.",
                date: "Январь 2024"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Icon key={star} name="Star" className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{item.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма связи */}
      <section id="contacts" className="py-16 bg-[#F6F7FB]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-[#9b87f5]">
                <h2 className="text-3xl font-bold text-white mb-4">Свяжитесь со мной</h2>
                <p className="text-white/90 mb-6">
                  Оставьте свои контактные данные, и я свяжусь с вами в ближайшее время для уточнения деталей
                </p>
                
                <div className="space-y-4 text-white">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-white" />
                    <span>г. Москва, ул. Примерная, д. 123, офис 45</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-white" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-white" />
                    <span>elena@psy-help.ru</span>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                    <Icon name="Instagram" className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                    <Icon name="Facebook" className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30">
                    <Icon name="Telegram" className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                      <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"></textarea>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="consent" className="h-4 w-4 text-[#9b87f5] focus:ring-[#9b87f5] border-gray-300 rounded" />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-semibold text-white">ПсихологПро</span>
              </div>
              <p className="text-gray-400">
                Профессиональная психологическая помощь для всех, кто стремится к личностному росту и гармонии
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">Обо мне</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Услуги</a></li>
                <li><a href="#approach" className="text-gray-400 hover:text-white">Подход</a></li>
                <li><a href="#reviews" className="text-gray-400 hover:text-white">Отзывы</a></li>
                <li><a href="#contacts" className="text-gray-400 hover:text-white">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>г. Москва, ул. Примерная, 123</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>elena@psy-help.ru</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 ПсихологПро. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
