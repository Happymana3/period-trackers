// src/Helpers/Calculate.js
export const calculateOvulation = (startDate) => {
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(ovulationDate.getDate() + 14);
    return ovulationDate.toISOString().split('T')[0];
  };
  
  export const calculateLutealPhase = (endDate) => {
    const lutealPhaseDate = new Date(endDate);
    lutealPhaseDate.setDate(lutealPhaseDate.getDate() - 14);
    return lutealPhaseDate.toISOString().split('T')[0];
  };
  
  export const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };
  