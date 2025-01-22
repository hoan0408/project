var btnOpen = document.querySelector('.Open-model');
var modal = document.querySelector('.model');
var btnClose = document.querySelector('.model-header i');
var iconClose = document.querySelector('.model-footer button');

function togglemodel()
{
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click',togglemodel)
btnClose.addEventListener('click',togglemodel)
iconClose.addEventListener('click',togglemodel)
modal.addEventListener('click',function(e)
{
    if(e.target == e.currentTarget)
    {
        togglemodel();
    }
})