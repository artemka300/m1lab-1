const Cart = {
    template: `
    <div class="container mt-4">
    <h2 class="fw-light">Корзина</h2>
</div>

<div class="container">

    <table class="table table-hover align-middle table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Наименование анализа</th>
                <th scope="col">Объект исследования</th>
                <th scope="col">Время выполнения</th>
                <th scope="col" colspan="2">Цена</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item , i) in $root.postcartarr.analyses">
                <th scope="row">{{i+1}}</th>
                <td>{{item.analysis_name}}</td>
                <td>{{item.research_object}}</td>
                <td>{{item.lead_time}} день</td>
                <td>{{item.price}} руб.</td>
                <td class="text-end"><button type="button" class="btn btn-outline-info"  @click="delcart(i)">Удалить</button></td>
            </tr>
            
            <tr v-for="(item , i) in $root.postcartarr.paid_research_objects">
                <th scope="row"  >&nbsp;</th>
                <td colspan="3"><b>Взятие биоматериала: {{item.research_object}}</b></td>
                <td colspan="2">{{item.cost_of_taking}} руб.</td>
            </tr> 
        </tbody>

    </table>

    <h4 class="mt-4">Итоговая стоимость: {{$root.postcartarrrub}} руб.</h4>

    <div class="row mt-4">
        <div class="col-auto">
            <form  >
                <button type="submit" class="btn btn-info"  v-if="delcartAll"   @click="postprofil()" >Оформить заказ</button>
            </form>
        </div>
        <div class="col-auto">
            <form   >
                <button type="submit" class="btn btn-outline-info" @click="delcartAlll()" v-if="delcartAll" >Очистить корзину</button>
            </form>
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
            form.append('cart', JSON.stringify(this.$root.cart ))
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