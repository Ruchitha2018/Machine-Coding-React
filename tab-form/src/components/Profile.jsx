import { useState } from "react";

const Profile = ({activeTab, setActiveTab}) => {

  const [profileValues, setProfileValue] = useState([]);

  const handleChange = (e) => {
    setProfileValue((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
    return (
        <div>
            <div className="form-input">
                <label>First Name</label>
                <input type="text" name="first_name" onChange={handleChange}/>
            </div>
            <div className="form-input">
                <label>Last Name</label>
                <input type="text" name="last_name"  onChange={handleChange}/>
            </div>
            <div className="form-input">
                <label>Age</label>
                <input type="text" name="age"  onChange={handleChange}/>
            </div>
            <div>
              <button onClick={() => setActiveTab(1)}>Submit</button>
            </div>
            {JSON.stringify(profileValues)}
        </div>
    )
}

export default Profile;