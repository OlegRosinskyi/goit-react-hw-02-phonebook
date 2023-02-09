import React, { Component } from "react";
import { ContactForm } from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

export class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    //contacts: [{name:'',telefon:''}],
    //name: '',
    //telefon:'',
    filter: ''
}
  
  updateContact = (event) => { event.preventDefault(); console.log(event) }
  filterContact = (event) => { this.setState({ filter: event.currentTarget.value }) }
  deleteContact = (event) => {
    let ActivElement = Number(event.target.id); let nowArr = this.state.contacts; 
    nowArr.length > 1 ? nowArr.splice(ActivElement, 1):nowArr = [{}];
    console.log(nowArr); this.setState({ contacts: nowArr })
  }
    
   //  this.setState(({ list }) => {
   //   return {
   //     list: list.filter((item) => item.id !== id),
   //   }; ActivElement
   // });
  render() {
        //console.log();
        return (
            <>
           < div >
              <h1>Phonebook</h1>
              <ContactForm updateContact={this.updateContact} />
              <h2>Contacts</h2>
              <Filter filtrContact={this.filterContact } />
              <ContactList contacts={this.state.contacts } filtder = {this.state.filter} deleteContact={this.deleteContact}  />
            </div >
            </> )  
    }
}
export default App;