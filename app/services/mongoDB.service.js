const getLoginUser = () => ({
    id: "5fbb210b4826fc5d08dc9381",
    firstName: "Riley",
    lastName: "Abrahamson",
    email: "riley.abrahamson@ndsu.edu",
    password: "DoubleEyes2!",
    favPark: "North Fargo Dog Park",
    dogName: "Cooper",
});

const getParks = () => [
    {
        id: "5fbb1917a632915e007ad6f3",
        parkName: "North Fargo Dog Park",
        address: "1201 28th Ave N",
        city: "Fargo",
        state: "ND",
        zipcode: "58102",
        breedSize: "Any",
        count: 2,
    },
    {
        id: "5fbb1984a632915e007ad6f4",
        parkName: "Village West Dog Park",
        address: "4415 9th Ave Cir S",
        city: "Fargo",
        state: "ND",
        zipcode: "58103",
        breedSize: "Any",
        count: 3,
    },
    {
        id: "5fbb19a2a632915e007ad6f6",
        parkName: "Brandt Crossing Dog Park",
        address: "4415 9th Ave Cir S",
        city: "Fargo",
        state: "ND",
        zipcode: "58104",
        breedSize: "Large",
        count: 4,
    },
    {
        id: "5fbb19e9a632915e007ad6f7",
        parkName: "Dike East Dog Park",
        address: "600 3rd St S",
        city: "Fargo",
        state: "ND",
        zipcode: "58103",
        breedSize: "Any",
        count: 2,
    },
];

const getCheckIns = () => [
    {
        parkID: "5fbb1917a632915e007ad6f3",
        userName: "Charles",
        dogName: "Arlo",
    },
    {
        parkID: "5fbb1917a632915e007ad6f3",
        userName: "Beth",
        dogName: "Lady",
    },
    {
        parkID: "5fbb1917a632915e007ad6f3",
        userName: "Beth",
        dogName: "Cheeto",
    },
];
export { getLoginUser, getParks, getCheckIns };
