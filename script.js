function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function showContent(id) {
    // Hide all content items
    var contentItems = document.getElementsByClassName("content-item");
    for (var i = 0; i < contentItems.length; i++) {
        contentItems[i].style.display = "none";
    }

    // Show the selected content
    var selectedContent = document.getElementById(id);
    selectedContent.style.display = "block";

    // Close the dropdown
    toggleDropdown();
}

function guideRedirect() {
    
}