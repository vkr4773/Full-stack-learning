//wrapping another async function

// function myOwnSetTimeout1(fn ,duration){
//     setTimeout(fn, duration);
// }
// myOwnSetTimeout1(function(){
//     console.log("log the first thing");
// }, 1000);





//Using Promise 


function myOwnSetTimeout(duration) {
    let p = new Promise(function (resolve) {
      // after 1 second, call resolve
      setTimeout(resolve, duration);
      resolve("Hi from Promise");
    });
    return p;
  }
  
//   myOwnSetTimeout(1000)
//     .then(function () {
//       console.log("Hi Promise");
//     });

async function main(){
    const value = await myOwnSetTimeout(1000);
    console.log(value);
}

main();



class myOwnPromise {
    constructor(fn){
        this.resolve = null;
        this.reject = null;
        this.state = "pending";
        this.value = null;
        this.error = null;
        fn(this._resolve.bind(this), this._reject.bind(this));
    }

    _resolve(value){
        this.state = "fulfilled";
        this.value = value;
        if(this.resolve){
            this.resolve(value);
        }
    }

    _reject(error){
        this.state = "rejected";
        this.error = error;
        if(this.reject){
            this.reject(error);
        }
    }

    then(callback){
        this.resolve = callback;
    }

    catch(callback){
        this.reject = callback;
    }
}