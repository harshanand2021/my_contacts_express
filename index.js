const express = require('express');
const path = require('path');
const port = 8000;

const app = express()
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name: 'Harsh',
        phone: '+91 7454831599'
    },
    {
        name: 'Mummy',
        phone: '+91 9456275771'
    },
    {
        name: 'Papa',
        phone: '+91 9837606316'
    }
]

app.get('/', function(req, res){
    return res.render('home', {
        title: "Contacts List",
        contact_list: contactList
    });
});

app.post('./create-contact', function(req, res){
    return res.redirect('./practice');
})

app.listen(port, function(err){
    if(err){ console.log('Error in running the server', err); }

    console.log('Yup!My Express Server is running on Port:',port);
});