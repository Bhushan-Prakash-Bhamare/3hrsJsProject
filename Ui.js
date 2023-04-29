const exForm=document.getElementById('expform');
const displayList=document.querySelector('.list-group');
exForm.addEventListener('submit',formSubmit);


function formSubmit(e)
{   
    e.preventDefault();
    const addNewelem=document.createElement('li');
    addNewelem.className="list-group-item bg-light";
    const amountInput=document.getElementById('expamt').value;
    const descriptionInput=document.getElementById('desc').value;
    const categoryInput=document.getElementById('sel-list').value;
    const text=document.createTextNode(amountInput+"-"+descriptionInput+"-"+categoryInput);
    addNewelem.appendChild(text);
    let myobj={
        amount:amountInput,
        desc:descriptionInput,
        category:categoryInput
    }
    let myobj_s=JSON.stringify(myobj);
    localStorage.setItem(descriptionInput,myobj_s);

    const deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-end delete'
    deletebtn.appendChild(document.createTextNode('Delete'));
    addNewelem.appendChild(deletebtn);

    const editbtn=document.createElement('button');
    editbtn.className='btn btn-warning btn-sm float-end edit'
    editbtn.appendChild(document.createTextNode('Edit'));
    addNewelem.appendChild(editbtn);

    displayList.appendChild(addNewelem);

    deletebtn.addEventListener('click',function(){
        displayList.removeChild(addNewelem);
        localStorage.removeItem(myobj.desc);
    })
    editbtn.addEventListener('click',function(){
        document.getElementById('expamt').value=myobj.amount;
        document.getElementById('desc').value=myobj.desc;
        document.getElementById('sel-list').value=myobj.category;
        localStorage.removeItem(myobj.desc);
        displayList.removeChild(addNewelem);
    })
}
