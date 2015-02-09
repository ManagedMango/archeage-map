protect('name');
dpd.groups.get( {leaders: { "$in" :[ me.username ] } } ,function(result){
    if(result.length==0){
        cancel("You are not in leaders");
    }
});