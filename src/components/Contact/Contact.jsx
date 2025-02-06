import { useDispatch } from 'react-redux';
import styles from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps'; 

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <p><strong>👤 {name}</strong></p>
      <p>📞 {number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;

