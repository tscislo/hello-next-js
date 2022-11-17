# Next.js
Tomasz Ścisło, 18.11.2022

_**Next.js** is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites._


While React is just a UI library that manages UI state by using component composition, Next.js is full framework. In that sense Next.js is more similar to Angular (as both offer full development ecosystem (build optimization, CI/CD support etc.))

## Static Site Generation
*  "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Site Generation.
* Static content generation occurs on build time
* Great for static content that is not user dependant and that does not change that often
* Great for SEO


## Incremental Static Site Regeneration
* First static content generation occurs on build time
* Data can be refetched server side after specific amount of time
* Good for marketing data that changes not very often


## Server Side Rendering
* Site content is rendered on server side
* Site content is fetched on each request
* Good for user dependent data
* Good for SEO

## Client Side Rendering 
* Data is fetched on the client side each time user makes a request

### It is possible to mix multiple data fetching modes on one page!
