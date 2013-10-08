window.nt_id = function (el) {
	return document.getElementById(el);
}
window.nt_add_event = function ( obj, type, fn ) {
	if ( obj.attachEvent ) {
		obj['e'+type+fn] = fn;
		obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
		obj.attachEvent( 'on'+type, obj[type+fn] );
	} else {
		obj.addEventListener( type, fn, false );
	}
}

var 
	launchRegister 	= window.nt_id("ntLaunchRegister"),
	launchLogin 	= window.nt_id("ntLaunchLogin");

	window.createFrame = function (ev, loginOrRegister) {
		var 
			myFrame = document.createElement("iframe");

			myFrame.id 	= "ntIFrameEl";
			myFrame.src = "https://console.ntoklo.com/register" +
						  "?p=" + window.ntParams.p + 
						  "&f=" + ((typeof window.ntParams.f !== "undefined") ? window.ntParams.f : "") +
						  "&l=" + ((typeof window.ntParams.l !== "undefined") ? window.ntParams.l : "") +
						  "&e=" + ((typeof window.ntParams.e !== "undefined") ? window.ntParams.e : "") +
						  "&n=" + ((typeof window.ntParams.n !== "undefined") ? window.ntParams.n : "") +
						  "&d=" + ((typeof window.ntParams.d !== "undefined") ? window.ntParams.d : "") +
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

	if (launchRegister) {
		window.nt_add_event(launchRegister, "click", function (ev) {
			window.removeFrame();
			window.createFrame(ev, "register");
			ev.stopPropagation();
			ev.preventDefault();
			return false;
		});
	}

	if (launchLogin) {
		window.nt_add_event(launchLogin, "click", function (ev) {
			window.removeFrame();
			window.createFrame(ev, "login");
			ev.stopPropagation();
			ev.preventDefault();
			return false;
		});
	}
