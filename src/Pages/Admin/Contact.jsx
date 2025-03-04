import { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import { GetAllContactRequests } from '../../services/admin.service';

export default function AdminContact() {
    const [contacts, setContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await GetAllContactRequests();
                setContacts(response);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };
        fetchContacts();
    }, []);

    // Function to format date without seconds
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    // Function to open the modal with a specific message
    const openModal = (message) => {
        setSelectedMessage(message);
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedMessage('');
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Contact Requests</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Inquiry Type</th>
                        <th>Created At</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.length > 0 ? (
                        contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{contact.firstName} {contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.inquiryType}</td>
                                <td>{formatDate(contact.createdAt)}</td>
                                <td>
                                    <button 
                                        className={styles.viewButton} 
                                        onClick={() => openModal(contact.message)}
                                    >
                                        View Message
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className={styles.noData}>No contact requests found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal Popup */}
            {showModal && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <h3>Message</h3>
                        <p>{selectedMessage}</p>
                        <button className={styles.closeButton} onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
