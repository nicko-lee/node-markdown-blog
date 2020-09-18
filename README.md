# node-markdown-blog

## Note: this is the branch for Docker-Compose version of deployment for MBP
There is another branch for the deploying on Raspberry Pi 4

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
