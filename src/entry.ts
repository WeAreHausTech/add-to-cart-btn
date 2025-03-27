import { WidgetsRenderer } from '../../widgets-renderer/src/widgets-renderer'

const widgetModules = import.meta.glob('@haus-storefront-widgets/*/dist/index.js')

async function bootstrap() {
  const factories = {}
  for (const path in widgetModules) {
    const mod = await widgetModules[path]()
    Object.assign(factories, mod.default || mod)
  }
  new WidgetsRenderer({ provider:'vendure', updates:{}, options:{} }, factories).init()
}

bootstrap()