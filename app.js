// changeTitle = (btn) => {
//    const trNode = btn.parentElement;
   
//    const span = trNode.childNodes[1];
//    console.log(span)
   
  
//    span.remove();

//    const para = document.createElement('div');
//    para.innerHTML=`<div class="form-outline col-lg-5 ">
//    <input type="text" id="form12" class="form-control" />
//    <label class="form-label" for="form12">Example label</label>
//  </div>`;

//  trNode.insertBefore(para, btn);
//    console.log(trNode);
   
// }

function deletee(btn) {
    const parentNode = btn.parentElement.parentElement;
    const name = parentNode.childNodes[5];;
    const nameP = name.childNodes[3];
    nameP.remove();
    const para = document.createElement('div');
    para.classList.add('#form-outline');
    para.innerHTML=`<input type="text" id="form12" class="form-control" oninput="getValue(this)"/>
    <label class="form-label" for="form12"></label>`;
    name.appendChild(para);

    const button = parentNode.childNodes[7];
    button.remove();
}

function getValue(input) {
    const parentNode = input.parentElement.parentElement;
    const inputValue = parentNode.childNodes[4].childNodes[0].value;
    console.log(parentNode.childNodes[4]);
    const array = [];
    array.push(inputValue);
    console.log(array);
}



