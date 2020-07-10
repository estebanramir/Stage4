# Movie Sharkers PoC
This application was Developed in NodeJS.

Before run it make sure you have installed:
 - NodeJS (https://nodejs.org/en/)
 - MongoDB (https://www.mongodb.com/es)

### To run it:

```
- git clone https://github.com/estebanramir/Stage4.git
```
In the root folder of the project:
```
- run npm i
- run node index.js
```
### To test it:

Test the url:

#### [POST] http://localhost:8080/rank

##### with a Json body:
```
{
    "name":"String",
    "movie":"String",
    "rating": Int 
}
```