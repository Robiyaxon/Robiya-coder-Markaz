function see(){
 document.getElementById("word").innerHTML=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis
 tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac
 tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit orem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis
 tortor.  sit lectus. Scelerisque id bibendum velit`
}
function btn() {
    let contact_inp=document.getElementById('contact_inp').value
    let contact_inp2=document.getElementById('contact_inp2').value
    let contact_inp3=document.getElementById('contact_inp3').value
    let contact_inp4=document.getElementById('contact_inp4').value
    if (contact_inp === '') {
        alert('"Name" qatoriga ismingizni kiriting!!!')
    }else if(contact_inp2===''){
        alert('"Last name" qatoriga familyangizni kiriting!!!')
    }
    else if(contact_inp3===''){
        alert('"Email" qatoriga emailingizni kiriting!!!')
    }else{
        alert('✅')
    }
}
$(document).ready(function(){
    let aray=[
        {img:'imgs/aypet2.jpg',class:'tel'},
        {img:'imgs/kompuyuter_0.jpg',class:'aypet'},
        {img:'imgs/soat.png',class:'tel'},
        {img:'imgs/kompiyuter4.jpg',class:'tel'},
        {img:'imgs/tel_tik-tok.png',class:'aypet'},
        {img:'imgs/tel_tel.png',class:'tel'},
    ]
    $(".moree").click(function(){
       let list=''
        for(let i of aray){
            list+=`
    <img class=${i.class} src=${i.img} alt="">
            ` }
            aray.push(aray[0],aray[1],aray[2],aray[3],aray[4],aray[5],aray[6],aray[7],aray[8],aray[9])
        $("#imgs").html(list)
    })
let array=[
    {number:"9854",name:"Projects completed"},
    {number:"840", name:"Clients"},
    {number:"321", name:"Active   clients"},
    {number:"5410",name:"cups of cofee"},
    {number:"9854",name:"Projects completed"},
    {number:"1200",name:"Project"}
]
let number=''
for(let i of array){
    number+=`
    <div class="col-xl-2 col-sm-3 services_resepshin">
    <div class="row">
      <h1 class="number">${i.number}</h1>
      <p class="Projects">${i.name}</p> </div></div>` 
    }
$(".Services_color").html(number)
    let header=[
        {number:"#home",name:"Home"},
        {number:"#what", name:"About"},
        {number:"#works", name:"Services"},
        {number:"#galarea",name:"Portfolio"},
        {number:"#profile",name:"Testimonials"},
        {number:"#blog",name:"News"},
        {number:"#contact",name:"Contacts"},
        {number:"#element",name:"Elements"},
        {number:"#home",name:""},
    ]
        let reseption=''
for(let i of header){
    reseption+=`
      <li class="nav-item LiBlock">
              <a class="nav-link" href="${i.number}">${i.name}</a>
            </li>
   ` 
    }
$(".LiCollapse").html(reseption)
let word_header=[
    {number:"APP DEVELOPMENT",name:"Home"},
    {number:"WEBSITE DEVELOPMENT", name:"About"},
    {number:"UI/UX DESIGNING", name:"Services"},
    {number:"DIGITAL MARKETING",name:"Portfolio"},
    {number:"SEO & CONTENT WRITING",name:"Testimonials"},
    {number:"GRAPHIC DESIGNING",name:"News"},
    {number:"PYPON",name:"Contacts"},
    {number:"FLUTTER",name:"Elements"},
    {number:"REACT JS",name:"Elements"},
    {number:"DART DEVELOPMENT",name:"Elements"},
    {number:"WEB DEVOLEPEN",name:"Elements"},
    {number:"1200",name:"Elements"}
]
$("#oop").click(function(){
    let list=''
     for(let i of word_header){
         list+=`
         <div class="ABOUT_block">
                <div class="ABOUT_h1">
                  <h1>${i.number}</h1>
                </div>
                <div class="ABOUT_p">
                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="ABOUT_a"> <a href="">Contact us</a></div>
                <div class="ABOUT_img">
                  <img src="imgs/blue.png" alt="">
                </div>

              </div>
     
       </div>
         ` }
         word_header.push(aray[0],aray[1],aray[2],aray[3],aray[4],aray[5],aray[6],aray[7],aray[8],aray[9])
     $(".ABOUT_wrapper").html(list)
 })

})