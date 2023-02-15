import { BoxFilter } from "./Filtr.stiled";
const Filetr = ({ filtrContact,value }) =>
{
    return (
        <BoxFilter>
            <h2>Find contacts by name</h2>
            <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                        onChange={filtrContact}
                        //value={value}
                    />
        </BoxFilter>
     )
}
export default Filetr;