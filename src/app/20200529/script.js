const result1 = document.getElementById('js--result-1');
const result2 = document.getElementById('js--result-2');
const startButton = document.getElementById('js--start-button');

const getJson = async (name) => {
  const res = await fetch(name);
  const json = await res.json();
  return json
}

const createRandomInt = (length) => Math.floor(Math.random() * ((length - 1) - 0 + 1)) + 0

const getData = (data, index) => data[index]

const main = async () => {
  const data1 = await getJson('data1.json')
  const data2 = await getJson('data2.json');

  const dataFromData1 = getData(data1, createRandomInt(data1.length))
  const dataFromData2 = getData(data2, createRandomInt(data2.length))

  result1.innerText = dataFromData1
  result2.innerText = dataFromData2
}

startButton.onclick = main;