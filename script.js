const todoname = document.getElementById('name');
const description = document.getElementById('descript');
const addbtn = document.getElementById('add');
addbtn.addEventListener("click", addtodatabase(todoname,description));

function addtodatabase(todoname, description)
{
    if (todoname!= null && description!= null)
    {
        let body = document.createElement('div');
        let name = document.createElement('p');
        let descript = document.createElement('p');
        let status = document.createElement('p');
        let btnblock = document.createElement('div');
        let btn1 = document.createElement('button');
        body.appendChild('name');
        body.appendChild('descript');
        body.appendChild('status');
        btnblock.appendChild('btn1');
        body.appendChild('btnblock');
        document.body.appendChild('body');
        name.textContent = `TodoName:${todoname}`;
        descript.textContent = `Description:${description}`;
        
        // const card = document.getElementById('card');
        // let card1 = document.createElement('div');
        // card1.setAttribute('class', 'col');
        // card.appendChild(card1);
        // card1.innerText = `Name : ${todoname.innerText}
        // Description:${description.innerText}`;
        
        // obj.map(li =>
        //     // let ul = document.getElementById('listofinput');
        //     let datas = document.createElement('li');
        // datas.innerText = `Name : ${li.Name}
        // Description :${li.description}`;
        //     ul.appendChild(datas);
        
        // )
        
        
        
    }
    else {
        let alt = document.createElement('p');
        document.body.appendChild('alt');
        alt.textContent = `Todo is processing..`
    }
}
