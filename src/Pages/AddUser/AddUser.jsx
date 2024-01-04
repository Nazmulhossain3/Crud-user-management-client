import Swal from "sweetalert2";
import { baseURL } from "../../config/config";

const AddUser = () => {

    const handleSubmit = (event)=> {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const number = form.number.value 
        const addedUser = {
            name,
            email,
            number
        }
        
        fetch(`${baseURL}/addUser-route/addUser`,{
            method : 'POST',
            headers : {
                'Content-type' : "application/json"
            },
            body : JSON.stringify(addedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User is Successfully added",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })
    }


    return (
        <div>
      <div className="bg-white shadow-2xl border rounded-lg px-8 py-6 mx-auto my-8 max-w-sm ">
        <h2 className="text-2xl font-medium mb-4">Add User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="name"
              placeholder="name"
              name="name"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
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
              type="number"
              placeholder="number"
              name="number"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
             AddUser
            </button>
          </div>
         
        </form>
      </div>
    </div>
    );
};

export default AddUser;