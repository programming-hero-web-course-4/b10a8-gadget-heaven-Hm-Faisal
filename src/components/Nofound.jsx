import { ToastContainer, toast } from "react-toastify";
const Nofound = () => {
  const notifyError = () => {
    toast.error("This is an error message!", {
      position: "top-right",
      autoClose: 5000, // Auto close after 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="flex justify-center items-center">
      <p className="text-9xl text-orange-400 ">404</p>
      <ToastContainer />
      <p>Page Not Found</p>

      <button onClick={notifyError}>Notify !</button>
    </div>
  );
};

export default Nofound;
