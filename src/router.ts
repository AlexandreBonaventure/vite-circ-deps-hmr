import { createRouter, createWebHistory } from 'vue-router'
import deepmerge from 'deepmerge'
import { currentId } from './singletons'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/:id?',
        name: 'home',
        component: () => import('./components/HomeRoute.vue')
    }]
})

router.beforeEach(async (to, from) => {
    debugger
  if (!to.params.id) {
    const { name, path, query, params } = to;
    return deepmerge({ name, path, query, params }, { params: { id: currentId.value } });
  } else {
    currentId.value = to.params.id as string;
  }
});
export { router }
