const Home = {
    template: `
 
    <main>
    <section class="container">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="4000">
                    <img src="./assets/images/slider/1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Тест на коронавирус</h5>
                        <p>Исследование ПЦР. Cрок выполнения анализа: до 3 дней</p>
                        <button type="button" class="btn btn-outline-secondary">Подробнее</button>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/images/slider/2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Проверь уровень витамина D по выгодной цене</h5>
                        <p>Главный ресурс для защиты от эпидемий и сохранения тонуса</p>
                        <button type="button" class="btn btn-outline-secondary">Подробнее</button>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/images/slider/3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Биохимия крови</h5>
                        <p>Два комплекса для анализа биохимических показателей крови</p>
                        <button type="button" class="btn btn-outline-secondary">Подробнее</button>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="./assets/images/slider/4.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Возрастная скидка и бонусная программа</h5>
                        <p>Скидка 5% для пациентов до 25 и от 55 лет</p>
                        <button type="button" class="btn btn-outline-secondary">Подробнее</button>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Предыдущий</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Следующий</span>
            </button>
        </div>
    </section>

    <div class="container pt-5">
        <h2 class="fw-light">Лаборатория «ProLab46» – локомотив лабораторной диагностики.</h2>
        <p>Миссия лаборатории – предоставить пациентам передовые диагностические сервисы оценки состояния здоровья
            для повышения качества жизни и предупреждения возраст-зависимых заболеваний.</p>
    </div>

    <div class="container-lg mt-5 mb-5 pt-2 pb-2">
        <form action="search.html">
            <div class="input-group flex-nowrap">
                <input type="text" class="form-control" placeholder="Поиск медицинских анализов"
                    aria-label="Поиск медицинских анализов" aria-describedby="addon-wrapping" v-model="$root.homesearch.serach" >
                <button type="submit" class="btn btn-info search text-white" @click="getsearch()">Найти</button>
            </div>
        </form>
    </div>

    <div class="container">
        <h2 class="fw-light">Наши приемущества</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div class="col">
                <div class="card shadow-sm">
                    <img src="./assets/images/advantages/1.png">
                    <div class="card-body">
                        <p class="card-text">более 10 сотрудников включая известных ученых</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src="./assets/images/advantages/2.png">
                    <div class="card-body">
                        <p class="card-text">более 1000 видов анализов доступны для клиентов</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card shadow-sm">
                    <img src="./assets/images/advantages/3.png">
                    <div class="card-body">
                        <p class="card-text">более 400000 исследований проводятся ежегодно</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card shadow-sm">
                    <img src="./assets/images/advantages/4.png">
                    <div class="card-body">
                        <p class="card-text">более 100000 клиентов ежегодно доверяют нам свое здоровье</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container pt-5 pb-5">
        <h2 class="fw-light">Подписаться на закрытые акции</h2>
        <form class="row g-3">
            <div class="col-sm-4">
                <label for="email" class="visually-hidden">Email</label>
                <input type="email" class="form-control" id="email" placeholder="email@example.com">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-info mb-3">Подписаться</button>
            </div>
        </form>
    </div>
</main>

<footer class="bd-footer py-3 mt-3 bg-light">
    <div class="container py-3">
        <div class="row">
            <div class="col-lg-3 mb-3">
                <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/"
                    aria-label="ProLab46">
                    <img src="./assets/images/logo.png">
                    <span class="fs-5">ProLab46</span>
                </a>
                <ul class="list-unstyled small text-muted">
                    <li class="mb-2">Адрес «г. Курск, ул. Кати Зеленко, 77»</li>
                    <li class="mb-2">Телефон «8 (4712) 000-00-00»</li>
                </ul>
            </div>

            <div class="col">
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="http://xxxxxx-m1.wsr.ru" class="nav-link px-2 link-secondary">Главная</a></li>
                    <li><a href="http://xxxxxx-m1.wsr.ru/search" class="nav-link px-2 link-dark">Анализы</a></li>
                    <li><a href="http://xxxxxx-m1.wsr.ru/actions" class="nav-link px-2 link-dark">Акции</a></li>
                    <li><a href="http://xxxxxx-m1.wsr.ru/preparation" class="nav-link px-2 link-dark">Подготовка</a>
                    </li>
                    <li><a href="http://xxxxxx-m1.wsr.ru/home-visit" class="nav-link px-2 link-dark">Выезд на
                            дом</a></li>
                    <li><a href="http://xxxxxx-m1.wsr.ru/lk-page" class="nav-link px-2 link-dark">Личный кабинет</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</footer>
<footer class="bd-footer py-1 mt-1 bg-dark">
    <div class="container py-2 text-center text-uppercase text-white">О возможных противопоказаниях необходимо
        проконсультироваться со специалистом</div>
</footer>
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
