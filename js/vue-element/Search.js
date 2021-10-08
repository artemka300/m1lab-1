const Search = {
    template:`

    <div class="container mt-4">
        <h2 class="fw-light">Анализы в курске</h2>
    </div>

    <div class="container-lg mt-4 mb-4 pt-2 pb-2  ">
        <div class="input-group flex-nowrap">
            <input type="text" class="form-control" placeholder="Поиск медицинских анализов"
                aria-label="Поиск медицинских анализов" aria-describedby="addon-wrapping" v-model="$root.homesearch.serach">
            <button type="button" class="btn btn-info search text-white" @click="getsearch()">Найти</button>
        </div>
        <span>По запросу «{{$root.homesearch.serach}}» найдено {{$root.homesearch.searchArr.length}} анализа</span>
    </div>

    <div class="container">

        <table class="table table-hover align-middle table-sm">
            <thead>
                <tr>
                    <th scope="col">Наименование анализа</th>
                    <th scope="col">Объект исследования</th>
                    <th scope="col">Время выполнения</th>
                    <th scope="col" colspan="2">Цена</th>
                </tr>
            </thead>
            <tbody>
            <Search-Cart   :itemarr=item  v-for="(item,index) in $root.homesearch.searchArr"/>   
            </tbody>

        </table>

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