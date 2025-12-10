const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3002}/api`,
            },
        ],
    },
    apis: [path.join(__dirname, './routes/*.js')],
};
const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
module.exports = setupSwagger;
// This file sets up Swagger for API documentation
// It uses swagger-jsdoc to generate the documentation from JSDoc comments in the routes
// and serves it using swagger-ui-express at the /api-docs endpoint.