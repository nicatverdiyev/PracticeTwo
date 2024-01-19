const icons = document.querySelector('.searchIcons');
const search = document.querySelector('.searchh');
icons.onclick = function (e) {
    search.classList.toggle('active')
}