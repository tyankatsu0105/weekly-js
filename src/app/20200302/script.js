const TAX_RATE = 0.1;
const tBody = document.getElementById('js--tbody')

const escapeHTML = (text) => {
  if (typeof text !== 'string') return text;

  return text.replace(/&/, '&amp;')
  .replace(/</, '&lt;')
  .replace(/>/, '&gt;')
  .replace(/"/, '&quot;')
  .replace(/'/, '&#39;')

}

const createTableBody = (data) => {
  const result = data.map(item => 
    `
    <tr>
      <td>${escapeHTML(item.name)}</td>
      <td>${escapeHTML(item.stockQuantity)}</td>
      <td>${escapeHTML(item.price)}</td>
      <td>${escapeHTML(item.price + (item.price * TAX_RATE))}</td>
    </tr>
    `
).join('')
tBody.innerHTML = result
}

const main = async() => {
  const fetchedData = await fetch('./data.json')
  const { data } = await fetchedData.json()
  createTableBody(data)
}

main();