if(me.username !== previous.createdBy){//if im not creator, check if creator is in same group
    dpd.groups.get( { members:{"$in" : [me.username] } } , function(result){
        if( result.length === 0){//if i am in 0 groups, cancel
            cancel();
        }else{
            if(result[0].members.indexOf(previous.createdBy) === -1){
                cancel();
            }
        }
    });
}
protect('createdBy');
protect('dateCreated');
protect('dateDeleted');
protect('deletedBy');
protect('id');