import Contact from '../db/models/contact.js';

export const getAllContacts = async () => {
    const contacts = await Contact.find();
    return contacts;
};

export const getContactById = async (contactId) => {
    const contact = await Contact.findById(contactId);
    return contact;
  };

export const createContact = async (playload) => {
    const contact = await Contact.create(playload);
    return contact
  }

export const patchContact = async (contactId, playload) => {
    const contact = await Contact.findByIdAndUpdate(contactId, playload, {
        new: true,
        runValidators: true,
    });
    return contact;
}

export const deleteContact = async (contactId) => {
    const contact = await Contact.findByIdAndDelete(contactId);
    return contact;
};
