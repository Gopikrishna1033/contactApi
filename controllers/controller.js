//get api for all contacts 
// access public
// endpoint /api/contacts
const getContacts = (request,response)=>{
response.status(200).json({message:"Getting all the contacts Please wait for some time..!"})
}

//get api for for specific contact
//access public
//endpoint /api/contacts
const getContact = (request,response)=>{
    response.status(200).json({message:"Getting the desired Contact.."})
} 

//post api for creating a contact
//access public
//endpoint /api/contacts
const createContact = (request,response)=>{
    response.status(201).json({message:"Contact was created sucessfully..."})
}

//put api for updating a contact
//access public 
//endpoint /api/contacts/id
const updateContact = (request, response) => {
  response.status(200).json({ message: "Contact was updated sucessfully..." });
};

//delete api for deleting the contact
//access public
//endpoint /api/contact/id
const deleteContact = (request, response) => {
  response.status(204).json({ message: "Contact was deleted sucessfully..." });
};
module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}