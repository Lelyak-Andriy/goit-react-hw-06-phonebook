import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
}
