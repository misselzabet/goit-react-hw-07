import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact'; // Переконайтеся, що шлях до компонента правильний
import { selectFilteredContacts } from '../../redux/contactsSelectors';  // Імпортуємо селектор
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
