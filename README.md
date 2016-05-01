# Front End Command Line

Produced for the [May 2016]() talk for the [Mid Hudson Valley Linux Users Group](), this project serves these purposes:
- It contains the slides and interface for the talk itself.
- It is produced using the tools and techniques in the talk.
- It serves as the demo for many differnt locations in the talk

### Getting Started
Open a terminal and do the following:
1. <dt>Clone the repo</dt> <dd>`git clone https://github.com/aljachimiak/front-end-cli.git`<dd>
2. <dt>Bring up the Vagrant box</dt> <dd>`vagrant up`</dd>
3. <dt>ssh into the vagrant box</dt><dd>`vagrant ssh`</dd>
4. <dt>Change to the `front-end` directory</dt> <dd>`cd front-end`</dd>
5. <dt>Install the npm dependencies</dt> <dd>`npm install`</dd>
6. <dt>Install the bower dependencies</dt> <dd>`bower install`</dd>

<dt>Making changes? at the same terminal prompt start the gulp watch task to watch your `.scss` and `.jsx` files and automatically rebuild the related assets.</dt> <dd>`gulp`</dd>

Open a web browser and navigate to `localhost:8080` to see the result.  
