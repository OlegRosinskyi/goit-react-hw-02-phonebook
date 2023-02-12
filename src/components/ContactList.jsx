
const ContactList = ({ contacts,id, filtder, deleteContact }) =>
{
    console.log(contacts)
    
    return ( 
        <> 
            <ul>
                { (contacts[0].name!==''&contacts[0].number!=='')?(contacts.map((contact,index) => <li key={contact.name}> <p>{contact.name} : {contact.number }   <span><button id={index} onClick={deleteContact}> Delete </button></span></p></li>)): <li></li>}
             </ul>
        </>
     )
}
export default ContactList;