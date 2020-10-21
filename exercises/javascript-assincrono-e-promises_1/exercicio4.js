const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (temperatura) => {
    temperatura = getMarsTemperature();
    console.log(`Mars temperature is: ${temperatura} degree Celsius`)
}

setTimeout((sendMarsTemperature), 5000); // imprime "Mars temperature is: 20 degree Celsius", por exemplo