# Object-Iteration
- <a href="https://github.com/VGDJP-07/phase-0-intro-to-js-2-object-iteration">Link to lab</a>

for...of statement.
- Usage:
    - Use a for...of statement anytime you want to iterate over an array.
    - Syntax:<br>
        for (let i = 0; i < array.length; i++) {<br>
        // Loop body<br>
        }

for...in statement.
- Usage:
    - Use a for...in statement whenever you want to enumerate the properties of an object.
    - Syntax:<br>
        for (const [KEY] in [OBJECT]) {<br>
        // Code in the statement body<br>
        }
 
 Note:
 
for...in and order

Because arrays are objects, for...in will work with arrays. In fact, because for...of was added to JavaScript later than for...in, you might see older code that uses for...in to iterate over arrays. However, as a general rule, don't use for...in with arrays. When iterating over an array, an ordered collection, we would expect the elements in the array to be dealt with in order. However, because of how for...in works under the hood, there's no guarantee of order. From the MDN documentation (Links to an external site.):

> A for...in loop iterates over the properties of an object in an arbitrary order ... one cannot depend on the seeming orderliness of iteration, at least in a cross-browser setting).

What this means is that, with for....in, different browsers might iterate over the same object's properties in different orders. That's not cool! Cross-browser consistency is very important. A lot of progress has been made towards standardizing the behavior of for...in across all major browsers, but there's still no reason to use for...in with arrays when we have the wonderfully consistent for...of tailor-made for the job.

Resources:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">MDN — for...of</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">MDN — for...in</a>
