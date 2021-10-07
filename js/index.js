const About = {template: '<div>About</div>'}
const App = Vue.createApp({
    data() {
        return {
            homesearch: {
                serach: '',
                searchArr: {}
            },
            cart: [],
            ikpagearr: {},

            postcartarr: {},
            postcartarrlength: 0,
            postcartarrrub: 0
        }
    },
    methods: {
        postcart() {

            const form = new FormData();
            form.append('cart', JSON.stringify(this.$root.cart))
            fetch(`http://lab/api/cart`, {
                method: 'POST',
                body: form
            }).then(r => r.json()).then(r => {
                this.$root.postcartarr = r.data;
                this.$root.postcartarrlength = this.$root.postcartarr.analyses.length;
                this.$root.postcartarrrub = 0;
                this.$root.postcartarr.analyses.forEach((etem) => {
                    this.$root.postcartarrrub += etem.price
                })
                this.$root.postcartarr.paid_research_objects.forEach((etem) => {
                    this.$root.postcartarrrub += etem.cost_of_taking
                })
                console.log(this.$root.postcartarr)
            })

        }
    }
})

const routes = [
    {path: '/', component: Home},
    {path: '/search', component: Search},
    {path: '/cart', component: Cart},
    {path: '/login', component: Login},
    {path: '/lk-page', component: LkPage},
    {path: '/reg', component: Reg},
    {path: '/order/:id', component: Order},
    {path: '/about', component: About}
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

App.use(router);
App.component('Search-Cart', SearchCart);
App.mount('#app');
