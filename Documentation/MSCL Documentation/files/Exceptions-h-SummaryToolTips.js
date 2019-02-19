NDSummary.OnToolTipsLoaded("File:Exceptions.h",{7436:"<div class=\"NDToolTip TSection LC\"><div class=\"TTSummary\">Contains all the MicroStrain custom exceptions that can be thrown in MSCL</div></div>",7437:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7437\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error</div></div></div><div class=\"TTSummary\">The generic MicroStrain exception (base class)</div></div>",7439:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7439\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> m_description</div><div class=\"TTSummary\">the description of the error to be thrown, default value of &quot;The MSCL has thrown an exception.&quot;</div></div>",7441:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7441\" class=\"NDPrototype NoParameterForm\">Error() : m_description(<span class=\"SHString\">&quot;MSCL has thrown an exception.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error object with the default description</div></div>",7442:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7442\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : m_description(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error object with a custom description</div></div>",7443:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7443\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const char</span>* what () <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">overriding the default std::exception what() function, gets the description of the thrown exception</div></div>",7444:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7444\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",7446:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7446\" class=\"NDPrototype NoParameterForm\">Error_NotSupported(): Error(<span class=\"SHString\">&quot;This feature is not supported.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a default description</div></div>",7447:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7447\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NotSupported(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NotSupported object with a custom description</div></div>",7448:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7448\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",7450:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7450\" class=\"NDPrototype NoParameterForm\">Error_NoData(): Error(<span class=\"SHString\">&quot;No data is available.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_NoData object with a default description</div></div>",7451:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7451\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NoData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NoData object with a custom description</div></div>",7452:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7452\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_BadDataType</div></div></div><div class=\"TTSummary\">Data of one type was accessed as another type (simple_any)</div></div>",7454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7454\" class=\"NDPrototype NoParameterForm\">Error_BadDataType() : Error(<span class=\"SHString\">&quot;Data was accessed using the wrong data type.&quot;</span>)</div><div class=\"TTSummary\">Intializes the Error_BadDataType object with a default description</div></div>",7455:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7455\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_UnknownSampleRate</div></div></div><div class=\"TTSummary\">The sample rate is invalid or unknown for the given device</div></div>",7457:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7457\" class=\"NDPrototype NoParameterForm\">Error_UnknownSampleRate() : Error(<span class=\"SHString\">&quot;Unknown Sample Rate.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a default description</div></div>",7458:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7458\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_UnknownSampleRate(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_UnknownSampleRate object with a custom description</div></div>",7459:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7459\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",7461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7461\" class=\"NDPrototype NoParameterForm\">Error_Communication() : Error(<span class=\"SHString\">&quot;Failed to communicate with the device.&quot;</span>)</div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",7462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7462\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Communication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Communication object.</div></div>",7463:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7463\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",7465:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7465\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the WirelessNode that failed to communicate.</div></div>",7467:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7467\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(<span class=\"SHString\">&quot;Failed to communicate with the Wireless Node.&quot;</span>), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",7468:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7468\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_NodeCommunication(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error_Communication(description), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_NodeCommunication object.</div></div>",7469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7469\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the node address of the WirelessNode that failed to communicate</div></div>",7470:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7470\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",7472:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7472\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> m_code</div><div class=\"TTSummary\">the exception error code (system error codes)</div></div>",7474:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7474\" class=\"NDPrototype NoParameterForm\">Error_Connection(): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_Connection object, sets the error code to a default of -1</div></div>",7475:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7475\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Connection error.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",7476:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7476\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",7477:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7477\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_Connection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(description), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_Connection object</div></div>",7478:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7478\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code (system error codes, or -1 by default)</div></div>",7479:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7479\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidSerialPort</div></div></div><div class=\"TTSummary\">There was an error with the specified COM Port.</div></div>",7481:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7481\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidSerialPort(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Com Port.&quot;</span>, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidSerialPort object</div></div>",7482:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7482\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidTcpServer</div></div></div><div class=\"TTSummary\">There was an error with the specified TCP/IP Server.</div></div>",7484:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7484\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidTcpServer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid TCP/IP Server: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidTcpServer object</div></div>",7485:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7485\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidUnixSocket</div></div></div><div class=\"TTSummary\">There was an error with the specified Unix Socket.</div></div>",7487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7487\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidUnixSocket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">code,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">message</td></tr></table></td><td class=\"PAfterParameters\">): Error_Connection(<span class=\"SHString\">&quot;Invalid Unix Socket: &quot;</span> + message, code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidUnixSocket object</div></div>",7488:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7488\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_MipCmdFailed</div></div></div><div class=\"TTSummary\">The Inertial command has failed</div></div>",7490:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7490\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int</span> m_code</div><div class=\"TTSummary\">the exception error code (NACK error code)</div></div>",7492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7492\" class=\"NDPrototype NoParameterForm\">Error_MipCmdFailed() : Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(<span class=\"SHNumber\">-1</span>)</div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object, sets the error code to a default of -1</div></div>",7493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7493\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_MipCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">description</td></tr></table></td><td class=\"PAfterParameters\">) : Error(description), m_code(<span class=\"SHNumber\">-1</span>)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object, sets the error code to a default of -1</div></div>",7494:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7494\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_MipCmdFailed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">code</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;The Inertial command has failed.&quot;</span>), m_code(code)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_MipCmdFailed object</div></div>",7495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7495\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const int</span> code() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">gets the exception error code</div></div>",7496:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7496\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>",7498:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7498\" class=\"NDPrototype NoParameterForm\">ConfigIssues m_issues</div><div class=\"TTSummary\">The ConfigIssues that caused the invalid configuration exception.</div></div>",7500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7500\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues</td></tr></table></td><td class=\"PAfterParameters\">): Error(<span class=\"SHString\">&quot;Invalid Configuration:&quot;</span>), m_issues(issues)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidConfig object</div></div>",7501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7501\" class=\"NDPrototype NoParameterForm\">ConfigIssues issues() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the ConfigIssues that caused the invalid configuration exception.</div></div>",7502:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7502\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>",7504:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype7504\" class=\"NDPrototype NoParameterForm\">NodeAddress m_nodeAddress</div><div class=\"TTSummary\">The node address of the WirelessNode that the exception pertains to.</div></div>",7506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7506\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Error_InvalidNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">issues,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">NodeAddress&nbsp;</td><td></td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">) : Error_InvalidConfig(issues), m_nodeAddress(nodeAddress)</td></tr></table></div><div class=\"TTSummary\">Initializes the Error_InvalidNodeConfig object</div></div>",7507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype7507\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeAddress nodeAddress() <span class=\"SHKeyword\">const throw</span> ()</div><div class=\"TTSummary\">Gets the node address of the Node that this exception pertains to.</div></div>"});