const  LkPage={
    template :`
        <div class="container-lg mt-5 mb-5 pt-5 pb-5  ">
        <h1 class="mb-5">личный кабинет </h1>
        <div class="input-group flex-nowrap ">
         
            <input type="text" v-model="search" class="form-control  border   border-3 border-dark"  placeholder="поиск медицинского анализов" aria-label="анализы"
              aria-describedby="addon-wrapping">
              <button  type="button" class="btn btn-primary searc"  @click="getlkpage('?query=')">🔍</button>
          </div>
          <h5 class="mb-2">Найдено по запросу «{{search}}» </h5>
    </div>
    <div class="container">
   
        <div class="row shadow border-3 border   rounded-3 overflow-hidden mt-4" v-for="(item,i) in this.$root.ikpagearr " @click="getfeatchid(item.id,item.order_status)">
            <div class="col-md-3 bg-dark text-white  pt-3"    >
                <p>Статус</p>
                <h6>{{item.order_status}}</h6>
            </div>
            <div class="col-md-3  bg-dark text-white  pt-3">
                <p>№ заказа</p>
                <h5>{{item.id}}</h5>
            </div>
            <div class="col-md-4  bg-dark text-white  pt-3">
                <p>Дата заказа</p>
                <h5>{{item.order_date}}</h5>
            </div>
      
            <div class="col-md-2  bg-dark text-white  pt-3">
                <p>Цена</p>
                <h4>{{item.price}}р</h4>
            </div>
        </div>      
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