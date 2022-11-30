let input = prompt('What would you like to do??');
const todos = ['Hello'];
while(input.toLowerCase() !== 'quit')
{
    if(input === 'list' || input === 'List')
    {
        console.log('********')
        for(let i = 0; i < todos.length; i++)
        {
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('********')
    }
    else if(input === 'new' || input === 'New')
    {
        const newtodo = prompt('Ok, What is the new todo?');
        todos.push(newtodo);
        console.log(`${newtodo} added to this list!`);
    }
    else if(input === 'delete' || input === 'Delete')
    {
        const index = prompt('What is the index of the element to be deleted?');
        if(!(Number.isNaN(index)))
        {
            const deleted = todos.splice(index,1);
            console.log(`The element deleted is ${deleted[0]}`);
        }
        else
        {
            console.log('Unknown index');
        } 
    }
    input = prompt('What would you like to do?')
}
console.log('Ok . You quit the app!!')