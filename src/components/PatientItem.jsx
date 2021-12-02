const PatientItem = ({patient, setFormValue, deletePatient}) => {
    const {id ,name, owner, email, date, detail} = patient
    const handleClick = (e) => {
        if(e.target.name === 'delete'){
            deletePatient(id)
        } else {
            setFormValue(patient)
        }
    }

    return (  
        <div className="mt-10 bg-white shadow-md py-10 px-5 rounded-xl">
            <p className="font-black mb-3 text-gray-600 uppercase">Nombre: <span className="font-normal normal-case">{name}</span></p>
            <p className="font-black mb-3 text-gray-600 uppercase">Propietario: <span className="font-normal normal-case">{owner}</span></p>
            <p className="font-black mb-3 text-gray-600 uppercase">Correo: <span className="font-normal normal-case">{email}</span></p>
            <p className="font-black mb-3 text-gray-600 uppercase">Fecha de ingreso: <span className="font-normal normal-case">{date}</span></p>
            <p className="font-black mb-3 text-gray-600 uppercase">Detalle: <span className="font-normal normal-case">{detail}</span></p>

            <div className="flex justify-between mt-8">
                <button 
                    className="py-2 px-10 bg-purple-500 hover:bg-purple-600 text-white font-black uppercase rounded transition-colors"
                    onClick={handleClick} name="edit">Editar</button>
                <button 
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-black uppercase rounded transition-colors"
                    onClick={handleClick} name="delete">Eliminar</button>
            </div>
        </div>
    );
}
 
export default PatientItem;