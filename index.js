const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Graciasporperdonarme:D te amo muchísimo mibida, tenme paciencia pofavo): estoy chikito y todavía no razono bien, soyunbabosazo, tu babosazo, y tú eres mi renegona favorita, mi esponjadita preciosa<3 RECUERDA Y TEN SIEMPRE PRESENTE QUE TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMO TE AMOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-$(randomX)%,-$(randomY)%`);
})