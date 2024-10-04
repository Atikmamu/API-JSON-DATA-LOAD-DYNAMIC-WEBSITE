console.log(1);
console.log(2);
setTimeout(() => {
    console.log('lazy logged');
}, 4000)
console.log(4);
console.log(5);

function doSomething(){
    console.log(3);
}


console.log('i');

// this will be shown after 2 seconds 

setTimeout(() => {
    console.log('eat');
    }, 2000)

    console.log('ice cream')


    setTimeout(() => {
        console.log('atik')
    }, 3000)

    console.log('ami')

    console.log('i')
    setTimeout(() => {
        console.log('atik')
    }, 2000)
    console.log('ami')