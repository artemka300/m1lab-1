const  LkPage={
    template :`

    <div class="container mt-4">
        <div class="row">
            <div class="col-auto">
                <h2 class="fw-light">Личный кабинет &mdash; мои заказы</h2>
            </div>
            <div class="col text-end">
                <button type="button" class="btn btn-outline-danger">Выход</button>
            </div>
        </div>
    </div>

    <div class="container-lg mt-4 mb-4 pt-2 pb-2  ">
        <div class="input-group flex-nowrap">
            <input  v-model="search"  type="text" class="form-control"
                placeholder="Поиск заказа по его номеру, дате создания или исследованию в его составе"
                aria-label="Поиск заказа по его номеру, дате создания или исследованию в его составе"
                aria-describedby="addon-wrapping">
            <button type="button" class="btn btn-info search text-white" @click="getlkpage('?query=')">Найти</button>
        </div>
        <span>По запросу «{{search}}» найдено {{$root.ikpagearr.length}} заказа</span>
    </div>

    <div class="container">

        <table class="table table-hover align-middle table-sm orders">
            <thead>
                <tr>
                    <th scope="col">Статус</th>
                    <th scope="col">№ заказа</th>
                    <th scope="col">Дата заказа</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr class="cursor-pointer" v-for="(item,i) in this.$root.ikpagearr " @click="getfeatchid(item.id,item.order_status)">
                    <th scope="row"><span class="text-muted">{{item.order_status}}</span></th>
                    <td><a  >{{item.id}}</a></td>
                    <td>{{item.order_date}}</td>
                    <td>{{item.price}} руб.</td>
                    <td class="text-end"><button type="button" class="btn btn-outline-info">Удалить</button></td>
                </tr>
            </tbody>

        </table>

    </div>
 
    `,
    data(){
        return{
            search:''
        }
    },

    mounted(){
      this.getlkpage();
    },
    methods:{
        getfeatchid(i,status){
            if (status=='Выполнен'){
                this.$router.push('/order/'+i)
            }
            else {
                alert('ждите')
            }
        },
        getid(i){
         console.log(i)
        },
        getlkpage(d=''){
        fetch('http://lab/api/order/search'+d+this.search,{
            methods: "GET",
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(r=>r.json()).then(r=>{
            if (r.data.items!=undefined)
            {
                this.$root.ikpagearr = r.data.items

                console.log(this.$root.ikpagearr)
            }
        })
    }
    }
}