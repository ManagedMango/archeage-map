hide('dateCreated');
if (!me) {
    cancel("You must be logged in", 401);
}else{
    if(this.id !== me.id){
        cancel();
    }
}