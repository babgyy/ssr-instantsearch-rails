# Why this repo

This repo is a demo case of what I would like to accomplish : 

- using Algolia's React Instantsearch
- leveraging the client-side search 
- with a pre-rendering of the results server-side (for SEO reasons)
- using a Ruby on Rails server

Showcase for issue https://github.com/algolia/react-instantsearch/issues/2191

# How to setup 

For general instructions on how to setup Ruby 2.5.3, Bundler and Rails [go there](https://gorails.com/setup/). 

```
git clone git@github.com:babgyy/ssr-instantsearch-rails.git
cd ssr-instantsearch-rails
bundle install
bundle exec rails db:create
bundle exec rails db:migrate
yarn 

# in one tab
./bin/webpack-dev-server 

# in another tab
bundle exec rails s
```

Then visit [localhost:3000](http://localhost:3000)

Now uncomment `REF1` in `app/javascript/components/PostSearch.js` and see the rendering fail

# Argument

`react-instantsearch` NPM package allows me to build a client-side search UI (file `app/javascript/components/PostSearch.js`)

`react-rails` gem allows to easily do server-side rendering. See file `app/views/welcome/index.html.erb` or search `REF2` in the project

`algoliasearch-rails` gem allows to search Algolia from the server and easily map ORM and Algolia indices. See `REF3`

SEO-wise, I need to prerender the search engine with a list of results coming from a combination of search parameters. This repo shows how to do all of this, but fails to feed InstantSearch component with raw JSON response from the algolia ruby client.


https://github.com/algolia/react-instantsearch/issues/2191
