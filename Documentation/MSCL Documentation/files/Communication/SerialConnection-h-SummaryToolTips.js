NDSummary.OnToolTipsLoaded("File:Communication/SerialConnection.h",{21:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype21\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SerialConnection</div></div></div><div class=\"TTSummary\">A Connection_Impl derived class that represents a serial connection.</div></div>",23:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype23\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> SerialConnection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">port,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Initializes the SerialConnection object.</div></div>",24:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype24\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~SerialConnection()</div><div class=\"TTSummary\">Destroys the SerialConnection object</div></div>",26:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype26\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_port</div><div class=\"TTSummary\">The string name of the port (ex. &quot;COM26&quot;)</div></div>",27:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype27\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_baudRate</div><div class=\"TTSummary\">The baud rate of the connection</div></div>",29:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype29\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> description()</div><div class=\"TTSummary\">Gets a description of the connection as a string</div></div>",30:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> updateBaudRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">baudRate</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Updates the serial connection baud rate.&nbsp; Important: The connection to the port will be closed and re-opened at the new baud rate.</div></div>",31:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype31\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> establishConnection()</div><div class=\"TTSummary\">Initializes and opens the current connection</div></div>"});