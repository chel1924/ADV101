const user = {
    name: "Chrishel",
    address: {
        city: "Davao",
        zip: "8000"
    }
}

const { address: { city } } = user;
console.log(city);