import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo.vue'
import Todo2 from '@/components/Todo2.vue'
import MyTodo from '@/components/MyTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoPage',
      component: Todo
    },
    {
      path: '/2',
      name: 'ToDoPage2',
      component: Todo2
    },
    {
      path: '/mytodo',
      name: 'MyToDo',
      component: MyTodo
    }
  
   
  ]
})
