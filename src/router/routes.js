import { routes as ModuleA }from './ModuleA/routes'
import { routes as ModuleB }from './ModuleB/routes'

export const routes = [ ...ModuleA, ...ModuleB] 