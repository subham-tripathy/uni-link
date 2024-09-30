import nodemailer from "nodemailer";
export default async function handler(req, res) {
    const { id, email } = req.query;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "subhamtripathy962@gmail.com",
            pass: "ynwlrrclfgfrmnbk",
        },
    });

    const mailOptions = {
        from: "subhamtripathy962@gmail.com",
        to: email,
        subject: "Uni Link OTP for Email Verification",
        text: `Your OTP for verification at Uni Link is ${otp}`,
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        res.json({ msg: "Email sent successfully", otp: otp });
        // console.log('Email sent successfully');
    } catch (error) {
        console.log("Err:" + error);
    }
}
