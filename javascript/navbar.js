function openSidebar()
{
    document.getElementById("nav-section").style.width="200px";
    document.getElementById("close").style.display="block";
}

function close_sidebar()
{
    document.getElementById("nav-section").style.width="0";
    document.getElementById("close").style.display="none";
}

function open_login()
{
    document.getElementById("popup").style.display="block";
    document.getElementById("popup").style.zIndex="99";
    
    

    //document.getElementById("nav-content-section").style.display="none";
    
}

function close_login()
{
    document.getElementById("popup").style.display = "none";
    document.getElementById("nav-content-section").style.display="block";
}


// scorll section 
Window.onscroll = function() {scrollfunction()};

function scrollfunction() {

    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        document.getElementById("navbar-content").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "20px";

    }else
    {
        

    }
}