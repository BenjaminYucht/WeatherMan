function zipchecker() {
    this.iszip=false;
    this.checkzip=function (UserString) {

        if(UserString.match(/\b\d{5}\b/g)){
            this.iszip=true
        }
        else{
            this.iszip=false
        }
        
    }
    
}

module.exports=zipchecker;