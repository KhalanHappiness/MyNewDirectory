### how does the web work
works by connecting clients and servers over the internet using requests and responses to deliver web pages and applications

frontend interface (HTML, CSS, js)

json
Middlewares(Intermediaries between the front)



html will always arrange things in a verticle way
HTML ELEMENTS: creation of the structures of a page
types of elements
block - occupies the entire row section eg div p
inline - occupies what the element requires eg ,a, img

### CSS
For styling the elements
layout and responsiveness

when writing CSS we have 3 modes of Styling HTML elements using CSS
inline styling : style attribute to include our css styling
internal: style element in the head 
external styling: styling element in an extenal css file

syntax

Selector{
    property: value
}
justify-content
flex direction - stacks the buttons vertically
The link element does not have a closing tag

### html semantics
html elements that clearly describe the meaning and role to both browsers and developers
### why do we need
to improve seo (search engine optimization )
code readerbility

header represents the page or section header
nav contains the navigationlinks
main - contains the main content of the page should be one per page
section- a section of content
articles - an indipendendent piece of content
aside side content like ads or a sidebar
footer the bottom part of the page
figure and fig captiom groups and image with its caption
mark highlights text for importance
time represents date or time
selector specificity - looks for the selector and the specificity you have gieven to that selector


### css positioning

Static the default position of elements they follow the normal document flow

relative: moves an element relative to its normal position

absolute: The element is removed from the normal document flow and position relatively to the nearest element / ancestor

fixed: The element is fixed to it's position even on scrolling

Sticky: The element acts as like its in a relative position until scrolled past then it sticks

margin creates margins between elements
padding space inside the element between its content and the border

### CSS grid system
2-d system mthat allows you to partition your web page into rows and columns
### key concepts in the grid system
1. grid container: the parent element where the grid is defined: display grid;

2. grid items: The child elements inside the grid container / partitions of my page
3. grid ares: A group of grid cells that define the partitions
4. grid template columns: Will help you define column sizes
5. grid template rows: Will help you define row sizes
6. grid template areas: define named regions in the grid

                            navbar
menu                                                                       m           

### Media Queries
viewport
Should be written directly below the default styling

### FUNDAMENTALS OF PROGRAMMING
Programmimg is a process of writing instructions for a computer to execute 
These instructions are written via programming languages like JS python Java C++

### Key  concept
1. Algorithms (a step by step procedure followed to solve a problem) and logic writing
2. Variables and data types
3. Control structures (Flow of execution)
    a/ conditional statements - Selection 
    b/ loops - Repetition
 4. function to group code pieces together for the purposes of reusability
 5. OOP object oriented programmingm/ Document Object Model
 6. Error handling and debugging

 ### JAVASCRIPT
 1. Dynamic: no need to specify the data type
 2. Interpreted: runs directly in browsers without compilation
 3. Event-Driven: responds to users actions
 4. Versatility: Works on both front end and back end{nodeJS}
 5.
 
 ### Why learn javascript
  1. It runs everywhere
  2. it has a huge echo systme
  3. has friendly frameworks
  4. Most popular web language

  ### VARIABLES
  variables store data (what is the data types?)

  - Declaring variables 
  a. var (old way, function-scoped)
  Did not have a particular scope to be bounded to 
  b. let (modern. block-scoped): mutable
  c. const (constant, variable cannot be reassigned)

  - scope refers to the accessibility of the variable

  ### JAVASCRIPT SCOPE : understanding a variable visibility and lifetime
  determines the visibility of of your variable s functions objects and in different parts of your code

  ### 4 types of scope

  1. global scope
  2. local/ Function scope - variables declared within a function
  3. block scope
  4. lexical scope

### Conditional statements
Allows us to to control the flow of programs based on conditions
They help us to made a decision

1. if statement


### Functions
reusable blocks that can take input process it and return a desired output

1. Function declaration : Whane you need a function that can be hoisted

what is hoisting? a function is accessible before its declaration in code

2. Function expressions: when variable values are actual functions
3. Arrow functions: A more concise way  of writing your functions

###  DATA STRUCTURE
A way of organizing storing and managing data

1. primitive data structures - data types resulting to single values
let name = "Joseph";
let x = 80

Non primitives
2. linear data structure: A collection of items :: ordered collection of items. Stores element sequentially
- arrays - collection of elements stored in a index order
when we need need fast access to the elements in the collection via index
- Linked lists
- stacks
- Queues
3. non linear data structures :: They store data in complex ways but access to that data is very fast
- trees: DOM in web pages
- graphs
- Hash tables

### Objects
A collection of key and pair values normally referencing a single entity.

### Reasons for using data structures
improved performance
to optimize our memory usage

what kind of data structure is a search engine using? homework

### DOM : Document object model
this is a programming interface for web documents
Rpresents the structure of your HTML as a tree of objects
Any element within a html docs is called a node

            html

     head       body
            header main footer
                   article


DOM allows js to manipulate, modify and update the content structure and styling of a web page
<div>
<p>This is a paragraph</p> 
</div>


### KEY CONCEPTS IN DOM
1. Understand the DOM tree structure
nodes - anything that appears on the document object model
Document node : !Doctype - represents the whole tree as a HTML document
Element nodes : HMTL elements
Text Nodes: actual text inside an element/ content
Attribute nodes: represents attributes used in the elements id, class , srrc alt
comment node: comments
2. Accessing Elemets in DOM Javascript
- document.getElementById("id of an elememt") 
- document.getElementByClassName("class name of the element") Selects all elements with the class name
- document.getElementByTagMame("P") selects all the tags the match/ that do not have a class or id
- document.querySelector("Class name of the element/tag name") selects the first element in the collection
- document .querySelectorAll("class name/ tag name") # selects all elements matching the Query
 
 3. Creating and removing Elements::Create/remove HTML elements dynamically.
 4. Modifying Elements::change text,attributes,styles dynamically.
 5. Event Handling:: Respond to user eventsi.e. click,submit,mouse over,hover,scroll, page load 

index to html has to be your landing page

### Deploying on GH 


### Author name
happiness

### Running instructions
1. link to your page

instrucutions to run your project

## concept
html css javascript

aob
built this during phase one of my learning at moringa school 
media Query : responsiveness set at width 780 px




