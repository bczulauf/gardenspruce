'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

// Sends an email confirmation when a user first creates an account.
exports.sendEmailConfirmation = functions.auth.user().onCreate(event => {
    const user = event.data; // The Firebase user.
    const email = user.email; // The email of the user.
    const mailOptions = {
        from: 'Garden Spruce',
        to: email
    };

    mailOptions.subject = 'Welcome to Garden Spruce!';
    mailOptions.text = 'Thank you for joining Garden Spruce. We are busy finding the perfect designer for you and will contact you soon!';
    return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New subscription confirmation email sent to:', email);
    });
});