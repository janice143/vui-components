import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由引入

const Home = () => import('@/views/Home')
const Compo = () => import('@/views/Compo')
const AboutVUI = () => import('@/components/AboutVUI')


// 组件有关
const start = () => import('@/examples/start')
const alerts = () => import('@/examples/alerts')
const avatar = () => import('@/examples/avatar')
const badge = () => import("../examples/badge");
const button = () => import('@/examples/button')
const chatbox = () => import("../examples/chatbox");
const dialog = () => import("../examples/dialog");
const dropdown = () => import("../examples/dropdown");
const link = () => import("../examples/link");
const loading = () => import("../examples/loading");
const message = () => import("../examples/message");
const notification = () => import("../examples/notification");

const rate = () => import("../examples/rate");
const scrollbar = () => import("../examples/scrollbar");
const skeleton = () => import("../examples/skeleton");
const steps = () => import("../examples/steps");
const switches = () => import("../examples/switches");

const tabs = () => import("../examples/tabs");
const tree = () => import("../examples/tree");
const calendar = () => import("../examples/calendar");
const datepicker = () => import("../examples/datepicker");


const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: '/aboutvui',
        component: AboutVUI,
      },
    ]
  },

  {
    path: "/components",
    redirect: "/components/start",
    component: Compo,
    children: [
      {
        path: "start",
        component: start,
      },
      {
        path: "alerts",
        component: alerts,
      },
      {
        path: "avatar",
        component: avatar,
      },
      {
        path: "badge",
        component: badge,
      },
      {
        path: "button",
        component: button,
      },
      {
        path: "chatbox",
        component: chatbox,
      },
      {
        path: "dialog",
        component: dialog,
      },
      {
        path: "dropdown",
        component: dropdown,
      },
      {
        path: "link",
        component: link,
      },
      {
        path: "loading",
        component: loading,
      },
      {
        path: "message",
        component: message,
      },
      {
        path: "notification",
        component: notification,
      },
      {
        path: "rate",
        component: rate,
      },
      {
        path: "scrollbar",
        component: scrollbar,
      },
      {
        path: "skeleton",
        component: skeleton,
      },
      {
        path: "steps",
        component: steps,
      },
      {
        path: "switch",
        component: switches,
      },
      {
        path: "tabs",
        component: tabs,
      },
      {
        path: "tree",
        component: tree,
      },
      {
        path: "calendar",
        component: calendar,
      },
      {
        path: "datepicker",
        component: datepicker,
      },

    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to.hash)
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
        // bypass #1number check
        if (document.querySelector(to.hash)) {
          return position
        }
      }
      return { x: 0, y: 0 }
    }

  },
});

export default router;