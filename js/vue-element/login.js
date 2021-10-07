const Login = {
    template: `
    <div class="container vh-100 d-flex align-items-center justify-content-center">
    
        <section class="mt-5 w-75">
            <h2 class="mb-5 text-center">Log in</h2>

            <form  >
                <div class="row">
                    <div class="col-12">
                        <input type="text" class="form-control  test-1-fpn " :class="{ 'is-invalid' : getif }" placeholder="Phone" v-model="Phone">
 
                    </div>
                    <div class="col-12 mt-2">
                        <input type="password" class="form-control test-1-fps" placeholder="Password" v-model="password">
 
                    </div>
                    <div class="col-12 mt-4">
                        <a class="btn btn-primary w-100  " @click="postlogin()">Log in</a>
                        <a class="btn btn-primary w-100   mt-2" @click="$router.push('/reg')" >sign up</a>
                        
                        <div class="text-center mt-2">
                            Don't have an account yet? <a   class="test-1-bsu">Sign up</a>
                            or
                            <a   class="test-1-bbh">Back home</a>
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