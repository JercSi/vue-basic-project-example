import { routes as ModuleA } from "./ModuleA/routes";
import { routes as ModuleB } from "./ModuleB/routes";


// Static pages
import StaticView from "@/views/StaticView.vue";
const customRoutes = [
  {
    path: "/static-content.html",
    name: "StaticView",
    component: StaticView
  },
  {
    path: '*',
    redirect: '/'
  }
]

export const routes = [...ModuleA, ...ModuleB, ...customRoutes];
