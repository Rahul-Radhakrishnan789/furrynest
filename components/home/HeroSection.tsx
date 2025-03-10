"use client";
import React from "react";
import { ColourfulText } from "../ui/colourful-text";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../ui/text-generate-effect";


const subTitle  = `We offer pet food, grooming, and shelter, all in one place ...`

export const HeroSection = () => {

  const placeholders = [
    "Search Your Location",
    "Get In Affordable Prices",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

    return (
      <div className="flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-h-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-16 @[480px]:px-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/images/headerImage.jpg")',
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold  text-white relative z-2 font-sans">
        The All you Need <br />For your <ColourfulText text="Soul" /> 
      </h1>
        <TextGenerateEffect duration={2} filter={false} words={subTitle} />
                </div>
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
             <div className="w-[25rem] flex flex-col justify-center  items-center">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };