//import shortid from "shortid";
const ContactList = ({ contacts, filter, deleteContact }) =>
{
   // console.log(contacts)
    let filtrContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    if (filtrContacts.length === 0) filtrContacts = contacts; 
    return ( 
        <> 
             <ul>
                { (contacts[0].name!==''&contacts[0].number!=='')?(filtrContacts.map((contact,index) => <li key={contact.name}> <p>{contact.name} : {contact.number }   <span><button id={index} onClick={deleteContact}> Delete </button></span></p></li>)): <li></li>}
             </ul>
        </>
     )
}
export default ContactList;
