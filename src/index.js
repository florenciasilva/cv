
const underlineColors = ['paleturquoise', '#c4ffc4', 'thistle', 'bisque', 'silver', 'lightpink', '#dcc77d', '#bb829c'];

document.querySelectorAll('.title').forEach( (element, i) => {
    element.style['text-decoration-color'] = underlineColors[i]
});

const populateParagraphs = (language) => {
        document.querySelectorAll('.content').forEach((element, i) => {
            element.innerHTML = language[i];
        });
};

const populateTitles= (language) => {
    document.querySelectorAll('.title').forEach((element, i) => {
        element.innerHTML = language[i];
    });
};

populateParagraphs(eng);
populateTitles(engTitle);

