
const client = require('../config/db');

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

module.exports = {
    get_industries
};
