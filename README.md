# node-markdown-blog

![Screenshot 1](https://user-images.githubusercontent.com/37054216/93748375-8271fd80-fc3b-11ea-9962-8452c8859257.png)

![Screenshot 2](https://user-images.githubusercontent.com/37054216/93748329-6706f280-fc3b-11ea-904d-1bbbf7cf2d74.png)

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

Here is a link to the working app deployed on Heroku.

https://nicko-node-markdown-blog.herokuapp.com/ 