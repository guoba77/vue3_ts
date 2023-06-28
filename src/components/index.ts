import SvgIcon from './SvgIcon/index.vue'
const components = { SvgIcon }
export default {
  install(app) {
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)) {
        const element = components[key]
        app.component(key, element)
      }
    }
  },
}
