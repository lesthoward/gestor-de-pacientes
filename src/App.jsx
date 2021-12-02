import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
const App = () => {
    const initialPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const [patients, setPatients] = useState(initialPatients);
    const [formValue, setFormValue] = useState({})
    const addPatient = (patient) => {
        setPatients([...patients, patient]);
    }

    const deletePatient = (id) => {
        const confirm = window.confirm('¿Estas seguro de eliminar este paciente?');
        if (!confirm) return

        const patientsFiltered = patients.filter(patient => patient.id !== id);
        setPatients(patientsFiltered);
    }

    useEffect(() => {
        localStorage.setItem('patients', JSON.stringify(patients));
    }, [patients]);

    return ( <>
        <Header/>
        <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-4">
            <Form addPatient={addPatient} formValue={formValue} setFormValue={setFormValue} patients={patients} setPatients={setPatients}/>
            <PatientList patients={patients} setFormValue={setFormValue} deletePatient={deletePatient}/>
        </div>
    </> );
}

export default App;