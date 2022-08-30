import { useSelector, useDispatch } from 'react-redux';
import { setLoginForm } from '../../store/FormState';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const formData = useSelector( store => store.FormState);
  const handleChange = (e) => {
    const previousForm = formData.loginForm;
    console.log(previousForm);
    const name = e.target.name;
    const value = e.target.value;
    let form = {
      ...previousForm
    }
    form[name] = value;
    console.log(form);
    dispatch(setLoginForm(form));
  }
  const doLogin = () => {
    console.log(formData.loginForm);
  }
  return (
    <div className='w-full flex flex-col justify-center items-center py-24'>
      <div className='px-16 py-10 rounded-lg border border-slate-500 bg-base-200 flex flex-col gap-4 w-1/3'>
        <div className='flex justify-center items-center'>
          <Outlet />
          <span className='text-xl font-semibold'>
          Enter your data to login
          </span>
        </div>
        <form className='flex flex-col'>
          <label htmlFor="email" className='mt-4 mb-1'>Email:</label>
          <input className='px-4 py-2 border border-slate-500 rounded-md mb-4' name="email" onChange={handleChange} value={formData.loginForm.email} />
          <label htmlFor="password" className='mb-1'>Password:</label>
          <input  className='px-4 py-2 border border-slate-500 rounded-md mb-4' name="password" onChange={handleChange} value={formData.loginForm.password} />
          <button type="button" className='btn btn-primary' onClick={doLogin}>Log In</button>
        </form>
      </div>

      <div className='mt-4 flex flex-col items-center'>
      <Link to="/login">Already have an account ?</Link>
      <Link to="/login/forgotpassword">Forgot password ?</Link>
    </div>
    </div>
  )
}

export default Login