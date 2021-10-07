const Cart = {
    template: `
    <div class="container mb-2 mt-5  ">
        <h1 class="mb-5">Корзина</h1>
        <div class="row">
            <div class="col-md-8">  
                <div class="row shadow   border-3 border   rounded-3 overflow-hidden mt-4"  v-for="(item , i) in $root.postcartarr.analyses">
                    <div class="col-md-7  bg-dark text-white  p-4">
                        <p>Наименование анализа</p>
                        <h6>{{item.analysis_name}}</h6>
                    </div>
                    <div class="col-md-3  bg-dark text-white  p-4">
                        <p>Объект исследования</p>
                        <h6>{{item.research_object}}</h6>
                    </div>
                    <div class="col-md-2  bg-dark text-white  p-4">
                        <p>Цена</p>
                        <h2>{{item.price}}р</h2>
                    </div>
                    <div class="col-md-2  p-4">
                        <button type="button" class="btn btn-danger" @click="delcart(i)">удалить</button>
                    </div>
                    <div class="col-md-4   d-flex  p-4" style="align-items: flex-end;">
                        <h6>Время выполнения: {{item.lead_time}} день</h6>
                    </div>
                </div>
                <div class="row pt-3 pb-3">
                    <div class="col-md-5      "  v-for="(item , i) in $root.postcartarr.paid_research_objects">
                        <p>Цена за взятие Биоматериала</p>
                        <h3>{{item.research_object}} {{item.cost_of_taking}}р</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-3 ms-2">
                <div class="row  mt-4   shadow   border-3 border   rounded-3 overflow-hidden  p-1 ">
                    <div class="row  mt-1">
                        <div class="row">
                            <div class="col-md-12">
                                <p>Сумма к оплате</p>
                                <h3>{{$root.postcartarrrub}}р</h3>
                            </div>
                        </div>
                        <div class="col-md-12 pt-2 pb-4">
                            <button type="button" class="btn btn-primary  mt-2"  v-if="delcartAll"   @click="postprofil()"> Оформить заказ</button>
                            <button type="button" class="btn btn-danger  mt-2"  @click="delcartAlll()" v-if="delcartAll">Очистить корзину</button>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
       

    </div>

    
    `,
    data() {
        return {
            delcartAll: true
        }
    },
    updated() {
        this.ifcart()
    },
    methods: {
        ifcart() {
            if (this.$root.cart.length == 0) {
                this.delcartAll = false;
            } else {
                this.delcartAll = true;
            }
        },
        delcart(i) {
            this.$root.cart.splice(i, 1)
            this.$root.postcart();
            this.ifcart()
        },
        delcartAlll() {
            this.$root.cart = []
            this.$root.postcart();
            this.ifcart()
        },
        postprofil() {
            const form = new FormData();
            form.append('cart', JSON.stringify(this.$root.cart))
            fetch('http://lab/api/order/create', {
                method: "POST",
                body: form,
                headers:{
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(r => {
                console.log(localStorage.getItem('token'))
                if (r.status == 401) {
                    this.$router.push('/login')
                }
                if (r.status == 204) {
                    this.$router.push('/lk-page')
                }
                console.log(r.json())
            })
        }
    }
}