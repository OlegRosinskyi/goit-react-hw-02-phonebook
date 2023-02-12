import React, { Component } from "react";
import { ContactForm } from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
//import shortid from "shortid";
import { AllBox } from "./App.stiled";

//let filtrContactss = [{id: '', name: '', number: ''}];

export class App extends Component {
  state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    statusButtomForm: false,
    name: '',
    number:'',
    filter: ''
}
  


  updateContacts = (event) => {
    event.preventDefault();
    this.setState({ statusButtomForm: true });
    console.log(this.state.statusButtomForm);
     setTimeout(() => {this.setState({ statusButtomForm: false })},1000);
    //console.log(this.state.contacts.length);
    let nowArr = this.state.contacts;
    let arrLength = nowArr.length;
    let Contact = { id: `id-${this.state.name}`, name: `${this.state.name}`, number: `${this.state.number}` };
    let statusIncludeName = nowArr.find(contact => contact.name === Contact.name);
    console.log(statusIncludeName);
    arrLength > 1 ? (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${this.state.name}  is already in contacts`)) :
      (nowArr[0].name === '' ? nowArr.splice(arrLength-1, 1, Contact,) : (!statusIncludeName ? nowArr.splice(arrLength, 0, Contact,) : alert(`${this.state.name}  is already in contacts`)))
    //console.log(this.state)
    //console.log(nowArr);
    this.setState({ contacts: nowArr });
  }
  
  addName = (event) => {
    event.preventDefault(); //console.log(event); console.log(event.currentTarget.name);
    //console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value })
  }
  
  filterContact = (event) => { this.setState({ filter: event.currentTarget.value }); }
  
  deleteContact = (event) => {
    let ActivElement = Number(event.target.id);console.log( event.target.id); let nowArr = this.state.contacts; 
    nowArr.length > 1 ? nowArr.splice(ActivElement, 1):nowArr = [{id: '', name: '', number: ''}];
      console.log(nowArr); this.setState({ contacts: nowArr })
   console.log( ActivElement);
  
  }
    
  render() {
        //console.log();
        return (
          
           <  AllBox >
              <h1>Phonebook</h1>
              <ContactForm updateContacts={this.updateContacts} statusButtomForm={this.state.statusButtomForm} addName={this.addName}/>
              <h2>Contacts</h2>
              <Filter filtrContact={this.filterContact } />
              <ContactList contacts={this.state.contacts } filter = {this.state.filter} deleteContact={this.deleteContact}  />
            </ AllBox >
           )  
    }
}
export default App;