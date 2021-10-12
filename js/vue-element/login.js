const Login = {
    template: `
    <div class="container col-md-5 vh-100 d-flex align-items-center justify-content-center">
    
    <section class="mt-5 w-75">
        <h2 class="mb-5 text-center">Вход в личный кабинет</h2>

        <form  >
            <div class="row">
                <div class="col-12">
                    <input type="text" class="form-control  " :class="{'is-invalid':tellerr}" placeholder="Телефон" v-model="Phone">
                    <div class="invalid-feedback">{{eerarr}}</div>
                </div>
                <div class="col-12 mt-2">
                    <input type="password" class="form-control" placeholder="Пароль" v-model="password">
             
                </div>
                <div class="col-12 mt-4">
                    <button class="btn btn-info w-100" @click="postlogin()">Войти</button>
                    
                    <div class="text-center mt-2">
                        <a  @click="$router.push('/register')">Регистрация</a>
                        |
                        <a  @click="$router.push('/')">На главную</a>
                    </div>
                
                </div>
            </div>
        </form>
    </section>

</div>
    `,
    date() {
        return {
            Phone: '',
            password: '',
            tellerr: false,
            eerarr: '',
        }
    },
    methods: {
        postlogin() {
            const form = new FormData();
            form.append('phone', this.Phone)
            form.append('password', this.password)
            fetch('http://lab/api/login', {
                method: 'POST',
                body: form
            }).then(r => r.json()).then(r => {
                if (r.error!=undefined ) {
                    this.tellerr =true
                    this.eerarr = r.error.errors.phone[0]
                }
                if (r.data.token != undefined) {
                    this.getif = false
                    localStorage.setItem('token', r.data.token)
                    this.$router.push('/')
                }

            })
        }
    }
}