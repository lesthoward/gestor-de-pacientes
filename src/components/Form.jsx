import React, { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ addPatient, formValue, setFormValue, patients, setPatients }) => {
    const [form, setForm] = useState({
        name: '',
        owner: '',
        email: '',
        date: '',
        detail: '',
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    const formatString = (string) => {
        return string.trim().toLowerCase()
    }

    const generateId = () => {
        const random = Math.random().toString(36)
        const date = new Date().getTime().toString(36)
        return random.substr(2, 6) + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFilled = Object.values(form).every(value => value.trim() !== '')
        if (!isFilled) return setError('Todos los campos son obligatorios');

        setError(false)
        if(formValue.id) {
            const newPatientsArr = patients.map(patient => patient.id === formValue.id ? form : patient)
            setPatients(newPatientsArr)
            setFormValue({})
            
        } else {
            const isTherePatient = patients.some(patient => formatString(patient.email) === formatString(form.email)) 
            if(isTherePatient) return setError('Ya existe un paciente con ese correo') 
            
            form.id = generateId()
            addPatient({
                ...form,
            })
        }

        setForm({
            name: '',
            owner: '',
            email: '',
            date: '',
            detail: '',
        })
        document.querySelector('form').reset();
    }

    const cancelEditing = e => {
        e.preventDefault()
        setFormValue({})
        setForm({
            name: '',
            owner: '',
            email: '',
            date: '',
            detail: '',
        })
        document.querySelector('form').reset();
    }

    useEffect(() => {
        if(Object.keys(formValue).length) {
            setForm(formValue)
        }
    }, [formValue]);

    return (<div>
        <h2 className="font-black text-center text-3xl">Seguimiento de pacientes</h2>
        <p className="mt-4 text-center">Añade paciente y <span className="text-purple-500 font-bold">administrarlos</span></p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 flex flex-col gap-5"
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="name" className="block text-gray-700 uppercase font-black">Nombre de la mascota</label>
                <input type="text" id="name" placeholder="Pinky"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md 
                focus:ring-2 focus:ring-gray-700 outline-none transition-shadow"
                    onInput={handleChange} value={form.name}/>
            </div>
            <div>
                <label htmlFor="owner" className="block text-gray-700 uppercase font-black">Propietario</label>
                <input type="text" id="owner" placeholder="Daniel"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-gray-700 outline-none transition-shadow"
                    onInput={handleChange} value={form.owner}/>
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700 uppercase font-black">Correo</label>
                <input type="text" id="email" placeholder="correo@correo.com"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-gray-700 outline-none transition-shadow"
                    onInput={handleChange} value={form.email}/>
            </div>
            <div>
                <label htmlFor="date" className="block text-gray-700 uppercase font-black">Fecha de ingreso</label>
                <input type="date" id="date" placeholder="Fecha"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-gray-700 outline-none transition-shadow"
                    onInput={handleChange} value={form.date}/>
            </div>
            <div>
                <label htmlFor="detail" className="block text-gray-700 uppercase font-black">Detalle</label>
                <textarea 
                    id="detail" placeholder="Una breve descripción sobre el tratamiento requerido"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:ring-2 focus:ring-gray-700 outline-none transition-shadow"
                    onInput={handleChange} value={form.detail} spellCheck="false" />
            </div>

            <Error error={error} setError={setError}>{error}</Error>
            
            {
                formValue.id ? (
                    <div className="flex gap-2">
                        <input type="submit" value="Guardar cambios" className="bg-purple-500 w-full p-4 rounded text-white uppercase font-black cursor-pointer hover:bg-purple-600 transition-colors" />
                        <input type="submit" value="Cancelar" className="bg-indigo-500 w-full p-4 rounded text-white uppercase font-black cursor-pointer hover:bg-purple-500 transition-colors"  onClick={cancelEditing}/>
                    </div>
                )
                : (
                    <input type="submit" value="Agendar" className="bg-purple-500 w-full p-4 rounded text-white uppercase font-black cursor-pointer hover:bg-purple-600 transition-colors" />
                )
            }
        </form>
    </div>);
}

export default Form;