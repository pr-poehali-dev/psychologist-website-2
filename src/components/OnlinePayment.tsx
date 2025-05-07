
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
import { useState } from "react";

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

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsPaymentOpen(true);
    setPaymentStep(1);
  };

  const handlePaymentStepNext = () => {
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

  const getServiceById = (id: string) => {
    return services.find(service => service.id === id);
  };

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
                <Input type="date" className="w-full" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Выберите время</label>
                <Select>
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
              
              <div className="pt-4">
                <Button 
                  onClick={handlePaymentStepNext} 
                  disabled={!selectedService}
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
    </>
  );
};

export default OnlinePayment;
