const Login = {
    template: `
    <div class="container col-md-5 vh-100 d-flex align-items-center justify-content-center">
    
    <section class="mt-5 w-75">
        <h2 class="mb-5 text-center">Вход в личный кабинет</h2>

        <form  >
            <div class="row">
                <div class="col-12">
                    <input type="text" class="form-control is-invalid" placeholder="Телефон" v-model="Phone">
                    <div class="invalid-feedback">Сообщение об ошибке</div>
                </div>
                <div class="col-12 mt-2">
                    <input type="password" class="form-control" placeholder="Пароль" v-model="password">
                    <div class="invalid-feedback">Сообщение об ошибке</div>
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

         Phone:'',
         password:'',
            getif:true
        }
    },
    methods:{
        postlogin(){
            const  form= new  FormData();
            form.append('phone',this.Phone)
            form.append('password',this.password)
            fetch('http://lab/api/login',{
                method:'POST',
                body:form
            }).then(r=> r.json()).then(r=>{
                if (r.data.token!=undefined)
                {
                    localStorage.setItem('token',r.data.token)
                    console.log(r.data)
                    this.$router.push('/')
                }
            })
        }
    }
}