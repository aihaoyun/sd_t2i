setTimeout(function() {
    const t2iapi = document.getElementById("tab_t2iapi");
    const t2iapi_div = document.createElement("div");
    t2iapi_div.style = "height:700px";
    t2iapi_div.innerHTML = '<iframe id="t2iapiIframe" name="Frame" src="/t2iapi/easy_ui.html" style="width: 100%; height: 100%;"></iframe>';
    t2iapi.appendChild(t2iapi_div);
},1000*25);
