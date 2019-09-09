NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Commands/GeometricVectorCommand.h",{651:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype651\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">GeometricVectorCommand</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more GeometricVector.</div></div>",653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype653\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype654\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVectorCommand MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GeometricVectors&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype655\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> GeometricVectorCommand MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype656\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">GeometricVectors getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype657\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",658:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a GeometricVectorCommand object.&nbsp; Use Make___Command methods to create an object.</div></div>",659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype659\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",660:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype660\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",661:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype661\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",663:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype663\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",664:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype664\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",665:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype665\" class=\"NDPrototype NoParameterForm\">GeometricVectors m_data</div><div class=\"TTSummary\">The GeometricVector data to send to the device.</div></div>"});