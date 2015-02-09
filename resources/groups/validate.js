if(this.members){
    this.members = this.members.filter (function (v, i, a) { return a.indexOf (v) == i });
}else{
    this.members = [ me.username ];
}
if(this.leaders){
    this.leaders = this.leaders.filter (function (v, i, a) { return a.indexOf (v) == i });
}else{
    this.leaders = [ me.username ];
}