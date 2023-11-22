import React, { useEffect, useState } from 'react';
import './section.css'
import { useFormik } from 'formik';
import { Formvalidation } from "./formvalidation";

const initialValues = {
    name: "",
    company: "",

    
    email: "",
    phone: "",
    

}
const Section = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [records ,setRecords]=useState([]);
    
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues,
        validationSchema: Formvalidation,
        onSubmit: (values, action) => {
            console.log(

                values
            );
            action.resetForm();
        },
    });
console.log(

    errors
);
// to store data
useEffect(()=>{
    const storedRecords=JSON.parse(localStorage.getItem('formRecords'))||[];
    setRecords(storedRecords);

},[]
);

const saveData = () => {
    const updateRecords = [...records, values];
    localStorage.setItem('formRecords', JSON.stringify(updateRecords));
    // Optionally, clear the form fields after saving
    // setValues(initialValues);
}
//     const updateRecords=[...records, formData];
//     localStorage.setItem('formRecords', JSON.stringify(updateRecords));

// }
const viewRecords = () => {
    const storedRecords = JSON.parse(localStorage.getItem('formRecords')) || [];
    setRecords(storedRecords);
}
    return (

        <>
            <section className='main-section'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='section-heading text-center pt-5 mt-5'>
                            Every Decision<br />
                            Better Informed
                        </h1>
                    </div>
                </div>
            </section>
            <section className='sub-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <ul>
                                <li className='fs-2 fw-bold'>Navigation Tab</li>
                                <li>
                                    <button className={activeTab === 'tab1' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab1') }} >Add</button>
                                </li>
                                <li>
                                    <button className={activeTab === 'tab2' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab2');viewRecords() } } >view</button>
                                </li>
                            </ul>


                        </div>
                        <div className='col-md-8 mt-5 pt-3'>
                            <div className={activeTab === "tab1" ? "tabcontent active" : "tabcontent"} >
                                <h2>Form</h2>
                                <form onSubmit={handleSubmit}>
                                    
                                            <div className='pt-5'>
                                                <input type="text" className="form-control" placeholder='Enter Your Name' id="name" label="Name"  variant="outlined" value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.name && touched.name ? (
                                                    <p className="form-error">{errors.name}</p>
                                                ) : null}</div>
                                            </div>
                                            {/* <div className='pt-5'>
                                                <input type="text" className="form-control" placeholder='Enter Your Company Name' id="company name" label="Company Name" variant="outlined" value={values.company}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.company && touched.company ? (
                                                    <p className="form-error">{errors.company}</p>
                                                ) : null}</div>
                                            </div> */}
                                           
                                            <div className='pt-5'>
                                                <input id="email" type='email' className="form-control" placeholder='Enter Your email Id' label="Email Address" variant="outlined" value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.email && touched.email ? (
                                                    <p className="form-error">{errors.email}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='pt-5'>
                                                <input type='text' className="form-control" placeholder='Enter Your mobile no' id="phone"  label="phone" variant="outlined" value={values.phone}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} />
                                                <div className='errormsg'> {errors.phone && touched.phone ? (
                                                    <p className="form-error">{errors.phone}</p>
                                                ) : null}</div>
                                            </div>
                                            <div className='pt-5'>
                                                <input type='radio' name="gender"/> Male
                                                <input type='radio' name="gender"/> Female
                                            </div>
                                            <div className='pt-5'>
                                                <lable>Language known</lable>
                                                <input type='checkbox' name="Sub1"/> English
                                                <input type='checkbox' name="sub2"/> Hindi
                                                <input type='checkbox' name="sub2"/> marathi
                                            </div>
                                            
                                  

                                        <div className='mt-5 me-4'>
                                            <button className='btn btn-success fs-4' onClick={saveData}>Submit</button>
                                        </div>
                                    </form>
                            </div>
                            <div className={activeTab === "tab2" ? "tabcontent active" : "tabcontent"} >
                            <h2>Data</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {records.map((record, index) => (
    <tr key={index}>
        <td>{record.name}</td>
        <td>{record.company}</td>
        <td>{record.email}</td>
        <td>{record.phone}</td>
        {/* Add other fields as needed */}
    </tr>
))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section