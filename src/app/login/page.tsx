import Login from "@/components/auth/login/Login"
import Register from "@/components/auth/register/Register"
import CourseBannar from "@/components/course/courseBannar/CourseBannar"

const login = () => {
  return (
    <div className="">
      <div className="mt-15">
        <CourseBannar
          title="Login / Register"
        />
      </div>
      <div className="flex justify-center gap-7 p-12 max-md:flex-col max-sm:p-6">
        <Login/>
        <Register/>
      </div>
    </div>
  )
}

export default login