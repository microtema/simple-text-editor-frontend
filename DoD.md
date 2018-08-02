**Definition of Done**
* Component Reducers are covered by Unit Tests
* Business Logic in Component are covered by Unit Tests
* Clean Code (DRY, KISS, SOLID)
* Component contains propTypes
* There are no Errors or Warning on Server or Browser Console
* Code is formatted (Default Formatter) (use Save Action from IDE)
* Code does not contains
    * Dead Code 
    * Commented Code
    * Unused Code
    * //TODO
    * //FIXME
    
* Prevent declare window or document in Components, user always root.window or root.window.document from module 'window-or-global'
    
**Guidelines**
* Package by Feature
* Package contains Component and maybe Sub Component(s)
* Component Package contains:
    * index.js
    * Component.js
    * Component.css
    * Component Constants
    * Component Actions
    * Component Services
    * Component Reducers
    * Storage
    * ...
* index.js
    Expose everything that is public 
* Imports
    * Third Party Modules at first
    * Other Components ({*} from **/*.index.js)
    * Package import as last import
* Follow React Guidelines
    * https://github.com/airbnb/javascript/tree/master/react
* Follow Javascript Guidelines
    * https://google.github.io/styleguide/jsguide.html
* Follow Bootrap Guidelines
    * https://getbootstrap.com/docs/4.1/getting-started/introduction/‚

**Pull-Request**
* Primary Reviewer: @mtema
* Required min 2 reviewer
* Changes after approved Pull-Request should reset the Pull-Request status to *unapproved*
