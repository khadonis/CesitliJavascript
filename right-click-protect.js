if(window.Event)document.captureEvents(Event.MOUSEUP);function nocontextmenu(){event.cancelBubble=true,event.returnValue=false;return false}function norightclick(e){if(window.Event){if(e.which==2||e.which==3)return false}else if(event.button==2||event.button==3){event.cancelBubble=true,event.returnValue=false;return false}}if(document.layers)document.captureEvents(Event.MOUSEDOWN);document.oncontextmenu=nocontextmenu;document.onmousedown=norightclick;document.onmouseup=norightclick;function notaccept(e){return false}document.onmousedown=notaccept;document.onselectstart=new Function("return false");