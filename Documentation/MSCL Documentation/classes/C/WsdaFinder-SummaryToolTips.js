NDSummary.OnToolTipsLoaded("CClass:WsdaFinder",{58:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype58\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WsdaFinder</div></div></div><div class=\"TTSummary\">Discovers upnp WSDA devices. (WINDOWS ONLY)</div></div>",60:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a uuid to WsdaInfo map.</div></div>",62:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype62\" class=\"NDPrototype NoParameterForm\">~WsdaFinder()</div><div class=\"TTSummary\">Destroys the WsdaFinder object, stopping the search.</div></div>",63:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype63\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> start()</div><div class=\"TTSummary\">Starts the search thread looking for upnp WSDAs.</div></div>",64:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype64\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> onSearchComplete()</div><div class=\"TTSummary\">Callback function for when the initial search has completed.</div></div>",65:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype65\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> onDeviceAdded(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">UpnpDevice&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">device</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Callback function for when any upnp device was added/found.</div></div>",67:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype67\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;UpnpService&gt; m_upnpService</div><div class=\"TTSummary\">The &lt;UpnpService&gt; that asynchronously searches for upnp devices.</div></div>",68:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype68\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;UpnpDeviceFinderCallback&gt; m_upnpSearchCallback</div><div class=\"TTSummary\">The &lt;UpnpDeviceFinderCallback&gt; that handles all the upnp callbacks.</div></div>",69:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype69\" class=\"NDPrototype NoParameterForm\">WsdaMap m_foundWsdas</div><div class=\"TTSummary\">The WsdaMap containing the list of WSDAs that were found.</div></div>",70:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype70\" class=\"NDPrototype NoParameterForm\">WsdaMap m_tempWsdas</div><div class=\"TTSummary\">A temporary map that gets cleared on every new search to aid in finding which WSDAs have been removed after already been found.</div></div>",71:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype71\" class=\"NDPrototype NoParameterForm\">std::mutex m_wsdaMapMutex</div><div class=\"TTSummary\">A mutex for accessing the found wsda maps.</div></div>",73:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype73\" class=\"NDPrototype NoParameterForm\">WsdaFinder::WsdaMap found()</div><div class=\"TTSummary\">Gets a copy of the WsdaMap that contains the WSDAs as they are known on the local network. If a WSDA is removed from the network, it will also be removed from this map if it was previously found.</div></div>",74:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype74\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> restart()</div><div class=\"TTSummary\">Clears out the list of found WSDAs and forces a restart of the upnp search.</div></div>"});