"use client";

import Image from 'next/image';
import { GalleryData } from '@/types';
import galeriaDataRaw from "../../data/galeria.json";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default function Galeria() {

  const {encabezado, items} = galeriaDataRaw as GalleryData;

  return (
    <section id="galeria" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-16 space-y-4">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            {encabezado.subtitulo}
          </span>
          <h4 className="text-4xl md:text-5xl text-luxury-charcoal leading-tight ">
            {encabezado.titulo}
          </h4>
          <div className="w-12 h-px bg-luxury-gold mx-auto mt-6"></div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense auto-rows-[250px]'>
          {
            items.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className='relative h-full w-full cursor-zoom-in overflow-hidden group rounded-sm shadow-sm'>
                    <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-7xl bg-transparent border-none p-4">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Galería de fotos - {image.alt}</DialogTitle>
                  </DialogHeader>

                  <Carousel opts={{ startIndex: index }} className="w-full">
                    <CarouselContent className='ml-4'>
                      {items.map((item, idx) => (
                        <CarouselItem key={idx} className="ml-4">
                          <div className="relative h-[80vh] w-full md:w-auto">
                            <Image src={item.src} alt={item.alt} fill className="object-contain" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4 bg-white/10 text-white hover:bg-white/30 border-none" />
                    <CarouselNext className="right-4 bg-white/10 text-white hover:bg-white/30 border-none" />
                  </Carousel>
                </DialogContent>
              </Dialog>
            ))}
        </div>
      </div>
    </section>
  );
}
