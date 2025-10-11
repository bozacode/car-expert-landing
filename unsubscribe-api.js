// DEPRECATED: This API server is no longer used
// Unsubscribe functionality now uses EmailJS directly from the frontend
// See unsubscribe.html for the current implementation
//
// Simple Node.js Express server for unsubscribe functionality
// This is a basic example - in production, use proper database and security

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for demo (use database in production)
const unsubscribedEmails = new Set();
const unsubscribeLogs = [];

// Unsubscribe endpoint
app.post('/api/unsubscribe', (req, res) => {
    try {
        const { email, reason } = req.body;
        
        // Validate email
        if (!email || !email.includes('@')) {
            return res.status(400).json({ 
                success: false, 
                error: 'Invalid email address' 
            });
        }
        
        // Add to unsubscribed list
        unsubscribedEmails.add(email.toLowerCase());
        
        // Log unsubscribe for compliance
        const logEntry = {
            email: email.toLowerCase(),
            reason: reason || 'not specified',
            timestamp: new Date().toISOString(),
            ip: req.ip || req.connection.remoteAddress,
            userAgent: req.get('User-Agent')
        };
        
        unsubscribeLogs.push(logEntry);
        
        console.log('Unsubscribe processed:', logEntry);
        
        res.json({ 
            success: true, 
            message: 'Successfully unsubscribed',
            timestamp: logEntry.timestamp
        });
        
    } catch (error) {
        console.error('Unsubscribe error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Internal server error' 
        });
    }
});

// Check if email is unsubscribed
app.get('/api/unsubscribe/check/:email', (req, res) => {
    const email = req.params.email.toLowerCase();
    const isUnsubscribed = unsubscribedEmails.has(email);
    
    res.json({ 
        email: email,
        unsubscribed: isUnsubscribed,
        timestamp: new Date().toISOString()
    });
});

// Get unsubscribe logs (admin endpoint)
app.get('/api/admin/unsubscribe-logs', (req, res) => {
    // In production, add authentication here
    res.json({
        totalUnsubscribes: unsubscribedEmails.size,
        logs: unsubscribeLogs.slice(-100) // Last 100 entries
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        unsubscribedCount: unsubscribedEmails.size
    });
});

app.listen(port, () => {
    console.log(`Unsubscribe API server running on port ${port}`);
    console.log(`Health check: http://localhost:${port}/api/health`);
    console.log(`Unsubscribe endpoint: POST http://localhost:${port}/api/unsubscribe`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down unsubscribe API server...');
    process.exit(0);
});
