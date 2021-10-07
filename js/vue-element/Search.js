const Search = {
    template:`
       <div class="container-lg mt-5 mb-5 pt-5 pb-5   ">
        <h1 class="mb-4">Поиск</h1>
        <div class="input-group flex-nowrap ">
         
          <input type="text" class="form-control  border   border-3 border-dark" v-model="$root.homesearch.serach" placeholder="поиск медицинского анализов" aria-label="анализы"
            aria-describedby="addon-wrapping">
            <button type="button" class="btn btn-primary searc"  @click="getsearch()" >🔍</button>
        </div>
        <h5 class="mb-2">Найдено по запросу «{{$root.homesearch.serach}}» </h5>
    </div>
   
    <div class="container mb-5" >
    <Search-Cart   :itemarr=item  v-for="(item,index) in $root.homesearch.searchArr"/>       
    </div>
 
    `,
    data() {
        return {

        };
    },
    methods:{
        getsearch()
        {
            fetch( `http://lab/api/search?query=${this.$root.homesearch.serach}` ).then(r=>r.json()).then(r=>{this.$root.homesearch.searchArr=r.data.items ; console.log(r.data.items)})
        },

    }
}