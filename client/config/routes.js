// const Todo = resolve => {
//     import('../views/todo/todo.vue').then(module => {
//         resolve(module)
//     })
// }
// const Login = resolve => {
//     import('../views/login/login.vue').then(module => {
//         resolve(module)
//     })
// }

export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        // path: '/app/:id',
        path: '/app',
        // props: true, // 将id等参数以props的方式传递到todo组件中(important)
        component: () => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue'),
        // components: { // 命名视图，同一个路径下面有多个组件
        //     default: Todo,
        //     footer: Login
        // },
        name: 'app',
        meta: {
            title: 'this is app',
            description: 'asdasd'
        },
        beforeEnter (to, from, next) {
            console.log('enter')
            next()
        }
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    }
]
