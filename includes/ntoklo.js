window.nt_id = function (el) {
	return document.getElementById(el);
}

var 
	launchRegister 	= window.nt_id("ntLaunchRegister"),
	launchLogin 	= window.nt_id("ntLaunchLogin"),
	platformInput 	= window.nt_id("platformInput");

	window.createFrame = function (ev, loginOrRegister) {
		var 
			myFrame = document.createElement("iframe");

			myFrame.id 	= "ntIFrameEl";
			myFrame.src = "https://console.ntoklo.com/register" +
						  "?p=" + window.ntParams.p + 
						  "&f=" + window.ntParams.f +
						  "&l=" + window.ntParams.l +
						  "&e=" + window.ntParams.e +
						  "&n=" + window.ntParams.n +
						  "&d=" + window.ntParams.d +
						  "&r=" + loginOrRegister;

			window.nt_id("ntIFrameWrapper").className = loginOrRegister;
			window.nt_id("ntIFrameWrapper").appendChild(myFrame);
			return false;
	}

	window.removeFrame = function () {
			if (window.nt_id("ntIFrameEl")) {
				window.nt_id("ntIFrameWrapper").removeChild(window.nt_id("ntIFrameEl"));
			}
	}

	launchRegister.addEventListener("click", function (ev) {
			window.removeFrame();
			window.createFrame(ev, "register");
			ev.stopPropagation();
			ev.preventDefault();
			return false;
	}, false);

	launchLogin.addEventListener("click", function (ev) {
			window.removeFrame();
			window.createFrame(ev, "login");
			ev.stopPropagation();
			ev.preventDefault();
			return false;
	}, false);

