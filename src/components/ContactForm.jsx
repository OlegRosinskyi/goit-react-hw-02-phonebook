//import React, { Component } from "react";

//export class AppS extends Component {
//    state = {
//        contacts: [],
//        filter: ''
//    }
//}




export const ContactForm = ({ updateContacts, addName }) => {
    
   
        return (
        <>
                <div> ContactForm </div> 
                <form action="/action_page.php" method="get" onSubmit={updateContacts}>
                    <label htmlFor="fname">Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={addName}
                    />
                    <label htmlFor="fname">Namber</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                         onChange={addName}
                    />
                    <button type="submit" > Add contact </button>
                </form>
                    
        </> )  
    };


