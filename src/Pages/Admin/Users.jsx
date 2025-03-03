

import { useState, useEffect } from "react"
import { GetAllData } from "../../services/admin.service"
import styles from "./Users.module.css"

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await GetAllData()
        console.log(data)
        setUsers(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching dashboard data:", err)
        setError("Failed to load user data")
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  console.log(users)

  return (  
           
        <main className={styles.mainContent}>
          {/* <div className={styles.dashboardHeader}>
            <h1>User Dashboard</h1>
            <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleString()}</p>
          </div> */}

          {loading ? (
            <div className={styles.loadingState}>
              <div className={styles.loadingSpinner}></div>
              <p>Loading user data...</p>
            </div>
          ) : error ? (
            <div className={styles.errorState}>
              <p>{error}</p>
              <button className={styles.retryButton} onClick={() => window.location.reload()}>
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
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{new Date(user.dob).toLocaleDateString()}</td>
                        <td>{user.gender}</td>
                        <td>{user.fatherName}</td>
                        <td>{user.motherName}</td>
                        <td>{user.nationality}</td>
                        <td>{user.aadharNo}</td>
                        <td>{user.declaration ? "✔" : "✘"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
     
  )
}