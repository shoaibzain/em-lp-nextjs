import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, company, email, phone, services, budget, message } = await req.json();

    // Construct the data as you do in axios
    const data = {
      sender: { name: 'Your Company Name', email: 'shoaibzain849@gmail.com' },
      to: [{ email: email }],
      subject: 'New Inquiry from Landing Page',
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
    };

 // Using Axios to send a POST request
 const response = await axios.post('https://api.brevo.com/v3/smtp/email', data, {
  headers: {
    'Content-Type': 'application/json',
    'api-key': process.env.BREVO_API_KEY,
  },
});

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();

    return NextResponse.json({ success: true, message: result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
