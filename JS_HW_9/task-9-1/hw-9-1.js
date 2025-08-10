//  ================================#8Nmt60ZT//
const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.backgroundColor = 'lightblue';
block.style.color = 'darkblue';
block.style.fontSize = '20px';
block.innerText = ' додати цей блок в body.';
document.body.appendChild(block);
const clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);
