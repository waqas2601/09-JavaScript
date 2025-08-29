// XHR wrapped in a promise //

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(`Error ${xhr.status}: ${xhr.statusText}`);
      }
    };

    xhr.open = function () {
      reject("Network Error");
    };
    xhr.send();
  });
}

// Now we can use it like this //
getData("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => {
    console.log("Success", data);
  })
  .catch((error) => {
    console.log("Failed", error);
  });
