  import Form from '../form/FormLogin'

  const Login = () => {
      const loginContent = {
      title: "Login",
      footerLink: "Lost your password?",
      btnText : "Login"
    };

    const loginInputs = [
      { type: "email", placeHolder: "Email or username*" , name : "email"},
      { type: "password", placeHolder: "Password*" , name : "password"},
      {type : "checkbox" , placeHolder : "Remember me" , label : "Remember me" , name : "checkbox", className: "w-5 h-5 cursor-pointer accent-orange-400 hover:accent-orange-500/90"}
    ];
    return (
      <div className='w-full'>
        <Form
          content={loginContent}
          input={loginInputs}
        />
      </div>
    )
  }

  export default Login
