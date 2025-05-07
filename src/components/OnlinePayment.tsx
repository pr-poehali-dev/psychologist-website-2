
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerFooter } from "@/components/ui/drawer";

export interface ServiceType {
  id: string;
  name: string;
  price: number;
}

interface OnlinePaymentProps {
  services: ServiceType[];
}

const OnlinePayment = ({ services }: OnlinePaymentProps) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [paymentStep, setPaymentStep] = useState(1);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [acceptedContract, setAcceptedContract] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsPaymentOpen(true);
    setPaymentStep(1);
  };

  const handlePaymentStepNext = () => {
    if (paymentStep === 1 && !acceptedContract) {
      setIsContractOpen(true);
      return;
    }
    setPaymentStep(prev => prev + 1);
  };

  const handlePaymentClose = () => {
    setIsPaymentOpen(false);
    setPaymentStep(1);
  };

  const handlePaymentComplete = () => {
    // Здесь можно добавить логику обработки платежа
    setPaymentStep(3); // Переход к сообщению об успешной оплате
  };

  const handleAcceptContract = () => {
    setAcceptedContract(true);
    setIsContractOpen(false);
  };

  const getServiceById = (id: string) => {
    return services.find(service => service.id === id);
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <div className="mt-10 p-5 bg-[#E5DEFF] rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-[#6E59A5]">Онлайн-оплата консультаций</h3>
            <p className="text-gray-700">Быстро, удобно и безопасно оплачивайте услуги психолога онлайн</p>
          </div>
          <Button 
            onClick={() => setIsPaymentOpen(true)} 
            className="bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            <Icon name="CreditCard" className="mr-2 h-4 w-4" />
            Оплатить консультацию
          </Button>
        </div>
      </div>
      
      {/* Модальное окно оплаты */}
      <Dialog open={isPaymentOpen} onOpenChange={handlePaymentClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {paymentStep === 1 ? "Оплата консультации" : 
               paymentStep === 2 ? "Детали оплаты" : 
               "Оплата успешно выполнена"}
            </DialogTitle>
            <DialogDescription>
              {paymentStep === 1 ? "Выберите услугу и удобную дату" : 
               paymentStep === 2 ? "Введите платежные данные" :
               "Благодарим за оплату!"}
            </DialogDescription>
          </DialogHeader>

          {paymentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Выберите услугу</label>
                <Select defaultValue={selectedService || undefined} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - {service.price} ₽
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Выберите дату</label>
                <Input 
                  type="date" 
                  className="w-full" 
                  min={currentDate}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Выберите время</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {["10:00", "11:30", "13:00", "15:30", "17:00"].map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox 
                  id="contract" 
                  checked={acceptedContract}
                  onCheckedChange={(checked) => {
                    if (checked === true && !acceptedContract) {
                      setIsContractOpen(true);
                    } else {
                      setAcceptedContract(!!checked);
                    }
                  }}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="contract"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Я принимаю условия договора оферты
                  </label>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsContractOpen(true);
                    }} 
                    className="text-sm text-[#9b87f5] hover:underline"
                  >
                    Ознакомиться с договором
                  </button>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={handlePaymentStepNext} 
                  disabled={!selectedService || !selectedDate || !selectedTime || !acceptedContract}
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  Продолжить
                </Button>
              </div>
            </div>
          )}

          {paymentStep === 2 && (
            <div className="space-y-4">
              <div className="p-4 bg-[#F6F7FB] rounded-md">
                <div className="flex justify-between">
                  <span>Услуга:</span>
                  <span className="font-medium">
                    {selectedService && getServiceById(selectedService)?.name}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Дата и время:</span>
                  <span className="font-medium">
                    {selectedDate}, {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Стоимость:</span>
                  <span className="font-medium">
                    {selectedService && getServiceById(selectedService)?.price} ₽
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Номер карты</label>
                <Input placeholder="0000 0000 0000 0000" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Срок действия</label>
                  <Input placeholder="ММ/ГГ" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CVV</label>
                  <Input placeholder="123" type="password" maxLength={3} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Имя владельца</label>
                <Input placeholder="IVAN IVANOV" />
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={handlePaymentComplete} 
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                >
                  <Icon name="LockKeyhole" className="mr-2 h-4 w-4" />
                  Оплатить {selectedService && getServiceById(selectedService)?.price} ₽
                </Button>
              </div>
              
              <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                <Icon name="Shield" className="h-4 w-4" />
                Защищенное соединение. Безопасная оплата
              </div>
            </div>
          )}

          {paymentStep === 3 && (
            <div className="space-y-4 text-center">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <Icon name="CheckCircle" className="h-8 w-8 text-green-600" />
                </div>
              </div>
              
              <p>Ваша оплата успешно прошла! Детали консультации отправлены на вашу электронную почту.</p>
              
              <div className="p-4 bg-[#F6F7FB] rounded-md">
                <div className="flex justify-between">
                  <span>Услуга:</span>
                  <span className="font-medium">
                    {selectedService && getServiceById(selectedService)?.name}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Дата и время:</span>
                  <span className="font-medium">
                    {selectedDate}, {selectedTime}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Сумма:</span>
                  <span className="font-medium">
                    {selectedService && getServiceById(selectedService)?.price} ₽
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Номер заказа:</span>
                  <span className="font-medium">PSY-{Math.floor(Math.random() * 10000)}</span>
                </div>
              </div>
              
              <DialogFooter>
                <Button onClick={handlePaymentClose} className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
                  Закрыть
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Модальное окно с договором оферты */}
      <Drawer open={isContractOpen} onOpenChange={setIsContractOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Договор оферты на оказание психологических услуг</DrawerTitle>
            <DrawerDescription>
              Пожалуйста, внимательно прочтите все условия договора
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 h-[60vh] overflow-y-auto">
            <div className="space-y-4 text-sm">
              <h3 className="font-bold text-base">1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
              <p>
                1.1. Настоящий документ является публичной офертой (далее — «Договор») на оказание психологических услуг 
                индивидуальным предпринимателем Еленой Петровой (далее — «Исполнитель») и содержит все существенные условия.
              </p>
              <p>
                1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса Российской Федерации (ГК РФ), 
                в случае принятия изложенных ниже условий и оплаты услуг физическое лицо, производящее акцепт этой 
                оферты, становится Заказчиком (в соответствии с пунктом 3 статьи 438 ГК РФ акцепт оферты равносилен 
                заключению договора на условиях, изложенных в оферте).
              </p>
              
              <h3 className="font-bold text-base">2. ПРЕДМЕТ ДОГОВОРА</h3>
              <p>
                2.1. Исполнитель обязуется предоставить Заказчику психологические услуги в форме индивидуальных или
                семейных консультаций, а Заказчик обязуется оплатить эти услуги в соответствии с условиями настоящего Договора.
              </p>
              <p>
                2.2. Формат оказания услуг: личные консультации или онлайн-консультации посредством видеосвязи.
              </p>
              
              <h3 className="font-bold text-base">3. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h3>
              <p>
                3.1. Исполнитель обязуется:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Оказывать услуги качественно, в полном объеме и в согласованные сроки;</li>
                <li>Соблюдать конфиденциальность информации, полученной от Заказчика;</li>
                <li>Предоставлять Заказчику необходимую и достоверную информацию об услугах;</li>
                <li>Применять профессиональные методы работы в рамках оказываемых услуг.</li>
              </ul>
              
              <p>
                3.2. Заказчик обязуется:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Своевременно оплачивать услуги Исполнителя;</li>
                <li>Предоставлять достоверную информацию, необходимую для оказания услуг;</li>
                <li>Соблюдать рекомендации Исполнителя;</li>
                <li>Извещать Исполнителя об отмене или переносе консультации не менее чем за 24 часа до назначенного времени.</li>
              </ul>
              
              <h3 className="font-bold text-base">4. СТОИМОСТЬ УСЛУГ И ПОРЯДОК РАСЧЕТОВ</h3>
              <p>
                4.1. Стоимость услуг определяется в соответствии с действующими тарифами Исполнителя, 
                указанными на сайте и в настоящем Договоре.
              </p>
              <p>
                4.2. Оплата услуг производится Заказчиком на условиях 100% предоплаты путем перечисления 
                денежных средств на расчетный счет Исполнителя или иным способом, указанным на сайте.
              </p>
              <p>
                4.3. В случае отмены консультации менее чем за 24 часа до назначенного времени, 
                Исполнитель вправе удержать 50% от стоимости консультации в качестве компенсации.
              </p>
              
              <h3 className="font-bold text-base">5. ОТВЕТСТВЕННОСТЬ СТОРОН</h3>
              <p>
                5.1. За неисполнение или ненадлежащее исполнение своих обязательств по настоящему Договору 
                Стороны несут ответственность в соответствии с действующим законодательством Российской Федерации.
              </p>
              <p>
                5.2. Исполнитель не несет ответственности за результат применения Заказчиком полученных рекомендаций, 
                так как конечный результат во многом зависит от индивидуальных особенностей и усилий самого Заказчика.
              </p>
              
              <h3 className="font-bold text-base">6. КОНФИДЕНЦИАЛЬНОСТЬ</h3>
              <p>
                6.1. Исполнитель обязуется сохранять в тайне всю информацию, полученную от Заказчика в процессе оказания услуг.
              </p>
              <p>
                6.2. Условия конфиденциальности могут быть нарушены в случаях, предусмотренных законодательством РФ, 
                а также если имеется угроза жизни и здоровью Заказчика или третьих лиц.
              </p>
              
              <h3 className="font-bold text-base">7. СРОК ДЕЙСТВИЯ ДОГОВОРА</h3>
              <p>
                7.1. Настоящий Договор вступает в силу с момента акцепта оферты (оплаты услуг) и действует 
                до полного исполнения Сторонами своих обязательств.
              </p>
              
              <h3 className="font-bold text-base">8. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h3>
              <p>
                8.1. Все споры и разногласия, возникающие между Сторонами по настоящему Договору, 
                разрешаются путем переговоров.
              </p>
              <p>
                8.2. Во всем остальном, что не предусмотрено настоящим Договором, Стороны руководствуются 
                действующим законодательством Российской Федерации.
              </p>
            </div>
          </div>
          <DrawerFooter>
            <Button 
              onClick={handleAcceptContract} 
              className="bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              Принимаю условия договора
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Закрыть</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default OnlinePayment;
