const axios = require('axios');
require('dotenv').config();

exports.subscribe = async (req, res) => {
    const { email } = req.body;

    if (!email) {
    return res.status(400).json({ error: 'Email is required' });
    }

    try {
    const response = await axios.post(
        'https://connect.mailerlite.com/api/subscribers',
        {
        email: email,
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
        }
        }
    );

    return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed to the newsletter' 
    });
    } catch (error) {
    console.error('MailerLite Error:', error.response?.data || error.message);

    if (error.response?.status === 422) {
        return res.status(400).json({ 
        error: 'This email may already be subscribed or is invalid' 
        });
    }

    return res.status(500).json({ 
        error: 'Failed to subscribe. Please try again later.' 
    });
    }
};