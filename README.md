# node-markdown-blog

## Note: this is for deploying to Raspberry Pi 4
Had real issues using Docker for this because some Docker images including Mongo do not support ARMv7 and below with their 32-bit architecture which I learned the hard way...

A simple markdown blog built with:

1. MongoDB
2. NodeJS
3. Mongoose
4. ejs
5. Bootstrap for styling
6. dompurify + jsdom to sanitize the user inputted markdown (security reasons + NodeJS doesn't really know how HTML works on its own)
7. slugify to generate user friendly URLs
8. marked to convert user inputted markdown into valid HTML
9. method override to allow for using less common HTML verbs such as PUT, PATCH, DELETE etc.
