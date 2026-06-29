const fs = require('fs')
const path = require('path')

const files = [
  'node_modules/moti/src/components/safe-area-view.tsx',
  'node_modules/moti/build/components/safe-area-view.js',
]

for (const relPath of files) {
  const filePath = path.join(__dirname, '..', relPath)
  if (!fs.existsSync(filePath)) continue
  let content = fs.readFileSync(filePath, 'utf8')
  const oldImport = "import { SafeAreaView as RSafeAreaView } from 'react-native'"
  const newImport = "import { SafeAreaView as RSafeAreaView } from 'react-native-safe-area-context'"
  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImport)
    fs.writeFileSync(filePath, content)
    console.log(`Patched: ${relPath}`)
  }
}
