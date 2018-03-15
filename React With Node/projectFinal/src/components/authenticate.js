
export const Authentication = {
    authenticate: function(callBack){
        sessionStorage.setItem('isAuthenticated', true);
        callBack();
    },
    logOut: function(callBack){
        sessionStorage.setItem('isAuthenticated', false);
        callBack();
    },
    isAuthenticated: function(){
        return sessionStorage.getItem('isAuthenticated') == 'true';
    }
}