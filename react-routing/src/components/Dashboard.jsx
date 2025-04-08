import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuth");
        navigate('/');
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;