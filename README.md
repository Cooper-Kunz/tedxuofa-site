# TEDxUofA's website
TEDxUofA is a student run TEDx event hosted at the University of Arizona. This is their official website.

## Architecture
This is a static website that follows the philosophy of the [JAM Stack](https://jamstack.org/), using [Gatsby](https://www.gatsbyjs.com/).

We use GitHub as a source of truth, [Netlify](https://www.netlify.com/) as a continuous integration / deployment pipeline, and [Cloudflare](https://www.cloudflare.com/) as a CDN (albeit redundantly, because Netlify also provides a CDN services).

You can learn more about Gatsby via their great [tutorial](https://www.gatsbyjs.org/tutorial/), or their [documentation](https://www.gatsbyjs.org/docs/).

## Requirements
`gatsby-cli`

This can be installed via npm by running: 

`npm install --global gatsby-cli`

## Running in development
In order build your site in development mode at, run the following command:

`gatsby develop`

Assuming it builds successfully, it should render your site at `localhost:8000`

## Running in production
In order to build your site for production, I highly recommend deploying via [Netlify](https://www.netlify.com).

Using their free tier, all you need is to provide them with the following command: 

`gatsby build`

After doing so, netlify should provide you with a temporary (or customizable) url.

## Contributions
Contributions are welcome, however, this site is mostly under private development.

This repository is mostly open to the public because hopefully other's could use this for a similar event.

If you would still like to help out on this site, please file an issue outlining how you'd like to do so.

## Author
[Cooper Kunz](https://github.com/cooper-kunz)

## Acknowledgments
Founder(s) of TED: Harry Marks, Richard Saul Wurman

Current Director of TEDxUofA: [Taylor Eddleman](https://twitter.com/tayloreddlemann)

Creator of GatsbyJS: [Kyle Mathews](https://github.com/KyleAMathews)