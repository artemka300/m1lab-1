const SearchCart = {
    template:
        `
        <div class="row shadow border-3 border   rounded-3 overflow-hidden mt-4"  >
            <div class="col-md-6  bg-dark text-white  pt-3">
                <p>Наименование анализа</p>
                <h5>{{itemarr.analysis_name}}</h5>
            </div>
            <div class="col-md-2  bg-dark text-white  pt-3">
                <p>Объект исследования</p>
                <h5>{{itemarr.research_object}}</h5>
            </div>
      
            <div class="col-md-2  bg-dark text-white  pt-3">
                <p>Цена</p>
                <h4>{{itemarr.price}}</h4>
            </div>
            <div class="col-md-2 bg-dark text-white   p-4">
                <button type="button" v-if="clickon" class="btn btn-primary" @click="addcart(itemarr.id)">добавить в корзину</button>
                 <button type="button"  v-else class="btn btn-success"  @click="delcart()" >добавлен в корзину</button>
            </div>
            <div class="col-md-4  bg-light bg-gradient pt-3  pb-1">
                <h6>Время выполнения: {{itemarr.lead_time}} день</h6>
            </div>
        `
    ,
    props:[
        'itemarr'
    ],
    data(){
        return{
            clickon:true,
            elarr:0
        }
    },
    methods:{

        addcart(namder)
        {
            this.$root.cart.push(namder);
            this.clickon= false;
            this.elarr=this.$root.cart.length
            this.$root.postcart()

        },
        delcart()
        {
            this.clickon= true;
            this.$root.cart.splice(this.elarr-1,this.elarr)
            this.$root.postcart()
        }
    }

}