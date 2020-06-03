# 👏 Kudos as a service

Pretty self explanatory - send kudos to your friends, colleagues and loved ones!

## Why?

Ah, see, that's a good question... I don't really know! It was mostly because I thought it would be fun to build!

Took a lot of inspiration from https://foaas.com/ 👈 but, you know, its the opposite.

## Entries

The application itself consumes its own API through [SWR](https://swr.now.sh/)

Which leaves us with two entry points

### API

All things `http://localhost:3000/api/v1` onwards refers to the API. The API handles all things related to fetching data from Giphy and formatting back a correct message for the UI

### React app

All things `http://localhost:3000/` _(without /api)_ refers to the UI itself.

They both share `query` params as the UI sends them to the API

For example:

UI 👇

`http://localhost:3000/kudos/John%20Doe/Great%20Work/?gif=true&customMessage=&gifTag=congratulations`

API 👇

`http://localhost:3000/api/v1/John%20Doe/Great%20Work/?gif=true&customMessage=&gifTag=congratulations`

## Running locally

Once you've cloned this repository, go ahead and run

```
yarn
```

or

```
npm i
```

Then, since this is a [Next.js](https://nextjs.org/) application simply run

```
yarn dev
```

or

```
npm run dev
```

## Contributing

YES PLEASE! - Sorry I lost my cool for a second. I would love to see more people contribute to this project. I believe it has some potential 😊

_Disclaimer: please keep in mind that this is an MVP_
