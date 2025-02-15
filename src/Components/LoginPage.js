function LoginPage
(props){
    function login(event){
        event.preventDefault()
        const nameValue=event.target.elements.name.value;
    const emailValue=event.target.elements.email.value;
   
        localStorage.setItem("token","ahmed");
        props.handleLogin(true)
        
    }
        return(<div class="container mb-7">
        
            <form onSubmit={login}>
              <div class="form-group">
                <label for="name">name</label>
                <input type="text" class="form-control" placeholder="Enter name" name="name" />
              </div>
              <div class="form-group">
                <label for="mail">email</label>
                <input type="text" class="form-control" placeholder="Enter your email" name="email"/>
              </div>
             
              <button  type="submit" class="btn btn-primary mx-auto d-block">register</button>
            </form>
            </div>)
}

export default LoginPage;