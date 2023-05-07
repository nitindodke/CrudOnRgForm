
import React, { useState } from "react";

const RgForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    photo: null,
  });

  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    setInputs({
      ...inputs,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
    } else {
      setTableData([...tableData, inputs]);
    }

    setInputs({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
      country: "",
      state: "",
      city: "",
      photo: null,
    });
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };

  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({
      name: tempData.name,
      email: tempData.email,
      password: tempData.password,
      phoneNumber: tempData.phoneNumber,
      gender: tempData.gender,
      country: tempData.country,
      state: tempData.state,
      city: tempData.city,
      photo: tempData.photo,
    });
    setEditClick(true);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Crud App</h1>
      <div  className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Name</label>
                <input
                type="text"
                placeholder="Name"
                  name="name"
                  value={inputs.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                placeholder="mail"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Password</label>
                <input
                type="password"
                placeholder="password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>PhoneNumber</label>
                <input
                type="phone"
                placeholder="phoneNumber"
                  name="phoneNumber"
                  value={inputs.phoneNumber}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Gender</label>
                <div>
                  <label className="mr-3">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={inputs.gender === "male"}
                      onChange={handleChange}
                      required
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={inputs.gender === "female"}
                      onChange={handleChange}
                      required
                    />{" "}
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="form-control-file"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Country</label>
                <select
                  name="country"
                  value={inputs.country}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>State</label>
                <select
                  name="state"
                  value={inputs.state}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select State</option>
                  <option value="california">California</option>
                  <option value="new-york">New York</option>
                  <option value="london">London</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>City</label>
                <select
                  name="city"
                  value={inputs.city}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select City</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="new-york-city">New York City</option>
                  <option value="london">London</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                {editClick ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {tableData.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>PhoneNumber</th>
                <th>Gender</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.gender}</td>
                  <td>{item.country}</td>
                  <td>{item.state}</td>
                  <td>{item.city}</td>
                  <td>
                    {item.photo && (
                      <img
                        src={URL.createObjectURL(item.photo)}
                        alt="User Photo"
                        className="photo"
                        style={{width:"50px",height:"50px"}}
                      />
                    )}
                  </td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(i)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

export default RgForm;

