import Form from '../form/FormLogin';

const Register = () => {
     const loginContent = {
    title: "Register",
    btnText : "Register"
  };

  const loginInputs = [
    { type: "email", placeHolder: "Email or username*" , name : "email"},
    { type: "text", placeHolder: "Username*" , name : "text"},
    { type: "password", placeHolder: "Password*" , name : "password"},
    { type: "password", placeHolder: "Confirm Password*" , name : "password"}
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

export default Register