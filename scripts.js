const content = [
{
    image: 'images/project-a.jpg',
    text: 'Description of Project A'
},
{
    title: 'Custom 8-bit CPU',
    image: 'media/prodetails.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac gravida leo. Nam mi ipsum, tristique at enim quis, feugiat pharetra ante. Sed eu odio a magna facilisis consectetur. Aliquam erat volutpat. Fusce semper ante in interdum commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus euismod ac est in ultricies. Integer sit amet.'
},
{
    title: 'Investment Thesis: DNUT US',
    image: 'media/projectstop.png',
    text: 'Description of Project C'
}
];

function changeContent(index) {
document.getElementById('project-title').textContent = content[index].title
document.getElementById('project-image').src = content[index].image;
document.getElementById('project-description').textContent = content[index].text;
// smoothly scrolls to the top of the page
window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
}

