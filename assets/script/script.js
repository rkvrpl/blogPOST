"use strict"
const container = document.querySelector('.container');
const header = document.querySelector('.input_header').value;
const text = document.querySelector('.input_text').value;
const button = document.querySelector('.button');

const createElem = function(post){
    const newElem = document.createElement('div');
    newElem.innerHTML += `<h2>${post.title}</h2>
                            <p>${post.body}</p>`;
    container.append(newElem);
}

const addPost = function(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: `${header}`,
            body: `${text}`,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(response => response.json())
        .then(data => createElem(data))
        .catch(error => console.error('Ошибка:', error));
}