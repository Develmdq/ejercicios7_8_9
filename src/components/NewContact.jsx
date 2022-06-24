import { useState } from "react";
import Swal from "sweetalert2";

const initialForm = {
  nameContact: "",
  ageContact: "",
  emailContact: "",
};

const NewContact = ({ contactAdd }) => {
  const [form, setForm] = useState(initialForm);
  const { nameContact, ageContact, emailContact } = form;

  const handleInputChange = (e) => {
    const changedForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(changedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameContact === "" || ageContact === "" || emailContact === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There can be no empty entries",
      });
      return
    }    
    contactAdd(form);
    setForm(initialForm);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "New contact added",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  

  return (
    <div className="card mb-3 shadow-lg p-3">
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            value={nameContact}
            name="nameContact"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={emailContact}
            name="emailContact"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Age"
            value={ageContact}
            name="ageContact"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Age</label>
        </div>
        <button className="btn btn-primary w-100">Add</button>
      </form>
    </div>
  );
};

export default NewContact;
