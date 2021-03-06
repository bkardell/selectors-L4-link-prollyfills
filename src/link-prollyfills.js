(function(){
	window.addEventListener("hashchange", Hitch.go, false);
  // parseUri 1.2.2
	// (c) Steven Levithan <stevenlevithan.com>
	// MIT License
	var parseUri = function (str) {
		var	o   = parseUri.options,
			m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
			uri = {},
			i   = 14;
	
		while (i--) uri[o.key[i]] = m[i] || "";
	
		uri[o.q.name] = {};
		uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
			if ($1) uri[o.q.name][$1] = $2;
		});
	
		return uri;
	};
	
	parseUri.options = {
		strictMode: true,
		key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
		q:   {
			name:   "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};
	
	Hitch.add([
		{
			name: '-links-local',
			base: '[href]',
			type: 'selector',
			filter:    function(match,argsString,o){
				var a, i, wp, lp, 
					w = parseUri(o.location),
					l = parseUri(match.href);
				if(w.host===l.host){
					if(argsString && !isNaN(argsString)){
						a = parseInt(argsString,10);
						wp = w.path.split('/');
						lp = l.path.split('/');
						for(i=0;i<a+1;i++){
							if(wp[i]!==lp[i]){
								return false;
							}
						}
					}else if(o.location !== match.href){
						return false;
					}
					return true;
				}
			}
		},
		{
			name: '-links-target',
			base: '[name]',
			type: 'selector',
			filter:    function(match,argsString,o){
				return (window.location.hash && ("#" + match.getAttribute('name') === window.location.hash));
			}
		}
	]);
}());
