let list = document.querySelector('ul');
let form = document.querySelector('form');
let addName = (member, id) => {
    let html = `
    <li data-id="${id}">
        <div>${member.name}</div>
        <div>${member.gpa}</div>
        <button class="btn btn-danger my-2 btn-sm">Delete</button>
    </li>`;
    list.innerHTML += html;
    form.reset();
}
let removeName = (id) => {
    let members = document.querySelectorAll('li');
    members.forEach((member)=>{
        if(member.getAttribute('data-id') === id){
            member.remove();
        }
    })
}

// db.collection('members').get().then( snapshot =>{
//     snapshot.docs.forEach(doc => {
//         addName(doc.data(), doc.id);
//     });
// }).catch( err => console.log(err));
// updating UI sync
db.collection('members').onSnapshot(snapshot => {
    console.log(snapshot.docChanges().forEach(element => {
        let doc = element.doc
        if (element.type === "added"){
            addName(doc.data(), doc.id);
        }
        else if (element.type === "removed"){
            removeName(doc.id);
        }
    }));
})


form.addEventListener('submit', e=>{
    e.preventDefault();
    let member = {
        name: form.name.value,
        gpa: form.gpa.value
    }
    db.collection('members').add(member).then(()=> console.log('member added'))
    .catch(err => console.log(err));
})

list.addEventListener('click', e => {
    if (e.target.classList.contains('btn')){
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('members').doc(id).delete().then(()=>{
            console.log('member deleted');
        }).catch(err => console.log(err));
    }
})