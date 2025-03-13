import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllData } from "../../services/admin.service";
import styles from "./Users.module.css";

export default function CompletedPayment() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/admin-login");
      return;
    }

    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await GetAllData();

      if (Array.isArray(response)) {
        setUsers(response);
      } else if (response?.data && Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        throw new Error("Invalid data format");
      }
      setError(null);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setUsers([]);
      setError("Failed to load user data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.mainContent}>
      {loading ? (
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading user data...</p>
        </div>
      ) : error ? (
        <div className={styles.errorState}>
          <p>{error}</p>
          <button className={styles.retryButton} onClick={fetchData}>
            Retry
          </button>
        </div>
      ) : (
        <div className={styles.tableContainer}>
          <h2>Registered Users</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Father's Name</th>
                  <th>Mother's Name</th>
                  <th>Nationality</th>
                  <th>Aadhar No</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.name}</td>
                      <td>
                        {new Intl.DateTimeFormat("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        }).format(new Date(user.dob))}
                      </td>
                      <td>{user.gender}</td>
                      <td>{user.fatherName}</td>
                      <td>{user.motherName}</td>
                      <td>{user.nationality}</td>
                      <td>
                        {"XXXX-XXXX-" + (user.aadharNo ? user.aadharNo.slice(-4) : "****")}
                      </td>
                      <td>Pending</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}
