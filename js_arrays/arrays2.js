const names = [ 
    ['sudeep', 'srinivasa','aneesh'],
    ['rohan', 'vikas'],
    ['uday','vishak','suhas','ullas']
]

for(let i = 0; i< names.length; i++)
{
    let row = names[i];
    console.log(`Row ${i+1}`)
    for(j = 0; j<row.length; j++ )
    {
        console.log(row[j])
    }
}