NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/DatalogDownloader.h",{6810:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6810\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sessionInfoUpdated</div><div class=\"TTSummary\">Indicates whether the session info has been updated since the last time &lt;getNextData&gt; was called.</div></div>",6811:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6811\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calCoefficientsUpdated</div><div class=\"TTSummary\">Indicates whether calibration coefficients have been updates since the last time &lt;getNextData&gt; was called.</div></div>",6812:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6812\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfTrigger</div><div class=\"TTSummary\">Whether the current data point is the start of a new trigger/session.</div></div>",6813:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6813\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TriggerType triggerType</div><div class=\"TTSummary\">The WirelessTypes::TriggerType of the session.</div></div>",6814:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6814\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> numSweeps</div><div class=\"TTSummary\">The total number of sweeps that are in the session.</div></div>",6815:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6815\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sessionIndex</div><div class=\"TTSummary\">The datalogging session index. This starts at 1 for the first session, and gets incremented for each additional session.</div></div>",6816:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6816\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels</div><div class=\"TTSummary\">The ChannelMask for the session.</div></div>",6817:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6817\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate</div><div class=\"TTSummary\">The SampleRate for the session.</div></div>",6818:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6818\" class=\"NDPrototype NoParameterForm\">SampleRate derivedRate</div><div class=\"TTSummary\">The SampleRate of any derived data.</div></div>",6819:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6819\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeBetweenSweeps</div><div class=\"TTSummary\">The number of nanoseconds between each sweep, determined by the sample rate.</div></div>",6820:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6820\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> derivedTimeBetweenSweeps</div><div class=\"TTSummary\">The number of nanoseconds between each derived sweep, determined by the derived sample rate.</div></div>",6821:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6821\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataType dataType</div><div class=\"TTSummary\">The WirelessTypes::DataType of the session.</div></div>",6822:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6822\" class=\"NDPrototype NoParameterForm\">ValueType valueType</div><div class=\"TTSummary\">The ValueType of the session.</div></div>",6823:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6823\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> userString</div><div class=\"TTSummary\">The user entered string of the session (if any).</div></div>",6824:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6824\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timestamp</div><div class=\"TTSummary\">The starting timestamp for the session, in nanoseconds.</div></div>",6825:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6825\" class=\"NDPrototype NoParameterForm\">ChannelCalMap calCoefficients</div><div class=\"TTSummary\">A map of WirelessChannel::ChannelId to CalCoefficients.</div></div>",6826:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6826\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DatalogDownloader</div></div></div><div class=\"TTSummary\">Used to download logged data from a WirelessNode.</div></div>",6828:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6828\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a DatalogDownloader object. Datalogging information will immediately be read from the Node.</div></div>",6829:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6829\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DatalogDownloader(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">startAddress,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Advanced Constructor for creating a DatalogDownloader object with known parameters (not compatible with datalog version 1).&nbsp; Note: In most cases, you should use the standard DatalogDownloader constructor instead of this one, which will automatically determine the start and end positions for you.</div></div>",6836:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6836\" class=\"NDPrototype NoParameterForm\">WirelessNode m_node</div><div class=\"TTSummary\">The WirelessNode to download the data from.</div></div>",6837:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6837\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_foundFirstTrigger</div><div class=\"TTSummary\">Whether or not the first trigger has been found.</div></div>",6838:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6838\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_outOfMemory</div><div class=\"TTSummary\">Whether or not we requested data that is out of bounds of the memory.</div></div>",6839:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6839\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> m_sweepCount</div><div class=\"TTSummary\">The 0-based count indicating which sweep we are currently on in the data.</div></div>",6840:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6840\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;NodeMemory&gt; m_nodeMemory</div><div class=\"TTSummary\">The NodeMemory object to help with interacting with the Node\'s datalogging memory.</div></div>",6841:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6841\" class=\"NDPrototype NoParameterForm\">DatalogSessionInfo m_sessionInfo</div><div class=\"TTSummary\">The &lt;DatalogSessionInfo&gt; containing information about the current trigger session data.</div></div>",6842:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">The version of the datalog download procedure to use.</div></div>",6843:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype6843\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_isMathData</div><div class=\"TTSummary\">Whether the data to parse next is math data (true) or standard channel data (false).</div></div>",6844:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\">A vector of the &lt;WirelessDataPacket::AlgorithmMetaData&gt; for the current data section (gets updated each math block header).</div></div>",6846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6846\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader_v1()</div><div class=\"TTSummary\">Parses a (v1) trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",6847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6847\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseTriggerHeader_v2()</div><div class=\"TTSummary\">Parses a (v2) trigger header from the current byte position. The current datalogging session info in this class is updated.</div></div>",6848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6848\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep parseNextSweep()</div><div class=\"TTSummary\">Parses the next Raw Data Sweep from the current byte position.</div></div>",6849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6849\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep parseNextMathSweep()</div><div class=\"TTSummary\">Parses the next Math/Derived Data Sweep from the current byte position.</div></div>",6850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6850\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> complete()</div><div class=\"TTSummary\">Checks if all of the data has been downloaded (no more data available).&nbsp; Note: This may be updated each time getNextData is called.</div></div>",6851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6851\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentComplete() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the percent completion of the download.&nbsp; Note: This will be updated each time getNextData is called.</div></div>",6852:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6852\" class=\"NDPrototype NoParameterForm\">LoggedDataSweep getNextData()</div><div class=\"TTSummary\">Gets the next LoggedDataSweep that is logged to the Node.</div></div>",6853:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6853\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> metaDataUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the any of the meta data (sample rate, cal coefficients, etc) has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData), signifying that you should interrogate all of the meta data on this DatalogDownloader object again to get updated information which may have changed.</div></div>",6854:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6854\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> calCoefficientsUpdated() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the calibration coefficients information has been updated since the last call to getNextData.&nbsp; This will be true for a single LoggedDataSweep (after calling getNextData).</div></div>",6855:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6855\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> startOfSession() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether a new datalogging session has been found (after calling getNextData). This will be true for a single LoggedDataSweep.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",6856:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6856\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> sessionIndex() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the index of the current datalogging session.&nbsp; Note: May be changed whenever startOfSession returns true.</div></div>",6857:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6857\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SampleRate&amp; sampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the SampleRate of the current datalogging session.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",6858:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6858\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> std::<span class=\"SHKeyword\">string</span>&amp; userString() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the user entered string of the current datalogging session (if any).&nbsp; Note: A user string can only be provided with Armed Datalogging, which is a legacy sampling mode not supported on new products.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>",6859:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype6859\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> ChannelCalMap&amp; calCoefficients() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the &lt;ChannelCalMap&gt; of the current datalogging session.&nbsp; Note: May be changed whenever metaDataUpdated returns true.</div></div>"});