export const accentClickWeatherIcon = (userClick: string) => {
  switch (userClick) {
    case "구름": {
      return "CLOUD";
    }
    case "햇빛": {
      return "SUN";
    }
    case "비": {
      return "RAIN";
    }
    default: {
      return null;
    }
  }
};
