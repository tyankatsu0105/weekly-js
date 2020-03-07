const fs = require('fs')
const path = require('path')

const appPath = path.join(process.cwd(), 'src', 'app')
const jsonPath = path.join(process.cwd(), 'src', 'data.json')

const dir = fs.readdirSync(appPath).map(path => `app/${path}`)


// {
//   data: [
//     'app/20200302',
//     'app/20200309',
//   ]
// }
const result = {
  data: dir
}
fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2))