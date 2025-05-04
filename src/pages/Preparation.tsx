
import { Link } from "react-router-dom";
import BerlinHeader from "@/components/BerlinHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ForceComparisonTable from "@/components/ForceComparisonTable";

const Preparation = () => {
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
        
        <h1 className="text-4xl font-bold mb-8 text-red-500">Подготовка Берлинской операции</h1>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-lg mb-4">
              К апрелю 1945 года советские войска вышли на подступы к Берлину. Ставка Верховного Главнокомандования рассматривала взятие Берлина как важнейшую стратегическую задачу.
            </p>
            <p className="text-lg mb-4">
              16 апреля 1945 года началась Берлинская наступательная операция. К этому моменту штабы фронтов провели колоссальную работу по подготовке войск, планированию операции и материально-техническому обеспечению.
            </p>
            <p className="text-lg mb-4">
              Координацию действий осуществляли представители Ставки Верховного Главнокомандования маршалы Г.К. Жуков, В.Д. Соколовский и А.М. Василевский.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <img 
                src="https://cdn.poehali.dev/files/372df661-c679-44b4-8f2e-c1569d991099.jpg" 
                alt="Карта Берлинской операции" 
                className="rounded-lg shadow-xl mb-6 object-contain cursor-pointer transition-transform hover:scale-105" 
              />
              <div className="absolute bottom-6 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                Нажмите для увеличения
              </div>
            </div>
            <p className="text-sm text-gray-400">Карта Берлинской операции 16.04 - 08.05.1945 г.</p>
            <div className="mt-4 text-xs text-gray-500 max-w-md">
              <p className="mb-1">Обозначения:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Красные стрелки — направления ударов советских войск</li>
                <li>Синие линии — положение линии фронта на разные даты</li>
                <li>Перечеркнутые области — узлы сопротивления противника</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="forces">
          <TabsList className="bg-gray-800 border-b border-gray-700 w-full justify-start mb-8">
            <TabsTrigger value="forces" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Соотношение сил
            </TabsTrigger>
            <TabsTrigger value="planning" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Планирование операции
            </TabsTrigger>
            <TabsTrigger value="defense" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Оборона Берлина
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="forces" className="mt-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-6">Соотношение сил сторон</h2>
              <ForceComparisonTable />
              
              <div className="mt-8">
                <p className="mb-4">
                  Перед началом операции советское командование обеспечило значительное превосходство в силах и средствах. Особое внимание уделялось концентрации артиллерии и танков для прорыва мощной оборонительной полосы противника.
                </p>
                <p>
                  Германское командование, понимая неизбежность штурма своей столицы, сконцентрировало для её обороны все имеющиеся силы, включая фольксштурм (народное ополчение) и части гитлерюгенда.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="planning" className="mt-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Планирование операции</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Основные задачи фронтов:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold">1-й Белорусский фронт (Г.К. Жуков)</span> - наносил главный удар с Кюстринского плацдарма в обход Берлина с севера и северо-востока.</li>
                  <li><span className="font-semibold">1-й Украинский фронт (И.С. Конев)</span> - наступал с юга, форсировав Нейсе, с целью окружения берлинской группировки.</li>
                  <li><span className="font-semibold">2-й Белорусский фронт (К.К. Рокоссовский)</span> - обеспечивал прикрытие с севера, наступая в общем направлении на Штеттин.</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Этапы планирования:</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Стратегическая разведка и определение оборонительных рубежей противника.</li>
                  <li>Планирование ударов фронтов и координация их действий.</li>
                  <li>Организация материально-технического обеспечения операции.</li>
                  <li>Создание специальных штурмовых групп для боёв в городских условиях.</li>
                </ol>
              </div>
              
              <div className="mt-6">
                <p>
                  Особое внимание при планировании уделялось взаимодействию родов войск и авиационной поддержке наступления. Для штурма города были сформированы специальные штурмовые группы, оснащённые огнемётами и подготовленные к ведению боёв в городских условиях.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="defense" className="mt-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Оборона Берлина</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Оборонительные рубежи:</h3>
                  <p className="mb-4">
                    Оборона Берлина состояла из трёх оборонительных обводов:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><span className="font-semibold">Внешний обвод</span> - проходил в 25-40 км от центра города.</li>
                    <li><span className="font-semibold">Внутренний обвод</span> - по окраинам города.</li>
                    <li><span className="font-semibold">Городской обвод</span> - в центральной части города с опорой на железобетонные здания.</li>
                  </ul>
                  
                  <p className="mt-4">
                    Немецкое командование превратило город в мощный укреплённый район. Улицы перегораживались баррикадами и противотанковыми заграждениями, в зданиях оборудовались огневые точки, подвалы превращались в убежища и склады.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Силы обороны:</h3>
                  <p className="mb-4">
                    Для обороны Берлина германское командование привлекло:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Регулярные части вермахта и СС.</li>
                    <li>Полицейские части.</li>
                    <li>Фольксштурм (народное ополчение).</li>
                    <li>Части гитлерюгенда.</li>
                  </ul>
                  
                  <p className="mt-4">
                    Общая численность гарнизона Берлина составляла около 200 тысяч человек. Руководил обороной города генерал Вейдлинг.
                  </p>
                </div>
              </div>
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

export default Preparation;
