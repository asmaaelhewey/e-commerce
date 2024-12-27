
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object,string } from "yup";
import { UserContext } from "../../Context/User.context";

export default function Login() {

  let {setToken} = useContext(UserContext)

  const[inCorrectEmailorPassword, setIncorrectEmailorPassword] = useState()

  const navigate = useNavigate()

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const validationSchema = object({
  email: string().required("Email is required").email("Email is invalid"),

  password: string().required("Password is required").matches(passwordRegex, "password should be Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),

});

 async function sendDataToLogin(values) {

const loadingToastId = toast.loading("Waiting ..")

try {
  const options = {
  
    url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
    method:"POST",
    data:values
   };
     
   let {data} = await axios.request(options);
console.log(data);
   if(data.message == "success") {
    localStorage.setItem("token", data.token);
setToken(data.token)
    toast.success("Hi...")};
setTimeout(() => {navigate("/")}, 2000);
} catch(error){
  console.log(error);
  setIncorrectEmailorPassword(error.response.data.message)

}finally {toast.dismiss(loadingToastId);}
}

 const formik = useFormik({
    initialValues:
      {
        "email":"",
        "password":"",
    },

    validationSchema,

    onSubmit: sendDataToLogin,

  });

  return <>
  <h1 className="text-xl text-slate-600 font-semibold mb-5"> <i className="fa-solid fa-user mr-2"></i>Login</h1>
  <form className="space-y-3" onSubmit={formik.handleSubmit}>

<div className="email">
  <input type="email" className="form-control w-full" placeholder="Email Address" value={formik.values.email} 
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  name="email"/>
  {formik.errors.email && formik.touched.email && 
  (<p className="text-red-500 mt-1 text-ms">*{formik.errors.email}</p>)}

</div>

<div className="password">
  <input type="password" className="form-control w-full" placeholder="Password" value={formik.values.password} 
  onChange={formik.handleChange}
  name="password"/>

{formik.errors.password && formik.touched.password && (<p className="text-red-500 mt-1 text-ms">*{formik.errors.password}</p>)}
 
 {inCorrectEmailorPassword && <p className="text-red-500 mt-1 text-ms">*{inCorrectEmailorPassword}</p>}

</div>

<button type="submit" className="btn bg-blue-200 hover:bg-blue-300 text-gray-700">Login</button>
  </form>
  </>
}
