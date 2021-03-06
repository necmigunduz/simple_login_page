# How do relative, fixed, absolute, and statically positions differ?

Static positions an element as independent of left, right, top, and 
bottom properties in css and 
the element statically positioned follows the normal flow of a page.

Relative positions an element in a normal page flow. So it follows 
the normal page flow all the time. 

Fixed positions an element relative to the viewport, and it stays at the same place 
when a user scrolls down or up the page. 

Absole positions an element relative to the closest ancestor element, 
and it moves when this ancestor element moves. If this element is not inside in 
another element, then it positions  this element relative to the page. It moves
when the page is scrolled down or up.

# What is the difference between variables created using let, var, and const?

The scopes of let and const are block scopes while the scope of var is functional scope.
let and var can be declared without initialization while const requires initialization.
Any variable declared by var can be accessed without initialization while 
it returns 'undefined'. Variables declared by const and let cannot be accessed without initialization.

# What must be developed first, desktop or mobile view, and why?

Developing the largest screen with the more number of elements in a design is better. Therefore,
developing desktop version, then tablet version, and then mobile version makes production of a 
webpage or an app faster. Just hiding the unnecessary elements for smaller sized screens would be
easier. 

# What is the difference between an alert and an alert dialog? Also, walk us
through the appropriate instances to use them.

Alert includes a header, a message, and an event to warn a user about the action he or she takes. 
Alert dialog is a lighter version of alert and it includes an informative message to a user about
an action she or he takes.

# What is the difference between a link, a generic button and a submit button?
Walk us through the appropriate instances to use them.

Link is an easy way of leading a user to another webpage or an element located somewhere else,
and it is a simple action.

Button is for relatively more complicated processes including actions requiring creating 
a connection between front-end and back-end structures. For button triggers and event controlled 
by an event handler function.

# React (how the component cycle works, if you have experience with Redux
Reducers/Actions, Webpack, code efficiency, optimization, and performance).

There are pre-defined functions for class components in react starting with mounting, 
then rendering, then updating, and then finally unmounting. When writing new functions 
influencing state, developer needs to follow one of these lifecycle methods. For instance,
if you are willing to implement a change in the state after showing the page to users,
designer needs to use a lifecycle methods coming after render. Or if you are fetching a data
that is shown to users at their first HTTP request, you need to do this fetching before render.  

Redux is a managable container for state more efficiently. Designer can build all the necessary
actions to be used in a page in Redux actions. Keeping all actions in Redux makes it easier to 
develop pages with states and debug them.  

Webpack is a bundler that makes different elements used in a page work together efficiently.It 
provides better optimization.