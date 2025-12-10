/**
 * @swagger
 * tags:
 *   - name: Industry
 *     description: API for managing industries
 */

/**
 * @swagger
 * /industry:
 *   get:
 *     summary: Retrieve industries
 *     tags: [Industry]
 *     parameters:
 *       - in: query
 *         name: industryid
 *         schema:
 *           type: string
 *         example: "All"
 *         description: ID of the industry to retrieve, or "All" to retrieve all industries (default is "All")
 *     responses:
 *       200:
 *         description: A list of industries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /industry:
 *   post:
 *     summary: Create a new industry
 *     tags: [Industry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - industryname
 *               - description
 *               - createdby
 *             properties:
 *               industryname:
 *                 type: string
 *                 example: "Technology"
 *               description:
 *                 type: string
 *                 example: "Software and IT services"
 *               createdby:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Industry created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /industry:
 *   put:
 *     summary: Update an existing industry
 *     tags: [Industry]
 *     parameters:
 *       - in: query
 *         name: industryid
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *         description: ID of the industry to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               industryname:
 *                 type: string
 *                 example: "Healthcare"
 *               description:
 *                 type: string
 *                 example: "Medical and pharmaceutical services"
 *               modifiedby:
 *                 type: integer
 *                 example: 1
 *               isactive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Industry updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       500:
 *         description: Internal Server Error
 */