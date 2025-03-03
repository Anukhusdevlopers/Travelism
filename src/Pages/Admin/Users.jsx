import { useState, useEffect } from "react";
import { GetAllData } from "../../services/admin.service";
import styles from "./Users.module.css";

export default function Users() {
  const [users, setUsers] = useState([]); // Always an array to avoid `.map()` errors
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await GetAllData();

      // Ensure response is an array
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
      setUsers([]); // Prevent `.map()` errors
      setError("Failed to load user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  <th>Declaration</th>
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
                      <td>{user.declaration ? "✔" : "✘"}</td>
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
