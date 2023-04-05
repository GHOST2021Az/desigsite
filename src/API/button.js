import { useNavigate } from "react-router-dom"

const ButtonRedirect = () =>{
   const navigate=useNavigate()
   return (
     <div>
       <button
         onClick={() => {
           navigate("/profile");
         }}
         class="btn btn-primary"
       >
         redirect
       </button>
     </div>
   );
}
export default ButtonRedirect