const Reg = {
    template:`

    <div class="container col-lg-5 col-md-6 vh-100 d-flex align-items-center justify-content-center">

        <section class="mt-5 w-75">
            <h2 class="mb-5 text-center">Регистрация</h2>

            <form  >
                <div class="row">
                    <div class="col-12 mt-2">
                        <input type="text" class="form-control mt-2 is-invalid" placeholder="Фамилия" v-model="last_name" >
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input type="text" class="form-control mt-2" placeholder="Имя" v-model="first_name">
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input type="text" class="form-control mt-2" placeholder="Отчество" v-model="patronymic" >
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>

                    <div class="row mt-3">
                        <div class="form-check col-auto">
                            <label class="form-check-label">Пол:</label>
                        </div>
                        <div class="form-check col-auto">
                            <input class="form-check-input is-invalid" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  v-model="gender">
                            <label class="form-check-label" for="flexRadioDefault1">
                                Мужской
                            </label>
                            
                        </div>
                        <div class="form-check col-auto is-invalid">
                            <input class="form-check-input is-invalid" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="gender">
                            <label class="form-check-label" for="flexRadioDefault2">
                                Женский
                            </label>
                        </div>
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>

                    <div class="col-12  mt-2">
                        <input type="date" class="form-control mt-2" placeholder="Дата рождения"  v-model="birthdate" >
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>
                    <div class="col-12  mt-2">
                        <input type="tel" class="form-control mt-2" placeholder="Телефон" v-model="phone">
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>

                    <div class="col-12 mt-2">
                        <input type="password" class="form-control mt-2" placeholder="Пароль" v-model="password" >
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input type="password" class="form-control mt-2" placeholder="Повторите пароль"  v-model="password2" >
                        <div class="invalid-feedback">Сообщение об ошибке</div>
                    </div>
                    <div class="col-12 mt-4">
                        <button class="btn btn-info w-100" @click="postlogin()">Зарегистрироваться</button>

                        <div class="text-center mt-2">
                            Уже есть аккаунт? <a @click="$router.push('/login')" class="test-2-blgn">Войти</a>
                            или
                            <a @click="$router.push('/')"class="test-2-bbhm">На главную</a>
                        </div>

                    </div>
                </div>
            </form>
        </section>

    </div>
 

    `,
    date() {
        return {
            last_name: '',
            first_name: '',
            patronymic: '',
            gender:'',
            birthdate:'',
            Phone: '',
            password: '',
            password2: '',
            getif: true
        }
    },
    methods: {
        postlogin() {
            console.log(this.birthdate)
            const form = new FormData();
            form.append('last_name', this.last_name)
            form.append('first_name', this.first_name)
            form.append('patronymic', this.patronymic)
            form.append('gender', this.gender)
            form.append('birthdate', this.birthdate)
            form.append('phone', this.Phone)
            form.append('password', this.password)
            fetch('http://lab/api/register', {
                method: 'POST',
                body: form
            }).then(r => {
                if ( this.password == this.password2)
                {
                    if (r.status= 204) {
                        console.log(r)
                        this.$router.push('/login')
                    }
                }

            })
        }
    }
}