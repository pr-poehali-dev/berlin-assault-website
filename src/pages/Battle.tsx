
import { Link } from "react-router-dom";
import BerlinHeader from "@/components/BerlinHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Battle = () => {
  const phases = [
    {
      date: "16-19 апреля 1945",
      title: "Прорыв обороны на Одере и Нейсе",
      description: "Войска 1-го Белорусского и 1-го Украинского фронтов начали штурм укрепленных позиций противника. Ожесточенные бои развернулись на Зееловских высотах, где оборону держали части 9-й армии вермахта.",
      events: [
        "16 апреля в 5:00 – начало артподготовки на участке 1-го Белорусского фронта",
        "16 апреля в 6:30 – войска двинулись в наступление при поддержке 143 прожекторов, ослепляющих противника",
        "17 апреля – ввод в бой 1-й и 2-й гвардейских танковых армий",
        "19 апреля – советские войска преодолели Зееловские высоты"
      ]
    },
    {
      date: "20-25 апреля 1945",
      title: "Окружение Берлина",
      description: "Войска 1-го Белорусского и 1-го Украинского фронтов завершили окружение берлинской группировки противника. 25 апреля в районе Кетцина произошла встреча войск двух фронтов.",
      events: [
        "20 апреля – начало обстрела Берлина советской артиллерией",
        "21 апреля – передовые части ворвались на окраины Берлина",
        "24 апреля – окружение 9-й армии вермахта южнее Берлина",
        "25 апреля – замыкание кольца окружения вокруг Берлина",
        "25 апреля – историческая встреча на Эльбе советских и американских войск"
      ]
    },
    {
      date: "26 апреля - 2 мая 1945",
      title: "Бои в городе и капитуляция гарнизона",
      description: "Ожесточенные уличные бои в Берлине. Штурм Рейхстага и водружение Знамени Победы. Капитуляция берлинского гарнизона.",
      events: [
        "26 апреля – бои за Потсдамскую площадь и вокзал Ангальтер",
        "28 апреля – бои в правительственном квартале Берлина",
        "30 апреля – штурм Рейхстага и водружение Знамени Победы",
        "30 апреля – самоубийство Гитлера в бункере Рейхсканцелярии",
        "2 мая – капитуляция берлинского гарнизона, генерал Вейдлинг сдался в плен"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <BerlinHeader />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="text-red-500 hover:text-red-400 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            На главную
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-red-500">Ход сражения за Берлин</h1>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-lg mb-4">
              Берлинская наступательная операция стала кульминацией Великой Отечественной войны. В ходе операции советские войска преодолели мощную оборону противника, окружили Берлин и в результате ожесточенных уличных боев принудили германское командование к капитуляции.
            </p>
            <p className="text-lg mb-4">
              Бои за Берлин отличались исключительным упорством. Каждая улица, каждый дом, каждый этаж превращался в арену ожесточенных схваток. Особенно тяжелыми были бои за центральные районы Берлина и Рейхстаг.
            </p>
            <p className="text-lg">
              Операция продолжалась 23 дня и завершилась полной победой советских войск. Падение Берлина ознаменовало конец Третьего рейха и войны в Европе.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="https://cdn.poehali.dev/files/0754e0a6-fca5-43eb-b50c-3456a9aca98e.jpg" 
              alt="Уличные бои в Берлине" 
              className="rounded-lg shadow-xl mb-6 object-cover h-80" 
            />
            <p className="text-sm text-gray-400">Военнопленные рядом с советским танком на улицах Берлина</p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 text-red-500">Основные этапы операции</h2>
        
        <div className="space-y-10 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">{phase.date}</span>
                <h3 className="text-2xl font-bold">{phase.title}</h3>
              </div>
              <p className="mb-6 text-gray-300">{phase.description}</p>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Ключевые события:</h4>
                <ul className="space-y-2">
                  {phase.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start gap-2">
                      <div className="min-w-4 h-4 rounded-full bg-red-500 mt-1.5"></div>
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-6">Штурм Рейхстага</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Штурм Рейхстага — завершающий эпизод битвы за Берлин. 30 апреля 1945 года, после упорных боев, воины 150-й стрелковой дивизии прорвались к зданию Рейхстага.
              </p>
              <p className="mb-4">
                В 14:25 начался штурм, в котором участвовали 1-й и 2-й батальоны 756-го стрелкового полка и 1-й батальон 674-го стрелкового полка 150-й стрелковой дивизии.
              </p>
              <p>
                В 21:30 разведчики 756-го стрелкового полка М.А. Егоров и М.В. Кантария водрузили Знамя Победы над Рейхстагом. Бои внутри здания продолжались до утра 1 мая.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://cdn.poehali.dev/files/9f657bc8-a5fd-4c4f-8321-f180f74d52c1.jpg" 
                alt="Советские воины у Рейхстага" 
                className="rounded-lg shadow-xl mb-3 object-cover"
              />
              <p className="text-sm text-gray-400 text-center">Советские воины у поверженного Рейхстага, май 1945 г.</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="tactics">
          <TabsList className="bg-gray-800 border-b border-gray-700 w-full justify-start mb-8">
            <TabsTrigger value="tactics" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Тактика боев
            </TabsTrigger>
            <TabsTrigger value="difficulties" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Трудности операции
            </TabsTrigger>
            <TabsTrigger value="weapons" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Вооружение сторон
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tactics" className="mt-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Тактика уличных боев</h3>
              
              <p className="mb-4">
                Для ведения боевых действий в городских условиях были созданы специальные штурмовые группы, в состав которых входили:
              </p>
              
              <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                <li>Группы разграждения (саперы) — для разминирования подходов и проделывания проходов</li>
                <li>Группы захвата — стрелковые подразделения, усиленные огнеметчиками</li>
                <li>Группы огневой поддержки — артиллерия, танки, минометы</li>
                <li>Группы закрепления — для удержания захваченных зданий и объектов</li>
              </ul>
              
              <p className="mb-4">
                Штурмовые группы действовали с широким применением обходных маневров, просачивания через неплотные участки обороны, захватом ключевых зданий и перекрестков.
              </p>
              
              <p>
                Характерной чертой боев стало использование подземных коммуникаций (метро, канализации) для скрытого маневра, что позволяло неожиданно появляться в тылу противника.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="difficulties" className="mt-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Трудности при штурме города</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Оборонительные сооружения:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Баррикады на улицах из бетона и металла</li>
                    <li>Заминированные участки и объекты</li>
                    <li>Противотанковые рвы и надолбы</li>
                    <li>Железобетонные доты и бункеры</li>
                    <li>Подготовленные к обороне здания с амбразурами</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Тактические сложности:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Ограниченная видимость в городской застройке</li>
                    <li>Сложность координации действий подразделений</li>
                    <li>Невозможность эффективного использования авиации</li>
                    <li>Фанатичное сопротивление противника</li>
                    <li>Опасность для гражданского населения</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Несмотря на все трудности, советские войска проявили высокое боевое мастерство, героизм и самопожертвование, что позволило выполнить поставленную задачу в кратчайшие сроки.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="weapons" className="mt-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Основное вооружение сторон</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-red-400">Советские войска:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Танки Т-34-85, ИС-2</li>
                    <li>Самоходные артиллерийские установки СУ-76, СУ-85, ИСУ-122, ИСУ-152</li>
                    <li>Реактивные установки БМ-13 ("Катюши")</li>
                    <li>Штурмовые орудия</li>
                    <li>Ручные противотанковые гранатометы РПГ-43</li>
                    <li>Огнеметы РОКС-3</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Германские войска:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Танки Т-V "Пантера", Т-VI "Тигр"</li>
                    <li>Штурмовые орудия "Штурмгешютц"</li>
                    <li>Фаустпатроны</li>
                    <li>Артиллерия 88-мм зенитные орудия в противотанковом варианте</li>
                    <li>Минометы</li>
                    <li>"Фольксштурмгевер" - автоматы народного ополчения</li>
                  </ul>
                </div>
              </div>
              
              <p>
                В городских условиях особую роль играло пехотное вооружение, автоматы, пулеметы, ручные гранаты. Танки и артиллерия зачастую могли действовать только на прямую наводку из-за особенностей городской застройки.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p>© 2025 Штурм Берлина — Историческая память</p>
        </div>
      </footer>
    </div>
  );
};

export default Battle;
