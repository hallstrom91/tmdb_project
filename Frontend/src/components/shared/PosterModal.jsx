import React, { useState } from "react";

export default function PosterModal({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // img base url
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex pb-4">
        {/* Poster Display before opening modal-popup view */}
        <div
          className="object-scale-down justify-start cursor-pointer"
          onClick={openModal}
        >
          <img
            src={`${baseImageUrl}${item.poster_path}`}
            alt={item.original_title}
            className="w-48 mx-auto"
          />
        </div>
        {/* Poster Display when opening modal-popup view */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={closeModal}
            ></div>
            <div className="bg-white p-2 pt-14 rounded-lg z-50 relative">
              <p className="font-bold text-lg text-center pb-2">
                {item.original_title || item.original_name}
              </p>
              <img
                src={`${baseImageUrl}${item.poster_path}`}
                alt={item.original_title}
              />
              <button
                className="absolute top-2 right-2 p-2 bg-white border-2 border-black border-dotted rounded-lg md:hover:bg-red-400"
                onClick={closeModal}
              >
                Stäng
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
