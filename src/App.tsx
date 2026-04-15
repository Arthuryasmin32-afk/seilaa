/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, MoreHorizontal, ChevronLeft } from "lucide-react";

export default function App() {
  const telegramLink = "https://phantoms.group/l/wngrbery?shk=7u999bwa";
  const images = [
    "https://i.ibb.co/rGxvsrSJ/7665681c-3264-450a-be33-ba5dd9968ada.jpg",
    "https://i.ibb.co/cXyKDbXt/5ac481e8-fb05-4312-ac34-ac8c026f24cb.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // 2.5 seconds duration

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-[#fff5f8] flex flex-col items-center font-sans text-gray-800">
      <div className="w-full max-w-md px-6 py-8 flex flex-col items-center">
        {/* Header/Title */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-xl font-black flex items-center justify-center gap-2 uppercase tracking-tight text-[#333]">
            SIGA O TUTORIAL ABAIXO <Zap className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          </h1>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full aspect-[4/5] bg-black rounded-2xl overflow-hidden shadow-xl mb-8 relative border-4 border-black"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div 
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-pink-500' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Instructions List */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full space-y-4 mb-10 text-sm"
        >
          <div className="flex gap-3 items-start">
            <span className="text-[#e91e63] font-medium">1)</span>
            <p className="text-gray-500">
              Toque nos <span className="font-bold text-gray-800">três pontinhos</span> (canto superior direito da tela)
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[#e91e63] font-medium">2)</span>
            <p className="text-gray-500">
              Escolha <span className="font-bold text-gray-800">"Abrir no navegador"</span>
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-[#e91e63] font-medium">3)</span>
            <p className="text-gray-500">
              Agora toque no <span className="font-bold text-[#e91e63]">botão rosa</span> para abrir o Telegram
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full flex flex-col gap-4"
        >
          <a 
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#e91e63] hover:bg-[#d81b60] text-white font-bold py-4 rounded-xl text-center text-lg shadow-lg transition-all active:scale-[0.98] uppercase flex items-center justify-center gap-2"
          >
            ABRIR TELEGRAM
          </a>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 text-gray-400 text-[10px] text-center flex flex-col items-center gap-1">
          <p>Redirecionamento seguro • Nunca armazenamos</p>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>Seus dados estão protegidos</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
