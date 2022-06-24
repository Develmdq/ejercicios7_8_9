import Swal from "sweetalert2";

const Contact = ({ contact, contactDelete, contactState }) => {
  const { id, nameContact, ageContact, emailContact, isConected } = contact;

  const alertConfirm = () => {
    Swal.fire({
      title: `Are you sure to eliminate ${nameContact}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${nameContact} has been deleted`, "success");
        contactDelete(id);
      }
    });
  };

  return (
    <div className="container">
      <div className="card mb-3 shadow-lg ">
        <div className="card-body ">
          <div className="d-flex justify-content-between mx-2">
            <h3 className="card-title col-6 text-capitalize">{nameContact}</h3>
            <span
              className={`badge rounded-pill ${
                isConected ? "text-bg-success" : "text-bg-danger"
              } bg-opacity-75 h-100 w-25 ms-5`}
            >
              {isConected ? "Conected" : "Disconnected"}
            </span>
          </div>
          <div className="d-flex justify-content-between mx-2">
            <p className="card-text col-3 fw-bold ">
              Age:&nbsp;&nbsp;
              <span className="text-secondary fw-normal">
                {ageContact} years
              </span>
            </p>
            <p className="card-text col-9 text-center fw-bold">
              Email:&nbsp;
              <span className="text-secondary fw-normal ">{emailContact}</span>
            </p>
          </div>
          <hr className="m-2" />
          <div className="d-flex justify-content-between mx-2">
            <button
              onClick={() => contactState(id)}
              className="btn btn-outline-warning btn-sm col-5 shadow-sm"
            >
              Change state
            </button>
            <button
              onClick={alertConfirm}
              className="btn btn-outline-danger btn-sm col-5 shadow-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
