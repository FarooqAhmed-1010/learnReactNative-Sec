const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

const path = require('path')

const mockPath = path.join(__dirname, 'mock-modules/framer-motion/index.js')

const origResolveRequest = config.resolver.resolveRequest
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'framer-motion') {
    return {
      type: 'sourceFile',
      filePath: mockPath,
    }
  }
  if (origResolveRequest) {
    return origResolveRequest(context, moduleName, platform)
  }
  return context.resolveRequest(context, moduleName, platform)
}

module.exports = config
