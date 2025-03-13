import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllData } from "../../services/admin.service";
import styles from "./Users.module.css";
import { allOrder } from "../../services/allorder.service";

export default function Orders() {
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
      const response = await allOrder();
        // console.log(response?.orders)
      if (Array.isArray(response)) {
        setUsers(response);
      } else if (response?.orders && Array.isArray(response?.orders)) {
        setUsers(response.orders);
      } 
      else {
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
          <h2>Transactions</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Amount</th>
                  <th>Order Id</th>  
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user.user._id}</td>
                      
                      <td>{user.user.name}</td>
                      <td>{user.user.phone}</td>
                      <td>{user.amount}</td>
                      <td>{user.orderId}</td>
                      <td>{user.status}</td>
                      
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
