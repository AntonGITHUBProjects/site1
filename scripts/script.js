var button1=document.getElementById('1');
var button2=document.getElementById('2');
var button3=document.getElementById('3');
var img1=document.getElementById('comp1')
var img2=document.getElementById('comp2')
var img3=document.getElementById('comp3')
button1.addEventListener('click',function(){
	img1.removeAttribute('hidden','');
	img2.setAttribute('hidden','');
	img3.setAttribute('hidden','');
});
button2.addEventListener('click',function(){
	img1.setAttribute('hidden','');
	img2.removeAttribute('hidden','');
	img3.setAttribute('hidden','');
});
button3.addEventListener('click',function(){
	img1.setAttribute('hidden','');
	img2.setAttribute('hidden','');
	img3.removeAttribute('hidden','');
});
