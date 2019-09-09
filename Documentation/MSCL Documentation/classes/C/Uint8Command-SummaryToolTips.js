NDSummary.OnToolTipsLoaded("CClass:Uint8Command",{282:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype282\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Uint8Command</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more uint8s.</div></div>",284:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype284\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",285:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype285\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint8Command MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",286:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype286\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint8Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype287\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> Uint8Command MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">uint8</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">addlParams</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype288\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",289:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype289\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",290:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a Uint8Command object.&nbsp; Use Make___Command methods to create an object.</div></div>",291:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype291\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",292:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype292\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",293:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype293\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",295:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype295\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",296:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype296\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",297:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype297\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; m_data</div><div class=\"TTSummary\">The uint8 data to send to the device.</div></div>",298:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype298\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">uint8</span>&gt; m_addlParams</div><div class=\"TTSummary\">The uint8 parameters to send to the device in a get command.</div></div>"});