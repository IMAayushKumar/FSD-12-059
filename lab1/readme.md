# EventLoop
"JS is Synchronous and single-threaded by default".
## There can be async behavoir 
- with broswerAPI - setTimeout,SetImmediate,nextTick
- with promises.
- with eventHandlers
# Promises

    Promises-A function not execeuted immediatley but it must be exececuted after a while. It has some status during the execuetion.At final it mat resolve()-success and reject()-Unsuccessful.

# Callback
    it is an another function that use an argument into first function.

# JS-types
    modern js is divided into 2 categories:
    1-Common JS(.cjs)-support OOPS.-require Keyword
    -first proirity (nextTick > Promises > setImmediate/setTimeout).

    2-Module JS(.mjs)-follow modular approch OR using functoin-import.
    -priority (Promise > nextTick > SetTimeout/setImmediate)
    