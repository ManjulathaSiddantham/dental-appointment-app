import React, { useEffect, useState } from "react";
import "./AdminAppointments.css";

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments");
      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleCall = (contact) => {
    window.location.href = `tel:${contact}`;
  };

  return (
    <div className="admin-container">
      <h2>📅 All Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Date</th>
            <th>Message</th>
            <th>Contact via Email</th>
            <th>Contact via Call</th>
          </tr>
        </thead>
        <tbody>
          {appointments.length > 0 ? (
            appointments.map((apt) => (
              <tr key={apt._id}>
                <td>{apt.name}</td>
                <td>{apt.contact}</td>
                <td>{apt.email}</td>
                <td>{new Date(apt.date).toLocaleString()}</td>
                <td>{apt.message}</td>
                <td>
                  <button
                    className="btn email-btn"
                    onClick={() => handleEmail(apt.email)}
                  >
                    Email
                  </button>
                </td>
                <td>
                  <button
                    className="btn call-btn"
                    onClick={() => handleCall(apt.contact)}
                  >
                    Call
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No appointments found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
