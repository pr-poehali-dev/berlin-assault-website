
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BerlinHeader from "@/components/BerlinHeader";
import TimeLine from "@/components/TimeLine";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <BerlinHeader />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-red-500">Берлинская операция 1945 года</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Берлинская наступательная операция — одна из последних стратегических операций советских войск на Европейском театре военных действий, в ходе которой Красная армия заняла столицу Германии и победоносно завершила Великую Отечественную войну.
              </p>
              <p className="text-lg mb-4">
                Операция продолжалась 23 дня — с 16 апреля по 8 мая 1945 года, в течение которых советские войска продвинулись на запад на расстояние от 100 до 220 км.
              </p>
              <div className="mt-8">
                <TimeLine />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://cdn.poehali.dev/files/36136e42-d143-40f8-abff-0e949c03e9d2.jpg" 
                alt="Рейхстаг после штурма" 
                className="rounded-lg shadow-xl mb-6 max-h-96 object-cover"
              />
              <p className="text-sm text-gray-400">Рейхстаг после штурма советскими войсками</p>
            </div>
          </div>
        </section>

        <GallerySection />

        <section className="mb-16 mt-12">
          <h2 className="text-3xl font-bold mb-6 text-red-500">Разделы сайта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3">Подготовка операции</h3>
              <p className="mb-4">Планирование, подготовка войск и стратегические цели советского командования.</p>
              <Link to="/preparation">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Подробнее
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3">Ход сражения</h3>
              <p className="mb-4">Основные этапы, ключевые моменты и тактические решения в ходе штурма.</p>
              <Link to="/battle">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Подробнее
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3">Ключевые персоны</h3>
              <p className="mb-4">Военачальники и герои, сыгравшие решающую роль в успехе операции.</p>
              <Link to="/heroes">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Подробнее
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/results">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl">
                Итоги сражения
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p>© 2025 Штурм Берлина — Историческая память</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
