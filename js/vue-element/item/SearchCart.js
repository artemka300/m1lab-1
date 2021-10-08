const SearchCart = {
    template:
    `<tr> 
        <td>{{itemarr.analysis_name}}</td>
        <td>{{itemarr.research_object}}</td>
        <td>{{itemarr.lead_time}} день</td>
        <td>{{itemarr.price}} руб.</td>
        <td class="text-end"><button type="button" v-if="!clickon"   class="btn btn-outline-info" @click="delcart()">Из корзины</button>
        <button type="button" v-if="clickon"  class="btn btn-outline-info" @click="addcart(itemarr.id)"> В корзину</button>
        </td>
 
        <tr>
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