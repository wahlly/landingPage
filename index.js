const registrationForm = `
        <form class="registration">
            <label id="reg" for="uname">FirstName:</label><br>
            <input id="placeholder" type="text" name="firstName">
            
            <label id="reg" for="LastName">LastName:</label><br>
            <input id="placeholder" type="text" name="LastName">
            
            <label id="reg" for="email">Email:</label><br>
            <input id="placeholder" type="email" name="uname" placeholder="name@Email.com"><br>

            <label id="reg" for="username">Username</label><br>
            <input id="placeholder" type="text" name="username" placeholder:"choose a username"><br>

            <label id="reg" for="password">Password:</label><br>
            <input id="placeholder" type="password" name="password" placeholder="*******">
            </br>   </br>

            <input id="btn" type="submit" value="REGISTER"> 
         
        </form>
    `

//displays the registration form on request...
    const signUp = document.getElementById('btn2');

        function register(){
            document.querySelector('.registration').innerHTML = registrationForm;
        }

        signUp.addEventListener('click', register);

//alertBox displaying an error message telling the user on the appropriate thing to do...
    const homeButton = document.getElementById('homeBtn');

        function alertUser() {
            let message = 'sorry, you must be logged on to view prices'
            alert(message);
        }

        homeButton.addEventListener('click', alertUser);

//an approval alertBox acknowledging a successfull input of mail address...
    const mailSubscription = document.getElementById('subscribeBtn');

        function acknowledgeMail() {
            let message = 'acknowledged'
            alert(message);

        }
        mailSubscription.addEventListener('click', acknowledgeMail);

//hover actions for the home button...
    const hoverHomeButton = document.getElementById('homeBtn')

        function hoverHomeBtn() {
            document.getElementById('homeBtn').style.backgroundColor='black'
            document.getElementById('homeBtn').style.color='yellow'
        }

        hoverHomeButton.addEventListener('mouseover', hoverHomeBtn);

        function endHoverHomeBtn() {
            document.getElementById('homeBtn').style.backgroundColor='red'
            document.getElementById('homeBtn').style.color='white'
        }

        hoverHomeButton.addEventListener('mouseout', endHoverHomeBtn);
        

//hover actions for the signin buttons...

    const signInBtn = document.getElementById('btn')

        function hoverSignInButton() {
            document.getElementById('btn').style.color='red'
            document.getElementById('btn').style.backgroundColor='white'
        }

    signInBtn.addEventListener('mouseover', hoverSignInButton);

        function endHoverSignInButton() {
            document.getElementById('btn').style.color='white'
            document.getElementById('btn').style.backgroundColor='black'
        }

    signInBtn.addEventListener('mouseout', endHoverSignInButton);


//hover actions for the signup button...

    const signUpBtn = document.getElementById('btn2');

        function hoverSignUpButton() {
            document.getElementById('btn2').style.color='red'
            document.getElementById('btn2').style.backgroundColor='white'
        }

    signUpBtn.addEventListener('mouseover', hoverSignUpButton);

        function endHoverSignUpButton() {
            document.getElementById('btn2').style.color='white'
            document.getElementById('btn2').style.backgroundColor='black'
        }

    signUpBtn.addEventListener('mouseout', endHoverSignUpButton);


//hover actions for Email subscription button...

    const emailBtn = document.getElementById('subscribeBtn');

        function hoverEmailSubscribeBtn() {
            document.getElementById('subscribeBtn').style.color='yellow'
        }

    emailBtn.addEventListener('mouseover', hoverEmailSubscribeBtn);

        function endHoverEmailSubscribeBtn() {
            document.getElementById('subscribeBtn').style.color='white'
        }

    emailBtn.addEventListener('mouseout', endHoverEmailSubscribeBtn);


        
        