/**
 * note that in someFunction(), even after resolve() is called, the flow continues and all logs
 * to console are printed. The Promise is resolved, and the 'reject' is ignored, but it is invoked.
 * if we want to avoid that, we should call 'return resolve()', not just 'resolve()'
 * @returns {Promise<unknown>}
 */

function someFunction() {
    return new Promise( function(resolve, reject) {
        console.log('before resolveing')
        return resolve(123);
        console.log('after resolveing')
        reject(456)
        console.log('after rejecting')
    })
}


function caller() {

    someFunction()
    .then( (retVal) => {
        console.log("retval = " + retVal)
    })
    .catch( (err) => {
        console.error('ohads ERROR: ' + err)
    })
}

caller()