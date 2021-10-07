const Order = {
    template: `
       <div class="container">
        <h1 class="mb-5">результаты анализа</h1>
        <div class="row w-50 shadow border-3 border   rounded-3 overflow-hidden mt-4">
        
                <div class="col-md-6  bg-dark text-white   p-4">
                    <p>ФИО</p>
                    <h3>{{ user_info.name}}</h3>
                </div>
                <div class="col-md-6  bg-dark text-white  p-4">
                    <p>Дата рождения</p>
                    <h3>{{ user_info.birthdate}}</h3>   
            </div>
        </div> 
        <div  v-for="(item,i) in   order_info">
         <div class="row shadow border-3 border   rounded-3 overflow-hidden mt-4" >
            <div class="col-md-3   bg-success text-white    p-4">
                <p>Статус</p>
                <h3>готов</h3>
            </div>
            <div class="col-md-3  bg-dark text-white   p-4">
                <p>№ заказа</p>
                <h3>{{item.id}}</h3>
            </div>
            <div class="col-md-3  bg-dark text-white   p-4">
                <p>Дата заказа</p>
                <h3>{{item.order_date}}</h3>
            </div>
            <div class="col-md-3  bg-dark text-white   p-4">
                <p>Цена</p>
                <h3>{{item.price}}р</h3>
            </div>
        </div>
        <div  v-for="(elem,h) in   item.research_result">
        <div class="row shadow border-3 border   rounded-3 overflow-hidden mt-4" >
            <div class="col-md-12 bg-dark text-white  p-4">
                <p>Исследование</p>
                <h2>{{elem.analysis_name}}</h2>
            </div>
             
        </div>
         <div class="row shadow border-3 border ms-5   rounded-3 overflow-hidden mt-4"  v-for="(element) in  elem.result" >
            <div class="col-md-5 bg-dark text-white  p-4">
                <p>Исследование</p>
                <h6>{{element.name}}</h6>
            </div>
            <div class="col-md-2  bg-success text-white  p-4">
                <p>Значение</p>
                <h5>{{element.value}}</h5>
            </div> 
            <div class="col-md-3  bg-warning text-dar p-4">
                <p>Референсные значения</p>
                <h5>{{element.reference_min}}-{{element.reference_max}}</h5>
            </div>
            <div class="col-md-2  bg-dark text-white  p-4">
                <p>Единица измеренияа</p>
                <h5>{{element.unit}}</h5>
            </div>
        </div>
</div>
        
        </div>
       

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