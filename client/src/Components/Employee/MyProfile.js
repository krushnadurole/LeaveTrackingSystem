import React, { useContext } from 'react'
import formatDistance from 'date-fns/formatDistance'
import DevContext from '../../context/Employees/DevContext';

const Employee = (props) => {
    const { Employee, updateDev } = props;
    const context = useContext(DevContext);
    const datestr = Employee.date;
    const str = formatDistance(
        new Date(datestr),
        new Date()
    );
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const datefinal = new Date(Employee.date).toLocaleString('en-US', options, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    const { deletedev } = context;
    return (
        <div className="maindev">
            <div className="maindev card  text-center">
                <div className=" card-header   navbar-light na" >
                    {Employee.role}
                </div>
                <div class="card-body">
                    <h5 class="card-title ">{Employee.name}</h5>
                    <p class="card-text">{Employee.description}</p>
                    <h6>{Employee.email}</h6>
                    {/* <a href={Employee.github}>Github</a> <br></br> */}
                    {/* <a href={Employee.linkedin}>linkedin</a> */}
                    <p>{Employee.contactNum}</p>
                    {/* <a href="/" class="btn btn-outline-dark">Let's make collabration</a> */}
                    {/* <button className='btn btn-outline-dark'>Let's make collabration</button> */}
                </div>
                <div>
                    {/* we are about to remove the delete part Cause there should not be these delete option cause HR is going to add and remove , employee should 
                    not have that option, we will give this option to HR */}
                    {props.flag && <i className="fa-solid fa-trash-can  mx-2" onClick={() => { deletedev(Employee._id); props.showAlert("Deleted Successfully", "success") }}></i>}
                    {props.flag && <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateDev(Employee); }}></i>}
                </div>
                <div class="card-footer text-muted">
                    {/* {Employee.date} */}
                    {/* {str} */}
                    {datefinal}
                </div>
            </div>
        </div>
    )
}

export default Employee
