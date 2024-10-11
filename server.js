// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// Middleware to parse incoming form data
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Serve the form HTML (you can replace this with your actual HTML file)
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// Handle form submission
// app.post('/submit', (req, res) => {
//     const { name, email } = req.body; 

//     Create a transporter using nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',                                        
//         auth: {
//             user: 'adekunlemalik399@gmail.com',                      
//             pass: 'Maleekberry@23'                                  
//         }
//     });

    // Email options
    // const mailOptions = {
    //     from: 'your-email@gmail.com',
    //     to: 'adekunlemalik399@gmail.com',  // Your email where the form details will be sent
    //     subject: 'Form Submission Details',
    //     text: `Name: ${name}\nEmail: ${email}` // Message body with form data
    // };

    // Send the email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('Form submitted successfully');
//         }
//     });
// });

// Start the server
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });


