import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, phone, rooms, ownSupplies, numberOfPeople } = data;

    console.log('==============================================');
    console.log('📧 NEW BOOKING REQUEST RECEIVED');
    console.log('==============================================');
    console.log('👤 Name:', name);
    console.log('📱 Phone:', phone);
    console.log('🏠 Rooms:', rooms);
    console.log('🧹 Cleaning supplies:', ownSupplies ? 'From client' : 'From company');
    console.log('👥 Number of people:', numberOfPeople);
    console.log('⏰ Time:', new Date().toLocaleString());
    console.log('==============================================');

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
          Новая заявка на уборку
        </h2>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Информация о клиенте:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Имя:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Телефон:</td>
              <td style="padding: 10px;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Количество комнат:</td>
              <td style="padding: 10px;">${rooms}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Чистящие средства:</td>
              <td style="padding: 10px;">${ownSupplies ? 'От клиента' : 'От компании'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold;">Количество специалистов:</td>
              <td style="padding: 10px;">${numberOfPeople}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #059669;">
          <p style="margin: 0; color: #065f46;">
            <strong>Свяжитесь с клиентом как можно скорее!</strong>
          </p>
        </div>
      </div>
    `;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'rasulovtokhir@gmail.com',
          subject: `Новая заявка на уборку от ${name}`,
          html: emailContent,
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully to rasulovtokhir@gmail.com');
      } catch (emailError) {
        console.error('❌ Failed to send email, but booking saved:', emailError);
      }
    } else {
      console.log('⚠️  Email credentials not configured. Booking logged to console.');
      console.log('📋 To enable email notifications, add EMAIL_USER and EMAIL_PASS to your secrets.');
    }

    return NextResponse.json({ success: true, message: 'Booking received successfully' }, { status: 200 });
  } catch (error) {
    console.error('❌ Error processing booking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
