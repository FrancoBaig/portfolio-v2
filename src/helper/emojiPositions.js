const positions = [
    "top-3/4 right-1/4 -mr-20",
    "top-3/4 right-1/3 mr-24 -mt-10",
    "top-1/4 left-3/4 md:left-1/2 md:ml-28 md:-mt-15",
    "-mt-16 top-1/4 left-3/4 ml-6 md:left-3/4 md:mt-40",
    "bottom-1/4 left-1/4 -ml-20 -mb-8 md:ml-20 md:-mb-20",
    "bottom-1/2 left-1/4 -ml-20 -mb-28 md:-mb-20 md:-ml-40",
    "top-1/4 left-2/4 -ml-4 -mt-16 -mb-8 md:top-3/4 md:-mt-5",
    "top-1/4 left-1/4 -mt-16 -ml-20 -mb-8 md:top-1/4 md:-mt-15",
    "top-3/4 right-2/3 md:top-1/3 md:right-3/4",
    "top-3/4 right-1/3 md:top-1/3 md:right-1/3 md:-ml-20",
];

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

export const addPositionsToIcon = (array) => {
    shuffleArray(positions);

    return array.map((icon, index) => {
        return {
            ...icon,
            props: positions[index],
        };
    });
};
