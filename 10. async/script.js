function fetchData() {
    return new Promise((resolve, reject) => {
        // 비동기 요청 
        const success = false;
        if (success) {
            resolve('성공');
        } else {
            reject('실패');
        }
    })
}

// fetchData()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response1 => response1.json())
//     .then(json1 => console.log(json1))
//     .then(() => fetch('http://ㅈㄷㄹㅈㄷㄹㅈㄷㄹㄷㅈjsonplaceholder.typicode.com/todos/2'))
//     .then(response2 => response2.json())
//     .then(json2 => console.log(json2))
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('작업 끝!')
//     })

async function makeRequests() {
    try {
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1')
        const jsonResponse1 = await response1.json();
        console.log(jsonResponse1);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('---모든 작업 끝---')
    }
}

makeRequests();


// Browser Object Model  (BOM)
window.location
window.navigator
window.history
window.screen

window.document

