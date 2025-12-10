
const client = require('../config/db');

// Retrieve industries
// USE: req.query.industryid to filter by specific industry, or "All" for all industries
const get_industries = async (req, res) => {
    try {
        const industryid = req.query.industryid || "All";

        const result = await client`SELECT * FROM get_industry(${industryid})`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching industries:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

// Create a new industry
// USE: req.body to provide industryname, description, createdby
const create_industry = async (req, res) => {
    try {
        const { industryname, description, createdby } = req.body;
        const result = await client`SELECT * FROM create_industry(${industryname}, ${description}, ${createdby})`;
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating industry:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};


// Update an existing industry
// USE: req.query.industryid to specify which industry to update
const update_industry = async (req, res) => {
    try {
        const industryid = req.query.industryid;
        const { industryname, description, modifiedby, isactive } = req.body;
        const result = await client`SELECT * FROM update_industry(${industryid}, ${industryname}, ${description}, ${modifiedby}, ${isactive})`;
        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating industry:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

module.exports = {
    get_industries,
    create_industry,
    update_industry
};
