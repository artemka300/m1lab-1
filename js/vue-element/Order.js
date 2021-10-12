const Order = {
    template: `


    <div class="container mt-4">
        <div class="row">
            <div class="col-auto">
                <h2 class="fw-light">Результаты исследований</h2>
            </div>
            <div class="col text-end">
                <button type="button" class="btn btn-outline-info" @click="$router.push('/lk-page')">Назад</button>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-auto"  v-for="(item,i) in   order_info">
                <h5>Информация о заказе</h5>
                <div class="row">
                    <div class="col-auto">
                        <h6 class="fst-italic">Статус</h6>
                        <p class="fw-bold text-success">Выполнен</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="fst-italic">№ заказа</h6>
                        <p>{{item.id}}</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="fst-italic">Дата заказа</h6>
                        <p>{{item.order_date}}</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="fst-italic">Цена</h6>
                        <p>{{item.price}} руб.</p>
                    </div>
                </div>
            </div>

            <div class="col-auto">
                <h5>Информация о пациенте</h5>
                <div class="row">
                    <div class="col-auto">
                        <h6 class="fst-italic">ФИО</h6>
                        <p>{{ user_info.name}}</p>
                    </div>
                    <div class="col-auto">
                        <h6 class="fst-italic">Дата рождения</h6>
                        <p>{{user_info.birthdate}}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="container">

        <table class="table table-hover"  v-for="(item,i) in   order_info">
            <tbody       v-for="(elem,h) in   item.research_result" >
                <tr class="table-secondary" >
                    <th class="text-center">{{h+1}}</th>
                    <th colspan="4">{{elem.analysis_name}}</th> 
                </tr>
                <tr class="text-secondary fst-italic">
                    <td>&nbsp;</td>
                    <td>Исследование</td>
                    <td>Значение</td>
                    <td>Ед.изм</td>
                    <td>Референсные значения</td>
                </tr>
                <Order-Cart :element=element v-for="(element) in  elem.result" ></Order-Cart>   
            </tbody>
        </table>

    </div>

 
        
    `,
    data() {
        return {
            order_info: {},
            user_info: {}
        }
    },
    mounted() {
        this.getparamid()
    },
    methods: {
        getparamid() {
            console.log('dfsdfsdfsdfds')
            fetch('http://lab/api/order/get/' + this.$route.params.id, {
                methods: "GET",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(r => r.json()).then(r => {
                if (r.data != undefined) {
                    this.user_info = r.data.user_info
                    this.order_info = r.data.order_info
                    console.log(r.data)
                }
            })
        }
    }
}

const OrderItem = {
    template:   `
                    <tr >
                    <td>&nbsp;</td>
                    <td>{{element.name}}</td>
                    <td    :class="{ 'text-danger':ifva}" >{{element.value}}</td>
                    <td>{{element.unit}}</td>
                    <td>{{element.reference_min}}-{{element.reference_max}}</td>
                </tr> 
    `,
    props:['element']
    ,
    data() {
        return {
            ifva:false
        }
    },
    mounted() {
        this.ifvul()
    },
    methods:{
        ifvul(){

            if ( this.element.value> this.element.reference_max || this.element.value< this.element.reference_min)
            {
                this.ifva = true
            }
        }
    }
}