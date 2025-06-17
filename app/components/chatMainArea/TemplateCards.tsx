"use client";
import React from "react";

type Template = {
  id: number;
  title: string;
  featured_image: string;
  custom_fields: {
    _template_paid?: string[];
    _template_price?: string[];
    _template_preview?: string[];
    _template_link?: string[];
  };
};

const TemplateCards = ({ data }: { data: Template[] }) => {
  return (
    <div className="flex flex-row overflow-x-auto gap-4 mt-2  px-1 pb-2 scrollbar-hide">
      {data.map((item) => {
        const previewUrl = item.custom_fields._template_preview?.[0] || "#";
        // const downloadUrl = item.custom_fields._template_link?.[0] || "#";
        // const isPaid = item.custom_fields._template_paid?.[0] === "paid";
        // const price = item.custom_fields._template_price?.[0] || "0";

        return (
          <a
            key={item.id}
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[240px] max-w-[240px] bg-white border rounded-xl overflow-hidden shadow hover:shadow-md transition-all hover:scale-[1.02] shrink-0"
          >
            <img
              src={item.featured_image}
              alt={item.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-3">
              <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                {item.title}
              </h4>
            
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default TemplateCards;
