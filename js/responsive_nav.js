jQuery(document).ready(function(){
    
    //cache DOM elements
	var mainContent = $('.sd-main-content'),
		header = $('.cd-main-header'),
		sidebar = $('.cd-side-nav'),
		sidebarTrigger = $('.cd-nav-trigger'),
		topNavigation = $('.cd-top-nav'),
		searchForm = $('.cd-search'),
		accountInfo = $('.account');
    
    function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.sd-main-content'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}
    
});