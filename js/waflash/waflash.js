// This code is from unblockedgames66ez, but adapted to this website by me

var ua = navigator.userAgent.toLowerCase();
if (
	(navigator.appName == "Netscape" && ua.indexOf("trident") != -1) ||
	ua.indexOf("msie") != -1
) {
	var waf = document.getElementById("waflashStatus");
	waf.style.display = "block";
	waf.innerText =
		"??? ?????(IE) ??? ??? ???? ???? !\n??, ???? ?? ????? ??????.";
	gtag("event", "connect_from_ie", {
		event_category: "error",
		event_label: ua,
	});
}
