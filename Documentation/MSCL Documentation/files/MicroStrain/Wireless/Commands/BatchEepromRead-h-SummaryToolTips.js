NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BatchEepromRead.h",{2760:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2760\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BatchEepromRead</div></div></div><div class=\"TTSummary\">Contains logic for the Batch Eeprom Read Node command</div></div>",2762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2762\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">startAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the ReadEeprom command packet</div></div>",2763:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2763\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the ReadEeprom Node command</div></div>",2765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2765\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a EepromRead Response object</div></div>",2767:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2767\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the ReadEeprom response.</div></div>",2768:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2768\" class=\"NDPrototype NoParameterForm\">std::map&lt;<span class=\"SHKeyword\">uint16</span>, <span class=\"SHKeyword\">uint16</span>&gt; m_eepromMap</div><div class=\"TTSummary\">A map of eeprom location to eeprom value pairs.</div></div>",2770:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2770\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the WirelessPacket passed in matches the success response.</div></div>"});