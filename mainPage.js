// The header Main Container.
const headerMainContainer = document.createElement('div');
headerMainContainer.classList.add ("headerMainContainer");
document.body.appendChild(headerMainContainer);


    // Logo | 
    const goShopLogo = document.createElement('div');
    goShopLogo.classList.add ("goShopLogo");
    headerMainContainer.appendChild(goShopLogo);

    // Location Service |
    const locationService = document.createElement('div');
    locationService.classList.add ("locationService");
    locationService.textContent="Location Services";
    locationService.style.textAlign= "center";
    headerMainContainer.appendChild(locationService);


    // Search Bar |
    const searchBar = document.createElement('div');
    searchBar.classList.add ("searchBar");
    searchBar.textContent="Search Bar";
    searchBar.style.textAlign= "center";
    headerMainContainer.appendChild(searchBar);
    
    // Language |
    const languageSelector = document.createElement('div');
    languageSelector.classList.add ("languageSelector");
    languageSelector.textContent="Language";
    languageSelector.style.textAlign= "center";
    headerMainContainer.appendChild(languageSelector);


    // Language |
    const userAccount = document.createElement('div');
    userAccount.classList.add ("userAccount");
    userAccount.textContent="Account";
    userAccount.style.textAlign= "center";
    headerMainContainer.appendChild(userAccount);
    
// The navegation buttons Main Container.

// The Home Central Products Main Container

// The footer Main Container