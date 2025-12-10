/**
 * @swagger
 * components:
 *   schemas:
 *    Industry:
 *     type: object
 *   properties:
 *    id:
 *     type: integer
 *   description: Unique identifier for the industry
 *  name:
 *    type: string
 * description: Name of the industry
 * example:
 *  id: 1
 * name: "Technology"
 * @swagger
 * paths:
 * /industries:
 *  get:
 *    summary: Retrieve a list of industries
 * description: Fetches all industries or a specific industry by ID
 * parameters:
 *  - in: query
 *    name: industryid
 *    required: false
 *    description: The ID of the industry to retrieve
 *    schema:
 *      type: integer
 * responses:
 *  '200':
 *    description: A list of industries
 * content:
 *  application/json:
 *    schema:
 *      type: array
 * items:
 *        $ref: '#/components/schemas/Industry'
 *  '500':
 *    description: Internal server error
 * content:
 *  application/json:
 *    schema:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          example: "Internal server error"
 * swagger: '2.0'
 * info:

 */