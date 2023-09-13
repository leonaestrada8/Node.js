// 3.2 Metereologia

class WeatherData {
    constructor(temperatures, humidities, pressures) {
      this.temperatures = temperatures;
      this.humidities = humidities;
      this.pressures = pressures;
    }
  
    calculateStatistics(data) {
      let average = 0;
      let minimum = data[0];
      let maximum = data[0];
  
      for (const value of data) {
        average += value;
        if (value < minimum) minimum = value;
        if (value > maximum) maximum = value;
      }
  
      average /= data.length;
  
      console.log('Média:', average);
      console.log('Mínima:', minimum);
      console.log('Máxima:', maximum);
    }
  
    report() {
      console.log('Estatísticas de Temperatura:');
      this.calculateStatistics(this.temperatures);
  
      console.log('\nEstatísticas de Umidade:');
      this.calculateStatistics(this.humidities);
  
      console.log('\nEstatísticas de Pressão:');
      this.calculateStatistics(this.pressures);
    }
  }
  
  const temperatures = [20, 22, 18, 19, 23];
  const humidities = [60, 55, 58, 57, 59];
  const pressures = [1000, 1005, 999, 1003, 1001];
  
  const weatherData = new WeatherData(temperatures, humidities, pressures);
  weatherData.report();
  