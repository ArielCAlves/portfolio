import React from 'react'

const Footer = () => {
  return (
    <div className="w-full py-10">
        <p className="text-center text-gray-500 text-base">
           © {new Date().getFullYear()}. All rights reserved by Ariel Carvalho Alves
        </p>
    </div>
  );
}

export default Footer