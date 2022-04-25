import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import { IoTrashBinOutline } from 'react-icons/io5';
import styles from './ContactsList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(actions.deleteContact(id));

  return filteredContacts.length === 0 ? (
    <div className={styles.warning}>You have no contacts!</div>
  ) : (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.info}>
            {contact.name}: {contact.number}
          </span>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            <IoTrashBinOutline /> Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
