
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BerlinHeader = () => {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
      <div 
        className="h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/cecabb0e-beef-492c-9dc8-08a075fd2792.jpg')"
        }}
      ></div>
      
      <div className="absolute top-0 left-0 w-full z-20">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          <Link to="/" className="text-2xl font-bold text-white">ШТУРМ БЕРЛИНА</Link>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:text-red-400 transition-colors">Главная</Link>
            <Link to="/preparation" className="text-white hover:text-red-400 transition-colors">Подготовка</Link>
            <Link to="/battle" className="text-white hover:text-red-400 transition-colors">Ход сражения</Link>
            <Link to="/heroes" className="text-white hover:text-red-400 transition-colors">Герои</Link>
            <Link to="/results" className="text-white hover:text-red-400 transition-colors">Итоги</Link>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 pt-16 pb-32">
          <h1 className="text-6xl font-bold text-white mb-6">Штурм Берлина</h1>
          <p className="text-2xl text-gray-200 max-w-2xl mb-8">
            Завершающая операция Великой Отечественной войны, определившая исход Второй мировой войны
          </p>
          <div className="flex gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg">
              Хронология событий
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-6 py-3 text-lg">
              Исторические факты
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BerlinHeader;
