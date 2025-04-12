"use client";
import React from "react";

interface BenefitCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="p-8 h-full bg-gray-50 rounded-xl">
      <img
        alt={imageAlt}
        src={imageUrl}
        className="object-cover mx-auto mb-6 w-full aspect-square"
      />
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </article>
  );
};

export default BenefitCard;