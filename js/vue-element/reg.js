const Reg = {
    template:`
        <div class="container vh-100 d-flex align-items-center justify-content-center">
        <section class="mt-5 w-75">
            <h2 class="mb-5 text-center">sign up</h2>
            <form>
                <div class="row">
                    <div class="col-12  mt-2">
                        <input type="text" class="form-control mt-2 test-1-fpn" v-model="last_name"  placeholder="Фамилия">
                        <div class="invalid-feedback test-1-emph">Error message</div>
                    </div>
                    <div class="col-12  mt-2">
                        <input type="text" class="form-control mt-2 test-1-fpn"  v-model="first_name" placeholder="Имя">
                        <div class="invalid-feedback test-1-emph">Error message</div>
                    </div>
                    <div class="col-12  mt-2">
                        <input type="text" class="form-control   mt-2 test-1-fpn" v-model="patronymic"  placeholder="Отчество">
                        <div class="invalid-feedback test-1-emph">Error message</div>
                    </div>
                    <div class="col-md-12  mt-3">
                        <select id="inputState" class="form-select " v-model="gender" >
                          <option selected>male</option>
                          <option>female</option>
                        </select>
                      </div>
                    <div class="col-12  mt-2">
                        <input type="date" class="form-control  test-1-fpn" v-model="birthdate"  placeholder="Дата рождения">
                        <div class="invalid-feedback test-1-emph">Error message</div>
                    </div>
                    <div class="col-12  mt-2">
                        <input type="tel" class="form-control is-invalid test-1-fpn" v-model="phone" placeholder="телеофн">
                        <div class="invalid-feedback test-1-emph">Error message</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input type="password" class="form-control test-1-fps"  v-model="password" placeholder="Password">
                        <div class="invalid-feedback test-1-emps">Error message</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input type="password" class="form-control test-1-fps"   v-model="password2" placeholder="Repeat Password">
                        <div class="invalid-feedback test-1-emps">Error message</div>
                    </div>
                    <div class="col-12 mt-4">
                        <button class="btn btn-primary w-100 test-1-fbs  " @click="postlogin()">sign up</button>
                        <button class="btn btn-primary w-100 test-1-fbs mt-2">Log in</button> 
                        <div class="text-center mt-2">
                            Don't have an account yet? <a href="register.html" class="test-1-bsu">Sign up</a>
                            or
                            <a href="index.html" class="test-1-bbh">Back home</a>
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