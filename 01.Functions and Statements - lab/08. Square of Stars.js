function starts(count){

    let add= '';
    for(var i=0; i<count;i++)
    {
        
        for(var a = 0; a<count;a++)
        {
            add+='*' + ' ';
        }
       add +='\n';
    }
    console.log(add);
}
starts(5);