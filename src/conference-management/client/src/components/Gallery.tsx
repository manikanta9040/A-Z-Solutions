import { useState } from 'react'
import { galleryImages } from '../data/mockData'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <button key={image.id} onClick={() => setSelectedImage(image.src)} className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 shadow-card">
            <img src={image.src} alt={image.alt} className="h-64 w-full object-cover transition hover:scale-105" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected gallery" className="max-h-[80vh] max-w-full rounded-[2rem] object-contain" />
        </div>
      )}
    </>
  )
}

export default Gallery
