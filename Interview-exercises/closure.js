// Create a function which stores inside a secret word which cannot be
// changed or accessed from outside

const someFn = () => {
    const secret = "secret";

    return () => secret;
};

const getSecret = someFn();
console.log(getSecret());