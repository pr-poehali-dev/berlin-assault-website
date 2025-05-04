
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  url: string;
  caption: string;
  description: string;
}

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/9f657bc8-a5fd-4c4f-8321-f180f74d52c1.jpg",
      caption: "Советские солдаты у Рейхстага",
      description: "Группа советских военнослужащих у колонн разрушенного Рейхстага после его штурма. Май 1945 года."
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/files/36136e42-d143-40f8-abff-0e949c03e9d2.jpg",
      caption: "Рейхстаг и авиация",
      description: "Советские самолеты над разрушенным Рейхстагом. Танк Т-34 на переднем плане. Май 1945 года."
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/files/0754e0a6-fca5-43eb-b50c-3456a9aca98e.jpg",
      caption: "Немецкие пленные",
      description: "Немецкие военнопленные сдаются в плен рядом с советским танком Т-34-85. Окраины Берлина, апрель-май 1945 года."
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/files/f2fc568f-76f3-4039-ad33-64685dbd2032.jpg",
      caption: "Почтовая марка Беларуси",
      description: "Почтовая марка Беларуси 2015 года, посвященная 70-летию Победы. На марке изображены советские солдаты на улицах Берлина, 9 мая 1945 года."
    },
    {
      id: 5,
      url: "https://cdn.poehali.dev/files/cecabb0e-beef-492c-9dc8-08a075fd2792.jpg",
      caption: "Штурм Рейхстага",
      description: "Художественное изображение битвы за Рейхстаг. В центре - горящее здание Рейхстага, советские танки ведут бой на передовой."
    }
  ];

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-red-500">Фотохроника штурма Берлина</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
              onClick={() => openPhotoModal(photo)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{photo.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-3xl">
          {selectedPhoto && (
            <div>
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.caption} 
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedPhoto.caption}</h3>
              <p className="text-gray-300">{selectedPhoto.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
