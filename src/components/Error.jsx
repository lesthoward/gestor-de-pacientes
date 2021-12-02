const Error = ({error, setError, children}) => {
    if(!error) return null
    setTimeout(() => {
        setError(false)
    }, 3000);

    return (  
        <p className="bg-red-500 text-white font-black uppercase text-center px-2 py-4 rounded animate-bounce" id="error">{children}</p>
    );
}
 
export default Error;