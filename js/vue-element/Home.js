const Home = {
    template: `
{{$root.homesearch.searchArr}}
      <div class="slaider">
        <div class="arrow">
            <div class="arrowsl"><img src="./image/play.png" height="40" alt="" srcset=""></div>
            <div class="arrowsr"><img src="./image/play.png" height="40" alt="" srcset=""></div>
        </div>

        <div class="slaiders">
            <div class="slaider_content ">
                <div class="slaider_content_text">
                    <h3>Тест на коронавирус <span>за 5 часов</span></h3>
                    <p><span>✓</span> Выявляет антитела к возбудителю инфекции — иммунные клетки, которые вырабатываются
                        в организме человека в результате его контакта с вирусом</p>
                    <p><span>✓</span> Иммунохроматографический экспресс-тест</p>
                    <p><span>✓</span> биоматериала Кровь капиллярная/кровь из вены</p>
                    <button type="button" class="btn btn-primary">Подробнее</button>
                </div>
                <div class="slaider_content_img">
                    <img src="./image/slaider/sliader1.jpg" alt="">
                </div>
            </div>
            <div class="slaider_content ">
                <div class="slaider_content_text">
                    <h3> Большой спектр медицинских <span>анализов</span></h3>
                    <p><span>✓</span> Выезд на дом</p>
                    <p><span>✓</span> Доступные цены</p>
                    <p><span>✓</span> Результаты онлайн</p>
                    <p><span>✓</span> Высокоточное оборудование</p>
                    <button type="button" class="btn btn-primary">Подробнее</button>
                </div>
                <div class="slaider_content_img">
                    <img src="./image/slaider/sliader2.jpg" alt="">
                </div>
            </div>

        </div>
    </div>


    <div class="container-lg mt-5 mb-5 pt-5 pb-5  ">
        <div class="input-group flex-nowrap">

            <input type="text" class="form-control" placeholder="поиск медицинского анализов" v-model="$root.homesearch.serach" aria-label="анализы"
                   aria-describedby="addon-wrapping">
            <button type="button" class="btn btn-primary searc" @click="getsearch()">🔍</button>
        </div>
    </div>


    <div class="container-fluid    bg-success ">
        <div class="row p-5" style="align-items: flex-end;">
            <h1 class=" text-light ">Преимущества лаборатории</h1>
            <div class="col-md-3 mr-4 p-4 mb-3  ">
                <img src="./image/advantages/1.png" class="img-fluid " height="350" alt="" srcset="">
                <h3 class="text-light">более 10 сотрудников включая известных ученых</h2>
            </div>
            <div class="col-md-3 mr-4 p-4 mb-3">
                <img src="./image/advantages/2.png" class="img-fluid" height="350" alt="" srcset="">
                <h3 class="text-light">более 1000 видов анализов доступны для клиентов</h2>
            </div>
            <div class="col-md-3 mr-4 p-4 mb-3">
                <img src="./image/advantages/3.png" class="img-fluid" height="350" alt="" srcset="">
                <h3 class="text-light">более 400000 исследований проводятся ежегодно</h2>
            </div>
            <div class="col-md-3 mr-4 p-4 mb-3">
                <img src="./image/advantages/4.png" class="img-fluid" height="350" alt="" srcset="">
                <h3 class="text-light">более 100000 клиентов ежегодно доверяют нам свое здоровье</h2>
            </div>
        </div>
    </div>

    <div class="container   mb-5  p-5 bg-light bg-gradient  mt-5 shadow-lg ">
        <h1 class="font-weight-normal ">Подписка на акции</h1>
        <div class="mb-3    row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
            </div>
        </div>
        <div class="mb-3 row">
            <button type="submit" class="btn btn-primary  ">подписаться</button>
        </div>
    </div>

    <div class="container-fluid   bg-dark  ">
        <div class=" row">
            <div class="col-md-4 d-flex">
                <a class="nav-link text-white" href="./actions.html">actions</a>
                <a class="nav-link text-white" href="./cart.html">cart</a>
                <a class="nav-link text-white" href="./lk-page.html">lk-page</a>
                <a class="nav-link text-white" href="./login.html">login</a>
                <a class="nav-link text-white" href="./order.html">order</a>
                <a class="nav-link text-white" href="./register.html">register</a>
                <a class="nav-link text-white" href="./search.html">search</a>
            </div>
        </div>
    </div>

    `,
    data(){
        return{

        }
    },
    methods:{
        getsearch()
        {
            fetch( `http://lab/api/search?query=${this.$root.homesearch.serach}` ).then(r=>r.json()).then(r=>{this.$root.homesearch.searchArr=r.data.items ; console.log(r.data.items)})
            this.$router.push('/search')
        }
    }
}
