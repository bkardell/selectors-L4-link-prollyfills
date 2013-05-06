selectors-L4-link-prollyfills
=============================
CSS Selectors Level 4 link Prollyfills


What's all this?
================
Prollyfills (speculative polyfills) for CSS link/target pseudo-classes currently proposed in CSS Selectors Level 4 Draft as of http://www.w3.org/TR/2011/WD-selectors4-20110929/.

Why do I care?
==============
Why you should care and participate explained (provide link).

How do I use it?
================
These prollyfills are plugins for the HitchJS CSS Prollyfill Engine... Use it like this:

    <!-- include hitch -->
    <script src="//www.hitchjs.com/dist/hitch-0.6.3.js"></script>
    
    <!-- mark a style or link tag with the data-hitch interpret attribute -->
    <style data-hitch-interpret>
        /* use hitch requires to grab a versioned/tagged plugin */
        @-hitch-requires //rawgithub.com/bkardell/selectors-L4-link-prollyfills/v0.1/src/link-prollyfills.js;

        /* start using it... 
           prollyfills are prefixed for forward compatibility, they are experimental, but non-breaking...
        */
        p:-links-target() { 
            background-color:  yellow;  
        }
        
        a:-links-local(1) {  
            background-color:  green; 
        }
    </style>
    

Demos?
======
Latest demos at ...

http://bkardell.github.io/selectors-L4-link-prollyfills/examples/local/local-links.html
http://bkardell.github.io/selectors-L4-link-prollyfills/examples/target/target-links.html


How can I participate?
======================
Open issues, add examples, send pull requests, send us links and example use-cases to show us where you used it...

Send pull requests, open 
