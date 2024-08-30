import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    (<p>ContactList </p>),
    (
      <ul className={css.contactList}>
        {filteredContacts.map((item) => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    )
  );
}
export default ContactList;
