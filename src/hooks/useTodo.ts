"use client";

import { WEATHER_TYPE } from "@/constants/todo";
import { accentClickWeatherIcon } from "@/utils/Todo/todoData";
import React, { useState } from "react";

export const useTodos = () => {
  const [weather, setWeather] = useState<WEATHER_TYPE | null>(null);

  const handleWeatherClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const accentClick = accentClickWeatherIcon(e.currentTarget.alt);
    setWeather(accentClick);
  };

  return { weather, handleWeatherClick };
};
