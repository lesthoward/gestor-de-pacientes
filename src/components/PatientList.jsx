import PatientItem from "./PatientItem";

const PatientList = ({patients, setFormValue, deletePatient}) => {
    return (<div className={'md:h-screen', patients.length && 'md:overflow-y-scroll'}>
        <h2 className="font-black text-3xl text-center">Lista de pacientes ({ patients.length })</h2>
        <p className="mt-4 text-center">Administre tus <span className="text-purple-500 font-bold">pacientes y citas</span></p>

        {
            patients.length 
            ?  (
                patients.map(patient => (
                    <PatientItem key={patient.id} patient={patient} setFormValue={setFormValue} deletePatient={deletePatient}/>
                ))
            )
            : (
                <h3 className="mt-20 text-center text-lg md:text-xl font-light">Historico de pacientes, comience agregando.  
                    <a href="https://www.linkedin.com/in/lesthoward" target="_blank" className="underline text-purple-500 hover:text-purple-600 block">Contrate programador web</a>
                </h3>
            )
        }
        

    </div> );
}
 
export default PatientList;