const menuItems = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}
);
document.body.appendChild(ul);
