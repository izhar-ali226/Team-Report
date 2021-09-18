const loginForm = document.getElementById("loginForm")
const CreateAccount = document.getElementById("createAccount");
const linkLogin = document.getElementById("linkLogin");
const linkCreateAccount = document.getElementById("linkCreateAccount");
const homePage = document.getElementById("homePage");

document.addEventListener('DOMContentLoaded', () => {


    linkCreateAccount.addEventListener("click", (e) => {
        loginForm.classList.add("formHidden");
        CreateAccount.classList.remove("formHidden");
        e.preventDefault();
    })

    linkLogin.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        CreateAccount.classList.add("formHidden");
    })


})


const signUp = () => {
    //sending data to localstorage
    // e.preventDefault();
    let signUpUser = document.getElementById("signUpUser").value;
    let signUpEmail = document.getElementById("signUpEmail").value;
    let signUpPassword = document.getElementById("signUpPassword").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    console.log("signup")
    localStorage.setItem("name1", signUpUser);
    localStorage.setItem("email1", signUpEmail);
    localStorage.setItem("password1", signUpPassword);
    localStorage.setItem("ConPassword1", ConfirmPassword);


}


const signIn = () => {
    const signInUsername = document.getElementById("signInUsername").value;
    const signInPassword = document.getElementById("signInPassword").value;
    const teams = document.getElementsByName("teams")
    const homePageWidth = document.getElementById("homePageWidth");
    const homePage = document.getElementById("homePage")
    const report = document.getElementById("report");


    if (signInUsername == localStorage.getItem("name1") && signInPassword == localStorage.getItem("password1")) {

        homePageWidth.style.width = "700px";
        homePageWidth.style.maxWidth = "700px";
        loginForm.classList.add("formHidden");
        CreateAccount.classList.add("formHidden");
        homePage.classList.remove("formHidden");
        report.classList.add("formHidden");
    }

}


const addUser = () => {
    const popup = document.getElementById("popup");
    const plus = document.getElementById("plus");

    plus.onclick =
        homePage.classList.add("formHidden");
    popup.classList.remove("formHidden");
    homePageWidth.style.width = "400px";
    homePageWidth.style.maxWidth = "400px";
}

const createTeamBtnFun = () => {
    const TeamName = document.getElementById("createTeamBtn").value;
    const membersEmail = document.getElementById("membersEmail").value;
    const createTeamBtn = document.getElementById("createTeamBtn");
    const homePage = document.getElementById("homePage");
    const popup = document.getElementById("popup");

    localStorage.setItem("teamNames", TeamName);
    localStorage.setItem("membersEmails", membersEmail);

    // const gettingTeamNames = localStorage.getItem(teamNames);
    createTeamBtn.onclick =
        homePage.classList.remove("formHidden");
    popup.classList.add("formHidden");
    homePageWidth.style.width = "700px";
    homePageWidth.style.maxWidth = "700px";

}

const cancelTeamBtnFun = () => {
    const popup = document.getElementById("popup");
    homePage.classList.remove("formHidden");
    popup.classList.add("formHidden");
    homePageWidth.style.width = "700px";
    homePageWidth.style.maxWidth = "700px";

}


const reportMenu = () => {
    const reportPage = document.getElementById("reportPage");
    const settingPage = document.getElementById("settingPage");
    const reportMenu = document.getElementById("reportMenu");
    reportMenu.onclick =
        reportPage.classList.remove("formHidden")
    settingPage.classList.add("formHidden")
    homePageWidth.style.width = "700px";
    homePageWidth.style.maxWidth = "700px";

}

const settingMenu = () => {
    const reportPage = document.getElementById("reportPage");
    const settingPage = document.getElementById("settingPage");
    const settingMenu = document.getElementById("settingMenu");
    settingMenu.onclick =
        reportPage.classList.add("formHidden")
    settingPage.classList.remove("formHidden")
    homePageWidth.style.width = "700px";
    homePageWidth.style.maxWidth = "700px";
}

const homePageTeams = () => {
    const questions = document.getElementById("questions");
    const developers = document.getElementById("developers");
    console.log("working")
    developers.onclick =
        homePage.classList.add("formHidden");
    questions.classList.remove("formHidden");
    homePageWidth.style.width = "700px";
    homePageWidth.style.maxWidth = "700px";
}

const Submit = () => {
    const answer1 = document.getElementById("answer1");
    const answer2 = document.getElementById("answer2");
    const answer3 = document.getElementById("answer3");


    localStorage.setItem("answer1", answer1);
    localStorage.setItem("answer2", answer2);
    localStorage.setItem("answer3", answer3);

}