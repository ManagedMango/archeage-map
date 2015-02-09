hide('deletedBy');
hide('dateDeleted');
hide('dateCreated');
//hide('createdBy');
if(this.deletedBool === true){
    cancel();
}
hide('deletedBool');

if(me.username !== this.createdBy){//if im not creator, check if creator is in same group
    dpd.groups.get( { members:{"$in" : [me.username] } } , function(result){
        if( result.length === 0){//if i am in 0 groups, cancel
            cancel();
        }else{
            if(result[0].members.indexOf(this.createdBy) === -1){
                cancel();
            }
        }
    });
}

