NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/SetToIdle.h",{1350:"<div class=\"NDToolTip TClass LC\"><div id=\"NDPrototype1350\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">namespace</span> SetToIdle</div><div class=\"TTSummary\">Contains logic for the Set to Idle command.</div></div>",1352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1352\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the SetToIdle command packet.</div></div>",1353:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1353\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the SetToIdle command</div></div>",1355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1355\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td></td><td class=\"PName last\">collector,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">baseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SetToIdle Response object</div></div>",1356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1356\" class=\"NDPrototype NoParameterForm\">~Response()</div><div class=\"TTSummary\">Destroys the SetToIdle Response object. This also cancels the SetToIdle operation on the BaseStation, if not already complete or canceled.</div></div>",1358:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1358\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_nodeAddress</div><div class=\"TTSummary\">The node address to look for in the response.</div></div>",1359:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1359\" class=\"NDPrototype NoParameterForm\">SetToIdleStatus::SetToIdleResult m_result</div><div class=\"TTSummary\">The &lt;SetToIdleResult&gt; detailing the result of the Set to Idle command.</div></div>",1360:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1360\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The BaseStation that will send the command (used for canceling this command).</div></div>",1361:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1361\" class=\"NDPrototype NoParameterForm\">std::mutex m_setToIdleMutex</div><div class=\"TTSummary\">The mutex used for thread safety.</div></div>",1363:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1363\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> match(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DataBuffer&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the bytes passed in match the response pattern from their current read position.</div></div>",1364:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1364\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cancel()</div><div class=\"TTSummary\">Attempts to cancel the Stop Node operation.</div></div>",1365:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1365\" class=\"NDPrototype NoParameterForm\">SetToIdleStatus::SetToIdleResult result()</div><div class=\"TTSummary\">Gets the &lt;SetToIdleResult&gt; of the Stop Node command.</div></div>"});