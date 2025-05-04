
import { Separator } from "@/components/ui/separator";

const TimeLine = () => {
  const events = [
    {
      date: "16 апреля 1945",
      title: "Начало операции",
      description: "В 5 часов утра началась артиллерийская подготовка. В 6:30 войска 1-го Белорусского и 1-го Украинского фронтов перешли в наступление."
    },
    {
      date: "25 апреля 1945",
      title: "Окружение Берлина",
      description: "Войска 1-го Белорусского и 1-го Украинского фронтов соединились западнее Берлина, завершив окружение берлинской группировки противника."
    },
    {
      date: "30 апреля 1945",
      title: "Штурм Рейхстага",
      description: "Бойцы 150-й стрелковой дивизии М. А. Егоров и М. В. Кантария водрузили Знамя Победы над Рейхстагом."
    },
    {
      date: "2 мая 1945",
      title: "Капитуляция гарнизона",
      description: "Берлинский гарнизон во главе с генералом Вейдлингом капитулировал."
    },
    {
      date: "8 мая 1945",
      title: "Подписание акта о капитуляции",
      description: "В пригороде Берлина Карлсхорсте был подписан акт о безоговорочной капитуляции германских вооружённых сил."
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-red-500">Ключевые даты</h3>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8">
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-red-600"></div>
            {index < events.length - 1 && (
              <div className="absolute left-2 top-5 w-0.5 h-full bg-gray-700"></div>
            )}
            <div>
              <p className="text-sm text-gray-400">{event.date}</p>
              <h4 className="text-xl font-bold">{event.title}</h4>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
