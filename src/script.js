const list = document.getElementById('list');

const main = async () => {
  const fetchedData = await fetch('data.json')
  const {data} = await fetchedData.json();

  data.map(path=> {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.setAttribute('href', path);
    a.textContent = path;

    li.appendChild(a);

    list.appendChild(li)
  })
}

main()

