# Astrid Proxy
It's simple, proxying makes things better.

## About
A simple node proxy module that aspires to be like Zuul.


## Alpha Example

Usage:
- fire up anything on port 3000 (e.g., an express app)
- node astrid.js
- curl http://localhost:3001/localhost/any/path/here
// -> You'll get a stream from http://localhost:3000/any/path/here
