import { BoxFilter } from "./Filtr.stiled";
const Filetr = ({ filtrContact }) =>
{
    return (
        <BoxFilter>
            <h2>Find contacts by name</h2>
            <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={filtrContact}
                    />
        </BoxFilter>
     )
}
export default Filetr;