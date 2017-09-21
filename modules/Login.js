/* Creating a component's Object */
var login = new component.ui.login({
                "clipBounds": true,
                "height": "100%",
                "id": "login",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopyslFbox0i25b6c13d6274d",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
/* Setting component's Pass Through and Custom properties */
            login.logoSource = "logo.png";
            login.usernamePlaceholder = "Username";
           login.facebookLogin = true;
            login.linkedInLogin = true;            
/*Adding the Component to the Form*/
            this.view.add(login);
/*Adding the Component to the Form*/