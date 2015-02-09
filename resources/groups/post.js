if(this.name.toString().length < 4){
    cancel("name is too short");
}else{
    dpd.groups.get( { name: { "$in": [this.name] } } , function(result){
        if(result.length > 0){
            cancel('name already exists');
        } 
    });
}
if(this.name == "none"){
    cancel("You cannot have name = none");
}

dpd.groups.get( {members:{"$in" : [me.username] } } ,function(result){
    if(result.length > 0 ){
        cancel('You are already member of some group');
    }
});
this.leaders = [ me.username ];
this.members = [ me.username ];