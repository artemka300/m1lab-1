const SearchCart = {
    template:
    `<tr> 
        <td>{{itemarr.analysis_name}}</td>
        <td>{{itemarr.research_object}}</td>
        <td>{{itemarr.lead_time}} день</td>
        <td>{{itemarr.price}} руб.</td>
        <td class="text-end"><button type="button" v-if="!clickon"   class="btn btn-outline-info" @click="delcart(itemarr.id)">Из корзины</button>
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
        }
    },
    methods:{

        addcart(id)
        {
            this.$root.cart.push(id);
            this.clickon= false;
            this.$root.postcart()
        },
        delcart(id)
        {
            this.clickon= true;
            this.$root.cart.splice(this.$root.cart.indexOf(id),1)
            this.$root.postcart()
        }
    }

}