Pre-requisite
-------------

1.  install [nodejs](http://nodejs.org/)

2.  install the server dependencies: 
  * cd bb-training
  * npm install -g grunt-cli
  * npm install

3. step 3
  * launch the server: grunt
  * goto localhost:3000


Handson: from todo to done (2h30)
---------------------------------

1. step 1
  * create a view arround the #todoapp el
  * this view should listen to the enter key press
  * create a todos collection and a the newly created item
  * add a li in the #todo-list representing this model
  * tips: $('#stats-template').html() get the template content _.template compiles it

2. step 2
  * create a view for each todo model to handle individual events
  * move the li templating to this view
  * append this view el to its parent destination
  * tips: the attribute tagName defines the root node of the view

3. step 3
  * in this new view, handle the click on .toggle by changing a model attribute
  * render the view on the model change event to reflect the status of the todo
  * tips: every backbone component have a this.listenTo(emitter, 'event', action) method

4. step 4
  * add the delete action
  * add the edit action (with li class .editing), the input should appear with the existing value

5. step 5
  * in the parent view, add a footer showing how many todos are completed and remaining
  * add the 'clear completed' action
  * add the 'all done' action (clicking on the double arrow above chekmarks)

6. step 6
  * change the hashtag in the history when clicking on 'active', 'completed' or 'all'
  * add a router to capture this change
  * filter the view with only the 'active' todo or 'completed' todos
  * tips: Backbone.history.navigate('url', {trigger: true})


Handson: AMD with requirejs (1h30)
-----------------------------------

1. step 1
  * add requirejs to the index.html
  * transform every file into a module with the define method
  * add a require method with the dependencies
  * tips: //requirejs.org/docs/api.html#config-shim 

2.  extract each template to one file in a js/templates folder

3.  verify everything is working

4. step 4
  * create a grunt task to create a minified version
  * replace the actual script in index.html with the minified one
  * verify things are still ok

Handson: Unit testing with Mocha & Chai (1h30)
----------------------------------------------

1.  create a collection of todos and assert filters are working

2.  create an item view with a model and assert render returns the correct html

3.  do the same with a collection view

4.  on this collection view, assert its behavior (when a model is checked, edited, deleted, etc)

Handson: advanced
-----------------

1.  make the first todo view read only using inheritance

2.  create a unique instance of the todos collection for the all app

3.  validate each todo title do not contains those characters ! # $ % & and display an error

4.  create a default error handler for every failing server request

5.  using jQuery.ui, make the todos sortable (their order can be changed with drag&drop)

6. step 6
  * show the input:search on top of the index.html file
  * on every character, filter the todos on their value

7. step 7
  * show the pagination at the bottom of the index.html file
  * instead of getting every todos, get them 10 by 10 and paginate
  * store the pagination in the url

8.  replace the templating engine with handlebars and create a helper to capitalize every first letter