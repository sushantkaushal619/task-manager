
const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from: 'sushantkaushal79@gmail.com',
        subject: 'Thanks for joining in!',
        html: `<h3>Welcome, ${name} ! </h3><p>Let me know how you get along with the app!</p>`
        
    })
}


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to: email,
        from: 'sushantkaushal79@gmail.com',
        subject: 'Hope to see you again!',
        html: `<h3>Thanks, ${name} ! </h3><p>Hope to see you again. Let me know the reason of your cancellation, so that we can improve our services!</p>`
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}