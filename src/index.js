
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

document.querySelector('.esp').addEventListener('click', (event) => {
    populateParagraphs(esp);
    populateTitles(espTitle);
});

document.querySelector('.eng').addEventListener('click', (event) => {
    populateParagraphs(eng);
    populateTitles(engTitle);
});

populateParagraphs(eng);
populateTitles(engTitle);

