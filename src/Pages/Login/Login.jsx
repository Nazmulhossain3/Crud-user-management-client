import { Link } from "react-router-dom";

const Login = () => {

   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        const userData = {
            email,
            password
        }

        console.log('data', userData);

        
      };
    
    
   


    return (
        <div>
      <div className="bg-white shadow-2xl border rounded-lg px-8 py-6 mx-auto my-8 max-w-sm ">
        <h2 className="text-2xl font-medium mb-4">Survey</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
             
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="password"
              name="password"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              
            />
          </div>
         
         
         
         
          <div>
            <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </div>
          <p className="text-sm font-light mt-2 text-gray-500 dark:text-gray-400">Already have an account? <Link to='/'
            className="font-medium text-blue-600 hover:underline dark:text-blue-500" >Register</Link>
        </p>
        </form>
      </div>
    </div>
    );
};

export default Login;