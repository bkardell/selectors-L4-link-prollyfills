selectors-L4-link-prollyfills
=============================
CSS Selectors Level 4 link Prollyfills


What's all this?
================
Prollyfills (speculative polyfills) for CSS link/target pseudo-classes currently proposed in CSS Selectors Level 4 Draft as of http://www.w3.org/TR/2011/WD-selectors4-20110929/.
They are author named, rather than vendor prefixed so you can use them in a website today with a single prefix, get experience using them, contribute and not worry about 
your site breaking out from underneath you as a spec evolves - you lock in to what you wrote against, just like you would with any library in any other language.
The path to native should be easy should the spec get implemented.

Why do I care?
==============
Here are some links that explain:
* [Extend the Web Forward by Yehuda Katz](http://yehudakatz.com/2013/05/21/extend-the-web-forward/)
* [Dropping the F-Bomb on Web Standards by Brian Kardell](http://briankardell.wordpress.com/2013/05/17/dropping-the-f-bomb/)
* [Prollyfill.org](prollyfill.org)


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
    

Can I see some Demos?
======
Sure, here are some simple demos...

* http://bkardell.github.io/selectors-L4-link-prollyfills/examples/local/local-links.html
* http://bkardell.github.io/selectors-L4-link-prollyfills/examples/target/target-links.html


How can I participate?
======================
 * Use it now!  This can give us invaluable information to help successfully evolve the platform
 * Open issues if you find some.  I welcome subjective comments too - I will do my best to represent them to www-style if you feel that that is too much work for you.
 * Send me a pull in this readme adding somewhere where you've used it/how - describe your use case and how it worked out
 * Add examples, send pull requests if you can make them better
 * Write some reftests: You can use [snaps](https://github.com/bkardell/snaps) to contribute simple ones and send a pull for reftests.json.  If you want to go all out, here is [an excellent presentation by Adobe](http://adobe.github.io/web-platform/presentations/testtwf-how-to-write-a-reftest) on writing official W3C reftests for Test The Web Forward.  Let's try TDD for Web Standards, can you imagine?


Want even better ways forward?  See [extensiblewebmanifesto.org](extensiblewebmanifesto.org) and #extendthewebforward.
