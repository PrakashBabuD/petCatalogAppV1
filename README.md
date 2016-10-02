# petCatalogApp — this application displays information of pet animals .

This application is implemented  using angularjs framework .
It makes use jsonp request to fetch the data from the server .
A custom angularjs filter is developed  to filter the data based on the 
condition from  the nested object  array  .
A custom directive is  developed to display the pet related information 
in the UI .
It is developed using TDD with test cases written in jasmine .



## Getting Started

To get you started you can simply clone this repository and install the dependencies:

### Prerequisites

1) You need git to clone the repository  .It can also be downloaded as zip .

2) Project depends some  node based tools . You must have node.js and its package manager (npm) installed. 
 You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone petCatalogApp

Clone the petCatalogApp repository using [git]:

git clone https://github.com/PrakashBabuD/petCatalogAppV1.git


### Install Dependencies
 
 Dependencies can be installed by using npm  as shown below.
 
```
npm install
```


### Run the Application

Application is preconfigured with  development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Testing

The application is using jasmine to write the test cases .
Karma is set up to run the test cases .

### Running Unit Tests

The unit test can be started by running the below  supplied npm script:

```
npm test
```

### Unit test report 

After the karma test runner completes the unit testing 
it generates the test report in the folder with path 
karma_html\report-summary-filename\index.html
Already there is one report of the unit test execution .

### End to End Test Automation using Selenium

Selenium automation project setup is done and the the project can be found in the below link :
https://github.com/PrakashBabuD/PetCatalogAutomation









