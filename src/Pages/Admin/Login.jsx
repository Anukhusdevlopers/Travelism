import { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }


    console.log("Login Submitted:", formData);
    navigate('/admin/user')

    // Clear form after submission (Optional)
    setFormData({ email: "", password: "" });
    setError("");
  };

  return (
    <div className={styles.container} >
      <div className={styles.formBox}>
        <div className={styles.header}>Login to Admin Account</div>
        <form onSubmit={handleSubmit} className={styles.body}>
          {error && <p className={styles.error}>{error}</p>}

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>

          
        </form>
      </div>
    </div>
  );
}
