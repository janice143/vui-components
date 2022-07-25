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
        // meta: {
        //   index: -1,
        // },
      },
      {
        path: "alerts",
        component: alerts,
        // meta: {
        //   index: -1,
        // },
      },
      {
        path: "avatar",
        component: avatar,
        // meta: {
        //   index: 0,
        // },
      },
      {
        path: "badge",
        component: badge,
      },
      {
        path: "button",
        component: button,
        // meta: {
        //   index: 1,
        // },
      },
      {
        path: "chatbox",
        component: chatbox,
        // meta: {
        //   index: 2,
        // },
      },
      {
        path: "dialog",
        component: dialog,
        meta: {
          index: 5,
        },
      },
      {
        path: "dropdown",
        component: dropdown,
        // meta: {
        //   index: 8,
        // },
      },
      {
        path: "link",
        component: link,
        // meta: {
        //   index: 6,
        // },
      },
      {
        path: "loading",
        component: loading,
        // meta: {
        //   index: 7,
        // },
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
        meta: {
          index: 10,
        },
      },
      {
        path: "skeleton",
        component: skeleton,
      },
      {
        path: "steps",
        component: steps,

        meta: {
          index: 11,
        },
      },
      {
        path: "switch",
        component: switches,
        meta: {
          index: 12,
        },
      },
      {
        path: "tabs",
        component: tabs,
        meta: {
          index: 13,
        },
      },
      {
        path: "tree",
        component: tree,

        meta: {
          index: 14,
        },
      },

    ],
  },
];

const router = new VueRouter({
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