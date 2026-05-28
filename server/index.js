// server/index.js
import express from 'express';
import cors from 'cors';
import knex from 'knex';
import knexConfig from './knexfile.js';

const app = express();
const port = process.env.PORT || 3001;

// Database connection
const db = knex(knexConfig.development);

app.use(cors());
app.use(express.json());

// API Endpoints

// 1. Get all lunar days
app.get('/api/lunar-days', async (req, res) => {
  try {
    const days = await db('lunar_days').select('*').orderBy('order', 'asc');
    
    // Parse recommended activities column from JSON string
    const parsedDays = days.map(day => ({
      ...day,
      recommended: JSON.parse(day.recommended || '[]')
    }));

    res.json(parsedDays);
  } catch (error) {
    console.error('Error fetching lunar days:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 2. Get a single lunar day by ID
app.get('/api/lunar-days/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const day = await db('lunar_days').where({ id }).first();
    if (!day) {
      return res.status(404).json({ error: 'Lunar day not found' });
    }
    
    res.json({
      ...day,
      recommended: JSON.parse(day.recommended || '[]')
    });
  } catch (error) {
    console.error(`Error fetching lunar day ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. Get all lunar months
app.get('/api/lunar-months', async (req, res) => {
  try {
    const months = await db('lunar_months').select('*');
    res.json(months);
  } catch (error) {
    console.error('Error fetching lunar months:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 4. Get all Gregorian anchors
app.get('/api/gregorian-anchors', async (req, res) => {
  try {
    const anchors = await db('gregorian_anchors')
      .select('*')
      .orderBy('gregorian_start_date', 'asc');
    res.json(anchors);
  } catch (error) {
    console.error('Error fetching Gregorian anchors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Hina o te Maramataka Backend running on http://localhost:${port}`);
});
