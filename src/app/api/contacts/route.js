import axios from 'axios';

export async function POST(request) {
    const { name, company, email, phone, services, budget, message } = await request.json();

    const brevoApiKey = process.env.BREVO_API_KEY; // Make sure to set this in your .env.local

    try {
        const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
            sender: { email: 'info@expressmarketing.ae', name: 'EM LP' }, // Use your verified sender email
            from: [{ email: 'info@expressmarketing.ae' }], // Replace with your email
            to: [{ email: 'shoaibzain849@gmail.com' }], // Replace with your email
            subject: `New message from ${name}`,
            htmlContent: `
                <h1>New Inquiry</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Services:</strong> ${services}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': brevoApiKey,
            }
        });

        return new Response(JSON.stringify({ success: true, data: response.data }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: 'Failed to send email.' }), { status: 500 });
    }
}
