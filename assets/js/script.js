let smBreakpoint = window.matchMedia("(min-width: 576px)");
let mdBreakpoint = window.matchMedia("(min-width: 768px)");
let lgBreakpoint = window.matchMedia("(min-width: 992px)");
let xlgBreakpoint = window.matchMedia("(min-width: 1200px)");
let xxlgBreakpoint = window.matchMedia("(min-width: 1400px)");

if (mdBreakpoint.matches) { // If media query matches
    document.getElementById("navbar").innerHTML = `
    <div class="container">
        <a class="navbar-brand position-absolute start-50 translate-middle-x" href="#"><img src="./assets/images/gtgt-logo.png" alt="GTGTCode Website Logo" height="30"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style="display: flex !important;">
            <div class="navbar-nav" id="navbar-nav-desktop">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
        </div>
    </div>
    `;
    document.getElementById("navbar-nav-mobile").style.display = "none";
  } else {
    document.getElementById("navbar").innerHTML = `
    <div class="container">
        <a class="navbar-brand position-absolute start-50 translate-middle-x" href="#"><img src="./assets/images/gtgt-logo.png" alt="GTGTCode Website Logo" height="30"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style="display: none !important;">
            <div class="navbar-nav" id="navbar-nav-desktop">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
        </div>
    </div>
    `;
    document.getElementById("navbar-nav-mobile").style.display = "block";
  }


document.getElementById("header").innerHTML = "hello";