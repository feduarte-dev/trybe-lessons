// Remova a tag h2, filha do elemento where-are-you.
const pai = document.querySelector('#where-are-you');
const filho = document.querySelector('#where-are-you').children
pai.removeChild(filho[0])
