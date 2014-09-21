//	HYPE.documents["addons"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "addons.hyperesources";
	var documentName = "addons";
	var documentLoaderFilename = "addons_hype_generated_script.js";
	var mainContainerID = "addons_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"3":{n:"addons_keenio.jpg",p:1},"4":{n:"addons_kinvey.jpg",p:1},"0":{n:"addons_device.png",p:1},"5":{n:"addons_mixpanel.jpg",p:1},"1":{n:"addons_firebase.jpg",p:1},"6":{n:"addons_salesforce.jpg",p:1},"2":{n:"addons_ganalytics.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"7":{o:"content-box",h:"5",x:"visible",a:658,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"5",d:244},"3":{o:"content-box",h:"1",x:"visible",a:1286,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"3",d:244},"8":{o:"content-box",h:"6",x:"visible",a:344,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"6",d:244},"4":{o:"content-box",h:"2",x:"visible",a:972,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"4",d:244},"5":{o:"content-box",h:"3",x:"visible",a:1600,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"2",d:244},"6":{o:"content-box",h:"4",x:"visible",a:30,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"7",d:244,e:"1.000000"},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:371,k:"div",z:"8",d:359},"10":{o:"content-box",h:"4",x:"visible",a:1914,q:"100% 100%",b:115,j:"absolute",r:"inline",c:314,k:"div",z:"1",d:244}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:12,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:1,d:1,i:"a",e:-284,s:30,o:"6"},{f:"2",t:1,d:1,i:"a",e:1286,s:1600,o:"5"},{f:"2",t:1,d:1,i:"a",e:972,s:1286,o:"3"},{f:"2",t:1,d:1,i:"a",e:658,s:972,o:"4"},{f:"2",t:1,d:1,i:"a",e:30,s:344,o:"8"},{f:"2",t:1,d:1,i:"a",e:1600,s:1914,o:"10"},{f:"2",t:1,d:1,i:"a",e:344,s:658,o:"7"},{f:"2",t:2,d:1,i:"a",e:-284,s:-284,o:"6"},{f:"2",t:2,d:1,i:"a",e:658,s:658,o:"4"},{f:"2",t:2,d:1,i:"a",e:972,s:972,o:"3"},{f:"2",t:2,d:1,i:"a",e:1286,s:1286,o:"5"},{f:"2",t:2,d:1,i:"a",e:1600,s:1600,o:"10"},{f:"2",t:2,d:1,i:"a",e:344,s:344,o:"7"},{f:"2",t:2,d:1,i:"a",e:30,s:30,o:"8"},{f:"2",t:3,d:1,i:"a",e:-284,s:30,o:"8"},{f:"2",t:3,d:1,i:"a",e:30,s:344,o:"7"},{f:"2",t:3,d:1,i:"a",e:344,s:658,o:"4"},{f:"2",t:3,d:1,i:"a",e:658,s:972,o:"3"},{f:"2",t:3,d:1,i:"a",e:972,s:1286,o:"5"},{f:"2",t:3,d:1,i:"a",e:1286,s:1600,o:"10"},{f:"2",t:3,d:1,i:"a",e:-598,s:-284,o:"6"},{f:"2",t:4,d:1,i:"a",e:30,s:30,o:"7"},{f:"2",t:4,d:1,i:"a",e:658,s:658,o:"3"},{f:"2",t:4,d:1,i:"a",e:-284,s:-284,o:"8"},{f:"2",t:4,d:1,i:"a",e:344,s:344,o:"4"},{f:"2",t:4,d:1,i:"a",e:972,s:972,o:"5"},{f:"2",t:4,d:1,i:"a",e:-598,s:-598,o:"6"},{f:"2",t:4,d:1,i:"a",e:1286,s:1286,o:"10"},{f:"2",t:5,d:1,i:"a",e:-912,s:-598,o:"6"},{f:"2",t:5,d:1,i:"a",e:-598,s:-284,o:"8"},{f:"2",t:5,d:1,i:"a",e:-284,s:30,o:"7"},{f:"2",t:5,d:1,i:"a",e:30,s:344,o:"4"},{f:"2",t:5,d:1,i:"a",e:344,s:658,o:"3"},{f:"2",t:5,d:1,i:"a",e:658,s:972,o:"5"},{f:"2",t:5,d:1,i:"a",e:972,s:1286,o:"10"},{f:"2",t:6,d:1,i:"a",e:-284,s:-284,o:"7"},{f:"2",t:6,d:1,i:"a",e:344,s:344,o:"3"},{f:"2",t:6,d:1,i:"a",e:-598,s:-598,o:"8"},{f:"2",t:6,d:1,i:"a",e:30,s:30,o:"4"},{f:"2",t:6,d:1,i:"a",e:658,s:658,o:"5"},{f:"2",t:6,d:1,i:"a",e:-912,s:-912,o:"6"},{f:"2",t:6,d:1,i:"a",e:972,s:972,o:"10"},{f:"2",t:7,d:1,i:"a",e:-1226,s:-912,o:"6"},{f:"2",t:7,d:1,i:"a",e:-912,s:-598,o:"8"},{f:"2",t:7,d:1,i:"a",e:-598,s:-284,o:"7"},{f:"2",t:7,d:1,i:"a",e:-284,s:30,o:"4"},{f:"2",t:7,d:1,i:"a",e:30,s:344,o:"3"},{f:"2",t:7,d:1,i:"a",e:344,s:658,o:"5"},{f:"2",t:7,d:1,i:"a",e:658,s:972,o:"10"},{f:"2",t:8,d:1,i:"a",e:-598,s:-598,o:"7"},{f:"2",t:8,d:1,i:"a",e:30,s:30,o:"3"},{f:"2",t:8,d:1,i:"a",e:-912,s:-912,o:"8"},{f:"2",t:8,d:1,i:"a",e:-284,s:-284,o:"4"},{f:"2",t:8,d:1,i:"a",e:344,s:344,o:"5"},{f:"2",t:8,d:1,i:"a",e:-1226,s:-1226,o:"6"},{f:"2",t:8,d:1,i:"a",e:658,s:658,o:"10"},{f:"2",t:9,d:1,i:"a",e:-1540,s:-1226,o:"6"},{f:"2",t:9,d:1,i:"a",e:-1226,s:-912,o:"8"},{f:"2",t:9,d:1,i:"a",e:-912,s:-598,o:"7"},{f:"2",t:9,d:1,i:"a",e:-598,s:-284,o:"4"},{f:"2",t:9,d:1,i:"a",e:-284,s:30,o:"3"},{f:"2",t:9,d:1,i:"a",e:30,s:344,o:"5"},{f:"2",t:9,d:1,i:"a",e:344,s:658,o:"10"},{f:"2",t:10,d:1,i:"a",e:-912,s:-912,o:"7"},{f:"2",t:10,d:1,i:"a",e:-284,s:-284,o:"3"},{f:"2",t:10,d:1,i:"a",e:-1226,s:-1226,o:"8"},{f:"2",t:10,d:1,i:"a",e:-598,s:-598,o:"4"},{f:"2",t:10,d:1,i:"a",e:30,s:30,o:"5"},{f:"2",t:10,d:1,i:"a",e:-1540,s:-1540,o:"6"},{f:"2",t:10,d:1,i:"a",e:344,s:344,o:"10"},{f:"2",t:11,d:1,i:"a",e:-1854,s:-1540,o:"6"},{f:"2",t:11,d:1,i:"a",e:-1540,s:-1226,o:"8"},{f:"2",t:11,d:1,i:"a",e:-1226,s:-912,o:"7"},{f:"2",t:11,d:1,i:"a",e:-912,s:-598,o:"4"},{f:"2",t:11,d:1,i:"a",e:-598,s:-284,o:"3"},{f:"2",t:11,d:1,i:"a",e:-284,s:30,o:"5"},{f:"2",t:11,d:1,i:"a",e:30,s:344,o:"10"},{f:"2",t:12,p:2,d:0,i:"Actions",s:[{type:3,timelineIdentifier:"kTimelineDefaultIdentifier"}],o:"kTimelineDefaultIdentifier"}],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

