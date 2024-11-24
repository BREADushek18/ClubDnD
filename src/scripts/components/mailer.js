const nodemailer = require('nodemailer');

const sendEmail = async (recipient, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_pass',
        },
    });

    const mailOptions = {
        from: 'your_email@gmail.com',
        to: recipient,
        subject: subject,
        text: text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendEmail };
