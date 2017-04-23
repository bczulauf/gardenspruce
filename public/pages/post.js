const parseLink = (str) => {
    const re = /\[([^\[]+)\]\(([^\)]+)\)/;
  return str.replace(re, '<a href=\'\$2\'>\$1</a>');
}
const rules = [
    parseLink
]

function render(str) {
    rules.forEach((rule) => {
        str = rule(str);
    });
    
    return str;
}

function loadPost(data) {
    firebase.database().ref(`posts/${data}`).once('value').then((snapshot) => {
        const val = snapshot.val();
        const post = render(val.body);
        const template = `<div class="section">${post}</div>`;
        page.innerHTML = template;
    });
}