const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(names) {
    cats.push('Ralph');
}

function destructivelyPrependCat(names) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(names) {
    cats.pop();
}

function destructivelyRemoveFirstCat(names) {
    cats.shift();
}

function appendCat(name) {
    const cats2 = [...cats, name];
    return cats2
}

function prependCat(name) {
    const cats2 = [name, ...cats];
    return cats2
}

function removeLastCat(names) {
    const cats2 = cats.slice(0, 2);
    return cats2
}

function removeFirstCat(names) {
 const cats2 = cats.slice(1);
 return cats2
}