import { BoxContactForm } from "./ContactForm.stiled";
import { InputContactForm } from "./ContactForm.stiled";
import { LabelContactForm } from "./ContactForm.stiled";
import { ButtonContactForm } from "./ContactForm.stiled";

export const ContactForm = ({ updateContacts, addName,statusButtomForm }) => {
    
    
        return (
        <>
                 <BoxContactForm action="/action_page.php" method="get" onSubmit={updateContacts}>
                    <LabelContactForm htmlFor="fname">Name</LabelContactForm>
                    < InputContactForm
                        type="text"
                        name="name"
                        width= "100px"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={addName}
                    />
                    <LabelContactForm htmlFor="fname">Namber</LabelContactForm>
                    < InputContactForm
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                         onChange={addName}
                    />
                    <ButtonContactForm type="submit" value={statusButtomForm}> Add contact </ButtonContactForm>
                </BoxContactForm>
                    
        </> )  
    };


