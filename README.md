#Sepomex JS library v1.0.0

sepomex-js is a client wrapper which communicates with the [SEPOMEX API](http://developers.cic.mx/api/), and interact with it.

## Table of contents
- [Quick start](#quick-start)
- [Usage](#usage)
- [Bug tracker & feature request](#bug-tracker-&-feature-request) 
- [Contributing](#contributing)
- [Heroes](#heroes)
- [License](#license)


## Quick start

You have three options to install sepomex-js library and start using it:

* Clone the repo: `git clone https://github.com/IcaliaLabs/sepomex-js.git`.
* Install via bower: `bower install sepomex-js`.
* Install via npm: `npm install sepomex-js`.

## Usage

You can easily start using the client:

```javascript
  //This call will fetch for zip codes with city 'guadalupe' and state
'nuevo leon'
  Sepomex.where({city: "guadalupe", state: "nuevo leon"})
```

### Available parameters

You can send some options to the find method in order to filter the request:

* colony - filter by colony
* city - filter by city
* state - filter by state
* cp - filter by zip code
* callback - A function to call when the request has been success

Here is a quick example:

```javascript
Sepomex.where(
  {
    "city": "Guadalupe",
    "state": "Nuevo leon",
    "colony": "punta contry"
  },
  function(response){
    console.log(response.length)
  }
)
```

**Check for the api [specification](https://github.com/IcaliaLabs/sepomex) for more documentation on it.**

## Bug tracker & feature request

Have a bug or a feature request? [Please open a new issue](https://github.com/IcaliaLabs/cic-js/issues). Before opening any issue, please search for existing issues.

## Contributing

Please submit all pull requests against a separate branch. Please follow the standard for naming the variables, mixins, etc.

## Heroes

**Abraham Kuri**

+ [http://twitter.com/kurenn](http://twitter.com/kurenn)
+ [http://github.com/kurenn](http://github.com/kurenn)

## License

Code and documentation copyright 2015 Icalia Labs. Code released under [the MIT license](LICENSE).
